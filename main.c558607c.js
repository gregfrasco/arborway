!function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],u=0,m=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&m.push(n[c][0]),n[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(_&&_(e);m.length;)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={12:0},o=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(t){return c.p+"templates/"+({0:"vendors~__react_static_root__/src/pages/contact-us.tsx~__react_static_root__/src/pages/index.tsx",1:"vendors~__react_static_root__/src/pages/hydesquare.tsx~__react_static_root__/src/pages/index.tsx",2:"__react_static_root__/src/pages/404.tsx",3:"__react_static_root__/src/pages/about.tsx",4:"__react_static_root__/src/pages/archive.tsx",5:"__react_static_root__/src/pages/contact-us.tsx",6:"__react_static_root__/src/pages/donate.tsx",7:"__react_static_root__/src/pages/faq.tsx",8:"__react_static_root__/src/pages/hydesquare.tsx",9:"__react_static_root__/src/pages/index.tsx",10:"__react_static_root__/src/pages/otherprojects.tsx",11:"__react_static_root__/src/pages/support.tsx",14:"vendors~__react_static_root__/src/pages/contact-us.tsx",15:"vendors~__react_static_root__/src/pages/index.tsx"}[t]||t)+"."+{0:"974e8400",1:"d4581cc2",2:"7e3fed74",3:"97f14dab",4:"e4cf9e64",5:"0d4bc4c1",6:"79a084d3",7:"69643da2",8:"b37782c5",9:"18c27011",10:"25df3b5d",11:"047869b6",14:"cb561499",15:"38b46c3a"}[t]+".js"}(t);var s=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,a[1](s)}n[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://arborway.org/",c.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var _=s;o.push([136,13,16]),a()}({104:function(t,e,a){"use strict";a.d(e,"b",(function(){return p})),a.d(e,"a",(function(){return m}));var r=a(17),n=a.n(r),o=a(19),c=a.n(o),i=a(0),s=a.n(i),l=a(113),_=Object(i.createContext)({}),u=function(t){return{date:""!==t[0]?new Date(t[0]):void 0,title:t[1],linkTitle:t[2],link:t[3]}},m=function(t){var e=Object(i.useState)(!0),a=c()(e,2),r=a[0],o=a[1],m=Object(i.useState)([{},{},{},{}]),p=c()(m,2),f=p[0],d=p[1];return Object(i.useEffect)((function(){fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat("1__G_C1IX_gRVMA-zFaUMtFOGPTQpeFLonTYuOI8wjWo","/values/Sheet1!A2:D5?key=").concat("AIzaSyAtezutGscTRkAeOb_e9_INb0QXZ_Id5kE")).then((function(t){return t.json()})).then((function(t){d(t.values.map(u).filter((function(t){return!t.date||Object(l.a)(t.date,new Date)>=-7}))),o(!1)}))}),[]),s.a.createElement(_.Provider,n()({value:{loading:r,events:f}},t))},p=function(){return Object(i.useContext)(_)}},136:function(t,e,a){a(137),a(191),t.exports=a(198)},138:function(t,e,a){"use strict";a.r(e);var r=a(105),n=[{location:"__react_static_root__/node_modules/react-static-plugin-typescript",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-jss",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:a.n(r)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];e.default=n},15:function(t,e,a){"use strict";var r;a.d(e,"a",(function(){return r})),function(t){t.ABOUT_US="about",t.ARCHIVE="archive",t.CONTACT_US="contact-us",t.DONATE="donate",t.FAQ="faq",t.HOME="",t.HYDE_SQUARE="hydesquare",t.OTHER_PROJECTS="otherprojects",t.SUPPORT="support"}(r||(r={}))},192:function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"notFoundTemplate",(function(){return x}));var r=a(12),n=a.n(r),o=a(13),c=a.n(o),i=a(0),s=a.n(i),l=a(20),_=a.n(l);Object(l.setHasBabelPlugin)();var u={loading:function(){return null},error:function(t){return console.error(t.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},m=_()(c()({id:"__react_static_root__/src/pages/404.tsx",load:function(){return Promise.all([a.e(2).then(a.bind(null,123))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/404.tsx")},resolve:function(){return 123},chunkName:function(){return"__react_static_root__/src/pages/404.tsx"}}),u);m.template="__react_static_root__/src/pages/404.tsx";var p=_()(c()({id:"__react_static_root__/src/pages/about.tsx",load:function(){return Promise.all([a.e(3).then(a.bind(null,128))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/about.tsx")},resolve:function(){return 128},chunkName:function(){return"__react_static_root__/src/pages/about.tsx"}}),u);p.template="__react_static_root__/src/pages/about.tsx";var f=_()(c()({id:"__react_static_root__/src/pages/archive.tsx",load:function(){return Promise.all([a.e(4).then(a.bind(null,124))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/archive.tsx")},resolve:function(){return 124},chunkName:function(){return"__react_static_root__/src/pages/archive.tsx"}}),u);f.template="__react_static_root__/src/pages/archive.tsx";var d=_()(c()({id:"__react_static_root__/src/pages/contact-us.tsx",load:function(){return Promise.all([Promise.all([a.e(0),a.e(14),a.e(5)]).then(a.bind(null,132))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/contact-us.tsx")},resolve:function(){return 132},chunkName:function(){return"__react_static_root__/src/pages/contact-us.tsx"}}),u);d.template="__react_static_root__/src/pages/contact-us.tsx";var g=_()(c()({id:"__react_static_root__/src/pages/donate.tsx",load:function(){return Promise.all([a.e(6).then(a.bind(null,130))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/donate.tsx")},resolve:function(){return 130},chunkName:function(){return"__react_static_root__/src/pages/donate.tsx"}}),u);g.template="__react_static_root__/src/pages/donate.tsx";var h=_()(c()({id:"__react_static_root__/src/pages/faq.tsx",load:function(){return Promise.all([a.e(7).then(a.bind(null,131))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/faq.tsx")},resolve:function(){return 131},chunkName:function(){return"__react_static_root__/src/pages/faq.tsx"}}),u);h.template="__react_static_root__/src/pages/faq.tsx";var E=_()(c()({id:"__react_static_root__/src/pages/hydesquare.tsx",load:function(){return Promise.all([Promise.all([a.e(1),a.e(8)]).then(a.bind(null,129))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/hydesquare.tsx")},resolve:function(){return 129},chunkName:function(){return"__react_static_root__/src/pages/hydesquare.tsx"}}),u);E.template="__react_static_root__/src/pages/hydesquare.tsx";var b=_()(c()({id:"__react_static_root__/src/pages/index.tsx",load:function(){return Promise.all([Promise.all([a.e(0),a.e(1),a.e(15),a.e(9)]).then(a.bind(null,127))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/index.tsx")},resolve:function(){return 127},chunkName:function(){return"__react_static_root__/src/pages/index.tsx"}}),u);b.template="__react_static_root__/src/pages/index.tsx";var v=_()(c()({id:"__react_static_root__/src/pages/otherprojects.tsx",load:function(){return Promise.all([a.e(10).then(a.bind(null,125))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/otherprojects.tsx")},resolve:function(){return 125},chunkName:function(){return"__react_static_root__/src/pages/otherprojects.tsx"}}),u);v.template="__react_static_root__/src/pages/otherprojects.tsx";var y=_()(c()({id:"__react_static_root__/src/pages/support.tsx",load:function(){return Promise.all([a.e(11).then(a.bind(null,126))]).then((function(t){return t[0]}))},path:function(){return n.a.join(t,"__react_static_root__/src/pages/support.tsx")},resolve:function(){return 126},chunkName:function(){return"__react_static_root__/src/pages/support.tsx"}}),u);y.template="__react_static_root__/src/pages/support.tsx",e.default={"__react_static_root__/src/pages/404.tsx":m,"__react_static_root__/src/pages/about.tsx":p,"__react_static_root__/src/pages/archive.tsx":f,"__react_static_root__/src/pages/contact-us.tsx":d,"__react_static_root__/src/pages/donate.tsx":g,"__react_static_root__/src/pages/faq.tsx":h,"__react_static_root__/src/pages/hydesquare.tsx":E,"__react_static_root__/src/pages/index.tsx":b,"__react_static_root__/src/pages/otherprojects.tsx":v,"__react_static_root__/src/pages/support.tsx":y};var x="__react_static_root__/src/pages/404.tsx"}.call(this,"/")},194:function(t,e,a){var r={".":45,"./":45,"./index":45,"./index.js":45};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=o,t.exports=n,n.id=194},200:function(t,e,a){"use strict";a.r(e),function(t){var r=a(0),n=a.n(r),o=a(10),c=a.n(o),i=a(110),s=a(63);if(e.default=s.a,"undefined"!=typeof document){var l=document.getElementById("root"),_=l.hasChildNodes()?c.a.hydrate:c.a.render,u=function(t){_(n.a.createElement(i.AppContainer,null,n.a.createElement(t,null)),l)};u(s.a),t&&t.hot&&t.hot.accept("./App",(function(){u(s.a)}))}}.call(this,a(121)(t))},204:function(t,e,a){t.exports=a.p+"static/logo.3ea7380b.png"},63:function(t,e,a){"use strict";var r=a(64),n=a.n(r),o=a(0),c=a.n(o),i=a(49),s=a(252),l=a(253),_=a(71),u=a(111),m=Object(u.a)({palette:{primary:{main:"#196c47"},secondary:{main:"#FFFFFF"}},shape:{borderRadius:5},typography:{button:{textTransform:"none"},body1:{fontSize:"1.2rem"}}}),p=a(19),f=a.n(p),d=a(232),g=a(234),h=a(255),E=a(235),b=a(237),v=a(52),y=a(241),x=a(257),O=a(244),j=a(245),k=a(246),P=a(247),T=a(248),A=a(236),w=a(238),F=a(239),S=a(240),C=a(243),N=a(230),D=a(15),U=a(29),R=a(204),q=Object(N.a)((function(t){return{root:{flexGrow:1},socialButton:{marginRight:t.spacing(1)},titleContainer:{flexGrow:1},title:{fontWeight:"bold"},spacing:{marginBottom:t.spacing(2)},image:{maxWidth:t.spacing(10),marginRight:t.spacing(2)}}})),B=[{name:"Home",url:D.a.HOME},{name:"Hyde Square",url:D.a.HYDE_SQUARE},{name:"Support",url:D.a.SUPPORT},{name:"FAQ",url:D.a.FAQ},{name:"About Us",url:D.a.ABOUT_US},{name:"Other Projects",url:D.a.OTHER_PROJECTS},{name:"Archive",url:D.a.ARCHIVE},{name:"Contact Us",url:D.a.CONTACT_US}],H=function(){var t=q(),e=Object(U.useLocation)().pathname,a=c.a.useState(!1),r=f()(a,2),n=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{position:"relative",className:t.spacing},c.a.createElement(g.a,null,c.a.createElement(h.a,{mdUp:!0},c.a.createElement(E.a,{"aria-label":"open drawer"},c.a.createElement(A.a,{color:"secondary",onClick:function(){return o(!0)}}))),c.a.createElement(h.a,{smDown:!0},c.a.createElement("img",{className:t.image,src:R,alt:"Arborway Committee Logo"})),c.a.createElement(b.a,{className:t.titleContainer},c.a.createElement(v.a,{variant:"h6",className:t.title},"The Arborway Committee for Public Transit, Inc."),c.a.createElement(h.a,{smDown:!0},c.a.createElement(v.a,{variant:"subtitle1",className:t.title},'Put the "E" in urban transit: Environment, Economy, Equity!'))),c.a.createElement(h.a,{smDown:!0},c.a.createElement(E.a,{"aria-label":"facebook",className:t.socialButton,style:{background:"#4267B2"}},c.a.createElement(w.a,{fontSize:"inherit",style:{color:"#FFFFFF"}})),c.a.createElement(E.a,{"aria-label":"twitter",className:t.socialButton,style:{background:"#1DA1F2"}},c.a.createElement(F.a,{fontSize:"inherit",style:{color:"#FFFFFF"}})),c.a.createElement(E.a,{"aria-label":"email",className:t.socialButton,style:{background:"#FFFFFF"}},c.a.createElement(S.a,{fontSize:"inherit"})))),c.a.createElement(h.a,{smDown:!0},c.a.createElement(g.a,null,B.map((function(t){return c.a.createElement(y.a,{component:U.Link,to:t.url,color:"secondary",style:"/".concat(e)===t.url?{textDecoration:"underline"}:{}},t.name)})),c.a.createElement(y.a,{component:U.Link,to:D.a.DONATE,variant:"contained",color:"secondary"},"Donate"))),c.a.createElement(h.a,{mdUp:!0},c.a.createElement(x.a,{open:n,anchor:"left"},c.a.createElement(d.a,{position:"relative",className:t.spacing},c.a.createElement(g.a,null,c.a.createElement("img",{className:t.image,src:R,alt:"Arborway Committee Logo"}),c.a.createElement(E.a,{onClick:function(){return o(!1)}},c.a.createElement(C.a,{color:"secondary"})))),c.a.createElement(O.a,{component:"nav"},B.map((function(t){return c.a.createElement(j.a,{component:U.Link,button:!0,to:t.url,onClick:function(){return o(!1)}},c.a.createElement(k.a,{primary:t.name}))})),c.a.createElement(P.a,null),c.a.createElement(j.a,null,c.a.createElement(y.a,{component:U.Link,to:D.a.DONATE,variant:"contained",color:"primary",disableRipple:!0,onClick:function(){return o(!1)}},"Donate")),c.a.createElement(P.a,null),c.a.createElement(j.a,{button:!0},c.a.createElement(T.a,null,c.a.createElement(w.a,{htmlColor:"#4267B2"})),c.a.createElement(k.a,{primary:"Facebook"})),c.a.createElement(j.a,{button:!0},c.a.createElement(T.a,null,c.a.createElement(F.a,{htmlColor:"#1DA1F2"})),c.a.createElement(k.a,{primary:"Twitter"})))))))},L=a(250),I=a(249),M=a(254),z=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{component:v.a,align:"center",color:"primary",href:"/",style:{fontWeight:"bold"}},"The Arborway Committee for Public Transit, Inc."),c.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"A 501(c)(3) Organization"),c.a.createElement(I.a,{component:v.a,variant:"body2",align:"center",color:"primary",href:"mailto:arborway.committee@gmail.com"},"Arborway.Committee@gmail.com"),c.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"c/o 51R Eliot Street Jamaica Plain 02130"),c.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright © ",(new Date).getFullYear(),"."))},Q=Object(N.a)((function(t){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},footer:{marginTop:t.spacing(8),paddingTop:t.spacing(3),paddingBottom:t.spacing(3)}}})),J=[{title:"Initiatives",links:[{title:"Hyde Square",link:D.a.HYDE_SQUARE},{title:"Other projects",link:D.a.OTHER_PROJECTS}]},{title:"Useful Links",links:[{title:"About Us",link:D.a.ABOUT_US},{title:"FAQ",link:D.a.FAQ},{title:"Archive",link:D.a.ARCHIVE}]},{title:"Contact",links:[{title:"Contact Us",link:D.a.CONTACT_US},{title:"Support",link:D.a.SUPPORT},{title:"Donate",link:D.a.DONATE}]}],G=function(){var t=Q();return c.a.createElement(c.a.Fragment,null,c.a.createElement(L.a,{component:"footer",className:t.footer},c.a.createElement(b.a,{container:!0},J.map((function(t){return c.a.createElement(b.a,{item:!0,xs:6,sm:4,key:t.title},c.a.createElement(v.a,{variant:"h6",color:"textPrimary",gutterBottom:!0},t.title),c.a.createElement("ul",null,t.links.map((function(t){return c.a.createElement("li",{key:t.title},c.a.createElement(I.a,{component:U.Link,to:t.link,variant:"subtitle1",color:"textSecondary"},t.title))}))))}))),c.a.createElement(P.a,{style:{marginTop:"1rem"}}),c.a.createElement(M.a,{mt:5},c.a.createElement(z,null))))},Y=a(17),V=a.n(Y),W=(a(205),{paddingTop:6,paddingBottom:6}),X={h1:function(t){return c.a.createElement(v.a,V()({style:W,variant:"h1"},t))},h2:function(t){return c.a.createElement(v.a,V()({style:W,variant:"h2"},t))},h3:function(t){return c.a.createElement(v.a,V()({style:W,variant:"h3"},t))},h4:function(t){return c.a.createElement(v.a,V()({style:W,variant:"h4"},t))},h5:function(t){return c.a.createElement(v.a,V()({style:W,variant:"h5"},t))},h6:function(t){return c.a.createElement(v.a,V()({style:W,variant:"h6"},t))},p:function(t){return c.a.createElement(v.a,V()({variant:"body1",style:W},t))}},Z=a(74),K=a(104),$=a(112),tt=a(251),et=function(){return c.a.createElement(L.a,{component:"main",style:{display:"flex",justifyContent:"center"}},c.a.createElement(tt.a,{color:"primary",size:160,style:{marginTop:"3 rem"}}))};function at(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function rt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?at(Object(a),!0).forEach((function(e){n()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):at(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.a=function(){return Object(o.useEffect)((function(){$.a.initialize("UA-98487943-1")}),[]),c.a.createElement(i.Root,null,c.a.createElement(i.Head,null,c.a.createElement("title",null,"The Arborway Committee for Public Transit, Inc"),c.a.createElement("meta",{name:"Description",content:"The Arborway Committee for Public Transit, Inc is a volunteer group of residents and merchants of Boston that advocates for quality public transit in the urban environment. Founded in 1976 our chief objective has been to advocate for Jamaica Plain's one seat ride into the central subway system, currently referred to as Boston's E-Line, a branch of the Green Line."})),c.a.createElement(s.a,null),c.a.createElement(l.a,{theme:m},c.a.createElement(_.a,{components:rt({},X)},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(c.a.Fragment,null,c.a.createElement(H,null),c.a.createElement(et,null))},c.a.createElement(Z.a,null,c.a.createElement(K.a,null,c.a.createElement(H,null),c.a.createElement("div",{className:"content"},c.a.createElement(i.Routes,null)),c.a.createElement(G,null)))))))}},74:function(t,e,a){"use strict";a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return _}));var r=a(17),n=a.n(r),o=a(19),c=a.n(o),i=a(0),s=a.n(i),l=Object(i.createContext)({}),_=function(t){var e=Object(i.useState)(),a=c()(e,2),r=a[0],o=a[1];return s.a.createElement(l.Provider,n()({value:{openModal:function(t){return o(t)},openedModal:r,closeModal:function(){return o(void 0)}}},t))},u=function(){return Object(i.useContext)(l)}}});