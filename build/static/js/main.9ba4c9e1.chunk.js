(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(14),c=n.n(r),a=n(3),u=n.n(a),o=n(4),i=n(2),l=n(0),s=function(e){var t=e.filter,n=e.onFilterChange;return Object(l.jsxs)("div",{children:["Filter shown with ",Object(l.jsx)("input",{value:t,onChange:n})]})},d=function(e){var t=e.addName,n=e.newName,r=e.handleInputChange,c=e.newNumber,a=e.handleNumberChange;return Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsxs)("div",{children:["name:",Object(l.jsx)("input",{type:"text",value:n,onChange:r})]}),Object(l.jsxs)("div",{children:["number:",Object(l.jsx)("input",{type:"text",value:c,onChange:a})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var t=e.personArr,n=e.deletePerson;return t.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("li",{className:"note",children:[e.name," ",e.number,Object(l.jsx)("button",{onClick:function(){return n(e.id)},children:" Delete"})]},e.id)})}))},h=function(e){var t=e.FilterArr,n=e.filter,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===n.length?null:r.map((function(e,t){return Object(l.jsx)("li",{children:e.name},t)}))},b="/persons",f={getAll:function(){return u.a.get(b)},create:function(e){return u.a.post(b,e).then((function(e){return e.data}))},update:function(e,t){return u.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},deletePerson:function(e){return u.a.delete("".concat(b,"/").concat(e))}},O=function(e){var t=e.message;return null===t?null:Object(l.jsx)("div",{className:"error",children:t})},m=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(""),a=Object(o.a)(c,2),u=a[0],b=a[1],m=Object(i.useState)(""),p=Object(o.a)(m,2),x=p[0],v=p[1],g=Object(i.useState)(""),w=Object(o.a)(g,2),C=w[0],N=w[1],P=Object(i.useState)(""),y=Object(o.a)(P,2),A=y[0],F=y[1];Object(i.useEffect)((function(){f.getAll().then((function(e){r(e.data)}))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phone book"}),Object(l.jsx)(O,{message:A}),Object(l.jsx)(s,{filter:C,onFilterChange:function(e){N(e.target.value)}}),Object(l.jsx)(d,{addName:function(e){if(e.preventDefault(),u&&x){var t={name:u,number:x,id:n.length+1};if(n.find((function(e){return e.name.toLowerCase()===u.toLowerCase()})))return F("".concat(u," is already added to phone book.")),b(""),v(""),void setTimeout((function(){F(null)}),3e3);f.create(t).then((function(e){r(n.concat(e)),F("".concat(e.name," was added to the contact.")),b(""),v(""),setTimeout((function(){F(null)}),3e3)}))}else alert("Please fill in the fields")},newName:u,handleInputChange:function(e){b(e.target.value)},newNumber:x,handleNumberChange:function(e){v(e.target.value)}}),Object(l.jsx)("h2",{children:"Name and Phone Number"}),Object(l.jsx)("ul",{children:Object(l.jsx)(j,{personArr:n,deletePerson:function(e){window.confirm("You sure you wanna delete it?")&&(f.deletePerson(e).then(r(n.filter((function(t){return t.id!==e})))).catch((function(e){console.log(e),F("No such person found.")})),F("Contact Deleted"),setTimeout((function(){F(null)}),3e3))}})}),Object(l.jsx)("h3",{children:"Filtered results"}),Object(l.jsx)("ul",{children:Object(l.jsx)(h,{FilterArr:n,filter:C})})]})};n(38);u.a.get("http://localhost:3001/persons").then((function(e){c.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}))}},[[39,1,2]]]);
//# sourceMappingURL=main.9ba4c9e1.chunk.js.map