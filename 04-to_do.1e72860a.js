!function(){var e=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Stringify error",e.message)}},t=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},n="tasks",r=document.getElementById("myInput"),a=document.getElementById("myUL"),d=0;function i(e){var t=document.createElement("span"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}function o(e,t){return{text:e,isDone:t,id:d}}var c=document.getElementById("myUL");document.getElementById("addBtn").addEventListener("click",(function(){var c=r.value.trim();r.value="",""!==c?(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d,r=document.createElement("li");r.textContent=e,r.dataset.id=n,t&&r.classList.add("checked");a.appendChild(r),i(r)}(c),function(r){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t(n);if(void 0===i){var c=[o(r,a)];e(n,c)}else i.push(o(r,a)),e(n,i);d+=1}(c)):alert("Please enter text")})),c.addEventListener("click",(function(r){var a=r.target,d=t(n);if("LI"===a.nodeName){a.classList.toggle("checked");var i=d.findIndex((function(e){return Number(e.id)===Number(a.dataset.id)}));d[i].isDone=!d[i].isDone}else if(a.classList.contains("close")){a.parentNode.remove();var o=d.findIndex((function(e){return Number(e.id)===Number(a.parentNode.dataset.id)}));d.splice(o,1)}e(n,d)}))}();
//# sourceMappingURL=04-to_do.1e72860a.js.map
