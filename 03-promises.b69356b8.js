function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector(".form");let s=null,u=1,a=0;i.addEventListener("submit",(t=>{t.preventDefault();const n=t.target,o=Number(n.elements.amount.value);a=Number(n.elements.delay.value);const r=Number(n.elements.step.value);s=setInterval((()=>{o<u?clearInterval(s):(function(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{n?setTimeout((()=>o({position:e,delay:t})),t):setTimeout((()=>r({position:e,delay:t})),t)}))}(u,a).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),u+=1,a+=r)}))}));
//# sourceMappingURL=03-promises.b69356b8.js.map