import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{N as u}from"./assets/vendor-1ca75d29.js";const e=document.querySelector(".form"),c=e.querySelector('button[type="submit"]');function i(s,o){const n=Math.random()>.3,l=`✅ Fulfilled promise ${s} in ${o}ms`,t=`❌ Rejected promise ${s} in ${o}ms`;if(n)try{u.Notify.success(l)}catch(r){console.log(r)}finally{console.log(l)}else try{u.Notify.failure(t)}catch(r){console.log(r)}finally{console.log(t)}}c.addEventListener("click",s=>{s.preventDefault();const o=Number(e.elements.amount.value),n=Number(e.elements.delay.value),l=Number(e.elements.step.value);for(let t=0;t<o;t+=1)setTimeout(()=>{i(t,n+t*l)},n+t*l);e.reset(),c.disabled=!0});const m=[e.elements.delay,e.elements.step,e.elements.amount],a=()=>{let s=!0;m.forEach(o=>{o.value===""&&(s=!1)}),c.disabled=!s};e.addEventListener("input",a);
//# sourceMappingURL=commonHelpers3.js.map
