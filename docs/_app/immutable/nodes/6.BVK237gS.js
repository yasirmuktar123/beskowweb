import{s as ce,b as de,n as ee,r as ve,c as me,o as _e,d as ge}from"../chunks/scheduler.NrZV1iTz.js";import{S as be,i as Ce,e as f,s as C,c as h,b as j,g as B,h as y,d as x,o as i,n as c,a as pe,j as l,p as T,u as re,q as U,r as ye,v as Le,t as we,f as Ee,w as ke}from"../chunks/index.qIyFuGNE.js";import{u as ue}from"../chunks/user.CIJRMkxj.js";import{b as Ne}from"../chunks/paths.C8usDFzZ.js";function ie(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function fe(t,a,u){const v=t.slice();return v[14]=a[u],v}function he(t){let a,u=t[14].namn+"",v;return{c(){a=f("option"),v=we(u),this.h()},l(m){a=h(m,"OPTION",{});var r=j(a);v=Ee(r,u),r.forEach(x),this.h()},h(){a.__value=t[14].value,T(a,a.__value)},m(m,r){pe(m,a,r),l(a,v)},p:ee,d(m){m&&x(a)}}}function Ie(t){let a,u,v="Register",m,r,e,d,S,b,H="Namn:",R,L,V,E,D="Mail:",q,g,J,k,te="Lösenord:",z,N,G,A,le="Födelsedatum:",K,I,Q,P,ne="Färg:",W,w,X,F,Y,M,se=`Har du redan ett konto? <a href="${Ne}/login" style="color: lightblue;">Logga in</a>.`,Z,ae,O=ie(t[5]),p=[];for(let n=0;n<O.length;n+=1)p[n]=he(fe(t,O,n));return{c(){a=f("main"),u=f("h1"),u.textContent=v,m=C(),r=f("div"),e=f("form"),d=f("div"),S=C(),b=f("label"),b.textContent=H,R=C(),L=f("input"),V=C(),E=f("label"),E.textContent=D,q=C(),g=f("input"),J=C(),k=f("label"),k.textContent=te,z=C(),N=f("input"),G=C(),A=f("label"),A.textContent=le,K=C(),I=f("input"),Q=C(),P=f("label"),P.textContent=ne,W=C(),w=f("select");for(let n=0;n<p.length;n+=1)p[n].c();X=C(),F=f("input"),Y=C(),M=f("p"),M.innerHTML=se,this.h()},l(n){a=h(n,"MAIN",{class:!0});var _=j(a);u=h(_,"H1",{"data-svelte-h":!0}),B(u)!=="svelte-issj3d"&&(u.textContent=v),m=y(_),r=h(_,"DIV",{class:!0});var o=j(r);e=h(o,"FORM",{});var s=j(e);d=h(s,"DIV",{style:!0}),j(d).forEach(x),S=y(s),b=h(s,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),B(b)!=="svelte-b1h0v6"&&(b.textContent=H),R=y(s),L=h(s,"INPUT",{type:!0,id:!0,style:!0}),V=y(s),E=h(s,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),B(E)!=="svelte-6oby8f"&&(E.textContent=D),q=y(s),g=h(s,"INPUT",{type:!0,id:!0,style:!0}),J=y(s),k=h(s,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),B(k)!=="svelte-1i1nikh"&&(k.textContent=te),z=y(s),N=h(s,"INPUT",{type:!0,id:!0,style:!0}),G=y(s),A=h(s,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),B(A)!=="svelte-1k96ww8"&&(A.textContent=le),K=y(s),I=h(s,"INPUT",{type:!0,id:!0,style:!0}),Q=y(s),P=h(s,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),B(P)!=="svelte-o1j9qu"&&(P.textContent=ne),W=y(s),w=h(s,"SELECT",{id:!0,style:!0});var oe=j(w);for(let $=0;$<p.length;$+=1)p[$].l(oe);oe.forEach(x),X=y(s),F=h(s,"INPUT",{type:!0,style:!0}),s.forEach(x),Y=y(o),M=h(o,"P",{style:!0,"data-svelte-h":!0}),B(M)!=="svelte-189xagv"&&(M.innerHTML=se),o.forEach(x),_.forEach(x),this.h()},h(){i(d,"width","100px"),i(d,"height","100px"),i(d,"border-radius","50%"),i(d,"overflow","hidden"),i(d,"background-color",t[4]),c(b,"for","name"),i(b,"color","white"),c(L,"type","text"),c(L,"id","name"),i(L,"color","black"),c(E,"for","mail"),i(E,"color","white"),c(g,"type","email"),c(g,"id","mail"),i(g,"color","black"),c(k,"for","pass"),i(k,"color","white"),c(N,"type","password"),c(N,"id","pass"),i(N,"color","black"),c(A,"for","age"),i(A,"color","white"),c(I,"type","date"),c(I,"id","age"),i(I,"color","black"),c(P,"for","Favoritfärg"),i(P,"color","white"),c(w,"id","Favoritfärg"),i(w,"color","black"),t[4]===void 0&&de(()=>t[11].call(w)),c(F,"type","submit"),F.value="Registrera",i(F,"margin-top","10px"),i(M,"color","white"),c(r,"class","container svelte-13uo31c"),c(a,"class","svelte-13uo31c")},m(n,_){pe(n,a,_),l(a,u),l(a,m),l(a,r),l(r,e),l(e,d),l(e,S),l(e,b),l(e,R),l(e,L),T(L,t[0]),l(e,V),l(e,E),l(e,q),l(e,g),T(g,t[1]),l(e,J),l(e,k),l(e,z),l(e,N),T(N,t[2]),l(e,G),l(e,A),l(e,K),l(e,I),T(I,t[3]),l(e,Q),l(e,P),l(e,W),l(e,w);for(let o=0;o<p.length;o+=1)p[o]&&p[o].m(w,null);re(w,t[4],!0),l(e,X),l(e,F),l(r,Y),l(r,M),Z||(ae=[U(L,"input",t[7]),U(g,"input",t[8]),U(N,"input",t[9]),U(I,"input",t[10]),U(w,"change",t[11]),U(e,"submit",ye(t[6]))],Z=!0)},p(n,[_]){if(_&16&&i(d,"background-color",n[4]),_&1&&L.value!==n[0]&&T(L,n[0]),_&2&&g.value!==n[1]&&T(g,n[1]),_&4&&N.value!==n[2]&&T(N,n[2]),_&8&&T(I,n[3]),_&32){O=ie(n[5]);let o;for(o=0;o<O.length;o+=1){const s=fe(n,O,o);p[o]?p[o].p(s,_):(p[o]=he(s),p[o].c(),p[o].m(w,null))}for(;o<p.length;o+=1)p[o].d(1);p.length=O.length}_&48&&re(w,n[4])},i:ee,o:ee,d(n){n&&x(a),Le(p,n),Z=!1,ve(ae)}}}function Te(t,a,u){let v;me(t,ue,g=>u(13,v=g));let m=[],r="",e="",d="",S="",b="black",H=[{namn:"vit",value:"white"},{namn:"Röd",value:"red"},{namn:"Svart",value:"black"}];_e(()=>{v.length>2&&(m=JSON.parse(v))});function R(){let g={username:r,email:e,password:d,color:b};if(m.filter(k=>k.username===r).length>0){alert("Användarnamnet finns redan! Vänligen välj ett annat.");return}m=[...m,g],ge(ue,v=JSON.stringify(m),v),alert(`Välkommen ${r}! 
E-post: ${e} 
Lösenord: ${d}`)}function L(){r=this.value,u(0,r)}function V(){e=this.value,u(1,e)}function E(){d=this.value,u(2,d)}function D(){S=this.value,u(3,S)}function q(){b=ke(this),u(4,b),u(5,H)}return[r,e,d,S,b,H,R,L,V,E,D,q]}class Me extends be{constructor(a){super(),Ce(this,a,Te,Ie,ce,{})}}export{Me as component};