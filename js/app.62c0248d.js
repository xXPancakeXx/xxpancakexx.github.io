(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9dffad84"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"fb230973"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},"4fd4":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i}));n("b0c0");var r=n("d4ec"),o=function e(t,n,o){Object(r["a"])(this,e),this.name=t,this.time=n,this.amount=o;for(var a=arguments.length,i=new Array(a>3?a-3:0),s=3;s<a;s++)i[s-3]=arguments[s];this.inputs=i},a=function e(t,n){Object(r["a"])(this,e),this.amount=t,this.recipeName=n},i=function e(t,n){Object(r["a"])(this,e),this.name=t,this.desc=n}},6643:function(e,t,n){},"6eb3":function(e,t,n){"use strict";n("6643")},"85ec":function(e,t,n){},b850:function(e,t,n){"use strict";n("b0c0");var r=n("262e"),o=n("2caf"),a=n("d4ec"),i=n("bee2"),s=n("9ab4"),c=n("2b0e"),u=n("60a3"),l=(n("4de4"),n("a434"),n("4fd4")),p=(n("c975"),function(){function e(t,n,r){Object(a["a"])(this,e),this.name=t,this.desc=n,this.recipes=r}return Object(i["a"])(e,[{key:"importRecipes",value:function(e,t){var n=JSON.parse(e);"override"==t?this.recipes=n:"extend"==t&&this.recipes.push(n)}},{key:"addRecipe",value:function(e,t,n,r){this.recipeNameExists(e)||this.recipes.splice(0,0,{name:e,time:t,amount:n,inputs:r})}},{key:"updateRecipe",value:function(e,t,n,r,o){if(e.name!=t&&this.recipeNameExists(t))return!1;var a=this.recipes.indexOf(e);this.recipes[a].name=t,this.recipes[a].time=n,this.recipes[a].amount=r,this.recipes[a].inputs=o}},{key:"getRecipes",value:function(){return this.recipes}},{key:"findRecipe",value:function(e){return this.recipes.filter((function(t){return t.name==e}))[0]}},{key:"recipeNameExists",value:function(e){return!!this.recipes.filter((function(t){return t.name==e})).length}},{key:"isRecipeDeletable",value:function(e){for(var t=0;t<this.recipes.length;t++)for(var n=this.recipes[t],r=0;r<n.inputs.length;r++){var o=n.inputs[r].recipeName;if(o==e.name)return!1}return!0}},{key:"deleteRecipe",value:function(e){this.recipes.splice(this.recipes.indexOf(e),1)}}]),e}()),d=function e(t){Object(a["a"])(this,e),this.key=t.key,this.value=t.value},f=function(){function e(){Object(a["a"])(this,e)}return Object(i["a"])(e,null,[{key:"add",value:function(e,t){this.localStorageSupported&&localStorage.setItem(e,JSON.stringify(t))}},{key:"getAllItems",value:function(){for(var e=new Array,t=0;t<localStorage.length;t++){var n=localStorage.key(t),r=localStorage.getItem(n);e.push(new d({key:n,value:r}))}return e}},{key:"getAllValues",value:function(){for(var e=new Array,t=0;t<localStorage.length;t++){var n=localStorage.key(t),r=localStorage.getItem(n);e.push(r)}return e}},{key:"get",value:function(e){if(this.localStorageSupported){var t=localStorage.getItem(e);if(null==t)return null;var n=JSON.parse(t);return n}return null}},{key:"remove",value:function(e){this.localStorageSupported&&localStorage.removeItem(e)}},{key:"clear",value:function(){this.localStorageSupported&&localStorage.clear()}}]),e}();f.localStorageSupported="undefined"!=typeof window["localStorage"]&&null!=window["localStorage"];var h="default",v="default description",m=new Array(new l["a"]("Iron Ore",1,1),new l["a"]("Iron Plate",3.2,1,new l["c"](1,"Iron Ore")),new l["a"]("Copper Ore",1,1),new l["a"]("Copper Plate",3.2,1,new l["c"](1,"Copper Ore")),new l["a"]("Gears",.5,1,new l["c"](1,"Iron Plate")),new l["a"]("Red Science",5,1,new l["c"](1,"Gears"),new l["c"](1,"Copper Plate"))),b=function(){function e(){Object(a["a"])(this,e),this.infoStorageKey="book-infos",this.recipeStorageKey="recipe-book-",this.lastLoadedStorageKey="last-book",this.loadBookInfos()}return Object(i["a"])(e,[{key:"loadBookInfos",value:function(){var e=f.get(this.infoStorageKey);this.bookInfos=new Array,e?this.bookInfos=e:this.addBook(h,v,m)}},{key:"tryGetBookInfo",value:function(e){var t=this.bookInfos.filter((function(t){return t.name==e}));return t.length>0?t[0]:null}},{key:"getBookInfos",value:function(){return this.bookInfos}},{key:"updateBookInfo",value:function(e,t){var n=this.tryGetBookInfo(e);if(null==n)throw new Error("Tried to update non existing bookInfo");if(e!=t.name){var r=f.get(this.recipeStorageKey+e);this.removeBook(e),this.addBook(t.name,t.desc,r)}n.name=t.name,n.desc=t.desc,this.saveBookInfos()}},{key:"saveBookInfos",value:function(){f.add(this.infoStorageKey,this.bookInfos)}},{key:"loadBook",value:function(e){var t=this.tryGetBookInfo(e);if(null==t)throw new Error("RecipeLibrary: Book "+e+" not found");var n=f.get(this.recipeStorageKey+t.name);return f.add(this.lastLoadedStorageKey,e),new p(t.name,t.desc,n)}},{key:"loadLastBook",value:function(){var e=f.get(this.lastLoadedStorageKey);return null==this.tryGetBookInfo(e)?this.loadBook(this.bookInfos[0].name):this.loadBook(e)}},{key:"saveBook",value:function(e,t){f.add(this.recipeStorageKey+e,t)}},{key:"addBook",value:function(e,t,n){return null==this.tryGetBookInfo(e)&&(this.bookInfos.splice(0,0,new l["b"](e,t)),this.saveBook(e,n),f.add(this.infoStorageKey,this.bookInfos),!0)}},{key:"removeBook",value:function(e){this.bookInfos=this.bookInfos.filter((function(t){return t.name!=e})),f.add(this.infoStorageKey,this.bookInfos),f.remove(this.recipeStorageKey+e)}},{key:"copyBook",value:function(e){var t=this.tryGetBookInfo(e);if(null==t)throw new Error("Tried to copy non existing book");var n=e+"_Copy";return this.addBook(n,t.desc,this.loadBook(e).recipes),n}},{key:"shareBook",value:function(e){var t=this.tryGetBookInfo(e);if(null==t)throw new Error("Tried to share non existing book");var n=this.loadBook(e);navigator.clipboard.writeText(JSON.stringify(n))}},{key:"importBook",value:function(e){try{var t=JSON.parse(e),n=t.name+"_Import";return null!=t.name&&null!=t.desc&&null!=t.recipes?(this.addBook(n,t.desc,t.recipes),n):null}catch(r){return null}}}]),e}(),y=function(){function e(){Object(a["a"])(this,e),this.library=new b,this.book=this.library.loadLastBook(),window.store=this}return Object(i["a"])(e,[{key:"saveBook",value:function(){this.library.saveBook(this.book.name,this.book.getRecipes())}}]),e}(),k=new y,g=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.store=k,e}return n}(c["a"]);g=Object(s["a"])([u["a"]],g);t["a"]=g},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav-bar",{attrs:{id:"nav"}}),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar",class:{active:e.isActive}},[n("div",{staticClass:"pie pie1"},[n("div",{staticClass:"pie-color",on:{click:function(t){return e.changeRoute("/library")}}},[n("span",{staticClass:"material-icons"},[e._v("folder")])])]),n("div",{staticClass:"pie pie2"},[n("div",{staticClass:"pie-color",on:{click:function(t){return e.changeRoute("/")}}},[n("span",{staticClass:"material-icons"},[e._v("calculate")])])]),n("div",{staticClass:"nav-menu",on:{click:function(t){e.isActive=!e.isActive}}},[n("span",{staticClass:"material-icons"},[e._v(e._s(e.isActive?"clear":"menu"))])])])},s=[],c={name:"nav-bar",data:function(){return{isActive:!1}},methods:{changeRoute:function(e){this.$router.push({path:e}),this.isActive=!this.isActive}}},u=c,l=(n("6eb3"),n("2877")),p=Object(l["a"])(u,i,s,!1,null,"7a88414c",null),d=p.exports,f={components:{"nav-bar":d}},h=f,v=(n("034f"),Object(l["a"])(h,o,a,!1,null,null,null)),m=v.exports,b=(n("d3b7"),n("8c4f")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-custom"},[n("div",{staticClass:"col-fill col"},[n("chain-resolver")],1)])},k=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"paper"},[n("h2",{staticClass:"header-corner"},[e._v("Input")]),n("chain-input-form",{on:{"resolve-requested":e.resolveRequested}})],1),n("hr"),n("div",{staticClass:"paper"},[n("h2",{staticClass:"header-corner"},[e._v("Results")]),n("chain-calculator",{attrs:{request:e.request}})],1)])},w=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"request.name"}},[e._v("Recipe to make")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.name,expression:"request.name"}],attrs:{placeholder:"Select Recipe",list:"recipes"},domProps:{value:e.request.name},on:{input:function(t){t.target.composing||e.$set(e.request,"name",t.target.value)}}}),n("datalist",{attrs:{id:"recipes"}},e._l(e.store.book.getRecipes(),(function(e){return n("option",{key:e.name,attrs:{"data-id":e.name},domProps:{value:e.name}})})),0)]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"request.amount"}},[e._v("Amount (per second)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.request.amount,expression:"request.amount"}],attrs:{type:"number"},domProps:{value:e.request.amount},on:{input:function(t){t.target.composing||e.$set(e.request,"amount",t.target.value)}}})]),n("button",{on:{click:e.tryRequest}},[e._v("Calculate")])])},S=[],j=(n("b0c0"),n("d4ec")),_=n("bee2"),C=n("262e"),I=n("2caf"),q=n("9ab4"),B=n("b850"),R=n("60a3"),P=function(e){Object(C["a"])(n,e);var t=Object(I["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.request={name:"",amount:1},e}return Object(_["a"])(n,[{key:"resolveRequested",value:function(e){return!(!e.name||!e.amount)}},{key:"tryRequest",value:function(){this.request.name&&this.request.amount>0&&this.$emit("resolve-requested",{recipeName:this.request.name,amount:this.request.amount})}}]),n}(Object(R["c"])(B["a"]));Object(q["a"])([Object(R["b"])("resolve-requested")],P.prototype,"resolveRequested",null),P=Object(q["a"])([Object(R["a"])({})],P);var x=P,A=x,E=Object(l["a"])(A,O,S,!1,null,"27d90a37",null),N=E.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fieldset",{staticClass:"form-group",staticStyle:{float:"right",top:"0",right:"0",cursor:"pointer"}},[n("label",{staticClass:"paper-switch-label"},[e._v("Required Factories")]),n("label",{staticClass:"paper-switch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.itemsPerSecondsMode,expression:"itemsPerSecondsMode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.itemsPerSecondsMode)?e._i(e.itemsPerSecondsMode,null)>-1:e.itemsPerSecondsMode},on:{change:function(t){var n=e.itemsPerSecondsMode,r=t.target,o=!!r.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);r.checked?i<0&&(e.itemsPerSecondsMode=n.concat([a])):i>-1&&(e.itemsPerSecondsMode=n.slice(0,i).concat(n.slice(i+1)))}else e.itemsPerSecondsMode=o}}}),n("span",{staticClass:"paper-switch-slider round"})]),n("label",{staticClass:"paper-switch-label"},[e._v("Items per seconds")])]),n("br"),n("div",[e.itemsPerSecondsMode?n("div",e._l(e.results,(function(t){return n("p",{key:t},[e._v(" "+e._s(t.name)+": "),n("strong",[e._v(e._s(Math.round(100*t.perSecond)/100))]),e._v("/s ")])})),0):e._e(),e.itemsPerSecondsMode?e._e():n("div",e._l(e.results,(function(t){return n("p",{key:t},[e._v(" "+e._s(t.name)+": "),n("strong",[e._v(e._s(Math.round(100*t.amountFactories)/100))]),e._v(" Factories ")])})),0)])])},K=[],L=function e(t,n,r){Object(j["a"])(this,e),this.name=t,this.amountFactories=n,this.perSecond=r},T=function(e){Object(C["a"])(n,e);var t=Object(I["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.itemsPerSecondsMode=!0,e.results=[],e}return Object(_["a"])(n,[{key:"requestChanged",value:function(e){var t={},n=this.store.book.findRecipe(e.recipeName),r=e.amount;this.resolveRequirements(t,n,r),this.prepareResults(t)}},{key:"resolveRequirements",value:function(e,t,n){for(var r=0;r<t.inputs.length;r++){var o=this.store.book.findRecipe(t.inputs[r].recipeName);if(null==o)throw new Error("Couldn`t find input recipe with the name: "+t.inputs[r].recipeName+" for the recipe: "+t.name);var a=n*o.amount/t.time;e[o.name]||(e[o.name]=0),e[o.name]+=a,o.inputs.length>0&&this.resolveRequirements(e,o,a)}}},{key:"prepareResults",value:function(e){for(var t in this.results=new Array,e){var n=this.store.book.findRecipe(t);this.results.push(new L(n.name,e[n.name]*n.time,e[n.name]))}}}]),n}(Object(R["c"])(B["a"]));Object(q["a"])([Object(R["d"])({required:!0})],T.prototype,"request",void 0),Object(q["a"])([Object(R["e"])("request")],T.prototype,"requestChanged",null),T=Object(q["a"])([Object(R["a"])({})],T);var $=T,G=$,F=Object(l["a"])(G,M,K,!1,null,"1e56eefa",null),J=F.exports,D={name:"chain-resolver",data:function(){return{request:null}},components:{ChainInputForm:N,ChainCalculator:J},methods:{resolveRequested:function(e){this.request=e}}},H=D,V=Object(l["a"])(H,g,w,!1,null,"9afa4ddc",null),U=V.exports,z={name:"App",components:{ChainResolver:U},data:function(){return{createFormVisible:!1}}},Q=z,W=Object(l["a"])(Q,y,k,!1,null,"b232bcec",null),X=W.exports;r["a"].use(b["a"]);var Y=[{path:"/",name:"Home",component:X},{path:"/library",name:"Library",component:function(){return n.e("about").then(n.bind(null,"55a5"))}}],Z=new b["a"]({routes:Y}),ee=Z;r["a"].config.productionTip=!1,new r["a"]({router:ee,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.62c0248d.js.map