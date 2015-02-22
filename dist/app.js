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
    "<!doctype html>\n" +
    "<html>﻿\n" +
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
    "      </div>\n" +
    "      </html>\n" +
    "");
}]);

angular.module("../app/templates/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/footer.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "    <link href=\"../Content/footer.css\" rel=\"stylesheet\" />\n" +
    "    <link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>\n" +
    "    <br/>\n" +
    "    <div id=\"footer\">\n" +
    "        <div class=\"container\">\n" +
    "            <!--<div class=\"row row-centered\">-->\n" +
    "                <div class=\"row\">\n" +
    "                <div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "                    <div id=\"contact\">\n" +
    "                        <p>Email: kaitlynesparks@gmail.com</p>\n" +
    "                        <p>Tel: (912) 585 - 2036 </p>\n" +
    "                    </div>   \n" +
    "                        <!--<a ui-sref=\"home\" style=\"font-weight: bold\">Home</a>&emsp;\n" +
    "\n" +
    "                        <a ui-sref=\"about\" style=\"font-weight: bold\">About</a>&emsp;\n" +
    "                        \n" +
    "                        <a ui-sref=\"contact\" style=\"font-weight: bold\">Contact Me</a>\n" +
    "                        <br>\n" +
    "                       <!-- <span style=\"font-size: 10px; color: black; font-family: sans-serif; \" dir=\"ltr\">Powered By;</span>\n" +
    "                        <a href=\"https://angularjs.org/\" style=\"font-size: 13px\">AngularJS</a>\n" +
    "                        <span style=\"font-size: 10px; color: black; font-family: sans-serif; \" dir=\"ltr\">\n" +
    "                        and </a>\n" +
    "                        <a href=\"http://getbootstrap.com/\" style=\"font-size: 13px\">Boostrap</a> -->\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</html>    ");
}]);

angular.module("../app/templates/nav.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/nav.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "  <link href=\"../Content/nav.css\" rel=\"stylesheet\" />\n" +
    "  <link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "  <div class=\"navbar navbar-default navbar-top\" data-ng-controller=\"indexController\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"row-centered\">\n" +
    "\n" +
    "          <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\">\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "              <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" ui-sref=\"home\">Kaitlyn Sparks</a>\n" +
    "          </div>\n" +
    "          <div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "              <!--<li><a id=\"homeNav\" ui-sref=\"home\">Home</a></li>-->\n" +
    "              <li><a ui-sref=\"about\">About</a></li>\n" +
    "              <li><a ui-sref=\"resume\">Resume</a></li>\n" +
    "              <li class=\"dropdown\">\n" +
    "                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Projects<b class=\"caret\"></b></a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                  <li><a ui-sref=\"accelerate\">Accelerate</a></li>\n" +
    "                  <li><a ui-sref=\"distractionfreecoding\">Distraction Free Coding</a></li>\n" +
    "                  <li><a ui-sref=\"peanuts\">Peanuts</a></li>\n" +
    "                  <!--<li><a ui-sref=\"webdesign\">Personal Website Design</a></li>-->\n" +
    "                  <li><a ui-sref=\"wakeup\">Wake Up</a></li>\n" +
    "                  <li><a ui-sref=\"hackathon\">Hackathons and Challenges</a></li>\n" +
    "                </ul>\n" +
    "              </li>\n" +
    "              <li>&emsp;</li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../app/views/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/about.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "  <link href=\"../Content/projectPage.css\" rel=\"stylesheet\" />\n" +
    "    <!--<link href=\"../Content/accelerate.css\" rel=\"stylesheet\" />-->\n" +
    "  <link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>\n" +
    "  <div class= \"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-12\"> \n" +
    "        <h1>About Me</h1>\n" +
    "      </div>\n" +
    "    </div> \n" +
    "    <div class=\"row\">\n" +
    "      <div class = \"col col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "        <h3>Get to know me professionally</h3>\n" +
    "        <span class=\"about-text\">I went to Vanderbilt and double majored in psychology and computer science. I grew up in a rural community and didn't know much about the job market, but I knew I cared about solving complex problems for people, so I chose these two majors hoping to someday combine them. After I graduated, I worked at Asurion as a program manager and a developer. Then I found Human-Computer Interaction and knew that's what I wanted to study. So, I went to CMU to pursue my Masters in HCI. </span>\n" +
    "        <br/><br/>\n" +
    "        <span class=\"about-text\">My career goal is to understand complicated systems and determine how to make them simple for users. I also enjoy learning about people's motivations for what they do; I think that's key to knowing what to design for them and also for working harmoniously with others. Having studied computer science, psychology, and now HCI, I have a wide range of knowledge that helps me to work well in diverse teams.</span>\n" +
    "      </div>\n" +
    "      <div class = \"col col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1\">\n" +
    "        <h3>Get to know me personally</h3>\n" +
    "        <span class=\"about-text\">I am originally from a small town in south Georgia called Vidalia. It is home to the famous Vidalia sweet onion. In high school I played softball, tennis, and did competitive cheerleading. I moved to Nashville for college and lived there for a few years after graduation. I was a cheerleader at Vanderbilt cheering for men's and women's basketball and football. I enjoy watching sports, especially SEC football and Atlanta Braves baseball! I also really like dogs, sweet tea, diet coke, sitcoms, and outdoor activities. </span>\n" +
    "        <h3>Contact Me</h3>\n" +
    "        <span class=\"about-text\">I would love to hear from you. You can contact me at kaitlynesparks@gmail.com or connect to me on<a href=\"https://www.linkedin.com/in/kaitlynsparks\"> LinkedIn</span>.\n" +
    "      </div>\n" +
    "    </div>   \n" +
    "    <br/>    \n" +
    "    <div class=\"row\">\n" +
    "      <div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "        <img src=\"../images/about-me.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "      </div> \n" +
    "    </div> \n" +
    "  </div>\n" +
    "</html>  \n" +
    "");
}]);

