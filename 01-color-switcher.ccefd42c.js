const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;function n(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.btnStart.addEventListener("click",(()=>{e=setInterval(n,1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStop.disabled=!0,t.btnStart.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ccefd42c.js.map