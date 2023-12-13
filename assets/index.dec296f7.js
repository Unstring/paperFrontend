import{j as s,a as e,u as N,b as E,r as h,F as D,I as m,i as g,U as v,c as f,d as b,e as T}from"./index.608dc328.js";import{C as n}from"./Card.6686189c.js";import{w as j}from"./widget-bg-1.5c29a3d8.js";import{G as H}from"./group-chart-1.11292288.js";import{R as I}from"./revenue-bar-chart.1667e553.js";import{_ as k}from"./react-apexcharts.min.b4a27a54.js";import{S as o}from"./SelectMonth.94b4ecb6.js";import{h as U,U as M}from"./table-data.e0520113.js";import{r as d}from"./index.7c85919a.js";import{d as R,w as z}from"./index.ff8e1e48.js";import{H as G}from"./HomeBredCurbs.83c35eee.js";const O=()=>s("div",{className:"bg-no-repeat bg-cover bg-center p-4 rounded-[6px] relative",style:{backgroundImage:`url(${j})`},children:[s("div",{className:"max-w-[169px]",children:[e("div",{className:"text-xl font-medium text-slate-900 mb-2",children:"Upgrade your Dashcode"}),e("p",{className:"text-sm text-slate-800",children:"Pro plan for better results"})]}),e("div",{className:"absolute top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 mt-2 h-12 w-12 bg-white text-slate-900 rounded-full text-xs font-medium flex flex-col items-center justify-center",children:"Now"})]}),L=()=>{const[t]=N(),{width:a,breakpoints:r}=E();return e("div",{children:e(k,{options:{chart:{toolbar:{show:!1}},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px",color:t?"#CBD5E1":"#475569"},value:{fontSize:"16px",color:t?"#CBD5E1":"#475569"},total:{show:!0,label:"Total",color:t?"#CBD5E1":"#475569",formatter:function(){return 249}}},track:{background:"#E2E8F0",strokeWidth:"97%"}}},labels:["A","B","C","D"],colors:["#4669FA","#FA916B","#50C793","#0CE7FA"]},series:[44,55,67,83],type:"radialBar",height:a>r.md?360:250})})},W=[{Header:"company",accessor:"company",Cell:t=>{var a;return s("span",{className:"flex items-center",children:[e("div",{className:"flex-none",children:e("div",{className:"w-8 h-8 rounded-[100%] ltr:mr-3 rtl:ml-3",children:e("img",{src:(a=t==null?void 0:t.cell)==null?void 0:a.value,alt:"",className:"w-full h-full rounded-[100%] object-cover"})})}),s("div",{className:"flex-1 text-start",children:[e("h4",{className:"text-sm font-medium text-slate-600 whitespace-nowrap",children:"Biffco Enterprises Ltd."}),e("div",{className:"text-xs font-normal text-slate-600 dark:text-slate-400",children:"Biffco@example.com"})]})]})}},{Header:"Category",accessor:"category",Cell:t=>e("span",{children:"Technology"})},{Header:"sales",accessor:"sales",Cell:t=>{var a,r,c;return s("div",{className:"flex space-x-6 items-center rtl:space-x-reverse",children:[s("span",{children:[" ",((a=t==null?void 0:t.cell)==null?void 0:a.value)+"%"]}),e("span",{className:` text-xl
             ${((r=t==null?void 0:t.cell)==null?void 0:r.value)>100?"text-success-500":"text-danger-500"}
              `,children:((c=t==null?void 0:t.cell)==null?void 0:c.value)>100?e(m,{icon:"heroicons:arrow-trending-up"}):e(m,{icon:"heroicons:arrow-trending-down"})})]})}},{Header:"views",accessor:"views",Cell:t=>{var a;return e("span",{children:(a=t==null?void 0:t.cell)==null?void 0:a.value})}},{Header:"revenue",accessor:"revenue",Cell:t=>{var a;return e("span",{children:(a=t==null?void 0:t.cell)==null?void 0:a.value})}}],_=()=>{const t=h.exports.useMemo(()=>W,[]),a=h.exports.useMemo(()=>U,[]),r=d.exports.useTable({columns:t,data:a,initialState:{pageSize:6}},d.exports.useGlobalFilter,d.exports.useSortBy,d.exports.usePagination,d.exports.useRowSelect),{getTableProps:c,getTableBodyProps:p,headerGroups:y,footerGroups:X,page:w,nextPage:C,previousPage:S,canNextPage:x,canPreviousPage:u,pageOptions:$,state:F,gotoPage:B,pageCount:Y,setPageSize:Z,setGlobalFilter:ee,prepareRow:P}=r,{pageIndex:A,pageSize:te}=F;return e(D,{children:s("div",{children:[e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:s("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...c,children:[e("thead",{className:" bg-slate-200 dark:bg-slate-700",children:y.map(i=>e("tr",{...i.getHeaderGroupProps(),children:i.headers.map(l=>s("th",{...l.getHeaderProps(l.getSortByToggleProps()),scope:"col",className:" table-th ",children:[l.render("Header"),e("span",{children:l.isSorted?l.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...p,children:w.map(i=>(P(i),e("tr",{...i.getRowProps(),children:i.cells.map(l=>e("td",{...l.getCellProps(),className:"table-td",children:l.render("Cell")}))})))})]})})})}),e("div",{className:"md:flex md:space-y-0 space-y-5 justify-center mt-6 items-center",children:s("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${u?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>S(),disabled:!u,children:e(m,{icon:"heroicons-outline:chevron-left"})})}),$.map((i,l)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${l===A?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>B(l),children:i+1})},l)),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${x?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>C(),disabled:!x,children:e(m,{icon:"heroicons-outline:chevron-right"})})})]})})]})})},K=[{id:1,img:g},{id:2,img:v},{id:3,img:f},{id:4,img:b},{id:5,img:T},{id:6,img:M},{id:7,img:g},{id:6,img:v},{id:7,img:f},{id:8,img:b}],V=()=>e("div",{children:e("ul",{className:"list-item space-y-3 h-full overflow-x-auto",children:K.map((t,a)=>s("li",{className:"flex items-center space-x-3 rtl:space-x-reverse border-b border-slate-100 dark:border-slate-700 last:border-b-0 pb-3 last:pb-0",children:[e("div",{children:e("div",{className:"w-8 h-8 rounded-[100%]",children:e("img",{src:t.img,alt:"",className:"w-full h-full rounded-[100%] object-cover"})})}),e("div",{className:"text-start overflow-hidden text-ellipsis whitespace-nowrap max-w-[63%]",children:e("div",{className:"text-sm text-slate-600 dark:text-slate-300 overflow-hidden text-ellipsis whitespace-nowrap",children:"Finance KPI Mobile app launch preparion meeting."})}),e("div",{className:"flex-1 ltr:text-right rtl:text-left",children:e("div",{className:"text-sm font-light text-slate-400 dark:text-slate-400",children:"1 hours"})})]},a))})}),q=[{title:"Nevada",amount:"$125k",cls:"bg-primary-500 ring-primary-500"},{title:"Colorado",amount:"$$325k",cls:"bg-success-500 ring-success-500"},{title:"Iowa",amount:"$67",cls:"bg-info-500 ring-info-500"},{title:"Arkansas",amount:"$354k",cls:"bg-warning-500 ring-warning-500"},{title:"Wyoming",amount:"$195k",cls:"bg-success-500 ring-success-500"},{title:"Other countries",amount:"$295k",cls:"bg-secondary-500 ring-secondary-500"}],J=({filterMap:t})=>s("div",{className:"md:flex items-center",children:[s("div",{className:"flex-none",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-sm font-normal mb-[6px]",children:"Total earnings"}),t==="usa"&&e("div",{className:"text-lg font-medium mb-[6px] dark:text-white text-slate-900",children:"$12,65,64787.00"}),t==="global"&&e("div",{className:"text-lg font-medium mb-[6px] dark:text-white text-slate-900",children:"$12,65.00"}),s("div",{className:"text-xs font-light dark:text-slate-200",children:[e("span",{className:"text-primary-500",children:"+08%"})," From last month"]}),e("ul",{className:"bg-slate-50 dark:bg-slate-900 rounded p-4 min-w-[184px] space-y-5 mt-4",children:q.map((a,r)=>s("li",{className:"flex justify-between text-xs text-slate-600 dark:text-slate-300",children:[s("span",{className:"flex space-x-2 rtl:space-x-reverse items-center",children:[e("span",{className:` inline-flex h-[6px] w-[6px] bg-primary-500 ring-opacity-25 rounded-full ring-4
                        ${a.cls}
                        `}),e("span",{children:a.title})]}),e("span",{children:a.amount})]},r))})]}),e("div",{className:"flex-1",children:e(R.VectorMap,{...z,className:"dash-codevmap"})})]}),Q=()=>{const[t]=N();return e("div",{children:e(k,{series:[67],options:{chart:{toolbar:{show:!1}},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"22px",color:t?"#E2E8F0":"#475569"},value:{fontSize:"16px",color:t?"#E2E8F0":"#475569"},total:{show:!0,label:"Total",color:t?"#E2E8F0":"#475569",formatter:function(){return 249}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},colors:["#4669FA"]},type:"radialBar",height:"320"})})},pe=()=>{const[t,a]=h.exports.useState("usa");return s("div",{children:[e(G,{title:"Dashboard"}),s("div",{className:"grid grid-cols-12 gap-5 mb-5",children:[e("div",{className:"2xl:col-span-3 lg:col-span-4 col-span-12",children:e(O,{})}),e("div",{className:"2xl:col-span-9 lg:col-span-8 col-span-12",children:e(n,{bodyClass:"p-4",children:e("div",{className:"grid md:grid-cols-3 col-span-1 gap-4",children:e(H,{})})})})]}),s("div",{className:"grid grid-cols-12 gap-5",children:[e("div",{className:"lg:col-span-8 col-span-12",children:e(n,{children:e("div",{className:"legend-ring",children:e(I,{})})})}),e("div",{className:"lg:col-span-4 col-span-12",children:e(n,{title:"Overview",headerslot:e(o,{}),children:e(L,{})})}),e("div",{className:"lg:col-span-8 col-span-12",children:e(n,{title:"All Company",headerslot:e(o,{}),noborder:!0,children:e(_,{})})}),e("div",{className:"lg:col-span-4 col-span-12",children:e(n,{title:"Recent Activity",headerslot:e(o,{}),children:e(V,{})})}),e("div",{className:"lg:col-span-8 col-span-12",children:e(n,{title:"Most Sales",headerslot:s("div",{className:"border border-slate-200 dark:border-slate-700 dark:bg-slate-900 rounded p-1 flex items-center",children:[e("span",{className:` flex-1 text-sm font-normal px-3 py-1 transition-all duration-150 rounded cursor-pointer
                ${t==="global"?"bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300":"dark:text-slate-300"}  
                `,onClick:()=>a("global"),children:"Global"}),e("span",{className:` flex-1 text-sm font-normal px-3 py-1 rounded transition-all duration-150 cursor-pointer
                  ${t==="usa"?"bg-slate-900 text-white dark:bg-slate-700 dark:text-slate-300":"dark:text-slate-300"}
              `,onClick:()=>a("usa"),children:"USA"})]}),children:e(J,{filterMap:t})})}),e("div",{className:"lg:col-span-4 col-span-12",children:s(n,{title:"Overview",headerslot:e(o,{}),children:[e(Q,{}),s("div",{className:"bg-slate-50 dark:bg-slate-900 rounded p-4 mt-8 flex justify-between flex-wrap",children:[s("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"}),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"}),e("div",{className:"text-slate-500 dark:text-slate-300 text-xs font-normal",children:"+0.001.23 (0.2%)"})]}),s("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"}),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"})]}),s("div",{className:"space-y-1",children:[e("h4",{className:"text-slate-600 dark:text-slate-200 text-xs font-normal",children:"Invested amount"}),e("div",{className:"text-sm font-medium text-slate-900 dark:text-white",children:"$8264.35"})]})]})]})})]})]})};export{pe as default};
