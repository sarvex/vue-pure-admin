import{t as p}from"./data-f209f0c6.js";import{r as o,al as s,aJ as f,o as h,bx as i,O as d}from"./index-0ac488a3.js";function b(){const e=o([]),t=o(!0),l=o("right"),u=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}],n=s({pageSize:10,currentPage:1,pageSizes:[10,15,20],total:0,align:"right",background:!0}),r=s({text:"\u6B63\u5728\u52A0\u8F7D\u7B2C\u4E00\u9875...",viewBox:"-10, -10, 50, 50",spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `});function g(a){}function c(a){r.text=`\u6B63\u5728\u52A0\u8F7D\u7B2C${a}\u9875...`,t.value=!0,i(600).then(()=>{t.value=!1})}return f(()=>{n.align=l.value}),h(()=>{i(600).then(()=>{const a=[];Array.from({length:6}).forEach(()=>{a.push(d(p,!0))}),e.value=a.flat(1/0),n.total=e.value.length,t.value=!1})}),{loading:t,columns:u,dataList:e,pagination:n,loadingConfig:r,paginationAlign:l,onSizeChange:g,onCurrentChange:c}}export{b as useColumns};
