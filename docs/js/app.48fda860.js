(function(e){function t(t){for(var r,o,u=t[0],c=t[1],l=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0f1c0f69":"7a8f079a","chunk-2177749e":"6c8b85cc","chunk-3746c607":"f00efc5d","chunk-6c04f3d3":"d05cba9c","chunk-8225cfc4":"2feca4e2","chunk-b261ce42":"74708e33","chunk-b64b23a6":"0a73f2ba","chunk-c0259a84":"a0190068","chunk-66026814":"2e6f9375","chunk-60ef71d2":"603ec6c2","chunk-ff4c219e":"54805d4f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0f1c0f69":1,"chunk-2177749e":1,"chunk-3746c607":1,"chunk-6c04f3d3":1,"chunk-8225cfc4":1,"chunk-b261ce42":1,"chunk-b64b23a6":1,"chunk-c0259a84":1,"chunk-66026814":1,"chunk-60ef71d2":1,"chunk-ff4c219e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0f1c0f69":"d1034cfb","chunk-2177749e":"fd785a33","chunk-3746c607":"ebcd02c9","chunk-6c04f3d3":"8b232658","chunk-8225cfc4":"b5e6ff1c","chunk-b261ce42":"0881bae9","chunk-b64b23a6":"e3889d87","chunk-c0259a84":"7a22d352","chunk-66026814":"1d849ac4","chunk-60ef71d2":"5fce04d3","chunk-ff4c219e":"7f88017b"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://mentos126.github.io/my-kyhoot/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"49f8":function(e,t,n){var r={"./fr.json":"f693"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"4da7":function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("dde5"),o={meeting:null},a={getMeeting:function(e){return e.meeting}},i={createMeeting:function(e){var t=e.dispatch,n=e.commit;return t("loader/startLoading","meeting/createMeeting",{root:!0}),r["a"].createMeeting().then((function(e){return n("setMeeting",e._id),e})).finally((function(){return t("loader/stopLoading","meeting/createMeeting",{root:!0})}))},setMeeting:function(e,t){var n=e.commit;n("setMeeting",t)},joinMeeting:function(e,t){var n=e.dispatch,o=e.commit;return n("loader/startLoading","meeting/joinMeeting",{root:!0}),r["a"].joinMeeting(t).then((function(e){return o("setMeeting",e),e})).finally((function(){return n("loader/stopLoading","meeting/joinMeeting",{root:!0})}))},getPlayers:function(e,t){var n=e.dispatch;return n("loader/startLoading","meeting/getPlayers",{root:!0}),r["a"].getPlayers(t).then((function(e){return e})).finally((function(){return n("loader/stopLoading","meeting/getPlayers",{root:!0})}))},isContributor:function(e,t){var n=e.dispatch;return n("loader/startLoading","player/isContributor",{root:!0}),r["a"].isContributor(t).then((function(e){return e})).finally((function(){return n("loader/stopLoading","player/isContributor",{root:!0})}))},canPlay:function(e,t){var n=e.dispatch;return n("loader/startLoading","player/canPlay",{root:!0}),r["a"].canPlay(t).then((function(e){return e})).finally((function(){return n("loader/stopLoading","player/canPlay",{root:!0})}))}},u={setMeeting:function(e,t){e.meeting=t}};t["default"]={namespaced:!0,state:o,getters:a,actions:i,mutations:u}},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("db4d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{key:e.$route.fullPath}),e.alert.message?n("app-snackbar",{attrs:{position:e.alert.position,type:e.alert.type,closable:e.alert.closable,"auto-close-after":e.alert.autoCloseAfter},on:{close:function(t){return e.destroyAlert()}}},[e._v(" "+e._s(e.alert.message)+" ")]):e._e()],1)},a=[],i=function(){return n.e("chunk-b64b23a6").then(n.bind(null,"1533"))},u={components:{AppSnackbar:i},computed:{isLogged:function(){return this.$store.getters["user/isLogged"]},alert:function(){return this.$store.getters["alert/getAlert"]}},methods:{destroyAlert:function(){this.$store.dispatch("alert/clear")}}},c=u,l=(n("5c0b"),n("2877")),s=Object(l["a"])(c,o,a,!1,null,null,null),d=s.exports,f=n("8c4f"),p=function(){return n.e("chunk-8225cfc4").then(n.bind(null,"c251"))},g=function(){return n.e("chunk-3746c607").then(n.bind(null,"3eaa"))},h=function(){return n.e("chunk-6c04f3d3").then(n.bind(null,"ca4b"))},m=function(){return n.e("chunk-c0259a84").then(n.bind(null,"81b8"))},v=function(){return n.e("chunk-b261ce42").then(n.bind(null,"d7ac"))};r["default"].use(f["a"]);var y=[{path:"/login",name:"login",component:p,meta:{token:!1}},{path:"/choose",name:"choose",component:g,meta:{token:!1}},{path:"/join-meeting",name:"joinMeeting",component:h,meta:{token:!0}},{path:"/meeting/:meetingId",name:"meeting",component:m,meta:{token:!0}},{path:"/game/:gameId",name:"game",component:v,meta:{token:!0}},{path:"*",name:"default",component:g,meta:{token:!1}}],b=new f["a"]({mode:"hash",base:"https://mentos126.github.io/my-kyhoot/",routes:y});b.beforeEach((function(e,t,n){var r=localStorage.getItem("token");!e.meta.token||e.meta.token&&r?n():n({name:"login"})}));var k=b,L=(n("4160"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("5530")),w=n("bba4"),j=n.n(w),P=n("2f62"),E=n("656f"),O={};E.keys().forEach((function(e){var t=j()(e.replace(/(\.\/|\.module\.js)/g,""));O[t]=Object(L["a"])({},E(e).default)})),r["default"].use(P["a"]),console.log(O);var A=new P["a"].Store({modules:O}),C=A,_=(n("466d"),n("a925"));function M(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n)}})),t}r["default"].use(_["a"]);var S=new _["a"]({locale:navigator.language.substr(0,2)||Object({NODE_ENV:"production",BASE_URL:"https://mentos126.github.io/my-kyhoot/"}).VUE_APP_I18N_LOCALE||"fr",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"https://mentos126.github.io/my-kyhoot/"}).VUE_APP_I18N_FALLBACK_LOCALE||"fr",messages:M()});n("ce96"),n("4de4");r["default"].filter("shorten",(function(e,t){return e?t?e.length<=t?e:"".concat(e.substring(0,t),"..."):e:""}));var N=n("8055"),x=n.n(N),V=n("5132"),I=n.n(V),T={path:"/socket.io"};r["default"].use(new I.a({debug:!0,connection:x()("https://my-kahoot.herokuapp.com",T)}));var U=function(){return n.e("chunk-0f1c0f69").then(n.bind(null,"05fe"))},z=function(){return n.e("chunk-2177749e").then(n.bind(null,"7a71"))};r["default"].config.productionTip=!1,r["default"].component("AppButton",U),r["default"].component("app-main-layout",z),new r["default"]({router:k,store:C,i18n:S,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"656f":function(e,t,n){var r={"./alert.module.js":"9d72","./loader.module.js":"b423","./meeting.module.js":"4da7","./player.module.js":"7588"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="656f"},7588:function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("dde5"),o={player:null},a={getPlayer:function(e){return e.player}},i={authenticate:function(e,t){var n=e.dispatch,o=e.commit;return n("loader/startLoading","player/authenticate",{root:!0}),r["b"].authenticate(t).then((function(e){return o("setPlayer",e)})).finally((function(){return n("loader/stopLoading","player/authenticate",{root:!0})}))},getPlayer:function(e){var t=e.dispatch,n=e.commit;return t("loader/startLoading","player/getPlayer",{root:!0}),r["b"].getPlayer().then((function(e){return n("setPlayer",e),e})).finally((function(){return t("loader/stopLoading","player/getPlayer",{root:!0})}))},setPlayer:function(e,t){var n=e.commit;n("setPlayer",t)}},u={setPlayer:function(e,t){e.player=t,localStorage.setItem("token",t._id)}};t["default"]={namespaced:!0,state:o,getters:a,actions:i,mutations:u}},"9c0c":function(e,t,n){},"9d72":function(e,t,n){"use strict";n.r(t);var r={alert:{type:null,message:null,closable:!0,autoCloseAfter:null,position:"bottom-left"}},o={getAlert:function(e){return e.alert}},a={create:function(e,t){var n=e.commit;n("create",t)},clear:function(e){var t=e.commit;t("clear")}},i={create:function(e,t){e.alert=t},clear:function(e){e.alert={type:null,message:null,closable:!0,autoCloseAfter:null,position:"bottom-left"}}};t["default"]={namespaced:!0,state:r,getters:o,actions:a,mutations:i}},b423:function(e,t,n){"use strict";n.r(t);n("4de4");var r={currentlyLoading:[]},o={isLoading:function(e){return e.currentlyLoading.length>0}},a={startLoading:function(e,t){var n=e.commit;n("startLoading",t)},stopLoading:function(e,t){var n=e.commit;n("stopLoading",t)}},i={startLoading:function(e,t){e.currentlyLoading.push(t)},stopLoading:function(e,t){e.currentlyLoading=e.currentlyLoading.filter((function(e){return e!==t}))}};t["default"]={namespaced:!0,state:r,getters:o,actions:a,mutations:i}},ce96:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("bc3a"),o=n.n(r),a=n("2b0e"),i=n("a7fe"),u=n.n(i);a["default"].use(u.a,o.a);var c=o.a.create({baseURL:"https://my-kahoot.herokuapp.com",headers:{"Access-Control-Allow-Origin":"*"}}),l=n("ecee"),s=n("b702"),d=n("c074"),f=n("ad3d");a["default"].component("faIcon",f["a"]);l["c"].add(d["f"],d["c"],s["b"],s["e"],d["r"],d["p"],d["d"],d["e"],d["a"],d["b"],d["o"],d["n"],s["d"],d["k"],d["q"],d["c"],d["f"],s["a"],s["c"],d["s"],d["m"],d["h"],d["g"],d["i"],d["l"],d["j"])},dde5:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));n("99af");var r=n("ce96"),o=function(){var e=localStorage.getItem("token");return r["a"].post("/meeting",{player:e}).then((function(e){return e.data}))},a=function(e){return r["a"].get("/meeting/".concat(e),{meetingIdentifier:e}).then((function(e){return e.data}))},i=function(e){var t=localStorage.getItem("token");return r["a"].get("/meeting/".concat(e,"/player/").concat(t,"/is-contributor")).then((function(e){return e.data}))},u=function(e){return r["a"].get("/meeting/".concat(e)).then((function(e){return 0===e.data.status}))},c={createMeeting:o,joinMeeting:a,isContributor:i,canPlay:u},l=function(e){return r["a"].post("/player",e).then((function(e){return e.data}))},s=function(){var e=localStorage.getItem("token");return r["a"].get("/player/".concat(e)).then((function(e){return e.data}))},d={authenticate:l,getPlayer:s}},f693:function(e){e.exports=JSON.parse('{"title":{"werewolf":"J\'DÉ BLOC","lets-go":"C\'est parti !!!","your-role":"Votre rôle","role-list":"Rôles restant","select-your-captain":"Sélectionner votre capitaine","select-player":"Sélectionner un joueur","select-victim":"Sélectionner une victime"},"label":{"login":"Connection","change-user":"Changer d\'utilisateur","username":"Nom d\'utilisateur","picture":"Avatar","meeting":"Identifiant de réunion","submit":"Validez","create-meeting":"Créer une réunion","join-meeting":"Rejoindre une réunion","select":"Sélectionnez","more-steps":"Nouveaux contenu","and":" et "},"snackbar":{"an-error-has-occurred":"Une erreur est survenue","username-not-empty":"Veuillez inscrire le nom d\'utilisateur","picture-not-empty":"Veuillez sélectionner un avatar","meeting-not-exist":"La réunion n\'existe pas","meeting-not-empty":"Veuillez inscrire l\'identifiant de réunion","delete-player-error":"Vous avez êtes banni de cette réunion","delete-player-success":"Supression de {player}","players-size-error":"Le nombre de joueurs doit être supérieur ou égal à 1"},"modal":{"sure-delete":"Êtes-vous sure de vouloir supprimer"},"game":{"null":"","installation":"MISE EN PLACE","select-your-captain":"Sélectionner votre capitaine !","night-whole-village-falls-asleep-the-players-close-their-eyes":"C\'est la nuit tout le village s\'endort, les joueurs ferment les yeux","preparation-round":"TOUR DE PRÉPARATION","thief-waking-up":"le Voleur se réveille !","thief-back-sleep":"Le Voleur se rendort","cupid-awakes":"Cupidon se réveille !","cupid-back-sleep":"Cupidon se rendort","lovers-wake-up-recognize-each-other-and-back-sleep":"les Amoureux se réveillent, se reconnaissent, et se rendorment !","normal-round":"TOUR NORMAL","clairvoyant-wakes-up-and-select-player-whose-true-personality-she-wants-probe":"la Voyante se réveille, et désigne un joueur dont elle veut sonder la véritable personnalité !","clairvoyant-back-sleep":"La Voyante se rendort","werewolves-wake-up-recognize-each-other-and-select-new-victim":"les Loups-Garous se réveillent, se reconnaissent et désignent une nouvelle victime !!!","werewolves-back-sleep-and-dream-tasty-new-victims":"les Loups-Garous repus se rendorment et rêvent de prochaines victimes savoureuses !","witch-wakes-up-i-show-the-victim-of-werewolves-will-she-use-healing-potion-or-poisoning-potion":"la Sorcière se réveille, je lui montre la victime des Loups-Garous. Va-t-elle user de sa potion de guérison, ou d\'empoisonnement ?","morning-village-wakes-up-everyone-wakes-up-and-opens-eyes-everyone-except":"c\'est le matin, le village se réveille, tout le monde se réveille et ouvre les yeux, tout le monde sauf...","debate-begins":"LE DÉBAT COMMENCE","village-votes":"LE VILLAGE VOTE","you-voted-for-and-he-dead":"vous avez voté pour {player} et il est mort !","night-survivors-back-sleep":"c\'est la nuit, les survivants se rendorment !","your-captain-is":"Votre capitaine est {player}","selected-player":"Joueur sélectionné est: {role}","clairvoyant-select":"La voyante a vue le role d\'une personne","werewolf-select":"Les loups garou ont choisient leurs victimes","werewolf-dead":"Les loups garous ont tuer {player}","players-dead":"Résumer de la nuit","werewolves-show":"Voici vos compatriotes","village-select":"Le village a choisie","player-selected":"Les joueurs choisient","captain-select":"Le choix du capitaine","players-equality":"Il y a une égalité entre {players}","change-captain":"Le captaine choisie le nouveau capitaine","werewolves-win":"Les loups garous ont gagnés","werewolves-loose":"Les villageois ont gagnés"},"contact":{"leader":"Meneur","werewolves":"Les loups garous"},"role":{"clairvoyant":"voyante","cupid":"cupidon","hunter":"chasseur","little-girl":"petit fille","thief":"voleur","villager":"villageois","werewolf":"loup garou","witch":"sorcière"},"result-action":{"werewolf":"Les loups garou ont choisient de tuer:"}}')}});
//# sourceMappingURL=app.48fda860.js.map