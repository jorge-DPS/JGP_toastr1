!function(){"use strict";function i(e){return e.getParam("pagebreak_split_block",!1)}function g(){return"mce-pagebreak"}function m(){return'<img src="'+a.transparentSrc+'" class="'+g()+'" data-mce-resize="false" data-mce-placeholder />'}var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),a=tinymce.util.Tools.resolve("tinymce.Env");e.add("pagebreak",function(e){var a,n,r,o,t,c;(a=e).addCommand("mcePageBreak",function(){i(a)?a.insertContent("<p>"+m()+"</p>"):a.insertContent(m())}),(n=e).ui.registry.addButton("pagebreak",{icon:"page-break",tooltip:"Page break",onAction:function(){return n.execCommand("mcePageBreak")}}),n.ui.registry.addMenuItem("pagebreak",{text:"Page break",icon:"page-break",onAction:function(){return n.execCommand("mcePageBreak")}}),o=(r=e).getParam("pagebreak_separator","\x3c!-- pagebreak --\x3e"),t=new RegExp(o.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,function(e){return"\\"+e}),"gi"),r.on("BeforeSetContent",function(e){e.content=e.content.replace(t,m())}),r.on("PreInit",function(){r.serializer.addNodeFilter("img",function(e){for(var a,n,t=e.length;t--;)(n=(a=e[t]).attr("class"))&&-1!==n.indexOf("mce-pagebreak")&&(n=a.parent,r.schema.getBlockElements()[n.name]&&i(r)?(n.type=3,n.value=o,n.raw=!0,a.remove()):(a.type=3,a.value=o,a.raw=!0))})}),(c=e).on("ResolveName",function(e){"IMG"===e.target.nodeName&&c.dom.hasClass(e.target,g())&&(e.name="pagebreak")})})}();