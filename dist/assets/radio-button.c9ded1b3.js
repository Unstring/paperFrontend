import{r as s,j as n,a,a8 as l}from"./index.524c893c.js";import{C as t}from"./Card.278ddcd4.js";const k=()=>{const[c,u]=s.exports.useState("A"),[i,v]=s.exports.useState("C"),[h,g]=s.exports.useState("primary-500"),[r,p]=s.exports.useState("Orange"),o=e=>{u(e.target.value)},d=e=>{v(e.target.value)},C=e=>{g(e.target.value)},m=e=>{p(e.target.value)},b=[{value:"Orange",label:"Orange"},{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"}];return n("div",{className:"space-y-5",children:[a(t,{title:"Basic Radio Buttons",children:n("div",{className:"flex flex-wrap space-xy-5",children:[a(l,{label:"Checked",name:"x",value:"A",checked:c==="A",onChange:o}),a(l,{label:"UnChecked",name:"x",value:"B",checked:c==="B",onChange:o}),a(l,{label:"Checked disabled",disabled:!0,name:"x2",value:"C",checked:i==="C",onChange:d}),a(l,{label:"UnChecked disabled",name:"x2",disabled:!0,value:"D",checked:i==="D",onChange:d})]})}),a(t,{title:"Theme Color",children:a("div",{className:"flex flex-wrap space-xy-5",children:[{value:"primary-500",label:"Primary",activeClass:"ring-primary-500 border-primary-500"},{value:"secondary-500",label:"Secondary",activeClass:"ring-secondary-500 border-secondary-500"},{value:"success-500",label:"Success",activeClass:"ring-success-500 border-success-500"},{value:"danger-500",label:"Danger",activeClass:"ring-danger-500 border-danger-500"},{value:"warning-500",label:"Warning",activeClass:"ring-warning-500 border-warning-500"},{value:"info-500",label:"Info",activeClass:"ring-info-500 border-info-500"}].map(e=>a(l,{label:e.label,name:"color",value:e.value,checked:h===e.value,onChange:C,activeClass:e.activeClass}))})}),n(t,{title:"Radio Group Options Array",children:[a("div",{className:"flex flex-wrap space-xy-5",children:b.map(e=>a(l,{label:e.label,name:"option",value:e.value,checked:r===e.value,onChange:m}))}),r&&n("div",{className:"mt-3",children:[a("span",{className:"text-sm text-gray-500",children:"Selected Option: "}),a("span",{className:"text-sm text-gray-700",children:r})]})]})]})};export{k as default};
