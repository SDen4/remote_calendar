(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return d}));var a=n(6),c=function(e,t,n){return{type:a.c,data:e,maxValue:t,columnsQuantity:n}},r=function(e){return{type:a.e,data:e}},o=function(e){return{type:a.d,columns:e}},s=function(e){return{type:a.f,firstRangeDate:e}},l=function(e){return{type:a.h,modalFlag:e}},u=function(e){return{type:a.b,newEmployee:e}},i=function(e){return{type:a.g,maxValue:e}},d=function(e){return{type:a.a,columnsQuantity:e}}},11:function(e,t,n){e.exports={cell:"columns_cell__32YGY",weekend:"columns_weekend__3-10h",headerFirstCol:"columns_headerFirstCol__2_EEi",headerTopCell:"columns_headerTopCell__1xdye",currentDate:"columns_currentDate__10MN6",red:"columns_red__3001Q"}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),n=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,a=String(e.getFullYear()).slice(2,4);return"".concat(t,".").concat(n,".").concat(a)}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),c=n(8),r=n(28),o=n.n(r),s=n(2),l=function(e){var t=e.buttonText,n=e.buttonType,a=e.onButtonClick,r=e.stylesButton,l=e.disabled;return Object(s.jsx)("button",{type:n,onClick:a,className:Object(c.a)(o.a.button,r),disabled:l,children:t})},u=Object(a.memo)(l)},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a=[{name:"Total office"},{name:"Total remote"}],c={row:"",cell:""}},28:function(e,t,n){e.exports={button:"Button_button__1Y5Fm"}},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),o=n.n(r),s=n(15),l=n(16),u=n(30),i=n(29),d=n(9),b=n(6),j={data:n(26).b,columns:[],firstRangeDate:null,modalFlag:!1,maxValue:1,columnsQuantity:90},m=Object(s.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.e:return Object(d.a)(Object(d.a)({},e),{},{data:t.data});case b.d:return Object(d.a)(Object(d.a)({},e),{},{columns:t.columns});case b.f:return Object(d.a)(Object(d.a)({},e),{},{firstRangeDate:t.firstRangeDate});case b.h:return Object(d.a)(Object(d.a)({},e),{},{modalFlag:t.modalFlag});case b.b:return Object(d.a)(Object(d.a)({},e),{},{data:[t.newEmployee].concat(Object(i.a)(e.data))});case b.g:return Object(d.a)(Object(d.a)({},e),{},{maxValue:t.maxValue});case b.a:return Object(d.a)(Object(d.a)({},e),{},{columnsQuantity:t.columnsQuantity});default:return e}}}),O=n(14),_=n.n(O),p=n(12),f=n(8),x=n(18),h=function(e,t){for(var n=e,a=[],c=0;c<t;c++)a.push({date:Object(x.a)(new Date(n.getTime()+864e5*c)),day:new Date(n.getTime()+864e5*c).getDay()});return a},g=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e)-1]},y=n(11),w=n.n(y),v=n(2),N=function(e,t,n){if(!e)return[];for(var a=h(new Date(e),n),c=Object(x.a)(new Date),r=t||1,o=[],s=[{Header:Object(v.jsx)("div",{className:w.a.headerFirstCol,children:"Employee"}),accessor:"name"}],l=0;l<a.length;l++){var u=a[l].date.slice(3,5),i=a.length-1!==l&&a[l+1].date.slice(3,5),d=a[l].date.slice(6,8);u===i?o.push({Header:Object(v.jsx)("div",{className:Object(f.a)(0===a[l].day||6===a[l].day?w.a.weekend:"",w.a.cell,a[l].date===c&&w.a.currentDate),children:a[l].date.slice(0,2)}),accessor:"a_".concat(a[l].date.slice(0,2)).concat(a[l].date.slice(3,5)).concat(a[l].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),n=e.rows.length-t.length-2;return Object(v.jsx)("div",{className:Object(f.a)(n>r&&w.a.red),children:n})}return Object(v.jsx)("div",{children:e.value})}}):(o.push({Header:Object(v.jsx)("div",{className:Object(f.a)(0===a[l].day||6===a[l].day?w.a.weekend:"",w.a.cell),children:a[l].date.slice(0,2)}),accessor:"a_".concat(a[l].date.slice(0,2)).concat(a[l].date.slice(3,5)).concat(a[l].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),n=e.rows.length-t.length-2;return Object(v.jsx)("div",{className:Object(f.a)(n>r&&w.a.red),children:n})}return Object(v.jsx)("div",{children:e.value})}}),s.push({Header:Object(v.jsx)("div",{className:Object(f.a)(w.a.cell,w.a.headerTopCell),children:"".concat(g(u)," '").concat(d)}),accessor:u,columns:[].concat(o)}),o.length=0)}return s},k=n(10),S=_.a.mark(D),C=_.a.mark(E);function D(e){var t,n,a,c,r;return _.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,localStorage.getItem("firstRangeDate");case 3:return t=o.sent,o.next=6,JSON.parse(localStorage.getItem("calendar")||"[]");case 6:return n=o.sent,o.next=9,localStorage.getItem("maxValue");case 9:return a=o.sent,o.next=12,localStorage.getItem("columnsQuantity");case 12:if(c=o.sent,!a){o.next=18;break}return o.next=16,Object(p.c)(Object(k.f)(Number(a)));case 16:o.next=20;break;case 18:return o.next=20,localStorage.setItem("maxValue",String(e.maxValue));case 20:return o.next=22,[];case 22:if(r=o.sent,!c){o.next=28;break}return o.next=26,Object(p.c)(Object(k.g)(Number(c)));case 26:o.next=30;break;case 28:return o.next=30,localStorage.setItem("columnsQuantity",String(e.columnsQuantity));case 30:if(!t){o.next=38;break}return o.next=33,N(t,a,c||e.columnsQuantity);case 33:return r=o.sent,o.next=36,Object(p.c)(Object(k.e)(t));case 36:o.next=43;break;case 38:return o.next=40,N(new Date,e.maxValue,c||e.columnsQuantity);case 40:return r=o.sent,o.next=43,localStorage.setItem("firstRangeDate",String(new Date));case 43:return o.next=45,Object(p.c)(Object(k.c)(r));case 45:if(!n.length){o.next=50;break}return o.next=48,Object(p.c)(Object(k.d)(n));case 48:o.next=52;break;case 50:return o.next=52,localStorage.setItem("calendar",JSON.stringify(e.data));case 52:o.next=57;break;case 54:o.prev=54,o.t0=o.catch(0),console.log(o.t0);case 57:case"end":return o.stop()}}),S,null,[[0,54]])}function E(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(b.c,D);case 2:case"end":return e.stop()}}),C)}var T=_.a.mark(R);function R(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([Object(p.b)(E)]);case 2:case"end":return e.stop()}}),T)}n(43);var A=n(24),B=n(21),V=n(5),F=n.n(V),L=c.a.lazy((function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,53))})),Q=c.a.lazy((function(){return n.e(4).then(n.bind(null,52))})),I=c.a.lazy((function(){return n.e(5).then(n.bind(null,54))})),M=c.a.lazy((function(){return n.e(6).then(n.bind(null,55))})),P=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.reducer})),n=Object(a.useState)(!1),c=Object(A.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){e(Object(k.b)(t.data,t.maxValue,t.columnsQuantity))}),[e]);var s=Object(a.useCallback)((function(){e(Object(k.h)(!0))}),[e]),u=Object(a.useCallback)((function(){e(Object(k.h)(!1))}),[e]),i=Object(a.useCallback)((function(){o(!r)}),[r]),d=Object(a.useCallback)((function(n){n<0||(localStorage.setItem("maxValue",String(n)),e(Object(k.f)(n)),e(Object(k.b)(t.data,n,t.columnsQuantity)))}),[e,t.columnsQuantity,t.data]);Object(a.useEffect)((function(){return N(t.firstRangeDate,t.maxValue,90)}),[t.firstRangeDate,t.maxValue]);var b=Object(a.useCallback)((function(){var n=t.columnsQuantity+90;localStorage.setItem("columnsQuantity",String(n)),e(Object(k.g)(n)),e(Object(k.b)(t.data,t.maxValue,n))}),[e,t.columnsQuantity,t.data,t.maxValue]),j=Object(a.useState)(0),m=Object(A.a)(j,2),O=m[0],_=m[1];return Object(a.useEffect)((function(){return _(window.innerHeight)}),[]),window.addEventListener("resize",(function(){return _(window.outerHeight)}),!0),Object(v.jsxs)("div",{className:F.a.root_wrapper,style:{minHeight:O},children:[t.modalFlag&&Object(v.jsx)(a.Suspense,{fallback:Object(v.jsx)("div",{className:F.a.loading,children:"Loading..."}),children:Object(v.jsx)(M,{onCloseButtonClick:u,modalContent:Q})}),r&&Object(v.jsx)(a.Suspense,{fallback:Object(v.jsx)("div",{className:F.a.loading,children:"Loading..."}),children:Object(v.jsx)(M,{onCloseButtonClick:i,modalContent:I})}),Object(v.jsx)("header",{children:Object(v.jsx)("h1",{children:"Remote Calendar"})}),Object(v.jsxs)("section",{className:Object(f.a)(F.a.section_wrapper,F.a.buttons_wrapper),children:[Object(v.jsx)(B.a,{buttonText:"Add employee",buttonType:"button",onButtonClick:s}),t.data.length>2&&Object(v.jsx)(B.a,{buttonText:3===t.data.length?"Delete employee":"Delete all employees",buttonType:"button",onButtonClick:i,stylesButton:Object(f.a)(F.a.deleteButton,t.data.length<=2&&F.a.disabledButton),disabled:t.data.length<=2})]}),t.data.length>2&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("section",{className:Object(f.a)(F.a.section_wrapper,F.a.calendar_wrapper),children:[Object(v.jsx)(a.Suspense,{fallback:Object(v.jsx)("div",{className:F.a.loading,children:"Loading..."}),children:Object(v.jsx)(L,{data:t.data,columns:t.columns})}),Object(v.jsx)("div",{className:F.a.addPeriodButtonWrapper,children:Object(v.jsx)(B.a,{buttonText:"Add period",buttonType:"button",stylesButton:F.a.addPeriodButton,onButtonClick:b})})]}),Object(v.jsxs)("section",{className:Object(f.a)(F.a.section_wrapper,F.a.sectionTotal),children:[Object(v.jsx)("span",{children:"Total employees:"}),Object(v.jsx)("span",{children:t.data.length-2})]}),Object(v.jsxs)("section",{className:Object(f.a)(F.a.section_wrapper,F.a.sectionMaxEmployees),children:[Object(v.jsx)("span",{children:"Set max employees in office"}),Object(v.jsx)("input",{type:"number",min:1,value:t.maxValue,onChange:function(e){return d(Number(null===e||void 0===e?void 0:e.target.value))}})]}),Object(v.jsxs)("section",{className:Object(f.a)(F.a.section_wrapper,F.a.section_wrapper_notice),children:[Object(v.jsx)("h3",{children:"Notice"}),Object(v.jsxs)("div",{className:F.a.example_wrapper,children:[Object(v.jsxs)("div",{className:F.a.example_item,children:[Object(v.jsx)("div",{className:F.a.examle_empty}),Object(v.jsx)("span",{children:"office"})]}),Object(v.jsxs)("div",{className:F.a.example_item,children:[Object(v.jsx)("div",{className:F.a.examle_empty,children:Object(v.jsx)("div",{className:F.a.examle_full})}),Object(v.jsx)("span",{children:"remote"})]})]}),Object(v.jsx)("p",{children:"You can change statuses of one employee in a few days at once by click holding 'Ctrl' button for Windows and Linux or 'Command' for MacOs"})]})]})]})},H=Object(a.memo)(P);n(44);var J=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(H,{})})},Y=Object(u.a)(),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,U=Object(s.d)(m,z(Object(s.a)(Y)));Y.run(R),o.a.render(Object(v.jsx)(l.a,{store:U,children:Object(v.jsx)(J,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={root_wrapper:"Root_root_wrapper__eL6rt",section_wrapper:"Root_section_wrapper__dgqip",calendar_wrapper:"Root_calendar_wrapper__1t7Ie",buttons_wrapper:"Root_buttons_wrapper__2--Nx",deleteButton:"Root_deleteButton__IXlIF",sectionTotal:"Root_sectionTotal__2sBkM",disabledButton:"Root_disabledButton__3-F7j",sectionMaxEmployees:"Root_sectionMaxEmployees__15T99",addPeriodButtonWrapper:"Root_addPeriodButtonWrapper__1TEqF",addPeriodButton:"Root_addPeriodButton__zSwil",example_wrapper:"Root_example_wrapper__2CniL",example_item:"Root_example_item__ssgKK",examle_empty:"Root_examle_empty__1GOpV",examle_full:"Root_examle_full__UAu05",section_wrapper_notice:"Root_section_wrapper_notice___S4nm",loading:"Root_loading__2K_se"}},6:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var a="FETCH_SAGA",c="SAVE_ALL_DATA",r="SAVE_ALL_COLUMNS",o="SAVE_FIRST_RANGE_DATE",s="SAVE_MAX_VALUE",l="SET_MODAL_FLAG",u="ADD_NEW_EMPLOYEE",i="ADD_COLUMNS_QUANTITY"}},[[45,1,2]]]);
//# sourceMappingURL=main.c4904101.chunk.js.map