(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[0],{10:function(e,t,a){e.exports={root_wrapper:"Root_root_wrapper__eL6rt",section_wrapper:"Root_section_wrapper__dgqip",calendar_wrapper:"Root_calendar_wrapper__1t7Ie",buttons_wrapper:"Root_buttons_wrapper__2--Nx",deleteButton:"Root_deleteButton__IXlIF",sectionTotal:"Root_sectionTotal__2sBkM",disabledButton:"Root_disabledButton__3-F7j",sectionMaxEmployees:"Root_sectionMaxEmployees__15T99"}},11:function(e,t,a){e.exports={cell:"columns_cell__32YGY",weekend:"columns_weekend__3-10h",headerFirstCol:"columns_headerFirstCol__2_EEi",headerTopCell:"columns_headerTopCell__1xdye",currentDate:"columns_currentDate__10MN6",currentDateEmpty:"columns_currentDateEmpty__1v4mI",red:"columns_red__3001Q"}},16:function(e,t,a){e.exports={modalContent:"ModalContent_modalContent__2Ret1",form:"ModalContent_form__169qh",labelWrapper:"ModalContent_labelWrapper__2EgFl",radioWrapper:"ModalContent_radioWrapper__2iTLh",buttons_wrapper:"ModalContent_buttons_wrapper__1FQ_W",deleteButton:"ModalContent_deleteButton__1z69p"}},23:function(e,t,a){e.exports={modalWrapper:"Modal_modalWrapper__2YViX",modal:"Modal_modal__26uN6",button:"Modal_button__36BgA"}},24:function(e,t,a){e.exports={modalContent:"ModalDelContent_modalContent__MC1xq",buttons_wrapper:"ModalDelContent_buttons_wrapper__3jGJi",deleteButton:"ModalDelContent_deleteButton__2gpJ-"}},28:function(e,t,a){e.exports={button:"Button_button__1Y5Fm"}},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(20),r=a.n(c),l=a(15),o=a(9),s=a(30),u=a(18),i=a(5),d="FETCH_SAGA",b="SAVE_ALL_DATA",j="SAVE_ALL_COLUMNS",_="SAVE_FIRST_RANGE_DATE",m="SAVE_MAX_VALUE",p="SET_MODAL_FLAG",O="ADD_NEW_EMPLOYEE",f=[{name:"Total office"},{name:"Total remote"}],x={data:f,columns:[],firstRangeDate:null,modalFlag:!1,maxValue:1},h=Object(l.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{data:t.data});case j:return Object(i.a)(Object(i.a)({},e),{},{columns:t.columns});case _:return Object(i.a)(Object(i.a)({},e),{},{firstRangeDate:t.firstRangeDate});case p:return Object(i.a)(Object(i.a)({},e),{},{modalFlag:t.modalFlag});case O:return Object(i.a)(Object(i.a)({},e),{},{data:[t.newEmployee].concat(Object(u.a)(e.data))});case m:return Object(i.a)(Object(i.a)({},e),{},{maxValue:t.maxValue});default:return e}}}),C=a(13),g=a.n(C),v=a(14),y=a(6),w=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),a=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,n=String(e.getFullYear()).slice(2,4);return"".concat(t,".").concat(a,".").concat(n)},N=function(e){for(var t=e,a=[],n=0;n<90;n++)a.push({date:w(new Date(t.getTime()+864e5*n)),day:new Date(t.getTime()+864e5*n).getDay()});return a},D=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e)-1]},k=a(11),T=a.n(k),B=a(1),S=function(e,t){if(!e)return[];for(var a=N(new Date(e)),n=w(new Date),c=[],r=[{Header:Object(B.jsx)("div",{className:T.a.headerFirstCol,children:"Employee"}),accessor:"name"}],l=0;l<a.length;l++){var o=a[l].date.slice(3,5),s=a.length-1!==l&&a[l+1].date.slice(3,5),u=a[l].date.slice(6,8);o===s?c.push({Header:Object(B.jsx)("div",{className:Object(y.a)(0===a[l].day||6===a[l].day?T.a.weekend:"",T.a.cell,a[l].date===n&&T.a.currentDate),children:a[l].date.slice(0,2)}),accessor:"accessor_".concat(a[l].date.slice(0,2)).concat(a[l].date.slice(3,5)).concat(a[l].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var a=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),n=e.rows.length-a.length-2;return Object(B.jsx)("div",{className:Object(y.a)(n>t&&T.a.red),children:n})}return Object(B.jsx)("div",{children:e.value})}}):(c.push({Header:Object(B.jsx)("div",{className:Object(y.a)(0===a[l].day||6===a[l].day?T.a.weekend:"",T.a.cell),children:a[l].date.slice(0,2)}),accessor:"accessor_".concat(a[l].date.slice(0,2)).concat(a[l].date.slice(3,5)).concat(a[l].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var a=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),n=e.rows.length-a.length-2;return Object(B.jsx)("div",{className:Object(y.a)(n>t&&T.a.red),children:n})}return Object(B.jsx)("div",{children:e.value})}}),r.push({Header:Object(B.jsx)("div",{className:Object(y.a)(T.a.cell,T.a.headerTopCell),children:"".concat(D(o)," '").concat(u)}),accessor:o,columns:[].concat(c)}),c.length=0)}return r},E=function(e,t){return{type:d,data:e,maxValue:t}},M=function(e){return{type:b,data:e}},R=function(e){return{type:p,modalFlag:e}},A=function(e){return{type:O,newEmployee:e}},F=function(e){return{type:m,maxValue:e}},I=g.a.mark(J),V=g.a.mark(L);function J(e){var t,a,n,c;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,localStorage.getItem("firstRangeDate");case 3:return t=r.sent,r.next=6,JSON.parse(localStorage.getItem("calendar")||"[]");case 6:return a=r.sent,r.next=9,localStorage.getItem("maxValue");case 9:if(!(n=r.sent)){r.next=13;break}return r.next=13,Object(v.c)(F(n));case 13:return r.next=15,[];case 15:if(c=r.sent,!t){r.next=24;break}return r.next=19,S(t,n);case 19:return c=r.sent,r.next=22,Object(v.c)({type:_,firstRangeDate:t});case 22:r.next=29;break;case 24:return r.next=26,S(new Date,e.maxValue);case 26:return c=r.sent,r.next=29,localStorage.setItem("firstRangeDate",String(new Date));case 29:return r.next=31,Object(v.c)({type:j,columns:c});case 31:if(!a.length){r.next=36;break}return r.next=34,Object(v.c)(M(a));case 34:r.next=38;break;case 36:return r.next=38,localStorage.setItem("calendar",JSON.stringify(e.data));case 38:r.next=43;break;case 40:r.prev=40,r.t0=r.catch(0),console.log(r.t0);case 43:case"end":return r.stop()}}),I,null,[[0,40]])}function L(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(d,J);case 2:case"end":return e.stop()}}),V)}var W=g.a.mark(H);function H(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(L)]);case 2:case"end":return e.stop()}}),W)}a(43);var P=a(19),Y=a(23),G=a.n(Y),U=function(e){var t=e.onCloseButtonClick,a=e.modalContent,n=function(){t()};return Object(B.jsx)("div",{className:G.a.modalWrapper,children:Object(B.jsxs)("div",{className:G.a.modal,children:[Object(B.jsx)("button",{type:"button",onClick:n,className:G.a.button,children:Object(B.jsx)("span",{})}),Object(B.jsx)(a,{onCloseClick:n})]})})},X=a(28),Q=a.n(X),q=function(e){var t=e.buttonText,a=e.buttonType,n=e.onButtonClick,c=e.stylesButton,r=e.disabled;return Object(B.jsx)("button",{type:a,onClick:n,className:Object(y.a)(Q.a.button,c),disabled:r,children:t})},z=a(29),K=a(8),Z=a.n(K),$=function(e){var t=e.data,a=e.columns,c=Object(o.b)(),r=w(new Date),l=Object(z.useTable)({columns:a,data:t}),s=l.getTableProps,u=l.getTableBodyProps,d=l.headerGroups,b=l.rows,j=l.prepareRow;return Object(B.jsxs)("table",Object(i.a)(Object(i.a)({},s()),{},{className:Z.a.table,children:[Object(B.jsx)("thead",{children:d.map((function(e,t){return Object(n.createElement)("tr",Object(i.a)(Object(i.a)({},e.getHeaderGroupProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.headers.map((function(e,a){return Object(n.createElement)("th",Object(i.a)(Object(i.a)({},e.getHeaderProps()),{},{className:Object(y.a)(0===a&&Z.a.firstCell,0===a&&0===t&&Z.a.hiddenCell,0===a&&1===t&&Z.a.hiddenCell2,Z.a.tableHeader),key:"".concat(e," ").concat(Math.random())}),e.render("Header"))})))}))}),Object(B.jsx)("tbody",Object(i.a)(Object(i.a)({},u()),{},{children:b.map((function(e){return j(e),Object(n.createElement)("tr",Object(i.a)(Object(i.a)({},e.getRowProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.cells.map((function(a,l){return Object(n.createElement)("td",Object(i.a)(Object(i.a)({},a.getCellProps()),{},{className:Object(y.a)(0===l&&Z.a.firstCell,Z.a.tableCell,String(a.column.id.slice(9))===String("".concat(r.slice(0,2)).concat(r.slice(3,5)).concat(r.slice(6,8)))&&Z.a.currentDate),key:"".concat(a," ").concat(Math.random())}),Object(B.jsxs)("div",{className:Object(y.a)(0===l&&Z.a.left,Z.a.tdInner),children:[0!==l&&e.index!==t.length-1&&e.index!==t.length-2?Object(B.jsx)("button",{type:"button",className:Object(y.a)(Z.a.cellButton,1===a.value&&Z.a.cellButtonFull),onClick:function(){return function(e,a){var n=t.concat();Object.keys(n[Number(a)]).includes(e)?delete n[Number(a)][e]:n[Number(a)][e]=1,c(M(n)),localStorage.setItem("calendar",JSON.stringify(n))}(a.column.id,a.row.id)},children:a.render("Cell")}):a.render("Cell"),0===l&&"Total office"!==a.value&&"Total remote"!==a.value&&Object(B.jsx)("button",{type:"button",className:Z.a.buttonDelRow,onClick:function(){return function(e){var a=t.filter((function(t){return t.name!==e}));c(M(a)),localStorage.setItem("calendar",JSON.stringify(a))}(a.value)},children:Object(B.jsx)("span",{})})]}))})))}))}))]}))},ee=function(e,t){var a=e,n={};n.name=t;for(var c=0;c<90;c++){var r=w(new Date(a.getTime()+864e5*c));n["accessor_".concat(r.slice(0,2)).concat(r.slice(3,5)).concat(r.slice(6,8))]=1}return n},te=a(16),ae=a.n(te),ne=function(){var e=Object(o.b)(),t=Object(n.useRef)(null);Object(n.useEffect)((function(){t.current.focus()}),[]);var a=Object(o.c)((function(e){return e.reducer.data})),c=Object(n.useState)(""),r=Object(P.a)(c,2),l=r[0],s=r[1],i=Object(n.useState)("office"),d=Object(P.a)(i,2),b=d[0],j=d[1],_=function(e){j(e)},m=function(){if(l){if("office"===b){var t={name:l};e(A(t)),localStorage.setItem("calendar",JSON.stringify([t].concat(Object(u.a)(a))))}if("remote"===b){var n=ee(new Date,l);e(A(n)),localStorage.setItem("calendar",JSON.stringify([n].concat(Object(u.a)(a))))}e(R(!1))}};return Object(B.jsxs)("div",{className:ae.a.modalContent,children:[Object(B.jsx)("h2",{children:"Add a new employee"}),Object(B.jsxs)("form",{onSubmit:m,className:ae.a.form,children:[Object(B.jsxs)("div",{className:ae.a.labelWrapper,children:[Object(B.jsx)("label",{children:"Name: "}),Object(B.jsx)("input",{type:"text",onChange:function(e){s(e.target.value.trim())},ref:t})]}),Object(B.jsxs)("div",{className:ae.a.labelWrapper,children:[Object(B.jsx)("label",{children:"Place of work:"}),Object(B.jsxs)("div",{className:ae.a.radioWrapper,children:[Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"office"}),Object(B.jsx)("input",{type:"radio",name:"radio",value:b,defaultChecked:!0,onClick:function(){return _("office")}})]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"remote"}),Object(B.jsx)("input",{type:"radio",name:"radio",value:b,onClick:function(){return _("remote")}})]})]})]})]}),Object(B.jsxs)("div",{className:ae.a.buttons_wrapper,children:[Object(B.jsx)(q,{buttonText:"Add",buttonType:"submit",onButtonClick:m}),Object(B.jsx)(q,{buttonText:"Cancel",buttonType:"button",onButtonClick:function(){s(""),j("office"),e(R(!1))},stylesButton:ae.a.deleteButton})]})]})},ce=a(24),re=a.n(ce),le=function(e){var t=e.onCloseClick,a=Object(o.b)(),n=t;return Object(B.jsxs)("div",{className:re.a.modalContent,children:[Object(B.jsx)("h2",{children:"Are sure to delete all employees?"}),Object(B.jsxs)("div",{className:re.a.buttons_wrapper,children:[Object(B.jsx)(q,{buttonText:"Delete",buttonType:"button",onButtonClick:function(){a(M(f)),localStorage.setItem("calendar",JSON.stringify(f)),n()}}),Object(B.jsx)(q,{buttonText:"Cancel",buttonType:"button",onButtonClick:function(){n()},stylesButton:re.a.deleteButton})]})]})},oe=a(10),se=a.n(oe),ue=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.reducer})),a=Object(n.useState)(!1),c=Object(P.a)(a,2),r=c[0],l=c[1];Object(n.useEffect)((function(){e(E(t.data,t.maxValue))}),[e]);var s=function(){l(!r)};return Object(n.useEffect)((function(){return S(t.firstRangeDate,t.maxValue)}),[t.firstRangeDate,t.maxValue]),Object(B.jsxs)("div",{className:se.a.root_wrapper,children:[t.modalFlag&&Object(B.jsx)(U,{onCloseButtonClick:function(){e(R(!1))},modalContent:ne}),r&&Object(B.jsx)(U,{onCloseButtonClick:s,modalContent:le}),Object(B.jsx)("header",{children:Object(B.jsx)("h1",{children:"Remote Calendar"})}),Object(B.jsxs)("section",{className:Object(y.a)(se.a.section_wrapper,se.a.buttons_wrapper),children:[Object(B.jsx)(q,{buttonText:"Add employee",buttonType:"button",onButtonClick:function(){e(R(!0))}}),Object(B.jsx)(q,{buttonText:3===t.data.length?"Delete employee":"Delete all employees",buttonType:"button",onButtonClick:s,stylesButton:Object(y.a)(se.a.deleteButton,t.data.length<=2&&se.a.disabledButton),disabled:t.data.length<=2})]}),Object(B.jsx)("section",{className:Object(y.a)(se.a.section_wrapper,se.a.calendar_wrapper),children:Object(B.jsx)($,{data:t.data,columns:t.columns})}),Object(B.jsxs)("section",{className:Object(y.a)(se.a.section_wrapper,se.a.sectionTotal),children:[Object(B.jsx)("span",{children:"Total employees:"}),Object(B.jsx)("span",{children:t.data.length-2})]}),Object(B.jsxs)("section",{className:Object(y.a)(se.a.section_wrapper,se.a.sectionMaxEmployees),children:[Object(B.jsx)("span",{children:"Set max employees in office"}),Object(B.jsx)("input",{type:"number",min:"0",value:t.maxValue,onChange:function(a){var n;(n=null===a||void 0===a?void 0:a.target.value)<0||(localStorage.setItem("maxValue",n),e(F(n)),e(E(t.data,n)))}})]})]})};a(45);var ie=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(ue,{})})},de=Object(s.a)(),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,je=Object(l.d)(h,be(Object(l.a)(de)));de.run(H),r.a.render(Object(B.jsx)(o.a,{store:je,children:Object(B.jsx)(ie,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={table:"Calendar_table__2gz7h",tableHeader:"Calendar_tableHeader__1Tj0Q",tableCell:"Calendar_tableCell__3k-KB",cell:"Calendar_cell__14FkO",firstCell:"Calendar_firstCell__3YC6V",buttonDelRow:"Calendar_buttonDelRow__3yO2B",tdInner:"Calendar_tdInner__1Qqal",left:"Calendar_left__2ULUU",hiddenCell:"Calendar_hiddenCell__3FmDQ",hiddenCell2:"Calendar_hiddenCell2__1IDBb",cellButton:"Calendar_cellButton__3tjSx",cellButtonFull:"Calendar_cellButtonFull__3JaX3",currentDate:"Calendar_currentDate__1-LhY"}}},[[46,1,2]]]);
//# sourceMappingURL=main.bcc96294.chunk.js.map