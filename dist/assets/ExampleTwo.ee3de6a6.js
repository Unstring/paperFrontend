import{R as x,a as e,F as y,r as v,j as n,I as o}from"./index.51e4c24a.js";import{a as I}from"./table-data.9cfa2a0c.js";import{C as q}from"./Card.ac59dae9.js";import{T as b}from"./Tooltip.0febc832.js";import{r as d}from"./index.20e67a03.js";import{G as B}from"./GlobalFilter.7bd96090.js";const D=[{Header:"Id",accessor:"id",Cell:t=>{var a;return e("span",{children:(a=t==null?void 0:t.cell)==null?void 0:a.value})}},{Header:"Order",accessor:"order",Cell:t=>{var a;return n("span",{children:["#",(a=t==null?void 0:t.cell)==null?void 0:a.value]})}},{Header:"customer",accessor:"customer",Cell:t=>{var a,c;return e("div",{children:n("span",{className:"inline-flex items-center",children:[e("span",{className:"w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600",children:e("img",{src:(a=t==null?void 0:t.cell)==null?void 0:a.value.image,alt:"",className:"object-cover w-full h-full rounded-full"})}),e("span",{className:"text-sm text-slate-600 dark:text-slate-300 capitalize",children:(c=t==null?void 0:t.cell)==null?void 0:c.value.name})]})})}},{Header:"date",accessor:"date",Cell:t=>{var a;return e("span",{children:(a=t==null?void 0:t.cell)==null?void 0:a.value})}},{Header:"quantity",accessor:"quantity",Cell:t=>{var a;return e("span",{children:(a=t==null?void 0:t.cell)==null?void 0:a.value})}},{Header:"amount",accessor:"amount",Cell:t=>{var a;return e("span",{children:(a=t==null?void 0:t.cell)==null?void 0:a.value})}},{Header:"status",accessor:"status",Cell:t=>{var a,c,i,r;return e("span",{className:"block w-full",children:e("span",{className:` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${((a=t==null?void 0:t.cell)==null?void 0:a.value)==="paid"?"text-success-500 bg-success-500":""} 
            ${((c=t==null?void 0:t.cell)==null?void 0:c.value)==="due"?"text-warning-500 bg-warning-500":""}
            ${((i=t==null?void 0:t.cell)==null?void 0:i.value)==="cancled"?"text-danger-500 bg-danger-500":""}
            
             `,children:(r=t==null?void 0:t.cell)==null?void 0:r.value})})}},{Header:"action",accessor:"action",Cell:t=>n("div",{className:"flex space-x-3 rtl:space-x-reverse",children:[e(b,{content:"View",placement:"top",arrow:!0,animation:"shift-away",children:e("button",{className:"action-btn",type:"button",children:e(o,{icon:"heroicons:eye"})})}),e(b,{content:"Edit",placement:"top",arrow:!0,animation:"shift-away",children:e("button",{className:"action-btn",type:"button",children:e(o,{icon:"heroicons:pencil-square"})})}),e(b,{content:"Delete",placement:"top",arrow:!0,animation:"shift-away",theme:"danger",children:e("button",{className:"action-btn",type:"button",children:e(o,{icon:"heroicons:trash"})})})]})}],N=x.forwardRef(({indeterminate:t,...a},c)=>{const i=x.useRef(),r=c||i;return x.useEffect(()=>{r.current.indeterminate=t},[r,t]),e(y,{children:e("input",{type:"checkbox",ref:r,...a,className:"table-checkbox"})})}),J=({title:t="Advanced Table Two"})=>{const a=v.exports.useMemo(()=>D,[]),c=v.exports.useMemo(()=>I,[]),i=d.exports.useTable({columns:a,data:c},d.exports.useGlobalFilter,d.exports.useSortBy,d.exports.usePagination,d.exports.useRowSelect,l=>{l.visibleColumns.push(s=>[{id:"selection",Header:({getToggleAllRowsSelectedProps:p})=>e("div",{children:e(N,{...p()})}),Cell:({row:p})=>e("div",{children:e(N,{...p.getToggleRowSelectedProps()})})},...s])}),{getTableProps:r,getTableBodyProps:k,headerGroups:C,footerGroups:M,page:P,nextPage:H,previousPage:T,canNextPage:m,canPreviousPage:u,pageOptions:g,state:R,gotoPage:h,pageCount:F,setPageSize:S,setGlobalFilter:$,prepareRow:j}=i,{globalFilter:G,pageIndex:f,pageSize:E}=R;return e(y,{children:n(q,{children:[n("div",{className:"md:flex justify-between items-center mb-6",children:[e("h4",{className:"card-title",children:t}),e("div",{children:e(B,{filter:G,setFilter:$})})]}),e("div",{className:"overflow-x-auto -mx-6",children:e("div",{className:"inline-block min-w-full align-middle",children:e("div",{className:"overflow-hidden ",children:n("table",{className:"min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700",...r,children:[e("thead",{className:"bg-slate-200 dark:bg-slate-700",children:C.map(l=>e("tr",{...l.getHeaderGroupProps(),children:l.headers.map(s=>n("th",{...s.getHeaderProps(s.getSortByToggleProps()),scope:"col",className:" table-th ",children:[s.render("Header"),e("span",{children:s.isSorted?s.isSortedDesc?" \u{1F53D}":" \u{1F53C}":""})]}))}))}),e("tbody",{className:"bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700",...k,children:P.map(l=>(j(l),e("tr",{...l.getRowProps(),children:l.cells.map(s=>e("td",{...s.getCellProps(),className:"table-td",children:s.render("Cell")}))})))})]})})})}),n("div",{className:"md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center",children:[n("div",{className:" flex items-center space-x-3 rtl:space-x-reverse",children:[e("select",{className:"form-control py-2 w-max",value:E,onChange:l=>S(Number(l.target.value)),children:[10,25,50].map(l=>n("option",{value:l,children:["Show ",l]},l))}),n("span",{className:"text-sm font-medium text-slate-600 dark:text-slate-300",children:["Page"," ",n("span",{children:[f+1," of ",g.length]})]})]}),n("ul",{className:"flex items-center  space-x-3  rtl:space-x-reverse",children:[e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${u?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>h(0),disabled:!u,children:e(o,{icon:"heroicons:chevron-double-left-solid"})})}),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${u?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>T(),disabled:!u,children:"Prev"})}),g.map((l,s)=>e("li",{children:e("button",{href:"#","aria-current":"page",className:` ${s===f?"bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium ":"bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "}    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`,onClick:()=>h(s),children:l+1})},s)),e("li",{className:"text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{className:` ${m?"":"opacity-50 cursor-not-allowed"}`,onClick:()=>H(),disabled:!m,children:"Next"})}),e("li",{className:"text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180",children:e("button",{onClick:()=>h(F-1),disabled:!m,className:` ${m?"":"opacity-50 cursor-not-allowed"}`,children:e(o,{icon:"heroicons:chevron-double-right-solid"})})})]})]})]})})};export{J as E};
