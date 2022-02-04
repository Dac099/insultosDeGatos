(()=>{"use strict";var t,e,r,n,i,a,o,s,d,c,l,f,p,u,x={528:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(81),i=r.n(n),a=r(645),o=r.n(a)()(i());o.push([t.id,'.api-options{display:flex;justify-content:space-around;flex-wrap:wrap}.hero{display:grid;grid-template-rows:1fr 3fr 1fr 1fr;grid-template-columns:1fr 70px;height:35vh}.hero .hero__icon-theme{grid-column:2/3;justify-self:end;width:60px;height:60px;display:grid;place-content:center;border-radius:50%;background-color:#252422}.hero .hero__media-cat{width:200px;height:200px;grid-column:1/2;grid-row:2/3;justify-self:center;border-radius:15%;background-color:#252422}.hero h1{justify-self:center;font-family:"Nunito",sans-serif;font-size:2.5rem;font-size:2rem;grid-column:1/2;grid-row:3/4;align-self:center}.hero .hero__btn-cat{justify-self:center;grid-row:4/5;grid-column:1/2;align-self:flex-start}.text-card{max-width:400px;min-width:none;display:grid;height:30vh;grid-template-rows:15% 85%;gap:5px;font-family:"Quicksand",sans-serif;flex-grow:1;flex-shrink:1;flex-basis:400px}.text-card__title{align-self:end;border-bottom:1px solid #000;font-size:1.7rem}.text-card__text{display:grid;grid-template-rows:1fr 30px 1fr;font-size:1.4rem}.text-card__insulto{display:grid;margin:10px 0px 20px 0px;grid-template-rows:1fr 1fr}.text-card__insulto>input{min-width:250px;max-width:400px;height:minmax(90%, 40px);justify-self:center;padding:5px;font-family:"Quicksand",sans-serif;outline:none}.text-card__insulto div.insulto__option{min-width:250px;max-width:400px;align-self:center;justify-self:center;height:minmax(90%, 40px);padding:5px;font-family:"Quicksand",sans-serif}.text-card .text_card__text-size{display:grid;max-width:350px;margin:0 auto;grid-template-columns:1fr 1fr;grid-template-rows:1fr}.text-card .text_card__text-size label{padding-top:1px}.text-card .text_card__text-size div{justify-self:end}.text-card .text_card__text-size div input{width:100px}.text-card .text-card__color-text{align-self:start;display:grid;margin-top:10px}.text-card .text-card__color-text label{width:fit-content;justify-self:center;align-self:end}.text-card .text-card__color-text input{max-width:250px;max-height:30px;min-width:none;justify-self:center;align-self:start;outline:none}@media(min-width: 380px){.text-card__insulto>input{justify-self:start}.text-card__insulto div.insulto__option{justify-self:start}}.image-card{max-width:400px;min-width:none;display:grid;height:30vh;grid-template-rows:15% 85%;gap:5px;font-family:"Quicksand",sans-serif;flex-grow:1;flex-shrink:1;flex-basis:400px}.image-card h2{align-self:end;border-bottom:1px solid #000;font-size:1.7rem}.image-card__image{display:grid;grid-template-rows:repeat(3, 30px);font-family:"Quicksand",sans-serif;font-size:1.4rem;justify-content:center;align-items:start}*{padding:0;margin:0;box-sizing:border-box}html{font-size:62.5%}body{background-color:#fffcf2;margin:10px}',""]);const s=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);n&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},o=[],s=0;s<t.length;s++){var d=t[s],c=n.base?d[0]+n.base:d[0],l=a[c]||0,f="".concat(c," ").concat(l);a[c]=l+1;var p=r(f),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var x=i(u,n);n.byIndex=s,e.splice(s,0,{identifier:f,updater:x,references:1})}o.push(f)}return o}function i(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,i){var a=n(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<a.length;o++){var s=r(a[o]);e[s].references--}for(var d=n(t,i),c=0;c<a.length;c++){var l=r(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},m={};function h(t){var e=m[t];if(void 0!==e)return e.exports;var r=m[t]={id:t,exports:{}};return x[t](r,r.exports,h),r.exports}h.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return h.d(e,{a:e}),e},h.d=(t,e)=>{for(var r in e)h.o(e,r)&&!h.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},h.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=h(379),e=h.n(t),r=h(795),n=h.n(r),i=h(569),a=h.n(i),o=h(565),s=h.n(o),d=h(216),c=h.n(d),l=h(589),f=h.n(l),p=h(528),(u={}).styleTagTransform=f(),u.setAttributes=s(),u.insert=a().bind(null,"head"),u.domAPI=n(),u.insertStyleElement=c(),e()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals})();