import{S as z,i as C,s as F,k as v,e as k,t as E,l as q,R as J,d as r,n as h,c as b,a as H,g as R,b as L,f as u,H as S,J as j}from"../chunks/vendor-3742d41f.js";function O(a){let t,o,s,f,_,i,c,n,m,d;return document.title=t=a[1],{c(){o=v(),s=k("h1"),f=E(a[1]),_=v(),i=k("pre"),c=E(a[2]),n=v(),m=v(),d=q(),this.h()},l(e){J('[data-svelte="svelte-1az6e94"]',document.head).forEach(r),o=h(e),s=b(e,"H1",{class:!0});var p=H(s);f=R(p,a[1]),p.forEach(r),_=h(e),i=b(e,"PRE",{});var y=H(i);c=R(y,a[2]),y.forEach(r),n=h(e),m=h(e),d=q(),this.h()},h(){L(s,"class","svelte-akq949")},m(e,l){u(e,o,l),u(e,s,l),S(s,f),u(e,_,l),u(e,i,l),S(i,c),u(e,n,l),u(e,m,l),u(e,d,l)},p(e,[l]){l&2&&t!==(t=e[1])&&(document.title=t)},i:j,o:j,d(e){e&&r(o),e&&r(s),e&&r(_),e&&r(i),e&&r(n),e&&r(m),e&&r(d)}}}function x({error:a,status:t}){return{props:{error:a,status:t}}}function P(a,t,o){let{status:s}=t,{error:f}=t;const _=typeof navigator!="undefined"&&navigator.onLine===!1,i=_?"Offline":s,c=_?"Find the internet and try again":f.message;return a.$$set=n=>{"status"in n&&o(3,s=n.status),"error"in n&&o(0,f=n.error)},[f,i,c,s]}class A extends z{constructor(t){super();C(this,t,P,O,F,{status:3,error:0})}}export{A as default,x as load};