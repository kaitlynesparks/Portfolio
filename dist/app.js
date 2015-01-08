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
});;angular.module('templates-dist', ['../app/templates/accelerate_carousel.html', '../app/templates/footer.html', '../app/templates/nav.html', '../app/views/about.html', '../app/views/accelerate.html', '../app/views/contact.html', '../app/views/distractionfreecoding.html', '../app/views/hackathon.html', '../app/views/home.html', '../app/views/peanuts.html', '../app/views/wakeup.html', '../app/views/webdesign.html']);

angular.module("../app/templates/accelerate_carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/accelerate_carousel.html",
    "<link href=\"../Content/accelerate_carousel.css\" rel=\"stylesheet\" />\n" +
    "<div id=\"thumbnail-preview-indicators\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "          <!-- Indicators -->\n" +
    "          <ol class=\"carousel-indicators\">\n" +
    "            <li data-target=\"#thumbnail-preview-indicators\" data-slide-to=\"0\" class=\"active\">\n" +
    "              <div class=\"thumbnail\">\n" +
    "                <img class=\"img-responsive\" src=\"https://s3.amazonaws.com/ooomf-com-files/wdXqHcTwSTmLuKOGz92L_Landscape.jpg\">\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li data-target=\"#thumbnail-preview-indicators\" data-slide-to=\"1\">\n" +
    "            <div class=\"thumbnail\">\n" +
    "                <img class=\"img-responsive\" src=\"https://s3.amazonaws.com/ooomf-com-files/tU3ptNgGSP6U2fE67Gvy_SYDNEY-162.jpg\">\n" +
    "              </div>\n" +
    "            </li>\n" +
    "            <li data-target=\"#thumbnail-preview-indicators\" data-slide-to=\"2\">\n" +
    "            <div class=\"thumbnail\">\n" +
    "                <img class=\"img-responsive\" src=\"https://s3.amazonaws.com/ooomf-com-files/mtNrf7oxS4uSxTzMBWfQ_DSC_0043.jpg\">\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ol>\n" +
    "          <div class=\"carousel-inner\">\n" +
    "            <div class=\"item slides active\">\n" +
    "              <div class=\"slide-1\"></div>\n" +
    "              <div class=\"container\">\n" +
    "                <div class=\"carousel-caption\">\n" +
    "                  <h1>New carousel layout</h1>\n" +
    "                  <p>Responsive thumbnail preview in carousel indicators.</p>\n" +
    "                  <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Sign up today</a></p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"item slides\">\n" +
    "              <div class=\"slide-2\"></div>\n" +
    "              <div class=\"container\">\n" +
    "                <div class=\"carousel-caption\">\n" +
    "                  <h1>Another example headline.</h1>\n" +
    "                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>\n" +
    "                  <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"item slides\">\n" +
    "              <div class=\"slide-3\"></div>\n" +
    "              <div class=\"container\">\n" +
    "                <div class=\"carousel-caption\">\n" +
    "                  <h1>One more for good measure.</h1>\n" +
    "                  <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n" +
    "                  <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <a class=\"left carousel-control\" href=\"#thumbnail-preview-indicators\" role=\"button\" data-slide=\"prev\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
    "          <a class=\"right carousel-control\" href=\"#thumbnail-preview-indicators\" role=\"button\" data-slide=\"next\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
    "      </div> ");
}]);

