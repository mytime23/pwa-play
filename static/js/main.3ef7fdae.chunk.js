(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(45)},35:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),l=n.n(r),o=(n(33),n(35),n(6)),i=n(7),u=n(9),s=n(8),m=n(10),h=n(47),b=n(49),f=n(48),p=n(24),O=n.n(p),E=n(3),j=n(13),d=n(46),v=c.a.createContext(),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={color:"primary",title:"Context"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(v.Provider,{value:this.state},this.props.children)}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).toggle=n.toggle.bind(Object(j.a)(Object(j.a)(n))),n.state={isOpen:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E.h,{color:"dark",dark:!0,expand:"md"},c.a.createElement(E.i,{href:"/"},"PWA-APP"),c.a.createElement(E.j,{onClick:this.toggle}),c.a.createElement(E.c,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(E.e,{className:"ml-auto",navbar:!0},c.a.createElement(E.f,null,c.a.createElement(E.g,{tag:d.a,to:"/"},"Home")),c.a.createElement(E.f,null,c.a.createElement(E.g,{tag:d.a,to:"/about"},"About")),c.a.createElement(E.f,null,c.a.createElement(E.g,{tag:d.a,to:"/docs"},"Docs"))))),c.a.createElement("div",{className:"main"},this.props.children))}}]),t}(a.Component);k.contextType=v;var y=k,w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={homeTitle:"\u4e3b\u984c",homeArch:"Web & Desktop & AR/VR",homeTech:"React + Electron + React360"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(g,null,c.a.createElement(y,null,c.a.createElement(E.d,{className:"home",fluid:!0},c.a.createElement("h1",null,"Home"))))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).toggle=function(){n.setState({title:"context"})},n.state={title:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(g,null,c.a.createElement(y,null,c.a.createElement(E.d,{fluid:!0},c.a.createElement(E.k,{className:"mt-5"},c.a.createElement(E.b,{md:{size:10,offset:1}},c.a.createElement("h1",null,"About"),c.a.createElement(E.a,{color:"success"},"About ",this.state.title),c.a.createElement(x,{toggle:this.toggle}),c.a.createElement(A,null))))))}}]),t}(a.Component),A=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(v.Consumer,null,function(e){return c.a.createElement("h1",null,"This is Title List ",e.title)})}}]),t}(a.Component),x=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).toggle=function(){n.props.toggle()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.context,t=e.color,n=e.title;return c.a.createElement("div",null,c.a.createElement("h1",null,"PWA APP About Info 2"),c.a.createElement(E.a,{color:t,onClick:this.toggle},n))}}]),t}(a.Component);x.contextType=v;var P=C,T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(g,null,c.a.createElement(y,null,c.a.createElement(E.d,{fluid:!0},c.a.createElement(E.k,{className:"mt-5"},c.a.createElement(E.b,{md:{size:10,offset:1}},c.a.createElement("h1",null,"Docs"))))))}}]),t}(a.Component),D=(n(42),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{history:O()({basename:"/pwa-play"})},c.a.createElement(b.a,null,c.a.createElement(f.a,{exact:!0,path:"/",component:w}),c.a.createElement(f.a,{path:"/about",component:P}),c.a.createElement(f.a,{path:"/docs",component:T})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.3ef7fdae.chunk.js.map