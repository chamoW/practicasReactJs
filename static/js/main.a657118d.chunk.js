(this["webpackJsonpplatzi-badges"]=this["webpackJsonpplatzi-badges"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),o=a(21),i=a(16),l=a(15),d=a.n(l),j=a(20),b=a(11),h=a(12),m=a(14),u=a(13),p=a(35),O=(a(85),a(64)),g=a.n(O),x=a(1);var f=function(e){var t=e.email,a=g()(t);return Object(x.jsx)("img",{className:e.className,src:"https://www.gravatar.com/avatar/".concat(a,"?d=identicon"),alt:"Avatar"})};var v=function(e){var t=function(e){var t=s.a.useState(""),a=Object(p.a)(t,2),n=a[0],r=a[1],c=s.a.useState(e),o=Object(p.a)(c,2),i=o[0],l=o[1];return s.a.useMemo((function(){var t=e.filter((function(e){return"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(n.toLowerCase())}));l(t)}),[e,n]),[n,r,i]}(e.badges),a=Object(p.a)(t,3),n=a[0],r=a[1],c=a[2];return 0===c.length?Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:" No existen registros "})}):Object(x.jsxs)("div",{className:"BadgesList",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Filter Badges"}),Object(x.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(e){r(e.target.value)}})]}),Object(x.jsx)("ul",{className:"list-unstyled",children:c.map((function(e){return Object(x.jsx)("li",{className:"BadgesListItem",children:Object(x.jsxs)(o.b,{to:"/badges/".concat(e.id),className:"text-reset text-decoraton-none",children:[Object(x.jsx)(f,{className:"BadgesListItem_avatar",email:e.email}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"BadgesListNames",children:[e.firstName," ",e.lastName]}),Object(x.jsxs)("div",{className:"Twitter_name",children:[Object(x.jsx)("span",{className:"Twitter_logo"}),"@",e.twitter]}),Object(x.jsx)("div",{className:"BadgesListJob",children:e.jobTitle}),Object(x.jsx)("div",{className:"BadgesListJob",children:e.email})]})]})},e.id)}))})]})},N=(a(97),a.p+"static/media/badge-header.3e56976b.svg"),y="http://localhost:3001",C=function(e){return new Promise((function(t){return setTimeout(t,e)}))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1))+e},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return C(S(e,t))};function k(e){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(d.a.mark((function e(t){var a,n,s,r,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,w();case 3:return a.headers={"Content-Type":"application/json",Accept:"application/json"},n=y+t,e.next=7,fetch(n,a);case 7:return s=e.sent,e.next=10,s.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T={badges:{list:function(){return k("/badges")},create:function(e){return console.log(e),k("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return k("/badges/".concat(e))},update:function(e,t){return k("/badges/".concat(e),{method:"PUT",body:JSON.stringify(t)})},remove:function(e){return k("/badges/".concat(e),{method:"DELETE"})}}},_=(a(98),a(99),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"lds-grid",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})}}]),a}(n.Component));var I=function(){return Object(x.jsx)("div",{className:"PageLoading",children:Object(x.jsx)(_,{})})};a(100);var M=function(e){return Object(x.jsx)("div",{className:"PageError",children:e.error.message})},E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).state={loading:!0,error:null,data:void 0},n.fetchData=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0,error:null}),e.prev=1,e.next=4,T.badges.list();case 4:t=e.sent,n.setState({loading:!1,data:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),console.log("1. CONSTRUCTOR: ",e),n}return Object(h.a)(a,[{key:"render",value:function(){return console.log("2/4. RENDER"),!0===this.state.loading?Object(x.jsx)(I,{}):this.state.error?Object(x.jsx)(M,{error:this.state.error}):Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)("div",{className:"Badges",children:Object(x.jsx)("div",{className:"Badges_hero",children:Object(x.jsx)("div",{className:"Badges_container",children:Object(x.jsx)("img",{className:"Badges_conf-logo",src:N,alt:"Logo"})})})}),Object(x.jsxs)("div",{className:"Badges_container",children:[Object(x.jsx)("div",{className:"Badges_buttons",children:Object(x.jsx)(o.b,{to:"/badges/new",className:"btn btn-primary",children:"New Badge"})}),Object(x.jsx)("div",{className:"Badges_list",children:Object(x.jsx)("div",{className:"Badges_container",children:Object(x.jsx)(v,{badges:this.state.data})})})]})]})}},{key:"componentDidMount",value:function(){console.log("3. componentDidMount"),this.fetchData()}},{key:"componentDidUpdate",value:function(e,t){console.log("5. componentDidUpdate"),console.log({prevProps:e,prevState:t}),console.log({props:this.props,state:this.state})}},{key:"componentWillUnmount",value:function(){console.log("6. componentWillUnmount"),clearTimeout(this.timeOutId)}}]),a}(s.a.Component),L=a(30),A=a(40),D=(a(101),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"Badge",children:[Object(x.jsx)("div",{className:"Badge_header",children:Object(x.jsx)("img",{src:N,alt:"Logo Conferencia"})}),Object(x.jsxs)("div",{className:"Badge_section-name",children:[Object(x.jsx)(f,{className:"Badge_avatar",email:this.props.email}),Object(x.jsxs)("h1",{children:[this.props.firstName," ",Object(x.jsx)("br",{})," ",this.props.lastName]})]}),Object(x.jsxs)("div",{className:"Badge_section-info",children:[Object(x.jsxs)("h3",{children:[" ",this.props.jobTitle]}),Object(x.jsxs)("div",{children:[" ",this.props.email]})]}),Object(x.jsx)("div",{className:"Badge_footer",children:"pruebita"})]})}}]),a}(s.a.Component)),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.setState(Object(L.a)({},t.target.name,t.target.value))},e.handleClick=function(e){console.log("Button was clicked")},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:this.props.title}),Object(x.jsxs)("form",{onSubmit:this.props.onSubmit,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"First name"}),Object(x.jsx)("input",{onChange:this.props.onChange,type:"text",name:"firstName",className:"form-control",placeholder:"Primer nombre",value:this.props.formValues.firstName})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Last name"}),Object(x.jsx)("input",{onChange:this.props.onChange,type:"text",name:"lastName",className:"form-control",value:this.props.formValues.lastName})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Job Tittle"}),Object(x.jsx)("input",{onChange:this.props.onChange,type:"text",name:"jobTitle",className:"form-control",value:this.props.formValues.jobTitle})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Email"}),Object(x.jsx)("input",{onChange:this.props.onChange,type:"email",name:"email",className:"form-control",value:this.props.formValues.email})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"",children:"Twitter"}),Object(x.jsx)("input",{onChange:this.props.onChange,type:"text",name:"twitter",className:"form-control",value:this.props.formValues.twitter})]}),Object(x.jsx)("button",{onClick:this.handleClick,className:"btn btn-primary",children:"Save"}),this.props.error&&Object(x.jsx)("div",{className:"alert alert-danger mb-3",role:"alert",children:this.props.error.message})]})]})}}]),a}(s.a.Component),P=a.p+"static/media/platziconf-logo.8fbacde1.svg",J=(a(102),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.handleChange=function(t){e.setState({form:Object(A.a)(Object(A.a)({},e.state.form),{},Object(L.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(j.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("In handleSubmit"),a.preventDefault(),e.setState({loading:!0,error:null}),t.prev=3,console.log("state: ",e.state),t.next=7,T.badges.create(e.state.form);case 7:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),e.setState({loading:!1,error:t.t0});case 14:console.log("state: ",e.props.formValues);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){return!0===this.state.loading?Object(x.jsx)(I,{}):Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)("div",{className:"BadgeNew_hero",children:Object(x.jsx)("img",{className:"BadgeNew_hero-image img-fluid",src:P,alt:"Logo"})}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-6",children:Object(x.jsx)(D,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://s.gravatar.com/avatar/1f895306b4331da3cc6913120f2ed123?s=80"})}),Object(x.jsx)("div",{className:"col-6",children:Object(x.jsx)(F,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error,title:"New Attendant"})})]})})]})}}]),a}(s.a.Component)),R=a.p+"static/media/logo.ed14bd33.svg",U=(a(103),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Navbar",children:Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)(o.b,{className:"Navbar_brand",to:"/",children:[Object(x.jsx)("img",{className:"Navbar_brand-logo",src:R,alt:"Logo"}),Object(x.jsx)("span",{className:"font-weight-light",children:"Platzi"}),Object(x.jsx)("span",{className:"font-weight-bold",children:"Conf"})]})})})}}]),a}(s.a.Component));var V=function(e){return Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)(U,{}),Object(x.jsx)("div",{children:e.children})]})};var z=function(){return Object(x.jsx)("h1",{children:"404: Not Found"})},W=(a(104),a.p+"static/media/astronauts.fc4d80a5.svg"),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Home",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"Home__col col-12 col-md-4",children:[Object(x.jsx)("img",{src:P,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),Object(x.jsx)("h1",{children:"Badge_old Management System"}),Object(x.jsx)(o.b,{className:"btn btn-primary",to:"/badges",children:"Start"}),Object(x.jsx)(o.b,{className:"btn btn-secondary",to:"/api",children:"Api"}),Object(x.jsx)(o.b,{className:"btn btn-secondary",to:"/monsters",children:"Monsters"})]}),Object(x.jsx)("div",{className:"Home__col d-none d-md-block col-md-8",children:Object(x.jsx)("img",{src:W,alt:"Astronauts",className:"img-fluid p-4"})})]})})})}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={nextPage:1,loading:!0,error:null,data:{}},e.fetchCharacters=Object(j.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,fetch("https://rickandmortyapi.com/api/character?page=".concat(e.state.nextPage));case 4:return a=t.sent,console.log("response",a),t.next=8,a.json();case 8:n=t.sent,console.log("data",n),e.setState({loading:!1,error:null,data:{info:n.info,results:[].concat(e.state.data.results,n.results)},nextPage:e.state.nextPage+1}),console.log("this.state.data",e.state.data),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 17:case"end":return t.stop()}}),t,null,[[1,14]])}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchCharacters()}},{key:"render",value:function(){return this.state.error?Object(x.jsx)("h1",{children:"Error al cargar los datos"}):Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)("p",{children:"api va el api"}),Object(x.jsx)("ul",{})]})}}]),a}(s.a.Component),G=(a(105),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.fetchData=function(){var t=Object(j.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,T.badges.read(e.props.match.params.badgeId);case 4:n=t.sent,e.setState({loading:!1,form:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState({form:Object(A.a)(Object(A.a)({},e.state.form),{},Object(L.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(j.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("In handleSubmit"),a.preventDefault(),e.setState({loading:!0,error:null}),t.prev=3,console.log("state: ",e.state),t.next=7,T.badges.update(e.props.match.params.badgeId,e.state.form);case 7:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),e.setState({loading:!1,error:t.t0});case 14:console.log("state: ",e.props.formValues);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return!0===this.state.loading?Object(x.jsx)(I,{}):Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)("div",{className:"BadgeEdit_hero",children:Object(x.jsx)("img",{className:"BadgeEdit_hero-image img-fluid",src:P,alt:"Logo"})}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-6",children:Object(x.jsx)(D,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://s.gravatar.com/avatar/1f895306b4331da3cc6913120f2ed123?s=80"})}),Object(x.jsx)("div",{className:"col-6",children:Object(x.jsx)(F,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error,title:"Edit Attendant"})})]})})]})}}]),a}(s.a.Component));a(106),a(107);var K=function(e){return e.isOpen?c.a.createPortal(Object(x.jsx)("div",{className:"Modal",children:Object(x.jsxs)("div",{className:"Modal_container",children:[Object(x.jsx)("button",{onClick:e.onClose,className:"Modal_close-button",children:"x"}),e.children]})}),document.getElementById("modal")):null};var Q=function(e){return Object(x.jsx)(K,{isOpen:e.isOpen,onClose:e.onClose,children:Object(x.jsxs)("div",{className:"DeleteBadgeModal",children:[Object(x.jsx)("h1",{children:"Estas seguro?"}),Object(x.jsx)("p",{children:"Estas a punto de eliminar este registro"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-4",children:"Aceptar"}),Object(x.jsx)("button",{onClick:e.onClose,className:"btn btn-primary",children:"Cancelar"})]})]})})};var X=function(e){var t=function(e){var t=s.a.useState(0),a=Object(p.a)(t,2),n=a[0],r=a[1];return n>e&&r(0),[n,r]}(5),a=Object(p.a)(t,2),n=a[0],r=a[1],c=e.badge;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"BadgeDetails_hero",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-6",children:Object(x.jsx)("img",{src:P,alt:"Logo de la conferencia"})}),Object(x.jsx)("div",{className:"col-6 BadgeDetails_hero-attendant-name",children:Object(x.jsxs)("h1",{children:[c.firstName," ",c.lastName]})})]})})}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col",children:Object(x.jsx)(D,{firstName:c.firstName||"FIRST_NAME",lastName:c.lastName||"LAST_NAME",jobTitle:c.jobTitle||"JOB_TITLE",email:c.email||"EMAIL"})}),Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)("h2",{children:"Actions"}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("button",{onClick:function(){r(n+1)},className:"btn btn-primary mr-4",children:[" ","Increse Count ",n]}),Object(x.jsx)(o.b,{className:"btn btn-primary mb-4",to:"/badges/".concat(c.id,"/edit"),children:"Editar"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:e.onOpenModal,className:"btn btn-danger",children:"Eliminar"}),Object(x.jsx)(Q,{isOpen:e.modalIsOpen,onClose:e.onCloseModal,onDeleteBadge:e.onDeleteBadge,children:"Lorem Upsum"})]})]})]})]})})]})},Y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,data:void 0,modalIsOpen:!1},e.fetchData=Object(j.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,console.log(e.props.match.params.badgeId),t.next=5,T.badges.read(e.props.match.params.badgeId);case 5:a=t.sent,e.setState({loading:!1,data:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),e.handleOpenModal=function(t){e.setState({modalIsOpen:!0})},e.handleCloseModal=function(t){e.setState({modalIsOpen:!1})},e.onDeleteBadge=function(){var t=Object(j.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,T.badges.remove(e.props.match.params.badgeId);case 4:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return console.log(this.state),this.state.loading?Object(x.jsx)(I,{}):this.state.error?Object(x.jsx)(M,{error:this.state.error}):Object(x.jsx)(X,{badge:this.state.data,modalIsOpen:this.state.modalIsOpen,onCloseModal:this.handleCloseModal,onOpenModal:this.handleOpenModal,onDeleteBadge:this.onDeleteBadge})}}]),a}(s.a.Component),Z=a(153),$=a(154),ee=a(156),te=a(117),ae=a(157),ne=a(158),se=a(160),re=a(155),ce=a(69),oe=a.n(ce),ie=a(70),le=a.n(ie),de=a(71),je=a.n(de),be=(a(108),a(159)),he=a(151),me=a(152);a(109);function ue(e){var t=e.placeholder,a=e.handleChange;return Object(x.jsx)("div",{children:Object(x.jsx)(be.a,{onChange:a,id:"standard-basic",label:t,type:"search",fullWidth:!0,InputProps:{endAdornment:Object(x.jsx)(he.a,{position:"end",children:Object(x.jsx)(me.a,{})})}})})}var pe=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(b.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return console.log("FILTER: ",n),console.log("STATE: ",this.state),Object(x.jsxs)(Z.a,{children:[Object(x.jsx)("h1",{className:"text-title",children:"MONSTER API"}),Object(x.jsx)(ue,{placeholder:"Search by names",handleChange:this.handleChange}),Object(x.jsx)($.a,{container:!0,spacing:2,children:n.map((function(e){return Object(x.jsx)($.a,{item:!0,xs:12,sm:4,md:3,lg:3,children:Object(x.jsxs)(re.a,{className:"card-container",children:[Object(x.jsxs)(ee.a,{children:[Object(x.jsx)(te.a,{noWrap:!0,gutterBottom:!0,variant:"h5",color:"primary",children:e.name}),Object(x.jsx)(ae.a,{title:"monster",children:Object(x.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.id,"?set=set2&size=100x100")})}),Object(x.jsx)(te.a,{noWrap:!0,variant:"body1",color:"textPrimary",component:"p",children:e.email}),Object(x.jsx)(te.a,{variant:"body2",color:"textSecondary",component:"p",children:"Alguna otra descripci\xf3n o texto largo para ver como queda"})]}),Object(x.jsxs)(ne.a,{disableSpacing:!0,children:[Object(x.jsx)(se.a,{"aria-label":"add to favorites",color:"primary",children:Object(x.jsx)(oe.a,{})}),Object(x.jsx)(se.a,{"aria-label":"share",color:"secondary",children:Object(x.jsx)(le.a,{})}),Object(x.jsx)(se.a,{"aria-label":"show more",children:Object(x.jsx)(je.a,{})})]})]})},e.id)}))})]})}}]),a}(n.Component);var Oe=function(){return Object(x.jsx)(o.a,{children:Object(x.jsx)(V,{children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",component:H}),Object(x.jsx)(i.a,{exact:!0,path:"/badges",component:E}),Object(x.jsx)(i.a,{exact:!0,path:"/badges/new",component:J}),Object(x.jsx)(i.a,{exact:!0,path:"/badges/:badgeId",component:Y}),Object(x.jsx)(i.a,{exact:!0,path:"/badges/:badgeId/edit",component:G}),Object(x.jsx)(i.a,{exact:!0,path:"/api",component:q}),Object(x.jsx)(i.a,{exact:!0,path:"/monsters",component:pe}),Object(x.jsx)(i.a,{component:z})]})})})},ge=(a(112),a(113),"Hola, soy ".concat("Wladdy L\xf3pez"),document.getElementById("app"));c.a.render(Object(x.jsx)(Oe,{}),ge)},85:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.a657118d.chunk.js.map