angular.module("../app/templates/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/footer.html",
    "<br/>\n" +
    "<div id=\"footer\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row row-centered\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <p style=\"margin-top: 15px\">\n" +
    "                    <a ui-sref=\"home\" style=\"font-weight: bold\">Home</a>&emsp;\n" +
    "\n" +
    "                    <a ui-sref=\"about\" style=\"font-weight: bold\">About</a>&emsp;\n" +
    "                    \n" +
    "                    <a ui-sref=\"contact\" style=\"font-weight: bold\">Contact Me</a>\n" +
    "                    <br>\n" +
    "                    <span style=\"font-size: 10px; color: black; font-family: sans-serif; \" dir=\"ltr\">Powered By;</span>\n" +
    "                    <a href=\"https://angularjs.org/\" style=\"font-size: 13px\">AngularJS</a>\n" +
    "                    <span style=\"font-size: 10px; color: black; font-family: sans-serif; \" dir=\"ltr\">\n" +
    "                    and </a>\n" +
    "                    <a href=\"http://getbootstrap.com/\" style=\"font-size: 13px\">Boostrap</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../app/templates/nav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/nav.html",
    "<div class=\"navbar navbar-default navbar-fixed-top\" data-ng-controller=\"indexController\">\n" +
    "  <div class=\"navbar-header\">\n" +
    "    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "    </button>\n" +
    "    <a class=\"navbar-brand\" ui-sref=\"home\">Kaitly Sparks</a>\n" +
    "  </div>\n" +
    "  <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n" +
    "    <ul class=\"nav navbar-nav navbar-right\">\n" +
    "      <li><a ui-sref=\"about\">About</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Projects<b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a ui-sref=\"accelerate\">Accelerate</a></li>\n" +
    "          <li><a ui-sref=\"distractionfreecoding\">Distraction Free Coding</a></li>\n" +
    "          <li><a ui-sref=\"peanuts\">Peanuts</a></li>\n" +
    "          <li><a ui-sref=\"webdesign\">Web Design</a></li>\n" +
    "          <li><a ui-sref=\"wakeup\">Wake Up</a></li>\n" +
    "          <li><a ui-sref=\"hackathon\">Hackathon</a></li>         \n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>&emsp;</li>\n" +
    "    </ul>\n" +
    "    \n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("../app/views/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/about.html",
    "<div class=\"jumbotron\">\n" +
    "  <div class=\"container\">\n" +
    "    <ul class=\"media-list\">\n" +
    "      <li class=\"media\">\n" +
    "        <a class=\"media-left\" href=\"#\">\n" +
    "            <img src=\"http://az679163.vo.msecnd.net/public/social-media-logos.png\" alt=\"Your Breaking content is valuable\" style=\"height:150px; width: 150px\">\n" +
    "        </a>\n" +
    "        <div class=\"media-body\">\n" +
    "          \n" +
    "          <h4 class=\"media-heading\">About</h4>\n" +
    "          Bacon ipsum dolor amet andouille brisket kielbasa cupim, prosciutto short loin filet mignon fatback ham shoulder rump ground round turducken shankle. Turducken jowl spare ribs hamburger chuck, ham rump meatball t-bone strip steak tail meatloaf. Pork loin sausage venison turducken strip steak. Jowl tri-tip short ribs pastrami t-bone pork belly pork loin doner salami ribeye shankle.\n" +
    "        \n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "<h3>Skills:</h3>\n" +
    "\n" +
    "<div class=\"well\">\n" +
    "  C#:\n" +
    "  <div class=\"progress progress-striped active\">\n" +
    "    <div class=\"progress-bar\" style=\"width: 85%\"></div>\n" +
    "  </div>\n" +
    "  Java:\n" +
    "  <div class=\"progress progress-striped active\">\n" +
    "    <div class=\"progress-bar\" style=\"width: 100%\"></div>\n" +
    "  </div>\n" +
    "  HTML 5:\n" +
    "  <div class=\"progress progress-striped active\">\n" +
    "    <div class=\"progress-bar\" style=\"width: 80%\"></div>\n" +
    "  </div>\n" +
    "  Javascript:\n" +
    "  <div class=\"progress progress-striped active\">\n" +
    "    <div class=\"progress-bar progress-bar-danger\" style=\"width: 20%\"></div>\n" +
    "  </div>\n" +
    "  Android:\n" +
    "  <div class=\"progress progress-striped active\">\n" +
    "    <div class=\"progress-bar\" style=\"width: 90%\"></div>\n" +
    "  </div>\n" +
    "   iPhone:\n" +
    "  <div class=\"progress progress-striped active\">\n" +
    "    <div class=\"progress-bar\" style=\"width: 70%\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("../app/views/accelerate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/accelerate.html",
    "<div class=\"container\">\n" +
    "<h1>Accelerate</h1>\n" +
    "<h4>A mobile training application for emergency medical personnel.</h4>\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4\">\n" +
    "        <img src=\"../images/Accelerate/Icon.png\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<p><strong>Contributions:</strong> Affinity Diagrams, Narratives, Navigation Maps, Wireframes, Low-Fidelity Mockups, High-Fidelity Mockups\n" +
    "		<br/><br/>\n" +
    "		<strong>Tools Used:</strong> Adobe Illustrator, Adobe InDesign\n" +
    "		<br/><br/>\n" +
    "		<strong>Team Members:</strong> Jay Lui, Nicole Navolio, Leticia Patricio\n" +
    "		<br/><br/>\n" +
    "		<strong>Duration:</strong> October 2014 - December 2014</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><strong>Assignment:</strong> Conceive of an original mobile service that provides tools and/or information to an ambulance driver accessing information while on the job.\n" +
    "		<br/><br/>	\n" +
    "		<strong>Opportunity:</strong> EMS workers have a uniquely stressful job and do not have a lot of opportunity or encouragement to learn life skills or additional job skills. However, they have a lot of downtime that can be used more effectively.\n" +
    "		<br/><br/>\n" +
    "		<strong>Solution:</strong> An app that provides facts about topics such as mental health, nutrition, and driving skills. Leaders can set up friendly competitions about the facts for members of the squad. This promotes team bonding and provides visibility of hard work to management.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"container\">\n" +
    "			<div ng-include src=\"'../app/templates/accelerate_carousel.html'\"></div>\n" +
    "		</div>	\n" +
    "	</div>	\n" +
    "</div>\n" +
    "<img src=\"../images/Accelerate/Accelerate Final Designs.png\" style=\"width: 800px;\">\n" +
    "</div>");
}]);

