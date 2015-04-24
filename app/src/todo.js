/*
 Best practice hint...

 Always come up with the name of your module that is most likely unique.
 It is very important because an application uses multiple libraries that
 are specified as dependencies, thus it would be very inappropriate to override this.

 For sub modules follow dot notation. Take a look at the module definition below.
 A root has two dependencies ( _ at the begining is for IDE so as to keep it from highlighting it as task to be done ) :
 - _todo.app
 - _todo.common

 Therefore we clearly define that our application is in fact combined from two 2nd level modules.
 Clear...consistent approach...

 Follow this pattern and think about it as top-down design...an application is combined out of many parts where
 each one can be located under a common namespace - the root.

 */
angular
    .module('todo', [
        'todo.app',
        'todo.common'
    ])
    .constant('todoVersion', '0.0.1')
    .run(function (todoVersion) {
        console.log('todo application is running in version > ' + todoVersion)
    });
