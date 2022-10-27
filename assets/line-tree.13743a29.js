import{d as x,s as p,ae as w,a2 as D,af as L,A as k,ag as A,ah as E,h as _,e as F,i as N,j as a,l as o,g as n,b as s,Z as y,ai as b}from"./index.f967d54b.js";const S=x({name:"ReTreeLine",props:{node:{type:Object,required:!0},data:{type:Array,default:()=>{}},treeData:{type:Array,default:()=>[]},indent:{type:Number,default:16},showLabelLine:{type:Boolean,default:!0}},setup(f,c){const{slots:d}=c;return{getScopedSlot:t=>{if(!t)return null;const r=t.split("||");let e=null;for(let l=0;l<r.length;l++){const u=r[l];e=(d||{})[u]}return e},getSlotValue:(t,r,e=null)=>w(t)?t(r)||e:t||e}},render(){const f=this.getScopedSlot("default"),c=this.getScopedSlot("node-label"),d=this.getScopedSlot("after-node-label"),m=f?this.getSlotValue(f,{node:this.node,data:this.data}):[c?this.getSlotValue(c,{node:this.node,data:this.data}):p("span",{class:"element-tree-node-label"},this.node.label),this.showLabelLine?p("span",{class:"element-tree-node-label-line"}):null,this.getSlotValue(d,{node:this.node,data:this.data})],i=[];let t=this.node;for(;t;){let e=t.parent;if(t.level===1&&!t.parent){if(!this.treeData||!Array.isArray(this.treeData))throw Error("if you using el-tree-v2 (Virtualized Tree) of element-plus,element-tree-line required data.");e={children:Array.isArray(this.treeData)?this.treeData.map(l=>({...l,key:l.id})):[],level:0,key:"node-0",parent:null}}if(e){const l=(e.children||e.childNodes).findIndex(u=>(u.key||u.id)===(t.key||t.id));i.unshift(l===(e.children||e.childNodes).length-1)}t=e}const r=[];for(let e=0;e<this.node.level;e++)r.push(p("span",{class:{"element-tree-node-line-ver":!0,"last-node-line":i[e]&&this.node.level-1!==e,"last-node-isLeaf-line":i[e]&&this.node.level-1===e},style:{left:this.indent*e+"px"}}));return p("span",{class:"element-tree-node-label-wrapper"},[m].concat(r).concat([p("span",{class:"element-tree-node-line-hor",style:{width:(this.node.isLeaf?24:8)+"px",left:(this.node.level-1)*this.indent+"px"}})]))}}),C=n("div",{class:"card-header"},[n("span",{class:"font-medium"}," \u6269\u5C55elemenet-plus\u7684\u6811\u5F62\u7EC4\u4EF6\u5305\u62EC\u865A\u62DF\u6811\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDE\u63A5\u7EBF ")],-1),V=n("div",{class:"card-header"},[n("span",{class:"font-medium"}," \u666E\u901A\u6811\u7ED3\u6784 ")],-1),B={class:"max-h-[550px] overflow-y-auto"},T={class:"text-sm"},q=n("div",{class:"card-header"},[n("span",{class:"font-medium"}," \u865A\u62DF\u6811\u7ED3\u6784 ")],-1),I={class:"max-h-[550px] overflow-y-auto"},j={class:"text-sm"},P=x({name:"LineTree"}),z=x({...P,setup(f){let c=D(L().wholeMenus),d=k(()=>A(c)),m=E(d.value),i={value:"uniqueId",children:"children"};return(t,r)=>{const e=_("el-tree"),l=_("el-card"),u=_("el-col"),g=_("el-tree-v2"),v=_("el-row");return F(),N(l,null,{header:a(()=>[C]),default:a(()=>[o(v,{gutter:24},{default:a(()=>[o(u,{xs:24,sm:24,md:12,lg:12,xl:12,class:"mb-[20px]"},{default:a(()=>[o(l,null,{header:a(()=>[V]),default:a(()=>[n("div",B,[o(e,{data:s(d),props:s(i),"show-checkbox":"","default-expand-all":"","node-key":"uniqueId",indent:30},{default:a(({node:h})=>[o(s(S),{node:h,showLabelLine:!0},{"node-label":a(()=>[n("span",T,y(s(b)(h.data.meta.title)),1)]),_:2},1032,["node"])]),_:1},8,["data","props"])])]),_:1})]),_:1}),o(u,{xs:24,sm:24,md:12,lg:12,xl:12},{default:a(()=>[o(l,null,{header:a(()=>[q]),default:a(()=>[n("div",I,[o(g,{data:s(d),props:s(i),"show-checkbox":"",height:550,"default-expanded-keys":s(m)},{default:a(({node:h})=>[o(s(S),{node:h,treeData:s(d),showLabelLine:!0,indent:30},{"node-label":a(()=>[n("span",j,y(s(b)(h.data.meta.title)),1)]),_:2},1032,["node","treeData"])]),_:1},8,["data","props","default-expanded-keys"])])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{z as default};