parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CMkq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){if("Unpaid"===e)return{amount:0,type:"UNPAID",isPerformanceBased:!1,hasIncentives:!1};if("Performance Based"===e)return{amount:0,type:"OTHER",isPerformanceBased:!0,hasIncentives:!1};var n={amount:parseInt(e,10),type:"OTHER",isPerformanceBased:!1,hasIncentives:!1};if(e.includes("Incentives")){n.hasIncentives=!0;var s=e.indexOf("+");e=e.slice(0,s)}if(e.includes("Lump")&&(n.type="LUMPSUM",e=e.slice(0,-9)),e.includes("-")){var t=e.indexOf("-"),i=e.slice(t+1);n.maxAmount=parseInt(i,10)}return e.includes("Month")?n.type="MONTHLY":e.includes("Week")&&(n.type="WEEKLY"),n};exports.default=e;
},{}],"IAOg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){var t=parseInt(e,10);return e.includes("Month")?{time:t,type:"MONTH"}:{time:t,type:"WEEK"}};exports.default=e;
},{}],"s2T4":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./parseStipend")),r=e(require("./parseDuration"));exports.extractData=function(e){var n=e.querySelector(".stipend_container_table_cell").textContent.trim(),o=t.default(n),u=e.querySelectorAll("td")[1].textContent.trim(),a={stipend:o,duration:r.default(u),content:e};return console.log(a),a};
},{"./parseStipend":"CMkq","./parseDuration":"IAOg"}],"hNRT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./utils"),r="#internship_list_container > .individual_internship",t=Array.from(document.querySelectorAll(r)),i=t.map(function(r){return e.extractData(r)});console.log(i);
},{"./utils":"s2T4"}]},{},["hNRT"], null)
//# sourceMappingURL=/content.js.map