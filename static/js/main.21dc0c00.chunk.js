(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[0],{11:function(e,t,a){e.exports={cell:"columns_cell__1aqvn",weekend:"columns_weekend__wGEoA",headerFirstCol:"columns_headerFirstCol__9y1X8",headerTopCell:"columns_headerTopCell__2smoY",currentDate:"columns_currentDate__3_Pdt",currentDateEmpty:"columns_currentDateEmpty__2tw8-",red:"columns_red__2v-wU"}},12:function(e,t,a){e.exports={modalContent:"ModalContent_modalContent__2BoSr",form:"ModalContent_form__19tQh",labelWrapper:"ModalContent_labelWrapper__2EfoL",radioWrapper:"ModalContent_radioWrapper__1C4Ff",buttons_wrapper:"ModalContent_buttons_wrapper__1Cods",deleteButton:"ModalContent_deleteButton__1rrfe",inputWrapper:"ModalContent_inputWrapper__12n9n",validationText:"ModalContent_validationText__1lIcL",noteText:"ModalContent_noteText__1bmDu"}},23:function(e,t,a){e.exports={modalWrapper:"Modal_modalWrapper__ZUb4I",modal:"Modal_modal__1_jYR",button:"Modal_button__haYy0"}},24:function(e,t,a){e.exports={modalContent:"ModalDelContent_modalContent__1Zkjc",buttons_wrapper:"ModalDelContent_buttons_wrapper__3C3z5",deleteButton:"ModalDelContent_deleteButton__3-KDd"}},28:function(e,t,a){e.exports={button:"Button_button__3m31a"}},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(20),r=a.n(c),o=a(16),l=a(10),s=a(30),u=a(19),i=a(5),d="FETCH_SAGA",b="SAVE_ALL_DATA",j="SAVE_ALL_COLUMNS",m="SAVE_FIRST_RANGE_DATE",_="SAVE_MAX_VALUE",p="SET_MODAL_FLAG",O="ADD_NEW_EMPLOYEE",f="ADD_COLUMNS_QUANTITY",x=[{name:"Total office"},{name:"Total remote"}],h={data:x,columns:[],firstRangeDate:null,modalFlag:!1,maxValue:1,columnsQuantity:90},g=Object(o.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{data:t.data});case j:return Object(i.a)(Object(i.a)({},e),{},{columns:t.columns});case m:return Object(i.a)(Object(i.a)({},e),{},{firstRangeDate:t.firstRangeDate});case p:return Object(i.a)(Object(i.a)({},e),{},{modalFlag:t.modalFlag});case O:return Object(i.a)(Object(i.a)({},e),{},{data:[t.newEmployee].concat(Object(u.a)(e.data))});case _:return Object(i.a)(Object(i.a)({},e),{},{maxValue:t.maxValue});case f:return Object(i.a)(Object(i.a)({},e),{},{columnsQuantity:t.columnsQuantity});default:return e}}}),C=a(15),y=a.n(C),v=a(13),w=a(6),N=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),a=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,n=String(e.getFullYear()).slice(2,4);return"".concat(t,".").concat(a,".").concat(n)},S=function(e,t){for(var a=e,n=[],c=0;c<t;c++)n.push({date:N(new Date(a.getTime()+864e5*c)),day:new Date(a.getTime()+864e5*c).getDay()});return n},D=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e)-1]},k=a(11),T=a.n(k),B=a(1),E=function(e,t,a){if(!e)return[];for(var n=S(new Date(e),a),c=N(new Date),r=t||1,o=[],l=[{Header:Object(B.jsx)("div",{className:T.a.headerFirstCol,children:"Employee"}),accessor:"name"}],s=0;s<n.length;s++){var u=n[s].date.slice(3,5),i=n.length-1!==s&&n[s+1].date.slice(3,5),d=n[s].date.slice(6,8);u===i?o.push({Header:Object(B.jsx)("div",{className:Object(w.a)(0===n[s].day||6===n[s].day?T.a.weekend:"",T.a.cell,n[s].date===c&&T.a.currentDate),children:n[s].date.slice(0,2)}),accessor:"accessor_".concat(n[s].date.slice(0,2)).concat(n[s].date.slice(3,5)).concat(n[s].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),a=e.rows.length-t.length-2;return Object(B.jsx)("div",{className:Object(w.a)(a>r&&T.a.red),children:a})}return Object(B.jsx)("div",{children:e.value})}}):(o.push({Header:Object(B.jsx)("div",{className:Object(w.a)(0===n[s].day||6===n[s].day?T.a.weekend:"",T.a.cell),children:n[s].date.slice(0,2)}),accessor:"accessor_".concat(n[s].date.slice(0,2)).concat(n[s].date.slice(3,5)).concat(n[s].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),a=e.rows.length-t.length-2;return Object(B.jsx)("div",{className:Object(w.a)(a>r&&T.a.red),children:a})}return Object(B.jsx)("div",{children:e.value})}}),l.push({Header:Object(B.jsx)("div",{className:Object(w.a)(T.a.cell,T.a.headerTopCell),children:"".concat(D(u)," '").concat(d)}),accessor:u,columns:[].concat(o)}),o.length=0)}return l},M=function(e,t,a){return{type:d,data:e,maxValue:t,columnsQuantity:a}},R=function(e){return{type:b,data:e}},I=function(e){return{type:m,firstRangeDate:e}},A=function(e){return{type:p,modalFlag:e}},V=function(e){return{type:O,newEmployee:e}},F=function(e){return{type:_,maxValue:e}},P=function(e){return{type:f,columnsQuantity:e}},W=y.a.mark(J),Q=y.a.mark(L);function J(e){var t,a,n,c,r;return y.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,localStorage.getItem("firstRangeDate");case 3:return t=o.sent,o.next=6,JSON.parse(localStorage.getItem("calendar")||"[]");case 6:return a=o.sent,o.next=9,localStorage.getItem("maxValue");case 9:return n=o.sent,o.next=12,localStorage.getItem("columnsQuantity");case 12:if(c=o.sent,!n){o.next=18;break}return o.next=16,Object(v.c)(F(Number(n)));case 16:o.next=20;break;case 18:return o.next=20,localStorage.setItem("maxValue",String(e.maxValue));case 20:return o.next=22,[];case 22:if(r=o.sent,!c){o.next=28;break}return o.next=26,Object(v.c)(P(Number(c)));case 26:o.next=30;break;case 28:return o.next=30,localStorage.setItem("columnsQuantity",String(e.columnsQuantity));case 30:if(!t){o.next=38;break}return o.next=33,E(t,n,c||e.columnsQuantity);case 33:return r=o.sent,o.next=36,Object(v.c)(I(t));case 36:o.next=43;break;case 38:return o.next=40,E(new Date,e.maxValue,c||e.columnsQuantity);case 40:return r=o.sent,o.next=43,localStorage.setItem("firstRangeDate",String(new Date));case 43:return o.next=45,Object(v.c)({type:j,columns:r});case 45:if(!a.length){o.next=50;break}return o.next=48,Object(v.c)(R(a));case 48:o.next=52;break;case 50:return o.next=52,localStorage.setItem("calendar",JSON.stringify(e.data));case 52:o.next=57;break;case 54:o.prev=54,o.t0=o.catch(0),console.log(o.t0);case 57:case"end":return o.stop()}}),W,null,[[0,54]])}function L(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(d,J);case 2:case"end":return e.stop()}}),Q)}var H=y.a.mark(U);function U(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(L)]);case 2:case"end":return e.stop()}}),H)}a(43);var G=a(17),Y=a(23),q=a.n(Y),K=function(e){var t=e.onCloseButtonClick,a=e.modalContent,n=function(){t()};return Object(B.jsx)("div",{className:q.a.modalWrapper,children:Object(B.jsxs)("div",{className:q.a.modal,children:[Object(B.jsx)("button",{type:"button",onClick:n,className:q.a.button,children:Object(B.jsx)("span",{})}),Object(B.jsx)(a,{onCloseClick:n})]})})},X=a(28),Z=a.n(X),z=function(e){var t=e.buttonText,a=e.buttonType,n=e.onButtonClick,c=e.stylesButton,r=e.disabled;return Object(B.jsx)("button",{type:a,onClick:n,className:Object(w.a)(Z.a.button,c),disabled:r,children:t})},$=a(29),ee=a(8),te=a.n(ee),ae=function(e){var t=e.data,a=e.columns,c=Object(l.b)(),r=N(new Date),o=Object($.useTable)({columns:a,data:t}),s=o.getTableProps,u=o.getTableBodyProps,d=o.headerGroups,b=o.rows,j=o.prepareRow;return Object(B.jsxs)("table",Object(i.a)(Object(i.a)({},s()),{},{className:te.a.table,children:[Object(B.jsx)("thead",{children:d.map((function(e,t){return Object(n.createElement)("tr",Object(i.a)(Object(i.a)({},e.getHeaderGroupProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.headers.map((function(e,a){return Object(n.createElement)("th",Object(i.a)(Object(i.a)({},e.getHeaderProps()),{},{className:Object(w.a)(0===a&&te.a.firstCell,0===a&&0===t&&te.a.hiddenCell,0===a&&1===t&&te.a.hiddenCell2,te.a.tableHeader),key:"".concat(e," ").concat(Math.random())}),e.render("Header"))})))}))}),Object(B.jsx)("tbody",Object(i.a)(Object(i.a)({},u()),{},{children:b.map((function(e){return j(e),Object(n.createElement)("tr",Object(i.a)(Object(i.a)({},e.getRowProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.cells.map((function(a,o){return Object(n.createElement)("td",Object(i.a)(Object(i.a)({},a.getCellProps()),{},{className:Object(w.a)(0===o&&te.a.firstCell,te.a.tableCell,String(a.column.id.slice(9))===String("".concat(r.slice(0,2)).concat(r.slice(3,5)).concat(r.slice(6,8)))&&te.a.currentDate),key:"".concat(a," ").concat(Math.random())}),Object(B.jsxs)("div",{className:Object(w.a)(0===o&&te.a.left,te.a.tdInner),children:[0!==o&&e.index!==t.length-1&&e.index!==t.length-2?Object(B.jsx)("button",{type:"button",className:Object(w.a)(te.a.cellButton,1===a.value&&te.a.cellButtonFull),onClick:function(){return function(e,a){var n=t.concat();Object.keys(n[Number(a)]).includes(e)?delete n[Number(a)][e]:n[Number(a)][e]=1,c(R(n)),localStorage.setItem("calendar",JSON.stringify(n))}(a.column.id,a.row.id)},children:a.render("Cell")}):a.render("Cell"),0===o&&"Total office"!==a.value&&"Total remote"!==a.value&&Object(B.jsx)("button",{type:"button",className:te.a.buttonDelRow,onClick:function(){return function(e){var a=t.filter((function(t){return t.name!==e}));c(R(a)),localStorage.setItem("calendar",JSON.stringify(a))}(a.value)},children:Object(B.jsx)("span",{})})]}))})))}))}))]}))},ne=function(e,t){var a=e,n={};n.name=t;for(var c=0;c<90;c++){var r=N(new Date(a.getTime()+864e5*c));n["accessor_".concat(r.slice(0,2)).concat(r.slice(3,5)).concat(r.slice(6,8))]=1}return n},ce=a(12),re=a.n(ce),oe=function(){var e=Object(l.b)(),t=Object(n.useRef)(null);Object(n.useEffect)((function(){t.current.focus()}),[]);var a=Object(l.c)((function(e){return e.reducer.data})),c=Object(n.useState)(""),r=Object(G.a)(c,2),o=r[0],s=r[1],i=Object(n.useState)("office"),d=Object(G.a)(i,2),b=d[0],j=d[1],m=Object(n.useState)(!1),_=Object(G.a)(m,2),p=_[0],O=_[1],f=function(e){j(e)},x=function(t){if(t.preventDefault(),o){var n;n=o.split(/\s*,\s*/);for(var c=0;c<n.length;c++){if("office"===b){var r={name:n[c]};e(V(r)),localStorage.setItem("calendar",JSON.stringify([r].concat(Object(u.a)(a))))}if("remote"===b){var l=ne(new Date,n[c]);e(V(l)),localStorage.setItem("calendar",JSON.stringify([l].concat(Object(u.a)(a))))}}e(A(!1))}else O(!0)};return Object(B.jsxs)("div",{className:re.a.modalContent,children:[Object(B.jsx)("h2",{children:"Add a new employee"}),Object(B.jsxs)("form",{onSubmit:x,className:re.a.form,children:[Object(B.jsxs)("div",{className:re.a.labelWrapper,children:[Object(B.jsx)("label",{children:"Name: "}),Object(B.jsxs)("div",{className:re.a.inputWrapper,children:[Object(B.jsx)("input",{type:"text",onChange:function(e){O(!1),s(e.target.value.trim())},ref:t}),p&&Object(B.jsx)("span",{className:re.a.validationText,children:"The field can not be empty"}),o.length<=3&&!p&&Object(B.jsx)("span",{className:re.a.noteText,children:"You can enter more than 1 employee separated by commas"})]})]}),Object(B.jsxs)("div",{className:re.a.labelWrapper,children:[Object(B.jsx)("label",{children:"Place of work:"}),Object(B.jsxs)("div",{className:re.a.radioWrapper,children:[Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"office"}),Object(B.jsx)("input",{type:"radio",name:"radio",value:b,defaultChecked:!0,onClick:function(){return f("office")}})]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("label",{children:"remote"}),Object(B.jsx)("input",{type:"radio",name:"radio",value:b,onClick:function(){return f("remote")}})]})]})]})]}),Object(B.jsxs)("div",{className:re.a.buttons_wrapper,children:[Object(B.jsx)(z,{buttonText:"Add",buttonType:"submit",onButtonClick:x}),Object(B.jsx)(z,{buttonText:"Cancel",buttonType:"button",onButtonClick:function(){s(""),j("office"),e(A(!1))},stylesButton:re.a.deleteButton})]})]})},le=a(24),se=a.n(le),ue=function(e){var t=e.onCloseClick,a=Object(l.b)(),n=t;return Object(B.jsxs)("div",{className:se.a.modalContent,children:[Object(B.jsx)("h2",{children:"Are sure to delete all employees?"}),Object(B.jsxs)("div",{className:se.a.buttons_wrapper,children:[Object(B.jsx)(z,{buttonText:"Delete",buttonType:"button",onButtonClick:function(){a(I(new Date)),localStorage.setItem("firstRangeDate",String(new Date)),a(R(x)),localStorage.setItem("calendar",JSON.stringify(x)),localStorage.setItem("columnsQuantity","90"),a(P(90)),a(M(x,1,90)),n()}}),Object(B.jsx)(z,{buttonText:"Cancel",buttonType:"button",onButtonClick:function(){n()},stylesButton:se.a.deleteButton})]})]})},ie=a(9),de=a.n(ie),be=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.reducer})),a=Object(n.useState)(!1),c=Object(G.a)(a,2),r=c[0],o=c[1];Object(n.useEffect)((function(){e(M(t.data,t.maxValue,t.columnsQuantity))}),[e]);var s=function(){o(!r)};Object(n.useEffect)((function(){return E(t.firstRangeDate,t.maxValue,90)}),[t.firstRangeDate,t.maxValue]);return Object(B.jsxs)("div",{className:de.a.root_wrapper,children:[t.modalFlag&&Object(B.jsx)(K,{onCloseButtonClick:function(){e(A(!1))},modalContent:oe}),r&&Object(B.jsx)(K,{onCloseButtonClick:s,modalContent:ue}),Object(B.jsx)("header",{children:Object(B.jsx)("h1",{children:"Remote Calendar"})}),Object(B.jsxs)("section",{className:Object(w.a)(de.a.section_wrapper,de.a.buttons_wrapper),children:[Object(B.jsx)(z,{buttonText:"Add employee",buttonType:"button",onButtonClick:function(){e(A(!0))}}),t.data.length>2&&Object(B.jsx)(z,{buttonText:3===t.data.length?"Delete employee":"Delete all employees",buttonType:"button",onButtonClick:s,stylesButton:Object(w.a)(de.a.deleteButton,t.data.length<=2&&de.a.disabledButton),disabled:t.data.length<=2})]}),t.data.length>2&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("section",{className:Object(w.a)(de.a.section_wrapper,de.a.calendar_wrapper),children:[Object(B.jsx)(ae,{data:t.data,columns:t.columns}),Object(B.jsx)("div",{className:de.a.addPeriodButtonWrapper,children:Object(B.jsx)(z,{buttonText:"Add period",buttonType:"button",stylesButton:de.a.addPeriodButton,onButtonClick:function(){var a=t.columnsQuantity+90;localStorage.setItem("columnsQuantity",String(a)),e(P(a)),e(M(t.data,t.maxValue,a))}})})]}),Object(B.jsxs)("section",{className:Object(w.a)(de.a.section_wrapper,de.a.sectionTotal),children:[Object(B.jsx)("span",{children:"Total employees:"}),Object(B.jsx)("span",{children:t.data.length-2})]}),Object(B.jsxs)("section",{className:Object(w.a)(de.a.section_wrapper,de.a.sectionMaxEmployees),children:[Object(B.jsx)("span",{children:"Set max employees in office"}),Object(B.jsx)("input",{type:"number",min:1,value:t.maxValue,onChange:function(a){var n;(n=Number(null===a||void 0===a?void 0:a.target.value))<0||(localStorage.setItem("maxValue",String(n)),e(F(n)),e(M(t.data,n,t.columnsQuantity)))}})]})]})]})};a(45);var je=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(be,{})})},me=Object(s.a)(),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,pe=Object(o.d)(g,_e(Object(o.a)(me)));me.run(U),r.a.render(Object(B.jsx)(l.a,{store:pe,children:Object(B.jsx)(je,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={table:"Calendar_table__2a3tK",tableHeader:"Calendar_tableHeader__3Vkeq",tableCell:"Calendar_tableCell__K3uU_",cell:"Calendar_cell__1GWad",firstCell:"Calendar_firstCell__30j_B",buttonDelRow:"Calendar_buttonDelRow__3nJKv",tdInner:"Calendar_tdInner__3js4q",left:"Calendar_left__3UPql",hiddenCell:"Calendar_hiddenCell__3SSf_",hiddenCell2:"Calendar_hiddenCell2__1xec1",cellButton:"Calendar_cellButton__1C7t9",cellButtonFull:"Calendar_cellButtonFull__4SxB0",currentDate:"Calendar_currentDate__1GRGp"}},9:function(e,t,a){e.exports={root_wrapper:"Root_root_wrapper__NJxYw",section_wrapper:"Root_section_wrapper__p2vVm",calendar_wrapper:"Root_calendar_wrapper__PuSUl",buttons_wrapper:"Root_buttons_wrapper__M5cnT",deleteButton:"Root_deleteButton__2voI-",sectionTotal:"Root_sectionTotal__1IUna",disabledButton:"Root_disabledButton__srir0",sectionMaxEmployees:"Root_sectionMaxEmployees__10a_l",addPeriodButtonWrapper:"Root_addPeriodButtonWrapper__13yGh",addPeriodButton:"Root_addPeriodButton__2I_9p"}}},[[46,1,2]]]);
//# sourceMappingURL=main.21dc0c00.chunk.js.map