# Logger (version 0.0.1)
Extracted from [artfable/backbone-improvement](https://github.com/artfable/backbone-improvement)
 
Simple wrapper for console, can be used without any dependencies. Can be used safely in IE.
Set common logger to `window.logger`. For create named logger use `new Logger(name)`.

### constructor `new Logger([name] [, level])` *default: name = 'common', level = 'info'*
Create named logger.

### applyLogLevel `applyLogLevel(level [, name])`
Set a level for logs (levels are the same as in `window.console`).

**Example:**

	window.logger.applyLogLevel('debug');
