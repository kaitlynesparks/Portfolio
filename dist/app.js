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
    "    <a class=\"navbar-brand\" ui-sref=\"home\">Kaitlyn Sparks</a>\n" +
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
    "		<strong>Duration:</strong> October 2014 - December 2014\n" +
    "		<br/><br/>\n" +
    "		<strong>Class:</strong> Interaction Design Fundamentals, CMU</p>\n" +
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
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h3>Process</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Research</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We started this project by researching the experience and needs of emergency medical staff. We read through internet blogs and articles, watched ambulance ride along videos, and interviewed an EMT.\n" +
    "		    	<blockquote>\n" +
    "  					<p>“Myself and many of my co-workers have sought grief counseling, nutrition assistance, and some have even been placed on heavy sleep medications because they never had [targeted information] available to them in a more private medium.”</p>\n" +
    "  					<small>EMT</small>\n" +
    "				</blockquote> \n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Idea Generation</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We generated concept ideas for apps and created an affinity diagram.  After that, we used sorted them into an feasibility-impact matrix.\n" +
    "		    	<br/><br/>\n" +
    "		    	Personas were provided for us.  We used these to determine which ideas to pursue.  We picked the four top choices and composed narratives about their use based on our personas. We used these narratives to make the selection for our final idea, \n" +
    "		    	<br/><br/>\n" +
    "				We also followed up with the EMT that we interviewed initially to ask additional questions to make sure our idea was useful and desirable.\n" +
    "				<br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Accelerate/ImpactFeasibilityMatrix.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Accelerate/AffinityWithPeople.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Accelerate/AffinityDiagram.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">Application Design</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				We fleshed out our idea using a navigation map.  We used this to think through the functionality of our app and the interaction that would be need to move between different screens. We also determined the appropriate depth and breadth of the navigation. We then created sketched wireframes for our main screens and placed them on our navigation map. We continued to update it as we iterated our designs.\n" +
    "				<br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Accelerate/NavigationMap.jpg\"></div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Accelerate/NavMapWithSketches.JPG\"></div>\n" +
    "					</div>	\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Accelerate/5_NavigationMap_HiFiDesigns.JPG\"></div>\n" +
    "					</div>\n" +
    "				</div>  \n" +
    "				<br/>\n" +
    "				For iterations, we did sketches, then we did digital low-fidelity mock ups. We went through multiple iterations of high-fidelity mock-ups. We originally had a color scheme and feel that was inspired by ambulances. We had red and blue as our primary colors and had straight lines. However, we later decided that we wanted a more playful and lighthearted theme. EMTs see ambulances all the time and they are likely a stressful place for them many times, so we didn't want to remind them of that. We wanted to give them an application that was enjoyable for them and would help to lift some of their stress.\n" +
    "				<br/></br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Accelerate/LowFiMockUps.png\"></div>\n" +
    "					</div>\n" +
    "				</div>		\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">Final Deliverables</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				The final deliverables for this project were completed designs, design specifications, and a final presentation.\n" +
    "				<br/></br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Accelerate/AccelerateFinalDesignsHorizontal.png\"></div>\n" +
    "					</div>\n" +
    "				</div>		\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
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
    "<div class=\"container\">\n" +
    "<h1>Distraction Free Coding</h1>\n" +
    "<h4>Research student developer problems using Contextual Design methodology.</h4>\n" +
    "<hr/>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4\">\n" +
    "        <img src=\"../images/DistractionFreeCoding/icon.png\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<p><strong>Contributions:</strong> Contextual Inquiry, Affinity Diagrams, Sequence Models, Flow Models, Visioning\n" +
    "		<br/><br/>\n" +
    "		<strong>Team Members:</strong> Holly Brosnahan, Amalya Henderson, Michael Richardson, Yueying Tang\n" +
    "		<br/><br/>\n" +
    "		<strong>Duration:</strong> October 2014 - December 2014\n" +
    "		<br/><br/>\n" +
    "		<strong>Class:</strong> User Centered Research and Evaluation, CMU </p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><strong>Assignment:</strong> This was a series of assignments designed to practice Contextual Design. The prompt was to observe student developers to see the issues that arise. Teams were then allowed to focus on improving any aspect of the student development process that they observed.\n" +
    "		<br/><br/>	\n" +
    "		<strong>Opportunity:</strong> Student developers are easily distracted when trying to do to their homework. They are required to use a lot of systems to perform their tasks, and they are provided with a variety of resources to reference to learn the material. The need to switch between systems coupled with the constant distraction from social media and friends makes it difficult for students to stay focused on their assignments.\n" +
    "		<br/><br/>\n" +
    "		<strong>Solution:</strong> A coding environment that blocks messages and provides a single environment for students to reference resources and make annotations. The program locks for a specific period of time for students to work and then provides break time where it allows messages to reach students. It also provides places to take notes that are tied to lines of code and shows resources beside code files which prevents students from having to switch between applications.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h3>Process</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Contextual Inquiry</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We began by performing contextual interviews with developers. Each team member interviewed one student for a total of 5 interviews. During interviews, we went to the location where the developers normally worked and observed them working on their own homework assignments. We took notes to use during interpretation sessions.\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Interpretation Sessions</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	During the interpretation sessions, we went through the interviews one at a time.  The interviewer read their notes aloud and the rest of the team worked on creating the flow model and the sequence model. We also created notes about interesting things, breakdowns, and design ideas that would be used later to create the affinity diagram.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/DistractionFreeCoding/SequenceModel.JPG\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/DistractionFreeCoding/FlowModel.JPG\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Affinity Diagram and Consolidated Models</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We took the notes we created during the interpretation session and grouped them to create an affinity diagram. When grouping these notes, we creating three layers of headings. The lower two are in the customer perspective. This allowed us to look back at the affinity diagram later and just reading the headings to get an idea of what was happening. We also consolidated the 5 sequences into one sequence that represented all of the users.  We did the same with the flow models to create one consolidated model.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/DistractionFreeCoding/Affinity.JPG\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/DistractionFreeCoding/ConsolidatedFlow.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/DistractionFreeCoding/ConsolidatedSequence.JPG\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Visioning</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	After consolidating the models, we began visioning. We revisited our models and affinity diagram and generated design ideas and determined the key problems we needed to address. Then we listed the technologies we had available to us to solve the problems. While looking at our models and technologies, we began visioning by sketching out possible scenarios in an improv style session with one person being the writer and the other team members speaking their ideas aloud. \n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/DistractionFreeCoding/GenerateIdeas.JPG\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/DistractionFreeCoding/Vision.JPG\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Final Deliverables</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	After we did 5 visions, we determined the ones we thought were most promising based on the information we learned about our users while generating our affinity diagram, sequence models, and flow models.  We then consolidated the visions containing those ideas to create a final idea. As a final deliverable, we presented our findings and our final idea to the class.\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "</div>");
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
    "<div class=\"container\">\n" +
    "<h1>Peanuts</h1>\n" +
    "<h4>Research to understand how reciprocity and trust can impact microcharitable giving online</h4>\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4\">\n" +
    "        <img src=\"../images/Peanuts/Icon.png\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<p><strong>Contributions:</strong> Survey Design and Analysis\n" +
    "		<br/><br/>\n" +
    "		<strong>Team Members:</strong> eff Harris, Jim Martin, Katie Ramp\n" +
    "		<br/><br/>\n" +
    "		<strong>Duration:</strong> November 2014 - December 2014\n" +
    "		<br/><br/>\n" +
    "		<strong>Class:</strong> Social Web, CMU</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><strong>Assignment:</strong> Pick any topic related to social web and explore it with design, research, and/or development.\n" +
    "		<br/><br/>	\n" +
    "		<strong>Opportunity:</strong> When people are requesting monetary help online, many requests state that the requestor has helped others in the past or plans to help others in the future as part of the description. People are giving frequently seek validation of who the requestor is and whether they are an active member of the group they are requesting in and whether they have given money in the past. However, there is no good way for requestors to prove their previous donations or for those planning to give to see that activity.\n" +
    "		<br/><br/>\n" +
    "		<strong>Solution:</strong> We wanted to build a website that would give requestors the ability to track their reciprocity. We also wanted potential donors to be able see the reciprocity of requestors. We predicted that showing reciprocity would allow donors to quickly trust requestors which would help them make quicker decisions about donating. We wanted to test the ways that reciprocity can be shown and how that impacts donors.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Literature Review and Initial Research</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We began by reading research papers on altruism, motivation, and microvoluntering. One of the papers that we read was in indepth look at the aspects of a request on the subreddit r/RAOP to determine the most effective way to write a request. From there, we noticed that there were other subreddits where people made requests for help. We analysed their requests and how potential donors responded to see common themes. After reviewing this subreddit as well as other request websites, we decided to look at how showing reciprocity impacts people’s donations.\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Literature Review and Initial Research</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We began by reading research papers on altruism, motivation, and microvoluntering. One of the papers that we read was in indepth look at the aspects of a request on the subreddit r/RAOP to determine the most effective way to write a request. From there, we noticed that there were other subreddits where people made requests for help. We analysed their requests and how potential donors responded to see common themes. After reviewing this subreddit as well as other request websites, we decided to look at how showing reciprocity impacts people’s donations.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-4 col-md-offset-2\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/survey1example.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<table class=\"table\">\n" +
    "							<tr>\n" +
    "								<th>Reciprocity Statement</th>\n" +
    "								<th>Votes</th>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>Jonathan helped Susan pay her rent last week.</td>\n" +
    "								<td>18</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>Jonathan has given to 100 people and has received donations from 50 people.</td>\n" +
    "								<td>12</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>Jonathan has given more than he has received since joining.</td>\n" +
    "								<td>11</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>Jonathan has given to about 15 causes in the past.</td>\n" +
    "								<td>11</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>Jonathan has given about twice as much as he has received.</td>\n" +
    "								<td>9</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>Jonathan gives to causes almost every week.</td>\n" +
    "								<td>8</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>Jonathan has given 150% as much as he has received.</td>\n" +
    "								<td>8</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>Jonathan has given $60 and received $40.</td>\n" +
    "								<td>6</td>\n" +
    "							</tr>\n" +
    "						</table>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Final Survey</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	After analyzing the results of the first survey and the interview responses, we decided to use the two of the top four statements to test with visuals.  We also wanted to test whether people were more likely to give to people that had given more than they had received or to people that had received more than they had given. We created a survey to test this and got 276 responses on Mechanical Turk.  We randomly showed one each Turk worker the request and then a visualization of reciprocity. We then asked how much they would donate. We also recorded the amount of time it took them to answer. The only statistically significant result that we found was that those who donated spent longer thinking about their decision and as time increases, dollar amount increased as well.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/Card_general_less.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/Card_general_more.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/Card_back_received_more.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/Card_back_given_more.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("../app/views/wakeup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/wakeup.html",
    "<h3>wake up</h3>");
}]);

