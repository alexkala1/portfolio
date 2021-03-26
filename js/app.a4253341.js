(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-main",{attrs:{dark:"","pa-0":""}},[a("v-container",{attrs:{fluid:""}},[a("Mainpage",{staticStyle:{height:"100vh"}}),a("Projects")],1)],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"home",attrs:{dark:"",fluid:"","pa-0":"","fill-height":""}},[n("v-row",{staticClass:"d-flex flex-column",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-row",{staticClass:"d-flex flex-column",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"dark white--text text-center",staticStyle:{"font-size":"3.75rem","font-weight":"100 !important"}},[t._v(" Alex Kalaitzidis ")])]),n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"dark white--text text-center heading font-weight-thin ma-3"},[t._v(" Front-end web developer ")])])],1)],1),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},t._l(t.contact,(function(e){return n("v-btn",{key:e.link,staticClass:"ftr ma-4 white--text",attrs:{href:e.link,icon:""}},[n("v-icon",[t._v(t._s(e.icon))])],1)})),1),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{rounded:"",light:""},on:{click:function(e){return t.$vuetify.goTo(".projects",500,300)}}},[n("v-icon",{staticClass:"pr-2"},[t._v(" mdi-folder-account ")]),t._v(" My Projects ")],1)],1),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{rounded:"",light:""},on:{click:function(e){t.showcv=!t.showcv}}},[n("v-icon",{staticClass:"pr-2"},[t._v("mdi-file-document")]),t._v(" Preview CV ")],1)],1)],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"min-width":"50%",dark:""},model:{value:t.showcv,callback:function(e){t.showcv=e},expression:"showcv"}},[n("v-card",{attrs:{"max-height":"100%"}},[n("v-img",{attrs:{"max-height":"1000",contain:"",src:a("9f60")}}),n("v-divider"),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.showcv=!1}}},[t._v(" Close ")])],1)],1)],1)],1)},s=[],c={data:function(){return{contact:[{icon:"mdi-github",link:"http://github.com/alexkala1"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/alex-kalaitzidis-a1386917b/"},{icon:"mdi-email-send",link:"mailto:alexkalaitzidis2@gmail.com"}],showcv:!1}}},l=c,d=a("2877"),u=a("6544"),h=a.n(u),p=a("8336"),f=a("b0af"),m=a("99d9"),v=a("62ad"),g=a("a523"),b=a("169a"),w=a("ce7e"),y=a("132d"),x=a("adda"),k=a("0fd9"),j=Object(d["a"])(l,r,s,!1,null,null,null),_=j.exports;h()(j,{VBtn:p["a"],VCard:f["a"],VCardActions:m["a"],VCol:v["a"],VContainer:g["a"],VDialog:b["a"],VDivider:w["a"],VIcon:y["a"],VImg:x["a"],VRow:k["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"projects",attrs:{dark:"","fill-height":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"10"}},[a("h1",{staticClass:"text-center white--text font-weight-light display-3 pa-5 my-5"},[t._v(" Projects ")]),a("v-expansion-panels",{attrs:{dark:""}},t._l(t.projects,(function(e,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",{staticStyle:{"font-size":"18px"}},[t._v(" "+t._s(e.title)+" ")]),a("v-expansion-panel-content",[a("v-card",{attrs:{dark:""}},[a("v-card-text",[a("v-row",{attrs:{justify:"space-between",align:"center"}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card-text",{staticClass:"pa-0"},[t._v(" "+t._s(e.description)+" ")])],1),a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-card-title",{staticClass:"justify-center"},[t._v(" Technologies ")]),t._l(e.technologies,(function(e,n){return a("v-card-title",{key:n,staticClass:"subtitle pa-0 font-weight-light"},[a("v-icon",{staticClass:"pr-2"},[t._v(" "+t._s(e.icon)+" ")]),t._v(" "+t._s(e.name)+" ")],1)}))],2)],1)],1),a("v-divider"),a("v-card-actions",[a("v-row",{attrs:{justify:t.$vuetify.breakpoint.mdAndUp?"start":"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{text:"",href:e.code,target:"_blank"}},[a("v-icon",{staticClass:"pr-2"},[t._v(" mdi-code-braces ")]),t._v(" View Code ")],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{text:""}},[a("v-icon",{staticClass:"pr-2"},[t._v("mdi-link")]),t._v(" view project ")],1)],1)],1)],1)],1)],1)],1)})),1)],1)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{rounded:"",light:""},on:{click:function(e){return t.$vuetify.goTo(".home",-500,-500)}}},[t._v(" Back to top "),a("v-icon",{staticClass:"pl-2"},[t._v(" mdi-chevron-up ")])],1)],1)])],1)],1)},V=[],S={data:function(){return{projects:[{title:"This Portfolio",description:"This is what I have created in a short period of time when I had some spare time.",technologies:[{name:"VueJS",icon:"mdi-vuejs"},{name:"Vuetify",icon:"mdi-vuetify"}],code:"https://github.com/alexkala1/portfolio",link:"https://alexkala1.github.io/portfolio"},{title:"Thesis",description:"This project is a fingerprint authentication application for a university as I had it in mind. In this web application there are 3 different types of people with the authorisation to log in: Students, Secretaries and Teachers each one with their own access points and usabilities of the fingerprint authentication. For example students attend their lectures via fingerprint, teachers start their lectures via fingerprint etc.",technologies:[{name:"VueJS",icon:"mdi-vuejs"},{name:"Vuetify",icon:"mdi-vuetify"},{name:"NodeJS",icon:"mdi-nodejs"},{name:"Docker",icon:"mdi-docker"},{name:"MongoDB",icon:"mdi-database"}],code:"https://github.com/alexkala1/fattendancepublic"},{title:"Screen Recorder",description:"This is an electron app that records either the entire screen or a selected window",technologies:[{name:"Electron",icon:"mdi-electron-framework"},{name:"JavaScript",icon:"mdi-language-javascript"}],code:"https://github.com/alexkala1/screenrecorder"},{title:"PDA",description:"This is an ordering system for shops like restaurants, caffe etc that can create users, show available tables for customers and create orders for products depending on the shop",technologies:[{name:"Laravel",icon:"mdi-laravel"},{name:"Bootstrap",icon:"mdi-bootstrap"},{name:"PostgreSQL",icon:"mdi-database"}],code:"https://github.com/alexkala1/pda"},{title:"Pizzahouse",description:"This project is a pizzahouse created with laravel for basic CRUD implementation",technologies:[{name:"Laravel",icon:"mdi-laravel"},{name:"mySQL",icon:"mdi-database"},{name:"Bootstrap",icon:"mdi-bootstrap"}],code:"https://github.com/alexkala1/pizzahouse"},{title:"Sacchon app",description:"This project was created for pfizer-codehub bootcamp for software engineering. It is a diabetes management app where patients can add data to the system, doctors can diagnose their data and consult them and finally they have a reporter that monitors their activity in the system",technologies:[{name:"Angular",icon:"mdi-angular"},{name:"Java",icon:"mdi-language-java"},{name:"Restlet",icon:"mdi-api"},{name:"MSSQL",icon:"mdi-database"}],code:"https://github.com/alexkala1/pfizer-final-project"},{title:"UNO clone",description:"This is a proof of concept that started with working with web sockets in mind",technologies:[{name:"Socket.io",icon:"mdi-power-socket-eu"},{name:"VueJS",icon:"mdi-vuejs"},{name:"Vuetify",icon:"mdi-vuetify"},{name:"ExpressJS",icon:"mdi-server"}],code:"https://github.com/alexkala1/socket-io-game"},{title:"Machine learning image labeling",description:"This is a project that was created for the master that I follow. It is an admin panel that creates labels and datasets with user input and it has a feature to accept or reject an image according to the coordinates of the given dataset or the dataset/label name. The image and the dataset as well as the label comes from the mobile app that was created for the project as well.",technologies:[{name:"Flutter",icon:"mdi-cellphone-android"},{name:"MongoDB",icon:"mdi-database"},{name:"VueJS",icon:"mdi-vuejs"},{name:"Vuetify",icon:"mdi-vuetify"},{name:"NuxtJS",icon:"mdi-nuxt"},{name:"ExpressJS",icon:"mdi-server"}],code:"https://github.com/alexkala1/ml-image-label"},{title:"Ethereum pattern recognition",description:"This is a web application that was created in the master. It allows the user to search within blocks of the ethereum blockchain and find similarities and patterns in smart contracts or transactions. User can see the decompiled binary into solidity code as well as all the information that has to do with a transaction.",technologies:[{name:"VueJS",icon:"mdi-vuejs"},{name:"Vuetify",icon:"mdi-vuetify"},{name:"ExpressJS",icon:"mdi-server"},{name:"web3.js",icon:"mdi-ethereum"}],code:"https://github.com/alexkala1/ethereum-client"}]}}},T=S,P=(a("7349"),a("cd55")),O=a("49e2"),J=a("c865"),z=a("0393"),E=Object(d["a"])(T,C,V,!1,null,null,null),M=E.exports;h()(E,{VBtn:p["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:v["a"],VContainer:g["a"],VDivider:w["a"],VExpansionPanel:P["a"],VExpansionPanelContent:O["a"],VExpansionPanelHeader:J["a"],VExpansionPanels:z["a"],VIcon:y["a"],VRow:k["a"]});var A={components:{Mainpage:_,Projects:M},name:"App",data:function(){return{}}},I=A,B=(a("034f"),a("7496")),D=a("f6c4"),$=Object(d["a"])(I,i,o,!1,null,null,null),N=$.exports;h()($,{VApp:B["a"],VContainer:g["a"],VMain:D["a"]});var F=a("9483");Object(F["a"])("".concat("/portfolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var L=a("2f62");n["a"].use(L["a"]);var R=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=a("f309");n["a"].use(U["a"]);var Q=new U["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:R,vuetify:Q,render:function(t){return t(N)}}).$mount("#app")},7349:function(t,e,a){"use strict";a("7be2")},"7be2":function(t,e,a){},"85ec":function(t,e,a){},"9f60":function(t,e,a){t.exports=a.p+"img/cv.d07bd15d.png"}});
//# sourceMappingURL=app.a4253341.js.map