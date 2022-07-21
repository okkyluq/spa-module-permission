"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[486],{7276:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(3645),s=n.n(a)()((function(t){return t[1]}));s.push([t.id,".nav-main-item:hover{cursor:pointer}",""]);const r=s},9787:(t,e,n)=>{n.d(e,{Z:()=>S});var a=n(8484),s=n(629);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const o={props:{slug:String,title:String,icon:String,link:String,childs:Array,single_menu:Boolean},data:function(){return{menu_open:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,s.rn)("auth",{permission:function(t){return t.permission}})),methods:{open_menu:function(){this.single_menu||(this.menu_open=!this.menu_open)},openLinkChild:function(t){this.$router.push(t)}}};var c=n(3379),l=n.n(c),u=n(7276),d={insert:"head",singleton:!1};l()(u.Z,d);u.Z.locals;var f=n(1900);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const _={components:{ChildNavigationMenu:(0,f.Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return-1!==t.permission.indexOf("view_"+t.slug)?n("li",{staticClass:"nav-main-item",class:{open:t.menu_open},on:{click:t.open_menu}},[t.single_menu?n("router-link",{staticClass:"nav-main-link",attrs:{to:t.link}},[n("i",{staticClass:"nav-main-link-icon",class:t.icon}),t._v(" "),n("span",{staticClass:"nav-main-link-name"},[t._v(t._s(t.title))])]):n("a",{staticClass:"nav-main-link nav-main-link-submenu"},[n("i",{staticClass:"nav-main-link-icon",class:t.icon}),t._v(" "),n("span",{staticClass:"nav-main-link-name"},[t._v(t._s(t.title))])]),t._v(" "),t.single_menu?t._e():n("ul",{staticClass:"nav-main-submenu"},t._l(t.childs,(function(e){return-1!==t.permission.indexOf("view_"+e.SlugMenu)?n("li",{key:e.id,staticClass:"nav-main-item"},[n("router-link",{staticClass:"nav-main-link",attrs:{to:e.url}},[n("i",{staticClass:"nav-main-link-icon",class:e.icon}),t._v(" "),n("span",{staticClass:"nav-main-link-name"},[t._v(t._s(e.text_menu))])])],1):t._e()})),0)],1):t._e()}),[],!1,null,null,null).exports},data:function(){return{}},computed:m({},(0,s.rn)("ui",{all_menu:function(t){return t.menu_all}})),methods:m({},(0,s.nv)("ui",{setMenuAll:"setMenuAll"})),mounted:function(){var t=this;null===this.all_menu&&(a.Z.defaults.headers.common.Authorization="Bearer ".concat(this.$store.state.auth.token),a.Z.get("getmenuuser").then((function(e){console.log(e.data),t.setMenuAll(e.data)})).catch((function(t){console.log(t)})))}};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const y={components:{NavigationMenu:(0,f.Z)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav-main"},[n("li",{staticClass:"nav-main-item"},[n("router-link",{staticClass:"nav-main-link",attrs:{to:"/"}},[n("i",{staticClass:"nav-main-link-icon fa fa-laptop"}),t._v(" "),n("span",{staticClass:"nav-main-link-name"},[t._v("Dashboard")])])],1),t._v(" "),t._l(t.all_menu,(function(t){return n("ChildNavigationMenu",{key:t.id,attrs:{slug:t.SlugMenu,title:t.text_menu,icon:t.icon,single_menu:!t.childs.length>0,link:t.url,childs:t.childs}})}))],2)}),[],!1,null,null,null).exports},computed:h({},(0,s.rn)("ui",{sidebar_active:function(t){return t.sidebar_active},header_mode_dark:function(t){return t.header_mode_dark},mode_dark:function(t){return t.mode_dark}})),methods:h({},(0,s.nv)("ui",{setHeaderModeDark:"setHeaderModeDark",setModeDark:"setModeDark"}))};const C=(0,f.Z)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"sidebar","aria-label":"Main Navigation"}},[n("div",{staticClass:"bg-header-dark"},[n("div",{staticClass:"content-header bg-white-5"},[t._m(0),t._v(" "),n("div",[n("button",{staticClass:"btn btn-sm btn-alt-secondary",attrs:{type:"button"},on:{click:t.setHeaderModeDark}},[n("i",{class:[t.header_mode_dark?"fa fa-toggle-on":"fa fa-toggle-off"]})]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-alt-secondary",attrs:{type:"button"},on:{click:t.setModeDark}},[n("i",{class:[t.mode_dark?"fa fa-moon":"far fa-moon"]})]),t._v(" "),t._m(1)])])]),t._v(" "),n("div",{staticClass:"js-sidebar-scroll"},[n("div",{staticClass:"content-side"},[n("NavigationMenu")],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"fw-semibold text-white tracking-wide",attrs:{href:"index.html"}},[n("span",{staticClass:"smini-visible"},[t._v(" CCAP ")]),t._v(" "),n("span",{staticClass:"smini-hidden"},[t._v("\n                    CC"),n("span",{staticClass:"opacity-75"},[t._v("AP")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-sm btn-alt-secondary d-lg-none",attrs:{type:"button","data-toggle":"layout","data-action":"sidebar_close"}},[e("i",{staticClass:"fa fa-times-circle"})])}],!1,null,null,null).exports;function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const j={computed:w(w({},(0,s.rn)("ui",{menu_user:function(t){return t.menu_user},notification_user:function(t){return t.notification_user}})),(0,s.rn)("auth",{user:function(t){return t.user},token:function(t){return t.token}})),methods:w(w(w({hiddenMenuUser:function(){!1===this.menu_user||this.setMenuUser()},hiddenNotificationUser:function(){!1===this.notification_user||this.setNotificationUser()}},(0,s.nv)("ui",{minimizeSidebar:"minimizeSidebar",setMenuUser:"setMenuUser",setNotificationUser:"setNotificationUser",setDefaultUi:"setDefaultUi"})),(0,s.nv)("auth",{clearTokenUser:"clearTokenUser"})),{},{logout:function(){var t=this;a.Z.post("logout").then((function(e){t.setDefaultUi(),t.clearTokenUser(),t.$router.push({path:"/login"})})).catch((function(t){console.log(t)}))}})};const x={};function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const E={components:{LeftMenu:C,HeaderTop:(0,f.Z)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"page-header"}},[n("div",{staticClass:"content-header"},[n("div",[n("button",{staticClass:"btn btn-alt-secondary me-1",attrs:{type:"button"},on:{click:t.minimizeSidebar}},[n("i",{staticClass:"fa fa-fw fa-bars"})])]),t._v(" "),n("div",[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hiddenMenuUser,expression:"hiddenMenuUser"}],staticClass:"dropdown d-inline-block"},[n("button",{staticClass:"btn btn-alt-secondary",class:{show:t.menu_user},attrs:{type:"button"},on:{click:t.setMenuUser}},[n("i",{staticClass:"fa fa-fw fa-user d-sm-none"}),t._v(" "),n("span",{staticClass:"d-none d-sm-inline-block"},[t._v(t._s(t.user.name?t.user.name:"Not Found"))]),t._v(" "),n("i",{staticClass:"fa fa-fw fa-angle-down opacity-50 ms-1 d-none d-sm-inline-block"})]),t._v(" "),n("div",{staticClass:"dropdown-menu dropdown-menu-end p-0",class:{show:t.menu_user},style:t.menu_user?"position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 40px);":""},[n("div",{staticClass:"bg-primary-dark rounded-top fw-semibold text-white text-center p-3"},[t._v("\n                        User Options\n                    ")]),t._v(" "),n("div",{staticClass:"p-2"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"dropdown-divider",attrs:{role:"separator"}}),t._v(" "),n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logout.apply(null,arguments)}}},[n("i",{staticClass:"far fa-fw fa-arrow-alt-circle-left me-1"}),t._v(" Sign Out\n                        ")])])])]),t._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hiddenNotificationUser,expression:"hiddenNotificationUser"}],staticClass:"dropdown d-inline-block"},[n("button",{staticClass:"btn btn-alt-secondary",class:{show:t.notification_user},attrs:{type:"button"},on:{click:t.setNotificationUser}},[n("i",{staticClass:"fa fa-fw fa-bell"})]),t._v(" "),n("div",{staticClass:"dropdown-menu dropdown-menu-lg dropdown-menu-end p-0",class:{show:t.notification_user},style:t.notification_user?"position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 40px);":""},[n("div",{staticClass:"bg-primary-dark rounded-top fw-semibold text-white text-center p-3"},[t._v("\n                        Notifications\n                    ")]),t._v(" "),t._m(4),t._v(" "),t._m(5)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"far fa-fw fa-user me-1"}),t._v(" Profile\n                        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item d-flex align-items-center justify-content-between",attrs:{href:"javascript:void(0)"}},[n("span",[n("i",{staticClass:"far fa-fw fa-envelope me-1"}),t._v(" Inbox")]),t._v(" "),n("span",{staticClass:"badge bg-primary rounded-pill"},[t._v("3")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"far fa-fw fa-file-alt me-1"}),t._v(" Invoices\n                        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)","data-toggle":"layout","data-action":"side_overlay_toggle"}},[n("i",{staticClass:"far fa-fw fa-building me-1"}),t._v(" Settings\n                        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav-items my-2"},[n("li",[n("a",{staticClass:"d-flex text-dark py-2",attrs:{href:"javascript:void(0)"}},[n("div",{staticClass:"flex-shrink-0 mx-3"},[n("i",{staticClass:"fa fa-fw fa-check-circle text-success"})]),t._v(" "),n("div",{staticClass:"flex-grow-1 fs-sm pe-2"},[n("div",{staticClass:"fw-semibold"},[t._v("App was updated to v5.6!")]),t._v(" "),n("div",{staticClass:"text-muted"},[t._v("3 min ago")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2 border-top"},[n("a",{staticClass:"btn btn-alt-primary w-100 text-center",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"fa fa-fw fa-eye opacity-50 me-1"}),t._v(" View All\n                        ")])])}],!1,null,null,null).exports,FooterTop:(0,f.Z)(x,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-body-light",attrs:{id:"page-footer"}},[n("div",{staticClass:"content py-0"},[n("div",{staticClass:"row fs-sm"},[n("div",{staticClass:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-end"},[t._v("\n            Crafted with "),n("i",{staticClass:"fa fa-heart text-danger"}),t._v(" by "),n("a",{staticClass:"fw-semibold",attrs:{href:"https://1.envato.market/ydb",target:"_blank"}},[t._v("pixelcave")])]),t._v(" "),n("div",{staticClass:"col-sm-6 order-sm-1 text-center text-sm-start"},[n("a",{staticClass:"fw-semibold",attrs:{href:"https://1.envato.market/r6y",target:"_blank"}},[t._v("Dashmix 5.1")]),t._v(" © "),n("span",{attrs:{"data-toggle":"year-copy"}})])])])])}],!1,null,null,null).exports},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){D(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,s.rn)("ui",{sidebar_active:function(t){return t.sidebar_active},header_mode_dark:function(t){return t.header_mode_dark},mode_dark:function(t){return t.mode_dark}}))};const S=(0,f.Z)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow",class:{"sidebar-o":t.sidebar_active,"page-header-dark":t.header_mode_dark,"dark-mode":t.mode_dark},attrs:{id:"page-container"}},[n("left-menu"),t._v(" "),n("HeaderTop"),t._v(" "),n("main",{attrs:{id:"main-container"}},[t._t("default")],2),t._v(" "),n("FooterTop")],1)}),[],!1,null,null,null).exports},7486:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});const a={components:{LayoutAdmin:n(9787).Z}};const s=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-admin",[n("div",{staticClass:"content"},[n("div",{staticClass:"block block-rounded"},[n("div",{staticClass:"block-header block-header-default"},[n("h3",{staticClass:"block-title"},[t._v("\n                    Data My Grapari\n                ")])]),t._v(" "),n("div",{staticClass:"block-content"},[n("p",[t._v(" Create your own awesome project! ")])])])])])}),[],!1,null,null,null).exports},1900:(t,e,n)=>{function a(t,e,n,a,s,r,i,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):s&&(c=o?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>a})}}]);