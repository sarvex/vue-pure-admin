import{d as l,h as u,e as m,f as s,l as n}from"./index-6648f170.js";const p=l({__name:"tree",setup(h){const t=(i,r,a)=>{setTimeout(()=>{a([{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}])},1e3)},d=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",children:[{id:31,date:"2016-05-01",name:"wangxiaohu"},{id:32,date:"2016-05-01",name:"wangxiaohu"}]},{id:4,date:"2016-05-03",name:"wangxiaohu"}],o=[{id:1,date:"2016-05-02",name:"wangxiaohu"},{id:2,date:"2016-05-04",name:"wangxiaohu"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0},{id:4,date:"2016-05-03",name:"wangxiaohu"}],e=[{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}];return(i,r)=>{const a=u("pure-table");return m(),s("div",null,[n(a,{data:d,columns:e,"row-key":"id",border:"","default-expand-all":"",class:"mb-6"}),n(a,{data:o,columns:e,"row-key":"id",border:"",lazy:"",load:t,"tree-props":{children:"children",hasChildren:"hasChildren"}})])}}});export{p as _};
