(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[0],{10:function(e,t,n){e.exports={root_wrapper:"Root_root_wrapper__eL6rt",section_wrapper:"Root_section_wrapper__dgqip",calendar_wrapper:"Root_calendar_wrapper__1t7Ie",buttons_wrapper:"Root_buttons_wrapper__2--Nx",deleteButton:"Root_deleteButton__IXlIF",sectionTotal:"Root_sectionTotal__2sBkM",disabledButton:"Root_disabledButton__3-F7j",sectionMaxEmployees:"Root_sectionMaxEmployees__15T99"}},13:function(e,t,n){e.exports={cell:"columns_cell__32YGY",weekend:"columns_weekend__3-10h",headerFirstCol:"columns_headerFirstCol__2_EEi",headerTopCell:"columns_headerTopCell__1xdye",currentDate:"columns_currentDate__10MN6",currentDateEmpty:"columns_currentDateEmpty__1v4mI"}},16:function(e,t,n){e.exports={modalContent:"ModalContent_modalContent__2Ret1",form:"ModalContent_form__169qh",labelWrapper:"ModalContent_labelWrapper__2EgFl",radioWrapper:"ModalContent_radioWrapper__2iTLh",buttons_wrapper:"ModalContent_buttons_wrapper__1FQ_W",deleteButton:"ModalContent_deleteButton__1z69p"}},23:function(e,t,n){e.exports={modalWrapper:"Modal_modalWrapper__2YViX",modal:"Modal_modal__26uN6",button:"Modal_button__36BgA"}},24:function(e,t,n){e.exports={modalContent:"ModalDelContent_modalContent__MC1xq",buttons_wrapper:"ModalDelContent_buttons_wrapper__3jGJi",deleteButton:"ModalDelContent_deleteButton__2gpJ-"}},28:function(e,t,n){e.exports={button:"Button_button__1Y5Fm"}},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(20),r=n.n(c),o=n(14),l=n(9),s=n(30),i=n(18),u=n(5),d="FETCH_SAGA",b="SAVE_ALL_DATA",j="SAVE_ALL_COLUMNS",_="SAVE_FIRST_RANGE_DATE",p="SET_MODAL_FLAG",O="ADD_NEW_EMPLOYEE",m=[{name:"Total office"},{name:"Total remote"}],f={data:m,columns:[],firstRangeDate:null,modalFlag:!1},h=Object(o.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{data:t.data});case j:return Object(u.a)(Object(u.a)({},e),{},{columns:t.columns});case _:return Object(u.a)(Object(u.a)({},e),{},{firstRangeDate:t.firstRangeDate});case p:return Object(u.a)(Object(u.a)({},e),{},{modalFlag:t.modalFlag});case O:return Object(u.a)(Object(u.a)({},e),{},{data:[t.newEmployee].concat(Object(i.a)(e.data))});default:return e}}}),x=n(12),C=n.n(x),g=n(15),y=n(6),v=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),n=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,a=String(e.getFullYear()).slice(2,4);return"".concat(t,".").concat(n,".").concat(a)},w=function(e){for(var t=e,n=[],a=0;a<365;a++)n.push({date:v(new Date(t.getTime()+864e5*a)),day:new Date(t.getTime()+864e5*a).getDay()});return n},N=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e)-1]},k=n(13),D=n.n(k),T=n(1),B=function(e){if(!e)return[];for(var t=w(new Date(e)),n=v(new Date),a=[],c=[{Header:Object(T.jsx)("div",{className:D.a.headerFirstCol,children:"Employee"}),accessor:"name"}],r=0;r<t.length;r++){var o=t[r].date.slice(3,5),l=t.length-1!==r&&t[r+1].date.slice(3,5),s=t[r].date.slice(6,8);o===l?a.push({Header:Object(T.jsx)("div",{className:Object(y.a)(0===t[r].day||6===t[r].day?D.a.weekend:"",D.a.cell,t[r].date===n&&D.a.currentDate),children:t[r].date.slice(0,2)}),accessor:"accessor_".concat(t[r].date.slice(0,2)).concat(t[r].date.slice(3,5)).concat(t[r].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)}));return e.rows.length-t.length-2}return Object(T.jsx)("div",{children:e.value})}}):(a.push({Header:Object(T.jsx)("div",{className:Object(y.a)(0===t[r].day||6===t[r].day?D.a.weekend:"",D.a.cell),children:t[r].date.slice(0,2)}),accessor:"accessor_".concat(t[r].date.slice(0,2)).concat(t[r].date.slice(3,5)).concat(t[r].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)}));return e.rows.length-t.length-2}return Object(T.jsx)("div",{children:e.value})}}),c.push({Header:Object(T.jsx)("div",{className:Object(y.a)(D.a.cell,D.a.headerTopCell),children:"".concat(N(o)," '").concat(s)}),accessor:o,columns:[].concat(a)}),a.length=0)}return c},S=function(e){return{type:b,data:e}},E=function(e){return{type:p,modalFlag:e}},M=function(e){return{type:O,newEmployee:e}},R=C.a.mark(A),F=C.a.mark(I);function A(e){var t,n,a;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,localStorage.getItem("firstRangeDate");case 3:return t=c.sent,c.next=6,JSON.parse(localStorage.getItem("calendar")||"[]");case 6:return n=c.sent,c.next=9,[];case 9:if(a=c.sent,!t){c.next=18;break}return c.next=13,B(t);case 13:return a=c.sent,c.next=16,Object(g.c)({type:_,firstRangeDate:t});case 16:c.next=23;break;case 18:return c.next=20,B(new Date);case 20:return a=c.sent,c.next=23,localStorage.setItem("firstRangeDate",String(new Date));case 23:return c.next=25,Object(g.c)({type:j,columns:a});case 25:if(!n.length){c.next=30;break}return c.next=28,Object(g.c)(S(n));case 28:c.next=32;break;case 30:return c.next=32,localStorage.setItem("calendar",JSON.stringify(e.data));case 32:c.next=37;break;case 34:c.prev=34,c.t0=c.catch(0),console.log(c.t0);case 37:case"end":return c.stop()}}),R,null,[[0,34]])}function I(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.d)(d,A);case 2:case"end":return e.stop()}}),F)}var J=C.a.mark(L);function L(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.b)(I)]);case 2:case"end":return e.stop()}}),J)}n(43);var W=n(19),H=n(23),P=n.n(H),Y=function(e){var t=e.onCloseButtonClick,n=e.modalContent,a=function(){t()};return Object(T.jsx)("div",{className:P.a.modalWrapper,children:Object(T.jsxs)("div",{className:P.a.modal,children:[Object(T.jsx)("button",{type:"button",onClick:a,className:P.a.button,children:Object(T.jsx)("span",{})}),Object(T.jsx)(n,{onCloseClick:a})]})})},G=n(28),V=n.n(G),U=function(e){var t=e.buttonText,n=e.buttonType,a=e.onButtonClick,c=e.stylesButton,r=e.disabled;return Object(T.jsx)("button",{type:n,onClick:a,className:Object(y.a)(V.a.button,c),disabled:r,children:t})},X=n(29),q=n(8),Q=n.n(q),z=function(e){var t=e.data,n=e.columns,c=Object(l.b)(),r=v(new Date),o=Object(X.useTable)({columns:n,data:t}),s=o.getTableProps,i=o.getTableBodyProps,d=o.headerGroups,b=o.rows,j=o.prepareRow;return Object(T.jsxs)("table",Object(u.a)(Object(u.a)({},s()),{},{className:Q.a.table,children:[Object(T.jsx)("thead",{children:d.map((function(e,t){return Object(a.createElement)("tr",Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.headers.map((function(e,n){return Object(a.createElement)("th",Object(u.a)(Object(u.a)({},e.getHeaderProps()),{},{className:Object(y.a)(0===n&&Q.a.firstCell,0===n&&0===t&&Q.a.hiddenCell,0===n&&1===t&&Q.a.hiddenCell2,Q.a.tableHeader),key:"".concat(e," ").concat(Math.random())}),e.render("Header"))})))}))}),Object(T.jsx)("tbody",Object(u.a)(Object(u.a)({},i()),{},{children:b.map((function(e){return j(e),Object(a.createElement)("tr",Object(u.a)(Object(u.a)({},e.getRowProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.cells.map((function(n,o){return Object(a.createElement)("td",Object(u.a)(Object(u.a)({},n.getCellProps()),{},{className:Object(y.a)(0===o&&Q.a.firstCell,Q.a.tableCell,String(n.column.id.slice(9))===String("".concat(r.slice(0,2)).concat(r.slice(3,5)).concat(r.slice(6,8)))&&Q.a.currentDate),key:"".concat(n," ").concat(Math.random())}),Object(T.jsxs)("div",{className:Object(y.a)(0===o&&Q.a.left,Q.a.tdInner),children:[0!==o&&e.index!==t.length-1&&e.index!==t.length-2?Object(T.jsx)("button",{type:"button",className:Object(y.a)(Q.a.cellButton,1===n.value&&Q.a.cellButtonFull),onClick:function(){return function(e,n){var a=t.concat();Object.keys(a[Number(n)]).includes(e)?delete a[Number(n)][e]:a[Number(n)][e]=1,c(S(a)),localStorage.setItem("calendar",JSON.stringify(a))}(n.column.id,n.row.id)},children:n.render("Cell")}):n.render("Cell"),0===o&&"Total office"!==n.value&&"Total remote"!==n.value&&Object(T.jsx)("button",{type:"button",className:Q.a.buttonDelRow,onClick:function(){return function(e){var n=t.filter((function(t){return t.name!==e}));c(S(n)),localStorage.setItem("calendar",JSON.stringify(n))}(n.value)},children:Object(T.jsx)("span",{})})]}))})))}))}))]}))},K=function(e,t){var n=e,a={};a.name=t;for(var c=0;c<365;c++){var r=v(new Date(n.getTime()+864e5*c));a["accessor_".concat(r.slice(0,2)).concat(r.slice(3,5)).concat(r.slice(6,8))]=1}return a},Z=n(16),$=n.n(Z),ee=function(){var e=Object(l.b)(),t=Object(a.useRef)(null);Object(a.useEffect)((function(){t.current.focus()}),[]);var n=Object(l.c)((function(e){return e.reducer.data})),c=Object(a.useState)(""),r=Object(W.a)(c,2),o=r[0],s=r[1],u=Object(a.useState)("office"),d=Object(W.a)(u,2),b=d[0],j=d[1],_=function(e){j(e)},p=function(){if(o){if("office"===b){var t={name:o};e(M(t)),localStorage.setItem("calendar",JSON.stringify([t].concat(Object(i.a)(n))))}if("remote"===b){var a=K(new Date,o);e(M(a)),localStorage.setItem("calendar",JSON.stringify([a].concat(Object(i.a)(n))))}e(E(!1))}};return Object(T.jsxs)("div",{className:$.a.modalContent,children:[Object(T.jsx)("h2",{children:"Add a new employee"}),Object(T.jsxs)("form",{onSubmit:p,className:$.a.form,children:[Object(T.jsxs)("div",{className:$.a.labelWrapper,children:[Object(T.jsx)("label",{children:"Name: "}),Object(T.jsx)("input",{type:"text",onChange:function(e){s(e.target.value.trim())},ref:t})]}),Object(T.jsxs)("div",{className:$.a.labelWrapper,children:[Object(T.jsx)("label",{children:"Place of work:"}),Object(T.jsxs)("div",{className:$.a.radioWrapper,children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{children:"office"}),Object(T.jsx)("input",{type:"radio",name:"radio",value:b,defaultChecked:!0,onClick:function(){return _("office")}})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{children:"remote"}),Object(T.jsx)("input",{type:"radio",name:"radio",value:b,onClick:function(){return _("remote")}})]})]})]})]}),Object(T.jsxs)("div",{className:$.a.buttons_wrapper,children:[Object(T.jsx)(U,{buttonText:"Add",buttonType:"submit",onButtonClick:p}),Object(T.jsx)(U,{buttonText:"Cancel",buttonType:"button",onButtonClick:function(){s(""),j("office"),e(E(!1))},stylesButton:$.a.deleteButton})]})]})},te=n(24),ne=n.n(te),ae=function(e){var t=e.onCloseClick,n=Object(l.b)(),a=t;return Object(T.jsxs)("div",{className:ne.a.modalContent,children:[Object(T.jsx)("h2",{children:"Are sure to delete all employees?"}),Object(T.jsxs)("div",{className:ne.a.buttons_wrapper,children:[Object(T.jsx)(U,{buttonText:"Delete",buttonType:"button",onButtonClick:function(){n(S(m)),localStorage.setItem("calendar",JSON.stringify(m)),a()}}),Object(T.jsx)(U,{buttonText:"Cancel",buttonType:"button",onButtonClick:function(){a()},stylesButton:ne.a.deleteButton})]})]})},ce=n(10),re=n.n(ce),oe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.reducer})),n=Object(a.useState)(!1),c=Object(W.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){var n;e((n=t.data,{type:d,data:n}))}),[e]);var s=function(){o(!r)};return Object(T.jsxs)("div",{className:re.a.root_wrapper,children:[t.modalFlag&&Object(T.jsx)(Y,{onCloseButtonClick:function(){e(E(!1))},modalContent:ee}),r&&Object(T.jsx)(Y,{onCloseButtonClick:s,modalContent:ae}),Object(T.jsx)("header",{children:Object(T.jsx)("h1",{children:"Remote Calendar"})}),Object(T.jsxs)("section",{className:Object(y.a)(re.a.section_wrapper,re.a.buttons_wrapper),children:[Object(T.jsx)(U,{buttonText:"Add employee",buttonType:"button",onButtonClick:function(){e(E(!0))}}),Object(T.jsx)(U,{buttonText:3===t.data.length?"Delete employee":"Delete all employees",buttonType:"button",onButtonClick:s,stylesButton:Object(y.a)(re.a.deleteButton,t.data.length<=2&&re.a.disabledButton),disabled:t.data.length<=2})]}),Object(T.jsx)("section",{className:Object(y.a)(re.a.section_wrapper,re.a.calendar_wrapper),children:Object(T.jsx)(z,{data:t.data,columns:t.columns})}),Object(T.jsxs)("section",{className:Object(y.a)(re.a.section_wrapper,re.a.sectionTotal),children:[Object(T.jsx)("span",{children:"Total employees:"}),Object(T.jsx)("span",{children:t.data.length-2})]}),Object(T.jsxs)("section",{className:Object(y.a)(re.a.section_wrapper,re.a.sectionMaxEmployees),children:[Object(T.jsx)("span",{children:"Set max employees in office"}),Object(T.jsx)("input",{type:"number",min:"0",onChange:function(e){var t;(t=null===e||void 0===e?void 0:e.target.value)<0||console.log(t)}})]})]})};n(45);var le=function(){return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(oe,{})})},se=Object(s.a)(),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,ue=Object(o.d)(h,ie(Object(o.a)(se)));se.run(L),r.a.render(Object(T.jsx)(l.a,{store:ue,children:Object(T.jsx)(le,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={table:"Calendar_table__2gz7h",tableHeader:"Calendar_tableHeader__1Tj0Q",tableCell:"Calendar_tableCell__3k-KB",cell:"Calendar_cell__14FkO",firstCell:"Calendar_firstCell__3YC6V",buttonDelRow:"Calendar_buttonDelRow__3yO2B",tdInner:"Calendar_tdInner__1Qqal",left:"Calendar_left__2ULUU",hiddenCell:"Calendar_hiddenCell__3FmDQ",hiddenCell2:"Calendar_hiddenCell2__1IDBb",cellButton:"Calendar_cellButton__3tjSx",cellButtonFull:"Calendar_cellButtonFull__3JaX3",currentDate:"Calendar_currentDate__1-LhY"}}},[[46,1,2]]]);
//# sourceMappingURL=main.e03d099d.chunk.js.map