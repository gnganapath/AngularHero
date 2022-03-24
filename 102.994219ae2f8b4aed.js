"use strict";(self.webpackChunkAngularHero=self.webpackChunkAngularHero||[]).push([[102],{8102:(Z,s,r)=>{r.r(s),r.d(s,{AngularDashboardModule:()=>p});var d=r(9808),u=r(8140),t=r(1223);const g=function(n,o){return{"btn-active":n,btn:o}},a=function(n,o){return{grid:n,list:o}},l=[{path:"",component:(()=>{class n{constructor(){this.displayMode=1}ngOnInit(){}listView(){this.displayMode=2}gridView(){this.displayMode=1}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-angular-dashboard"]],decls:414,vars:56,consts:[["title","Switch to list view or grid view",1,"btnContainer"],[3,"ngClass","click"],[1,"fa","fa-bars"],[1,"fa","fa-th-large"],[1,"row"],[3,"ngClass"],[1,"title"],[1,"pull-left"],["routerLink","/angular-intro",1,"pull-right"],[1,"content"],["routerLink","/modules-components",1,"pull-right"],[1,"parent"],[1,"front"],[1,"back"],["routerLink","/forms-binding",1,"pull-right"],[1,"view","scard1"],[1,"frontText"],[1,"mask"],["routerLink","/http-client-services",1,"pull-right"],["routerLink","/routing-navigation",1,"pull-right"],[1,"info"],["routerLink","/npm-library-update",1,"pull-right"],["align","left"],["routerLink","/redux-ngrx",1,"pull-right"],["routerLink","/servicework-pwa-ssr",1,"pull-right"],["routerLink","/testing-unit-integrate-e2e",1,"pull-right"],["href","https://angular.io/guide/cheatsheet","target","_blank"],["href","https://angular.io/cli","target","_blank"],["href","https://angular.io/api","target","_blank"],["href","https://angular.io/guide/creating-libraries","target","_blank"],["routerLink","/security-owasp-prod-microUI",1,"pull-right"],["routerLink","/devtool-i18n-cheatsheet",1,"pull-right"],["routerLink","/angular-dashboard",1,"pull-right"],["href","https://webpack.js.org/","target","_blank"],["href","https://angular.io/guide/styleguide","target","_blank"],["href","https://angular.io/guide/glossary","target","_blank"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return e.listView()}),t._UZ(2,"i",2),t._uU(3," List View"),t.qZA(),t.TgZ(4,"button",1),t.NdJ("click",function(){return e.gridView()}),t._UZ(5,"i",3),t._uU(6," Grid View "),t.qZA()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"span",7),t._uU(11,"1.Angular Introdution "),t.qZA(),t.TgZ(12,"span",8),t._uU(13," \u27f9 "),t.qZA()(),t.TgZ(14,"div",9)(15,"b"),t._uU(16,"What is Angular?"),t.qZA(),t.TgZ(17,"p"),t._uU(18," Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop. "),t.qZA()()(),t.TgZ(19,"div",5)(20,"div",6)(21,"span",7),t._uU(22,"2. Components & Modules "),t.qZA(),t.TgZ(23,"span",10),t._uU(24," \u27f9 "),t.qZA()(),t.TgZ(25,"div",9)(26,"div",11)(27,"div",12)(28,"b"),t._uU(29,"Module"),t.qZA(),t.TgZ(30,"p")(31,"b"),t._uU(32,"@NgModule"),t.qZA()(),t.TgZ(33,"p"),t._uU(34," Every Angular app has a root module, conventionally named AppModule, which provides the bootstrap mechanism that launches the application. An app typically contains many functional modules. "),t.qZA()(),t.TgZ(35,"div",13)(36,"b"),t._uU(37,"Component"),t.qZA(),t.TgZ(38,"p")(39,"b"),t._uU(40," @Component()"),t.qZA()(),t.TgZ(41,"p"),t._uU(42," Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM). Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment. "),t.qZA()()()()(),t.TgZ(43,"div",5)(44,"div",6)(45,"span",7),t._uU(46,"3. Forms & Bindings"),t.qZA(),t.TgZ(47,"span",14),t._uU(48," \u27f9 "),t.qZA()(),t.TgZ(49,"div",9)(50,"div",15)(51,"div",16)(52,"b"),t._uU(53,"Introduction to forms in Angular"),t.qZA(),t.TgZ(54,"p"),t._uU(55," Handling user input with forms is the cornerstone of many common applications. Applications use forms to enable users to log in, to update a profile, to enter sensitive information, and to perform many other data-entry tasks. "),t.qZA(),t.TgZ(56,"p"),t._uU(57," [Data Binding], (Event Binding), [(Two Way binding)] - Deprecated "),t.qZA()(),t.TgZ(58,"div",17)(59,"p")(60,"b"),t._uU(61,"Reactive forms"),t.qZA(),t._uU(62," are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms. "),t.qZA(),t.TgZ(63,"p")(64,"b"),t._uU(65,"Template-driven"),t.qZA(),t._uU(66," forms are useful for adding a simple form to an app, such as an email list signup form. They're easy to add to an app, but they don't scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, use template-driven forms. "),t.qZA()()()()()(),t.TgZ(67,"div",4)(68,"div",5)(69,"div",6)(70,"span",7),t._uU(71,"4. HttpClient, D.I- Services"),t.qZA(),t.TgZ(72,"span",18),t._uU(73," \u27f9 "),t.qZA()(),t.TgZ(74,"div",9)(75,"div",15)(76,"div",16)(77,"p"),t._uU(78," Most front-end applications communicate with backend services over the HTTP protocol. Modern browsers support two different APIs for making HTTP requests: the XMLHttpRequest interface and the fetch() API. "),t.qZA(),t.TgZ(79,"p"),t._uU(80," The HttpClient in "),t.TgZ(81,"b"),t._uU(82,"@angular/common/http"),t.qZA(),t._uU(83," offers a simplified client HTTP API for Angular applications that rests on the XMLHttpRequest interface exposed by browsers. Additional benefits of HttpClient include testability features, typed request and response objects, request and response interception, Observable apis, and streamlined error handling. "),t.qZA()(),t.TgZ(84,"div",17),t._uU(85," @Injectable "),t.TgZ(86,"p"),t._uU(87,"http.get"),t.qZA(),t.TgZ(88,"p"),t._uU(89,"http.post"),t.qZA(),t.TgZ(90,"p"),t._uU(91,"http.put"),t.qZA(),t.TgZ(92,"p"),t._uU(93,"http.delete"),t.qZA(),t.TgZ(94,"p"),t._uU(95," @Component1( Constructor2(private serviceInstance : My Service) ) "),t.qZA()()()()(),t.TgZ(96,"div",5)(97,"div",6)(98,"span",7),t._uU(99,"5. Routing & Navigations"),t.qZA(),t.TgZ(100,"span",19),t._uU(101," \u27f9 "),t.qZA()(),t.TgZ(102,"div",9)(103,"div",15)(104,"div",16)(105,"p"),t._uU(106,"The browser is a familiar model of application navigation:"),t.qZA(),t.TgZ(107,"ul")(108,"li"),t._uU(109," Enter a URL in the address bar and the browser navigates to a corresponding page. "),t.qZA(),t.TgZ(110,"li"),t._uU(111," Click links on the page and the browser navigates to a new page.Click the browser's back and forward buttons and the browser navigates backward and forward through the history of pages you've seen. "),t.qZA()()(),t.TgZ(112,"div",17)(113,"h5"),t._uU(114,"Login - CanActivate"),t.qZA(),t.TgZ(115,"div"),t._uU(116,"Auth Guard"),t.qZA(),t.TgZ(117,"a",20),t._uU(118,"routing restriction"),t.qZA()()()()(),t.TgZ(119,"div",5)(120,"div",6)(121,"span",7),t._uU(122,"6.NPM Libraries, Upgrade, RxJs Observables & Sharing"),t.qZA(),t.TgZ(123,"span",21),t._uU(124," \u27f9 "),t.qZA()(),t.TgZ(125,"div",9)(126,"div",15)(127,"div",16)(128,"p")(129,"b"),t._uU(130,"RxJS (Reactive Extensions for JavaScript)"),t.qZA(),t._uU(131," is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code "),t.qZA(),t.TgZ(132,"p"),t._uU(133," The "),t.TgZ(134,"b"),t._uU(135,"RxJS library "),t.qZA(),t._uU(136," - Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change "),t.qZA(),t.TgZ(137,"table")(138,"thead")(139,"tr")(140,"th",22),t._uU(141,"Area"),t.qZA(),t.TgZ(142,"th",22),t._uU(143,"Operators"),t.qZA()()(),t.TgZ(144,"tbody")(145,"tr")(146,"td",22),t._uU(147,"Creation"),t.qZA(),t.TgZ(148,"td",22)(149,"code"),t._uU(150,"from"),t.qZA(),t._uU(151,","),t.TgZ(152,"code"),t._uU(153,"fromEvent"),t.qZA(),t._uU(154,", "),t.TgZ(155,"code"),t._uU(156,"of"),t.qZA()()(),t.TgZ(157,"tr")(158,"td",22),t._uU(159,"Combination"),t.qZA(),t.TgZ(160,"td",22)(161,"code"),t._uU(162,"combineLatest"),t.qZA(),t._uU(163,", "),t.TgZ(164,"code"),t._uU(165,"concat"),t.qZA(),t._uU(166,", "),t.TgZ(167,"code"),t._uU(168,"merge"),t.qZA(),t._uU(169,", "),t.TgZ(170,"code"),t._uU(171,"startWith"),t.qZA(),t._uU(172," , "),t.TgZ(173,"code"),t._uU(174,"withLatestFrom"),t.qZA(),t._uU(175,", "),t.TgZ(176,"code"),t._uU(177,"zip"),t.qZA()()(),t.TgZ(178,"tr")(179,"td",22),t._uU(180,"Filtering"),t.qZA(),t.TgZ(181,"td",22)(182,"code"),t._uU(183,"debounceTime"),t.qZA(),t._uU(184,", "),t.TgZ(185,"code"),t._uU(186,"distinctUntilChanged"),t.qZA(),t._uU(187,", "),t.TgZ(188,"code"),t._uU(189,"filter"),t.qZA(),t._uU(190,", "),t.TgZ(191,"code"),t._uU(192,"take"),t.qZA(),t._uU(193,", "),t.TgZ(194,"code"),t._uU(195,"takeUntil"),t.qZA()()(),t.TgZ(196,"tr")(197,"td",22),t._uU(198,"Transformation"),t.qZA(),t.TgZ(199,"td",22)(200,"code"),t._uU(201,"bufferTime"),t.qZA(),t._uU(202,", "),t.TgZ(203,"code"),t._uU(204,"concatMap"),t.qZA(),t._uU(205,", "),t.TgZ(206,"code"),t._uU(207,"map"),t.qZA(),t._uU(208,", "),t.TgZ(209,"code"),t._uU(210,"mergeMap"),t.qZA(),t._uU(211,", "),t.TgZ(212,"code"),t._uU(213,"scan"),t.qZA(),t._uU(214,", "),t.TgZ(215,"code"),t._uU(216,"switchMap"),t.qZA()()(),t.TgZ(217,"tr")(218,"td",22),t._uU(219,"Utility"),t.qZA(),t.TgZ(220,"td",22)(221,"code"),t._uU(222,"tap"),t.qZA()()(),t.TgZ(223,"tr")(224,"td",22),t._uU(225,"Multicasting"),t.qZA(),t.TgZ(226,"td",22)(227,"code"),t._uU(228,"share"),t.qZA()()()()()(),t.TgZ(229,"div",17)(230,"p")(231,"b"),t._uU(232,"ngx-chart"),t.qZA()(),t.TgZ(233,"p")(234,"b"),t._uU(235,"Ag-Grid"),t.qZA()(),t.TgZ(236,"p")(237,"b"),t._uU(238,"ng-bootstrap"),t.qZA()(),t._uU(239," npm install d3 --save npm install @types/d3 --save-dev "),t.qZA(),t.TgZ(240,"div",17)(241,"p")(242,"b"),t._uU(243,"https://update.angular.io"),t.qZA(),t._uU(244,"/"),t.qZA(),t.TgZ(245,"p"),t._uU(246," The Angular Update Guide provides customized update instructions, based on the current and target versions that you specify. It includes basic and advanced update paths, to match the complexity of your applications. It also includes troubleshooting information and any recommended manual changes to help you get the most out of the new release. "),t.qZA()()()()()(),t.TgZ(247,"div",4)(248,"div",5)(249,"div",6)(250,"span",7),t._uU(251,"7. Redux -NgRx"),t.qZA(),t.TgZ(252,"span",23),t._uU(253," \u27f9 "),t.qZA()(),t.TgZ(254,"div",9)(255,"div",15)(256,"div",16)(257,"p")(258,"b"),t._uU(259,"What is Redux?"),t.qZA()(),t.TgZ(260,"p"),t._uU(261," Redux is a popular approach to managing state in applications. It emphasises: "),t.qZA(),t.TgZ(262,"ul")(263,"li"),t._uU(264,"A single, immutable data store."),t.qZA(),t.TgZ(265,"li"),t._uU(266,"One-way data flow."),t.qZA(),t.TgZ(267,"li"),t._uU(268," An approach to change based on pure functions and a stream of actions. "),t.qZA()()(),t.TgZ(269,"div",17)(270,"p")(271,"b"),t._uU(272,"ng build --prod"),t.qZA()(),t.TgZ(273,"ul")(274,"li"),t._uU(275,"Apache"),t.qZA(),t.TgZ(276,"li"),t._uU(277,"IIS"),t.qZA(),t.TgZ(278,"li")(279,"b"),t._uU(280,"AOT"),t.qZA(),t._uU(281," - compilation"),t.qZA()()()()()(),t.TgZ(282,"div",5)(283,"div",6)(284,"span",7),t._uU(285,"8. Service Work -PWA - SSR"),t.qZA(),t.TgZ(286,"span",24),t._uU(287," \u27f9 "),t.qZA()()(),t.TgZ(288,"div",5)(289,"div",6)(290,"span",7),t._uU(291,"9. Testing - Unit-Integration-2e2"),t.qZA(),t.TgZ(292,"span",25),t._uU(293," \u27f9 "),t.qZA()(),t.TgZ(294,"div",9)(295,"div",15)(296,"div",16)(297,"p")(298,"b")(299,"a",26),t._uU(300,"https://angular.io/guide/cheatsheet"),t.qZA()()()(),t.TgZ(301,"div",17)(302,"p")(303,"b")(304,"a",27),t._uU(305,"Angular CLI"),t.qZA()()(),t.TgZ(306,"p")(307,"b")(308,"a",28),t._uU(309,"Angular API Ref"),t.qZA()()(),t.TgZ(310,"p")(311,"b")(312,"a",29),t._uU(313,"Angular Published Libraries"),t.qZA()()()()()()()(),t.TgZ(314,"div",4)(315,"div",5)(316,"div",6)(317,"span",7),t._uU(318,"10. Security - OWASP, Prod Build, Micro UI"),t.qZA(),t.TgZ(319,"span",30),t._uU(320," \u27f9 "),t.qZA()(),t.TgZ(321,"div",9)(322,"div",15)(323,"div",16)(324,"p")(325,"b"),t._uU(326,"ngx-chart"),t.qZA()(),t.TgZ(327,"p")(328,"b"),t._uU(329,"Ag-Grid"),t.qZA()(),t.TgZ(330,"p")(331,"b"),t._uU(332,"ng-bootstrap"),t.qZA()(),t._uU(333," npm install d3 --save npm install @types/d3 --save-dev "),t.qZA(),t.TgZ(334,"div",17)(335,"p")(336,"b"),t._uU(337,"Micro UI /Front end"),t.qZA(),t._uU(338,"/"),t.qZA(),t.TgZ(339,"p"),t._uU(340," Creating Angular Web Components: A Micro Frontend Tutorial"),t._UZ(341,"br"),t.TgZ(342,"a"),t._uU(343,"https://gorillalogic.com/blog/creating-angular-web-components-a-micro-frontend-tutorial/"),t.qZA()()()()()(),t.TgZ(344,"div",5)(345,"div",6)(346,"span",7),t._uU(347,"11. Dev Tools, i18N, Cheat Sheet, ADA - Accessability"),t.qZA(),t.TgZ(348,"span",31),t._uU(349," \u27f9 "),t.qZA()(),t.TgZ(350,"div",9)(351,"div",15)(352,"div",16)(353,"p")(354,"b"),t._uU(355,"Chrome Dev Tools "),t.qZA()(),t.TgZ(356,"p")(357,"b"),t._uU(358,"i18N - Internationalization"),t.qZA()()(),t.TgZ(359,"div",17)(360,"p")(361,"b"),t._uU(362,"Cheat Sheet"),t.qZA()(),t.TgZ(363,"ul")(364,"li"),t._uU(365,"ADA"),t.qZA(),t.TgZ(366,"li"),t._uU(367,"ngcc"),t.qZA(),t.TgZ(368,"li")(369,"b"),t._uU(370,"AOT"),t.qZA(),t._uU(371," - compilation"),t.qZA()()()()()(),t.TgZ(372,"div",5)(373,"div",6)(374,"span",7),t._uU(375,"12. Angular Dashboard/Summary"),t.qZA(),t.TgZ(376,"span",32),t._uU(377," \u27f9 "),t.qZA()(),t.TgZ(378,"div",9)(379,"div",15)(380,"div",16)(381,"p")(382,"b")(383,"a",33),t._uU(384,"Webpack - https://webpack.js.org/"),t.qZA()()(),t.TgZ(385,"p")(386,"b")(387,"a",26),t._uU(388,"https://angular.io/guide/cheatsheet"),t.qZA()()(),t.TgZ(389,"p")(390,"b")(391,"a",26),t._uU(392,"https://angular.io/guide/cheatsheet"),t.qZA()()(),t.TgZ(393,"p")(394,"b")(395,"a",34),t._uU(396,"https://angular.io/guide/styleguide"),t.qZA()()(),t.TgZ(397,"p")(398,"b")(399,"a",35),t._uU(400,"https://angular.io/guide/glossary"),t.qZA()()()(),t.TgZ(401,"div",17)(402,"p")(403,"b")(404,"a",27),t._uU(405,"Angular CLI"),t.qZA()()(),t.TgZ(406,"p")(407,"b")(408,"a",28),t._uU(409,"Angular API Ref"),t.qZA()()(),t.TgZ(410,"p")(411,"b")(412,"a",29),t._uU(413,"Angular Published Libraries"),t.qZA()()()()()()()()),2&i&&(t.xp6(1),t.Q6J("ngClass",t.WLB(14,g,1===e.displayMode,2===e.displayMode)),t.xp6(3),t.Q6J("ngClass",t.WLB(17,g,2===e.displayMode,1===e.displayMode)),t.xp6(4),t.Q6J("ngClass",t.WLB(20,a,1===e.displayMode,1!=e.displayMode)),t.xp6(11),t.Q6J("ngClass",t.WLB(23,a,1===e.displayMode,1!=e.displayMode)),t.xp6(24),t.Q6J("ngClass",t.WLB(26,a,1===e.displayMode,1!=e.displayMode)),t.xp6(25),t.Q6J("ngClass",t.WLB(29,a,1===e.displayMode,1!=e.displayMode)),t.xp6(28),t.Q6J("ngClass",t.WLB(32,a,1===e.displayMode,1!=e.displayMode)),t.xp6(23),t.Q6J("ngClass",t.WLB(35,a,1===e.displayMode,1!=e.displayMode)),t.xp6(129),t.Q6J("ngClass",t.WLB(38,a,1===e.displayMode,1!=e.displayMode)),t.xp6(34),t.Q6J("ngClass",t.WLB(41,a,1===e.displayMode,1!=e.displayMode)),t.xp6(6),t.Q6J("ngClass",t.WLB(44,a,1===e.displayMode,1!=e.displayMode)),t.xp6(27),t.Q6J("ngClass",t.WLB(47,a,1===e.displayMode,1!=e.displayMode)),t.xp6(29),t.Q6J("ngClass",t.WLB(50,a,1===e.displayMode,1!=e.displayMode)),t.xp6(28),t.Q6J("ngClass",t.WLB(53,a,1===e.displayMode,1!=e.displayMode)))},directives:[d.mk,u.rH],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}.grid[_ngcontent-%COMP%]{float:left;width:31.8%;height:24vh;margin:.5% .6%;box-shadow:1px 1px 2px 3px gray}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:10px;height:15%;font-weight:700;background:#bd3cb3e0;color:#fff}.grid[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:10px;height:85%;overflow-y:auto;text-align:justify}.list[_ngcontent-%COMP%]{float:left;width:100%;padding:10px;margin:4px 8px;background:#e4e2e2;border:1px solid #ccc}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}.btnContainer[_ngcontent-%COMP%]{top:10px;position:absolute;right:20px}.btn[_ngcontent-%COMP%]{padding:6px;background-color:#e8892b;cursor:pointer}.btn-active[_ngcontent-%COMP%]{padding:6px;background-color:#f1f1f1}.parent[_ngcontent-%COMP%]{transition:transform 1s ease-in-out 0s;transform-style:preserve-3d;width:100%}.parent[_ngcontent-%COMP%]:hover{transform:rotateY(180deg)}.back[_ngcontent-%COMP%], .front[_ngcontent-%COMP%]{width:100%;height:170px;position:absolute;top:0;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.front[_ngcontent-%COMP%]{background-color:#f1f1f1}.back[_ngcontent-%COMP%]{background-color:#fff;transform:rotateY(180deg)}.list[_ngcontent-%COMP%]   .parent[_ngcontent-%COMP%]{display:none}.view[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;float:left;overflow:hidden;position:relative;cursor:default;background:#fff;border:thin solid #ccc}.scard1[_ngcontent-%COMP%]{background:#f1f1f1}.scard2[_ngcontent-%COMP%]{background:#e8892b}.scard3[_ngcontent-%COMP%]{background:#eb2a47}.scard4[_ngcontent-%COMP%]{background:#27699a}.view[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%]{width:100%;height:98%;position:absolute;overflow:hidden;top:0;left:0;text-align:justify;background-color:#fff;transform:translateY(-200px);-ms-filter:"progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);opacity:1;transition:all .7s ease-in-out}.view[_ngcontent-%COMP%]   .frontText[_ngcontent-%COMP%]{display:block;position:relative;transition:all .7s ease-in-out}.frontText[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .frontText[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333}.view[_ngcontent-%COMP%]:hover   .mask[_ngcontent-%COMP%]{transform:translateY(0)}.view[_ngcontent-%COMP%]:hover   .frontText[_ngcontent-%COMP%]{transform:translateY(200px)}.score-cards[_ngcontent-%COMP%]   .single-card[_ngcontent-%COMP%]{padding:0}.frontText[_ngcontent-%COMP%]{padding:1rem}.list[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]{display:none}b[_ngcontent-%COMP%]{color:brown;background:yellow}']}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,u.Bz.forChild(l)]]}),n})()}}]);