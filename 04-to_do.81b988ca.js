const e=document.getElementById("myInput"),t=document.getElementById("myUL");const n=document.getElementById("myUL");document.getElementById("addBtn").addEventListener("click",(function(){const n=e.value.trim();e.value="",""!==n?function(e){const n=document.createElement("li");n.textContent=e,t.appendChild(n),function(e){const t=document.createElement("span"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}(n)}(n):alert("Please enter text")})),n.addEventListener("click",(function({target:e}){console.log("target",e)}));
//# sourceMappingURL=04-to_do.81b988ca.js.map
