(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(3),o=a(9),r=a(6),c=a(1),l=(a(14),a(15),a(8)),d=a.n(l),m=a(0),u=function(e){var t,a,n,i=e.todoInfo;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{children:["User: ",null===(t=i.userLink)||void 0===t?void 0:t.name,Object(m.jsx)("br",{}),Object(m.jsxs)("a",{className:"TodoItem__mail",href:"mailto:".concat(null===(a=i.userLink)||void 0===a?void 0:a.email),children:[null===(n=i.userLink)||void 0===n?void 0:n.email," "]})]}),Object(m.jsxs)("div",{className:"TodoItem__completed",children:[Object(m.jsx)("p",{children:"Completed:"}),Object(m.jsx)("div",{className:d()("TodoItem__icon",{"TodoItem__icon--yes":i.completed},{"TodoItem__icon--no":!i.completed})})]}),Object(m.jsxs)("p",{className:"TodoItem__title",children:["Title: ",i.title]})]})},p=function(e){var t=e.data;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"App__todoList",children:"Todo List"}),Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsx)("li",{className:"TodoItem",children:Object(m.jsx)(u,{todoInfo:e})},e.id)}))})]})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],h=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!0}].map((function(e){return Object(r.a)(Object(r.a)({},e),{},{userLink:b.find((function(t){return t.id===e.userId}))})})),j=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),l=r[0],d=r[1],u=Object(c.useState)(""),j=Object(s.a)(u,2),g=j[0],y=j[1],f=Object(c.useState)(""),x=Object(s.a)(f,2),O=x[0],v=x[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title",children:"Add todo form"}),Object(m.jsxs)("p",{className:"App__subtitle",children:[Object(m.jsx)("span",{children:"Users: "}),b.length]}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===l&&y("Please choose a user"),""===a&&v("Please enter the title"),""!==l&&""!==a&&(!function(e,t){var a={userId:t,id:h.length+1,title:e,completed:!1,userLink:b.find((function(e){return e.id===t}))};h=[].concat(Object(o.a)(h),[a])}(a,+l),n(""))},children:[Object(m.jsxs)("select",{className:"App__input",value:l,onChange:function(e){d(e.target.value),y("")},children:[Object(m.jsx)("option",{value:"",children:"Select user"}),b.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(m.jsx)("p",{className:"App__error",children:g}),Object(m.jsx)("input",{className:"App__input",type:"text",name:"todo",placeholder:"Todo...",value:a,onChange:function(e){var t=e.target.value.split("").filter((function(e){return e.toLowerCase()!==e.toUpperCase()||" "===e||"0123456789".includes(e)})).join("");n(t),v("")}}),Object(m.jsx)("p",{className:"App__error",children:O}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"App__btn",type:"submit",children:"Add todo"})]}),Object(m.jsx)(p,{data:h})]})};i.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b4c1115c.chunk.js.map