angular.module("../app/views/accelerate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/accelerate.html",
    "<!doctype html>\n" +
    "<html>﻿\n" +
    "	<link href=\"../Content/projectPage.css\" rel=\"stylesheet\" />\n" +
    "	<!--<link href=\"../Content/accelerate.css\" rel=\"stylesheet\" />-->\n" +
    "	<link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "	<!--Header-->\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"headline\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "					<h1 class=\"headline\">Accelerate</h1>\n" +
    "					<h4 class=\"headline\">iOS Application Design</h4>\n" +
    "					<p class=\"headline\">October 2014 - December 2014</p>\n" +
    "				</div>\n" +
    "			</div>		\n" +
    "		</div>\n" +
    "		<hr/>\n" +
    "\n" +
    "		<!--Meta data -->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>Emergency medical service employees have uniquely stressful jobs and do not have sufficient encouragement to learn life skills or additional job skills. For our Interaction Design Fundamentals class at CMU, we decided to design a mobile application that provides relevant facts about topics such as mental health, nutrition, and driving skills. Leaders can set up friendly competitions about the facts for members of the squad. This promotes team bonding and provides visibility of hard work to management.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Accelerate/Accelerate_icon_long.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "			</div>\n" +
    "		</div>	<!--End icon image-->\n" +
    "\n" +
    "		<div class=\"row meta-data\">\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2 col-lg-offset-2\">\n" +
    "				<h4 class=\"meta-header\">Process</h4>\n" +
    "				<ul>\n" +
    "					<li>Research</li>\n" +
    "					<li>Brainstorming</li>\n" +
    "					<li>Flow Map</li>\n" +
    "					<li>Wireframing</li>\n" +
    "					<li>Hi-fidelity Design</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Contributions</h4>\n" +
    "				<ul>\n" +
    "					<li>User Research</li>\n" +
    "					<li>Flow Map</li>\n" +
    "					<li>Wireframes</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Team</h4>\n" +
    "				<ul>\n" +
    "					<li>Jay Lui</li>\n" +
    "					<li>Nicole Navolio</li>\n" +
    "					<li>Leticia Patricio</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Deliverables</h4>\n" +
    "				<ul>\n" +
    "					<li><a href=\"../images/Accelerate/Accelerate-Final-Designs.png\" target=\"_blank\">Final Designs</a></li>\n" +
    "					<li><a href=\"../images/Accelerate/Design-Specs.pdf\" target=\"_blank\">Design Specifications</a></li>\n" +
    "					<li><a href=\"../images/Accelerate/Final-Presentation.pdf\" target=\"_blank\">Presentation</a></li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "		</div>	<!--End meta-data section-->\n" +
    "\n" +
    "		<!--Research -->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Research</h3>\n" +
    "				<p>We began by understanding the life and work circumstances for a\n" +
    "					professional in the emergency medical services field. Our team researched\n" +
    "					internet blogs, articles, and ride along videos of EMTs on the job.\n" +
    "					Additionally, we conducted an interview with an EMT to further explore\n" +
    "					the themes we saw in our initial research.</p>	\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<blockquote>\n" +
    "					<p>“Myself and many of my co-workers have sought grief counseling, nutrition assistance, and some have even been placed on heavy sleep medications because they never had [targeted information] available to them in a more private medium.”</p>\n" +
    "					<small>EMT</small>\n" +
    "				</blockquote>\n" +
    "			</div>	\n" +
    "		</div>\n" +
    "		<div class=\"key-findings\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "					<img src=\"../images/Accelerate/key-findings.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>	<!-- end Research -->\n" +
    "\n" +
    "		<!-- Brainstorming -->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Brainstorming</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>After doing research, we started determining what mobile application solution would meet the needs of emergency medical service professionals. We generated fifty unique application concepts and mapped them on an affinity diagram. Then we used those sorted groups of concepts onto a feasibility-impact matrix. We used these and the personas we were provided to create narratives of the most promising ideas. We received feedback from our classmates and also from an EMT on our concepts.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Accelerate/Impact-feasibility.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">We worked as a team talking through our design ideas to determine the impact and feasibility of each idea.</p>\n" +
    "			</div>\n" +
    "		</div> <!-- end Brainstorming -->\n" +
    "\n" +
    "		<!-- Flow Map -->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Flow Map</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>We expounded upon our idea using a flow map. We updated it as we added to our concept and as we created higher fidelity designs. By referencing it throughout the process, we were able to keep an appropriate breadth and depth for the application. We also used it as a check to keep the functionality of the application appropriately simple.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Accelerate/flow-map.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">At each stage of the design process, we updated our flow map with the most relevant screens</p>\n" +
    "			</div>\n" +
    "		</div> <!-- end Flow Map -->\n" +
    "\n" +
    "		<!-- Wireframing -->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Wireframing</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>As we went through the design process, we made increasingly more detailed designs. We began with sketches, then created low-fidelity mockups, and finally interated to make high-fidelity mockups. To create mockups, we used Adobe Illustrator. We went through multiple iterations of high-fidelity mock-ups trying to get the right color palette and feel for our application. We decided that we wanted a  playful and light-hearted theme. We wanted to give them an application that was enjoyable to use and would help to alleviate some of their stress.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Accelerate/LowFiMockUps_white.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">Low-fidelity digital sketches of our application.</p>\n" +
    "			</div>\n" +
    "		</div> <!-- end wireframing -->\n" +
    "\n" +
    "		<!-- Hi-fidelity Design -->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">High-Fidelity Design</h3>\n" +
    "				<p>The final deliverables for this project were completed designs, design pecifications, and a final presentation to the class. As part of the presentation, we also included a <a href=\"https://projects.invisionapp.com/share/3G1SPWQKJ#/screens\" target=\"_blank\">demo</a> created with invision. The final designs included a fun, playful color scheme and an owl character to provide consistency and whimsy throughout.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img id=\"FinalDesigns\" src=\"../images/Accelerate/Accelerate-Final-Designs.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">We designed eight total screens for our final design.</p>\n" +
    "			</div>\n" +
    "		</div> <!-- end hi-fidelity design -->\n" +
    "\n" +
    "	</div>	<!-- end container -->\n" +
    "</html>\n" +
    "");
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
    "<!doctype html>\n" +
    "<html>\n" +
    "	<link href=\"../Content/projectPage.css\" rel=\"stylesheet\" />\n" +
    "	<link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "	<!--Header-->\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"headline\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "					<h1 class=\"headline\">Distraction Free Coding</h1>\n" +
    "					<h4 class=\"headline\">Research student developer problems using Contextual Design methodology</h4>\n" +
    "					<p class=\"headline\">October 2014 - December 2014</p>\n" +
    "				</div>\n" +
    "			</div>		\n" +
    "		</div> <!-- close headline -->\n" +
    "		<hr/>\n" +
    "\n" +
    "		<!--Meta data-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>Developers struggle to pay attention to their work, especially student developers. It's easy to get distracted on a computer. We also noticed that developers heavily depend on outside resources and spend significant time switching between applications to access those resources. For our User Centered Research and Evaluation class at CMU, we performed the contextual design methodology as described by Karen Holtzblatt on student developers. Synthesizing that research, we discovered that distraction and application switching were two of the biggest problems they faced. We envisioned a solution that will lock down the coding environment to prevent distraction while improving the way that students view outside resources. </p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/DistractionFreeCoding/Contextual-inquiry-stats.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "			</div>\n" +
    "		</div> <!-- end icon image -->\n" +
    "\n" +
    "		<div class=\"row meta-data\">\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2 col-lg-offset-2\">\n" +
    "				<h4 class=\"meta-header\">Process</h4>\n" +
    "				<ul>\n" +
    "					<li>Contextual Inquiry</li>\n" +
    "					<li>Interpretation</li>\n" +
    "					<li>Consolidated Models</li>\n" +
    "					<li>Visioning</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Contributions</h4>\n" +
    "				<ul>\n" +
    "					<li>Interview</li>\n" +
    "					<li>Models</li>\n" +
    "					<li>Brainstorming</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Team</h4>\n" +
    "				<ul>\n" +
    "					<li>Holly Brosnahan</li>\n" +
    "					<li>Amalya Henderson</li>\n" +
    "					<li>Michael Richardson</li>\n" +
    "					<li>Yueying Tang</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Deliverables</h4>\n" +
    "				<ul>\n" +
    "					<li><a href=\"../images/DistractionFreeCoding/Final-Presentation.pdf\" target=\"_blank\">Presentation</a></li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "		</div> <!-- end Meta-data -->\n" +
    "\n" +
    "		<!--About Project-->\n" +
    "\n" +
    "		<!--Contextual Inquiry-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Contextual Inquiry</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>We began by performing contextual interviews with student developers. Each team member interviewed one developer for a total of 5 interviews. During interviews, we went to the location where the developers normally worked and observed them working on their own assignments. Because these were contextual interviews, we did not come with specific questions to ask. Instead, we assumed the role of an apprentice learning from a master. By doing this, we got to see the truth about what happens and not just what the interviewee remembered and thought was important. We took notes during the interview to use later during interpretation sessions.</p>\n" +
    "			</div>\n" +
    "		</div> <!-- end contextual inquiry -->\n" +
    "		\n" +
    "		<!--Interpretation Sessions-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Interpretation Sessions</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>During the interpretation sessions, the team went through the interviews one at a time. The interviewer read her notes aloud and the rest of the team worked on creating the flow model and the sequence model. We also created notes about interesting things, breakdowns, and design ideas that would be used later to create the affinity diagram.</p>\n" +
    "			</div>\n" +
    "		</div> \n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/DistractionFreeCoding/Interpretation-Sessions.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">During our interpretation sessions, we created models models for each participant and took notes to use for the affinity diagram.</p>\n" +
    "			</div>\n" +
    "		</div> <!-- end interpretation session -->\n" +
    "\n" +
    "		<!--Affinity Diagram and Consolidated Models-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 ccol-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Affinity Diagram and Consolidated Models</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>We took the notes we created during the interpretation session and grouped them to create an affinity diagram. When grouping these notes, we creating three layers of headings. The lower two are written from the customer perspective. This allowed us to look back at the affinity diagram later and get an overall idea of what was happening by simply looking at the headings. </p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/DistractionFreeCoding/AffinityDiagram.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">A portion of our affinity diagram that was created from the notes taken during the interpretation session. The blue and pink post-its are written from the interviewees perspective.</p>\n" +
    "			</div>\n" +
    "		</div> <!-- end affinity diagram -->\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>We also consolidated the 5 sequences into one sequence that represented all of the users. We did the same with the flow models to create one consolidated model. This process allows us to use the data we collected to create one picture of what is common in the process across all interviewees.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/DistractionFreeCoding/Consolidated-Models.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">Consolidated sequence and flow models</p>\n" +
    "			</div>\n" +
    "		</div> <!-- end affinity diagram -->\n" +
    "\n" +
    "		<!--Visioning-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Visioning</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>After consolidating the models, we began visioning. We revisited our affinitiy diagram and models. For each, we generated design ideas and determined the key problems we needed to address. Then we listed the technologies we had available to us to solve the problems. While looking at our models and technologies list, we began visioning by sketching out possible scenarios in an improv-style session with one person being the writer and the other team members speaking their ideas aloud.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/DistractionFreeCoding/Visioning.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">We captured key ideas from our diagrams, sketched out ideas as a team, and then analyzed those ideas for pros and cons before coming up with a final vision.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!--Final Deliverables-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Final Deliverables</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>After we did 5 visions, we determined the ones we thought were most promising based on the information we learned about our users while generating our affinity diagram, sequence models, and flow models. We consolidated the visions containing those ideas to create a final concept. As a final deliverable, we presented our findings and our final idea to the class.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</html>");
}]);

