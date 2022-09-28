(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(901),t.b),l=i()(o()),u=d()(s);l.push([n.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: url("+u+");\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\nbutton {\r\n  color: white;\r\n  padding: 10px;\r\n  font-size: 1rem;\r\n  border: none;\r\n  background-color: transparent;\r\n  transition: transform ease 0.7s;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  transform: translate(0, -10px);\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: 100vh;\r\n}\r\n\r\n.header {\r\n  padding: 40px;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.header-title {\r\n  color: white;\r\n  font-size: 3rem;\r\n}\r\n\r\n.nav-btns {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n.active-btn {\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n.home {\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  width: 60%;\r\n  max-width: 700px;\r\n  max-height: 100%;\r\n  padding: 3rem;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.home > p {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.home-img > img {\r\n  width: 20rem;\r\n  height: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n.menu {\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  width: 700px;\r\n  height: max-content;\r\n  padding: 3rem;\r\n  margin: 5rem auto;\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto;\r\n  gap: 2rem;\r\n}\r\n\r\n.menu-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 20px;\r\n  transition: transform ease 0.7s;\r\n  border-radius: 100%;\r\n}\r\n\r\n.menu-item:hover {\r\n  background-color: rgba(99, 98, 98, 0.5);\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\n.menu-item > img {\r\n  width: 250px;\r\n  height: 250px;\r\n}\r\n\r\n.contact {\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  width: 700px;\r\n  height: max-content;\r\n  padding: 3rem;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.contact > p {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nfooter {\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 10px;\r\n}\r\n\r\n",""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},901:(n,e,t)=>{n.exports=t.p+"59a7f8cb9e460ad4c1e3.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{function n(n){const e=document.createElement("p");return e.textContent=n,e}function e(){const e=document.querySelector("#main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div"),r=document.createElement("img");return r.src="../dist/images/chef.jpg",t.classList.add("home-img"),e.appendChild(n("Best pizza in town")),e.appendChild(n("Made with love since 2000")),e.appendChild(t),t.appendChild(r),e.appendChild(n("Order now or visit us")),e}())}function r(n){const e=document.createElement("div");e.classList.add("menu-item");const t=document.createElement("img");t.src=`../dist/images/pizzas/${n.toLowerCase()}.jpg`,t.alt=`${n}`;const r=document.createElement("h2");return r.textContent=n,e.appendChild(t),e.appendChild(r),e}var o=t(379),a=t.n(o),i=t(795),c=t.n(i),d=t(569),s=t.n(d),l=t(565),u=t.n(l),p=t(216),m=t.n(p),h=t(589),f=t.n(h),g=t(426),v={};function b(){const t=document.createElement("header");t.classList.add("header");const o=document.createElement("div");return o.classList.add("header-title"),o.textContent="Délicieux",t.appendChild(o),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("nav-btns");const o=document.createElement("button");o.textContent="HOME",o.classList.add("homeBtn"),o.addEventListener("click",(()=>{e(),x("home")}));const a=document.createElement("button");a.textContent="MENU",a.classList.add("menuBtn"),a.addEventListener("click",(()=>{(function(){const n=document.querySelector("#main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");return n.classList.add("menu"),n.appendChild(r("Capricciosa")),n.appendChild(r("Hawaiian")),n.appendChild(r("Margherita")),n.appendChild(r("Marinara")),n.appendChild(r("Mexican")),n.appendChild(r("Mushroom")),n.appendChild(r("Pepperoni")),n.appendChild(r("Seafood")),n}())})(),x("menu")}));const i=document.createElement("button");return i.textContent="CONTACT",i.classList.add("contactBtn"),i.addEventListener("click",(()=>{(function(){const e=document.querySelector("#main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("img");return t.src="../dist/images/location.jpg",t.alt="Location",e.appendChild(n("Phone: +63999 999 9999")),e.appendChild(n("Email: delicieux2000@gmail.com")),e.appendChild(t),e}())})(),x("contact")})),t.appendChild(o),t.appendChild(a),t.appendChild(i),t}()),t}function x(n){const e=document.querySelectorAll("button"),t=document.querySelector(`.${n}Btn`);e.forEach((n=>{n.classList.remove("active-btn")})),t.classList.add("active-btn")}v.styleTagTransform=f(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=m(),a()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,function(){const n=document.getElementById("content");n.appendChild(b()),n.appendChild(function(){const n=document.createElement("main");return n.setAttribute("id","main"),n}()),n.appendChild(function(){const n=document.createElement("footer");return n.classList.add("footer"),n}()),x("home"),e()}()})()})();