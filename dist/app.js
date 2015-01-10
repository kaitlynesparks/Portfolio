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
        .state('resume', {
            url: "/resume",
            templateUrl: "../app/views/resume.html",
            controller: "resumeController"
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
});;angular.module('templates-dist', ['../app/templates/accelerate_carousel.html', '../app/templates/footer.html', '../app/templates/nav.html', '../app/views/about.html', '../app/views/accelerate.html', '../app/views/contact.html', '../app/views/distractionfreecoding.html', '../app/views/hackathon.html', '../app/views/home.html', '../app/views/peanuts.html', '../app/views/resume.html', '../app/views/wakeup.html', '../app/views/webdesign.html']);

angular.module("../app/templates/accelerate_carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/accelerate_carousel.html",
    "<link href=\"../Content/accelerate_carousel.css\" rel=\"stylesheet\" />\n" +
    "<div id=\"thumbnail-preview-indicators\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "          <!-- Indicators -->\n" +
    "          <ol class=\"carousel-indicators\">\n" +
    "            <li data-target=\"#thumbnail-preview-indicators\" data-slide-to=\"0\" class=\"active\">\n" +
    "              <div class=\"thumbnail\">\n" +
    "                <img class=\"img-responsive\" src=\"../images/Accelerate/Screens/Accelerate_Screen1_Login.png\">\n" +
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
    "      <li><a ui-sref=\"resume\">Resume</a></li>\n" +
    "      <li class=\"dropdown\">\n" +
    "        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Projects<b class=\"caret\"></b></a>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "          <li><a ui-sref=\"accelerate\">Accelerate</a></li>\n" +
    "          <li><a ui-sref=\"distractionfreecoding\">Distraction Free Coding</a></li>\n" +
    "          <li><a ui-sref=\"peanuts\">Peanuts</a></li>\n" +
    "          <li><a ui-sref=\"webdesign\">Personal Website Design</a></li>\n" +
    "          <li><a ui-sref=\"wakeup\">Wake Up</a></li>\n" +
    "          <li><a ui-sref=\"hackathon\">Hackathons and Challenges</a></li>         \n" +
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
    "<div class= \"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <h1>About Me</h1>\n" +
    "  </div>\n" +
    "  <div class = \"col col-md-8 col-md-offset-2\">\n" +
    "    <div class=\"row\">\n" +
    "      <h3>Get to know me professionally</h3>\n" +
    "      <span class=\"about-text\">I went to Vanderbilt and double majored in psychology and computer science. I grew up in a rural community and didn't know much about the job market, but I knew I cared about solving complex problems for people, so I chose these two majors hoping to someday combine them. After I graduated, I worked at as a program manager and a developer. Then I found Human-Computer Interaction and knew that's what I wanted to study. So, I went to CMU to pursue my Masters in HCI. </span>\n" +
    "      <br/><br/>\n" +
    "      <span class=\"about-text\">My passion is to figure out complicated systems and understand how to make them simple for users. I also enjoy learning about people's motivations for what they do; I think that's key to knowing what to design for them and also for working harmoniously with others. Having studied computer science, psychology, and now HCI, I have a wide range of knowledge that helps me to work well in diverse teams.</span>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <h3>Get to know me personally</h3>\n" +
    "      <span class=\"about-text\">I am originally from a small town in south Georgia called Vidalia. It is home to the famous Vidalia sweet onion. In high school I played softball, tennis, and did competitive cheerleading. I moved to Nashville for college and lived there for a few years after graduation. I was a cheerleader at Vanderbilt cheering for men's and women's basketball and football. I love sports, especially SEC football and Atlanta Braves baseball! I also really like dogs, sweet tea, diet coke, and outdoor activities. </span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/views/accelerate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/accelerate.html",
    "<link href=\"../Content/accelerate.css\" rel=\"stylesheet\" />\n" +
    "\n" +
    "<!--Header-->\n" +
    "<div class=\"container\">	\n" +
    "<h1>Accelerate</h1>\n" +
    "<h4>A project to design a mobile training application for emergency medical personnel</h4>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Meta data -->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4\">\n" +
    "        <img src=\"../images/Accelerate/Icon.png\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<p><span class=\"category\">Project Type:</span> Design\n" +
    "		<br/><br/>	\n" +
    "		<span class=\"category\">Contributions:</span> Affinity Diagrams, Narratives, Navigation Maps, Wireframes, Low-Fidelity Mockups, High-Fidelity Mockups\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Team Members:</span> Jay Lui, Nicole Navolio, Leticia Patricio\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Duration:</span> October 2014 - December 2014\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Class:</span> Interaction Design Fundamentals, CMU</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--About Project -->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><span class=\"category\">Assignment:</span> Conceive of an original mobile application that provides tools and/or information to an ambulance driver accessing the application while on the job.\n" +
    "		<br/><br/>	\n" +
    "		<span class=\"category\">Opportunity:</span> EMS workers have a uniquely stressful job and do not have a lot of opportunity or encouragement to learn life skills or additional job skills. However, they have a lot of downtime that can be used more effectively.\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Solution:</span> An application that provides facts about topics such as mental health, nutrition, and driving skills. Leaders can set up friendly competitions about the facts for members of the squad. This promotes team bonding and provides visibility of hard work to management.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Process Header -->\n" +
    "<div class=\"row process\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h3><span class=\"category\">Process</span></h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Research -->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Research</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We started this project by researching the experience and needs of emergency medical staff. We read through internet blogs and articles, watched ambulance ride along videos, and interviewed an EMT to get an understanding of the life and work circumstances for a professional in the emergency medical services field.\n" +
    "		    	<blockquote>\n" +
    "  					<p>“Myself and many of my co-workers have sought grief counseling, nutrition assistance, and some have even been placed on heavy sleep medications because they never had [targeted information] available to them in a more private medium.”</p>\n" +
    "  					<small>EMT</small>\n" +
    "				</blockquote> \n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Idea Generation -->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Idea Generation</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We generated concept ideas for apps and created an affinity diagram. The process of creating the affinity diagram allowed us to talk about the ideas as a team, and we later used the affinity diagram to to see ideas that we could combine into cohesive, larger concepts. After that, we sorted them into an feasibility-impact matrix showing the potential usefulness of the application against the difficulty of creating it. Personas were provided for us, and we used these to determine which ideas to pursue. We picked our top four choices and composed narratives about their use based on our personas. We used these narratives to make the selection for our final idea. We also followed up with the EMT that we interviewed initially to ask additional questions to make sure our idea was useful and desirable.\n" +
    "				<br/><br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<img src=\"../images/Accelerate/AffinityDiagram.jpg\" class=\"img-responsive\" >\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						We generated 50 design ideas then came together as a team to discuss them and create an affinity diagram that showed potential larger concepts.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<img src=\"../images/Accelerate/ImpactFeasibilityWithPeople.jpg\" class=\"img-responsive\" >\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						We worked as a team talking through our design ideas to determine the impact and feasibility of each idea.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<img src=\"../images/Accelerate/ImpactFeasibilityMatrix.jpg\" class=\"img-responsive\" >\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						Our final impact-feasibility matrix, along with our personas and larger concepts from our affinity diagram, was used to narrow down the ideas worth pursuing further.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Application Design -->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">Application Design</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				We fleshed out our idea using a navigation map, which we used this to think through the functionality of our app and the interaction that would be need to move between different functions. Through our navigation map, we were able to quickly analyze the breadth and depth of our application. We initially created it using screen names. As we progressed through our design process, we maintained our navigation map and kept checking that breadth and depth was appropriate. In updating, we also replaced key screen with sketches, low-fidelity mockups, and high-fidelity mockups. This was helpful for us because it was natural for the complexity of our application to increase as we thought about it more; however, we wanted to keep it simple. Using the navigation map, we were able to see when we needed to reconsider features and scale back.\n" +
    "				<br/><br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/Accelerate/NavigationMap.jpg\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						As a team, we created a navigation map with screen names to help us see the full picture of the functionality of our application.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-8\">\n" +
    "						<img src=\"../images/Accelerate/NavMapWithSketches.JPG\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						As we continued the design process, we updated our navigation map and added sketches for key screens.\n" +
    "						</div>\n" +
    "					</div>	\n" +
    "				</div> \n" +
    "				<br/>\n" +
    "				As we went through the design process, we made increasingly more detailed designs. We began with sketches, then did low-fidelity mockups, and finally did high-fidelity mockups. To create mockups, we used Adobe Illustrator. We went through multiple iterations of high-fidelity mock-ups trying to get the right color palette and feel for our application. We originally had a look and feel that was inspired by ambulances. We had red and blue as our primary colors and had straight lines. However, we later decided that we wanted a more playful and lighthearted theme. EMTs see ambulances all the time and they are likely a stressful place for them, so we didn't want to remind them of that. We wanted to give them an application that was enjoyable for them and would help to alleviate some of their stress.\n" +
    "				<br/></br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<img src=\"../images/Accelerate/LowFiMockUps.png\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						After doing sketches, we did an iteration of low-fidelity mockups in black and white. These were used to begin seeing the amount of information and interactivity that would be appropriate per screen.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>		\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Final Deliverables -->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">Final Deliverables</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "				The final deliverables for this project were completed designs, design specifications, and a final presentation to the class.\n" +
    "				<br/></br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<img src=\"../images/Accelerate/AccelerateFinalDesignsHorizontal.png\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						The final designs for our screens included a fun, playful color scheme. We also introduced an owl character that provided consistency and whimsy throughout encouraging users to continue using the application. These features provided a feeling that will be a welcome relief from the seriousness of the users' normal work days.\n" +
    "						</div>\n" +
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
    "<link href=\"../Content/distractionfreecoding.css\" rel=\"stylesheet\" />\n" +
    "\n" +
    "<!--Header-->\n" +
    "<div class=\"container\">\n" +
    "<h1>Distraction Free Coding</h1>\n" +
    "<h4>Research student developer problems using Contextual Design methodology</h4>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Meta data-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4 upward-adjust\">\n" +
    "        <img src=\"../images/DistractionFreeCoding/icon.png\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<span class=\"category\">Project Type:</span> Research\n" +
    "		<br/><br/>\n" +
    "		<p><span class=\"category\">Contributions:</span> Contextual Inquiry, Affinity Diagrams, Sequence Models, Flow Models, Visioning\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Team Members:</span> Holly Brosnahan, Amalya Henderson, Michael Richardson, Yueying Tang\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Duration:</span> October 2014 - December 2014\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Class:</span> User Centered Research and Evaluation, CMU </p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--About Project-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><span class=\"category\">Assignment:</span> This was a series of assignments designed to practice Contextual Design methods. The prompt was to observe student developers to see the issues that arise. Teams were then allowed to focus on improving any aspect of the student development process that they observed.\n" +
    "		<br/><br/>	\n" +
    "		<span class=\"category\">Opportunity:</span> Student developers are easily distracted when trying to do to their homework. They are required to use a lot of systems to perform their tasks, and they are provided with a variety of resources to reference to learn the material. The need to switch between systems coupled with the constant distraction from social media and friends makes it difficult for students to stay focused on their assignments.\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Solution:</span> A coding environment that blocks messages and provides a single environment for students to reference resources and make annotations. The program locks for a specific period of time for students to work and then provides break time where it allows messages to reach students. It also provides places to take notes that are tied to lines of code and shows resources beside code files which prevents students from having to switch between applications.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Process Header-->\n" +
    "<div class=\"row process\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h3><span class=\"category\">Process</span></h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Contextual Inquiry-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Contextual Inquiry</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We began by performing contextual interviews with student developers. Each team member interviewed one student; we had 5 team members giving us a total of 5 interviews. During interviews, we went to the location where the developers normally worked and observed them working on their own homework assignments. Because these were contextual interviews, we did not come with specific questions to ask. Instead, we assumed the role of an apprentice learning from a master. We asked students questions about what they were doing as they did it to get an understanding of their natural problems and processes. By doing this, we got to see the truth about what happens and not just what the interviewee remembered and thought was important. We took notes during the interview to use later during interpretation sessions.\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Interpretation Sessions-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Interpretation Sessions</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	During the interpretation sessions, the team gathered and went through the interviews one at a time. The interviewer read their notes aloud and the rest of the team worked on creating the flow model and the sequence model. We also created notes about interesting things, breakdowns, and design ideas that would be used later to create the affinity diagram. By having each member activity engaged in the session, we were able to internalize the information about each interview sesssion without having to be present for all of them.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<img src=\"../images/DistractionFreeCoding/SequenceModel.JPG\" class=\"img-responsive\" >\n" +
    "						<div class=\"caption_text\">	\n" +
    "						We created sequence models for each interview. We included the steps that were taken during the interview as well as the triggers for those events and the intents of the actions taken. If breakdowns occurred, we noted those in red.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/DistractionFreeCoding/FlowModel.JPG\" class=\"img-responsive\" >\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						During the interpretation sessions, we created flow models indicating the key players and how they interacted. We noted breakdowns in red.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Affinity Diagram and Consolidated Models-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Affinity Diagram and Consolidated Models</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We took the notes we created during the interpretation session and grouped them to create an affinity diagram. When grouping these notes, we creating three layers of headings. The lower two are written from the customer perspective. This allowed us to look back at the affinity diagram later and just reading the headings to get an idea of what was happening. We also consolidated the 5 sequences into one sequence that represented all of the users. We did the same with the flow models to create one consolidated model. This process allows us to use the data we collected to create one picture of what is common in the process across all interviewees. It is also an additional step that helps us digest the information so that we can easily recall it later.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<img src=\"../images/DistractionFreeCoding/Affinity.JPG\" class=\"img-responsive\" >\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						A portion of our affinity diagram that was created from the notes taken during the interpretation session. The blue and pink post-its are written from the interviewees perspective. Breakdowns are represented with notes in red type.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/DistractionFreeCoding/ConsolidatedFlow.jpg\" class=\"img-responsive\" >\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						The 5 flow models created during the interpretation sessions were combined into this one consolidated flow model representing all of the roles and relationships that were seen in the individual flow models.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/DistractionFreeCoding/ConsolidatedSequence.JPG\" class=\"img-responsive\" >\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						The 5 sequence models created during the interpretation sessions were combined into this one consolidated sequence model. We included the intents and triggers from the original sequences into this model as well.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Visioning-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Visioning</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	After consolidating the models, we began visioning. We revisited our affinitiy diagram and models. For each, we generated design ideas and determined the key problems we needed to address. Then we listed the technologies we had available to us to solve the problems. While looking at our models and technologies list, we began visioning by sketching out possible scenarios in an improv style session with one person being the writer and the other team members speaking their ideas aloud. \n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-5\">\n" +
    "						<img src=\"../images/DistractionFreeCoding/GenerateIdeas.JPG\" class=\"img-responsive\">\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						Before we began visioning, we each looked at the affinity diagram and added notes containing design ideas, questions, and key features that needed to be included in our solutions.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<img src=\"../images/DistractionFreeCoding/Vision.JPG\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						We created visions by doing quick sketches of the ideas that teammates were coming up with in a quick, improv style visioning session.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Final Deliverables-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Final Deliverables</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	After we did 5 visions, we determined the ones we thought were most promising based on the information we learned about our users while generating our affinity diagram, sequence models, and flow models. We consolidated the visions containing those ideas to create a final concept. As a final deliverable, we presented our findings and our final idea to the class.\n" +
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
    "<!--Header-->\n" +
    "<div class=\"container\">\n" +
    "<h1>Hackathons and Challenges</h1>\n" +
    "<h4>I competed in a hackathon and a challenge to learn new technologies and practice my existing development skills</h4>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--iOS App Challenge-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">iOS App Challenge</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	<div class=\"row\">\n" +
    "					<img src=\"../images/Hackathons/FeedingFriendzy/iOSAppChallenge.png\" class=\"img-responsive\">\n" +
    "				</div>\n" +
    "\n" +
    "				<!-- About the Challenge-->\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>About the Challenge</h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						This challenge was sponsored by Apple and was designed to teach students Apple’s new language for apps, Swift.  We were given a quick workshop one afternoon on using Swift. Then we had the task of developing an App using Apple’s Sharesheet API which can be used to share content through other apps on the phone, including text messaging, email, Facebook, Twitter, etc. \n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!--Our Project-->\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>Our Project</h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						My team decided to build an application that we called Feeding Friendzy. This app is intended to help busy people, like college students or young professionals, that don’t like to eat alone. This app allows you to choose a time and place to eat and then push that notification to your social feeds so that your friends can join you for a meal. We integrated our app with the Google Maps and Google Places APIs so that users can select eating locations from within the app.  We also integrated the login and sharing features with Facebook so that users did not have to manage a new set of friends just for this application. \n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!--My Contribution-->\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>My Contribution</h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						For this project, I used Xcode and the Swift programming language. My contributions included the Facebook integration and putting together the overall application. For the Facebook integration, I integrated the login and polled the API for your friend network. I was also responsible for the overall flow of the application and integrating all of the pieces that the rest of the team worked on, including server code, database development, Google APIs integration, and image design. \n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!--Final Application-->	\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>Final Application</h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Hackathons/FeedingFriendzy/FeedingFriendzyFinalDesigns.png\">\n" +
    "						</div>\n" +
    "						<div class=\"thumbnail_caption_text\">	\n" +
    "						Screen shots of the final application taken from the running application in the iOS emulator \n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!--More Information-->\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>More Information</h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						ChallengePost: <a href=\"http://challengepost.com/software/feeding-friendzy\">http://challengepost.com/software/feeding-friendzy</a>\n" +
    "						<br/>\n" +
    "						GitHub: <a href=\"https://github.com/shawnxusy/Feeding-friendzy\">https://github.com/shawnxusy/Feeding-friendzy</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--MHCI Hackathon-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">MHCI Hackathon</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-3\">\n" +
    "				        <img src=\"../images/Hackathons/MHCIHackathon/MHCI_Hackathon.png\">\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-9\">\n" +
    "						<!--About the Challenge-->\n" +
    "						<div class= \"row\">\n" +
    "							<h4>About The Challenge</h4>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							This challenge was hosted by CMU’s Master’s of Human-Computer Interaction students. Technical support was provided by Microsoft, and the goal of the hackathon was to create a human-centered application with Microsoft technology. This hackathon took place over 20 hours.	\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!--Our Project-->\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>Our Project</h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						My team decided to use the kinect to create a fully interactive experience called Down Beat. We wanted to create a fun activity that can be used on any big screen by multiple people; we invisioned it being used in a large open area where people are gathered like a festival or amusement park. Down Beat takes a song that is broken up into 4 layers. Players use their bodies to control these layers. By moving faster, they speed up the tempo of their layers. By moving closer to the Kinect, they raise the volume of their layers. Additionally, there is a display of fireworks that is controlled by the same movements. Each player has a different color firework and they change volume and height based on movement. \n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!--My Contribution-->\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>My Contribution</h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						For this project, my contribution was the controller for the music layers. I used C#, Visual Studio, and the <a href=\"http://www.ambiera.com/irrklang/\">IrrKlang</a> music player library. When movement was detected by the Kinect, an event was sent to the music controller which was responsible for parsing the events and making the appropriate adjustments to the corresponding layers of music.\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!--Final Application-->\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>Final Application</h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Hackathons/MHCIHackathon/coding.JPG\">\n" +
    "						</div>\n" +
    "						<div class=\"thumbnail_caption_text\">	\n" +
    "						Working together during the challenge.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Hackathons/MHCIHackathon/downbeat_demo.jpg\">\n" +
    "						</div>\n" +
    "						<div class=\"thumbnail_caption_text\">	\n" +
    "						For the final presentation, we gave a fun demo of our application. The fireworks were shown on a display behind us.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<!--More Information-->\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						<h4>More Information</h4>\n" +
    "					</div>\n" +
    "				</div>	\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-12\">\n" +
    "						Hackathon Link: <a href=\"https://www.hackerleague.org/hackathons/mhci-hackathon\">https://www.hackerleague.org/hackathons/mhci-hackathon</a>\n" +
    "						<br/>\n" +
    "						GitHub: <a href=\"https://github.com/MasterPie/MHCI_Hackathon\">https://github.com/MasterPie/MHCI_Hackathon</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "		\n" +
    "</div>");
}]);

