(this["webpackJsonptest-charts"]=this["webpackJsonptest-charts"]||[]).push([[0],{134:function(e,t,n){},170:function(e,t,n){},23:function(e){e.exports=JSON.parse('[{"date":"01.07","number1":1492,"number2":3239,"number3":3057,"number4":1329,"name":"\u0421\u0411\u0411\u041e\u041b"},{"date":"02.07","number1":2359,"number2":3386,"number3":184,"number4":1572,"name":"\u0421\u0431\u0435\u0440\u043b\u043e\u0433\u0438\u0441\u0442\u0438\u043a\u0430"},{"date":"03.07","number1":2833,"number2":3095,"number3":3928,"number4":1413,"name":"Tmall"},{"date":"04.07","number1":2683,"number2":608,"number3":1584,"number4":1645,"name":"\u041f\u0440\u043e\u043c\u043e2"},{"date":"05.07","number1":1473,"number2":907,"number3":3022,"number4":3603},{"date":"06.07","number1":1546,"number2":3796,"number3":3982,"number4":2286},{"date":"07.07","number1":3624,"number2":3305,"number3":1164,"number4":3098},{"date":"08.07","number1":1520,"number2":928,"number3":3930,"number4":2094},{"date":"09.07","number1":3957,"number2":3092,"number3":2404,"number4":3476},{"date":10.07,"number1":2107,"number2":3907,"number3":2695,"number4":762},{"date":11.07,"number1":3114,"number2":189,"number3":1301,"number4":1263},{"date":12.07,"number1":2745,"number2":1127,"number3":3010,"number4":3257},{"date":13.07,"number1":1958,"number2":898,"number3":2439,"number4":686},{"date":14.07,"number1":3685,"number2":167,"number3":808,"number4":3109},{"date":15.07,"number1":977,"number2":3964,"number3":3197,"number4":3064},{"date":16.07,"number1":2142,"number2":858,"number3":671,"number4":2097},{"date":17.07,"number1":2378,"number2":2094,"number3":2211,"number4":533},{"date":18.07,"number1":2550,"number2":3645,"number3":3870,"number4":2251},{"date":19.07,"number1":2908,"number2":1490,"number3":3565,"number4":2895},{"date":20.07,"number1":2146,"number2":244,"number3":2802,"number4":2799},{"date":21.07,"number1":1980,"number2":3714,"number3":3316,"number4":3649},{"date":22.07,"number1":3991,"number2":2133,"number3":2180,"number4":1828},{"date":23.07,"number1":549,"number2":1574,"number3":911,"number4":2309},{"date":24.07,"number1":3503,"number2":3134,"number3":2052,"number4":941},{"date":25.07,"number1":1944,"number2":200,"number3":1827,"number4":1801},{"date":26.07,"number1":1672,"number2":251,"number3":2375,"number4":3080},{"date":27.07,"number1":3076,"number2":895,"number3":561,"number4":2713},{"date":28.07,"number1":1200,"number2":3667,"number3":2029,"number4":551},{"date":29.07,"number1":1860,"number2":3898,"number3":3587,"number4":901},{"date":30.07,"number1":1863,"number2":3503,"number3":419,"number4":1803},{"date":31.07,"number1":506,"number2":1895,"number3":2465,"number4":1642},{"date":"01.08","number1":1850,"number2":3851,"number3":725,"number4":3153},{"date":"02.08","number1":637,"number2":2439,"number3":1575,"number4":3763}]')},349:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),b=n.n(a),c=n(52),i=n.n(c),u=(n(170),n(37)),m=n(38),d=n(83),s=n(5),j=n(23),l=(n(134),[{name:"\u0412 \u043f\u0443\u0442\u0438",value:620,fill:"#bbc1c5"},{name:"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e",value:300,fill:"#16ba4f"},{name:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u043e",value:80,fill:"#f8142f"}]),o={number1:"\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",number2:"\u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",number3:"\u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c"},h=function(e){var t=e.active,n=e.payload,a=e.label;return t?Object(r.jsxs)("div",{className:"custom-tooltip",children:[Object(r.jsx)("p",{children:a}),n.map((function(e){return Object(r.jsxs)("p",{className:"label",children:[Object(r.jsx)("span",{className:"marker",style:{backgroundColor:e.color}}),"".concat(e.value," ").concat(o[e.name])]})}))]}):null},x=function(e){var t=e.active,n=e.payload;return t?Object(r.jsx)("div",{className:"custom-tooltip",children:n.map((function(e){return Object(r.jsxs)("p",{className:"label",children:[Object(r.jsx)("span",{className:"marker",style:{backgroundColor:e.color}}),"".concat(e.value," ").concat(o[e.name])]})}))}):null},O=function(){var e=Object(a.useState)({number1:!1,number2:!1,number3:!1}),t=Object(d.a)(e,2),n=t[0],b=t[1];return Object(r.jsx)(s.l,{width:"100%",height:500,children:Object(r.jsxs)(s.i,{data:j,children:[Object(r.jsx)(s.g,{align:"center",verticalAlign:"bottom",onClick:function(e,t){return b(Object(m.a)(Object(m.a)({},n),{},Object(u.a)({},e.dataKey,!n[e.dataKey])))},formatter:function(e){return o[e]}}),Object(r.jsx)(s.h,{type:"linear",dataKey:"number1",stroke:"#16ba4f",strokeWidth:3,hide:n.number1}),Object(r.jsx)(s.h,{type:"linear",dataKey:"number2",stroke:"#f8142f",strokeWidth:3,hide:n.number2}),Object(r.jsx)(s.h,{type:"linear",dataKey:"number3",stroke:"#bbc1c5",strokeWidth:3,hide:n.number3}),Object(r.jsx)(s.e,{stroke:"#ccc",vertical:!1}),Object(r.jsx)(s.n,{dataKey:"date",interval:0,padding:{left:24,right:24}}),Object(r.jsx)(s.o,{orientation:"right",domain:[0,function(e){return 1e3*Math.round(e/1e3)+1e3}],scale:"linear"}),Object(r.jsx)(s.m,{content:h})]})})},f=function(){var e=Object(a.useState)({number1:!1,number2:!1,number3:!1}),t=Object(d.a)(e,2),n=t[0],b=t[1];return Object(r.jsx)(s.l,{width:"100%",height:500,children:Object(r.jsxs)(s.b,{data:j,children:[Object(r.jsx)(s.g,{align:"center",verticalAlign:"bottom",onClick:function(e,t){return b(Object(m.a)(Object(m.a)({},n),{},Object(u.a)({},e.dataKey,!n[e.dataKey])))},formatter:function(e){return o[e]}}),Object(r.jsx)(s.a,{type:"linear",dataKey:"number1",stroke:"#16ba4f",fill:"#16ba4f",strokeWidth:1,hide:n.number1}),Object(r.jsx)(s.a,{type:"linear",dataKey:"number2",stroke:"#f8142f",fill:"#f8142f",strokeWidth:1,hide:n.number2}),Object(r.jsx)(s.a,{type:"linear",dataKey:"number3",stroke:"#0990fe",fill:"#0990fe",strokeWidth:1,hide:n.number3}),Object(r.jsx)(s.e,{stroke:"#ccc",vertical:!1}),Object(r.jsx)(s.n,{dataKey:"date",interval:0,padding:{left:24,right:24}}),Object(r.jsx)(s.o,{orientation:"right",domain:[0,function(e){return 1e3*Math.round(e/1e3)+1e3}],scale:"linear"}),Object(r.jsx)(s.m,{content:h})]})})},y=function(e,t){var n=t.payload;return Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{style:{fontSize:16,fontWeight:"bold"},children:e}),Object(r.jsx)("div",{style:{marginTop:8},children:n.value}),Object(r.jsxs)("div",{style:{marginTop:8},children:[(100*n.percent).toFixed(0),"%"]})]})},g=Math.PI/180,p=function(e){var t=e.cx,n=e.cy,a=e.midAngle,b=e.innerRadius,c=e.outerRadius,i=e.percent,u=(e.index,b+.4*(c-b)),m=t+u*Math.cos(-a*g),d=n+u*Math.sin(-a*g);return Object(r.jsx)("text",{x:m,y:d,fill:"white",textAnchor:m>t?"start":"end",dominantBaseline:"central",children:"".concat((100*i).toFixed(0),"%")})},v=function(){return Object(r.jsx)(s.l,{width:600,height:300,children:Object(r.jsxs)(s.k,{data:l,label:!0,children:[Object(r.jsx)(s.j,{data:l,cx:200,cy:140,innerRadius:80,outerRadius:140,dataKey:"value",label:p,labelLine:!1}),Object(r.jsx)(s.g,{layout:"vertical",iconType:"circle",align:"left",verticalAlign:"top",formatter:y})]})})},k=function(){return Object(r.jsx)(s.l,{width:"100%",height:500,children:Object(r.jsxs)(s.d,{data:j.slice(0,6),label:!0,barGap:0,barSize:40,children:[Object(r.jsx)(s.g,{align:"center",verticalAlign:"bottom"}),Object(r.jsx)(s.e,{stroke:"#ccc",vertical:!1}),Object(r.jsx)(s.n,{dataKey:"date",interval:0,padding:{left:24,right:24}}),Object(r.jsx)(s.o,{orientation:"right",domain:[0,function(e){return 1e3*Math.round(e/1e3)+1e3}],scale:"linear"}),Object(r.jsx)(s.m,{cursor:!1}),Object(r.jsx)(s.c,{dataKey:"number3",fill:"#bbc1c5"}),Object(r.jsx)(s.c,{dataKey:"number1",fill:"#16ba4f"}),Object(r.jsx)(s.c,{dataKey:"number2",fill:"#ff880c"})]})})},K=function(){return Object(r.jsx)(s.l,{width:"100%",height:500,children:Object(r.jsxs)(s.d,{data:j.slice(0,6),label:!0,barGap:0,barSize:100,children:[Object(r.jsx)(s.g,{align:"center",verticalAlign:"bottom"}),Object(r.jsx)(s.e,{stroke:"#ccc",vertical:!1}),Object(r.jsx)(s.n,{dataKey:"date",interval:0,padding:{left:24,right:24}}),Object(r.jsx)(s.o,{orientation:"right",domain:[0,function(e){return 1e3*Math.round(e/1e3)+1e3}],scale:"linear"}),Object(r.jsx)(s.m,{cursor:!1}),Object(r.jsx)(s.c,{dataKey:"number3",stackId:"a",fill:"#1761bb"}),Object(r.jsx)(s.c,{dataKey:"number1",stackId:"a",fill:"#16ba4f"}),Object(r.jsx)(s.c,{dataKey:"number2",stackId:"a",fill:"#ff880c"}),Object(r.jsx)(s.c,{dataKey:"number4",stackId:"a",fill:"#f8142f"})]})})},w=function(e){var t=e.y,n=e.height,a=e.value;return Object(r.jsx)("text",{x:20,y:t+n-5-20,fill:"black",children:a})},I=function(e){var t=e.fill,n=e.x,a=e.y,b=e.width,c=e.height;return Object(r.jsx)("rect",{x:"#16ba4f"===t?n:"#d0d7dd"===t?n-15:n-30,y:a,width:b,height:c,fill:t,rx:"7",ry:"7"})},S=function(){return Object(r.jsx)(s.l,{width:500,height:230,children:Object(r.jsxs)(s.d,{width:600,height:100,data:j.slice(0,4),layout:"vertical",barSize:15,minPointSize:5,margin:{top:25,right:30,left:20,bottom:5},children:[Object(r.jsx)(s.n,{type:"number",hide:!0}),Object(r.jsx)(s.o,{type:"category",dataKey:"date",hide:!0}),Object(r.jsx)(s.m,{content:x,cursor:!1}),Object(r.jsx)(s.c,{dataKey:"number1",stackId:"a",fill:"#16ba4f"}),Object(r.jsx)(s.c,{dataKey:"number3",stackId:"a",fill:"#d0d7dd",children:Object(r.jsx)(s.f,{dataKey:"name",content:w,position:"top"})}),Object(r.jsx)(s.c,{dataKey:"number2",stackId:"a",fill:"red"})]})})},N=function(){return Object(r.jsx)(s.l,{width:500,height:230,children:Object(r.jsxs)(s.d,{width:600,height:100,data:j.slice(0,4),layout:"vertical",barSize:15,minPointSize:5,margin:{top:25,right:30,left:20,bottom:5},children:[Object(r.jsx)(s.n,{type:"number",hide:!0}),Object(r.jsx)(s.o,{type:"category",dataKey:"date",hide:!0}),Object(r.jsx)(s.m,{content:x,cursor:!1}),Object(r.jsx)(s.c,{dataKey:"number1",stackId:"a",fill:"#16ba4f",shape:Object(r.jsx)(I,{})}),Object(r.jsx)(s.c,{dataKey:"number3",stackId:"a",fill:"#d0d7dd",shape:Object(r.jsx)(I,{}),children:Object(r.jsx)(s.f,{dataKey:"name",content:w,position:"top"})}),Object(r.jsx)(s.c,{dataKey:"number2",stackId:"a",fill:"red",shape:Object(r.jsx)(I,{})})]})})},T=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"ReCharts"}),Object(r.jsx)("div",{children:Object(r.jsx)(O,{})}),Object(r.jsx)("div",{children:Object(r.jsx)(f,{})}),Object(r.jsx)("div",{style:{marginLeft:200,marginTop:100},className:"pie",children:Object(r.jsx)(v,{})}),Object(r.jsx)("div",{style:{marginTop:100},children:Object(r.jsx)(k,{})}),Object(r.jsx)("div",{style:{marginTop:100},children:Object(r.jsx)(K,{})}),Object(r.jsx)("div",{style:{marginTop:100},children:Object(r.jsx)(S,{})}),Object(r.jsx)("div",{style:{marginTop:100},children:Object(r.jsx)(N,{})})]})};var A=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(T,{}),Object(r.jsx)("div",{style:{height:300,width:100}})]})};i.a.render(Object(r.jsx)(b.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[349,1,2]]]);
//# sourceMappingURL=main.58f94ca0.chunk.js.map