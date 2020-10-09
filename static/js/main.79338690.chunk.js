(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{58:function(e,t,a){e.exports=a(90)},63:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),i=a.n(r),c=(a(63),a(21)),o=a(22),s=a(27),m=a(25),u=a(18),d=a(6),p=a(92),E=a(98),h=a(99),b=a(16),g=a(52),f=(a(66),a(67),a(93)),v=a(47);var k=function(e){return l.a.createElement("a",{class:"social btn btn-social-icon btn-sm btn-primary",href:e.link},l.a.createElement(v.a,{icon:["fab",e.icon],fixedWidth:!0}))};var S=function(){return l.a.createElement(p.a,{className:"footerContainer",fluid:!0},l.a.createElement("footer",{className:"mt-5",class:"outerfoot"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-md-left foot"},"Daniel Santaguida",l.a.createElement("br",null),"Ontario, Canada",l.a.createElement("br",null),"(647)-773-6186",l.a.createElement("br",null),"dsantaguida@outlook.com",l.a.createElement("br",null),l.a.createElement(k,{icon:"twitter",link:"https://twitter.com/dansantaguida"}),l.a.createElement(k,{icon:"instagram",link:"https://instagram.com/dansantaguida"}),l.a.createElement(k,{icon:"linkedin",link:"https://www.linkedin.com/in/daniel-santaguida/"}),l.a.createElement(k,{icon:"github",link:"https://github.com/DSantaguida"})))))},j=a(94),w=a(49);var y=function(e){return l.a.createElement(j.a,{className:"bg-transparent jumbotron-fluid pb-0 pt-3"},l.a.createElement(p.a,null,l.a.createElement(f.a,null,l.a.createElement(w.a,{className:"text-center border-bottom"},e.title&&l.a.createElement("h1",null,e.title),e.subTitle&&l.a.createElement("h2",null,e.subTitle),e.text&&l.a.createElement("h3",null,e.text)))))},N=a(95);var x=function(){return l.a.createElement(p.a,null,l.a.createElement(f.a,{className:"abPadding"},l.a.createElement(w.a,null,l.a.createElement(f.a,null,l.a.createElement("div",{className:"text-left border-left about bodyParagraph"},"Hi! My name is Daniel Santaguida. I'm currently a Software Engineering student at York University's Lassonde School of Engineering. My experience in the software industry comes from the internship I completed at IBM, as well as the personal projects I have completed on the side.")),l.a.createElement(f.a,null,l.a.createElement("div",{className:"text-left border-left about"},"I am most experienced programming in Java, but I am also proficient in C, Python, JavaScript, and HTML/CSS. Other tools I have experience using include Git, Gradle, Jenkins, Travis, Docker, Kubernetes, and Artifactory."))),l.a.createElement(w.a,{className:"text-center"},l.a.createElement(N.a,{src:"/portfolio/me.jpg",rounded:!0}))))};var R=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(y,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(x,null))};var C=function(e){return l.a.createElement("div",{className:"col-md-4 col-sm-6 margin-top"},l.a.createElement("div",{className:"thumbnail"},l.a.createElement("div",{class:"projEntry"},l.a.createElement("p",{className:"text-center description"},e.description),l.a.createElement("a",{href:e.link,className:"btn button"},"View project")),l.a.createElement("img",{class:"entryImage",src:e.image,alt:"Daniel Santaguida's Portfolio",width:"390",height:"235"})))};var D=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(y,{title:e.title}),l.a.createElement(f.a,null,l.a.createElement(C,{link:"https://github.com/DSantaguida/",description:"An online portfolio created with React.js, React Bootstrap, React Router, and SendGrid.",image:"/website.png"}),l.a.createElement(C,{link:"https://github.com/DSantaguida/",description:"An online portfolio created with React.js, React Bootstrap, React Router, and SendGrid.",image:"/logo192.png"}),l.a.createElement(C,{link:"https://github.com/DSantaguida/",description:"An online portfolio created with React.js, React Bootstrap, React Router, and SendGrid.",image:"/logo192.png"}),l.a.createElement(C,{link:"https://github.com/DSantaguida/",description:"An online portfolio created with React.js, React Bootstrap, React Router, and SendGrid.",image:"/logo192.png"})))},T=a(50),O=a(97),G=a(96),I=a(51),B=a.n(I),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).send=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),B.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({isDisabled:!0,result:!0}):n.setState({isDisabled:!1,result:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.update=function(e){var t=e.target,a=t.value,l=t.name;n.setState(Object(T.a)({},l,a))},n.state={name:"",email:"",message:"",result:null,isDisabled:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,{title:this.props.title,subTitle:this.props.subTitle}),l.a.createElement(p.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(w.a,{md:8},l.a.createElement(O.a,{onSubmit:this.send},l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"name"},"Name:"),l.a.createElement(O.a.Control,{id:"name",name:"name",type:"text",onChange:this.update,value:this.state.name})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"email"},"Email:"),l.a.createElement(O.a.Control,{id:"email",name:"email",type:"email",onChange:this.update,value:this.state.email})),l.a.createElement(O.a.Group,null,l.a.createElement(O.a.Label,{htmlFor:"message"},"Message:"),l.a.createElement(O.a.Control,{id:"message",name:"message",rows:"4",as:"textarea",onChange:this.update,value:this.state.message})),l.a.createElement(G.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.isDisabled},"Send"),!0===this.state.result&&l.a.createElement("p",{className:"d-inline emailResult"},"Email Sent"),!1===this.state.result&&l.a.createElement("p",{className:"d-inline emailResult"},"Email Failed to Send"))))))}}]),a}(l.a.Component),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),b.b.add(g.a),n.state={title:"Daniel Santaguida",headerLinks:[{title:"Home",path:"/"},{title:"Projects",path:"/projects"},{title:"Contact",path:"/contact"}],home:{title:"About Me"},projects:{title:"Check out my projects!"},contact:{title:"Any Questions?",subTitle:"Let's Talk! - Page currently not working"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"p-0 background",fluid:!0},l.a.createElement(E.a,{bg:"primary",variant:"dark",className:"border-bottom",expand:"lg"},l.a.createElement(E.a.Brand,null,"Daniel Santaguida"),l.a.createElement(E.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(E.a.Collapse,{id:"navbar-toggle"},l.a.createElement(h.a,null,l.a.createElement(u.b,{className:"nav-link",to:"/portfolio"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/projects"},"Projects"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/portfolio",exact:!0,render:function(){return l.a.createElement(R,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/projects",exact:!0,render:function(){return l.a.createElement(D,{title:e.state.projects.title})}}),l.a.createElement(d.a,{path:"/contact",exact:!0,render:function(){return l.a.createElement(A,{title:e.state.contact.title,subTitle:e.state.contact.subTitle})}}),l.a.createElement(S,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(89);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.79338690.chunk.js.map