(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("1356"),r=n.n(a);r.a},1356:function(t,e,n){},"55c1":function(t,e,n){"use strict";var a=n("6726"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64"),n("5363"),n("15f5");a["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-content",[n("parallax"),n("div",{attrs:{id:"projects"}},[n("projects")],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainContainer"},[n("v-container",{attrs:{"align-end":"","justify-center":"",app:"",fluid:"","pt-5":"","mt-5":"","pb-5":"","mb-5":""}},[n("v-layout",{attrs:{"text-xs-center":"","align-center":"","justify-end":"",column:""}},[n("h1",{staticClass:"display-3 font-weight-thin"},[t._v("Alex Kalaitzidis")]),n("h2",{staticClass:"heading font-weight-thin"},[t._v("Front-end web developer")])]),n("v-layout",{attrs:{"text-xs-center":"","align-start":"","justify-center":"","pt-5":"","mt-5":""}},t._l(t.contact,function(e){return n("h2",{key:e,staticClass:"subheading"},[n("v-btn",{staticClass:"ftr mx-3 white--text",attrs:{href:e.link,icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)],1)}),0),n("v-layout",{attrs:{"justify-center":"","align-center":"","pt-3":"","mt-3":""}},[n("v-btn",{attrs:{href:"#projects",round:"",light:""}},[t._v("My Projects")])],1)],1)],1)},c=[],l={data:function(){return{contact:[{icon:"fab fa-github",link:"http://github.com/alexkala1"},{icon:"fab fa-linkedin",link:"http://instagram.com/alexkalalalala"},{icon:"far fa-envelope",link:"mailto:alexkalaitzidis2@gmail.com"}]}}},u=l,p=(n("55c1"),n("2877")),f=n("6544"),d=n.n(f),h=n("8336"),v=n("a523"),b=n("132d"),x=n("a722"),g=Object(p["a"])(u,s,c,!1,null,null,null),m=g.exports;d()(g,{VBtn:h["a"],VContainer:v["a"],VIcon:b["a"],VLayout:x["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("v-container",{attrs:{fluid:"","pt-5":"","mt-5":"","pb-5":"","mb-5":""}},[n("v-layout",[n("v-flex",{attrs:{md8:"","offset-md2":"","pt-5":"","mt-5":"","pb-5":"","mb-5":""}},[n("h1",{staticClass:"justify-start align-center text-xs-center font-weight-thin pb-5 mb-5 display-2"},[t._v("My Projects")]),n("v-expansion-panel",{attrs:{inset:""}},t._l(t.projects,function(e){return n("v-expansion-panel-content",{key:e,scopedSlots:t._u([{key:"header",fn:function(){return[n("h2",{staticClass:"subheading"},[t._v(t._s(e.title))])]},proxy:!0}],null,!0)},[n("v-card",{attrs:{color:"rgba(255, 0, 0, 0.5)"}},[n("v-card-text",[n("v-layout",[n("v-flex",{attrs:{xs8:""}},[t._v(t._s(e.description))]),n("v-divider",{attrs:{vertical:""}}),n("v-flex",{attrs:{xs4:""}},[n("ul",[n("li",[t._v(t._s(e.technologies))])])])],1),n("v-flex",{attrs:{xs6:"","pa-3":""}},[n("v-btn",{attrs:{round:"",dark:"",color:"red darken-4",href:e.code}},[t._v("View Code")]),n("v-btn",{attrs:{round:"",dark:"",color:"red darken-4",href:e.link}},[t._v("View Project")])],1)],1)],1)],1)}),1)],1)],1)],1)],1)},_=[],j={data:function(){return{projects:[{title:"This Portfolio",description:"This is what I have created in a short period of time when I had some spare time.",technologies:"VueJS , Vuetify",code:"https://github.com/alexkala1/portfolio",link:"https://alexkala1.github.io/portfolio"},{title:"Thesis",description:"This project is a fingerprint authentication application for a university as I had it in mind. In this web application there are 3 different types of people with the authorisation to log in: Students, Secretaries and Teachers each one with their own access points and usabilities of the fingerprint authentication. For example students attend their lectures via fingerprint, teachers start their lectures via fingerprint etc.",technologies:"VueJS , Vuetify , NodeJS , Docker , MongoDB",code:"https://github.com/alexkala1/fattendancepublic",link:""}]}}},k=j,w=(n("e0a2"),n("b0af")),V=n("99d9"),C=n("ce7e"),O=n("cd55"),P=n("49e2"),S=n("0e8f"),T=Object(p["a"])(k,y,_,!1,null,null,null),M=T.exports;d()(T,{VBtn:h["a"],VCard:w["a"],VCardText:V["a"],VContainer:v["a"],VDivider:C["a"],VExpansionPanel:O["a"],VExpansionPanelContent:P["a"],VFlex:S["a"],VLayout:x["a"]});var E={name:"App",components:{parallax:m,projects:M},data:function(){return{}}},I=E,J=(n("034f"),n("7496")),$=n("549c"),z=Object(p["a"])(I,i,o,!1,null,null,null),A=z.exports;d()(z,{VApp:J["a"],VContent:$["a"]});var B=n("8c4f"),D=new B["a"]({routes:[]});a["a"].config.productionTip=!1,new a["a"]({router:D,render:function(t){return t(A)}}).$mount("#app")},6726:function(t,e,n){},"9aea":function(t,e,n){},e0a2:function(t,e,n){"use strict";var a=n("9aea"),r=n.n(a);r.a}});
//# sourceMappingURL=app.b452640a.js.map