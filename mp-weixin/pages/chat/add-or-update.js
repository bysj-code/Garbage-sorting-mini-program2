(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/add-or-update"],{"0aa7":function(e,t,n){},"0f6f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,r,i,u){try{var s=e[i](u),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var u=e.apply(t,n);function s(e){i(u,a,r,s,o,"next",e)}function o(e){i(u,a,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("b7aa"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{cross:"",ro:{yonghuId:!1,chatIssue:!1,issueTime:!1,chatReply:!1,replyTime:!1,zhuangtaiTypes:!1,chatTypes:!1,insertTime:!1},ruleForm:{yonghuId:"",chatIssue:"",issueTime:"",chatReply:"",replyTime:"",zhuangtaiTypes:"",zhuangtaiValue:"",chatTypes:"",chatValue:"",insertTime:""},user:{},zhuangtaiTypesOptions:[],zhuangtaiTypesIndex:0,chatTypesOptions:[],chatTypesIndex:0}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return u(a.default.mark((function n(){var r,i,u,s,o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={page:1,limit:100,dicCode:"zhuangtai_types"},n.next=3,t.$api.page("dictionary",r);case 3:return i=n.sent,t.zhuangtaiTypesOptions=i.data.list,u={page:1,limit:100,dicCode:"chat_types"},n.next=8,t.$api.page("dictionary",u);case 8:if(s=n.sent,t.chatTypesOptions=s.data.list,!e.id){n.next=16;break}return t.ruleForm.id=e.id,n.next=14,t.$api.info("chat",t.ruleForm.id);case 14:o=n.sent,t.ruleForm=o.data;case 16:e.chatId&&(t.ruleForm.chatId=e.chatId);case 17:case"end":return n.stop()}}),n)})))()},methods:{zhuangtaiTypesChange:function(e){this.zhuangtaiTypesIndex=e.target.value,this.ruleForm.zhuangtaiValue=this.zhuangtaiTypesOptions[this.zhuangtaiTypesIndex].indexName,this.ruleForm.zhuangtaiTypes=this.zhuangtaiTypesOptions[this.zhuangtaiTypesIndex].codeIndex},chatTypesChange:function(e){this.chatTypesIndex=e.target.value,this.ruleForm.chatValue=this.chatTypesOptions[this.chatTypesIndex].indexName,this.ruleForm.chatTypes=this.chatTypesOptions[this.chatTypesIndex].codeIndex},issueTimeConfirm:function(e){console.log(e),this.ruleForm.issueTime=e.result,this.$forceUpdate()},replyTimeConfirm:function(e){console.log(e),this.ruleForm.replyTime=e.result,this.$forceUpdate()},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.chatIssue){n.next=3;break}return t.$utils.msg("问题不能为空"),n.abrupt("return");case 3:if(t.ruleForm.issueTime){n.next=6;break}return t.$utils.msg("问题时间不能为空"),n.abrupt("return");case 6:if(t.ruleForm.chatReply){n.next=9;break}return t.$utils.msg("回复不能为空"),n.abrupt("return");case 9:if(t.ruleForm.replyTime){n.next=12;break}return t.$utils.msg("回复时间不能为空"),n.abrupt("return");case 12:if(t.ruleForm.zhuangtaiTypes){n.next=15;break}return t.$utils.msg("状态不能为空"),n.abrupt("return");case 15:if(!t.ruleForm.id){n.next=20;break}return n.next=18,t.$api.update("chat",t.ruleForm);case 18:n.next=22;break;case 20:return n.next=22,t.$api.save("chat",t.ruleForm);case 22:e.setStorageSync("pingluenStateState",!0),t.$utils.msgBack("提交成功");case 24:case"end":return n.stop()}}),n)})))()},getDate:function(e){var t=new Date,n=t.getFullYear(),a=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(n,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,n("543d")["default"])},7485:function(e,t,n){"use strict";n.r(t);var a=n("0f6f"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"81fe":function(e,t,n){"use strict";var a=n("0aa7"),r=n.n(a);r.a},"91f0":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"b7aa"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"9ba2":function(e,t,n){"use strict";n.r(t);var a=n("91f0"),r=n("7485");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("81fe");var u,s=n("f0c5"),o=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"b9ecef88",null,!1,a["a"],u);t["default"]=o.exports},b02d:function(e,t,n){"use strict";(function(e){n("48e8");a(n("66fd"));var t=a(n("9ba2"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["b02d","common/runtime","common/vendor"]]]);