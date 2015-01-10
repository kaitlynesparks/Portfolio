(function () {
    'use strict';
app.controller('homeController', ['$scope', function ($scope) {


$scope.projects = [];

$scope.projects = [{Title: "Accelerate", Description: "A project to design a mobile training application for emergency medical personnel", Thumbnail: "../images/Accelerate/Icon.png", Nav: "accelerate", ProjectType:"Design"},
				   {Title: "Distraction Free Coding", Description: "Research student developer problems using Contextual Design methodology", Thumbnail: "../images/DistractionFreeCoding/icon.png", Nav: "distractionfreecoding", ProjectType:"Research"},
				   {Title: "Peanuts", Description: "Research to understand how reciprocity and trust can impact microcharitable giving online", Thumbnail: "../images/Peanuts/Icon.png", Nav: "peanuts", ProjectType:"Research"},
				   {Title: "Personal Website Design", Description: "Design a personal website for mobile and desktop", Thumbnail: "../images/PersonalWebsite/icon.png", Nav: "webdesign", ProjectType: "Design"},
				   {Title: "Wake Up", Description: "Development of an Android application that gives the weather and bus information when an alarm goes off", Thumbnail: "../images/WakeUp/icon.jpg", Nav: "wakeup", ProjectType: "Development"},
				   {Title: "Hackathons and Challenges", Description: "I competed in a hackathon and a challenge to learn new technologies and practice my existing development skills", Thumbnail: "../images/Hackathons/icon.jpg", Nav: "hackathon", ProjectType: "Development"}];

}]);

}());