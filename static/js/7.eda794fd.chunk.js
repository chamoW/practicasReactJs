(this["webpackJsonppractivas-react-client"]=this["webpackJsonppractivas-react-client"]||[]).push([[7],{448:function(e,t,a){"use strict";a(0),a(449);var s=a(2);t.a=function(e){return Object(s.jsx)("div",{className:"PageError",children:e.error.message})}},449:function(e,t,a){},450:function(e,t,a){"use strict";var s=a(12),n=a(7),c=a(26),r=a(29),i=a(0),l=a.n(i),o=(a(451),a(455)),d=a(454),j=a(2),b=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Badge",children:[Object(j.jsx)("div",{className:"Badge_header",children:Object(j.jsx)("img",{src:o.a,alt:"Logo Conferencia"})}),Object(j.jsxs)("div",{className:"Badge_section-name",children:[Object(j.jsx)(d.a,{className:"Badge_avatar",email:this.props.email}),Object(j.jsxs)("h1",{children:[this.props.firstName," ",Object(j.jsx)("br",{})," ",this.props.lastName]})]}),Object(j.jsxs)("div",{className:"Badge_section-info",children:[Object(j.jsxs)("h3",{children:[" ",this.props.jobTitle]}),Object(j.jsxs)("div",{children:[" ",this.props.email]})]}),Object(j.jsx)("div",{className:"Badge_footer",children:"pruebita"})]})}}]),a}(l.a.Component);t.a=b},451:function(e,t,a){},452:function(e,t,a){"use strict";t.a=a.p+"static/media/platziconf-logo.c1d00c3e.svg"},491:function(e,t,a){},492:function(e,t,a){},562:function(e,t,a){"use strict";a.r(t);var s=a(21),n=a(95),c=a(12),r=a(7),i=a(26),l=a(29),o=a(0),d=a.n(o),j=a(445),b=a(447),h=a(448),u=a(9),O=a(450),m=a(452),p=(a(491),a(86)),v=a(23),x=a.n(v),g=(a(492),a(2));var f=function(e){return e.isOpen?x.a.createPortal(Object(g.jsx)("div",{className:"Modal",children:Object(g.jsxs)("div",{className:"Modal_container",children:[Object(g.jsx)("button",{onClick:e.onClose,className:"Modal_close-button",children:"x"}),e.children]})}),document.getElementById("modal")):null};var N=function(e){return Object(g.jsx)(f,{isOpen:e.isOpen,onClose:e.onClose,children:Object(g.jsxs)("div",{className:"DeleteBadgeModal",children:[Object(g.jsx)("h1",{children:"Estas seguro?"}),Object(g.jsx)("p",{children:"Estas a punto de eliminar este registro"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-4",children:"Aceptar"}),Object(g.jsx)("button",{onClick:e.onClose,className:"btn btn-primary",children:"Cancelar"})]})]})})};var C=function(e){var t=function(e){var t=d.a.useState(0),a=Object(u.a)(t,2),s=a[0],n=a[1];return s>e&&n(0),[s,n]}(5),a=Object(u.a)(t,2),s=a[0],n=a[1],c=e.badge;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"BadgeDetails_hero",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-6",children:Object(g.jsx)("img",{src:m.a,alt:"Logo de la conferencia"})}),Object(g.jsx)("div",{className:"col-6 BadgeDetails_hero-attendant-name",children:Object(g.jsxs)("h1",{children:[c.firstName," ",c.lastName]})})]})})}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col",children:Object(g.jsx)(O.a,{firstName:c.firstName||"FIRST_NAME",lastName:c.lastName||"LAST_NAME",jobTitle:c.jobTitle||"JOB_TITLE",email:c.email||"EMAIL"})}),Object(g.jsxs)("div",{className:"col",children:[Object(g.jsx)("h2",{children:"Actions"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)("button",{onClick:function(){n(s+1)},className:"btn btn-primary mr-4",children:[" ","Increse Count ",s]}),Object(g.jsx)(p.b,{className:"btn btn-primary mb-4",to:"/badges/".concat(c.id,"/edit"),children:"Editar"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:e.onOpenModal,className:"btn btn-danger",children:"Eliminar"}),Object(g.jsx)(N,{isOpen:e.modalIsOpen,onClose:e.onCloseModal,onDeleteBadge:e.onDeleteBadge,children:"Lorem Upsum"})]})]})]})]})})]})},B=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={loading:!0,error:null,data:void 0,modalIsOpen:!1},e.fetchData=Object(n.a)(Object(s.a)().mark((function t(){var a;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,console.log(e.props.match.params.badgeId),t.next=5,j.a.badges.read(e.props.match.params.badgeId);case 5:a=t.sent,e.setState({loading:!1,data:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),e.handleOpenModal=function(t){e.setState({modalIsOpen:!0})},e.handleCloseModal=function(t){e.setState({modalIsOpen:!1})},e.onDeleteBadge=function(){var t=Object(n.a)(Object(s.a)().mark((function t(a){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,j.a.badges.remove(e.props.match.params.badgeId);case 4:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return console.log(this.state),this.state.loading?Object(g.jsx)(b.a,{}):this.state.error?Object(g.jsx)(h.a,{error:this.state.error}):Object(g.jsx)(C,{badge:this.state.data,modalIsOpen:this.state.modalIsOpen,onCloseModal:this.handleCloseModal,onOpenModal:this.handleOpenModal,onDeleteBadge:this.onDeleteBadge})}}]),a}(d.a.Component);t.default=B}}]);