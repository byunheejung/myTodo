(function(t){function e(e){for(var o,a,s=e[0],c=e[1],i=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},u=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eacb2b74"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var i=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",i.name="ChunkLoadError",i.type=o,i.request=u,n[1](i)}r[t]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/admin"}},[t._v("admin")])],1),n("router-view")],1)},u=[],a=(n("034f"),n("2877")),s={},c=Object(a["a"])(s,r,u,!1,null,null,null),i=c.exports,l=n("bc3a"),h=n.n(l),d=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"lunchCanvas"}},[n("section",{staticClass:"container"},[n("ViewToday"),n("InputLunch"),n("LunchCanvas"),n("LunchMap"),n("testCRUD")],1),n("SideLunch")],1)},f=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrap-lunch"},[n("div",{staticClass:"arrow"}),n("div",{staticClass:"lunchCircle"},[n("canvas",{attrs:{id:"lunchMenuCircle",width:"500",height:"500"}})])])}],g=(n("cb29"),{name:"LunchCanvas",mounted:function(){this.drawLunchCanvas()},updated:function(){this.drawLunchCanvas()},computed:{getLunchMenu:function(){return this.$store.state.lunchMenu}},watch:{getLunchMenu:function(){this.drawLunchCanvas()}},methods:{byte2Hex:function(t){var e="0123456789ABCDEF";return String(e.substr(t>>4&15,1))+e.substr(15&t,1)},RGB2Color:function(t,e,n){return"#"+this.byte2Hex(t)+this.byte2Hex(e)+this.byte2Hex(n)},getColor:function(t,e){var n=0,o=128,r=127,u=2*Math.PI/e,a=Math.sin(u*t+2+n)*r+o,s=Math.sin(u*t+0+n)*r+o,c=Math.sin(u*t+4+n)*r+o;return this.RGB2Color(a,s,c)},getDeg:function(t){return t*Math.PI/180},drawCanvas:function(t,e){var n=document.getElementById("lunchMenuCircle"),o=n.getContext("2d"),r=this.getLunchMenu;o.beginPath(),o.fillStyle=e,o.moveTo(250,250),o.arc(250,250,250,this.getDeg(t),this.getDeg(t+360/r.length)),o.lineTo(250,250),o.fill()},drawCanvasText:function(t,e){var n=document.getElementById("lunchMenuCircle"),o=n.getContext("2d");o.save(),o.translate(250,250),o.rotate(this.getDeg(t)),o.textAlign="right",o.fillStyle="#fff",o.font="bold 15px sans-serif",o.fillText(e,130,10),o.restore()},drawLunchCanvas:function(){var t=0,e=this.getLunchMenu,n=e.length,o=360/n,r=[];if(0==n){var u=document.getElementById("lunchMenuCircle"),a=u.getContext("2d");return a.clearRect(0,0,u.width,u.height),void a.beginPath()}for(var s=0;s<n;s++){var c=e[s],i={deg:t,menu:c,color:this.getColor(s,n)};this.drawCanvas(t,this.getColor(s,n)),this.drawCanvasText(t+o/2,e[s]),r.push(i),t+=o}this.$store.commit("updateSaveWheel",r)}}}),_=g,b=Object(a["a"])(_,v,m,!1,null,"43ca43d8",null),C=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrap-ipt"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.grouplist,expression:"grouplist"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.grouplist=e.target.multiple?n:n[0]}}},t._l(t.grouplist,(function(e){return n("option",{key:e.group_id},[t._v(t._s(e.group_name))])})),0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newMenu,expression:"newMenu"}],staticClass:"ipt-lunch",attrs:{type:"text"},domProps:{value:t.newMenu},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.addLunch(e):null},input:function(e){e.target.composing||(t.newMenu=e.target.value)}}}),n("button",{staticClass:"btn-add",on:{click:t.addLunch}},[t._v("메뉴추가")]),n("button",{staticClass:"btn-spin",on:{click:t.spinlunch}},[t._v("오늘 뭐먹을지 돌려보자")])])},w=[],L={name:"InputLunch",created:function(){this.$store.dispatch("selectAllGroups")},props:{},data:function(){return{newMenu:null}},computed:{setLunchGroup:function(){return this.$store.state.options},setSaveWheel:{get:function(){return this.$store.state.saveWheel}},getLunchMenu:function(){return this.$store.state.lunchMenu},grouplist:{get:function(){return this.$store.state.groups},set:function(){}}},watch:{getLunchMenu:function(){}},methods:{addLunch:function(){null!=this.newMenu&&(this.$store.commit("addLunchList",this.newMenu),this.newMenu=null)},spinlunch:function(){var t=this,e=Math.floor(Math.abs(1e4*Math.random()))+360/this.getLunchMenu.length+1;if(this.getLunchMenu.length>0){var n=document.querySelector(".lunchCircle");n.style.transform="rotate("+e+"deg)",n.addEventListener("webkitTransitionEnd",(function(){t.saveCurrentWheel(e)}),!1)}else alert("메뉴를 입력해 주세요.")},saveCurrentWheel:function(t){this.todayLunch="";for(var e=360-t%360,n=this.getLunchMenu.length,o=360/n,r=this.setSaveWheel,u=0;u<n;u++)e>r[u].deg&&r[u].deg+o>e&&this.$store.commit("updateResult",{menu:r[u].menu,color:r[u].color})}}},M=L,x=Object(a["a"])(M,y,w,!1,null,"35077b26",null),G=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("div",{staticClass:"list-lunch"},t._l(t.getLunchMenu,(function(e,o){return n("div",{key:o,staticClass:"current-lunch"},[n("strong",{staticClass:"name"},[t._v(t._s(e))]),n("button",{staticClass:"btn-delete",on:{click:function(e){return t.removeLunch(o)}}},[t._v("삭제")])])})),0)])},O=[],E={name:"SideLunch",computed:{getLunchMenu:function(){return this.$store.state.lunchMenu}},methods:{removeLunch:function(t){this.$store.commit("deleteLunch",t)}}},$=E,P=Object(a["a"])($,S,O,!1,null,"346ff72e",null),T=P.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.todayLunch?n("h2",{staticClass:"today-lunch"},[t._v(" 오늘의 메뉴는 "),n("span",{style:{color:t.todayColor}},[t._v(t._s(t.todayLunch))]),t._v("입니다. ")]):t._e()},j=[],k={name:"ViewToday",props:{},computed:{todayLunch:function(){return this.$store.state.todayLunch},todayColor:function(){return this.$store.state.currentTxtColor}},watch:{todayLunch:function(){}}},U=k,D=Object(a["a"])(U,R,j,!1,null,"556c9a9d",null),I=D.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"map"}})},N=[],W={name:"LunchMap",props:{},computed:{}},B=W,F=Object(a["a"])(B,A,N,!1,null,"d5cb5304",null),H=F.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newGroupName,expression:"newGroupName"}],staticClass:"ipt-group",attrs:{type:"text"},domProps:{value:t.newGroupName},on:{input:function(e){e.target.composing||(t.newGroupName=e.target.value)}}}),n("button",{staticClass:"btn-test-add",attrs:{value:"submit"},on:{click:t.addGroup}},[t._v("메뉴추가")]),n("button",{staticClass:"btn-test-delete"},[t._v("메뉴삭제")]),n("button",{staticClass:"btn-test-modify"},[t._v("메뉴수정")]),n("button",{staticClass:"btn-test-search",on:{click:t.searchGroup}},[t._v("메뉴조회")]),n("div",{staticClass:"container"},[n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.groupList,(function(e){return n("tr",{key:e.group_id},[n("td",[t._v(t._s(e.group_id))]),n("td",[t._v(t._s(e.group_name))])])})),0)])])])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("id")]),n("th",[t._v("name")])])])}],q={name:"testCRUD",data:function(){return{newGroupName:null}},computed:{groupList:function(){return this.$store.state.groups}},methods:{searchGroup:function(){this.$store.dispatch("selectAllGroups")},addGroup:function(){null!=this.newGroupName&&this.$store.dispatch("insertGroups",this.newGroupName)}}},z=q,K=(n("8b15"),Object(a["a"])(z,J,V,!1,null,"790d1a59",null)),Q=K.exports,X={name:"home",components:{LunchCanvas:C,InputLunch:G,SideLunch:T,ViewToday:I,LunchMap:H,testCRUD:Q}},Y=X,Z=Object(a["a"])(Y,p,f,!1,null,null,null),tt=Z.exports;o["a"].use(d["a"]);var et=[{path:"/",name:"home",component:tt},{path:"/admin",name:"admin",component:function(){return n.e("about").then(n.bind(null,"b6a5"))}}],nt=new d["a"]({routes:et}),ot=nt,rt=(n("99af"),n("a434"),n("2909")),ut=n("2f62"),at=n("a7fe"),st=n.n(at);o["a"].use(ut["a"]),o["a"].use(st.a,h.a);var ct=function(){try{var t=JSON.parse(localStorage.getItem("lunch"));if(null===t)return;return t}catch(e){return}},it=function(t){try{var e=JSON.stringify(t);localStorage.setItem("lunch",e)}catch(n){localStorage.removeItem("lunch")}},lt=[{value:"default",text:"버전을 골라주세요"},{value:"lunch",text:"점심메뉴 버전"},{value:"dinner",text:"석식메뉴 버전"},{value:"soju",text:"회식 버전"},{value:"new",text:"새롭게"}],ht=new ut["a"].Store({state:{lunchMenu:ct()||[],options:lt,saveWheel:[],todayLunch:null,currentTxtColor:null,groups:[],newGroup:[]},mutations:{updateCurrentSelect:function(t,e){t.selected=e},addLunchList:function(t,e){t.lunchMenu=[].concat(Object(rt["a"])(t.lunchMenu),[e]),it(t.lunchMenu)},updateSaveWheel:function(t,e){t.saveWheel=e},updateResult:function(t,e){t.todayLunch=e.menu,t.currentTxtColor=e.color},deleteLunch:function(t,e){t.lunchMenu.splice(e,1),it(t.lunchMenu)},SUCCESS_GET_GROUPS:function(t,e){t.groups=e,console.log("SUCCESS_GET_GROUPS",e),console.log("sate.groups",t.groups)},FAIL_GET_GROUPS:function(){console.log("ERROR")},ADD_GROUP:function(t,e){t.newGroup=e,console.log("ADD_GROUP",e),console.log("sate.newGroup",t.newGroup)}},actions:{selectAllGroups:function(t){var e=t.commit;h.a.get("http://42.243.134.40:3000/api/groups/menuGroup").then((function(t){console.log("SUCCESS_GET_GROUPS_BEFORE",t.data),e("SUCCESS_GET_GROUPS",t.data)})).catch((function(t){console.log("FAIL_GET_GROUPS",t),e("FAIL_GET_GROUPS",t)}))},insertGroups:function(t){var e=t.commit,n=t.context;n&&h.a.post("http://42.243.134.40:3000/api/groups/menuGroup",{group_id:n,group_name:n}).then((function(t){console.log(t.data),e("ADD_GROUP",t.data)})).catch((function(t){console.error(t)}))}},modules:{}});o["a"].prototype.$axios=h.a,o["a"].config.productionTip=!1,new o["a"]({router:ot,store:ht,render:function(t){return t(i)}}).$mount("#app")},"85ec":function(t,e,n){},"8b15":function(t,e,n){"use strict";var o=n("b0c9"),r=n.n(o);r.a},b0c9:function(t,e,n){}});
//# sourceMappingURL=app.f471a111.js.map