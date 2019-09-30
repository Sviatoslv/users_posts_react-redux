(window["webpackJsonpusers-post_app"]=window["webpackJsonpusers-post_app"]||[]).push([[0],{27:function(e,t,n){e.exports=n(47)},32:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(14),c=n.n(r),o=(n(32),n(4)),l=n(11),u=n(8),i=(n(37),n(38),n(39),n(12)),m=n.n(i),p=n(17),d="https://jsonplaceholder.typicode.com",f=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/users"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/posts?userId=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/comments?postId=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(25),_=n(16);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){return{type:"SET_POSTS",posts:e}},P=Object(_.b)((function(e,t){switch(t.type){case"SET_USERS":return N({},e,{users:t.users});case"SET_POSTS":return N({},e,{posts:t.posts});case"SET_COMMENTS":return N({},e,{comments:t.comments});case"SET_CURRENT_USER":return N({},e,{currentUserId:t.userId});default:return e}}),{users:[],posts:[],comments:[],currentUserId:1}),v=(n(41),Object(u.b)((function(e){return{users:e.users}}),(function(e){return{setcurrentUserId:function(t){return e({type:"SET_CURRENT_USER",userId:t})}}}))((function(e){var t=e.users,n=e.setcurrentUserId;return s.a.createElement("div",{className:"UsersList"},s.a.createElement("h2",null,'Page "Users"'),s.a.createElement("p",null,"(users quantity: ",t.length,")"),s.a.createElement("ul",{className:"UsersList__list"},t.map((function(e){return s.a.createElement("li",{key:e.id,className:"UsersList__list-item"},s.a.createElement("h3",{className:"UsersList__header"},e.name),s.a.createElement("ul",{className:"UsersList__contacts-list"},s.a.createElement("li",{className:"UsersList__contacts-item additional-text"},e.email),s.a.createElement("li",{className:"UsersList__contacts-item additional-text"},e.website)),s.a.createElement(o.b,{to:"/user_posts",onClick:function(){return t=e.id,void n(t);var t},className:"button"},"Posts"))}))))}))),j=n(2),g=(n(43),n(44),function(e){var t=e.isOpen,n=e.setIsOpen,a=e.children;return s.a.createElement(s.a.Fragment,null,t&&s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"modal__contaiter"},a,s.a.createElement("button",{onClick:function(){return n(!t)},className:"button button--close"},s.a.createElement("span",{className:"visually-hidden"},"Close")))))}),S=function(e){var t=e.currentUserId,n=e.setPosts,r=Object(a.useState)(""),c=Object(j.a)(r,2),o=c[0],l=c[1],u=Object(a.useState)(""),i=Object(j.a)(u,2),m=i[0],p=i[1],d=Object(a.useState)(!1),f=Object(j.a)(d,2),E=f[0],h=f[1];return s.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),m&&o){var a={body:m,id:(new Date).getTime(),title:o,userId:t};fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log("Success:",e)})).then((function(){return b(t).then(n)})).catch((function(e){return console.error("Error:",e)})),l(""),p(""),h(!0)}}},!E&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Add New Post"),s.a.createElement("div",{className:"form__container"},s.a.createElement("label",{className:"form__label"},s.a.createElement("p",{className:"form__label-text"},"Post title:"),s.a.createElement("input",{type:"text",value:o,onChange:function(e){l(e.target.value)},placeholder:"Post title",className:"form__input",required:!0})),s.a.createElement("label",{className:"form__label"},s.a.createElement("p",{className:"form__label-text"},"Post body:"),s.a.createElement("textarea",{type:"text",rows:"8",value:m,onChange:function(e){p(e.target.value)},placeholder:"Post body",className:"form__input",required:!0}))),s.a.createElement("button",{type:"submit",className:"button button--form"},"Add New Post")),E&&s.a.createElement("div",null,s.a.createElement("h2",null,"Success!"),s.a.createElement("p",null,"Your Post was successfully created!"),s.a.createElement("button",{type:"submit",className:"button button--form",onClick:function(){h(!1)}},"Add another one")))},U=Object(u.b)((function(e){return{users:e.users,posts:e.posts,currentUserId:e.currentUserId}}),(function(e){return{setPosts:function(t){return e(y(t))},addTodo:function(t){return e({type:"ADD_TODO",title:t})}}}))((function(e){var t=e.currentUserId,n=e.setPosts,r=e.posts,c=e.users,l=Object(a.useState)(!1),u=Object(j.a)(l,2),i=u[0],m=u[1];return Object(a.useEffect)((function(){b(t).then(n)}),[n,t]),s.a.createElement("div",{className:"UserPostsList"},s.a.createElement("h2",null,"Posts of ",(c.find((function(e){return e.id===t}))||{}).name),s.a.createElement("p",null,"Posts quantity: ",r.length," "),s.a.createElement("ul",{className:"UserPostsList__list"},r.map((function(e){return s.a.createElement("li",{key:e.id,className:"UserPostsList__list-item"},s.a.createElement("div",null,s.a.createElement("h3",{className:"UserPostsList__post-title"},e.title),s.a.createElement("p",{className:"UserPostsList__post-body"},e.body)),s.a.createElement(o.b,{to:"/user_posts/".concat(e.id),className:"button"},"Details"))}))),s.a.createElement("div",{className:"UserPostsList__button-container"},s.a.createElement(o.b,{to:"/",className:"button"},"Back to Users List"),s.a.createElement("button",{onClick:function(){return m(!i)},className:"button button--add-new"},"Add New")),s.a.createElement(g,{isOpen:i,setIsOpen:m},s.a.createElement(S,{currentUserId:t,setPosts:n})))})),w=(n(45),n(46),function(e){var t=e.comments;return s.a.createElement("section",{className:"Comments"},s.a.createElement("div",{className:"Comments__title-container"},s.a.createElement("h4",null,"Post Comments"),s.a.createElement("p",null,t.length," comments")),s.a.createElement("ul",{className:"Comments__list"},t.map((function(e){return s.a.createElement("li",{key:e.id,className:"Comments__item"},e.body,s.a.createElement("div",{className:"Comments__comment-contacts"},s.a.createElement("p",{className:"additional-text"},"Name:",s.a.createElement("span",{className:"additional-text--mark"}," ",e.name)),s.a.createElement("p",{className:"additional-text"},"Email:",s.a.createElement("span",{className:"additional-text--mark"}," ",e.email))))}))))}),I=function(e){var t=e.currentUserId,n=e.setPosts,r=e.post,c=Object(a.useState)(r.title),o=Object(j.a)(c,2),l=o[0],u=o[1],i=Object(a.useState)(r.body),m=Object(j.a)(i,2),p=m[0],d=m[1],f=Object(a.useState)(!1),E=Object(j.a)(f,2),h=E[0],_=E[1],O=Object(a.useState)(!1),N=Object(j.a)(O,2),y=N[0],P=N[1];return s.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),p===r.body&&l===r.title)P(!0);else if(p&&l){var a={body:p,id:(new Date).getTime(),title:l,userId:t};fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log("Success:",e)})).then((function(){return b(t).then(n)})).catch((function(e){return console.error("Error:",e)})),u(r.title),d(r.body),_(!0)}}},!h&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Edit Post"),y&&s.a.createElement("p",{className:"warning"},"Nothing has changed yet!"),s.a.createElement("div",{className:"form__container"},s.a.createElement("label",{className:"form__label"},s.a.createElement("p",{className:"form__label-text"},"Post title:"),s.a.createElement("input",{type:"text",value:l,onChange:function(e){P(!1),u(e.target.value)},placeholder:"Post title",className:"form__input",required:!0})),s.a.createElement("label",{className:"form__label"},s.a.createElement("p",{className:"form__label-text"},"Post body:"),s.a.createElement("textarea",{type:"text",rows:"8",value:p,onChange:function(e){P(!1),d(e.target.value)},placeholder:"Post body",className:"form__input",required:!0}))),s.a.createElement("button",{type:"submit",className:p===r.body&&l===r.title?"button button--form button--disabled":"button button--form"},"Save Changes")),h&&s.a.createElement("div",null,s.a.createElement("h2",null,"Success!"),s.a.createElement("p",null,"Your Post was successfully changed!"),s.a.createElement("button",{type:"submit",className:"button button--form",onClick:function(){_(!1)}},"One more change!")))},x=I;I.defaultProps={post:{}};var C=function(e){var t=e.currentUserId,n=e.setPosts,r=e.post,c=Object(a.useState)(!1),l=Object(j.a)(c,2),u=l[0],i=l[1];return s.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={id:"".concat(r.id)};fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){return console.log("Success:",e)})).then((function(){return b(t).then(n)})).catch((function(e){return console.error("Error:",e)})),i(!0)}},!u&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Post will be lost,",s.a.createElement("br",null),"like tears in the rain!"),s.a.createElement("button",{type:"submit",className:"button button--form"},"Delete post!")),u&&s.a.createElement("div",null,s.a.createElement("h2",null,"Success!"),s.a.createElement("p",null,"Post was successfully deleted!"),s.a.createElement(o.b,{to:"/user_posts/",className:"button button--form"},"Back to Users Posts")))},k=C;C.defaultProps={post:{}};var T=function(e){var t=e.isEditOpen,n=e.setEditIsOpen,a=e.isDeleteOpen,r=e.setIsDeleteOpen;return s.a.createElement("div",{className:"PostPage__button-container"},s.a.createElement(o.b,{to:"/user_posts/",className:"button"},"Back to Users Posts"),s.a.createElement("div",{className:"PostPage__button-container PostPage__button-container--modifier"},s.a.createElement("button",{className:"button button--post-modifier",onClick:function(){return n(!t)}},"Edit"),s.a.createElement("button",{className:"button button--post-modifier",onClick:function(){return r(!a)}},"Delete")))},D=Object(u.b)((function(e){return{users:e.users,posts:e.posts,currentUserId:e.currentUserId,comments:e.comments}}),(function(e){return{setPosts:function(t){return e(y(t))},setComments:function(t){return e(function(e){return{type:"SET_COMMENTS",comments:e}}(t))}}}))((function(e){var t=e.users,n=e.comments,r=e.currentUserId,c=e.posts,l=e.setPosts,u=e.setComments,i=e.match,m=Object(a.useState)(!1),p=Object(j.a)(m,2),d=p[0],f=p[1],h=Object(a.useState)(!1),_=Object(j.a)(h,2),O=_[0],N=_[1];return Object(a.useEffect)((function(){b(r).then(l),E(i.params.postId).then(u)}),[r,l,i.params.postId,u]),s.a.createElement("div",{className:"PostPage"},s.a.createElement("h2",null,"Post page"),s.a.createElement("section",{className:"PostPage__post"},s.a.createElement("h3",{className:"PostPage__post-title"},(c.find((function(e){return e.id===+i.params.postId}))||{}).title),s.a.createElement("p",{className:"PostPage__post-body"},(c.find((function(e){return e.id===+i.params.postId}))||{}).body),s.a.createElement("p",{className:"additional-text"},"Author:",s.a.createElement(o.b,{to:"/user_posts/",className:" additional-text additional-text--link"}," ",(t.find((function(e){return e.id===r}))||{}).name)),s.a.createElement(w,{comments:n})),s.a.createElement(T,{isEditOpen:d,setEditIsOpen:f,isDeleteOpen:O,setIsDeleteOpen:N}),s.a.createElement(g,{isOpen:d,setIsOpen:f},s.a.createElement(x,{post:c.find((function(e){return e.id===+i.params.postId})),currentUserId:r,setPosts:l})),s.a.createElement(g,{isOpen:O,setIsOpen:N},s.a.createElement(k,{post:c.find((function(e){return e.id===+i.params.postId})),currentUserId:r,setPosts:l})))})),L=Object(u.b)((function(e){return{users:e.users}}),(function(e){return{setUsers:function(t){return e(function(e){return{type:"SET_USERS",users:e}}(t))}}}))((function(e){var t=e.setUsers;return Object(a.useEffect)((function(){f().then(t)}),[t]),s.a.createElement("div",{className:"App"},s.a.createElement(o.a,null,s.a.createElement("h1",null,"Post Collection"),s.a.createElement(l.c,null,s.a.createElement(l.a,{path:"/",exact:!0,component:v}),s.a.createElement(l.a,{path:"/user_posts",exact:!0,component:U}),s.a.createElement(l.a,{path:"/user_posts/:postId?",render:function(e){var t=e.match;return s.a.createElement(D,{match:t})}}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement((function(){return s.a.createElement(u.a,{store:P},s.a.createElement(L,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3a6981dc.chunk.js.map