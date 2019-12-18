(function(t){function e(e){for(var r,a,c=e[0],s=e[1],i=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&d.push(u[a][0]),u[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==u[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},u={app:0},o=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eacb2b74"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=u[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=u[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(t);var i=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=u[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}u[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var h=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),u=n.n(r);u.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/admin"}},[t._v("admin")])],1),n("router-view")],1)},o=[],a=(n("034f"),n("2877")),c={},s=Object(a["a"])(c,u,o,!1,null,null,null),i=s.exports,l=n("bc3a"),h=n.n(l),d=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"lunchCanvas"}},[n("section",{staticClass:"container"},[n("ViewToday"),n("InputLunch"),n("LunchCanvas"),n("LunchMap"),n("testCRUD")],1),n("SideLunch")],1)},p=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrap-lunch"},[n("div",{staticClass:"arrow"}),n("div",{staticClass:"lunchCircle"},[n("canvas",{attrs:{id:"lunchMenuCircle",width:"500",height:"500"}})])])}],g=(n("cb29"),{name:"LunchCanvas",mounted:function(){this.drawLunchCanvas()},updated:function(){this.drawLunchCanvas()},computed:{getLunchMenu:function(){return this.$store.state.lunchMenu}},watch:{getLunchMenu:function(){this.drawLunchCanvas()}},methods:{byte2Hex:function(t){var e="0123456789ABCDEF";return String(e.substr(t>>4&15,1))+e.substr(15&t,1)},RGB2Color:function(t,e,n){return"#"+this.byte2Hex(t)+this.byte2Hex(e)+this.byte2Hex(n)},getColor:function(t,e){var n=0,r=128,u=127,o=2*Math.PI/e,a=Math.sin(o*t+2+n)*u+r,c=Math.sin(o*t+0+n)*u+r,s=Math.sin(o*t+4+n)*u+r;return this.RGB2Color(a,c,s)},getDeg:function(t){return t*Math.PI/180},drawCanvas:function(t,e){var n=document.getElementById("lunchMenuCircle"),r=n.getContext("2d"),u=this.getLunchMenu;r.beginPath(),r.fillStyle=e,r.moveTo(250,250),r.arc(250,250,250,this.getDeg(t),this.getDeg(t+360/u.length)),r.lineTo(250,250),r.fill()},drawCanvasText:function(t,e){var n=document.getElementById("lunchMenuCircle"),r=n.getContext("2d");r.save(),r.translate(250,250),r.rotate(this.getDeg(t)),r.textAlign="right",r.fillStyle="#fff",r.font="bold 15px sans-serif",r.fillText(e,130,10),r.restore()},drawLunchCanvas:function(){var t=0,e=this.getLunchMenu,n=e.length,r=360/n,u=[];if(0==n){var o=document.getElementById("lunchMenuCircle"),a=o.getContext("2d");return a.clearRect(0,0,o.width,o.height),void a.beginPath()}for(var c=0;c<n;c++){var s=e[c],i={deg:t,menu:s,color:this.getColor(c,n)};this.drawCanvas(t,this.getColor(c,n)),this.drawCanvasText(t+r/2,e[c]),u.push(i),t+=r}this.$store.commit("updateSaveWheel",u)}}}),_=g,b=Object(a["a"])(_,v,m,!1,null,"43ca43d8",null),C=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrap-ipt"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newMenu,expression:"newMenu"}],staticClass:"ipt-lunch",attrs:{type:"text"},domProps:{value:t.newMenu},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.addLunch(e):null},input:function(e){e.target.composing||(t.newMenu=e.target.value)}}}),n("button",{staticClass:"btn-add",on:{click:t.addLunch}},[t._v("메뉴추가")]),n("button",{staticClass:"btn-spin",on:{click:t.spinlunch}},[t._v("오늘 뭐먹을지 돌려보자")])])},L=[],w={name:"InputLunch",created:function(){},props:{},data:function(){return{newMenu:null}},computed:{setLunchGroup:function(){return this.$store.state.options},setSaveWheel:{get:function(){return this.$store.state.saveWheel}},getLunchMenu:function(){return this.$store.state.lunchMenu}},watch:{getLunchMenu:function(){}},methods:{addLunch:function(){null!=this.newMenu&&(this.$store.commit("addLunchList",this.newMenu),this.newMenu=null)},spinlunch:function(){var t=this,e=Math.floor(Math.abs(1e4*Math.random()))+360/this.getLunchMenu.length+1;if(this.getLunchMenu.length>0){var n=document.querySelector(".lunchCircle");n.style.transform="rotate("+e+"deg)",n.addEventListener("webkitTransitionEnd",(function(){t.saveCurrentWheel(e)}),!1)}else alert("메뉴를 입력해 주세요.")},saveCurrentWheel:function(t){this.todayLunch="";for(var e=360-t%360,n=this.getLunchMenu.length,r=360/n,u=this.setSaveWheel,o=0;o<n;o++)e>u[o].deg&&u[o].deg+r>e&&this.$store.commit("updateResult",{menu:u[o].menu,color:u[o].color})}}},M=w,S=Object(a["a"])(M,y,L,!1,null,"2cdc67bf",null),x=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("div",{staticClass:"list-lunch"},t._l(t.getLunchMenu,(function(e,r){return n("div",{key:r,staticClass:"current-lunch"},[n("strong",{staticClass:"name"},[t._v(t._s(e))]),n("button",{staticClass:"btn-delete",on:{click:function(e){return t.removeLunch(r)}}},[t._v("삭제")])])})),0)])},O=[],$={name:"SideLunch",computed:{getLunchMenu:function(){return this.$store.state.lunchMenu}},methods:{removeLunch:function(t){this.$store.commit("deleteLunch",t)}}},T=$,G=Object(a["a"])(T,E,O,!1,null,"346ff72e",null),j=G.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.todayLunch?n("h2",{staticClass:"today-lunch"},[t._v(" 오늘의 메뉴는 "),n("span",{style:{color:t.todayColor}},[t._v(t._s(t.todayLunch))]),t._v("입니다. ")]):t._e()},R=[],k={name:"ViewToday",props:{},computed:{todayLunch:function(){return this.$store.state.todayLunch},todayColor:function(){return this.$store.state.currentTxtColor}},watch:{todayLunch:function(){}}},I=k,U=Object(a["a"])(I,P,R,!1,null,"556c9a9d",null),W=U.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"map"}})},D=[],B={name:"LunchMap",props:{},computed:{}},F=B,H=Object(a["a"])(F,A,D,!1,null,"d5cb5304",null),J=H.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("button",{staticClass:"btn-test-delete"},[t._v("메뉴삭제")]),n("button",{staticClass:"btn-test-modify"},[t._v("메뉴수정")]),n("button",{staticClass:"btn-test-search",on:{click:t.searchGroup}},[t._v("메뉴조회")]),n("div",{staticClass:"container"},[n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.groupList,(function(e){return n("tr",{key:e.group_id},[n("td",[t._v(t._s(e.group_id))]),n("td",[t._v(t._s(e.group_name))])])})),0)])])])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("id")]),n("th",[t._v("name")])])])}],q={name:"testCRUD",computed:{groupList:function(){return this.$store.state.groups}},methods:{searchGroup:function(){this.$store.dispatch("selectAllGroups")}}},z=q,K=Object(a["a"])(z,N,V,!1,null,"82592544",null),Q=K.exports,X={name:"home",components:{LunchCanvas:C,InputLunch:x,SideLunch:j,ViewToday:W,LunchMap:J,testCRUD:Q}},Y=X,Z=Object(a["a"])(Y,f,p,!1,null,null,null),tt=Z.exports;r["a"].use(d["a"]);var et=[{path:"/",name:"home",component:tt},{path:"/admin",name:"admin",component:function(){return n.e("about").then(n.bind(null,"b6a5"))}}],nt=new d["a"]({routes:et}),rt=nt,ut=(n("99af"),n("a434"),n("2909")),ot=n("2f62"),at=n("a7fe"),ct=n.n(at);r["a"].use(ot["a"]),r["a"].use(ct.a,h.a);var st=function(){try{var t=JSON.parse(localStorage.getItem("lunch"));if(null===t)return;return t}catch(e){return}},it=function(t){try{var e=JSON.stringify(t);localStorage.setItem("lunch",e)}catch(n){localStorage.removeItem("lunch")}},lt=[{value:"default",text:"버전을 골라주세요"},{value:"lunch",text:"점심메뉴 버전"},{value:"dinner",text:"석식메뉴 버전"},{value:"soju",text:"회식 버전"},{value:"new",text:"새롭게"}],ht=new ot["a"].Store({state:{lunchMenu:st()||[],options:lt,saveWheel:[],todayLunch:null,currentTxtColor:null,groups:[]},getters:{groups:function(t){return t.groups}},mutations:{updateCurrentSelect:function(t,e){t.selected=e},addLunchList:function(t,e){t.lunchMenu=[].concat(Object(ut["a"])(t.lunchMenu),[e]),it(t.lunchMenu)},updateSaveWheel:function(t,e){t.saveWheel=e},updateResult:function(t,e){t.todayLunch=e.menu,t.currentTxtColor=e.color},deleteLunch:function(t,e){t.lunchMenu.splice(e,1),it(t.lunchMenu)},SUCCESS_GET_GROUPS:function(t,e){t.groups=e,console.log("SUCCESS_GET_GROUPS",e),console.log("sate.groups",t.groups)},FAIL_GET_GROUPS:function(){console.log("ERROR")}},actions:{selectAllGroups:function(t){var e=t.commit;h.a.get("http://42.243.134.40:3000/api/groups/menuGroup").then((function(t){console.log("SUCCESS_GET_GROUPS_BEFORE",t.data),e("SUCCESS_GET_GROUPS",t.data)})).catch((function(t){console.log("FAIL_GET_GROUPS",t),e("FAIL_GET_GROUPS",t)}))}},modules:{}});r["a"].prototype.$axios=h.a,r["a"].config.productionTip=!1,new r["a"]({router:rt,store:ht,render:function(t){return t(i)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.68dc44e6.js.map