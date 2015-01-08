﻿(function () {
    'use strict';
app.controller('homeController', ['$scope', function ($scope) {


$scope.projects = [];

$scope.projects = [{Title: "Accelerate", Description: "Designing a mobile training application for emergency medical personnel", Thumbnail: "../images/Accelerate/Icon.png", Nav: "accelerate"},
				   {Title: "Distraction Free Coding", Description: "Research student developer problems using Contextual Design methodology", Thumbnail: "../images/DistractionFreeCoding/icon.png", Nav: "distractionfreecoding"},
				   {Title: "Peanuts", Description: "Research to understand how reciprocity and trust can impact microcharitable giving online.", Thumbnail: "../images/Peanuts/Icon.png", Nav: "peanuts"},
				   {Title: "Web Design", Description: "something web design", Thumbnail: "../images/PersonalWebsite/icon.png", Nav: "webdesign"},
				   {Title: "Wake Up", Description: "Wake Up", Thumbnail: "http://lorempixel.com/400/300/sports/5/", Nav: "wakeup"},
				   {Title: "Hackathon", Description: "something about hackathon", Thumbnail: "http://lorempixel.com/400/300/sports/6/", Nav: "hackathon"}];

}]);

}());