angular.module("../app/views/hackathon.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/hackathon.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<link href=\"../Content/projectPage.css\" rel=\"stylesheet\" />\n" +
    "	<link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "	<!--Header-->\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"headline\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\"> \n" +
    "					<h1 class=\"headline\">Hackathons and Challenges</h1>\n" +
    "					<h4 class=\"headling\">I competed in a hackathon and a challenge to learn new technologies and practice my existing development skills</h4>\n" +
    "				</div>\n" +
    "			</div>		\n" +
    "		</div>		\n" +
    "		<hr/>\n" +
    "\n" +
    "		<!--iOS App Challenge-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<div class=\"panel panel-default\">\n" +
    "					<div class=\"panel-heading\">\n" +
    "			    		<h3 class=\"panel-title\">iOS App Challenge</h3>\n" +
    "					</div> <!--close panel-heading -->\n" +
    "					<div class=\"panel-body\">\n" +
    "			    		<div class=\"row\">\n" +
    "							<img src=\"../images/Hackathons/FeedingFriendzy/iOSAppChallenge.png\" class=\"img-responsive\">\n" +
    "						</div>\n" +
    "\n" +
    "						<!-- About the Challenge-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">The Challenge</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<p>This challenge was sponsored by Apple and was designed to teach students Apple’s new language for apps, Swift.  We were given a quick workshop one afternoon on using Swift. Then we had the task of developing an App using Apple’s Sharesheet API which can be used to share content through other apps on the phone, including text messaging, email, Facebook, Twitter, etc. </p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<!--Our Project-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">Our Project</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<p>My team decided to build an application that we called Feeding Friendzy. This app is intended to help busy people, like college students or young professionals, that don’t like to eat alone. This app allows you to choose a time and place to eat and then push that notification to your social feeds so that your friends can join you for a meal. We integrated our app with the Google Maps and Google Places APIs so that users can select eating locations from within the app.  We also integrated the login and sharing features with Facebook so that users did not have to manage a new set of friends just for this application. </p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					\n" +
    "						<!--My Contribution-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">My Contribution</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<p>For this project, I used Xcode and the Swift programming language. My contributions included the Facebook integration and putting together the overall application. For the Facebook integration, I integrated the login and polled the API for your friend network. I was also responsible for the overall flow of the application and integrating all of the pieces that the rest of the team worked on, including server code, database development, Google APIs integration, and image design.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					\n" +
    "						<!--Final Application-->	\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">Final Application</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class = \"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<img src=\"../images/Hackathons/FeedingFriendzy/FeedingFriendzyFinalDesigns.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "								<p class=\"caption\">Screen shots of the final application taken from the running application in the iOS emulator.</p>\n" +
    "							</div>\n" +
    "						</div> \n" +
    "\n" +
    "						<!--More Information-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">More Information</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<a href=\"http://challengepost.com/software/feeding-friendzy\">ChallengePost</a>\n" +
    "								<br/>\n" +
    "								<a href=\"https://github.com/shawnxusy/Feeding-friendzy\">GitHub</a>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div> <!-- close panel-body -->\n" +
    "				</div> <!-- close panel -->\n" +
    "			</div> <!-- close column -->\n" +
    "		</div> <!-- close row -->	\n" +
    "\n" +
    "		<!--MHCI Hackathon-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<div class=\"panel panel-default\">\n" +
    "					<div class=\"panel-heading\">\n" +
    "			    		<h3 class=\"panel-title\">MHCI Hackathon</h3>\n" +
    "					</div>\n" +
    "					<div class=\"panel-body\">\n" +
    "			    		<div class=\"row\">\n" +
    "							<img src=\"../images/Hackathons/MHCIHackathon/MHCI_Hackathon.png\" class=\"img-responsive\">\n" +
    "						</div>\n" +
    "		    			\n" +
    "						<!-- About the Challenge-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">The Challenge</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<p>This challenge was hosted by CMU’s Master’s of Human-Computer Interaction students. Technical support was provided by Microsoft, and the goal of the hackathon was to create a human-centered application with Microsoft technology. This hackathon took place over 20 hours.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<!--Our Project-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">Our Project</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<p>My team decided to use the kinect to create a fully interactive experience called Down Beat. We wanted to create a fun activity that can be used on any big screen by multiple people; we envisioned it being used in a large open area where people are gathered like a festival or amusement park. Down Beat takes a song that is broken into 4 layers. Players use their bodies to control these layers. By moving faster, they speed up the tempo of their layers. By moving closer to the Kinect, they raise the volume of their layers. Additionally, there is a display of fireworks that is controlled by the same movements. Each player has a different color firework and they change volume and height based on movement.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<!--My Contribution-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">My Contribution</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<p>For this project, my contribution was the controller for the music layers. I used C#, Visual Studio, and the <a href=\"http://www.ambiera.com/irrklang/\">IrrKlang</a> music player library. When movement was detected by the Kinect, an event was sent to the music controller which was responsible for parsing the events and making the appropriate adjustments to the corresponding layers of music.</p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<!--Final Application-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">Final Application</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "								<div class=\"thumbnail\"><img src=\"../images/Hackathons/MHCIHackathon/coding.JPG\">\n" +
    "									<div class=\"caption\">	\n" +
    "										Working together during the challenge.\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n" +
    "								<div class=\"thumbnail\"><img src=\"../images/Hackathons/MHCIHackathon/downbeat_demo.jpg\">\n" +
    "									<div class=\"caption\">	\n" +
    "										For the final presentation, we gave a fun demo of our application. The fireworks were shown on a display behind us.\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<!--More Information-->\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<h3 class=\"phase-header\">More Information</h3>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "								<a href=\"https://www.hackerleague.org/hackathons/mhci-hackathon\">HackerLeague</a>\n" +
    "								<br/>\n" +
    "								<a href=\"https://github.com/MasterPie/MHCI_Hackathon\">GitHub</a>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div> <!-- close panel-body -->\n" +
    "				</div> <!-- close panel -->\n" +
    "			</div> <!-- close col -->\n" +
    "		</div><!-- close row -->\n" +
    "	</div> <!-- close container -->\n" +
    "</html>");
}]);

