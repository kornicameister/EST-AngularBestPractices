# todo.common.log

Module shows what would be the best approach that should be taken when writing new decorator.

## log.module.js

Actual module definition. Only name and without no external dependencies.
Note how this module is built. It could be easily plugged in as a dependency to any project. Apart from <b>loggerFactory</b> which shims creating new logger instance (as defined in $log.getInstance) this module is transparent and removing it wouldn't affect the application that much/

## log.decorator.js

Decorators, if they are not adding anything new to the decorated objects, are transparent components. **log.decorator.js** allows to prepend messaged with timestamp and verbose name of the component using the logger therefore providing $log with functionality known from <b>log4j</b> for instance.

## log.factory.js

Shims <b>getInstance</b> defined in $log.
