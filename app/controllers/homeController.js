(function () {
    'use strict';
app.controller('homeController', ['$scope', function ($scope) {


$scope.projects = [];

$scope.projects = [{Title: "Accelerate", Description: "Something about accelerate", Thumbnail: "http://lorempixel.com/400/300/sports/1/", Nav: "accelerate"},
				   {Title: "Distraction Free Coding", Description: "Something about distration free coding", Thumbnail: "http://lorempixel.com/400/300/sports/2/", Nav: "distractionfreecoding"},
				   {Title: "Peanuts", Description: "something about Peanuts", Thumbnail: "http://lorempixel.com/400/300/sports/3/", Nav: "peanuts"},
				   {Title: "Web Design", Description: "something web design", Thumbnail: "http://lorempixel.com/400/300/sports/4/", Nav: "webdesign"},
				   {Title: "Wake Up", Description: "Wake Up", Thumbnail: "http://lorempixel.com/400/300/sports/5/", Nav: "wakeup"},
				   {Title: "Hackathon", Description: "something about hackathon", Thumbnail: "http://lorempixel.com/400/300/sports/6/", Nav: "hackathon"}];

}]);

}());