angular.module("../app/views/contact.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/contact.html",
    "<link href=\"../Content/contact.css\" rel=\"stylesheet\" />\n" +
    "<link href=\"../Content/font-awesome-4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"container\">\n" +
    "              <br/>\n" +
    "              <div class=\"panel panel-default\">\n" +
    "                <div class=\"panel-body\">\n" +
    "                  Thanks for reviewing my site, feel free to contact me at any of my networks below.\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-4\">\n" +
    "              <div class=\"container\">\n" +
    "                  <div class=\"text-center center-block\">\n" +
    "\n" +
    "                        <a href=\"https://www.facebook.com/kaitlyn.sparks.98\"><i id=\"social\" class=\"fa fa-facebook-square fa-3x social-fb\"></i></a>\n" +
    "\n" +
    "                        <a href=\"https://twitter.com/KaitlynSparks\"><i id=\"social\" class=\"fa fa-twitter-square fa-3x social-tw\"></i></a>\n" +
    "\n" +
    "                        <a href=\"https://plus.google.com/u/0/106201679513041750453/posts\"><i id=\"social\" class=\"fa fa-google-plus-square fa-3x social-gp\"></i></a>\n" +
    "\n" +
    "                        <a href=\"https://www.linkedin.com/profile/view?id=123380350&authType=NAME_SEARCH&authToken=cGN9&locale=en_US&trk=tyah2&trkInfo=tarId%3A1420257371304%2Ctas%3Akaitlyn%2Cidx%3A1-1-1\"><i id=\"social\" class=\"fa fa-linkedin-square fa-3x social-li\"></i></a>\n" +
    "                        \n" +
    "                        <a href=\"mailto:kaitlynesparks@gmail.com\"><i id=\"social\" class=\"fa fa-envelope-square fa-3x social-em\"></i></a>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/views/distractionfreecoding.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/distractionfreecoding.html",
    "<h3>Distraction Free Coding</h3>");
}]);

angular.module("../app/views/hackathon.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/hackathon.html",
    "<h3>Hackathon</h3>");
}]);

angular.module("../app/views/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/home.html",
    "<link href=\"../Content/home.css\" rel=\"stylesheet\" />\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "  <div class=\"jumbotron\">\n" +
    "    <h1>Kaitlyn Sparks</h1>\n" +
    "    <p>Your next human compuater interaction expert?!?!</p>\n" +
    "    <p><a class=\"btn btn-primary btn-lg\" ui-sref=\"about\">Learn more</a></p>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div class=\"container\">\n" +
    "    \n" +
    "      <div class=\"row\">\n" +
    "        \n" +
    "        <div data-ng-repeat=\"project in projects\">\n" +
    "\n" +
    "          <div class=\"col-xs-12 col-sm-6 col-md-4\">            \n" +
    "              <div class=\"thumbnail\">\n" +
    "                  <div class=\"caption\">\n" +
    "                      <h4>{{project.Title}}</h4>\n" +
    "                      <p>{{project.Description}}</p>\n" +
    "                      <p>\n" +
    "                      <a ui-sref=\"{{project.Nav}}\" class=\"label label-default\">Learn More</a></p>\n" +
    "                  </div>\n" +
    "                  <img src=\"{{project.Thumbnail}}\" alt=\"...\">\n" +
    "              </div>\n" +
    "          </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("../app/views/peanuts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/peanuts.html",
    "<h3>peanuts</h3>");
}]);

angular.module("../app/views/wakeup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/wakeup.html",
    "<h3>wake up</h3>");
}]);

angular.module("../app/views/webdesign.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/webdesign.html",
    "<h3>web design</h3>");
}]);
;(function () {
    'use strict';
app.controller('aboutController', ['$scope', function ($scope) {

    

}]);

}());;(function () {
    'use strict';
app.controller('accelerateController', ['$scope', function ($scope) {

    

}]);

}());;(function () {
    'use strict';
app.controller('contactController', ['$scope', function ($scope) {

    

}]);

}());;(function () {
    'use strict';
app.controller('distractionfreecodingController', ['$scope', function ($scope) {

    

}]);

}());;(function () {
    'use strict';
app.controller('hackathonController', ['$scope', function ($scope) {

    

}]);

}());;(function () {
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

}());;(function () {
    'use strict';
app.controller('indexController', ['$scope', function ($scope) {

    

}]);

}());;(function () {
    'use strict';
app.controller('peanutsController', ['$scope', function ($scope) {

    

}]);

}());;(function () {
    'use strict';
app.controller('wakeupController', ['$scope', function ($scope) {

    

}]);

}());;(function () {
    'use strict';
app.controller('webdesignController', ['$scope', function ($scope) {

    

}]);

}());