angular.module("../app/views/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/home.html",
    "<link href=\"../Content/home.css\" rel=\"stylesheet\" />\n" +
    "<link href=\"../Content/contact.css\" rel=\"stylesheet\" />\n" +
    "<link href=\"../Content/font-awesome-4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"row panel\">\n" +
    "    <div class=\"col-md-4 bg_blur \">\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8  col-xs-12\">\n" +
    "      <img src=\"../images/Home/KaitlynSparks.png\" class=\"img-thumbnail picture hidden-xs\" />\n" +
    "      <img src=\"../images/Home/KaitlynSparks.png\" class=\"img-thumbnail visible-xs picture_mob\" />\n" +
    "      <div class=\"header\">\n" +
    "      <br class=\"hidden-md hidden-lg hidden-sm\"/>\n" +
    "      <br class=\"hidden-md hidden-lg hidden-sm\"/>\n" +
    "      <h1>Kaitlyn Sparks</h1>\n" +
    "      <h4>User Researcher and Interaction Designer</h4>\n" +
    "      <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\"\n" +
    "      \"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\"</span>   \n" +
    "      <br/><br/>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col row-centered \">\n" +
    "\n" +
    "          <a href=\"https://plus.google.com/u/0/106201679513041750453/posts\"><i id=\"social\" class=\"fa fa-google-plus-square fa-3x social-gp\"></i></a>\n" +
    "\n" +
    "          <a href=\"https://www.linkedin.com/in/kaitlynsparks\"><i id=\"social\" class=\"fa fa-linkedin-square fa-3x social-li\"></i></a>\n" +
    "\n" +
    "          <a href=\"mailto:kaitlynesparks@gmail.com\"><i id=\"social\" class=\"fa fa-envelope-square fa-3x social-em\"></i></a>\n" +
    "        </div>\n" +
    "        <br class=\"hidden-md hidden-lg hidden-sm\"/>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  </div>   \n" +
    "  \n" +
    "    <div class=\"row\">\n" +
    "      \n" +
    "      <div data-ng-repeat=\"project in projects\">\n" +
    "\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-4 row-centered\">            \n" +
    "            <div class=\"thumbnail\">\n" +
    "                <a ui-sref=\"{{project.Nav}}\">\n" +
    "                  <div class=\"caption\">\n" +
    "                      <h4>{{project.Title}}</h4>\n" +
    "                      <p>{{project.Description}}</p>\n" +
    "                  </div>\n" +
    "                </a>\n" +
    "                <img src=\"{{project.Thumbnail}}\" alt=\"...\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../app/views/peanuts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/peanuts.html",
    "<link href=\"../Content/peanuts.css\" rel=\"stylesheet\" />\n" +
    "\n" +
    "<!--Header-->\n" +
    "<div class=\"container\">\n" +
    "<h1>Peanuts</h1>\n" +
    "<h4>Research to understand how reciprocity and trust can impact microcharitable giving online</h4>\n" +
    "<hr/>\n" +
    "<!--Meta Data-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4\">\n" +
    "        <img src=\"../images/Peanuts/Icon.png\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<p><span class=\"category\">Project Type:</span> Research\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Contributions:</span> Survey Design and Analysis\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Team Members:</span> Jeff Harris, Jim Martin, Katie Ramp\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Duration:</span> November 2014 - December 2014\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Class:</span> Social Web, CMU</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--About the Project-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><span class=\"category\">Assignment:</span> Pick any topic related to social web and explore it with design, research, and/or development.\n" +
    "		<br/><br/>	\n" +
    "		<span class=\"category\">Opportunity:</span> When people are requesting monetary help online, many requests state that the requestor has helped others in the past or plans to help others in the future as part of the description. People that are donating frequently seek validation of who the requestor is from their activity on the site. However, there is no provided way for requestors to prove their previous donations or for those planning to give to see that activity.\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Solution:</span> We wanted to research how a website could give requestors the ability to track their reciprocity, which we defined as the relationship between a user's giving and receiving. We also wanted to see if there was an impact on donations if this information was visible. We predicted that showing reciprocity would allow donors to quickly trust requestors which would help them make quicker decisions about donating and influence the amount they gave.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Process Header-->\n" +
    "<div class=\"row process\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h3><span class=\"category\">Process</span></h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Literature Review and Initial Research-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Literature Review and Initial Research</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We began by reading research papers on altruism, motivation, and microvoluntering. One of the papers that we read was an in-depth look at the aspects of a request on the subreddit r/RAOP. They showed that certain information would influence the success of the request. We began looking at r/RAOP and noticed that there were other subreddits where people made requests for help. We analysed their requests and how potential donors responded to common themes. After reviewing a few subreddits and other request websites, we decided to look at how showing reciprocity impacts people’s donations.\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Initial Survey-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Initial Survey</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We wanted to quickly explore what possible representations of reciprocity would influence people's behaviors. So we created a survey that showed 8 different requests with the same story but different reciprocity statements. The survey was distributed to 83 people that we recruited from friends and family. We asked which of the 8 requests they would be most likely to donate to. After the survey, we also got some feedback from participants to understand the reasoning behind their choices.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-4 col-md-offset-2\">\n" +
    "						<img src=\"../images/Peanuts/survey1example.jpg\" class=\"img-responsive\">\n" +
    "    					<div class=\"caption_text\">	\n" +
    "						This is one of the options we showed on the survey. All options were exactly the same except for the statement regarding reciprocity.\n" +
    "						</div>\n" +
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
    "\n" +
    "<!--Final Survey-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Final Survey</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	After analyzing the results of the first survey and the feedback we received, we decided to use the two of the top four statements to test further. In the first survey, all of the statements showed more giving than receiving, but we also wanted to test whether a positive reciprocity or a negative reciprocity statement would be more likely to get donations. We created a survey to test this and got 276 responses on Amazon's Mechanical Turk. We randomly showed each Turk worker the request and then one visualization of reciprocity or a control that only showed the request. We asked how much they would donate, and also recorded the amount of time it took them to answer. The only statistically significant result that we found was that those who donated spent longer thinking about their decision and as time increases, dollar amount increased as well. But we also saw that people generally gave more to people that had given less than they received. The statement \"Martin has given to 20 people and received donations from 50 people\" (3rd card below) was most likely to receive higher amounts of money. \n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/Card_general_less.jpg\" class=\"img-responsive\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">Negative reciprocity option used during the final survey showing the percentage of money given versus received</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/Card_general_more.jpg\" class=\"img-responsive\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">Positive reciprocity option used during the final survey showing the percentage of money given versus received</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/Card_back_received_more.jpg\" class=\"img-responsive\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">Negative reciprocity option used during the final survey showing number of people donated to versus the number received from</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/Peanuts/Card_back_given_more.jpg\" class=\"img-responsive\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">Positive reciprocity option used during the final survey showing number of people donated to versus the number received from</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Application-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Application</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	We wanted to see what it would look like to apply the results of our surveys, so we created a microcharity website that showed reciprocity. As a team, we determined the concepts for the website, but the development was done by Jeff and Jim. If this had been a longer project, we wanted to use this website to conduct experiments to test what people do with actual money.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<img src=\"../images/Peanuts/website_homepage.png\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						On the homescreen of the website, we wanted to show the requestors name, the title of what they need money for, and the description of the need. By clicking on their name, you are taken to their profile.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<img src=\"../images/Peanuts/website_profile.png\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						A user's profile page shows their requests and how much money have raised. It also shows their reciprocity in the form of the number of people that they have given to and received donations from.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("../app/views/resume.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/resume.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col img-responsive row-centered\">\n" +
    "		<img src=\"../images/Sparks_Resume.png\"/>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col row-centered\">\n" +
    "		<a href=\"../images/\" download=\"Sparks_Resume.pdf\" class=\"btn btn-default\">Download <span class=\"glyphicon glyphicon-download-alt\"></span></a>\n" +
    "	</div>	\n" +
    "</div>	");
}]);

