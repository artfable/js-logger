/**
 * LICENSE https://raw.githubusercontent.com/artfable/backbone-improvement/master/LICENSE
 * @author artfable
 * 20.09.15
 */

/**
 * Levels are the same as for the usual console.
 */
class Logger {
	constructor(name, level) {
		level = level ? level : 'info';
		name = name ? name : 'common';
		this._name = name;
		this.applyLogLevel(level);
	}

	print(msg, level) {
		if (typeof msg === 'string') {
			msg = '[' + this._name + '] ' + msg;
		}
		if (level.id <= Logger.prototype._loggersLevels[this._name].id) {
			if (console[level.name]) {
				console[level.name](msg);
			}
		}
	}

	error(msg) {
		this.print(msg, this._levels.error);
	}

	warn(msg) {
		this.print(msg, this._levels.warning);
	}

	info(msg) {
		this.print(msg, this._levels.info);
	}

	log(msg) {
		this.print(msg, this._levels.log);
	}

	debug(msg) {
		this.print(msg, this._levels.debug);
	}

	trace(msg) {
		this.print(msg, this._levels.trace);
	}


	applyLogLevel(logLevel, name) {
		name = name ? name : this._name;
		if (window.console === undefined) {
			// in case if MS still has that problem
			Logger.prototype._loggersLevels[name] = {id: 0, name: 'off'};
			return;
		}
		if (logLevel) {
			Logger.prototype._loggersLevels[name] = Logger.prototype._levels[logLevel];
			if (Logger.prototype._loggersLevels[name]) {
				this.log('log level for "' + name + '" set to "' + logLevel + '"');
			} else {
				Logger.prototype._loggersLevels[name] = Logger.prototype._levels.info;
				logger.error('invalid log level "' + logLevel + '", set to "' + Logger.prototype._levels.info.name + '"');
			}
		}
	}
}

Logger.prototype._loggersLevels = {};

Logger.prototype._levels = {
	error: {id: 1, name: 'error'},
	warning: {id: 2, name: 'warn'},
	info: {id: 3, name: 'info'},
	log: {id: 4, name: 'log'},
	debug: {id: 5, name: 'debug'},
	trace: {id: 6, name: 'trace'}
};

export let commonLogger = new Logger();
export default Logger;
