(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-587fa9a6"],{"073a":function(t,a,e){"use strict";e.r(a);var n=e("5530"),r={components:{selfAuthorize:e("38fc").a},data:function(){return{grade:0,isUpgrade:!1}},methods:{authorize:function(){var e=this;this.$contract.get("ERC20Token","allowance",[this.$address,this.$contract.get("Manager")._address]).call({from:this.$address},function(t,a){t||(5<=e.$fromWei(a)?e.upgrade():(e.$refs.authorize.amount=5,e.$refs.authorize.toggle()))})},upgrade:function(){var e=this;this.$contract.get("Manager","paymentDLevel").call({from:this.$address},function(t,a){t||e.$contract.get("Manager","paymentDLevel").send({from:e.$address}).on("transactionHash",function(t){vant.Toast.loading({duration:0,forbidClick:!0,message:e.$t("loading")})}).on("receipt",function(t){vant.Toast.clear(),e.$router.back()}).on("error",console.error)})},levelMigration:function(){var e=this;this.$contract.get("Manager","migrateOriginLevel").call({from:this.$address},function(t,a){!t&&a&&e.$contract.get("Manager","migrateOriginLevel").send({from:e.$address}).on("transactionHash",function(t){vant.Toast.loading({duration:0,forbidClick:!0,message:e.$t("loading")})}).on("receipt",function(t){vant.Toast.clear(),e.$router.back()}).on("error",console.error)})}},mounted:function(){var e=this;this.$contract.get("Manager","levelOf",this.$address).call({from:this.$address},function(t,a){e.grade=a})}},n=Object(n.a)({},r),r=(e("4d94"),e("2877")),n=Object(r.a)(n,function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("div",{staticClass:"box"},[a("img",{attrs:{src:e("139c")("./V"+t.grade+".png")}}),a("span",[t._v(t._s(t.$t("myID"))+"（V"+t._s(t.grade)+"）")]),a("p",[t._v(t._s(t.$t("gradeTitle")))]),a("pre",[t._v(t._s(t.$t("gradeContent"))+"\n\t")]),a("van-button",{attrs:{disabled:0<t.grade,color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:t.authorize}},[t._v(t._s(t.$t("upgrade")))]),a("self-authorize",{ref:"authorize",attrs:{contract:"Manager"},on:{send:t.upgrade}})],1)},[],!1,null,"310bb1f2",null);a.default=n.exports},"38fc":function(t,a,e){"use strict";var n=(e("d3b7"),e("25f0"),e("a9e3"),{props:{contract:String},data:function(){return{show:!1,authorizeType:"general",amount:null,authorizeNum:null}},methods:{toggle:function(t){this.show=!this.show,t&&(this.authorizeNum=t)},authorize:function(){var a=this,t=this.authorizeNum;this.authorizeNum||(t="general"===this.authorizeType?this.$toWei((10*Number(this.amount)).toString()):this.$toWei("100000")),vant.Toast.loading({duration:0,forbidClick:!0,message:this.$t("loading")}),this.$contract.get("ERC20Token","approve",[this.$contract.get(this.contract)._address,t]).send({from:this.$address}).on("transactionHash",function(t){vant.Toast.loading({duration:0,forbidClick:!0,message:a.$t("loading")})}).on("receipt",function(t){vant.Toast.clear(),a.toggle(),a.$emit("send")}).on("error",console.error)}}}),r=(e("9089"),e("2877")),n=Object(r.a)(n,function(){var a=this,t=a.$createElement,t=a._self._c||t;return t("van-overlay",{attrs:{show:a.show}},[t("div",{staticClass:"authorize",on:{click:function(t){t.stopPropagation()}}},[t("div",{staticClass:"header"},[t("img",{attrs:{src:e("e10a")}}),t("span",[a._v("合约额度授权")])]),t("div",{staticClass:"authorize-type",class:{active:"general"===a.authorizeType},on:{click:function(t){a.authorizeType="general"}}},[t("div",[t("span",[a._v("普通授权")]),t("span",[a._v("使用多少额度授权多少额度")])]),t("span",[a._v("推荐")])]),t("div",{staticClass:"authorize-type",class:{active:"super"===a.authorizeType},on:{click:function(t){a.authorizeType="super"}}},[t("div",[t("span",[a._v("超级授权")]),t("span",[a._v("提前为交易额度授权")])]),t("span",[a._v("便捷")])]),t("van-button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:a.authorize}},[a._v(a._s(a.$t("define")))])],1)])},[],!1,null,"25283ba6",null);a.a=n.exports},"4d94":function(t,a,e){"use strict";e("9a0f")},9089:function(t,a,e){"use strict";e("dde6")},"9a0f":function(t,a,e){},dde6:function(t,a,e){},e10a:function(t,a){t.exports="data:image/png;base64,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"}}]);