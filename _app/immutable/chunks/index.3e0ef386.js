function w(){}const ot=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(Q)}function B(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function qt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function lt(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(ut(e,n))}function zt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,u){if(r){const o=U(e,n,i,u);t.p(o,r)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t,e,n){return t.set(n),e}const V=typeof window<"u";let at=V?()=>window.performance.now():()=>Date.now(),H=V?t=>requestAnimationFrame(t):w;const b=new Set;function X(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&H(X)}function ft(t){let e;return b.size===0&&H(X),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let O=!1;function _t(){O=!0}function dt(){O=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:ht(1,r,h=>e[n[h]].claim_order,l))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);u.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<u.length&&o[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(o[c],_)}}function pt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=tt("style");return gt(Y(t),e),e.sheet}function gt(t,e){return pt(t.head||t,e),e.sheet}function xt(t,e){if(O){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Jt(){return F(" ")}function Kt(){return F("")}function Qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ut(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,r=!1){bt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function wt(t,e,n,i){return et(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||u.push(s.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Xt(t,e,n){return wt(t,e,n,tt)}function vt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Yt(t){return vt(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e){t.value=e??""}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ne(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ie(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function re(t,e){return new t(e)}const k=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:yt(e),rules:{}};return k.set(t,n),n}function I(t,e,n,i,r,u,o,s=0){const c=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*u(y);l+=y*100+`%{${o(g,1-g)}}
`}const _=l+`100% {${o(n,1-n)}}
}`,a=`__svelte_${Nt(_)}_${s}`,h=Y(t),{stylesheet:f,rules:d}=k.get(h)||At(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function Ct(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||St())}function St(){H(()=>{M||(k.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),k.clear())})}let A;function N(t){A=t}function W(){if(!A)throw new Error("Function called outside component initialization");return A}function se(t){W().$$.on_mount.push(t)}function oe(t){W().$$.after_update.push(t)}function ce(t){W().$$.on_destroy.push(t)}const $=[],J=[],D=[],K=[],nt=Promise.resolve();let z=!1;function it(){z||(z=!0,nt.then(rt))}function le(){return it(),nt}function T(t){D.push(t)}const q=new Set;let x=0;function rt(){if(x!==0)return;const t=A;do{try{for(;x<$.length;){const e=$[x];x++,N(e),Dt(e.$$)}}catch(e){throw $.length=0,x=0,e}for(N(null),$.length=0,x=0;J.length;)J.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];q.has(n)||(q.add(n),n())}D.length=0}while($.length);for(;K.length;)K.pop()();z=!1,q.clear(),N(t)}function Dt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let E;function jt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function L(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function ue(){p={r:0,c:[],p}}function ae(){p.r||v(p.c),p=p.p}function kt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Mt={duration:0};function _e(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),o=i?0:1,s=null,c=null,l=null;function _(){l&&Ct(t,l)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ot,tick:g=w,css:P}=u||Mt,R={start:at()+d,b:f};f||(R.group=p,p.r+=1),s||c?c=R:(P&&(_(),l=I(t,o,f,m,d,y,P)),f&&g(0,1),s=a(R,m),T(()=>L(t,f,"start")),ft(C=>{if(c&&C>c.start&&(s=a(c,m),c=null,L(t,s.b,"start"),P&&(_(),l=I(t,o,s.b,s.duration,0,y,u.css))),s){if(C>=s.end)g(o=s.b,1-o),L(t,s.b,"end"),c||(s.b?_():--s.group.r||v(s.group.c)),s=null;else if(C>=s.start){const st=C-s.start;o=s.a+s.d*y(st/s.duration),g(o,1-o)}}return!!(s||c)}))}return{run(f){B(u)?jt().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),s=c=null}}}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Tt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||T(()=>{const o=t.$$.on_mount.map(Q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),u.forEach(T)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&($.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,u,o,s=[-1]){const c=A;N(t);const l=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),_&&Pt(t,a)),h}):[],l.update(),_=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){_t();const a=$t(e.target);l.fragment&&l.fragment.l(a),a.forEach(Z)}else l.fragment&&l.fragment.c();e.intro&&kt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),dt(),rt()}N(c)}class pe{$destroy(){Ot(this,1),this.$destroy=w}$on(e,n){if(!B(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as A,Tt as B,Ot as C,xt as D,zt as E,Ht as F,Ft as G,Bt as H,Lt as I,qt as J,ie as K,te as L,Qt as M,It as N,Wt as O,ne as P,ot as Q,ce as R,pe as S,T,_e as U,Ut as V,v as W,Jt as a,Gt as b,Yt as c,fe as d,Kt as e,ae as f,kt as g,Z as h,me as i,oe as j,tt as k,Xt as l,$t as m,w as n,se as o,Vt as p,ee as q,F as r,Rt as s,le as t,vt as u,Zt as v,ue as w,J as x,re as y,de as z};