angular.module("../app/views/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/home.html",
    "<!doctype html>\n" +
    "<html>﻿\n" +
    "<link href=\"../Content/home.css\" rel=\"stylesheet\" />\n" +
    "<link href=\"../Content/font-awesome-4.2.0/css/font-awesome.css\" rel=\"stylesheet\">\n" +
    "<link href=\"../Content/contact.css\" rel=\"stylesheet\" />\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"row panel\">\n" +
    "    <!--show large image beside text-->\n" +
    "    <div class=\"col-md-4 bg_blur hidden-sm hidden-xs\">\n" +
    "    </div>\n" +
    "        <!--show white box where large image was to extend background-->\n" +
    "    <div class=\"col-md-4 bg_blur_solid_sm visible-sm\">\n" +
    "    </div>\n" +
    "    <!--show white box where large image was to extend background-->\n" +
    "    <div class=\"col-md-4 bg_blur_solid_xs visible-xs\">\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8 col-xs-12\">\n" +
    "      <!--show small image above dialog box for x-small and small screen size-->\n" +
    "      <img src=\"../images/Home/KaitlynSparks.png\" class=\"img-thumbnail hidden-md hidden-lg hidden-xl picture_mob\" />\n" +
    "      <div class=\"header\">\n" +
    "        <br class=\"hidden-md hidden-lg\"/>\n" +
    "        <br class=\"hidden-md hidden-lg hidden-sm\"/>\n" +
    "        <h1>Kaitlyn Sparks</h1>\n" +
    "        <h4>User Experience Research and Design</h4>\n" +
    "        <span><i>I am a Masters of Human-Computer Interaction student at Carnegie Mellon University graduating in August 2015. I am looking for a career in user experience research and design.</i></span>\n" +
    "        <br/><br/>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col row-centered \">\n" +
    "\n" +
    "            <a href=\"https://www.linkedin.com/in/kaitlynsparks\"><i id=\"social\" class=\"fa fa-linkedin-square fa-3x social-li\"></i></a>\n" +
    "            <a href=\"mailto:kaitlynesparks@gmail.com\"><i id=\"social\" class=\"fa fa-envelope-square fa-3x social-em\"></i></a>\n" +
    "          </div>\n" +
    "          <br class=\"hidden-md hidden-lg hidden-sm\"/>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <br/>\n" +
    "  <h3 class = \"myWork\"> My Work </h3>\n" +
    "  <hr/>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "      <div data-ng-repeat=\"project in projects\">\n" +
    "\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 row-centered\">\n" +
    "          <a ui-sref=\"{{project.Nav}}\">\n" +
    "            <div class=\"thumbnail\">\n" +
    "                  <div class=\"caption\">\n" +
    "                      <h3>{{project.Title}}</h3>\n" +
    "                      <h5>Project Type: {{project.ProjectType}}</h5>\n" +
    "                      <p>{{project.Description}}</p>\n" +
    "                  </div>\n" +
    "                <img src=\"{{project.Thumbnail}}\" alt=\"...\">\n" +
    "            </div>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../app/views/peanuts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/peanuts.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<link href=\"../Content/projectPage.css\" rel=\"stylesheet\" />\n" +
    "	<link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "	<!--Header-->\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"headline\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "					<h1 class=\"headline\">Peanuts</h1>\n" +
    "					<h4 class=\"headling\">Research to understand how reciprocity and trust can impact microcharitable giving online</h4>\n" +
    "					<p class=\"headline\">November 2014 - December 2014</p>\n" +
    "				</div>\n" +
    "			</div>		\n" +
    "		</div>		\n" +
    "		<hr/>\n" +
    "\n" +
    "		<!--Meta Data-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>There are a multitude of places popping up on the internet for the purpose of eliciting and receiving help. Some of these are stand alone sites and others are communities within social sites, such as Reddit. When people are requesting monetary help online, many requests state that the requestor has helped others in the past or plans to help others in the future as part of the description. People that are donating frequently seek validation of who the requestor is from their activity on the site. However, there is no provided way for requestors to prove their previous donations or for those planning to give to see that activity. We wanted to research how a website could give requestors the ability to track their reciprocity, which we defined as the relationship between a user's giving and receiving. We also wanted to see if there was an impact on donations if this information was visible. We predicted that showing reciprocity would allow donors to quickly trust requestors which would help them make quicker decisions about donating and influence the amount they gave.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Peanuts/peanuts-logo-long.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "			</div>\n" +
    "		</div> <!-- end icon image -->\n" +
    "\n" +
    "		<div class=\"row meta-data\">\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2 col-lg-offset-2\">\n" +
    "				<h4 class=\"meta-header\">Process</h4>\n" +
    "				<ul>\n" +
    "					<li>Literature Review</li>\n" +
    "					<li>Initial Survey</li>\n" +
    "					<li>Final Survey</li>\n" +
    "					<li>Application Development</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Contributions</h4>\n" +
    "				<ul>\n" +
    "					<li>Research</li>\n" +
    "					<li>Survey Design</li>\n" +
    "					<li>Survey Analysis</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Team</h4>\n" +
    "				<ul>\n" +
    "					<li>Jeff Harris</li>\n" +
    "					<li>Jim Martin</li>\n" +
    "					<li>Katie Ramp</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Deliverables</h4>\n" +
    "				<ul>\n" +
    "					<li><a href=\"../images/Peanuts/Final-Presentation.pdf\" target=\"_blank\">Presentation</a></li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "		</div> <!-- end Meta-data -->	\n" +
    "\n" +
    "		<!--About the Project-->\n" +
    "\n" +
    "		<!--Literature Review and Initial Research-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Literature Review and Initial Research</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>We began by reading research papers on altruism, motivation, and microvoluntering. One of the papers that we read was an in-depth look at the aspects of a request on the subreddit r/RAOP. They showed that certain information would influence the success of the request. We began looking at r/RAOP and noticed that there were other subreddits where people made requests for help. We analysed their requests and how potential donors responded to common themes. After reviewing a few subreddits and other request websites, we decided to look at how showing reciprocity impacts people’s donations.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!--Initial Survey-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Initial Survey</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>To quickly explore how various representations of reciprocity would influence behavior, we created a survey showing 8 different requests with the same story, but different reciprocity statements. The survey was distributed to 83 different people we recruited from friends and family. We asked to which of the 8 requests they would be most likely to donate. After the survey, we also got some feedback from participants to understand the reasoning behind their choices.</p>\n" +
    "			</div>\n" +
    "		</div>	\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Peanuts/initial-survey.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!--Final Survey-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Final Survey</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>After analyzing the results of the first survey and the feedback we received, we decided to use two of the top four statements to test further. In the first survey, all of the statements showed more giving than receiving, but we also wanted to test whether a positive reciprocity or a negative reciprocity statement would be more likely to get donations. We created a survey to test this and received 276 responses on Amazon's Mechanical Turk. We randomly showed each Turk worker the request and then one visualization of reciprocity or a control showing only the request. We asked how much they would donate, and also recorded the amount of time it took them to answer. The only statistically significant result we found was those who donated spent longer thinking about their decision and as time increased, dollar amount increased as well. We also saw that people generally gave more to people who had given less than they received. The statement \"Martin has given to 20 people and received donations from 50 people\" (3rd card below) was most likely to receive higher amounts of money.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Peanuts/final-survey.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "			</div>\n" +
    "		</div>	\n" +
    "\n" +
    "		<!--Application Development-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Application Development</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>We wanted to see what it would look like to apply the results of our surveys, so we created a microcharity website showing reciprocity. As a team, we determined the concepts for the website, but the development was done by Jeff and Jim. If this had been a longer project, we wanted to use this website to conduct experiments to test what people do with actual money.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Peanuts/Home_Screen.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">On the homescreen of the website, we wanted to show the requestor's name, the request title, and the description of the need. By clicking on his or her name, you are taken to his profile.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/Peanuts/Profile_Screen.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">A user's profile page shows his or her requests and how much money he has raised. It also shows his reciprocity in the form of the number of people he has given to and received donations from.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</html>");
}]);

