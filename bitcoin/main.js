(this["webpackJsonpreact-bangle-bitcoin"]=this["webpackJsonpreact-bangle-bitcoin"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(5),l=n(6),r=n(1),o=n.n(r);function u(e){var t=e.title,n=e.text,a=e.style;return i.a.createElement("view",{style:Object(l.a)({},a,{flexDirection:o.a.FLEX_DIRECTION_ROW,justifyContent:o.a.JUSTIFY_SPACE_BETWEEN})},i.a.createElement("text",null,t),i.a.createElement("text",null,n))}function p(e){var t=e.ticker;return i.a.createElement("view",{style:{paddingTop:12}},i.a.createElement(u,{title:"Updated",text:new Date(t.time.updatedISO).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),style:{paddingBottom:5}}),i.a.createElement(u,{title:t.bpi.USD.code,text:"$".concat(t.bpi.USD.rate)}),i.a.createElement(u,{title:t.bpi.GBP.code,text:t.bpi.GBP.rate}),i.a.createElement(u,{title:t.bpi.EUR.code,text:t.bpi.EUR.rate}))}var E=function(){var e=i.a.useState(null),t=Object(c.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){return e.json?e.json():JSON.parse(e)})).then(l)}),[]),i.a.createElement("view",null,null===n?i.a.createElement("text",null,"Loading..."):i.a.createElement("text",null,n.chartName),null===n?null:i.a.createElement(p,{ticker:n}))},s=n(4);n.n(s).a.render(i.a.createElement(E,null))},7:function(e,t,n){e.exports=n(21)}},[[7,1,2]]]);
//# sourceMappingURL=main.1adbe9e6.chunk.js.map