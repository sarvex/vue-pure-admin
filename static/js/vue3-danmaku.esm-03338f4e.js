import{d as F,r as c,i as _,s as o,o as G,a as K,n as O,aI as Q,J as Y,c as Z,e as ee,f as te,a8 as ne}from"./index-c80d305d.js";function ae(a,r,h="modelValue",i){return o({get:()=>a[h],set:l=>{r(`update:${h}`,i?i(l):l)}})}var b=F({components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","update:danmus"],setup(a,{emit:r,slots:h}){let i=c(document.createElement("div")),l=c(document.createElement("div"));const y=c(0),L=c(0);let C=0;const w=c(0),S=c(0),f=c(0),k=c(!1),p=c(!1),g=c({}),s=ae(a,r,"danmus"),u=_({channels:o(()=>a.channels||w.value),autoplay:o(()=>a.autoplay),loop:o(()=>a.loop),useSlot:o(()=>a.useSlot),debounce:o(()=>a.debounce),randomChannel:o(()=>a.randomChannel)}),m=_({height:o(()=>S.value),fontSize:o(()=>a.fontSize),speeds:o(()=>a.speeds),top:o(()=>a.top),right:o(()=>a.right)});G(()=>{N()}),K(()=>{z()});function N(){B(),a.isSuspend&&A(),u.autoplay&&E()}function B(){y.value=i.value.offsetWidth,L.value=i.value.offsetHeight}function E(){p.value=!1,C||(C=setInterval(()=>D(),u.debounce))}function D(){if(!p.value&&s.value.length)if(f.value>s.value.length-1){const t=l.value.children.length;u.loop&&t<f.value&&(r("list-end"),f.value=0,$())}else $()}function $(){const t=u.loop?f.value%s.value.length:f.value;let e=document.createElement("div");u.useSlot?e=W(t).$el:(e.innerHTML=s.value[t],e.setAttribute("style",a.extraStyle),e.style.fontSize=`${m.fontSize}px`,e.style.lineHeight=`${m.fontSize}px`),e.classList.add("dm"),l.value.appendChild(e),e.style.opacity="0",O(()=>{m.height||(S.value=e.offsetHeight),u.channels||(w.value=Math.floor(L.value/(m.height+m.top)));let n=H(e);if(n>=0){const d=e.offsetWidth,v=m.height;e.classList.add("move"),e.style.opacity="1";const x=y.value/m.speeds;e.style.animationDuration=`${x}s`,e.style.top=n*(v+m.top)+"px",e.style.width=d+m.right+"px",e.style.setProperty("--dm-left-offset",`-${y.value}px`),e.dataset.index=`${t}`,e.addEventListener("animationend",()=>{Number(e.dataset.index)===s.value.length-1&&!u.loop&&r("play-end",e.dataset.index),l.value.removeChild(e)}),e.classList.length>0&&f.value++}else e.classList.length>0&&l.value.removeChild(e)})}function W(t){const e=s.value[t],n=t;return Q({render(){return Y("div",{},[h.dm&&h.dm({danmu:e,index:n})])}}).mount(document.createElement("div"))}function H(t){let e=[...Array(u.channels).keys()];u.randomChannel&&(e=e.sort(()=>.5-Math.random()));for(let n of e){const d=g.value[n];if(d&&d.length)for(let v=0;v<d.length;v++){const x=I(d[v])-10;if(x<=(t.offsetWidth-d[v].offsetWidth)*.88||x<=0)break;if(v===d.length-1)return g.value[n].push(t),t.addEventListener("animationend",()=>g.value[n].splice(0,1)),n%u.channels}else return g.value[n]=[t],t.addEventListener("animationend",()=>g.value[n].splice(0,1)),n%u.channels}return-1}function I(t){const e=t.offsetWidth||parseInt(t.style.width),n=t.getBoundingClientRect().right||l.value.getBoundingClientRect().right+e;return l.value.getBoundingClientRect().right-n}function T(){clearInterval(C),C=0}function A(){let t=[];l.value.addEventListener("mousemove",e=>{let n=e.target;n.className.includes("dm")||(n=n.closest(".dm")||n),n.className.includes("dm")&&(n.classList.add("pause"),t.push(n))}),l.value.addEventListener("mouseout",e=>{let n=e.target;n.className.includes("dm")||(n=n.closest(".dm")||n),n.className.includes("dm")&&(n.classList.remove("pause"),t.forEach(d=>{d.classList.remove("pause")}),t=[])})}function z(){T(),f.value=0}function M(){S.value=0,N()}function R(){g.value={},l.value.innerHTML="",p.value=!0,k.value=!1,z()}function X(){p.value=!0}function V(t){if(f.value===s.value.length)return s.value.push(t),s.value.length-1;{const e=f.value%s.value.length;return s.value.splice(e,0,t),e+1}}function P(t){return s.value.push(t),s.value.length-1}function j(){return!p.value}function q(){k.value=!1}function J(){k.value=!0}function U(){B();const t=l.value.getElementsByClassName("dm");for(let e=0;e<t.length;e++)t[e].style.setProperty("--dm-left-offset",`-${y}px`)}return{container:i,dmContainer:l,hidden:k,paused:p,danmuList:s,getPlayState:j,resize:U,play:E,pause:X,stop:R,show:q,hide:J,reset:M,add:V,push:P}}});const le={ref:"container",class:"vue-danmaku"};function se(a,r,h,i,l,y){return Z(),ee("div",le,[te("div",{ref:"dmContainer",class:["danmus",{show:!a.hidden},{paused:a.paused}]},null,2),ne(a.$slots,"default")],512)}function ie(a,r){r===void 0&&(r={});var h=r.insertAt;if(!(!a||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",h==="top"&&i.firstChild?i.insertBefore(l,i.firstChild):i.appendChild(l),l.styleSheet?l.styleSheet.cssText=a:l.appendChild(document.createTextNode(a))}}var oe=`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  right: 0;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(100%);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 10;
}
@keyframes moveLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(var(--dm-left-offset));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(var(--dm-left-offset));
  }
}`;ie(oe);b.render=se;b.__file="src/lib/Danmaku.vue";const de=b;export{de as V};