angular.module("../app/views/resume.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/resume.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col row-centered col-md-10 col-md-offset-1\">\n" +
    "		<img src=\"../images/Sparks_Resume.png\"/>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col row-centered\">\n" +
    "		<a href=\"../images/Sparks_Resume.pdf\" download class=\"btn btn-default\">Download <span class=\"glyphicon glyphicon-download-alt\"></span></a>\n" +
    "	</div>	\n" +
    "</div>	");
}]);

angular.module("../app/views/wakeup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/wakeup.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "	<link href=\"../Content/projectPage.css\" rel=\"stylesheet\" />\n" +
    "	<link href='http://fonts.googleapis.com/css?family=Muli' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "	<!--Header-->\n" +
    "	<div class=\"container\">\n" +
    "		\n" +
    "		<div class=\"headline\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "					<h1 class=\"headline\">WakeUp</h1>\n" +
    "					<h4 class=\"headling\">Development of an Android Application</h4>\n" +
    "					<p class=\"headline\">November 2014 - December 2014</p>\n" +
    "				</div>\n" +
    "			</div>		\n" +
    "		</div>		\n" +
    "		<hr/>\n" +
    "\n" +
    "		<!--Meta Data-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<p>The final project for my Software Structures for User Interfaces Mobile development lab was to create an Android application of our choice. I looked to my own life for inspiration. When my alarm goes off in the morning, the first thing I do is check the weather and the bus information to determine how long I have to get ready and what I need to wear for the day. I decided to build an application that is a dedicated morning alarm clock. This alarm clock allows you to set your preferred city, bus route, and bus stop. When the alarm goes off, this information is displayed to the user.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/WakeUp/wakeup-icon-long.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "			</div>\n" +
    "		</div> <!-- end icon image -->\n" +
    "\n" +
    "		<div class=\"row meta-data\">\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2 col-lg-offset-2\">\n" +
    "				<h4 class=\"meta-header\">Process</h4>\n" +
    "				<ul>\n" +
    "					<li>Design</li>\n" +
    "					<li>Development</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Contributions</h4>\n" +
    "				<ul>\n" +
    "					<li>Application Design</li>\n" +
    "					<li>Android Development</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Technologies</h4>\n" +
    "				<ul>\n" +
    "					<li>Eclipse</li>\n" +
    "					<li>Java</li>\n" +
    "					<li>Android SDK</li>\n" +
    "					<li>Adobe Photoshop</li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "			<div class=\"meta-data-point col col-xs-12 col-sm-3 col-md-3 col-lg-2\">\n" +
    "				<h4 class=\"meta-header\">Deliverables</h4>\n" +
    "				<ul>\n" +
    "					<li><a href=\"https://github.com/kaitlynesparks/WakeUp\" target=\"_blank\">Application Code</a></li>\n" +
    "				</ul>	\n" +
    "			</div>\n" +
    "		</div> <!-- end Meta-data -->\n" +
    "\n" +
    "\n" +
    "		<!--About the project-->\n" +
    "\n" +
    "		<!--Final Designs-->\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<h3 class=\"phase-header\">Final Designs</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2\">\n" +
    "				<img src=\"../images/WakeUp/Final-Screens.png\" class=\"img-responsive\" alt=\"Responsive image\">\n" +
    "				<p class=\"caption\">The final design consisted of 4 screens: Home Screen, Preferences Scrren, Set Alarm Screen, and Alarm Alert Screen.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</html>");
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
    "	<div class=\"col col-md-6\">\n" +
    "        <img src=\"../images/PersonalWebsite/icon.png\" style=\"width: 400px;\">\n" +
    "	</div>\n" +
    "	<div class=\"col col-md-6\">\n" +
    "		<span class=\"category\">Project Type:</span><br/> Design\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Contributions:</span> <br/> Sketch Wireframes, Digital Sketches, Low Fidelity Mockups, High Fidelity Mockups\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Duration:</span> <br/> August 2014 - September 2014 (2.5 weeks)\n" +
    "		<br/><br/>\n" +
    "		<span class=\"category\">Class:</span> <br/> Interaction Design Fundamentals, CMU\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--About the Project-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<p><span class=\"category\">Assignment:</span> Design a personal website home page for desktop and mobile platforms. \n" +
    "		<br/><br/>	\n" +
    "		<span class=\"category\">Design Overview:</span> The focus of this design was to create a webpage and a mobile page with a cohesive look and feel across the two mediums. First, I focused on finding appropriate content for a professional, personal webpage. I chose to keep the design very simple so the important elements were easy to find and consume. Additionally, to create consistency, I paid attention to making the information heirarchy the same across the two screens.</p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "\n" +
    "<!--Process Header-->\n" +
    "<div class=\"row process\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h3>Process</h3>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--Sketch Wireframes-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h4>Sketch Wireframes</h4>\n" +
    "		<p>The first step was to determine the content that was needed for this type of website and make sketch wireframes. While making these sketches, I focused on making the heirarchy consistent across the mobile and desktop versions of the website. I also concentrated on making the most important aspects of the website higher in the heirarchy. I decided that if someone was visiting a page like this, they would want to know who it was about, their title, and how to contact them; so I made that information easy to find at a glance. I also wanted it to be easy to look through examples of work and see a summary about the person, so I included that information on the home screen in the forms of a carousel showing work and a brief summary paragraph. I created 5 sketches of possible layouts and then picked the aspects I liked from each one to create a final sketch and use in future iterations.</p>\n" +
    "		<br/><br/>\n" +
    "	    	<div class=\"row\">\n" +
    "				<div class=\"col col-md-4\">\n" +
    "					<img src=\"../images/PersonalWebsite/website_sketch1.jpg\" class=\"img-responsive\" >\n" +
    "					<div class=\"caption_text\">	\n" +
    "					Sketch 1 for website. I originally included a picture of the person in these sketches but later decided it was not essential enough to be on the homepage and would fit better on the About page.\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col col-md-4\">\n" +
    "					<img src=\"../images/PersonalWebsite/website_sketch2.jpg\" class=\"img-responsive\" >\n" +
    "					<div class=\"caption_text\">	\n" +
    "					Sketch 2 for website which is an iteration on sketch 1. On the mobile site, I moved the navigation to the side but did not move forward with this decision because mobile device screens are generally not wide enough to be able to interact with two columns.\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col col-md-4\">\n" +
    "					<img src=\"../images/PersonalWebsite/website_sketch3.jpg\" class=\"img-responsive\" >\n" +
    "					<div class=\"caption_text\">	\n" +
    "					Sketch 3 for website. In this sketch, I moved the navigation to the side on both the mobile and desktop to keep it consistent. But as with sketch 2, I did not use this moving forward because two columns is difficult for users on a mobile device.\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<br/><br/>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col col-md-4\">\n" +
    "					<img src=\"../images/PersonalWebsite/website_sketch4.jpg\" class=\"img-responsive\" >\n" +
    "					<div class=\"caption_text\">	\n" +
    "						Sketch 4 for website which is an interation on sketch 3. For this iteration, I moved the name to the left on the webpage. I ended up using this in the future because I found this design to be more common on websites, whereas the centered name felt more like a printed report.\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col col-md-4\">\n" +
    "					<img src=\"../images/PersonalWebsite/website_sketch5.jpg\" class=\"img-responsive\">\n" +
    "					<div class=\"caption_text\">	\n" +
    "						Sketch 5 for website which is an interation on sketches 3 and 4. In this iteration, I intended to put the contact information at the top so it was easily accessible. Later, I moved it to the bottom because it is frequently found there on webpages and it was still easy to spot on the bottom\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			<div class=\"col col-md-4\">\n" +
    "				<img src=\"../images/PersonalWebsite/website_sketch_final.jpg\" class=\"img-responsive\">\n" +
    "					<div class=\"caption_text\">	\n" +
    "						The final sketch took elements from the original 5 sketches and put them together.\n" +
    "					</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!--Digital Sketches and Low Fidelity Mockups-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h4>Digital Sketeches and Low Fidelity Mockups</h4>\n" +
    "		<p>After getting feedback from the class on the sketches, I moved to a digital sketch that was exactly the same as the final paper sketch. After getting my idea into a digital version and seeing it at a more realistic size and ratio, I was able to iterate to a low fidelity black and white mockup.</p>\n" +
    "		<br/><br/>\n" +
    "    	<div class=\"row\">\n" +
    "			<div class=\"col col-md-6\">\n" +
    "				<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/digital_sketch.png\">\n" +
    "				</div>\n" +
    "				<div class=\"thumbnail_caption_text\">When moving to digital mockups, my first step was to translate my last paper sketch to an identical digital sketch.</div>\n" +
    "			</div>\n" +
    "			<div class=\"col col-md-6\">\n" +
    "				<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/low_fidelity_mockup.png\">\n" +
    "				</div>\n" +
    "				<div class=\"thumbnail_caption_text\">I created a black and white mock up first because I wanted to focus on content and heirarchy before working with colors and visual design.</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!--High Fidelity Mockups-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h4>High Fidelity Mockups</h4>\n" +
    "		<p>The next step I took was to convert the black and white mock up into a color mock up. I played with a few color schemes based on the low fidelity mock up. However, once I added color, I realized it felt very heavy. So I removed a lot of the color in favor of a very simple final design. For this type of website, I felt that the content needed to be more prominent than colors or dominating design elements.</p>\n" +
    "		<br/><br/>\n" +
    "    	<div class=\"row\">\n" +
    "			<div class=\"col col-md-8 col-md-offset-2\">\n" +
    "				<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/high_fidelity_mockup.png\">\n" +
    "				</div>\n" +
    "				<div class=\"thumbnail_caption_text\">I converted my black and white sketch into a color mockup and iterated on how different color schemes.</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!--Final Design-->\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col col-md-12\">\n" +
    "		<h4>Final Design</h4>\n" +
    "		<p>At the end, I took all the feedback I received from classmates and the pieces of each iteration that I thought worked best and compiled it into a final high-fidelity mockup.</p>\n" +
    "		<br/><br/>\n" +
    "    	<div class=\"row\">\n" +
    "			<div class=\"col col-md-8 col-md-offset-2\">\n" +
    "				<div class=\"thumbnail\"><img src=\"../images/PersonalWebsite/final_design.png\">\n" +
    "				</div>\n" +
    "				<div class=\"thumbnail_caption_text\">My final deliverable was a full scale design for a desktop and mobile site.</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
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

