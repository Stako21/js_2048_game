parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,a=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw i}}}}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var r,o,i,a,u=0,c=4,f=4,s=[],l="",d=document.getElementsByTagName("tr"),h=document.querySelector(".start"),v=document.querySelector(".message-lose"),m=document.querySelector(".message-win"),g=document.querySelector(".message-start"),y=!1;function p(){var t=JSON.stringify(s);switch(l){case"up":E("up"),JSON.stringify(s)!==t&&M();break;case"down":E("down"),JSON.stringify(s)!==t&&M();break;case"left":E("left"),JSON.stringify(s)!==t&&M();break;case"right":E("right"),JSON.stringify(s)!==t&&M()}b(),y=!0,C()&&m.classList.remove("hidden"),k("up")||k("down")||k("right")||k("left")||v.classList.remove("hidden")}function w(t){return"ArrowUp"===t?"up":"ArrowDown"===t?"down":"ArrowLeft"===t?"left":"ArrowRight"===t?"right":""}function S(){var t=i-r,n=a-o,e=Math.abs(t),u=Math.abs(n);Math.max(e,u)<100||(l=e>u?t>0?"right":"left":n>0?"down":"up",p())}function b(){document.querySelector(".game-score").textContent=u}function L(){var n,e=t(s);try{for(e.s();!(n=e.n()).done;){if(n.value.some(function(t){return 0===t}))return!0}}catch(r){e.e(r)}finally{e.f()}return!1}function A(){return Math.floor(100*Math.random())<10?4:2}function M(){if(L())for(var t=!1;!t;){var n=Math.floor(Math.random()*c),e=Math.floor(Math.random()*f);0===s[n][e]&&(s[n][e]=A(),N(),t=!0)}}function N(){for(var t=0;t<s.length;t++)for(var n=d[t].getElementsByTagName("td"),e=0;e<n.length;e++){x(n[e],s[t][e])}}function x(t,n){n?(t.textContent="",t.textContent="".concat(n),t.className="field-cell",t.classList.add("field-cell--".concat(n))):(t.textContent="",t.className="field-cell")}function E(t){for(var n=0;n<c;n++){for(var e=[],r=0;r<f;r++){var o=0;o="right"===t||"left"===t?s[n][r]:s[r][n],e.push(o)}for(var i=O(e,t);i.length<e.length;)"right"===t||"down"===t?i.unshift(0):i.push(0);for(var a=0;a<f;a++)"right"===t||"left"===t?s[n][a]=i[a]:s[a][n]=i[a]}N()}function O(t,n){return"right"===n||"down"===n?t.reverse().filter(function(t){return t>0}).map(function(t,n,e){if(t===e[n+1]){e[n+1]=0;var r=2*t;return u+=r,r}return t}).reverse().filter(function(t){return t>0}):t.filter(function(t){return t>0}).map(function(t,n,e){if(t===e[n+1]){e[n+1]=0;var r=2*t;return u+=r,r}return t}).filter(function(t){return t>0})}function k(t){for(var n=0;n<c;n++)for(var e=0;e<f;e++){var r=s[n][e],o=void 0;if("up"===t?o=n>0?s[n-1][e]:void 0:"right"===t?o=e<f-1?s[n][e+1]:void 0:"down"===t?o=n<c-1?s[n+1][e]:void 0:"left"===t&&(o=e>0?s[n][e-1]:void 0),0!==r&&(0===o||r===o))return!0}return!1}function C(){return!!s.some(function(t){return t.some(function(t){return 2048===t})})}h.addEventListener("click",function(){s.length=0;for(var t=0;t<c;t++){for(var n=[],e=0;e<f;e++)n.push(0);s.push(n)}y||document.addEventListener("keydown",function(t){l=w(t.key),p()}),M(),M(),u=0,h.textContent="Restart",h.classList.add("restart"),g.classList.add("hidden"),m.classList.add("hidden"),v.classList.add("hidden")}),document.addEventListener("touchstart",function(t){r=t.touches[0].clientX,o=t.touches[0].clientY}),document.addEventListener("touchend",function(t){i=t.changedTouches[0].clientX,a=t.changedTouches[0].clientY,S()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5a44344a.js.map