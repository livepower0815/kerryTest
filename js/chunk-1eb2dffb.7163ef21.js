(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eb2dffb"],{"21e1":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade",class:{"is-open":e.open},attrs:{id:"group-modal"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content",class:{"section-loading":e.isLoading_1}},[s("div",{staticClass:"modal-body"},[s("section",{staticClass:"search"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 offset-1"},[s("form",{staticClass:"form"},[s("div",{staticClass:"input-group input-lg"},[s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"form-control",attrs:{type:"text",name:"keyword",id:"keyword",placeholder:"請以關鍵字搜尋一個群組加入或新增一個群組"},domProps:{value:e.keyword},on:{keyup:function(t){e.findGroup()},input:function(t){t.target.composing||(e.keyword=t.target.value)}}})]),s("button",{staticClass:"btn btn-primary btn-icon",attrs:{type:"submit"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.findGroup()}}},[s("i",{staticClass:"icon-search i-24"})])])])])])]),s("section",{staticClass:"maintain"},[s("div",{staticClass:"row"},[e.groupList.length?s("div",{staticClass:"col-10 offset-1"},[s("h4",[e._v(e._s(e.tempSelection))]),s("div",{staticClass:"list recommand"},e._l(e.groupList,function(t,a){return s("a",{key:"recommand-"+a,staticClass:"item",class:{selected:null!==e.selection&&e.selection.grp_id===t.grp_id},attrs:{role:"button"},on:{click:function(s){e.selectGroup(t)}}},[s("h3",[e._v(e._s(t.grp_name))])])}))]):s("div",{staticClass:"col-10 offset-1 text-center"},[s("h3",[e._v("查無此群組名稱，請問是否新增？")]),s("a",{staticClass:"btn btn-border-green",attrs:{role:"button"},on:{click:function(t){e.addNewGroup()}}},[s("i",{staticClass:"icon-add_new"}),s("span",{staticClass:"text"},[e._v("新增群組「"+e._s(e.keyword)+"」")])])])])]),s("section",{staticClass:"action text-right"},[e.error?s("div",{staticClass:"error-block"},[s("span",{staticClass:"error text-center"},[e._v("\n              請先選擇一個欲加入的群組名稱。\n            ")])]):e._e(),s("a",{staticClass:"btn btn-default",on:{click:e.doCancel}},[e._v("\n            取消\n          ")]),s("a",{staticClass:"btn btn-primary",on:{click:e.doSubmit}},[e._v("\n            確認\n          ")])])])])])])},i=[],o=(s("ac6a"),s("8e44")),r=(s("3022"),{name:"GroupModal",props:{open:{type:Boolean,default:!1},custs:{type:Array},currentPage:{type:String,default:""}},data:function(){return{error:!1,isLoading_1:!1,keyword:"",recommandList:[],groupList:[],selection:null,tempSelection:null,selectedMemOri:[]}},watch:{keyword:"initList",open:"getAllGroup"},methods:{getAllGroup:function(){var e=this;this.open&&(this.isLoading_1=!0,Object(o["E"])(this.$store.state.userInfo.id,this.$store.state.userInfo.id).then(function(t){t.body.groups&&t.body.groups.length>0?(e.recommandList=t.body.groups.map(function(e){return{grp_id:e.grp_id,grp_name:e.grp_name}}),e.groupList=e.recommandList.map(function(e){return e}),""!=e.keyword&&e.groupList.forEach(function(t){e.keyword===t.grp_name&&(e.selectGroup(t),e.keyword="")})):(e.recommandList=[],e.groupList=[]),e.isLoading_1=!1}))},initList:function(){this.groupList=this.recommandList.map(function(e){return e})},findGroup:function(){var e=this;""===this.keyword?this.initList():this.groupList=this.recommandList.filter(function(t){return t.grp_name.indexOf(e.keyword)>-1})},select:function(e){console.log(e),this.selection=e},addNewGroup:function(){var e=this,t=this;t.isLoading_1=!0;for(var s=[],a=1;a<t.custs.length+1;a++){var i=t.custs[a-1];if(-1==t.selectedMemOri.indexOf(i)){var r={};r["identity"]=i,s[a]=r}}"customerCreate"===t.currentPage&&(s=[]),Object(o["wb"])(this.$store.state.userInfo.id,null,t.keyword,s).then(function(s){if(200==s.header.status)t.currentPage,e.$toast.info({title:"已新增「".concat(t.keyword,"」群組")});else if(s.body.errList){var a=s.body.errList||[];e.$emit("showError",a)}else e.$toast.info({title:s.header.message});t.getAllGroup()}),t.isLoading_1=!1},doSubmit:function(){var e=this,t=this;"customerCreate"===t.currentPage?this.$emit("submit",this.selection):(this.selection?Object(o["D"])(this.$store.state.userInfo.id,this.selection.grp_id).then(function(s){s?e.selectedMemOri=s.map(function(e){return e.id}):(e.selectedMemOri=[],e.unselectedMemOri=e.custsOfAgnt.map(function(e){return e}));for(var a=e.selectedMemOri.length,i=1;i<t.custs.length+1;i++){var r=t.custs[i-1];-1==t.selectedMemOri.indexOf(r)&&(t.selectedMemOri[a+i]=t.custs[i-1])}Object(o["yb"])(e.$store.state.userInfo.id,e.selection.grp_id,e.selection.grp_name,e.selectedMemOri).then(function(t){if(200==t.header.status)e.$toast.info({title:"已更新「".concat(e.selection.grp_name,"」群組")});else if(t.body.errList){var s=t.body.errList||[];e.$emit("showError",s)}else e.$toast.info({title:t.header.message})})}):this.error=!0,this.$emit("close"))},selectGroup:function(e){this.selection=e},doCancel:function(){this.selection=[],this.$emit("close")}}}),n=r,c=s("2877"),l=Object(c["a"])(n,a,i,!1,null,null,null);l.options.__file="GroupModal.vue";t["a"]=l.exports},"2fdb":function(e,t,s){"use strict";var a=s("5ca1"),i=s("d2c8"),o="includes";a(a.P+a.F*s("5147")(o),"String",{includes:function(e){return!!~i(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},3285:function(e,t,s){},"3d14":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.lv>4?s("img",{staticClass:"lv",attrs:{src:7===e.lv?e.BaseUrl+"assets/label_diamond.png":6===e.lv?e.BaseUrl+"assets/label_platinum.png":e.BaseUrl+"assets/label_gold.png",srcset:7===e.lv?e.BaseUrl+"assets/label_diamond@2x.png":6===e.lv?e.BaseUrl+"assets/label_platinum@2x.png":e.BaseUrl+"assets/label_gold@2x.png",width:e.size}}):e._e()},i=[],o=(s("c5f6"),s("be94")),r=s("2f62"),n={name:"Level",computed:Object(o["a"])({},Object(r["c"])(["BaseUrl"])),props:{lv:{type:Number,default:0},size:{type:Number,default:30}}},c=n,l=s("2877"),d=Object(l["a"])(c,a,i,!1,null,null,null);d.options.__file="Level.vue";t["a"]=d.exports},5118:function(e,t,s){(function(e){var a="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},s("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,s("c8ba"))},5147:function(e,t,s){var a=s("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}},6017:function(e,t,s){(function(e,t){(function(e,s){"use strict";if(!e.setImmediate){var a,i=1,o={},r=!1,n=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?m():h()?f():e.MessageChannel?g():n&&"onreadystatechange"in n.createElement("script")?y():v(),c.setImmediate=l,c.clearImmediate=d}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),s=0;s<t.length;s++)t[s]=arguments[s+1];var r={callback:e,args:t};return o[i]=r,a(i),i++}function d(e){delete o[e]}function u(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(s,a);break}}function p(e){if(r)setTimeout(p,0,e);else{var t=o[e];if(t){r=!0;try{u(t)}finally{d(e),r=!1}}}}function m(){a=function(e){t.nextTick(function(){p(e)})}}function h(){if(e.postMessage&&!e.importScripts){var t=!0,s=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=s,t}}function f(){var t="setImmediate$"+Math.random()+"$",s=function(s){s.source===e&&"string"===typeof s.data&&0===s.data.indexOf(t)&&p(+s.data.slice(t.length))};e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),a=function(s){e.postMessage(t+s,"*")}}function g(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;p(t)},a=function(t){e.port2.postMessage(t)}}function y(){var e=n.documentElement;a=function(t){var s=n.createElement("script");s.onreadystatechange=function(){p(t),s.onreadystatechange=null,e.removeChild(s),s=null},e.appendChild(s)}}function v(){a=function(e){setTimeout(p,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,s("c8ba"),s("4362"))},"66af":function(e,t,s){"use strict";var a=s("d7b6"),i=s.n(a);i.a},6762:function(e,t,s){"use strict";var a=s("5ca1"),i=s("c366")(!0);a(a.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"79f2":function(e,t,s){"use strict";var a=s("3285"),i=s.n(a);i.a},"8bfe":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",[s("section",{staticClass:"search container pb-0"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 offset-1"},[s("form",{staticClass:"form"},[s("div",{staticClass:"input-group input-lg"},[s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.keyowrd,expression:"keyowrd"}],staticClass:"form-control",attrs:{type:"text",name:"keyowrd",id:"keyowrd",placeholder:"輸入姓名、身分證或保單號碼進行搜尋..."},domProps:{value:e.keyowrd},on:{input:function(t){t.target.composing||(e.keyowrd=t.target.value)}}})]),s("button",{staticClass:"btn btn-primary btn-icon",attrs:{type:"submit"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.doSearch()}}},[s("i",{staticClass:"icon-search i-24"})])])])])])]),s("section",{staticClass:"container-fluid"},[s("div",{staticClass:"form-group row search-checkbox "},[s("label",{staticClass:"d-inline-block"},[e._v("客戶類型(可複選)：")]),s("div",{staticClass:"checkbox checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customerType,expression:"customerType"}],attrs:{type:"checkbox",name:"customer",id:"customer-1",value:"1"},domProps:{checked:Array.isArray(e.customerType)?e._i(e.customerType,"1")>-1:e.customerType},on:{change:function(t){var s=e.customerType,a=t.target,i=!!a.checked;if(Array.isArray(s)){var o="1",r=e._i(s,o);a.checked?r<0&&(e.customerType=s.concat([o])):r>-1&&(e.customerType=s.slice(0,r).concat(s.slice(r+1)))}else e.customerType=i}}}),s("label",{attrs:{for:"customer-1"}},[e._v("壽險客戶")])]),s("div",{staticClass:"checkbox checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customerType,expression:"customerType"}],attrs:{type:"checkbox",name:"customer",id:"customer-2",value:"2"},domProps:{checked:Array.isArray(e.customerType)?e._i(e.customerType,"2")>-1:e.customerType},on:{change:function(t){var s=e.customerType,a=t.target,i=!!a.checked;if(Array.isArray(s)){var o="2",r=e._i(s,o);a.checked?r<0&&(e.customerType=s.concat([o])):r>-1&&(e.customerType=s.slice(0,r).concat(s.slice(r+1)))}else e.customerType=i}}}),s("label",{attrs:{for:"customer-2"}},[e._v("產險客戶")])]),s("div",{staticClass:"checkbox checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customerType,expression:"customerType"}],attrs:{type:"checkbox",name:"customer",id:"customer-3",value:"3"},domProps:{checked:Array.isArray(e.customerType)?e._i(e.customerType,"3")>-1:e.customerType},on:{change:function(t){var s=e.customerType,a=t.target,i=!!a.checked;if(Array.isArray(s)){var o="3",r=e._i(s,o);a.checked?r<0&&(e.customerType=s.concat([o])):r>-1&&(e.customerType=s.slice(0,r).concat(s.slice(r+1)))}else e.customerType=i}}}),s("label",{attrs:{for:"customer-3"}},[e._v("意外險客戶")])]),s("div",{staticClass:"checkbox checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customerType,expression:"customerType"}],attrs:{type:"checkbox",name:"customer",id:"customer-4",value:"4"},domProps:{checked:Array.isArray(e.customerType)?e._i(e.customerType,"4")>-1:e.customerType},on:{change:function(t){var s=e.customerType,a=t.target,i=!!a.checked;if(Array.isArray(s)){var o="4",r=e._i(s,o);a.checked?r<0&&(e.customerType=s.concat([o])):r>-1&&(e.customerType=s.slice(0,r).concat(s.slice(r+1)))}else e.customerType=i}}}),s("label",{attrs:{for:"customer-4"}},[e._v("放款客戶")])]),s("div",{staticClass:"checkbox checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customerType,expression:"customerType"}],attrs:{type:"checkbox",name:"customer",id:"customer-5",value:"5"},domProps:{checked:Array.isArray(e.customerType)?e._i(e.customerType,"5")>-1:e.customerType},on:{change:function(t){var s=e.customerType,a=t.target,i=!!a.checked;if(Array.isArray(s)){var o="5",r=e._i(s,o);a.checked?r<0&&(e.customerType=s.concat([o])):r>-1&&(e.customerType=s.slice(0,r).concat(s.slice(r+1)))}else e.customerType=i}}}),s("label",{attrs:{for:"customer-5"}},[e._v("團險客戶")])]),s("div",{staticClass:"checkbox checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.customerType,expression:"customerType"}],attrs:{type:"checkbox",name:"customer",id:"customer-6",value:"6"},domProps:{checked:Array.isArray(e.customerType)?e._i(e.customerType,"6")>-1:e.customerType},on:{change:function(t){var s=e.customerType,a=t.target,i=!!a.checked;if(Array.isArray(s)){var o="6",r=e._i(s,o);a.checked?r<0&&(e.customerType=s.concat([o])):r>-1&&(e.customerType=s.slice(0,r).concat(s.slice(r+1)))}else e.customerType=i}}}),s("label",{attrs:{for:"customer-6"}},[e._v("陌生開發/其他")])])])]),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("data-table",{attrs:{options:e.tableOption,"table-data":e.tableData,currentPage:e.currentPage,totalpages:e.totalpages,"scroll-data-loading":e.scrollDataLoading,"scroll-message-loading":e.scrollMessageLoading,"remote-data-msg":e.remoteDataMsg},on:{update:e.updateSelection}})],1)]),s("section",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"}),e._m(0),s("div",{staticClass:"col-3 col-sm-4 col-md-4 text-right"},[s("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.selection.length},on:{click:e.openGroupModal}},[e._v("\n          加入群組\n        ")]),s("button",{staticClass:"btn btn-primary mr-0",attrs:{disabled:!e.selection.length},on:{click:e.openPrintModal}},[e._v("\n          列印名條\n        ")])])])]),s("print-modal",{attrs:{open:e.printModalOpen,custs:e.selection},on:{close:function(t){e.panelClose("printModalOpen")}}}),s("group-modal",{attrs:{open:e.groupModalOpen,custs:e.selection},on:{submit:e.submitGroup,showError:e.errorGroup,close:function(t){e.panelClose("groupModalOpen")}}})],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-9 col-sm-8 col-md-8"},[s("div",{staticClass:"list inline"},[s("div",{staticClass:"item"},[s("span",{staticClass:"tag-box"},[e._v("要")]),s("small",{staticClass:"text"},[e._v("壽險要保人")])]),s("div",{staticClass:"item"},[s("span",{staticClass:"tag-box"},[e._v("被")]),s("small",{staticClass:"text"},[e._v("壽險主被保人")])]),s("div",{staticClass:"item"},[s("span",{staticClass:"tag-box"},[e._v("意")]),s("small",{staticClass:"text"},[e._v("意外被保險人")])]),s("div",{staticClass:"item"},[s("span",{staticClass:"tag-box"},[e._v("團")]),s("small",{staticClass:"text"},[e._v("團險被保人")])]),s("div",{staticClass:"item"},[s("span",{staticClass:"tag-box"},[e._v("借")]),s("small",{staticClass:"text"},[e._v("房貸借款人")])]),s("div",{staticClass:"item"},[s("span",{staticClass:"tag-box"},[e._v("產")]),s("small",{staticClass:"text"},[e._v("產險客戶")])])])])}],o=s("ade3"),r=(s("c5f6"),s("6762"),s("2fdb"),s("96cf"),s("1da1")),n=(s("7f7f"),s("ac6a"),s("be94")),c=s("872c"),l=s("f2f8"),d=s("2f62"),u=s("8e44"),p=s("3d14"),m=s("df3a"),h=s("e73d"),f=s("21e1"),g=(s("5118"),{name:"SearchResult",mixins:[c["a"]],watch:{checkAll:"toggleCheckAll",customerType:function(e,t){this.doSearch()}},components:{PrintModal:h["a"],GroupModal:f["a"],Level:p["a"],Avatar:m["a"],DataTable:l["a"]},computed:Object(n["a"])({},Object(d["c"])(["BaseUrl","QueryKeyword","SliceMode"])),data:function(){var e=this;return{remoteDataMsg:"資料讀取中，請稍候...",currentWidth:0,currentScoll:0,groupModalOpen:!1,printModalOpen:!1,checkAll:!1,selection:[],customerType:["1","2","3","4","5","6"],order:{order_by:"2",order_asc:!0},page:"1",currentPage:0,scrollDataLoading:!1,scrollMessageLoading:!1,totalpages:0,keyowrd:"",resultTable:null,tableOption:{checkAll:!0,scrollHeight:350,isScrollLoading:!0,checkBoxHasUser:!0,columns:[{width:100,name:"name",label:"姓名",sorting:!0,click:function(t){e.routeToCustDetail(t.index,{custId:t.id,serNo:t.serNo})}},{name:"id",label:"身分證",sorting:!0},{width:120,name:"mobile",label:"手機",sorting:!0},{width:120,name:"phone",label:"電話",sorting:!0},{name:"birthday",label:"生日",sorting:!0},{name:"address",sorting:!0,label:"住家地址"},{width:100,name:"idmark",label:"公司往來"}],sorting:function(t){e.tableData=[],e.order.order_by==t?e.order.order_asc=!e.order.order_asc:e.order.order_asc=!0,e.order.order_by=t,e.getCustomersAndSetup(e.$store.state.userInfo.id,e.keyowrd)},scrollLoadingAPI:function(){e.scrollDataLoading=!0,e.scrollMessageLoading=!0,e.currentPage=e.currentPage+1,console.log("load more","page:"+e.currentPage),e.getCustomersPage(e.$store.state.userInfo.id,e.keyowrd)}},tableData:[]}},methods:Object(n["a"])({},Object(d["b"])(["setPageLock","updateCustID","updateQueryKeyword","updateSerNo"]),{updateSelection:function(e){this.selection=e},openGroupModal:function(){var e=!1;this.selection.forEach(function(t){""===t&&(e=!0)}),e?this.$toast.info({title:"選擇項目不得有 (無身分證) 用戶"}):this.panelOpen("groupModalOpen")},openPrintModal:function(){var e=!1;this.selection.forEach(function(t){""===t&&(e=!0)}),e?this.$toast.info({title:"選擇項目不得有 (無身分證) 用戶"}):this.panelOpen("printModalOpen")},submitGroup:function(e){this.panelClose("groupModalOpen")},errorGroup:function(e){var t="",s={};this.tableData.forEach(function(e){console.log(e);e.id;s[e.id]=e.name}),console.log(this.compreMap),e.forEach(function(e){t=t+"客戶: "+s[e]+" 已達群組上限，\n"}),t+="如需調整請至群組管理!!",this.$toast.info({title:t}),this.panelClose("groupModalOpen")},toggleCheckAll:function(e){this.selection=e?this.tableData.map(function(e){return e.id}):[]},routeToCustDetail:function(e,t){var s=t.custId,a=void 0===s?"":s,i=t.serNo,o=void 0===i?"":i;""!==a?(this.updateCustID(a),this.updateSerNo(""),localStorage.CustID=a,localStorage.SerNo="",this.$router.push({path:"/detail/CustID/tab/1"})):(this.updateSerNo(o),this.updateCustID(""),localStorage.CustID="",localStorage.SerNo=o,this.$router.push({path:"/detail/SerNo/tab/1"}))},getCustomersAndSetup:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,s){var a,i,r,n,c,l,d,p,m,h=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this.customerType.includes("1")?"1":"N",i=this.customerType.includes("2")?"1":"N",r=this.customerType.includes("3")?"1":"N",n=this.customerType.includes("4")?"1":"N",c=this.customerType.includes("5")?"1":"N",l=this.customerType.includes("6")?"1":"N",d=this.order.order_by,p=!0===this.order.order_asc?"1":"2",m=this.page,this.remoteDataMsg="資料讀取中，請稍候...",this.updateQueryKeyword(this.keyowrd),this.selection=[],this.checkAll=!1,Object(u["A"])(t,s,a,i,r,n,c,l,m,d,p,"200").then(function(e){e.body.customer_list?(h.totalpages=Number(e.body.totalpages),h.tableData=e.body.customer_list.map(function(e){var t,s=e.idmark.source1&&"1"==e.idmark.source1?"1":"N",a=e.idmark.source2&&"1"==e.idmark.source2?"2":"N",i=e.idmark.source3&&"1"==e.idmark.source3?"3":"N",r=e.idmark.source4&&"1"==e.idmark.source4?"4":"N",n=e.idmark.source5&&"1"==e.idmark.source5?"5":"N",c=e.idmark.source6&&"1"==e.idmark.source6?"6":"N";return t={index:e.index||"",vip_level:Number(e.vip_level)||0,sex:Number(e.sex)||0,name:e.name||"",age:e.age||"",id:e.id||"",serNo:e.ser_no||"",mobile:e.mobile||"",phone:e.phone||"",birthday:e.birthday||"",address:e.address||""},Object(o["a"])(t,"index",e.index||""),Object(o["a"])(t,"idmark",[s,a,i,r,n,c]),t})):h.tableData=[],h.currentPage=1,h.currentPage==h.totalpages?(h.scrollDataLoading=!0,h.scrollMessageLoading=!1):h.scrollMessageLoading=!1,h.remoteDataMsg="查無資料，請確認您輸入之資料是否正確"});case 14:case"end":return e.stop()}},e,this)}));return function(t,s){return e.apply(this,arguments)}}(),getCustomersPage:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,s){var a,i,r,n,c,l,d,p,m,h=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this.customerType.includes("1")?"1":"N",i=this.customerType.includes("2")?"1":"N",r=this.customerType.includes("3")?"1":"N",n=this.customerType.includes("4")?"1":"N",c=this.customerType.includes("5")?"1":"N",l=this.customerType.includes("6")?"1":"N",d=this.order.order_by,p=!0===this.order.order_asc?"1":"2",m=Number(this.currentPage),Object(u["A"])(t,s,a,i,r,n,c,l,m,d,p,"200").then(function(e){e.body.customer_list.forEach(function(e){var t,s=e.idmark.source1&&"1"==e.idmark.source1?"1":"N",a=e.idmark.source2&&"1"==e.idmark.source2?"2":"N",i=e.idmark.source3&&"1"==e.idmark.source3?"3":"N",r=e.idmark.source4&&"1"==e.idmark.source4?"4":"N",n=e.idmark.source5&&"1"==e.idmark.source5?"5":"N",c=e.idmark.source6&&"1"==e.idmark.source6?"6":"N";h.tableData.push((t={index:e.index||"",age:e.age||"",vip_level:Number(e.vip_level)||0,sex:Number(e.sex)||0,name:e.name||"",id:e.id||"",serNo:e.ser_no||"",mobile:e.mobile||"",phone:e.phone||"",birthday:e.birthday||"",address:e.address||""},Object(o["a"])(t,"index",e.index||""),Object(o["a"])(t,"idmark",[s,a,i,r,n,c]),t))});h.currentPage!==h.totalpages?(h.scrollMessageLoading=!1,h.scrollDataLoading=!1):h.scrollMessageLoading=!1,h.remoteDataMsg="查無資料，請確認您輸入之資料是否正確"});case 10:case"end":return e.stop()}},e,this)}));return function(t,s){return e.apply(this,arguments)}}(),doSearch:function(){this.tableData=[],this.getCustomersAndSetup(this.$store.state.userInfo.id,this.keyowrd)}}),mounted:function(){this.keyowrd=this.QueryKeyword,this.getCustomersAndSetup(this.$store.state.userInfo.id,this.QueryKeyword)}}),y=g,v=(s("66af"),s("2877")),b=Object(v["a"])(y,a,i,!1,null,"6e95bde8",null);b.options.__file="SearchResult.vue";t["default"]=b.exports},d2c8:function(e,t,s){var a=s("aae3"),i=s("be13");e.exports=function(e,t,s){if(a(t))throw TypeError("String#"+s+" doesn't accept regex!");return String(i(e))}},d7b6:function(e,t,s){},f2f8:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.options?s("section",{staticClass:"newTable"},[s("table",{staticClass:"table datatable table-striped",attrs:{id:e.prefix}},[s("thead",[s("tr",[e.options.checkAll?s("th",{attrs:{width:e.options.checkBoxHasUser?110:60}},[e.multiple?s("div",{staticClass:"checkbox checkbox-inline mr-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkAll,expression:"checkAll"}],attrs:{type:"checkbox",name:"check-all",id:"check-all",value:"1"},domProps:{checked:Array.isArray(e.checkAll)?e._i(e.checkAll,"1")>-1:e.checkAll},on:{change:function(t){var s=e.checkAll,a=t.target,i=!!a.checked;if(Array.isArray(s)){var o="1",r=e._i(s,o);a.checked?r<0&&(e.checkAll=s.concat([o])):r>-1&&(e.checkAll=s.slice(0,r).concat(s.slice(r+1)))}else e.checkAll=i}}}),s("label",{attrs:{for:"check-all"}})]):e._e(),e.options.checkBoxHasUser?s("span",[e._v("#")]):e._e()]):e._e(),e._l(e.options.columns,function(t,a){return s("th",{key:e.prefix+"-table-tr-"+a,class:t.sorting?"sorting "+(e.order.index==a+1?e.order.asc?"sorting_asc":"sorting_desc":""):"",attrs:{width:(a+1===e.options.columns.length&&e.options.scrollHeight?t.width+17:t.width)||"*"},on:{click:function(t){e.columnSorting(a+1)}}},[s("span",{domProps:{innerHTML:e._s(t.label)}})])})],2)]),e.tableData.length?s("tbody",{class:e.options.scrollHeight?"block-height":"",style:{height:e.options.scrollHeight+"px"},on:{scroll:function(t){e.scrollmethod()}}},[e._l(e.tableData,function(t,a){return s("tr",{key:e.prefix+"-table-td-"+a},[e.options.checkAll?s("td",{attrs:{width:e.options.checkBoxHasUser?110:60}},[e.multiple?s("div",{staticClass:"mr-0 checkbox checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selection,expression:"selection"}],attrs:{type:"checkbox",name:"td-item"+(e.multiple?"[]":""),id:e.prefix+"-check-"+a},domProps:{value:t.id,checked:Array.isArray(e.selection)?e._i(e.selection,t.id)>-1:e.selection},on:{change:[function(s){var a=e.selection,i=s.target,o=!!i.checked;if(Array.isArray(a)){var r=t.id,n=e._i(a,r);i.checked?n<0&&(e.selection=a.concat([r])):n>-1&&(e.selection=a.slice(0,n).concat(a.slice(n+1)))}else e.selection=o},function(t){e.$emit("update",e.selection)}]}}),s("label",{attrs:{for:e.prefix+"-check-"+a}})]):s("div",{staticClass:"mr-0 radio radio-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selection,expression:"selection"}],attrs:{type:"radio",name:"td-item"+(e.multiple?"[]":""),id:e.prefix+"-check-"+a},domProps:{value:t.id,checked:e._q(e.selection,t.id)},on:{change:[function(s){e.selection=t.id},function(t){e.$emit("update",e.selection)}]}}),s("label",{attrs:{for:e.prefix+"-check-"+a}})]),e.options.checkBoxHasUser?s("span",[s("span",{staticClass:"no"},[e._v(e._s(t.index))]),s("span",{staticClass:"info text-center"},[s("level",{attrs:{lv:Number(t.vip_level)}}),s("avatar",{attrs:{gender:Number(t.sex),size:20}})],1)]):e._e()]):e._e(),e._l(e.options.columns,function(a,i){return s("td",{key:"table-td-col-"+i,attrs:{width:a.width||"*"}},[a.template?s("span",{domProps:{innerHTML:e._s(a.template(t[a.name]))}}):"birthday"===a.name?s("span",[s("div",{staticClass:"date"},[e._v(e._s(e._f("dateFormat")(t[a.name])))]),s("div",{staticClass:"age"},[s("b",[e._v(e._s(t.age?t.age:"— —"))]),e._v("歲\n              ")])]):"idmark"===a.name?s("span",[s("div",{staticClass:"list inline"},[s("span",{staticClass:"tag-box",class:t[a.name].indexOf("1")>-1?"active":""},[e._v("\n                  要\n                ")]),s("span",{staticClass:"tag-box",class:t[a.name].indexOf("2")>-1?"active":""},[e._v("\n                  被\n                ")]),s("span",{staticClass:"tag-box",class:t[a.name].indexOf("3")>-1?"active":""},[e._v("\n                  意\n                ")]),s("span",{staticClass:"tag-box",class:t[a.name].indexOf("4")>-1?"active":""},[e._v("\n                  產\n                ")]),s("span",{staticClass:"tag-box",class:t[a.name].indexOf("5")>-1?"active":""},[e._v("\n                  團\n                ")]),s("span",{staticClass:"tag-box",class:t[a.name].indexOf("6")>-1?"active":""},[e._v("\n                  借\n                ")])])]):a.click?s("a",{staticClass:"link text-underline",on:{click:function(e){a.click(t)}}},[e._v(e._s(t[a.name]))]):s("span",[e._v(e._s(t[a.name]))])])})],2)}),e.scrollMessageLoading?s("tr",[e._m(0),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}})]):e._e()],2):s("tbody",[s("tr",[s("td",{staticClass:"empty-block",attrs:{colspan:"8"}},[s("h3",[e._v(e._s(e.remoteDataMsg))])]),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}}),s("td",{staticStyle:{display:"none"}})])])])]):e._e()},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",{staticClass:"text-center pt-3 pb-5",attrs:{colspan:"8"}},[s("h3",[e._v("\n            資料載入中\n            "),s("span",[e._v(". . .")])])])}],o=(s("ac6a"),s("c5f6"),s("28fe")),r=s("df3a"),n=s("872c"),c=(s("5118"),{name:"DataTable",mixins:[n["a"]],components:{Level:o["a"],Avatar:r["a"]},props:{multiple:{type:Boolean,default:!0},prefix:{type:String,default:""},remoteDataMsg:{type:String,default:""},currentPage:{type:Number,default:0},totalpages:{type:Number,default:0},scrollDataLoading:{type:Boolean,default:!1},scrollMessageLoading:{type:Boolean,default:!1},tableData:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return null}}},data:function(){return{tableList:this.tableData,order:{index:0,asc:!0},checkAll:0,selection:[],currentWidth:0}},watch:{checkAll:"doCheckAll"},methods:{scrollmethod:function(e){!this.scrollDataLoading&&e.target.scrollTop>e.target.scrollHeight-400&&this.options.scrollLoadingAPI()},doCheckAll:function(e){var t=this;e?this.tableData.forEach(function(e){""!==e.id&&t.selection.push(e.id)}):this.selection=[],this.$emit("update",this.selection)},columnSorting:function(e){this.order.index===e?this.order.asc=!this.order.asc:(this.order.index=e,this.order.asc=!0),this.options.sorting(e+1)}},mounted:function(){this.currentWidth=this.$el.clientWidth*(this.$el.clientWidth<1250?.95:1)}}),l=c,d=(s("79f2"),s("2877")),u=Object(d["a"])(l,a,i,!1,null,"d11ec204",null);u.options.__file="DataTableScroll.vue";t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-1eb2dffb.7163ef21.js.map