$scope.projects = [{Title: "Accelerate", Description: "A project to design a mobile training application for emergency medical personnel", Thumbnail: "../images/Accelerate/Accelerate_icon2.png", Nav: "accelerate", ProjectType:"Design"},
				   {Title: "Distraction Free Coding", Description: "Research student developer problems using Contextual Design methodology", Thumbnail: "../images/DistractionFreeCoding/distractionfreecoding_icon.png", Nav: "distractionfreecoding", ProjectType:"Research"},
         {Title: "Peanuts", Description: "Research to understand how reciprocity and trust can impact microcharitable giving online", Thumbnail: "../images/Peanuts/peanuts_icon.png", Nav: "peanuts", ProjectType:"Research"},
      /* {Title: "Personal Website Design", Description: "Design a personal website for mobile and desktop", Thumbnail: "../images/PersonalWebsite/personalWebsite_icon.png", Nav: "webdesign", ProjectType: "Design"},*/
     {Title: "Wake Up", Description: "Development of an Android application that gives the weather and bus information when an alarm goes off", Thumbnail: "../images/WakeUp/wakeup_icon.png", Nav: "wakeup", ProjectType: "Development"},
   {Title: "Hackathons and Challenges", Description: "I competed in a hackathon and a challenge to learn new technologies and practice my existing development skills", Thumbnail: "../images/Hackathons/hackathon_icon.png", Nav: "hackathon", ProjectType: "Development"}];

}]);




}());
;(function () {
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