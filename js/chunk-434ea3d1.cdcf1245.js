(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-434ea3d1"],{"06b7":function(t,a,e){},"082c":function(t,a,e){"use strict";var n=e("d7af");e.n(n).a},"24f4":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAABWVBMVEUAAAD/vwDfvwDf3yDq1QDq1RXvzxDy2Q303gv01Qvt0RL22xLv1xD42w/44h3x1Q7x3Bz43iH52SD54R7z1hHz3B302RD63iH01RD02hD02iD13A/w2A/22g722hP22yD22BH23BH73B7y2RH23R732xD33yDz1xD32yD02g/y1xH12h712BDy2RDz2RLz1hH02xH02BH02RD33CD33yDy1xD33CD12BL33h/12x/12hH43CD13SD12RH43h/02hL22hL43SD43yD23SD02RL43h/23B/02BH02xH53SD22yD12hH12hP12xLz2hL12hL02RP02hL02hL12RHz2BPz2RL02hL02RH02RLz2RH12RH02RL02RL02BPz2BLz2RL12RLz2RL02BPz2BL02BL02hLz2BL02RLz2RP02RL02BPz2RL02RLz2RLz2BLz2RP02RP02BL02RPpFR3iAAAAcnRSTlMABAgIDAwQFBcYHBwgIyMkJCcoKywsLy8wMDAzNDc3ODs7Ozw8Pz9AQERMTE9QV1hbXF9fX2BgY2NkZ2doa2tvb29vcHNzdHd3d3h7e3+Dg4eLj5OXm5+jp6+vt7u/w8PDx8vT09PX19vf5+vr7/Pz9/vWd0PuAAACR0lEQVQ4y52VWUPTQBDHZxOT0lowFCuSIgjFJAh4QIW2W4MREFrvWgt4F49qJZbs93+wSWkyE1ofzEOyM/llsv/ZmV0AcslGhRd5JbgZMoy+ph2eiayMbU+PAKf2rLjLejw1BJSdlWHfrzgXpjFRU8IxY+iFUpug5GIhGrOH+Rx+V1gkZBEZ5abZInGKiNVQTEi4TVNsEbaghYpq2P9W9NDfKmFrA22OgrxzwkdFg6CKc554nCV20ke9HM1ZNng8wb6y6KOCKoMd/6ZbRNMAjSmz9AEfaQrRmLIeJnNk3xQRGlNmy2ChWmLfAqY+6/kPbw6jGQsqyHzkE+9NgGTdn/MJroUeiNCkK7zm9bEXdfN4Qd3tCFGmaCkyDt365fHGWTDXT6vSg7abQGgJIlVX9tUbx14o68eWtHYPoRxHXf0ocAZEZ18lE4iiJo4ERcVPk0SNZDFYbmP07JkEbLis9TvADroh+i4N468lLAtF/fL5GiQP+2h7GdRXf2ZG5TXteg0V8t+bZveAwXpHbNO84oW9K4RbZmw2lYJcq7dusYUl5dL7u/h6C2DMr7DTZKxcwEH2pV++oKdX/QoQty/Utm4gRz5arTeENPSgC7Hr5QBtSwTtQ1nShq3zNpwZ1oawg5s73Q3QXdrcg66Sq9h930c/0H6thtuhton9R03zNEXITS0aL6FSBPW5uUbI0jy2ljaQIVHxG/N0NlpVGb7tK1Xt/zd4P7+OEXcZTnbEGaPb9mRkTdqO/o+TS7Y4L1Y4rxQ5t2K//guKhpjtWcUuSAAAAABJRU5ErkJggg=="},"38fc":function(t,a,e){"use strict";var n=(e("a9e3"),e("d3b7"),e("25f0"),{props:{contract:String},data:function(){return{show:!1,authorizeType:"general",amount:null,authorizeNum:null}},methods:{toggle:function(t){this.show=!this.show,t&&(this.authorizeNum=t)},authorize:function(){var a=this,t=this.authorizeNum;this.authorizeNum||(t="general"===this.authorizeType?this.$toWei((10*Number(this.amount)).toString()):this.$toWei("100000")),this.$contract.get("ERC20Token","approve",[this.$contract.get(this.contract)._address,t]).send({from:this.$address}).on("receipt",function(t){a.toggle(),a.$emit("send")}).on("error",console.error)}}}),i=(e("082c"),e("2877")),n=Object(i.a)(n,function(){var a=this,t=a.$createElement,t=a._self._c||t;return t("van-overlay",{attrs:{show:a.show}},[t("div",{staticClass:"authorize",on:{click:function(t){t.stopPropagation()}}},[t("div",{staticClass:"header"},[t("img",{attrs:{src:e("e10a")}}),t("span",[a._v("合约额度授权")])]),t("div",{staticClass:"authorize-type",class:{active:"general"===a.authorizeType},on:{click:function(t){a.authorizeType="general"}}},[t("div",[t("span",[a._v("普通授权")]),t("span",[a._v("使用多少额度授权多少额度")])]),t("span",[a._v("推荐")])]),t("div",{staticClass:"authorize-type",class:{active:"super"===a.authorizeType},on:{click:function(t){a.authorizeType="super"}}},[t("div",[t("span",[a._v("超级授权")]),t("span",[a._v("提前为交易额度授权")])]),t("span",[a._v("便捷")])]),t("van-button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:a.authorize}},[a._v(a._s(a.$t("define")))])],1)])},[],!1,null,"79c720e2",null);a.a=n.exports},4013:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAACf1BMVEUAAAD/AAD//wCAgAD/gAD/qgC/gAC/vwDMzAD/zADVqgD/1QDbtgC/nwDfnwDfvwD/xgDMswD/zADYsQDduwD/zADfrwD/zwDhtADVuADXrgDXvADZswDbtgDcrgDesQD/ygD/1QDWuADguAD/zADZswDbrQDcsADWtQDetQDXrwDftwDYsgD/0QDatAD/ywD/0gDbtgD/zAD/zQDdswD/zwDdtQDdtQf/zgD/0ADWtAb/0QDZswXarwXVsQXbswXctAXVrwXbtgXXswT/zgDXtATctgT/ywD/zwDZtATXsgT/zwD/0ADYsgT/zQD/0QD/zgDWsQT/ywD/zwDbsgTbsgfXtATbtAfatAf/zwDasgPatQf/0AD/zQD/zgP/zwP/0AP/0AP/zgP/0QPbswb/zQP/0APZsgX/zgPZswXaswXYtAX/zgP/0APYtAX/zgPZswj/zwPatQfZtQfYtQfZtQfbtQfZtAfatgbbtgTZtQbZswbZtQbbtQbatAbatQbYtAbatAbZtAbatAjbtAbbtQbatQfatQfatAfZtAfZtAfatAfatQfatQfbtAfZtQfatAfYtQfatQfZtAfbtQfZtAbZtAjZtQbatAbbtgjatAfbtAfaswfatQfatAfatQfatQjZtAfatQjZtAjatAjZtAjatQfZtAfatAfZtAfZtQfatQfatAjatAjbtQjatQfZtAjatAjZtQjatQjatAjZtAjZtQjatAjatQjatQjatQjZtAjatgjatAjbtQjbtQnatAfatQjatQjatAjZtAjZtQjatAjatQjbtQjZtAjatQjatQjatQjatAjatQjbtQjatAjatQjbtQjatQjatQlB/6+8AAAA1HRSTlMAAQECAgMEBAUFBgYHCAgICQoKDQ8PEBAREhMTFBUWFxgYGRkZGxwdHx8gICEhIiIiIyMkJSUmJiorLCwvMDEyMzY4OTk6Ozs7PT9AQUJCQkRFRUVGRkdHS0tMTExNVFVWV1hYW1xcXV1eYWJiYmNjZWVna29xcXN2d3h5eXl7fH19gYKFhomKi4yOj5CRk5SWl5iam6CgoaSqq6ussrS6wMHBw8bJzs/P0NLV1tra3N7e39/h5+fo6err7Ozu7u7v8PHy8/T29vb5+fr7/Pz8/f39/lGj+LgAAAJMSURBVBgZhcEFW5NhFIDhB8UgrBmzBcUmFRW7sLtFEVAUc85jdzd2d3djd3frd36Qc2y4773mdt8YOhaIiMslItPaE0Ibt2RG4ROVKa7WBJcgAzAMlASCyM8iiOx8TE6pTFAOcWKTmsN/5aYQIHUoIQxNooQzh5BynfgJYQg++ZUJwzEJr4QsTE0wZMfzl2Cqc6UxBsGjzQBMm6z1EdgNbgW4MaU90mfNMbgBwRCxVVX3YhDomImh5RtV/dEduz4ZTIvCcFD1leqJ8tjETEEwdPusn4fd008jsRMEu7LHLN3DCkvPxmIjCHa9P+rLdtQoUt24//qD3Z07NKCY4MIm8qRaO0vBdFV9vH3G5kNL1qbh5caFzWhLX6dTf/ZV6+66WtBl18q2kXi5EQJFX1Yt7LTvvvV0YV2IXHo6DT9BCDT9u+r5b/pkWz2g6dFryZQQhABVL6rH2y2JeIy79b45/wgFUfiUaTb2gGV9OLesMR6J+76qzqVETAHtM4HYxPGrD1978fPd8Tnp0XhUWfPQuqx6uxp+fTNAIhoNmrdhx67CVVO7VsKrxfI7P0+NjL2kvxfhJ8As7CqMOfL8y5lR0TD5lxbVxscFtB6IX7mG/eYfvnnj+NJOpfGoekF1McWGpOIh+EQm9+zfI71mxVL49FqwYCbFhL8SsglrQhxe+Q7CcEzERwhD8HPmElJedUqkDCeEEUkESMrlv/KSsHGKg6AcUh3TpGyCmDCRIOJlMIYhEkdwrdzSJwafmL7iSiWEjCki4naLSEEGdn8At9Gz4Eb70TQAAAAASUVORK5CYII="},"4ae3":function(t,a,e){"use strict";var n=e("06b7");e.n(n).a},"4c53":function(t,a,e){"use strict";var n=e("23e7"),i=e("857a");n({target:"String",proto:!0,forced:e("eae9")("sub")},{sub:function(){return i(this,"sub","","")}})},"5b2b":function(t,a,e){t.exports=e.p+"img/join_limit.efc99039.png"},"89a3":function(t,a,e){},beeb:function(t,a,e){"use strict";var n=e("89a3");e.n(n).a},bf9b:function(t,a,e){"use strict";e.r(a);var n,i=(e("a4d3"),e("4de4"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("ade3")),d=(e("99af"),e("a15b"),e("a9e3"),e("d3b7"),e("25f0"),e("3ca3"),e("4c53"),e("ddb0"),e("3835")),o=(e("96cf"),e("1da1"));function s(a,t){var e,n=Object.keys(a);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(a),t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),n.push.apply(n,e)),n}var r=function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach(function(t){Object(i.a)(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}({},{components:{selfAuthorize:e("38fc").a},data:function(){return{canJoin:0,currentJoin:0,totalJoin:0,ethBalance:"0.00",upcBalance:"0.00",amount:"",oneETH:!0,fiveETH:!0,tenETH:!0,twentyETH:!0,changeProp:1,gasProp:1,outAmount:"0.00",minJoin:0,maxJoin:0,allCanJoin:0,show:!1,checked:!1,rule:!1,income:0,involved:0,todayCanJoin:0}},methods:{init:function(){this.getData()},getData:(n=Object(o.a)(regeneratorRuntime.mark(function t(){var a,u=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$currentTime();case 2:a=t.sent,a=new Date(new Date(1e3*a).toLocaleDateString()).getTime()/1e3+28800,Promise.all([this.$web3.eth.getBalance(this.$address),this.$contract.get("ERC20Token","balanceOf",this.$address).call({from:this.$address}),this.$contract.get("Bank","investMaxLimit").call({from:this.$address}),this.$contract.get("Bank","investInfomationOf",this.$address).call({from:this.$address}),this.$contract.get("Bank","userInfomationOf",this.$address).call({from:this.$address}),this.$contract.get("Bank","customCostProp").call({from:this.$address}),this.$contract.get("Bank","depositMaxLimit").call({from:this.$address}),this.$contract.get("Bank","newPerformanceOf",a).call({from:this.$address}),this.$contract.get("Bank","currentProfix",this.$address).call({from:this.$address}),this.$contract.get("Bank","depositMaxLimitOf",a).call({from:this.$address})]).then(function(t){var a=Object(d.a)(t,10),e=a[0],n=a[1],i=a[2],o=a[3],s=a[4],r=a[5],c=a[6],l=a[7],h=a[8],t=a[9],a=u.$fromWei(u.$BN(i).sub(u.$BN(o.principal)).toString(),2);u.currentJoin=u.$fromWei(o.principal,2),u.canJoin=a<0?0:a,u.outAmount=u.$fromWei(o.profixQuota,2),u.totalJoin=u.$fromWei(s.totalIn,2),u.ethBalance=u.$fromWei(e,2),u.upcBalance=u.$fromWei(n,2),u.changeProp=u.$fromWei(r),u.gasProp=.05,u.minJoin=.1,u.maxJoin=u.$fromWei(i),u.allCanJoin=u.$fromWei(u.$BN(c.depositQuota).sub(u.$BN(l)).toString()),u.income=u.$fromWei(h.st),u.involved=u.$fromWei(l,2),u.todayCanJoin=u.$fromWei(t,2),u.isShowETH()}).catch(function(t){});case 5:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),authorize:function(){var e=this;if(0<this.income)return vant.Toast.fail("您还有未领取的收益，请先领取！");var t=Number(this.amount),n=t*this.gasProp*this.changeProp;return t<this.minJoin||t>this.maxJoin?vant.Toast.fail("".concat(this.$t("minJoin")).concat(this.minJoin,"ETH，").concat(this.$t("maxJoin")).concat(this.maxJoin,"ETH")):t>this.canJoin&&0<this.currentJoin?vant.Toast.fail(this.$t("notJoinRange")):t>Number(this.allCanJoin)?this.show=!0:n>this.upcBalance?vant.Toast.fail(this.$t("notUPC")):void this.$contract.get("ERC20Token","allowance",[this.$address,this.$contract.get("Bank")._address]).call({from:this.$address},function(t,a){t||(e.$fromWei(a)>=n?e.join():(e.$refs.authorize.amount=n,e.$refs.authorize.toggle()))})},join:function(){var a=this;this.$contract.get("Bank","deposit").send({from:this.$address,value:this.$toWei("".concat(this.amount))}).on("transactionHash",function(t){vant.Toast.loading({duration:0,forbidClick:!0,message:a.$t("loading")})}).on("receipt",function(t){vant.Toast.clear(),a.getData(),a.$router.push({path:"/"})}).on("error",console.error)},isShowETH:function(){20<=this.canJoin||0==this.currentJoin?(this.oneETH=!1,this.fiveETH=!1,this.tenETH=!1,this.twentyETH=!1):10<=this.canJoin?(this.oneETH=!1,this.fiveETH=!1,this.tenETH=!1):5<=this.canJoin?(this.oneETH=!1,this.fiveETH=!1):1<=this.canJoin&&(this.oneETH=!1)}},mounted:function(){this.init()}}),o=(e("4ae3"),e("beeb"),e("2877")),r=Object(o.a)(r,function(){var a=this,t=a.$createElement,t=a._self._c||t;return t("div",{staticClass:"box"},[t("div",{staticClass:"header"},[t("div",[t("span",[a._v(a._s(a.$t("canJoin")))]),t("span",[a._v(a._s(a.canJoin)+"ETH")])]),t("div",[t("span",[a._v(a._s(a.$t("currentJoin")))]),t("span",[a._v(a._s(a.currentJoin)+"ETH")])]),t("div",[t("span",[a._v(a._s(a.$t("totalJoin")))]),t("span",[a._v(a._s(a.totalJoin)+"ETH")])])]),t("div",{staticClass:"content"},[t("div",{staticClass:"title"},[t("i"),t("span",[a._v(a._s(a.$t("joinQuota")))])]),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.amount,expression:"amount"}],attrs:{type:"number",placeholder:"0"},domProps:{value:a.amount},on:{input:function(t){t.target.composing||(a.amount=t.target.value)}}}),t("span",[a._v("ETH")])]),t("div",{staticClass:"amount"},[t("div",[t("img",{attrs:{src:e("24f4")}}),t("span",[a._v(a._s(a.ethBalance)+" ETH")])]),t("div",[t("img",{attrs:{src:e("4013")}}),t("span",[a._v(a._s(a.upcBalance)+" UPC")])])]),t("div",{staticClass:"select-join"},[t("van-button",{attrs:{disabled:a.oneETH,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:function(t){a.amount=1}}},[a._v("1ETH")]),t("van-button",{attrs:{disabled:a.fiveETH,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:function(t){a.amount=5}}},[a._v("5ETH")]),t("van-button",{attrs:{disabled:a.tenETH,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:function(t){a.amount=10}}},[a._v("10ETH")]),t("van-button",{attrs:{disabled:a.twentyETH,color:"linear-gradient(45deg, #228C78, #1D4351)"},on:{click:function(t){a.amount=20}}},[a._v("20ETH")])],1),t("div",{staticClass:"consume"},[t("div",[t("i"),t("span",[a._v(a._s(a.$t("gasPrice")))]),t("span",[a._v(a._s(Number(a.amount)*a.changeProp*a.gasProp)+" UPC")])]),t("div",[t("i"),t("span",[a._v(a._s(a.$t("outQuota")))]),t("span",[a._v(a._s(a.outAmount)+" ETH")])])])]),t("div",{staticClass:"footer"},[t("van-button",{attrs:{disabled:!a.checked,color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:a.authorize}},[a._v(a._s(a.$t("define")))]),t("van-checkbox",{staticClass:"checkbox",model:{value:a.checked,callback:function(t){a.checked=t},expression:"checked"}},[a._v(" "+a._s(a.$t("joinRule1"))),t("span",{on:{click:function(t){a.rule=!0}}},[a._v(a._s(a.$t("joinRule2")))]),a._v(a._s(a.$t("joinRule3"))+" ")])],1),t("van-overlay",{staticClass:"limit",attrs:{show:a.show},on:{click:function(t){a.show=!1}}},[t("div",{on:{click:function(t){t.stopPropagation()}}},[t("img",{attrs:{src:e("5b2b")}}),t("div",{staticClass:"title"},[t("span",[a._v("今日可参与")]),t("span",[t("span",[a._v(a._s(a.involved))]),a._v("/"+a._s(a.todayCanJoin))])]),t("div",{staticClass:"line"},[a._v(a._s(a.involved/a.todayCanJoin*100)+"%")]),t("pre",[a._v("今日可参额度为前7日拨出额度的总和，当参与额度使用完后合约当日不在接受额度，请勿直接往合约转入ETH；次日格林威治时间0点合约重新计算额度。")])]),t("van-button",{on:{click:function(t){a.show=!1}}},[a._v(a._s(a.$t("define")))])],1),t("van-overlay",{staticClass:"rule",attrs:{show:a.rule},on:{click:function(t){a.rule=!1}}},["zh-CN"===a.$i18n.locale?t("div",{on:{click:function(t){t.stopPropagation()}}},[t("span",[a._v("参与规则")]),t("div",[a._v(" Avatar（阿凡达）是一个去中心化的理财项目，存在不确定的风险因素，请您熟知以下规则后理性参与："),t("br"),a._v(" 一、Avatar风险准则： "),t("p",[a._v("1.不准向他人做任何形式的承诺和保障；")]),t("p",[a._v("2.不准夸大事实向他人宣传；")]),t("p",[a._v("3.不准收取任何会员的资金；")]),t("p",[a._v("4.不准用任何特殊协议吸引他人；")]),t("p",[a._v("5.充分了解Avatar所有制度模式以后方可与他人分享。")]),a._v(" 二、Avatar收益规则： "),t("p",[a._v("1.静态收益比例每日变动，由内置算法全智能决定；")]),t("p",[a._v("2.参与方式：100% ETH+1/20ETH的 UPC；")]),t("p",[a._v("3.静态收益+管理收益达到出局额度后，需再次参与才能继续享受相关收益；")]),t("p",[a._v("4.小奖每日上午8点开奖，随机抽取当天参与30 ETH及以上的5名玩家平均分配；")]),t("p",[a._v("5.大奖池倒计时36小时结束后开奖，倒计时结束，开奖一次；每多参加1ETH，增加1小时，倒计时结束 ，从后往前分配大奖。奖励给最后的300名玩家，倒数第1名：100倍，倒数第2-6名：5倍，倒数第7-300名：3倍。")])]),t("div",[t("span",[a._v(a._s(a.$t("redyRule")))]),t("van-button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:function(t){a.rule=!1}}},[a._v(a._s(a.$t("agree")))])],1)]):t("div",{staticClass:"rule",on:{click:function(t){t.stopPropagation()}}},[t("span",[a._v("Participation rules")]),t("div",[a._v(" Avatar is a decentralized financial management project, there are uncertain risk factors, please be familiar with the following rules and participate rationally:"),t("br"),a._v(" 1. Avatar Risk Criteria: "),t("p",[a._v("①It is not allowed to make any form of promise and guarantee to others;")]),t("p",[a._v("②Do not exaggerate the facts to promote to others;")]),t("p",[a._v("③Not allowed to collect funds from any member;")]),t("p",[a._v("④No special agreement is allowed to attract others;")]),t("p",[a._v("⑤Only fully understand all Avatar system models before sharing with others.")]),a._v(" 2. Avatar income rules: "),t("p",[a._v("①The static return ratio changes daily and is determined by the built-in algorithm fully intelligent;")]),t("p",[a._v("②Participation method: 100% ETH+1/20ETH UPC;")]),t("p",[a._v("③After the static income + management income reaches the outgoing quota, you need to participate again to continue to enjoy the relevant income;")]),t("p",[a._v("④The small prize is drawn every day at 8 a.m., and randomly selected 5 players who participate in 30 ETH and above on the same day are evenly distributed;")]),t("p",[a._v("⑤The prize pool will be drawn after the 36-hour countdown, and the countdown will be completed once. For each additional 1ETH, 1 hour will be added, and the countdown will end, and the prize will be distributed from back to front. Rewarded to the last 300 players, the penultimate 1: 100 times, the penultimate 2-6: 5 times, the penultimate 7-300: 3 times.")])]),t("div",[t("span",[a._v(a._s(a.$t("redyRule")))]),t("van-button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:function(t){a.rule=!1}}},[a._v(a._s(a.$t("agree")))])],1)])]),t("self-authorize",{ref:"authorize",attrs:{contract:"Bank"},on:{send:a.join}})],1)},[],!1,null,"2a4d0714",null);a.default=r.exports},d7af:function(t,a,e){},e10a:function(t,a){t.exports="data:image/png;base64,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"}}]);