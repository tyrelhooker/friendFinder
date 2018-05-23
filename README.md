# friendFinder
### AKA Man's Best-Friend Finder

By: T.J. Hooker

Date: May 23, 2018

### Overview

This is a compatibility-based "FriendFinder" application. It is similar to a dating app where the user answers 10 scientifically tested questions to match up with a friend. However, instead of a "friend" the user is trying to match up with a dog breed. 

### Tech Used
* JavaScript
* jQuery
* Bootstrap
* node.js
* express
* body-parser
* path
* Heroku

### HOW IT WORKS

There are two pages to the app: a home page and a survey page. The survey page takes in results from the user's (human) survey, then compares the user's answers with those from previously entered dog breeds. The app will then display the name and picture of the dog breed with the best overall match with the user's answers. 

The dog breeds are held in an array of objects in the friends.js file and marked as 'dog'. When each user's results is added to the array, the user's survey answers are coded to identify them as human entries. When subsequent user's use the app, the previous user's should not match with the current user. 

The app uses Express to handle routing to html routes and api routes. The app is deployed to Heroku so other users can fill it out.
