!function(){"use strict";function c(t){var e=t;return{get:function(){return e},set:function(t){e=t}}}function t(){}function e(){return f}var n=tinymce.util.Tools.resolve("tinymce.PluginManager"),s=tinymce.util.Tools.resolve("tinymce.util.Tools"),i=function(t){return function(){return t}},u=i(!1),a=i(!0),f={fold:function(t,e){return t()},is:u,isSome:u,isNone:a,getOr:l,getOrThunk:o,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:l,orThunk:o,map:e,each:t,bind:e,exists:u,forall:a,filter:e,equals:r,equals_:r,toArray:function(){return[]},toString:i("none()")};function r(t){return t.isNone()}function o(t){return t()}function l(t){return t}function h(t){return!(null==t)}var d,m=function(n){function t(){return o}function e(t){return t(n)}var r=i(n),o={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:a,isNone:u,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:t,orThunk:t,map:function(t){return m(t(n))},each:function(t){t(n)},bind:e,exists:e,forall:e,filter:function(t){return t(n)?o:f},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(u,function(t){return e(n,t)})}};return o},g={some:m,none:e,from:function(t){return null==t?f:m(t)}},p=(d="function",function(t){return typeof t===d});function v(t,e){return b(document.createElement("canvas"),t,e)}function y(t){var e=v(t.width,t.height);return w(e).drawImage(t,0,0),e}function w(t){return t.getContext("2d")}function b(t,e,n){return t.width=e,t.height=n,t}var I,T,_,R=window.Promise||(I=window,T=U.immediateFn||"function"==typeof I.setImmediate&&I.setImmediate||function(t){setTimeout(t,1)},_=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},U.prototype.catch=function(t){return this.then(null,t)},U.prototype.then=function(n,r){var o=this;return new U(function(t,e){x.call(o,new k(n,r,t,e))})},U.all=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var a=Array.prototype.slice.call(1===t.length&&_(t[0])?t[0]:t);return new U(function(o,i){if(0===a.length)return o([]);var u=a.length;for(var t=0;t<a.length;t++)!function e(n,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if("function"==typeof r)return void r.call(t,function(t){e(n,t)},i)}a[n]=t,0==--u&&o(a)}catch(t){i(t)}}(t,a[t])})},U.resolve=function(e){return e&&"object"==typeof e&&e.constructor===U?e:new U(function(t){t(e)})},U.reject=function(n){return new U(function(t,e){e(n)})},U.race=function(o){return new U(function(t,e){for(var n=0,r=o;n<r.length;n++)r[n].then(t,e)})},U);function U(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],C(t,A(E,this),A(L,this))}function A(t,e){return function(){return t.apply(e,arguments)}}function x(n){var r=this;null!==this._state?T(function(){var t,e=r._state?n.onFulfilled:n.onRejected;if(null!==e){try{t=e(r._value)}catch(t){return void n.reject(t)}n.resolve(t)}else(r._state?n.resolve:n.reject)(r._value)}):this._deferreds.push(n)}function E(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var e=t.then;if("function"==typeof e)return void C(A(e,t),A(E,this),A(L,this))}this._state=!0,this._value=t,j.call(this)}catch(t){L.call(this,t)}}function L(t){this._state=!1,this._value=t,j.call(this)}function j(){for(var t=0,e=this._deferreds;t<e.length;t++){var n=e[t];x.call(this,n)}this._deferreds=[]}function k(t,e,n,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=r}function C(t,e,n){var r=!1;try{t(function(t){r||(r=!0,e(t))},function(t){r||(r=!0,n(t))})}catch(t){if(r)return;r=!0,n(t)}}function O(t){var r,t=t.src;return 0===t.indexOf("data:")?S(t):(r=t,new R(function(t,n){var e=new XMLHttpRequest;e.open("GET",r,!0),e.responseType="blob",e.onload=function(){200===this.status&&t(this.response)},e.onerror=function(){var t,e=this;n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+e.status+" downloading image"))},e.send()}))}function P(a){return new R(function(t,e){var n=URL.createObjectURL(a),r=new Image,o=function(){r.removeEventListener("load",i),r.removeEventListener("error",u)};function i(){o(),t(r)}function u(){o(),e("Unable to load data of type "+a.type+": "+n)}r.addEventListener("load",i),r.addEventListener("error",u),r.src=n,r.complete&&i()})}function S(n){return new R(function(t,e){!function(t){var e=t.split(",");if(!(t=/data:([^;]+)/.exec(e[0])))return g.none();for(var t=t[1],e=e[1],n=atob(e),r=n.length,o=Math.ceil(r/1024),i=new Array(o),u=0;u<o;++u){for(var a=1024*u,c=Math.min(1024+a,r),s=new Array(c-a),f=a,l=0;f<c;++l,++f)s[l]=n[f].charCodeAt(0);i[u]=new Uint8Array(s)}return g.some(new Blob(i,{type:t}))}(n).fold(function(){e("uri is not base64: "+n)},t)})}function M(t,r,o){return r=r||"image/png",p(HTMLCanvasElement.prototype.toBlob)?new R(function(e,n){t.toBlob(function(t){t?e(t):n()},r,o)}):S(t.toDataURL(r,o))}function B(t){return P(t).then(function(t){URL.revokeObjectURL(t.src);var e,e=v((e=t).naturalWidth||e.width,(e=t).naturalHeight||e.height);return w(e).drawImage(t,0,0),e})}function N(t,e,n){return function(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}(t,function(t){n=e(n,t)}),n}function D(t,e){return function(t,e,n){for(var r=0,o=t.length;r<o;r++){var i=t[r];if(e(i,r))return g.some(i);if(n(i,r))break}return g.none()}(t,e,u)}var F=P,H=O;function q(t,e,n){var r=e.type;function o(e,n){return t.then(function(t){return t.toDataURL(e||"image/png",n)})}return{getType:i(r),toBlob:function(){return R.resolve(e)},toDataURL:i(n),toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(e,n){return t.then(function(t){return M(t,e,n)})},toAdjustedDataURL:o,toAdjustedBase64:function(t,e){return o(t,e).then(function(t){return t.split(",")[1]})},toCanvas:function(){return t.then(y)}}}function z(e){return n=e,new R(function(t){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(n)}).then(function(t){return q(B(e),e,t)});var n}function $(e,t){return M(e,t).then(function(t){return q(R.resolve(e),t,e.toDataURL())})}function G(e,n){return e.toCanvas().then(function(t){return function(t,e,n){var r=v(t.width,t.height),o=w(r),i=0,u=0;90!==(n=n<0?360+n:n)&&270!==n||b(r,r.height,r.width);90!==n&&180!==n||(i=r.width);270!==n&&180!==n||(u=r.height);return o.translate(i,u),o.rotate(n*Math.PI/180),o.drawImage(t,0,0),$(r,e)}(t,e.getType(),n)})}function J(e,n){return e.toCanvas().then(function(t){return function(t,e,n){var r=v(t.width,t.height),o=w(r);"v"===n?(o.scale(1,-1),o.drawImage(t,0,-r.height)):(o.scale(-1,1),o.drawImage(t,-r.width,0));return $(r,e)}(t,e.getType(),n)})}function K(e,r,o){return void 0===o&&(o=!1),new R(function(t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&t({status:n.status,blob:n.response})},n.open("GET",e,!0),n.withCredentials=o,function(t,e){for(var n=it(t),r=0,o=n.length;r<o;r++){var i=n[r];e(t[i],i)}}(r,function(t,e){n.setRequestHeader(e,t)}),n.responseType="blob",n.send()})}function V(t){var e,t=(e=t,"ImageProxy HTTP error: "+D(ut,function(t){return e===t.code}).fold(i("Unknown ImageProxy error"),function(t){return t.message}));return R.reject(t)}function W(e){return D(at,function(t){return t.type===e}).fold(i("Unknown service error"),function(t){return t.message})}function X(t){return"ImageProxy Service error: "+function(t){try{return g.some(JSON.parse(t))}catch(t){return g.none()}}(t).bind(function(t){return function(t,e){t=N(e,function(t,e){return h(t)?t[e]:void 0},t);return g.from(t)}(t,["error","type"]).map(W)}).getOr("Invalid JSON in service error message")}function Q(t){return r=t,new R(function(t,e){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(t){e(t)},n.readAsText(r)}).then(function(t){t=X(t);return R.reject(t)});var r}function Y(t){return t<200||300<=t}function Z(t,e){var n,r={"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e};return K((n=e,t=-1===(e=t).indexOf("?")?"?":"&",/[?&]apiKey=/.test(e)?e:e+t+"apiKey="+encodeURIComponent(n)),r).then(function(t){return Y(t.status)?(e=t.status,n=t.blob,r=e,"application/json"!==(null==(o=n)?void 0:o.type)||400!==r&&403!==r&&404!==r&&500!==r?V(e):Q(n)):R.resolve(t.blob);var e,n,r,o})}function tt(t,e,n){return void 0===n&&(n=!1),e?Z(t,e):K(t,{},n).then(function(t){return Y(t.status)?V(t.status):R.resolve(t.blob)})}function et(t,e){return n=function(t){return function(t,e){t=t.dom;if(1!==t.nodeType)return!1;if(void 0!==t.matches)return t.matches(e);if(void 0!==t.msMatchesSelector)return t.msMatchesSelector(e);if(void 0!==t.webkitMatchesSelector)return t.webkitMatchesSelector(e);if(void 0!==t.mozMatchesSelector)return t.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")}(t,e)},D(t.dom.childNodes,function(t){return n(ft.fromDom(t))}).map(ft.fromDom);var n}function nt(t){return t.getParam("imagetools_proxy")}var rt=J,ot=G,it=Object.keys,ut=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],at=[{type:"not_found",message:"Failed to load image."},{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],ct=z,st=function(t){if(null==t)throw new Error("Node cannot be null or undefined");return{dom:t}},ft={fromHtml:function(t,e){e=(e||document).createElement("div");if(e.innerHTML=t,!e.hasChildNodes()||1<e.childNodes.length)throw console.error("HTML does not have a single root node",t),new Error("HTML must have a single root node");return st(e.childNodes[0])},fromTag:function(t,e){t=(e||document).createElement(t);return st(t)},fromText:function(t,e){t=(e||document).createTextNode(t);return st(t)},fromDom:st,fromPoint:function(t,e,n){return g.from(t.dom.elementFromPoint(e,n)).map(st)}},lt=("undefined"!=typeof window||Function("return this;")(),tinymce.util.Tools.resolve("tinymce.util.Delay")),dt=tinymce.util.Tools.resolve("tinymce.util.Promise"),mt=tinymce.util.Tools.resolve("tinymce.util.URI");function ht(t){var e,n;function r(t){return/^[0-9\.]+px$/.test(t)}return e=t.style.width,n=t.style.height,e||n?r(e)&&r(n)?{w:parseInt(e,10),h:parseInt(n,10)}:null:(e=t.width,n=t.height,e&&n?{w:parseInt(e,10),h:parseInt(n,10)}:null)}function gt(t){return{w:t.naturalWidth,h:t.naturalHeight}}function pt(t){return et(ft.fromDom(t),"img")}function vt(t,e){return t.dom.is(e,"figure")}function yt(t,e){return t.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")}function wt(e,t){function n(t){return yt(e,t)&&(St(e,t)||Mt(e,t)||h(nt(e)))}return vt(e,t)?pt(t).bind(function(t){return n(t.dom)?g.some(t.dom):g.none()}):n(t)?g.some(t):g.none()}function bt(t,e){t.notificationManager.open({text:e,type:"error"})}function It(t){var e=t.selection.getNode(),n=t.dom.getParent(e,"figure.image");return null!==n&&vt(t,n)?pt(n):yt(t,e)?g.some(ft.fromDom(e)):g.none()}function Tt(t,e,n){return e=e.match(/(?:\/|^)(([^\/\?]+)\.(?:[a-z0-9.]+))(?:\?|$)/i),h(e)?t.dom.encode(e[n]):null}function _t(t,e){if(Mt(t,e))return tt(e.src,null,(n=e,-1!==s.inArray(t.getParam("imagetools_credentials_hosts",[],"string[]"),new mt(n.src).host)));if(St(t,e))return H(e);var n=nt(t),e=n+(-1===n.indexOf("?")?"?":"&")+"url="+encodeURIComponent(e.src),t=t.getParam("api_key",t.getParam("imagetools_api_key","","string"),"string");return tt(e,t,!1)}function Rt(t,e){return g.from(t.getParam("imagetools_fetch_image",null,"function")).fold(function(){return _t(t,e)},function(t){return t(e)})}function Ut(t,e){var n=t.editorUpload.blobCache.getByUri(e.src);return n?dt.resolve(n.blob()):Rt(t,e)}function At(t){lt.clearTimeout(t.get())}function xt(a,c,s,f,l,d,m){return s.toBlob().then(function(t){var e,n,r,o=a.editorUpload.blobCache,i=d.src,u=c.type===t.type;return a.getParam("images_reuse_filename",!1,"boolean")&&(r=o.getByUri(i),n=h(r)?(i=r.uri(),e=r.name(),r.filename()):(e=Tt(a,i,2),Tt(a,i,1))),r=o.create({id:"imagetools"+Pt++,blob:t,base64:s.toBase64(),uri:i,name:e,filename:u?n:void 0}),o.add(r),a.undoManager.transact(function(){a.$(d).on("load",function t(){var e,n,r;a.$(d).off("load",t),a.nodeChanged(),f?a.editorUpload.uploadImagesAuto():(At(l),e=a,n=l,r=lt.setEditorTimeout(e,function(){e.editorUpload.uploadImagesAuto()},e.getParam("images_upload_timeout",3e4,"number")),n.set(r))}),m&&a.$(d).attr({width:m.w,height:m.h}),a.$(d).attr({src:r.blobUri()}).removeAttr("data-mce-src")}),r})}function Et(r,o,t,i){return function(){return It(r).fold(function(){bt(r,"Could not find selected image")},function(n){return r._scanForImages().then(function(){return Ut(r,n.dom)}).then(function(e){return ct(e).then(t).then(function(t){return xt(r,e,t,!1,o,n.dom,i)})}).catch(function(t){bt(r,t)})})}}function Lt(e,n,r){return function(){var t=It(e).fold(function(){return null},function(t){t=ht(t.dom);return t?{w:t.h,h:t.w}:null});return Et(e,n,function(t){return ot(t,r)},t)()}}function jt(t,e,n){return function(){return Et(t,e,function(t){return rt(t,n)})()}}function kt(e,n,i,u,a){return F(a).then(function(t){var e,n,r,o=gt(t);return u.w===o.w&&u.h===o.h||ht(i)&&(e=i,(n=o)&&(r=e.style.width,o=e.style.height,(r||o)&&(e.style.width=n.w+"px",e.style.height=n.h+"px",e.removeAttribute("data-mce-style")),r=e.width,o=e.height,(r||o)&&(e.setAttribute("width",String(n.w)),e.setAttribute("height",String(n.h))))),URL.revokeObjectURL(t.src),a}).then(ct).then(function(t){return xt(e,a,t,!0,n,i)}).catch(function(){})}function Ct(i,u){return function(){var r=It(i),o=r.map(function(t){return gt(t.dom)});r.each(function(e){wt(i,e.dom).each(function(t){Ut(i,e.dom).then(function(t){t={blob:t,url:URL.createObjectURL(t)};i.windowManager.open({title:"Edit Image",size:"large",body:{type:"panel",items:[{type:"imagetools",name:"imagetools",label:"Edit Image",currentState:t}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0,disabled:!0}],onSubmit:function(t){var n=t.getData().imagetools.blob;r.each(function(e){o.each(function(t){kt(i,u,e.dom,t,n)})}),t.close()},onCancel:function(){},onAction:function(t,e){switch(e.name){case"save-state":e.value?t.enable("save"):t.disable("save");break;case"disable":t.disable("save"),t.disable("cancel");break;case"enable":t.enable("cancel")}}})})})})}}function Ot(n){function e(t){return function(){return n.execCommand(t)}}n.ui.registry.addButton("rotateleft",{tooltip:"Rotate counterclockwise",icon:"rotate-left",onAction:e("mceImageRotateLeft")}),n.ui.registry.addButton("rotateright",{tooltip:"Rotate clockwise",icon:"rotate-right",onAction:e("mceImageRotateRight")}),n.ui.registry.addButton("flipv",{tooltip:"Flip vertically",icon:"flip-vertically",onAction:e("mceImageFlipVertical")}),n.ui.registry.addButton("fliph",{tooltip:"Flip horizontally",icon:"flip-horizontally",onAction:e("mceImageFlipHorizontal")}),n.ui.registry.addButton("editimage",{tooltip:"Edit image",icon:"edit-image",onAction:e("mceEditImage"),onSetup:function(e){function t(){var t=It(n).forall(function(t){return wt(n,t.dom).isNone()});e.setDisabled(t)}return n.on("NodeChange",t),function(){n.off("NodeChange",t)}}}),n.ui.registry.addButton("imageoptions",{tooltip:"Image options",icon:"image",onAction:e("mceImage")}),n.ui.registry.addContextMenu("imagetools",{update:function(t){return wt(n,t).fold(function(){return[]},function(t){return[{text:"Edit image",icon:"edit-image",onAction:e("mceEditImage")}]})}})}var Pt=0,St=function(t,e){e=e.src;return 0===e.indexOf("data:")||0===e.indexOf("blob:")||new mt(e).host===t.documentBaseURI.host},Mt=function(t,e){return-1!==s.inArray(t.getParam("imagetools_cors_hosts",[],"string[]"),new mt(e.src).host)};n.add("imagetools",function(t){var n,e,r,o,i,u=c(0),a=c(null);n=t,s.each({mceImageRotateLeft:Lt(n,u,-90),mceImageRotateRight:Lt(n,u,90),mceImageFlipVertical:jt(n,u,"v"),mceImageFlipHorizontal:jt(n,u,"h"),mceEditImage:Ct(n,u)},function(t,e){n.addCommand(e,t)}),Ot(t),(e=t).ui.registry.addContextToolbar("imagetools",{items:e.getParam("imagetools_toolbar","rotateleft rotateright flipv fliph editimage imageoptions"),predicate:function(t){return wt(e,t).isSome()},position:"node",scope:"node"}),o=u,i=a,(r=t).on("NodeChange",function(t){var e=i.get(),t=wt(r,t.element);e&&!t.exists(function(t){return e.src===t.src})&&(At(o),r.editorUpload.uploadImagesAuto(),i.set(null)),t.each(i.set)})})}();