import{n as u,s as h}from"./scheduler.Bnzw7RF6.js";const n=[];function k(t,r){return{subscribe:p(t,r).subscribe}}function p(t,r=u){let i;const o=new Set;function b(e){if(h(t,e)&&(t=e,i)){const c=!n.length;for(const s of o)s[1](),n.push(s,t);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(e){b(e(t))}function _(e,c=u){const s=[e,c];return o.add(s),o.size===1&&(i=r(b,a)||u),e(t),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1k2bomt)==null?void 0:f.base)??"";var l;const m=((l=globalThis.__sveltekit_1k2bomt)==null?void 0:l.assets)??d;export{m as a,d as b,k as r,p as w};