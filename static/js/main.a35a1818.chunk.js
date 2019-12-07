(this["webpackJsonpreact-okta"]=this["webpackJsonpreact-okta"]||[]).push([[0],{122:function(e,t,a){e.exports=a(269)},127:function(e,t,a){},128:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(54),o=a.n(c),s=(a(127),a(128),a(18)),i=a(7),l=a(21),u=a(10),h=a(11),m=a(13),p=a(12),d=a(14),f=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Above Solutions Staff Portal"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/staff"},"Staff"))))))}}]),t}(n.Component),b=a(16),v=a.n(b),E=Object(l.withAuth)(function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:null},a.checkAuthentication=function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(a.props.auth.isAuthenticated());case 2:(e=t.sent)!==a.state.authenticated&&a.setState({authenticated:e});case 4:case"end":return t.stop()}}))},a.login=function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.auth.login("/");case 1:case"end":return e.stop()}}))},a.logout=function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.auth.logout("/");case 1:case"end":return e.stop()}}))},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.checkAuthentication();case 1:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){if(null===this.state.authenticated)return null;var e=this.state.authenticated?r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"You have entered the staff portal,"," ",r.a.createElement(s.b,{to:"/staff"},"click here")),r.a.createElement("button",{className:"btn btn-light btn-lg",onClick:this.logout},"Logout")):r.a.createElement("div",null,r.a.createElement("p",{className:"lead"},"If you are a staff member, please get your credentials from your supervisor"),r.a.createElement("button",{className:"btn btn-dark btn-lg",onClick:this.login},"Login"));return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Staff Portal"),e)}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={currentUserName:"",currentUserEmail:""},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("okta-token-storage"));this.setState({currentUserEmail:e.idToken.claims.email,currentUserName:e.idToken.claims.name})}},{key:"render",value:function(){var e=this.state,t=e.currentUserEmail,a=e.currentUserName;return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Welcome!"),r.a.createElement("p",{className:"lead"},"You have reached the authorized staff area of the portal"),r.a.createElement("h5",null,"Name: ",a),r.a.createElement("h5",null,"Email: ",t))}}]),t}(n.Component),g=a(121),y=a.n(g),N=(a(268),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=o.a.findDOMNode(this);this.widget=new y.a({baseUrl:this.props.baseUrl,logo:"logo.png"}),this.widget.renderEl({el:e},this.props.onSuccess,this.props.onError)}},{key:"componentWillUnmount",value:function(){this.widget.remove()}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component)),j=Object(l.withAuth)(function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSuccess=function(e){return a.props.auth.redirect({sessionToken:e.session.token})},a.onError=function(e){console.log("error logging in",e)},a.state={authenticated:null},a.checkAuthentication(),a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"checkAuthentication",value:function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(this.props.auth.isAuthenticated());case 2:(e=t.sent)!==this.state.authenticated&&this.setState({authenticated:e});case 4:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){this.checkAuthentication()}},{key:"render",value:function(){return null===this.state.authenticated?null:this.state.authenticated?r.a.createElement(i.Redirect,{to:{pathname:"/"}}):r.a.createElement(N,{baseUrl:this.props.baseUrl,onSuccess:this.onSuccess,onError:this.onError})}}]),t}(n.Component));function O(e){e.history.push("/login")}var w=function(){return r.a.createElement(s.a,{basename:"/react-okta"},r.a.createElement(l.Security,{issuer:"https://dev-528054.okta.com/oauth2/default",client_id:"0oa25b8g4nQXcCezB357",redirect_uri:window.location.origin+"/implicit/callback",onAuthRequired:O},r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.Route,{path:"/",exact:!0,component:E}),r.a.createElement(l.SecureRoute,{path:"/staff",exact:!0,component:k}),r.a.createElement(i.Route,{path:"/login",render:function(){return r.a.createElement(j,{baseUrl:"https://dev-528054.okta.com"})}}),r.a.createElement(i.Route,{path:"/implicit/callback",component:l.ImplicitCallback})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[122,1,2]]]);
//# sourceMappingURL=main.a35a1818.chunk.js.map