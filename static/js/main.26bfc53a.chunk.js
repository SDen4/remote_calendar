(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[0],{12:function(e,t,a){e.exports={cell:"columns_cell__32YGY",weekend:"columns_weekend__3-10h",headerFirstCol:"columns_headerFirstCol__2_EEi",headerTopCell:"columns_headerTopCell__1xdye"}},14:function(e,t,a){e.exports={table:"Calendar_table__2gz7h",tableHeader:"Calendar_tableHeader__1Tj0Q",tableCell:"Calendar_tableCell__3k-KB",cell:"Calendar_cell__14FkO",firstCell:"Calendar_firstCell__3YC6V"}},17:function(e,t,a){e.exports={root_wrapper:"Root_root_wrapper__eL6rt",section_wrapper:"Root_section_wrapper__dgqip",calendar_wrapper:"Root_calendar_wrapper__1t7Ie"}},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(15),n=a.n(c),l=a(11),s=a(13),o=a(22),i=a(5),d="FETCH_SAGA",u="SAVE_ALL_DATA",b="SAVE_ALL_COLUMNS",j="SAVE_FIRST_RANGE_DATE",O={data:[{name:"Total office"},{name:"Total remote"}],columns:[],firstRangeDate:null},p=Object(l.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{data:t.data});case b:return Object(i.a)(Object(i.a)({},e),{},{columns:t.columns});case j:return Object(i.a)(Object(i.a)({},e),{},{firstRangeDate:t.firstRangeDate});default:return e}}}),h=a(8),f=a.n(h),_=a(10),m=a(9),g=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),a=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,r=String(e.getFullYear()).slice(2,4);return"".concat(t,".").concat(a,".").concat(r)},x=function(e){for(var t=e,a=[],r=0;r<365;r++)a.push({date:g(new Date(t.getTime()+864e5*r)),day:new Date(t.getTime()+864e5*r).getDay()});return a},w=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e)-1]},v=a(12),y=a.n(v),C=a(4),k=function(e){if(!e)return[];for(var t=x(new Date(e)),a=[],r=[{Header:Object(C.jsx)("div",{className:y.a.headerFirstCol,children:"Employee"}),accessor:"name"}],c=0;c<t.length;c++){var n=t[c].date.slice(3,5),l=t.length-1!==c&&t[c+1].date.slice(3,5),s=t[c].date.slice(6,8);n===l?a.push({Header:Object(C.jsx)("div",{className:Object(m.a)(0===t[c].day||6===t[c].day?y.a.weekend:"",y.a.cell),children:t[c].date.slice(0,2)}),accessor:"accessor_".concat(t[c].date.slice(0,2)).concat(t[c].date.slice(3,5)).concat(t[c].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)}));return Object(C.jsx)("div",{children:t.length})}if(e.row.index===e.rows.length-2){var a=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)}));return Object(C.jsx)("div",{children:e.rows.length-a.length-2})}return Object(C.jsx)("div",{children:e.value})}}):(a.push({Header:Object(C.jsx)("div",{className:Object(m.a)(0===t[c].day||6===t[c].day?y.a.weekend:"",y.a.cell),children:t[c].date.slice(0,2)}),accessor:"accessor_".concat(t[c].date.slice(0,2)).concat(t[c].date.slice(3,5)).concat(t[c].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)}));return Object(C.jsx)("div",{children:t.length})}if(e.row.index===e.rows.length-2){var a=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)}));return Object(C.jsx)("div",{children:e.rows.length-a.length-2})}return Object(C.jsx)("div",{children:e.value})}}),r.push({Header:Object(C.jsx)("div",{className:Object(m.a)(y.a.cell,y.a.headerTopCell),children:"".concat(w(n)," '").concat(s)}),accessor:n,columns:[].concat(a)}),a.length=0)}return r},E=function(e){return{type:b,columns:e}},D=f.a.mark(S),N=f.a.mark(T);function S(e){var t,a,r,c,n;return f.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,localStorage.getItem("firstRangeDate");case 3:return t=l.sent,l.next=6,JSON.parse(localStorage.getItem("calendar")||"[]");case 6:if(a=l.sent,null===t){l.next=17;break}return l.next=10,k(t);case 10:return r=l.sent,l.next=13,Object(_.c)(E(r));case 13:return l.next=15,Object(_.c)({type:j,firstRangeDate:t});case 15:l.next=25;break;case 17:return c=new Date,l.next=20,k(c);case 20:return n=l.sent,l.next=23,Object(_.c)(E(n));case 23:return l.next=25,localStorage.setItem("firstRangeDate",String(c));case 25:if(!a.length){l.next=30;break}return l.next=28,Object(_.c)({type:u,data:a});case 28:l.next=32;break;case 30:return l.next=32,localStorage.setItem("calendar",JSON.stringify(e.data));case 32:l.next=37;break;case 34:l.prev=34,l.t0=l.catch(0),console.log(l.t0);case 37:case"end":return l.stop()}}),D,null,[[0,34]])}function T(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(d,S);case 2:case"end":return e.stop()}}),N)}var R=f.a.mark(A);function A(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([Object(_.b)(T)]);case 2:case"end":return e.stop()}}),R)}a(35);var H=a(21),M=a(14),F=a.n(M),I=function(e){var t=e.data,a=e.columns,c=Object(H.useTable)({columns:a,data:t}),n=c.getTableProps,l=c.getTableBodyProps,s=c.headerGroups,o=c.rows,d=c.prepareRow;return Object(C.jsxs)("table",Object(i.a)(Object(i.a)({},n()),{},{className:F.a.table,children:[Object(C.jsx)("thead",{children:s.map((function(e){return Object(r.createElement)("tr",Object(i.a)(Object(i.a)({},e.getHeaderGroupProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.headers.map((function(e,t){return Object(r.createElement)("th",Object(i.a)(Object(i.a)({},e.getHeaderProps()),{},{className:Object(m.a)(0===t&&F.a.firstCell,F.a.tableHeader),key:"".concat(e," ").concat(Math.random())}),e.render("Header"))})))}))}),Object(C.jsx)("tbody",Object(i.a)(Object(i.a)({},l()),{},{children:o.map((function(e){return d(e),Object(r.createElement)("tr",Object(i.a)(Object(i.a)({},e.getRowProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.cells.map((function(e,t){return Object(r.createElement)("td",Object(i.a)(Object(i.a)({},e.getCellProps()),{},{className:Object(m.a)(0===t&&F.a.firstCell,F.a.tableCell),key:"".concat(e," ").concat(Math.random())}),e.render("Cell"))})))}))}))]}))},J=a(17),L=a.n(J),P=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.reducer.columns})),a=Object(s.c)((function(e){return e.reducer.data}));return Object(r.useEffect)((function(){e(function(e){return{type:d,data:e}}(a))}),[e]),Object(C.jsxs)("div",{className:L.a.root_wrapper,children:[Object(C.jsx)("header",{children:Object(C.jsx)("h1",{children:"Remote Calendar"})}),Object(C.jsx)("section",{className:Object(m.a)(L.a.section_wrapper,L.a.calendar_wrapper),children:Object(C.jsx)(I,{data:a,columns:t})})]})};a(37);var G=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(P,{})})},V=Object(o.a)(),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,B=Object(l.d)(p,Y(Object(l.a)(V)));V.run(A),n.a.render(Object(C.jsx)(s.a,{store:B,children:Object(C.jsx)(G,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.26bfc53a.chunk.js.map