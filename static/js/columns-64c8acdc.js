import{P as d}from"./print-0dbbb737.js";import{b}from"./data-70a94de4.js";import{r as c,N as i}from"./index-a640795e.js";function g(a){const e=c(i(b,!0)),t=[{label:"ID",prop:"id"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}],o=()=>{d(a.value.getTableDoms().tableWrapper).toPrint};function n({column:{property:r},rowIndex:f}){if(r==="id")return f<3?{background:"#87baf9"}:{background:"#87e8de"}}function l({columnIndex:r}){return r===0?{background:"#f3b2d0"}:{background:"#fafafa"}}function u({rowIndex:r}){return r%2===1?{background:"#ffa39e"}:{background:"#91d5ff"}}return{columns:t,dataList:e,print:o,rowStyle:u,cellStyle:n,headerCellStyle:l}}export{g as useColumns};