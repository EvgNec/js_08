!function(){var e=document.getElementById("myInput"),t=document.getElementById("myUL");var n=document.getElementById("addBtn"),d=document.getElementById("myUL");n.addEventListener("click",(function(){var n,d,a,c,l,m=e.value.trim();e.value="",""!==m?(n=m,(d=document.createElement("li")).textContent=n,t.appendChild(d),a=d,c=document.createElement("span"),l=document.createTextNode("×"),c.className="close",c.appendChild(l),a.appendChild(c)):alert("Please enter text")})),d.addEventListener("click",(function(e){var t=e.target;"LI"===t.nodeName?t.classList.toggle("checked"):t.classList.contains("close")&&t.parentNode.remove()}))}();
//# sourceMappingURL=05-test.962cc840.js.map
