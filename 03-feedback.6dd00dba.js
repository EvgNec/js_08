function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var r=l("kEUo3");const a=document.querySelector(".feedback-form"),i=document.querySelector("input[name=email]"),u=document.querySelector("input[name=message]");a.addEventListener("input",e(r).throttle((function(e){const t=e.target.value;console.log("dataset",e.target.dataset),console.log("e.target",e.target),console.log(t),console.log("elMail",i.value),console.log("elMes",u)}),500)),a.addEventListener("submit",(function(e){}));
//# sourceMappingURL=03-feedback.6dd00dba.js.map