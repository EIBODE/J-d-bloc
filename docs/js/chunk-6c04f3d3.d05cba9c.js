(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c04f3d3"],{"44cd":function(e,t,r){"use strict";var n=r("b97d"),i=r.n(n);i.a},"6add":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.formClasses},[e._t("default")],2)},i=[],a=(r("c975"),{name:"AppForm",props:{orientation:{type:String,required:!1,default:"vertical",validator:function(e){return["vertical","horizontal"].indexOf(e)>-1}}},computed:{formClasses:function(){var e=["form-wrapper"];return e.push(this.orientation),e}}}),o=a,s=(r("a304"),r("2877")),c=Object(s["a"])(o,n,i,!1,null,"027939ea",null);t["a"]=c.exports},a304:function(e,t,r){"use strict";var n=r("c73d"),i=r.n(n);i.a},b97d:function(e,t,r){},c73d:function(e,t,r){},c975:function(e,t,r){"use strict";var n=r("23e7"),i=r("4d64").indexOf,a=r("a640"),o=r("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(e){return c?s.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},ca4b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-main-layout",[r("app-form",[r("div",{staticClass:"input-row"},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.meeting.value,expression:"form.meeting.value"}],class:{"error-state":e.form.meeting.error},attrs:{id:"meeting",type:"number"},domProps:{value:e.form.meeting.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.joinMeeting()},input:function(t){t.target.composing||e.$set(e.form.meeting,"value",t.target.value)}}}),r("label",{class:{"error-state":e.form.meeting.error},attrs:{for:"meeting"}},[e._v(" "+e._s(e.$t("label.meeting"))+" ")])])]),r("div",{staticClass:"form-action"},[r("app-button",{on:{click:function(t){return e.joinMeeting()}}},[e._v(" "+e._s(e.$t("label.submit"))+" ")])],1)])],1)},i=[],a=r("6add"),o={name:"AppJoinMeeting",components:{AppForm:a["a"]},data:function(){return{form:{meeting:{value:null,error:!1}}}},methods:{joinMeeting:function(){var e=this;this.form.meeting.error=!1,this.form.meeting.value?this.$store.dispatch("meeting/joinMeeting",this.form.meeting.value).then((function(t){t?e.$router.push({name:"meeting",params:{meetingId:t.identifier}}):e.$store.dispatch("alert/create",{type:"error",message:e.$t("snackbar.meeting-not-exist"),closable:!0,autoCloseAfter:5e3,position:"bottom-left"})})).catch((function(){e.$store.dispatch("alert/create",{type:"error",message:e.$t("snackbar.an-error-has-occurred"),closable:!0,autoCloseAfter:5e3})})):(this.form.meeting.error=!0,this.$store.dispatch("alert/create",{type:"error",message:this.$t("snackbar.meeting-not-empty"),closable:!0,autoCloseAfter:5e3,position:"bottom-left"}))}}},s=o,c=(r("44cd"),r("2877")),u=Object(c["a"])(s,n,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6c04f3d3.d05cba9c.js.map