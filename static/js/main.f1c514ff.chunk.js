(window["webpackJsonpreact-context-api-boilerplate"]=window["webpackJsonpreact-context-api-boilerplate"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),l=(n(10),n(4)),u=n.n(l),i=(n(11),n(1)),s="INCREMENT",m="DECREMENT",d=function(e,t){switch(t.type){case s:return e+1;case m:return e-1;default:return e}},p=0,E=Object(r.createContext)();function f(e){var t=e.children;return a.a.createElement(E.Provider,{value:Object(r.useReducer)(d,p)},t)}var v=function(){return Object(r.useContext)(E)};function g(){var e=v(),t=Object(i.a)(e,2),n=(t[0].count,t[1]);return a.a.createElement("button",{onClick:function(){return n({type:s})}},"Increment")}function h(){var e=v(),t=Object(i.a)(e,2),n=(t[0].count,t[1]);return a.a.createElement("button",{onClick:function(){return n({type:m})}},"Decrement")}function b(){var e=v(),t=Object(i.a)(e,2),n=t[0];t[1];return a.a.createElement("div",null,a.a.createElement("h1",null,n),a.a.createElement(g,null),a.a.createElement(h,null))}var w=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),a.a.createElement(b,null),a.a.createElement(b,null)))},O=function(e,t){switch(t.type){case"LOGIN":return{isLoggedIn:!0,user:t.payload};case"LOGOUT":return{isLoggedIn:!1,user:null};default:return e}},j={isLoggedIn:!1,user:null},x=Object(r.createContext)();function y(e){var t=e.children;return a.a.createElement(x.Provider,{value:Object(r.useReducer)(O,j)},t)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(function(e){var t=e.children;return a.a.createElement(y,null,a.a.createElement(f,null,t))},null,a.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.f1c514ff.chunk.js.map