import{s as I,n as Y,c as N}from"../chunks/scheduler.ujUJlTDO.js";import{S as O,i as R,e as _,t as u,s as j,c as d,a as $,b as v,d as g,f as q,g as T,h as s,j as k}from"../chunks/index.B8UaEg5s.js";import{p as w}from"../chunks/stores.BKgE7qo-.js";function x(l){let e,r,o="You searched for: "+l[0].params.pokemon,c,E,b,H,n,i=l[0].status+"",m,S,p=l[0].error.message+"",h;return{c(){e=_("section"),r=_("h1"),c=u(o),E=j(),b=_("hr"),H=j(),n=_("h2"),m=u(i),S=u(": "),h=u(p)},l(a){e=d(a,"SECTION",{});var t=$(e);r=d(t,"H1",{});var C=$(r);c=v(C,o),C.forEach(g),E=q(t),b=d(t,"HR",{}),H=q(t),n=d(t,"H2",{});var f=$(n);m=v(f,i),S=v(f,": "),h=v(f,p),f.forEach(g),t.forEach(g)},m(a,t){T(a,e,t),s(e,r),s(r,c),s(e,E),s(e,b),s(e,H),s(e,n),s(n,m),s(n,S),s(n,h)},p(a,[t]){t&1&&o!==(o="You searched for: "+a[0].params.pokemon)&&k(c,o),t&1&&i!==(i=a[0].status+"")&&k(m,i),t&1&&p!==(p=a[0].error.message+"")&&k(h,p)},i:Y,o:Y,d(a){a&&g(e)}}}function y(l,e,r){let o;return N(l,w,c=>r(0,o=c)),[o]}class D extends O{constructor(e){super(),R(this,e,y,x,I,{})}}export{D as component};
