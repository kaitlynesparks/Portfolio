var app = angular.module('myapp', ['ui.router', 'LocalStorageModule', 'angular-loading-bar','templates-dist']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "../app/views/home.html",
            controller: "homeController"
        })
        
        .state('about', {
            url: "/about",
            templateUrl: "../app/views/about.html",
            controller: "aboutController"
        })
        .state('contact', {
            url: "/contat",
            templateUrl: "../app/views/contact.html",
            controller: "contactController"
        })
        .state('accelerate', {
            url: "/accelerate",
            templateUrl: "../app/views/accelerate.html",
            controller: "accelerateController"
        })
        .state('peanuts', {
            url: "/peanuts",
            templateUrl: "../app/views/peanuts.html",
            controller: "peanutsController"
        })
        .state('webdesign', {
            url: "/webdesign",
            templateUrl: "../app/views/webdesign.html",
            controller: "webdesignController"
        })
        .state('wakeup', {
            url: "/wakeup",
            templateUrl: "../app/views/wakeup.html",
            controller: "wakeupController"
        })
        .state('hackathon', {
            url: "/hackathon",
            templateUrl: "../app/views/hackathon.html",
            controller: "hackathonController"
        })
        .state('distractionfreecoding', {
            url: "/distractionfreecoding",
            templateUrl: "../app/views/distractionfreecoding.html",
            controller: "distractionfreecodingController"
        });
});