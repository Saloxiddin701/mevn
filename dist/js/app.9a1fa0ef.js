(function(){"use strict";var t={8332:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(9669),o=n.n(r);const a="/api/post";class i{static async getAllPost(){const t=await o().get(a);return t.data}static async getPostById(t){const e=await o().get(`${a}/${t}`);return e.data}static async addPost(t){const e=await o().post(a,t);return e.data}static async updatePost(t,e){const n=await o().patch(`${a}/${t}`,e);return n.data}static async deletePost(t){const e=await o()["delete"](`${a}/${t}`);return e.data}}},2094:function(t,e,n){var r=n(144),o=n(998),a=n(6232),i=n(5550),s=n(9223),u=n(4324),c=n(5808),l=n(4525),d=n(6195),f=n(982),p=n(4611),m=n(3059),h=n(6975),v=n(2540),g=n(7953),b=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{id:"inspire"}},[e(h.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(l.Z,[e(d.km,[e(d.V9,[t._v(" Salox Developer ")]),e(d.oZ,[t._v(" MEVN stack App ")])],1)],1),e(s.Z),e(c.Z,{attrs:{dense:""}},[e(v.Z,[t._v("REPORTS")]),e(f.Z,{attrs:{color:"primary"}},t._l(t.items,(function(n,r){return e(l.Z,{key:r,attrs:{to:n.link,link:""}},[e(p.Z,[e(u.Z,{domProps:{textContent:t._s(n.icon)}})],1),e(d.km,[e(d.V9,{domProps:{textContent:t._s(n.title)}})],1)],1)})),1)],1)],1),e(a.Z,{attrs:{app:""}},[e(i.Z,{on:{click:function(e){t.drawer=!t.drawer}}}),e(g.qW,[t._v("Application")])],1),e(m.Z,[e("router-view")],1)],1)},y=[],Z={data:()=>({drawer:null,items:[{title:"Home",icon:"mdi-home",link:"/"},{title:"Add Post",icon:"mdi-note-plus",link:"/add-post"},{title:"About",icon:"mdi-help-box",link:"/about"}]})},w=Z,_=n(1001),k=(0,_.Z)(w,b,y,!1,null,null,null),P=k.exports,C=n(8345),O=n(1653),A=n(6190),E=n(9582),x=n(4886),j=n(266),S=n(2150),T=n(5495),$=n(1713),N=function(){var t=this,e=t._self._c;return e(S.Z,[this.$route.params.message?e(O.Z,{attrs:{border:"left","close-text":"Close alert",color:"green accent-4",dark:"",dismissible:""}},[t._v(" "+t._s(this.$route.params.message)+" ")]):t._e(),e($.Z,{attrs:{"no-gutters":""}},t._l(t.posts,(function(n){return e(j.Z,{key:n._id,staticClass:"pa-3",attrs:{sm:"4"}},[e(E.Z,{staticClass:"pa-1",attrs:{to:{name:"post",params:{id:n._id}}}},[e(T.Z,{attrs:{height:"250",src:`/${n.image}`}}),e(A.Z,{staticClass:"ml-4 mt-3",attrs:{small:"",outlined:"",color:"indigo"}},[t._v(" "+t._s(n.category)+" ")]),e(x.EB,{staticClass:"headline"},[t._v(" "+t._s(n.title)+" ")]),e(x.ZB,{staticClass:"py-0"},[e("p",[t._v(t._s(n.content.substring(0,100)+"..."))])])],1)],1)})),1)],1)},B=[],L=n(8332),F={name:"Home",data(){return{posts:[]}},async created(){this.posts=await L.Z.getAllPost()},components:{}},M=F,q=(0,_.Z)(M,N,B,!1,null,null,null),D=q.exports;r.ZP.use(C.ZP);const H=[{path:"/",name:"home",component:D},{path:"/add-post",name:"addPost",component:()=>Promise.all([n.e(851),n.e(260)]).then(n.bind(n,1260))},{path:"/edit-post/:id",name:"editPost",component:()=>Promise.all([n.e(851),n.e(519)]).then(n.bind(n,8519))},{path:"/post/:id",name:"clientPost",component:()=>n.e(712).then(n.bind(n,712))},{path:"/about",name:"about",component:()=>n.e(272).then(n.bind(n,1272))}],V=new C.ZP({mode:"history",base:"/",routes:H});var I=V,R=n(8864);r.ZP.use(R.Z);var K=new R.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:I,vuetify:K,render:t=>t(P)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{260:"3b932e92",272:"68032b5d",519:"c1a3e1e7",712:"70f24d51",851:"f1d4ea20"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".f8c1f64b.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={851:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2094)}));r=n.O(r)})();
//# sourceMappingURL=app.9a1fa0ef.js.map