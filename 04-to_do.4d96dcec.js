const e=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Stringify error",e.message)}},t=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},n=document.getElementById("myInput"),o=document.getElementById("myUL");function c(e,t){return{text:e,isDone:t,id:0}}const s=document.getElementById("myUL");document.getElementById("addBtn").addEventListener("click",(function(){const s=n.value.trim();n.value="",""!==s?(function(e){const t=document.createElement("li");t.textContent=e,o.appendChild(t),function(e){const t=document.createElement("span"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}(t)}(s),function(n,o=!1){const s=t("tasks");if(console.log("currentState",s),void 0===s){const t=[c(n,o)];e("tasks",t)}else{const t=[...s];t.push(c(n,o)),e("tasks",t)}}(s)):alert("Please enter text")})),s.addEventListener("click",(function({target:e}){"LI"===e.nodeName?e.classList.toggle("checked"):e.classList.contains("close")&&e.parentNode.remove()}));
//# sourceMappingURL=04-to_do.4d96dcec.js.map
