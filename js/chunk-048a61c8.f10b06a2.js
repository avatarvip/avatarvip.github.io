(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-048a61c8"],{"3a39":function(w,g,o){w.exports=o.p+"img/redress_logo.3f865f93.png"},4918:function(w,g){w.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAMAAADWOFNCAAABlVBMVEUAAAAA/4AAqlUA/1UAv4AAzGYA1YAAtm0cqnEas4AX0XQVv2oVv4Aiu3cQv3Agv3Aav3MWvHohvHocvXEawXIZw3chxXsgv3gfwXwevHgew3gcv3gevnccwnofwXgevngdv3sdwHgcwnscvnkfwHkev3sgwnkgv3gewnoev3gdwXggv3gev3kewHsgv3kgwnkfwXkewnkhwHghwXofwXofwXgewXcgv3gfv3kfwXkhwnkhwXggwHkhwXkfwHkfwXghwnogwHkgwXofwHkhwHkhwnsgwXkfwXkhwXogwXkfwHkhwXkhwHogwXofwHkhwHofwXkgwHogwnogwHkgwnkgwHkgwXkgwXkgwnohwHkgwXogwXkfwHkhwXogwXkgwHkfwHkhwXogwXkhwXogwXkgwXogwXohwXohwXkgwHkgwXohwHkgwnogwXkgwXogwHogwXkhwXohwHkgwHogwXkhwXkhwXogwHkgwXogwXogwXogwHohwXohwXogwHkgwXogwHohwXohwXohwXkgwXkgwXohwXqDyAvBAAAAhnRSTlMAAgMDBAUGBwkKCwwMDxAQFBcXGx0eHyAhIiIkKy4xMzQ1Njc5PD9AQ0RGSExNUFBSVFVWWlteYGNjZWZudHp7fX5/hYWFh4uMj5KTlZmam5yfn6amp6ipqquwsbO0tbq7vL7CyMnP0dLU1tvc3d3e3+Lj5OXp6uzs7e7v8fP09ff4+fr8/UBea34AAAGISURBVEjH7dbnU8IwGAbwOMC9xT1x7wG4FcWF24Ii7onirgsRcaL9u03LYVvSNJFTP/F86/P2d+k1zV0BSLEcBzh8vCslAE2imyPktQpVYxwxh6i6JSuuFFGfFKoVURSI68SoC5ti9oLTDoxaAoppV18rqqTqmVXMnfqbj2yXI1Nui2Ic0V3+a/Wfu/x7yrc61NctJI9asV0JAB8MciYB8GO1FhOcxlUbTI06SnWWKsxq7T7h8sREpRr4iW5LLDaSycrFD8oepdVOPFENwL7AI+/GiSoX9rth3XsRQd3AuhJpGRV1aTXUlcN6ElFvGTh1oA/VLvQRjBg1H/tde1C1oKy2g0hb32u2KPxMsHM2ZqQlK0y95PDXNXa/6qn5WC+UKf4laR3k0/akl6omqJw0h/RUI1HpALRxVGkWlR8utUmnhkX1ANU5nZoQ1T1UV3RqVK6O6NSgXC3TqQq5MlKhfcl+eaHSuCnQdT6QrwWKWZIJLGbC+5hQZoTPMq1/lpmewsbak83f9QXf12/ygyV7VgAAAABJRU5ErkJggg=="},5265:function(w,g,o){},"637b":function(w,g,o){"use strict";o.r(g);var X=o("5530"),n=o("3835"),e=(o("a15b"),o("d3b7"),o("3ca3"),o("ddb0"),o("a9e3"),{data:function(){return{join:0,income:0,pos:0,disabled:!1}},methods:{goHome:function(){localStorage.setItem("compensate","true"),this.$router.push("/")},init:function(){this.$cache.compensate?(this.join=this.$cache.compensate.join,this.income=this.$cache.compensate.income,this.pos=this.$cache.compensate.pos,this.disabled=this.$cache.compensate.disabled):this.$cache.compensate={},this.getData()},getData:function(){var o=this;Promise.all([this.$contract.get("Bank","withdrawCompensate").call({from:this.$address}),this.$contract.get("Bank","userInfomationOf",this.$address).call({from:this.$address})]).then(function(w){var g=Object(n.a)(w,2),w=g[0],g=g[1];o.join=o.$fromWei(g.totalIn,2),o.income=o.$fromWei(g.totalOut,2),o.pos=o.$fromWei(w,2),o.disabled=!Number(o.join)&&!Number(o.pos),o.$cache.compensate.join=o.join,o.$cache.compensate.income=o.income,o.$cache.compensate.pos=o.pos,o.$cache.compensate.disabled=o.disabled}).catch(function(w){delete o.$cache.compensate})},withdraw:function(){var g=this;this.$contract.get("Bank","withdrawCompensate").send({from:this.$address}).on("transactionHash",function(w){vant.Toast.loading({duration:0,forbidClick:!0,message:g.$t("loading")})}).on("receipt",function(w){vant.Toast.clear(),g.getData()}).on("error",console.error)}},mounted:function(){this.init()}}),X=Object(X.a)({},e),e=(o("b537"),o("2877")),X=Object(e.a)(X,function(){var w=this,g=w.$createElement,g=w._self._c||g;return g("div",{staticClass:"box"},[g("img",{attrs:{src:o("3a39")}}),g("p",[w._v(w._s(w.$t("compensate01")))]),g("div",[g("div",[g("div",[g("img",{attrs:{src:o("9e8d")}}),g("span",[w._v(w._s(w.$t("totalJoin")))])]),g("span",[w._v(w._s(w.join)+" ETH")])]),g("div",[g("div",[g("img",{attrs:{src:o("d750")}}),g("span",[w._v(w._s(w.$t("totalIncome")))])]),g("span",[w._v(w._s(w.income)+" ETH")])]),g("div",[g("div",[g("img",{attrs:{src:o("4918")}}),g("span",[w._v(w._s(w.$t("compensate02")))])]),g("span",[w._v(w._s(w.pos)+" UPC")])])]),w.disabled?g("span",[w._v(w._s(w.$t("drawRemedyDefine")))]):g("van-button",{attrs:{color:"linear-gradient(45deg, #21C181, #21C1A4)"},on:{click:w.withdraw}},[w._v(w._s(w.$t("drawRemedy")))])],1)},[],!1,null,"ecee8178",null);g.default=X.exports},"9e8d":function(w,g){w.exports="data:image/png;base64,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"},b537:function(w,g,o){"use strict";o("5265")},d750:function(w,g){w.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAyCAMAAADC1sOAAAACDVBMVEUAAAAAAAAA/wAAgAAAqlUAv0AAv4AAmWYAzGYAtm0cqnEXuXQVv2oUsXYUxHYStm0Ru3cgv3Aew3gYtnkXxXQhyHogv3UdunYcvXEawXshxXsgv3gdvXUdxXUcv3gcwXUhxHYgv3kevHMewnkevncexHcdv3QcwXccvHohw3cgv3ofwXgfvXUew3gdv3sgw3kgv3YfwHkewnkev3cev3sew3cdwXcgwnkgv3gfwXgevnoev3gew3gdvXggwnogv3gfvncew3kgwnsfwHgfwHsewHggwXsgwnoew3kewXogwXkgv3ggwHkfwXofwXkfv3gewXggwXkgwHkfwXoewHohwHogwXcgwnkgwHofwXoewHsgwHkgwHsgwHkgwXofwXkgwHogwXkgwnkfwXkhwnkgwXkfwXkgwXogwXkgwHofwHogwXogwHggwnohwHofwXkgwHkgwXkfwXogwXkgwnkgwXofwHkgwXogwHkgwnkgwXkgwXogwXkgwHkgwXofwHkgwXkgwHkgwnkgwXofwHohwHogwHkgwXkhwHogwHkgwXogwHkfwXkhwXogwHkgwXkhwXkgwXkgwXkhwHkhwXkgwHogwXkgwHkgwXkhwXkhwXkhwXogwXogwHogwHkgwXohwXogwHkhwXohwXogwHkgwXogwXkgwXogwHkgwXohwXohwXkhwHogwXohwXoTM0R+AAAArnRSTlMAAQECAwQEBQUHCQsMDQ0ODxARFRYXGBobHR8gIyMkJScoKiorKywtLi8wMTIzNDc4OTs8PDw+P0BCQ0RERkdIS0xPUVFVV1hdXl9gYWJjZGZnaWttbW9wcXN2dnZ+f4OGh4mLjY+Tl5iZm52fn6Okp6msra+ws7a3t7i4ubq6u72/v8DDw8rKy83NztPT19nb3+Hj4+Tl5+np6uvt7/Dx8fLy8/T09vf4+fn6+/3nwRZ+AAAB4UlEQVQYGZXBiUNLARwH8O9y5iqMnBO5z4hMjtxHkVuuXogQk1truY8csSKMjFhij75/o99782qrtv36fJBOM30YkOUf+CAXeqe+0xLcCKUXdGyCSjlF2xOKUCY02imK0EqRB40IxQK0UBRA4wdFbUaVT8yAxjNabk6A2tIuWqJHh0DrHmNezoZWgDHRddA6/JO2qBtaOQHayqCxcrUYcYaWemhEKDxoo2iCRjuFB80UTdAIUszHa4ob0CinOOkJU+yASisdoWwoTS3cV93wiaGZSM01ZfN+wzAOlKyZPhwiZxRScRVd+8oe7+6eLZs3DCksesW+OqYhmYxd7FcBktnDfplu2IYe3IBuIyF2M8HblsZHloZi2Irf8O96xCx5ehsYc5HxViFR3nWKWliW1ZF/PFs/MsF9F+JMPm/SUgJgRR0tYfZ23AXHwksmbVXAnDtMqr5wEETuoUb+dwyAn6n8fv4w+I2Ozi0Q+VR7vxg2P5UC4xGTT53KwXD4qRBaix6zmN6tcYhXwzS+7EQiD1O7Mha91TBO1zav11taahjGZZ8w9s5FXx7GeQyNC+zWkQmNSSYdV6FTQUcYOm6TjiPQqaDjM3TcJm3m6SwonaDorMyCWnaEv6pHYyC2n5sIjX+f/TKmvxkOVgAAAABJRU5ErkJggg=="}}]);