(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4854],{41671:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});let a=(0,i(79205).Z)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},76865:function(e,t,i){"use strict";i.d(t,{Z:function(){return a}});let a=(0,i(79205).Z)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},30166:function(e,t,i){"use strict";i.d(t,{default:function(){return r.a}});var a=i(55775),r=i.n(a)},55775:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let a=i(47043);i(57437),i(2265);let r=a._(i(15602));function n(e,t){var i;let a={loading:e=>{let{error:t,isLoading:i,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e);let n={...a,...t};return(0,r.default)({...n,modules:null==(i=n.loadableGenerated)?void 0:i.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81523:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let a=i(18993);function r(e){let{reason:t,children:i}=e;if("undefined"==typeof window)throw new a.BailoutToCSRError(t);return i}},15602:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let a=i(57437),r=i(2265),n=i(81523),s=i(70049);function o(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},d=function(e){let t={...l,...e},i=(0,r.lazy)(()=>t.loader().then(o)),d=t.loading;function u(e){let o=d?(0,a.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,a.jsxs)(a.Fragment,{children:["undefined"==typeof window?(0,a.jsx)(s.PreloadCss,{moduleIds:t.modules}):null,(0,a.jsx)(i,{...e})]}):(0,a.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(i,{...e})});return(0,a.jsx)(r.Suspense,{fallback:o,children:l})}return u.displayName="LoadableComponent",u}},70049:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return n}});let a=i(57437),r=i(20544);function n(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let i=(0,r.getExpectedRequestStore)("next/dynamic css"),n=[];if(i.reactLoadableManifest&&t){let e=i.reactLoadableManifest;for(let i of t){if(!e[i])continue;let t=e[i].files.filter(e=>e.endsWith(".css"));n.push(...t)}}return 0===n.length?null:(0,a.jsx)(a.Fragment,{children:n.map(e=>(0,a.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:i.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},19055:function(){},60330:function(e,t,i){"use strict";let a,r;i.d(t,{ZP:function(){return b5}});var n=i(2265),s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,h=function(e,t){return function(){return e&&(t=e(e=0)),t}},m=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},p=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=d(t),s=0,u=n.length;s<u;s++)r=n[s],c.call(e,r)||r===i||o(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=l(t,r))||a.enumerable});return e},v=function(e,t,i){return i=null!=e?s(u(e)):{},p(!t&&e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)},b=m(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function f(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):f(e,t)}var E=h(function(){E()});function g(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var y=h(function(){}),A=m(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),T=m(function(e,t){function i(e,t){if(!f(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}E(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),k=m(function(e,t){function i(e,t){if(!f(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}E(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),w=m(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),I=m(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),S=m(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),C=m(function(e,t){y(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=g(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),R=m(function(e,t){E();var i=A(),a=w(),r=I(),n=S(),s=C(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!f(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),L=m(function(e,t){E();var i=R();function a(e){if(!f(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),D=m(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),M=m(function(e,t){E();var i=A(),a=T(),r=k(),n=R(),s=L(),o=D(),l=w(),d=I(),u=S();function c(){if(!f(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),x=m(function(e,t){var i=M();t.exports=new i}),N=m(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=x();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function P(e,t){if(e){if("string"==typeof e)return O(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return O(e,t)}}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||P(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var B=v(b()),W=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},H=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},V=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=H()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},q=function(e){e&&void 0!==e.nodeName?e=V(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function F(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},j=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,F(o)),d=(i=console.info).bind.apply(i,F(o)),u=(a=console.debug).bind.apply(a,F(o)),c=(r=console.warn).bind.apply(r,F(o)),h=(n=console.error).bind.apply(n,F(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.TRACE))return l.apply(void 0,F(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.DEBUG))return u.apply(void 0,F(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.INFO))return d.apply(void 0,F(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.WARN))return c.apply(void 0,F(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>$.ERROR))return h.apply(void 0,F(t))},get level(){return m},set level(_){_!==this.level&&(m=null!=_?_:s)}}}("[mux]"),K=v(b());function G(){return"1"===(K.default.doNotTrack||K.default.navigator&&K.default.navigator.doNotTrack)}var Y=v(b()),Z={now:function(){var e=Y.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}};function Q(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){if(!f(e,t))throw TypeError("Cannot call a class as a function")}function X(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function J(e,t,i){return t&&X(e.prototype,t),i&&X(e,i),e}function ee(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ei(e){return(ei=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}E(),y();var ea=function(e){return er(e)[0]},er=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},en=v(b()),es={exists:function(){var e=en.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=en.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=en.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function eo(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function el(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){ee(e,t,i[t])})}return e}function ed(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var eu=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ec=["x-cdn","content-type"].concat(eu);function eh(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ec.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function em(e){if(e){var t=eu.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var ep=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},ev=function(e){if(!e)return{};var t=es.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},eb=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return eh(e.getAllResponseHeaders())},ef=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!es.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=ev(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",ed(el({},ep(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:ea(r),request_response_headers:eb(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=ev(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:ea(i.url),request_response_headers:eb(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=ev(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:ea(i.url),request_response_headers:eb(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=ev(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?eb(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?ea(r.responseURL):void 0,request_id:h?em(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?eb(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:ea(c),request_id:h?em(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:ea(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eE=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eg=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=ea(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=eh(u[u.length-1]._responseHeaders||""));var c=i?em(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},ey=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},e_=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},eA=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eT=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=eA(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:ea(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eg(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,f=c.requestHostname,E=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:f,request_id:c.requestId,request_url:E,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eg(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,f=u.requestHostname,E=u.requestUrl,g=u.requestId,y=ey(d,i),A=y.currentLevel,T=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:f,request_id:g,request_url:E,request_media_start_time:l,request_media_duration:b,request_current_level:A,request_labeled_bitrate:y.renditionBitrate,request_video_width:T,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:e_(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=ed(el({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:ea(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:ea(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},ek=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ew=0,eI=function(){function e(){z(this,e),ee(this,"_listeners",void 0)}return J(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++ew,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++ew;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eS=v(b()),eC=function(){function e(t){var i=this;z(this,e),ee(this,"_playbackHeartbeatInterval",void 0),ee(this,"_playheadShouldBeProgressing",void 0),ee(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eS.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return J(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eS.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eS.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eR=function e(t){var i=this;z(this,e),ee(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eL=function(){function e(t){z(this,e),ee(this,"_watchTimeTrackerLastCheckedTime",void 0),ee(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return J(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),eo(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eD=function(){function e(t){var i=this;z(this,e),ee(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),ee(this,"_lastTime",void 0),ee(this,"_isAdPlaying",void 0),ee(this,"_callbackUpdatePlaybackTime",void 0),ee(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Z.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Z.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return J(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=Z.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&eo(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eM=function(){function e(t){z(this,e),ee(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return J(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),ex=function e(t){if(z(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;eo(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(eo(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eN=function(){function e(t){var i=this;z(this,e),ee(this,"_lastCheckedTime",void 0),ee(this,"_lastPlayheadTime",void 0),ee(this,"_lastPlayheadTimeUpdatedTime",void 0),ee(this,"_rebuffering",void 0),ee(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Z.now()})}))}return J(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eO=function(){function e(t){var i=this;z(this,e),ee(this,"NAVIGATION_START",void 0),ee(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||Z.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||Z.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return J(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eP=function e(t){var i=this;z(this,e),ee(this,"_lastPlayerHeight",void 0),ee(this,"_lastPlayerWidth",void 0),ee(this,"_lastPlayheadPosition",void 0),ee(this,"_lastSourceHeight",void 0),ee(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eo(t.data,"view_total_content_playback_time",e),eo(t.data,"view_total_upscaling",r*e),eo(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eU=function e(t){var i=this;z(this,e),ee(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=Z.now(),r=(t.data.viewer_time||e)-(a||e);eo(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,eo(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eB=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eW=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eH=function(){function e(t){var i=this;z(this,e),ee(this,"_adHasPlayed",void 0),ee(this,"_adRequests",void 0),ee(this,"_adResponses",void 0),ee(this,"_currentAdRequestNumber",void 0),ee(this,"_currentAdResponseNumber",void 0),ee(this,"_prerollPlayTime",void 0),ee(this,"_wouldBeNewAdPlay",void 0),ee(this,"isAdBreak",void 0),ee(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eW.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eB(i._adRequests,a),eo(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||eo(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eB(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&eo(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,eo(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||eo(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||eo(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return J(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=U(er(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=U(er(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eV=v(b()),eq=function e(t){z(this,e);var i,a,r=function(){t.disableRebufferTracking||(eo(t.data,"view_waiting_rebuffer_count",1),i=Z.now(),a=eV.default.setInterval(function(){if(i){var e=Z.now();eo(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(eo(t.data,"view_waiting_rebuffer_duration",Z.now()-i),i=!1,eV.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},eF=function e(t){var i=this;z(this,e),ee(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Z.now(),t.on("before*",r)},r=function(e){var a=Z.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},e$=v(b()),ej=(td=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t},function e(t){function i(e,a,r){var n;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=td({path:"/"},i.defaults,r)).expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}try{n=JSON.stringify(a),/^[\{\[]/.test(n)&&(a=n)}catch(e){}return a=t.write?t.write(a,e):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",a,r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}e||(n={});for(var o=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<o.length;d++){var u=o[d].split("="),c=u.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{var h=u[0].replace(l,decodeURIComponent);if(c=t.read?t.read(c,h):t(c,h)||c.replace(l,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch(e){}if(e===h){n=c;break}e||(n[h]=c)}catch(e){}}return n}}return i.set=i,i.get=function(e){return i.call(i,e)},i.getJSON=function(){return i.apply({json:!0},[].slice.call(arguments))},i.defaults={},i.remove=function(e,t){i(e,"",td(t,{expires:-1}))},i.withConverter=e,i}(function(){})),eK="muxData",eG=function(){var e;try{e=(ej.get(eK)||"").split("&").reduce(function(e,t){var i=U(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},eY=function(e){try{ej.set(eK,Object.entries(e).map(function(e){var t=U(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},eZ=function(){var e=eG();return e.mux_viewer_id=e.mux_viewer_id||W(),e.msn=e.msn||Math.random(),eY(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eQ=function(){var e=eG(),t=Z.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=W(),e.sst=t),e.sex=t+15e5,eY(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},ez=v(b()),eX=function(){var e;switch(eJ()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},eJ=function(){var e=ez.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};eX.getConnectionFromAPI=eJ;var e0=e2({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e1=e2({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e2(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e3(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e0[s];o||(j.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e1[e]?o+=e1[e]:Number(e)&&Math.floor(Number(e))===Number(e)?o+=e:(j.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e5=v(b()),e9={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e4=["hb","requestcompleted","requestfailed","requestcanceled"],e8=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e9,t)};e8.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e8.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},e8.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e5.default.clearTimeout(this._sendTimeout)},e8.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e3({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);e7(this._beaconUrl,i,!0,function(){})},e8.prototype._sendBeaconQueue=function(){var e=this;if(!this._postInFlight){var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=Z.now();e7(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,j.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=Z.now()-a,e._postInFlight=!1})}},e8.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e8.prototype._startBeaconSending=function(){var e=this;e5.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e5.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e8.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(Z.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(j.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e4.indexOf(e.e)}),s()),o()||(j.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var e7=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(e5.default.fetch){e5.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:t.length<=57344}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(e5.default.XMLHttpRequest){var r=new e5.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},e6=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],te=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],tt=["ad_id","ad_creative_id","ad_universal_id"],ti=["viewstart","error","ended","viewend"],ta=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,f,E,g,y,A,T=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};z(this,e),ee(this,"mux",void 0),ee(this,"envKey",void 0),ee(this,"options",void 0),ee(this,"eventQueue",void 0),ee(this,"sampleRate",void 0),ee(this,"disableCookies",void 0),ee(this,"respectDoNotTrack",void 0),ee(this,"previousBeaconData",void 0),ee(this,"lastEventTime",void 0),ee(this,"rateLimited",void 0),ee(this,"pageLevelData",void 0),ee(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e8((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(g=this.options.sampleRate)&&void 0!==g?g:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(A=this.options.respectDoNotTrack)&&void 0!==A&&A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(v=this.options.platform)||void 0===v||null===(p=v.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(f=this.options.platform)||void 0===f||null===(b=f.os)||void 0===b?void 0:b.version,viewer_connection_type:eX(),page_url:null===e$.default||void 0===e$.default||null===(E=e$.default.location)||void 0===E?void 0:E.href},this.viewerData=this.disableCookies?{}:eZ()}return J(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&G())return j.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return j.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eQ(),a=ed(el({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=e3(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return j.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||j.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(j.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):ti.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=e3(a),this.eventQueue.queueEvent(a.event,s),j.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=el({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=U(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||e6.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||tt.includes(t)&&te.includes(e))}}]),e}(),tr=function e(t){z(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tn=function e(t){var i=this;z(this,e),ee(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=Z.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,ee({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view"),t.emit("viewinit",Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},ts=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],to=new Set(["requestcompleted","requestfailed","requestcanceled"]),tl=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&et(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ei(a);return e=t?Reflect.construct(i,arguments,ei(this).constructor):i.apply(this,arguments),e&&("object"===g(e)||"function"==typeof e)?e:Q(this)});function a(e,t,r){z(this,a),ee(Q(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),ee(Q(n),"NAVIGATION_START",void 0),ee(Q(n),"_destroyed",void 0),ee(Q(n),"_heartBeatTimeout",void 0),ee(Q(n),"adTracker",void 0),ee(Q(n),"dashjs",void 0),ee(Q(n),"data",void 0),ee(Q(n),"disablePlayheadRebufferTracking",void 0),ee(Q(n),"disableRebufferTracking",void 0),ee(Q(n),"errorTracker",void 0),ee(Q(n),"errorTranslator",void 0),ee(Q(n),"getAdData",void 0),ee(Q(n),"getPlayheadTime",void 0),ee(Q(n),"getStateData",void 0),ee(Q(n),"hlsjs",void 0),ee(Q(n),"id",void 0),ee(Q(n),"longResumeTracker",void 0),ee(Q(n),"minimumRebufferDuration",void 0),ee(Q(n),"mux",void 0),ee(Q(n),"oldEmit",void 0),ee(Q(n),"playbackEventDispatcher",void 0),ee(Q(n),"playbackHeartbeat",void 0),ee(Q(n),"playbackHeartbeatTime",void 0),ee(Q(n),"playheadTime",void 0),ee(Q(n),"seekingTracker",void 0),ee(Q(n),"sustainedRebufferThreshold",void 0),ee(Q(n),"watchTimeTracker",void 0),ee(Q(n),"currentFragmentPDT",void 0),ee(Q(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=es.domContentLoadedEventEnd(),n.NAVIGATION_START=es.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),j.level=r.debug?$.DEBUG:$.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.playbackEventDispatcher=new ta(e,r.data.env_key,r),n.data={player_instance_id:W(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1,n.oldEmit=n.emit,n.emit=function(e,t){t=Object.assign({viewer_time:this.mux.utils.now()},t),this.oldEmit(e,t)};var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(Q(n));n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)});var o=(function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}).bind(Q(n));if(n.on("videochange",function(e,t){o(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),o(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var l=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",l,!1);var d=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",d,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("pagehide",d)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),ts.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tn(Q(n)),n.errorTracker=new eR(Q(n)),new eF(Q(n)),n.seekingTracker=new eU(Q(n)),n.playheadTime=new eM(Q(n)),n.playbackHeartbeat=new eC(Q(n)),new eP(Q(n)),n.watchTimeTracker=new eL(Q(n)),new eD(Q(n)),n.adTracker=new eH(Q(n)),new eN(Q(n)),new ex(Q(n)),new eO(Q(n)),new eq(Q(n)),new tr(Q(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return J(a,[{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=U(er(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,to.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_updateStateData",value:function(){Object.assign(this.data,this.getStateData()),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=W(),i=function(){t===e.data.view_id&&eo(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,ef(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eE(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,eT(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(ek(this.dashjs),this.dashjs=void 0)}}]),a}(eI);y();var td,tu,tc=v(N()),th=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tm={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tp=v(b());tp.default&&tp.default.WeakMap&&(tu=new WeakMap);var tv={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tb=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tb.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tb.prototype.processLine=function(e){var t=e.indexOf(":"),i=tT(e,t),a=i[0],r=2===i.length?tg(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tv.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tv.PART_INF:tf(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tv.SERVER_CONTROL:tf(this.manifest,i),this.setHoldBack();break;case tv.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tv.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tv.VERSION:tf(this.manifest,i);break;case tv.SESSION_DATA:var s=ep(tk(i[1]));Object.assign(this.manifest.sessionData,s)}},tb.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tf=function(e,t){var i,a=tE(t[0].replace("#EXT-X-",""));tA(t[1])?(i={},i=Object.assign(t_(t[1]),i)):i=tg(t[1]),e[a]=i},tE=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tg=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},ty=function(e){var t={},i=e.split("=");return i.length>1&&(t[tE(i[0])]=tg(i[1])),t},t_=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(ty(t[a]),i);return i},tA=function(e){return e.indexOf("=")>-1},tT=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tk=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tw={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){j.info("safeCall error",e)}return r},safeIncrement:eo,getComputedStyle:function(e,t){var i;return e&&t&&tp.default&&"function"==typeof tp.default.getComputedStyle?(tu&&tu.has(e)&&(i=tu.get(e)),i||(i=tp.default.getComputedStyle(e,null),tu&&tu.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:eh,cdnHeadersToRequestId:em,extractHostnameAndDomain:er,extractHostname:ea,manifestParser:tb,generateShortID:H,generateUUID:W,now:Z.now},tI={},tS=function(e){var t=arguments;"string"==typeof e?tS.hasOwnProperty(e)?B.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tS[e].apply(null,t)},0):j.warn("`"+e+"` is an unknown task"):"function"==typeof e?B.default.setTimeout(function(){e(tS)},0):j.warn("`"+e+"` is invalid.")},tC={loaded:Z.now(),NAME:"mux-embed",VERSION:"5.3.3",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=U(q(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i)).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),i.getPlayheadTime=function(){return d(r.currentTime)},i.getStateData=function(){var e,t=this.hlsjs&&this.hlsjs.url,a=this.dashjs&&g("function"===this.dashjs.getSource)&&this.dashjs.getSource(),n={player_is_paused:r.paused,player_playhead_time:d(r.currentTime),player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tc.default&&!!(tc.default.fullscreenElement||tc.default.webkitFullscreenElement||tc.default.mozFullScreenElement||tc.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:t||a||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(e=r.getVideoPlaybackQuality)||void 0===e?void 0:e.call(r).droppedVideoFrames},s=i.getPlayheadTime();if(r.getStartDate&&s>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(n.player_program_time=u+s,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);n.player_live_edge_program_time=c}}}return n},r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=U(q(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},th.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tm[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tS,e,t)},destroyMonitor:function(e){var t=U(q(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():j.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=V(e);tI[i]?tI[i].addHLSJS(t):j.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=V(e);tI[i]?tI[i].addDashJS(t):j.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=V(e);tI[t]?tI[t].removeHLSJS():j.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=V(e);tI[t]?tI[t].removeDashJS():j.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){G()&&t&&t.respectDoNotTrack&&j.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=V(e);tI[i]=new tl(tS,i,t)},emit:function(e,t,i){var a=V(e);tI[a]?(tI[a].emit(t,i),"destroy"===t&&delete tI[a]):j.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:G,log:j,utils:tw,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tS,tC),void 0!==B.default&&"function"==typeof B.default.addEventListener&&B.default.addEventListener("pagehide",function(e){e.persisted||(tS.WINDOW_UNLOADING=!0)},!1);var tR=i(40303).ZP,tL=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tL.MEDIA_ERR_ABORTED=1,tL.MEDIA_ERR_NETWORK=2,tL.MEDIA_ERR_DECODE=3,tL.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tL.MEDIA_ERR_ENCRYPTED=5,tL.MEDIA_ERR_CUSTOM=100,tL.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tD=e=>null==e,tM=(e,t)=>!tD(t)&&e in t,tx={ANY:"any",MUTED:"muted"},tN={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tO={MSE:"mse",NATIVE:"native"},tP={HEADER:"header",QUERY:"query",NONE:"none"},tU=Object.values(tP),tB={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tW={HLS:tB.M3U8};Object.keys(tW),[...Object.values(tB)];var tH=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tV=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},tq=e=>{let t=e.type;if(t){let e=t.toUpperCase();return tM(e,tW)?tW[e]:t}let{src:i}=e;return i?tj(i):""},tF=e=>"VOD"===e?tN.ON_DEMAND:tN.LIVE,t$=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,tj=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return tM(a,tB)?tB[a]:""},tK=Object.values(tx),tG=e=>"boolean"==typeof e||"string"==typeof e&&tK.includes(e),tY=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=tG(a)?a:!!a,o=()=>{r||tH(t,"playing",()=>{r=!0},{once:!0})};if(o(),tH(t,"loadstart",()=>{r=!1,o(),tZ(t,s)},{once:!0}),tH(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tN.UNKNOWN?e.streamType===tN.LIVE:!Number.isFinite(t.duration)),tZ(t,s)},{once:!0}),i&&i.once(tR.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tN.UNKNOWN?e.streamType===tN.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tH(t,"play",()=>{"metadata"===t.preload?i.once(tR.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||tZ(t,s=tG(e)?e:!!e)}},tZ=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tx.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tx.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},tQ=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tH(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},tz=e=>"time"in e?e.time:e.startTime;function tX(e,t,i,a,r){let n=document.createElement("track");return n.kind=t,n.label=i,a&&(n.srclang=a),r&&(n.id=r),n.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",n.setAttribute("data-removeondestroy",""),e.append(n),n.track}function tJ(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function t0(e,t,i,a){let r=tJ(e,i,a);return r||((r=tX(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>tz(t)-tz(e)).forEach(t=>{var i,n;let s=t.value,o=tz(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var t1="cuepoints",t2=Object.freeze({label:t1});async function t3(e,t,i=t2){return t0(e,t,i.label,"metadata")}var t5=e=>({time:e.startTime,value:JSON.parse(e.text)});function t9(e,t={label:t1}){var i,a;let r=tJ(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return t5(r.activeCues[0]);let{currentTime:n}=e;return t5(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function t4(e,t=t2){return new Promise(i=>{tH(e,"loadstart",async()=>{let a=await t3(e,[],t);tH(e,"cuechange",()=>{let t=t9(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var t8="chapters",t7=Object.freeze({label:t8}),t6=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function ie(e,t,i=t7){return t0(e,t,i.label,"chapters")}function it(e,t={label:t8}){var i,a;let r=tJ(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return t6(r.activeCues[0]);let{currentTime:n}=e;return t6(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ii(e,t=t7){return new Promise(i=>{tH(e,"loadstart",async()=>{let a=await ie(e,[],t);tH(e,"cuechange",()=>{let t=it(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ia,ir,is,io,il,id,iu={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},ic=e=>e.includes("fps")?iu.FAIRPLAY:e.includes("playready")?iu.PLAYREADY:e.includes("widevine")?iu.WIDEVINE:void 0,ih=async e=>fetch(e).then(e=>e.text()).then(e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>e.text()).then(e=>e.split(`
`))),im=e=>{var t,i,a;let r=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),n=tF(r),s=t$(r),o;if(n===tN.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));if(t)o=2*+t.split(":")[1].split("=")[1];else{let t=e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),i=null==(a=null==t?void 0:t.split(":"))?void 0:a[1];o=3*+(null!=i?i:6)}}return{streamType:n,targetLiveWindow:s,liveEdgeStartOffset:o}},ip=async(e,t)=>t===tB.MP4?{streamType:tN.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:t===tB.M3U8?im(await ih(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),iv=async(e,t,i=tq({src:e}))=>{var a,r,n;let{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}=await ip(e,i);(null!=(a=iA.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=iA.get(t))?r:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=iA.get(t))?n:{}).streamType=s,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ib=e=>{var t;let i=e.type,a=tF(i),r=t$(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tN.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},iE=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=ib(e);if(c===tN.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=iA.get(t))?o:{}).seekable=e}(null!=(l=iA.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=iA.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=iA.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},ig=null!=(ir=null==(ia=null==globalThis?void 0:globalThis.navigator)?void 0:ia.userAgent)?ir:"",iy=null!=(il=null==(io=null==(is=null==globalThis?void 0:globalThis.navigator)?void 0:is.userAgentData)?void 0:io.platform)?il:"",i_=ig.toLowerCase().includes("android")||["x11","android"].some(e=>iy.toLowerCase().includes(e)),iA=new WeakMap,iT="mux.com",ik=null==(id=tR.isSupported)?void 0:id.call(tR),iw=()=>tS.utils.now(),iI=tS.utils.generateUUID,iS=({playbackId:e,customDomain:t=iT,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,tokens:{playback:o}={},extraSourceParams:l={}}={})=>{if(!e)return;let[d,u=""]=tV(e),c=new URL(`https://stream.${t}/${d}.m3u8${u}`);return o||c.searchParams.has("token")?(c.searchParams.forEach((e,t)=>{"token"!=t&&c.searchParams.delete(t)}),o&&c.searchParams.set("token",o)):(i&&c.searchParams.set("max_resolution",i),a&&(c.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&c.searchParams.set("rendition_order",r),n&&c.searchParams.set("program_start_time",`${n}`),s&&c.searchParams.set("program_end_time",`${s}`),Object.entries(l).forEach(([e,t])=>{null!=t&&c.searchParams.set(e,t)})),c.toString()},iC=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},iR=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},iL=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:iJ(e)&&null!=(a=null!=(i=iC(e.playbackId))?i:iR(e.src))?a:e.src},iD=e=>{var t;return null==(t=iA.get(e))?void 0:t.error},iM=e=>{var t,i;return null!=(i=null==(t=iA.get(e))?void 0:t.streamType)?i:tN.UNKNOWN},ix=e=>{var t,i;return null!=(i=null==(t=iA.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},iN=e=>{var t,i;return null!=(i=null==(t=iA.get(e))?void 0:t.seekable)?i:e.seekable},iO=e=>{var t;let i=null==(t=iA.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=iN(e);return a.length?a.end(a.length-1)-i:Number.NaN},iP=.034,iU=(e,t,i=iP)=>Math.abs(e-t)<=i,iB=(e,t,i=iP)=>e>t||iU(e,t,i),iW=(e,t=iP)=>e.paused&&iB(e.currentTime,e.duration,t),iH=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},iV=(e,t)=>e.ended||e.loop?e.ended:!!(t&&iH(e,t))||iW(e),iq=(e,t,i)=>{iF(t,i);let{metadata:a={}}=e,{view_session_id:r=iI()}=a,n=iL(e);a.view_session_id=r,a.video_id=n,e.metadata=a,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},iA.set(t,{});let s=ij(e,t),o=tQ(e,t,s);i0(e,t,s),i1(e,t,s),t4(t),ii(t);let l=tY(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},iF=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),null!=e&&e.mux&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",i3),e.removeEventListener("error",i5),e.removeEventListener("durationchange",i2),iA.delete(e),e.dispatchEvent(new Event("teardown")))};function i$(e,t){var i;let a=tq(e);if(a!==tB.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tO.MSE,o=n===tO.NATIVE;return r&&(o||!(ik&&(s||i_)))}var ij=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=tq(e)===tB.M3U8,d=i$(e,t);if(l&&!d&&ik){let t=iK(a),l=iG(e);return new tR({debug:i,startPosition:r,cmcd:s!==tP.NONE?{useHeaders:s===tP.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tP.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...t,...l,...o})}},iK=e=>e===tN.LIVE?{backBufferLength:8}:{},iG=e=>{let{drmToken:t,src:i,playbackId:a=iR(i),drmTypeCb:r}=e;return t&&a?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:iz(e,"fairplay"),serverCertificateUrl:iX(e,"fairplay")},"com.widevine.alpha":{licenseUrl:iz(e,"widevine")},"com.microsoft.playready":{licenseUrl:iz(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=ic(e);return null==r||r(i),t}))}:{}},iY=async e=>await (await fetch(e)).arrayBuffer(),iZ=async(e,t)=>new Uint8Array(await (await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e})).arrayBuffer()),iQ=(e,t)=>{tH(t,"encrypted",async i=>{try{let a=i.initDataType;if("skd"!==a){console.error(`Received unexpected initialization data type "${a}"`);return}if(!t.mediaKeys){let i=await (await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(t=>{var i;return null==(i=e.drmTypeCb)||i.call(e,iu.FAIRPLAY),t})).createMediaKeys(),r=await iY(iX(e,"fairplay"));await i.setServerCertificate(r),await t.setMediaKeys(i)}let r=i.initData;if(null==r){console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);return}let n=t.mediaKeys.createSession();n.generateRequest(a,r);let s=await new Promise(e=>{n.addEventListener("message",t=>{e(t.message)},{once:!0})}),o=await iZ(s,iz(e,"fairplay"));return await n.update(o),n}catch(e){console.error(`Could not start encrypted playback due to exception "${e}"`)}})},iz=({playbackId:e,drmToken:t,customDomain:i=iT},a)=>`https://license.${i.toLocaleLowerCase().endsWith(iT)?i:iT}/license/${a}/${e}?token=${t}`,iX=({playbackId:e,drmToken:t,customDomain:i=iT},a)=>`https://license.${i.toLocaleLowerCase().endsWith(iT)?i:iT}/appcert/${a}/${e}?token=${t}`,iJ=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iT)||!!i&&a.includes(i.toLocaleLowerCase())},i0=(e,t,i)=>{var a;let{envKey:r,disableTracking:n}=e,s=iJ(e);if(!n&&(r||s)){let{playerInitTime:n,playerSoftwareName:s,playerSoftwareVersion:o,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};tS.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?tR:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:o,player_init_time:n,...c}})}},i1=(e,t,i)=>{var a;let r=i$(e,t),{src:n}=e,s=()=>{t.ended||!iV(t,i)||(iH(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},o,l,d=()=>{var e,i;let a=null==(e=iN(t))?void 0:e.start(0),r=null==(i=iN(t))?void 0:i.end(0);(l!==r||o!==a)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),o=a,l=r};if(tH(t,"durationchange",d),t&&r){let i=tq(e);if("string"==typeof n){let r=()=>{if(iM(t)!==tN.LIVE||Number.isFinite(t.duration))return;let e=setInterval(d,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tH(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})};if("none"===t.preload){let e=()=>{iv(n,t,i).then(r),t.removeEventListener("loadedmetadata",a)},a=()=>{iv(n,t,i).then(r),t.removeEventListener("play",e)};tH(t,"play",e,{once:!0}),tH(t,"loadedmetadata",a,{once:!0})}else iv(n,t,i).then(r);e.drmToken&&iQ(e,t),t.setAttribute("src",n),e.startTime&&((null!=(a=iA.get(t))?a:{}).startTime=e.startTime,t.addEventListener("durationchange",i2,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",i3),t.addEventListener("error",i5),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tH(t,"pause",s),tH(t,"seeked",s),tH(t,"play",()=>{t.ended||iB(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&n?(i.once(tR.Events.LEVEL_LOADED,(e,a)=>{iE(a.details,t,i),d(),iM(t)!==tN.LIVE||Number.isFinite(t.duration)||(i.on(tR.Events.LEVEL_UPDATED,d),tH(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tR.Events.LEVELS_UPDATED,d)}))}),i.on(tR.Events.ERROR,(e,i)=>{let a={[tR.ErrorTypes.NETWORK_ERROR]:tL.MEDIA_ERR_NETWORK,[tR.ErrorTypes.MEDIA_ERROR]:tL.MEDIA_ERR_DECODE},r=new tL("",a[i.type]);r.fatal=i.fatal,r.data=i,t.dispatchEvent(new CustomEvent("error",{detail:r}))}),t.addEventListener("error",i5),tH(t,"waiting",s),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tR.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tR.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tR.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let r=i=>{let a=e.currentTime,r=!1,n=(e,t)=>{r||(r=!Number.isFinite(t.endOffset))};t.on(tR.Events.BUFFER_FLUSHING,n),t.nextLevel=i,t.off(tR.Events.BUFFER_FLUSHING,n),r||t.trigger(tR.Events.BUFFER_FLUSHING,{startOffset:a+10,endOffset:1/0,type:"video"})};null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&r(i)});let n=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{n(),s()};t.once(tR.Events.DESTROYING,o)}(e,i),function(e,t){t.on(tR.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a;let r=null!=(a=i.subtitleTrack)?a:i.closedCaptions,n=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==r?void 0:r.lang)&&t===i.label&&a.toLowerCase()===i.kind);tX(e,i.kind,i.label,null==r?void 0:r.lang,`${i.kind}${n}`)})});let i=()=>{var i;if(!t.subtitleTracks.length)return;let a=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind)),r=`${null==(i=t.subtitleTracks[t.subtitleTrack])?void 0:i.type.toLowerCase()}${t.subtitleTrack}`;if(a&&(t.subtitleTrack<0||(null==a?void 0:a.id)!==r)){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==a.language&&t===a.label&&i.toLowerCase()===a.kind);t.subtitleTrack=e}a&&(null==a?void 0:a.id)===r&&a.cues&&Array.from(a.cues).forEach(e=>{a.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tR.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tR.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&"thumbnails"===t.label){if(!(null!=(i=t.cues)&&i.length)){let t=e.querySelector('track[label="thumbnails"]'),i=null!=(a=null==t?void 0:t.getAttribute("src"))?a:"";null==t||t.removeAttribute("src"),setTimeout(()=>{null==t||t.setAttribute("src",i)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tR.Events.MANIFEST_LOADED,a),t.once(tR.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function i2(e){var t;let i=e.target,a=null==(t=iA.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function i3(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tL(i,a);if(t.src&&(a!==tL.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}t.dispatchEvent(new CustomEvent("error",{detail:r}))}function i5(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tL))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=iA.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}let i9={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},i4={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},i8={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_WIDTH:"mediaWidth",MEDIA_HEIGHT:"mediaHeight",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},i7=Object.entries(i8),i6=i7.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),ae=i7.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(ae).reduce((e,[t,i])=>{let a=i6[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let at=Object.entries(i6).reduce((e,[t,i])=>{let a=ae[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),ai={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},aa={DISABLED:"disabled",SHOWING:"showing"},ar={MOUSE:"mouse",TOUCH:"touch"},an={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},as={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ao={FULLSCREEN:"fullscreen"},al="Playback rate",ad={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},au={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function ac(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function ah(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function am(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function ap(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function av(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function ab(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}({...ad,...au});let af=e=>new Promise(t=>setTimeout(t,e)),aE=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ag=(e,t)=>{let i=1===e?aE[t].singular:aE[t].plural;return`${e} ${i}`},ay=e=>{if(!av(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&ag(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function a_(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class aA{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class aT extends aA{}class ak extends aT{constructor(){super(...arguments),this.role=null}}class aw{observe(){}unobserve(){}disconnect(){}}let aI={createElement:function(){return new aS.HTMLElement},createElementNS:function(){return new aS.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},aS={ResizeObserver:aw,document:aI,Node:aT,Element:ak,HTMLElement:class extends ak{constructor(){super(...arguments),this.innerHTML=""}get content(){return new aS.DocumentFragment}},DocumentFragment:class extends aA{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},aC="undefined"==typeof window||void 0===window.customElements,aR=Object.keys(aS).every(e=>e in globalThis),aL=aC&&!aR?aS:globalThis,aD=aC&&!aR?aI:globalThis.document,aM=new WeakMap,ax=e=>{let t=aM.get(e);return t||aM.set(e,t=new Set),t},aN=new aL.ResizeObserver(e=>{for(let t of e)for(let e of ax(t.target))e(t)});function aO(e,t){ax(e).add(t),aN.observe(e)}function aP(e,t){let i=ax(e);i.delete(t),i.size||aN.unobserve(e)}function aU(e){var t;return null!=(t=aB(e))?t:aF(e,"media-controller")}function aB(e){var t;let{MEDIA_CONTROLLER:i}=i4,a=e.getAttribute(i);if(a)return null==(t=aj(e))?void 0:t.getElementById(a)}let aW=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},aH=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},aV=(e,t)=>aH(e,t)[0],aq=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||aq(e,t.getRootNode().host)),aF=(e,t)=>e?e.closest(t)||aF(e.getRootNode().host,t):null;function a$(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=a$(i.shadowRoot))?t:i:null}function aj(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function aK(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function aG(e,t){return function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||aY(e,t)}function aY(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function aZ(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function aQ(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}aZ(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function az(e,t){return e.hasAttribute(t)}function aX(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}az(e,t)!=i&&e.toggleAttribute(t,i)}function aJ(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function a0(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;aJ(e,t,void 0)!==a&&e.setAttribute(t,a)}var a1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a2=(e,t,i)=>(a1(e,t,"read from private field"),i?i.call(e):t.get(e)),a3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a5=(e,t,i,a)=>(a1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let a9=aD.createElement("template");a9.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class a4 extends aL.HTMLElement{constructor(e={}){if(super(),a3(this,o1,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=a9.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=aD.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[i4.MEDIA_CONTROLLER,i6.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=a2(this,o1))?void 0:a.unassociateElement)||r.call(a,this),a5(this,o1,null)),i&&this.isConnected&&(a5(this,o1,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=a2(this,o1))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),a5(this,o1,function(e){var t;let i=e.getAttribute(i4.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):aF(e,"media-controller")}(this)),this.getAttribute(i4.MEDIA_CONTROLLER)&&(null==(t=null==(e=a2(this,o1))?void 0:e.associateElement)||t.call(e,this)),null==(i=a2(this,o1))||i.addEventListener("pointerdown",this),null==(a=a2(this,o1))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(i4.MEDIA_CONTROLLER)&&(null==(t=null==(e=a2(this,o1))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=a2(this,o1))||i.removeEventListener("pointerdown",this),null==(a=a2(this,o1))||a.removeEventListener("click",this),a5(this,o1,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===ar.TOUCH){this.handleTap(e);return}if(d===ar.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return az(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?i9.MEDIA_PLAY_REQUEST:i9.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aL.CustomEvent(t,{composed:!0,bubbles:!0}))}}o1=new WeakMap,aL.customElements.get("media-gesture-receiver")||aL.customElements.define("media-gesture-receiver",a4);var a8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a7=(e,t,i)=>(a8(e,t,"read from private field"),i?i.call(e):t.get(e)),a6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},re=(e,t,i,a)=>(a8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rt=(e,t,i)=>(a8(e,t,"access private method"),i);let ri={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},ra=aD.createElement("template");ra.innerHTML=`
  <style>
    
    :host([${i6.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${ri.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${ri.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${ri.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${ri.AUDIO}])[${ri.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${ri.AUDIO}])[${ri.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${ri.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${ri.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${ri.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${ri.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${ri.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${ri.USER_INACTIVE}]:not([${i6.MEDIA_PAUSED}]):not([${i6.MEDIA_IS_AIRPLAYING}]):not([${i6.MEDIA_IS_CASTING}]):not([${ri.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${ri.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${ri.USER_INACTIVE}]:not([${i6.MEDIA_PAUSED}]):not([${i6.MEDIA_IS_CASTING}]):not([${ri.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${ri.AUDIO}])[${i6.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let rr=Object.values(i6);class rn extends aL.HTMLElement{constructor(){super(),a6(this,o4),a6(this,o7),a6(this,le),a6(this,li),a6(this,lr),a6(this,o2,0),a6(this,o3,null),a6(this,o5,null),a6(this,o9,void 0),this.breakpointsComputed=!1,this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ra.content.cloneNode(!0))),new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e===t&&this.handleMediaUpdated(t)}))}).observe(this,{childList:!0,subtree:!0});let e=!1;aO(this,t=>{e||(setTimeout(()=>{(function(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(ri.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=parseInt(a[e])),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(ae.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}})(t.target,t.contentRect.width),e=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(ae.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),e=!0)});let t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){a7(this,o3)&&this.mediaUnsetCallback(a7(this,o3));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[ri.AUTOHIDE,ri.GESTURES_DISABLED].concat(rr).filter(e=>![i6.MEDIA_RENDITION_LIST,i6.MEDIA_AUDIO_TRACK_LIST,i6.MEDIA_CHAPTERS_CUES,i6.MEDIA_WIDTH,i6.MEDIA_HEIGHT].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==ri.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(re(this,o3,e),e.localName.includes("-")&&await aL.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;let t=null!=this.getAttribute(ri.AUDIO)?ad.AUDIO_PLAYER():ad.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(ri.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=aL.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),null==(e=aL.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){re(this,o3,null)}handleEvent(e){switch(e.type){case"pointerdown":re(this,o2,e.timeStamp);break;case"pointermove":rt(this,o4,o8).call(this,e);break;case"pointerup":rt(this,o7,o6).call(this,e);break;case"mouseleave":rt(this,le,lt).call(this);break;case"mouseup":this.removeAttribute(ri.KEYBOARD_CONTROL);break;case"keyup":rt(this,lr,ln).call(this),this.setAttribute(ri.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);re(this,o9,isNaN(t)?0:t)}get autohide(){return(void 0===a7(this,o9)?2:a7(this,o9)).toString()}}o2=new WeakMap,o3=new WeakMap,o5=new WeakMap,o9=new WeakMap,o4=new WeakSet,o8=function(e){!("mouse"!==e.pointerType&&e.timeStamp-a7(this,o2)<250)&&(rt(this,li,la).call(this),clearTimeout(a7(this,o5)),[this,this.media].includes(e.target)&&rt(this,lr,ln).call(this))},o7=new WeakSet,o6=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(ri.USER_INACTIVE);[this,this.media].includes(e.target)&&t?rt(this,le,lt).call(this):rt(this,lr,ln).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&rt(this,lr,ln).call(this)},le=new WeakSet,lt=function(){if(0>a7(this,o9)||this.hasAttribute(ri.USER_INACTIVE))return;this.setAttribute(ri.USER_INACTIVE,"");let e=new aL.CustomEvent(ae.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},li=new WeakSet,la=function(){if(!this.hasAttribute(ri.USER_INACTIVE))return;this.removeAttribute(ri.USER_INACTIVE);let e=new aL.CustomEvent(ae.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},lr=new WeakSet,ln=function(){rt(this,li,la).call(this),clearTimeout(a7(this,o5));let e=parseInt(this.autohide);e<0||re(this,o5,setTimeout(()=>{rt(this,le,lt).call(this)},1e3*e))},aL.customElements.get("media-container")||aL.customElements.define("media-container",rn);var rs=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ro=(e,t,i)=>(rs(e,t,"read from private field"),i?i.call(e):t.get(e)),rl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rd=(e,t,i,a)=>(rs(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ru{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){rl(this,lu),rl(this,ls,void 0),rl(this,lo,void 0),rl(this,ll,void 0),rl(this,ld,new Set),rd(this,ls,e),rd(this,lo,t),rd(this,ll,new Set(i))}[Symbol.iterator](){return ro(this,lu,lc).values()}get length(){return ro(this,lu,lc).size}get value(){var e;return null!=(e=[...ro(this,lu,lc)].join(" "))?e:""}set value(e){var t;e!==this.value&&(rd(this,ld,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...ro(this,lu,lc)][e]}values(){return ro(this,lu,lc).values()}forEach(e,t){ro(this,lu,lc).forEach(e,t)}add(...e){var t,i;e.forEach(e=>ro(this,ld).add(e)),(""!==this.value||(null==(t=ro(this,ls))?void 0:t.hasAttribute(`${ro(this,lo)}`)))&&(null==(i=ro(this,ls))||i.setAttribute(`${ro(this,lo)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>ro(this,ld).delete(e)),null==(t=ro(this,ls))||t.setAttribute(`${ro(this,lo)}`,`${this.value}`)}contains(e){return ro(this,lu,lc).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}ls=new WeakMap,lo=new WeakMap,ll=new WeakMap,ld=new WeakMap,lu=new WeakSet,lc=function(){return ro(this,ld).size?ro(this,ld):ro(this,ll)};let rc=(e="")=>e.split(/\s+/),rh=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?ai.CAPTIONS:ai.SUBTITLES,language:i,label:r}},rm=(e="",t={})=>rc(e).map(e=>{let i=rh(e);return{...t,...i}}),rp=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?rh(e):e):"string"==typeof e?rm(e):[e]:[],rv=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,rb=(e=[])=>Array.prototype.map.call(e,rv).join(" "),rf=(e,t)=>i=>i[e]===t,rE=e=>{let t=Object.entries(e).map(([e,t])=>rf(e,t));return e=>t.every(t=>t(e))},rg=(e,t=[],i=[])=>{let a=rp(i).map(rE);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},ry=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:rE(t);return Array.from(e.textTracks).filter(i)},r_=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(i6.MEDIA_SUBTITLES_SHOWING)},rA=e=>{var t;let{media:i,fullscreenElement:a}=e,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let e=null==(t=a[r])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()},rT="exitFullscreen"in aD?"exitFullscreen":"webkitExitFullscreen"in aD?"webkitExitFullscreen":"webkitCancelFullScreen"in aD?"webkitCancelFullScreen":void 0,rk=e=>{var t;let{documentElement:i}=e;if(rT){let e=null==(t=null==i?void 0:i[rT])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},rw="fullscreenElement"in aD?"fullscreenElement":"webkitFullscreenElement"in aD?"webkitFullscreenElement":void 0,rI=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[rw];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===ao.FULLSCREEN?i:a},rS=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=rI(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(rw in e))return aq(n,r);for(;null==e?void 0:e[rw];){if(e[rw]===r)return!0;e=null==(t=e[rw])?void 0:t.shadowRoot}}return!1},rC="fullscreenEnabled"in aD?"fullscreenEnabled":"webkitFullscreenEnabled"in aD?"webkitFullscreenEnabled":void 0,rR=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[rC])||i&&"webkitSupportsFullscreen"in i},rL=()=>{var e;return a||(a=null==(e=null==aD?void 0:aD.createElement)?void 0:e.call(aD,"video"))},rD=async(e=rL())=>{if(!e)return!1;let t=e.volume;return e.volume=t/2+.1,await af(0),e.volume!==t},rM=/.*Version\/.*Safari\/.*/.test(aL.navigator.userAgent),rx=(e=rL())=>(!aL.matchMedia("(display-mode: standalone)").matches||!rM)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),rN=(e=rL())=>rR({documentElement:aD,media:e}),rO=rN(),rP=rx(),rU=!!aL.WebKitPlaybackTargetAvailabilityEvent,rB=!!aL.chrome,rW=e=>ry(e.media,e=>[ai.SUBTITLES,ai.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),rH=e=>ry(e.media,e=>e.mode===aa.SHOWING&&[ai.SUBTITLES,ai.CAPTIONS].includes(e.kind)),rV=(e,t)=>{let i=rW(e),a=rH(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)rg(aa.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;rg(aa.DISABLED,i,a),rg(aa.SHOWING,i,[{language:n,label:s,kind:o}])}}},rq=(e,t)=>e===t||typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?rF(e,t):Object.entries(e).every(([e,i])=>e in t&&rq(i,t[e])))),rF=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>rq(e,t[i])))},r$=Object.values(as),rj=rD().then(e=>r=e),rK=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof aL.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=aL.customElements.get(t);i&&e instanceof i||(await aL.customElements.whenDefined(t),aL.customElements.upgrade(e))}))},rG={mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?aL.localStorage.removeItem("media-chrome-pref-volume"):aL.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let i=aL.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;rG.mediaVolume.set(+i,t),e(+i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&0!==i.readyState&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[as.LIVE,as.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(r$.includes(r))return r===as.UNKNOWN?a:r;let n=t.duration;return n===1/0?as.LIVE:Number.isFinite(n)?as.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=rG.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===as.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(rG.mediaStreamType.get(e)!==as.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>rW(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>rH(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![ai.CAPTIONS,ai.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||rV(t,!0))};return null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),s(),()=>{var e,t;null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=ry(i,{kind:ai.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&aq(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!aD.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else aD.pictureInPictureElement&&aD.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>rS(e),set(e,t){e?rA(t):rk(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&aL.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!rO||!rN(t))return an.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!rP||!rx(t))return an.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return an.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&rj.then(t=>e(t?void 0:an.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return rB&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?an.UNAVAILABLE:void 0:an.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>rU?(null==t?void 0:t.availability)==="not-available"?an.UNAVAILABLE:void 0:an.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:an.UNAVAILABLE:an.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?an.UNAVAILABLE:void 0:an.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},rY={[i9.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=ry(l,{kind:ai.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[i9.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[i9.MEDIA_PLAY_REQUEST](e,t){var i;if(e.mediaStreamType.get(t)===as.LIVE){let a=!(e.mediaTargetLiveWindow.get(t)>0),r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];a&&r&&e.mediaCurrentTime.set(r,t)}e.mediaPaused.set(!1,t)},[i9.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[i9.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[i9.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[i9.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[i9.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[i9.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];Number.isNaN(Number(a))||e.mediaCurrentTime.set(a,t)},[i9.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=rW(t),s=rp(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&aL.localStorage.setItem("media-chrome-pref-subtitles-lang",o),rg(aa.SHOWING,n,s)},[i9.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=rW(t);rg(aa.DISABLED,a,null!=i?i:[])},[i9.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){rV(t,i)},[i9.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[i9.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[i9.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[i9.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[i9.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[i9.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[i9.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[i9.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[i9.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var rZ=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=rG,requestMap:r=rY,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||rq(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,f,E,g,y,A,T,k,w,I;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await rK(...Object.values(e));let C=l.length>0&&0===t&&s,R=d.media!==o.media,L=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),D=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(f=o.media)?void 0:f.remote),N=d.documentElement!==o.documentElement,O=!!d.media&&(R||C),P=!!(null==(E=d.media)?void 0:E.textTracks)&&(L||C),U=!!(null==(g=d.media)?void 0:g.videoRenditions)&&(D||C),B=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||C),W=!!(null==(A=d.media)?void 0:A.remote)&&(x||C),H=!!d.documentElement&&(N||C),V=O||P||U||B||W||H,q=0===l.length&&1===t&&s,F=!!o.media&&(R||q),$=!!(null==(T=o.media)?void 0:T.textTracks)&&(L||q),j=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(D||q),K=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||q),G=!!(null==(I=o.media)?void 0:I.remote)&&(x||q),Y=!!o.documentElement&&(N||q),Z=F||$||j||K||G||Y;if(!(V||Z)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),F&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),$&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),j&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&W&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&H&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&V&&v(),Z&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}},rQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rz=(e,t,i)=>(rQ(e,t,"read from private field"),i?i.call(e):t.get(e)),rX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rJ=(e,t,i,a)=>(rQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r0=(e,t,i)=>(rQ(e,t,"access private method"),i);let r1=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],r2={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class r3 extends rn{constructor(){super(),rX(this,lE),rX(this,ly),rX(this,lA),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,rX(this,lh,new ru(this,r2.HOTKEYS)),rX(this,lm,void 0),rX(this,lp,void 0),rX(this,lv,void 0),rX(this,lb,void 0),rX(this,lf,e=>{var t;null==(t=rz(this,lp))||t.dispatch(e)}),this.associateElement(this);let e={};rJ(this,lv,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new aL.CustomEvent(at[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(r2.NO_HOTKEYS,r2.HOTKEYS,r2.DEFAULT_STREAM_TYPE,r2.DEFAULT_SUBTITLES,r2.DEFAULT_DURATION)}get mediaStore(){return rz(this,lp)}set mediaStore(e){var t,i;if(rz(this,lp)&&(null==(t=rz(this,lb))||t.call(this),rJ(this,lb,void 0)),rJ(this,lp,e),!rz(this,lp)&&!this.hasAttribute(r2.NO_DEFAULT_STORE)){r0(this,lE,lg).call(this);return}rJ(this,lb,null==(i=rz(this,lp))?void 0:i.subscribe(rz(this,lv)))}get fullscreenElement(){var e;return null!=(e=rz(this,lm))?e:this}set fullscreenElement(e){var t;this.hasAttribute(r2.FULLSCREEN_ELEMENT)&&this.removeAttribute(r2.FULLSCREEN_ELEMENT),rJ(this,lm,e),null==(t=rz(this,lp))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,t,i){var a,r,n,s,o,l;if(super.attributeChangedCallback(e,t,i),e===r2.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(r2.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===r2.HOTKEYS)rz(this,lh).value=i;else if(e===r2.DEFAULT_SUBTITLES&&i!==t)null==(a=rz(this,lp))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(r2.DEFAULT_SUBTITLES)}});else if(e===r2.DEFAULT_STREAM_TYPE)null==(n=rz(this,lp))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(r2.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===r2.LIVE_EDGE_OFFSET)null==(s=rz(this,lp))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(r2.LIVE_EDGE_OFFSET)?+this.getAttribute(r2.LIVE_EDGE_OFFSET):void 0}});else if(e===r2.FULLSCREEN_ELEMENT){let e=i?null==(o=this.getRootNode())?void 0:o.getElementById(i):void 0;rJ(this,lm,e),null==(l=rz(this,lp))||l.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,t;rz(this,lp)||this.hasAttribute(r2.NO_DEFAULT_STORE)||r0(this,lE,lg).call(this),null==(e=rz(this,lp))||e.dispatch({type:"documentelementchangerequest",detail:aD}),super.connectedCallback(),rz(this,lp)&&!rz(this,lb)&&rJ(this,lb,null==(t=rz(this,lp))?void 0:t.subscribe(rz(this,lv))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),rz(this,lp)&&(null==(t=rz(this,lp))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=rz(this,lp))||i.dispatch({type:i9.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),rz(this,lb)&&(null==(a=rz(this,lb))||a.call(this),rJ(this,lb,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=rz(this,lp))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=rz(this,lp))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){nr(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=nn(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(i9).forEach(t=>{e.addEventListener(t,rz(this,lf))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(i9).forEach(t=>{e.removeEventListener(t,rz(this,lf))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),rz(this,lp)&&Object.entries(rz(this,lp).getState()).forEach(([t,i])=>{nr([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",r0(this,lA,lT))}disableHotkeys(){this.removeEventListener("keydown",r0(this,lA,lT)),this.removeEventListener("keyup",r0(this,ly,l_))}get hotkeys(){return rz(this,lh)}keyboardShortcutHandler(e){var t,i,a,r,n;let s,o,l;let d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(r2.KEYS_USED))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||rz(this,lh).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&rz(this,lh).contains("nospace")))switch(e.key){case" ":case"k":s=rz(this,lp).getState().mediaPaused?i9.MEDIA_PLAY_REQUEST:i9.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new aL.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"m":s="off"===this.mediaStore.getState().mediaVolumeLevel?i9.MEDIA_UNMUTE_REQUEST:i9.MEDIA_MUTE_REQUEST,this.dispatchEvent(new aL.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"f":s=this.mediaStore.getState().mediaIsFullscreen?i9.MEDIA_EXIT_FULLSCREEN_REQUEST:i9.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new aL.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new aL.CustomEvent(i9.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(r2.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(r2.KEYBOARD_BACKWARD_SEEK_OFFSET):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new aL.CustomEvent(i9.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(r2.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(r2.KEYBOARD_FORWARD_SEEK_OFFSET):10;o=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),l=new aL.CustomEvent(i9.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}}lh=new WeakMap,lm=new WeakMap,lp=new WeakMap,lv=new WeakMap,lb=new WeakMap,lf=new WeakMap,lE=new WeakSet,lg=function(){var e;this.mediaStore=rZ({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(r2.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(r2.DEFAULT_DURATION)?+this.getAttribute(r2.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(r2.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(r2.LIVE_EDGE_OFFSET)?+this.getAttribute(r2.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(r2.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(r2.NO_SUBTITLES_LANG_PREF)}})},ly=new WeakSet,l_=function(e){let{key:t}=e;if(!r1.includes(t)){this.removeEventListener("keyup",r0(this,ly,l_));return}this.keyboardShortcutHandler(e)},lA=new WeakSet,lT=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!r1.includes(a)){this.removeEventListener("keyup",r0(this,ly,l_));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(rz(this,lh).contains(`no${a.toLowerCase()}`)||" "===a&&rz(this,lh).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",r0(this,ly,l_),{once:!0})};let r5=Object.values(i6),r9=Object.values(i8),r4=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(aL.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,i4.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>r5.includes(e)):[]},r8=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&aL.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof aL.customElements.get(e.nodeName.toLowerCase()))&&aL.customElements.upgrade(e),r9.some(t=>t in e)},r7=e=>r8(e)||!!r4(e).length,r6=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},ne={[i6.MEDIA_SUBTITLES_LIST]:rb,[i6.MEDIA_SUBTITLES_SHOWING]:rb,[i6.MEDIA_SEEKABLE]:r6,[i6.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(r6).join(" "),[i6.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[i6.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(ac).join(" ")},[i6.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(am).join(" ")}},nt=async(e,t,i)=>{var a,r;if(e.isConnected||await af(0),"boolean"==typeof i||null==i)return aX(e,t,i);if("number"==typeof i)return aQ(e,t,i);if("string"==typeof i)return a0(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=ne[t])?void 0:a.call(ne,i))?r:i;return e.setAttribute(t,n)},ni=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},na=(e,t)=>{if(ni(e))return;let i=(e,t)=>{var i,a;r7(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>na(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!r7(e)){aL.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},nr=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=r4(e),r=t.toLowerCase();a.includes(r)&&nt(e,r,i)})},nn=(e,t,i)=>{na(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(i9.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(i9.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>na(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>na(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>na(e,t)),Array.prototype.forEach.call(r,e=>na(e,i))):"attributes"===n&&o===i4.MEDIA_CHROME_ATTRIBUTES&&(r7(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{na(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(i9.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(i9.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};aL.customElements.get("media-controller")||aL.customElements.define("media-controller",r3);var ns=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},no=(e,t,i)=>(ns(e,t,"read from private field"),i?i.call(e):t.get(e)),nl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nd=(e,t,i,a)=>(ns(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nu=(e,t,i)=>(ns(e,t,"access private method"),i);let nc={TOOLTIP_PLACEMENT:"tooltipplacement"},nh=aD.createElement("template");nh.innerHTML=`
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: hidden;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip>
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;class nm extends aL.HTMLElement{constructor(e={}){var t;if(super(),nl(this,lR),nl(this,lk,void 0),this.preventClick=!1,this.tooltipEl=null,this.tooltipContent="",nl(this,lw,e=>{this.preventClick||this.handleClick(e),setTimeout(no(this,lI),0)}),nl(this,lI,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),nl(this,lS,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",no(this,lS));return}this.preventClick||this.handleClick(e)}),nl(this,lC,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",no(this,lS));return}this.addEventListener("keyup",no(this,lS),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let i=nh.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=aD.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),e.tooltipContent&&(i.querySelector('slot[name="tooltip-content"]').innerHTML=null!=(t=e.tooltipContent)?t:"",this.tooltipContent=e.tooltipContent),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(i)}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",nc.TOOLTIP_PLACEMENT,i4.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",no(this,lw)),this.addEventListener("keydown",no(this,lC)),this.tabIndex=0}disable(){this.removeEventListener("click",no(this,lw)),this.removeEventListener("keydown",no(this,lC)),this.removeEventListener("keyup",no(this,lS)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i4.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=no(this,lk))?void 0:a.unassociateElement)||r.call(a,this),nd(this,lk,null)),i&&this.isConnected&&(nd(this,lk,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=no(this,lk))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===nc.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),no(this,lI).call(this)}connectedCallback(){var e,t,i;let{style:a}=aG(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let r=this.getAttribute(i4.MEDIA_CONTROLLER);r&&(nd(this,lk,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=no(this,lk))?void 0:t.associateElement)||i.call(t,this)),aL.customElements.whenDefined("media-tooltip").then(()=>nu(this,lR,lL).call(this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=no(this,lk))?void 0:e.unassociateElement)||t.call(e,this),nd(this,lk,null),this.removeEventListener("mouseenter",no(this,lI)),this.removeEventListener("focus",no(this,lI)),this.removeEventListener("click",no(this,lw))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return aJ(this,nc.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){a0(this,nc.TOOLTIP_PLACEMENT,e)}handleClick(e){}}lk=new WeakMap,lw=new WeakMap,lI=new WeakMap,lS=new WeakMap,lC=new WeakMap,lR=new WeakSet,lL=function(){this.addEventListener("mouseenter",no(this,lI)),this.addEventListener("focus",no(this,lI)),this.addEventListener("click",no(this,lw));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},aL.customElements.get("media-chrome-button")||aL.customElements.define("media-chrome-button",nm);let np=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,nv=aD.createElement("template");nv.innerHTML=`
  <style>
    :host([${i6.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${i6.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${i6.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${i6.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${np}</slot>
    <slot name="exit">${np}</slot>
  </slot>
`;let nb=`
  <slot name="tooltip-enter">Start airplay</slot>
  <slot name="tooltip-exit">Stop airplay</slot>
`,nf=e=>{let t=e.mediaIsAirplaying?au.EXIT_AIRPLAY():au.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};class nE extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_IS_AIRPLAYING,i6.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:nv,tooltipContent:nb,...e})}connectedCallback(){super.connectedCallback(),nf(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_IS_AIRPLAYING&&nf(this)}get mediaIsAirplaying(){return az(this,i6.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){aX(this,i6.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return aJ(this,i6.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){a0(this,i6.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new aL.CustomEvent(i9.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}aL.customElements.get("media-airplay-button")||aL.customElements.define("media-airplay-button",nE);let ng=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,ny=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,n_=aD.createElement("template");n_.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${ng}</slot>
    <slot name="off">${ny}</slot>
  </slot>
`;let nA=`
  <slot name="tooltip-enable">Enable captions</slot>
  <slot name="tooltip-disable">Disable captions</slot>
`,nT=e=>{e.setAttribute("aria-checked",r_(e).toString())};class nk extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_SUBTITLES_LIST,i6.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:n_,tooltipContent:nA,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",ad.CLOSED_CAPTIONS()),nT(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_SUBTITLES_SHOWING&&nT(this)}get mediaSubtitlesList(){return nw(this,i6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nI(this,i6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nw(this,i6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nI(this,i6.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new aL.CustomEvent(i9.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let nw=(e,t)=>{let i=e.getAttribute(t);return i?rm(i):[]},nI=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rb(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aL.customElements.get("media-captions-button")||aL.customElements.define("media-captions-button",nk);let nS=aD.createElement("template");nS.innerHTML=`
  <style>
  :host([${i6.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${i6.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${i6.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${i6.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let nC=`
  <slot name="tooltip-enter">Start casting</slot>
  <slot name="tooltip-exit">Stop casting</slot>
`,nR=e=>{let t=e.mediaIsCasting?au.EXIT_CAST():au.ENTER_CAST();e.setAttribute("aria-label",t)};class nL extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_IS_CASTING,i6.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:nS,tooltipContent:nC,...e})}connectedCallback(){super.connectedCallback(),nR(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_IS_CASTING&&nR(this)}get mediaIsCasting(){return az(this,i6.MEDIA_IS_CASTING)}set mediaIsCasting(e){aX(this,i6.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return aJ(this,i6.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){a0(this,i6.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?i9.MEDIA_EXIT_CAST_REQUEST:i9.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}aL.customElements.get("media-cast-button")||aL.customElements.define("media-cast-button",nL);var nD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nM=(e,t,i)=>(nD(e,t,"read from private field"),i?i.call(e):t.get(e)),nx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nN=(e,t,i,a)=>(nD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nO=(e,t,i)=>(nD(e,t,"access private method"),i);let nP=aD.createElement("template");nP.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;let nU="hidden";class nB extends aL.HTMLElement{constructor(){super(),nx(this,lx),nx(this,lO),nx(this,lU),nx(this,lW),nx(this,lV),nx(this,lD,null),nx(this,lM,null),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[nU,"anchor"]}handleEvent(e){switch(e.type){case"invoke":nO(this,lU,lB).call(this,e);break;case"focusout":nO(this,lW,lH).call(this,e);break;case"keydown":nO(this,lV,lq).call(this,e)}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){e===nU&&i!==t&&(this.hidden?nO(this,lO,lP).call(this):nO(this,lx,lN).call(this))}focus(){nN(this,lD,a$());let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}get keysUsed(){return["Escape","Tab"]}}lD=new WeakMap,lM=new WeakMap,lx=new WeakSet,lN=function(){var e;null==(e=nM(this,lM))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},lO=new WeakSet,lP=function(){var e;null==(e=nM(this,lM))||e.setAttribute("aria-expanded","false")},lU=new WeakSet,lB=function(e){nN(this,lM,e.relatedTarget),aq(this,e.relatedTarget)||(this.hidden=!this.hidden)},lW=new WeakSet,lH=function(e){var t;aq(this,e.relatedTarget)||(null==(t=nM(this,lD))||t.focus(),!nM(this,lM)||nM(this,lM)===e.relatedTarget||this.hidden||(this.hidden=!0))},lV=new WeakSet,lq=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=nM(this,lD))||n.focus(),this.hidden=!0))},nB.template=nP,aL.customElements.get("media-chrome-dialog")||aL.customElements.define("media-chrome-dialog",nB);var nW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nH=(e,t,i)=>(nW(e,t,"read from private field"),i?i.call(e):t.get(e)),nV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nq=(e,t,i,a)=>(nW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nF=(e,t,i)=>(nW(e,t,"access private method"),i);let n$=aD.createElement("template");n$.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress,
    #highlight,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #background,
    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance" part="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class nj extends aL.HTMLElement{constructor(){super(),nV(this,lX),nV(this,l0),nV(this,l2),nV(this,l5),nV(this,l4),nV(this,l7),nV(this,de),nV(this,di),nV(this,lF,void 0),nV(this,l$,void 0),nV(this,lj,void 0),nV(this,lK,void 0),nV(this,lG,{}),nV(this,lY,[]),nV(this,lZ,()=>{if(this.range.matches(":focus-visible")){let{style:e}=aG(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),nV(this,lQ,()=>{let{style:e}=aG(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),nV(this,lz,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n$.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),nq(this,lj,this.shadowRoot.querySelector("#startpoint")),nq(this,lK,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",i4.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i4.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=nH(this,lF))?void 0:a.unassociateElement)||r.call(a,this),nq(this,lF,null)),i&&this.isConnected&&(nq(this,lF,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nH(this,lF))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),nF(this,l0,l1).call(this)):(this.range.setAttribute(e,i),nF(this,l2,l3).call(this)))}connectedCallback(){var e,t,i;let{style:a}=aG(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),nH(this,lG).pointer=aG(this.shadowRoot,"#pointer"),nH(this,lG).progress=aG(this.shadowRoot,"#progress"),nH(this,lG).thumb=aG(this.shadowRoot,"#thumb");let r=this.getAttribute(i4.MEDIA_CONTROLLER);r&&(nq(this,lF,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=nH(this,lF))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",nH(this,lZ)),this.shadowRoot.addEventListener("focusout",nH(this,lQ)),nF(this,l0,l1).call(this),aO(this.container,nH(this,lz))}disconnectedCallback(){var e,t;nF(this,l2,l3).call(this),null==(t=null==(e=nH(this,lF))?void 0:e.unassociateElement)||t.call(e,this),nq(this,lF,null),this.shadowRoot.removeEventListener("focusin",nH(this,lZ)),this.shadowRoot.removeEventListener("focusout",nH(this,lQ)),aP(this.container,nH(this,lz))}updatePointerBar(e){var t;null==(t=nH(this,lG).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=nH(this,lG).progress)||e.style.setProperty("width",`${i}%`),null==(t=nH(this,lG).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;nH(this,lG).activeSegment=aY(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];nq(this,lY,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=aD.createElementNS("http://www.w3.org/2000/svg","rect"),c=aG(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return Math.max(0,Math.min(1,function(e,t,i,a){let r=aK(i,a),n=aK(i,{x:e,y:t}),s=aK(a,{x:e,y:t});return n>r||s>r?n>s?1:0:n/r}(e.clientX,e.clientY,nH(this,lj).getBoundingClientRect(),nH(this,lK).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":nF(this,di,da).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":nF(this,l4,l8).call(this,e);break;case"pointerdown":nF(this,l5,l9).call(this,e);break;case"pointerup":nF(this,l7,l6).call(this);break;case"pointerleave":nF(this,de,dt).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}lF=new WeakMap,l$=new WeakMap,lj=new WeakMap,lK=new WeakMap,lG=new WeakMap,lY=new WeakMap,lZ=new WeakMap,lQ=new WeakMap,lz=new WeakMap,lX=new WeakSet,lJ=function(e){let t=nH(this,lG).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=nH(this,lY).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},l0=new WeakSet,l1=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},l2=new WeakSet,l3=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=aL.window)||e.removeEventListener("pointerup",this),null==(t=aL.window)||t.removeEventListener("pointermove",this)},l5=new WeakSet,l9=function(e){var t;nq(this,l$,e.composedPath().includes(this.range)),null==(t=aL.window)||t.addEventListener("pointerup",this)},l4=new WeakSet,l8=function(e){var t;"mouse"!==e.pointerType&&nF(this,l5,l9).call(this,e),this.addEventListener("pointerleave",this),null==(t=aL.window)||t.addEventListener("pointermove",this)},l7=new WeakSet,l6=function(){var e;null==(e=aL.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},de=new WeakSet,dt=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=aL.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=nH(this,lG).activeSegment)||t.style.removeProperty("transform")},di=new WeakSet,da=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),nF(this,lX,lJ).call(this,e),this.dragging&&("mouse"!==e.pointerType||!nH(this,l$))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},aL.customElements.get("media-chrome-range")||aL.customElements.define("media-chrome-range",nj);var nK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nG=(e,t,i)=>(nK(e,t,"read from private field"),i?i.call(e):t.get(e)),nY=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nZ=(e,t,i,a)=>(nK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let nQ=aD.createElement("template");nQ.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;class nz extends aL.HTMLElement{constructor(){super(),nY(this,dr,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(nQ.content.cloneNode(!0)))}static get observedAttributes(){return[i4.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nG(this,dr))?void 0:a.unassociateElement)||r.call(a,this),nZ(this,dr,null)),i&&this.isConnected&&(nZ(this,dr,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nG(this,dr))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(i4.MEDIA_CONTROLLER);a&&(nZ(this,dr,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=nG(this,dr))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=nG(this,dr))?void 0:e.unassociateElement)||t.call(e,this),nZ(this,dr,null)}}dr=new WeakMap,aL.customElements.get("media-control-bar")||aL.customElements.define("media-control-bar",nz);var nX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nJ=(e,t,i)=>(nX(e,t,"read from private field"),i?i.call(e):t.get(e)),n0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n1=(e,t,i,a)=>(nX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let n2=aD.createElement("template");n2.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class n3 extends aL.HTMLElement{constructor(){super(),n0(this,dn,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n2.content.cloneNode(!0)))}static get observedAttributes(){return[i4.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=nJ(this,dn))?void 0:a.unassociateElement)||r.call(a,this),n1(this,dn,null)),i&&this.isConnected&&(n1(this,dn,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nJ(this,dn))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=aG(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(i4.MEDIA_CONTROLLER);r&&(n1(this,dn,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=nJ(this,dn))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=nJ(this,dn))?void 0:e.unassociateElement)||t.call(e,this),n1(this,dn,null)}}dn=new WeakMap,aL.customElements.get("media-text-display")||aL.customElements.define("media-text-display",n3);var n5=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n9=(e,t,i)=>(n5(e,t,"read from private field"),i?i.call(e):t.get(e)),n4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n8=(e,t,i,a)=>(n5(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class n7 extends n3{constructor(){super(),n4(this,ds,void 0),n8(this,ds,this.shadowRoot.querySelector("slot")),n9(this,ds).textContent=a_(0)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===i6.MEDIA_DURATION&&(n9(this,ds).textContent=a_(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return aZ(this,i6.MEDIA_DURATION)}set mediaDuration(e){aQ(this,i6.MEDIA_DURATION,e)}}ds=new WeakMap,aL.customElements.get("media-duration-display")||aL.customElements.define("media-duration-display",n7);let n6=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,se=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,st=aD.createElement("template");st.innerHTML=`
  <style>
    :host([${i6.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${i6.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${i6.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${i6.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${n6}</slot>
    <slot name="exit">${se}</slot>
  </slot>
`;let si=`
  <slot name="tooltip-enter">Enter fullscreen mode</slot>
  <slot name="tooltip-exit">Exit fullscreen mode</slot>
`,sa=e=>{let t=e.mediaIsFullscreen?au.EXIT_FULLSCREEN():au.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};class sr extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_IS_FULLSCREEN,i6.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:st,tooltipContent:si,...e})}connectedCallback(){super.connectedCallback(),sa(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_IS_FULLSCREEN&&sa(this)}get mediaFullscreenUnavailable(){return aJ(this,i6.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){a0(this,i6.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return az(this,i6.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){aX(this,i6.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?i9.MEDIA_EXIT_FULLSCREEN_REQUEST:i9.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}aL.customElements.get("media-fullscreen-button")||aL.customElements.define("media-fullscreen-button",sr);let{MEDIA_TIME_IS_LIVE:sn,MEDIA_PAUSED:ss}=i6,{MEDIA_SEEK_TO_LIVE_REQUEST:so,MEDIA_PLAY_REQUEST:sl}=i9,sd=aD.createElement("template");sd.innerHTML=`
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${sn}]:not([${ss}])) slot[name=indicator] > *,
  :host([${sn}]:not([${ss}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${sn}]:not([${ss}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let su=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?au.SEEK_LIVE():au.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class sc extends nm{static get observedAttributes(){return[...super.observedAttributes,ss,sn]}constructor(e={}){super({slotTemplate:sd,...e})}connectedCallback(){su(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),su(this)}get mediaPaused(){return az(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return az(this,i6.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){aX(this,i6.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new aL.CustomEvent(so,{composed:!0,bubbles:!0})),this.hasAttribute(ss)&&this.dispatchEvent(new aL.CustomEvent(sl,{composed:!0,bubbles:!0})))}}aL.customElements.get("media-live-button")||aL.customElements.define("media-live-button",sc);var sh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sm=(e,t,i)=>(sh(e,t,"read from private field"),i?i.call(e):t.get(e)),sp=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sv=(e,t,i,a)=>(sh(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sb="loadingdelay",sf=aD.createElement("template"),sE=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;sf.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${i6.MEDIA_LOADING}]:not([${i6.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${i6.MEDIA_LOADING}]:not([${i6.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${i6.MEDIA_LOADING}]:not([${i6.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${sE}</slot>
<div id="status" role="status" aria-live="polite">${ad.MEDIA_LOADING()}</div>
`;class sg extends aL.HTMLElement{constructor(){if(super(),sp(this,dl,void 0),sp(this,dd,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=sf.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[i4.MEDIA_CONTROLLER,i6.MEDIA_PAUSED,i6.MEDIA_LOADING,sb]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===sb&&t!==i?this.loadingDelay=Number(i):e===i4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sm(this,dl))?void 0:a.unassociateElement)||r.call(a,this),sv(this,dl,null)),i&&this.isConnected&&(sv(this,dl,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sm(this,dl))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(i4.MEDIA_CONTROLLER);a&&(sv(this,dl,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sm(this,dl))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sm(this,dl))?void 0:e.unassociateElement)||t.call(e,this),sv(this,dl,null)}get loadingDelay(){return sm(this,dd)}set loadingDelay(e){sv(this,dd,e);let{style:t}=aG(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return az(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}get mediaLoading(){return az(this,i6.MEDIA_LOADING)}set mediaLoading(e){aX(this,i6.MEDIA_LOADING,e)}}dl=new WeakMap,dd=new WeakMap,aL.customElements.get("media-loading-indicator")||aL.customElements.define("media-loading-indicator",sg);let{MEDIA_VOLUME_LEVEL:sy}=i6,s_=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,sA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,sT=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,sk=aD.createElement("template");sk.innerHTML=`
  <style>
  
  :host(:not([${sy}])) slot[name=icon] slot:not([name=high]), 
  :host([${sy}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${sy}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${sy}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${sy}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${sy}=off])) slot[name=tooltip-unmute],
  :host([${sy}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${s_}</slot>
    <slot name="low">${sA}</slot>
    <slot name="medium">${sA}</slot>
    <slot name="high">${sT}</slot>
  </slot>
`;let sw=`
  <slot name="tooltip-mute">Mute</slot>
  <slot name="tooltip-unmute">Unmute</slot>
`,sI=e=>{let t="off"===e.mediaVolumeLevel?au.UNMUTE():au.MUTE();e.setAttribute("aria-label",t)};class sS extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:sk,tooltipContent:sw,...e})}connectedCallback(){sI(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i6.MEDIA_VOLUME_LEVEL&&sI(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return aJ(this,i6.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){a0(this,i6.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?i9.MEDIA_UNMUTE_REQUEST:i9.MEDIA_MUTE_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}aL.customElements.get("media-mute-button")||aL.customElements.define("media-mute-button",sS);let sC=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,sR=aD.createElement("template");sR.innerHTML=`
  <style>
  :host([${i6.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${i6.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${i6.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${i6.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${sC}</slot>
    <slot name="exit">${sC}</slot>
  </slot>
`;let sL=`
  <slot name="tooltip-enter">Enter picture in picture mode</slot>
  <slot name="tooltip-exit">Enter picture in picture mode</slot>
`,sD=e=>{let t=e.mediaIsPip?au.EXIT_PIP():au.ENTER_PIP();e.setAttribute("aria-label",t)};class sM extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_IS_PIP,i6.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:sR,tooltipContent:sL,...e})}connectedCallback(){sD(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i6.MEDIA_IS_PIP&&sD(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return aJ(this,i6.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){a0(this,i6.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return az(this,i6.MEDIA_IS_PIP)}set mediaIsPip(e){aX(this,i6.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?i9.MEDIA_EXIT_PIP_REQUEST:i9.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}aL.customElements.get("media-pip-button")||aL.customElements.define("media-pip-button",sM);var sx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sN=(e,t,i)=>(sx(e,t,"read from private field"),i?i.call(e):t.get(e)),sO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let sP="rates",sU=[1,1.2,1.5,1.7,2],sB=aD.createElement("template");sB.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class sW extends nm{constructor(e={}){super({slotTemplate:sB,tooltipContent:al,...e}),sO(this,du,new ru(this,sP,{defaultValue:sU})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PLAYBACK_RATE,sP]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===sP&&(sN(this,du).value=i),e===i6.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",ad.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return sN(this,du)}set rates(e){e?Array.isArray(e)&&(sN(this,du).value=e.join(" ")):sN(this,du).value=""}get mediaPlaybackRate(){return aZ(this,i6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aQ(this,i6.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new aL.CustomEvent(i9.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}du=new WeakMap,aL.customElements.get("media-playback-rate-button")||aL.customElements.define("media-playback-rate-button",sW);let sH=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,sV=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,sq=aD.createElement("template");sq.innerHTML=`
  <style>
    :host([${i6.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${i6.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${i6.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${i6.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${sH}</slot>
    <slot name="pause">${sV}</slot>
  </slot>
`;let sF=`
  <slot name="tooltip-play">Play</slot>
  <slot name="tooltip-pause">Pause</slot>
`,s$=e=>{let t=e.mediaPaused?au.PLAY():au.PAUSE();e.setAttribute("aria-label",t)};class sj extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PAUSED,i6.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:sq,tooltipContent:sF,...e})}connectedCallback(){s$(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i6.MEDIA_PAUSED&&s$(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return az(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?i9.MEDIA_PLAY_REQUEST:i9.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aL.CustomEvent(e,{composed:!0,bubbles:!0}))}}aL.customElements.get("media-play-button")||aL.customElements.define("media-play-button",sj);let sK={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},sG=aD.createElement("template");sG.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let sY=e=>{e.style.removeProperty("background-image")},sZ=(e,t)=>{e.style["background-image"]=`url('${t}')`};class sQ extends aL.HTMLElement{static get observedAttributes(){return[sK.PLACEHOLDER_SRC,sK.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sG.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===sK.SRC&&(null==i?this.image.removeAttribute(sK.SRC):this.image.setAttribute(sK.SRC,i)),e===sK.PLACEHOLDER_SRC&&(null==i?sY(this.image):sZ(this.image,i))}get placeholderSrc(){return aJ(this,sK.PLACEHOLDER_SRC)}set placeholderSrc(e){a0(this,sK.SRC,e)}get src(){return aJ(this,sK.SRC)}set src(e){a0(this,sK.SRC,e)}}aL.customElements.get("media-poster-image")||aL.customElements.define("media-poster-image",sQ);var sz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sX=(e,t,i)=>(sz(e,t,"read from private field"),i?i.call(e):t.get(e)),sJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s0=(e,t,i,a)=>(sz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class s1 extends n3{constructor(){super(),sJ(this,dc,void 0),s0(this,dc,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(sX(this,dc).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return aJ(this,i6.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){a0(this,i6.MEDIA_PREVIEW_CHAPTER,e)}}dc=new WeakMap,aL.customElements.get("media-preview-chapter-display")||aL.customElements.define("media-preview-chapter-display",s1);var s2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s3=(e,t,i)=>(s2(e,t,"read from private field"),i?i.call(e):t.get(e)),s5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s9=(e,t,i,a)=>(s2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let s4=aD.createElement("template");s4.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class s8 extends aL.HTMLElement{constructor(){super(),s5(this,dh,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(s4.content.cloneNode(!0)))}static get observedAttributes(){return[i4.MEDIA_CONTROLLER,i6.MEDIA_PREVIEW_IMAGE,i6.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(i4.MEDIA_CONTROLLER);a&&(s9(this,dh,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=s3(this,dh))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=s3(this,dh))?void 0:e.unassociateElement)||t.call(e,this),s9(this,dh,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[i6.MEDIA_PREVIEW_IMAGE,i6.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===i4.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=s3(this,dh))?void 0:a.unassociateElement)||r.call(a,this),s9(this,dh,null)),i&&this.isConnected&&(s9(this,dh,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=s3(this,dh))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return aJ(this,i6.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){a0(this,i6.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(i6.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(i6.MEDIA_PREVIEW_COORDS);return}this.setAttribute(i6.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:v}=aG(this.shadowRoot,":host"),b=aG(this.shadowRoot,"img").style,f=this.shadowRoot.querySelector("img"),E=m?"min":"max";v.setProperty(`${E}-width`,"initial","important"),v.setProperty(`${E}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${n*p}px`;let g=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};f.src!==s&&(f.onload=()=>{this.imgWidth=f.naturalWidth,this.imgHeight=f.naturalHeight,g()},f.src=s,g()),g(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}dh=new WeakMap,aL.customElements.get("media-preview-thumbnail")||aL.customElements.define("media-preview-thumbnail",s8);var s7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s6=(e,t,i)=>(s7(e,t,"read from private field"),i?i.call(e):t.get(e)),oe=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ot=(e,t,i,a)=>(s7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oi extends n3{constructor(){super(),oe(this,dm,void 0),ot(this,dm,this.shadowRoot.querySelector("slot")),s6(this,dm).textContent=a_(0)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_PREVIEW_TIME&&null!=i&&(s6(this,dm).textContent=a_(parseFloat(i)))}get mediaPreviewTime(){return aZ(this,i6.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aQ(this,i6.MEDIA_PREVIEW_TIME,e)}}dm=new WeakMap,aL.customElements.get("media-preview-time-display")||aL.customElements.define("media-preview-time-display",oi);let oa={SEEK_OFFSET:"seekoffset"},or=aD.createElement("template");or.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class on extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_CURRENT_TIME,oa.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:or,tooltipContent:"Seek backward",...e})}connectedCallback(){this.seekOffset=aZ(this,oa.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===oa.SEEK_OFFSET&&(this.seekOffset=aZ(this,oa.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return aZ(this,oa.SEEK_OFFSET,30)}set seekOffset(e){aQ(this,oa.SEEK_OFFSET,e),this.setAttribute("aria-label",au.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),aW(aV(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aZ(this,i6.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aQ(this,i6.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new aL.CustomEvent(i9.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aL.customElements.get("media-seek-backward-button")||aL.customElements.define("media-seek-backward-button",on);let os={SEEK_OFFSET:"seekoffset"},oo=aD.createElement("template");oo.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class ol extends nm{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_CURRENT_TIME,os.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:oo,tooltipContent:"Seek forward",...e})}connectedCallback(){this.seekOffset=aZ(this,os.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===os.SEEK_OFFSET&&(this.seekOffset=aZ(this,os.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return aZ(this,os.SEEK_OFFSET,30)}set seekOffset(e){aQ(this,os.SEEK_OFFSET,e),this.setAttribute("aria-label",au.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),aW(aV(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aZ(this,i6.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aQ(this,i6.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new aL.CustomEvent(i9.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aL.customElements.get("media-seek-forward-button")||aL.customElements.define("media-seek-forward-button",ol);var od=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ou=(e,t,i)=>(od(e,t,"read from private field"),i?i.call(e):t.get(e)),oc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oh=(e,t,i,a)=>(od(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let om={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},op=[...Object.values(om),i6.MEDIA_CURRENT_TIME,i6.MEDIA_DURATION,i6.MEDIA_SEEKABLE],ov=["Enter"," "],ob="&nbsp;/&nbsp;",of=(e,{timesSep:t=ob}={})=>{var i,a;let r=e.hasAttribute(om.REMAINING),n=e.hasAttribute(om.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?a_(0-(l-s)):a_(s);return n?`${d}${t}${a_(l)}`:d},oE=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(om.REMAINING),s=e.hasAttribute(om.SHOW_DURATION),o=n?ay(0-(r-i)):ay(i);if(!s){e.setAttribute("aria-valuetext",o);return}let l=ay(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};class og extends n3{constructor(){super(),oc(this,dp,void 0),oh(this,dp,this.shadowRoot.querySelector("slot")),ou(this,dp).innerHTML=`${of(this)}`}static get observedAttributes(){return[...super.observedAttributes,...op,"disabled"]}connectedCallback(){let{style:e}=aG(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",ad.PLAYBACK_TIME());let t=e=>{let{key:i}=e;if(!ov.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!ov.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){op.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return az(this,om.REMAINING)}set remaining(e){aX(this,om.REMAINING,e)}get showDuration(){return az(this,om.SHOW_DURATION)}set showDuration(e){aX(this,om.SHOW_DURATION,e)}get noToggle(){return az(this,om.NO_TOGGLE)}set noToggle(e){aX(this,om.NO_TOGGLE,e)}get mediaDuration(){return aZ(this,i6.MEDIA_DURATION)}set mediaDuration(e){aQ(this,i6.MEDIA_DURATION,e)}get mediaCurrentTime(){return aZ(this,i6.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aQ(this,i6.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(i6.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(i6.MEDIA_SEEKABLE);return}this.setAttribute(i6.MEDIA_SEEKABLE,e.join(":"))}update(){let e=of(this);oE(this),e!==ou(this,dp).innerHTML&&(ou(this,dp).innerHTML=e)}}dp=new WeakMap,aL.customElements.get("media-time-display")||aL.customElements.define("media-time-display",og);var oy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o_=(e,t,i)=>(oy(e,t,"read from private field"),i?i.call(e):t.get(e)),oA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oT=(e,t,i,a)=>(oy(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ok=(e,t,i,a)=>({set _(value){oT(e,t,value,i)},get _(){return o_(e,t,a)}});class ow{constructor(e,t,i){oA(this,dv,void 0),oA(this,db,void 0),oA(this,df,void 0),oA(this,dE,void 0),oA(this,dg,void 0),oA(this,dy,void 0),oA(this,d_,void 0),oA(this,dA,void 0),oA(this,dT,0),oA(this,dk,(e=performance.now())=>{oT(this,dT,requestAnimationFrame(o_(this,dk))),oT(this,dE,performance.now()-o_(this,df));let t=1e3/this.fps;if(o_(this,dE)>t){oT(this,df,e-o_(this,dE)%t);let i=1e3/((e-o_(this,db))/++ok(this,dg)._),a=(e-o_(this,dy))/1e3/this.duration,r=o_(this,d_)+a*this.playbackRate;r-o_(this,dv).valueAsNumber>0?oT(this,dA,this.playbackRate/this.duration/i):(oT(this,dA,.995*o_(this,dA)),r=o_(this,dv).valueAsNumber+o_(this,dA)),this.callback(r)}}),oT(this,dv,e),this.callback=t,this.fps=i}start(){0===o_(this,dT)&&(oT(this,df,performance.now()),oT(this,db,o_(this,df)),oT(this,dg,0),o_(this,dk).call(this))}stop(){0!==o_(this,dT)&&(cancelAnimationFrame(o_(this,dT)),oT(this,dT,0))}update({start:e,duration:t,playbackRate:i}){let a=e-o_(this,dv).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),oT(this,d_,e),oT(this,dy,performance.now()),this.duration=t,this.playbackRate=i}}dv=new WeakMap,db=new WeakMap,df=new WeakMap,dE=new WeakMap,dg=new WeakMap,dy=new WeakMap,d_=new WeakMap,dA=new WeakMap,dT=new WeakMap,dk=new WeakMap;var oI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oS=(e,t,i)=>(oI(e,t,"read from private field"),i?i.call(e):t.get(e)),oC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oR=(e,t,i,a)=>(oI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oL=(e,t,i)=>(oI(e,t,"access private method"),i);let oD=e=>{let t=e.range,i=ay(+oN(e)),a=ay(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},oM=aD.createElement("template");oM.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${i6.MEDIA_PREVIEW_IMAGE}], [${i6.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${i6.MEDIA_PREVIEW_IMAGE}], [${i6.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${i6.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${i6.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${i6.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${i6.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${i6.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${i6.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${i6.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${i6.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${i6.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${i6.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${i6.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${i6.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let ox=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},oN=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class oO extends nj{constructor(){super(),oC(this,dN),oC(this,dP),oC(this,dW),oC(this,dV),oC(this,dF),oC(this,dj),oC(this,dG),oC(this,dZ),oC(this,dw,void 0),oC(this,dI,void 0),oC(this,dS,void 0),oC(this,dC,void 0),oC(this,dR,void 0),oC(this,dL,void 0),oC(this,dD,void 0),oC(this,dM,void 0),oC(this,dx,void 0),oC(this,dB,e=>{this.dragging||(av(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.container.appendChild(oM.content.cloneNode(!0)),oR(this,dS,this.shadowRoot.querySelectorAll('[part~="box"]')),oR(this,dR,this.shadowRoot.querySelector('[part~="preview-box"]')),oR(this,dL,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);oR(this,dD,parseInt(e.getPropertyValue("--media-box-padding-left"))),oR(this,dM,parseInt(e.getPropertyValue("--media-box-padding-right"))),oR(this,dI,new ow(this.range,oS(this,dB),60))}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PAUSED,i6.MEDIA_DURATION,i6.MEDIA_SEEKABLE,i6.MEDIA_CURRENT_TIME,i6.MEDIA_PREVIEW_IMAGE,i6.MEDIA_PREVIEW_TIME,i6.MEDIA_PREVIEW_CHAPTER,i6.MEDIA_BUFFERED,i6.MEDIA_PLAYBACK_RATE,i6.MEDIA_LOADING,i6.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",ad.SEEK()),oL(this,dN,dO).call(this),oR(this,dw,this.getRootNode()),null==(e=oS(this,dw))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),oL(this,dN,dO).call(this),null==(e=oS(this,dw))||e.removeEventListener("transitionstart",this),oR(this,dw,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===i6.MEDIA_CURRENT_TIME||e===i6.MEDIA_PAUSED||e===i6.MEDIA_ENDED||e===i6.MEDIA_LOADING||e===i6.MEDIA_DURATION||e===i6.MEDIA_SEEKABLE?(oS(this,dI).update({start:ox(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),oL(this,dN,dO).call(this),oD(this)):e===i6.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===i6.MEDIA_DURATION||e===i6.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=oS(this,dx),this.updateBar()))}get mediaChaptersCues(){return oS(this,dx)}set mediaChaptersCues(e){var t;oR(this,dx,e),this.updateSegments(null==(t=oS(this,dx))?void 0:t.map(e=>({start:ox(this,e.startTime),end:ox(this,e.endTime)})))}get mediaPaused(){return az(this,i6.MEDIA_PAUSED)}set mediaPaused(e){aX(this,i6.MEDIA_PAUSED,e)}get mediaLoading(){return az(this,i6.MEDIA_LOADING)}set mediaLoading(e){aX(this,i6.MEDIA_LOADING,e)}get mediaDuration(){return aZ(this,i6.MEDIA_DURATION)}set mediaDuration(e){aQ(this,i6.MEDIA_DURATION,e)}get mediaCurrentTime(){return aZ(this,i6.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aQ(this,i6.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return aZ(this,i6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aQ(this,i6.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(i6.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(i6.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(i6.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(i6.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(i6.MEDIA_SEEKABLE);return}this.setAttribute(i6.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return aJ(this,i6.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){a0(this,i6.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return aZ(this,i6.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aQ(this,i6.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return az(this,i6.MEDIA_ENDED)}set mediaEnded(e){aX(this,i6.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=ox(this,r)}let{style:a}=aG(this.shadowRoot,"#highlight");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=aG(this.shadowRoot,"#current-rail"),t=aG(this.shadowRoot,'[part~="current-box"]'),i=oL(this,dW,dH).call(this,oS(this,dL)),a=oL(this,dV,dq).call(this,i,this.range.valueAsNumber),r=oL(this,dF,d$).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":oL(this,dZ,dQ).call(this);break;case"pointermove":oL(this,dj,dK).call(this,e);break;case"pointerup":case"pointerleave":oL(this,dG,dY).call(this,null);break;case"transitionstart":aq(e.target,this)&&setTimeout(()=>oL(this,dN,dO).call(this),0)}}}dw=new WeakMap,dI=new WeakMap,dS=new WeakMap,dC=new WeakMap,dR=new WeakMap,dL=new WeakMap,dD=new WeakMap,dM=new WeakMap,dx=new WeakMap,dN=new WeakSet,dO=function(){oL(this,dP,dU).call(this)?oS(this,dI).start():oS(this,dI).stop()},dP=new WeakSet,dU=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&function(e,t=3){if(e.checkVisibility)return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if("0"===e.opacity||"hidden"===e.visibility||"none"===e.display)return!1;i=i.parentElement,t--}return!0}(this)},dB=new WeakMap,dW=new WeakSet,dH=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?aF(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},dV=new WeakSet,dq=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},dF=new WeakSet,d$=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+oS(this,dD)){let t=e.range.left-e.bounds.left-oS(this,dD);return`${n-i/2+t}px`}if(n>r-oS(this,dM)){let t=e.bounds.right-e.range.right-oS(this,dM);return`${n+i/2-t-e.range.width}px`}return 0},dj=new WeakSet,dK=function(e){let t=[...oS(this,dS)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){oL(this,dG,dY).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=aG(this.shadowRoot,"#preview-rail"),r=aG(this.shadowRoot,'[part~="preview-box"]'),n=oL(this,dW,dH).call(this,oS(this,dR)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=oL(this,dV,dq).call(this,n,s),l=oL(this,dF,d$).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(oS(this,dC))-Math.round(s*i))&&s>.01&&s<.99||(oR(this,dC,s*i),oL(this,dG,dY).call(this,oS(this,dC)))},dG=new WeakSet,dY=function(e){this.dispatchEvent(new aL.CustomEvent(i9.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},dZ=new WeakSet,dQ=function(){oS(this,dI).stop();let e=oN(this);this.dispatchEvent(new aL.CustomEvent(i9.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},aL.customElements.get("media-time-range")||aL.customElements.define("media-time-range",oO);let oP="placement",oU="bounds",oB=aD.createElement("template");oB.innerHTML=`
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;class oW extends aL.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;let t=this.placement;if("left"===t||"right"===t){this.style.removeProperty("--media-tooltip-offset-x");return}let i=getComputedStyle(this),a=null!=(e=aF(this,"#"+this.bounds))?e:aU(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;if(h<0){this.style.setProperty("--media-tooltip-offset-x",`${h}px`);return}if(m>0){this.style.setProperty("--media-tooltip-offset-x",`${m}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oB.content.cloneNode(!0))),this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[oP,oU]}get placement(){return aJ(this,oP)}set placement(e){a0(this,oP,e)}get bounds(){return aJ(this,oU)}set bounds(e){a0(this,oU,e)}}aL.customElements.get("media-tooltip")||aL.customElements.define("media-tooltip",oW);let oH=e=>e.mediaMuted?0:e.mediaVolume,oV=e=>`${Math.round(100*e)}%`;class oq extends nj{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_VOLUME,i6.MEDIA_MUTED,i6.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new aL.CustomEvent(i9.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",ad.VOLUME())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===i6.MEDIA_VOLUME||e===i6.MEDIA_MUTED)&&(this.range.valueAsNumber=oH(this),this.range.setAttribute("aria-valuetext",oV(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return aZ(this,i6.MEDIA_VOLUME,1)}set mediaVolume(e){aQ(this,i6.MEDIA_VOLUME,e)}get mediaMuted(){return az(this,i6.MEDIA_MUTED)}set mediaMuted(e){aX(this,i6.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return aJ(this,i6.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){a0(this,i6.MEDIA_VOLUME_UNAVAILABLE,e)}}aL.customElements.get("media-volume-range")||aL.customElements.define("media-volume-range",oq);var oF=Object.defineProperty,o$=Object.getPrototypeOf,oj=Reflect.get,oK=(e,t,i)=>t in e?oF(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,oG=(e,t,i)=>(oK(e,"symbol"!=typeof t?t+"":t,i),i),oY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oZ=(e,t,i)=>(oY(e,t,"read from private field"),i?i.call(e):t.get(e)),oQ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oz=(e,t,i,a)=>(oY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oX=(e,t,i)=>(oY(e,t,"access private method"),i),oJ=(e,t,i)=>oj(o$(e),i,t),o0=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends o0{}globalThis.DocumentFragment=e}var o1,o2,o3,o5,o9,o4,o8,o7,o6,le,lt,li,la,lr,ln,ls,lo,ll,ld,lu,lc,lh,lm,lp,lv,lb,lf,lE,lg,ly,l_,lA,lT,lk,lw,lI,lS,lC,lR,lL,lD,lM,lx,lN,lO,lP,lU,lB,lW,lH,lV,lq,lF,l$,lj,lK,lG,lY,lZ,lQ,lz,lX,lJ,l0,l1,l2,l3,l5,l9,l4,l8,l7,l6,de,dt,di,da,dr,dn,ds,dl,dd,du,dc,dh,dm,dp,dv,db,df,dE,dg,dy,d_,dA,dT,dk,dw,dI,dS,dC,dR,dL,dD,dM,dx,dN,dO,dP,dU,dB,dW,dH,dV,dq,dF,d$,dj,dK,dG,dY,dZ,dQ,dz,dX=class extends o0{},dJ=class{constructor(e,t={}){oQ(this,dz,void 0),oz(this,dz,null==t?void 0:t.detail)}get detail(){return oZ(this,dz)}initCustomEvent(){}};dz=new WeakMap;var d0={document:{createElement:function(e,t){return new dX}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(dX)},CustomEvent:dJ,EventTarget:o0,HTMLElement:dX,HTMLVideoElement:class extends o0{}},d1="undefined"==typeof window||void 0===globalThis.customElements,d2=d1?d0:globalThis;d1&&d0.document;var d3=(()=>{try{return"0.21.0"}catch{}return"UNKNOWN"})(),d5=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"];function d9(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${d7(e)}></audio>
    </slot>
    <slot></slot>
  `}function d4(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${d7(e)}></video>
    </slot>
    <slot></slot>
  `}var d8=(e,{tag:t,is:i})=>{var a,r,n,s,o,l,d,u,c,h,m,p,v,b,f,E,g;let y=null==(r=null==(a=globalThis.document)?void 0:a.createElement)?void 0:r.call(a,t,{is:i}),A=y?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i))t.push(...Object.getOwnPropertyNames(i));return t}(y):[];return n=class extends e{constructor(){super(),oQ(this,h),oQ(this,p),oQ(this,b),oQ(this,E),oQ(this,d,void 0),oQ(this,u,void 0),oQ(this,c,new Map)}static get observedAttributes(){var e,t,i;return oX(e=n,o,l).call(e),[...null!=(i=null==(t=null==y?void 0:y.constructor)?void 0:t.observedAttributes)?i:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var e,i,a;return oX(this,h,m).call(this),null!=(a=null!=(i=null!=(e=oZ(this,u))?e:this.shadowRoot.querySelector(t))?i:this.querySelector(":scope > [slot=media]"))?a:this.querySelector(t)}set nativeEl(e){oz(this,u,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",!!e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}init(){var e,a;if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),A))oX(this,b,f).call(this,e);for(let t of(this.shadowRoot.addEventListener("slotchange",this),oX(this,p,v).call(this),this.constructor.Events))null==(a=(e=this.shadowRoot).addEventListener)||a.call(e,t,this,!0)}handleEvent(e){if("slotchange"===e.type){oX(this,p,v).call(this);return}e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}attributeChangedCallback(e,t,i){oX(this,h,m).call(this),oX(this,E,g).call(this,e,t,i)}connectedCallback(){oX(this,h,m).call(this)}},s=new WeakMap,o=new WeakSet,l=function(){if(oZ(this,s))return;oz(this,s,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),A))if(!(t in this.prototype)){if("function"==typeof y[t])this.prototype[t]=function(...e){return oX(this,h,m).call(this),this.call?this.call(t,...e):this.nativeEl[t].apply(this.nativeEl,e)};else{let i={get(){var i,a,r;oX(this,h,m).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){oX(this,h,m).call(this);let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl[t]=i}),Object.defineProperty(this.prototype,t,i)}}},d=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakSet,m=function(){oZ(this,d)||(oz(this,d,!0),this.init())},p=new WeakSet,v=function(){let e=new Map(oZ(this,c));this.shadowRoot.querySelector("slot:not([name])").assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName)).forEach(t=>{var i,a;e.delete(t);let r=oZ(this,c).get(t);r||(r=t.cloneNode(),oZ(this,c).set(t,r)),null==(a=(i=this.nativeEl).append)||a.call(i,r),"track"===r.localName&&r.default&&("chapters"===r.kind||"metadata"===r.kind)&&"disabled"===r.track.mode&&(r.track.mode="hidden")}),e.forEach(e=>e.remove())},b=new WeakSet,f=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},E=new WeakSet,g=function(e,t,i){var a,r,s,o,l,d;["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?null==(r=(a=this.nativeEl).removeAttribute)||r.call(a,e):(null==(o=(s=this.nativeEl).getAttribute)?void 0:o.call(s,e))!=i&&(null==(d=(l=this.nativeEl).setAttribute)||d.call(l,e,i)))},oQ(n,o),oG(n,"getTemplateHTML",t.endsWith("audio")?d9:d4),oG(n,"shadowRootOptions",{mode:"open"}),oG(n,"Events",d5),oQ(n,s,void 0),n};function d7(e){let t="";for(let i in e){let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}var d6,ue,ut=d8(null!=(d6=globalThis.HTMLElement)?d6:class{},{tag:"video"});d8(null!=(ue=globalThis.HTMLElement)?ue:class{},{tag:"audio"});var ui=new WeakMap,ua=class extends Error{},ur=class extends Error{};function un(){var e,t;return null==(t=null==(e=globalThis.cast)?void 0:e.framework)?void 0:t.CastContext.getInstance()}function us(){var e;return null==(e=un())?void 0:e.getCurrentSession()}function uo(){var e;return null==(e=us())?void 0:e.getSessionObj().media[0]}function ul(e){return un().setOptions({...ud(),...e})}function ud(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}var uu,uc=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),uh=new WeakSet;um=()=>{var e,t,i,a;if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable)){console.debug("chrome.cast.isAvailable",null==(a=null==(i=globalThis.chrome)?void 0:i.cast)?void 0:a.isAvailable);return}uu||(uu=cast.framework,un().addEventListener(uu.CastContextEventType.CAST_STATE_CHANGED,e=>{uc.forEach(t=>{var i,a;return null==(a=(i=ui.get(t)).onCastStateChanged)?void 0:a.call(i,e)})}),un().addEventListener(uu.CastContextEventType.SESSION_STATE_CHANGED,e=>{uc.forEach(t=>{var i,a;return null==(a=(i=ui.get(t)).onSessionStateChanged)?void 0:a.call(i,e)})}),uc.forEach(e=>{var t,i;return null==(i=(t=ui.get(e)).init)?void 0:i.call(t)}))},null!=(uv=null==(up=globalThis.chrome)?void 0:up.cast)&&uv.isAvailable?null!=(ub=globalThis.cast)&&ub.framework?um():customElements.whenDefined("google-cast-button").then(um):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(um)};var um,up,uv,ub,uf,uE,ug,uy,u_,uA,uT,uk,uw,uI,uS,uC,uR,uL,uD,uM,ux,uN,uO,uP,uU,uB,uW=0,uH=class extends EventTarget{constructor(e){super(),oQ(this,uw),oQ(this,uS),oQ(this,uR),oQ(this,uD),oQ(this,ux),oQ(this,uO),oQ(this,uU),oQ(this,uf,void 0),oQ(this,uE,void 0),oQ(this,ug,void 0),oQ(this,uy,void 0),oQ(this,u_,"disconnected"),oQ(this,uA,!1),oQ(this,uT,new Set),oQ(this,uk,new WeakMap),oz(this,uf,e),uc.add(this),ui.set(this,{init:()=>oX(this,ux,uN).call(this),onCastStateChanged:()=>oX(this,uR,uL).call(this),onSessionStateChanged:()=>oX(this,uD,uM).call(this),getCastPlayer:()=>oZ(this,uw,uI)}),oX(this,ux,uN).call(this)}get state(){return oZ(this,u_)}async watchAvailability(e){if(oZ(this,uf).disableRemotePlayback)throw new ua("disableRemotePlayback attribute is present.");return oZ(this,uk).set(e,++uW),oZ(this,uT).add(e),uW}async cancelWatchAvailability(e){if(oZ(this,uf).disableRemotePlayback)throw new ua("disableRemotePlayback attribute is present.");e?oZ(this,uT).delete(e):oZ(this,uT).clear()}async prompt(){var e,t,i,a;if(oZ(this,uf).disableRemotePlayback)throw new ua("disableRemotePlayback attribute is present.");if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable))throw new ur("The RemotePlayback API is disabled on this platform.");let r=uh.has(oZ(this,uf));uh.add(oZ(this,uf)),ul(oZ(this,uf).castOptions),Object.entries(oZ(this,uy)).forEach(([e,t])=>{oZ(this,ug).controller.addEventListener(e,t)});try{await un().requestSession()}catch(e){if("cancel"===e){r||uh.delete(oZ(this,uf));return}throw Error(e)}null==(a=null==(i=ui.get(oZ(this,uf)))?void 0:i.loadOnPrompt)||a.call(i)}};uf=new WeakMap,uE=new WeakMap,ug=new WeakMap,uy=new WeakMap,u_=new WeakMap,uA=new WeakMap,uT=new WeakMap,uk=new WeakMap,uw=new WeakSet,uI=function(){if(uh.has(oZ(this,uf)))return oZ(this,ug)},uS=new WeakSet,uC=function(){uh.has(oZ(this,uf))&&(Object.entries(oZ(this,uy)).forEach(([e,t])=>{oZ(this,ug).controller.removeEventListener(e,t)}),uh.delete(oZ(this,uf)),oZ(this,uf).muted=oZ(this,ug).isMuted,oZ(this,uf).currentTime=oZ(this,ug).savedPlayerState.currentTime,!1===oZ(this,ug).savedPlayerState.isPaused&&oZ(this,uf).play())},uR=new WeakSet,uL=function(){let e=un().getCastState();if(uh.has(oZ(this,uf))&&"CONNECTING"===e&&(oz(this,u_,"connecting"),this.dispatchEvent(new Event("connecting"))),!oZ(this,uA)&&null!=e&&e.includes("CONNECT"))for(let e of(oz(this,uA,!0),oZ(this,uT)))e(!0);else if(oZ(this,uA)&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(oz(this,uA,!1),oZ(this,uT)))e(!1)},uD=new WeakSet,uM=async function(){var e,t;let{SESSION_RESUMED:i}=uu.SessionState;if(un().getSessionState()===i&&oZ(this,uf).castSrc===(null==(e=uo())?void 0:e.media.contentId)){uh.add(oZ(this,uf)),Object.entries(oZ(this,uy)).forEach(([e,t])=>{oZ(this,ug).controller.addEventListener(e,t)});try{await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{uo().getStatus(t,e,i)}))}catch(e){console.error(e)}oZ(this,uy)[uu.RemotePlayerEventType.IS_PAUSED_CHANGED](),oZ(this,uy)[uu.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},ux=new WeakSet,uN=function(){!uu||oZ(this,uE)||(oz(this,uE,!0),ul(oZ(this,uf).castOptions),oZ(this,uf).textTracks.addEventListener("change",()=>oX(this,uU,uB).call(this)),oX(this,uR,uL).call(this),oz(this,ug,new uu.RemotePlayer),new uu.RemotePlayerController(oZ(this,ug)),oz(this,uy,{[uu.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(oz(this,u_,"connected"),this.dispatchEvent(new Event("connect"))):(oX(this,uS,uC).call(this),oz(this,u_,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[uu.RemotePlayerEventType.DURATION_CHANGED]:()=>{oZ(this,uf).dispatchEvent(new Event("durationchange"))},[uu.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{oZ(this,uf).dispatchEvent(new Event("volumechange"))},[uu.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{oZ(this,uf).dispatchEvent(new Event("volumechange"))},[uu.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var e;null!=(e=oZ(this,uw,uI))&&e.isMediaLoaded&&oZ(this,uf).dispatchEvent(new Event("timeupdate"))},[uu.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{oZ(this,uf).dispatchEvent(new Event("resize"))},[uu.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{oZ(this,uf).dispatchEvent(new Event(this.paused?"pause":"play"))},[uu.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=oZ(this,uw,uI))?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&oZ(this,uf).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=oZ(this,uw,uI))?void 0:t.playerState]))},[uu.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var e;null!=(e=oZ(this,uw,uI))&&e.isMediaLoaded&&(await Promise.resolve(),oX(this,uO,uP).call(this))}}))},uO=new WeakSet,uP=function(){oX(this,uU,uB).call(this)},uU=new WeakSet,uB=async function(){var e,t,i,a,r;let n;if(!oZ(this,uw,uI))return;let s=(null!=(t=null==(e=oZ(this,ug).mediaInfo)?void 0:e.tracks)?t:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),o=[...oZ(this,uf).textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),l=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=o.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),d=l.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),u=l.find(({mode:e})=>"showing"===e),c=null!=(r=null==(a=null==(i=us())?void 0:i.getSessionObj().media[0])?void 0:a.activeTrackIds)?r:[],h=c;if(c.length&&(h=h.filter(e=>!d.includes(e))),null!=u&&u.trackId&&(h=[...h,u.trackId]),n=h=[...new Set(h)],!(c.length===n.length&&c.every(e=>n.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((t,i)=>{uo().editTracksInfo(e,t,i)})}catch(e){console.error(e)}};var uV=e=>{var t,i,a,r,n,s,o,l,d,u;return i=class extends e{constructor(){super(...arguments),oQ(this,o),oQ(this,d),oQ(this,a,{paused:!1}),oQ(this,r,ud()),oQ(this,n,void 0),oQ(this,s,void 0)}get remote(){return oZ(this,s)?oZ(this,s):globalThis.chrome?(function(){var e;let t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(null!=(e=globalThis.chrome)&&e.cast||document.querySelector(`script[src="${t}"]`))return;let i=document.createElement("script");i.src=t,document.head.append(i)}(),ui.set(this,{loadOnPrompt:()=>oX(this,d,u).call(this)}),oz(this,s,new uH(this))):super.remote}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){oZ(this,r).receiverApplicationId=i;return}if(oZ(this,o,l))switch(e){case"cast-stream-type":case"cast-src":this.load()}}async load(){var e,t;if(!oZ(this,o,l))return super.load();let i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);i.customData=this.castCustomData;let r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],s=0;r.length&&(i.tracks=r.map(e=>{let t=++s;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}];let d=new chrome.cast.media.LoadRequest(i);d.currentTime=null!=(e=super.currentTime)?e:0,d.autoplay=!oZ(this,a).paused,d.activeTrackIds=n,await (null==(t=us())?void 0:t.loadMedia(d)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(oZ(this,o,l)){oZ(this,o,l).isPaused&&(null==(e=oZ(this,o,l).controller)||e.playOrPause());return}return super.play()}pause(){var e;if(oZ(this,o,l)){oZ(this,o,l).isPaused||null==(e=oZ(this,o,l).controller)||e.playOrPause();return}super.pause()}get castOptions(){return oZ(this,r)}get castReceiver(){var e;return null!=(e=this.getAttribute("cast-receiver"))?e:void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return oZ(this,n)}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t)){console.error(`castCustomData must be nullish or an object but value was of type ${t}`);return}oz(this,n,e)}get readyState(){if(oZ(this,o,l))switch(oZ(this,o,l).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return oZ(this,o,l)?oZ(this,o,l).isPaused:super.paused}get muted(){var e;return oZ(this,o,l)?null==(e=oZ(this,o,l))?void 0:e.isMuted:super.muted}set muted(e){var t;if(oZ(this,o,l)){(e&&!oZ(this,o,l).isMuted||!e&&oZ(this,o,l).isMuted)&&(null==(t=oZ(this,o,l).controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return oZ(this,o,l)?null!=(t=null==(e=oZ(this,o,l))?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(oZ(this,o,l)){oZ(this,o,l).volumeLevel=+e,null==(t=oZ(this,o,l).controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t,i;return oZ(this,o,l)&&null!=(e=oZ(this,o,l))&&e.isMediaLoaded?null!=(i=null==(t=oZ(this,o,l))?void 0:t.duration)?i:NaN:super.duration}get currentTime(){var e,t,i;return oZ(this,o,l)&&null!=(e=oZ(this,o,l))&&e.isMediaLoaded?null!=(i=null==(t=oZ(this,o,l))?void 0:t.currentTime)?i:0:super.currentTime}set currentTime(e){var t;if(oZ(this,o,l)){oZ(this,o,l).currentTime=e,null==(t=oZ(this,o,l).controller)||t.seek();return}super.currentTime=e}},a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakMap,o=new WeakSet,l=function(){var e,t;return null==(t=null==(e=ui.get(this.remote))?void 0:e.getCastPlayer)?void 0:t.call(e)},d=new WeakSet,u=async function(){oZ(this,a).paused=oJ(i.prototype,this,"paused"),oJ(i.prototype,this,"pause").call(this),this.muted=oJ(i.prototype,this,"muted");try{await this.load()}catch(e){console.error(e)}},oG(i,"observedAttributes",[...null!=(t=e.observedAttributes)?t:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),i},uq=class extends Event{constructor(e,t){super(e),oG(this,"track"),this.track=t.track}},uF=new WeakMap;function u$(e){var t,i;let a;return null!=(t=uF.get(e))?t:(i={},(a=uF.get(e))||uF.set(e,a={}),Object.assign(a,i))}function uj(e,t){let i=e.videoTracks;u$(t).media=e,u$(t).renditionSet||(u$(t).renditionSet=new Set);let a=u$(i).trackSet;a.add(t);let r=a.size-1;r in uX.prototype||Object.defineProperty(uX.prototype,r,{get(){return[...u$(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new uq("addtrack",{track:t}))})}function uK(e){var t;let i=null==(t=u$(e).media)?void 0:t.videoTracks;i&&(u$(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new uq("removetrack",{track:e}))}))}var uG,uY,uZ,uQ,uz,uX=class extends EventTarget{constructor(){super(),oQ(this,uQ),oQ(this,uG,void 0),oQ(this,uY,void 0),oQ(this,uZ,void 0),u$(this).trackSet=new Set}[Symbol.iterator](){return oZ(this,uQ,uz).values()}get length(){return oZ(this,uQ,uz).size}getTrackById(e){var t;return null!=(t=[...oZ(this,uQ,uz)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...oZ(this,uQ,uz)].findIndex(e=>e.selected)}get onaddtrack(){return oZ(this,uG)}set onaddtrack(e){oZ(this,uG)&&(this.removeEventListener("addtrack",oZ(this,uG)),oz(this,uG,void 0)),"function"==typeof e&&(oz(this,uG,e),this.addEventListener("addtrack",e))}get onremovetrack(){return oZ(this,uY)}set onremovetrack(e){oZ(this,uY)&&(this.removeEventListener("removetrack",oZ(this,uY)),oz(this,uY,void 0)),"function"==typeof e&&(oz(this,uY,e),this.addEventListener("removetrack",e))}get onchange(){return oZ(this,uZ)}set onchange(e){oZ(this,uZ)&&(this.removeEventListener("change",oZ(this,uZ)),oz(this,uZ,void 0)),"function"==typeof e&&(oz(this,uZ,e),this.addEventListener("change",e))}};uG=new WeakMap,uY=new WeakMap,uZ=new WeakMap,uQ=new WeakSet,uz=function(){return u$(this).trackSet};var uJ=class extends Event{constructor(e,t){super(e),oG(this,"rendition"),this.rendition=t.rendition}};function u0(e){return[...u$(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...u$(e).renditionSet])}var u1,u2,u3,u5=class extends EventTarget{constructor(){super(...arguments),oQ(this,u1,void 0),oQ(this,u2,void 0),oQ(this,u3,void 0)}[Symbol.iterator](){return u0(this).values()}get length(){return u0(this).length}getRenditionById(e){var t;return null!=(t=u0(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return u0(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of u0(this).entries())i.selected=t===e}get onaddrendition(){return oZ(this,u1)}set onaddrendition(e){oZ(this,u1)&&(this.removeEventListener("addrendition",oZ(this,u1)),oz(this,u1,void 0)),"function"==typeof e&&(oz(this,u1,e),this.addEventListener("addrendition",e))}get onremoverendition(){return oZ(this,u2)}set onremoverendition(e){oZ(this,u2)&&(this.removeEventListener("removerendition",oZ(this,u2)),oz(this,u2,void 0)),"function"==typeof e&&(oz(this,u2,e),this.addEventListener("removerendition",e))}get onchange(){return oZ(this,u3)}set onchange(e){oZ(this,u3)&&(this.removeEventListener("change",oZ(this,u3)),oz(this,u3,void 0)),"function"==typeof e&&(oz(this,u3,e),this.addEventListener("change",e))}};u1=new WeakMap,u2=new WeakMap,u3=new WeakMap;var u9,u4=class{constructor(){oG(this,"src"),oG(this,"id"),oG(this,"width"),oG(this,"height"),oG(this,"bitrate"),oG(this,"frameRate"),oG(this,"codec"),oQ(this,u9,!1)}get selected(){return oZ(this,u9)}set selected(e){var t;let i;oZ(this,u9)!==e&&(oz(this,u9,e),t=this,(i=u$(t).media.videoRenditions)&&!u$(i).changeRequested&&(u$(i).changeRequested=!0,queueMicrotask(()=>{delete u$(i).changeRequested,u$(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};u9=new WeakMap;var u8,u7=class{constructor(){oG(this,"id"),oG(this,"kind"),oG(this,"label",""),oG(this,"language",""),oG(this,"sourceBuffer"),oQ(this,u8,!1)}addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new u4;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=u$(s).media.videoRenditions,u$(u).media=u$(s).media,u$(u).track=s,(l=u$(s).renditionSet).add(u),(d=l.size-1)in u5.prototype||Object.defineProperty(u5.prototype,d,{get(){return u0(this)[d]}}),queueMicrotask(()=>{s.selected&&o.dispatchEvent(new uJ("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=u$(e).media.videoRenditions,i=u$(e).track,u$(i).renditionSet.delete(e),queueMicrotask(()=>{u$(e).track.selected&&t.dispatchEvent(new uJ("removerendition",{rendition:e}))})}get selected(){return oZ(this,u8)}set selected(e){oZ(this,u8)!==e&&(oz(this,u8,e),!0===e&&function(e){var t;let i=null!=(t=u$(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(u$(i).changeRequested)return;u$(i).changeRequested=!0,queueMicrotask(()=>{delete u$(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function u6(e){return[...u$(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...u$(e).renditionSet])}u8=new WeakMap;var ce,ct,ci,ca=class extends EventTarget{constructor(){super(...arguments),oQ(this,ce,void 0),oQ(this,ct,void 0),oQ(this,ci,void 0)}[Symbol.iterator](){return u6(this).values()}get length(){return u6(this).length}getRenditionById(e){var t;return null!=(t=u6(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return u6(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of u6(this).entries())i.selected=t===e}get onaddrendition(){return oZ(this,ce)}set onaddrendition(e){oZ(this,ce)&&(this.removeEventListener("addrendition",oZ(this,ce)),oz(this,ce,void 0)),"function"==typeof e&&(oz(this,ce,e),this.addEventListener("addrendition",e))}get onremoverendition(){return oZ(this,ct)}set onremoverendition(e){oZ(this,ct)&&(this.removeEventListener("removerendition",oZ(this,ct)),oz(this,ct,void 0)),"function"==typeof e&&(oz(this,ct,e),this.addEventListener("removerendition",e))}get onchange(){return oZ(this,ci)}set onchange(e){oZ(this,ci)&&(this.removeEventListener("change",oZ(this,ci)),oz(this,ci,void 0)),"function"==typeof e&&(oz(this,ci,e),this.addEventListener("change",e))}};ce=new WeakMap,ct=new WeakMap,ci=new WeakMap;var cr,cn=class{constructor(){oG(this,"src"),oG(this,"id"),oG(this,"bitrate"),oG(this,"codec"),oQ(this,cr,!1)}get selected(){return oZ(this,cr)}set selected(e){var t;let i;oZ(this,cr)!==e&&(oz(this,cr,e),t=this,(i=u$(t).media.audioRenditions)&&!u$(i).changeRequested&&(u$(i).changeRequested=!0,queueMicrotask(()=>{delete u$(i).changeRequested,u$(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function cs(e,t){let i=e.audioTracks;u$(t).media=e,u$(t).renditionSet||(u$(t).renditionSet=new Set);let a=u$(i).trackSet;a.add(t);let r=a.size-1;r in cm.prototype||Object.defineProperty(cm.prototype,r,{get(){return[...u$(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new uq("addtrack",{track:t}))})}function co(e){var t;let i=null==(t=u$(e).media)?void 0:t.audioTracks;i&&(u$(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new uq("removetrack",{track:e}))}))}cr=new WeakMap;var cl,cd,cu,cc,ch,cm=class extends EventTarget{constructor(){super(),oQ(this,cc),oQ(this,cl,void 0),oQ(this,cd,void 0),oQ(this,cu,void 0),u$(this).trackSet=new Set}[Symbol.iterator](){return oZ(this,cc,ch).values()}get length(){return oZ(this,cc,ch).size}getTrackById(e){var t;return null!=(t=[...oZ(this,cc,ch)].find(t=>t.id===e))?t:null}get onaddtrack(){return oZ(this,cl)}set onaddtrack(e){oZ(this,cl)&&(this.removeEventListener("addtrack",oZ(this,cl)),oz(this,cl,void 0)),"function"==typeof e&&(oz(this,cl,e),this.addEventListener("addtrack",e))}get onremovetrack(){return oZ(this,cd)}set onremovetrack(e){oZ(this,cd)&&(this.removeEventListener("removetrack",oZ(this,cd)),oz(this,cd,void 0)),"function"==typeof e&&(oz(this,cd,e),this.addEventListener("removetrack",e))}get onchange(){return oZ(this,cu)}set onchange(e){oZ(this,cu)&&(this.removeEventListener("change",oZ(this,cu)),oz(this,cu,void 0)),"function"==typeof e&&(oz(this,cu,e),this.addEventListener("change",e))}};cl=new WeakMap,cd=new WeakMap,cu=new WeakMap,cc=new WeakSet,ch=function(){return u$(this).trackSet};var cp,cv=class{constructor(){oG(this,"id"),oG(this,"kind"),oG(this,"label",""),oG(this,"language",""),oG(this,"sourceBuffer"),oQ(this,cp,!1)}addRendition(e,t,i){var a;let r,n,s,o=new cn;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=u$(a).media.audioRenditions,u$(o).media=u$(a).media,u$(o).track=a,(n=u$(a).renditionSet).add(o),(s=n.size-1)in ca.prototype||Object.defineProperty(ca.prototype,s,{get(){return u6(this)[s]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new uJ("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=u$(e).media.audioRenditions,i=u$(e).track,u$(i).renditionSet.delete(e),queueMicrotask(()=>{u$(e).track.enabled&&t.dispatchEvent(new uJ("removerendition",{rendition:e}))})}get enabled(){return oZ(this,cp)}set enabled(e){let t;oZ(this,cp)!==e&&(oz(this,cp,e),(t=u$(this).media.audioTracks)&&!u$(t).changeRequested&&(u$(t).changeRequested=!0,queueMicrotask(()=>{delete u$(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};cp=new WeakMap;var cb=cg(globalThis.HTMLMediaElement,"video"),cf=cg(globalThis.HTMLMediaElement,"audio");function cE(e){if(!(null!=e&&e.prototype))return e;let t=cg(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=u$(e).videoTracks;if(!i&&(i=new uX,u$(e).videoTracks=i,cb)){let a=cb.call(null!=(t=e.nativeEl)?t:e);for(let t of a)uj(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof u7)){for(let e of a)uK(e);return}uj(e,t.track)}),a.addEventListener("removetrack",e=>{uK(e.track)})}return i}(this)}});let i=cg(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=u$(e).audioTracks;if(!i&&(i=new cm,u$(e).audioTracks=i,cf)){let a=cf.call(null!=(t=e.nativeEl)?t:e);for(let t of a)cs(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof cv)){for(let e of a)co(e);return}cs(e,t.track)}),a.addEventListener("removetrack",e=>{co(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new u7;return a.kind=e,a.label=t,a.language=i,uj(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=uK),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new cv;return a.kind=e,a.label=t,a.language=i,cs(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=co),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=u$(e).videoRenditions;return t||(u$(t=new u5).media=e,u$(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=u$(e).audioRenditions;return t||(u$(t=new ca).media=e,u$(e).audioRenditions=t),t};return e}function cg(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}d5.push("castchange","entercast","leavecast");var cy,c_,cA,cT,ck,cw,cI,cS,cC,cR,cL={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DRM_TOKEN:"drm-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},cD=Object.values(cL),cM=class extends ut{constructor(){super(),oQ(this,cC),oQ(this,cy,void 0),oQ(this,c_,void 0),oQ(this,cA,void 0),oQ(this,cT,{}),oQ(this,ck,void 0),oQ(this,cw,void 0),oQ(this,cI,void 0),oQ(this,cS,void 0),oz(this,cA,iw())}static get observedAttributes(){var e;return[...cD,...null!=(e=ut.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(cL.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tU.includes(e)?this.setAttribute(cL.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tU.join()}`):this.removeAttribute(cL.PREFER_CMCD))}get playerInitTime(){return oZ(this,cA)}get playerSoftwareName(){var e;return null!=(e=oZ(this,cI))?e:"mux-video"}set playerSoftwareName(e){oz(this,cI,e)}get playerSoftwareVersion(){var e;return null!=(e=oZ(this,cw))?e:d3}set playerSoftwareVersion(e){oz(this,cw,e)}get _hls(){var e;return null==(e=oZ(this,cy))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=iD(this.nativeEl))?e:null}get errorTranslator(){return oZ(this,cS)}set errorTranslator(e){oz(this,cS,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(cL.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(cL.TYPE,e):this.removeAttribute(cL.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(cL.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(cL.DEBUG,""):this.removeAttribute(cL.DEBUG))}get disableTracking(){return this.hasAttribute(cL.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(cL.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(cL.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(cL.DISABLE_COOKIES,""):this.removeAttribute(cL.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(cL.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(cL.START_TIME):this.setAttribute(cL.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(cL.PLAYBACK_ID)?this.getAttribute(cL.PLAYBACK_ID):null!=(e=iR(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(cL.PLAYBACK_ID,e):this.removeAttribute(cL.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(cL.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(cL.MAX_RESOLUTION,e):this.removeAttribute(cL.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(cL.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(cL.MIN_RESOLUTION,e):this.removeAttribute(cL.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(cL.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(cL.RENDITION_ORDER,e):this.removeAttribute(cL.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(cL.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(cL.PROGRAM_START_TIME):this.setAttribute(cL.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(cL.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(cL.PROGRAM_END_TIME):this.setAttribute(cL.PROGRAM_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(cL.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(cL.CUSTOM_DOMAIN,e):this.removeAttribute(cL.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(cL.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(cL.DRM_TOKEN,e):this.removeAttribute(cL.DRM_TOKEN))}get ended(){return iV(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(cL.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(cL.ENV_KEY,e):this.removeAttribute(cL.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(cL.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(cL.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(cL.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(cL.STREAM_TYPE))?e:iM(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(cL.STREAM_TYPE,e):this.removeAttribute(cL.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(cL.TARGET_LIVE_WINDOW)?+this.getAttribute(cL.TARGET_LIVE_WINDOW):ix(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(cL.TARGET_LIVE_WINDOW):this.setAttribute(cL.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(cL.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return iO(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(cL.LIVE_EDGE_OFFSET))return+this.getAttribute(cL.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(cL.LIVE_EDGE_OFFSET):this.setAttribute(cL.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return iN(this.nativeEl)}async addCuePoints(e){return t3(this.nativeEl,e)}get activeCuePoint(){return t9(this.nativeEl)}get cuePoints(){return function(e,t={label:t1}){let i=tJ(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>t5(e)):[]}(this.nativeEl)}async addChapters(e){return ie(this.nativeEl,e)}get activeChapter(){return it(this.nativeEl)}get chapters(){return function(e,t={label:t8}){var i;let a=tJ(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>t6(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(cL.PREFER_PLAYBACK);if(e===tO.MSE||e===tO.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tO.MSE||e===tO.NATIVE?this.setAttribute(cL.PREFER_PLAYBACK,e):this.removeAttribute(cL.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![cL.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...oZ(this,cT)}}set metadata(e){oz(this,cT,null!=e?e:{}),this.mux&&this.mux.emit("hb",oZ(this,cT))}get _hlsConfig(){return oZ(this,ck)}set _hlsConfig(e){oz(this,ck,e)}load(){oz(this,cy,iq(this,this.nativeEl,oZ(this,cy)))}unload(){iF(this.nativeEl,oZ(this,cy)),oz(this,cy,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(ut.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case cL.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case cL.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?oX(this,cC,cR).call(this):e&&!a?this.unload():e&&a&&(this.unload(),oX(this,cC,cR).call(this));break}case"autoplay":if(i===t)break;null==(a=oZ(this,cy))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=oZ(this,cy))||r.setPreload(i);break;case cL.PLAYBACK_ID:this.src=iS(this);break;case cL.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case cL.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case cL.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case cL.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!oZ(this,cy)&&oX(this,cC,cR).call(this)}disconnectedCallback(){this.unload()}};cy=new WeakMap,c_=new WeakMap,cA=new WeakMap,cT=new WeakMap,ck=new WeakMap,cw=new WeakMap,cI=new WeakMap,cS=new WeakMap,cC=new WeakSet,cR=async function(){oZ(this,c_)||(await oz(this,c_,Promise.resolve()),oz(this,c_,null),this.load())};var cx,cN=class extends uV(cE(cM)){constructor(){super(...arguments),oQ(this,cx,void 0)}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=oZ(this,cx))?e:this.muxCastCustomData}set castCustomData(e){oz(this,cx,e)}};cx=new WeakMap,d2.customElements.get("mux-video")||(d2.customElements.define("mux-video",cN),d2.MuxVideoElement=cN);var cO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},cP=(e,t,i)=>(cO(e,t,"read from private field"),i?i.call(e):t.get(e)),cU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},cB=(e,t,i,a)=>(cO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let cW={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof cG&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof cG?a.element[a.attributeName]=t:a.value=t}}}};class cH extends aL.DocumentFragment{constructor(e,t,i=cW){var a;super(),cU(this,mD,void 0),cU(this,mM,void 0),this.append(e.content.cloneNode(!0)),cB(this,mD,cV(this)),cB(this,mM,i),null==(a=i.createCallback)||a.call(i,this,cP(this,mD),t),i.processCallback(this,cP(this,mD),t)}update(e){cP(this,mM).processCallback(this,cP(this,mD),e)}}mD=new WeakMap,mM=new WeakMap;let cV=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new cK;for([i,a]of cF(r.value))if(i){let i=new cG(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of cF(n))if(i){let i=new cY(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new cZ(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else cV(r,t);return t},cq={},cF=e=>{let t="",i=0,a=cq[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),cq[e]=a};class c${get value(){return""}set value(e){}toString(){return this.value}}let cj=new WeakMap;class cK{constructor(){cU(this,mx,[])}[Symbol.iterator](){return cP(this,mx).values()}get length(){return cP(this,mx).length}item(e){return cP(this,mx)[e]}append(...e){for(let t of e)t instanceof cG&&cj.set(t,this),cP(this,mx).push(t)}toString(){return cP(this,mx).join("")}}mx=new WeakMap;class cG extends c${constructor(e,t,i){super(),cU(this,mB),cU(this,mN,""),cU(this,mO,void 0),cU(this,mP,void 0),cU(this,mU,void 0),cB(this,mO,e),cB(this,mP,t),cB(this,mU,i)}get attributeName(){return cP(this,mP)}get attributeNamespace(){return cP(this,mU)}get element(){return cP(this,mO)}get value(){return cP(this,mN)}set value(e){cP(this,mN)!==e&&(cB(this,mN,e),cP(this,mB,mW)&&1!==cP(this,mB,mW).length?cP(this,mO).setAttributeNS(cP(this,mU),cP(this,mP),cP(this,mB,mW).toString()):null==e?cP(this,mO).removeAttributeNS(cP(this,mU),cP(this,mP)):cP(this,mO).setAttributeNS(cP(this,mU),cP(this,mP),e))}get booleanValue(){return cP(this,mO).hasAttributeNS(cP(this,mU),cP(this,mP))}set booleanValue(e){if(cP(this,mB,mW)&&1!==cP(this,mB,mW).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}mN=new WeakMap,mO=new WeakMap,mP=new WeakMap,mU=new WeakMap,mB=new WeakSet,mW=function(){return cj.get(this)};class cY extends c${constructor(e,t){super(),cU(this,mH,void 0),cU(this,mV,void 0),cB(this,mH,e),cB(this,mV,t?[...t]:[new Text])}get replacementNodes(){return cP(this,mV)}get parentNode(){return cP(this,mH)}get nextSibling(){return cP(this,mV)[cP(this,mV).length-1].nextSibling}get previousSibling(){return cP(this,mV)[0].previousSibling}get value(){return cP(this,mV).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),cB(this,mV,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(cP(this,mV)[0].parentNode,cP(this,mV),t,this.nextSibling))}}mH=new WeakMap,mV=new WeakMap;class cZ extends cY{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let cQ={string:e=>String(e)};class cz{constructor(e){this.template=e,this.state=void 0}}let cX=new WeakMap,cJ=new WeakMap,c0={partial:(e,t)=>{t[e.expression]=new cz(e.template)},if:(e,t)=>{var i;if(c5(e.expression,t)){if(cX.get(e)!==e.template){cX.set(e,e.template);let i=new cH(e.template,t,c2);e.replace(i),cJ.set(e,i)}else null==(i=cJ.get(e))||i.update(t)}else e.replace(""),cX.delete(e),cJ.delete(e)}},c1=Object.keys(c0),c2={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof cZ){if(!n.directive){let e=c1.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=c0[n.directive])||a.call(c0,n,i);continue}let t=c5(e,i);if(t instanceof cz){cX.get(n)!==t.template?(cX.set(n,t.template),t=new cH(t.template,t.state,c2),n.value=t,cJ.set(n,t)):null==(r=cJ.get(n))||r.update(t.state);continue}t?(n instanceof cG&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof cG?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,cX.delete(n),cJ.delete(n))):n instanceof cG?n.value=void 0:(n.value=void 0,cX.delete(n),cJ.delete(n))}}},c3={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=cQ[t])?void 0:i.call(cQ,e)}};function c5(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r;let n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return c9(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return c9(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=c8(d,t))}return i}if(1===d.length)return c4(d[0])?c8(d[0].token,t):c9(e);if(2===d.length){let i=c3[null==(o=d[0])?void 0:o.token];return i&&c4(d[1])?i(c8(d[1].token,t)):c9(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=c3[i];return a&&c4(d[0])&&c4(d[2])?a(c8(d[0].token,t),"|"===i?d[2].token:c8(d[2].token,t)):c9(e)}}function c9(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function c4({type:e}){return["number","boolean","string","param"].includes(e)}function c8(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):ab(e)?parseFloat(e):t[e]}var c7=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},c6=(e,t,i)=>(c7(e,t,"read from private field"),i?i.call(e):t.get(e)),he=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ht=(e,t,i,a)=>(c7(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hi=(e,t,i)=>(c7(e,t,"access private method"),i);let ha={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},hr=aD.createElement("template");hr.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;

      /* Hide theme element until the breakpoints are available to avoid flicker. */
      visibility: hidden;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class hn extends aL.HTMLElement{constructor(){super(),he(this,mj),he(this,mG),he(this,mq,void 0),he(this,mF,void 0),he(this,m$,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(ha[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(ae.BREAKPOINTS_COMPUTED,this.render),hi(this,mj,mK).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=c6(this,mq))?e:this.constructor.template}set template(e){ht(this,m$,null),ht(this,mq,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>ha[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=ha[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(ab(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&hi(this,mG,mY).call(this)}connectedCallback(){hi(this,mG,mY).call(this)}createRenderer(){this.template&&this.template!==c6(this,mF)&&(ht(this,mF,this.template),this.renderer=new cH(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(hr.content.cloneNode(!0),this.renderer))}render(){var e;if(null==(e=this.renderer)||e.update(this.props),this.renderRoot.isConnected){let{style:e}=aG(this.renderRoot,":host");"hidden"===e.visibility&&e.removeProperty("visibility")}}}async function hs(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function ho(e){return e.split("-")[0]}mq=new WeakMap,mF=new WeakMap,m$=new WeakMap,mj=new WeakSet,mK=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},mG=new WeakSet,mY=function(){var e;let t=this.getAttribute("template");if(!t||t===c6(this,m$))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){ht(this,m$,t),ht(this,mq,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(ht(this,m$,t),hs(t).then(e=>{let t=aD.createElement("template");t.innerHTML=e,ht(this,mq,t),this.createRenderer()}).catch(console.error))},hn.observedAttributes=["template"],hn.processor=c2,aL.customElements.get("media-theme")||aL.customElements.define("media-theme",hn);class hl extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class hd extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var hu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hc=(e,t,i)=>(hu(e,t,"read from private field"),i?i.call(e):t.get(e)),hh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hm=(e,t,i,a)=>(hu(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hp=(e,t,i)=>(hu(e,t,"access private method"),i);function hv({type:e,text:t,value:i,checked:a}){let r=aD.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=aD.createElement("span");return n.textContent=t,r.append(n),r}function hb(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let hf=aD.createElement("template");hf.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let hE={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class hg extends aL.HTMLElement{constructor(){super(),hh(this,m2),hh(this,m9),hh(this,m8),hh(this,m6),hh(this,pt),hh(this,pn),hh(this,po),hh(this,pd),hh(this,pc),hh(this,pm),hh(this,pv),hh(this,pf),hh(this,pg),hh(this,p_),hh(this,pT),hh(this,pw),hh(this,pS),hh(this,mZ,null),hh(this,mQ,null),hh(this,mz,null),hh(this,mX,new Set),hh(this,mJ,void 0),hh(this,m0,!1),hh(this,m1,null),hh(this,m5,()=>{let e=hc(this,mX),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));hm(this,mX,t)}),hh(this,pa,()=>{hp(this,pn,ps).call(this),hp(this,po,pl).call(this,!1)}),hh(this,pr,()=>{hp(this,pn,ps).call(this)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),hm(this,mJ,new MutationObserver(hc(this,m5))),hc(this,mJ).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[hE.DISABLED,hE.HIDDEN,hE.STYLE,hE.ANCHOR,i4.MEDIA_CONTROLLER]}static formatMenuItemText(e){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":hp(this,m2,m3).call(this,e);break;case"invoke":hp(this,m8,m7).call(this,e);break;case"click":hp(this,pd,pu).call(this,e);break;case"toggle":hp(this,pm,pp).call(this,e);break;case"focusout":hp(this,pf,pE).call(this,e);break;case"keydown":hp(this,pg,py).call(this,e)}}connectedCallback(){var e,t;hm(this,m1,aY(this.shadowRoot,":host")),hp(this,m9,m4).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),hm(this,mZ,aB(this)),null==(t=null==(e=hc(this,mZ))?void 0:e.associateElement)||t.call(e,this),this.hidden||(aO(h_(this),hc(this,pa)),aO(this,hc(this,pr)))}disconnectedCallback(){var e,t;aP(h_(this),hc(this,pa)),aP(this,hc(this,pr)),this.disable(),null==(t=null==(e=hc(this,mZ))?void 0:e.unassociateElement)||t.call(e,this),hm(this,mZ,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===hE.HIDDEN&&i!==t?(hc(this,m0)||hm(this,m0,!0),this.hidden?hp(this,pt,pi).call(this):hp(this,m6,pe).call(this),this.dispatchEvent(new hd({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===i4.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=hc(this,mZ))?void 0:a.unassociateElement)||r.call(a,this),hm(this,mZ,null)),i&&this.isConnected&&(hm(this,mZ,aB(this)),null==(s=null==(n=hc(this,mZ))?void 0:n.associateElement)||s.call(n,this))):e===hE.DISABLED&&i!==t?null==i?this.enable():this.disable():e===hE.STYLE&&i!==t&&hp(this,m9,m4).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=aj(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(hy)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&hp(this,pS,pC).call(this,t)}focus(){if(hm(this,mQ,a$()),this.items.length){hp(this,pw,pI).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=hp(this,p_,pA).call(this,e);i&&(hp(this,pS,pC).call(this,i,"checkbox"===i.type),hc(this,mz)&&!this.hidden&&(null==(t=hc(this,mQ))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=hp(this,p_,pA).call(this,e))?t:hp(this,pT,pk).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),hp(this,pw,pI).call(this,r[s]),r[s].focus()}}function hy(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function h_(e){var t;return null!=(t=e.getAttribute("bounds")?aF(e,`#${e.getAttribute("bounds")}`):aU(e)||e.parentElement)?t:e}mZ=new WeakMap,mQ=new WeakMap,mz=new WeakMap,mX=new WeakMap,mJ=new WeakMap,m0=new WeakMap,m1=new WeakMap,m2=new WeakSet,m3=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||hc(this,m5).call(this)},m5=new WeakMap,m9=new WeakSet,m4=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},m8=new WeakSet,m7=function(e){hm(this,mz,e.relatedTarget),aq(this,e.relatedTarget)||(this.hidden=!this.hidden)},m6=new WeakSet,pe=function(){var e;null==(e=hc(this,mz))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),aO(h_(this),hc(this,pa)),aO(this,hc(this,pr))},pt=new WeakSet,pi=function(){var e;null==(e=hc(this,mz))||e.setAttribute("aria-expanded","false"),aP(h_(this),hc(this,pa)),aP(this,hc(this,pr))},pa=new WeakMap,pr=new WeakMap,pn=new WeakSet,ps=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(ho(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=ho(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=h_(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=hc(this,m1);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},po=new WeakSet,pl=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=hc(this,m1);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),hp(this,pn,ps).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),hp(this,pn,ps).call(this);a.removeProperty("--media-menu-transition-in")},pd=new WeakSet,pu=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(hc(this,pc,ph))){null==(t=hc(this,mQ))||t.focus(),this.hidden=!0;return}let i=hp(this,p_,pA).call(this,e);!i||i.hasAttribute("disabled")||(hp(this,pw,pI).call(this,i),this.handleSelect(e))},pc=new WeakSet,ph=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},pm=new WeakSet,pp=function(e){if(e.target===this)return;hp(this,pv,pb).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new hl({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);hp(this,po,pl).call(this,!0)},pv=new WeakSet,pb=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},pf=new WeakSet,pE=function(e){var t;aq(this,e.relatedTarget)||(hc(this,m0)&&(null==(t=hc(this,mQ))||t.focus()),!hc(this,mz)||hc(this,mz)===e.relatedTarget||this.hidden||(this.hidden=!0))},pg=new WeakSet,py=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(hc(this,m0)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=hc(this,mQ))||n.focus(),hc(this,m0)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},p_=new WeakSet,pA=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},pT=new WeakSet,pk=function(){return this.items.find(e=>0===e.tabIndex)},pw=new WeakSet,pI=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},pS=new WeakSet,pC=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},hg.template=hf,aL.customElements.get("media-chrome-menu")||aL.customElements.define("media-chrome-menu",hg);var hA=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hT=(e,t,i)=>(hA(e,t,"read from private field"),i?i.call(e):t.get(e)),hk=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hw=(e,t,i,a)=>(hA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hI=(e,t,i)=>(hA(e,t,"access private method"),i);let hS=aD.createElement("template");hS.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let hC={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class hR extends aL.HTMLElement{constructor(){super(),hk(this,pD),hk(this,px),hk(this,pO),hk(this,pB),hk(this,pH),hk(this,pq),hk(this,pR,!1),hk(this,pL,void 0),hk(this,pU,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=aD.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[hC.TYPE,hC.DISABLED,hC.CHECKED,hC.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),hL(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":hI(this,pD,pM).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":hI(this,pH,pV).call(this,e);break;case"keyup":hI(this,pB,pW).call(this,e)}}attributeChangedCallback(e,t,i){e===hC.CHECKED&&hL(this)&&!hT(this,pR)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===hC.TYPE&&i!==t?this.role="menuitem"+i:e===hC.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(hC.DISABLED)||this.enable(),this.role="menuitem"+this.type,hw(this,pL,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),hI(this,pq,pF).call(this)}disconnectedCallback(){this.disable(),hI(this,pq,pF).call(this),hw(this,pL,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aj(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(hC.TYPE))?e:""}set type(e){this.setAttribute(hC.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(hC.VALUE))?e:this.text}set value(e){this.setAttribute(hC.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(hL(this))return"true"===this.getAttribute("aria-checked")}set checked(e){hL(this)&&(hw(this,pR,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!hL(this)&&this.invokeTargetElement&&aq(this,e.target)&&this.invokeTargetElement.dispatchEvent(new hl({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function hL(e){return"radio"===e.type||"checkbox"===e.type}pR=new WeakMap,pL=new WeakMap,pD=new WeakSet,pM=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?hI(this,px,pN).call(this):hI(this,pO,pP).call(this))},px=new WeakSet,pN=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",hT(this,pU)),this.submenuElement.addEventListener("addmenuitem",hT(this,pU)),this.submenuElement.addEventListener("removemenuitem",hT(this,pU)),hT(this,pU).call(this)},pO=new WeakSet,pP=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",hT(this,pU)),this.submenuElement.removeEventListener("addmenuitem",hT(this,pU)),this.submenuElement.removeEventListener("removemenuitem",hT(this,pU)),hT(this,pU).call(this)},pU=new WeakMap,pB=new WeakSet,pW=function(e){let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",hI(this,pB,pW));return}this.handleClick(e)},pH=new WeakSet,pV=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",hI(this,pB,pW));return}this.addEventListener("keyup",hI(this,pB,pW),{once:!0})},pq=new WeakSet,pF=function(){var e;let t=null==(e=hT(this,pL))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},hR.template=hS,aL.customElements.get("media-chrome-menu-item")||aL.customElements.define("media-chrome-menu-item",hR);let hD=aD.createElement("template");hD.innerHTML=hg.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class hM extends hg{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aU(this).querySelector("media-settings-menu-button")}}hM.template=hD,aL.customElements.get("media-settings-menu")||aL.customElements.define("media-settings-menu",hM);let hx=aD.createElement("template");hx.innerHTML=hR.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(p$=hx.content)?void 0:p$.querySelector)&&(hx.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class hN extends hR{}hN.template=hx,aL.customElements.get("media-settings-menu-item")||aL.customElements.define("media-settings-menu-item",hN);class hO extends nm{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aj(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new hl({relatedTarget:this}))}}aL.customElements.get("media-chrome-menu-button")||aL.customElements.define("media-chrome-menu-button",hO);let hP=aD.createElement("template");hP.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class hU extends hO{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:hP,tooltipContent:"Settings"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ad.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aU(this).querySelector("media-settings-menu")}}aL.customElements.get("media-settings-menu-button")||aL.customElements.define("media-settings-menu-button",hU);var hB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hW=(e,t,i)=>(hB(e,t,"read from private field"),i?i.call(e):t.get(e)),hH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hV=(e,t,i,a)=>(hB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hq=(e,t,i)=>(hB(e,t,"access private method"),i);class hF extends hg{constructor(){super(...arguments),hH(this,pG),hH(this,pZ),hH(this,pj,[]),hH(this,pK,void 0)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_AUDIO_TRACK_LIST,i6.MEDIA_AUDIO_TRACK_ENABLED,i6.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===i6.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===i6.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;hV(this,pj,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(ap)),hq(this,pG,pY).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",hq(this,pZ,pQ))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",hq(this,pZ,pQ))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=aU(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return hW(this,pj)}set mediaAudioTrackList(e){hV(this,pj,e),hq(this,pG,pY).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=aJ(this,i6.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){a0(this,i6.MEDIA_AUDIO_TRACK_ENABLED,e)}}pj=new WeakMap,pK=new WeakMap,pG=new WeakSet,pY=function(){if(hW(this,pK)===JSON.stringify(this.mediaAudioTrackList))return;hV(this,pK,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=hv({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(hb(this,"checked-indicator")),this.defaultSlot.append(e)}},pZ=new WeakSet,pQ=function(){if(null==this.value)return;let e=new aL.CustomEvent(i9.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aL.customElements.get("media-audio-track-menu")||aL.customElements.define("media-audio-track-menu",hF);let h$=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,hj=aD.createElement("template");hj.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${h$}</slot>
`;class hK extends hO{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_AUDIO_TRACK_ENABLED,i6.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:hj,tooltipContent:"Audio"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ad.AUDIO_TRACKS())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=aU(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=aJ(this,i6.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){a0(this,i6.MEDIA_AUDIO_TRACK_ENABLED,e)}}aL.customElements.get("media-audio-track-menu-button")||aL.customElements.define("media-audio-track-menu-button",hK);var hG=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hY=(e,t,i)=>(hG(e,t,"read from private field"),i?i.call(e):t.get(e)),hZ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},hQ=(e,t,i,a)=>(hG(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),hz=(e,t,i)=>(hG(e,t,"access private method"),i);let hX=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,hJ=aD.createElement("template");hJ.innerHTML=hg.template.innerHTML+`
  <slot name="captions-indicator" hidden>${hX}</slot>`;class h0 extends hg{constructor(){super(...arguments),hZ(this,pX),hZ(this,p0),hZ(this,pz,void 0)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_SUBTITLES_LIST,i6.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_SUBTITLES_LIST&&t!==i?hz(this,pX,pJ).call(this):e===i6.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",hz(this,p0,p1))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",hz(this,p0,p1))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aU(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return h1(this,i6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){h2(this,i6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return h1(this,i6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){h2(this,i6.MEDIA_SUBTITLES_SHOWING,e)}}pz=new WeakMap,pX=new WeakSet,pJ=function(){var e;if(hY(this,pz)===JSON.stringify(this.mediaSubtitlesList))return;hQ(this,pz,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let t=!this.value,i=hv({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});for(let t of(i.prepend(hb(this,"checked-indicator")),this.defaultSlot.append(i),this.mediaSubtitlesList)){let i=hv({type:"radio",text:this.formatMenuItemText(t.label,t),value:rv(t),checked:this.value==rv(t)});i.prepend(hb(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(hb(this,"captions-indicator")),this.defaultSlot.append(i)}},p0=new WeakSet,p1=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(i6.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aL.CustomEvent(i9.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aL.CustomEvent(i9.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},h0.template=hJ;let h1=(e,t)=>{let i=e.getAttribute(t);return i?rm(i):[]},h2=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rb(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aL.customElements.get("media-captions-menu")||aL.customElements.define("media-captions-menu",h0);var h3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},h5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},h9=(e,t,i,a)=>(h3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let h4=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,h8=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,h7=aD.createElement("template");h7.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${h4}</slot>
    <slot name="off">${h8}</slot>
  </slot>
`;let h6=e=>{e.setAttribute("aria-checked",r_(e).toString())};class me extends hO{constructor(e={}){super({slotTemplate:h7,tooltipContent:"Captions",...e}),h5(this,p2,void 0),h9(this,p2,!1)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_SUBTITLES_LIST,i6.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ad.CLOSED_CAPTIONS()),h6(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_SUBTITLES_SHOWING&&h6(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=aU(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return mt(this,i6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){mi(this,i6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return mt(this,i6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){mi(this,i6.MEDIA_SUBTITLES_SHOWING,e)}}p2=new WeakMap;let mt=(e,t)=>{let i=e.getAttribute(t);return i?rm(i):[]},mi=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rb(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aL.customElements.get("media-captions-menu-button")||aL.customElements.define("media-captions-menu-button",me);var ma=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mr=(e,t,i)=>(ma(e,t,"read from private field"),i?i.call(e):t.get(e)),mn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ms=(e,t,i)=>(ma(e,t,"access private method"),i);let mo={RATES:"rates"};class ml extends hg{constructor(){super(),mn(this,p5),mn(this,p4),mn(this,p3,new ru(this,mo.RATES,{defaultValue:sU})),ms(this,p5,p9).call(this)}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PLAYBACK_RATE,mo.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i6.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===mo.RATES&&t!=i&&(mr(this,p3).value=i,ms(this,p5,p9).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",ms(this,p4,p8))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",ms(this,p4,p8))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aU(this).querySelector("media-playback-rate-menu-button")}get rates(){return mr(this,p3)}set rates(e){e?Array.isArray(e)&&(mr(this,p3).value=e.join(" ")):mr(this,p3).value="",ms(this,p5,p9).call(this)}get mediaPlaybackRate(){return aZ(this,i6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aQ(this,i6.MEDIA_PLAYBACK_RATE,e)}}p3=new WeakMap,p5=new WeakSet,p9=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=hv({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(hb(this,"checked-indicator")),this.defaultSlot.append(t)}},p4=new WeakSet,p8=function(){if(!this.value)return;let e=new aL.CustomEvent(i9.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aL.customElements.get("media-playback-rate-menu")||aL.customElements.define("media-playback-rate-menu",ml);var md=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mu=(e,t,i)=>(md(e,t,"read from private field"),i?i.call(e):t.get(e)),mc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let mh="rates",mm=[1,1.2,1.5,1.7,2],mp=aD.createElement("template");mp.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;class mv extends hO{constructor(e={}){super({slotTemplate:mp,tooltipContent:al,...e}),mc(this,p7,new ru(this,mh,{defaultValue:mm})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_PLAYBACK_RATE,mh]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===mh&&(mu(this,p7).value=i),e===i6.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",ad.PLAYBACK_RATE({playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aU(this).querySelector("media-playback-rate-menu")}get rates(){return mu(this,p7)}set rates(e){e?Array.isArray(e)&&(mu(this,p7).value=e.join(" ")):mu(this,p7).value=""}get mediaPlaybackRate(){return aZ(this,i6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aQ(this,i6.MEDIA_PLAYBACK_RATE,e)}}p7=new WeakMap,aL.customElements.get("media-playback-rate-menu-button")||aL.customElements.define("media-playback-rate-menu-button",mv);var mb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mf=(e,t,i)=>(mb(e,t,"read from private field"),i?i.call(e):t.get(e)),mE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mg=(e,t,i,a)=>(mb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),my=(e,t,i)=>(mb(e,t,"access private method"),i);class m_ extends hg{constructor(){super(...arguments),mE(this,vt),mE(this,va),mE(this,p6,[]),mE(this,ve,{})}static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_RENDITION_LIST,i6.MEDIA_RENDITION_SELECTED,i6.MEDIA_RENDITION_UNAVAILABLE,i6.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){(super.attributeChangedCallback(e,t,i),e===i6.MEDIA_RENDITION_SELECTED&&t!==i)?this.value=null!=i?i:"auto":e===i6.MEDIA_RENDITION_LIST&&t!==i?(mg(this,p6,null==i?void 0:i.split(/\s+/).map(ah)),my(this,vt,vi).call(this)):e===i6.MEDIA_HEIGHT&&t!==i&&my(this,vt,vi).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",my(this,va,vr))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",my(this,va,vr))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aU(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return mf(this,p6)}set mediaRenditionList(e){mg(this,p6,e),my(this,vt,vi).call(this)}get mediaRenditionSelected(){return aJ(this,i6.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){a0(this,i6.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return aZ(this,i6.MEDIA_HEIGHT)}set mediaHeight(e){aQ(this,i6.MEDIA_HEIGHT,e)}}p6=new WeakMap,ve=new WeakMap,vt=new WeakSet,vi=function(){if(mf(this,ve).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&mf(this,ve).mediaHeight===this.mediaHeight)return;mf(this,ve).mediaRenditionList=JSON.stringify(this.mediaRenditionList),mf(this,ve).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=hv({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(hb(this,"checked-indicator")),this.defaultSlot.append(e)}let i=hv({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t}),a=this.mediaHeight>0?`Auto (${this.mediaHeight}p)`:"Auto";i.dataset.description=a,i.prepend(hb(this,"checked-indicator")),this.defaultSlot.append(i)},va=new WeakSet,vr=function(){if(null==this.value)return;let e=new aL.CustomEvent(i9.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aL.customElements.get("media-rendition-menu")||aL.customElements.define("media-rendition-menu",m_);let mA=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,mT=aD.createElement("template");mT.innerHTML=`
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${mA}</slot>
`;class mk extends hO{static get observedAttributes(){return[...super.observedAttributes,i6.MEDIA_RENDITION_SELECTED,i6.MEDIA_RENDITION_UNAVAILABLE,i6.MEDIA_HEIGHT]}constructor(){super({slotTemplate:mT,tooltipContent:"Quality"})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",ad.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aU(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return aJ(this,i6.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){a0(this,i6.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return aZ(this,i6.MEDIA_HEIGHT)}set mediaHeight(e){aQ(this,i6.MEDIA_HEIGHT,e)}}aL.customElements.get("media-rendition-menu-button")||aL.customElements.define("media-rendition-menu-button",mk);var mw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},mI=(e,t,i)=>(mw(e,t,"read from private field"),i?i.call(e):t.get(e)),mS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},mC=(e,t,i,a)=>(mw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),mR=(e,t,i)=>(mw(e,t,"access private method"),i),mL=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends mL{}globalThis.DocumentFragment=e}var mD,mM,mx,mN,mO,mP,mU,mB,mW,mH,mV,mq,mF,m$,mj,mK,mG,mY,mZ,mQ,mz,mX,mJ,m0,m1,m2,m3,m5,m9,m4,m8,m7,m6,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pb,pf,pE,pg,py,p_,pA,pT,pk,pw,pI,pS,pC,pR,pL,pD,pM,px,pN,pO,pP,pU,pB,pW,pH,pV,pq,pF,p$,pj,pK,pG,pY,pZ,pQ,pz,pX,pJ,p0,p1,p2,p3,p5,p9,p4,p8,p7,p6,ve,vt,vi,va,vr,vn,vs=class extends mL{},vo=class{constructor(e,t={}){mS(this,vn,void 0),mC(this,vn,null==t?void 0:t.detail)}get detail(){return mI(this,vn)}initCustomEvent(){}};vn=new WeakMap;var vl={document:{createElement:function(e,t){return new vs}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(vs)},CustomEvent:vo,EventTarget:mL,HTMLElement:vs,HTMLVideoElement:class extends mL{}},vd="undefined"==typeof window||void 0===globalThis.customElements,vu=vd?vl:globalThis,vc=vd?vl.document:globalThis.document,vh={code:"en"};function vm(e,t=!0){var i;return new vp(t&&null!=(i=null==vh?void 0:vh[e])?i:e,t?vh.code:"en")}var vp=class{constructor(e,t=(e=>null!=(e=vh.code)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}};function vv(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function vb(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function vf(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function vE(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}function vg(e){let t=(null!=e?e:"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}var vy,v_,vA,vT=(e,t)=>!!e&&!!t&&(!!e.contains(t)||vT(e,t.getRootNode().host)),vk="mux.com",vw=(()=>{try{return"3.0.0"}catch{}return"UNKNOWN"})(),vI=(e,{token:t,customDomain:i=vk,thumbnailTime:a,programTime:r}={})=>{let n=null==t?a:void 0,{aud:s}=vg(t);if(!(t&&"t"!==s))return`https://image.${i}/${e}/thumbnail.webp${vE({token:t,time:n,program_time:r})}`},vS=(e,{token:t,customDomain:i=vk,programStartTime:a,programEndTime:r}={})=>{let{aud:n}=vg(t);if(!(t&&"s"!==n))return`https://image.${i}/${e}/storyboard.vtt${vE({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},vC=e=>{if(e){if([tN.LIVE,tN.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tN.LIVE}},vR={crossorigin:"crossOrigin",playsinline:"playsInline"},vL=class{constructor(e,t){mS(this,vy,void 0),mS(this,v_,void 0),mS(this,vA,[]),mC(this,vy,e),mC(this,v_,t)}[Symbol.iterator](){return mI(this,vA).values()}get length(){return mI(this,vA).length}get value(){var e;return null!=(e=mI(this,vA).join(" "))?e:""}set value(e){var t;e!==this.value&&(mC(this,vA,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return mI(this,vA)[e]}values(){return mI(this,vA).values()}keys(){return mI(this,vA).keys()}forEach(e){mI(this,vA).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||mI(this,vA).push(e)}),(""!==this.value||null!=(t=mI(this,vy))&&t.hasAttribute(`${mI(this,v_)}`))&&null!=(i=mI(this,vy))&&i.setAttribute(`${mI(this,v_)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{mI(this,vA).splice(mI(this,vA).indexOf(e),1)}),null==(t=mI(this,vy))||t.setAttribute(`${mI(this,v_)}`,`${this.value}`)}contains(e){return mI(this,vA).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};vy=new WeakMap,v_=new WeakMap,vA=new WeakMap;var vD=`[mux-player ${vw}]`;function vM(...e){console.warn(vD,...e)}function vx(...e){console.error(vD,...e)}function vN(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${vm("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),vM(i)}var vO,vP={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},vU={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},vB=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),vW=d5.filter(e=>"error"!==e),vH=Object.values(vP).filter(e=>![vP.PLAYSINLINE].includes(e)),vV=Object.values(vU),vq=class extends vu.HTMLElement{constructor(){super(),mS(this,vO,new WeakMap),new MutationObserver(e=>{for(let t of e)"childList"===t.type&&(t.removedNodes.forEach(e=>{var t;null==(t=mI(this,vO).get(e))||t.remove()}),t.addedNodes.forEach(e=>{var t;null!=e&&e.slot||null==(t=this.media)||t.append(v$(mI(this,vO),e))}))}).observe(this,{childList:!0,subtree:!0})}static get observedAttributes(){return[...vH,...vV]}init(){this.querySelectorAll(":scope > :not([slot])").forEach(e=>{var t;null==(t=this.media)||t.append(v$(mI(this,vO),e))}),vW.forEach(e=>{var t;null==(t=this.media)||t.addEventListener(e,e=>{this.dispatchEvent(new Event(e.type))})})}attributeChangedCallback(e,t,i){var a,r;switch(e){case vU.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case vU.VOLUME:{let e=null!=(a=vf(i))?a:1;this.media&&(this.media.volume=e);return}case vU.PLAYBACKRATE:{let e=null!=(r=vf(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:vB}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:vB}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=vf(this.getAttribute(vU.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(vU.PLAYBACKRATE,`${e}`):this.removeAttribute(vU.PLAYBACKRATE)}get crossOrigin(){return vF(this,vP.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(vP.CROSSORIGIN,`${e}`)}get autoplay(){return null!=vF(this,vP.AUTOPLAY)}set autoplay(e){e?this.setAttribute(vP.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(vP.AUTOPLAY)}get loop(){return null!=vF(this,vP.LOOP)}set loop(e){e?this.setAttribute(vP.LOOP,""):this.removeAttribute(vP.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=vF(this,vP.MUTED)}set defaultMuted(e){e?this.setAttribute(vP.MUTED,""):this.removeAttribute(vP.MUTED)}get playsInline(){return null!=vF(this,vP.PLAYSINLINE)}set playsInline(e){vx("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(vP.PRELOAD,e):this.removeAttribute(vP.PRELOAD)}};function vF(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}function v$(e,t){let i=e.get(t);return i||(i=t.cloneNode(),e.set(t,i)),i}vO=new WeakMap;var vj=vq,vK=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-selectmenu-display: var(--captions-selectmenu, var(--media-captions-button-display));
  --media-rendition-selectmenu-display: var(--rendition-selectmenu);
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-selectmenu-display: var(--playback-rate-selectmenu);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--top-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--top-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--top-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-playback-rate-button-display, var(--top-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--center-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--center-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--center-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--center-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--bottom-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--bottom-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--bottom-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,vG=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,vY=vc.createElement("template");vY.innerHTML=`
  <style>
    ${vG}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var vZ=class extends vu.HTMLElement{constructor(){var e;super(),this.attachShadow({mode:"open"}),null==(e=this.shadowRoot)||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),vQ(this)}close(){this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),this._previouslyFocusedElement instanceof HTMLElement&&this._previouslyFocusedElement.focus())}attributeChangedCallback(e,t,i){"open"===e&&t!==i&&(null!=i?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&vQ(this)}};function vQ(e){let t=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(e.dispatchEvent(t),t.defaultPrevented)return;let i=e.querySelector("[autofocus]:not([disabled])");!i&&e.tabIndex>=0&&(i=e),i||(i=function e(t){let i=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=null==t?void 0:t.querySelector(i.join(", "));if(!a&&"attachShadow"in Element.prototype){let i=(null==t?void 0:t.querySelectorAll("*"))||[];for(let t=0;t<i.length&&!(i[t].tagName&&i[t].shadowRoot&&(a=e(i[t].shadowRoot)));t++);}return a}(e.shadowRoot)),e._previouslyFocusedElement=vc.activeElement,vc.activeElement instanceof HTMLElement&&vc.activeElement.blur(),e.addEventListener("transitionend",()=>{i instanceof HTMLElement&&i.focus({preventScroll:!0})},{once:!0})}vZ.styles=vG,vZ.template=vY,vZ.observedAttributes=["open"],vu.customElements.get("media-dialog")||(vu.customElements.define("media-dialog",vZ),vu.MediaDialog=vZ);var vz=vZ,vX=vc.createElement("template");vX.innerHTML=`
  <style>
    ${vz.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var vJ=class extends vz{constructor(){var e,t;super(),null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector(".close"))||t.addEventListener("click",()=>{this.close()})}};vJ.template=vX,vu.customElements.get("mxp-dialog")||(vu.customElements.define("mxp-dialog",vJ),vu.MxpDialog=vJ);var v0=new WeakMap,v1=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=v0.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=v0.get(this.element);e&&e.delete(this.type)}}static for(t){v0.has(t.element)||v0.set(t.element,new Map);let i=t.attributeName.slice(2),a=v0.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},v2=new Map,v3=new WeakMap,v5=new WeakMap,v9=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(v2.has(this.stringsKey))return v2.get(this.stringsKey);{let e=vc.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),v2.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(v3.get(e)!==i){v3.set(e,i);let t=new cH(i,this.values,this.processor);v5.set(e,t),e instanceof cY?e.replace(...t.children):e.appendChild(t);return}let a=v5.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},v4={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof cG&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof cG){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof cG&&r.attributeName.startsWith("on")&&(v1.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof cY&&(r.replace(""),1)||n instanceof v9&&r instanceof cY&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof cY&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof cG){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function v8(e,...t){return new v9(e,t,v4)}var v7=e=>{let{tokens:t}=e;return t.drm?":host { --_cast-button-drm-display: none; }":""},v6=e=>v8`
  <style>
    ${v7(e)}
    ${vK}
  </style>
  ${bi(e)}
`,be=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===vC(e.streamType)&&(t+=" noarrowleft noarrowright"),t},bt=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",SELECTMENU:"selectmenu",LISTBOX:"listbox",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),bi=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,b,f,E,g,y,A,T,k,w,I,S,C,R,L,D,M,x,N,O,P,U,B,W,H;let V;return v8`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${be(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||e.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(tN.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(H={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor},V="",Object.entries(H).forEach(([e,t])=>{null!=t&&(V+=`${vv(e)}: ${t}; `)}),r=V?V.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    exportparts="${bt}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(h=e.targetLiveWindow)&&h}"
      stream-type="${null!=(m=vC(e.streamType))&&m}"
      crossorigin="${null!=(p=e.crossOrigin)?p:""}"
      playsinline
      autoplay="${null!=(v=e.autoplay)&&v}"
      muted="${null!=(b=e.muted)&&b}"
      loop="${null!=(f=e.loop)&&f}"
      preload="${null!=(E=e.preload)&&E}"
      debug="${null!=(g=e.debug)&&g}"
      prefer-cmcd="${null!=(y=e.preferCmcd)&&y}"
      disable-tracking="${null!=(A=e.disableTracking)&&A}"
      disable-cookies="${null!=(T=e.disableCookies)&&T}"
      prefer-playback="${null!=(k=e.preferPlayback)&&k}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(w=e.beaconCollectionDomain)&&w}"
      player-software-name="${null!=(I=e.playerSoftwareName)&&I}"
      player-software-version="${null!=(S=e.playerSoftwareVersion)&&S}"
      env-key="${null!=(C=e.envKey)&&C}"
      custom-domain="${null!=(R=e.customDomain)&&R}"
      src="${e.src?e.src:!!e.playbackId&&iS(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&iS(e)}"
      cast-receiver="${null!=(L=e.castReceiver)&&L}"
      drm-token="${null!=(M=null==(D=e.tokens)?void 0:D.drm)&&M}"
      exportparts="video"
    >
      ${e.storyboard?v8`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:v8``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster&&e.poster}"
        placeholdersrc="${null!=(x=e.placeholder)&&x}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(N=e.isDialogOpen)&&N}"
      onclose="${e.onCloseErrorDialog}"
      oninitfocus="${e.onInitFocusDialog}"
    >
      ${null!=(O=e.dialog)&&O.title?v8`<h3>${e.dialog.title}</h3>`:v8``}
      <p>
        ${null==(P=e.dialog)?void 0:P.message}
        ${null!=(U=e.dialog)&&U.linkUrl?v8`<a
              href="${e.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(B=e.dialog.linkText)?B:""} ${vm("(opens in a new window)")}"
              >${null!=(W=e.dialog.linkText)?W:e.dialog.linkUrl}</a
            >`:v8``}
      </p>
    </mxp-dialog>
  </media-theme>
`};function ba(e,t,i,a,r){var n,s,o;let l={},d={};switch(e.code){case tL.MEDIA_ERR_NETWORK:switch(l.title=vm("Network Error",r),l.message=e.message,null==(n=e.data)?void 0:n.response.code){case 412:l.title=vm("Video is not currently available",r),l.message=vm("The live stream or video file are not yet ready.",r),d.message=vm("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),d.file="412-not-playable.md";break;case 404:l.title=vm("Video does not exist",r),l.message="",d.message=vm("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),d.file="404-not-found.md";break;case 403:{if(l.title=vm("Invalid playback URL",r),l.message=vm("The video URL or playback-token are formatted with incorrect or incomplete information.",r),d.message=vm("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),d.file="missing-signed-tokens.md",!a)break;let{exp:e,aud:t,sub:n}=vg(a),s=Date.now()>1e3*e,o=n!==i,u="v"!==t,c={timeStyle:"medium",dateStyle:"medium"};if(s){l.title=vm("Video URL has expired",r),l.message=vm("The video’s secured playback-token has expired.",r),d.message=vm("The video’s secured playback-token has expired.",r),d.context=vm("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(vh.code,c).format(1e3*e),currentDate:new Intl.DateTimeFormat(vh.code,c).format(Date.now())}),d.file="403-expired-token.md";break}if(o){l.title=vm("Video URL is formatted incorrectly",r),l.message=vm("The video’s playback ID does not match the one encoded in the playback-token.",r),d.message=vm("The video’s playback ID does not match the one encoded in the playback-token.",r),d.context=vm("Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}",r).format({playbackId:i,tokenPlaybackId:n}),d.file="403-playback-id-mismatch.md";break}if(u){l.title=vm("Video URL is formatted incorrectly",r),l.message=vm("The playback-token is formatted with incorrect information.",r),d.message=vm("The playback-token is formatted with incorrect information.",r),d.context=vm("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:t}),d.file="403-incorrect-aud-value.md";break}d.message=vm("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),d.file="403-malformatted-token.md"}}break;case tL.MEDIA_ERR_DECODE:{let{message:t}=e;l={title:vm("Media Error",r),message:t},d.file="media-decode-error.md";break}case tL.MEDIA_ERR_SRC_NOT_SUPPORTED:{let n=null==(o=null==(s=e.data)?void 0:s.response)?void 0:o.code;if(n>=400&&n<500){e.code=tL.MEDIA_ERR_NETWORK,e.data={response:{code:n}},{dialog:l,devlog:d}=ba(e,t,i,a);break}l={title:vm("Source Not Supported",r),message:e.message},d.file="media-src-not-supported.md";break}default:l={title:vm("Error",r),message:e.message}}return t&&(l={title:vm("Your device appears to be offline",r),message:vm("Check your internet connection and try reloading this video.",r)}),{dialog:l,devlog:d}}var br=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-selectmenu: none;
      --bottom-pip-button: none;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,bn=vc.createElement("template");"innerHTML"in bn&&(bn.innerHTML=br);var bs,bo,bl=class extends hn{};bl.template=null==(bo=null==(bs=bn.content)?void 0:bs.children)?void 0:bo[0],vu.customElements.get("media-theme-gerwig")||vu.customElements.define("media-theme-gerwig",bl);var bd={SRC:"src",POSTER:"poster"},bu={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips"},bc=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function bh(e){let t=e.hasAttribute(bu.TITLE)?{video_title:e.getAttribute(bu.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}var bm,bp,bv,bb,bf,bE,bg,by,b_,bA,bT,bk,bw,bI,bS,bC,bR,bL,bD,bM,bx,bN=Object.values(cL),bO=Object.values(bd),bP=Object.values(bu),bU={dialog:void 0,isDialogOpen:!1},bB={redundant_streams:!0},bW=class extends vj{constructor(){super(),mS(this,bE),mS(this,by),mS(this,bA),mS(this,bk),mS(this,bI),mS(this,bC),mS(this,bL),mS(this,bM),mS(this,bm,!1),mS(this,bp,{}),mS(this,bv,!0),mS(this,bb,new vL(this,"hotkeys")),mS(this,bf,{...bU,onCloseErrorDialog:()=>mR(this,bA,bT).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{vT(this,vc.activeElement)||e.preventDefault()}}),this.attachShadow({mode:"open"}),mR(this,by,b_).call(this),this.isConnected&&mR(this,bE,bg).call(this)}static get observedAttributes(){var e;return[...null!=(e=vj.observedAttributes)?e:[],...bO,...bN,...bP]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=bh(this))}attributeChangedCallback(e,t,i){var a;switch(mR(this,bE,bg).call(this),super.attributeChangedCallback(e,t,i),e){case bu.HOTKEYS:mI(this,bb).value=i;break;case bu.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&vM(vm("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break;case bu.THUMBNAIL_TOKEN:if(i){let{aud:e}=vg(i);"t"!==e&&vM(vm("The provided thumbnail-token should have audience value 'd' instead of '{aud}'.").format({aud:e}))}break;case bu.STORYBOARD_TOKEN:if(i){let{aud:e}=vg(i);"s"!==e&&vM(vm("The provided storyboard-token should have audience value 'd' instead of '{aud}'.").format({aud:e}))}break;case bu.DRM_TOKEN:if(i){let{aud:e}=vg(i);"d"!==e&&vM(vm("The provided drm-token should have audience value 'd' instead of '{aud}'.").format({aud:e}))}break;case cL.PLAYBACK_ID:null!=i&&i.includes("?token")&&vx(vm("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case cL.STREAM_TYPE:i&&![tN.LIVE,tN.ON_DEMAND,tN.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:vN({file:"invalid-stream-type.md",message:vm("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tN.LIVE?null==this.getAttribute(bu.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[cL.PLAYBACK_ID,bd.SRC,bu.PLAYBACK_TOKEN].includes(e)&&t!==i&&mC(this,bf,{...mI(this,bf),...bU}),mR(this,bk,bw).call(this,{[null!=(a=vR[e])?a:vb(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(cL.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tU.includes(e)?this.setAttribute(cL.PREFER_CMCD,e):vM(`Invalid value for preferCmcd. Must be one of ${tU.join()}`):this.removeAttribute(cL.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(i6.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(i6.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(bu.THEME))?e:"gerwig"}set theme(e){this.setAttribute(bu.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(bc.includes(i))continue;let a=e.getAttribute(i);t[vb(i)]=""===a||a}return t}set themeProps(e){var t,i;mR(this,bE,bg).call(this);let a={...this.themeProps,...e};for(let r in a){if(bc.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(vv(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(vv(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(cL.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(cL.PLAYBACK_ID,e):this.removeAttribute(cL.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=bH(this,bd.SRC))?e:void 0:null!=(t=this.getAttribute(bd.SRC))?t:void 0}set src(e){e?this.setAttribute(bd.SRC,e):this.removeAttribute(bd.SRC)}get poster(){var e;let t=this.getAttribute(bd.POSTER);if(null!=t)return t;let{tokens:i}=this;if(i.playback&&!i.thumbnail){vM("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return vI(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(e){e||""===e?this.setAttribute(bd.POSTER,e):this.removeAttribute(bd.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(bu.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(bu.STORYBOARD_SRC,e):this.removeAttribute(bu.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tN.LIVE,tN.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:vS(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(bu.AUDIO)}set audio(e){if(!e){this.removeAttribute(bu.AUDIO);return}this.setAttribute(bu.AUDIO,"")}get hotkeys(){return mI(this,bb)}get nohotkeys(){return this.hasAttribute(bu.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(bu.NOHOTKEYS);return}this.setAttribute(bu.NOHOTKEYS,"")}get thumbnailTime(){return vf(this.getAttribute(bu.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(bu.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(bu.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(bu.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=bH(this,bu.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(bu.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(bu.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vu.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(bu.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(bu.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vu.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(bu.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(bu.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=vu.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(bu.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(bu.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(bu.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(bu.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(bu.PLAYBACK_RATES))return this.getAttribute(bu.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(bu.PLAYBACK_RATES);return}this.setAttribute(bu.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=vf(this.getAttribute(bu.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(bu.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=vf(this.getAttribute(bu.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(bu.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(bu.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(bu.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(bu.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return vf(this.getAttribute(bu.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(bu.DEFAULT_DURATION):this.setAttribute(bu.DEFAULT_DURATION,`${e}`)}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(cL.PLAYER_SOFTWARE_NAME))?e:"mux-player"}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(cL.PLAYER_SOFTWARE_VERSION))?e:vw}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(cL.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(cL.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(cL.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(cL.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(cL.MAX_RESOLUTION,e):this.removeAttribute(cL.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(cL.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(cL.MIN_RESOLUTION,e):this.removeAttribute(cL.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(cL.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(cL.RENDITION_ORDER,e):this.removeAttribute(cL.RENDITION_ORDER))}get programStartTime(){return vf(this.getAttribute(cL.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(cL.PROGRAM_START_TIME):this.setAttribute(cL.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return vf(this.getAttribute(cL.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(cL.PROGRAM_END_TIME):this.setAttribute(cL.PROGRAM_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(bu.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(bu.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):bB}set extraSourceParams(e){null==e?this.removeAttribute(bu.EXTRA_SOURCE_PARAMS):this.setAttribute(bu.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(cL.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(cL.CUSTOM_DOMAIN,e):this.removeAttribute(cL.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=bH(this,cL.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(cL.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(bu.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(bu.NO_VOLUME_PREF,""):this.removeAttribute(bu.NO_VOLUME_PREF)}get debug(){return null!=bH(this,cL.DEBUG)}set debug(e){e?this.setAttribute(cL.DEBUG,""):this.removeAttribute(cL.DEBUG)}get disableTracking(){return null!=bH(this,cL.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(cL.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=bH(this,cL.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(cL.DISABLE_COOKIES,""):this.removeAttribute(cL.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(cL.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tN.UNKNOWN}set streamType(e){this.setAttribute(cL.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(bu.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(bu.DEFAULT_STREAM_TYPE))?i:tN.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(bu.DEFAULT_STREAM_TYPE,e):this.removeAttribute(bu.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(bu.TARGET_LIVE_WINDOW)?+this.getAttribute(bu.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(bu.TARGET_LIVE_WINDOW):this.setAttribute(bu.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return vf(bH(this,cL.START_TIME))}set startTime(e){this.setAttribute(cL.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(cL.PREFER_PLAYBACK);if(e===tO.MSE||e===tO.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tO.MSE||e===tO.NATIVE?this.setAttribute(cL.PREFER_PLAYBACK,e):this.removeAttribute(cL.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(mR(this,bE,bg).call(this),!this.media){vx("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...bh(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(mR(this,bE,bg).call(this),!this.media){vx("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(mR(this,bE,bg).call(this),!this.media){vx("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(mR(this,bE,bg).call(this),!this.media){vx("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(bu.PLAYBACK_TOKEN),t=this.getAttribute(bu.DRM_TOKEN),i=this.getAttribute(bu.THUMBNAIL_TOKEN),a=this.getAttribute(bu.STORYBOARD_TOKEN);return{...mI(this,bp),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){mC(this,bp,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(bu.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(bu.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(bu.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(bu.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(bu.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(bu.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(bu.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(bu.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return tX(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(bu.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(bu.CAST_RECEIVER,e):this.removeAttribute(bu.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media){vx("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(bu.NO_TOOLTIPS)}set noTooltips(e){if(!e){this.removeAttribute(bu.NO_TOOLTIPS);return}this.setAttribute(bu.NO_TOOLTIPS,"")}};function bH(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}bm=new WeakMap,bp=new WeakMap,bv=new WeakMap,bb=new WeakMap,bf=new WeakMap,bE=new WeakSet,bg=function(){var e,t,i,a;if(!mI(this,bm)){mC(this,bm,!0),mR(this,bk,bw).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof vu.HTMLElement))throw""}catch{vx("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof cN))throw""}catch{vx("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof r3))throw""}catch{vx("<media-controller> failed to upgrade!")}this.init(),mR(this,bI,bS).call(this),mR(this,bC,bR).call(this),mR(this,bL,bD).call(this),mC(this,bv,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(ri.USER_INACTIVE))||t),mR(this,bM,bx).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>mR(this,bk,bw).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>mR(this,bk,bw).call(this))}},by=new WeakSet,b_=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},bA=new WeakSet,bT=function(e){Object.assign(mI(this,bf),e),mR(this,bk,bw).call(this)},bk=new WeakSet,bw=function(e={}){var t,i,a;let r;(function(e,t){e.renderInto(t)})(v6((t={...mI(this,bf),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(bu.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=vu.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(bu.NOHOTKEYS),hotKeys:this.getAttribute(bu.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(cL.TARGET_LIVE_WINDOW),streamType:vC(this.getAttribute(cL.STREAM_TYPE)),primaryColor:this.getAttribute(bu.PRIMARY_COLOR),secondaryColor:this.getAttribute(bu.SECONDARY_COLOR),accentColor:this.getAttribute(bu.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(r=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(r).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(bu.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(cL.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(bu.TITLE),novolumepref:this.hasAttribute(bu.NO_VOLUME_PREF),castReceiver:this.castReceiver,...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},bI=new WeakSet,bS=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(bc.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},bC=new WeakSet,bR=function(){var e;this.addEventListener("error",e=>{let{detail:t}=e;if(t instanceof tL||(t=new tL(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){vM(t),t.data&&vM(`${t.name} data:`,t.data);return}let{dialog:i,devlog:a}=ba(t,!window.navigator.onLine,this.playbackId,this.playbackToken);a.message&&vN(a),vx(t),t.data&&vx(`${t.name} data:`,t.data),mR(this,bA,bT).call(this,{isDialogOpen:!0,dialog:i})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tL))return e;let{devlog:r}=ba(null==(i=this.media)?void 0:i.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new tL(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},bL=new WeakSet,bD=function(){var e,t,i,a;let r=()=>mR(this,bk,bw).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},bM=new WeakSet,bx=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tN.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tN.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(ri.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,mI(this,bv))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(ri.USER_INACTIVE))||t;mI(this,bv)!==a&&(mC(this,bv,a),n(i,mI(this,bv)))})},vu.customElements.get("mux-player")||(vu.customElements.define("mux-player",bW),vu.MuxPlayerElement=bW);var bV={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},bq=e=>null==e,bF=(e,t)=>!bq(t)&&e in t,b$=e=>e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase())),bj=(e,t)=>{if(!("boolean"==typeof t&&!t))return bF(e,bV)?bV[e]:/[A-Z]/.test(e)?b$(e):e},bK=(e,t)=>"boolean"==typeof e?"":e,bG=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((e,t)=>{let[i,a]=t,r=bj(i,a);if(!r)return e;let n=bK(a,i);return e[r]=n,e},{})},bY=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let a=(0,n.useRef)(null);return(0,n.useEffect)(()=>{t.forEach(e=>{e&&("function"==typeof e?e(a.current):e.current=a.current)})},[t]),a},bZ=Object.prototype.hasOwnProperty,bQ=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!bZ.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},bz=(e,t,i)=>!bQ(t,e[i]),bX=(e,t,i)=>{e[i]=t},bJ=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:bX,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:bz;return(0,n.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t])},b0=(()=>{try{return"3.0.0"}catch(e){}return"UNKNOWN"})(),b1=n.forwardRef((e,t)=>{let{children:i,...a}=e;return n.createElement("mux-player",bG({...a,ref:t}),i)}),b2=(e,t,i)=>(0,n.useEffect)(()=>{let a=null==t?void 0:t.current;if(!(!a||!i))return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i]),b3=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:f,onPause:E,onSeeking:g,onSeeked:y,onStalled:A,onSuspend:T,onEnded:k,onError:w,onCuePointChange:I,onCuePointsChange:S,onChapterChange:C,metadata:R,tokens:L,paused:D,playbackId:M,playbackRates:x,currentTime:N,themeProps:O,extraSourceParams:P,castCustomData:U,_hlsConfig:B,...W}=t;return bJ("playbackRates",x,e),bJ("metadata",R,e),bJ("extraSourceParams",P,e),bJ("_hlsConfig",B,e),bJ("themeProps",O,e),bJ("tokens",L,e),bJ("playbackId",M,e),bJ("castCustomData",U,e),bJ("paused",D,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&bz(e,t,i)),bJ("currentTime",N,e,(e,t)=>{null!=t&&(e.currentTime=t)}),b2("abort",e,i),b2("canplay",e,a),b2("canplaythrough",e,r),b2("emptied",e,n),b2("loadstart",e,s),b2("loadeddata",e,o),b2("loadedmetadata",e,l),b2("progress",e,d),b2("durationchange",e,u),b2("volumechange",e,c),b2("ratechange",e,h),b2("resize",e,m),b2("waiting",e,p),b2("play",e,v),b2("playing",e,b),b2("timeupdate",e,f),b2("pause",e,E),b2("seeking",e,g),b2("seeked",e,y),b2("stalled",e,A),b2("suspend",e,T),b2("ended",e,k),b2("error",e,w),b2("cuepointchange",e,I),b2("cuepointschange",e,S),b2("chapterchange",e,C),[W]},b5=n.forwardRef((e,t)=>{let i=(0,n.useRef)(null),a=bY(i,t),[r]=b3(i,e);return n.createElement(b1,{ref:a,playerSoftwareName:"mux-player-react",playerSoftwareVersion:b0,...r})})},49027:function(e,t,i){"use strict";i.d(t,{Dx:function(){return ea},VY:function(){return ei},aV:function(){return et},dk:function(){return er},fC:function(){return X},h_:function(){return ee},jm:function(){return Y},p8:function(){return A},x8:function(){return en},xz:function(){return J}});var a=i(2265),r=i(6741),n=i(98575),s=i(73966),o=i(99255),l=i(80886),d=i(15278),u=i(99103),c=i(83832),h=i(71599),m=i(66840),p=i(86097),v=i(60703),b=i(5478),f=i(37053),E=i(57437),g="Dialog",[y,A]=(0,s.b)(g),[T,k]=y(g),w=e=>{let{__scopeDialog:t,children:i,open:r,defaultOpen:n,onOpenChange:s,modal:d=!0}=e,u=a.useRef(null),c=a.useRef(null),[h=!1,m]=(0,l.T)({prop:r,defaultProp:n,onChange:s});return(0,E.jsx)(T,{scope:t,triggerRef:u,contentRef:c,contentId:(0,o.M)(),titleId:(0,o.M)(),descriptionId:(0,o.M)(),open:h,onOpenChange:m,onOpenToggle:a.useCallback(()=>m(e=>!e),[m]),modal:d,children:i})};w.displayName=g;var I="DialogTrigger",S=a.forwardRef((e,t)=>{let{__scopeDialog:i,...a}=e,s=k(I,i),o=(0,n.e)(t,s.triggerRef);return(0,E.jsx)(m.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":K(s.open),...a,ref:o,onClick:(0,r.M)(e.onClick,s.onOpenToggle)})});S.displayName=I;var C="DialogPortal",[R,L]=y(C,{forceMount:void 0}),D=e=>{let{__scopeDialog:t,forceMount:i,children:r,container:n}=e,s=k(C,t);return(0,E.jsx)(R,{scope:t,forceMount:i,children:a.Children.map(r,e=>(0,E.jsx)(h.z,{present:i||s.open,children:(0,E.jsx)(c.h,{asChild:!0,container:n,children:e})}))})};D.displayName=C;var M="DialogOverlay",x=a.forwardRef((e,t)=>{let i=L(M,e.__scopeDialog),{forceMount:a=i.forceMount,...r}=e,n=k(M,e.__scopeDialog);return n.modal?(0,E.jsx)(h.z,{present:a||n.open,children:(0,E.jsx)(N,{...r,ref:t})}):null});x.displayName=M;var N=a.forwardRef((e,t)=>{let{__scopeDialog:i,...a}=e,r=k(M,i);return(0,E.jsx)(v.Z,{as:f.g7,allowPinchZoom:!0,shards:[r.contentRef],children:(0,E.jsx)(m.WV.div,{"data-state":K(r.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),O="DialogContent",P=a.forwardRef((e,t)=>{let i=L(O,e.__scopeDialog),{forceMount:a=i.forceMount,...r}=e,n=k(O,e.__scopeDialog);return(0,E.jsx)(h.z,{present:a||n.open,children:n.modal?(0,E.jsx)(U,{...r,ref:t}):(0,E.jsx)(B,{...r,ref:t})})});P.displayName=O;var U=a.forwardRef((e,t)=>{let i=k(O,e.__scopeDialog),s=a.useRef(null),o=(0,n.e)(t,i.contentRef,s);return a.useEffect(()=>{let e=s.current;if(e)return(0,b.Ry)(e)},[]),(0,E.jsx)(W,{...e,ref:o,trapFocus:i.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,r.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=i.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,r.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,i=0===t.button&&!0===t.ctrlKey;(2===t.button||i)&&e.preventDefault()}),onFocusOutside:(0,r.M)(e.onFocusOutside,e=>e.preventDefault())})}),B=a.forwardRef((e,t)=>{let i=k(O,e.__scopeDialog),r=a.useRef(!1),n=a.useRef(!1);return(0,E.jsx)(W,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,s;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(s=i.triggerRef.current)||void 0===s||s.focus(),t.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:t=>{var a,s;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(n.current=!0));let o=t.target;(null===(s=i.triggerRef.current)||void 0===s?void 0:s.contains(o))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&n.current&&t.preventDefault()}})}),W=a.forwardRef((e,t)=>{let{__scopeDialog:i,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:o,...l}=e,c=k(O,i),h=a.useRef(null),m=(0,n.e)(t,h);return(0,p.EW)(),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(u.M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:o,children:(0,E.jsx)(d.XB,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":K(c.open),...l,ref:m,onDismiss:()=>c.onOpenChange(!1)})}),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{titleId:c.titleId}),(0,E.jsx)(z,{contentRef:h,descriptionId:c.descriptionId})]})]})}),H="DialogTitle",V=a.forwardRef((e,t)=>{let{__scopeDialog:i,...a}=e,r=k(H,i);return(0,E.jsx)(m.WV.h2,{id:r.titleId,...a,ref:t})});V.displayName=H;var q="DialogDescription",F=a.forwardRef((e,t)=>{let{__scopeDialog:i,...a}=e,r=k(q,i);return(0,E.jsx)(m.WV.p,{id:r.descriptionId,...a,ref:t})});F.displayName=q;var $="DialogClose",j=a.forwardRef((e,t)=>{let{__scopeDialog:i,...a}=e,n=k($,i);return(0,E.jsx)(m.WV.button,{type:"button",...a,ref:t,onClick:(0,r.M)(e.onClick,()=>n.onOpenChange(!1))})});function K(e){return e?"open":"closed"}j.displayName=$;var G="DialogTitleWarning",[Y,Z]=(0,s.k)(G,{contentName:O,titleName:H,docsSlug:"dialog"}),Q=e=>{let{titleId:t}=e,i=Z(G),r="`".concat(i.contentName,"` requires a `").concat(i.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(i.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(i.docsSlug);return a.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},z=e=>{let{contentRef:t,descriptionId:i}=e,r=Z("DialogDescriptionWarning"),n="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return a.useEffect(()=>{var e;let a=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");i&&a&&!document.getElementById(i)&&console.warn(n)},[n,t,i]),null},X=w,J=S,ee=D,et=x,ei=P,ea=V,er=F,en=j}}]);