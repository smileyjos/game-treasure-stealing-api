(function(){var e={82210:function(e,t,n){"use strict";n(66992),n(88674),n(19601),n(17727);var o=n(28935),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view",{staticClass:"router-view"}),n("Footer")],1)},i=[],u=n(93019),a=(n(57327),n(41539),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-section"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"main-menu left-side"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/inventory"}},[e._v("Inventory")])],1),e.isLoggedIn?n("div",{staticClass:"user-coin-info right-side"},[n("span",[e._v(e._s(e.totalSol)+" SOL ($5)")]),n("span",[e._v(e._s(e.totalLoot)+" Loot")]),n("el-popover",{attrs:{placement:"bottom",title:"My Account",width:"260",trigger:"click"}},[n("div",{staticClass:"p-row"},[n("label",{staticClass:"block"},[e._v("Wallet Address: ")]),n("strong",[e._v(e._s(e.wallet))]),e._v(" "),n("el-button",{attrs:{icon:"el-icon-copy-document",type:"text"},on:{click:e.copyWallet}})],1),n("div",{staticClass:"p-row"},[n("label",{staticClass:"block"},[e._v("Balance:")]),n("strong",[e._v(e._s(e.totalSol)+" SOL")])]),n("div",{staticClass:"p-row"},[n("el-button",{on:{click:e.logout}},[e._v("Disconnect")])],1),n("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-user-solid"},slot:"reference"},[e._v("My Account")])],1)],1):n("div",{staticClass:"user-coin-info right-side"},[n("router-link",{attrs:{to:"/connect-wallet"}},[e._v("Connect Wallet")])],1)])])}),c=[],s=n(67906),l=n(16198),f=n(47010),d=n.n(f),m=n(34665),h={data:function(){return{}},computed:(0,u.Z)((0,u.Z)((0,u.Z)({},(0,m.rn)({wallet:function(e){return e.users.wallet},user:function(e){return e.users.user}})),(0,m.Se)({isLoggedIn:"users/isLoggedIn"})),{},{totalSol:function(){return this.user.sol_balance},totalLoot:function(){return this.user.total_loot}}),methods:(0,u.Z)((0,u.Z)({},(0,m.nv)({doLogout:"users/logout"})),{},{logout:function(){var e=this;return(0,l.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.doLogout();case 2:e.$router.push("/connect-wallet?redirect=".concat(e.$route.fullPath));case 3:case"end":return t.stop()}}),t)})))()},copyWallet:function(){d()(this.wallet),this.$message({message:"Wallet address copied.",type:"success"})}})},v=h,g=n(1001),p=(0,g.Z)(v,a,c,!1,null,null,null),E=p.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-section"},[n("div",{staticClass:"container align-center"},[e._v(" (c) 2022 copyright by YourCompany ")])])}],b={data:function(){return{}}},k=b,w=(0,g.Z)(k,T,S,!1,null,null,null),y=w.exports;o["default"].filter("currency",(function(e){if("number"!==typeof e)return e;var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return t.format(e)}));var N={components:{Header:E,Footer:y},computed:(0,u.Z)({},(0,m.rn)({socket:function(e){return e.socket}})),mounted:function(){this.$store.dispatch("get_nfts"),this.socket.on("gts_connect",(function(e){console.log(e)})),this.socket.on("game_update",(function(e){console.log(e)}))}},O=N,A=(0,g.Z)(O,r,i,!1,null,null,null),Z=A.exports,I=(n(78783),n(33948),n(12809));o["default"].use(I.Z);var L=[{path:"/",name:"home",component:function(){return n.e(177).then(n.bind(n,30153))}},{path:"/login",name:"login",component:function(){return n.e(535).then(n.bind(n,22379))}},{path:"/connect-wallet",name:"connect-wallet",component:function(){return n.e(864).then(n.bind(n,16045))}},{path:"/inventory",name:"inventory",component:function(){return n.e(234).then(n.bind(n,97150))}},{path:"*",redirect:"/404",hidden:!0}],F=function(){return new I.Z({scrollBehavior:function(){return{y:0}},routes:L})},x=F();function C(){var e=F();x.matcher=e.matcher}var P=x,R=(n(73210),n(54747),n(76133)),G=n(92751),M=n(26166),D=n.n(M),j=n(74549),H=n.n(j),U=n(60329),$="bt_gts_token",W="bt_gts_refresh_token";function q(){return U.Z.get($)}function K(e){return U.Z.set($,e)}function B(){return U.Z.remove($)}function Y(){return U.Z.get(W)}function Q(e){return U.Z.set(W,e)}function z(){return U.Z.remove(W)}n(92196);var J=D().create({baseURL:"https://bonensoher.eosvn.com/api/v1",timeout:45e3});J.interceptors.request.use((function(e){return me.getters.token&&(e.headers["Authorization"]="Bearer ".concat(q())),e}),(function(e){return Promise.reject(e)})),J.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var V=J,X=function(){function e(){(0,R.Z)(this,e)}return(0,G.Z)(e,[{key:"login",value:function(e){return V({url:"/auth/login",method:"post",data:e})}},{key:"refreshToken",value:function(e){return V({url:"/auth/refresh-token",method:"post",data:e})}},{key:"getInfo",value:function(e){return V({url:"/auth/info",method:"get",params:e})}},{key:"logout",value:function(){return V({url:"/auth/logout",method:"post"})}},{key:"toggleSelectHero",value:function(e){return V({url:"/user/update-hero-status",method:"post",data:e})}},{key:"updateNonNFTEntries",value:function(e){return V({url:"/user/update-non-nft-entries",method:"post",data:e})}},{key:"enterGame",value:function(e){return V({url:"/user/enter-game",method:"post",data:e})}}]),e}(),ee=new X,te=function(){return{queued:!1,game_playing_id:0,game_id:0,token:q(),refresh_token:Y(),wallet:"",user:{},non_nft_entries:0,heroes_mint:[],heroes_data:[],curent_game_info:{}}},ne=te(),oe={heroes:function(e,t,n){return void 0===n.nfts?[]:_.filter(n.nfts,(function(t){return e.heroes_mint.indexOf(t.mint)>-1}))},isLoggedIn:function(e){return!!e.token},heroCommitedTotal:function(e){var t=_.filter(e.heroes_data,(function(e){return 1===e.active}));return t.length}},re={SET_QUEUED:function(e,t){e.queued=t},RESET_STATE:function(e){Object.assign(e,te())},SET_TOKEN:function(e,t){e.token=t},SET_REFRESH_TOKEN:function(e,t){e.refresh_token=t},SET_FULLNAME:function(e,t){e.fullname=t},SET_WALLET:function(e,t){e.wallet=t},SET_AVATAR:function(e,t){e.avatar=t},SET_USER:function(e,t){e.user=t},SET_HEROES_MINT:function(e,t){e.heroes_mint=t},SET_HEROES_DATA:function(e,t){e.heroes_data=t},SET_NON_NFT_ENTRIES:function(e,t){e.non_nft_entries=t},SET_CURENT_GAME_INFO:function(e,t){ne.curent_game_info=t},SET_GAME_PLAYING_ID:function(e,t){e.game_playing_id=t},SET_GAME_ID:function(e,t){e.game_id=t}},ie={login:function(e,t){var n=e.commit,o=t.email,r=t.password;return new Promise((function(e,t){ee.login({email:o.trim(),password:r}).then((function(t){var o=t.data;n("SET_TOKEN",o.token),n("SET_REFRESH_TOKEN",o.refresh_token),K(o.token),Q(o.refresh_token),e()})).catch((function(e){t(e)}))}))},refreshToken:function(e){var t=e.state,n=e.commit;return new Promise((function(e,o){var r={refresh_token:t.refresh_token};ee.refreshToken(r).then((function(t){var o=t.data;null!==o.token?(n("SET_TOKEN",o.token),K(o.token)):(B(),z()),e(t)})).catch((function(e){o(e)}))}))},getInfo:function(e){e.state;var t=e.commit;return new Promise((function(e,n){ee.getInfo().then((function(n){var o=n.data,r=o.user,i=o.heroes,u=o.heroes_data;t("SET_WALLET",r.wallet),t("SET_USER",r),t("SET_HEROES_MINT",i),t("SET_HEROES_DATA",u),t("SET_NON_NFT_ENTRIES",o.non_nft_entries),t("SET_CURENT_GAME_INFO",o.current_entries),t("SET_GAME_PLAYING_ID",o.game_playing_id),t("SET_GAME_ID",o.game_id),o.game_playing_id>0&&t("SET_QUEUED",!0),e(o)})).catch((function(e){n(e)}))}))},logout:function(e){e.state;var t=e.commit;return new Promise((function(e,n){ee.logout().then((function(){B(),z(),C(),t("RESET_STATE"),e()})).catch((function(e){n(e)}))}))},resetToken:function(e){var t=e.commit;return new Promise((function(e){B(),t("RESET_STATE"),e()}))},toggleSelectHero:function(e,t){var n=e.state,o=e.commit;return new Promise((function(e,r){ee.toggleSelectHero(t).then((function(t){var r=[];n.heroes_data.forEach((function(e){var n=e;n.mint===t.update.mint&&(n.active=t.update.active),r.push(n)})),o("SET_HEROES_DATA",r),o("SET_CURENT_GAME_INFO",t.game_info),e(t)})).catch((function(e){r(e)}))}))},updateNonNFTEntries:function(e,t){var n=e.commit;return new Promise((function(e,o){ee.updateNonNFTEntries({entries:t}).then((function(t){n("SET_CURENT_GAME_INFO",t.game_info),e(t)})).catch((function(e){console.log(e),o(e)}))}))},enterGame:function(e){e.commit;return new Promise((function(e,t){ee.enterGame({}).then((function(t){e(t)})).catch((function(e){console.log(e),t(e)}))}))}},ue={namespaced:!0,state:ne,getters:oe,actions:ie,mutations:re},ae=function(){function e(){(0,R.Z)(this,e)}return(0,G.Z)(e,[{key:"getGameInfo",value:function(){return V({url:"/game/info",method:"get"})}},{key:"getNSTF",value:function(){return V({url:"https://cryptoquestnft.com/api/nfts/all",method:"get"})}}]),e}(),ce=new ae,se=(n(68309),{sidebar:function(e){return e.sidebar},device:function(e){return e.device},token:function(e){return e.users.token},avatar:function(e){return e.users.avatar},name:function(e){return e.users.name}}),le=se;o["default"].use(m.ZP);var fe=n(53969),de=fe("https://bonensoher.eosvn.com/gts.dashboard",{}),_e=new m.ZP.Store({modules:{users:ue},state:{version:"1.0.1",sidebar:!1,device:"",nfts_loading:!1,nfts:[],SolTotal:0,socket:de,game_info:{}},getters:le,mutations:{SET_NFTS_LOADING:function(e,t){e.nfts_loading=t},SET_NFTS_DATA:function(e,t){e.nfts=t},SET_SOL_TOTAL:function(e,t){e.SolTotal=t},SET_GAME_INFO:function(e,t){e.game_info=t}},actions:{get_game_info:function(e){var t=e.commit;return new Promise((function(e,n){ce.getGameInfo().then((function(n){t("SET_GAME_INFO",n.game_info),e(n)})).catch((function(e){console.log(e),n(e)}))}))},get_nfts:function(e){var t=e.commit;return t("SET_NFTS_LOADING",!0),new Promise((function(e,n){ce.getNSTF().then((function(n){t("SET_NFTS_DATA",n.nfts),t("SET_NFTS_LOADING",!1),e(n)})).catch((function(e){console.log(e),t("SET_NFTS_LOADING",!1),n(e)}))}))}}}),me=_e,he=n(97345),ve=n(2228),ge=n(39879),pe=n.n(ge),Ee=(n(92222),n(69734)),Te=n.n(Ee),Se=Te().title||"Treasure Stealing";function be(e){return e?"".concat(e," - ").concat(Se):"".concat(Se)}pe().configure({showSpinner:!1});var ke=["/login","/connect-wallet"];P.beforeEach(function(){var e=(0,l.Z)((0,s.Z)().mark((function e(t,n,o){var r,i;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(pe().start(),document.title=be(t.meta.title),r=q(),!r){e.next=29;break}if("/connect-wallet"!==t.path){e.next=9;break}o({path:"/"}),pe().done(),e.next=27;break;case 9:if(i=me.getters.name,!i){e.next=14;break}o(),e.next=27;break;case 14:return e.prev=14,e.next=17,me.dispatch("users/getInfo");case 17:o(),e.next=27;break;case 20:return e.prev=20,e.t0=e["catch"](14),e.next=24,me.dispatch("users/resetToken");case 24:j.Message.error(e.t0||"Has Error"),o("/connect-wallet?redirect=".concat(t.path)),pe().done();case 27:e.next=30;break;case 29:-1!==ke.indexOf(t.path)?o():(o("/connect-wallet?redirect=".concat(t.path)),pe().done());case 30:case"end":return e.stop()}}),e,null,[[14,20]])})));return function(t,n,o){return e.apply(this,arguments)}}()),P.afterEach((function(){pe().done()}));var we=JSON.parse('{"hello":"Hello world!"}'),ye="en",Ne={en:we};o["default"].use(he.Z),o["default"].use(m.ZP),o["default"].config.productionTip=!1;var Oe=Object.assign(Ne);o["default"].use(H()),o["default"].use(ve.ZP),o["default"].config.productionTip=!1;var Ae=new he.Z({locale:ye,fallbackLocale:"en",messages:Oe});new o["default"]({i18n:Ae,store:me,router:P,render:function(e){return e(Z)}}).$mount("#app")},69734:function(e){e.exports={title:"Treasure Stealing",fixedHeader:!1,sidebarLogo:!0}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{177:"home",234:"inventory",535:"login",864:"connect-wallet"}[e]+"-legacy."+{177:"a2cca8bf",234:"8d503fda",535:"b24ab824",864:"eef97cf2"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="game-treasure-stealing-vue:";n.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(_);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},_=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(t&&t(o);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkgame_treasure_stealing_vue"]=self["webpackChunkgame_treasure_stealing_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(82210)}));o=n.O(o)})();