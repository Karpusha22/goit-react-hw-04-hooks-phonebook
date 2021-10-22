(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,function(t,e,n){t.exports={list:"Contacts_list__2b0Ss",item:"Contacts_item__13AKG",text:"Contacts_text__18i6n",button:"Contacts_button__3slL8"}},,,function(t,e,n){t.exports={form:"Form_form__efa-N",button:"Form_button__1k1zl"}},,function(t,e,n){t.exports={Container:"Container_Container__rwvju"}},function(t,e,n){t.exports={text:"Filter_text__1uJR9"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),s=n(11),i=n(2),u=n(9),l=n.n(u),b=n(0),j=function(t){var e=t.children;return Object(b.jsx)("div",{className:l.a.Container,children:e})},d=n(21),m=n(7),f=n.n(m);var O=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],j=u[1],m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":j(a);break;default:return}},O={name:r,number:l,id:Object(d.a)()},h=function(){o(""),j("")};return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(O),h()},className:f.a.form,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Name"}),Object(b.jsx)("input",{id:Object(d.a)(),type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:m,required:!0})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Number"}),Object(b.jsx)("input",{id:Object(d.a)(),type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:m,required:!0})]}),Object(b.jsx)("button",{className:f.a.button,type:"submit",children:"Add contact"})]})},h=n(4),x=n.n(h),p=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:x.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsxs)("li",{className:x.a.item,children:[Object(b.jsxs)("p",{className:x.a.text,children:[a,":"]}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("button",{className:x.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},_=n(10),C=n.n(_),v=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{className:C.a.text,children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})};function g(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],l=o[1];Object(a.useEffect)((function(){localStorage.getItem("contacts")&&c(JSON.parse(localStorage.getItem("contacts")))}),[]),Object(a.useEffect)((function(t){n!==t&&localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=n.filter((function(t){return t.name.toLowerCase().includes(u.toLowerCase())}));return Object(b.jsxs)(j,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(O,{onSubmit:function(t){n.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):c((function(e){return[t].concat(Object(s.a)(e))}))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(v,{value:u,onChange:function(t){l(t.target.value)}}),Object(b.jsx)(p,{contacts:d,onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}n(17),n(18);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.778e7c9b.chunk.js.map