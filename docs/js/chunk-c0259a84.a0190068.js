(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0259a84"],{4944:function(e,t,s){"use strict";var a=s("6b52"),i=s.n(a);i.a},"6b52":function(e,t,s){},"81b8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("app-main-layout",[s("div",{staticClass:"header"},[s("span",{staticClass:"header-title"},[e._v(" Identifiant de réunion: "+e._s(e.$route.params.meetingId)+" ")]),s("br"),s("span",{staticClass:"header-title"},[e._v(" Participant: "+e._s(e.players.length)+" ")]),s("br"),e.isContributor?s("app-button",{attrs:{size:"big"},on:{click:function(t){return e.goToGame()}}},[e._v(" "+e._s(e.$t("title.lets-go"))+" ")]):e._e()],1),s("div",{staticClass:"player-list"},e._l(e.players,(function(t){return s("div",{key:t.id,staticClass:"player"},[s("span",{staticClass:"player-username"},[e._v(" "+e._s(e._f("shorten")(t.username,8))+" "),e.isContributor&&t._id!==e.player._id?s("faIcon",{staticClass:"error",attrs:{icon:["fa","trash"]},on:{click:function(s){return e.openRemovePlayer(t)}}}):e._e()],1),s("img",{attrs:{src:t.picture,height:"150",width:"150"}})])})),0),e.isOpenPlayer?s("app-modal",{attrs:{"open-modal":e.isOpenPlayer,title:e.$t("modal.sure-delete")},on:{close:function(t){e.isOpenPlayer=!1}}},[s("div",{staticClass:"modal-body"},[e._v(" Voulez-vous supprimmer "+e._s(e.selectedPlayer.username)+" de cette réunion? ")]),s("div",{staticClass:"modal-action"},[s("app-button",{attrs:{type:"error"},on:{click:function(t){return e.deletePlayer()}}},[e._v(" Valider ")]),s("app-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"neutral"},on:{click:function(t){e.isOpenPlayer=!1}}},[e._v(" Annuler ")])],1)]):e._e()],1)},i=[],n=(s("d3b7"),s("5530")),r=s("2f62"),l=function(){return s.e("chunk-60ef71d2").then(s.bind(null,"0178"))},o={name:"AppMeeting",components:{AppModal:l},data:function(){return{players:[],selectedPlayer:null,isOpenPlayer:!1,isContributor:!1,canPlay:!1}},computed:Object(n["a"])({meetingId:function(){return this.$route.params.meetingId}},Object(r["b"])({player:"player/getPlayer"})),mounted:function(){var e=this;this.$socket.emit("joinRoom",this.meetingId),this.$store.dispatch("meeting/isContributor",this.meetingId).then((function(t){e.isContributor=t})),this.$store.dispatch("meeting/canPlay",this.meetingId).then((function(t){e.canPlay=t})),this.$store.dispatch("player/getPlayer").then((function(t){e.$socket.emit("getMeetingPlayers",{meetingIdentifier:e.meetingId,player:t})}))},sockets:{getPlayers:function(e){this.players=e},deletedMeetingPlayer:function(e){this.isOpenPlayer=!1,this.$store.dispatch("loader/stopLoading","AppMeeting/deletePlayer"),this.player._id===e._id?(this.$store.dispatch("alert/create",{type:"error",message:this.$t("snackbar.delete-player-error"),closable:!0,autoCloseAfter:5e3}),this.$router.go(-2)):this.$store.dispatch("alert/create",{type:"success",message:this.$t("snackbar.delete-player-success",{player:e.username}),closable:!0,autoCloseAfter:5e3})},launchGame:function(){this.$router.push({name:"game",params:{gameId:this.meetingId}})}},methods:{goToGame:function(){this.players.length>=1?this.$socket.emit("launchGame",{meetingIdentifier:this.meetingId}):this.$store.dispatch("alert/create",{type:"error",message:this.$t("snackbar.players-size-error"),closable:!0,autoCloseAfter:5e3})},openRemovePlayer:function(e){this.selectedPlayer=e,this.isOpenPlayer=!0},deletePlayer:function(){this.$store.dispatch("loader/startLoading","AppMeeting/deletePlayer"),this.$socket.emit("deleteMeetingPlayer",{meetingIdentifier:this.meetingId,player:this.selectedPlayer})}}},c=o,p=(s("4944"),s("2877")),u=Object(p["a"])(c,a,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-c0259a84.a0190068.js.map