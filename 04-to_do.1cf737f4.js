!function(){var e=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Stringify error",e.message)}},t=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},n="tasks",a=document.getElementById("myInput"),o=document.getElementById("myUL"),r=0;function c(e){var t=document.createElement("span"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}function d(e,t){return{text:e,isDone:t,id:0}}var l=document.getElementById("myUL");document.getElementById("addBtn").addEventListener("click",(function(){var l=a.value.trim();a.value="",""!==l?(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;console.log("currentID",r);var a=document.createElement("li");a.textContent=e,console.log("liEl.dataset.id1",a.dataset.id),a.dataset.id=n,console.log("liEl.dataset.id2",a.dataset.id),t&&a.classList.add("checked");o.appendChild(a),c(a)}(l),function(a){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=t(n);if(console.log("currentState",c),void 0===c){var l=[d(a,o)];e(n,l)}else c.push(d(a,o)),e(n,c);r+=1}(l)):alert("Please enter text")})),l.addEventListener("click",(function(e){var a=e.target,o=t(n);if(console.log("currentState",o),"LI"===a.nodeName){a.classList.toggle("checked");var r=o.findIndex((function(e){return e.id=a.dataset.id}));console.log("taskIndex",r)}else a.classList.contains("close")&&a.parentNode.remove()}))}();
//# sourceMappingURL=04-to_do.1cf737f4.js.map
