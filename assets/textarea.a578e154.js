import{r as n,j as l,a as e}from"./index.608dc328.js";import{C as t}from"./Card.6686189c.js";import{T as a}from"./Textarea.1ee7eef2.js";const u=()=>{const r={message:"This is invalid state"},[i,o]=n.exports.useState("");return l("div",{className:"grid xl:grid-cols-2 gap-5 ",children:[e(t,{title:"Basic Textarea",children:e(a,{label:"Textarea",id:"pn4",placeholder:"Textarea"})}),e(t,{title:"Displayed Rows",children:e(a,{label:"Textarea",id:"pn4",placeholder:"Textarea",row:"5"})}),e(t,{title:"Horizontal Form Label Sizing",children:l("div",{className:" space-y-3",children:[e(a,{label:"Large",id:"largesize2",type:"text",placeholder:"Large Input",rows:"4",horizontal:!0}),e(a,{label:"Default",type:"text",id:"df",placeholder:"Default Input",horizontal:!0}),e(a,{label:"Small",id:"smallsize2",type:"text",placeholder:"Small Input",rows:"2",horizontal:!0})]})}),e(t,{title:"States",children:l("div",{className:" space-y-3",children:[e(a,{label:"Valid State",id:"ValidState",placeholder:"Valid",validate:"This is valid state."}),e(a,{label:"Invalid State",id:"InvalidState",placeholder:"Invalid",error:r})]})}),e(t,{title:"Input Validation States With Tootltips",children:l("div",{className:" space-y-3",children:[e(a,{label:"Valid State",id:"ValidState",placeholder:"Valid",validate:"This is valid state.",msgTooltip:!0}),e(a,{label:"Invalid State",id:"InvalidState",placeholder:"Invalid",error:r,msgTooltip:!0})]})}),l(t,{title:" Formatter Support",children:[e(a,{label:"Text input with formatter (on input)",id:"formatter-pn",type:"text",placeholder:"Enter your name",description:"We will convert your name to lowercase instantly",onChange:d=>{const s=d.target.value;o(s)}}),i.toLowerCase()]})]})};export{u as default};
