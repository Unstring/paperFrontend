import{j as i,a as e}from"./index.51e4c24a.js";import{T as m}from"./Textinput.cf387e5d.js";import{u as l}from"./index.esm.0d4e0d5f.js";import{c as n,a as r,o as c}from"./object.0fdcd403.js";const u=n({email:r().email("Invalid email").required("Email is Required"),password:r().required("Password is Required")}).required(),S=()=>{const{register:a,formState:{errors:s},handleSubmit:o}=l({resolver:c(u)});return i("form",{onSubmit:o(t=>{console.log(t)}),className:"space-y-4 ",children:[e(m,{name:"email",label:"email",type:"email",register:a,error:s.email,className:"h-[48px]"}),e("button",{className:"btn btn-dark block w-full text-center",children:"Send recovery email"})]})};export{S as F};
