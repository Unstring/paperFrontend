import{r as i,a as e,j as r,L as y,I as p,Q as h}from"./index.51e4c24a.js";import{C}from"./Card.ac59dae9.js";import{B as _}from"./Button.b41cd088.js";import{a as L}from"./axios.27efab69.js";import{S as q}from"./Sidebar.04e7130c.js";import{L as z}from"./ListLoading.22d22a00.js";import"./InputGroup.c2ba6912.js";import"./cleave-phone.us.361277df.js";import"./t-3.49709c9d.js";const I="https://publish.inct.tech/avatar/fa5b557b184d53e0ed20_1702489429.jpg";function B(a){const[u,b]=i.exports.useState(a.like||0),[x,k]=i.exports.useState(a.dislike||0),[f,v]=i.exports.useState(a.support||0),[t,c]=i.exports.useState(a.insightfull||0),[$,j]=i.exports.useState(a.celebrate||0),[N,R]=i.exports.useState(a.user_reaction),D=l=>{let s=new Date(l*1e3),n=s.getDate(),d=s.getMonth()+1,P=s.getFullYear();return n<10&&(n="0"+n),d<10&&(d="0"+d),`${n}/${d}/${P}`},F=a.publication_date?D(a.publication_date):"00/00/0000";let A=Array(5).fill(!1);N!==void 0&&N>0&&N<6&&(A[N-1]=!0);const[o,O]=i.exports.useState(A);console.log(o);const[m,U]=i.exports.useState({position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});console.log(`${u}, ${x}, ${t}, ${$}, ${f}, ${f}`);const g=(l,s)=>{if(l>=0&&l<5){const n=[...o];n[l]=s,O(n)}},S=(l,s)=>{const n=localStorage.getItem("token");if(!n){setError("Token not found");return}L.get(`https://publish.inct.tech/react/${s}/${l}`,{headers:{Authorization:JSON.parse(n)}}).then(d=>{console.log(d.data),s==1?(b(parseInt(u)+1),g(0,!0),h.success("reacted liked",m)):s==2?(k(parseInt(x)+1),g(1,!0),h.success("reacted disliked",m)):s==3?(c(parseInt(t)+1),g(2,!0),h.success("reacted insightfull",m)):s==4?(j(parseInt($)+1),g(3,!0),h.success("reacted celebrate",m)):s==5&&(v(parseInt(f)+1),g(4,!0),h.success("reacted support",m))}).catch(d=>{h.error("Already reacted",m)})},w=(l,s)=>l?"btn-outline-dark  bg-o-200 dark:bg-green-700 bg-green-200":s?"btn-outline-dark  bg-o-200 dark:bg-red-700 bg-red-200":"btn-outline-dark  bg-o-200";return e("div",{className:"xl:col-span-2 max-w-2xl m-auto col-span-1",children:r(C,{className:"rounded-lg",children:[e("div",{className:" h-[248px] w-full mb-6 ",children:e("img",{src:I,alt:"",className:" w-[35rem]   h-full rounded-md object-cover"})}),r("div",{className:"flex justify-between mb-4",children:[e("div",{className:"flex space-x-4 rtl:space-x-reverse",children:e(y,{to:"#",children:r("span",{className:"inline-flex items-center",children:[e("span",{className:"w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600",children:e("img",{src:I,alt:"",className:"object-cover w-full h-full rounded-full"})}),e("span",{className:"text-sm text-slate-600 dark:text-slate-300 capitalize",children:a.full_name?a.full_name:"User"})]})})}),e(y,{to:"/post-details",children:r("span",{className:"inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal",children:[e(p,{icon:"heroicons-outline:calendar",className:"text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"}),F]})})]}),e("h5",{className:"card-title text-slate-900",children:e(y,{to:"post-details",children:a.title?a.title:"At Healthcare you will be treated by caring"})}),r("div",{className:"card-text dark:text-slate-300 mt-4 space-y-4",children:[e("p",{children:a.content?a.content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing eli.`}),r("div",{className:"flex justify-between",children:[r("div",{className:"space-x-2",children:[console.log(o[0]),e(_,{className:w(o[0],o.some(l=>l===!0)),link:"#",onClick:()=>{S(a.paper_id||1,1)},children:r("span",{className:"inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal ",children:[e(p,{icon:"heroicons-outline:hand-thumb-up",className:"text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg "}),u]})}),e(_,{className:w(o[1],o.some(l=>l===!0)),link:"#",onClick:()=>{S(a.paper_id||1,2)},children:r("span",{className:"inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal",children:[e(p,{icon:"heroicons-outline:hand-thumb-down",className:"text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"}),x]})}),e(_,{className:w(o[2],o.some(l=>l===!0)),link:"#",onClick:()=>{S(a.paper_id||1,3)},children:r("span",{className:"inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal",children:[e(p,{icon:"heroicons-outline:light-bulb",className:"text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"}),t]})})]}),e("div",{children:e(_,{className:"btn-outline-dark",link:"#",children:e("span",{className:"inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal",children:e(p,{icon:"heroicons-outline:chat",className:"text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"})})})})]})]})]})})}function E(){return e(z,{})}const Z=()=>{const[a,u]=i.exports.useState(!0),[b,x]=i.exports.useState([{title:"demo Title",content:"demo Content",media_url:"some url",abstract:"some abstract",author_id:null,publication_date:null}]),k=localStorage.getItem("token"),f=k?{headers:{Authorization:JSON.parse(k)}}:{},v=async t=>{try{const c=await L.get(t,f);c.data.data.length>0&&x(c.data.data),u(!1)}catch(c){console.error("Error fetching products:",c),u(!1)}};return i.exports.useEffect(()=>{v("https://publish.inct.tech/feedbycountandoptionaluser/30")},[]),a?e(E,{}):r("div",{className:"lg:flex flex-wrap blog-posts lg:space-x-5 space-y-5 lg:space-y-0 rtl:space-x-reverse",children:[e("div",{className:"flex-1",children:r("div",{className:"grid xl:grid-cols-2 grid-cols-1 gap-5",children:[console.log(b),b.map((t,c)=>e(B,{title:t.title,content:t.content,publication_date:t.publication_date,paper_id:t.paper_id,like:t.like,dislike:t.dislike,insightfull:t.insightfull,celebrate:t.celebrate,support:t.support,media_url:t.media_url,abstract:t.abstract,user_id:t.user_id,full_name:t.full_name,username:t.username,avatar:t.avatar,user_reaction:t.user_reaction},t.paper_id))]})}),e("div",{className:"flex-none",children:e("div",{className:"lg:max-w-[360px]",children:e(C,{children:e(q,{})})})})]})};export{Z as default};
