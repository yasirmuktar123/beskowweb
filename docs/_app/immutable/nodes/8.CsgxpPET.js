import{i as gt,s as mt,n as nt,r as tt,b as $,e as R}from"../chunks/scheduler.iakHQt1N.js";import{S as kt,i as Ct,e as _,s as B,c as v,b as S,g as M,h as L,d as E,n as V,o as H,a as G,j as o,p as F,q,v as st,y as W,z as X,A as ht,B as _t,C as vt,x as yt,t as dt,f as pt,w as at,k as bt,D as Y}from"../chunks/index.Biu10eLk.js";import{e as Q}from"../chunks/each.D6YF6ztN.js";function Z(n,{delay:l=0,duration:t=400,easing:e=gt}={}){const u=+getComputedStyle(n).opacity;return{delay:l,duration:t,easing:e,css:i=>`opacity: ${i*u}`}}function ot(n,l,t){const e=n.slice();return e[7]=l[t],e}function it(n,l,t){const e=n.slice();return e[7]=l[t],e[10]=l,e[11]=t,e}function rt(n){let l,t,e,u="Hög",i,c="Mid",d,U="Låg",C,f,T=n[7].name+"",h,z,O,y,m="Markera klar",p,b,K="Ta bort vara",w,N,D,x,P;function g(){n[6].call(t,n[10],n[11])}return{c(){l=_("li"),t=_("select"),e=_("option"),e.textContent=u,i=_("option"),i.textContent=c,d=_("option"),d.textContent=U,C=B(),f=_("div"),h=dt(T),z=B(),O=_("div"),y=_("button"),y.textContent=m,p=B(),b=_("button"),b.textContent=K,w=B(),this.h()},l(k){l=v(k,"LI",{class:!0});var r=S(l);t=v(r,"SELECT",{style:!0});var a=S(t);e=v(a,"OPTION",{style:!0,"data-svelte-h":!0}),M(e)!=="svelte-19rjouz"&&(e.textContent=u),i=v(a,"OPTION",{style:!0,"data-svelte-h":!0}),M(i)!=="svelte-icr2os"&&(i.textContent=c),d=v(a,"OPTION",{style:!0,"data-svelte-h":!0}),M(d)!=="svelte-1q6dbc6"&&(d.textContent=U),a.forEach(E),C=L(r),f=v(r,"DIV",{});var I=S(f);h=pt(I,T),I.forEach(E),z=L(r),O=v(r,"DIV",{});var s=S(O);y=v(s,"BUTTON",{class:!0,"data-svelte-h":!0}),M(y)!=="svelte-jphj0s"&&(y.textContent=m),p=L(s),b=v(s,"BUTTON",{class:!0,"data-svelte-h":!0}),M(b)!=="svelte-8182zt"&&(b.textContent=K),s.forEach(E),w=L(r),r.forEach(E),this.h()},h(){e.__value="red",F(e,e.__value),H(e,"background-color","red"),i.__value="yellow",F(i,i.__value),H(i,"background-color","yellow"),d.__value="green",F(d,d.__value),H(d,"background-color","green"),H(t,"background-color",n[7].viktig),H(t,"color","transparent"),n[7].viktig===void 0&&$(g),V(y,"class","svelte-10l8hhb"),V(b,"class","svelte-10l8hhb"),V(l,"class","svelte-10l8hhb")},m(k,r){G(k,l,r),o(l,t),o(t,e),o(t,i),o(t,d),at(t,n[7].viktig,!0),o(l,C),o(l,f),o(f,h),o(l,z),o(l,O),o(O,y),o(O,p),o(O,b),o(l,w),D=!0,x||(P=[q(t,"change",g),q(y,"click",function(){R(n[4](n[7]))&&n[4](n[7]).apply(this,arguments)}),q(b,"click",function(){R(n[3](n[7]))&&n[3](n[7]).apply(this,arguments)})],x=!0)},p(k,r){n=k,(!D||r&1)&&H(t,"background-color",n[7].viktig),r&1&&at(t,n[7].viktig),(!D||r&1)&&T!==(T=n[7].name+"")&&bt(h,T)},i(k){D||(k&&$(()=>{D&&(N||(N=Y(l,Z,{},!0)),N.run(1))}),D=!0)},o(k){k&&(N||(N=Y(l,Z,{},!1)),N.run(0)),D=!1},d(k){k&&E(l),k&&N&&N.end(),x=!1,tt(P)}}}function ut(n){let l,t=n[7].buy===!1&&rt(n);return{c(){t&&t.c(),l=W()},l(e){t&&t.l(e),l=W()},m(e,u){t&&t.m(e,u),G(e,l,u)},p(e,u){e[7].buy===!1?t?(t.p(e,u),u&1&&X(t,1)):(t=rt(e),t.c(),X(t,1),t.m(l.parentNode,l)):t&&(ht(),_t(t,1,1,()=>{t=null}),vt())},d(e){e&&E(l),t&&t.d(e)}}}function ft(n){let l,t=n[7].name+"",e,u,i,c,d="Markera oklar",U,C,f="Ta bort vara",T,h,z,O,y;return{c(){l=_("li"),e=dt(t),u=B(),i=_("div"),c=_("button"),c.textContent=d,U=B(),C=_("button"),C.textContent=f,T=B(),this.h()},l(m){l=v(m,"LI",{class:!0});var p=S(l);e=pt(p,t),u=L(p),i=v(p,"DIV",{});var b=S(i);c=v(b,"BUTTON",{class:!0,"data-svelte-h":!0}),M(c)!=="svelte-v6fnnz"&&(c.textContent=d),U=L(b),C=v(b,"BUTTON",{class:!0,"data-svelte-h":!0}),M(C)!=="svelte-8182zt"&&(C.textContent=f),b.forEach(E),T=L(p),p.forEach(E),this.h()},h(){V(c,"class","svelte-10l8hhb"),V(C,"class","svelte-10l8hhb"),V(l,"class","svelte-10l8hhb")},m(m,p){G(m,l,p),o(l,e),o(l,u),o(l,i),o(i,c),o(i,U),o(i,C),o(l,T),z=!0,O||(y=[q(c,"click",function(){R(n[4](n[7]))&&n[4](n[7]).apply(this,arguments)}),q(C,"click",function(){R(n[3](n[7]))&&n[3](n[7]).apply(this,arguments)})],O=!0)},p(m,p){n=m,(!z||p&1)&&t!==(t=n[7].name+"")&&bt(e,t)},i(m){z||(m&&$(()=>{z&&(h||(h=Y(l,Z,{},!0)),h.run(1))}),z=!0)},o(m){m&&(h||(h=Y(l,Z,{},!1)),h.run(0)),z=!1},d(m){m&&E(l),m&&h&&h.end(),O=!1,tt(y)}}}function ct(n){let l,t=n[7].buy===!0&&ft(n);return{c(){t&&t.c(),l=W()},l(e){t&&t.l(e),l=W()},m(e,u){t&&t.m(e,u),G(e,l,u)},p(e,u){e[7].buy===!0?t?(t.p(e,u),u&1&&X(t,1)):(t=ft(e),t.c(),X(t,1),t.m(l.parentNode,l)):t&&(ht(),_t(t,1,1,()=>{t=null}),vt())},d(e){e&&E(l),t&&t.d(e)}}}function Tt(n){let l,t,e="Shoppinglist",u,i,c,d,U="Varor att köpa",C,f,T,h,z="Lägg till vara",O,y,m,p,b,K="Köpta varor",w,N,D,x,P=Q(n[0]),g=[];for(let a=0;a<P.length;a+=1)g[a]=ut(it(n,P,a));let k=Q(n[0]),r=[];for(let a=0;a<k.length;a+=1)r[a]=ct(ot(n,k,a));return{c(){l=_("main"),t=_("h1"),t.textContent=e,u=B(),i=_("div"),c=_("section"),d=_("h2"),d.textContent=U,C=B(),f=_("input"),T=B(),h=_("button"),h.textContent=z,O=B(),y=_("ol");for(let a=0;a<g.length;a+=1)g[a].c();m=B(),p=_("section"),b=_("h2"),b.textContent=K,w=B(),N=_("ul");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){l=v(a,"MAIN",{class:!0});var I=S(l);t=v(I,"H1",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-1fuzmjk"&&(t.textContent=e),u=L(I),i=v(I,"DIV",{class:!0});var s=S(i);c=v(s,"SECTION",{class:!0});var j=S(c);d=v(j,"H2",{class:!0,"data-svelte-h":!0}),M(d)!=="svelte-1lj1vgt"&&(d.textContent=U),C=L(j),f=v(j,"INPUT",{type:!0,class:!0}),T=L(j),h=v(j,"BUTTON",{style:!0,"data-svelte-h":!0}),M(h)!=="svelte-mpsvg7"&&(h.textContent=z),O=L(j),y=v(j,"OL",{});var et=S(y);for(let A=0;A<g.length;A+=1)g[A].l(et);et.forEach(E),j.forEach(E),m=L(s),p=v(s,"SECTION",{class:!0});var J=S(p);b=v(J,"H2",{class:!0,"data-svelte-h":!0}),M(b)!=="svelte-tcetzy"&&(b.textContent=K),w=L(J),N=v(J,"UL",{});var lt=S(N);for(let A=0;A<r.length;A+=1)r[A].l(lt);lt.forEach(E),J.forEach(E),s.forEach(E),I.forEach(E),this.h()},h(){V(t,"class","svelte-10l8hhb"),V(d,"class","svelte-10l8hhb"),V(f,"type","text"),V(f,"class","svelte-10l8hhb"),H(h,"display","inline-block"),V(c,"class","svelte-10l8hhb"),V(b,"class","svelte-10l8hhb"),V(p,"class","svelte-10l8hhb"),V(i,"class","categories_container svelte-10l8hhb"),V(l,"class","container svelte-10l8hhb")},m(a,I){G(a,l,I),o(l,t),o(l,u),o(l,i),o(i,c),o(c,d),o(c,C),o(c,f),F(f,n[1]),o(c,T),o(c,h),o(c,O),o(c,y);for(let s=0;s<g.length;s+=1)g[s]&&g[s].m(y,null);o(i,m),o(i,p),o(p,b),o(p,w),o(p,N);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(N,null);D||(x=[q(f,"input",n[5]),q(h,"click",n[2])],D=!0)},p(a,[I]){if(I&2&&f.value!==a[1]&&F(f,a[1]),I&25){P=Q(a[0]);let s;for(s=0;s<P.length;s+=1){const j=it(a,P,s);g[s]?g[s].p(j,I):(g[s]=ut(j),g[s].c(),g[s].m(y,null))}for(;s<g.length;s+=1)g[s].d(1);g.length=P.length}if(I&25){k=Q(a[0]);let s;for(s=0;s<k.length;s+=1){const j=ot(a,k,s);r[s]?r[s].p(j,I):(r[s]=ct(j),r[s].c(),r[s].m(N,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=k.length}},i:nt,o:nt,d(a){a&&E(l),st(g,a),st(r,a),D=!1,tt(x)}}}function Et(n,l,t){let e=[{name:"Mjölk",buy:!1,viktig:"green"}],u="";function i(){u!=""&&e.unshift({name:u,buy:!1,viktig:"green"}),t(0,e)}function c(f){e.splice(e.indexOf(f),1),t(0,e)}function d(f){f.buy=!f.buy,t(0,e)}function U(){u=this.value,t(1,u)}function C(f,T){f[T].viktig=yt(this),t(0,e)}return n.$$.update=()=>{n.$$.dirty&1&&e.sort((f,T)=>{const h={red:0,yellow:1,green:2};return h[f.viktig]-h[T.viktig]})},[e,u,i,c,d,U,C]}class Vt extends kt{constructor(l){super(),Ct(this,l,Et,Tt,mt,{})}}export{Vt as component};