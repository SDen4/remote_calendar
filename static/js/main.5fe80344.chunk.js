(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[0],{11:function(e,t,a){e.exports={cell:"columns_cell__32YGY",weekend:"columns_weekend__3-10h",headerFirstCol:"columns_headerFirstCol__2_EEi",headerTopCell:"columns_headerTopCell__1xdye",currentDate:"columns_currentDate__10MN6",red:"columns_red__3001Q"}},12:function(e,t,a){e.exports={modalContent:"ModalContent_modalContent__2Ret1",form:"ModalContent_form__169qh",labelWrapper:"ModalContent_labelWrapper__2EgFl",radioWrapper:"ModalContent_radioWrapper__2iTLh",buttons_wrapper:"ModalContent_buttons_wrapper__1FQ_W",deleteButton:"ModalContent_deleteButton__1z69p",inputWrapper:"ModalContent_inputWrapper__1Wc4T",validationText:"ModalContent_validationText__2UqVI",noteText:"ModalContent_noteText__6A_m5"}},22:function(e,t,a){e.exports={modalWrapper:"Modal_modalWrapper__2YViX",modal:"Modal_modal__26uN6",button:"Modal_button__36BgA"}},23:function(e,t,a){e.exports={modalContent:"ModalDelContent_modalContent__MC1xq",buttons_wrapper:"ModalDelContent_buttons_wrapper__3jGJi",deleteButton:"ModalDelContent_deleteButton__2gpJ-"}},27:function(e,t,a){e.exports={button:"Button_button__1Y5Fm"}},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(19),r=a.n(c),o=a(17),l=a(10),s=a(30),i=a(29),u=a(5),d="FETCH_SAGA",b="SAVE_ALL_DATA",j="SAVE_ALL_COLUMNS",m="SAVE_FIRST_RANGE_DATE",_="SAVE_MAX_VALUE",p="SET_MODAL_FLAG",O="ADD_NEW_EMPLOYEE",x="ADD_COLUMNS_QUANTITY",f=[{name:"Total office"},{name:"Total remote"}],h={row:"",cell:""},g={data:f,columns:[],firstRangeDate:null,modalFlag:!1,maxValue:1,columnsQuantity:90},y=Object(o.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(u.a)(Object(u.a)({},e),{},{data:t.data});case j:return Object(u.a)(Object(u.a)({},e),{},{columns:t.columns});case m:return Object(u.a)(Object(u.a)({},e),{},{firstRangeDate:t.firstRangeDate});case p:return Object(u.a)(Object(u.a)({},e),{},{modalFlag:t.modalFlag});case O:return Object(u.a)(Object(u.a)({},e),{},{data:[t.newEmployee].concat(Object(i.a)(e.data))});case _:return Object(u.a)(Object(u.a)({},e),{},{maxValue:t.maxValue});case x:return Object(u.a)(Object(u.a)({},e),{},{columnsQuantity:t.columnsQuantity});default:return e}}}),C=a(15),v=a.n(C),w=a(13),N=a(7),k=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),a=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,n=String(e.getFullYear()).slice(2,4);return"".concat(t,".").concat(a,".").concat(n)},S=function(e,t){for(var a=e,n=[],c=0;c<t;c++)n.push({date:k(new Date(a.getTime()+864e5*c)),day:new Date(a.getTime()+864e5*c).getDay()});return n},T=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e)-1]},D=a(11),B=a.n(D),E=a(1),M=function(e,t,a){if(!e)return[];for(var n=S(new Date(e),a),c=k(new Date),r=t||1,o=[],l=[{Header:Object(E.jsx)("div",{className:B.a.headerFirstCol,children:"Employee"}),accessor:"name"}],s=0;s<n.length;s++){var i=n[s].date.slice(3,5),u=n.length-1!==s&&n[s+1].date.slice(3,5),d=n[s].date.slice(6,8);i===u?o.push({Header:Object(E.jsx)("div",{className:Object(N.a)(0===n[s].day||6===n[s].day?B.a.weekend:"",B.a.cell,n[s].date===c&&B.a.currentDate),children:n[s].date.slice(0,2)}),accessor:"a_".concat(n[s].date.slice(0,2)).concat(n[s].date.slice(3,5)).concat(n[s].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),a=e.rows.length-t.length-2;return Object(E.jsx)("div",{className:Object(N.a)(a>r&&B.a.red),children:a})}return Object(E.jsx)("div",{children:e.value})}}):(o.push({Header:Object(E.jsx)("div",{className:Object(N.a)(0===n[s].day||6===n[s].day?B.a.weekend:"",B.a.cell),children:n[s].date.slice(0,2)}),accessor:"a_".concat(n[s].date.slice(0,2)).concat(n[s].date.slice(3,5)).concat(n[s].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),a=e.rows.length-t.length-2;return Object(E.jsx)("div",{className:Object(N.a)(a>r&&B.a.red),children:a})}return Object(E.jsx)("div",{children:e.value})}}),l.push({Header:Object(E.jsx)("div",{className:Object(N.a)(B.a.cell,B.a.headerTopCell),children:"".concat(T(i)," '").concat(d)}),accessor:i,columns:[].concat(o)}),o.length=0)}return l},R=function(e,t,a){return{type:d,data:e,maxValue:t,columnsQuantity:a}},A=function(e){return{type:b,data:e}},I=function(e){return{type:m,firstRangeDate:e}},F=function(e){return{type:p,modalFlag:e}},V=function(e){return{type:O,newEmployee:e}},Q=function(e){return{type:_,maxValue:e}},W=function(e){return{type:x,columnsQuantity:e}},L=v.a.mark(J),P=v.a.mark(H);function J(e){var t,a,n,c,r;return v.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,localStorage.getItem("firstRangeDate");case 3:return t=o.sent,o.next=6,JSON.parse(localStorage.getItem("calendar")||"[]");case 6:return a=o.sent,o.next=9,localStorage.getItem("maxValue");case 9:return n=o.sent,o.next=12,localStorage.getItem("columnsQuantity");case 12:if(c=o.sent,!n){o.next=18;break}return o.next=16,Object(w.c)(Q(Number(n)));case 16:o.next=20;break;case 18:return o.next=20,localStorage.setItem("maxValue",String(e.maxValue));case 20:return o.next=22,[];case 22:if(r=o.sent,!c){o.next=28;break}return o.next=26,Object(w.c)(W(Number(c)));case 26:o.next=30;break;case 28:return o.next=30,localStorage.setItem("columnsQuantity",String(e.columnsQuantity));case 30:if(!t){o.next=38;break}return o.next=33,M(t,n,c||e.columnsQuantity);case 33:return r=o.sent,o.next=36,Object(w.c)(I(t));case 36:o.next=43;break;case 38:return o.next=40,M(new Date,e.maxValue,c||e.columnsQuantity);case 40:return r=o.sent,o.next=43,localStorage.setItem("firstRangeDate",String(new Date));case 43:return o.next=45,Object(w.c)({type:j,columns:r});case 45:if(!a.length){o.next=50;break}return o.next=48,Object(w.c)(A(a));case 48:o.next=52;break;case 50:return o.next=52,localStorage.setItem("calendar",JSON.stringify(e.data));case 52:o.next=57;break;case 54:o.prev=54,o.t0=o.catch(0),console.log(o.t0);case 57:case"end":return o.stop()}}),L,null,[[0,54]])}function H(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)(d,J);case 2:case"end":return e.stop()}}),P)}var Y=v.a.mark(U);function U(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([Object(w.b)(H)]);case 2:case"end":return e.stop()}}),Y)}a(43);var G=a(16),q=a(22),X=a.n(q),z=function(e){var t=e.onCloseButtonClick,a=e.modalContent,n=function(){t()};return Object(E.jsx)("div",{className:X.a.modalWrapper,children:Object(E.jsxs)("div",{className:X.a.modal,children:[Object(E.jsx)("button",{type:"button",onClick:n,className:X.a.button,children:Object(E.jsx)("span",{})}),Object(E.jsx)(a,{onCloseClick:n})]})})},K=a(27),Z=a.n(K),$=function(e){var t=e.buttonText,a=e.buttonType,n=e.onButtonClick,c=e.stylesButton,r=e.disabled;return Object(E.jsx)("button",{type:a,onClick:n,className:Object(N.a)(Z.a.button,c),disabled:r,children:t})},ee=a(28),te=a(9),ae=a.n(te),ne=function(e){var t=e.data,a=e.columns,c=Object(l.b)(),r=k(new Date),o=Object(n.useState)(!1),s=Object(G.a)(o,2),i=s[0],d=s[1],b=Object(n.useState)(h),j=Object(G.a)(b,2),m=j[0],_=j[1],p=Object(ee.useTable)({columns:a,data:t}),O=p.getTableProps,x=p.getTableBodyProps,f=p.headerGroups,g=p.rows,y=p.prepareRow;Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){17!==e.keyCode&&91!==e.keyCode||d(!0)}))}),[]),Object(n.useEffect)((function(){window.addEventListener("keyup",(function(e){17!==e.keyCode&&91!==e.keyCode||(_(h),d(!1))}))}),[]);return Object(E.jsxs)("table",Object(u.a)(Object(u.a)({},O()),{},{className:ae.a.table,children:[Object(E.jsx)("thead",{children:f.map((function(e,t){return Object(n.createElement)("tr",Object(u.a)(Object(u.a)({},e.getHeaderGroupProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.headers.map((function(e,a){return Object(n.createElement)("th",Object(u.a)(Object(u.a)({},e.getHeaderProps()),{},{className:Object(N.a)(0===a&&ae.a.firstCell,0===a&&0===t&&ae.a.hiddenCell,0===a&&1===t&&ae.a.hiddenCell2,ae.a.tableHeader),key:"".concat(e," ").concat(Math.random())}),e.render("Header"))})))}))}),Object(E.jsx)("tbody",Object(u.a)(Object(u.a)({},x()),{},{children:g.map((function(e){return y(e),Object(n.createElement)("tr",Object(u.a)(Object(u.a)({},e.getRowProps()),{},{key:"".concat(e," ").concat(Math.random())}),e.cells.map((function(a,o){return Object(n.createElement)("td",Object(u.a)(Object(u.a)({},a.getCellProps()),{},{className:Object(N.a)(0===o&&ae.a.firstCell,ae.a.tableCell,String(a.column.id.slice(2))===String("".concat(r.slice(0,2)).concat(r.slice(3,5)).concat(r.slice(6,8)))&&ae.a.currentDate),key:"".concat(a," ").concat(Math.random())}),Object(E.jsxs)("div",{className:Object(N.a)(0===o&&ae.a.left,ae.a.tdInner),children:[0!==o&&e.index!==t.length-1&&e.index!==t.length-2?Object(E.jsx)("button",{type:"button",className:Object(N.a)(ae.a.cellButton,i&&ae.a.selected,1===a.value&&ae.a.cellButtonFull),onClick:function(){return function(e,a){var n=t.concat();if(i&&""===m.row&&_({row:a,cell:e}),i&&m.row===a){var r=Number("".concat(m.cell.slice(6)).concat(m.cell.slice(4,6)).concat(m.cell.slice(2,4))),o=Number("".concat(e.slice(6)).concat(e.slice(4,6)).concat(e.slice(2,4)));if(o<r){var l=[o-1,r-1];r=l[0],o=l[1]}for(var s=r+1;s<=o;s++){var u="a_".concat(String(s).slice(4)).concat(String(s).slice(2,4)).concat(String(s).slice(0,2));Object.keys(n[Number(a)]).includes(u)?delete n[Number(a)][u]:n[Number(a)][u]=1}_(h),d(!1)}else Object.keys(n[Number(a)]).includes(e)?delete n[Number(a)][e]:n[Number(a)][e]=1;c(A(n)),localStorage.setItem("calendar",JSON.stringify(n))}(a.column.id,a.row.id)},children:a.render("Cell")}):a.render("Cell"),0===o&&"Total office"!==a.value&&"Total remote"!==a.value&&Object(E.jsx)("button",{type:"button",className:ae.a.buttonDelRow,onClick:function(){return function(e){var a=t.filter((function(t){return t.name!==e}));c(A(a)),localStorage.setItem("calendar",JSON.stringify(a))}(a.value)},children:Object(E.jsx)("span",{})})]}))})))}))}))]}))},ce=function(e,t){var a=e,n={};n.name=t;for(var c=0;c<90;c++){var r=k(new Date(a.getTime()+864e5*c));n["a_".concat(r.slice(0,2)).concat(r.slice(3,5)).concat(r.slice(6,8))]=1}return n},re=a(12),oe=a.n(re),le=function(){var e=Object(l.b)(),t=Object(n.useRef)(null);Object(n.useEffect)((function(){t.current.focus()}),[]);var a=Object(l.c)((function(e){return e.reducer.data})),c=Object(n.useState)(""),r=Object(G.a)(c,2),o=r[0],s=r[1],i=Object(n.useState)("office"),u=Object(G.a)(i,2),d=u[0],b=u[1],j=Object(n.useState)(!1),m=Object(G.a)(j,2),_=m[0],p=m[1],O=function(e){b(e)},x=function(t){if(t.preventDefault(),o){var n,c=[];n=o.split(/\s*,\s*/);for(var r=0;r<n.length;r++){if("office"===d){var l={name:n[r]};e(V(l)),c.push(l)}if("remote"===d){var s=ce(new Date,n[r]);e(V(s)),c.push(s)}}localStorage.setItem("calendar",JSON.stringify(c.reverse().concat(a))),c.length=0,e(F(!1))}else p(!0)};return Object(E.jsxs)("div",{className:oe.a.modalContent,children:[Object(E.jsx)("h2",{children:"Add a new employee"}),Object(E.jsxs)("form",{onSubmit:x,className:oe.a.form,children:[Object(E.jsxs)("div",{className:oe.a.labelWrapper,children:[Object(E.jsx)("label",{children:"Name: "}),Object(E.jsxs)("div",{className:oe.a.inputWrapper,children:[Object(E.jsx)("input",{type:"text",onChange:function(e){p(!1),s(e.target.value.trim())},ref:t}),_&&Object(E.jsx)("span",{className:oe.a.validationText,children:"The field can not be empty"}),!o.includes(",")&&!_&&Object(E.jsx)("span",{className:oe.a.noteText,children:"You can enter more than 1 employee separated by commas"})]})]}),Object(E.jsxs)("div",{className:oe.a.labelWrapper,children:[Object(E.jsx)("label",{children:"Place of work:"}),Object(E.jsxs)("div",{className:oe.a.radioWrapper,children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{children:"office"}),Object(E.jsx)("input",{type:"radio",name:"radio",value:d,defaultChecked:!0,onClick:function(){return O("office")}})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{children:"remote"}),Object(E.jsx)("input",{type:"radio",name:"radio",value:d,onClick:function(){return O("remote")}})]})]})]})]}),Object(E.jsxs)("div",{className:oe.a.buttons_wrapper,children:[Object(E.jsx)($,{buttonText:"Add",buttonType:"submit",onButtonClick:x}),Object(E.jsx)($,{buttonText:"Cancel",buttonType:"button",onButtonClick:function(){s(""),b("office"),e(F(!1))},stylesButton:oe.a.deleteButton})]})]})},se=a(23),ie=a.n(se),ue=function(e){var t=e.onCloseClick,a=Object(l.b)(),n=t;return Object(E.jsxs)("div",{className:ie.a.modalContent,children:[Object(E.jsx)("h2",{children:"Are sure to delete all employees?"}),Object(E.jsxs)("div",{className:ie.a.buttons_wrapper,children:[Object(E.jsx)($,{buttonText:"Delete",buttonType:"button",onButtonClick:function(){a(I(new Date)),localStorage.setItem("firstRangeDate",String(new Date)),a(A(f)),localStorage.setItem("calendar",JSON.stringify(f)),localStorage.setItem("columnsQuantity","90"),a(W(90)),a(R(f,1,90)),n()}}),Object(E.jsx)($,{buttonText:"Cancel",buttonType:"button",onButtonClick:function(){n()},stylesButton:ie.a.deleteButton})]})]})},de=a(6),be=a.n(de),je=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.reducer})),a=Object(n.useState)(!1),c=Object(G.a)(a,2),r=c[0],o=c[1];Object(n.useEffect)((function(){e(R(t.data,t.maxValue,t.columnsQuantity))}),[e]);var s=function(){o(!r)};Object(n.useEffect)((function(){return M(t.firstRangeDate,t.maxValue,90)}),[t.firstRangeDate,t.maxValue]);return Object(E.jsxs)("div",{className:be.a.root_wrapper,children:[t.modalFlag&&Object(E.jsx)(z,{onCloseButtonClick:function(){e(F(!1))},modalContent:le}),r&&Object(E.jsx)(z,{onCloseButtonClick:s,modalContent:ue}),Object(E.jsx)("header",{children:Object(E.jsx)("h1",{children:"Remote Calendar"})}),Object(E.jsxs)("section",{className:Object(N.a)(be.a.section_wrapper,be.a.buttons_wrapper),children:[Object(E.jsx)($,{buttonText:"Add employee",buttonType:"button",onButtonClick:function(){e(F(!0))}}),t.data.length>2&&Object(E.jsx)($,{buttonText:3===t.data.length?"Delete employee":"Delete all employees",buttonType:"button",onButtonClick:s,stylesButton:Object(N.a)(be.a.deleteButton,t.data.length<=2&&be.a.disabledButton),disabled:t.data.length<=2})]}),t.data.length>2&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("section",{className:Object(N.a)(be.a.section_wrapper,be.a.calendar_wrapper),children:[Object(E.jsx)(ne,{data:t.data,columns:t.columns}),Object(E.jsx)("div",{className:be.a.addPeriodButtonWrapper,children:Object(E.jsx)($,{buttonText:"Add period",buttonType:"button",stylesButton:be.a.addPeriodButton,onButtonClick:function(){var a=t.columnsQuantity+90;localStorage.setItem("columnsQuantity",String(a)),e(W(a)),e(R(t.data,t.maxValue,a))}})})]}),Object(E.jsxs)("section",{className:Object(N.a)(be.a.section_wrapper,be.a.sectionTotal),children:[Object(E.jsx)("span",{children:"Total employees:"}),Object(E.jsx)("span",{children:t.data.length-2})]}),Object(E.jsxs)("section",{className:Object(N.a)(be.a.section_wrapper,be.a.sectionMaxEmployees),children:[Object(E.jsx)("span",{children:"Set max employees in office"}),Object(E.jsx)("input",{type:"number",min:1,value:t.maxValue,onChange:function(a){var n;(n=Number(null===a||void 0===a?void 0:a.target.value))<0||(localStorage.setItem("maxValue",String(n)),e(Q(n)),e(R(t.data,n,t.columnsQuantity)))}})]}),Object(E.jsxs)("section",{className:Object(N.a)(be.a.section_wrapper,be.a.section_wrapper_notice),children:[Object(E.jsx)("h3",{children:"Notice"}),Object(E.jsxs)("div",{className:be.a.example_item,children:[Object(E.jsx)("div",{className:be.a.examle_empty}),Object(E.jsx)("span",{children:"office"})]}),Object(E.jsxs)("div",{className:be.a.example_item,children:[Object(E.jsx)("div",{className:be.a.examle_empty,children:Object(E.jsx)("div",{className:be.a.examle_full})}),Object(E.jsx)("span",{children:"remote"})]}),Object(E.jsx)("p",{children:"You can change statuses of one employee in a few days at once by click holding 'Ctrl' button for Windows and Linux or 'Command' for MacOs"})]})]})]})};a(45);var me=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(je,{})})},_e=Object(s.a)(),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,Oe=Object(o.d)(y,pe(Object(o.a)(_e)));_e.run(U),r.a.render(Object(E.jsx)(l.a,{store:Oe,children:Object(E.jsx)(me,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={root_wrapper:"Root_root_wrapper__eL6rt",section_wrapper:"Root_section_wrapper__dgqip",calendar_wrapper:"Root_calendar_wrapper__1t7Ie",buttons_wrapper:"Root_buttons_wrapper__2--Nx",deleteButton:"Root_deleteButton__IXlIF",sectionTotal:"Root_sectionTotal__2sBkM",disabledButton:"Root_disabledButton__3-F7j",sectionMaxEmployees:"Root_sectionMaxEmployees__15T99",addPeriodButtonWrapper:"Root_addPeriodButtonWrapper__1TEqF",addPeriodButton:"Root_addPeriodButton__zSwil",example_item:"Root_example_item__ssgKK",examle_empty:"Root_examle_empty__1GOpV",examle_full:"Root_examle_full__UAu05",section_wrapper_notice:"Root_section_wrapper_notice___S4nm"}},9:function(e,t,a){e.exports={table:"Calendar_table__2gz7h",tableHeader:"Calendar_tableHeader__1Tj0Q",tableCell:"Calendar_tableCell__3k-KB",cell:"Calendar_cell__14FkO",firstCell:"Calendar_firstCell__3YC6V",buttonDelRow:"Calendar_buttonDelRow__3yO2B",tdInner:"Calendar_tdInner__1Qqal",left:"Calendar_left__2ULUU",hiddenCell:"Calendar_hiddenCell__3FmDQ",hiddenCell2:"Calendar_hiddenCell2__1IDBb",cellButton:"Calendar_cellButton__3tjSx",selected:"Calendar_selected__2fs0o",cellButtonFull:"Calendar_cellButtonFull__3JaX3",currentDate:"Calendar_currentDate__1-LhY"}}},[[46,1,2]]]);
//# sourceMappingURL=main.5fe80344.chunk.js.map