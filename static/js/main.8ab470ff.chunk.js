(this.webpackJsonpdashboard3=this.webpackJsonpdashboard3||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"general":{"insertionsCount":643},"charts":{"general":{"followersCount":9401},"ratingsByCategory":{"followersCount":3900}},"terms":[85.08,1.76,33.42,75.11],"supportRequests":[{"name":"Cecilia Welch","email":"heather_keeling@gottlieb.ca","timestamp":"2012-04-23T01:06:43.511Z","phoneNumber":"215-293-5846","city":"Southe Mariane","status":"sent"},{"name":"Sara Glover","email":"floyd_brakus@lindgren.com","timestamp":"2012-04-23T00:22:43.511Z","phoneNumber":"057-812-3947","city":"East Maryam","status":"sent"},{"name":"Harriett Morgan","email":"jabari.kilback@nelson.tv","timestamp":"2012-04-23T12:22:43.511Z","phoneNumber":"866-668-0327","city":"Monserratmouth","status":"sent"},{"name":"Susie Curry","email":"theo_gleichner@kaia.org","timestamp":"2012-04-23T07:56:43.511Z","phoneNumber":"647-851-5280","city":"Lonnyburgh","status":"sent"},{"name":"Edgar Greer","email":"ankunding_ralph@gmail.com","timestamp":"2012-04-23T08:35:43.511Z","phoneNumber":"985-747-0063","city":"Schmittfurt","status":"unsent"},{"name":"Minerva Massey","email":"lia_purdy@yahoo.com","timestamp":"2012-04-23T03:24:43.511Z","phoneNumber":"488-514-5012","city":"South Lori","status":"unsent"}]}')},,,,,function(e){e.exports=JSON.parse('{"supportRequests":[{"name":"Bob Sacamento","email":"bob_sacamento@gottlieb.ca","timestamp":"2012-04-23T11:06:43.511Z","phoneNumber":"214-300-5846","city":"Long Island","status":"unsent"},{"name":"Hal Kitzmiller","email":"hal_kitzmiller@lindgren.com","timestamp":"2012-04-23T08:22:43.511Z","phoneNumber":"057-812-4000","city":"The Bronx","status":"unsent"},{"name":"Bob Cobb","email":"bob.cobb@nelson.tv","timestamp":"2012-04-23T14:22:43.511Z","phoneNumber":"866-668-0327","city":"Florence","status":"unsent"},{"name":"Mike Moffett","email":"mike_moffett@kaia.org","timestamp":"2012-04-23T07:22:43.511Z","phoneNumber":"647-851-1333","city":"Upper East Side","status":"unsent"}]}')},,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(8),r=s.n(i),c=s(2),o=(s(15),s(0)),l=function(e){var t=e.general.insertionsCount;return Object(o.jsxs)("section",{className:"intro",children:[Object(o.jsx)("h2",{children:"Data Overview"}),Object(o.jsxs)("div",{className:"progress",children:[Object(o.jsx)("progress",{value:t,max:"1000"}),Object(o.jsxs)("div",{className:"count",children:[Object(o.jsx)("b",{children:t}),Object(o.jsx)("span",{children:"insertions needed to complete "})]})]})]})},m=(s(17),function(e){var t=e.chartType,s=e.followers,n="general"===t,a=n?"General results":"Ratings by category",i=n?"blue":"red";return Object(o.jsx)("div",{className:"chart box ".concat(i),children:Object(o.jsxs)("div",{className:"chart-inner",children:[Object(o.jsx)("h3",{children:a}),Object(o.jsxs)("div",{className:"data",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"followers",children:[Object(o.jsxs)("span",{children:[" ",s.toLocaleString()," "]})," Followers"]}),Object(o.jsx)("div",{className:"graph"})]}),Object(o.jsx)("div",{className:"pie"})]})]})})}),u=s(10),h=s(7),d=function(e){var t=e.request,s=e.index,n=e.updateStatus,a=t.name,i=t.email,r=t.timestamp,c=t.phoneNumber,l=t.city,m=t.status;return Object(o.jsxs)("div",{className:"request-body",children:[Object(o.jsx)("span",{className:"name",children:a}),Object(o.jsx)("span",{className:"email",children:i}),Object(o.jsx)("span",{className:"time",children:function(e){var t=e.substr(11,2);return(t>12?t%12:t)+":"+e.substr(14,2)+(t>=12?"PM":"AM")}(r)}),Object(o.jsx)("span",{className:"phone",children:c}),Object(o.jsx)("span",{className:"city",children:l}),Object(o.jsx)("button",{onClick:function(){return n(s)},className:m,children:"sent"===m?"Sent":"Send"})]})},b=(s(18),function(e){var t=e.reqList,s=e.additData,a=Object(n.useState)(t),i=Object(c.a)(a,2),r=i[0],l=i[1],m=Object(n.useState)(s.supportRequests),b=Object(c.a)(m,2),j=b[0],p=b[1],x=function(e){var t=Object(h.a)(r),s=Object(u.a)({},t[e]);s.status="sent",t[e]=s,l(t)};return Object(o.jsxs)("section",{className:"requests box",children:[Object(o.jsx)("h2",{children:"SupportRequests"}),Object(o.jsxs)("div",{className:"request-header uppercase",children:[Object(o.jsx)("span",{className:"name",children:"Name"}),Object(o.jsx)("span",{className:"email",children:"Email"}),Object(o.jsx)("span",{className:"time",children:"Time"}),Object(o.jsx)("span",{className:"phone",children:"Phone Number"}),Object(o.jsx)("span",{className:"city",children:"City"}),Object(o.jsx)("span",{className:"status",children:"Status"})]}),Object(o.jsx)("div",{className:"requests-list",children:r.map((function(e,t){return Object(o.jsx)(d,{index:t,request:e,updateStatus:x},t)}))}),Object(o.jsx)("button",{className:"add",onClick:function(){return function(){var e=j.length;if(e){var t=Math.floor(Math.random()*e);l([j[t]].concat(Object(h.a)(r))),p(j.filter((function(e){return e!==j[t]})))}}()},children:"ADD"}),Object(o.jsxs)("div",{className:"req-count",children:["Showing ",Object(o.jsx)("span",{children:"1"})," to ",Object(o.jsx)("span",{children:r.length})," of ",r.length," elements"]})]})}),j=(s(19),function(e){var t=e.terms;return Object(o.jsx)("div",{className:"terms box",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"term",children:[Object(o.jsxs)("span",{children:["TERM ",t+1]}),Object(o.jsx)("span",{children:e})]},t)}))})}),p=s(4),x=s(9),g=function(e){var t=e.activeClass,s=p.general,n=p.charts,a=p.terms,i=p.supportRequests;return Object(o.jsxs)("div",{className:"view ".concat(t),children:[Object(o.jsx)(l,{general:s}),Object(o.jsxs)("section",{className:"charts",children:[Object.keys(n).map((function(e){return Object(o.jsx)(m,{chartType:e,followers:n[e].followersCount},e)})),Object(o.jsx)(j,{terms:a})]}),Object(o.jsx)(b,{reqList:i,additData:x})]})},O=function(e){var t=e.activeClass;return Object(o.jsxs)("div",{className:"view ".concat(t),children:[Object(o.jsx)("section",{className:"intro",children:Object(o.jsx)("h2",{children:"Chat"})}),Object(o.jsxs)("section",{className:"box other",children:[Object(o.jsx)("h2",{children:"What is Lorem Ipsum?"}),Object(o.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),Object(o.jsxs)("section",{className:"box other",children:[Object(o.jsx)("h2",{children:"Why do we use it?"}),Object(o.jsx)("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})]})]})},f=function(e){var t=e.activeClass;return Object(o.jsxs)("div",{className:"view ".concat(t),children:[Object(o.jsx)("section",{className:"intro",children:Object(o.jsx)("h2",{children:"Settings"})}),Object(o.jsxs)("section",{className:"box other",children:[Object(o.jsx)("h2",{children:"Configurations"}),Object(o.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})},y=function(e){var t=e.activeClass;return Object(o.jsxs)("div",{className:"view ".concat(t),children:[Object(o.jsx)("section",{className:"intro",children:Object(o.jsx)("h2",{children:"Messages"})}),Object(o.jsxs)("section",{className:"box other",children:[Object(o.jsx)("h2",{children:"What is Lorem Ipsum?"}),Object(o.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),Object(o.jsxs)("section",{className:"box other",children:[Object(o.jsx)("h2",{children:"Why do we use it?"}),Object(o.jsx)("p",{children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})]})]})},v=function(e){var t=e.activeClass;return Object(o.jsxs)("div",{className:"view ".concat(t),children:[Object(o.jsx)("section",{className:"intro",children:Object(o.jsx)("h2",{children:"Folders"})}),Object(o.jsxs)("section",{className:"box other",children:[Object(o.jsx)("h2",{children:"Folders/Folders/Folders"}),Object(o.jsx)("p",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."})]}),Object(o.jsxs)("section",{className:"box other",children:[Object(o.jsx)("h2",{children:"Sample page"}),Object(o.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})]})},N=(s(20),{Overview:g,Chat:O,Folders:v,Messages:y,Settings:f}),w=Object.keys(N),k=function(e){var t=e.updateHeader,s=Object(n.useState)(w[0]),a=Object(c.a)(s,2),i=a[0],r=a[1];Object(n.useEffect)((function(){t(i)}));return Object(o.jsxs)("main",{className:"dashboard",children:[Object(o.jsx)("ul",{className:"tabs ".concat(i),children:w.map((function(e){return Object(o.jsx)("li",{className:"".concat(e.toLowerCase()," ").concat(e===i?"active":""),onClick:function(){return r(e)}},e)}))}),Object(o.jsx)("div",{className:"views",children:w.map((function(e,t){return function(e,t){var s=N[e];return Object(o.jsx)(s,{activeClass:e===i?e.toLowerCase():""},t)}(e,t)}))})]})},I=(s(21),function(e){var t=e.label;return Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"logo"}),Object(o.jsx)("span",{className:"label",children:t}),Object(o.jsx)("button",{className:"premium",children:"Premium"})]})});s(22);var L=function(){var e=Object(n.useState)("Overview"),t=Object(c.a)(e,2),s=t[0],a=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(I,{label:s}),Object(o.jsx)(k,{updateHeader:function(e){return a(e)}})]})};s(23);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.8ab470ff.chunk.js.map