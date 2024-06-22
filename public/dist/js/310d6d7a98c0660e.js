/*! For license information please see 310d6d7a98c0660e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53],{4053:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var o=r(2957),n=r.n(o);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),s=new R(o||[]);return n(a,"_invoke",{value:S(t,r,s)}),a}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",g="executing",v="completed",y={};function w(){}function b(){}function _(){}var k={};d(k,l,(function(){return this}));var x=Object.getPrototypeOf,C=x&&x(x($([])));C&&C!==r&&o.call(C,l)&&(k=C);var P=_.prototype=w.prototype=Object.create(k);function L(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(n,a,s,l){var c=m(t[n],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==i(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,l)}),(function(t){r("throw",t,s,l)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,l)}))}l(c.arg)}var a;n(this,"_invoke",{value:function(t,o){function n(){return new e((function(e,n){r(t,o,e,n)}))}return a=a?a.then(n,n):n()}})}function S(e,r,o){var n=p;return function(i,a){if(n===g)throw Error("Generator is already running");if(n===v){if("throw"===i)throw a;return{value:t,done:!0}}for(o.method=i,o.arg=a;;){var s=o.delegate;if(s){var l=E(s,o);if(l){if(l===y)continue;return l}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===p)throw n=v,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=g;var c=m(e,r,o);if("normal"===c.type){if(n=o.done?v:h,c.arg===y)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(n=v,o.method="throw",o.arg=c.arg)}}}function E(e,r){var o=r.method,n=e.iterator[o];if(n===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),y;var i=m(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return b.prototype=_,n(P,"constructor",{value:_,configurable:!0}),n(_,"constructor",{value:b,configurable:!0}),b.displayName=d(_,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,d(t,u,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},L(O.prototype),d(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,o,n,i){void 0===i&&(i=Promise);var a=new O(f(t,r,o,n),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(P),d(P,u,"Generator"),d(P,l,(function(){return this})),d(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var o in e)r.push(o);return r.reverse(),function t(){for(;r.length;){var o=r.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=$,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;N(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:$(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),y}},e}function s(t,e,r,o,n,i,a){try{var s=t[i](a),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(o,n)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const d={name:"LoginPage",layout:"wide",middleware:"guest",metaInfo:function(){return{title:"Sign In"}},data:function(){return{studentRole:!1,lecturerRole:!1,hidePassword:!0,passwordType:"password",form:new(n())({role:"Student",email:"",password:""}),remember:!1}},computed:c(c({},(0,r(5353).L8)({snackbar:"notification/snackbar"})),{},{role:function(){return"Student"===this.form.role?{img:{top:"/images/login-top-student.png",midLeft:"/images/login-mid-left-1-student.png",midRight:"/images/login-mid-right-student.png"},class:{midImage:""},text:"Expand Your Careers."}:{img:{top:"/images/login-top-lecturer.png",midLeft:"/images/login-mid-left-1-lecturer.png",midRight:"/images/login-mid-right-lecturer.png"},class:{midImage:"row-reverse"},text:"Project for Everyone"}}}),methods:{login:function(){var t,e=this;return(t=a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.form.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?!.*(student)).*.ac.id.*$/),"Lecturer"!==e.form.role||r){t.next=8;break}return e.snackbar.open("You are likely not using a lecturer identity."),e.chooseStudent(),e.form.role="Student",t.abrupt("return");case 8:if("Student"!==e.form.role||!r){t.next=13;break}return e.snackbar.open("You are likely using a lecturer identity. "),e.chooseLecturer(),e.form.role="Lecturer",t.abrupt("return");case 13:e.form.post("/api/login").then((function(t){var r=t.data;e.$store.dispatch("auth/saveToken",{token:r.token,remember:e.remember}),e.$router.back()})).catch((function(t){}));case 14:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,n){var i=t.apply(e,r);function a(t){s(i,o,n,a,l,"next",t)}function l(t){s(i,o,n,a,l,"throw",t)}a(void 0)}))})()},chooseStudent:function(){this.studentRole=!0,this.lecturerRole=!1},chooseLecturer:function(){this.lecturerRole=!0,this.studentRole=!1},togglePassword:function(){this.hidePassword=!this.hidePassword,this.passwordType=this.hidePassword?"password":"text"}}};const f=(0,r(4486).A)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-page--container",class:{"lecturer-bg":t.lecturerRole}},[t.$matchMedia.xl?e("div",{staticClass:"desktop-login__left--container"},[e("div",[e("img",{staticClass:"desktop-login__left--img desktop-login__left-top--img",attrs:{src:t.role.img.top,alt:""}})]),t._v(" "),e("div",{staticClass:"flex-row space-between mt-2_5",class:t.role.class.midImage},[e("div",{staticClass:"flex-column space-between h100"},[e("img",{staticClass:"desktop-login__left--img desktop-login__left-mid-small--img",attrs:{src:t.role.img.midLeft,alt:""}}),t._v(" "),e("router-link",{attrs:{to:{name:"index"}}},[e("img",{staticClass:"desktop-login__left-mid-logo--img",attrs:{src:"/images/big-logo.png",alt:""}})])],1),t._v(" "),e("img",{staticClass:"desktop-login__left--img desktop-login__left-mid-big--img",attrs:{src:t.role.img.midRight,alt:""}})]),t._v(" "),e("div",[e("h2",{staticClass:"desktop-login__left--h2 mt-1_5"},[t._v("\n        "+t._s(t.role.text)+"\n      ")])])]):e("div",{staticClass:"login-page--logo"},[e("router-link",{attrs:{to:{name:"index"}}},[e("img",{attrs:{src:"",alt:""}})])],1),t._v(" "),e("div",{staticClass:"login-form--container"},[t.$matchMedia.xl?e("router-link",{staticClass:"mx-auto mb-2_5",attrs:{to:{name:"index"}}},[e("img",{staticClass:"desktop-nav__logo",attrs:{src:"https://i.ibb.co/5ngvTZq/Screenshot-2024-06-10-at-16-52-28.png",alt:""}})]):t._e(),t._v(" "),e("h1",{staticClass:"login--h1"},[t._v("\n      Who are you?\n    ")]),t._v(" "),e("div",{staticClass:"login-role--container"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.role,expression:"form.role"}],staticClass:"login-radio",attrs:{id:"login-student",type:"radio",value:"Student"},domProps:{checked:t._q(t.form.role,"Student")},on:{change:function(e){return t.$set(t.form,"role","Student")}}}),t._v(" "),e("label",{staticClass:"login-radio--label",attrs:{for:"login-student"},on:{click:t.chooseStudent}},[t._v("Freelancer")])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.role,expression:"form.role"}],staticClass:"login-radio",attrs:{id:"login-lecturer",type:"radio",value:"Lecturer"},domProps:{checked:t._q(t.form.role,"Lecturer")},on:{change:function(e){return t.$set(t.form,"role","Lecturer")}}}),t._v(" "),e("label",{staticClass:"login-radio--label",attrs:{for:"login-lecturer"},on:{click:t.chooseLecturer}},[t._v("client")])])]),t._v(" "),t.$matchMedia.xl?e("div",{staticClass:"separator mt-1_5 mb-2"},[t._v("\n      Sign In\n    ")]):e("div",{staticClass:"role--choose-effect",class:{"role--student":t.studentRole,"role--lecturer":t.lecturerRole}}),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[e("div",{staticClass:"login-input--container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"login-input",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email",placeholder:"Email",autocomplete:"username",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),e("div",{staticClass:"login-input--container"},[e("div",{staticClass:"right-tag__group"},["checkbox"===t.passwordType?e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"right-tag__input login--left-border",class:{"is-invalid":t.form.errors.has("password")},attrs:{name:"password",placeholder:"Password",autocomplete:"current-password",required:"",type:"checkbox"},domProps:{checked:Array.isArray(t.form.password)?t._i(t.form.password,null)>-1:t.form.password},on:{change:function(e){var r=t.form.password,o=e.target,n=!!o.checked;if(Array.isArray(r)){var i=t._i(r,null);o.checked?i<0&&t.$set(t.form,"password",r.concat([null])):i>-1&&t.$set(t.form,"password",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"password",n)}}}):"radio"===t.passwordType?e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"right-tag__input login--left-border",class:{"is-invalid":t.form.errors.has("password")},attrs:{name:"password",placeholder:"Password",autocomplete:"current-password",required:"",type:"radio"},domProps:{checked:t._q(t.form.password,null)},on:{change:function(e){return t.$set(t.form,"password",null)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"right-tag__input login--left-border",class:{"is-invalid":t.form.errors.has("password")},attrs:{name:"password",placeholder:"Password",autocomplete:"current-password",required:"",type:t.passwordType},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.hidePassword,expression:"hidePassword"}],staticClass:"pointer right-tag",on:{click:t.togglePassword}},[e("span",{staticClass:"iconify password__hide-icon",attrs:{"data-icon":"carbon:view-off-filled",width:"20",height:"20"}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.hidePassword,expression:"!hidePassword"}],staticClass:"pointer right-tag",on:{click:t.togglePassword}},[e("span",{staticClass:"iconify password__hide-icon",attrs:{"data-icon":"carbon:view-filled",width:"20",height:"20"}})])]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"password"}})],1),t._v(" "),e("div",{staticClass:"login-input--container"},[e("label",{staticClass:"checkbox-container checkbox-container--post"},[t._v("Remember Me\n          "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.remember,expression:"remember"}],attrs:{name:"remember",type:"checkbox"},domProps:{checked:Array.isArray(t.remember)?t._i(t.remember,null)>-1:t.remember},on:{change:function(e){var r=t.remember,o=e.target,n=!!o.checked;if(Array.isArray(r)){var i=t._i(r,null);o.checked?i<0&&(t.remember=r.concat([null])):i>-1&&(t.remember=r.slice(0,i).concat(r.slice(i+1)))}else t.remember=n}}}),t._v(" "),e("span",{staticClass:"checkbox-checkmark checkbox-checkmark-remember"})])]),t._v(" "),e("div",{},[e("v-button",{staticClass:"login-submit--button",class:{"is-lecturer":t.lecturerRole},attrs:{loading:t.form.busy}},[t._v("\n          Sign In\n        ")])],1)]),t._v(" "),e("div",{staticClass:"login-extra"},[e("p",[t._v("\n        Don't have an account?\n        "),e("router-link",{staticClass:"login-link",attrs:{to:{name:"register"}}},[e("b",[t._v("Sign Up")])])],1),t._v(" "),e("p",[e("router-link",{staticClass:"login-link",attrs:{to:{name:"password.request"}}},[e("b",[t._v("Forgot Password?")])])],1)]),t._v(" "),t.$matchMedia.xl?e("div",{staticClass:"desktop-login__footer"},[t._v("\n      workfusion, All Rights Reserved. copyrigh 2024 . | Created by felicien\n    ")]):t._e()],1)])}),[],!1,null,null,null).exports}}]);