(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],r[o]&&f.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("1356"),r=n.n(a);r.a},1356:function(t,e,n){},"55c1":function(t,e,n){"use strict";var a=n("6726"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64"),n("5363"),n("15f5");a["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-content",[n("parallax"),n("div",{attrs:{id:"projects"}},[n("projects")],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{app:"",fluid:"","pt-5":"","mt-5":"","pb-5":"","mb-5":""}},[n("v-parallax",{attrs:{app:"",dark:"",height:"700",src:"https://supercoolwallpapers.com/wp-content/uploads/2019/01/Best-91-Cool-Black-Wallpaper-For-Mobile-For-Desktop-PC-laptop-Android-Desktop-Iphone-and-Tablet-1.jpg"}},[n("v-layout",{attrs:{"text-xs-center":"","align-end":"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-thin"},[t._v("Alex Kalaitzidis")])]),n("v-layout",{attrs:{"text-xs-center":"","align-start":"","justify-center":""}},[n("h2",{staticClass:"subheading font-weight-thin"},[t._v("Front-end web developer")])]),n("v-layout",{attrs:{"text-xs-center":"","align-start":"","justify-center":""}},t._l(t.contact,function(e){return n("h2",{key:e,staticClass:"subheading"},[n("v-btn",{staticClass:"ftr mx-3",attrs:{icon:""}},[n("a",{staticClass:"white--text",attrs:{href:e.link,target:"_blank"}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)])],1)}),0),n("v-layout",{attrs:{"justify-center":"","align-center":"","pb-5":""}},[n("v-btn",{attrs:{href:"#projects",round:""}},[t._v("My Projects")])],1)],1)],1)},l=[],c={data:function(){return{contact:[{icon:"fab fa-github",link:"http://github.com/alexkala1"},{icon:"fab fa-linkedin",link:"http://instagram.com/alexkalalalala"},{icon:"far fa-envelope",link:"mailto:alexkalaitzidis2@gmail.com"}]}}},u=c,p=(n("55c1"),n("2877")),f=n("6544"),d=n.n(f),h=n("8336"),v=n("a523"),b=n("132d"),x=n("a722"),g=n("8b9c"),y=Object(p["a"])(u,s,l,!1,null,null,null),m=y.exports;d()(y,{VBtn:h["a"],VContainer:v["a"],VIcon:b["a"],VLayout:x["a"],VParallax:g["a"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","pt-5":"","mt-5":"","pb-5":"","mb-5":""}},[n("v-layout",[n("v-flex",{attrs:{xs8:"","offset-xs2":"","pa-3":""}},[n("v-expansion-panel",{attrs:{inset:""}},t._l(t.projects,function(e){return n("v-expansion-panel-content",{key:e,scopedSlots:t._u([{key:"header",fn:function(){return[n("h2",{staticClass:"subheading"},[t._v(t._s(e.title))])]},proxy:!0}],null,!0)},[n("v-card",[n("v-card-text",[n("v-layout",[n("v-flex",{attrs:{xs8:"","mr-3":""}},[t._v("\n                "+t._s(e.description)+"\n              ")]),n("v-divider",{attrs:{vertical:""}}),n("v-flex",{attrs:{xs4:"","ml-5":""}},[n("ul",[n("li",[t._v("\n                    "+t._s(e.technologies)+"\n                  ")])])])],1),n("v-flex",{attrs:{xs6:"","pa-3":""}},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.link))])])],1)],1)],1)}),1)],1)],1)],1)},k=[],w={data:function(){return{projects:[{title:"This Portfolio",description:"This is what I have created in a short period of time when I had some spare time.",technologies:"VueJS , Vuetify",link:"https://github.com/ellftw/portfolio"},{title:"Thesis",description:"This project is a fingerprint authentication application for a university as I had it in mind. In this web application there are 3 different types of people with the authorisation to log in: Students, Secretaries and Teachers each one with their own access points and usabilities of the fingerprint authentication. For example students attend their lectures via fingerprint, teachers start their lectures via fingerprint etc.",technologies:"VueJS , Vuetify , NodeJS , Docker , MongoDB",link:"https://github.com/ellftw/fattendancepublic"}]}}},j=w,V=n("b0af"),C=n("99d9"),O=n("ce7e"),P=n("cd55"),S=n("49e2"),T=n("0e8f"),M=Object(p["a"])(j,_,k,!1,null,null,null),I=M.exports;d()(M,{VCard:V["a"],VCardText:C["a"],VContainer:v["a"],VDivider:O["a"],VExpansionPanel:P["a"],VExpansionPanelContent:S["a"],VFlex:T["a"],VLayout:x["a"]});var D={name:"App",components:{parallax:m,projects:I},data:function(){return{}}},E=D,F=(n("034f"),n("7496")),J=n("549c"),A=Object(p["a"])(E,i,o,!1,null,null,null),B=A.exports;d()(A,{VApp:F["a"],VContent:J["a"]});var $=n("8c4f"),z=new $["a"]({routes:[]});a["a"].config.productionTip=!1,new a["a"]({router:z,render:function(t){return t(B)}}).$mount("#app")},6726:function(t,e,n){}});
//# sourceMappingURL=app.2fbe74d3.js.map