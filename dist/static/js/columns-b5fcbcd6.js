import{b as i,z as n,e as c}from"./index-1d030a9b.js";import{a as p}from"./data-cc5c031c.js";import{m as u}from"./message-19a66385.js";import{t as f}from"./index-bf9147b3.js";function v(){const e=Vue.ref(i(p,!0).splice(0,4)),t=[{label:"ID",prop:"id"},{label:"\u59D3\u540D",prop:"name"},{label:"\u65E5\u671F",prop:"date"},{label:"echarts\u56FE\u8868",slot:"echart"}],{isDark:s}=n(),r=Vue.computed(()=>s.value?"dark":"light");return e.value.forEach((h,a)=>{const{setOptions:o}=c(f(`PieChartRef${a}`),{theme:r});o({tooltip:{trigger:"item",confine:!0},series:[{name:"Github\u4FE1\u606F",type:"pie",data:[{value:1067,name:"watchers"},{value:4037,name:"star"},{value:859,name:"forks"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},{name:"click",callback:({data:{name:l,value:m}})=>{u(`\u60A8\u70B9\u51FB\u4E86\u7B2C ${a+1} \u884C\uFF0C\u56FE\u8868\u6807\u9898\u4E3A${l}\uFF0C\u56FE\u8868\u6570\u636E\u4E3A\uFF1A${m}`,{type:"success"})}})}),{columns:t,dataList:e}}export{v as useColumns};