/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransforms-input-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function s(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function l(e,t,o,r){var s,l,u,f,c="modernizr",p=i("div"),d=a();if(parseInt(o,10))for(;o--;)u=i("div"),u.id=r?r[o]:c+(o+1),p.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+c,(d.fake?d:p).appendChild(s),d.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),l=t(p,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?c(r,t||n):r);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(d(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+d(n[r])+":"+o+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,s){function a(){c&&(delete k.style,delete k.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var l=m(e,r);if(!o(l,"undefined"))return l}for(var c,p,d,h,v,y=["modernizr","tspan"];!k.style;)c=!0,k.modElem=i(y.shift()),k.style=k.modElem.style;for(d=e.length,p=0;d>p;p++)if(h=e[p],v=k.style[h],u(h,"-")&&(h=f(h)),k.style[h]!==t){if(s||o(r,"undefined"))return a(),"pfx"==n?h:!0;try{k.style[h]=r}catch(g){}if(k.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+j.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,r,s):(a=(e+" "+N.join(i+" ")+i).split(" "),p(a,n,t))}function y(e,n,o){return v(e,t,t,n,o)}var g=[],C=[],w={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),S=i("input"),b="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),T={};Modernizr.input=function(n){for(var t=0,o=n.length;o>t;t++)T[n[t]]=!!(n[t]in S);return T.list&&(T.list=!(!i("datalist")||!e.HTMLDataListElement)),T}(b);var z=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=z;var E=w.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",z.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");E(o,function(e){t=9===e.offsetTop})}return t});var P="Moz O ms Webkit",j=w._config.usePrefixes?P.split(" "):[];w._cssomPrefixes=j;var N=w._config.usePrefixes?P.toLowerCase().split(" "):[];w._domPrefixes=N;var A={elem:i("modernizr")};Modernizr._q.push(function(){delete A.elem});var k={style:A.elem.style};Modernizr._q.unshift(function(){delete k.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),r(),s(g),delete w.addTest,delete w.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);