angular.module("../app/views/wakeup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/wakeup.html",
    "<link href=\"../Content/wakeup.css\" rel=\"stylesheet\" />\n" +
    "\n" +
    "<!--Header-->\n" +
    "<div class=\"container\">\n" +
    "<h1>Wake Up</h1>\n" +
    "<h4>Development of an Android application that gives the weather and bus information when an alarm goes off</h4>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Meta Data-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4\">\n" +
    "        <img src=\"../images/WakeUp/icon.jpg\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<p><span class=\"category\">Project Type:</span> Development\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Contributions:</span> Design, Android Development\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Tools and Technologies:</span> Eclipse, Java, Android SDK, Adobe Photoshop\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Duration:</span> November 2014 - December 2014 (3 weeks)\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Class:</span> Software Structures for User Interfaces, Mobile Lab, CMU</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--About the project-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><span class=\"category\">Assignment:</span> Design and develop a mobile application to demonstrate Android development.\n" +
    "		<br/><br/>	\n" +
    "		<span class=\"category\">Opportunity:</span> When my alarm goes off in the morning, the first thing I do is check the weather and the bus information to determine how long I have to get ready and what I need to wear for the day. \n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Solution:</span> I decided to build an application that is a dedicated morning alarm clock. This alarm clock allows you to set your preferred city, bus route, and bus stop. When the alarm goes off, this information is displayed to the user.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Final Designs-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Final Design</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/WakeUp/home_screen.png\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">Home screen</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/WakeUp/preferences_screen.png\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">Preferences screen</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/WakeUp/set_alarm_screen.png\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">Set Alarm screen</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"col col-md-3\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/WakeUp/alarm_screen.png\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">Screen that appears when the alarm clock goes off</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Final Code-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Final Code</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	GitHub: <a href=\"https://github.com/kaitlynesparks/WakeUp\">https://github.com/kaitlynesparks/WakeUp</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("../app/views/webdesign.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/webdesign.html",
    "<link href=\"../Content/personalWebsite.css\" rel=\"stylesheet\" />\n" +
    "\n" +
    "<!--Header-->\n" +
    "<div class=\"container\">\n" +
    "<h1>Personal Website</h1>\n" +
    "<h4>Design a personal website for mobile and desktop</h4>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Meta Data -->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-4\">\n" +
    "        <img src=\"../images/PersonalWebsite/icon.png\" style=\"width: 300px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-8\">\n" +
    "		<p><span class=\"category\">Project Type:</span> Design\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Contributions:</span> Sketch Wireframes, Digital Sketches, Low Fidelity Mockups, High Fidelity Mockups\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Duration:</span> August 2014 - September 2014 (2.5 weeks)\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Class:</span> Interaction Design Fundamentals, CMU</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--About the Project-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><span class=\"category\">Assignment:</span> Design a personal website home page for desktop and mobile platforms. \n" +
    "		<br/><br/>	\n" +
    "		<span class=\"category\">Design Overview:</span> The focus of this design was to create a webpage and a mobile page with a cohesive look and feel across the two mediums. First, I focused on finding appropriate content for a professional, personal webpage. I chose to keep the design very simple so that all of the important elements were easy to find and consume. Additionally, to create consistency, I paid attention making the information heirarchy the same across the two screens.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Process Header-->\n" +
    "<div class=\"row process\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h3><span class=\"category\">Process</span></h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Sketch Wireframes-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Sketch Wireframes</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	The first step was to determine the content that was needed for this type of website and make sketch wireframes. While making these sketches, I focused on making the heirarchy consistent across the mobile and desktop versions of the website. I also concentrated on making the most important aspects of the website higher in the heirarchy. I decided that if someone was visiting a page like this, they would want to know who it was about, their title, and how to contact them; so I made that information easy to find at a glance. I also wanted it to be easy to look through examples of work and see a summary about the person, so I included that information on the home screen in the forms of a carousel showing work and a brief summary paragraph. I created 5 sketches of possible layouts and then picked the aspects I liked from each one to create a final sketch and use in future iterations.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/PersonalWebsite/website_sketch1.jpg\" class=\"img-responsive\" >\n" +
    "						<div class=\"caption_text\">	\n" +
    "						Sketch 1 for website. I originally included a picture of the person in these sketches but later decided it was not essential enough to be on the homepage and would fit better on the About page.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/PersonalWebsite/website_sketch2.jpg\" class=\"img-responsive\" >\n" +
    "						<div class=\"caption_text\">	\n" +
    "						Sketch 2 for website which is an iteration on sketch 1. On the mobile site, I moved the navigation to the side but did not move forward with this decision because mobile device screens are generally not wide enough to be able to interact with two columns.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/PersonalWebsite/website_sketch3.jpg\" class=\"img-responsive\" >\n" +
    "						<div class=\"caption_text\">	\n" +
    "						Sketch 3 for website. In this sketch, I moved the navigation to the side on both the mobile and desktop to keep it consistent. But as with sketch 2, I did not use this moving forward because two columns is difficult for users on a mobile device.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<br/><br/>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/PersonalWebsite/website_sketch4.jpg\" class=\"img-responsive\" >\n" +
    "						<div class=\"caption_text\">	\n" +
    "						Sketch 4 for website which is an interation on sketch 3. For this iteration, I moved the name to the left on the webpage. I ended up using this in the future because I found this design to be more common on websites, whereas the centered name felt more like a printed report.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/PersonalWebsite/website_sketch5.jpg\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						Sketch 5 for website which is an interation on sketches 3 and 4. In this iteration, I intended to put the contact information at the top so it was easily accessible. Later, I moved it to the bottom because it is frequently found there on webpages and it was still easy to spot on the bottom\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-4\">\n" +
    "						<img src=\"../images/PersonalWebsite/website_sketch_final.jpg\" class=\"img-responsive\">\n" +
    "						<div class=\"caption_text\">	\n" +
    "						The final sketch took elements from the original 5 sketches and put them together.\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Digital Sketches and Low Fidelity Mockups-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Digital Sketches and Low Fidelity Mockups</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	After getting feedback from the class on the sketches, I moved to a digital sketch that was exactly the same as the final paper sketch. After getting my idea into a digital version and seeing it at a more realistic size and ratio, I was able to iterate to a low fidelity black and white mockup.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/digital_sketch.png\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">When moving to digital mockups, my first step was to translate my last paper sketch to an identical digital sketch.</div>\n" +
    "					</div>\n" +
    "					<div class=\"col col-md-6\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/low_fidelity_mockup.png\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">I created a black and white mock up first because I wanted to focus on content and heirarchy before working with colors and visual design.</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--High Fidelity Mockups-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">High Fidelity Mockups</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	The next step I took was to convert the black and white mock up into a color mock up. I played with a few color schemes based on the low fidelity mock up. However, once I added color, I realized it felt very heavy. So I removed a lot of the color in favor of a very simple final design. For this type of website, I felt that the content needed to be more prominent than colors or dominating design elements.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-8 col-md-offset-2\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/high_fidelity_mockup.png\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">I converted my black and white sketch into a color mockup and iterated on how different color schemes.</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Final Design-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "		    	<h3 class=\"panel-title\">Final Design</h3>\n" +
    "			</div>\n" +
    "			<div class=\"panel-body\">\n" +
    "		    	At the end, I took all of the feedback I had gotten from classmates and the pieces of each iteration that I thought worked best and compiled it into a final high-fidelity mockup.\n" +
    "		    	<br/><br/>\n" +
    "		    	<div class=\"row\">\n" +
    "					<div class=\"col col-md-8 col-md-offset-2\">\n" +
    "						<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/final_design.png\">\n" +
    "    					</div>\n" +
    "    					<div class=\"thumbnail_caption_text\">My final deliverable was a full scale design for a desktop and mobile site.</div>\n" +
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

$scope.projects = [{Title: "Accelerate", Description: "A project to design a mobile training application for emergency medical personnel", Thumbnail: "../images/Accelerate/Icon.png", Nav: "accelerate", ProjectType:"Design"},
				   {Title: "Distraction Free Coding", Description: "Research student developer problems using Contextual Design methodology", Thumbnail: "../images/DistractionFreeCoding/icon.png", Nav: "distractionfreecoding", ProjectType:"Research"},
				   {Title: "Peanuts", Description: "Research to understand how reciprocity and trust can impact microcharitable giving online", Thumbnail: "../images/Peanuts/Icon.png", Nav: "peanuts", ProjectType:"Research"},
				   {Title: "Personal Website Design", Description: "Design a personal website for mobile and desktop", Thumbnail: "../images/PersonalWebsite/icon.png", Nav: "webdesign", ProjectType: "Design"},
				   {Title: "Wake Up", Description: "Development of an Android application that gives the weather and bus information when an alarm goes off", Thumbnail: "../images/WakeUp/icon.jpg", Nav: "wakeup", ProjectType: "Development"},
				   {Title: "Hackathons and Challenges", Description: "I competed in a hackathon and a challenge to learn new technologies and practice my existing development skills", Thumbnail: "../images/Hackathons/icon.jpg", Nav: "hackathon", ProjectType: "Development"}];

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
app.controller('resumeController', ['$scope', function ($scope) {

    

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