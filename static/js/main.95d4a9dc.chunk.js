(this.webpackJsonpremote_calendar=this.webpackJsonpremote_calendar||[]).push([[0],[,,,,,function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return d}));var c="FETCH_SAGA",a="SAVE_ALL_DATA",r="SAVE_ALL_COLUMNS",s="SAVE_FIRST_RANGE_DATE",l="SAVE_MAX_VALUE",u="SET_MODAL_FLAG",o="SET_LOADER_FLAG",i="ADD_NEW_EMPLOYEE",d="ADD_COLUMNS_QUANTITY"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return b}));var c=n(5),a=function(e,t,n){return{type:c.c,data:e,maxValue:t,columnsQuantity:n}},r=function(e){return{type:c.e,data:e}},s=function(e){return{type:c.d,columns:e}},l=function(e){return{type:c.f,firstRangeDate:e}},u=function(e){return{type:c.i,modalFlag:e}},o=function(e){return{type:c.b,newEmployee:e}},i=function(e){return{type:c.g,maxValue:e}},d=function(e){return{type:c.a,columnsQuantity:e}},b=function(e){return{type:c.h,loaderFlag:e}}},function(e,t,n){e.exports={root:"styles_root__1Njj2",section:"styles_section__39fyw",calendar:"styles_calendar__302zL",buttons:"styles_buttons__12-d2",deleteButton:"styles_deleteButton__11pQ_",sectionTotal:"styles_sectionTotal__1ThTb",disabledButton:"styles_disabledButton__2bw6-",sectionMaxEmployees:"styles_sectionMaxEmployees__oXqzJ",addPeriodButtonWrapper:"styles_addPeriodButtonWrapper__CxzrO",addPeriodButton:"styles_addPeriodButton__9fijF",sectionNotice:"styles_sectionNotice__10Ebm",loading:"styles_loading__2oPid"}},,,,function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return o}));var c=function(e){return e.reducer.data},a=function(e){return e.reducer.columns},r=function(e){return e.reducer.firstRangeDate},s=function(e){return e.reducer.modalFlag},l=function(e){return e.reducer.maxValue},u=function(e){return e.reducer.columnsQuantity},o=function(e){return e.reducer.loaderFlag}},,function(e,t,n){e.exports={cell:"styles_cell__jR611",weekend:"styles_weekend__1Qcrv",headerFirstCol:"styles_headerFirstCol__1l5g2",headerTopCell:"styles_headerTopCell__1OupR",currentDate:"styles_currentDate__3b3uE",red:"styles_red__UYbq2"}},,,,function(e,t,n){e.exports={example_wrapper:"styles_example_wrapper__27iou",example_item:"styles_example_item__13YvF",examle_empty:"styles_examle_empty__2RCxh",examle_full:"styles_examle_full__1AxDR"}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),n=e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,c=String(e.getFullYear()).slice(2,4);return"".concat(t,".").concat(n,".").concat(c)}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(2),a=n(11),r=n(31),s=n.n(r),l=n(1),u=Object(c.memo)((function(e){var t=e.buttonText,n=e.buttonType,c=e.onButtonClick,r=e.stylesButton,u=e.disabled;return Object(l.jsx)("button",{type:n,"aria-label":t,onClick:c,className:Object(a.a)(s.a.button,r),disabled:u,children:t})}))},,,,,function(e,t,n){e.exports={loaderWrapper:"styles_loaderWrapper__2OFeU",ldsDefault:"styles_ldsDefault__3V2fP"}},function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var c=[{name:"Total office"},{name:"Total remote"}],a={row:"",cell:""}},,function(e,t,n){e.exports={button:"styles_button__2MhAC"}},,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(21),s=n.n(r),l=n(10),u=n(16),o=n(33),i=n(26),d=n(11),b=n(23),j=n(20),O=function(e,t){for(var n=e,c=[],a=0;a<t;a++)c.push({date:Object(j.a)(new Date(n.getTime()+864e5*a)),day:new Date(n.getTime()+864e5*a).getDay()});return c},f=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][Number(e)-1]},x=n(14),m=n.n(x),_=n(1),h=function(e,t,n){if(!e)return[];for(var c=O(new Date(e),n),a=Object(j.a)(new Date),r=t||1,s=[],l=[{Header:Object(_.jsx)("div",{className:m.a.headerFirstCol,children:"Employee"}),accessor:"name"}],u=0;u<c.length;u++){var o=c[u].date.slice(3,5),i=c.length-1!==u&&c[u+1].date.slice(3,5),b=c[u].date.slice(6,8);o===i?s.push({Header:Object(_.jsx)("div",{className:Object(d.a)(0===c[u].day||6===c[u].day?m.a.weekend:"",m.a.cell,c[u].date===a&&m.a.currentDate),children:c[u].date.slice(0,2)}),accessor:"a_".concat(c[u].date.slice(0,2)).concat(c[u].date.slice(3,5)).concat(c[u].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),n=e.rows.length-t.length-2;return Object(_.jsx)("div",{className:Object(d.a)(n>r&&m.a.red),children:n})}return Object(_.jsx)("div",{children:e.value})}}):(s.push({Header:Object(_.jsx)("div",{className:Object(d.a)(0===c[u].day||6===c[u].day?m.a.weekend:"",m.a.cell),children:c[u].date.slice(0,2)}),accessor:"a_".concat(c[u].date.slice(0,2)).concat(c[u].date.slice(3,5)).concat(c[u].date.slice(6,8)),Cell:function(e){if(e.row.index===e.rows.length-1)return e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})).length;if(e.row.index===e.rows.length-2){var t=e.data.filter((function(t){return Object.keys(t).join(" ").includes(e.column.id)})),n=e.rows.length-t.length-2;return Object(_.jsx)("div",{className:Object(d.a)(n>r&&m.a.red),children:n})}return Object(_.jsx)("div",{children:e.value})}}),l.push({Header:Object(_.jsx)("div",{className:Object(d.a)(m.a.cell,m.a.headerTopCell),children:"".concat(f(o)," '").concat(b)}),accessor:o,columns:[].concat(s)}),s.length=0)}return l},p=n(28),y=n.n(p),g=function(){return Object(_.jsx)("div",{className:y.a.loaderWrapper,children:Object(_.jsxs)("div",{className:y.a.ldsDefault,children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]})})},v=n(7),w=n(12),N=function(){var e=Object(l.b)(),t=Object(l.c)(w.c),n=Object(l.c)(w.a),a=Object(l.c)(w.f),r=Object(c.useCallback)((function(c){var a=Number(null===c||void 0===c?void 0:c.target.value);a<0||(localStorage.setItem("maxValue",String(a)),e(Object(v.f)(a)),e(Object(v.b)(t,a,n)))}),[e,n,t]);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("label",{htmlFor:"label",children:"Set max employees in office"}),Object(_.jsx)("input",{id:"label",type:"number",min:1,value:a,onChange:r})]})},k=n(18),S=n.n(k),D=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h3",{children:"Notice"}),Object(_.jsxs)("div",{className:S.a.example_wrapper,children:[Object(_.jsxs)("div",{className:S.a.example_item,children:[Object(_.jsx)("div",{className:S.a.examle_empty}),Object(_.jsx)("span",{children:"office"})]}),Object(_.jsxs)("div",{className:S.a.example_item,children:[Object(_.jsx)("div",{className:S.a.examle_empty,children:Object(_.jsx)("div",{className:S.a.examle_full})}),Object(_.jsx)("span",{children:"remote"})]})]}),Object(_.jsx)("p",{children:"You can change statuses of one employee in a few days at once by click holding 'Ctrl' button for Windows and Linux or 'Command' for MacOs"})]})},C=n(8),E=n.n(C),T=a.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,54))})),A=a.a.lazy((function(){return n.e(5).then(n.bind(null,53))})),F=a.a.lazy((function(){return n.e(6).then(n.bind(null,55))})),B=a.a.lazy((function(){return n.e(7).then(n.bind(null,56))})),V=function(){var e=Object(l.b)(),t=Object(l.c)(w.a),n=Object(l.c)(w.c),a=Object(l.c)(w.d),r=Object(l.c)(w.e),s=Object(l.c)(w.f),u=Object(l.c)(w.g);Object(c.useEffect)((function(){e(Object(v.b)(n,s,t))}),[e]);var o=Object(c.useState)(!1),j=Object(i.a)(o,2),O=j[0],f=j[1],x=Object(c.useCallback)((function(){e(Object(v.i)(!0))}),[e]),m=Object(c.useCallback)((function(){e(Object(v.i)(!1))}),[e]),p=Object(c.useCallback)((function(){f(!O)}),[O]);Object(c.useEffect)((function(){return h(a,s,90)}),[a,s]);var y=Object(c.useCallback)((function(){var c=t+90;localStorage.setItem("columnsQuantity",String(c)),e(Object(v.g)(c)),e(Object(v.b)(n,s,c))}),[e,t,n,s]),k=Object(c.useState)(0),S=Object(i.a)(k,2),C=S[0],V=S[1];return Object(c.useEffect)((function(){return V(window.innerHeight)}),[]),window.addEventListener("resize",(function(){return V(window.outerHeight)}),!0),Object(_.jsxs)("div",{className:E.a.root,style:window.innerWidth<480?{minHeight:C}:{},children:[Object(_.jsx)("header",{children:Object(_.jsx)("h1",{children:"Remote Calendar"})}),r?Object(_.jsx)(g,{}):Object(_.jsxs)(_.Fragment,{children:[u&&Object(_.jsx)(c.Suspense,{fallback:Object(_.jsx)(g,{}),children:Object(_.jsx)(B,{onCloseButtonClick:m,modalContent:A})}),O&&Object(_.jsx)(c.Suspense,{fallback:Object(_.jsx)(g,{}),children:Object(_.jsx)(B,{onCloseButtonClick:p,modalContent:F})}),Object(_.jsxs)("section",{className:Object(d.a)(E.a.section,E.a.buttons),children:[Object(_.jsx)(b.a,{buttonText:"Add employee",buttonType:"button",onButtonClick:x}),n.length>2&&Object(_.jsx)(b.a,{buttonText:3===n.length?"Delete employee":"Delete all employees",buttonType:"button",onButtonClick:p,stylesButton:Object(d.a)(E.a.deleteButton,n.length<=2&&E.a.disabledButton),disabled:n.length<=2})]}),n.length>2&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("section",{className:Object(d.a)(E.a.section,E.a.calendar),children:[Object(_.jsx)(c.Suspense,{fallback:Object(_.jsx)(g,{}),children:Object(_.jsx)(T,{})}),Object(_.jsx)("div",{className:E.a.addPeriodButtonWrapper,children:Object(_.jsx)(b.a,{buttonText:"Add period",buttonType:"button",stylesButton:E.a.addPeriodButton,onButtonClick:y})})]}),Object(_.jsxs)("section",{className:Object(d.a)(E.a.section,E.a.sectionTotal),children:[Object(_.jsx)("span",{children:"Total employees:"}),Object(_.jsx)("span",{children:n.length-2})]}),Object(_.jsx)("section",{className:Object(d.a)(E.a.section,E.a.sectionMaxEmployees),children:Object(_.jsx)(N,{})}),Object(_.jsx)("section",{className:Object(d.a)(E.a.section,E.a.sectionNotice),children:Object(_.jsx)(D,{})})]})]})]})},L=n(32),M=n(6),R=n(29),Q=n(5),I={data:R.b,columns:[],firstRangeDate:null,modalFlag:!1,maxValue:1,columnsQuantity:90,loaderFlag:!0},P=Object(u.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q.e:return Object(M.a)(Object(M.a)({},e),{},{data:t.data});case Q.d:return Object(M.a)(Object(M.a)({},e),{},{columns:t.columns});case Q.f:return Object(M.a)(Object(M.a)({},e),{},{firstRangeDate:t.firstRangeDate});case Q.i:return Object(M.a)(Object(M.a)({},e),{},{modalFlag:t.modalFlag});case Q.b:return Object(M.a)(Object(M.a)({},e),{},{data:[t.newEmployee].concat(Object(L.a)(e.data))});case Q.g:return Object(M.a)(Object(M.a)({},e),{},{maxValue:t.maxValue});case Q.a:return Object(M.a)(Object(M.a)({},e),{},{columnsQuantity:t.columnsQuantity});case Q.h:return Object(M.a)(Object(M.a)({},e),{},{loaderFlag:t.loaderFlag});default:return e}}}),W=n(17),z=n(13),H=Object(W.a)().mark(U),J=Object(W.a)().mark(Y);function U(e){var t,n,c,a,r;return Object(W.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,localStorage.getItem("firstRangeDate");case 3:return t=s.sent,s.next=6,JSON.parse(localStorage.getItem("calendar")||"[]");case 6:return n=s.sent,s.next=9,localStorage.getItem("maxValue");case 9:return c=s.sent,s.next=12,localStorage.getItem("columnsQuantity");case 12:if(a=s.sent,!c){s.next=18;break}return s.next=16,Object(z.c)(Object(v.f)(Number(c)));case 16:s.next=20;break;case 18:return s.next=20,localStorage.setItem("maxValue",String(e.maxValue));case 20:return s.next=22,[];case 22:if(r=s.sent,!a){s.next=28;break}return s.next=26,Object(z.c)(Object(v.g)(Number(a)));case 26:s.next=30;break;case 28:return s.next=30,localStorage.setItem("columnsQuantity",String(e.columnsQuantity));case 30:if(!t){s.next=38;break}return s.next=33,h(t,c,a||e.columnsQuantity);case 33:return r=s.sent,s.next=36,Object(z.c)(Object(v.e)(t));case 36:s.next=43;break;case 38:return s.next=40,h(new Date,e.maxValue,a||e.columnsQuantity);case 40:return r=s.sent,s.next=43,localStorage.setItem("firstRangeDate",String(new Date));case 43:return s.next=45,Object(z.c)(Object(v.c)(r));case 45:if(!n.length){s.next=50;break}return s.next=48,Object(z.c)(Object(v.d)(n));case 48:s.next=52;break;case 50:return s.next=52,localStorage.setItem("calendar",JSON.stringify(e.data));case 52:s.next=57;break;case 54:s.prev=54,s.t0=s.catch(0),console.log(s.t0);case 57:return s.prev=57,s.next=60,Object(z.c)(Object(v.h)(!1));case 60:return s.finish(57);case 61:case"end":return s.stop()}}),H,null,[[0,54,57,61]])}function Y(){return Object(W.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.d)(Q.c,U);case 2:case"end":return e.stop()}}),J)}var G=Object(W.a)().mark(X);function X(){return Object(W.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([Object(z.b)(Y)]);case 2:case"end":return e.stop()}}),G)}n(42);var q=Object(o.a)(),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,Z=Object(u.d)(P,K(Object(u.a)(q)));q.run(X),s.a.render(Object(_.jsx)(l.a,{store:Z,children:Object(_.jsx)(V,{})}),document.getElementById("root"))}],[[43,1,2]]]);
//# sourceMappingURL=main.95d4a9dc.chunk.js.map