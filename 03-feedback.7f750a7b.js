!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in l)return l[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return l[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("1WSnx"),r="feedback-form-state",u=document.querySelector(".feedback-form"),i=document.querySelector("input[name=email]"),d=document.querySelector("textarea[name=message]");u.addEventListener("input",e(a).throttle((function(e){var t={Mail:i.value,Mes:d.value};localStorage.setItem(r,JSON.stringify(t))}),500)),u.addEventListener("submit",(function(e){e.preventDefault(),console.log("elMail.value",i.value),console.log("elMes.value",d.value),localStorage.removeItem(r),i.value="",d.value=""}));var f=localStorage.getItem(r);!function(e){if(f){var t=JSON.parse(f);console.log("ls",t),i.value=t.Mail,d.value=t.Mes}}()}();
//# sourceMappingURL=03-feedback.7f750a7b.js.map
