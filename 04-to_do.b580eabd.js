!function(){var e=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Stringify error",e.message)}},t=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},n="tasks",r=document.getElementById("myInput"),a=document.getElementById("myUL");function o(e){var t=document.createElement("span"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}function c(e,t){return{text:e,isDone:t,id:0}}var l=document.getElementById("myUL");document.getElementById("addBtn").addEventListener("click",(function(){var l=r.value.trim();r.value="",""!==l?(function(e){var t=document.createElement("li");t.textContent=e,a.appendChild(t),o(t)}(l),function(r){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t(n);if(console.log("currentState",o),void 0===o){var l=[c(r,a)];e(n,l)}else o.push(c(r,a)),e(n,o)}(l)):alert("Please enter text")})),l.addEventListener("click",(function(e){var t=e.target;"LI"===t.nodeName?t.classList.toggle("checked"):t.classList.contains("close")&&t.parentNode.remove()}))}();
//# sourceMappingURL=04-to_do.b580eabd.js.map
