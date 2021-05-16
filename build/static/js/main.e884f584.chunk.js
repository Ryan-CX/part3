(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(15),o=n.n(r),u=(n(20),n(6)),s=n(3),i=n(0),l=function(e){var t=e.handleSearch,n=e.searchTerm;return Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Filter shown with: "}),Object(i.jsx)("input",{onChange:t,value:n})]})},d=function(e){var t=e.onSubmit,n=e.handleNameChange,c=e.handleNumberChange,a=e.nameValue,r=e.numberValue;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Name: "}),Object(i.jsx)("input",{onChange:n,value:a})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Number: "}),Object(i.jsx)("input",{type:"tel",onChange:c,value:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"Add"})})]})},h=function(e){var t=e.data,n=e.searchTerm,c=e.onDeleteButtonClick,a=function(e,t){c&&c(e,t)};return!!t.length&&t.map((function(e){return e.name.toLowerCase().includes(n.toLowerCase())&&Object(i.jsxs)("p",{children:[e.name," : ",e.number,Object(i.jsx)("button",{onClick:a.bind(null,e.id,e.name),children:"Delete"})]},e.id)}))},b=n(4),f=n.n(b),j="http://localhost:3001/api/persons",m={getAll:function(){return f.a.get(j).then((function(e){return e.data}))},createData:function(e){return f.a.post(j,e).then((function(e){return e.data}))},deleteData:function(e){return f.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},updateData:function(e,t){return f.a.put("".concat(j,"/").concat(e),t).then((function(e){return e.data}))}},O=function(e){var t=e.message,n=e.type;return Object(i.jsx)("div",{className:"".concat("unsuccessful"===n?"notification--error":"notification--success"," notification"),children:t})};O.defaultProps={type:"successful"};var p=O,g=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),b=o[0],f=o[1],j=Object(c.useState)(""),O=Object(s.a)(j,2),g=O[0],v=O[1],x=Object(c.useState)(""),w=Object(s.a)(x,2),C=w[0],y=w[1],D=Object(c.useState)({}),S=Object(s.a)(D,2),k=S[0],N=S[1];Object(c.useEffect)((function(){m.getAll().then((function(e){a(e)})).catch((function(e){return console.warn(e)}))}),[]);var T=function(){f(""),v("")};Object(c.useEffect)((function(){if(k.message){var e=setTimeout((function(){return N({})}),4e3);return function(){return clearTimeout(e)}}}),[k]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Phone book"}),k.message&&Object(i.jsx)(p,{message:k.message,type:k.type,duration:3e3}),Object(i.jsx)(l,{searchTerm:C,handleSearch:function(e){return y(e.target.value)}}),Object(i.jsx)("h2",{children:"Add a new contact"}),Object(i.jsx)(d,{onSubmit:function(e){(e.preventDefault(),b&&g)?(n.filter((function(e){return e.name.toLocaleLowerCase()===b.toLowerCase()})).length?function(){var e=window.confirm("".concat(b," is already added to phone book, replace the old phone number with new one.")),t=n.find((function(e){return e.name===b})),c=Object(u.a)(Object(u.a)({},t),{},{number:g});e&&m.updateData(c.id,c).then((function(e){a(n.map((function(t){return t.id===e.id?e:t}))),N({message:"Replaced ".concat(b,"'s number.")})})).catch((function(e){console.warn(e),N({message:"Could not replace, as the information on ".concat(b," has already been removed from the server."),type:"unsuccessful"})}))}():function(){var e={name:b,number:g};m.createData(e).then((function(e){a(n.concat(e))})).then(N({message:"Added ".concat(e.name,".")})).catch((function(e){return console.warn(e)}))}(),T()):N({message:"Please fill both fields.",type:"unsuccessful"})},handleNameChange:function(e){return f(e.target.value)},handleNumberChange:function(e){return v(e.target.value)},nameValue:b,numberValue:g}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(h,{data:n,searchTerm:C,onDeleteButtonClick:function(e,t){window.confirm("Delete ".concat(t,"?"))&&(m.deleteData(e).then((function(){a(n.filter((function(t){return t.id!==e}))),N({message:"Deleted ".concat(t,"'s contact successfully.")})})).catch((function(e){N({message:"The information on ".concat(t," has already been removed from the server."),type:"unsuccessful"}),console.warn(e)})),T())}})]})};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e884f584.chunk.js.map