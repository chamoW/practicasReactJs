(this["webpackJsonppractivas-react-client"]=this["webpackJsonppractivas-react-client"]||[]).push([[2],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));n(21),n(95);var a=n(84),r=(n(203),a.a.initializeApp({apiKey:"AIzaSyAQdPj0hCSZLH8_GRx59dY0tR10caGkrYM",authDomain:"diamoncode-store.firebaseapp.com",projectId:"diamoncode-store",storageBucket:"diamoncode-store.appspot.com",messagingSenderId:"1014714367057",appId:"1:1014714367057:web:1b3d4c5e55e28ad3f54c70"},"secondary").firestore());console.log("firestoreStoreApp: ",r);var c=function(e){var t=e.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routerName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}}));return console.log("transformedCollection: ",t),t.reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return j}));var a=n(21),r=n(4),c=n(95),i=n(84);n(203),n(387);i.a.initializeApp({apiKey:"AIzaSyBtnGTY3K0awRsuq4-o3f7ODVYBcc8wpEM",authDomain:"diamond-soft-auth-db.firebaseapp.com",projectId:"diamond-soft-auth-db",storageBucket:"diamond-soft-auth-db.appspot.com",messagingSenderId:"33600603767",appId:"1:33600603767:web:a0a5ed7cb1be2c9ced2872"});var o=i.a.firestore(),s=i.a.auth();s.languageCode="es";var l=new i.a.auth.GoogleAuthProvider;l.setCustomParameters({prompt:"select_account"});var u=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return n=o.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(c=e.sent,console.log("USERHOT: ",c.id),console.log("USERHOT: ",c.data()),!c.exists){e.next=10;break}return e.abrupt("return",Object(r.a)({id:c.id},c.data()));case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t,n){var r,c,i,s,l,u,d;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=o.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=23;break}return console.log("CREANDO USUARIO: ",t),c=new Date,i=t.name,s=t.email,l=t.phoneNumber,u=t.photoURL,d={name:i,email:s,phoneNumber:l,photoURL:u,createdAt:c},n&&(console.log("ADITIONAL DATA:",n),console.log("ADITIONAL DATA:",n.fullname),d.name=n.fullname),e.prev=12,console.log("DATA FOR SAVE: ",d),e.next=16,r.set(d);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(12),console.log("error creating users: ",e.t0.message);case 21:e.next=24;break;case 23:console.log("USUARIO YA EXISTE EN BDD");case 24:return e.abrupt("return",r);case 25:case"end":return e.stop()}}),e,null,[[12,18]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(Object(a.a)().mark((function e(){var t,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.signInWithPopup(l);case 3:return t=e.sent,n=t.user,e.next=7,d(n);case 7:return r=e.sent,console.log("USUARIO LOGUEADO: ",r),e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(0),console.log("ERROR en loguin con google: ",e.t0),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),j=function(){return new Promise((function(e,t){var n=s.onAuthStateChanged((function(t){n(),e(t)}),t)}))};i.a},120:function(e,t,n){},171:function(e,t,n){},220:function(e){e.exports=JSON.parse('{"main.menu.rm":"API de Ricky y Morti","main.menu.monsters":"API de monstruos","main.menu.shop":"Ejemplo de shop","main.menu.react":"Validaciiones con React","main.menu.formik":"Validaciones con Formik","main.menu.formikYup":"Validaciones con Formik y YUP","main.menu.formikYupHCO":"Validations con Formik y YUP - HCO","main.menu.geolocation":"Geolocatizaci\xf3n"}')},221:function(e){e.exports=JSON.parse('{"main.menu.rm":"Ricky & Morti API","main.menu.monsters":"Monster API","main.menu.shop":"SHOP APP","main.menu.react":"Validations with React","main.menu.formik":"Validations with Formik","main.menu.formikYup":"Validations with Formik and YUP","main.menu.formikYupHCO":"Validations with Formik and YUP - HCO","main.menu.geolocation":"Geolocation"}')},237:function(e,t,n){},338:function(e,t,n){},348:function(e,t,n){},365:function(e,t,n){},37:function(e,t,n){"use strict";var a,r,c,i,o,s,l=n(4),u=n(5),d=(n(0),n(237),n(56)),b=n(425),j=n(57),m=Object(j.b)(a||(a=Object(d.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid silver;\n"]))),p=Object(j.b)(r||(r=Object(d.a)(["\n  background-color: #4285f4;\n  color: white;\n  border: none;\n\n  &:hover {\n    ","\n  }\n"])),m),h=Object(j.b)(c||(c=Object(d.a)(["\n  min-width: 70px;\n  background-color: white;\n  border: 1px solid silver;\n  padding: 0;\n  &:hover {\n    background-color: silver;\n    border: none;\n  }\n"]))),O=Object(j.b)(i||(i=Object(d.a)(["\n  ","\n\n  &:hover {\n    background-color: #4285f4;\n    color: white;\n    border: none;\n  }\n"])),m),f=Object(j.b)(o||(o=Object(d.a)(["\n  cursor: not-allowed;\n"]))),g=Object(j.c)(b.a)(s||(s=Object(d.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  //line-height: 5px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  border-radius: 4px;\n  justify-content: center;\n  ',"\n  ","\n"])),(function(e){return console.log("props in styled ",e),e.isSocial?h:e.inverted?O:p}),(function(e){return e.disabled&&f})),x=n(2),v=["children"];t.a=function(e){var t=e.children,n=Object(u.a)(e,v);return console.log("otherProps ",n),Object(x.jsx)(g,Object(l.a)(Object(l.a)({},n),{},{children:t}))}},389:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n(23),o=n.n(i),s=n(33),l=n(56),u=n(57),d=Object(u.a)(a||(a=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');\n@import url('https://fonts.googleapis.com/css?family=Anton');\n\n* {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  body {\n    font-family: 'Lato', 'Helvetica Neue', sans-serif;\n    background-color: #F4F4F7;\n    //padding: 20px 40px;\n\n    @media screen and (max-width:800px){\n        //some css\n        padding: 10px;\n    }\n  }\n  \n  h1 {\n    font-family: 'Anton', sans-serif;\n  }\n  \n  a.link-unstyled {\n    color: inherit;\n  }\n  \n  a.link-unstyled:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n  \n\n\n"]))),b=n(390),j=n(71),m=n(72),p=n(73),h=n(37),O=n(97),f=(n(120),n(54)),g=u.c.div(r||(r=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .title {\n    margin: 0;\n  }\n\n  .content {\n    padding-top: 30px;\n  }\n\n  .buttons {\n    padding-top: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n\n  .buttons-sn {\n    padding-top: 10px;\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),x=n(2);var v=function(){return Object(x.jsxs)(g,{children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h2",{children:"Validaciones con Formik"}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:"Ingresa con tu email y clave"})})})]}),Object(x.jsx)(f.c,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(t.email="Invalid email format"):t.email="Cannot be blank",e.password?e.password.length<4&&(t.password="Password must be more than 4 characters"):t.password="Cannot be blank",console.log("ERRORES: ",t),t},onSubmit:function(e){console.log("in submit ...".concat(JSON.stringify(e)))},children:function(e){var t=e.values,n=e.handleChange,a=e.handleSubmit,r=e.errors,c=e.touched,i=e.handleBlur,o=e.isValid,s=e.dirty;return Object(x.jsxs)("form",{className:"sign-in",onSubmit:a,children:[Object(x.jsxs)(b.a,{container:!0,spacing:2,children:[Object(x.jsx)(O.a,{name:"email",value:t.email,required:!0,handleChange:n,onBlur:i,label:"Email",error:!(!r.email||!c.email),helperText:r.email&&c.email?r.email:""}),Object(x.jsx)(O.a,{name:"password",value:t.password,required:!0,handleChange:n,onBlur:i,label:"Password",error:!(!r.password||!c.password),helperText:r.password&&c.password?r.password:""})]}),Object(x.jsx)("div",{className:"buttons",children:Object(x.jsx)(h.a,{type:"submit",className:s&&o?"":"disabled-btn",disabled:!(s&&o),children:"Ingresar"})}),Object(x.jsx)("div",{className:"text-divider",children:"o"}),Object(x.jsxs)("div",{className:"buttons-sn",children:[Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:s&&o?"":"disabled-btn",disabled:!(s&&o),children:Object(x.jsx)("img",{src:m.a,style:{width:32},alt:"Login con Google"})}),Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:s&&o?"":"disabled-btn",disabled:!(s&&o),children:Object(x.jsx)("img",{src:j.a,style:{width:32},alt:"Login con Facebook"})}),Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:s&&o?"":"disabled-btn",disabled:!(s&&o),children:Object(x.jsx)("img",{src:p.a,style:{width:32},alt:"Login con Twitter"})})]})]})}})]})},y=n(17),w=n(4),k=n(9);var S=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),i=Object(k.a)(r,2),o=i[0],s=i[1],l=Object(c.useState)(!1),u=Object(k.a)(l,2),d=u[0],f=u[1],v=function(e){var t=e.target,r=t.value,c=t.name;a(Object(w.a)(Object(w.a)({},n),{},Object(y.a)({},c,r)))},S=function(e){var t={};return e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(t.email="Invalid email format"):t.email="Cannot be blank",e.password?e.password.length<4&&(t.password="Password must be more than 4 characters"):t.password="Cannot be blank",console.log("ERRORES: ",t),t},C=n.email,E=n.password;return Object(c.useEffect)((function(){0===Object.keys(o).length&&d&&console.log("signInWith google ...".concat(JSON.stringify(n)))}),[o,d,n]),Object(x.jsxs)(g,{children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h2",{children:"Validaciones con React"}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:"Ingresa con tu email y clave"})})})]}),Object(x.jsxs)("form",{className:"sign-in",onSubmit:function(e){e.preventDefault(),console.log("in submit ...".concat(JSON.stringify(n))),s(S(n)),f(!0)},noValidate:!0,children:[0===Object.keys(o).length&&d&&Object(x.jsx)("p",{children:Object(x.jsx)("span",{className:"success-msg",children:"Form submitted successfully"})}),Object(x.jsxs)(b.a,{container:!0,spacing:2,children:[Object(x.jsx)(O.a,{name:"email",value:C,required:!0,handleChange:v,label:"Email",error:void 0!==o.email,helperText:""===o.email?"":o.email}),Object(x.jsx)(O.a,{name:"password",value:E,required:!0,handleChange:v,label:"Password",error:void 0!==o.password,helperText:""===o.password?"":o.password})]}),Object(x.jsx)("div",{className:"buttons",children:Object(x.jsx)(h.a,{type:"submit",children:"Ingresar"})}),Object(x.jsx)("div",{className:"text-divider",children:"o"}),Object(x.jsxs)("div",{className:"buttons-sn",children:[Object(x.jsx)(h.a,{type:"submit",isSocial:!0,children:Object(x.jsx)("img",{src:m.a,style:{width:32},alt:"Login con Google"})}),Object(x.jsx)(h.a,{type:"submit",isSocial:!0,children:Object(x.jsx)("img",{src:j.a,style:{width:32},alt:"Login con Facebook"})}),Object(x.jsx)(h.a,{type:"submit",isSocial:!0,children:Object(x.jsx)("img",{src:p.a,style:{width:32},alt:"Login con Twitter"})})]})]})]})},C=n.p+"static/media/notFound.84f2ce20.jpg";var E=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:C,style:{height:500,width:500},alt:"P\xe1gina no encontrada"})})},A=n(85),N=n(5),R=(n(171),n(391)),I=["handleChange","field","form"],U=function(e){var t=e.handleChange,n=e.field,a=e.form,r=(a.touched,a.errors),c=Object(N.a)(e,I);return Object(x.jsx)(b.a,{item:!0,xs:12,sm:12,children:Object(x.jsx)(R.a,Object(w.a)({variant:"outlined",required:!0,fullWidth:!0,autoFocus:!0,InputLabelProps:{shrink:!0},onChange:t,error:!!r[n.name],helperText:r[n.name]?r[n.name]:""},c))})};var P=function(){var e=function(e){console.log("in submit ...".concat(JSON.stringify(e)))},t=A.a().shape({email:A.b().email().required("Email is required"),password:A.b().required("Password is required").min(4,"Password is too short - should be 4 chars minimum").max(6,"Password is too large - should be 6 chars maximun")});return Object(x.jsxs)(g,{children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h2",{children:"Validaciones con Formik and YUP"}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:"Ingresa con tu email y clave"})})})]}),Object(x.jsx)(f.c,{initialValues:{email:"",password:""},validationSchema:t,onSubmit:e,children:function(t){var n=t.handleChange,a=t.errors,r=t.isValid,c=t.dirty;return console.log("ERRORES: "+JSON.stringify(a)),Object(x.jsxs)(f.b,{className:"sign-in",onSubmit:e,children:[Object(x.jsxs)(b.a,{container:!0,spacing:2,children:[Object(x.jsx)(f.a,{id:"email",name:"email",type:"email",label:"Email",component:U,handleChange:n}),Object(x.jsx)(f.a,{id:"password",name:"password",type:"password",label:"Password",component:U,handleChange:n})]}),Object(x.jsx)("div",{className:"buttons",children:Object(x.jsx)(h.a,{type:"submit",className:c&&r?"":"disabled-btn",disabled:!(c&&r),children:"Ingresar"})}),Object(x.jsx)("div",{className:"text-divider",children:"o"}),Object(x.jsxs)("div",{className:"buttons-sn",children:[Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:c&&r?"":"disabled-btn",disabled:!(c&&r),children:Object(x.jsx)("img",{src:m.a,style:{width:32},alt:"Login con Google"})}),Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:c&&r?"":"disabled-btn",disabled:!(c&&r),children:Object(x.jsx)("img",{src:j.a,style:{width:32},alt:"Login con Facebook"})}),Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:c&&r?"":"disabled-btn",disabled:!(c&&r),children:Object(x.jsx)("img",{src:p.a,style:{width:32},alt:"Login con Twitter"})})]})]})}})]})},T=n(12),L=n(7),D=n(26),_=n(29),F=function(e){Object(D.a)(n,e);var t=Object(_.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.isValid,a=e.dirty;return Object(x.jsxs)(g,{children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h2",{children:"Validaciones con Formik and YUP -- HCO "}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:Object(x.jsx)("span",{children:"Ingresa con tu email y clave"})})})]}),Object(x.jsxs)(f.b,{className:"sign-in",noValidate:!0,children:[Object(x.jsxs)(b.a,{container:!0,spacing:2,children:[Object(x.jsx)(f.a,{id:"email",name:"email",type:"email",label:"Email",component:U,handleChange:t}),Object(x.jsx)(f.a,{id:"password",name:"password",type:"password",label:"Password",component:U,handleChange:t})]}),Object(x.jsx)("div",{className:"buttons",children:Object(x.jsx)(h.a,{type:"submit",isSubmitting:!0,children:"Ingresar"})}),Object(x.jsx)("div",{className:"text-divider",children:"o"}),Object(x.jsxs)("div",{className:"buttons-sn",children:[Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:a&&n?"":"disabled-btn",disabled:!(a&&n),children:Object(x.jsx)("img",{src:m.a,style:{width:32},alt:"Login con Google"})}),Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:a&&n?"":"disabled-btn",disabled:!(a&&n),children:Object(x.jsx)("img",{src:j.a,style:{width:32},alt:"Login con Facebook"})}),Object(x.jsx)(h.a,{type:"submit",isSocial:!0,className:a&&n?"":"disabled-btn",disabled:!(a&&n),children:Object(x.jsx)("img",{src:p.a,style:{width:32},alt:"Login con Twitter"})})]})]})]})}}]),n}(c.Component),G=Object(f.d)({enableReinitialize:!0,validateOnChange:!1,validateOnBlur:!1,mapPropsToValues:function(e){return{email:"",password:""}},validationSchema:function(){return A.a().shape({email:A.b().email().required("Email is required"),password:A.b().required("Password is required").min(4,"Password is too short - should be 4 chars minimum").max(6,"Password is too large - should be 6 chars maximun")})},handleSubmit:function(){console.log("SUBMITTS")}})(F),V=n(430),Y=(n(338),n(434)),z=n(435),q=n(86),M=Object(z.a)()((function(e){var t=e.t;return Object(x.jsx)(Y.a,{children:[{text:"Start",link:"/badges",class:"primary"},{text:"main.menu.rm",link:"/api",class:"primary"},{text:"main.menu.monsters",link:"/monsters",class:"primary"},{text:"main.menu.react",link:"/formReact",class:"primary"},{text:"main.menu.formik",link:"/formFormik",class:"primary"},{text:"main.menu.formikYup",link:"/formFormikYUP",class:"primary"},{text:"main.menu.formikYupHCO",link:"/formFormikYUPHCO",class:"primary"},{text:"main.menu.geolocation",link:"/geolocation",class:"primary"},{text:"main.menu.shop",link:"/shop",class:"success"}].map((function(e){return[Object(x.jsx)(q.b,{to:e.link,children:Object(x.jsx)(Y.a.Item,{action:!0,href:e.link,variant:e.class,children:t(e.text)})},e.text)]}))})})),H=n(432),B=(n(348),n(116)),W=n(107),K=function(e){Object(D.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){console.log(t),e.setState({value:t}),B.a.changeLanguage(t)},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsx)(c.Fragment,{children:Object(x.jsxs)(W.a,{children:[Object(x.jsx)(W.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Idioma"}),Object(x.jsxs)(W.a.Menu,{children:[Object(x.jsx)(W.a.Item,{as:"button",onClick:function(t){return e.handleChange("es")},children:"Espa\xf1ol"}),Object(x.jsx)(W.a.Item,{as:"button",onClick:function(t){return e.handleChange("en")},children:"Ingles"})]})]})})}}]),n}(c.Component),J=K;var Q=function(){return Object(x.jsxs)(H.a,{className:"Navbar navbar-dark bg-dark",expand:"none",children:[Object(x.jsx)(q.b,{className:"Navbar_brand",to:"/",children:Object(x.jsx)(H.a.Brand,{href:"#home",children:Object(x.jsx)("img",{className:"Navbar_brand-logo",src:"https://robohash.org/chamow1?size=50x50",alt:"Logo"})})}),Object(x.jsx)("div",{children:Object(x.jsx)(J,{})}),Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)(H.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"mr-2 d-md-none"}),Object(x.jsx)(H.a.Collapse,{id:"basic-navbar-nav",className:"d-md-none",children:Object(x.jsx)(M,{})})]})]})};var $=function(e){return Object(x.jsxs)("article",{children:[Object(x.jsx)("header",{children:Object(x.jsx)(Q,{})}),Object(x.jsxs)("main",{children:[Object(x.jsx)("section",{className:"d-none d-md-block",children:Object(x.jsx)(M,{})}),Object(x.jsx)(V.a,{fluid:!0,children:e.children})]}),Object(x.jsx)("footer",{children:"Diamoncode  - 2022 -"})]})},X=n(93),Z="GEOLOCATION_START",ee="GEOLOCATION_SUCCESS",te="GEOLOCATION_FAIL",ne=function(){return{type:Z}},ae=function(e,t,n){return{type:ee,locationFound:e,geoData:t,isUnknow:n}},re=function(){return{type:te}},ce={locationFound:{},geoData:{},isUnknow:!0,fetching:!1},ie=function(e){return e.geolocation.geoData},oe=function(e){return e.geolocation.fetching},se=function(e){return e.geolocation.locationFound},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(w.a)(Object(w.a)({},e),{},{fetching:!0});case ee:return Object(w.a)(Object(w.a)({},e),{},{locationFound:t.locationFound,geoData:t.geoData,isUnknow:t.isUnknow,fetching:!1});case te:return{state:ce,fetching:!1};default:return e}},ue=n(144),de=function(e){Object(D.a)(n,e);var t=Object(_.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.google,e.positions);return Object(x.jsx)(ue.Map,{google:this.props.google,style:{position:"relative",width:"100%",height:"62vh"},initialCenter:{lat:t.lat,lng:t.lng},keyboardShortcuts:!1,mapTypeControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,zoom:15,centerAroundCurrentLocation:!0,className:"googleMap",children:Object(x.jsx)(ue.Marker,{onClick:this.onMarkerClick,name:"Current location"})})}}]),n}(c.Component);de.defaultProps={positions:null};var be=Object(X.b)((function(){return{customMapsApi:"AIzaSyBnbiwbCt31E-BsYd9jsmzwPsKTQl_ApCs"}}))(Object(ue.GoogleApiWrapper)((function(e){return{apiKey:e.customMapsApi}}))(de)),je=n(431),me=function(e){Object(D.a)(n,e);var t=Object(_.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(L.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(ne())}},{key:"render",value:function(){var e=this.props,t=e.fetching,n=e.geoData,a=e.location;return Object(x.jsxs)(c.Fragment,{children:[t&&Object(x.jsx)("div",{children:"LOADING ..."}),!t&&Object(x.jsxs)("div",{children:[Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Ciudad: ",n.city]}),Object(x.jsxs)("li",{children:["Pais: ",n.country]}),Object(x.jsxs)("li",{children:["Latitud: ",a.lat]}),Object(x.jsxs)("li",{children:["Longitud: ",a.lng]})]}),Object(x.jsx)(je.a,{sm:12,md:12,lg:12,xl:12,className:"col",children:Object(x.jsx)(be,{google:window.google,positions:a})})]})]})}}]),n}(c.Component),pe=Object(X.b)((function(e){return{fetching:oe(e),geoData:ie(e),location:se(e)}}))(me),he=Object(c.lazy)((function(){return n.e(15).then(n.bind(null,540))})),Oe=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,566))})),fe=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,541))})),ge=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,562))})),xe=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,542))})),ve=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(12),n.e(8)]).then(n.bind(null,543))})),ye=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(6),n.e(14)]).then(n.bind(null,564))})),we=Object(c.lazy)((function(){return Promise.all([n.e(13),n.e(5)]).then(n.bind(null,558))}));var ke=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(d,{}),Object(x.jsx)($,{children:Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)("div",{children:"..Loading"}),children:Object(x.jsxs)(s.d,{children:[Object(x.jsx)(s.b,{exact:!0,path:"/",component:he}),Object(x.jsx)(s.b,{path:"/badges",component:Oe}),Object(x.jsx)(s.b,{path:"/badges/new",component:fe}),Object(x.jsx)(s.b,{path:"/badges/:badgeId",component:ge}),Object(x.jsx)(s.b,{path:"/badges/:badgeId/edit",component:xe}),Object(x.jsx)(s.b,{path:"/api",component:ve}),Object(x.jsx)(s.b,{path:"/monsters",component:ye}),Object(x.jsx)(s.b,{path:"/shop",component:we}),Object(x.jsx)(s.b,{path:"/formReact",component:S}),Object(x.jsx)(s.b,{path:"/formFormik",component:v}),Object(x.jsx)(s.b,{path:"/formFormikYUP",component:P}),Object(x.jsx)(s.b,{path:"/geolocation",component:pe}),Object(x.jsx)(s.b,{path:"/formFormikYUPHCO",component:G}),Object(x.jsx)(s.b,{path:"*",component:E})]})})})]})},Se=(n(365),n(217)),Ce=n(117),Ee=n(218),Ae=n(219),Ne=n(220),Re={en:{translation:n(221)},es:{translation:Ne}};B.a.use(Ee.a).use(Ae.a).use(Ce.e).init({resources:Re,fallbackLng:["es"],detection:{checkWhitelist:!0},debug:!1,whitelist:["es","en"],interpolation:{escapeValue:!1}});B.a;var Ie=n(58),Ue=(n(366),n(143)),Pe=n(223),Te=n(51),Le={currentUser:null},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te.b:return Object(w.a)(Object(w.a)({},e),{},{currentUser:t.payload});case Te.d:return Object(w.a)(Object(w.a)({},e),{},{currentUser:null});default:return e}},_e=n(18),Fe=n(70),Ge=function(e,t){return console.log("cartItems",e),e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(w.a)(Object(w.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(_e.a)(e),[Object(w.a)(Object(w.a)({},t),{},{quantity:1})])},Ve=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(w.a)(Object(w.a)({},e),{},{quantity:e.quantity-1}):e}))},Ye={hidden:!0,cartItems:[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe.e:return Object(w.a)(Object(w.a)({},e),{},{hidden:!e.hidden});case Fe.a:return Object(w.a)(Object(w.a)({},e),{},{cartItems:Ge(Object(_e.a)(e.cartItems),t.payload)});case Fe.c:return Object(w.a)(Object(w.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case Fe.d:return Object(w.a)(Object(w.a)({},e),{},{cartItems:Ve(Object(_e.a)(e.cartItems),t.payload)});case Fe.b:return Object(w.a)(Object(w.a)({},e),{},{cartItems:[]});default:return e}},qe=n(222),Me=n.n(qe),He={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"store/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"store/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"store/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"store/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"store/mens"}]},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;return t.type,e},We=n(82),Ke={collections:null,isFetching:!1,errorMessage:void 0},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case We.b:return Object(w.a)(Object(w.a)({},e),{},{isFetching:!0});case We.c:return Object(w.a)(Object(w.a)({},e),{},{isFetching:!1,collections:t.payload});case We.a:return Object(w.a)(Object(w.a)({},e),{},{collections:null,isFetching:!1,errorMessage:t.payload});default:return e}},Qe={key:"root-key",storage:Me.a,whitelist:["cart"]},$e=Object(Ie.b)({user:De,cart:ze,directory:Be,shop:Je,geolocation:le}),Xe=Object(Ue.a)(Qe,$e),Ze=n(21),et=n(25),tt=Object(Ze.a)().mark(at),nt=[Object(et.d)(Te.d,at)];function at(){return Object(Ze.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.c)(Object(Fe.g)());case 2:case"end":return e.stop()}}),tt)}var rt=n(194),ct={error:"Error",city:"Desconocido",country:"Desconocido"},it=n.n(rt).a.create();it.defaults.timeout=1e4,it.defaults.baseURL="https://maps.googleapis.com/maps/api/geocode/json?latlng=LONGITUD,LATITUD&key=GOOLE_KEY_MAPS",it.defaults.headers.common.Accept="application/json",it.interceptors.request.use((function(e){var t=e.url.split("/"),n=e.baseURL.replace("LONGITUD",t[0]).replace("LATITUD",t[1]).replace("GOOLE_KEY_MAPS","AIzaSyBnbiwbCt31E-BsYd9jsmzwPsKTQl_ApCs");return e.url=n,e})),it.interceptors.response.use((function(e){return console.log("GEO RESPONSE ",e),200===e.status&&"OK"===e.data.status?e.data.results[0].address_components.reduce((function(e,t){return"country"===t.types[0]?Object(w.a)(Object(w.a)({},e),{},{country:t.long_name}):"locality"===t.types[0]?Object(w.a)(Object(w.a)({},e),{},{city:t.long_name}):e}),{}):(e.type=e.data.status,ct)}),(function(e){return console.log("ERROR ON GEO API ",e),ct}));var ot=function(e,t){var n=Dt.getState().geolocation,a=n.geoData,r=n.isUnknow;return console.log(a,r),r?it({url:"".concat(e,"/").concat(t),method:"GET"}):a};function st(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t,{timeout:5e3,enableHighAccuracy:!0,maximumAge:0})}))}var lt=function(){var e="-34.6180325|-58.4453073",t=e.split("|");return{lat:t[0],lng:t[1]}},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt(),t=Dt.getState().geolocation.locationFound;if(!t||0===Object.keys(t).length){var n=st().then((function(e){console.log("position ",e);var t={lat:e.coords.latitude,lng:e.coords.longitude,accuracy:e.coords.accuracy};return console.log("locationFound ",t),t})).catch((function(){return e}));return n}return t},dt=Object(Ze.a)().mark(pt),bt=Object(Ze.a)().mark(ht),jt=Object(Ze.a)().mark(Ot),mt=[Object(et.d)(Z,pt)];function pt(){var e,t;return Object(Ze.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("ENTRANDO ..."),n.next=3,Object(et.b)(ut);case 3:return e=n.sent,{latitude:e.lat,longitude:e.lng},n.next=7,Object(et.b)(ht,e.lat,e.lng);case 7:if(!(t=n.sent).error){n.next=28;break}return n.next=11,Object(et.c)(re);case 11:return n.next=13,Object(et.b)(ht,e.lat,e.lng);case 13:if(!(t=n.sent).error){n.next=24;break}return n.next=17,Object(et.c)(re);case 17:return n.next=19,Object(et.b)(ht,e.lat,e.lng);case 19:return t=n.sent,n.next=22,Object(et.b)(Ot,e,t,!0);case 22:n.next=26;break;case 24:return n.next=26,Object(et.b)(Ot,e,t,!1);case 26:n.next=30;break;case 28:return n.next=30,Object(et.b)(Ot,e,t,!1);case 30:console.log("geoData ",t);case 31:case"end":return n.stop()}}),dt)}function ht(e,t){return Object(Ze.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Calling getGeoLocation"),n.next=3,Object(et.b)(ot,e,t);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),bt)}function Ot(e,t,n){return Object(Ze.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("GEO DATA SUCCESS",t),a.next=3,Object(et.c)(ae(e,t,n));case 3:case"end":return a.stop()}}),jt)}var ft=n(106),gt=Object(Ze.a)().mark(vt),xt=[Object(et.d)(We.b,vt)];function vt(){var e,t,n;return Object(Ze.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("COLLECTION!"),a.prev=1,e=ft.b.collection("shopData"),a.next=5,e.get();case 5:return t=a.sent,a.next=8,Object(et.b)(ft.a,t);case 8:return n=a.sent,a.next=11,Object(et.c)(Object(We.e)(n));case 11:a.next=18;break;case 13:return a.prev=13,a.t0=a.catch(1),console.log("ERROR ",a.t0),a.next=18,Object(et.c)(Object(We.d)(a.t0.message));case 18:case"end":return a.stop()}}),gt,null,[[1,13]])}var yt=n(114),wt=Object(Ze.a)().mark(At),kt=Object(Ze.a)().mark(Nt),St=Object(Ze.a)().mark(Rt),Ct=Object(Ze.a)().mark(It),Et=[Object(et.d)(Te.a,At),Object(et.d)(Te.c,Nt),Object(et.d)(Te.e,Rt),Object(et.d)(Te.f,It)];function At(){return Object(Ze.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(yt.c)();case 3:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),wt,null,[[0,8]])}function Nt(){return Object(Ze.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,yt.a.signOut();case 3:return e.next=5,Object(et.c)(Object(Te.j)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,console.log("ERROR AL CERRAR LA SESSION");case 11:case"end":return e.stop()}}),kt,null,[[0,7]])}function Rt(e){var t,n,a,r,c,i;return Object(Ze.a)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("USER CREDENCIALS: ",e),o.prev=1,t=e.payload,n=t.email,a=t.password,r=t.fullname,o.next=5,yt.a.createUserWithEmailAndPassword(n,a);case 5:return c=o.sent,i=c.user,o.next=9,Object(et.c)(Object(Te.l)({user:i,additionalData:{fullname:r}}));case 9:o.next=15;break;case 11:return o.prev=11,o.t0=o.catch(1),o.next=15,console.log("ERROR EN SIGNUP: ",o.t0.message);case 15:case"end":return o.stop()}}),St,null,[[1,11]])}function It(e){var t,n,a;return Object(Ze.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("USER data: ",e),r.prev=1,t=e.payload,n=t.user,a=t.additionalData,r.next=5,Object(yt.b)(n,{additionalData:a});case 5:r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(1),r.next=11,console.log("ERROR EN SIGNUP: ",r.t0.message);case 11:case"end":return r.stop()}}),Ct,null,[[1,7]])}var Ut=Object(Ze.a)().mark(Pt);function Pt(){return Object(Ze.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([].concat(Object(_e.a)(xt),Object(_e.a)(Et),Object(_e.a)(nt),Object(_e.a)(mt)));case 2:case"end":return e.stop()}}),Ut)}var Tt=Object(Pe.a)(),Lt=[Tt];console.log=function(){},console.log("middlewares ",Lt);var Dt=Object(Ie.d)(Xe,Ie.a.apply(void 0,Lt));console.log("root sagas ",Pt),Tt.run(Pt);var _t=Object(Ue.b)(Dt),Ft=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Gt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Vt=document.getElementById("app");o.a.render(Object(x.jsx)(X.a,{store:Dt,children:Object(x.jsx)(q.a,{children:Object(x.jsx)(Se.a,{loading:null,persistor:_t,children:Object(x.jsx)(ke,{})})})}),Vt),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Ft?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Gt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Gt(t,e)}))}}()},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return m}));var a="SET_CURRENT_USER",r="CHECK_USER_SESSION",c="USER_LOGOUT_START",i="USER_LOGOUT_SUCCESS",o="USER_SIGNUP_START",s="USER_SIGNUP_SUCCESS;",l=function(e){return{type:a,payload:e}},u=function(){return{type:r}},d=function(){return{type:c}},b=function(){return{type:i}},j=function(e){return{type:o,payload:e}},m=function(e){var t=e.user,n=e.additionalData;return{type:s,payload:{user:t,additionalData:n}}}},70:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"j",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return b}));var a="TOGGLE_CART_PANEL",r="ADD_ITEM_CART",c="REMOVE_ITEM_CART",i="REMOVE_ITEM_QUANTITY",o="CLEAR_CHART",s=function(){return{type:a}},l=function(e){return{type:r,payload:e}},u=function(e){return{type:c,payload:e}},d=function(e){return{type:i,payload:e}},b=function(){return{type:o}}},71:function(e,t,n){"use strict";t.a=n.p+"static/media/facebook_icon.30cf95ed.svg"},72:function(e,t,n){"use strict";t.a=n.p+"static/media/google_icon.76392462.svg"},73:function(e,t,n){"use strict";t.a=n.p+"static/media/twitter_icon.02b92361.svg"},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return s}));n(106);var a="SHOP_DATA_START",r="SHOP_DATA_SUCCESS",c="SHOP_DATA_ERROR",i=function(){return{type:a}},o=function(e){return{type:r,payload:e}},s=function(e){return{type:c,payload:e}}},97:function(e,t,n){"use strict";var a=n(4),r=n(5),c=(n(0),n(171),n(390)),i=n(391),o=n(2),s=["handleChange"];t.a=function(e){var t=e.handleChange,n=Object(r.a)(e,s);return Object(o.jsx)(c.a,{item:!0,xs:12,sm:12,children:Object(o.jsx)(i.a,Object(a.a)({variant:"outlined",required:!0,fullWidth:!0,autoFocus:!0,InputLabelProps:{shrink:!0},onChange:t},n))})}}},[[389,3,4]]]);