(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f61edd14"],{"25f0":function(t,e,s){"use strict";var r=s("6eeb"),n=s("825a"),o=s("d039"),i=s("ad6d"),a="toString",c=RegExp.prototype,u=c[a],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=a;(l||d)&&r(RegExp.prototype,a,(function(){var t=n(this),e=String(t.source),s=t.flags,r=String(void 0===s&&t instanceof RegExp&&!("flags"in c)?i.call(t):s);return"/"+e+"/"+r}),{unsafe:!0})},3010:function(t,e,s){},"3ca3":function(t,e,s){"use strict";var r=s("6547").charAt,n=s("69f3"),o=s("7dd0"),i="String Iterator",a=n.set,c=n.getterFor(i);o(String,"String",(function(t){a(this,{type:i,string:String(t),index:0})}),(function(){var t,e=c(this),s=e.string,n=e.index;return n>=s.length?{value:void 0,done:!0}:(t=r(s,n),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,s){"use strict";var r=s("0366"),n=s("7b0b"),o=s("9bdd"),i=s("e95a"),a=s("50c4"),c=s("8418"),u=s("35a1");t.exports=function(t){var e,s,l,d,p,f,h=n(t),m="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,v=void 0!==y,b=u(h),S=0;if(v&&(y=r(y,g>2?arguments[2]:void 0,2)),void 0==b||m==Array&&i(b))for(e=a(h.length),s=new m(e);e>S;S++)f=v?y(h[S],S):h[S],c(s,S,f);else for(d=b.call(h),p=d.next,s=new m;!(l=p.call(d)).done;S++)f=v?o(d,y,[l.value,S],!0):l.value,c(s,S,f);return s.length=S,s}},"55e4":function(t,e,s){"use strict";var r=s("e58b"),n=s.n(r);n.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var r=s("1d80"),n=s("5899"),o="["+n+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(e){var s=String(r(e));return 1&t&&(s=s.replace(i,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,s){var r=s("861d"),n=s("d2bb");t.exports=function(t,e,s){var o,i;return n&&"function"==typeof(o=e.constructor)&&o!==s&&r(i=o.prototype)&&i!==s.prototype&&n(t,i),t}},"7db0":function(t,e,s){"use strict";var r=s("23e7"),n=s("b727").find,o=s("44d2"),i=s("ae40"),a="find",c=!0,u=i(a);a in[]&&Array(1)[a]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!u},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},"7e4b":function(t,e,s){},8307:function(t,e,s){"use strict";var r=s("d9e9"),n=s.n(r);n.a},"8b4c":function(t,e,s){},a630:function(t,e,s){var r=s("23e7"),n=s("4df4"),o=s("1c7e"),i=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:n})},a8bd:function(t,e,s){"use strict";var r=s("8b4c"),n=s.n(r);n.a},a9e3:function(t,e,s){"use strict";var r=s("83ab"),n=s("da84"),o=s("94ca"),i=s("6eeb"),a=s("5135"),c=s("c6b6"),u=s("7156"),l=s("c04e"),d=s("d039"),p=s("7c73"),f=s("241c").f,h=s("06cf").f,m=s("9bf2").f,g=s("58a8").trim,y="Number",v=n[y],b=v.prototype,S=c(p(b))==y,w=function(t){var e,s,r,n,o,i,a,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(s=u.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+u}for(o=u.slice(2),i=o.length,a=0;a<i;a++)if(c=o.charCodeAt(a),c<48||c>n)return NaN;return parseInt(o,r)}return+u};if(o(y,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,A=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof A&&(S?d((function(){b.valueOf.call(s)})):c(s)!=y)?u(new v(w(e)),s,A):w(e)},C=r?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;C.length>k;k++)a(v,_=C[k])&&!a(A,_)&&m(A,_,h(v,_));A.prototype=b,b.constructor=A,i(n,y,A)}},aa8d:function(t,e,s){"use strict";var r=s("3010"),n=s.n(r);n.a},b0c0:function(t,e,s){var r=s("83ab"),n=s("9bf2").f,o=Function.prototype,i=o.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return i.call(this).match(a)[1]}catch(t){return""}}})},d28b:function(t,e,s){var r=s("746f");r("iterator")},d3e3:function(t,e,s){"use strict";var r=s("ed33"),n=s.n(r);n.a},d7ac:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("app-main-layout",[t.iAmAuthor?s("div",{staticClass:"author"},["loading"===t.step?[s("div",[t._v("LOADING...")])]:"question"===t.step?[s("app-button",{on:{click:t.handleNextStep}},[t._v("Suivant")]),s("div",{staticClass:"author-question"},[s("app-loader",{attrs:{timer:30},on:{endTime:t.handleNextStep}}),s("h2",[t._v(t._s(t.getAnswers.question))]),s("img",{staticClass:"picture",attrs:{src:t.getAnswers.image}}),s("app-show-owner-response",{attrs:{answers:t.getAnswers.responses}})],1)]:"stats"===t.step?[s("app-button",{on:{click:t.handleNextStep}},[t._v("Suivant")]),s("app-show-owner-response",{attrs:{answers:t.getAnswers.responses,response:t.getAnswers.response,stats:t.stats}})]:"podium"===t.step?[s("app-button",{on:{click:t.handleNextStep}},[t._v("Suivant")]),s("app-game-podium",{attrs:{players:t.players}})]:"first-dice"===t.step||"dice"===t.step?[s("app-button",{on:{click:t.handleNextStep}},[t._v("Suivant")]),s("app-game-dice",{attrs:{category:t.getAnswers.category}})]:[s("app-button",{attrs:{type:"error"},on:{click:t.handleClose}},[t._v("Close")]),s("app-game-podium",{attrs:{players:t.players}})]],2):s("div",{staticClass:"no-author"},["loading"===t.step||"first-dice"===t.step?[s("div",{staticClass:"stats"},[t._v("LOADING...")])]:"question"===t.step?[t.isScoreShow?s("div",{staticClass:"stats"},[null===t.actualScore.success?s("h2"):t.actualScore.success?s("h2",{staticClass:"success"},[t._v("BRAVO")]):s("h2",{staticClass:"error"},[t._v("DOMMAGE")]),s("p",[t._v("Votre score: "+t._s(t.actualScore.score))])]):[s("app-loader",{attrs:{timer:30}}),s("app-show-not-owner-response",{attrs:{answers:t.getAnswers.responses},on:{choose:function(e){return t.handleClickNotHownerResponse(e)}}})]]:"stats"===t.step||"dice"===t.step||"podium"===t.step?[s("div",{staticClass:"stats"},[t.actualScore.success?s("h2",{staticClass:"success"},[t._v("BRAVO")]):s("h2",{staticClass:"error"},[t._v("DOMMAGE")]),s("p",[t._v(t._s(t.getStatsMessage))]),s("p",[t._v("Votre score: "+t._s(t.gamePlayer.score))])])]:[s("app-button",{style:{margin:"0 0 0 auto"},attrs:{type:"error"},on:{click:t.handleClose}},[t._v("Close")]),s("app-game-podium",{attrs:{players:t.players}})]],2)])},n=[],o=(s("7db0"),s("5530")),i=s("2f62"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.timer-t.time>=0?s("div",{staticClass:"AppLoader"},[s("div",{staticClass:"text"},[t._v(t._s(t.timer-t.time))]),s("svg",{attrs:{id:"L3",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve"}},[s("circle",{staticStyle:{opacity:"0.8"},attrs:{fill:"transparent",stroke:"#3398db","stroke-width":"4",cx:"50",cy:"50",r:"44"}}),s("circle",{attrs:{fill:"#3398db",stroke:"#3398db","stroke-width":"3",cx:"8",cy:"54",r:"6"}},[s("animateTransform",{attrs:{attributeName:"transform",dur:"1s",type:"rotate",from:"90 50 48",to:"450 50 48",repeatCount:"indefinite"}})],1)])]):t._e()},c=[],u=(s("a9e3"),{name:"AppLoader",props:{timer:{type:Number,required:!0}},data:function(){return{interval:null,time:0}},mounted:function(){var t=this;this.interval=setInterval((function(){t.time=t.time+1,t.time>=t.timer&&(t.$emit("endTime"),clearInterval(t.interval))}),1e3)}}),l=u,d=(s("d3e3"),s("2877")),p=Object(d["a"])(l,a,c,!1,null,"47a2c206",null),f=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"AppShowNotOwnerResponse"},t._l(t.answers,(function(e,r){return s("div",{key:e,staticClass:"response",style:{background:""+t.symbolsWithColor[r].color,marginRight:r%2===0?"10px":"0"},on:{click:function(s){return t.handleClick(e)}}},[s("faIcon",{attrs:{icon:[].concat(t.symbolsWithColor[r].symbol)}})],1)})),0)},m=[],g={name:"AppShowNotOwnerResponse",props:{answers:{type:Array,required:!0}},data:function(){return{symbolsWithColor:[{symbol:["fas","caret-down"],color:"#ff4757"},{symbol:["fas","gem"],color:"#3398db"},{symbol:["far","circle"],color:"#ff9f43"},{symbol:["far","square"],color:"#1cca9b"}]}},methods:{handleClick:function(t){this.$emit("choose",t)}}},y=g,v=(s("a8bd"),Object(d["a"])(y,h,m,!1,null,"300a45d6",null)),b=v.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"AppShowNotOwnerResponse"},[""!==t.response?s("div",{staticClass:"stats"},[t._l(t.answers,(function(e,r){return[s("div",{key:e,staticClass:"column"},[s("div",{staticClass:"value",style:{color:""+t.symbolsWithColor[r].color}},[t._v(" "+t._s(t.getSizeByKey(e))+" "),e===t.response?s("faIcon",{attrs:{icon:["fas","check"]}}):t._e()],1),s("div",{staticClass:"bar",style:{background:""+t.symbolsWithColor[r].color,height:60+t.getPercentByKey(e)+"px"}},[s("faIcon",{attrs:{icon:[].concat(t.symbolsWithColor[r].symbol)}})],1)])]}))],2):t._e(),t._l(t.answers,(function(e,r){return s("div",{key:e,staticClass:"response",style:{marginRight:r%2===0?"10px":"0",background:""+t.symbolsWithColor[r].color,opacity:""===t.response||e===t.response?1:.3}},[s("div",{staticClass:"left"},[s("faIcon",{attrs:{icon:[].concat(t.symbolsWithColor[r].symbol)}})],1),s("div",{staticClass:"right"},[t._v(t._s(e))])])}))],2)},w=[],_=(s("4de4"),{name:"AppShowOwnerResponse",props:{answers:{type:Array,required:!0},response:{type:String,required:!1,default:""},stats:{type:Object,required:!1,default:null}},data:function(){return{symbolsWithColor:[{symbol:["fas","caret-down"],color:"#ff4757"},{symbol:["fas","gem"],color:"#3398db"},{symbol:["far","circle"],color:"#ff9f43"},{symbol:["far","square"],color:"#1cca9b"}]}},methods:{getSizeByKey:function(t){return this.stats.filter((function(e){return e===t})).length},getPercentByKey:function(t){var e=this.getSizeByKey(t);return 0===e?0:100*e/this.stats.length*2}}}),A=_,C=(s("aa8d"),Object(d["a"])(A,S,w,!1,null,"8fa6c9dc",null)),k=C.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"podium"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t.get3BestScore.length>=2?[t._v(" "+t._s(t._f("shorten")(t.get3BestScore[1].username,10))+" ")]:t._e(),s("div",{staticClass:"column two"},[t._v("2")])],2),s("div",{staticClass:"col"},[t.get3BestScore.length>=1?[t._v(" "+t._s(t._f("shorten")(t.get3BestScore[0].username,10))+" ")]:t._e(),s("div",{staticClass:"column one"},[t._v("1")])],2),s("div",{staticClass:"col"},[t.get3BestScore.length>=3?[t._v(" "+t._s(t._f("shorten")(t.get3BestScore[2].username,10))+" ")]:t._e(),s("div",{staticClass:"column three"},[t._v("3")])],2)])])},I=[];s("fb6a");function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,r=new Array(e);s<e;s++)r[s]=t[s];return r}function O(t){if(Array.isArray(t))return N(t)}s("a4d3"),s("e01a"),s("d28b"),s("a630"),s("e260"),s("d3b7"),s("3ca3"),s("ddb0");function E(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}s("b0c0"),s("25f0");function q(t,e){if(t){if("string"===typeof t)return N(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(s):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?N(t,e):void 0}}function R(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(t){return O(t)||E(t)||q(t)||R()}var B={name:"AppGamePodium",props:{players:{type:Array,required:!0}},computed:{get3BestScore:function(){var t=$(this.players);return t.sort((function(t,e){return e.score-t.score})).slice(0,3)}}},P=B,j=(s("8307"),Object(d["a"])(P,x,I,!1,null,"adb2c1f4",null)),L=j.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"AppGameDice"},[s("div",{staticClass:"app-loader"},[s("div",{ref:"cube",staticClass:"cube"},[s("div",{style:{backgroundImage:"url('"+("production"===t.process?"/my-kyhoot":"")+"/img/dice/4.svg')"}}),s("div",{style:{backgroundImage:"url('"+("production"===t.process?"/my-kyhoot":"")+"/img/dice/3.svg')"}}),s("div",{style:{backgroundImage:"url('"+("production"===t.process?"/my-kyhoot":"")+"/img/dice/6.svg')"}}),s("div",{style:{backgroundImage:"url('"+("production"===t.process?"/my-kyhoot":"")+"/img/dice/1.svg')"}}),s("div",{style:{backgroundImage:"url('"+("production"===t.process?"/my-kyhoot":"")+"/img/dice/2.svg')"}}),s("div",{style:{backgroundImage:"url('"+("production"===t.process?"/my-kyhoot":"")+"/img/dice/5.svg')"}})])]),t.selectedSide?[s("div",{staticClass:"category",style:{background:t.selectedSide.color}},[s("h2",{staticClass:"title"},[t._v(t._s(t.selectedSide.slug))])])]:t._e()],2)},T=[],G=(s("99af"),{name:"AppGameDice",props:{category:{type:String,required:!0}},data:function(){return{selectedSide:null,isLaunch:!1,categories:[{slug:"Fais pas la moue",color:"#38761d",x:0,y:0},{slug:"Il était une fois",color:"#ff0000",x:180,y:0},{slug:"Info ou botox",color:"#ff9900",x:0,y:90},{slug:"C'est du propre",color:"#4a86e8",x:0,y:-90},{slug:"Comment ça marche",color:"#9900ff",x:-90,y:0},{slug:"Tomber sur un os",color:"#ff00ff",x:90,y:0}]}},computed:{process:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return"production"}))},mounted:function(){this.handleLaunch()},methods:{handleLaunch:function(){var t=this;this.isLaunch=!0,setTimeout((function(){t.selectedSide=t.categories.find((function(e){return e.slug===t.category})),t.$refs.cube.style.animation="none",t.$refs.cube.style.transform="rotateX(".concat(t.selectedSide.x,"deg) rotateY(").concat(t.selectedSide.y,"deg)")}),1600)}}}),D=G,F=(s("dec7"),Object(d["a"])(D,M,T,!1,null,"e060708e",null)),W=F.exports,V={name:"AppGame",components:{AppShowNotOwnerResponse:b,AppShowOwnerResponse:k,AppGamePodium:L,AppGameDice:W,AppLoader:f},data:function(){return{identifier:0,counter:[],players:[],player:{},step:"question",stats:[],questions:[],questionsIndex:0,author:null,actualScore:{score:0,success:null},mesages:{success:["Trop fort","Continue comme ça","Bonne réponse","C'est qui le meilleur ?"],error:["Allez relache pas","Tu peux réussir","Désespère pas","Aïe..."]}}},computed:Object(o["a"])({token:function(){return localStorage.getItem("token")},meetingId:function(){return this.$route.params.gameId},gamePlayer:function(){var t=this;return this.players.find((function(e){return e._id===t.ownPlayer._id}))},iAmAuthor:function(){return null!==this.author&&this.ownPlayer&&this.author===this.ownPlayer._id},getLastStep:function(){return this.steps[this.steps.length-1]},getAnswers:function(){return this.questions&&this.questions[this.questionsIndex]},isScoreShow:function(){var t=this;return this.counter.find((function(e){return e===t.token}))},getStatsMessage:function(){if(null===this.actualScore.success)return"";var t=this.actualScore.success,e=this.mesages[t?"success":"error"],s=Math.floor(Math.random()*e.length);return e[s]}},Object(i["b"])({ownPlayer:"player/getPlayer"})),mounted:function(){this.$socket.emit("joinRoom",this.meetingId),this.$store.dispatch("player/getPlayer"),this.$socket.emit("gameInit",{token:this.token,meetingIdentifier:this.meetingId})},sockets:{game:function(t){this.identifier=t.identifier,this.players=t.players,this.step=t.step,this.counter=t.counter,this.stats=t.stats,this.author=t.author,this.questions=t.questions,this.questionsIndex=t.questionsIndex}},methods:{handleClickNotHownerResponse:function(t){var e=this.gamePlayer.score,s=t===this.getAnswers.response;this.actualScore={score:e+(s?1:0),success:s},this.isScoreShow=s,this.$socket.emit("chooseResponse",{token:this.token,meetingIdentifier:this.meetingId,payload:t,time:new Date})},handleNextStep:function(){this.$socket.emit("nextStep",{token:this.token,meetingIdentifier:this.meetingId})},handleClose:function(){this.$router.push({name:"choose"})}}},K=V,z=(s("55e4"),Object(d["a"])(K,r,n,!1,null,"8c6c0e38",null));e["default"]=z.exports},d9e9:function(t,e,s){},dec7:function(t,e,s){"use strict";var r=s("7e4b"),n=s.n(r);n.a},e01a:function(t,e,s){"use strict";var r=s("23e7"),n=s("83ab"),o=s("da84"),i=s("5135"),a=s("861d"),c=s("9bf2").f,u=s("e893"),l=o.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(p,l);var f=p.prototype=l.prototype;f.constructor=p;var h=f.toString,m="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(i(d,t))return"";var s=m?e.slice(7,-1):e.replace(g,"$1");return""===s?void 0:s}}),r({global:!0,forced:!0},{Symbol:p})}},e58b:function(t,e,s){},ed33:function(t,e,s){},fb6a:function(t,e,s){"use strict";var r=s("23e7"),n=s("861d"),o=s("e8b5"),i=s("23cb"),a=s("50c4"),c=s("fc6a"),u=s("8418"),l=s("b622"),d=s("1dde"),p=s("ae40"),f=d("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),g=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!f||!h},{slice:function(t,e){var s,r,l,d=c(this),p=a(d.length),f=i(t,p),h=i(void 0===e?p:e,p);if(o(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!o(s.prototype)?n(s)&&(s=s[m],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return g.call(d,f,h);for(r=new(void 0===s?Array:s)(y(h-f,0)),l=0;f<h;f++,l++)f in d&&u(r,l,d[f]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-f61edd14.268f2ce9.js.map