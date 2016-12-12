Team Random Number Guess
========================

Technologies:
* Node.js
* Express
* JQuery
* Bootstrap
* HTML/CSS

Overview
========
The final version of this project will have two modes:
* [x] setup mode
* [x] play mode

Setup Mode
----------
Inputs on the web page:
* [x] Maximum Number selector (at least 3 options)
* [x] Start Game button

Play Mode
---------
* [x] Input for a guess for each of the four Players
* [x] submit guesses button
* [x] total guesses made indicator
* [x] maximum number indicator
* [x] details area for the last guess of each player (low/high)
* [x] "abandon game" button that goes back to setup mode

if a guess is correct
---------------------

* [x] PROMINENTLY Display which player won (make 'em FEEL it)
* [x] restart button that leads to Setup Mode

Necessary Ingredients
=====================
AKA Client Demands...

* [x] All random number stuff should happen on the server. Generation of the random number upon game start as well as comparisons between guesses and the random correct answer.

* [x] Take a moment to discuss with your team members why this is something that a client may demand.  

* [x] Once you get it working, style it up, yo!


Stretch Goals
=============
If you've got time and bandwidth, why not add some special sauce?


* disallow two users two submit the same guess at the same time
* disallow any guess to be entered more than once
* disallow guesses less than 0 and higher than max
* hot/cold indicators (how can these be styled?, can the "hot/cold range" be adjusted for the size of the maximum number?)
* allow the choice of number of users
* allow users to create "profiles" that can include their name and also how many matches they have played/won (win percentage)
* add a "bot" player that guesses a random number each time in addition to the players (this bot should really talk trash when it beats a bunch of humans)
* what are your ideas? Have some fun with it
