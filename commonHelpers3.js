import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{N as c}from"./assets/vendor-1ca75d29.js";const e=document.querySelector(".form"),l=e.querySelector('button[type="submit"]');function a(t,s){const n=Math.random()>.3;return new Promise((o,u)=>{setTimeout(()=>{n?o({position:t,delay:s}):u({position:t,delay:s})},s)})}l.addEventListener("click",t=>{t.preventDefault();const s=Number(e.elements.amount.value),n=Number(e.elements.delay.value),m=Number(e.elements.step.value);for(let o=0;o<s;o+=1)a(o+1,n+o*m).then(({position:r,delay:i})=>{c.Notify.success(`✅ Fulfilled promise ${r} in ${i}ms`)}).catch(({position:r,delay:i})=>{c.Notify.failure(`❌ Rejected promise ${r} in ${i}ms`)});e.reset(),l.disabled=!0});const p=[e.elements.delay,e.elements.step,e.elements.amount],d=()=>{let t=!0;p.forEach(s=>{s.value===""&&(t=!1)}),l.disabled=!t};e.addEventListener("input",d);
//# sourceMappingURL=commonHelpers3.js.map