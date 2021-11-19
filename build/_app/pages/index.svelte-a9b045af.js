import{S as me,i as fe,s as ge,e as p,M as y,c as v,a as m,N as w,d as i,b as s,O as pe,f as K,K as a,P as se,L as ve,Q as Le,j as _e,k as z,m as be,n as q,o as ye,x as ae,u as le,v as we,t as N,J as Ee,g as j,R as H,T as $e,w as ze,r as qe,U as He}from"../chunks/vendor-7d8a119d.js";import Se from"./card.svelte-7f274a04.js";/* empty css                                                           */function Te(f){let e,t,l,o,d,c;return{c(){e=p("button"),t=y("svg"),l=y("path"),o=y("path"),this.h()},l(h){e=v(h,"BUTTON",{"aria-label":!0,title:!0,class:!0});var r=m(e);t=w(r,"svg",{viewBox:!0,class:!0});var _=m(t);l=w(_,"path",{class:!0,d:!0}),m(l).forEach(i),o=w(_,"path",{class:!0,d:!0}),m(o).forEach(i),_.forEach(i),r.forEach(i),this.h()},h(){s(l,"class","light svelte-10xz8oz"),s(l,"d","M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"),s(o,"class","dark svelte-10xz8oz"),s(o,"d","M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"),s(t,"viewBox","0 0 24 24"),s(t,"class","svelte-10xz8oz"),s(e,"aria-label","Toggle theme"),s(e,"title","Toggle theme"),s(e,"class","svelte-10xz8oz"),pe(e,"nice",f[0])},m(h,r){K(h,e,r),a(e,t),a(t,l),a(t,o),d||(c=[se(e,"mousedown",f[2]),se(e,"blur",f[3]),se(e,"click",f[1])],d=!0)},p(h,[r]){r&1&&pe(e,"nice",h[0])},i:ve,o:ve,d(h){h&&i(e),d=!1,Le(c)}}}function Ve(f,e,t){let l=!1,o="light";try{o=localStorage.theme}catch{}return[l,()=>{const{classList:r}=document.querySelector("html");r.remove(o),o=o==="light"?"dark":"light",r.add(o);try{localStorage.theme=o}catch{}},()=>t(0,l=!0),()=>t(0,l=!1)]}class De extends me{constructor(e){super();fe(this,e,Ve,Te,ge,{})}}function ke(f,e,t){const l=f.slice();return l[2]=e[t],l[4]=t,l}function xe(f,e){let t,l,o,d;return l=new Se({props:{question:e[2]}}),{key:f,first:null,c(){t=p("li"),_e(l.$$.fragment),o=z(),this.h()},l(c){t=v(c,"LI",{class:!0});var h=m(t);be(l.$$.fragment,h),o=q(h),h.forEach(i),this.h()},h(){s(t,"class","cards__item svelte-1cao5ge"),this.first=t},m(c,h){K(c,t,h),ye(l,t,null),a(t,o),d=!0},p(c,h){e=c},i(c){d||(ae(l.$$.fragment,c),d=!0)},o(c){le(l.$$.fragment,c),d=!1},d(c){c&&i(t),we(l)}}}function Me(f){let e,t,l,o,d,c,h,r,_,S,T,k,V,R,x,D,Z,W,L,Y,E,oe=f[1].toLocaleDateString("nz-NZ",{weekday:"long"})+"",J,Q,ie=f[1].toLocaleDateString()+"",F,G,C,X,ee,$,g=[],re=new Map,B;L=new De({});let I=f[0];const ne=n=>n[2].id;for(let n=0;n<I.length;n+=1){let u=ke(f,I,n),b=ne(u);re.set(b,g[n]=xe(b,u))}return{c(){e=p("link"),t=p("link"),l=z(),o=p("div"),d=p("div"),c=p("div"),h=p("button"),r=y("svg"),_=y("path"),S=y("path"),T=y("path"),k=y("circle"),V=y("path"),R=z(),x=p("div"),D=p("button"),Z=N("Sign in"),W=z(),_e(L.$$.fragment),Y=z(),E=p("h2"),J=N(oe),Q=N(", "),F=N(ie),G=z(),C=p("h2"),X=N("You have questions!"),ee=z(),$=p("ul");for(let n=0;n<g.length;n+=1)g[n].c();this.h()},l(n){const u=Ee('[data-svelte="svelte-j7na1"]',document.head);e=v(u,"LINK",{rel:!0,href:!0}),t=v(u,"LINK",{rel:!0,href:!0}),u.forEach(i),l=q(n),o=v(n,"DIV",{class:!0});var b=m(o);d=v(b,"DIV",{class:!0});var M=m(d);c=v(M,"DIV",{class:!0});var U=m(c);h=v(U,"BUTTON",{class:!0});var ce=m(h);r=w(ce,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,style:!0,"xml:space":!0});var A=m(r);_=w(A,"path",{style:!0,d:!0}),m(_).forEach(i),S=w(A,"path",{style:!0,d:!0}),m(S).forEach(i),T=w(A,"path",{style:!0,d:!0}),m(T).forEach(i),k=w(A,"circle",{style:!0,cx:!0,cy:!0,r:!0}),m(k).forEach(i),V=w(A,"path",{style:!0,d:!0}),m(V).forEach(i),A.forEach(i),ce.forEach(i),R=q(U),x=v(U,"DIV",{style:!0});var P=m(x);D=v(P,"BUTTON",{class:!0});var ue=m(D);Z=j(ue,"Sign in"),ue.forEach(i),W=q(P),be(L.$$.fragment,P),P.forEach(i),U.forEach(i),Y=q(M),E=v(M,"H2",{});var O=m(E);J=j(O,oe),Q=j(O,", "),F=j(O,ie),O.forEach(i),G=q(M),C=v(M,"H2",{});var he=m(C);X=j(he,"You have questions!"),he.forEach(i),M.forEach(i),ee=q(b),$=v(b,"UL",{class:!0});var de=m($);for(let te=0;te<g.length;te+=1)g[te].l(de);de.forEach(i),b.forEach(i),this.h()},h(){document.title="Abhi's App",s(e,"rel","stylesheet"),s(e,"href","https://fonts.googleapis.com/css?family=Roboto:300,400,500"),s(t,"rel","stylesheet"),s(t,"href","https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"),H(_,"fill","#c3e678"),s(_,"d","M238.345 189.773h247.172c14.626 0 26.483 11.857 26.483 26.483v158.897c0 14.626-11.857 26.483-26.483 26.483H344.276v29.116c0 5.544-6.702 8.32-10.622 4.399l-33.516-33.515h-61.793c-14.626 0-26.483-11.857-26.483-26.483V216.256c0-14.626 11.857-26.483 26.483-26.483z"),H(S,"fill","#a5d76e"),s(S,"d","M211.862 216.256v158.897c0 1.9.218 3.746.599 5.534 61.705-24.77 105.332-85.043 105.332-155.603 0-12.122-1.353-23.918-3.795-35.31h-75.654c-14.625-.001-26.482 11.856-26.482 26.482z"),H(T,"fill","#ff6464"),s(T,"d","M300.138 225.083c0-82.881-67.188-150.069-150.069-150.069S0 142.202 0 225.083c0 72.598 51.555 133.146 120.05 147.054l45.199 45.199c4.171 4.171 11.303 1.217 11.303-4.682v-39.978c70.228-12.525 123.586-73.764 123.586-147.593z"),H(k,"fill","#d2555a"),s(k,"cx","150.069"),s(k,"cy","225.125"),s(k,"r","114.759"),H(V,"fill","#fff"),s(V,"d","M150.074 304.582h-.011c-4.875 0-8.833-3.957-8.833-8.833v-.012c0-4.875 3.957-8.833 8.833-8.833h.011c4.875 0 8.833 3.957 8.833 8.833v.01c.001 4.878-3.957 8.835-8.833 8.835zM361.931 348.67a8.801 8.801 0 0 1-6.242-2.585l-44.138-44.138a8.825 8.825 0 0 1 0-12.483 8.827 8.827 0 0 1 12.483 0l37.897 37.895 82.034-82.034a8.827 8.827 0 0 1 12.483 0 8.825 8.825 0 0 1 0 12.483l-88.276 88.276a8.794 8.794 0 0 1-6.241 2.586zM150.069 269.261a8.829 8.829 0 0 1-8.828-8.828v-2.637c0-11.743 7.631-21.921 18.989-25.327 14.806-4.44 25.148-18.349 25.149-33.826.001-9.183-3.741-17.983-10.536-24.778-6.794-6.794-15.592-10.536-24.775-10.536h-.003c-19.469.001-35.308 15.841-35.308 35.31a8.829 8.829 0 0 1-17.656 0c0-29.203 23.758-52.963 52.962-52.966h.004c13.898 0 27.128 5.578 37.258 15.706 10.13 10.13 15.708 23.363 15.706 37.262-.002 23.211-15.518 44.074-37.732 50.735-3.831 1.149-6.406 4.531-6.406 8.416v2.637a8.822 8.822 0 0 1-8.824 8.832z"),s(r,"xmlns","http://www.w3.org/2000/svg"),s(r,"width","64"),s(r,"height","64"),s(r,"viewBox","0 0 512 512"),H(r,"enable-background","new 0 0 512 512"),s(r,"xml:space","preserve"),s(h,"class","logo svelte-1cao5ge"),s(D,"class","signin svelte-1cao5ge"),H(x,"display","flex"),s(c,"class","login svelte-1cao5ge"),s(d,"class","preamble svelte-1cao5ge"),s($,"class","cards svelte-1cao5ge"),s(o,"class","content svelte-1cao5ge")},m(n,u){a(document.head,e),a(document.head,t),K(n,l,u),K(n,o,u),a(o,d),a(d,c),a(c,h),a(h,r),a(r,_),a(r,S),a(r,T),a(r,k),a(r,V),a(c,R),a(c,x),a(x,D),a(D,Z),a(x,W),ye(L,x,null),a(d,Y),a(d,E),a(E,J),a(E,Q),a(E,F),a(d,G),a(d,C),a(C,X),a(o,ee),a(o,$);for(let b=0;b<g.length;b+=1)g[b].m($,null);B=!0},p(n,[u]){u&1&&(I=n[0],qe(),g=$e(g,u,ne,1,n,I,re,$,He,xe,null,ke),ze())},i(n){if(!B){ae(L.$$.fragment,n);for(let u=0;u<I.length;u+=1)ae(g[u]);B=!0}},o(n){le(L.$$.fragment,n);for(let u=0;u<g.length;u+=1)le(g[u]);B=!1},d(n){i(e),i(t),n&&i(l),n&&i(o),we(L);for(let u=0;u<g.length;u+=1)g[u].d()}}}function Ae(f){let e=[{id:1,heading:"Politics",text:"Should Auckland come out of lockdown? Auckland and parts of Waikato are at Alert Level 3 Step 2. Settings for Auckland will be reviewed on Monday 22 November 2021",owner:"Dylan",responses:1e3,expires:"02:00:00",info:"Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."},{id:2,heading:"Etiquette",text:"Should pineapple go on pizza? The truth is that this sweet fruit has no business on pizza, and everyone knows it, but for those who need explained in detail...",owner:"Concerned Chef",responses:1e4,expires:"00:06:00",info:"Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."},{id:3,heading:"Education",text:"Should schools be closed for the rest of the year?",owner:"Department of Education",responses:200,expires:"00:00:05",info:"Vestibulum nec augue diam tempor ante a ultricies suspendisse mus tortor id, lacus elit dis commodo curae fermentum ligula eget montes proin."},{id:4,heading:"Public Health",text:"Is 90% vaccination rate high enough? The 90 percent vaccination milestone is higher than what we would have initially imagined but we need to keep going, he says, it is not a target - it is a milestone.",owner:"Dylan",responses:1620,expires:"02:30:00",info:"Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."},{id:5,heading:"Public Health",text:"Will you take a booster shot? Ultimately the booster shots will be available to everyone, though those initially seeking a third shot will be the over-65s, border workers and medical staff - the first cohort to be vaccinated earlier this year.",owner:"CDHB",responses:400,expires:"00:06:00",info:"Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."},{id:6,heading:"Public Health",text:"Is the government backtracking? It is looking increasingly likely the whole country will move to the Covid-19 traffic light system before every district health board (DHB) has hit 90 percent fully vaccinated.",owner:"Department of Education",responses:1350,expires:"00:00:05",info:"Vestibulum nec augue diam tempor ante a ultricies suspendisse mus tortor id, lacus elit dis commodo curae fermentum ligula eget montes proin."}],t=new Date;return[e,t]}class je extends me{constructor(e){super();fe(this,e,Ae,Me,ge,{})}}export{je as default};