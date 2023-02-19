!function(){"use strict";function e(){}function o(e){return function(){return e}}var t=tinymce.util.Tools.resolve("tinymce.PluginManager");function c(e){return e.getParam("template_mdate_classes","mdate")}function u(e){return e.getParam("template_replace_values")}function i(e){return e.getParam("template_mdate_format",e.translate("%Y-%m-%d"))}function l(e,t){if((e=""+e).length<t)for(var n=0;n<t-e.length;n++)e="0"+e;return e}function s(e,t,n){var r="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),a="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),o="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),c="January February March April May June July August September October November December".split(" ");return n=n||new Date,t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%D","%m/%d/%Y")).replace("%r","%I:%M:%S %p")).replace("%Y",""+n.getFullYear())).replace("%y",""+n.getYear())).replace("%m",l(n.getMonth()+1,2))).replace("%d",l(n.getDate(),2))).replace("%H",""+l(n.getHours(),2))).replace("%M",""+l(n.getMinutes(),2))).replace("%S",""+l(n.getSeconds(),2))).replace("%I",""+((n.getHours()+11)%12+1))).replace("%p",n.getHours()<12?"AM":"PM")).replace("%B",""+e.translate(c[n.getMonth()]))).replace("%b",""+e.translate(o[n.getMonth()]))).replace("%A",""+e.translate(a[n.getDay()]))).replace("%a",""+e.translate(r[n.getDay()]))).replace("%%","%")}function n(t,n){return function(){var e=t.getParam("templates");"function"!=typeof e?"string"==typeof e?h.send({url:e,success:function(e){n(JSON.parse(e))}}):n(e):e(n)}}function p(n,e){return v.each(e,function(e,t){"function"==typeof e&&(e=e(t)),n=n.replace(new RegExp("\\{\\$"+t+"\\}","g"),e)}),n}function f(e,t){var r=e.dom,a=u(e);v.each(r.select("*",t),function(n){v.each(a,function(e,t){r.hasClass(n,t)&&"function"==typeof a[t]&&a[t](n)})})}function m(e,t){return new RegExp("\\b"+t+"\\b","g").test(e.className)}function d(t,e,n){var r=t.dom,a=t.selection.getContent();n=p(n,u(t));var o=r.create("div",null,n);(n=r.select(".mceTmpl",o))&&0<n.length&&(o=r.create("div",null)).appendChild(n[0].cloneNode(!0)),v.each(r.select("*",o),function(e){m(e,t.getParam("template_cdate_classes","cdate").replace(/\s+/g,"|"))&&(e.innerHTML=s(t,t.getParam("template_cdate_format",t.translate("%Y-%m-%d")))),m(e,c(t).replace(/\s+/g,"|"))&&(e.innerHTML=s(t,i(t))),m(e,t.getParam("template_selected_content_classes","selcontent").replace(/\s+/g,"|"))&&(e.innerHTML=a)}),f(t,o),t.execCommand("mceInsertContent",!1,o.innerHTML),t.addVisual()}function a(e){e.addCommand("mceInsertTemplate",function(r){for(var a=[],e=1;e<arguments.length;e++)a[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=a.concat(e);return r.apply(null,n)}}(d,e))}function r(){return b}var g=o(!1),y=o(!0),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),h=tinymce.util.Tools.resolve("tinymce.util.XHR"),b={fold:function(e,t){return e()},is:g,isSome:g,isNone:y,getOr:_,getOrThunk:M,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(void 0),or:_,orThunk:M,map:r,each:e,bind:r,exists:g,forall:y,filter:r,equals:T,equals_:T,toArray:function(){return[]},toString:o("none()")};function T(e){return e.isNone()}function M(e){return e()}function _(e){return e}function x(e,t){return function(e,t,n){for(var r=0,a=e.length;r<a;r++){var o=e[r];if(t(o,r))return D.some(o);if(n(o,r))break}return D.none()}(e,t,g)}function O(e){return e.replace(/["'<>&]/g,function(e){return(I(t=k,n=e)?D.from(t[n]):D.none()).getOr(e);var t,n})}function P(m,t){function e(e){return function(e,t){for(var n=e.length,r=new Array(n),a=0;a<n;a++){var o=e[a];r[a]=t(o,a)}return r}(e,function(e){return{text:e.text,value:e.text}})}function u(e,t){return x(e,function(e){return e.text===t})}function i(e){m.windowManager.alert("Could not load the specified template.",function(){return e.focus("template")})}function l(e){return new C(function(t,n){e.value.url.fold(function(){return t(e.value.content.getOr(""))},function(e){return h.send({url:e,success:function(e){t(e)},error:function(e){n(e)}})})})}(function(){if(t&&0!==t.length)return D.from(v.map(t,function(e,t){function n(e){return void 0!==e.url}return{selected:0===t,text:e.title,value:{url:n(e)?D.from(e.url):D.none(),content:n(e)?D.none():D.from(e.content),description:e.description}}}));var e=m.translate("No templates defined.");return m.notificationManager.open({text:e,type:"info"}),D.none()})().each(function(o){function s(e,t){return{title:"Insert Template",size:"large",body:{type:"panel",items:e},initialData:t,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:function(t){var e=t.getData();u(n,e.template).each(function(e){l(e).then(function(e){d(m,0,e),t.close()}).catch(function(){t.disable("save"),i(t)})})},onChange:(r=n=o,a=c,function(n,e){"template"===e.name&&(e=n.getData().template,u(r,e).each(function(t){n.block("Loading..."),l(t).then(function(e){a(n,t,e)}).catch(function(){a(n,t,""),n.disable("save"),i(n)})}))})};var r,a,n}var f=e(o),c=function(e,t,n){var r,a,o,c,u,i=(r=m,-1===(l=n).indexOf("<html>")&&(a="",(c=r.getParam("content_style","","string"))&&(a+='<style type="text/css">'+c+"</style>"),o=r.getParam("content_css_cors",!1,"boolean")?' crossorigin="anonymous"':"",v.each(r.contentCSS,function(e){a+='<link type="text/css" rel="stylesheet" href="'+r.documentBaseURI.toAbsolute(e)+'"'+o+">"}),n=-1===(u=(i=r).getParam("body_class","","string")).indexOf("=")?u:(i=i).getParam("body_class","","hash")[i.id]||"",c=r.dom.encode,u='<script>document.addEventListener && document.addEventListener("click", function(e) {for (var elm = e.target; elm; elm = elm.parentNode) {if (elm.nodeName === "A" && !('+(A.mac?"e.metaKey":"e.ctrlKey && !e.altKey")+")) {e.preventDefault();}}}, false);<\/script> ",i=(i=r.getBody().dir)?' dir="'+c(i)+'"':"",l='<!DOCTYPE html><html><head><base href="'+c(r.documentBaseURI.getURI())+'">'+a+u+'</head><body class="'+c(n)+'"'+i+">"+l+"</body></html>"),p(l,r.getParam("template_preview_replace_values"))),l=[{type:"selectbox",name:"template",label:"Templates",items:f},{type:"htmlpanel",html:'<p aria-live="polite">'+O(t.value.description)+"</p>"},{label:"Preview",type:"iframe",name:"preview",sandboxed:!1}],i={template:t.text,preview:i};e.unblock(),e.redial(s(l,i)),e.focus("template")},t=m.windowManager.open(s([],{template:"",preview:""}));t.block("Loading..."),l(o[0]).then(function(e){c(t,o[0],e)}).catch(function(){c(t,o[0],""),t.disable("save"),i(t)})})}function S(t){return function(e){P(t,e)}}var w=function(n){function e(){return a}function t(e){return e(n)}var r=o(n),a={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:y,isNone:g,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(e){return w(e(n))},each:function(e){e(n)},bind:t,exists:t,forall:t,filter:function(e){return e(n)?a:b},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(g,function(e){return t(n,e)})}};return a},D={some:w,none:r,from:function(e){return null==e?b:w(e)}},A=tinymce.util.Tools.resolve("tinymce.Env"),C=tinymce.util.Tools.resolve("tinymce.util.Promise"),N=Object.hasOwnProperty,I=function(e,t){return N.call(e,t)},k={'"':"&quot;","<":"&lt;",">":"&gt;","&":"&amp;","'":"&#039;"};t.add("template",function(e){var t,r;(t=e).ui.registry.addButton("template",{icon:"template",tooltip:"Insert template",onAction:n(t,S(t))}),t.ui.registry.addMenuItem("template",{icon:"template",text:"Insert template...",onAction:n(t,S(t))}),a(e),(r=e).on("PreProcess",function(e){var t=r.dom,n=i(r);v.each(t.select("div",e.node),function(e){t.hasClass(e,"mceTmpl")&&(v.each(t.select("*",e),function(e){t.hasClass(e,c(r).replace(/\s+/g,"|"))&&(e.innerHTML=s(r,n))}),f(r,e))})})})}();