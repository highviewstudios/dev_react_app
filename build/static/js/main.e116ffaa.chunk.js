(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),o=(a(43),a(15)),u=a(5),i=(a(44),a(45),a(12)),m=a(10),s=a(6),d=Object(n.createContext)();var E=function(e){var t=Object(n.useState)({name:"",email:""}),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement(d.Provider,{value:{user:c,updateUser:function(e,t){l((function(a){return Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e,t))}))}}},e.children)};var h=function(){var e=Object(n.useContext)(d).user;return r.a.createElement("div",null,r.a.createElement("h1",null,"React - Welcome to Test STAFF!"),r.a.createElement("h2",null,e.name),r.a.createElement("a",{href:"http://localhost:8080/logout"},"Sign Out"))},p="";var f=function(){var e=window.location.hostname,t=window.location.protocol;p="localhost"===e?t+"//"+e+":8080":t+"//"+e};var b=function(e){return r.a.createElement("p",null,e.name)};a(46);var v=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({name:"",price:0}),o=Object(s.a)(l,2),u=o[0],d=o[1];function E(){fetch(p+"/products").then((function(e){return e.json()})).then((function(e){var t=e.data;!function(e){c((function(t){return e}))}(t),console.log(t)})).catch((function(e){return console.error(e)}))}function h(e){var t=e.target,a=t.name,n=t.value;d((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(i.a)({},a,n))}))}return Object(n.useEffect)((function(){f(),E()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Products"),a.map((function(e){return r.a.createElement(b,{key:e.id,name:e.name})})),r.a.createElement("div",null,r.a.createElement("input",{name:"name",value:u.name,onChange:h}),r.a.createElement("input",{name:"price",value:u.price,onChange:h}),r.a.createElement("button",{onClick:function(){var e=u.name,t=u.price;fetch(p+"/products/add?name="+e+"&price="+t).then(E).then(d({name:"",price:0})).catch((function(e){return console.error(e)}))}},"Add")))},g=a(13),O=a.n(g);var j=function(){var e=Object(u.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){f()}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Sign In")," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("label",{id:"lblEmail"},"Email:"),r.a.createElement("input",{id:"txtEmail",name:"email",type:"text"}),r.a.createElement("br",null),r.a.createElement("label",{id:"lblPassword"},"Password"),r.a.createElement("input",{id:"txtPassword",name:"password",type:"password"}),r.a.createElement("button",{onClick:function(t){t.preventDefault();var a=document.getElementById("txtEmail").value,n=document.getElementById("txtPassword").value;O.a.get("/login?email="+a+"&password="+n).then((function(t){"Logged in successful"===t.data.message?e.push("/"):l(t.data.info)})).catch((function(e){console.log(e)}))}},"LogIn"),r.a.createElement("p",null,c)),r.a.createElement("a",{href:"http://localhost:8080/auth/google"},"Sign In With Google"),r.a.createElement(o.b,{to:"/register"},r.a.createElement("p",null,r.a.createElement("a",null,"Register"))))},w=a(21),y=a(35),C=a(37),S=a(16);var x=function(){var e=Object(u.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),m=i[0],d=i[1];return Object(n.useEffect)((function(){document.title="Register"}),[]),r.a.createElement("div",{className:"body"},r.a.createElement(y.a,{className:"p-3"},r.a.createElement(C.a,{className:"back-color"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Register"),m?r.a.createElement("div",null,r.a.createElement("h2",null," You have successfully been registered"),r.a.createElement("br",null),r.a.createElement("p",null,"Please log in"),r.a.createElement(w.a,{type:"submit",onClick:function(){d(!1),e.push("/signin")},variant:"primary"},"Login")):r.a.createElement(S.a,{action:"/form",method:"POST"},r.a.createElement(S.a.Control,{id:"name",size:"sm",type:"text",placeholder:"Name",required:!0}),r.a.createElement("br",null),r.a.createElement(S.a.Control,{id:"email",size:"sm",type:"email",placeholder:"Email",required:!0}),r.a.createElement("br",null),r.a.createElement(S.a.Control,{id:"password",size:"sm",type:"password",placeholder:"Password",required:!0}),r.a.createElement("br",null),r.a.createElement(S.a.Control,{id:"confirmpassword",size:"sm",type:"password",placeholder:"Confirm Password",required:!0}),r.a.createElement("br",null),r.a.createElement("p",null,c),r.a.createElement(w.a,{type:"submit",onClick:function(e){e.preventDefault(),l("");var t="/register/"+document.getElementById("name").value+"/"+document.getElementById("email").value+"/"+document.getElementById("password").value+"/"+document.getElementById("confirmpassword").value;O.a.get(t).then((function(e){"User registered successfully"===e.data.message?d(!0):"Yes"===e.data.userError&&l(e.data.message)})).catch((function(e){console.log(e)}))},variant:"primary"},"Register"))))))};var I=function(){var e=Object(u.f)(),t=Object(n.useContext)(d).updateUser;return Object(n.useEffect)((function(){f(),O.a.get("/auth",{withCredentials:!0}).then((function(a){console.log(a),a.data.auth?(t("name",a.data.user.displayName),e.push("/home")):e.push("/signin")})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Auth"))};var P=function(){var e=Object(n.useState)({name:"",email:""}),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"Test Area"),r.a.createElement("form",{action:"/form",method:"POST"},r.a.createElement("input",{id:"first",name:"name"}),r.a.createElement("button",{onClick:function(){var e,t;e="name",t="bill",c((function(a){return Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e,t))})),console.log(a)}},"Go")))},k=Object(n.createContext)();var A=function(e){var t=Object(n.useState)({name:"",granted:""}),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement(k.Provider,{value:{user:c,updateUser:function(e,t){l((function(a){return Object(m.a)(Object(m.a)({},a),{},Object(i.a)({},e,t))}))}}},e.children)};var B=function(){var e=Object(u.f)(),t=Object(n.useContext)(k).updateUser;return Object(n.useEffect)((function(){O.a.get("/administrator/auth").then((function(a){var n=a.data;n.auth?(t("granted",n.access),"granted"==n.access?e.push("/administrator/home"):e.push("/administrator/signin")):e.push("/administrator/signin")})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("h1",null,"Auth")};var N=function(){var e=Object(n.useContext)(k).user;return r.a.createElement("div",null,r.a.createElement("h1",null,"Administrator Sign In"),"denied"==e.granted?r.a.createElement("div",null,r.a.createElement("h1",null,"Access Denied"),r.a.createElement("a",{href:"http://localhost:8080/administrator/logout"},"Log Out")):r.a.createElement("a",{href:"http://localhost:8080/auth/github"},"Sign In With GitHub"))};var R=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Administrator Home"))};var T=function(){return r.a.createElement(E,null,r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:I}),r.a.createElement(u.a,{path:"/Home",exact:!0,component:h}),r.a.createElement(u.a,{path:"/products",component:v}),r.a.createElement(u.a,{path:"/signin",component:j}),r.a.createElement(u.a,{path:"/register",component:x}),r.a.createElement(u.a,{path:"/test",component:P}),r.a.createElement(A,null,r.a.createElement(u.a,{path:"/administrator",exact:!0,component:B}),r.a.createElement(u.a,{path:"/administrator/signin",component:N}),r.a.createElement(u.a,{path:"/administrator/home",component:R})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.e116ffaa.chunk.js.map