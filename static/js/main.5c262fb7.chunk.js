(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},31:function(e,t,a){e.exports=a(48)},38:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(13),o=a.n(r),l=(a(36),a(38),a(7)),c=a(8),i=a(11),m=a(9),u=a(10),h=a(52),p=a(53),g=a(50),d=a(51),E=a(27),b=a.n(E),f=a(3),O=a(28),v=a.n(O),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChangeEmail=function(e){a.setState({email:e.target.value})},a.handleChangePassword=function(e){a.setState({password:e.target.value})},a.handleClick=function(e){if(e.preventDefault(),""===a.state.email&&a.setState({message:"Please input Email !"}),""===a.state.password&&a.setState({message:"Please input Password !"}),"tim"!==a.state.email||"tim"!==a.state.password)return a.setState({message:"Eamil or Password is Error !"});sessionStorage.email=a.state.email,sessionStorage.password=a.state.password,sessionStorage.isLogin=!0,a.setState({message:"",isLogin:!0}),a.props.history.push("/")},a.state={email:"",password:"",message:"",isLogin:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.email,t=this.state.password,a=""===this.state.message?"":s.a.createElement(f.a,{color:"danger"},this.state.message);return console.log("isLogin : "+this.state.isLogin),s.a.createElement(f.i,{fluid:!0},s.a.createElement(f.t,{className:"mt-5"},s.a.createElement(f.g,{md:{size:4,offset:4}},s.a.createElement(f.c,null,s.a.createElement(f.f,null,s.a.createElement("h3",null,s.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),"Sign In TEST")),s.a.createElement(f.d,null,s.a.createElement(f.j,{className:"form"},s.a.createElement(f.k,null,s.a.createElement(f.m,null,"Email"),s.a.createElement(f.l,{type:"email",name:"email",id:"exampleEmail",value:e,onChange:this.handleChangeEmail})),s.a.createElement(f.k,null,s.a.createElement(f.m,{for:"examplePassword"},"Password"),s.a.createElement(f.l,{type:"password",name:"password",id:"examplePassword",value:t,onChange:this.handleChangePassword})),s.a.createElement(f.b,{className:"",onClick:this.handleClick},"Submit"))),s.a.createElement(f.e,null,a)))))}}]),t}(n.Component),w=a(14),k=a(49),y=a(54),C=s.a.createContext(),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={color:"primary",title:"Context",account:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(C.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).loginOutClick=function(){sessionStorage.removeItem("email"),sessionStorage.removeItem("password"),sessionStorage.removeItem("isLogin"),a.props.history.push("/")},a.toggle=a.toggle.bind(Object(w.a)(Object(w.a)(a))),a.state={isOpen:!1,isLogin:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=sessionStorage.email;e?this.setState({account:e,isLogin:!0}):this.setState({account:"\u767b\u5165"})}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(f.q,{color:"dark",dark:!0,expand:"md"},s.a.createElement(f.r,{href:"/"},"PWA-APP"),s.a.createElement(f.s,{onClick:this.toggle}),s.a.createElement(f.h,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(f.n,{className:"ml-auto",navbar:!0},s.a.createElement(f.o,null,s.a.createElement(f.p,{tag:k.a,to:"/dashboard"},"Dashboard")),s.a.createElement(f.o,null,s.a.createElement(f.p,{tag:k.a,to:"/about"},"About")),s.a.createElement(f.o,null)))),s.a.createElement("div",{className:"main"},this.props.children))}}]),t}(n.Component);P.contextType=C;var x=Object(y.a)(P),L=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(S,null,s.a.createElement(x,null,s.a.createElement(f.i,{fluid:!0},s.a.createElement(f.t,{className:"mt-5"},s.a.createElement(f.g,{md:{size:10,offset:1}},s.a.createElement("h1",null,"Dashboard"),s.a.createElement(f.b,{color:"success"},"Dashboard"))))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).toggle=function(){a.props.toggle()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=this.context,a=t.color,n=t.title;return s.a.createElement("div",null,s.a.createElement("h1",null,"PWA APP About Info 2"),s.a.createElement(f.b,Object.assign({},e,{color:a,onClick:this.toggle}),n))}}]),t}(n.Component);A.contextType=C;var I=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(C.Consumer,null,function(e){return s.a.createElement("h1",null,"This is Title List ",e.title)})}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.setState({title:"context"})},a.handleClick=function(){sessionStorage.removeItem("email"),sessionStorage.removeItem("password"),sessionStorage.removeItem("isLogin"),window.location.reload()},a.state={title:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(S,null,s.a.createElement(x,null,s.a.createElement(f.i,{fluid:!0},s.a.createElement(f.t,{className:"mt-5"},s.a.createElement(f.g,{md:{size:10,offset:1}},s.a.createElement("h1",null,"About"),s.a.createElement(f.b,{color:"success"},"About ",this.state.title),s.a.createElement(A,{toggle:this.toggle}),s.a.createElement(I,null))))))}}]),t}(n.Component),T=(a(46),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isLogin:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,{history:b()({basename:"/pwa-play"})},s.a.createElement(p.a,null,s.a.createElement(g.a,{exact:!0,path:"/",component:L}),s.a.createElement(g.a,{path:"/login",component:j}),s.a.createElement(g.a,{path:"/about",component:N}),s.a.createElement(d.a,{to:"/"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.5c262fb7.chunk.js.map