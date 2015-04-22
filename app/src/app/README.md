# app/src/app

Contains source files defining a **view** of the application.

Note that at this level application has been being designed using functionality approach.
Therefore this folder defined functionality for app itself. Entire common-like features are not defined here.

# What should be here ?

This part of the application is a right place to put following artifacts:

* states
* their controllers
* some shared components [i.e. directives defining header, footer for instance]
* some sub-app[module] specific services or factories, for instance let's think about controller for very complex view.\
Since controllers are designed and it should be forced to be lean, we ought to push some non-naive logic into such service
and call it from the controllers. In the same tone, DOM manipulation should be part of a directive.
