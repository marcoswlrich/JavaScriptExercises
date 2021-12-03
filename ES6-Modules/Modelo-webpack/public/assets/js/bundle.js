(()=>{"use strict";var r,n,o,t,e,a,i,s,c,p,A,u,l,d,f={122:(r,n,o)=>{o.d(n,{Z:()=>s});var t=o(537),e=o.n(t),a=o(645),i=o.n(a)()(e());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;0,600;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);"]),i.push([r.id,":root {\r\n  --primary-color: #2b2644;\r\n  --primary-color-dark: #121214;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: whitesmoke;\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n}\r\n\r\nform input,\r\nform label,\r\nform button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: azure;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-dark);\r\n}\r\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,uBAAuB;EACvB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;AACrB;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;AACvC",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;0,600;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');\r\n\r\n:root {\r\n  --primary-color: #2b2644;\r\n  --primary-color-dark: #121214;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--primary-color);\r\n  font-family: sans-serif;\r\n  font-size: 1.3em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n  max-width: 640px;\r\n  margin: 50px auto;\r\n  background: whitesmoke;\r\n  padding: 20px;\r\n  border-radius: 20px;\r\n}\r\n\r\nform input,\r\nform label,\r\nform button {\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n  font-size: 24px;\r\n  height: 50px;\r\n  padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n  outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background: var(--primary-color);\r\n  color: azure;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n  background: var(--primary-color-dark);\r\n}\r\n"],sourceRoot:""}]);const s=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var o="",t=void 0!==n[5];return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=r(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o})).join("")},n.i=function(r,o,t,e,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var p=0;p<r.length;p++){var A=[].concat(r[p]);t&&i[A[0]]||(void 0!==a&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=a),o&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=o):A[2]=o),e&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=e):A[4]="".concat(e)),n.push(A))}},n}},537:r=>{r.exports=function(r){var n=r[1],o=r[3];if(!o)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(e," */"),i=o.sources.map((function(r){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function o(r){for(var o=-1,t=0;t<n.length;t++)if(n[t].identifier===r){o=t;break}return o}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],p=t.base?c[0]+t.base:c[0],A=a[p]||0,u="".concat(p," ").concat(A);a[p]=A+1;var l=o(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(d);else{var f=e(d,t);t.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function e(r,n){var o=n.domAPI(n);return o.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;o.update(r=n)}else o.remove()}}r.exports=function(r,e){var a=t(r=r||[],e=e||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=o(a[i]);n[s].references--}for(var c=t(r,e),p=0;p<a.length;p++){var A=o(a[p]);0===n[A].references&&(n[A].updater(),n.splice(A,1))}a=c}}},569:r=>{var n={};r.exports=function(r,o){var t=function(r){if(void 0===n[r]){var o=document.querySelector(r);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,o)=>{r.exports=function(r){var n=o.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(o){!function(r,n,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var e=void 0!==o.layer;e&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,e&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,o)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},m={};function g(r){var n=m[r];if(void 0!==n)return n.exports;var o=m[r]={id:r,exports:{}};return f[r](o,o.exports,g),o.exports}g.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return g.d(n,{a:n}),n},g.d=(r,n)=>{for(var o in n)g.o(n,o)&&!g.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},g.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=g(379),n=g.n(r),o=g(795),t=g.n(o),e=g(569),a=g.n(e),i=g(565),s=g.n(i),c=g(216),p=g.n(c),A=g(589),u=g.n(A),l=g(122),(d={}).styleTagTransform=u(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=t(),d.insertStyleElement=p(),n()(l.Z,d),l.Z&&l.Z.locals&&l.Z.locals})();
//# sourceMappingURL=bundle.js.map