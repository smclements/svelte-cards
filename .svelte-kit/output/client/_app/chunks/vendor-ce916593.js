function $(){}const Q=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function V(){return Object.create(null)}function E(t){t.forEach(U)}function X(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Ht(t,e,n,s){if(t){const r=Y(t,e,n,s);return t[0](r)}}function Y(t,e,n,s){return t[1]&&s?at(n.ctx.slice(),t[1](s(e))):n.ctx}function Wt(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],i=Math.max(e.dirty.length,r.length);for(let c=0;c<i;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Gt(t,e,n,s,r,u){if(r){const i=Y(e,n,s,u);t.p(i,r)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}const Z=typeof window!="undefined";let ht=Z?()=>window.performance.now():()=>Date.now(),F=Z?t=>requestAnimationFrame(t):$;const S=new Set;function tt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&F(tt)}function mt(t){let e;return S.size===0&&F(tt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let q=!1;function pt(){q=!0}function yt(){q=!1}function gt(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&o.push(d)}e=o}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,d=(r>0&&e[n[r]].claim_order<=l?r+1:gt(1,r,a=>e[n[a]].claim_order,l))-1;s[o]=n[d]+1;const f=d+1;n[f]=o,r=Math.max(f,r)}const u=[],i=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=s[o-1]){for(u.push(e[o-1]);c>=o;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);u.reverse(),i.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<i.length;o++){for(;l<u.length&&i[o].claim_order>=u[l].claim_order;)l++;const d=l<u.length?u[l]:null;t.insertBefore(i[o],d)}}function wt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=nt("style");return $t(et(t),e),e}function $t(t,e){wt(t.head||t,e)}function vt(t,e){if(q){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){q&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function kt(t){t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Ut(){return I(" ")}function Vt(){return I("")}function Xt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Zt(t){return t===""?null:+t}function St(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,s,r=!1){At(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,r||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return s()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function st(t,e,n,s){return it(t,r=>r.nodeName===e,r=>{const u=[];for(let i=0;i<r.attributes.length;i++){const c=r.attributes[i];n[c.name]||u.push(c.name)}u.forEach(i=>r.removeAttribute(i))},()=>s(e))}function te(t,e,n){return st(t,e,n,nt)}function ee(t,e,n){return st(t,e,n,Et)}function Ct(t,e){return it(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>I(e),!0)}function ne(t){return Ct(t," ")}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function re(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function oe(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function ce(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function le(t,e,n){t.classList[n?"add":"remove"](e)}function Nt(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}function ue(t,e=document.body){return Array.from(e.querySelectorAll(t))}const H=new Set;let R=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function rt(t,e,n,s,r,u,i,c=0){const o=16.666/s;let l=`{
`;for(let p=0;p<=1;p+=o){const g=e+(n-e)*u(p);l+=p*100+`%{${i(g,1-g)}}
`}const d=l+`100% {${i(n,1-n)}}
}`,f=`__svelte_${jt(d)}_${c}`,a=et(t);H.add(a);const h=a.__svelte_stylesheet||(a.__svelte_stylesheet=xt(t).sheet),_=a.__svelte_rules||(a.__svelte_rules={});_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${d}`,h.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${s}ms linear ${r}ms 1 both`,R+=1,f}function Mt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),R-=r,R||qt())}function qt(){F(()=>{R||(H.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),H.clear())})}let z;function O(t){z=t}function D(){if(!z)throw new Error("Function called outside component initialization");return z}function ae(t){D().$$.on_mount.push(t)}function fe(t){D().$$.after_update.push(t)}function _e(t,e){D().$$.context.set(t,e)}function de(t){return D().$$.context.get(t)}const C=[],ot=[],L=[],ct=[],Rt=Promise.resolve();let W=!1;function zt(){W||(W=!0,Rt.then(lt))}function P(t){L.push(t)}let G=!1;const J=new Set;function lt(){if(!G){G=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];O(e),Ot(e.$$)}for(O(null),C.length=0;ot.length;)ot.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];J.has(e)||(J.add(e),e())}L.length=0}while(C.length);for(;ct.length;)ct.pop()();W=!1,G=!1,J.clear()}}function Ot(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}let N;function Dt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function K(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const T=new Set;let x;function he(){x={r:0,c:[],p:x}}function me(){x.r||E(x.c),x=x.p}function ut(t,e){t&&t.i&&(T.delete(t),t.i(e))}function Lt(t,e,n,s){if(t&&t.o){if(T.has(t))return;T.add(t),x.c.push(()=>{T.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Pt={duration:0};function pe(t,e,n,s){let r=e(t,n),u=s?0:1,i=null,c=null,o=null;function l(){o&&Mt(t,o)}function d(a,h){const _=a.b-u;return h*=Math.abs(_),{a:u,b:a.b,d:_,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:_=300,easing:y=Q,tick:p=$,css:g}=r||Pt,v={start:ht()+h,b:a};a||(v.group=x,x.r+=1),i||c?c=v:(g&&(l(),o=rt(t,u,a,_,h,y,g)),a&&p(0,1),i=d(v,_),P(()=>K(t,a,"start")),mt(k=>{if(c&&k>c.start&&(i=d(c,_),c=null,K(t,i.b,"start"),g&&(l(),o=rt(t,u,i.b,i.duration,0,y,r.css))),i){if(k>=i.end)p(u=i.b,1-u),K(t,i.b,"end"),c||(i.b?l():--i.group.r||E(i.group.c)),i=null;else if(k>=i.start){const j=k-i.start;u=i.a+i.d*y(j/i.duration),p(u,1-u)}}return!!(i||c)}))}return{run(a){X(r)?Dt().then(()=>{r=r(),f(a)}):f(a)},end(){l(),i=c=null}}}function ye(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function ge(t,e,n,s,r,u,i,c,o,l,d,f){let a=t.length,h=u.length,_=a;const y={};for(;_--;)y[t[_].key]=_;const p=[],g=new Map,v=new Map;for(_=h;_--;){const m=f(r,u,_),b=n(m);let w=i.get(b);w?s&&w.p(m,e):(w=l(b,m),w.c()),g.set(b,p[_]=w),b in y&&v.set(b,Math.abs(_-y[b]))}const k=new Set,j=new Set;function B(m){ut(m,1),m.m(c,d),i.set(m.key,m),d=m.first,h--}for(;a&&h;){const m=p[h-1],b=t[a-1],w=m.key,M=b.key;m===b?(d=m.first,a--,h--):g.has(M)?!i.has(w)||k.has(w)?B(m):j.has(M)?a--:v.get(w)>v.get(M)?(j.add(w),B(m)):(k.add(M),a--):(o(b,i),a--)}for(;a--;){const m=t[a];g.has(m.key)||o(m,i)}for(;h;)B(p[h-1]);return p}function be(t,e){const n={},s={},r={$$scope:1};let u=t.length;for(;u--;){const i=t[u],c=e[u];if(c){for(const o in i)o in c||(s[o]=1);for(const o in c)r[o]||(n[o]=c[o],r[o]=1);t[u]=c}else for(const o in i)r[o]=1}for(const i in s)i in n||(n[i]=void 0);return n}function we(t){return typeof t=="object"&&t!==null?t:{}}function xe(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function Tt(t,e,n,s){const{fragment:r,on_mount:u,on_destroy:i,after_update:c}=t.$$;r&&r.m(e,n),s||P(()=>{const o=u.map(U).filter(X);i?i.push(...o):E(o),t.$$.on_mount=[]}),c.forEach(P)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(C.push(t),zt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,s,r,u,i,c=[-1]){const o=z;O(t);const l=t.$$={fragment:null,ctx:null,props:u,update:$,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:V(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};i&&i(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...h)=>{const _=h.length?h[0]:a;return l.ctx&&r(l.ctx[f],l.ctx[f]=_)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](_),d&&Ft(t,f)),a}):[],l.update(),d=!0,E(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){pt();const f=St(e.target);l.fragment&&l.fragment.l(f),f.forEach(kt)}else l.fragment&&l.fragment.c();e.intro&&ut(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),yt(),lt()}O(o)}class ke{$destroy(){Bt(this,1),this.$destroy=$}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const A=[];function Ee(t,e=$){let n;const s=new Set;function r(c){if(ft(t,c)&&(t=c,n)){const o=!A.length;for(const l of s)l[1](),A.push(l,t);if(o){for(let l=0;l<A.length;l+=2)A[l][0](A[l+1]);A.length=0}}}function u(c){r(c(t))}function i(c,o=$){const l=[c,o];return s.add(l),s.size===1&&(n=e(r)||$),c(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:i}}function Se(t,{delay:e=0,duration:n=400,easing:s=Q}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:u=>`opacity: ${u*r}`}}export{Qt as $,ae as A,at as B,Ee as C,de as D,Ht as E,Gt as F,Jt as G,Wt as H,It as I,ue as J,vt as K,$ as L,Et as M,ee as N,le as O,Xt as P,E as Q,re as R,ke as S,ge as T,ye as U,P as V,pe as W,Se as X,Zt as Y,ce as Z,oe as _,St as a,se as a0,Yt as b,te as c,kt as d,nt as e,Kt as f,Ct as g,ie as h,ve as i,xe as j,Ut as k,Vt as l,$e as m,ne as n,Tt as o,be as p,we as q,he as r,ft as s,I as t,Lt as u,Bt as v,me as w,ut as x,_e as y,fe as z};
