(function () {
    'use strict';
app.controller('indexController', ['$scope', function ($scope) {


  $(window).scroll(function() {

    if ($(document).scrollTop() > 1) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });


}]);

}());