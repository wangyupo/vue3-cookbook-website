import{I as $e,a1 as Ke,M as Ge,p as le,r as ue,R as Xe,o as V,b as W,d as y,h as fe,w as Qe,t as de,g as pe,F as Ye,D as O}from"./index-CebZ7rZo.js";function _e(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ze}=Object.prototype,{getPrototypeOf:ne}=Object,I=(e=>t=>{const n=Ze.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>I(t)===e),M=e=>t=>typeof t===e,{isArray:F}=Array,k=M("undefined");function et(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Te=_("ArrayBuffer");function tt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Te(e.buffer),t}const nt=M("string"),g=M("function"),xe=M("number"),v=e=>e!==null&&typeof e=="object",rt=e=>e===!0||e===!1,j=e=>{if(I(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},st=_("Date"),ot=_("File"),it=_("Blob"),at=_("FileList"),ct=e=>v(e)&&g(e.pipe),lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=I(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},ut=_("URLSearchParams"),ft=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ne(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Pe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ce=e=>!k(e)&&e!==Pe;function Q(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ne(t,s)||s;j(t[o])&&j(r)?t[o]=Q(t[o],r):j(r)?t[o]=Q({},r):F(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&B(arguments[r],n);return t}const dt=(e,t,n,{allOwnKeys:r}={})=>(B(t,(s,o)=>{n&&g(s)?e[o]=_e(s,n):e[o]=s},{allOwnKeys:r}),e),pt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},mt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},yt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},wt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},bt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),Et=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},St=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Rt=_("HTMLFormElement"),Ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),he=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),gt=_("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};B(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},At=e=>{Fe(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_t=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return F(e)?r(e):r(String(e).split(t)),n},Tt=()=>{},xt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$="abcdefghijklmnopqrstuvwxyz",me="0123456789",De={DIGIT:me,ALPHA:$,ALPHA_DIGIT:$+$.toUpperCase()+me},Nt=(e=16,t=De.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Pt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ct=e=>{const t=new Array(10),n=(r,s)=>{if(v(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=F(r)?[]:{};return B(r,(i,c)=>{const h=n(i,s+1);!k(h)&&(o[c]=h)}),t[s]=void 0,o}}return r};return n(e,0)},Ft=_("AsyncFunction"),Dt=e=>e&&(v(e)||g(e))&&g(e.then)&&g(e.catch),a={isArray:F,isArrayBuffer:Te,isBuffer:et,isFormData:lt,isArrayBufferView:tt,isString:nt,isNumber:xe,isBoolean:rt,isObject:v,isPlainObject:j,isUndefined:k,isDate:st,isFile:ot,isBlob:it,isRegExp:gt,isFunction:g,isStream:ct,isURLSearchParams:ut,isTypedArray:bt,isFileList:at,forEach:B,merge:Q,extend:dt,trim:ft,stripBOM:pt,inherits:ht,toFlatObject:mt,kindOf:I,kindOfTest:_,endsWith:yt,toArray:wt,forEachEntry:Et,matchAll:St,isHTMLForm:Rt,hasOwnProperty:he,hasOwnProp:he,reduceDescriptors:Fe,freezeMethods:At,toObjectSet:_t,toCamelCase:Ot,noop:Tt,toFiniteNumber:xt,findKey:Ne,global:Pe,isContextDefined:Ce,ALPHABET:De,generateString:Nt,isSpecCompliantForm:Pt,toJSONObject:Ct,isAsyncFn:Ft,isThenable:Dt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ke=m.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(m,Be);Object.defineProperty(ke,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(ke);return a.toFlatObject(e,i,function(h){return h!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const kt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function Le(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,o){return s=Le(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Bt(e){return a.isArray(e)&&!e.some(Y)}const Lt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,E){return!a.isUndefined(E[d])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!h&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?h&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,E){let S=f;if(f&&!E&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Bt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(S=a.toArray(f)))return d=Le(d),S.forEach(function(N,We){!(a.isUndefined(N)||N===null)&&t.append(i===!0?ye([d],We,o):i===null?d:d+"[]",p(N))}),!1}return Y(f)?!0:(t.append(ye(E,d,o),p(f)),!1)}const l=[],b=Object.assign(Lt,{defaultVisitor:u,convertValue:p,isVisitable:Y});function R(f,d){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));l.push(f),a.forEach(f,function(S,x){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(x)?x.trim():x,d,b))===!0&&R(S,d?d.concat(x):[x])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&z(e,this,t)}const je=re.prototype;je.append=function(t,n){this._pairs.push([t,n])};je.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function jt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ue(e,t,n){if(!t)return e;const r=n&&n.encode||jt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class be{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ut=typeof URLSearchParams<"u"?URLSearchParams:re,qt=typeof FormData<"u"?FormData:null,Ht=typeof Blob<"u"?Blob:null,It={isBrowser:!0,classes:{URLSearchParams:Ut,FormData:qt,Blob:Ht},protocols:["http","https","file","blob","url","data"]},He=typeof window<"u"&&typeof document<"u",Mt=(e=>He&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),vt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:He,hasStandardBrowserEnv:Mt,hasStandardBrowserWebWorkerEnv:vt},Symbol.toStringTag,{value:"Module"})),A={...zt,...It};function Jt(e,t){return z(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Wt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ie(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),h=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,h?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Wt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Vt(r),s,n,0)}),n}return null}function $t(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const se={transitional:qe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ie(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Jt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return z(c?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),$t(t)):t}],transformResponse:[function(t){const n=this.transitional||se.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{se.headers[e]={}});const oe=se,Kt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Kt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function Xt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Qt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function K(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Yt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Zt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,h,p){const u=D(h);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(s,u);(!l||s[l]===void 0||p===!0||p===void 0&&s[l]!==!1)&&(s[l||h]=U(c))}const i=(c,h)=>a.forEach(c,(p,u)=>o(p,u,h));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Qt(t)?i(Gt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||K(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const c=a.findKey(r,i);c&&(!n||K(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||K(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=U(s),delete n[o];return}const c=t?Yt(o):String(o).trim();c!==o&&delete n[o],n[c]=U(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=D(i);r[c]||(Zt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(J.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(J);const T=J;function G(e,t){const n=this||oe,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Me(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(L,m,{__CANCEL__:!0});function en(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const tn=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function nn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function rn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ve(e,t){return e&&!nn(t)?rn(e,t):t}const sn=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function on(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function an(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),u=r[o];i||(i=p),n[s]=h,r[s]=p;let l=o,b=0;for(;l!==s;)b+=n[l++],l=l%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),p-i<t)return;const R=u&&p-u;return R?Math.round(b*1e3/R):void 0}}function Se(e,t){let n=0;const r=an(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,h=r(c),p=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:h||void 0,estimated:h&&i&&p?(i-o)/h:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const cn=typeof XMLHttpRequest<"u",ln=cn&&function(e){return new Promise(function(n,r){let s=e.data;const o=T.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,h;function p(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let u;if(a.isFormData(s)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[d,...E]=u?u.split(";").map(S=>S.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...E].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+E))}const b=ve(e.baseURL,e.url);l.open(e.method.toUpperCase(),Ue(b,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function R(){if(!l)return;const d=T.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};en(function(N){n(N),p()},function(N){r(N),p()},S),l=null}if("onloadend"in l?l.onloadend=R:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(R)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||qe;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new m(E,S.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},A.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&sn(b))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&tn.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(E,S){l.setRequestHeader(S,E)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=d=>{l&&(r(!d||d.type?new L(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const f=on(b);if(f&&A.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Z={http:kt,xhr:ln};a.forEach(Z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Re=e=>`- ${e}`,un=e=>a.isFunction(e)||e===null||e===!1,ze={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!un(n)&&(r=Z[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,h])=>`adapter ${c} `+(h===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Re).join(`
`):" "+Re(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Z};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function Oe(e){return X(e),e.headers=T.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ze.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return X(e),r.data=G.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return Me(r)||(X(e),r&&r.response&&(r.response.data=G.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const ge=e=>e instanceof T?{...e}:e;function C(e,t){t=t||{};const n={};function r(p,u,l){return a.isPlainObject(p)&&a.isPlainObject(u)?a.merge.call({caseless:l},p,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(p,u,l){if(a.isUndefined(u)){if(!a.isUndefined(p))return r(void 0,p,l)}else return r(p,u,l)}function o(p,u){if(!a.isUndefined(u))return r(void 0,u)}function i(p,u){if(a.isUndefined(u)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,u)}function c(p,u,l){if(l in t)return r(p,u);if(l in e)return r(void 0,p)}const h={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(p,u)=>s(ge(p),ge(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=h[u]||s,b=l(e[u],t[u],u);a.isUndefined(b)&&l!==c||(n[u]=b)}),n}const Je="1.6.8",ie={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ie[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ae={};ie.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ae[i]&&(Ae[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function fn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],h=c===void 0||i(c,o,e);if(h!==!0)throw new m("option "+o+" must be "+h,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ee={assertOptions:fn,validators:ie},P=ee.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new be,response:new be}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ee.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=T.concat(i,o);const c=[];let h=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(h=h&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const p=[];this.interceptors.response.forEach(function(d){p.push(d.fulfilled,d.rejected)});let u,l=0,b;if(!h){const f=[Oe.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,p),b=f.length,u=Promise.resolve(n);l<b;)u=u.then(f[l++],f[l++]);return u}b=c.length;let R=n;for(l=0;l<b;){const f=c[l++],d=c[l++];try{R=f(R)}catch(E){d.call(this,E);break}}try{u=Oe.call(this,R)}catch(f){return Promise.reject(f)}for(l=0,b=p.length;l<b;)u=u.then(p[l++],p[l++]);return u}getUri(t){t=C(this.defaults,t);const n=ve(t.baseURL,t.url);return Ue(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(C(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const q=H;class ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new L(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ae(function(s){t=s}),cancel:t}}}const dn=ae;function pn(e){return function(n){return e.apply(null,n)}}function hn(e){return a.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const mn=te;function Ve(e){const t=new q(e),n=_e(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ve(C(e,s))},n}const w=Ve(oe);w.Axios=q;w.CanceledError=L;w.CancelToken=dn;w.isCancel=Me;w.VERSION=Je;w.toFormData=z;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=pn;w.isAxiosError=hn;w.mergeConfig=C;w.AxiosHeaders=T;w.formToJSON=e=>Ie(a.isHTMLForm(e)?new FormData(e):e);w.getAdapter=ze.getAdapter;w.HttpStatusCode=mn;w.default=w;$e(e=>{Ge.error(e)},200);const ce=w.create({timeout:60*1e3});ce.interceptors.request.use(function(e){return e.params=Ke(e.params),e},function(e){return Promise.reject(e)});ce.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)});const yn=e=>ce({url:`/api/weather/city/${e.code}`,method:"get"}),wn={class:"flex justify-between"},bn={class:"flex items-center"},En={class:"ml-3"},Sn=y("div",{class:"w-96 italic text-sm font-semibold leading-6 mr-8"},[y("p",null,[y("span",{class:"text-xl"},"注："),O(" 本用例使用 axios 进行接口请求，并且 v3s 已经将 axios 配置在 /src/utils/request.js 中，具体封装可以参考 "),y("a",{class:"text-blue-600",href:"https://www.axios-http.cn/docs/intro",target:"__blank"},"axios 文档"),O(" 。 ")]),y("p",null,[O(" * 封装 Axios 时，你或许会需要 "),y("a",{class:"text-blue-600",href:"https://www.npmjs.com/package/qs",target:"__blank"},"qs"),O(" 去序列化你的参数。 ")])],-1),Rn={class:"flex overflow-x-auto"},On={class:"mt-8"},gn=y("p",{class:"font-bold"},"组件代码：",-1),An=y("pre",null,[O("        "),y("code",null,[O(`
<template>
  <el-button type="primary" :loading="loading" @click="fn_getWeather">
    `),y("span",null,'{{ loading ? "获取中" : "点击获取北京天气" }}'),O(`
  </el-button>
  <div class="ml-3">
    <pre>`),y("span",null,"{{ weatherData }}"),O(`</pre>
  </div>
</template>

<script setup>
  import { getWeather } from "@/api/api.js";
  import { ref } from "vue";

  const loading = ref(false);
  const weatherData = ref({});

  // 获取天气
  const fn_getWeather = () => {
    // 键入 v3s-api ，待代码提示出现后，回车，会自动生成 api 代码，按 tab 切换下一项。
    loading.value = true;
    const params = { code: 101010100 };
    getWeather(params)
      .then(res => {
        if (res.status == 200) {
          weatherData.value = res.data.forecast[0];
        }
      })
      .catch(() => {})
      .finally(() => {
        loading.value = false;
      });
  };
<\/script>
        `)]),O(`
      `)],-1),_n=[gn,An],Tn={class:"ml-8 mt-8"},xn=y("p",{class:"font-bold"},"vite.config.js代理配置：",-1),Nn=y("pre",null,[O("        "),y("code",{class:"js"},`
const PROXY_TARGET = "http://t.weather.itboy.net/"; // 后端服务地址
        `),O(`
      `)],-1),Pn=[xn,Nn],Fn={__name:"index",setup(e){const t=le(!1),n=le({}),r=()=>{t.value=!0,yn({code:101010100}).then(i=>{i.status==200&&(n.value=i.data.forecast[0])}).catch(()=>{}).finally(()=>{t.value=!1})},s=[{label:"axios 中文文档：",link:"https://www.axios-http.cn/docs/intro"},{label:"v3s 如何配置后端服务请求地址？",link:"https://github.com/wangyupo/v3s?tab=readme-ov-file#详细文档"}];return(o,i)=>{const c=ue("el-button"),h=ue("RhReferenceLink"),p=Xe("highlight");return V(),W(Ye,null,[y("div",wn,[y("div",null,[y("div",bn,[fe(c,{type:"primary",loading:t.value,onClick:r},{default:Qe(()=>[O(de(t.value?"获取中":"点击获取北京天气"),1)]),_:1},8,["loading"]),y("div",En,[y("pre",null,de(n.value),1)])])]),Sn]),y("div",Rn,[pe((V(),W("div",On,_n)),[[p]]),pe((V(),W("div",Tn,Pn)),[[p]])]),fe(h,{class:"mt-8",links:s})],64)}}};export{Fn as default};
