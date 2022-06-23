import{b as v,i as r,a as c,L as g,F as _,d as h,m,E as p,t as a,e as f,s as u}from"./index.6d123792.js";const N=a('<div class="w-12 h-12 bg-slate-100 rounded-full flex justify-center items-center hover:bg-slate-200 transition-colors cursor-pointer mx-auto"></div>'),b=a('<div class="max-w-4xl mx-auto lg:mt-16 px-8 flex flex-col gap-2"><div class="lg:fixed top-10 left-10 flex justify-center mb-5"></div><h2 class="max-w-lg"></h2><div class="flex flex-col"><p>By Adrian Casares</p><p></p></div></div>'),y=a('<div class="max-w-4xl mx-auto px-8 py-8"><hr></div>'),w=a('<div class="py-8 animate-fade-in"></div>'),S=a("<div>An Error Occured</div>");function j(e){const l=v[e.id];return(()=>{const i=w.cloneNode(!0);return r(i,c(p,{fallback:t=>(console.error(t),S.cloneNode(!0)),get children(){return[(()=>{const t=b.cloneNode(!0),n=t.firstChild,s=n.nextSibling,o=s.nextSibling,x=o.firstChild,$=x.nextSibling;return r(n,c(g,{href:"/?from=post",get children(){const d=N.cloneNode(!0);return r(d,c(_,{className:"absolute text-xl text-primary-light opacity-0 scale-x-0 lg:opacity-100 lg:transition-all lg:scale-x-100  lg:duration-300 transition-transform origin-right"}),null),r(d,c(h,{className:"absolute text-xl text-primary-light lg:opacity-0 scale-100 lg:scale-0 transition-transform duration-300"}),null),d}})),r(s,()=>l.title),r($,()=>new Date(l.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:new Date().getFullYear()===new Date(l.date).getFullYear()?void 0:"numeric"})),t})(),y.cloneNode(!0),m(()=>e.children)]}})),i})()}const A=a('<div class="max-w-4xl px-8 flex flex-col gap-8 mx-auto"></div>');function k(e){return(()=>{const l=A.cloneNode(!0);return r(l,()=>e.children),l})()}const C=a('<p class="font-serif text-2xl mb-4 text-primary-light-strong"></p>');function B(e){return(()=>{const l=C.cloneNode(!0);return r(l,()=>e.children),l})()}const F=a('<div class="flex flex-col gap-2"><img></div>'),D=a('<p class="text-xs"></p>');function I(e){return(()=>{const l=F.cloneNode(!0),i=l.firstChild;return r(l,(()=>{const t=m(()=>!!e.caption,!0);return()=>t()&&(()=>{const n=D.cloneNode(!0);return r(n,()=>e.caption),n})()})(),null),f(t=>{const n=`/assets/images/${e.postId}/${e.src}`,s=e.alt,o=`${e.className} object-contain`;return n!==t._v$&&u(i,"src",t._v$=n),s!==t._v$2&&u(i,"alt",t._v$2=s),o!==t._v$3&&(i.className=t._v$3=o),t},{_v$:void 0,_v$2:void 0,_v$3:void 0}),l})()}const E=a('<div class="flex relative gap-8"><div></div><div></div></div>');function W(e){return(()=>{const l=E.cloneNode(!0),i=l.firstChild,t=i.nextSibling;return r(i,()=>e.left),r(t,()=>e.right),f(n=>{const s=`flex-none ${e.leftWidth}`,o=`flex-none ${e.rightWidth}`;return s!==n._v$&&(i.className=n._v$=s),o!==n._v$2&&(t.className=n._v$2=o),n},{_v$:void 0,_v$2:void 0}),l})()}export{j as A,B as H,I,W as S,k as T};