angular.module("../app/views/webdesign.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/webdesign.html",
    "<div class=\"container\">\n" +
    "<h1>Personal Website</h1>\n" +
    "<h4>Design a personal website for mobile and desktop.</h4>\n" +
    "<hr/>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4\">\n" +
    "        <img src=\"../images/PersonalWebsite/icon.png\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<p><strong>Contributions:</strong> sketch wireframes, digital sketches, low fidelity mockup, high fidelity mockup\n" +
    "		<br/><br/>\n" +
    "		<strong>Tools Used:</strong> Adobe InDesign\n" +
    "		<br/><br/>\n" +
    "		<strong>Duration:</strong> August 2014 - September 2014 (2.5 weeks)\n" +
    "		<br/><br/>\n" +
    "		<strong>Class:</strong> Interaction Design Fundamentals, CMU</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><strong>Assignment:</strong> Design a personal website home page for desktop and mobile platforms. \n" +
    "		<br/><br/>	\n" +
    "		<strong>Design Overview:</strong> The focus of this design was to create a webpage and a mobile page with a cohesive look and feel across the two mediums. First, I focused on finding appropriate content for a professional, personal webpage. I chose to keep the design very simple so that all of the important elements were easy to find and consume. Additionally, to create consistency, I paid attention creating the information heirachy the same across the two screens.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h3>Process</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Sketch Wireframes</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	The first step was to determine what types of content were needed for this type of website and make sketch wireframes. While making these sketches, I focused on making the heirarchy consistent across the mobile and desktop versions of the website. I also concentrated on making the most important aspects of the website higher in the heirarchy.  I wanted it to be clearly apparent the person the website is about, the essential information about them, and how to contact them. I also wanted it to be easy to look through examples of work and see a summary about the person. I created 5 sketches of possible layouts and then picked the best ones to create a final sketch and use in furture iterations.\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/webpage_sketch1.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/webpage_sketch2.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/webpage_sketch3.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/webpage_sketch4.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/webpage_sketch5.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/webpage_sketch_final.jpg\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Digital Sketch and Low Fidelity Mock Up</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	After getting feedback from the class on the sketches, I moved to a digital sketch that was exactly the same as the final sketch.  After getting my idea into a digital version and seeing it at a more realistic size and ratio, I was able to iterate to a low fidelity black and white mock up.\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/digital_sketch.png\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/low_fidelity_mockup.png\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">High Fidelity Mock Ups</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	The next step I took was to convert the black and white mock up into a color mock up. I played with a few color schemes based on the low fidelity mock up.  However, once I added color, I realized it felt very heavy.  So I removed a lot of the color in favor of a very simple final design.\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-8 col-md-offset-2\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/high_fidelity_mockup.png\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Final Design</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	The next step I took was to convert the black and white mock up into a color mock up. I played with a few color schemes based on the low fidelity mock up.  However, once I added color, I realized it felt very heavy.  So I removed a lot of the color in favor of a very simple final design. \n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-8 col-md-offset-2\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/final_design.png\">\n" +
    "    					</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "</div>");
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

$scope.projects = [{Title: "Accelerate", Description: "Designing a mobile training application for emergency medical personnel", Thumbnail: "../images/Accelerate/Icon.png", Nav: "accelerate"},
				   {Title: "Distraction Free Coding", Description: "Research student developer problems using Contextual Design methodology", Thumbnail: "../images/DistractionFreeCoding/icon.png", Nav: "distractionfreecoding"},
				   {Title: "Peanuts", Description: "Research to understand how reciprocity and trust can impact microcharitable giving online.", Thumbnail: "../images/Peanuts/Icon.png", Nav: "peanuts"},
				   {Title: "Web Design", Description: "something web design", Thumbnail: "../images/PersonalWebsite/icon.png", Nav: "webdesign"},
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