(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[4],{49:function(e,t,c){e.exports={table:"styles_table__8QEgz",tableHeader:"styles_tableHeader__357lR",tableCell:"styles_tableCell__29mOz",cell:"styles_cell__2MX3V",firstCell:"styles_firstCell__1k3fA",buttonDelRow:"styles_buttonDelRow__b9BF4",tdInner:"styles_tdInner__1k-Zh",left:"styles_left__zw6LC",hiddenCell:"styles_hiddenCell__1EbBc",hiddenCell2:"styles_hiddenCell2__7R6VM",cellButton:"styles_cellButton__3Ue5B",selected:"styles_selected__3bqhu",cellButtonFull:"styles_cellButtonFull__2h-_2",currentDate:"styles_currentDate__rGGsF"}},54:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return f}));var l=c(6),a=c(26),n=c(2),r=c(10),s=c(45),o=c(11),b=c(20),i=c(7),u=c(12),d=c(29),j=c(49),_=c.n(j),O=c(1),f=function(){var e=Object(r.b)(),t=Object(r.c)(u.c),c=Object(r.c)(u.b),j=Object(b.a)(new Date),f=Object(n.useState)(!1),m=Object(a.a)(f,2),y=m[0],h=m[1],p=Object(n.useState)(d.a),C=Object(a.a)(p,2),w=C[0],g=C[1],k=Object(s.useTable)({columns:c,data:t}),N=k.getTableProps,v=k.getTableBodyProps,B=k.headerGroups,S=k.rows,x=k.prepareRow;Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){17!==e.keyCode&&91!==e.keyCode||h(!0)}))}),[]),Object(n.useEffect)((function(){window.addEventListener("keyup",(function(e){17!==e.keyCode&&91!==e.keyCode||(g(d.a),h(!1))}))}),[]);return Object(O.jsxs)("table",Object(l.a)(Object(l.a)({},N()),{},{className:_.a.table,children:[Object(O.jsx)("thead",{children:B.map((function(e,t){return Object(n.createElement)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.headers.map((function(e,c){return Object(n.createElement)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps()),{},{className:Object(o.a)(0===c&&_.a.firstCell,0===c&&0===t&&_.a.hiddenCell,0===c&&1===t&&_.a.hiddenCell2,_.a.tableHeader),key:"".concat(e," ").concat(Math.random())}),e.render("Header"))})))}))}),Object(O.jsx)("tbody",Object(l.a)(Object(l.a)({},v()),{},{children:S.map((function(c){return x(c),Object(n.createElement)("tr",Object(l.a)(Object(l.a)({},c.getRowProps()),{},{key:"".concat(c," ").concat(Math.random())}),c.cells.map((function(a,r){return Object(n.createElement)("td",Object(l.a)(Object(l.a)({},a.getCellProps()),{},{className:Object(o.a)(0===r&&_.a.firstCell,_.a.tableCell,String(a.column.id.slice(2))===String("".concat(j.slice(0,2)).concat(j.slice(3,5)).concat(j.slice(6,8)))&&_.a.currentDate),key:"".concat(a," ").concat(Math.random())}),Object(O.jsxs)("div",{className:Object(o.a)(0===r&&_.a.left,_.a.tdInner),children:[0!==r&&c.index!==t.length-1&&c.index!==t.length-2?Object(O.jsx)("button",{type:"button","aria-label":"Cell Button",className:Object(o.a)(_.a.cellButton,y&&_.a.selected,1===a.value&&_.a.cellButtonFull),onClick:function(){return function(c,l){var a=t.concat();if(y&&""===w.row&&g({row:l,cell:c}),y&&w.row===l){var n=Number("".concat(w.cell.slice(6)).concat(w.cell.slice(4,6)).concat(w.cell.slice(2,4))),r=Number("".concat(c.slice(6)).concat(c.slice(4,6)).concat(c.slice(2,4)));if(r<n){var s=[r-1,n-1];n=s[0],r=s[1]}for(var o=n+1;o<=r;o++){var b="a_".concat(String(o).slice(4)).concat(String(o).slice(2,4)).concat(String(o).slice(0,2));Object.keys(a[Number(l)]).includes(b)?delete a[Number(l)][b]:a[Number(l)][b]=1}g(d.a),h(!1)}else Object.keys(a[Number(l)]).includes(c)?delete a[Number(l)][c]:a[Number(l)][c]=1;e(Object(i.d)(a)),localStorage.setItem("calendar",JSON.stringify(a))}(a.column.id,a.row.id)},children:a.render("Cell")}):a.render("Cell"),0===r&&"Total office"!==a.value&&"Total remote"!==a.value&&Object(O.jsx)("button",{type:"button","aria-label":"Delete Row",className:_.a.buttonDelRow,onClick:function(){return function(c){var l=t.filter((function(e){return e.name!==c}));e(Object(i.d)(l)),localStorage.setItem("calendar",JSON.stringify(l))}(a.value)},children:Object(O.jsx)("span",{})})]}))})))}))}))]}))}}}]);
//# sourceMappingURL=4.024fc009.chunk.js.map