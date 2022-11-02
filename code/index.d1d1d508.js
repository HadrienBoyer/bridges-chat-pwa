var Un=Object.defineProperty,Mn=Object.defineProperties;var Ln=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var Bn=Object.prototype.hasOwnProperty,Dn=Object.prototype.propertyIsEnumerable;var Le=(e,t,r)=>t in e?Un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))Bn.call(t,r)&&Le(e,r,t[r]);if(Me)for(var r of Me(t))Dn.call(t,r)&&Le(e,r,t[r]);return e},De=(e,t)=>Mn(e,Ln(t));const Hn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};Hn();const In="modulepreload",He={},jn="/bridges-chat-pwa/",Vn=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${jn}${n}`,n in He)return;He[n]=!0;const o=n.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":In,o||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),o)return new Promise((d,a)=>{s.addEventListener("load",d),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=window,ye=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$e=Symbol(),Ie=new WeakMap;class Hr{constructor(t,r,n){if(this._$cssResult$=!0,n!==$e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ye&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ie.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ie.set(r,t))}return t}toString(){return this.cssText}}const zn=e=>new Hr(typeof e=="string"?e:e+"",void 0,$e),Ht=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Hr(r,e,$e)},Fn=(e,t)=>{ye?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=At.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},je=ye?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return zn(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qt;const Tt=window,Ve=Tt.trustedTypes,qn=Ve?Ve.emptyScript:"",ze=Tt.reactiveElementPolyfillSupport,ae={toAttribute(e,t){switch(t){case Boolean:e=e?qn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ir=(e,t)=>t!==e&&(t==t||e==e),Wt={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:Ir};class W extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;(r=this.h)!==null&&r!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Wt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Wt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(je(o))}else t!==void 0&&r.push(je(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Fn(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Wt){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:ae).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const s=o.getPropertyOptions(i),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:ae;this._$El=i,this[i]=d.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ir)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}W.finalized=!0,W.elementProperties=new Map,W.elementStyles=[],W.shadowRootOptions={mode:"open"},ze==null||ze({ReactiveElement:W}),((qt=Tt.reactiveElementVersions)!==null&&qt!==void 0?qt:Tt.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kt;const Ot=window,Z=Ot.trustedTypes,Fe=Z?Z.createPolicy("lit-html",{createHTML:e=>e}):void 0,L=`lit$${(Math.random()+"").slice(9)}$`,jr="?"+L,Wn=`<${jr}>`,Q=document,pt=(e="")=>Q.createComment(e),ft=e=>e===null||typeof e!="object"&&typeof e!="function",Vr=Array.isArray,Kn=e=>Vr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,We=/>/g,I=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ke=/'/g,Je=/"/g,zr=/^(?:script|style|textarea|title)$/i,Jn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),mt=Jn(1),tt=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ge=new WeakMap,Gn=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=i._$litPart$;if(s===void 0){const d=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new wt(t.insertBefore(pt(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},Y=Q.createTreeWalker(Q,129,null,!1),Yn=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=st;for(let a=0;a<r;a++){const l=e[a];let u,c,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===st?c[1]==="!--"?s=qe:c[1]!==void 0?s=We:c[2]!==void 0?(zr.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=I):c[3]!==void 0&&(s=I):s===I?c[0]===">"?(s=o!=null?o:st,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?I:c[3]==='"'?Je:Ke):s===Je||s===Ke?s=I:s===qe||s===We?s=st:(s=I,o=void 0);const f=s===I&&e[a+1].startsWith("/>")?" ":"";i+=s===st?l+Wn:h>=0?(n.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+L+f):l+L+(h===-2?(n.push(void 0),a):f)}const d=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Fe!==void 0?Fe.createHTML(d):d,n]};class vt{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const d=t.length-1,a=this.parts,[l,u]=Yn(t,r);if(this.el=vt.createElement(l,n),Y.currentNode=this.el.content,r===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(o=Y.nextNode())!==null&&a.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const c=[];for(const h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(L)){const p=u[s++];if(c.push(h),p!==void 0){const f=o.getAttribute(p.toLowerCase()+"$lit$").split(L),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?Zn:m[1]==="?"?to:m[1]==="@"?eo:It})}else a.push({type:6,index:i})}for(const h of c)o.removeAttribute(h)}if(zr.test(o.tagName)){const c=o.textContent.split(L),h=c.length-1;if(h>0){o.textContent=Z?Z.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],pt()),Y.nextNode(),a.push({type:2,index:++i});o.append(c[h],pt())}}}else if(o.nodeType===8)if(o.data===jr)a.push({type:2,index:i});else{let c=-1;for(;(c=o.data.indexOf(L,c+1))!==-1;)a.push({type:7,index:i}),c+=L.length-1}i++}}static createElement(t,r){const n=Q.createElement("template");return n.innerHTML=t,n}}function et(e,t,r=e,n){var o,i,s,d;if(t===tt)return t;let a=n!==void 0?(o=r._$Cl)===null||o===void 0?void 0:o[n]:r._$Cu;const l=ft(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,n)),n!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(t=et(e,a._$AS(e,t.values),a,n)),t}class Xn{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Q).importNode(n,!0);Y.currentNode=i;let s=Y.nextNode(),d=0,a=0,l=o[0];for(;l!==void 0;){if(d===l.index){let u;l.type===2?u=new wt(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new ro(s,this,t)),this.v.push(u),l=o[++a]}d!==(l==null?void 0:l.index)&&(s=Y.nextNode(),d++)}return i}m(t){let r=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class wt{constructor(t,r,n,o){var i;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$C_=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$C_}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=et(this,t,r),ft(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==tt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Kn(t)?this.O(t):this.$(t)}S(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==S&&ft(this._$AH)?this._$AA.nextSibling.data=t:this.k(Q.createTextNode(t)),this._$AH=t}T(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=vt.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.m(n);else{const s=new Xn(i,this),d=s.p(this.options);s.m(n),this.k(d),this._$AH=s}}_$AC(t){let r=Ge.get(t.strings);return r===void 0&&Ge.set(t.strings,r=new vt(t)),r}O(t){Vr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new wt(this.S(pt()),this.S(pt()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$C_=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class It{constructor(t,r,n,o,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=et(this,t,r,0),s=!ft(t)||t!==this._$AH&&t!==tt,s&&(this._$AH=t);else{const d=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=et(this,d[n+a],r,a),l===tt&&(l=this._$AH[a]),s||(s=!ft(l)||l!==this._$AH[a]),l===S?t=S:t!==S&&(t+=(l!=null?l:"")+i[a+1]),this._$AH[a]=l}s&&!o&&this.P(t)}P(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Zn extends It{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===S?void 0:t}}const Qn=Z?Z.emptyScript:"";class to extends It{constructor(){super(...arguments),this.type=4}P(t){t&&t!==S?this.element.setAttribute(this.name,Qn):this.element.removeAttribute(this.name)}}class eo extends It{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=et(this,t,r,0))!==null&&n!==void 0?n:S)===tt)return;const o=this._$AH,i=t===S&&o!==S||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==S&&(o===S||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class ro{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const Ye=Ot.litHtmlPolyfillSupport;Ye==null||Ye(vt,wt),((Kt=Ot.litHtmlVersions)!==null&&Kt!==void 0?Kt:Ot.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jt,Gt;class V extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Gn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return tt}}V.finalized=!0,V._$litElement$=!0,(Jt=globalThis.litElementHydrateSupport)===null||Jt===void 0||Jt.call(globalThis,{LitElement:V});const Xe=globalThis.litElementPolyfillSupport;Xe==null||Xe({LitElement:V});((Gt=globalThis.litElementVersions)!==null&&Gt!==void 0?Gt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=e=>t=>typeof t=="function"?((r,n)=>(customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:o,elements:i}=n;return{kind:o,elements:i,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?De(Be({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Se(e){return(t,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(e,t,r):no(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yt;((Yt=window.HTMLSlotElement)===null||Yt===void 0?void 0:Yt.prototype.assignedElements)!=null;function Nt(e){return e=e||[],Array.isArray(e)?e:[e]}function O(e){return`[Vaadin.Router] ${e}`}function oo(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Rt="module",Ut="nomodule",le=[Rt,Ut];function Ze(e){if(!e.match(/.+\.[m]?js$/))throw new Error(O(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function Fr(e){if(!e||!T(e.path))throw new Error(O('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!z(e.action)&&!Array.isArray(e.children)&&!z(e.children)&&!Mt(t)&&!r.some(n=>T(e[n])))throw new Error(O(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(T(t))Ze(t);else if(le.some(n=>n in t))le.forEach(n=>n in t&&Ze(t[n]));else throw new Error(O('Expected route bundle to include either "'+Ut+'" or "'+Rt+'" keys, or both'));e.redirect&&["bundle","component"].forEach(n=>{n in e&&console.warn(O(`Route config "${e.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function Qe(e){Nt(e).forEach(t=>Fr(t))}function tr(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Rt?r.setAttribute("type",Rt):t===Ut&&r.setAttribute(Ut,""),r.async=!0),new Promise((n,o)=>{r.onreadystatechange=r.onload=i=>{r.__dynamicImportLoaded=!0,n(i)},r.onerror=i=>{r.parentNode&&r.parentNode.removeChild(r),o(i)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&n()})}function io(e){return T(e)?tr(e):Promise.race(le.filter(t=>t in e).map(t=>tr(e[t],t)))}function dt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Mt(e){return typeof e=="object"&&!!e}function z(e){return typeof e=="function"}function T(e){return typeof e=="string"}function qr(e){const t=new Error(O(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const J=new class{};function so(e){const t=e.port,r=e.protocol,i=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${i}`}function er(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let d=0;d<r.length;d++){const a=r[d];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||so(t))!==window.location.origin)return;const{pathname:o,search:i,hash:s}=t;dt("go",{pathname:o,search:i,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const ao={activate(){window.document.addEventListener("click",er)},inactivate(){window.document.removeEventListener("click",er)}},lo=/Trident/.test(navigator.userAgent);lo&&!z(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function rr(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:n}=window.location;dt("go",{pathname:t,search:r,hash:n})}const co={activate(){window.addEventListener("popstate",rr)},inactivate(){window.removeEventListener("popstate",rr)}};var it=Xr,ho=Ee,uo=vo,po=Jr,fo=Yr,Wr="/",Kr="./",mo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ee(e,t){for(var r=[],n=0,o=0,i="",s=t&&t.delimiter||Wr,d=t&&t.delimiters||Kr,a=!1,l;(l=mo.exec(e))!==null;){var u=l[0],c=l[1],h=l.index;if(i+=e.slice(o,h),o=h+u.length,c){i+=c[1],a=!0;continue}var p="",f=e[o],m=l[2],x=l[3],P=l[4],A=l[5];if(!a&&i.length){var E=i.length-1;d.indexOf(i[E])>-1&&(p=i[E],i=i.slice(0,E))}i&&(r.push(i),i="",a=!1);var On=p!==""&&f!==void 0&&f!==p,Nn=A==="+"||A==="*",Rn=A==="?"||A==="*",Re=p||s,Ue=x||P;r.push({name:m||n++,prefix:p,delimiter:Re,optional:Rn,repeat:Nn,partial:On,pattern:Ue?go(Ue):"[^"+M(Re)+"]+?"})}return(i||o<e.length)&&r.push(i+e.substr(o)),r}function vo(e,t){return Jr(Ee(e,t))}function Jr(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(n,o){for(var i="",s=o&&o.encode||encodeURIComponent,d=0;d<e.length;d++){var a=e[d];if(typeof a=="string"){i+=a;continue}var l=n?n[a.name]:void 0,u;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(u=s(l[c],a),!t[d].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(c===0?a.prefix:a.delimiter)+u}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(u=s(String(l),a),!t[d].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');i+=a.prefix+u;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function M(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function go(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Gr(e){return e&&e.sensitive?"":"i"}function bo(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function _o(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(Xr(e[o],t,r).source);return new RegExp("(?:"+n.join("|")+")",Gr(r))}function yo(e,t,r){return Yr(Ee(e,r),t,r)}function Yr(e,t,r){r=r||{};for(var n=r.strict,o=r.start!==!1,i=r.end!==!1,s=M(r.delimiter||Wr),d=r.delimiters||Kr,a=[].concat(r.endsWith||[]).map(M).concat("$").join("|"),l=o?"^":"",u=e.length===0,c=0;c<e.length;c++){var h=e[c];if(typeof h=="string")l+=M(h),u=c===e.length-1&&d.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+M(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?l+=M(h.prefix)+"("+p+")?":l+="(?:"+M(h.prefix)+"("+p+"))?":l+=M(h.prefix)+"("+p+")"}}return i?(n||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+s+"(?="+a+"))?"),u||(l+="(?="+s+"|"+a+")")),new RegExp(l,Gr(r))}function Xr(e,t,r){return e instanceof RegExp?bo(e,t):Array.isArray(e)?_o(e,t,r):yo(e,t,r)}it.parse=ho;it.compile=uo;it.tokensToFunction=po;it.tokensToRegExp=fo;const{hasOwnProperty:$o}=Object.prototype,de=new Map;de.set("|false",{keys:[],pattern:/(?:)/});function nr(e){try{return decodeURIComponent(e)}catch{return e}}function wo(e,t,r,n,o){r=!!r;const i=`${e}|${r}`;let s=de.get(i);if(!s){const l=[];s={keys:l,pattern:it(e,l,{end:r,strict:e===""})},de.set(i,s)}const d=s.pattern.exec(t);if(!d)return null;const a=Object.assign({},o);for(let l=1;l<d.length;l++){const u=s.keys[l-1],c=u.name,h=d[l];(h!==void 0||!$o.call(a,c))&&(u.repeat?a[c]=h?h.split(u.delimiter).map(nr):[]:a[c]=h&&nr(h))}return{path:d[0],keys:(n||[]).concat(s.keys),params:a}}function Zr(e,t,r,n,o){let i,s,d=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(l){if(e===l)return{done:!0};const u=e.__children=e.__children||e.children;if(!i&&(i=wo(a,t,!u,n,o),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&u)for(;d<u.length;){if(!s){const h=u[d];h.parent=e;let p=i.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=Zr(h,t.substr(p),r,i.keys,i.params)}const c=s.next(l);if(!c.done)return{done:!1,value:c.value};s=null,d++}return{done:!0}}}}function So(e){if(z(e.route.action))return e.route.action(e)}function Eo(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function xo(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function Ao(e,t){const{route:r,path:n}=t;if(r&&!r.__synthetic){const o={path:n,route:r};if(!e.chain)e.chain=[];else if(r.parent){let i=e.chain.length;for(;i--&&e.chain[i].route&&e.chain[i].route!==r.parent;)e.chain.pop()}e.chain.push(o)}}class gt{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||So,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){Qe(t);const r=[...Nt(t)];this.root.__children=r}addRoutes(t){return Qe(t),this.root.__children.push(...Nt(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,T(t)?{pathname:t}:t),n=Zr(this.root,this.__normalizePathname(r.pathname),this.baseUrl),o=this.resolveRoute;let i=null,s=null,d=r;function a(l,u=i.value.route,c){const h=c===null&&i.value.route;return i=s||n.next(h),s=null,!l&&(i.done||!Eo(u,i.value.route))?(s=i,Promise.resolve(J)):i.done?Promise.reject(qr(r)):(d=Object.assign(d?{chain:d.chain?d.chain.slice(0):[]}:{},r,i.value),Ao(d,i.value),Promise.resolve(o(d)).then(p=>p!=null&&p!==J?(d.result=p.result||p,d):a(l,u,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const u=xo(d);if(l?console.warn(u):l=new Error(u),l.context=l.context||d,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return d.result=this.errorHandler(l),d;throw l})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,n=this.constructor.__createUrl(t,r).href;if(n.slice(0,r.length)===r)return n.slice(r.length)}}gt.pathToRegexp=it;const{pathToRegexp:or}=gt,ir=new Map;function Qr(e,t,r){const n=t.name||t.component;if(n&&(e.has(n)?e.get(n).push(t):e.set(n,[t])),Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];i.parent=t,Qr(e,i,i.__children||i.children)}}function sr(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function ar(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Co(e,t={}){if(!(e instanceof gt))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(n,o)=>{let i=sr(r,n);if(!i&&(r.clear(),Qr(r,e.root,e.root.__children),i=sr(r,n),!i))throw new Error(`Route "${n}" not found`);let s=ir.get(i.fullPath);if(!s){let a=ar(i),l=i.parent;for(;l;){const p=ar(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const u=or.parse(a),c=or.tokensToFunction(u),h=Object.create(null);for(let p=0;p<u.length;p++)T(u[p])||(h[u[p].name]=!0);s={toPath:c,keys:h},ir.set(a,s),i.fullPath=a}let d=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const a={},l=Object.keys(o);for(let c=0;c<l.length;c++){const h=l[c];s.keys[h]||(a[h]=o[h])}const u=t.stringifyQueryParams(a);u&&(d+=u.charAt(0)==="?"?u:`?${u}`)}return d}}let lr=[];function Po(e){lr.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),lr=e}const ko=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},To=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function dr(e,t){return e.classList.add(t),new Promise(r=>{if(ko(e)){const n=e.getBoundingClientRect(),o=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;e.setAttribute("style",`position: absolute; ${o}`),To(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const Oo=256;function Xt(e){return e!=null}function No(e){const t=Object.assign({},e);return delete t.next,t}function k({pathname:e="",search:t="",hash:r="",chain:n=[],params:o={},redirectFrom:i,resolver:s},d){const a=n.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:d||a.length&&a[a.length-1]||null,params:o,redirectFrom:i,getUrl:(l={})=>Pt(H.pathToRegexp.compile(tn(a))(Object.assign({},o,l)),s)}}function cr(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function Ro(e,t){t.location=k(e);const r=e.chain.map(n=>n.route).indexOf(e.route);return e.chain[r].element=t,t}function Ct(e,t,r){if(z(e))return e.apply(r,t)}function hr(e,t,r){return n=>{if(n&&(n.cancel||n.redirect))return n;if(r)return Ct(r[e],t,r)}}function Uo(e,t){if(!Array.isArray(e)&&!Mt(e))throw new Error(O(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=Nt(e);for(let n=0;n<r.length;n++)Fr(r[n]),t.__children.push(r[n])}function xt(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function Pt(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function tn(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class H extends gt{constructor(t,r){const n=document.head.querySelector("base"),o=n&&n.getAttribute("href");super([],Object.assign({baseUrl:o&&gt.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const i=H.NavigationTrigger;H.setTriggers.apply(H,Object.keys(i).map(s=>i[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=k({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let n=Promise.resolve();z(r.children)&&(n=n.then(()=>r.children(No(t))).then(i=>{!Xt(i)&&!z(r.children)&&(i=r.children),Uo(i,r)}));const o={redirect:i=>cr(t,i),component:i=>{const s=document.createElement(i);return this.__createdByRouter.set(s,!0),s}};return n.then(()=>{if(this.__isLatestRender(t))return Ct(r.action,[t,o],r)}).then(i=>{if(Xt(i)&&(i instanceof HTMLElement||i.redirect||i===J))return i;if(T(r.redirect))return o.redirect(r.redirect);if(r.bundle)return io(r.bundle).then(()=>{},()=>{throw new Error(O(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(i=>{if(Xt(i))return i;if(T(r.component))return o.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const n=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},T(t)?{pathname:t}:t,{__renderId:n});return this.ready=this.resolve(o).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const s=this.__previousContext;if(i===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=k(i),r&&this.__updateBrowserHistory(i,n===1),dt("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,s),this.__previousContext=i,this.location;this.__addAppearingContent(i,s);const d=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,s),d.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(n===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(o),xt(this.__outlet&&this.__outlet.children),this.location=k(Object.assign(o,{resolver:this})),dt("error",Object.assign({router:this,error:i},o)),i}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(n=>{const i=n!==r?n:t,d=Pt(tn(n.chain),n.resolver)===n.pathname,a=(l,u=l.route,c)=>l.next(void 0,u,c).then(h=>h===null||h===J?d?l:u.parent!==null?a(l,u.parent,h):h:h);return a(n).then(l=>{if(l===null||l===J)throw qr(i);return l&&l!==J&&l!==n?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(Ro(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(O(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${oo(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},n=r.chain||[],o=t.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),d=a=>cr(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,o.length)&&!(n[a].route!==o[a].route||n[a].path!==o[a].path&&n[a].element!==o[a].element||!this.__isReusableElement(n[a].element,o[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=o.length===n.length&&t.__divergedChainIndex==o.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=o.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},n[a]);for(let a=0;a<o.length;a++)i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:d},o[a]),n[a].element.location=k(t,n[a].route)}else for(let a=n.length-1;a>=t.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},n[a])}if(!t.__skipAttach)for(let a=0;a<o.length;a++)a<t.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=k(t,n[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:d},o[a]),o[a].element&&(o[a].element.location=k(t,o[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,n,o){const i=k(r);return t.then(s=>{if(this.__isLatestRender(r))return hr("onBeforeLeave",[i,n,this],o.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,n,o){const i=k(r,o.route);return t.then(s=>{if(this.__isLatestRender(r))return hr("onBeforeEnter",[i,n,this],o.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,n){if(r>Oo)throw new Error(O(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:n})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(O(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:n=""},o){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==n){const i=o?"replaceState":"pushState";window.history[i](null,document.title,t+r+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let n=this.__outlet;for(let o=0;o<t.__divergedChainIndex;o++){const i=r&&r.chain[o].element;if(i)if(i.parentNode===n)t.chain[o].element=i,n=i;else break}return n}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(i=>this.__addedByRouter.get(i)&&i!==t.result);let o=n;for(let i=t.__divergedChainIndex;i<t.chain.length;i++){const s=t.chain[i].element;s&&(o.appendChild(s),this.__addedByRouter.set(s,!0),o===n&&this.__appearingContent.push(s),o=s)}}__removeDisappearingContent(){this.__disappearingContent&&xt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(xt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let n=r.chain.length-1;n>=t.__divergedChainIndex&&this.__isLatestRender(t);n--){const o=r.chain[n].element;if(!!o)try{const i=k(t);Ct(o.onAfterLeave,[i,{},r.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&xt(o.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const n=t.chain[r].element||{},o=k(t,t.chain[r].route);Ct(n.onAfterEnter,[o,{},t.resolver],n)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],o=[],i=t.chain;let s;for(let d=i.length;d>0;d--)if(i[d-1].route.animate){s=i[d-1].route.animate;break}if(r&&n&&s){const d=Mt(s)&&s.leave||"leaving",a=Mt(s)&&s.enter||"entering";o.push(dr(r,d)),o.push(dr(n,a))}return Promise.all(o).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:n,hash:o}=t?t.detail:window.location;T(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:n,hash:o},!0))}static setTriggers(...t){Po(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Co(this)),Pt(this.__urlForName(t,r),this)}urlForPath(t,r){return Pt(H.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:n,hash:o}=T(t)?this.__createUrl(t,"http://a"):t;return dt("go",{pathname:r,search:n,hash:o})}}const Mo=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,kt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Lo(){function e(){return!0}return en(e)}function Bo(){try{return Do()?!0:Ho()?kt?!Io():!Lo():!1}catch{return!1}}function Do(){return localStorage.getItem("vaadin.developmentmode.force")}function Ho(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Io(){return!!(kt&&Object.keys(kt).map(t=>kt[t]).filter(t=>t.productionMode).length>0)}function en(e,t){if(typeof e!="function")return;const r=Mo.exec(e.toString());if(r)try{e=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return e(t)}window.Vaadin=window.Vaadin||{};const ur=function(e,t){if(window.Vaadin.developmentMode)return en(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Bo());function jo(){}const Vo=function(){if(typeof ur=="function")return ur(jo)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Vo();H.NavigationTrigger={POPSTATE:co,CLICK:ao};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const pr=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,ce=(e,t,r=null)=>{for(;t!==r;){const n=t.nextSibling;e.removeChild(t),t=n}},U=`{{lit-${String(Math.random()).slice(2)}}}`,rn=`<!--${U}-->`,fr=new RegExp(`${U}|${rn}`);class nn{constructor(t,r){this.parts=[],this.element=r;const n=[],o=[],i=document.createTreeWalker(r.content,133,null,!1);let s=0,d=-1,a=0;const{strings:l,values:{length:u}}=t;for(;a<u;){const c=i.nextNode();if(c!==null){if(d++,c.nodeType===1){if(c.hasAttributes()){const h=c.attributes,{length:p}=h;let f=0;for(let m=0;m<p;m++)mr(h[m].name,"$lit$")&&f++;for(;f-- >0;){const m=l[a],x=he.exec(m)[2],P=x.toLowerCase()+"$lit$",A=c.getAttribute(P);c.removeAttribute(P);const E=A.split(fr);this.parts.push({type:"attribute",index:d,name:x,strings:E}),a+=E.length-1}}c.tagName==="TEMPLATE"&&(o.push(c),i.currentNode=c.content)}else if(c.nodeType===3){const h=c.data;if(h.indexOf(U)>=0){const p=c.parentNode,f=h.split(fr),m=f.length-1;for(let x=0;x<m;x++){let P,A=f[x];if(A==="")P=B();else{const E=he.exec(A);E!==null&&mr(E[2],"$lit$")&&(A=A.slice(0,E.index)+E[1]+E[2].slice(0,-5)+E[3]),P=document.createTextNode(A)}p.insertBefore(P,c),this.parts.push({type:"node",index:++d})}f[m]===""?(p.insertBefore(B(),c),n.push(c)):c.data=f[m],a+=m}}else if(c.nodeType===8)if(c.data===U){const h=c.parentNode;c.previousSibling!==null&&d!==s||(d++,h.insertBefore(B(),c)),s=d,this.parts.push({type:"node",index:d}),c.nextSibling===null?c.data="":(n.push(c),d--),a++}else{let h=-1;for(;(h=c.data.indexOf(U,h+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=o.pop()}for(const c of n)c.parentNode.removeChild(c)}}const mr=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},on=e=>e.index!==-1,B=()=>document.createComment(""),he=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function vr(e,t){const{element:{content:r},parts:n}=e,o=document.createTreeWalker(r,133,null,!1);let i=ct(n),s=n[i],d=-1,a=0;const l=[];let u=null;for(;o.nextNode();){d++;const c=o.currentNode;for(c.previousSibling===u&&(u=null),t.has(c)&&(l.push(c),u===null&&(u=c)),u!==null&&a++;s!==void 0&&s.index===d;)s.index=u!==null?-1:s.index-a,i=ct(n,i),s=n[i]}l.forEach(c=>c.parentNode.removeChild(c))}const zo=e=>{let t=e.nodeType===11?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},ct=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const n=e[r];if(on(n))return r}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Fo=new WeakMap,bt=e=>typeof e=="function"&&Fo.has(e),N={},gr={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ue{constructor(t,r,n){this.__parts=[],this.template=t,this.processor=r,this.options=n}update(t){let r=0;for(const n of this.__parts)n!==void 0&&n.setValue(t[r]),r++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const t=pr?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],n=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let i,s=0,d=0,a=o.nextNode();for(;s<n.length;)if(i=n[s],on(i)){for(;d<i.index;)d++,a.nodeName==="TEMPLATE"&&(r.push(a),o.currentNode=a.content),(a=o.nextNode())===null&&(o.currentNode=r.pop(),a=o.nextNode());if(i.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(a.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return pr&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const qo=` ${U} `;class sn{constructor(t,r,n,o){this.strings=t,this.values=r,this.type=n,this.processor=o}getHTML(){const t=this.strings.length-1;let r="",n=!1;for(let o=0;o<t;o++){const i=this.strings[o],s=i.lastIndexOf("<!--");n=(s>-1||n)&&i.indexOf("-->",s+1)===-1;const d=he.exec(i);r+=d===null?i+(n?qo:rn):i.substr(0,d.index)+d[1]+d[2]+"$lit$"+d[3]+U}return r+=this.strings[t],r}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const xe=e=>e===null||!(typeof e=="object"||typeof e=="function"),an=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ln{constructor(t,r,n){this.dirty=!0,this.element=t,this.name=r,this.strings=n,this.parts=[];for(let o=0;o<n.length-1;o++)this.parts[o]=this._createPart()}_createPart(){return new dn(this)}_getValue(){const t=this.strings,r=t.length-1;let n="";for(let o=0;o<r;o++){n+=t[o];const i=this.parts[o];if(i!==void 0){const s=i.value;if(xe(s)||!an(s))n+=typeof s=="string"?s:String(s);else for(const d of s)n+=typeof d=="string"?d:String(d)}}return n+=t[r],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class dn{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===N||xe(t)&&t===this.value||(this.value=t,bt(t)||(this.committer.dirty=!0))}commit(){for(;bt(this.value);){const t=this.value;this.value=N,t(this)}this.value!==N&&this.committer.commit()}}class jt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(B()),this.endNode=t.appendChild(B())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=B()),t.__insert(this.endNode=B())}insertAfterPart(t){t.__insert(this.startNode=B()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;bt(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=N,r(this)}const t=this.__pendingValue;t!==N&&(xe(t)?t!==this.value&&this.__commitText(t):t instanceof sn?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):an(t)?this.__commitIterable(t):t===gr?(this.value=gr,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const r=this.startNode.nextSibling,n=typeof(t=t==null?"":t)=="string"?t:String(t);r===this.endNode.previousSibling&&r.nodeType===3?r.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const r=this.options.templateFactory(t);if(this.value instanceof ue&&this.value.template===r)this.value.update(t.values);else{const n=new ue(r,t.processor,this.options),o=n._clone();n.update(t.values),this.__commitNode(o),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const r=this.value;let n,o=0;for(const i of t)n=r[o],n===void 0&&(n=new jt(this.options),r.push(n),o===0?n.appendIntoPart(this):n.insertAfterPart(r[o-1])),n.setValue(i),n.commit(),o++;o<r.length&&(r.length=o,this.clear(n&&n.endNode))}clear(t=this.startNode){ce(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Wo{constructor(t,r,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;bt(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=N,r(this)}if(this.__pendingValue===N)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=N}}class Ko extends ln{constructor(t,r,n){super(t,r,n),this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new Jo(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Jo extends dn{}let cn=!1;(()=>{try{const e={get capture(){return cn=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();class Go{constructor(t,r,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=n,this.__boundHandleEvent=o=>this.handleEvent(o)}setValue(t){this.__pendingValue=t}commit(){for(;bt(this.__pendingValue);){const i=this.__pendingValue;this.__pendingValue=N,i(this)}if(this.__pendingValue===N)return;const t=this.__pendingValue,r=this.value,n=t==null||r!=null&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),o=t!=null&&(r==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=Yo(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=N}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Yo=e=>e&&(cn?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function Xo(e){let t=_t.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},_t.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;const n=e.strings.join(U);return r=t.keyString.get(n),r===void 0&&(r=new nn(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const _t=new Map,q=new WeakMap;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Zo=new class{handleAttributeExpressions(e,t,r,n){const o=t[0];return o==="."?new Ko(e,t.slice(1),r).parts:o==="@"?[new Go(e,t.slice(1),n.eventContext)]:o==="?"?[new Wo(e,t.slice(1),r)]:new ln(e,t,r).parts}handleTextExpression(e){return new jt(e)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const C=(e,...t)=>new sn(e,t,"html",Zo),hn=(e,t)=>`${e}--${t}`;let Lt=!0;window.ShadyCSS===void 0?Lt=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Lt=!1);const Qo=e=>t=>{const r=hn(t.type,e);let n=_t.get(r);n===void 0&&(n={stringsArray:new WeakMap,keyString:new Map},_t.set(r,n));let o=n.stringsArray.get(t.strings);if(o!==void 0)return o;const i=t.strings.join(U);if(o=n.keyString.get(i),o===void 0){const s=t.getTemplateElement();Lt&&window.ShadyCSS.prepareTemplateDom(s,e),o=new nn(t,s),n.keyString.set(i,o)}return n.stringsArray.set(t.strings,o),o},ti=["html","svg"],un=new Set,ei=(e,t,r)=>{un.add(e);const n=r?r.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(i===0)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let l=0;l<i;l++){const u=o[l];u.parentNode.removeChild(u),s.textContent+=u.textContent}(l=>{ti.forEach(u=>{const c=_t.get(hn(u,l));c!==void 0&&c.keyString.forEach(h=>{const{element:{content:p}}=h,f=new Set;Array.from(p.querySelectorAll("style")).forEach(m=>{f.add(m)}),vr(h,f)})})})(e);const d=n.content;r?function(l,u,c=null){const{element:{content:h},parts:p}=l;if(c==null)return void h.appendChild(u);const f=document.createTreeWalker(h,133,null,!1);let m=ct(p),x=0,P=-1;for(;f.nextNode();)for(P++,f.currentNode===c&&(x=zo(u),c.parentNode.insertBefore(u,c));m!==-1&&p[m].index===P;){if(x>0){for(;m!==-1;)p[m].index+=x,m=ct(p,m);return}m=ct(p,m)}}(r,s,d.firstChild):d.insertBefore(s,d.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const a=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(r){d.insertBefore(s,d.firstChild);const l=new Set;l.add(s),vr(r,l)}};window.JSCompiler_renameProperty=(e,t)=>e;const pe={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},pn=(e,t)=>t!==e&&(t==t||e==e),Zt={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:pn};class fn extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((r,n)=>{const o=this._attributeNameForProperty(n,r);o!==void 0&&(this._attributeToPropertyMap.set(o,n),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((r,n)=>this._classProperties.set(n,r))}}static createProperty(t,r=Zt){if(this._ensureClassProperties(),this._classProperties.set(t,r),r.noAccessor||this.prototype.hasOwnProperty(t))return;const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Zt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(const o of n)this.createProperty(o,r[o])}}static _attributeNameForProperty(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,r,n=pn){return n(t,r)}static _propertyValueFromAttribute(t,r){const n=r.type,o=r.converter||pe,i=typeof o=="function"?o:o.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,r){if(r.reflect===void 0)return;const n=r.type,o=r.converter;return(o&&o.toAttribute||pe.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,r)=>{if(this.hasOwnProperty(r)){const n=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,n)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,r)=>this[r]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,r,n){r!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,r,n=Zt){const o=this.constructor,i=o._attributeNameForProperty(t,n);if(i!==void 0){const s=o._propertyValueToAttribute(r,n);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,r){if(8&this._updateState)return;const n=this.constructor,o=n._attributeToPropertyMap.get(t);if(o!==void 0){const i=n.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=n._propertyValueFromAttribute(r,i),this._updateState=-17&this._updateState}}_requestUpdate(t,r){let n=!0;if(t!==void 0){const o=this.constructor,i=o.getPropertyOptions(t);o._valueHasChanged(this[t],r,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,r),i.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,r){return this._requestUpdate(t,r),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t?this.update(r):this._markUpdated()}catch(n){throw t=!1,this._markUpdated(),n}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,n)=>this._propertyToAttribute(n,this[n],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}fn.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ri=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function w(e){return(t,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(e,t,r):ri(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const mn="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vn=Symbol();class br{constructor(t,r){if(r!==vn)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(mn?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ni=(e,...t)=>{const r=t.reduce((n,o,i)=>n+(s=>{if(s instanceof br)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]);return new br(r,vn)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const _r={};class fe extends fn{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const r=(i,s)=>i.reduceRight((d,a)=>Array.isArray(a)?r(a,d):(d.add(a),d),s),n=r(t,new Set),o=[];n.forEach(i=>o.unshift(i)),this._styles=o}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?mn?this.renderRoot.adoptedStyleSheets=t.map(r=>r.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(r=>r.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const r=this.render();super.update(t),r!==_r&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(n=>{const o=document.createElement("style");o.textContent=n.cssText,this.renderRoot.appendChild(o)}))}render(){return _r}}fe.finalized=!0,fe.render=(e,t,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,o=q.has(t),i=Lt&&t.nodeType===11&&!!t.host,s=i&&!un.has(n),d=s?document.createDocumentFragment():t;if(((a,l,u)=>{let c=q.get(l);c===void 0&&(ce(l,l.firstChild),q.set(l,c=new jt(Object.assign({templateFactory:Xo},u))),c.appendInto(l)),c.setValue(a),c.commit()})(e,d,Object.assign({templateFactory:Qo(n)},r)),s){const a=q.get(d);q.delete(d);const l=a.value instanceof ue?a.value.template:void 0;ei(n,d,l),ce(t,t.firstChild),t.appendChild(d),q.set(t,a)}!o&&i&&window.ShadyCSS.styleElement(t.host)};var y=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};let _=class extends fe{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return ni`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let r=new CustomEvent("hide");this.dispatchEvent(r),e()})}render(){return C`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?C`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?C`<div id="installModalWrapper">${this.openmodal?C`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?C`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>C`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?C`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>C`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?C`<p id="iosText">${this.iosinstallinfotext}</p>`:C`<div id="buttonsContainer">${this.deferredprompt?C`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:C`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var Qt;y([w({type:String})],_.prototype,"manifestpath",void 0),y([w({type:String})],_.prototype,"iconpath",void 0),y([w({type:Object})],_.prototype,"manifestdata",void 0),y([w({type:Boolean})],_.prototype,"openmodal",void 0),y([w({type:Boolean})],_.prototype,"showopen",void 0),y([w({type:Boolean})],_.prototype,"isSupportingBrowser",void 0),y([w({type:Boolean})],_.prototype,"isIOS",void 0),y([w({type:Boolean})],_.prototype,"installed",void 0),y([w({type:Boolean})],_.prototype,"hasprompt",void 0),y([w({type:Boolean})],_.prototype,"usecustom",void 0),y([w({type:Array})],_.prototype,"relatedApps",void 0),y([w({type:String})],_.prototype,"explainer",void 0),y([w({type:String})],_.prototype,"featuresheader",void 0),y([w({type:String})],_.prototype,"descriptionheader",void 0),y([w({type:String})],_.prototype,"installbuttontext",void 0),y([w({type:String})],_.prototype,"cancelbuttontext",void 0),y([w({type:String})],_.prototype,"iosinstallinfotext",void 0),y([w()],_.prototype,"deferredprompt",void 0),_=y([(Qt="pwa-install",e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(Qt,e):((t,r)=>{const{kind:n,elements:o}=r;return{kind:n,elements:o,finisher(i){window.customElements.define(t,i)}}})(Qt,e))],_);var Ae=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),yr=new Map,gn=class{constructor(e,t){if(this._$cssResult$=!0,t!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=yr.get(this.cssText);return Ae&&e===void 0&&(yr.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},oi=e=>new gn(typeof e=="string"?e:e+"",Ce),Vt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new gn(r,Ce)},ii=(e,t)=>{Ae?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=window.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},$r=Ae?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return oi(r)})(e):e,te,wr=window.trustedTypes,si=wr?wr.emptyScript:"",Sr=window.reactiveElementPolyfillSupport,me={toAttribute(e,t){switch(t){case Boolean:e=e?si:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},bn=(e,t)=>t!==e&&(t==t||e==e),ee={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:bn},K=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Eh(r,t);n!==void 0&&(this._$Eu.set(n,r),e.push(n))}),e}static createProperty(e,t=ee){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ee}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift($r(n))}else e!==void 0&&t.push($r(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ii(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=ee){var n,o;const i=this.constructor._$Eh(e,r);if(i!==void 0&&r.reflect===!0){const s=((o=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:me.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(e,t){var r,n,o;const i=this.constructor,s=i._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const d=i.getPropertyOptions(s),a=d.converter,l=(o=(n=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&o!==void 0?o:me.fromAttribute;this._$Ei=s,this[s]=l(t,d.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||bn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,o)=>this[o]=n),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};K.finalized=!0,K.elementProperties=new Map,K.elementStyles=[],K.shadowRootOptions={mode:"open"},Sr==null||Sr({ReactiveElement:K}),((te=globalThis.reactiveElementVersions)!==null&&te!==void 0?te:globalThis.reactiveElementVersions=[]).push("1.3.2");var re,rt=globalThis.trustedTypes,Er=rt?rt.createPolicy("lit-html",{createHTML:e=>e}):void 0,D=`lit$${(Math.random()+"").slice(9)}$`,_n="?"+D,ai=`<${_n}>`,nt=document,yt=(e="")=>nt.createComment(e),$t=e=>e===null||typeof e!="object"&&typeof e!="function",yn=Array.isArray,li=e=>{var t;return yn(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xr=/-->/g,Ar=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Cr=/'/g,Pr=/"/g,$n=/^(?:script|style|textarea|title)$/i,di=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Pe=di(1),F=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),kr=new WeakMap,ci=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=i._$litPart$;if(s===void 0){const d=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new zt(t.insertBefore(yt(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},X=nt.createTreeWalker(nt,129,null,!1),hi=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=at;for(let a=0;a<r;a++){const l=e[a];let u,c,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===at?c[1]==="!--"?s=xr:c[1]!==void 0?s=Ar:c[2]!==void 0?($n.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=j):c[3]!==void 0&&(s=j):s===j?c[0]===">"?(s=o!=null?o:at,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?j:c[3]==='"'?Pr:Cr):s===Pr||s===Cr?s=j:s===xr||s===Ar?s=at:(s=j,o=void 0);const f=s===j&&e[a+1].startsWith("/>")?" ":"";i+=s===at?l+ai:h>=0?(n.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+D+f):l+D+(h===-2?(n.push(void 0),a):f)}const d=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Er!==void 0?Er.createHTML(d):d,n]},Bt=class{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,i=0;const s=e.length-1,d=this.parts,[a,l]=hi(e,t);if(this.el=Bt.createElement(a,r),X.currentNode=this.el.content,t===2){const u=this.el.content,c=u.firstChild;c.remove(),u.append(...c.childNodes)}for(;(n=X.nextNode())!==null&&d.length<s;){if(n.nodeType===1){if(n.hasAttributes()){const u=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(D)){const h=l[i++];if(u.push(c),h!==void 0){const p=n.getAttribute(h.toLowerCase()+"$lit$").split(D),f=/([.?@])?(.*)/.exec(h);d.push({type:1,index:o,name:f[2],strings:p,ctor:f[1]==="."?pi:f[1]==="?"?mi:f[1]==="@"?vi:Ft})}else d.push({type:6,index:o})}for(const c of u)n.removeAttribute(c)}if($n.test(n.tagName)){const u=n.textContent.split(D),c=u.length-1;if(c>0){n.textContent=rt?rt.emptyScript:"";for(let h=0;h<c;h++)n.append(u[h],yt()),X.nextNode(),d.push({type:2,index:++o});n.append(u[c],yt())}}}else if(n.nodeType===8)if(n.data===_n)d.push({type:2,index:o});else{let u=-1;for(;(u=n.data.indexOf(D,u+1))!==-1;)d.push({type:7,index:o}),u+=D.length-1}o++}}static createElement(e,t){const r=nt.createElement("template");return r.innerHTML=e,r}};function ot(e,t,r=e,n){var o,i,s,d;if(t===F)return t;let a=n!==void 0?(o=r._$Cl)===null||o===void 0?void 0:o[n]:r._$Cu;const l=$t(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,n)),n!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(t=ot(e,a._$AS(e,t.values),a,n)),t}var ui=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:nt).importNode(r,!0);X.currentNode=o;let i=X.nextNode(),s=0,d=0,a=n[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new zt(i,i.nextSibling,this,e):a.type===1?l=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(l=new gi(i,this,e)),this.v.push(l),a=n[++d]}s!==(a==null?void 0:a.index)&&(i=X.nextNode(),s++)}return o}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},zt=class{constructor(e,t,r,n){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ot(this,e,t),$t(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==F&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):li(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==$&&$t(this._$AH)?this._$AA.nextSibling.data=e:this.k(nt.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Bt.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(r);else{const i=new ui(o,this),s=i.p(this.options);i.m(r),this.k(s),this._$AH=i}}_$AC(e){let t=kr.get(e.strings);return t===void 0&&kr.set(e.strings,t=new Bt(e)),t}S(e){yn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const o of e)n===t.length?t.push(r=new zt(this.M(yt()),this.M(yt()),this,this.options)):r=t[n],r._$AI(o),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ft=class{constructor(e,t,r,n,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const o=this.strings;let i=!1;if(o===void 0)e=ot(this,e,t,0),i=!$t(e)||e!==this._$AH&&e!==F,i&&(this._$AH=e);else{const s=e;let d,a;for(e=o[0],d=0;d<o.length-1;d++)a=ot(this,s[r+d],t,d),a===F&&(a=this._$AH[d]),i||(i=!$t(a)||a!==this._$AH[d]),a===$?e=$:e!==$&&(e+=(a!=null?a:"")+o[d+1]),this._$AH[d]=a}i&&!n&&this.C(e)}C(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},pi=class extends Ft{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===$?void 0:e}},fi=rt?rt.emptyScript:"",mi=class extends Ft{constructor(){super(...arguments),this.type=4}C(e){e&&e!==$?this.element.setAttribute(this.name,fi):this.element.removeAttribute(this.name)}},vi=class extends Ft{constructor(e,t,r,n,o){super(e,t,r,n,o),this.type=5}_$AI(e,t=this){var r;if((e=(r=ot(this,e,t,0))!==null&&r!==void 0?r:$)===F)return;const n=this._$AH,o=e===$&&n!==$||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==$&&(n===$||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},gi=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ot(this,e)}},Tr=window.litHtmlPolyfillSupport;Tr==null||Tr(Bt,zt),((re=globalThis.litHtmlVersions)!==null&&re!==void 0?re:globalThis.litHtmlVersions=[]).push("2.2.4");var ne,oe,ht=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=ci(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return F}};ht.finalized=!0,ht._$litElement$=!0,(ne=globalThis.litElementHydrateSupport)===null||ne===void 0||ne.call(globalThis,{LitElement:ht});var Or=globalThis.litElementPolyfillSupport;Or==null||Or({LitElement:ht});((oe=globalThis.litElementVersions)!==null&&oe!==void 0?oe:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke=Vt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,bi=Vt`
  ${ke}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,wn=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},_i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yi=e=>(...t)=>({_$litDirective$:e,values:t}),$i=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sn=yi(class extends $i{constructor(e){var t;if(super(e),e.type!==_i.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.st)===null||r===void 0)&&r.has(i))&&this.et.add(i);return this.render(t)}const o=e.element.classList;this.et.forEach(i=>{i in t||(o.remove(i),this.et.delete(i))});for(const i in t){const s=!!t[i];s===this.et.has(i)||((n=this.st)===null||n===void 0?void 0:n.has(i))||(s?(o.add(i),this.et.add(i)):(o.remove(i),this.et.delete(i)))}return F}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var En=Object.defineProperty,wi=Object.defineProperties,Si=Object.getOwnPropertyDescriptor,Ei=Object.getOwnPropertyDescriptors,Nr=Object.getOwnPropertySymbols,xi=Object.prototype.hasOwnProperty,Ai=Object.prototype.propertyIsEnumerable,Rr=(e,t,r)=>t in e?En(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,St=(e,t)=>{for(var r in t||(t={}))xi.call(t,r)&&Rr(e,r,t[r]);if(Nr)for(var r of Nr(t))Ai.call(t,r)&&Rr(e,r,t[r]);return e},Te=(e,t)=>wi(e,Ei(t)),v=(e,t,r,n)=>{for(var o=n>1?void 0:n?Si(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&En(t,r,o),o},Oe=e=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:o,elements:i}=n;return{kind:o,elements:i,finisher(s){window.customElements.define(r,s)}}})(e,t),Ci=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Te(St({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function b(e){return(t,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(e,t,r):Ci(e,t)}function Pi(e){return b(Te(St({},e),{state:!0}))}var ki=({finisher:e,descriptor:t})=>(r,n)=>{var o;if(n===void 0){const i=(o=r.originalKey)!==null&&o!==void 0?o:r.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:Te(St({},r),{key:i});return e!=null&&(s.finisher=function(d){e(d,i)}),s}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,n,t(n)),e==null||e(i,n)}};function Ti(e,t){return ki({descriptor:r=>{const n={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const o=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var i,s;return this[o]===void 0&&(this[o]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&s!==void 0?s:null),this[o]}}return n}})}var ie;((ie=window.HTMLSlotElement)===null||ie===void 0?void 0:ie.prototype.assignedElements)!=null;var Et=class extends ht{};v([b()],Et.prototype,"dir",2);v([b()],Et.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve=class extends Et{constructor(){super(...arguments);this.hasSlotController=new wn(this,"footer","header","image")}render(){return Pe`
      <div
        part="base"
        class=${Sn({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};ve.styles=bi;ve=v([Oe("sl-card")],ve);var Oi=Vt`
  ${ke}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Ni=class extends Event{constructor(e){super("formdata");this.formData=e}},Ri=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new Ni(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const n=this.getAll(e),o=n.indexOf(r.value);o!==-1&&n.splice(o,1),n.push(t),this.set(e,n)}else super.append(e,t);r.value=t}};function Ui(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function Ur(){!window.FormData||Ui()||(window.FormData=Ri,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?Ur():window.addEventListener("DOMContentLoaded",()=>Ur());var lt=new WeakMap,Mi=class{constructor(e,t){(this.host=e).addController(this),this.options=St({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,n)=>{r.value=n}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),lt.has(this.form)||(lt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),lt.has(this.form)&&(this.form.reportValidity=lt.get(this.form),lt.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host);!t&&typeof r=="string"&&typeof n!="undefined"&&(Array.isArray(n)?n.forEach(o=>{e.formData.append(r,o.toString())}):e.formData.append(r,n.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},xn=Symbol.for(""),Li=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===xn)return(r=e)===null||r===void 0?void 0:r._$litStatic$},Mr=(e,...t)=>({_$litStatic$:t.reduce((r,n,o)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[o+1],e[0]),r:xn}),Lr=new Map,Bi=e=>(t,...r)=>{const n=r.length;let o,i;const s=[],d=[];let a,l=0,u=!1;for(;l<n;){for(a=t[l];l<n&&(i=r[l],(o=Li(i))!==void 0);)a+=o+t[++l],u=!0;d.push(i),s.push(a),l++}if(l===n&&s.push(t[n]),u){const c=s.join("$$lit$$");(t=Lr.get(c))===void 0&&(s.raw=s,Lr.set(c,t=s)),r=d}return e(t,...r)},se=Bi(Pe);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge=new Set,Di=new MutationObserver(Pn),G=new Map,An=document.documentElement.dir||"ltr",Cn=document.documentElement.lang||navigator.language,ut;Di.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Hi(...e){e.map(t=>{const r=t.$code.toLowerCase();G.has(r)?G.set(r,Object.assign(Object.assign({},G.get(r)),t)):G.set(r,t),ut||(ut=t)}),Pn()}function Pn(){An=document.documentElement.dir||"ltr",Cn=document.documentElement.lang||navigator.language,[...ge.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Ii=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ge.add(this.host)}hostDisconnected(){ge.delete(this.host)}dir(){return`${this.host.dir||An}`.toLowerCase()}lang(){return`${this.host.lang||Cn}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),n=this.lang().length>2?this.lang().toLowerCase():"",o=G.get(n),i=G.get(r);let s;if(o&&o[e])s=o[e];else if(i&&i[e])s=i[e];else if(ut&&ut[e])s=ut[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},kn=class extends Ii{},ji={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Hi(ji);var R=e=>e!=null?e:$;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Br(e,t,r){const n=new CustomEvent(t,St({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(n),n}var g=class extends Et{constructor(){super(...arguments);this.formSubmitController=new Mi(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new wn(this,"[default]","prefix","suffix"),this.localize=new kn(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,Br(this,"sl-blur")}handleFocus(){this.hasFocus=!0,Br(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?Mr`a`:Mr`button`;return se`
      <${t}
        part="base"
        class=${Sn({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${R(e?void 0:this.disabled)}
        type=${R(e?void 0:this.type)}
        name=${R(e?void 0:this.name)}
        value=${R(e?void 0:this.value)}
        href=${R(e?this.href:void 0)}
        target=${R(e?this.target:void 0)}
        download=${R(e?this.download:void 0)}
        rel=${R(e&&this.target?"noreferrer noopener":void 0)}
        role=${R(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?se`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?se`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};g.styles=Oi;v([Ti(".button")],g.prototype,"button",2);v([Pi()],g.prototype,"hasFocus",2);v([b({reflect:!0})],g.prototype,"variant",2);v([b({reflect:!0})],g.prototype,"size",2);v([b({type:Boolean,reflect:!0})],g.prototype,"caret",2);v([b({type:Boolean,reflect:!0})],g.prototype,"disabled",2);v([b({type:Boolean,reflect:!0})],g.prototype,"loading",2);v([b({type:Boolean,reflect:!0})],g.prototype,"outline",2);v([b({type:Boolean,reflect:!0})],g.prototype,"pill",2);v([b({type:Boolean,reflect:!0})],g.prototype,"circle",2);v([b()],g.prototype,"type",2);v([b()],g.prototype,"name",2);v([b()],g.prototype,"value",2);v([b()],g.prototype,"href",2);v([b()],g.prototype,"target",2);v([b()],g.prototype,"download",2);v([b()],g.prototype,"form",2);v([b({attribute:"formaction"})],g.prototype,"formAction",2);v([b({attribute:"formmethod"})],g.prototype,"formMethod",2);v([b({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);v([b({attribute:"formtarget"})],g.prototype,"formTarget",2);g=v([Oe("sl-button")],g);var Vi=Vt`
  ${ke}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,be=class extends Et{constructor(){super(...arguments);this.localize=new kn(this)}render(){return Pe`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};be.styles=Vi;be=v([Oe("sl-spinner")],be);const zi=Ht`
  import './themes/dark.css';
  import './themes/light.css';

  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var Fi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Tn=(e,t,r,n)=>{for(var o=n>1?void 0:n?qi(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&Fi(t,r,o),o};let _e=class extends V{constructor(){super();this.message="Welcome, anonymous!"}static get styles(){return[zi,Ht`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `]}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"Bridges - Secure chat",text:"Build secure bridges with your friends!",url:"https://bridges.github.io/"})}render(){return mt`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
              Lorem ipsum dolor sit amet, consectetur adipis. First commit.
            </div>

            ${"share"in navigator?mt`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  >Vaadin Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${"/bridges-chat-pwa/"}about" variant="primary">Navigate to About</sl-button>
        </div>

        <pwa-install>Install Bridges</pwa-install>
      </main>
    `}};Tn([Se()],_e.prototype,"message",2);_e=Tn([we("app-home")],_e);var Wi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,Ne=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ki(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&Wi(t,r,o),o};let Dt=class extends V{constructor(){super();this.title="BRIDGES",this.enableBack=!1}static get styles(){return Ht`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: #487574;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `}render(){return mt`
      <header>

        <div id="back-button-block">
          ${this.enableBack?mt`<sl-button href="${"/bridges-chat-pwa/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};Ne([Se({type:String})],Dt.prototype,"title",2);Ne([Se({type:Boolean})],Dt.prototype,"enableBack",2);Dt=Ne([we("app-header")],Dt);var Ji=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,Yi=(e,t,r,n)=>{for(var o=n>1?void 0:n?Gi(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&Ji(t,r,o),o};let Dr=class extends V{static get styles(){return Ht`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new H((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/bridges-chat-pwa/",animate:!0,children:[{path:"",component:"app-home"},{path:"about",component:"app-about",action:async()=>{await Vn(()=>import("./app-about.ecabe364.js"),[])}}]}])}render(){return mt`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};Dr=Yi([we("app-index")],Dr);export{zi as a,we as e,Ht as i,V as s,mt as y};
//# sourceMappingURL=index.d1d1d508.js.map
