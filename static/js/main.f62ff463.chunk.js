(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),s=n.n(c),o=n(13),i=n.n(o),r=(n(20),n(3)),l=n(4),u=n(6),d=n(5),h=(n(21),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).OnFindIndex=function(t){return e.props.contents.map((function(e){return e.id})).indexOf(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[],n=this.props.contents,c=0;return n.forEach((function(n){c++,t.push(Object(a.jsx)("li",{className:"toc_li",children:Object(a.jsx)("a",{href:"/content/"+n.id,data:n.id,onClick:function(t){t.preventDefault(),e.props.onChangePage(n.id),e.props.onChangeIndex(e.OnFindIndex(n.id))},children:n.title})},c))})),Object(a.jsx)("nav",{className:"toc_nav",children:Object(a.jsx)("ul",{className:"toc_ul",children:t})})}}]),n}(c.Component)),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("header",{className:"sub_header",children:[Object(a.jsx)("h1",{className:"sub_h1",children:Object(a.jsx)("a",{className:"sub_text",href:"/",onClick:function(t){t.preventDefault(),e.props.onChangePage("welcome")},children:this.props.title})}),Object(a.jsx)("div",{className:"sub_subText",children:this.props.sub})]})}}]),n}(c.Component),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t;return"welcome"===this.props.mode?(e=this.props.welcome.title,t=this.props.welcome.desc.split("\n").map((function(e){return Object(a.jsx)("p",{children:e})}))):"welcome"!==this.props.mode&&(e=this.props.title,t=this.props.desc.split("\n").map((function(e){return Object(a.jsx)("p",{children:e})}))),Object(a.jsxs)("article",{className:"content_article",children:[Object(a.jsx)("h2",{className:"content_header",children:e}),t]})}}]),n}(c.Component),b=n(8),m=n(9),f=n(7),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onChange=function(){var t=e.props.index,n=Object(b.a)(e.props.contents);n.splice(t,1),e.props.onChangeContents(n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("ul",{className:"control_ul",children:[Object(a.jsx)("li",{className:"control_li",children:Object(a.jsx)("button",{href:"/",onClick:function(t){t.preventDefault(),e.props.onChangeMode("create")},children:Object(a.jsx)(m.a,{className:"icon",icon:f.c})})}),Object(a.jsx)("li",{className:"control_li",children:Object(a.jsx)("button",{href:"/",onClick:function(t){t.preventDefault(),"welcome"!==e.props.mode&&e.props.onChangeMode("update")},children:Object(a.jsx)(m.a,{className:"icon",icon:f.b})})}),Object(a.jsx)("li",{className:"control_li",children:Object(a.jsx)("button",{className:"control_input",type:"button",value:"delete",onClick:function(t){t.preventDefault(),"welcome"!==e.props.control?(e.onChange(),e.props.onChangeMode("delete")):e.props.onChangeMode("delete")},children:Object(a.jsx)(m.a,{className:"icon",icon:f.a})})})]})}}]),n}(c.Component),x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onChange=function(){var e=a.props.onChangeId+1,t=document.querySelector(".title").value,n=document.querySelector("textarea").value;t&&""!==n&&a.setState({id:e,title:t,desc:n})},a.onSubmit=function(e){var t=document.querySelector(".title").value,n=document.querySelector("textarea").value;e.preventDefault(),t&&""!==n&&(a.props.onChangeContents(a.state),document.querySelector(".title").value="",document.querySelector("textarea").value="")},a.state={id:null,title:null,desc:null},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("article",{className:"content_article",children:[Object(a.jsx)("h2",{className:"content_header",children:"\ubaa9\ub85d \ucd94\uac00"}),Object(a.jsxs)("form",{action:"/",method:"post",onSubmit:this.onSubmit,onChange:this.onChange,children:[Object(a.jsx)("p",{children:Object(a.jsx)("input",{className:"title",type:"text",name:"title",placeholder:"title"})}),Object(a.jsx)("p",{children:Object(a.jsx)("textarea",{className:"text",name:"desc",placeholder:"description"})}),Object(a.jsx)("p",{children:Object(a.jsx)("input",{className:"submit",type:"submit",value:"\ud655\uc778"})})]})]})}}]),n}(c.Component),v=n(14),g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onChangeTitle=function(){var e=document.querySelector(".title").value;a.setState({title:e})},a.onChangeDesc=function(){var e=document.querySelector("textarea").value;a.setState({desc:e})},a.onEdit=function(){var e=a.props.index,t=Object(b.a)(a.props.contents),n=Object(v.a)({},t[e]);n.id=e+1,n.title=document.querySelector(".title").value,n.desc=document.querySelector("textarea").value,t[e]=n,a.props.onChangeContents(t)},a.onSubmit=function(e){e.preventDefault()},a.state={title:e.title,desc:e.desc},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("article",{className:"content_article",children:[Object(a.jsx)("h2",{className:"content_header",children:"\ub0b4\uc6a9 \uc218\uc815"}),Object(a.jsxs)("form",{action:"/",method:"post",onSubmit:this.onSubmit,children:[Object(a.jsx)("p",{children:Object(a.jsx)("input",{className:"title",type:"text",name:"title",value:this.state.title,onChange:this.onChangeTitle})}),Object(a.jsx)("p",{children:Object(a.jsx)("textarea",{className:"text",name:"desc",value:this.state.desc,onChange:this.onChangeDesc})}),Object(a.jsx)("p",{children:Object(a.jsx)("input",{className:"submit",type:"submit",value:"\ud655\uc778",onClick:this.onEdit})})]})]})}}]),n}(c.Component),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState({contents:a.state.contents.concat(e)})},a.onChangePage=function(e){var t=a.state.contents.find((function(t){return t.id===e})),n=t.title,c=t.desc;a.setState({mode:e,title:n,desc:c,control:"delete"})},a.onReset=function(){a.setState({mode:"welcome",control:"delete"})},a.state={mode:"welcome",control:"delete",subject:{title:"My Dictionary \ud83d\udcd6",sub:"you can write down here whatever you want"},welcome:{title:"welcome!",desc:"this project is made with React library. \n you can add your list with an add button below this text, or edit it,\n or delete it."},contents:[{id:1,title:"REST API",desc:"REST or RESTful API design Representational State Transfer is designed to take advantage of existing protocols.\n While REST can be used over nearly any protocol, it usually takes advantage of HTTP when used for Web APIs.\n This means that developers do not need to install libraries or additional software in order to take advantage of a REST API design.\n REST API Design was defined by Dr.\n Roy Fielding in his 2000 doctorate dissertation.\n It is notable for its incredible layer of flexibility.\n Since data is not tied to methods and resources, REST has the ability to handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia."},{id:2,title:"React",desc:"React is a JavaScript library created by Facebook \n React is a User Interface (UI) library \n React is a tool for building UI components"},{id:3,title:"Babel",desc:"Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. \nWith Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015).\n Babel is available for different conversions. React uses Babel to convert JSX into JavaScript."}],currentIndex:null,title:null,desc:null},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(p,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(t){e.setState({mode:t,control:"delete"})}}),Object(a.jsx)(h,{contents:this.state.contents,onChangePage:function(t){e.onChangePage(t)},onChangeIndex:function(t){e.setState({currentIndex:t})}}),"create"===this.state.control&&Object(a.jsx)(x,{onChangeContents:function(t){e.onChange(t)},onChangeId:this.state.contents.length}),"update"===this.state.control&&Object(a.jsx)(g,{title:this.state.title,desc:this.state.desc,index:this.state.currentIndex,contents:this.state.contents,onChangeContents:function(t){e.setState({contents:t,control:"delete"})}}),"delete"===this.state.control&&Object(a.jsx)(j,{mode:this.state.mode,welcome:this.state.welcome,title:this.state.title,desc:this.state.desc}),Object(a.jsx)(O,{index:this.state.currentIndex,contents:this.state.contents,mode:this.state.mode,onChangeMode:function(t){e.setState({control:t})},onChangeContents:function(t){e.setState({contents:t}),e.onReset()}})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f62ff463.chunk.js.map