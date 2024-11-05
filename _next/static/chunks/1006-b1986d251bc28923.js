"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1006],{5478:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,u={},i=0,a=function(e){return e&&(e.host||a(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=a(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var s=u[n],d=[],f=new Set,v=new Set(l),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(c),u=null!==t&&"false"!==t,i=(r.get(e)||0)+1,a=(s.get(e)||0)+1;r.set(e,i),s.set(e,a),d.push(e),1===i&&u&&o.set(e,!0),1===a&&e.setAttribute(n,"true"),u||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),i++,function(){d.forEach(function(e){var t=r.get(e)-1,u=s.get(e)-1;r.set(e,t),s.set(e,u),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),u||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,u={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},79205:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:c,className:l="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:n,strokeWidth:c?24*Number(a)/Number(o):a,className:u("lucide",l),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),c=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:c,...l}=n;return(0,r.createElement)(a,{ref:i,iconNode:t,className:u("lucide-".concat(o(e)),c),...l})});return n.displayName="".concat(e),n}},85770:function(e,t,n){n.d(t,{Av:function(){return i},pF:function(){return r},xv:function(){return u},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",u="with-scroll-bars-hidden",i="--removed-body-scroll-bar-size"},5517:function(e,t,n){n.d(t,{jp:function(){return m}});var r=n(2265),o=n(18704),u=n(85770),i={left:0,top:0,right:0,gap:0},a=function(e){return parseInt(e||"",10)||0},c=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[a(n),a(r),a(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return i;var t=c(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},s=(0,o.Ws)(),d="data-scroll-locked",f=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,c=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(u.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body[").concat(d,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(u.pF," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(u.zi," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(u.pF," .").concat(u.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(u.zi," .").concat(u.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(d,"] {\n    ").concat(u.Av,": ").concat(c,"px;\n  }\n")},v=function(){var e=parseInt(document.body.getAttribute(d)||"0",10);return isFinite(e)?e:0},p=function(){r.useEffect(function(){return document.body.setAttribute(d,(v()+1).toString()),function(){var e=v()-1;e<=0?document.body.removeAttribute(d):document.body.setAttribute(d,e.toString())}},[])},m=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,u=void 0===o?"margin":o;p();var i=r.useMemo(function(){return l(u)},[u]);return r.createElement(s,{styles:f(i,!t,u,n?"":"!important")})}},60703:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(33509),o=n(2265),u=n(85770),i=n(17325),a=(0,n(31412)._)(),c=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),u=o.useState({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:c}),l=u[0],s=u[1],d=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,y=e.sideCar,g=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,N=e.gapMode,C=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=(0,i.q)([n,t]),L=(0,r.pi)((0,r.pi)({},C),l);return o.createElement(o.Fragment,null,m&&o.createElement(y,{sideCar:a,removeScrollBar:p,shards:h,noIsolation:g,inert:b,setCallbacks:s,allowPinchZoom:!!E,lockRef:n,gapMode:N}),d?o.cloneElement(o.Children.only(f),(0,r.pi)((0,r.pi)({},L),{ref:S})):o.createElement(void 0===w?"div":w,(0,r.pi)({},L,{className:v,ref:S}),f))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:u.zi,zeroRight:u.pF};var s=n(49085),d=n(5517),f=n(18704),v=!1;if("undefined"!=typeof window)try{var p=Object.defineProperty({},"passive",{get:function(){return v=!0,!0}});window.addEventListener("test",p,p),window.removeEventListener("test",p,p)}catch(e){v=!1}var m=!!v&&{passive:!1},h=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},y=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),g(e,r)){var o=b(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},g=function(e,t){return"v"===e?h(t,"overflowY"):h(t,"overflowX")},b=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},E=function(e,t,n,r,o){var u,i=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),a=i*r,c=n.target,l=t.contains(c),s=!1,d=a>0,f=0,v=0;do{var p=b(e,c),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&g(e,c)&&(f+=h,v+=m),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&a>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-a>v)&&(s=!0),s},w=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},N=function(e){return[e.deltaX,e.deltaY]},C=function(e){return e&&"current"in e?e.current:e},S=0,L=[],M=(0,s.L)(a,function(e){var t=o.useRef([]),n=o.useRef([0,0]),u=o.useRef(),i=o.useState(S++)[0],a=o.useState(f.Ws)[0],c=o.useRef(e);o.useEffect(function(){c.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(C),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!c.current.allowPinchZoom;var r,o=w(e),i=n.current,a="deltaX"in e?e.deltaX:i[0]-o[0],l="deltaY"in e?e.deltaY:i[1]-o[1],s=e.target,d=Math.abs(a)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=y(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=y(d,s)),!f)return!1;if(!u.current&&"changedTouches"in e&&(a||l)&&(u.current=r),!r)return!0;var v=u.current||r;return E(v,t,e,"h"===v?a:l,!0)},[]),s=o.useCallback(function(e){if(L.length&&L[L.length-1]===a){var n="deltaY"in e?N(e):w(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(C).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),v=o.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),p=o.useCallback(function(e){n.current=w(e),u.current=void 0},[]),h=o.useCallback(function(t){v(t.type,N(t),t.target,l(t,e.lockRef.current))},[]),g=o.useCallback(function(t){v(t.type,w(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return L.push(a),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:g}),document.addEventListener("wheel",s,m),document.addEventListener("touchmove",s,m),document.addEventListener("touchstart",p,m),function(){L=L.filter(function(e){return e!==a}),document.removeEventListener("wheel",s,m),document.removeEventListener("touchmove",s,m),document.removeEventListener("touchstart",p,m)}},[]);var b=e.removeScrollBar,M=e.inert;return o.createElement(o.Fragment,null,M?o.createElement(a,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,b?o.createElement(d.jp,{gapMode:e.gapMode}):null)}),T=o.forwardRef(function(e,t){return o.createElement(l,(0,r.pi)({},e,{ref:t,sideCar:M}))});T.classNames=l.classNames;var k=T},18704:function(e,t,n){n.d(t,{Ws:function(){return a}});var r,o=n(2265),u=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var u,i;(u=t).styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},i=function(){var e=u();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},a=function(){var e=i();return function(t){return e(t.styles,t.dynamic),null}}},33509:function(e,t,n){n.d(t,{CR:function(){return a},Jh:function(){return i},_T:function(){return o},ev:function(){return c},mG:function(){return u},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function u(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{c(r.next(e))}catch(e){u(e)}}function a(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,a)}c((r=r.apply(e,t||[])).next())})}function i(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(a){return function(c){return function(a){if(n)throw TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,u=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return i}function c(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}},17325:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(2265);function o(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var u="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,i=new WeakMap;function a(e,t){var n,a,c,l=(n=t||null,a=function(t){return e.forEach(function(e){return o(e,t)})},(c=(0,r.useState)(function(){return{value:n,callback:a,facade:{get current(){return c.value},set current(value){var e=c.value;e!==value&&(c.value=value,c.callback(value,e))}}}})[0]).callback=a,c.facade);return u(function(){var t=i.get(l);if(t){var n=new Set(t),r=new Set(e),u=l.current;n.forEach(function(e){r.has(e)||o(e,null)}),r.forEach(function(e){n.has(e)||o(e,u)})}i.set(l,e)},[e]),l}},49085:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(33509),o=n(2265),u=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var u=t.read();if(!u)throw Error("Sidecar medium not found");return o.createElement(u,(0,r.pi)({},n))};function i(e,t){return e.useMedium(t),u}u.isSideCarExport=!0},31412:function(e,t,n){n.d(t,{_:function(){return u}});var r=n(33509);function o(e){return e}function u(e){void 0===e&&(e={});var t,n,u,i=(void 0===t&&(t=o),n=[],u=!1,{read:function(){if(u)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,u);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(u=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){u=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(o)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return i.options=(0,r.pi)({async:!0,ssr:!1},e),i}},6741:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},73966:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return u}});var r=n(2265),o=n(57437);function u(e,t){let n=r.createContext(t),u=e=>{let{children:t,...u}=e,i=r.useMemo(()=>u,Object.values(u));return(0,o.jsx)(n.Provider,{value:i,children:t})};return u.displayName=e+"Provider",[u,function(o){let u=r.useContext(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],u=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return u.scopeName=e,[function(t,u){let i=r.createContext(u),a=n.length;n=[...n,u];let c=t=>{let{scope:n,children:u,...c}=t,l=n?.[e]?.[a]||i,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:u})};return c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e]?.[a]||i,l=r.useContext(c);if(l)return l;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(u,...t)]}},15278:function(e,t,n){n.d(t,{XB:function(){return f}});var r,o=n(2265),u=n(6741),i=n(66840),a=n(98575),c=n(26606),l=n(57437),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:h,onPointerDownOutside:y,onFocusOutside:g,onInteractOutside:b,onDismiss:E,...w}=e,N=o.useContext(d),[C,S]=o.useState(null),L=null!==(f=null==C?void 0:C.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,M]=o.useState({}),T=(0,a.e)(t,e=>S(e)),k=Array.from(N.layers),[x]=[...N.layersWithOutsidePointerEventsDisabled].slice(-1),A=k.indexOf(x),O=C?k.indexOf(C):-1,P=N.layersWithOutsidePointerEventsDisabled.size>0,R=O>=A,W=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),u=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!u.current){let t=function(){p("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);u.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>u.current=!0}}(e=>{let t=e.target,n=[...N.branches].some(e=>e.contains(t));!R||n||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==E||E())},L),D=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),u=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!u.current&&p("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>u.current=!0,onBlurCapture:()=>u.current=!1}}(e=>{let t=e.target;[...N.branches].some(e=>e.contains(t))||(null==g||g(e),null==b||b(e),e.defaultPrevented||null==E||E())},L);return!function(e,t=globalThis?.document){let n=(0,c.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{O!==N.layers.size-1||(null==h||h(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},L),o.useEffect(()=>{if(C)return m&&(0===N.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),N.layersWithOutsidePointerEventsDisabled.add(C)),N.layers.add(C),v(),()=>{m&&1===N.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[C,L,m,N]),o.useEffect(()=>()=>{C&&(N.layers.delete(C),N.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,N]),o.useEffect(()=>{let e=()=>M({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(i.WV.div,{...w,ref:T,style:{pointerEvents:P?R?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,D.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,W.onPointerDownCapture)})});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:o}=r,u=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),o?(0,i.jH)(u,a):u.dispatchEvent(a)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),u=(0,a.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(i.WV.div,{...e,ref:u})}).displayName="DismissableLayerBranch"},86097:function(e,t,n){n.d(t,{EW:function(){return u}});var r=n(2265),o=0;function u(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},99103:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(2265),u=n(98575),i=n(66840),a=n(26606),c=n(57437),l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:y,...g}=e,[b,E]=o.useState(null),w=(0,a.W)(f),N=(0,a.W)(y),C=o.useRef(null),S=(0,u.e)(t,e=>E(e)),L=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(L.paused||!b)return;let t=e.target;b.contains(t)?C.current=t:m(C.current,{select:!0})},t=function(e){if(L.paused||!b)return;let t=e.relatedTarget;null===t||b.contains(t)||m(C.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(b)});return b&&n.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,b,L.paused]),o.useEffect(()=>{if(b){h.add(L);let e=document.activeElement;if(!b.contains(e)){let t=new CustomEvent(l,d);b.addEventListener(l,w),b.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(b).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(b))}return()=>{b.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);b.addEventListener(s,N),b.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),b.removeEventListener(s,N),h.remove(L)},0)}}},[b,w,N,L]);let M=o.useCallback(e=>{if(!n&&!r||L.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=v(e);return[p(t,e),p(t.reverse(),e)]}(t);r&&u?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(u,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,L.paused]);return(0,c.jsx)(i.WV.div,{tabIndex:-1,...g,ref:S,onKeyDown:M})});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}f.displayName="FocusScope";var h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=y(r,e)).unshift(e)},remove(e){var t;null===(t=(r=y(r,e))[0])||void 0===t||t.resume()}});function y(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},99255:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(2265),u=n(61188),i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function c(e){let[t,n]=o.useState(i());return(0,u.b)(()=>{e||n(e=>e??String(a++))},[e]),e||(t?`radix-${t}`:"")}},83832:function(e,t,n){n.d(t,{h:function(){return c}});var r=n(2265),o=n(54887),u=n(66840),i=n(61188),a=n(57437),c=r.forwardRef((e,t)=>{var n,c;let{container:l,...s}=e,[d,f]=r.useState(!1);(0,i.b)(()=>f(!0),[]);let v=l||d&&(null===(c=globalThis)||void 0===c?void 0:null===(n=c.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,a.jsx)(u.WV.div,{...s,ref:t}),v):null});c.displayName="Portal"},71599:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),o=n(98575),u=n(61188),i=e=>{var t,n;let i,c;let{present:l,children:s}=e,d=function(e){var t,n;let[o,i]=r.useState(),c=r.useRef({}),l=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(c.current);s.current="mounted"===d?e:"none"},[d]),(0,u.b)(()=>{let t=c.current,n=l.current;if(n!==e){let r=s.current,o=a(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),l.current=e}},[e,f]),(0,u.b)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(c.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!l.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},u=e=>{e.target===o&&(s.current=a(c.current))};return o.addEventListener("animationstart",u),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",u),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(l),f="function"==typeof s?s({present:d.isPresent}):r.Children.only(s),v=(0,o.e)(d.ref,(i=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?f.ref:(i=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in i&&i.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof s||d.isPresent?r.cloneElement(f,{ref:v}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},26606:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},80886:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(2265),o=n(26606);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[u]=n,i=r.useRef(u),a=(0,o.W)(t);return r.useEffect(()=>{i.current!==u&&(a(u),i.current=u)},[u,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,c=a?e:u,l=(0,o.W)(n);return[c,r.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[a,e,i,l])]}},61188:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);