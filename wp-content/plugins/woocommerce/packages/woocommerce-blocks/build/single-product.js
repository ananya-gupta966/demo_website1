this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["single-product"]=function(e){function t(t){for(var c,s,a=t[0],i=t[1],l=t[2],d=0,m=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],c=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(c=!1)}c&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var c={},o={44:0},n=[];function s(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,c){r=o[e]=[t,c]}));t.push(r[2]=c);var n,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+""+({1:"product-add-to-cart--product-button--product-category-list--product-image--product-price--product-r--a0326d00",2:"product-button--product-category-list--product-image--product-price--product-rating--product-sale-b--e17c7c01",3:"product-add-to-cart--product-button--product-image--product-rating--product-title",4:"product-button--product-image--product-rating--product-sale-badge--product-title",19:"product-add-to-cart",21:"product-button",24:"product-category-list",25:"product-image",28:"product-price",30:"product-rating",31:"product-sale-badge",33:"product-sku",34:"product-stock-indicator",35:"product-summary",37:"product-tag-list",38:"product-title"}[e]||e)+".js?ver="+{1:"b04965a5d7172f10e2d9",2:"257fff49308ef4a5e0e7",3:"fbcf908292477d16e350",4:"b292d7e095604b6bdad8",19:"a7bc252216164f54701b",21:"b0bf597a8d964cadffd2",24:"73a263789ce2dc87c40a",25:"cc6d1df6104a82d8c51c",28:"c75ca380cd07b7a3aa3e",30:"78fe0f38fe46f3b1a840",31:"d72800eb73a0d3867b91",33:"2683ad5e33f6fc49b12d",34:"f79e7149bf1a2422db59",35:"3822d86e69e48560dd6d",37:"937a21792f39b69e0dc0",38:"f410c83e161e9cc1db99"}[e]}(e);var i=new Error;n=function(t){a.onerror=a.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",i.name="ChunkLoadError",i.type=c,i.request=n,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:a})}),12e4);a.onerror=a.onload=n,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(r,c,function(t){return e[t]}.bind(null,c));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;return n.push([466,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wc.wcBlocksData},101:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var c=r(6),o=r.n(c),n=r(0),s=r(1),a=r(3),i=r(79),l=r(522),u=r(4),d=r.n(u),m=r(11),p=r(19),b=r(37),g=r(521),h=r(15);const w=e=>{let{id:t,label:r,popoverContents:c,remove:o,screenReaderLabel:l,className:u=""}=e;const[p,b]=Object(n.useState)(!1),O=Object(m.useInstanceId)(w);if(l=l||r,!r)return null;r=Object(h.decodeEntities)(r);const j=d()("woocommerce-tag",u,{"has-remove":!!o}),f="woocommerce-tag__label-"+O,E=Object(n.createElement)(n.Fragment,null,Object(n.createElement)("span",{className:"screen-reader-text"},l),Object(n.createElement)("span",{"aria-hidden":"true"},r));return Object(n.createElement)("span",{className:j},c?Object(n.createElement)(a.Button,{className:"woocommerce-tag__text",id:f,onClick:()=>b(!0)},E):Object(n.createElement)("span",{className:"woocommerce-tag__text",id:f},E),c&&p&&Object(n.createElement)(a.Popover,{onClose:()=>b(!1)},c),o&&Object(n.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:o(t),label:Object(s.sprintf)(// Translators: %s label.
Object(s.__)("Remove %s","woocommerce"),r),"aria-describedby":f},Object(n.createElement)(i.a,{icon:g.a,size:20,className:"clear-icon"})))};var O=w;const j=e=>Object(n.createElement)(b.b,e),f=e=>{const{list:t,selected:r,renderItem:c,depth:s=0,onSelect:a,instanceId:i,isSingle:l,search:u}=e;return t?Object(n.createElement)(n.Fragment,null,t.map(t=>{const d=-1!==r.findIndex(e=>{let{id:r}=e;return r===t.id});return Object(n.createElement)(n.Fragment,{key:t.id},Object(n.createElement)("li",null,c({item:t,isSelected:d,onSelect:a,isSingle:l,search:u,depth:s,controlId:i})),Object(n.createElement)(f,o()({},e,{list:t.children,depth:s+1})))})):null},E=e=>{let{isLoading:t,isSingle:r,selected:c,messages:o,onChange:i,onRemove:l}=e;if(t||r||!c)return null;const u=c.length;return Object(n.createElement)("div",{className:"woocommerce-search-list__selected"},Object(n.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(n.createElement)("strong",null,o.selected(u)),u>0?Object(n.createElement)(a.Button,{isLink:!0,isDestructive:!0,onClick:()=>i([]),"aria-label":o.clear},Object(s.__)("Clear all","woocommerce")):null),u>0?Object(n.createElement)("ul",null,c.map((e,t)=>Object(n.createElement)("li",{key:t},Object(n.createElement)(O,{label:e.name,id:e.id,remove:l})))):null)},_=e=>{let{filteredList:t,search:r,onSelect:c,instanceId:o,...a}=e;const{messages:u,renderItem:d,selected:m,isSingle:p}=a,b=d||j;return 0===t.length?Object(n.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(n.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(n.createElement)(i.a,{icon:l.a})),Object(n.createElement)("span",{className:"woocommerce-search-list__not-found-text"},r?Object(s.sprintf)(u.noResults,r):u.noItems)):Object(n.createElement)("ul",{className:"woocommerce-search-list__list"},Object(n.createElement)(f,{list:t,selected:m,renderItem:b,onSelect:c,instanceId:o,isSingle:p,search:r}))},v=e=>{const{className:t="",isCompact:r,isHierarchical:c,isLoading:s,isSingle:i,list:l,messages:u=p.a,onChange:b,onSearch:g,selected:h,debouncedSpeak:w}=e,[O,j]=Object(n.useState)(""),f=Object(m.useInstanceId)(v),k=Object(n.useMemo)(()=>({...p.a,...u}),[u]),y=Object(n.useMemo)(()=>Object(p.c)(l,O,c),[l,O,c]);Object(n.useEffect)(()=>{w&&w(k.updated)},[w,k]),Object(n.useEffect)(()=>{"function"==typeof g&&g(O)},[O,g]);const S=Object(n.useCallback)(e=>()=>{i&&b([]);const t=h.findIndex(t=>{let{id:r}=t;return r===e});b([...h.slice(0,t),...h.slice(t+1)])},[i,h,b]),P=Object(n.useCallback)(e=>()=>{-1===h.findIndex(t=>{let{id:r}=t;return r===e.id})?b(i?[e]:[...h,e]):S(e.id)()},[i,S,b,h]);return Object(n.createElement)("div",{className:d()("woocommerce-search-list",t,{"is-compact":r})},Object(n.createElement)(E,o()({},e,{onRemove:S,messages:k})),Object(n.createElement)("div",{className:"woocommerce-search-list__search"},Object(n.createElement)(a.TextControl,{label:k.search,type:"search",value:O,onChange:e=>j(e)})),s?Object(n.createElement)("div",{className:"woocommerce-search-list__list is-loading"},Object(n.createElement)(a.Spinner,null)):Object(n.createElement)(_,o()({},e,{search:O,filteredList:y,messages:k,onSelect:P,instanceId:f})))};Object(a.withSpokenMessages)(v)},109:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(79),s=r(234),a=r(2),i=r(5),l=r(23);t.a=e=>{const t=(Object(l.useProductDataContext)().product||{}).id||e.productId||0;return t?Object(c.createElement)(i.InspectorControls,null,Object(c.createElement)("div",{className:"wc-block-single-product__edit-card"},Object(c.createElement)("div",{className:"wc-block-single-product__edit-card-title"},Object(c.createElement)("a",{href:`${a.ADMIN_URL}post.php?post=${t}&action=edit`,target:"_blank",rel:"noopener noreferrer"},Object(o.__)("Edit this product's details","woocommerce"),Object(c.createElement)(n.a,{icon:s.a,size:16}))),Object(c.createElement)("div",{className:"wc-block-single-product__edit-card-description"},Object(o.__)("Edit details such as title, price, description and more.","woocommerce")))):null}},11:function(e,t){e.exports=window.wp.compose},119:function(e,t){},12:function(e,t){e.exports=window.wp.primitives},13:function(e,t){e.exports=window.React},136:function(e,t,r){"use strict";var c=r(24),o=r.n(c),n=r(0),s=r(13),a=r(1),i=r(20),l=e=>{let{imageUrl:t=i.m+"/block-error.svg",header:r=Object(a.__)("Oops!","woocommerce"),text:c=Object(a.__)("There was an error loading the content.","woocommerce"),errorMessage:o,errorMessagePrefix:s=Object(a.__)("Error:","woocommerce"),button:l,showErrorBlock:u=!0}=e;return u?Object(n.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&Object(n.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),Object(n.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},r&&Object(n.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},r),c&&Object(n.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},c),o&&Object(n.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},s?s+" ":"",o),l&&Object(n.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},l))):null};r(208);class u extends s.Component{constructor(){super(...arguments),o()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(n.createElement)(n.Fragment,null,Object(n.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:r=!0,showErrorBlock:c=!0,text:o,errorMessagePrefix:s,renderError:a,button:i}=this.props,{errorMessage:u,hasError:d}=this.state;return d?"function"==typeof a?a({errorMessage:u}):Object(n.createElement)(l,{showErrorBlock:c,errorMessage:r?u:null,header:e,imageUrl:t,text:o,errorMessagePrefix:s,button:i}):this.props.children}}t.a=u},14:function(e,t){e.exports=window.wp.apiFetch},142:function(e,t){},15:function(e,t){e.exports=window.wp.htmlEntities},16:function(e,t){e.exports=window.wc.blocksCheckout},17:function(e,t){e.exports=window.wp.url},19:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return u}));var c=r(0),o=r(8),n=r(1);const s={clear:Object(n.__)("Clear all selected items","woocommerce"),noItems:Object(n.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:Object(n.__)("No results for %s","woocommerce"),search:Object(n.__)("Search for items","woocommerce"),selected:e=>Object(n.sprintf)(
/* translators: Number of items selected from list. */
Object(n._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:Object(n.__)("Search results updated.","woocommerce")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const r=Object(o.groupBy)(e,"parent"),c=Object(o.keyBy)(t,"id"),n=["0"],s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=s(c[e.parent]);return[...t,e.name]},a=e=>e.map(e=>{const t=r[e.id];return n.push(""+e.id),{...e,breadcrumbs:s(c[e.parent]),children:t&&t.length?a(t):[]}}),i=a(r[0]||[]);return Object.entries(r).forEach(e=>{let[t,r]=e;n.includes(t)||i.push(...a(r||[]))}),i},i=(e,t,r)=>{if(!t)return r?a(e):e;const c=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),o=e.map(e=>!!c.test(e.name)&&e).filter(Boolean);return r?a(o,e):o},l=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map((e,t)=>r.test(e)?Object(c.createElement)("strong",{key:t},e):Object(c.createElement)(c.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},190:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),s=r(20),a=r(27),i=r(118),l=r(30);t.a=e=>t=>{let{selected:r,...c}=t;const[u,d]=Object(n.useState)(!0),[m,p]=Object(n.useState)(null),[b,g]=Object(n.useState)([]),h=s.o.productCount>100,w=async e=>{const t=await Object(l.a)(e);p(t),d(!1)},O=Object(n.useRef)(r);Object(n.useEffect)(()=>{Object(a.h)({selected:O.current}).then(e=>{g(e),d(!1)}).catch(w)},[O]);const j=Object(i.a)(e=>{Object(a.h)({selected:r,search:e}).then(e=>{g(e),d(!1)}).catch(w)},400),f=Object(n.useCallback)(e=>{d(!0),j(e)},[d,j]);return Object(n.createElement)(e,o()({},c,{selected:r,error:m,products:b,isLoading:u,onSearch:h?f:null}))}},2:function(e,t){e.exports=window.wc.wcSettings},20:function(e,t,r){"use strict";r.d(t,"o",(function(){return n})),r.d(t,"m",(function(){return s})),r.d(t,"l",(function(){return a})),r.d(t,"n",(function(){return i})),r.d(t,"j",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return m})),r.d(t,"k",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return g})),r.d(t,"h",(function(){return h})),r.d(t,"a",(function(){return w})),r.d(t,"i",(function(){return O})),r.d(t,"b",(function(){return j}));var c,o=r(2);const n=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),s=n.pluginUrl+"images/",a=n.pluginUrl+"build/",i=n.buildPhase,l=null===(c=o.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=o.STORE_PAGES.checkout.id,d=o.STORE_PAGES.checkout.permalink,m=o.STORE_PAGES.privacy.permalink,p=(o.STORE_PAGES.privacy.title,o.STORE_PAGES.terms.permalink),b=(o.STORE_PAGES.terms.title,o.STORE_PAGES.cart.id),g=o.STORE_PAGES.cart.permalink,h=(o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),Object(o.getSetting)("shippingCountries",{})),w=Object(o.getSetting)("allowedCountries",{}),O=Object(o.getSetting)("shippingStates",{}),j=Object(o.getSetting)("allowedStates",{})},208:function(e,t){},23:function(e,t){e.exports=window.wc.wcBlocksSharedContext},25:function(e,t){e.exports=window.wc.priceFormat},26:function(e,t){e.exports=window.wp.isShallowEqual},27:function(e,t,r){"use strict";r.d(t,"h",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"f",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return g})),r.d(t,"g",(function(){return h})),r.d(t,"a",(function(){return w}));var c=r(17),o=r(14),n=r.n(o),s=r(8),a=r(2),i=r(20);const l=e=>{let{selected:t=[],search:r="",queryArgs:o={}}=e;const a=(e=>{let{selected:t=[],search:r="",queryArgs:o={}}=e;const n=i.o.productCount>100,s={per_page:n?100:0,catalog_visibility:"any",search:r,orderby:"title",order:"asc"},a=[Object(c.addQueryArgs)("/wc/store/v1/products",{...s,...o})];return n&&t.length&&a.push(Object(c.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),a})({selected:t,search:r,queryArgs:o});return Promise.all(a.map(e=>n()({path:e}))).then(e=>Object(s.uniqBy)(Object(s.flatten)(e),"id").map(e=>({...e,parent:0}))).catch(e=>{throw e})},u=e=>n()({path:"/wc/store/v1/products/"+e}),d=()=>n()({path:"wc/store/v1/products/attributes"}),m=e=>n()({path:`wc/store/v1/products/attributes/${e}/terms`}),p=e=>{let{selected:t=[],search:r}=e;const o=(e=>{let{selected:t=[],search:r}=e;const o=Object(a.getSetting)("limitTags",!1),n=[Object(c.addQueryArgs)("wc/store/v1/products/tags",{per_page:o?100:0,orderby:o?"count":"name",order:o?"desc":"asc",search:r})];return o&&t.length&&n.push(Object(c.addQueryArgs)("wc/store/v1/products/tags",{include:t})),n})({selected:t,search:r});return Promise.all(o.map(e=>n()({path:e}))).then(e=>Object(s.uniqBy)(Object(s.flatten)(e),"id"))},b=e=>n()({path:Object(c.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),g=e=>n()({path:"wc/store/v1/products/categories/"+e}),h=e=>n()({path:Object(c.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),w=(e,t)=>{if(!e.title.raw)return e.slug;const r=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(r?"":" - "+e.slug)}},3:function(e,t){e.exports=window.wp.components},30:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var c=r(1),o=r(15);const n=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},s=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return null!=e&&e.message?Object(o.decodeEntities)(e.message):Object(c.__)("Something went wrong. Please contact us to get assistance.","woocommerce")}},321:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(24),s=r.n(n),a=r(0),i=r(11),l=r(27),u=r(30);const d=Object(i.createHigherOrderComponent)(e=>class extends a.Component{constructor(){super(...arguments),s()(this,"state",{error:null,loading:!1,product:"preview"===this.props.attributes.productId?this.props.attributes.previewProduct:null}),s()(this,"loadProduct",()=>{const{productId:e}=this.props.attributes;"preview"!==e&&(e?(this.setState({loading:!0}),Object(l.e)(e).then(e=>{this.setState({product:e,loading:!1,error:null})}).catch(async e=>{const t=await Object(u.a)(e);this.setState({product:null,loading:!1,error:t})})):this.setState({product:null,loading:!1,error:null}))})}componentDidMount(){this.loadProduct()}componentDidUpdate(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}render(){const{error:t,loading:r,product:c}=this.state;return Object(a.createElement)(e,o()({},this.props,{error:t,getProduct:this.loadProduct,isLoading:r,product:c}))}},"withProduct");t.a=d},34:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(35);t.a=e=>{let{error:t}=e;return Object(c.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:r}=e;return t?"general"===r?Object(c.createElement)("span",null,Object(o.__)("The following error was returned","woocommerce"),Object(c.createElement)("br",null),Object(c.createElement)("code",null,Object(n.escapeHTML)(t))):"api"===r?Object(c.createElement)("span",null,Object(o.__)("The following error was returned from the API","woocommerce"),Object(c.createElement)("br",null),Object(c.createElement)("code",null,Object(n.escapeHTML)(t))):t:Object(o.__)("An error has prevented the block from being updated.","woocommerce")})(t))}},35:function(e,t){e.exports=window.wp.escapeHtml},36:function(e,t){e.exports=window.wc.wcBlocksRegistry},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(6),o=r.n(c),n=r(0),s=r(19);const a=e=>{let{countLabel:t,className:r,depth:c=0,controlId:a="",item:i,isSelected:l,isSingle:u,onSelect:d,search:m="",...p}=e;const b=null!=t&&void 0!==i.count&&null!==i.count,g=[r,"woocommerce-search-list__item"];g.push("depth-"+c),u&&g.push("is-radio-button"),b&&g.push("has-count");const h=i.breadcrumbs&&i.breadcrumbs.length,w=p.name||"search-list-item-"+a,O=`${w}-${i.id}`;return Object(n.createElement)("label",{htmlFor:O,className:g.join(" ")},u?Object(n.createElement)("input",o()({type:"radio",id:O,name:w,value:i.value,onChange:d(i),checked:l,className:"woocommerce-search-list__item-input"},p)):Object(n.createElement)("input",o()({type:"checkbox",id:O,name:w,value:i.value,onChange:d(i),checked:l,className:"woocommerce-search-list__item-input"},p)),Object(n.createElement)("span",{className:"woocommerce-search-list__item-label"},h?Object(n.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(s.b)(i.breadcrumbs)):null,Object(n.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(s.d)(i.name,m))),!!b&&Object(n.createElement)("span",{className:"woocommerce-search-list__item-count"},t||i.count))};t.b=a},42:function(e,t){e.exports=window.wc.wcBlocksSharedHocs},45:function(e,t){e.exports=window.wp.hooks},466:function(e,t,r){e.exports=r(480)},467:function(e,t){},48:function(e,t){e.exports=window.wp.deprecated},480:function(e,t,r){"use strict";r.r(t);var c=r(1),o=r(55),n=r(0),s=r(3),a=r(321),i=r(136),l=r(109);const u=Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 230 100"},Object(n.createElement)("path",{fill:"#E1E3E6",d:"M76 0h11v6H76zm0 11h88v11H76zm0 16h28v6H76zm0 17h154v28H76zm0 39h22v17H76zm28 0h44v17h-44zM0 0h66v66H0z",style:{width:"100%"}}));var d=r(5),m=(r(467),r(73)),p=e=>{let{error:t,isLoading:r,getProduct:c}=e;return Object(n.createElement)(m.a,{className:"wc-block-single-product-error",error:t,isLoading:r,onRetry:c})},b=r(97),g=e=>{let{attributes:t,setAttributes:r}=e;return Object(n.createElement)(b.a,{selected:t.productId||0,showVariations:!0,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e[0]?e[0].id:0;r({productId:t})}})},h=e=>{let{isEditing:t,setIsEditing:r}=e;return Object(n.createElement)(d.BlockControls,null,Object(n.createElement)(s.ToolbarGroup,{controls:[{icon:"edit",title:Object(c.__)("Edit selected product","woocommerce"),onClick:()=>r(!t),isActive:t}]}))},w=r(7),O=r(23),j=r(9);const f=e=>e.map(e=>{let[t,r={},c=[]]=e;const o=c?f(c):[];return Object(j.createBlock)(t,r,o)});var E=r(79),_=r(556),v=r(555),k=r(507);const y="woocommerce/single-product",S=Object(c.__)("Single Product","woocommerce"),P=Object(n.createElement)(E.a,{icon:v.a,className:"wc-block-editor-components-block-icon"}),x=Object(c.__)("Display a single product.","woocommerce"),N=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1}]]],["core/column",{},[["woocommerce/product-sale-badge"],["woocommerce/product-title",{headingLevel:2}],["woocommerce/product-rating"],["woocommerce/product-price"],["woocommerce/product-summary"],["woocommerce/product-stock-indicator"],["woocommerce/product-add-to-cart",{showFormElements:!0}],["woocommerce/product-sku"],["woocommerce/product-category-list"],["woocommerce/product-tag-list"]]]]]],C=["core/columns","core/column",...Object.keys(Object(k.a)(y))];var I=e=>{let{isLoading:t,product:r,clientId:o}=e;const{replaceInnerBlocks:a}=Object(w.useDispatch)("core/block-editor"),i=Object(n.useCallback)(()=>{a(o,f(N),!1)},[o,a]);return Object(n.createElement)(O.InnerBlockLayoutContextProvider,{parentName:y,parentClassName:"wc-block-single-product wc-block-layout"},Object(n.createElement)(O.ProductDataContextProvider,{product:r,isLoading:t},Object(n.createElement)(d.InspectorControls,null,Object(n.createElement)(s.PanelBody,{title:Object(c.__)("Layout","woocommerce"),initialOpen:!0},Object(n.createElement)(s.Button,{label:Object(c.__)("Reset layout to default","woocommerce"),onClick:i,isTertiary:!0,className:"wc-block-single-product__reset-layout"},Object(n.createElement)(E.a,{icon:_.a})," ",Object(c.__)("Reset layout","woocommerce")))),Object(n.createElement)("div",{className:"wc-block-single-product wc-block-layout"},Object(n.createElement)(d.InnerBlocks,{template:N,allowedBlocks:C,templateLock:!1,renderAppender:!1}))))},B=Object(a.a)(e=>{let{className:t,attributes:r,setAttributes:o,error:a,getProduct:m,product:b,isLoading:w,clientId:O}=e;const{productId:j,isPreview:f}=r,[E,_]=Object(n.useState)(!j);return f?u:a?Object(n.createElement)(p,{error:a,isLoading:w,getProduct:m}):Object(n.createElement)("div",{className:t},Object(n.createElement)(i.a,{header:Object(c.__)("Single Product Block Error","woocommerce")},Object(n.createElement)(h,{setIsEditing:_,isEditing:E}),E?Object(n.createElement)(s.Placeholder,{icon:P,label:S,className:"wc-block-single-product"},x,Object(n.createElement)("div",{className:"wc-block-single-product__selection"},Object(n.createElement)(g,{attributes:r,setAttributes:o}),Object(n.createElement)(s.Button,{isSecondary:!0,onClick:()=>{_(!1)}},Object(c.__)("Done","woocommerce")))):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(d.InspectorControls,null,Object(n.createElement)(s.PanelBody,{title:Object(c.__)("Product","woocommerce"),initialOpen:!1},Object(n.createElement)(g,{attributes:r,setAttributes:o}))),Object(n.createElement)(l.a,{productId:j}),Object(n.createElement)(I,{clientId:O,product:b,isLoading:w}))))}),L=r(4),A=r.n(L);const R={title:S,icon:{src:P},category:"woocommerce",keywords:[Object(c.__)("WooCommerce","woocommerce")],description:x,supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{isPreview:{type:"boolean",default:!1,save:!1},productId:{type:"number"}},edit:B,save:e=>{let{attributes:t}=e;return Object(n.createElement)("div",{className:A()("is-loading",t.className)},Object(n.createElement)(d.InnerBlocks.Content,null))}};Object(o.c)(y,R)},5:function(e,t){e.exports=window.wp.blockEditor},507:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var c=r(36),o=r(0),n=r(20);r.p=n.l,Object(c.registerBlockComponent)({blockName:"woocommerce/product-price",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(2),r.e(28)]).then(r.bind(null,210)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-image",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(4),r.e(3),r.e(25)]).then(r.bind(null,560)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-title",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(4),r.e(3),r.e(38)]).then(r.bind(null,561)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-rating",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(4),r.e(3),r.e(30)]).then(r.bind(null,211)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-button",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(4),r.e(3),r.e(21)]).then(r.bind(null,212)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-summary",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(35)]).then(r.bind(null,323)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(4),r.e(31)]).then(r.bind(null,143)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-sku",component:Object(o.lazy)(()=>r.e(33).then(r.bind(null,324)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-category-list",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(24)]).then(r.bind(null,325)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-tag-list",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(37)]).then(r.bind(null,326)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:Object(o.lazy)(()=>Promise.all([r.e(1),r.e(2),r.e(34)]).then(r.bind(null,327)))}),Object(c.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:Object(o.lazy)(()=>Promise.all([r.e(0),r.e(1),r.e(3),r.e(19)]).then(r.bind(null,562)))});const s=e=>Object(c.getRegisteredBlockComponents)(e)},55:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a}));var c=r(9),o=r(20);const n=(e,t)=>{if(o.n>2)return Object(c.registerBlockType)(e,t)},s=()=>o.n>2,a=()=>o.n>1},61:function(e,t){e.exports=window.wp.autop},66:function(e,t){e.exports=window.wp.dom},7:function(e,t){e.exports=window.wp.data},73:function(e,t,r){"use strict";var c=r(0),o=r(1),n=r(79),s=r(187),a=r(4),i=r.n(a),l=r(3),u=r(34);r(119),t.a=e=>{let{className:t,error:r,isLoading:a=!1,onRetry:d}=e;return Object(c.createElement)(l.Placeholder,{icon:Object(c.createElement)(n.a,{icon:s.a}),label:Object(o.__)("Sorry, an error occurred","woocommerce"),className:i()("wc-block-api-error",t)},Object(c.createElement)(u.a,{error:r}),d&&Object(c.createElement)(c.Fragment,null,a?Object(c.createElement)(l.Spinner,null):Object(c.createElement)(l.Button,{isSecondary:!0,onClick:d},Object(o.__)("Retry","woocommerce"))))}},8:function(e,t){e.exports=window.lodash},82:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),s=r(37),a=r(3),i=r(4),l=r.n(i);t.a=e=>{let{className:t,item:r,isSelected:c,isLoading:i,onSelect:u,disabled:d,...m}=e;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,o()({},m,{key:r.id,className:t,isSelected:c,item:r,onSelect:u,isSingle:!0,disabled:d})),c&&i&&Object(n.createElement)("div",{key:"loading",className:l()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(n.createElement)(a.Spinner,null)))}},9:function(e,t){e.exports=window.wp.blocks},90:function(e,t){e.exports=window.wp.wordcount},95:function(e,t){e.exports=window.wp.warning},97:function(e,t,r){"use strict";var c=r(6),o=r.n(c),n=r(0),s=r(1),a=r(8),i=r(37),l=r(101),u=r(11),d=Object(u.createHigherOrderComponent)(e=>{class t extends n.Component{render(){const{selected:t}=this.props,r=null==t;return Array.isArray(t)?Object(n.createElement)(e,this.props):Object(n.createElement)(e,o()({},this.props,{selected:r?[]:[t]}))}}return t.defaultProps={selected:null},t},"withTransformSingleSelectToMultipleSelect"),m=r(190),p=r(24),b=r.n(p),g=r(26),h=r.n(g),w=r(27),O=r(30),j=Object(u.createHigherOrderComponent)(e=>{class t extends n.Component{constructor(){super(...arguments),b()(this,"state",{error:null,loading:!1,variations:{}}),b()(this,"loadVariations",()=>{const{products:e}=this.props,{loading:t,variations:r}=this.state;if(t)return;const c=this.getExpandedProduct();if(!c||r[c])return;const o=e.find(e=>e.id===c);o.variations&&0!==o.variations.length?(this.setState({loading:!0}),Object(w.g)(c).then(e=>{const t=e.map(e=>({...e,parent:c}));this.setState({variations:{...this.state.variations,[c]:t},loading:!1,error:null})}).catch(async e=>{const t=await Object(O.a)(e);this.setState({variations:{...this.state.variations,[c]:null},loading:!1,error:t})})):this.setState({variations:{...this.state.variations,[c]:null},loading:!1,error:null})})}componentDidMount(){const{selected:e,showVariations:t}=this.props;e&&t&&this.loadVariations()}componentDidUpdate(e){const{isLoading:t,selected:r,showVariations:c}=this.props;c&&(!h()(e.selected,r)||e.isLoading&&!t)&&this.loadVariations()}isProductId(e){const{products:t}=this.props;return t.some(t=>t.id===e)}findParentProduct(e){var t;const{products:r}=this.props;return null===(t=r.filter(t=>t.variations&&t.variations.find(t=>{let{id:r}=t;return r===e}))[0])||void 0===t?void 0:t.id}getExpandedProduct(){const{isLoading:e,selected:t,showVariations:r}=this.props;if(!r)return null;let c=t&&t.length?t[0]:null;return c?this.prevSelectedItem=c:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(c=this.prevSelectedItem)),!e&&c?this.isProductId(c)?c:this.findParentProduct(c):null}render(){const{error:t,isLoading:r}=this.props,{error:c,loading:s,variations:a}=this.state;return Object(n.createElement)(e,o()({},this.props,{error:c||t,expandedProduct:this.getExpandedProduct(),isLoading:r,variations:a,variationsLoading:s}))}}return b()(t,"defaultProps",{selected:[],showVariations:!1}),t},"withProductVariations"),f=r(34),E=r(4),_=r.n(E),v=r(82);r(142);const k={list:Object(s.__)("Products","woocommerce"),noItems:Object(s.__)("Your store doesn't have any products.","woocommerce"),search:Object(s.__)("Search for a product to display","woocommerce"),updated:Object(s.__)("Product search results updated.","woocommerce")},y=e=>{let{expandedProduct:t,error:r,instanceId:c,isCompact:u,isLoading:d,onChange:m,onSearch:p,products:b,renderItem:g,selected:h,showVariations:w,variations:O,variationsLoading:j}=e;if(r)return Object(n.createElement)(f.a,{error:r});const E=[...b,...O&&O[t]?O[t]:[]];return Object(n.createElement)(l.a,{className:"woocommerce-products",list:E,isCompact:u,isLoading:d,isSingle:!0,selected:E.filter(e=>{let{id:t}=e;return h.includes(t)}),onChange:m,renderItem:g||(w?e=>{const{item:t,search:r,depth:l=0,isSelected:u,onSelect:m}=e,p=t.variations&&Array.isArray(t.variations)?t.variations.length:0,b=_()("woocommerce-search-product__item","woocommerce-search-list__item","depth-"+l,"has-count",{"is-searching":r.length>0,"is-skip-level":0===l&&0!==t.parent,"is-variable":p>0});if(!t.breadcrumbs.length)return Object(n.createElement)(v.a,o()({},e,{className:_()(b,{"is-selected":u}),isSelected:u,item:t,onSelect:()=>()=>{m(t)()},isLoading:d||j,countLabel:t.variations.length>0?Object(s.sprintf)(
/* translators: %1$d is the number of variations of a product product. */
Object(s.__)("%1$d variations","woocommerce"),t.variations.length):null,name:"products-"+c,"aria-label":Object(s.sprintf)(
/* translators: %1$s is the product name, %2$d is the number of variations of that product. */
Object(s._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",t.variations.length,"woocommerce"),t.name,t.variations.length)}));const g=Object(a.isEmpty)(t.variation)?e:{...e,item:{...e.item,name:t.variation},"aria-label":`${t.breadcrumbs[0]}: ${t.variation}`};return Object(n.createElement)(i.a,o()({},g,{className:b,name:"variations-"+c}))}:null),onSearch:p,messages:k,isHierarchical:!0})};y.defaultProps={isCompact:!1,expandedProduct:null,selected:[],showVariations:!1},t.a=d(Object(m.a)(j(Object(u.withInstanceId)(y))))}});