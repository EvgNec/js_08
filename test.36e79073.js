!function(){var e=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Stringify error",e.message)}},t="TODO",n=document.getElementById("myInput"),o=document.getElementById("myUL");function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{text:e,isDone:t,id:0}}function r(e){var t=document.createElement("span"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}var c=document.getElementById("addBtn"),d=document.getElementById("myUL");c.addEventListener("click",(function(){var c,d,l,i=n.value.trim();""!==i?(!function(e){var t=document.createElement("li");t.textContent=e,o.appendChild(t),r(t)}(i),n.value="",c=i,void 0===(l=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(t))?e(t,a(c,d)):(console.log("curentState2",l),console.log("curentState3",l.push(a(c,d))),e(t,l.push(a(c,d))))):alert("Please enter")})),d.addEventListener("click",(function(e){var t=e.target;console.log("target.nodeName",t.nodeName),t.nodeName="LI",t.classList.toggle("checked")})),window.addEventListener("DOMContentLoaded",(function(){}))}();
//# sourceMappingURL=test.36e79073.js.map
