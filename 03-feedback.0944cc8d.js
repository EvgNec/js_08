function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("kEUo3");const a=document.querySelector(".feedback-form"),u=document.querySelector("input[name=email]"),i=document.querySelector("textarea[name=message]");a.addEventListener("input",e(l).throttle((function(e){e.target.value;const t={Mail:u.value,Mes:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),a.addEventListener("submit",(function(e){}));const d=localStorage.getItem("feedback-form-state");console.log("data",d),d?console.log("e.target.value"):console.log("Null");
//# sourceMappingURL=03-feedback.0944cc8d.js.map
