(this.webpackJsonpstrangerthings=this.webpackJsonpstrangerthings||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(21),s=n.n(c),a=n(11),i=n(4),u=n(3),o=n(0),j=function(e){var t,n,r=e.userData,c=e.user,s=e.token;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Welcome to Stranger's Things"}),c&&s&&Object(o.jsx)("h2",{children:"My sent Messages"}),null===(t=r.messages)||void 0===t?void 0:t.map((function(e,t){if(e.fromUser._id===r._id)return Object(o.jsxs)("div",{className:"messages",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Title:"}),e.post.title]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Messager:"}),e.content]})]},"".concat(e._id," ").concat(t))})),c&&s&&Object(o.jsx)("h2",{children:"My recived Messages"}),null===(n=r.messages)||void 0===n?void 0:n.map((function(e,t){if(e.fromUser._id!==r._id)return Object(o.jsxs)("div",{className:"messages",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Title:"}),e.post.title]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Sender:"}),e.fromUser.username]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Messager:"}),e.content]})]},t)}))]})},b=n(15),l=n(2),p=n(6),O="https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT",d=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t){var n,r,c,s,a,i,u=arguments;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2?u[2]:void 0,c=u.length>3?u[3]:void 0,e.prev=3,s={method:n?n.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},r&&(s.headers.Authorization="Bearer ".concat(r)),e.next=8,fetch(O+t,s);case 8:return a=e.sent,e.next=11,a.json();case 11:if(!(i=e.sent).error){e.next=14;break}throw i.error;case 14:return e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(3),console.error("ERROR: ",e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts","GET",t);case 2:if((n=e.sent)&&n.data){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",n.data.posts||[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t,n){var r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/users/login","POST",null,{user:{username:t,password:n}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t,n){var r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/users/register","POST",null,{user:{username:t,password:n}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t,n,r,c,s,a){var i;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts","POST",t,{post:{title:n,description:r,price:c,location:s,willDeliver:a}});case 2:return i=e.sent,e.abrupt("return",i.data.post);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,c,s,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t,n){var r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts/".concat(n),"DELETE",t);case 2:return r=e.sent,e.abrupt("return",r.success);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t,n,r){var c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts/".concat(n,"/messages"),"POST",t,{message:{content:r}});case 2:return c=e.sent,console.log(c),e.abrupt("return",c.data.message);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t){var n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/users/me","GET",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=e.user,n=e.token,c=e.posts,s=e.setPosts,a=e.setFeaturedPost,j=Object(r.useState)(""),O=Object(i.a)(j,2),d=O[0],x=O[1],f=Object(r.useState)(""),g=Object(i.a)(f,2),k=g[0],w=g[1],y=Object(r.useState)(""),S=Object(i.a)(y,2),P=S[0],C=S[1],N=Object(r.useState)(""),T=Object(i.a)(N,2),D=T[0],_=T[1],E=Object(r.useState)(""),F=Object(i.a)(E,2),U=F[0],L=F[1],I=Object(r.useState)(!1),M=Object(i.a)(I,2),R=M[0],B=M[1],G=Object(u.e)();Object(r.useEffect)((function(){Object(p.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n);case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var W=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t){var r;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v(n,k,P,D,U,R);case 3:r=e.sent,s([].concat(Object(b.a)(c),[r]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t,r){var a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),e.next=3,m(n,r);case 3:e.sent&&(a=c.filter((function(e){return e.Id!=r})),s(a));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Posts"}),Object(o.jsx)("input",{className:"searchInput",onChange:function(e){x(e.target.value)},type:"text",name:"search",placeholder:"search"}),t&&n&&Object(o.jsxs)("form",{onSubmit:W,children:[Object(o.jsx)("input",{onChange:function(e){return w(e.target.value)},type:"text",name:"title",placeholder:"Title",value:k}),Object(o.jsx)("input",{onChange:function(e){return C(e.target.value)},type:"text",name:"description",placeholder:"Description",value:P}),Object(o.jsx)("input",{onChange:function(e){return _(e.target.value)},type:"number",name:"price",placeholder:"Price",value:D}),Object(o.jsx)("input",{onChange:function(e){return L(e.target.value)},type:"text",name:"location",placeholder:"Location",value:U}),Object(o.jsx)("label",{htmlFor:"checkbox",children:"Will Deliver!"}),Object(o.jsxs)("div",{children:[R?"Checked":"Not checked",Object(o.jsx)("input",{type:"checkbox",checked:R,id:"checkbox",onChange:function(){return B(!R)},value:R})]}),Object(o.jsx)("button",{type:"submit",children:"Submit Post"})]}),Object(o.jsx)("ul",{children:c.filter((function(e){return function(e){return"".concat(e.title," ").concat(e.location," ").concat(e.description).toLowerCase().includes(d.toLowerCase())}(e)})).map((function(e){return Object(o.jsxs)("li",{onClick:function(r){!function(e,r){t&&n?(G.push("/posts/".concat(r._id)),a(r)):alert("Please log in")}(0,e)},className:"postInfo",children:[Object(o.jsx)("h1",{children:e.title}),Object(o.jsx)("div",{children:e.description}),Object(o.jsx)("h3",{children:"Price: ".concat(e.price)}),Object(o.jsx)("h3",{children:"Location: ".concat(e.location)}),t&&n&&e.author.username==t&&Object(o.jsx)("button",{onClick:function(t){return J(t,e._id)},children:"Delete Post"})]},e._id)}))})]})},y=function(e){var t=e.user,n=e.setUser,c=e.token,s=e.setToken,a=e.setUserData,u=Object(r.useState)(""),j=Object(i.a)(u,2),b=j[0],O=j[1],d=Object(r.useState)(""),h=Object(i.a)(d,2),v=h[0],m=h[1],g=Object(r.useState)(!1),w=Object(i.a)(g,2),y=w[0],S=w[1],P=function(){var e=Object(p.a)(Object(l.a)().mark((function e(t){var r,c,i;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!y){e.next=9;break}return e.next=4,f(b,v);case 4:r=e.sent,n(b),s(r.data.token),e.next=18;break;case 9:return e.next=11,x(b,v);case 11:return c=e.sent,n(b),s(c.data.token),e.next=16,k(c.data.token);case 16:i=e.sent,a(i.data);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:t&&c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"User Profile"}),Object(o.jsxs)("p",{children:[t," logged in"]}),Object(o.jsx)("button",{onClick:function(){n(!1),s("")},children:"Logout"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:y?"Registering":"Login"}),Object(o.jsxs)("form",{onSubmit:P,className:"form",children:[Object(o.jsx)("input",{className:"loginInput",onChange:function(e){return O(e.target.value)},required:!0,name:"username",type:"text",placeholder:"username",value:b}),Object(o.jsx)("input",{className:"loginInput",onChange:function(e){return m(e.target.value)},required:!0,name:"password",type:"password",placeholder:"password",value:v}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]}),Object(o.jsx)("button",{onClick:function(){S(!y)},children:"Register/Login toggle"})]})})},S=function(e){var t=e.user,n=e.token,c=e.featuredPost,s=e.setFeaturedPost,a=e.userData,j=Object(r.useState)(""),O=Object(i.a)(j,2),d=O[0],h=O[1],x=Object(u.e)(),f=(Object(u.f)().postId,function(){var e=Object(p.a)(Object(l.a)().mark((function e(t){var r,a,i;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g(n,c._id,d);case 3:r=e.sent,a=[r].concat(Object(b.a)(c.messages)),i=Object.assign(c,{messages:a}),s(i),h("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(o.jsxs)("div",{className:"featured-post",children:[Object(o.jsx)("h1",{children:c.title}),Object(o.jsx)("p",{children:c.description}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Price:"})," ",c.price]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Posted by:"})," ",c.author.username]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Location:"})," ",c.location]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Will deliver:"}),c.willDeliver?"yes":"no"]}),Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:"Messages"}),Object(o.jsx)("ul",{children:c.messages&&c.messages.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("span",{children:e.content})},e._id)}))})]}),t&&n&&!(c.author._id==a._id)&&Object(o.jsxs)("form",{className:"message-form",onSubmit:f,children:[Object(o.jsx)("input",{className:"messageInput",onChange:function(e){return h(e.target.value)},type:"text",name:"message",placeholder:"message",value:d}),Object(o.jsx)("button",{type:"submit",children:"Submit Message"})]}),Object(o.jsx)("button",{onClick:function(e){s(!1),x.push("/posts")},children:"Close"})]})},P=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),b=Object(i.a)(s,2),l=b[0],p=b[1],O=Object(r.useState)([]),d=Object(i.a)(O,2),h=(d[0],d[1],Object(r.useState)(!1)),x=Object(i.a)(h,2),f=x[0],v=x[1],m=Object(r.useState)(!1),g=Object(i.a)(m,2),k=g[0],P=g[1],C=Object(r.useState)(""),N=Object(i.a)(C,2),T=N[0],D=N[1],_=Object(r.useState)(!1),E=Object(i.a)(_,2),F=E[0],U=E[1];return Object(o.jsxs)("main",{children:[Object(o.jsxs)("nav",{children:[Object(o.jsx)(a.b,{exact:!0,to:"/",className:"navlink",activeClassName:"active",children:"Account"}),Object(o.jsx)(a.b,{to:"/posts",className:"navlink",activeClassName:"active",children:"Posts"}),Object(o.jsx)(a.b,{to:"/login",className:"navlink",activeClassName:"active",children:"Login"})]}),Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(j,{user:k,token:T,userData:F,setUserData:U})}),Object(o.jsxs)(u.a,{path:"/posts",children:[Object(o.jsx)(u.a,{path:"/posts/:postId",children:k&&T&&Object(o.jsx)(S,{user:k,token:T,userData:F,setUserData:U,featuredPost:l,setFeaturedPost:p})}),Object(o.jsx)(w,{user:k,token:T,posts:n,setPosts:c,newPost:f,setNewPost:v,featuredPost:l,setFeaturedPost:p})]}),Object(o.jsx)(u.a,{path:"/login",children:Object(o.jsx)(y,{user:k,setUser:P,userData:F,setUserData:U,token:T,setToken:D})})]})};n(33);s.a.render(Object(o.jsx)(a.a,{children:Object(o.jsx)(P,{})}),document.getElementById("app"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b1d9bdad.chunk.js.map