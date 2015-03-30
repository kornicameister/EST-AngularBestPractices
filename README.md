***EST-Angular Best Practices Overview***

#Directory explanation

Overview for the directories located inside this repository

##src
Contains all source files that define the application.
You will find there:

* modules
* controllers
* directives
* filters
* services and factories

Corresponding **gulp** task can be found under: [./gulp-task/scripts.js](./gulp-tasks/script.js)

##test
All test source files will be located here.
Naming convention is as follow

    {file_to_test}.Spec.js

##gulp-task
This training follows the convention where gulp tasks
are located in the external directory and exported as functions.
Thanks to that it is easier to maintain such tasks and keep
track of concrete [tasks](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

#gulpfile.js

[gulpfile.js](./gulpfile.js) tasks list
* **scripts** - build src files of the application
* **styles** - build styles [less] of the application
* **index** - build index.html of the application
* **server** - starts node based server which offers REST API
* **browser-sync** - start browser sync, opens new tab in browser and runs client
* **watch** - trigger watchers for specific parts and recompiles them if changes

#Reference
* [AngularJS Best Practies: Directory Structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)

#NPM/Bower proxy issues

* Bower: http://bower.io/docs/config/#proxy
* NPM: http://jjasonclark.com/how-to-setup-node-behind-web-proxy
