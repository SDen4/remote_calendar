(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[0],{14:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);for(var c=a(1),r=a.n(c),n=a(8),o=a.n(n),l=(a(14),a(4)),s=a(2),d=a(9),b=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),a=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,c=String(e.getFullYear()).slice(2,4);return"".concat(t,".").concat(a,".").concat(c)},i=function(){for(var e=new Date,t=[],a=0;a<365;a++)t.push({date:b(new Date(e.getTime()+864e5*a)),day:new Date(e.getTime()+864e5*a).getDay()});return t},j=function(e){return["\u044f\u043d\u0432\u0430\u0440\u044c","\u0444\u0435\u0432\u0440\u0430\u043b\u044c","\u043c\u0430\u0440\u0442","\u0430\u043f\u0440\u0435\u043b\u044c","\u043c\u0430\u0439","\u0438\u044e\u043d\u044c","\u0438\u044e\u043b\u044c","\u0430\u0432\u0433\u0443\u0441\u0442","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u043e\u043a\u0442\u044f\u0431\u0440\u044c","\u043d\u043e\u044f\u0431\u0440\u044c","\u0434\u0435\u043a\u0430\u0431\u0440\u044c"][Number(e)-1]},p=a(3),u=a.n(p),h=a(0),_=i(),O=[],m=[],w=0;w<_.length;w++){var g=_[w].date.slice(3,5),x=_.length-1!==w&&_[w+1].date.slice(3,5),f=_[w].date.slice(6,8);g===x?O.push({Header:Object(h.jsx)("div",{className:Object(l.a)(0===_[w].day||6===_[w].day?u.a.weekend:"",u.a.cell),children:_[w].date.slice(0,2)}),accessor:_[w].date}):(O.push({Header:Object(h.jsx)("div",{className:Object(l.a)(0===_[w].day||6===_[w].day?u.a.weekend:"",u.a.cell),children:_[w].date.slice(0,2)}),accessor:_[w].date}),m.push({Header:Object(h.jsx)("div",{className:u.a.cell,children:"".concat(j(g)," '").concat(f)}),accessor:g,columns:[].concat(O)}),O.length=0)}var v=m,y=[{col1:"Hello",col2:"World"},{col1:"react-table",col2:"rocks"},{col1:"whatever",col2:"you want"}],k=a(5),N=a.n(k),H=function(){var e=Object(d.useTable)({columns:v,data:y}),t=e.getTableProps,a=e.getTableBodyProps,r=e.headerGroups,n=e.rows,o=e.prepareRow;return Object(h.jsxs)("table",Object(s.a)(Object(s.a)({},t()),{},{className:N.a.table,children:[Object(h.jsx)("thead",{children:r.map((function(e){return Object(c.createElement)("tr",Object(s.a)(Object(s.a)({},e.getHeaderGroupProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.headers.map((function(e){return Object(c.createElement)("th",Object(s.a)(Object(s.a)({},e.getHeaderProps()),{},{className:N.a.tableHeader,key:"".concat(e," ").concat(Math.random())}),e.render("Header"))})))}))}),Object(h.jsx)("tbody",Object(s.a)(Object(s.a)({},a()),{},{children:n.map((function(e){return o(e),Object(c.createElement)("tr",Object(s.a)(Object(s.a)({},e.getRowProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.cells.map((function(e){return Object(c.createElement)("td",Object(s.a)(Object(s.a)({},e.getCellProps()),{},{className:N.a.tableCell,key:"".concat(e," ").concat(Math.random())}),e.render("Cell"))})))}))}))]}))},C=a(6),M=a.n(C),D=function(){return Object(h.jsxs)("div",{className:M.a.root_wrapper,children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"Remote Calendar"})}),Object(h.jsx)("section",{className:Object(l.a)(M.a.section_wrapper,M.a.calendar_wrapper),children:Object(h.jsx)(H,{})})]})};a(19);var P=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(D,{})})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},3:function(e,t,a){e.exports={cell:"columns_cell__1aqvn",weekend:"columns_weekend__wGEoA"}},5:function(e,t,a){e.exports={table:"Calendar_table__2a3tK",tableHeader:"Calendar_tableHeader__3Vkeq",tableCell:"Calendar_tableCell__K3uU_"}},6:function(e,t,a){e.exports={root_wrapper:"Root_root_wrapper__NJxYw",section_wrapper:"Root_section_wrapper__p2vVm",calendar_wrapper:"Root_calendar_wrapper__PuSUl"}}},[[20,1,2]]]);
//# sourceMappingURL=main.9debdd70.chunk.js.map