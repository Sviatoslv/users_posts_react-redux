(window["webpackJsonpusers-post_app"]=window["webpackJsonpusers-post_app"]||[]).push([[0],{33:function(e,t,n){e.exports=n(53)},38:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(14),c=n.n(s),o=(n(38),n(24)),l=n(25),u=n(31),i=n(26),m=n(32),d=n(4),p=n(11),f=n(8),E=(n(43),n(44),n(45),n(12)),b=n.n(E),h=n(17),_="https://jsonplaceholder.typicode.com",O=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"/posts?userId=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"/comments?postId=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=n(30),P=n(28),j=n(16);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(P.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){return{type:"SET_USERS",users:e}},I=function(e){return{type:"SET_POSTS",posts:e}},w=function(e){return{type:"ADD_TODO",title:e}},x=Object(j.b)((function(e,t){switch(t.type){case"SET_USERS":return g({},e,{users:t.users});case"SET_POSTS":return g({},e,{posts:t.posts});case"SET_COMMENTS":return g({},e,{comments:t.comments});case"SET_CURRENT_USER":return g({},e,{currentUserId:t.userId});case"ADD_TODO":return g({},e,{todos:[].concat(Object(v.a)(e.todos),[{id:Date.now(),title:t.title,completed:!1}])});case"TOGGLE_TODO":return g({},e,{todos:e.todos.map((function(e){return t.todoId!==e.id?e:g({},e,{completed:!e.completed})}))});case"DELETE_TODO":return g({},e,{todos:e.todos.filter((function(e){return e.id!==t.todoId}))});default:return e}}),{users:[],posts:[],comments:[],currentUserId:1}),T=(n(47),Object(f.b)((function(e){return{users:e.users,currentUserId:e.currentUserId}}),(function(e){return{setUsers:function(t){return e(S(t))},setcurrentUserId:function(t){return e({type:"SET_CURRENT_USER",userId:t})}}}))((function(e){var t=e.users,n=e.setcurrentUserId;return r.a.createElement("div",{className:"UsersList"},r.a.createElement("h2",null,'Page "Users"'),r.a.createElement("p",null,"(users quantyty: ",t.length,")"),r.a.createElement("ul",{className:"UsersList__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"UsersList__list-item"},r.a.createElement("h3",{className:"UsersList__header"},e.name),r.a.createElement("ul",{className:"UsersList__contacts-list"},r.a.createElement("li",{className:"UsersList__contacts-item additional-text"},e.email),r.a.createElement("li",{className:"UsersList__contacts-item additional-text"},e.website)),r.a.createElement(d.b,{to:"/user_posts",onClick:function(){return t=e.id,void n(t);var t},className:"button"},"Posts"))}))))}))),C=n(2),D=(n(49),n(50),function(e){var t=e.isOpen,n=e.setIsOpen,a=e.children;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__contaiter"},a,r.a.createElement("button",{onClick:function(){return n(!t)},className:"button button--close"},r.a.createElement("span",{className:"visually-hidden"},"Close")))))}),k=function(e){var t=e.currentUserId,n=e.setPosts,s=Object(a.useState)(""),c=Object(C.a)(s,2),o=c[0],l=c[1],u=Object(a.useState)(""),i=Object(C.a)(u,2),m=i[0],d=i[1],p=Object(a.useState)(!1),f=Object(C.a)(p,2),E=f[0],b=f[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),m&&o){var a={body:m,id:(new Date).getTime(),title:o,userId:t};fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log("Success:",e)})).then((function(){return N(t).then(n)})).catch((function(e){return console.error("Error:",e)})),l(""),d(""),b(!0)}}},!E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add New Post"),r.a.createElement("div",{className:"form__container"},r.a.createElement("label",{className:"form__label"},r.a.createElement("p",{className:"form__label-text"},"Post title:"),r.a.createElement("input",{type:"text",value:o,onChange:function(e){l(e.target.value)},placeholder:"Post title",className:"form__input",required:!0})),r.a.createElement("label",{className:"form__label"},r.a.createElement("p",{className:"form__label-text"},"Post body:"),r.a.createElement("textarea",{type:"text",rows:"8",value:m,onChange:function(e){d(e.target.value)},placeholder:"Post body",className:"form__input",required:!0}))),r.a.createElement("button",{type:"submit",className:"button button--form"},"Add New Post")),E&&r.a.createElement("div",null,r.a.createElement("h2",null,"Success!"),r.a.createElement("p",null,"Your Post was successfully created!"),r.a.createElement("button",{type:"submit",className:"button button--form",onClick:function(){b(!1)}},"Add another one")))},L=Object(f.b)((function(e){return{users:e.users,posts:e.posts,currentUserId:e.currentUserId}}),(function(e){return{setPosts:function(t){return e(I(t))},addTodo:function(t){return e(w(t))}}}))((function(e){var t=e.currentUserId,n=e.setPosts,s=e.posts,c=e.users,o=Object(a.useState)(!1),l=Object(C.a)(o,2),u=l[0],i=l[1];return Object(a.useEffect)((function(){N(t).then(n)}),[n]),r.a.createElement("div",{className:"UserPostsList"},r.a.createElement("h2",null,"Posts of ",(c.find((function(e){return e.id===t}))||{}).name),r.a.createElement("p",null,"Posts quantity: ",s.length," "),r.a.createElement("ul",{className:"UserPostsList__list"},s.map((function(e){return r.a.createElement("li",{key:e.id,className:"UserPostsList__list-item"},r.a.createElement("div",null,r.a.createElement("h3",{className:"UserPostsList__post-title"},e.title),r.a.createElement("p",{className:"UserPostsList__post-body"},e.body)),r.a.createElement(d.b,{to:"/user_posts/".concat(e.id),className:"button"},"Details"))}))),r.a.createElement("div",{className:"UserPostsList__button-container"},r.a.createElement(d.b,{to:"/",className:"button"},"Back to Users List"),r.a.createElement("button",{onClick:function(){return i(!u)},className:"button button--add-new"},"Add New")),r.a.createElement(D,{isOpen:u,setIsOpen:i},r.a.createElement(k,{currentUserId:t,setPosts:n})))})),A=(n(51),n(52),function(e){var t=e.comments;return r.a.createElement("section",{className:"Comments"},r.a.createElement("div",{className:"Comments__title-container"},r.a.createElement("h4",null,"Post Comments"),r.a.createElement("p",null,t.length," comments")),r.a.createElement("ul",{className:"Comments__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"Comments__item"},e.body,r.a.createElement("div",{className:"Comments__comment-contacts"},r.a.createElement("p",{className:"additional-text"},"Name:",r.a.createElement("span",{className:"additional-text--mark"}," ",e.name)),r.a.createElement("p",{className:"additional-text"},"Email:",r.a.createElement("span",{className:"additional-text--mark"}," ",e.email))))}))))}),R=function(e){var t=e.currentUserId,n=e.setPosts,s=e.post,c=Object(a.useState)(s.title),o=Object(C.a)(c,2),l=o[0],u=o[1],i=Object(a.useState)(s.body),m=Object(C.a)(i,2),d=m[0],p=m[1],f=Object(a.useState)(!1),E=Object(C.a)(f,2),b=E[0],h=E[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),d&&l){var a={body:d,id:(new Date).getTime(),title:l,userId:t};fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log("Success:",e)})).then((function(){return N(t).then(n)})).catch((function(e){return console.error("Error:",e)})),h(!0)}}},!b&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Edit Post"),r.a.createElement("div",{className:"form__container"},r.a.createElement("label",{className:"form__label"},r.a.createElement("p",{className:"form__label-text"},"Post title:"),r.a.createElement("input",{type:"text",value:l,onChange:function(e){u(e.target.value)},placeholder:"Post title",className:"form__input",required:!0})),r.a.createElement("label",{className:"form__label"},r.a.createElement("p",{className:"form__label-text"},"Post body:"),r.a.createElement("textarea",{type:"text",rows:"8",value:d,onChange:function(e){p(e.target.value)},placeholder:"Post body",className:"form__input",required:!0}))),r.a.createElement("button",{type:"submit",className:"button button--form"},"Save Changes")),b&&r.a.createElement("div",null,r.a.createElement("h2",null,"Success!"),r.a.createElement("p",null,"Your Post was successfully changed!"),r.a.createElement("button",{type:"submit",className:"button button--form",onClick:function(){h(!1)}},"One more change!")))},q=function(e){var t=e.currentUserId,n=e.setPosts,s=e.post,c=(e.isOpen,e.setIsOpen,Object(a.useState)(!1)),o=Object(C.a)(c,2),l=o[0],u=o[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={id:"".concat(s.id)};fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log("Success:",e)})).then((function(){return N(t).then(n)})).catch((function(e){return console.error("Error:",e)})),u(!0)}},!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Post will be lost,",r.a.createElement("br",null),"like tears in the rain!"),r.a.createElement("button",{type:"submit",className:"button button--form"},"Delete post!")),l&&r.a.createElement("div",null,r.a.createElement("h2",null,"Success!"),r.a.createElement("p",null,"Post was successfully deleted!"),r.a.createElement(d.b,{to:"/user_posts/",className:"button button--form"},"Back to Users Posts")))},B=function(e){var t=e.isEditOpen,n=e.setEditIsOpen,a=e.isDeleteOpen,s=e.setIsDeleteOpen;return r.a.createElement("div",{className:"PostPage__button-container"},r.a.createElement(d.b,{to:"/user_posts/",className:"button"},"Back to Users Posts"),r.a.createElement("div",{className:"PostPage__button-container PostPage__button-container--modifier"},r.a.createElement("button",{className:"button button--post-modifier",onClick:function(){return n(!t)}},"Edit"),r.a.createElement("button",{className:"button button--post-modifier",onClick:function(){return s(!a)}},"Delete")))},J=Object(f.b)((function(e){return{users:e.users,posts:e.posts,currentUserId:e.currentUserId,comments:e.comments}}),(function(e){return{setPosts:function(t){return e(I(t))},setComments:function(t){return e(function(e){return{type:"SET_COMMENTS",comments:e}}(t))},addTodo:function(t){return e(w(t))}}}))((function(e){var t=e.users,n=e.comments,s=e.currentUserId,c=e.posts,o=e.setPosts,l=e.setComments,u=e.match,i=Object(a.useState)(!1),m=Object(C.a)(i,2),p=m[0],f=m[1],E=Object(a.useState)(!1),b=Object(C.a)(E,2),h=b[0],_=b[1];return Object(a.useEffect)((function(){N(s).then(o),y(u.params.postId).then(l)}),[l]),r.a.createElement("div",{className:"PostPage"},r.a.createElement("h2",null,"Post page"),r.a.createElement("section",{className:"PostPage__post"},r.a.createElement("h3",{className:"PostPage__post-title"},(c.find((function(e){return e.id===+u.params.postId}))||{}).title),r.a.createElement("p",{className:"PostPage__post-body"},(c.find((function(e){return e.id===+u.params.postId}))||{}).body),r.a.createElement("p",{className:"additional-text"},"Author:",r.a.createElement(d.b,{to:"/user_posts/",className:" additional-text additional-text--link"}," ",(t.find((function(e){return e.id===s}))||{}).name)),r.a.createElement(A,{comments:n})),r.a.createElement(B,{isEditOpen:p,setEditIsOpen:f,isDeleteOpen:h,setIsDeleteOpen:_}),r.a.createElement(D,{isOpen:p,setIsOpen:f},r.a.createElement(R,{post:c.find((function(e){return e.id===+u.params.postId})),currentUserId:s,setPosts:o})),r.a.createElement(D,{isOpen:h,setIsOpen:_},r.a.createElement(q,{post:c.find((function(e){return e.id===+u.params.postId})),currentUserId:s,setPosts:o,isOpen:h,setIsOpen:_})))})),M=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){O().then(this.props.setUsers)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement("h1",null,"Post Collection"),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:T}),r.a.createElement(p.a,{path:"/user_posts",exact:!0,component:L}),r.a.createElement(p.a,{path:"/user_posts/:postId?",render:function(e){var t=e.match;return r.a.createElement(J,{match:t})}}))))}}]),t}(r.a.Component),F=Object(f.b)((function(e){return{users:e.users,currentUserId:e.currentUserId}}),(function(e){return{setUsers:function(t){return e(S(t))},addTodo:function(t){return e(w(t))}}}))(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(f.a,{store:x},r.a.createElement(F,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4ab67a31.chunk.js.map