webpackJsonp([0],{"/V0N":function(e,t){},"17Dz":function(e,t,a){"use strict";function n(e){a("/V0N")}var i=a("Ktw9"),s=a("MFo5"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,"data-v-25265997",null);t.a=c.exports},"431Q":function(e,t){},"7zck":function(e,t){},AtCu:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"indigo links__container"},[a("span",{staticClass:"white--text credits__text hidden-sm-and-down"},[e._v(e._s(e.credits))])])},i=[],s={render:n,staticRenderFns:i};t.a=s},"Du/2":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n="UPDATE_TITLE"},E4gg:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",{staticClass:"indigo",attrs:{dark:"",fixed:""}},[a("v-toolbar-title",{staticClass:"hidden-sm-and-down display-1"},[e._v("\n    "+e._s(e.toolbarTitle)+"\n  ")]),e._v(" "),a("v-flex",{staticClass:"links__container text-xs-right"},e._l(e.accounts,function(e,t){return a("v-btn",{key:t,class:e.class,attrs:{icon:"",alt:e.name,title:e.name,href:e.link,target:"__blank"}})}))],1)},i=[],s={render:n,staticRenderFns:i};t.a=s},"EL+O":function(e,t,a){"use strict";t.a={data:function(){return{name:{first:"Theodoro",middleInitial:"S.",last:"Pelingan",suffix:"Jr."},jobTitle:"Fullstack Web Developer",navList:[{title:"Employment",icon:"assignment",class:"material-icons icon green--text text--darken-2 icon--large",route:"/employment"},{title:"Technical Experience",icon:"business",class:"material-icons icon yellow--text text--darken-2 icon--large",route:"/technical-experience"},{title:"Language and Technologies",icon:"code",class:"material-icons icon red--text text--darken-2 icon--large",route:"/language-and-tech"},{title:"Education",icon:"school",class:"material-icons icon blue--text text--darken-2 icon--large",route:"/education"}]}},computed:{fullName:function(){return this.name.first+" "+this.name.middleInitial+" "+this.name.last+" "+this.name.suffix},active:function(){switch(this.$route.name){case"TechnicalExperience":return 1;case"LanguageAndTech":return 2;case"Education":return 3;default:return 0}}},methods:{navigate:function(e,t,a){this.$router.replace(t),this.$store.dispatch("updateTitle",a)}}}},FUAK:function(e,t,a){"use strict";function n(e){a("YDsc")}var i=a("OauM"),s=a("OELE"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,null,null);t.a=c.exports},HCTz:function(e,t,a){"use strict";t.a={data:function(){return{accounts:[{name:"linkedin",class:"blue--text links__container--linkedin",link:"https://www.linkedin.com/in/theodoro-pelingan-jr-31b70711a/"},{name:"stackoverflow",class:"yellow--text links__container--stackoverflow",link:"https://stackoverflow.com/users/4772229/theo"},{name:"github",class:"green--text links__container--github",link:"https://github.com/shierro"}]}},computed:{toolbarTitle:function(){return this.$store.getters.getTitle}}}},Ibod:function(e,t,a){"use strict";t.a={data:function(){return{jobs:[{title:"Fullstack Web Developer",company:{name:"VISEO",stay:"April 2017 - Present",location:"Makati, PH"},taskHeader:"Responsibilities:",tasks:["Perform Scrum ceremonies","Create services following the microservice Architecture","Do Test Driven Development","Do CI / CD with Jenkins & automated tests","Track tasks through JIRA","Create SPA(React w/Redux)","Create css using SASS","Create Unit & e2e Tests","Follow Github Code Lifecycle"],expanded:!0},{title:"Software Engineer 2",company:{name:"Twistresources",stay:"September 2016 – April 2017 (8 mos)",location:"Angeles City, Pampanga, PH"},taskHeader:"Responsibilities:",tasks:["Perform scrum ceremonies","Follow as much as possible the AGILE Manifesto","Build and deploy applications to different environments (Staging, Pre-Prod, Prod)","Do and be subject to code review","Research the most appropriate tech(open source or proprietary) to provide for client/internal needs.","Track tickets/tasks through Redmine","Follow Git workflow","Perform workflow automation(testing, deployment)","Optimize website performance"],expanded:!1},{title:"Web Developer",company:{name:"Rossking Pty. Ltd.",stay:"Mar 2015 – Sep 2016 (1yr 7mos)",location:"Baguio City, PH"},taskHeader:"Responsibilities:",tasks:["Website Maintenance/enhancement","Creating,documenting & connecting to web RESTFUL APIs","RDBMS Schema Modeling","Building websites from scratch","Uploading website files to server via FTP","Creating CRON Jobs via linux bash","Identifying system bottlenecks","Event Driven/Realtime Systems","Website testing/debugging/Architecture","Building Websites that will actually scale.","Optimize website performance"],expanded:!1}]}}}},IcnI:function(e,t,a){"use strict";var n=a("7+uW"),i=a("NYxO"),s=a("snWU");n.a.use(i.a);t.a=new i.a.Store({modules:{header:s.a},strict:!1})},Ktw9:function(e,t,a){"use strict";t.a={data:function(){return{headline:"Projects",projects:[{expanded:!0,title:"E-commerce for Travel Insurance",subTitle:"Web platform for indonesia that provides the company the ability to sell insurance online.",featureHeader:"Modules",features:["Frontend module","Orchestration Module","Order Module","Payment Module","Job Queuing Module","Quotation Module"]},{expanded:!1,title:"Chat Platform",subTitle:"A platform that lets users from across the globe communicate with specific people through SMS, email, & partner applications using a web platform.",featureHeader:"Features",features:["Report generation","Auto reply, Auto ban, Auto filter(inbound & outbound rules)","admin interfaces ","message mapping & queueing systems","monitoring systems with alert mechanism using SMS & Email."]},{expanded:!1,title:"Online Enrollment System",subTitle:"A web application that enables students to search and apply for courses in certain across the globe.",featureHeader:"Modules",features:["Video Interview","Search and compare courses","Online Application"]},{expanded:!1,title:"Robotics Controller",subTitle:"A bundled nodejs application that feeds instructions to UiPath(Robotics).",featureHeader:"What it does",features:["Retrieves data & instructions from a queue","Parses instructions & feeds it to UiPath Robot API","Monitors UiPath Job and send update to queue","Auto upate itself"]},{expanded:!1,title:"Campaign Manager",subTitle:"A web application that is used to manage campaigns and has a rest API to allow the ecommerce-platform to consume data.",featureHeader:"Modules",features:["Manage campaigns(CRUD)","Manage rules inside a campaign","Manage promo codes","REST API to consume campaign benefits"]},{expanded:!1,title:"Life Insurance Product Quotation Module",subTitle:"A module that allows users to get a quote and send leads to salesforce.",featureHeader:"What it does",features:["Gather customer info","Generate quote","Send customer data to salesforce"]}]}}}},M93x:function(e,t,a){"use strict";function n(e){a("digN")}var i=a("xJD8"),s=a("cQ8U"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,null,null);t.a=c.exports},MFo5:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{staticClass:"tech-exp"},[a("v-container",{staticClass:"headline tech-exp__headline"},[e._v(e._s(e.headline))]),e._v(" "),a("v-divider"),e._v(" "),a("v-expansion-panel",{attrs:{popout:"",focusable:""}},e._l(e.projects,function(t,n){return a("v-expansion-panel-content",{key:n,staticClass:"details__container",attrs:{expand:""},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"project.expanded"}},[a("div",{staticClass:"title details__header--job__title",slot:"header"},[e._v(" "+e._s(t.title)+" ")]),e._v(" "),a("div",{staticClass:"subheading tech-exp__sub-heading"},[e._v(e._s(t.subTitle))]),e._v(" "),a("v-divider"),e._v(" "),a("v-flex",{staticClass:"body-2 details__task--header"},[e._v(e._s(t.featureHeader))]),e._v(" "),a("v-list",{attrs:{dense:""}},[e._l(t.features,function(t,n){return[a("v-list-tile",{key:n},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:e._s(t)}})],1)],1)]})],2)],1)}))],1)},i=[],s={render:n,staticRenderFns:i};t.a=s},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7zck"),i=(a.n(n),a("juOh")),s=(a.n(i),a("7+uW")),r=a("3EgV"),o=a.n(r),c=a("X+2x"),l=a.n(c),u=a("M93x"),d=a("YaEn"),m=a("IcnI");s.a.use(o.a),s.a.config.productionTip=!1,s.a.component("star-rating",l.a),new s.a({el:"#app",router:d.a,store:m.a,template:"<App/>",components:{App:u.a}})},OELE:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"lang-tech",attrs:{fluid:""}},e._l(e.languages,function(t,n){return a("v-flex",{key:n},[a("v-container",{staticClass:"headline lang-tech__headline"},[e._v(e._s(t.headline))]),e._v(" "),a("v-divider"),e._v(" "),a("v-list",[e._l(t.list,function(t,n){return[a("v-list-tile",{key:n},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"title",domProps:{textContent:e._s(t.name)}})],1),e._v(" "),a("star-rating",{attrs:{rating:t.rating,"read-only":e.readOnly,increment:e.increment,"text-class":"star-rating__text"}})],1)]})],2)],1)}))},i=[],s={render:n,staticRenderFns:i};t.a=s},OauM:function(e,t,a){"use strict";t.a={data:function(){return{readOnly:!0,increment:.5,languages:{native:{list:[{name:"Javascript",rating:4.5},{name:"HTML/HTML5",rating:4},{name:"CSS/CSS3",rating:4},{name:"PHP",rating:4},{name:"Java",rating:3.5}],headline:"Native"},javascript:{list:[{name:"jQuery",rating:4.5},{name:"React w/Redux",rating:4},{name:"Angular 1 w/ MD",rating:4},{name:"Vue w/Vuex & Vuetify",rating:4},{name:"ExpressJS",rating:4},{name:"SocketIO",rating:4},{name:"Mocha Chai",rating:4},{name:"ES6,7",rating:4},{name:"Grunt/Gulp/Webpack",rating:4},{name:"Istanbul",rating:4},{name:"Sequelize/Mongoose",rating:4},{name:"npm/yarn/bower",rating:4},{name:"Nightwatch/Enzyme",rating:3.5},{name:"Prometheus",rating:3.5},{name:"WebRTC",rating:3.5}],headline:"Javascript"},php:{list:[{name:"Laravel 5",rating:4},{name:"CI 2,3",rating:4},{name:"Eloquent, Doctrine",rating:4},{name:"Composer",rating:4}],headline:"PHP Tech"},css:{list:[{name:"Bootstrap",rating:4},{name:"Material",rating:4},{name:"Vuetify",rating:4}],headline:"CSS Frameworks"},database:{list:[{name:"MySQL/MariaDB",rating:4},{name:"PostgreSQL",rating:4},{name:"MongoDB",rating:4},{name:"Redis",rating:4}],headline:"Database"},others:{list:[{name:"GIT",rating:4.5},{name:"SVN",rating:4},{name:"docker/docker-compose",rating:4},{name:"AWS/OpenShift",rating:4},{name:"Kong",rating:3.5},{name:"New Relic",rating:3.5},{name:"Kubernetes",rating:3.5}],headline:"Dev/Ops & stuff"}}}}}},PyHo:function(e,t){},SczH:function(e,t,a){"use strict";function n(e){a("431Q")}var i=a("EL+O"),s=a("bVzc"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,null,null);t.a=c.exports},TVmP:function(e,t,a){"use strict";function n(e){a("k1eu")}var i=a("UthT"),s=a("AtCu"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,"data-v-4c30d5db",null);t.a=c.exports},UthT:function(e,t,a){"use strict";t.a={data:function(){return{credits:"© 2017"}}}},YDsc:function(e,t){},YaEn:function(e,t,a){"use strict";var n=a("7+uW"),i=a("/ocq"),s=a("v4vk"),r=a("ZLzf"),o=a("17Dz"),c=a("FUAK");n.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Main",redirect:"/employment"},{path:"/employment",name:"Employment",component:r.a},{path:"/education",name:"Education",component:s.a},{path:"/technical-experience",name:"TechnicalExperience",component:o.a},{path:"/language-and-tech",name:"LanguageAndTech",component:c.a}]})},ZIKG:function(e,t){},ZLzf:function(e,t,a){"use strict";function n(e){a("ZIKG")}var i=a("Ibod"),s=a("xrUu"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,"data-v-936b40a8",null);t.a=c.exports},bVzc:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{persistent:"",light:"",overflow:"",permanent:""}},[n("v-card",{staticClass:"drawer__card",attrs:{"elevation-1":""}},[n("v-avatar",{staticClass:"drawer__card--avatar"},[n("img",{attrs:{src:a("yu07")}})]),e._v(" "),n("span",{staticClass:"drawer__card--name"},[e._v("\n      "+e._s(e.fullName)+"\n    ")]),e._v(" "),n("span",{staticClass:"drawer__card--title"},[e._v("\n      "+e._s(e.jobTitle)+"\n    ")])],1),e._v(" "),n("v-list",{staticClass:"drawer__nav-list",attrs:{"two-line":""}},[e._l(e.navList,function(t,a){return[n("v-list-tile",{key:a,class:e.active===a?"active":"",attrs:{avatar:"",ripple:""},on:{click:function(n){n.stopPropagation(),e.navigate(a,t.route,t.title)}}},[n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"drawer__nav-list--title"},[n("i",{class:t.class},[e._v(e._s(t.icon))]),e._v(" "),n("span",[e._v(e._s(t.title))])])],1)],1),e._v(" "),n("v-divider",{key:a})]})],2)],1)},i=[],s={render:n,staticRenderFns:i};t.a=s},cQ8U:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"app",toolbar:"",footer:""}},[a("drawer"),e._v(" "),a("main-header"),e._v(" "),a("main",[a("v-slide-x-reverse-transition",[a("router-view")],1)],1),e._v(" "),a("main-footer")],1)},i=[],s={render:n,staticRenderFns:i};t.a=s},digN:function(e,t){},juOh:function(e,t){},k1eu:function(e,t){},mC59:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("h3",[e._v("Education :)")])])},i=[],s={render:n,staticRenderFns:i};t.a=s},rHPr:function(e,t,a){"use strict";t.a={}},snWU:function(e,t,a){"use strict";var n=a("bOdI"),i=a.n(n),s=a("Du/2"),r={title:"Employment"},o={getTitle:function(e){return e.title}},c={updateTitle:function(e,t){(0,e.commit)(s.a,{title:t})}},l=i()({},s.a,function(e,t){var a=t.title;e.title=a});t.a={state:r,getters:o,actions:c,mutations:l}},teIl:function(e,t,a){"use strict";function n(e){a("PyHo")}var i=a("HCTz"),s=a("E4gg"),r=a("VU/8"),o=n,c=r(i.a,s.a,o,"data-v-6d6339cd",null);t.a=c.exports},v4vk:function(e,t,a){"use strict";var n=a("rHPr"),i=a("mC59"),s=a("VU/8"),r=s(n.a,i.a,null,null,null);t.a=r.exports},xJD8:function(e,t,a){"use strict";var n=a("SczH"),i=a("TVmP"),s=a("teIl");t.a={components:{mainFooter:i.a,Drawer:n.a,MainHeader:s.a}}},xrUu:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{staticClass:"employment"},[a("v-expansion-panel",{attrs:{popout:"",focusable:""}},e._l(e.jobs,function(t,n){return a("v-expansion-panel-content",{key:n,staticClass:"details__container",attrs:{expand:""},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"job.expanded"}},[a("div",{staticClass:"headline details__header--job__title",slot:"header"},[e._v(e._s(t.title))]),e._v(" "),a("div",{staticClass:"details__header"},[a("div",{staticClass:"subheading"},[a("span",{staticClass:"details__header--company__name"},[e._v(e._s(t.company.name))]),e._v(" "),a("span",{staticClass:"details__header--company__stay"},[e._v(e._s(t.company.stay))])]),e._v(" "),a("div",{staticClass:"subheading"},[e._v("Makati, PH")])]),e._v(" "),a("v-divider"),e._v(" "),a("v-flex",{staticClass:"title details__task--header"},[e._v(e._s(t.taskHeader))]),e._v(" "),a("v-list",{attrs:{dense:""}},[e._l(t.tasks,function(t,n){return[a("v-list-tile",{key:n},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:e._s(t)}})],1)],1)]})],2)],1)}))],1)},i=[],s={render:n,staticRenderFns:i};t.a=s},yu07:function(e,t,a){e.exports=a.p+"static/img/picture.44dcec6.jpg"}},["NHnr"]);
//# sourceMappingURL=app.1779ee3fe812d2f8b47f.js.map