# General notes

* have the view chunks ready in seperate location to show them to participants, thus move the learning curve to actual problem, which is using Angular and not writing views
* always start next chapter with already created files to speed things up
** empty services, factories and so on are in order
** show them to participants and walk through the purpose and possible cases

# C1

## Start points

C1 starts with the application where we have:

* feature based structure
* build tools / build configuration
* placeholders, startpoints for the module

## Goals

Goal of C1 is to create:

* two views [ display all todos as table, use own directive to do so, will be created later]
* generic view to:
  * display single todo
  * create it
  * delete it

   Participant will get a walk through the best practices for creating ui-router based single page application.
   Following items will be learned:

   * how to structure views
   * how to properly resolve view data [attached controller of resolve]
   * when to use data and when to use resolve
   * what's the purpose of an abstract states and how to leverage them to create common base for all states
   * how to create single state [as javascript file] and use following features
     * path matching to get some part of the URL and use it to provide different data, different controllers and so on
     
   
   Remember to provide otherwiseUrl for application

### Notes for me

* keep the url pattern close to show it to participants
* describe topic of abstract states closely
* talk about using bindToController and controller: angular.noop closer
  * show the cases when using own controller may be an overhead and bindToController is sufficient

# C2

   After C1 is completed the C2 is all about working with services and factories.
   In order to speed things up explain all the participants how to use json directive to show their data in the view
   if such need would be presented.

Goals for C2 are as follow:

* acknowledge participants with services, factories
* create a service/factory implementing CRUD functionality for TODO
  * start clean with an consistent API and exposing **C*reate, **R**ead, **U**pdate, **D**elete methods
  * keep in mind to describe how to use prepared backend simulating persistent storage over localstorage

* create a service with following methods
 * list completed
 * delete completed

# C3

This chapter is view related and pretty much the most broad one. Will cover
creating the view templates, attaching them to the states along with the data
and of course the controllers

Please note that choosing the template, controller as well as the data
should be done within the single generic state.

Assume following model of the todo:
* message [max_length=100]
* completed [boolean]
* created_at [Date]

General requirements:
* use **resolve** of the state

## Create

* will display a form with two actions
 * submit > will persist the todo in backend
 * reset > will clear the form
* following fields should be visible
 * message
* field should be validated
* rest of the fields should be hidden using ng-if

  Generally speaking this view incorporates creating a form as well.

## Edit

* pretty much the same as previous and since we are using the same view as before
following modifications should be applied here
 * visible fields: message, completed
 * in controller we are updating all three fields of the model keeping attention
 that this is actually an edit

## Delete

* validating if the todo can be deleted, if so showing view with delete button,
if not, showing appropriate message

## List

* listing all todos [decide with participants about the format]
* adding actions [complete, delete]
 * delete > go to delete view
 * edit > go to edit view
* actions should be defined in the controller
* each action should process any todo from the set

There should be also one additional button to go to create view

# C4

## Directive

* directive should produce table with all todos
* directive should add following actions to each row
 * delete > should redirect to the delete view
 * complete > should simply update the state of an object in the backend
* all actions should be controller from the controller

## Filter

* create a filter that will accept a todo and filter againts completed value
* extend the directive to accept filtering
* generally speaking filter should wrap boolean based filtering for ng-repaat