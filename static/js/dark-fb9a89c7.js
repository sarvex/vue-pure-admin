import{aO as Y,bj as Z,bk as ee,bl as te,bd as A,s as i,bm as ne,bc as ae,ac as G,aX as ue,bn as oe,M as le,as as H,P as N,bo as D,bp as re,b6 as P,bq as se,aN as fe,B as de,c as _,k as S,i as T,r as F}from"./index-1bc2670c.js";import{u as ce}from"./app-bd507366.js";import{u as k}from"./epTheme-b8602d5d.js";function ie(t){return function(e,a,n){var u=Object(e);if(!Y(e)){var r=Z(a);e=ee(e),a=function(f){return r(u[f],f,u)}}var s=t(e,a,n);return s>-1?u[r?e[s]:s]:void 0}}var me=ie(te);const he=me;function ge(){const{$storage:t,$config:e}=A(),a=()=>{var r,s,f,m,h,l,d,g,v,y,C,M,B;ne().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=ae),t.locale||(t.locale={locale:(r=e==null?void 0:e.Locale)!=null?r:"zh"},G().locale.value=(s=e==null?void 0:e.Locale)!=null?s:"zh"),t.layout||(t.layout={layout:(f=e==null?void 0:e.Layout)!=null?f:"vertical",theme:(m=e==null?void 0:e.Theme)!=null?m:"default",darkMode:(h=e==null?void 0:e.DarkMode)!=null?h:!1,sidebarStatus:(l=e==null?void 0:e.SidebarStatus)!=null?l:!0,epThemeColor:(d=e==null?void 0:e.EpThemeColor)!=null?d:"#409EFF"}),t.configure||(t.configure={grey:(g=e==null?void 0:e.Grey)!=null?g:!1,weak:(v=e==null?void 0:e.Weak)!=null?v:!1,hideTabs:(y=e==null?void 0:e.HideTabs)!=null?y:!1,showLogo:(C=e==null?void 0:e.ShowLogo)!=null?C:!0,showModel:(M=e==null?void 0:e.ShowModel)!=null?M:"smart",multiTagsCache:(B=e==null?void 0:e.MultiTagsCache)!=null?B:!1})},n=i(()=>t==null?void 0:t.layout.layout),u=i(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:a}}const R="\u5F53\u524D\u8DEF\u7531\u914D\u7F6E\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E";function ve(){var E,z;const t=ce(),e=ue().options.routes,{wholeMenus:a}=oe(le()),n=(z=(E=H())==null?void 0:E.TooltipEffect)!=null?z:"light",u=i(()=>{var o;return(o=D())==null?void 0:o.username}),r=i(()=>(o,c)=>({background:o===c?k().epThemeColor:"",color:o===c?"#f4f4f5":"#000"})),s=i(()=>(o,c)=>o===c?"":"dark:hover:!text-primary"),f=i(()=>u.value?{marginRight:"10px"}:""),m=i(()=>!t.getSidebarStatus),h=i(()=>t.getDevice),{$storage:l,$config:d}=A(),g=i(()=>{var o;return(o=l==null?void 0:l.layout)==null?void 0:o.layout}),v=i(()=>d.Title);function y(o){const c=H().Title;c?document.title=`${N(o.title)} | ${c}`:document.title=N(o.title)}function C(){D().logOut()}function M(){re.push("/welcome")}function B(){P.emit("openPanel")}function q(){t.toggleSideBar()}function U(o){o==null||o.handleResize()}function X(o){var $;if(!o.children)return console.error(R);const c=/^http(s?):\/\//,p=($=o.children[0])==null?void 0:$.path;return c.test(p)?o.path+"/"+p:p}function J(o,c){if(a.value.length===0||K(o))return;let p="";const $=o.lastIndexOf("/");$>0&&(p=o.slice(0,$));function x(w,I){return I?I.map(b=>{b.path===w?b.redirect?x(b.redirect,b.children):P.emit("changLayoutRoute",{indexPath:w,parentPath:p}):b.children&&x(w,b.children)}):console.error(R)}x(o,c)}function K(o){return se.includes(o)}return{title:v,device:h,layout:g,logout:C,routers:e,$storage:l,backHome:M,onPanel:B,changeTitle:y,toggleSideBar:q,menuSelect:J,handleResize:U,resolvePath:X,isCollapse:m,pureApp:t,username:u,avatarsStyle:f,tooltipEffect:n,getDropdownItemStyle:r,getDropdownItemClass:s}}function Fe(t){const{$storage:e,changeTitle:a,handleResize:n}=ve(),{locale:u,t:r}=G(),s=fe();function f(){e.locale={locale:"zh"},u.value="zh",t&&n(t.value)}function m(){e.locale={locale:"en"},u.value="en",t&&n(t.value)}return de(()=>u.value,()=>{a(s.meta)}),{t:r,route:s,locale:u,translationCh:f,translationEn:m}}const pe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},be=T("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),$e=[be];function Te(t,e){return _(),S("svg",pe,$e)}const Re={render:Te},L={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"head",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/vue-pure-admin/vue-pure-admin/node_modules/.pnpm/@pureadmin+theme@2.4.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},ye="/vue-pure-admin/",Ce="assets";function Q(t){let e=t.replace("#","").match(/../g);for(let a=0;a<3;a++)e[a]=parseInt(e[a],16);return e}function W(t,e,a){let n=[t.toString(16),e.toString(16),a.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function Me(t,e){let a=Q(t);for(let n=0;n<3;n++)a[n]=Math.floor(a[n]*(1-e));return W(a[0],a[1],a[2])}function Be(t,e){let a=Q(t);for(let n=0;n<3;n++)a[n]=Math.floor((255-a[n])*e+a[n]);return W(a[0],a[1],a[2])}function j(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function O({scopeName:t,multipleScopeVars:e}){const a=Array.isArray(e)&&e.length?e:L.multipleScopeVars;let n=document.documentElement.className;new RegExp(j(t)).test(n)||(a.forEach(u=>{n=n.replace(new RegExp(j(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function V({id:t,href:e}){const a=document.createElement("link");return a.rel="stylesheet",a.href=e,a.id=t,a}function ke(t){const e={scopeName:"theme-default",customLinkHref:r=>r,...t},a=e.themeLinkTagId||L.themeLinkTagId;let n=document.getElementById(a);const u=e.customLinkHref(`/${ye}/${Ce}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,""));if(n){n.id=`${a}_old`;const r=V({id:a,href:u});n.nextSibling?n.parentNode.insertBefore(r,n.nextSibling):n.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),O(e)};return}n=V({id:a,href:u}),O(e),document[(e.themeLinkTagInjectTo||L.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function je(){var h;const{layoutTheme:t,layout:e}=ge(),a=F([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=A(),u=F((h=n==null?void 0:n.layout)==null?void 0:h.darkMode),r=document.documentElement;function s(l="default"){var d,g;if(t.value.theme=l,ke({scopeName:`layout-theme-${l}`}),n.layout={layout:e.value,theme:l,darkMode:u.value,sidebarStatus:(d=n.layout)==null?void 0:d.sidebarStatus,epThemeColor:(g=n.layout)==null?void 0:g.epThemeColor},l==="default"||l==="light")f(H().EpThemeColor);else{const v=he(a.value,{themeColor:l});f(v.color)}}const f=l=>{k().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let d=1;d<=9;d++)document.documentElement.style.setProperty(`--el-color-primary-light-${d}`,u.value?Me(l,d/10):Be(l,d/10))};function m(){k().epTheme==="light"&&u.value?s("default"):s(k().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:r,dataTheme:u,layoutTheme:t,themeColors:a,dataThemeChange:m,setEpThemeColor:f,setLayoutThemeColor:s}}const xe={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},we=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),He=T("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),Le=[we,He];function Ae(t,e){return _(),S("svg",xe,Le)}const Oe={render:Ae},_e={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Se=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Ee=T("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),ze=[Se,Ee];function Ie(t,e){return _(),S("svg",_e,ze)}const Ve={render:Ie};export{Fe as a,je as b,Ve as c,Oe as d,ge as e,Re as g,ke as t,ve as u};
