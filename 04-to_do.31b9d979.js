const e=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Stringify error",e.message)}},t=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},n=document.getElementById("myInput"),s=document.getElementById("myUL");let c=0;function o(e,t){return{text:e,isDone:t,id:c}}const a=document.getElementById("myUL");document.getElementById("addBtn").addEventListener("click",(function(){const a=n.value.trim();n.value="",""!==a?(function(e,t=!1,n=c){const o=document.createElement("li");o.textContent=e,o.dataset.id=n,t&&o.classList.add("checked");s.appendChild(o),function(e){const t=document.createElement("span"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}(o)}(a),function(n,s=!1){const a=t("tasks");if(void 0===a){const t=[o(n,s)];e("tasks",t)}else a.push(o(n,s)),e("tasks",a);c+=1}(a)):alert("Please enter text")})),a.addEventListener("click",(function({target:n}){const s=t("tasks");if("LI"===n.nodeName){n.classList.toggle("checked");const e=s.findIndex((e=>Number(e.id)===Number(n.dataset.id)));s[e].isDone=!s[e].isDone}else if(n.classList.contains("close")){n.parentNode.remove();const e=s.findIndex((e=>Number(e.id)===Number(n.parentNode.dataset.id)));s.splice(e,1)}e("tasks",s)}));
//# sourceMappingURL=04-to_do.31b9d979.js.map
