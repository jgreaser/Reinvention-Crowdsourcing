/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);


/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);

/*!
 * VERSION: 0.9.7
 * DATE: 2014-11-14
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.ThrowPropsPlugin",["plugins.TweenPlugin","TweenLite","easing.Ease","utils.VelocityTracker"],function(t,e,i,r){var s,n,o,a,l=function(){t.call(this,"throwProps"),this._overwriteProps.length=0},h=999999999999999,u=1e-10,p=_gsScope._gsDefine.globals,f=!1,c={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},_=function(t,e,i,r){for(var s,n,o=e.length,a=0,l=h;--o>-1;)s=e[o],n=s-t,0>n&&(n=-n),l>n&&s>=r&&i>=s&&(a=o,l=n);return e[a]},d=function(t,e,i,r){if("auto"===t.end)return t;i=isNaN(i)?h:i,r=isNaN(r)?-h:r;var s="function"==typeof t.end?t.end(e):t.end instanceof Array?_(e,t.end,i,r):Number(t.end);return s>i?s=i:r>s&&(s=r),{max:s,min:s,unitFactor:t.unitFactor}},g=function(t,e,i){for(var r in e)void 0===t[r]&&r!==i&&(t[r]=e[r]);return t},m=l.calculateChange=function(t,r,s,n){null==n&&(n=.05);var o=r instanceof i?r:r?new i(r):e.defaultEase;return s*n*t/o.getRatio(n)},v=l.calculateDuration=function(t,r,s,n,o){o=o||.05;var a=n instanceof i?n:n?new i(n):e.defaultEase;return Math.abs((r-t)*a.getRatio(o)/s/o)},y=l.calculateTweenDuration=function(t,s,n,o,a,h){if("string"==typeof t&&(t=e.selector(t)),!t)return 0;null==n&&(n=10),null==o&&(o=.2),null==a&&(a=1),t.length&&(t=t[0]||t);var p,c,_,y,x,w,T,b,P,S,k=0,C=9999999999,R=s.throwProps||s,O=s.ease instanceof i?s.ease:s.ease?new i(s.ease):e.defaultEase,A=isNaN(R.checkpoint)?.05:Number(R.checkpoint),D=isNaN(R.resistance)?l.defaultResistance:Number(R.resistance);for(p in R)"resistance"!==p&&"checkpoint"!==p&&"preventOvershoot"!==p&&(c=R[p],"object"!=typeof c&&(P=P||r.getByTarget(t),P&&P.isTrackingProp(p)?c="number"==typeof c?{velocity:c}:{velocity:P.getVelocity(p)}:(y=Number(c)||0,_=y*D>0?y/D:y/-D)),"object"==typeof c&&(void 0!==c.velocity&&"number"==typeof c.velocity?y=Number(c.velocity)||0:(P=P||r.getByTarget(t),y=P&&P.isTrackingProp(p)?P.getVelocity(p):0),x=isNaN(c.resistance)?D:Number(c.resistance),_=y*x>0?y/x:y/-x,w="function"==typeof t[p]?t[p.indexOf("set")||"function"!=typeof t["get"+p.substr(3)]?p:"get"+p.substr(3)]():t[p]||0,T=w+m(y,O,_,A),void 0!==c.end&&(c=d(c,T,c.max,c.min),(h||f)&&(R[p]=g(c,R[p],"end"))),void 0!==c.max&&T>Number(c.max)+u?(S=c.unitFactor||l.defaultUnitFactors[p]||1,b=w>c.max&&c.min!==c.max||y*S>-15&&45>y*S?o+.1*(n-o):v(w,c.max,y,O,A),C>b+a&&(C=b+a)):void 0!==c.min&&Number(c.min)-u>T&&(S=c.unitFactor||l.defaultUnitFactors[p]||1,b=c.min>w&&c.min!==c.max||y*S>-45&&15>y*S?o+.1*(n-o):v(w,c.min,y,O,A),C>b+a&&(C=b+a)),b>k&&(k=b)),_>k&&(k=_));return k>C&&(k=C),k>n?n:o>k?o:k},x=l.prototype=new t("throwProps");return x.constructor=l,l.version="0.9.7",l.API=2,l._autoCSS=!0,l.defaultResistance=100,l.defaultUnitFactors={time:1e3,totalTime:1e3},l.track=function(t,e,i){return r.track(t,e,i)},l.untrack=function(t,e){r.untrack(t,e)},l.isTracking=function(t,e){return r.isTracking(t,e)},l.getVelocity=function(t,e){var i=r.getByTarget(t);return i?i.getVelocity(e):0/0},l._cssRegister=function(){var t=p.com.greensock.plugins.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,o=e._setPluginRatio,a=e.CSSPropTween;e._registerComplexSpecialProp("throwProps",{parser:function(t,e,h,u,p,f){f=new l;var _,d,g,m,v,y={},x={},w={},T={},b={},P={};n={};for(g in e)"resistance"!==g&&"preventOvershoot"!==g&&(d=e[g],"object"==typeof d?(void 0!==d.velocity&&"number"==typeof d.velocity?y[g]=Number(d.velocity)||0:(v=v||r.getByTarget(t),y[g]=v&&v.isTrackingProp(g)?v.getVelocity(g):0),void 0!==d.end&&(T[g]=d.end),void 0!==d.min&&(x[g]=d.min),void 0!==d.max&&(w[g]=d.max),d.preventOvershoot&&(P[g]=!0),void 0!==d.resistance&&(_=!0,b[g]=d.resistance)):"number"==typeof d?y[g]=d:(v=v||r.getByTarget(t),y[g]=v&&v.isTrackingProp(g)?v.getVelocity(g):d||0),c[g]&&u._enableTransforms(2===c[g]));m=i(t,y,u,p,f),s=m.proxy,y=m.end;for(g in s)n[g]={velocity:y[g],min:x[g],max:w[g],end:T[g],resistance:b[g],preventOvershoot:P[g]};return null!=e.resistance&&(n.resistance=e.resistance),e.preventOvershoot&&(n.preventOvershoot=!0),p=new a(t,"throwProps",0,0,m.pt,2),p.plugin=f,p.setRatio=o,p.data=m,f._onInitTween(s,n,u._tween),p}})}},l.to=function(t,i,r,l,h){i.throwProps||(i={throwProps:i}),0===h&&(i.throwProps.preventOvershoot=!0),f=!0;var u=new e(t,1,i);return u.render(0,!0,!0),u.vars.css?(u.duration(y(s,{throwProps:n,ease:i.ease},r,l,h)),u._delay&&!u.vars.immediateRender?u.invalidate():o._onInitTween(s,a,u),f=!1,u):(u.kill(),u=new e(t,y(t,i,r,l,h),i),f=!1,u)},x._onInitTween=function(t,e,i){this.target=t,this._props=[],o=this,a=e;var s,n,l,h,u,p,c,_,v,y=i._ease,x=isNaN(e.checkpoint)?.05:Number(e.checkpoint),w=i._duration,T=e.preventOvershoot,b=0;for(s in e)if("resistance"!==s&&"checkpoint"!==s&&"preventOvershoot"!==s){if(n=e[s],"number"==typeof n)u=Number(n)||0;else if("object"!=typeof n||isNaN(n.velocity)){if(v=v||r.getByTarget(t),!v||!v.isTrackingProp(s))throw"ERROR: No velocity was defined in the throwProps tween of "+t+" property: "+s;u=v.getVelocity(s)}else u=Number(n.velocity);p=m(u,y,w,x),_=0,h="function"==typeof t[s],l=h?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():t[s],"object"==typeof n&&(c=l+p,void 0!==n.end&&(n=d(n,c,n.max,n.min),f&&(e[s]=g(n,e[s],"end"))),void 0!==n.max&&c>Number(n.max)?T||n.preventOvershoot?p=n.max-l:_=n.max-l-p:void 0!==n.min&&Number(n.min)>c&&(T||n.preventOvershoot?p=n.min-l:_=n.min-l-p)),this._props[b++]={p:s,s:l,c1:p,c2:_,f:h,r:!1},this._overwriteProps[b]=s}return!0},x._kill=function(e){for(var i=this._props.length;--i>-1;)null!=e[this._props[i].p]&&this._props.splice(i,1);return t.prototype._kill.call(this,e)},x._roundProps=function(t,e){for(var i=this._props,r=i.length;--r>-1;)(t[i[r]]||t.throwProps)&&(i[r].r=e)},x.setRatio=function(t){for(var e,i,r=this._props.length;--r>-1;)e=this._props[r],i=e.s+e.c1*t+e.c2*t*t,e.r&&(i=Math.round(i)),e.f?this.target[e.p](i):this.target[e.p]=i},t.activate([l]),l},!0),_gsScope._gsDefine("utils.VelocityTracker",["TweenLite"],function(t){var e,i,r,s,n=/([A-Z])/g,o={},a={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},l=document.defaultView?document.defaultView.getComputedStyle:function(){},h=function(t,e,i){var r=(t._gsTransform||o)[e];return r||0===r?r:(t.style[e]?r=t.style[e]:(i=i||l(t,null))?r=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(n,"-$1").toLowerCase()):t.currentStyle&&(r=t.currentStyle[e]),parseFloat(r)||0)},u=t.ticker,p=function(t,e,i){this.p=t,this.f=e,this.v1=this.v2=0,this.t1=this.t2=u.time,this.css=!1,this.type="",this._prev=null,i&&(this._next=i,i._prev=this)},f=function(){var t,i,n=e,o=u.time;if(o-r>=.03)for(s=r,r=o;n;){for(i=n._firstVP;i;)t=i.css?h(n.target,i.p):i.f?n.target[i.p]():n.target[i.p],(t!==i.v1||o-i.t1>.15)&&(i.v2=i.v1,i.v1=t,i.t2=i.t1,i.t1=o),i=i._next;n=n._next}},c=function(t){this._lookup={},this.target=t,this.elem=t.style&&t.nodeType?!0:!1,i||(u.addEventListener("tick",f,null,!1,-100),r=s=u.time,i=!0),e&&(this._next=e,e._prev=this),e=this},_=c.getByTarget=function(t){for(var i=e;i;){if(i.target===t)return i;i=i._next}},d=c.prototype;return d.addProp=function(e,i){if(!this._lookup[e]){var r=this.target,s="function"==typeof r[e],n=s?this._altProp(e):e,o=this._firstVP;this._firstVP=this._lookup[e]=this._lookup[n]=o=new p(n!==e&&0===e.indexOf("set")?n:e,s,o),o.css=this.elem&&(void 0!==this.target.style[o.p]||a[o.p]),o.css&&a[o.p]&&!r._gsTransform&&t.set(r,{x:"+=0"}),o.type=i||o.css&&0===e.indexOf("rotation")?"deg":"",o.v1=o.v2=o.css?h(r,o.p):s?r[o.p]():r[o.p]}},d.removeProp=function(t){var e=this._lookup[t];e&&(e._prev?e._prev._next=e._next:e===this._firstVP&&(this._firstVP=e._next),e._next&&(e._next._prev=e._prev),this._lookup[t]=0,e.f&&(this._lookup[this._altProp(t)]=0))},d.isTrackingProp=function(t){return this._lookup[t]instanceof p},d.getVelocity=function(t){var e,i,r,s=this._lookup[t],n=this.target;if(!s)throw"The velocity of "+t+" is not being tracked.";return e=s.css?h(n,s.p):s.f?n[s.p]():n[s.p],i=e-s.v2,("rad"===s.type||"deg"===s.type)&&(r="rad"===s.type?2*Math.PI:360,i%=r,i!==i%(r/2)&&(i=0>i?i+r:i-r)),i/(u.time-s.t2)},d._altProp=function(t){var e=t.substr(0,3),i=("get"===e?"set":"set"===e?"get":e)+t.substr(3);return"function"==typeof this.target[i]?i:t},c.getByTarget=function(i){var r=e;for("string"==typeof i&&(i=t.selector(i)),i.length&&i!==window&&i[0]&&i[0].style&&!i.nodeType&&(i=i[0]);r;){if(r.target===i)return r;r=r._next}},c.track=function(t,e,i){var r=_(t),s=e.split(","),n=s.length;for(i=(i||"").split(","),r||(r=new c(t));--n>-1;)r.addProp(s[n],i[n]||i[0]);return r},c.untrack=function(t,i){var r=_(t),s=(i||"").split(","),n=s.length;if(r){for(;--n>-1;)r.removeProp(s[n]);r._firstVP&&i||(r._prev?r._prev._next=r._next:r===e&&(e=r._next),r._next&&(r._next._prev=r._prev))}},c.isTracking=function(t,e){var i=_(t);return i?!e&&i._firstVP?!0:i.isTrackingProp(e):!1},c},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("ThrowPropsPlugin");

/*!
 * VERSION: 0.10.8
 * DATE: 2014-11-14
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.11.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://www.greensock.com/club/).
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite"],function(t,e){var i,s,r,n,a,o={css:{}},h={css:{}},l={css:{}},u={css:{}},_=_gsScope._gsDefine.globals,c={},f=document,p=f.documentElement||{},d=[],m=function(){return!1},g=180/Math.PI,v=999999999999999,y=Date.now||function(){return(new Date).getTime()},T=!f.addEventListener&&f.all,w=[],x={},b=0,P=/^(?:a|input|textarea|button|select)$/i,S=0,C=0,k=function(t){if("string"==typeof t&&(t=e.selector(t)),!t||t.nodeType)return[t];var i,s=[],r=t.length;for(i=0;i!==r;s.push(t[i++]));return s},R=function(){for(var t=w.length;--t>-1;)w[t]()},A=function(t){w.push(t),1===w.length&&e.ticker.addEventListener("tick",R,this,!1,1)},D=function(t){for(var i=w.length;--i>-1;)w[i]===t&&w.splice(i,1);e.to(O,0,{overwrite:"all",delay:15,onComplete:O})},O=function(){w.length||e.ticker.removeEventListener("tick",R)},M=function(t,e){var i;for(i in e)void 0===t[i]&&(t[i]=e[i]);return t},L=function(){return null!=window.pageYOffset?window.pageYOffset:null!=f.scrollTop?f.scrollTop:p.scrollTop||f.body.scrollTop||0},N=function(){return null!=window.pageXOffset?window.pageXOffset:null!=f.scrollLeft?f.scrollLeft:p.scrollLeft||f.body.scrollLeft||0},E=function(t,e){return t=t||window.event,c.pageX=t.clientX+f.body.scrollLeft+p.scrollLeft,c.pageY=t.clientY+f.body.scrollTop+p.scrollTop,e&&(t.returnValue=!1),c},I=function(t){return t?("string"==typeof t&&(t=e.selector(t)),t.length&&t!==window&&t[0]&&t[0].style&&!t.nodeType&&(t=t[0]),t===window||t.nodeType&&t.style?t:null):t},z=function(t,e){var s,r,n,a=t.style;if(void 0===a[e]){for(n=["O","Moz","ms","Ms","Webkit"],r=5,s=e.charAt(0).toUpperCase()+e.substr(1);--r>-1&&void 0===a[n[r]+s];);if(0>r)return"";i=3===r?"ms":n[r],e=i+s}return e},F=function(t,e,i){var s=t.style;s&&(void 0===s[e]&&(e=z(t,e)),null==i?s.removeProperty?s.removeProperty(e.replace(/([A-Z])/g,"-$1").toLowerCase()):s.removeAttribute(e):void 0!==s[e]&&(s[e]=i))},X=f.defaultView?f.defaultView.getComputedStyle:m,U=/(?:Left|Right|Width)/i,Y=/(?:\d|\-|\+|=|#|\.)*/g,B=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=U.test(e),o=t,h=H.style,l=0>i;return l&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(h.cssText="border:0 solid red;position:"+W(t,"position",!0)+";line-height:0;","%"!==s&&o.appendChild?h[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||f.body,h[a?"width":"height"]=i+s),o.appendChild(H),n=parseFloat(H[a?"offsetWidth":"offsetHeight"]),o.removeChild(H),0!==n||r||(n=B(t,e,i,s,!0))),l?-n:n},j=function(t,e){if("absolute"!==W(t,"position",!0))return 0;var i="left"===e?"Left":"Top",s=W(t,"margin"+i,!0);return t["offset"+i]-(B(t,e,parseFloat(s),s.replace(Y,""))||0)},W=function(t,e,i){var s,r=(t._gsTransform||{})[e];return r||0===r?r:(t.style[e]?r=t.style[e]:(s=X(t))?(r=s.getPropertyValue(e.replace(/([A-Z])/g,"-$1").toLowerCase()),r=r||s.length?r:s[e]):t.currentStyle&&(r=t.currentStyle[e]),"auto"!==r||"top"!==e&&"left"!==e||(r=j(t,e)),i?r:parseFloat(r)||0)},q=function(t,e,i){var s=t.vars,r=s[i],n=t._listeners[e];"function"==typeof r&&r.apply(s[i+"Scope"]||t,s[i+"Params"]||[t.pointerEvent]),n&&t.dispatchEvent(e)},V=function(t,e){var i,s,r,n=I(t);return n?oe(n,e):void 0!==t.left?(r=ie(e),{left:t.left-r.x,top:t.top-r.y,width:t.width,height:t.height}):(s=t.min||t.minX||t.minRotation||0,i=t.min||t.minY||0,{left:s,top:i,width:(t.max||t.maxX||t.maxRotation||0)-s,height:(t.max||t.maxY||0)-i})},H=f.createElement("div"),G=""!==z(H,"perspective"),Q=z(H,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),Z=z(H,"transform"),$=Z.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),K={},J={},te=function(){if(!T){var t="http://www.w3.org/2000/svg",e=f.createElementNS(t,"svg"),i=f.createElementNS(t,"rect");return i.setAttributeNS(null,"width","10"),i.setAttributeNS(null,"height","10"),e.appendChild(i),e}}(),ee=function(t){if(!t.getBoundingClientRect||!t.parentNode)return{offsetTop:0,offsetLeft:0,offsetParent:p};for(var e,i,s,r=t,n=t.style.cssText;!r.offsetParent&&r.parentNode;)r=r.parentNode;return t.parentNode.insertBefore(te,t),t.parentNode.removeChild(t),te.style.cssText=n,te.style[Z]="none",te.setAttribute("class",t.getAttribute("class")),e=te.getBoundingClientRect(),s=r.offsetParent,s?(s===f.body&&p&&(s=p),i=s.getBoundingClientRect()):i={top:-L(),left:-N()},te.parentNode.insertBefore(t,te),t.parentNode.removeChild(te),{offsetLeft:e.left-i.left,offsetTop:e.top-i.top,offsetParent:r.offsetParent||p}},ie=function(t,e){if(e=e||{},!t||t===p||!t.parentNode)return{x:0,y:0};var i=X(t),s=Q&&i?i.getPropertyValue(Q):"50% 50%",r=s.split(" "),n=-1!==s.indexOf("left")?"0%":-1!==s.indexOf("right")?"100%":r[0],a=-1!==s.indexOf("top")?"0%":-1!==s.indexOf("bottom")?"100%":r[1];return("center"===a||null==a)&&(a="50%"),("center"===n||isNaN(parseFloat(n)))&&(n="50%"),e.x=-1!==n.indexOf("%")?t.offsetWidth*parseFloat(n)/100:parseFloat(n),e.y=-1!==a.indexOf("%")?t.offsetHeight*parseFloat(a)/100:parseFloat(a),e},se=function(t,e,i){var s,r,a,o,h,l;return t!==window&&t&&t.parentNode?(s=X(t),r=s?s.getPropertyValue($):t.currentStyle?t.currentStyle[Z]:"1,0,0,1,0,0",r=(r+"").match(/(?:\-|\b)[\d\-\.e]+\b/g)||[1,0,0,1,0,0],r.length>6&&(r=[r[0],r[1],r[4],r[5],r[12],r[13]]),e&&(a=t.parentNode,l=void 0===t.offsetLeft&&"svg"===t.nodeName.toLowerCase()?ee(t):t,o=l.offsetParent,h=a===p||a===f.body,void 0===n&&f.body&&Z&&(n=function(){var t,e,i=f.createElement("div"),s=f.createElement("div");return s.style.position="absolute",f.body.appendChild(i),i.appendChild(s),t=s.offsetParent,i.style[Z]="rotate(1deg)",e=s.offsetParent===t,f.body.removeChild(i),e}()),r[4]=Number(r[4])+e.x+(l.offsetLeft||0)-i.x-(h?0:a.scrollLeft)+(o?parseInt(W(o,"borderLeftWidth"),10)||0:0),r[5]=Number(r[5])+e.y+(l.offsetTop||0)-i.y-(h?0:a.scrollTop)+(o?parseInt(W(o,"borderTopWidth"),10)||0:0),!a||a.offsetParent!==o||n&&"100100"!==se(a).join("")||(r[4]-=a.offsetLeft||0,r[5]-=a.offsetTop||0),a&&"fixed"===W(t,"position",!0)&&(r[4]+=N(),r[5]+=L())),r):[1,0,0,1,0,0]},re=function(t,e){if(!t||t===window||!t.parentNode)return[1,0,0,1,0,0];for(var i,s,r,n,a,o,h,l,u=ie(t,K),_=ie(t.parentNode,J),c=se(t,u,_);(t=t.parentNode)&&t.parentNode&&t!==p;)u=_,_=ie(t.parentNode,u===K?J:K),h=se(t,u,_),i=c[0],s=c[1],r=c[2],n=c[3],a=c[4],o=c[5],c[0]=i*h[0]+s*h[2],c[1]=i*h[1]+s*h[3],c[2]=r*h[0]+n*h[2],c[3]=r*h[1]+n*h[3],c[4]=a*h[0]+o*h[2]+h[4],c[5]=a*h[1]+o*h[3]+h[5];return e&&(i=c[0],s=c[1],r=c[2],n=c[3],a=c[4],o=c[5],l=i*n-s*r,c[0]=n/l,c[1]=-s/l,c[2]=-r/l,c[3]=i/l,c[4]=(r*o-n*a)/l,c[5]=-(i*o-s*a)/l),c},ne=function(t,e,i){var s=re(t),r=e.x,n=e.y;return i=i===!0?e:i||{},i.x=r*s[0]+n*s[2]+s[4],i.y=r*s[1]+n*s[3]+s[5],i},ae=function(t,e,i){var s=t.x*e[0]+t.y*e[2]+e[4],r=t.x*e[1]+t.y*e[3]+e[5];return t.x=s*i[0]+r*i[2]+i[4],t.y=s*i[1]+r*i[3]+i[5],t},oe=function(t,e){var i,s,r,n,a,o,h,l,u,_,c;return t===window?(n=L(),s=N(),r=s+(p.clientWidth||t.innerWidth||f.body.clientWidth||0),a=n+((t.innerHeight||0)-20<p.clientHeight?p.clientHeight:t.innerHeight||f.body.clientHeight||0)):(i=ie(t),s=-i.x,r=s+t.offsetWidth,n=-i.y,a=n+t.offsetHeight),t===e?{left:s,top:n,width:r-s,height:a-n}:(o=re(t),h=re(e,!0),l=ae({x:s,y:n},o,h),u=ae({x:r,y:n},o,h),_=ae({x:r,y:a},o,h),c=ae({x:s,y:a},o,h),s=Math.min(l.x,u.x,_.x,c.x),n=Math.min(l.y,u.y,_.y,c.y),{left:s,top:n,width:Math.max(l.x,u.x,_.x,c.x)-s,height:Math.max(l.y,u.y,_.y,c.y)-n})},he=function(t){return t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},le=function(t){var e,i,s,r=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],he(i))for(s=i.length,s=0;i.length>s;s++)r.push(i[s]);else r.push(i);return r},ue="ontouchstart"in p&&"orientation"in window,_e=function(t){for(var e=t.split(","),i=(void 0!==H.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==H.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":t).split(","),s={},r=8;--r>-1;)s[e[r]]=i[r],s[i[r]]=e[r];return s}("touchstart,touchmove,touchend,touchcancel"),ce=function(t,e,i){t.addEventListener?t.addEventListener(_e[e]||e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)},fe=function(t,e,i){t.removeEventListener?t.removeEventListener(_e[e]||e,i):t.detachEvent&&t.detachEvent("on"+e,i)},pe=function(t){s=t.touches&&t.touches.length>S,fe(t.target,"touchend",pe)},de=function(t){s=t.touches&&t.touches.length>S,ce(t.target,"touchend",pe)},me=function(t,e,i,s,r,n){var a,o,h,l={};if(e)if(1!==r&&e instanceof Array)for(l.end=a=[],h=e.length,o=0;h>o;o++)a[o]=e[o]*r;else l.end="function"==typeof e?function(i){return e.call(t,i)*r}:e;return(i||0===i)&&(l.max=i),(s||0===s)&&(l.min=s),n&&(l.velocity=0),l},ge=function(t){var e;return t&&t.getAttribute&&"BODY"!==t.nodeName?"true"===(e=t.getAttribute("data-clickable"))||"false"!==e&&(t.onclick||P.test(t.nodeName+""))?!0:ge(t.parentNode):!1},ve=function(){var t,e=f.createElement("div"),i=f.createElement("div"),s=i.style,r=f.body||H;return s.display="inline-block",s.position="relative",e.style.cssText=i.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",e.appendChild(i),r.appendChild(e),a=i.offsetHeight+18>e.scrollHeight,s.width="100%",Z||(s.paddingRight="500px",t=e.scrollLeft=e.scrollWidth-e.clientWidth,s.left="-90px",t=t!==e.scrollLeft),r.removeChild(e),t}(),ye=function(t,i){t=I(t),i=i||{};var s,r,n,o,h,l,u=f.createElement("div"),_=u.style,c=t.firstChild,p=0,d=0,m=t.scrollTop,g=t.scrollLeft,v=t.scrollWidth,y=t.scrollHeight,w=0,x=0,b=0;G&&i.force3D!==!1?(h="translate3d(",l="px,0px)"):Z&&(h="translate(",l="px)"),this.scrollTop=function(t,e){return arguments.length?(this.top(-t,e),void 0):-this.top()},this.scrollLeft=function(t,e){return arguments.length?(this.left(-t,e),void 0):-this.left()},this.left=function(s,r){if(!arguments.length)return-(t.scrollLeft+d);var n=t.scrollLeft-g,a=d;return(n>2||-2>n)&&!r?(g=t.scrollLeft,e.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-g),i.onKill&&i.onKill(),void 0):(s=-s,0>s?(d=0|s-.5,s=0):s>x?(d=0|s-x,s=x):d=0,(d||a)&&(h?this._suspendTransforms||(_[Z]=h+-d+"px,"+-p+l):_.left=-d+"px",ve&&d+w>=0&&(_.paddingRight=d+w+"px")),t.scrollLeft=0|s,g=t.scrollLeft,void 0)},this.top=function(s,r){if(!arguments.length)return-(t.scrollTop+p);var n=t.scrollTop-m,a=p;return(n>2||-2>n)&&!r?(m=t.scrollTop,e.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-m),i.onKill&&i.onKill(),void 0):(s=-s,0>s?(p=0|s-.5,s=0):s>b?(p=0|s-b,s=b):p=0,(p||a)&&(h?this._suspendTransforms||(_[Z]=h+-d+"px,"+-p+l):_.top=-p+"px"),t.scrollTop=0|s,m=t.scrollTop,void 0)},this.maxScrollTop=function(){return b},this.maxScrollLeft=function(){return x},this.disable=function(){for(c=u.firstChild;c;)o=c.nextSibling,t.appendChild(c),c=o;t===u.parentNode&&t.removeChild(u)},this.enable=function(){if(c=t.firstChild,c!==u){for(;c;)o=c.nextSibling,u.appendChild(c),c=o;t.appendChild(u),this.calibrate()}},this.calibrate=function(e){var i,o,h=t.clientWidth===s;m=t.scrollTop,g=t.scrollLeft,(!h||t.clientHeight!==r||u.offsetHeight!==n||v!==t.scrollWidth||y!==t.scrollHeight||e)&&((p||d)&&(i=this.left(),o=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),(!h||e)&&(_.display="block",_.width="auto",_.paddingRight="0px",w=Math.max(0,t.scrollWidth-t.clientWidth),w&&(w+=W(t,"paddingLeft")+(a?W(t,"paddingRight"):0))),_.display="inline-block",_.position="relative",_.overflow="visible",_.width="100%",_.paddingRight=w+"px",a&&(_.paddingBottom=W(t,"paddingBottom",!0)),T&&(_.zoom="1"),s=t.clientWidth,r=t.clientHeight,v=t.scrollWidth,y=t.scrollHeight,x=t.scrollWidth-s,b=t.scrollHeight-r,n=u.offsetHeight,(i||o)&&(this.left(i),this.top(o)))},this.content=u,this.element=t,this._suspendTransforms=!1,this.enable()},Te=function(i,n){t.call(this,i),i=I(i),r||(r=_.com.greensock.plugins.ThrowPropsPlugin),this.vars=n=n||{},this.target=i,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(n.dragResistance)||0,this.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,this.lockAxis=n.lockAxis;var a,c,p,w,P,R,O,L,N,z,X,U,Y,B,j,H,G,Q,Z,$,K,J,te,ee,ie,se,ae=(n.type||(T?"top,left":"x,y")).toLowerCase(),oe=-1!==ae.indexOf("x")||-1!==ae.indexOf("y"),he=-1!==ae.indexOf("rotation"),le=oe?"x":"left",pe=oe?"y":"top",ve=-1!==ae.indexOf("x")||-1!==ae.indexOf("left")||"scroll"===ae,we=-1!==ae.indexOf("y")||-1!==ae.indexOf("top")||"scroll"===ae,xe=this,be=k(n.trigger||n.handle||i),Pe={},Se=0,Ce=function(t){if(Q){var s=xe.x,r=xe.y,n=1e-6;n>s&&s>-n&&(s=0),n>r&&r>-n&&(r=0),he?(B.rotation=xe.rotation=xe.x,e.set(i,Y)):c?(we&&c.top(r),ve&&c.left(s)):oe?(we&&(B.y=r),ve&&(B.x=s),e.set(i,Y)):(we&&(i.style.top=r+"px"),ve&&(i.style.left=s+"px")),L&&!t&&q(xe,"drag","onDrag")}Q=!1},ke=function(t,s){var r;oe?(i._gsTransform||e.set(i,{x:"+=0"}),xe.y=i._gsTransform.y,xe.x=i._gsTransform.x):he?(i._gsTransform||e.set(i,{x:"+=0"}),xe.x=xe.rotation=i._gsTransform.rotation):c?(xe.y=c.top(),xe.x=c.left()):(xe.y=parseInt(i.style.top,10)||0,xe.x=parseInt(i.style.left,10)||0),!$&&!K||s||($&&(r=$(xe.x),r!==xe.x&&(xe.x=r,he&&(xe.rotation=r),Q=!0)),K&&(r=K(xe.y),r!==xe.y&&(xe.y=r,Q=!0)),Q&&Ce(!0)),n.onThrowUpdate&&!t&&n.onThrowUpdate.apply(n.onThrowUpdateScope||xe,n.onThrowUpdateParams||d)},Re=function(){var t,e,s,r;O=!1,c?(c.calibrate(),xe.minX=z=-c.maxScrollLeft(),xe.minY=U=-c.maxScrollTop(),xe.maxX=N=xe.maxY=X=0,O=!0):n.bounds&&(t=V(n.bounds,i.parentNode),he?(xe.minX=z=t.left,xe.maxX=N=t.left+t.width,xe.minY=U=xe.maxY=X=0):void 0!==n.bounds.maxX||void 0!==n.bounds.maxY?(t=n.bounds,xe.minX=z=t.minX,xe.minY=U=t.minY,xe.maxX=N=t.maxX,xe.maxY=X=t.maxY):(e=V(i,i.parentNode),xe.minX=z=W(i,le)+t.left-e.left,xe.minY=U=W(i,pe)+t.top-e.top,xe.maxX=N=z+(t.width-e.width),xe.maxY=X=U+(t.height-e.height)),z>N&&(xe.minX=N,xe.maxX=N=z,z=xe.minX),U>X&&(xe.minY=X,xe.maxY=X=U,U=xe.minY),he&&(xe.minRotation=z,xe.maxRotation=N),O=!0),n.liveSnap&&(s=n.liveSnap===!0?n.snap||{}:n.liveSnap,r=s instanceof Array||"function"==typeof s,he?($=Le(r?s:s.rotation,z,N,1),K=null):(ve&&($=Le(r?s:s.x||s.left||s.scrollLeft,z,N,c?-1:1)),we&&(K=Le(r?s:s.y||s.top||s.scrollTop,U,X,c?-1:1))))},Ae=function(t,e){var s,a,o;t&&r?(t===!0&&(s=n.snap||{},a=s instanceof Array||"function"==typeof s,t={resistance:(n.throwResistance||n.resistance||1e3)/(he?10:1)},he?t.rotation=me(xe,a?s:s.rotation,N,z,1,e):(ve&&(t[le]=me(xe,a?s:s.x||s.left||s.scrollLeft,N,z,c?-1:1,e||xe.lockAxis&&"x"===ee)),we&&(t[pe]=me(xe,a?s:s.y||s.top||s.scrollTop,X,U,c?-1:1,e||xe.lockAxis&&"y"===ee)))),xe.tween=o=r.to(c||i,{throwProps:t,ease:n.ease||_.Power3.easeOut,onComplete:n.onThrowComplete,onCompleteParams:n.onThrowCompleteParams,onCompleteScope:n.onThrowCompleteScope||xe,onUpdate:n.fastMode?n.onThrowUpdate:ke,onUpdateParams:n.fastMode?n.onThrowUpdateParams:null,onUpdateScope:n.onThrowUpdateScope||xe},isNaN(n.maxDuration)?2:n.maxDuration,isNaN(n.minDuration)?.5:n.minDuration,isNaN(n.overshootTolerance)?1-xe.edgeResistance+.2:n.overshootTolerance),n.fastMode||(c&&(c._suspendTransforms=!0),o.render(o.duration(),!0,!0),ke(!0,!0),xe.endX=xe.x,xe.endY=xe.y,he&&(xe.endRotation=xe.x),o.play(0),ke(!0,!0),c&&(c._suspendTransforms=!1))):O&&xe.applyBounds()},De=function(){ie=re(i.parentNode,!0),ie[1]||ie[2]||1!=ie[0]||1!=ie[3]||0!=ie[4]||0!=ie[5]||(ie=null)},Oe=function(){var t=1-xe.edgeResistance;De(),c?(Re(),R=c.top(),P=c.left()):(Me()?(ke(!0,!0),Re()):xe.applyBounds(),he?(G=ne(i,{x:0,y:0}),ke(!0,!0),P=xe.x,R=xe.y=Math.atan2(G.y-w,p-G.x)*g):(R=W(i,pe),P=W(i,le))),O&&t&&(P>N?P=N+(P-N)/t:z>P&&(P=z-(z-P)/t),he||(R>X?R=X+(R-X)/t:U>R&&(R=U-(U-R)/t)))},Me=function(){return xe.tween&&xe.tween.isActive()},Le=function(t,e,i,s){return"function"==typeof t?function(r){var n=xe.isPressed?1-xe.edgeResistance:1;return t.call(xe,r>i?i+(r-i)*n:e>r?e+(r-e)*n:r)*s}:t instanceof Array?function(s){for(var r,n,a=t.length,o=0,h=v;--a>-1;)r=t[a],n=r-s,0>n&&(n=-n),h>n&&r>=e&&i>=r&&(o=a,h=n);return t[o]}:isNaN(t)?function(t){return t}:function(){return t*s}},Ne=function(t){var s,r;if(a&&!xe.isPressed&&t){if(se=Me(),xe.pointerEvent=t,_e[t.type]?(te=-1!==t.type.indexOf("touch")?t.currentTarget:f,ce(te,"touchend",Ie),ce(te,"touchmove",Ee),ce(te,"touchcancel",Ie),ce(f,"touchstart",de)):(te=null,ce(f,"mousemove",Ee)),ce(f,"mouseup",Ie),J=ge(t.target)&&!n.dragClickables)return ce(t.target,"change",Ie),void 0;if(T?t=E(t,!0):!c||t.touches&&t.touches.length>S+1||(t.preventDefault(),t.preventManipulation&&t.preventManipulation()),t.changedTouches?(t=j=t.changedTouches[0],H=t.identifier):t.pointerId?H=t.pointerId:j=null,S++,A(Ce),w=xe.pointerY=t.pageY,p=xe.pointerX=t.pageX,Oe(),ie&&(s=p*ie[0]+w*ie[2]+ie[4],w=p*ie[1]+w*ie[3]+ie[5],p=s),xe.tween&&xe.tween.kill(),e.killTweensOf(c||i,!0,Pe),c&&e.killTweensOf(i,!0,{scrollTo:1}),xe.tween=ee=null,(n.zIndexBoost||!he&&!c&&n.zIndexBoost!==!1)&&(i.style.zIndex=Te.zIndex++),xe.isPressed=!0,L=!(!n.onDrag&&!xe._listeners.drag),!he)for(r=be.length;--r>-1;)F(be[r],"cursor",n.cursor||"move");q(xe,"press","onPress")}},Ee=function(t){if(a&&!s&&xe.isPressed){T?t=E(t,!0):(t.preventDefault(),t.preventManipulation&&t.preventManipulation()),xe.pointerEvent=t;var e,i,r,n,o,h,l,u,_,c=t.changedTouches,f=1-xe.dragResistance,d=1-xe.edgeResistance;if(c){if(t=c[0],t!==j&&t.identifier!==H){for(o=c.length;--o>-1&&(t=c[o]).identifier!==H;);if(0>o)return}}else if(t.pointerId&&H&&t.pointerId!==H)return;l=xe.pointerX=t.pageX,u=xe.pointerY=t.pageY,he?(n=Math.atan2(G.y-t.pageY,t.pageX-G.x)*g,h=xe.y-n,xe.y=n,h>180?R-=360:-180>h&&(R+=360),r=P+(R-n)*f):(ie&&(_=l*ie[0]+u*ie[2]+ie[4],u=l*ie[1]+u*ie[3]+ie[5],l=_),i=u-w,e=l-p,2>i&&i>-2&&(i=0),2>e&&e>-2&&(e=0),xe.lockAxis&&(e||i)&&("y"===ee||!ee&&Math.abs(e)>Math.abs(i)&&ve?(i=0,ee="y"):we&&(e=0,ee="x")),r=P+e*f,n=R+i*f),$||K?($&&(r=$(r)),K&&(n=K(n))):O&&(r>N?r=N+(r-N)*d:z>r&&(r=z+(r-z)*d),he||(n>X?n=X+(n-X)*d:U>n&&(n=U+(n-U)*d))),he||(r=Math.round(r),n=Math.round(n)),(xe.x!==r||xe.y!==n&&!he)&&(xe.x=xe.endX=r,he?xe.endRotation=r:xe.y=xe.endY=n,Q=!0,xe.isDragging||(xe.isDragging=!0,q(xe,"dragstart","onDragStart")))}},Ie=function(t,e){if(!(!a||t&&H&&!e&&t.pointerId&&t.pointerId!==H)){xe.isPressed=!1;var i,s,r=t,o=xe.isDragging;if(te?(fe(te,"touchend",Ie),fe(te,"touchmove",Ee),fe(te,"touchcancel",Ie),fe(f,"touchstart",de)):fe(f,"mousemove",Ee),fe(f,"mouseup",Ie),Q=!1,J)return t&&fe(t.target,"change",Ie),q(xe,"release","onRelease"),q(xe,"click","onClick"),J=!1,void 0;if(D(Ce),!he)for(s=be.length;--s>-1;)F(be[s],"cursor",n.cursor||"move");if(o&&(Se=C=y(),xe.isDragging=!1),S--,t){if(T&&(t=E(t,!1)),i=t.changedTouches,i&&(t=i[0],t!==j&&t.identifier!==H)){for(s=i.length;--s>-1&&(t=i[s]).identifier!==H;);if(0>s)return}xe.pointerEvent=r,xe.pointerX=t.pageX,xe.pointerY=t.pageY}return r&&!o?(se&&(n.snap||n.bounds)&&Ae(n.throwProps),q(xe,"release","onRelease"),q(xe,"click","onClick")):(Ae(n.throwProps),T||!r||!n.dragClickables&&ge(r.target)||!o||(r.preventDefault(),r.preventManipulation&&r.preventManipulation()),q(xe,"release","onRelease")),o&&q(xe,"dragend","onDragEnd"),!0}},ze=function(t){(xe.isPressed||20>y()-Se)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.preventManipulation&&t.preventManipulation())};Z=Te.get(this.target),Z&&Z.kill(),this.startDrag=function(t){Ne(t),xe.isDragging||(xe.isDragging=!0,q(xe,"dragstart","onDragStart"))},this.drag=Ee,this.endDrag=function(t){Ie(t,!0)},this.timeSinceDrag=function(){return xe.isDragging?0:(y()-Se)/1e3},this.hitTest=function(t,e){return Te.hitTest(xe.target,t,e)},this.applyBounds=function(t){var e,i;return t&&n.bounds!==t?(n.bounds=t,xe.update(!0)):(ke(!0),Re(),O&&(e=xe.x,i=xe.y,O&&(e>N?e=N:z>e&&(e=z),i>X?i=X:U>i&&(i=U)),(xe.x!==e||xe.y!==i)&&(xe.x=xe.endX=e,he?xe.endRotation=e:xe.y=xe.endY=i,Q=!0,Ce())),xe)},this.update=function(t){var e=xe.x,i=xe.y;return De(),t?xe.applyBounds():ke(!0),xe.isPressed&&(Math.abs(e-xe.x)>.01||Math.abs(i-xe.y)>.01&&!he)&&Oe(),xe},this.enable=function(t){var s,o,h;if("soft"!==t)for(o=be.length;--o>-1;)h=be[o],ce(h,"mousedown",Ne),ce(h,"touchstart",Ne),ce(h,"click",ze),he||F(h,"cursor",n.cursor||"move"),h.ondragstart=h.onselectstart=m,F(h,"userSelect","none"),F(h,"touchCallout","none"),F(h,"touchAction","none");return a=!0,r&&"soft"!==t&&r.track(c||i,oe?"x,y":he?"rotation":"top,left"),c&&c.enable(),i._gsDragID=s="d"+b++,x[s]=this,c&&(c.element._gsDragID=s),e.set(i,{x:"+=0"}),this.update(!0),xe},this.disable=function(t){var e,s,n=this.isDragging;if(!he)for(e=be.length;--e>-1;)F(be[e],"cursor",null);if("soft"!==t){for(e=be.length;--e>-1;)s=be[e],s.ondragstart=s.onselectstart=null,F(s,"userSelect","text"),F(s,"touchCallout","default"),F(s,"MSTouchAction","auto"),fe(s,"mousedown",Ne),fe(s,"touchstart",Ne),fe(s,"click",ze);te&&(fe(te,"touchcancel",Ie),fe(te,"touchend",Ie),fe(te,"touchmove",Ee)),fe(f,"mouseup",Ie),fe(f,"mousemove",Ee)}return a=!1,r&&"soft"!==t&&r.untrack(c||i,oe?"x,y":he?"rotation":"top,left"),c&&c.disable(),D(Ce),this.isDragging=this.isPressed=J=!1,n&&q(this,"dragend","onDragEnd"),xe},this.enabled=function(t,e){return arguments.length?t?this.enable(e):this.disable(e):a},this.kill=function(){return e.killTweensOf(c||i,!0,Pe),xe.disable(),delete x[i._gsDragID],xe},-1!==ae.indexOf("scroll")&&(c=this.scrollProxy=new ye(i,M({onKill:function(){xe.isPressed&&Ie(null)}},n)),i.style.overflowY=we&&!ue?"auto":"hidden",i.style.overflowX=ve&&!ue?"auto":"hidden",i=c.content),n.force3D!==!1&&e.set(i,{force3D:!0}),he?Pe.rotation=1:(ve&&(Pe[le]=1),we&&(Pe[pe]=1)),he?(Y=u,B=Y.css,Y.overwrite=!1):oe&&(Y=ve&&we?o:ve?h:l,B=Y.css,Y.overwrite=!1),this.enable()},we=Te.prototype=new t;we.constructor=Te,we.pointerX=we.pointerY=0,we.isDragging=we.isPressed=!1,Te.version="0.10.8",Te.zIndex=1e3,ce(f,"touchcancel",function(){}),ce(f,"contextmenu",function(){var t;for(t in x)x[t].isPressed&&x[t].endDrag()}),Te.create=function(t,i){"string"==typeof t&&(t=e.selector(t));for(var s=he(t)?le(t):[t],r=s.length;--r>-1;)s[r]=new Te(s[r],i);return s},Te.get=function(t){return x[(I(t)||{})._gsDragID]},Te.timeSinceDrag=function(){return(y()-C)/1e3};var xe=function(t,e){var i=t.pageX!==e?{left:t.pageX,top:t.pageY,right:t.pageX+1,bottom:t.pageY+1}:t.nodeType||t.left===e||t.top===e?I(t).getBoundingClientRect():t;return i.right===e&&i.width!==e?(i.right=i.left+i.width,i.bottom=i.top+i.height):i.width===e&&(i={width:i.right-i.left,height:i.bottom-i.top,right:i.right,left:i.left,bottom:i.bottom,top:i.top}),i};return Te.hitTest=function(t,e,i){if(t===e)return!1;var s,r,n,a=xe(t),o=xe(e),h=o.left>a.right||o.right<a.left||o.top>a.bottom||o.bottom<a.top;return h||!i?!h:(n=-1!==(i+"").indexOf("%"),i=parseFloat(i)||0,s={left:Math.max(a.left,o.left),top:Math.max(a.top,o.top)},s.width=Math.min(a.right,o.right)-s.left,s.height=Math.min(a.bottom,o.bottom)-s.top,0>s.width||0>s.height?!1:n?(i*=.01,r=s.width*s.height,r>=a.width*a.height*i||r>=o.width*o.height*i):s.width>i&&s.height>i)},Te},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=e())}("Draggable");

/*!
 * VERSION: 1.15.0
 * DATE: 2014-12-03
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=1e-10,a=i._internals,o=a.isSelector,h=a.isArray,l=r.prototype=i.to({},.1,{}),_=[];r.version="1.15.0",l.constructor=r,l.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.lagSmoothing=i.lagSmoothing,r.ticker=i.ticker,r.render=i.render,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},l.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,h=1/(1-r),l=this._firstPT;l;)o=l.s+l.c,l.c*=h,l.s=o-l.c,l=l._next}return this},l.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,o,h,l,u,p,c,f=this._dirty?this.totalDuration():this._totalDuration,m=this._time,d=this._totalTime,g=this._cycle,v=this._duration,y=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=v,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===v&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>y||y===n)&&y!==t&&(i=!0,y>n&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||y===t?t:n)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===v&&y>0&&y!==n)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===v&&(this._initted||!this.vars.lazy||i)&&(y>=0&&(i=!0),this._rawPrevTime=c=!e||t||y===t?t:n)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(h=v+this._repeatDelay,this._cycle=this._totalTime/h>>0,0!==this._cycle&&this._cycle===this._totalTime/h&&this._cycle--,this._time=this._totalTime-this._cycle*h,this._yoyo&&0!==(1&this._cycle)&&(this._time=v-this._time),this._time>v?this._time=v:0>this._time&&(this._time=0)),this._easeType?(l=this._time/v,u=this._easeType,p=this._easePower,(1===u||3===u&&l>=.5)&&(l=1-l),3===u&&(l*=2),1===p?l*=l:2===p?l*=l*l:3===p?l*=l*l*l:4===p&&(l*=l*l*l*l),this.ratio=1===u?1-l:2===u?l:.5>this._time/v?l/2:1-l/2):this.ratio=this._ease.getRatio(this._time/v)),m===this._time&&!i&&g===this._cycle)return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=m,this._totalTime=d,this._rawPrevTime=y,this._cycle=g,a.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/v):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==m&&t>=0&&(this._active=!0),0===d&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===v)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_))),o=this._firstPT;o;)o.f?o.t[o.p](o.c*this.ratio+o.s):o.t[o.p]=o.c*this.ratio+o.s,o=o._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==d||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_)),this._cycle!==g&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||_)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||_),0===v&&this._rawPrevTime===n&&c!==n&&(this._rawPrevTime=0))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,n,a,l,u,p){a=a||0;var c,f,m,d,g=n.delay||0,v=[],y=function(){n.onComplete&&n.onComplete.apply(n.onCompleteScope||this,arguments),l.apply(p||this,u||_)};for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t))),t=t||[],0>a&&(t=s(t),t.reverse(),a*=-1),c=t.length-1,m=0;c>=m;m++){f={};for(d in n)f[d]=n[d];f.delay=g,m===c&&l&&(f.onComplete=y),v[m]=new r(t[m],e,f),g+=a}return v},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var u=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(u(n,e)),r=s.length),n=n._next;return s},p=r.getAllTweens=function(e){return u(t._rootTimeline,e).concat(u(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=p(0!=r),l=h.length,_=i&&s&&r;for(o=0;l>o;o++)a=h[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var n,l,_,u,p,c=a.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),o(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)r.killChildTweensOf(t[u],e);else{n=[];for(_ in c)for(l=c[_].target.parentNode;l;)l===t&&(n=n.concat(c[_].tweens)),l=l.parentNode;for(p=n.length,u=0;p>u;u++)e&&n[u].totalTime(n[u].totalDuration()),n[u]._enabled(!1,!1)}}};var c=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=p(r),h=i&&s&&r,l=o.length;--l>-1;)a=o[l],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){c(!0,t,e,i)},r.resumeAll=function(t,e,i){c(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||n,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},l.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},l.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},l.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=n.isSelector,o=n.isArray,h=n.lazyTweens,l=n.lazyRender,_=[],u=_gsScope._gsDefine.globals,p=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=function(t,e,i,s){var r=t._timeline,n=r._totalTime;!e&&this._forcingPlayhead||r._rawPrevTime===t._startTime||(r.pause(t._startTime),e&&e.apply(s||r,i||_),this._forcingPlayhead&&r.seek(n))},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=s.prototype=new e;return s.version="1.15.0",m.constructor=s,m.kill()._gc=m._forcingPlayhead=!1,m.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},m.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},m.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},m.staggerTo=function(t,e,r,n,o,h,l,_){var u,c=new s({onComplete:h,onCompleteParams:l,onCompleteScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],a(t)&&(t=f(t)),n=n||0,0>n&&(t=f(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=p(r.startAt)),c.to(t[u],e,p(r),u*n);return this.add(c,o)},m.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},m.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},m.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},m.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},m.add=function(r,n,a,h){var l,_,u,p,c,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(a=a||"normal",h=h||0,l=n,_=r.length,u=0;_>u;u++)o(p=r[u])&&(p=new s({tweens:p})),this.add(p,l),"string"!=typeof p&&"function"!=typeof p&&("sequence"===a?l=p._startTime+p.totalDuration()/p._timeScale:"start"===a&&(p._startTime-=p.delay())),l+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,f=c.rawTime()>r._startTime;c._timeline;)f&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},m.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},m._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},m.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},m.insert=m.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},m.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},m.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},m.addPause=function(t,e,s,r){var n=i.delayedCall(0,c,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},m.removeLabel=function(t){return delete this._labels[t],this},m.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},m._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},m.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},m.stop=function(){return this.paused(!0)},m.gotoAndPlay=function(t,e){return this.play(t,e)},m.gotoAndStop=function(t,e){return this.pause(t,e)},m.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,u,p=this._dirty?this.totalDuration():this._totalDuration,c=this._time,f=this._startTime,m=this._timeScale,d=this._paused;if(t>=p?(this._totalTime=this._time=p,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(u=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=p+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==c||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==c&&this._first||i||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||_)),this._time>=c)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);)(s._active||c>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(h.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||_))),o&&(this._gc||(f===this._startTime||m!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(n&&(h.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||_)))}},m._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},m.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},m.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},m.recent=function(){return this._recent},m._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},m.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},m._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},m.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},m.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},m._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},m.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},m.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},m.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},m.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},m.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=[],a=e._internals,o=a.lazyTweens,h=a.lazyRender,l=new i(null,null,1,0),_=s.prototype=new t;return _.constructor=s,_.kill()._gc=!1,s.version="1.15.0",_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},_.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},_.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},_.tweenTo=function(t,i){i=i||{};var s,r,a,o={ease:l,overwrite:i.delay?2:1,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)o[r]=i[r];return o.time=this._parseTimeOrLabel(t),s=Math.abs(Number(o.time)-this._time)/this._timeScale||.001,a=new e(this,s,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&s===a.duration()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||n)},a},_.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},_.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,l,_,u,p,c=this._dirty?this.totalDuration():this._totalDuration,f=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,w=this._cycle;if(t>=c?(this._locked||(this._totalTime=c,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(a=!0,_="onComplete",0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(u=!0,y>r&&(_="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=f,t=f+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===f&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(_="onReverseComplete",a=this._reversed),0>t?(this._active=!1,y>=0&&this._first&&(u=!0),this._rawPrevTime=t):(this._rawPrevTime=f||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(u=!0))):(0===f&&0>y&&(u=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(p=f+this._repeatDelay,this._cycle=this._totalTime/p>>0,0!==this._cycle&&this._cycle===this._totalTime/p&&this._cycle--,this._time=this._totalTime-this._cycle*p,this._yoyo&&0!==(1&this._cycle)&&(this._time=f-this._time),this._time>f?(this._time=f,t=f+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),b=x===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,S=this._cycle,k=this._rawPrevTime,R=this._time;if(this._totalTime=w*f,w>this._cycle?x=!x:this._totalTime+=f,this._time=m,this._rawPrevTime=0===f?y-1e-4:y,this._cycle=w,this._locked=!0,m=x?0:f,this.render(m,e,0===f),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||n),b&&(m=x?f+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=S,this._rawPrevTime=k}if(!(this._time!==m&&this._first||i||u))return d!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);)(s._active||m>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;this._onUpdate&&(e||(o.length&&h(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n))),_&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(a&&(o.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[_]&&this.vars[_].apply(this.vars[_+"Scope"]||this,this.vars[_+"Params"]||n)))},_.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,h=a.length;for(s=0;h>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},_.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},_.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},_.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},_.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},_.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},_.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},_.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,c=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+c,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-c,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,r,n,a,o){var l,_,u,p,c,f,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)c=t[b],_=c.a,u=c.d,p=t[b+1].d,o?(y=e[l],T=i[l],w=.25*(T+y)*r/(a?.5:s[l]||.5),f=u-(u-_)*(a?.5*r:0!==y?w/y:0),m=u+(p-u)*(a?.5*r:0!==T?w/T:0),d=u-(f+((m-f)*(3*y/(y+T)+.5)/4||0))):(f=u-.5*(u-_)*r,m=u+.5*(p-u)*r,d=u-(f+m)/2),f+=d,m+=d,c.c=g=f,c.b=0!==l?P:P=c.a+.6*(c.c-c.a),c.da=u-_,c.ca=g-_,c.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;c=t[b],c.b=P,c.c=P+.4*(c.d-P),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=P-c.a,n&&(v=h(c.a,P,c.c,c.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,h,l,_,u,p,c=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][s])&&"="===p.charAt(1)&&(t[h][s]=n[s]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return c[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),c;for(h=0;o>h;h++)l=t[h][s],_=t[h+1][s],c[h]=new a(l,0,0,_),r&&(u=t[h+2][s],e[h]=(e[h]||0)+(_-l)*(_-l),i[h]=(i[h]||0)+(u-_)*(u-_));return c[h]=new a(t[h][s],0,0,t[h+1][s]),c},u=function(t,n,a,h,u,p){var c,f,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(f in t[0])x.push(f);if(t.length>1){for(T=t[t.length-1],y=!0,c=x.length;--c>-1;)if(f=x[c],Math.abs(b[f]-T[f])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(e.length=i.length=s.length=0,c=x.length;--c>-1;)f=x[c],r[f]=-1!==u.indexOf(","+f+","),w[f]=_(t,f,r[f],p);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!h){for(c=x.length;--c>-1;)if(r[f])for(m=w[x[c]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=x.length,d=a?4:1;--c>-1;)f=x[c],m=w[f],l(m,n,a,h,r[f]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},p=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,p,c,f,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],c=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(f=t[_][p])&&"="===f.charAt(1)?i[p]+Number(f.charAt(0)+f.substr(2)):Number(f),g&&_>1&&u-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(u=c-d+1,c=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[c++]=f=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=c}return m},c=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,c,f=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=f*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),c=m*i+_-1,e[c]=(e[c]||0)+s*s},f=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],p=[];for(i in t)c(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,p[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=p,o[n]=l,h=0,p=[]);return{length:l,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],c=e.autoRotate||i.vars.orientToBezier;this._autoRotate=c?c instanceof Array?c:[["x","y","rotation",c===!0?0:Number(c)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):p(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=f(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(c=this._autoRotate)for(this._initialRotations=[],c[0]instanceof Array||(this._autoRotate=c=[c]),n=c.length;--n>-1;){for(a=0;3>a;a++)s=c[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=c[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,c=this._func,f=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r
}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=Math.round(h)),c[n]?f[n](h):f[n]=h;if(this._autoRotate){var d,g,v,y,T,w,x,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],w=b[r][3]||0,x=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,h=m?Math.atan2(T-v,y-g)*x+w:this._initialRotations[r],c[n]?f[n](h):f[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,h){e instanceof Array&&(e={values:e}),h=new m;var l,_,u,p=e.values,c=p.length-1,f=[],d={};if(0>c)return o;for(l=0;c>=l;l++)u=i(t,p[l],a,o,h,c!==l),f[l]=u.end;for(_ in e)d[_]=e[_];return d.values=f,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=h,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(l=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",l,!1]]:null!=u.end.x?[["x","y","rotation",l,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),h._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,h={},l=a.prototype=new t("css");l.constructor=a,a.version="1.15.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l,lineHeight:""};var _,u,p,c,f,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,w=/opacity *= *([^)]*)/i,x=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,S=/([A-Z])/g,k=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,A=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,O=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,I=180/Math.PI,E={},F=document,N=function(t){return F.createElementNS?F.createElementNS("http://www.w3.org/1999/xhtml",t):F.createElement(t)},L=N("div"),X=N("img"),U=a._internals={_specialProps:h},Y=navigator.userAgent,B=function(){var t=Y.indexOf("Android"),e=N("a");return p=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===t||Number(Y.substr(t+8,1))>3),f=p&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),c=-1!==Y.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),j=function(t){return w.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=F.defaultView?F.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return B||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(S,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):j(t)},$=U.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,h,l,_=C.test(i),u=t,p=L.style,c=0>s;if(c&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(p.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild)p[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||F.body,h=u._gsCache,l=e.ticker.frame,h&&_&&h.time===l)return h.width*s/100;p[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(h=u._gsCache=u._gsCache||{},h.time=l,h.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return c?-o:o},H=U.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(k,A)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===r[i]&&(r[i.replace(k,A)]=e[i]);return B||(r.opacity=j(t)),s=Me(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,Se&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},J=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==l[a]&&(o=new ce(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,""))),s+" "+r+(i.length>2?" "+i[2]:"")},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(y,""))*(-1===t.indexOf("rad")?1:I)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},he=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},le=a.parseColor=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t]?oe[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=he(r+1/3,e,i),t[1]=he(r,e,i),t[2]=he(r-1/3,e,i),t):(t=t.match(d)||oe.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):oe.black},_e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in oe)_e+="|"+l+"\\b";_e=RegExp(_e+")","gi");var ue=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(_e)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,p,c,f;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(f=t.replace(M,"|").split("|"),c=0;f.length>c;c++)f[c]=r(f[c]);return f.join(",")}if(e=(t.match(_e)||[n])[0],p=t.split(e).join("").match(v)||[],c=p.length,_>c--)for(;_>++c;)p[c]=i?p[0|(c-1)/2]:a[c];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(v)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},pe=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ce=(U._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),fe=(U._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},c={},f=i._transform,m=E;for(i._transform=null,E=e,s=_=i.parse(t,e,s,r),E=m,n&&(i._transform=f,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,c[o]=s.s+s.c,p[o]=s.s,n||(l=new ce(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,c[o]=s.data[h],p[o]=s[h],n||(l=new ce(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:c,firstMPT:l,pt:_}},U.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof fe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),me=a.parseComplex=function(t,e,i,s,r,n,a,o,h,l){i=i||n||"",a=new fe(t,e,0,0,a,l?2:1,null,!1,o,i,s),s+="";var u,p,c,f,m,v,y,T,w,x,b,S,k=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=k.length,C=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(k=k.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),A=k.length),A!==R.length&&(k=(n||"").split(" "),A=k.length),a.plugin=h,a.setRatio=l,u=0;A>u;u++)if(f=k[u],m=R[u],T=parseFloat(f),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),C&&-1!==m.indexOf("px"),!0);else if(r&&("#"===f.charAt(0)||oe[f]||P.test(f)))S=","===m.charAt(m.length-1)?"),":")",f=le(f),m=le(m),w=f.length+m.length>6,w&&!B&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(B||(w=!1),a.appendXtra(w?"rgba(":"rgb(",f[0],m[0]-f[0],",",!0,!0).appendXtra("",f[1],m[1]-f[1],",",!0).appendXtra("",f[2],m[2]-f[2],w?",":S,!0),w&&(f=4>f.length?1:f[3],a.appendXtra("",f,(4>m.length?1:m[3])-f,S,!1)));else if(v=f.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(c=0,p=0;v.length>p;p++)b=v[p],x=f.indexOf(b,c),a.appendXtra(f.substr(c,x-c),Number(b),re(y[p],b),"",C&&"px"===f.substr(x+b.length,2),0===p),c=x+b.length;a["xs"+a.l]+=f.substr(c)}else a["xs"+a.l]+=a.l?" "+f:f;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,u=1;a.l>u;u++)S+=a["xs"+u]+a.data["xn"+u];a.e=S+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},de=9;for(l=fe.prototype,l.l=l.pr=0;--de>0;)l["xn"+de]=0,l["xs"+de]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new fe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ge=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,h[t]=h[this.p]=this,this.format=e.formatter||ue(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},ve=U._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ge(n[s],e)},ye=function(t){if(!h[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";ve(t,{parser:function(t,i,s,r,n,a,l){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),h[s].parse(t,i,s,r,n,a,l)):(q("Error: "+e+" js file not loaded."),n)}})}};l=ge.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),h=i.replace(M,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return me(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){ve(t,{parser:function(t,s,r,n,a,o){var h=new fe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var Te,we="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xe=W("transform"),be=V+"transform",Pe=W("transformOrigin"),Se=null!==W("perspective"),ke=U.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Se?a.defaultForce3D||"auto":!1},Re=window.SVGElement,Ae=function(t,e,i){var s,r=F.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},Ce=document.documentElement,Oe=function(){var t,e,i,s=m||/Android/i.test(Y)&&!window.chrome;return F.createElementNS&&!s&&(t=Ae("svg",Ce),e=Ae("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Pe]="50% 50%",e.style[xe]="scaleX(0.5)",s=i===e.getBoundingClientRect().width,Ce.removeChild(t)),s}(),De=function(t,e,i){var s=t.getBBox();e=se(e).split(" "),i.xOrigin=(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*s.width:parseFloat(e[0]))+s.x,i.yOrigin=(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*s.height:parseFloat(e[1]))+s.y},Me=U.getTransform=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var n,o,h,l,_,u,p,c,f,m,d=i?t._gsTransform||new ke:new ke,g=0>d.scaleX,v=2e-5,y=1e5,T=Se?parseFloat(Q(t,Pe,e,!1,"0 0 0").split(" ")[2])||d.zOrigin||0:0,w=parseFloat(a.defaultTransformPerspective)||0;if(xe?o=Q(t,be,e,!0):t.currentStyle&&(o=t.currentStyle.filter.match(O),o=o&&4===o.length?[o[0].substr(4),Number(o[2].substr(4)),Number(o[1].substr(4)),o[3].substr(4),d.x||0,d.y||0].join(","):""),n=!o||"none"===o||"matrix(1, 0, 0, 1, 0, 0)"===o,d.svg=!!(Re&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM)),d.svg&&(De(t,Q(t,Pe,r,!1,"50% 50%")+"",d),Te=a.useSVGTransformAttr||Oe,h=t.getAttribute("transform"),n&&h&&-1!==h.indexOf("matrix")&&(o=h,n=0)),!n){for(h=(o||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],l=h.length;--l>-1;)_=Number(h[l]),h[l]=(u=_-(_|=0))?(0|u*y+(0>u?-.5:.5))/y+_:_;if(16===h.length){var x=h[8],b=h[9],P=h[10],S=h[12],k=h[13],R=h[14];d.zOrigin&&(R=-d.zOrigin,S=x*R-h[12],k=b*R-h[13],R=P*R+d.zOrigin-h[14]);var A,C,D,M,z,E=h[0],F=h[1],N=h[2],L=h[3],X=h[4],U=h[5],Y=h[6],B=h[7],j=h[11],q=Math.atan2(F,U);d.rotation=q*I,q&&(M=Math.cos(-q),z=Math.sin(-q),E=E*M+X*z,C=F*M+U*z,U=F*-z+U*M,Y=N*-z+Y*M,F=C),q=Math.atan2(x,E),d.rotationY=q*I,q&&(M=Math.cos(-q),z=Math.sin(-q),A=E*M-x*z,C=F*M-b*z,D=N*M-P*z,b=F*z+b*M,P=N*z+P*M,j=L*z+j*M,E=A,F=C,N=D),q=Math.atan2(Y,P),d.rotationX=q*I,q&&(M=Math.cos(-q),z=Math.sin(-q),A=X*M+x*z,C=U*M+b*z,D=Y*M+P*z,x=X*-z+x*M,b=U*-z+b*M,P=Y*-z+P*M,j=B*-z+j*M,X=A,U=C,Y=D),d.scaleX=(0|Math.sqrt(E*E+F*F)*y+.5)/y,d.scaleY=(0|Math.sqrt(U*U+b*b)*y+.5)/y,d.scaleZ=(0|Math.sqrt(Y*Y+P*P)*y+.5)/y,d.skewX=0,d.perspective=j?1/(0>j?-j:j):0,d.x=S,d.y=k,d.z=R}else if(!(Se&&!s&&h.length&&d.x===h[4]&&d.y===h[5]&&(d.rotationX||d.rotationY)||void 0!==d.x&&"none"===Q(t,"display",e))){var V=h.length>=6,G=V?h[0]:1,W=h[1]||0,Z=h[2]||0,$=V?h[3]:1;d.x=h[4]||0,d.y=h[5]||0,p=Math.sqrt(G*G+W*W),c=Math.sqrt($*$+Z*Z),f=G||W?Math.atan2(W,G)*I:d.rotation||0,m=Z||$?Math.atan2(Z,$)*I+f:d.skewX||0,Math.abs(m)>90&&270>Math.abs(m)&&(g?(p*=-1,m+=0>=f?180:-180,f+=0>=f?180:-180):(c*=-1,m+=0>=m?180:-180)),d.scaleX=p,d.scaleY=c,d.rotation=f,d.skewX=m,Se&&(d.rotationX=d.rotationY=d.z=0,d.perspective=w,d.scaleZ=1)}d.zOrigin=T;for(l in d)v>d[l]&&d[l]>-v&&(d[l]=0)}return i&&(t._gsTransform=d),d},ze=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var c,f,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(c=(s.oxp?.01*d*s.ox:s.ox)-d/2,f=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=c-(c*o+f*h),b+=f-(c*l+f*_)),v?(c=d/2,f=g/2,y+=", Dx="+(c-(c*o+f*h)+x)+", Dy="+(f-(c*l+f*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||w.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,S,k,R=8>m?1:-1;for(c=s.ieOffsetX||0,f=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),de=0;4>de;de++)S=ee[de],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,S,parseFloat(P),P.replace(T,""))||0,k=i!==s[S]?2>de?-s.ieOffsetX:-s.ieOffsetY:2>de?c-s.ieOffsetX:f-s.ieOffsetY,u[S]=(s[S]=Math.round(i-k*(0===de||2===de?1:R)))+"px"}}},Ie=U.set3DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p,f,m,d,g,v,y,T,w,x,b,P,S,k,R=this.data,A=this.t.style,C=R.rotation*z,O=R.scaleX,D=R.scaleY,M=R.scaleZ,I=R.x,E=R.y,F=R.z,N=R.perspective;if(!(1!==t&&0!==t||"auto"!==R.force3D||R.rotationY||R.rotationX||1!==M||N||F))return Ee.call(this,t),void 0;if(c){var L=1e-4;L>O&&O>-L&&(O=M=2e-5),L>D&&D>-L&&(D=M=2e-5),!N||R.z||R.rotationX||R.rotationY||(N=0)}if(C||R.skewX)y=Math.cos(C),T=Math.sin(C),e=y,n=T,R.skewX&&(C-=R.skewX*z,y=Math.cos(C),T=Math.sin(C),"simple"===R.skewType&&(w=Math.tan(R.skewX*z),w=Math.sqrt(1+w*w),y*=w,T*=w)),i=-T,a=y;else{if(!(R.rotationY||R.rotationX||1!==M||N||R.svg))return A[xe]=(R.xPercent||R.yPercent?"translate("+R.xPercent+"%,"+R.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+E+"px,"+F+"px)"+(1!==O||1!==D?" scale("+O+","+D+")":""),void 0;e=a=1,i=n=0}u=1,s=r=o=h=l=_=p=f=m=0,d=N?-1/N:0,g=R.zOrigin,v=1e5,k=",",C=R.rotationY*z,C&&(y=Math.cos(C),T=Math.sin(C),l=u*-T,f=d*-T,s=e*T,o=n*T,u*=y,d*=y,e*=y,n*=y),C=R.rotationX*z,C&&(y=Math.cos(C),T=Math.sin(C),w=i*y+s*T,x=a*y+o*T,b=_*y+u*T,P=m*y+d*T,s=i*-T+s*y,o=a*-T+o*y,u=_*-T+u*y,d=m*-T+d*y,i=w,a=x,_=b,m=P),1!==M&&(s*=M,o*=M,u*=M,d*=M),1!==D&&(i*=D,a*=D,_*=D,m*=D),1!==O&&(e*=O,n*=O,l*=O,f*=O),g&&(p-=g,r=s*p,h=o*p,p=u*p+g),R.svg&&(r+=R.xOrigin-(R.xOrigin*e+R.yOrigin*i),h+=R.yOrigin-(R.xOrigin*n+R.yOrigin*a)),r=(w=(r+=I)-(r|=0))?(0|w*v+(0>w?-.5:.5))/v+r:r,h=(w=(h+=E)-(h|=0))?(0|w*v+(0>w?-.5:.5))/v+h:h,p=(w=(p+=F)-(p|=0))?(0|w*v+(0>w?-.5:.5))/v+p:p,S=R.xPercent||R.yPercent?"translate("+R.xPercent+"%,"+R.yPercent+"%) matrix3d(":"matrix3d(",S+=(0|e*v)/v+k+(0|n*v)/v+k+(0|l*v)/v,S+=k+(0|f*v)/v+k+(0|i*v)/v+k+(0|a*v)/v,S+=k+(0|_*v)/v+k+(0|m*v)/v+k+(0|s*v)/v,S+=k+(0|o*v)/v+k+(0|u*v)/v+k+(0|d*v)/v,S+=k+r+k+h+k+p+k+(N?1+-p/N:1)+")",A[xe]=S},Ee=U.set2DTransformRatio=function(t){var e,i,s,r,n,a,o,h,l,_,u,p=this.data,c=this.t,f=c.style,m=p.x,d=p.y;return!(p.rotationX||p.rotationY||p.z||p.force3D===!0||"auto"===p.force3D&&1!==t&&0!==t)||p.svg&&Te||!Se?(r=p.scaleX,n=p.scaleY,p.rotation||p.skewX||p.svg?(e=p.rotation*z,i=e-p.skewX*z,s=1e5,a=Math.cos(e)*r,o=Math.sin(e)*r,h=Math.sin(i)*-n,l=Math.cos(i)*n,p.svg&&(m+=p.xOrigin-(p.xOrigin*a+p.yOrigin*h),d+=p.yOrigin-(p.xOrigin*o+p.yOrigin*l),u=1e-6,u>m&&m>-u&&(m=0),u>d&&d>-u&&(d=0)),_=(0|a*s)/s+","+(0|o*s)/s+","+(0|h*s)/s+","+(0|l*s)/s+","+m+","+d+")",p.svg&&Te?c.setAttribute("transform","matrix("+_):f[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+_):f[xe]=(p.xPercent||p.yPercent?"translate("+p.xPercent+"%,"+p.yPercent+"%) matrix(":"matrix(")+r+",0,0,"+n+","+m+","+d+")",void 0):(this.setRatio=Ie,Ie.call(this,t),void 0)};l=ke.prototype,l.x=l.y=l.z=l.skewX=l.skewY=l.rotation=l.rotationX=l.rotationY=l.zOrigin=l.xPercent=l.yPercent=0,l.scaleX=l.scaleY=l.scaleZ=1,ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(t,e,i,s,n,o,h){if(s._lastParsedTransform===h)return n;s._lastParsedTransform=h;var l,_,u,p,c,f,m,d=s._transform=Me(t,r,!0,h.parseTransform),g=t.style,v=1e-6,y=we.length,T=h,w={};if("string"==typeof T.transform&&xe)u=L.style,u[xe]=T.transform,u.display="block",u.position="absolute",F.body.appendChild(L),l=Me(L,null,!1),F.body.removeChild(L);else if("object"==typeof T){if(l={scaleX:ne(null!=T.scaleX?T.scaleX:T.scale,d.scaleX),scaleY:ne(null!=T.scaleY?T.scaleY:T.scale,d.scaleY),scaleZ:ne(T.scaleZ,d.scaleZ),x:ne(T.x,d.x),y:ne(T.y,d.y),z:ne(T.z,d.z),xPercent:ne(T.xPercent,d.xPercent),yPercent:ne(T.yPercent,d.yPercent),perspective:ne(T.transformPerspective,d.perspective)},m=T.directionalRotation,null!=m)if("object"==typeof m)for(u in m)T[u]=m[u];else T.rotation=m;"string"==typeof T.x&&-1!==T.x.indexOf("%")&&(l.x=0,l.xPercent=ne(T.x,d.xPercent)),"string"==typeof T.y&&-1!==T.y.indexOf("%")&&(l.y=0,l.yPercent=ne(T.y,d.yPercent)),l.rotation=ae("rotation"in T?T.rotation:"shortRotation"in T?T.shortRotation+"_short":"rotationZ"in T?T.rotationZ:d.rotation,d.rotation,"rotation",w),Se&&(l.rotationX=ae("rotationX"in T?T.rotationX:"shortRotationX"in T?T.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",w),l.rotationY=ae("rotationY"in T?T.rotationY:"shortRotationY"in T?T.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",w)),l.skewX=null==T.skewX?d.skewX:ae(T.skewX,d.skewX),l.skewY=null==T.skewY?d.skewY:ae(T.skewY,d.skewY),(_=l.skewY-d.skewY)&&(l.skewX+=_,l.rotation+=_)}for(Se&&null!=T.force3D&&(d.force3D=T.force3D,f=!0),d.skewType=T.skewType||d.skewType||a.defaultSkewType,c=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,c||null==T.scale||(l.scaleZ=1);--y>-1;)i=we[y],p=l[i]-d[i],(p>v||-v>p||null!=T[i]||null!=E[i])&&(f=!0,n=new fe(d,i,d[i],p,n),i in w&&(n.e=w[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return p=T.transformOrigin,p&&d.svg&&(De(t,p,l),n=new fe(d,"xOrigin",d.xOrigin,l.xOrigin-d.xOrigin,n,-1,"transformOrigin"),n.b=d.xOrigin,n.e=n.xs0=l.xOrigin,n=new fe(d,"yOrigin",d.yOrigin,l.yOrigin-d.yOrigin,n,-1,"transformOrigin"),n.b=d.yOrigin,n.e=n.xs0=l.yOrigin,p="0px 0px"),(p||Se&&c&&d.zOrigin)&&(xe?(f=!0,i=Pe,p=(p||Q(t,i,r,!1,"50% 50%"))+"",n=new fe(g,i,0,0,n,-1,"transformOrigin"),n.b=g[i],n.plugin=o,Se?(u=d.zOrigin,p=p.split(" "),d.zOrigin=(p.length>2&&(0===u||"0px"!==p[2])?parseFloat(p[2]):u)||0,n.xs0=n.e=p[0]+" "+(p[1]||"50%")+" 0px",n=new fe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=p):se(p+"",d)),f&&(s._transformType=d.svg&&Te||!c&&3!==this._transformType?2:3),n},prefix:!0}),ve("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ve("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,c,f,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=W(b[h])),u=_=Q(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],c=parseFloat(u),v=u.substr((c+"").length),y="="===p.charAt(1),y?(f=parseInt(p.charAt(0)+"1",10),p=p.substr(2),f*=parseFloat(p),g=p.substr((f+"").length-(0>f?1:0))||""):(f=parseFloat(p),g=p.substr((f+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",c,v),w=$(t,"borderTop",c,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+f+g,l=parseFloat(_)+f+g)),a=me(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:ue("0px 0px 0px 0px",!1,!0)}),ve("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,c="background-position",f=r||Z(t,null),d=this.format((f?m?f.getPropertyValue(c+"-x")+" "+f.getPropertyValue(c+"-y"):f.getPropertyValue(c):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),X.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-X.width:t.offsetHeight-X.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),ve("backgroundSize",{defaultValue:"0 0",formatter:se}),ve("perspective",{defaultValue:"0px",prefix:!0}),ve("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ve("transformStyle",{prefix:!0}),ve("backfaceVisibility",{prefix:!0}),ve("userSelect",{prefix:!0}),ve("margin",{parser:pe("marginTop,marginRight,marginBottom,marginLeft")}),ve("padding",{parser:pe("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ve("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>m?(h=t.currentStyle,l=8>m?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),ve("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ve("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),ve("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(_e)||["#000"])[0]}}),ve("borderWidth",{parser:pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ve("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new fe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Fe=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(w,"opacity="+r))};ve("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),l&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),B?n=new fe(h,"opacity",o,e-o,n):(n=new fe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Fe),l&&(n=new fe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ne=function(t,e){e&&(t.removeProperty?("ms"===e.substr(0,2)&&(e="M"+e.substr(1)),t.removeProperty(e.replace(S,"-$1").toLowerCase())):t.removeAttribute(e))},Le=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ne(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ve("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,c,f=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new fe(t,s,0,0,a,2),a.setRatio=Le,a.pr=-11,i=!0,a.b=f,_=K(t,r),u=t._gsClassPT){for(p={},c=u.data;c;)p[c.p]=1,c=c._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:f.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.setAttribute("class",a.e),l=J(t,_,K(t),h,p),t.setAttribute("class",f),a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Xe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=h.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],h[i]&&(h[i].parse===a?r=!0:i="transformOrigin"===i?Pe:h[i].p),Ne(n,i);r&&(Ne(n,xe),this.t._gsTransform&&delete this.t._gsTransform)}};for(ve("clearProps",{parser:function(t,e,s,r,n){return n=new fe(t,s,0,0,n,2),n.setRatio=Xe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),de=l.length;de--;)ye(l[de]);l=a.prototype,l._firstPT=l._lastParsedTransform=l._transform=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,l,c,m,d,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(h=Q(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(w,"zIndex",0)),"string"==typeof e&&(m=w.cssText,h=K(t,r),w.cssText=m+";"+e,h=J(t,h,K(t)).difs,!B&&x.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,w.cssText=m),this._firstPT=l=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,xe?p&&(u=!0,""===w.zIndex&&(v=Q(t,"zIndex",r),("auto"===v||""===v)&&this._addLazySet(w,"zIndex",0)),f&&this._addLazySet(w,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=l;c&&c._next;)c=c._next;
y=new fe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&Se?Ie:xe?Ee:ze,y.data=this._transform||Me(t,r,!0),n.pop()}if(i){for(;l;){for(g=l._next,c=m;c&&c.pr>l.pr;)c=c._next;(l._prev=c?c._prev:d)?l._prev._next=l:m=l,(l._next=c)?c._prev=l:d=l,l=g}this._firstPT=m}return!0},l.parse=function(t,e,i,n){var a,o,l,u,p,c,f,m,d,g,v=t.style;for(a in e)c=e[a],o=h[a],o?i=o.parse(t,c,a,this,i,n,e):(p=Q(t,a,r)+"",d="string"==typeof c,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(c)?(d||(c=le(c),c=(c.length>3?"rgba(":"rgb(")+c.join(",")+")"),i=me(v,a,p,c,!0,"transparent",i,0,n)):!d||-1===c.indexOf(" ")&&-1===c.indexOf(",")?(l=parseFloat(p),f=l||0===l?p.substr((l+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(l=ie(t,a,r),f="px"):"left"===a||"top"===a?(l=H(t,a,r),f="px"):(l="opacity"!==a?0:1,f="")),g=d&&"="===c.charAt(1),g?(u=parseInt(c.charAt(0)+"1",10),c=c.substr(2),u*=parseFloat(c),m=c.replace(T,"")):(u=parseFloat(c),m=d?c.substr((u+"").length)||"":""),""===m&&(m=a in s?s[a]:f),c=u||0===u?(g?u+l:u)+m:e[a],f!==m&&""!==m&&(u||0===u)&&l&&(l=$(t,a,l,f),"%"===m?(l/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(p=l+"%")):"em"===m?l/=$(t,a,1,"em"):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(c=u+l+m)),g&&(u+=l),!l&&0!==l||!u&&0!==u?void 0!==v[a]&&(c||"NaN"!=c+""&&null!=c)?(i=new fe(v,a,u||l||0,0,i,-1,a,!1,0,p,c),i.xs0="none"!==c||"display"!==a&&-1===a.indexOf("Style")?c:p):q("invalid "+a+" tween value: "+e[a]):(i=new fe(v,a,l,u-l,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,p,c),i.xs0=m)):i=me(v,a,p,c,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transform=this._transform||Me(this._target,r,!0),this._transformType=this._transform.svg&&Te||!t&&3!==this._transformType?2:3};var Ue=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};l._addLazySet=function(t,e,i){var s=this._firstPT=new fe(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=Ue,s.data=this},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ye=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Ye(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ye(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,Ye(t,l,u),o.render(i,!0),Ye(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=J(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var i,s,r;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(i in e)this._start[i]=this._proxy[i]=s=t.getAttribute(i),r=this._addTween(this._proxy,i,parseFloat(s),e[i],i),this._end[i]=r?r.s+r.c:e[i],this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length,r=1===t?this._end:t?this._proxy:this._start;--s>-1;)e=i[s],this._target.setAttribute(e,r[e]+"")}}),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},c=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",c("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),c("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),c("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),c=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--c>-1;)i=f?Math.random():1/u*c,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:c%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),c=u;--c>-1;)a=l[c],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,h=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},l=h("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=function(){},c=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),f={},m=function(s,r,n,a){this.sc=f[s]?f[s].sc:[],f[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(l){for(var _,u,p,c,d=r.length,g=d;--d>-1;)(_=f[r[d]]||new m(r[d],[])).gsClass?(o[d]=_.gsClass,g--):l&&_.sc.push(this);if(0===g&&n)for(u=("com.greensock."+s).split("."),p=u.pop(),c=h(u.join("."))[p]=this.gsClass=n.apply(n,o),a&&(i[p]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return c}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=c)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=l._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},x=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?g("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,x(new T(null,null,1,r),n,"easeOut",!0),x(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),x(new T(null,null,3,r),n,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)n=l[h],n.c===e&&n.s===i?l.splice(h,1):0===_&&r>n.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,S=t.cancelAnimationFrame,k=Date.now||function(){return(new Date).getTime()},R=k();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],S=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,h,l=this,u=k(),c=e!==!1&&P,f=500,m=33,d="tick",g=function(t){var e,a,o=k()-R;o>f&&(u+=o-m),R+=o,l.time=(R-u)/1e3,e=l.time-h,(!i||e>0||t===!0)&&(l.frame++,h+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&l.dispatchEvent(d)};b.call(l),l.time=l.frame=0,l.tick=function(){g(!0)},l.lagSmoothing=function(t,e){f=t||1/_,m=Math.min(e,f,0)},l.sleep=function(){null!=r&&(c&&S?S(r):clearTimeout(r),s=p,r=null,l===a&&(o=!1))},l.wake=function(){null!==r?l.sleep():l.frame>10&&(R=k()-f+5),s=0===i?p:c&&P?P:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===a&&(o=!0),g(2)},l.fps=function(t){return arguments.length?(i=t,n=1/(i||60),h=this.time+n,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),c=t,l.fps(i),void 0):c},l.fps(t),setTimeout(function(){c&&(!r||5>l.frame)&&l.useRAF(!1)},1500)}),n=l.Ticker.prototype=new l.events.EventDispatcher,n.constructor=l.Ticker;var A=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,j){o||a.wake();var i=this.vars.useFrames?B:j;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=A.ticker=new l.Ticker,n=A.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&k()-R>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=c(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),I.length&&q())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var O=g("core.SimpleTimeline",function(t){A.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=O.prototype=new A,n.constructor=O,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(A.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?Y[D.defaultOverwrite]:"number"==typeof h?h>>0:Y[h],(o||e instanceof Array||e.push&&c(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=V(n,this,!1),1===h&&this._siblings[r].length>1&&W(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=V(e,this,!1),1===h&&this._siblings.length>1&&W(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)U[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new A,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.15.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=!0,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var I=[],E={},F=D._internals={isArray:c,isSelector:M,lazyTweens:I},N=D._plugins={},L=F.tweenLookup={},X=0,U=F.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Y={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},B=A._rootFramesTimeline=new O,j=A._rootTimeline=new O,q=F.lazyRender=function(){var t,e=I.length;for(E={};--e>-1;)t=I[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);I.length=0};j._startTime=a.time,B._startTime=a.frame,j._active=B._active=!0,setTimeout(q,1),A._updateRoot=D.render=function(){var t,e,i;if(I.length&&q(),j.render((a.time-j._startTime)*j._timeScale,!1,!1),B.render((a.frame-B._startTime)*B._timeScale,!1,!1),I.length&&q(),!(a.frame%120)){for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=j._first,(!i||i._paused)&&D.autoSleep&&!B._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",A._updateRoot);var V=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+X++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},G=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},W=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||G(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,u=e._startTime+_,p=[],c=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Z(e,0,f),0===Z(o,l,f)&&(p[c++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((f||!o._initted)&&2e-10>=u-o._startTime||(p[c++]=o)));for(n=c;--n>-1;)if(o=p[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!G(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Z=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,h=!!n.immediateRender,l=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=h&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),h)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in n)U[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&n.lazy!==!1,i.immediateRender=h,this._startAt=D.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=l=l?l instanceof T?l:"function"==typeof l?new T(l,n.easeParams):w[l]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&l.config&&(this._ease=l.config.apply(l,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;E[e._gsTweenID]&&q(),this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars){if(_=this.vars[n],U[n])_&&(_ instanceof Array||_.push&&c(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(h=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&W(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(E[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,h=this._duration,l=this._rawPrevTime;if(t>=h)this._totalTime=this._time=h,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===h&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>l||l===_&&"isPause"!==this.data)&&l!==t&&(i=!0,l>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||l===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===h&&l>0&&l!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===h&&(this._initted||!this.vars.lazy||i)&&(l>=0&&(l!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||l===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/h,p=this._easeType,c=this._easePower;(1===p||3===p&&u>=.5)&&(u=1-u),3===p&&(u*=2),1===c?u*=u:2===c?u*=u*u:3===c?u*=u*u*u:4===c&&(u*=u*u*u*u),this.ratio=1===p?1-u:2===p?u:.5>t/h?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/h);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=l,I.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/h):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===h)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||y))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||y)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||y),0===h&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,h,l,_,u;if((c(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(h=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(l=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in l)o[n]&&(u||(u=[]),u.push(n));
if(!G(this,i,e,u))return!1}for(n in l)(a=o[n])&&(a.pg&&a.t._kill(l)&&(h=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return h},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],A.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=V(s[i],this,!0);else this._siblings=V(this.target,this,!0)}return A.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((c(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=V(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var Q=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=Q.prototype},!0);if(n=Q.prototype,Q.version="1.10.1",Q.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},Q.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===Q.API&&(N[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){Q.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new Q(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,Q.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in f)f[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

/**
 * BezierEasing - use bezier curve for transition easing function
 * is based on Firefox's nsSMILKeySpline.cpp
 * Usage:
 * var spline = BezierEasing(0.25, 0.1, 0.25, 1.0)
 * spline(x) => returns the easing value | x must be in [0, 1] range
 *
 */
(function (definition) {
  if (typeof exports === "object") {
    module.exports = definition();
  }
  else if (typeof window.define === 'function' && window.define.amd) {
    window.define([], definition);
  } else {
    window.BezierEasing = definition();
  }
}(function () {

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  var float32ArraySupported = typeof Float32Array === "function";

  function BezierEasing (mX1, mY1, mX2, mY2) {
    // Validate arguments
    if (arguments.length !== 4) {
      throw new Error("BezierEasing requires 4 arguments.");
    }
    for (var i=0; i<4; ++i) {
      if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
        throw new Error("BezierEasing arguments should be integers.");
      } 
    }
    if (mX1 < 0 || mX1 > 1 || mX2 < 0 || mX2 > 1) {
      throw new Error("BezierEasing x values must be in [0, 1] range.");
    }

    var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
   
    function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
    function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
    function C (aA1)      { return 3.0 * aA1; }
   
    // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
    function calcBezier (aT, aA1, aA2) {
      return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
    }
   
    // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
    function getSlope (aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function newtonRaphsonIterate (aX, aGuessT) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }

    function calcSampleValues () {
      for (var i = 0; i < kSplineTableSize; ++i) {
        mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function binarySubdivide (aX, aA, aB) {
      var currentX, currentT, i = 0;
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
      return currentT;
    }

    function getTForX (aX) {
      var intervalStart = 0.0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;

      // Interpolate to provide an initial guess for t
      var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;

      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT);
      } else if (initialSlope == 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
      }
    }

    if (mX1 != mY1 || mX2 != mY2)
      calcSampleValues();

    var f = function (aX) {
      if (mX1 === mY1 && mX2 === mY2) return aX; // linear
      // Because JavaScript number are imprecise, we should guarantee the extremes are right.
      if (aX === 0) return 0;
      if (aX === 1) return 1;
      return calcBezier(getTForX(aX), mY1, mY2);
    };
    var str = "BezierEasing("+[mX1, mY1, mX2, mY2]+")";
    f.toString = function () { return str; };

    return f;
  }

  // CSS mapping
  BezierEasing.css = {
    "ease":        BezierEasing(0.25, 0.1, 0.25, 1.0),
    "linear":      BezierEasing(0.00, 0.0, 1.00, 1.0),
    "ease-in":     BezierEasing(0.42, 0.0, 1.00, 1.0),
    "ease-out":    BezierEasing(0.00, 0.0, 0.58, 1.0),
    "ease-in-out": BezierEasing(0.42, 0.0, 0.58, 1.0)
  };

  return BezierEasing;

}));



(function($){$.toJSON=function(o)
{if(typeof(JSON)=='object'&&JSON.stringify)
return JSON.stringify(o);var type=typeof(o);if(o===null)
return"null";if(type=="undefined")
return undefined;if(type=="number"||type=="boolean")
return o+"";if(type=="string")
return $.quoteString(o);if(type=='object')
{if(typeof o.toJSON=="function")
return $.toJSON(o.toJSON());if(o.constructor===Date)
{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array)
{var ret=[];for(var i=0;i<o.length;i++)
ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;if(typeof o[k]=="function")
continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};$.quoteString=function(string)
{if(string.match(_escapeable))
{return'"'+string.replace(_escapeable,function(a)
{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(jQuery);

/*! iScroll v5.1.2 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ? 
			'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();

function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		zoomMin: 1,
		zoomMax: 4, startZoom: 1,

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS 

		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	
	/* ANNAM ADDED FROM PROTO.IO-SPECIFIC ISCROLL.JS */
	this.options.freeScroll = this.options.twoWayScroll || this.options.freeScroll;
	/* ANNAM ADDED FROM PROTO.IO-SPECIFIC ISCROLL.JS END */
	
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

	/* ANNAM ADDED FROM ISCROLL-PROBE.JS */
	if ( this.options.probeType == 3 ) {
		this.options.useTransition = false;	}
	/* ANNAM ADDED FROM ISCROLL-PROBE.JS END */
	
// INSERT POINT: NORMALIZATION

	// Some defaults	
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

	this.scale = Math.min(Math.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax);

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.1.2',

	_init: function () {
		this._initEvents();

		if ( this.options.zoom ) {
			this._initZoom();
		}

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);

		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
			if ( e.button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		/* ANNAM ADDED FROM PROTO.IO-SPECIFIC ISCROLL.JS */
		this.twoWayOnEndCheck = true;
		/* ANNAM ADDED FROM PROTO.IO-SPECIFIC ISCROLL.JS END */
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this._transitionTime();

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}
		
		/* ANNAM REMOVING FROM PROTO.IO-SPECIFIC ISCROLL.JS */
		// If you are scrolling in one direction lock the other
		/*
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}
		*/
		
		/* ANNAM ADDED FROM PROTO.IO-SPECIFIC ISCROLL.JS */
		// 2-way scroll
		if ( this.options.twoWayScroll && this.options.scrollX ) {
			if ( !this.directionLocked && absDistX >= absDistY ) {
				this.directionLocked = true;
			}
			
			if ( this.directionLocked ) {
				e.preventDefault();
				e.stopPropagation();
			} else {
				this.initiated = false;
				return;
			}
		} else if ( this.options.twoWayScroll && this.options.scrollY ) {
			if ( !this.directionLocked && absDistY > absDistX ) {
				this.directionLocked = true;
			}

			if ( this.directionLocked ) {
				e.preventDefault();
				e.stopPropagation();
			} else {
				this.initiated = false;
				return;
			}
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock

			}
		}
		/* ANNAM ADDED FROM PROTO.IO-SPECIFIC ISCROLL.JS END */
		
		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
			
			/* ANNAM ADDED FROM ISCROLL-PROBE.JS */
			
			if ( this.options.probeType == 1 ) {
				this._execEvent('scroll');
			}
		}

		if ( this.options.probeType > 1 ) {
			this._execEvent('scroll');
		}

		/* ANNAM ADDED FROM ISCROLL-PROBE.JS END */


/* REPLACE END: _move */

	},

	_end: function (e) {
		
		/* ANNAM CHANGED FROM PROTO.IO-SPECIFIC ISCROLL.JS */
		//if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
		// ANNAM MADE THIS CHANGE MYSELF! ISCROLL WAS BROKEN 
		//if ( (this.options.twoWayScroll && !this.twoWayOnEndCheck) && (!this.enabled || utils.eventType[e.type] !== this.initiated) ) {
		if ( (this.options.twoWayScroll && !this.twoWayOnEndCheck) && (!this.enabled || utils.eventType[e.type] !== this.initiated) ||  !this.options.twoWayScroll && (!this.enabled || utils.eventType[e.type] !== this.initiated)) {
			return;
		}
		
		/* ANNAM ADDED FROM PROTO.IO-SPECIFIC ISCROLL.JS */
		this.twoWayOnEndCheck = false;
		/* ANNAM ADDED FROM PROTO.IO-SPECIFIC ISCROLL.JS END */
		
		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		/* ANNAM CHANGED FROM PROTO.IO-SPECIFIC ISCROLL.JS */
		//if ( !this.moved ) {
		if ( !this.moved && !this.options.snap ) {

			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}
			this._execEvent('scrollCancel');
			return;
		}

		// ANNAM
		//if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
		if (this.moved && this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}
		
		// ANNAM v5.10.8 because if snap and omnidirectional it keeps triggering scrollend on every mouseup touchend etc
		// was causing problems with labels not toggling
		if ( !this.moved && this.options.snap ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}
			this._execEvent('scrollCancel');
			return;
		}
		
		this.moved = false;

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */
	this.scrollerWidth	= Math.round(this.scroller.offsetWidth * this.scale);
	this.scrollerHeight	= Math.round(this.scroller.offsetHeight * this.scale);

	this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
	this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;
/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;

		if ( !time || (this.options.useTransition && easing.style) ) {
			this._transitionTimingFunction(easing.style);
			this._transitionTime(time);
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ') ' + this.translateZ;/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},

	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			for ( var i = that.indicators.length; i--; ) {
				fn.call(that.indicators[i]);
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initZoom: function () {
		this.scrollerStyle[utils.style.transformOrigin] = '0 0';
	},

	_zoomStart: function (e) {
		var c1 = Math.abs( e.touches[0].pageX - e.touches[1].pageX ),
			c2 = Math.abs( e.touches[0].pageY - e.touches[1].pageY );

		this.touchesDistanceStart = Math.sqrt(c1 * c1 + c2 * c2);
		this.startScale = this.scale;

		this.originX = Math.abs(e.touches[0].pageX + e.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x;
		this.originY = Math.abs(e.touches[0].pageY + e.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y;

		this._execEvent('zoomStart');
	},

	_zoom: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {
			e.preventDefault();
		}

		var c1 = Math.abs( e.touches[0].pageX - e.touches[1].pageX ),
			c2 = Math.abs( e.touches[0].pageY - e.touches[1].pageY ),
			distance = Math.sqrt( c1 * c1 + c2 * c2 ),
			scale = 1 / this.touchesDistanceStart * distance * this.startScale,
			lastScale,
			x, y;

		this.scaled = true;

		if ( scale < this.options.zoomMin ) {
			scale = 0.5 * this.options.zoomMin * Math.pow(2.0, scale / this.options.zoomMin);
		} else if ( scale > this.options.zoomMax ) {
			scale = 2.0 * this.options.zoomMax * Math.pow(0.5, this.options.zoomMax / scale);
		}

		lastScale = scale / this.startScale;
		x = this.originX - this.originX * lastScale + this.startX;
		y = this.originY - this.originY * lastScale + this.startY;

		this.scale = scale;

		this.scrollTo(x, y, 0);
	},

	_zoomEnd: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {
			e.preventDefault();
		}

		var newX, newY,
			lastScale;

		this.isInTransition = 0;
		this.initiated = 0;

		if ( this.scale > this.options.zoomMax ) {
			this.scale = this.options.zoomMax;
		} else if ( this.scale < this.options.zoomMin ) {
			this.scale = this.options.zoomMin;
		}

		// Update boundaries
		this.refresh();

		lastScale = this.scale / this.startScale;

		newX = this.originX - this.originX * lastScale + this.startX;
		newY = this.originY - this.originY * lastScale + this.startY;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		if ( this.x != newX || this.y != newY ) {
			this.scrollTo(newX, newY, this.options.bounceTime);
		}

		this.scaled = false;

		this._execEvent('zoomEnd');
	},

	zoom: function (scale, x, y, time) {
		if ( scale < this.options.zoomMin ) {
			scale = this.options.zoomMin;
		} else if ( scale > this.options.zoomMax ) {
			scale = this.options.zoomMax;
		}

		if ( scale == this.scale ) {
			return;
		}

		var relScale = scale / this.scale;

		x = x === undefined ? this.wrapperWidth / 2 : x;
		y = y === undefined ? this.wrapperHeight / 2 : y;
		time = time === undefined ? 300 : time;

		x = x + this.wrapperOffset.left - this.x;
		y = y + this.wrapperOffset.top - this.y;

		x = x - x * relScale + this.x;
		y = y - y * relScale + this.y;

		this.scale = scale;

		this.refresh();		// update boundaries

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		this.scrollTo(x, y, time);
	},

	_wheelZoom: function (e) {
		var wheelDeltaY,
			deltaScale,
			that = this;

		// Execute the zoomEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			that._execEvent('zoomEnd');
		}, 400);

		if ( 'deltaX' in e ) {
			wheelDeltaY = -e.deltaY / Math.abs(e.deltaY);
		} else if ('wheelDeltaX' in e) {
			wheelDeltaY = e.wheelDeltaY / Math.abs(e.wheelDeltaY);
		} else if('wheelDelta' in e) {
			wheelDeltaY = e.wheelDelta / Math.abs(e.wheelDelta);
		} else if ('detail' in e) {
			wheelDeltaY = -e.detail / Math.abs(e.wheelDelta);
		} else {
			return;
		}

		deltaScale = this.scale + wheelDeltaY / 5;

		this.zoom(deltaScale, e.pageX, e.pageY, 0);
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();
		e.stopPropagation();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			that._execEvent('scrollEnd');
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			wheelDeltaX = -e.deltaX;
			wheelDeltaY = -e.deltaY;
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

		/* ANNAM ADDED FROM ISCROLL-PROBE.JS */
		if ( this.options.probeType > 1 ) {
			this._execEvent('scroll');
		}
		/* ANNAM ADDED FROM ISCROLL-PROBE.JS END */
		
// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		// ANNAM BECAUSE WHEN NOT VISIBLE, this.pages.length==0;
		if(typeof(this.pages) == 'undefined' || (typeof(this.pages) != 'undefined' && this.pages.length == 0)) {
			return false;
		}
		// ANNAM END
		
		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
			
			/* ANNAM ADDED FROM ISCROLL-PROBE.JS */
			if ( that.options.probeType == 3 ) {
				that._execEvent('scroll');
			}
			/* ANNAM ADDED FROM ISCROLL-PROBE.JS END */
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				
				/* ANNAM FOR AO APP */
				if (e.touches && e.touches.length == 3 ) {
					return;
				}
				/* ANNAM FOR AO APP END */
				
				this._start(e);

				if ( this.options.zoom && e.touches && e.touches.length > 1 ) {
					this._zoomStart(e);
				}
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				
				/* ANNAM FOR AO APP */
				if (e.touches && e.touches.length == 3 ) {
					return;
				}
				/* ANNAM FOR AO APP END */
				
				if ( this.options.zoom && e.touches && e.touches[1] ) {
					this._zoom(e);
					return;
				}
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				
				/* ANNAM FOR AO APP */
				if (e.touches && e.touches.length == 3 ) {
					return;
				}
				/* ANNAM FOR AO APP END */
				
				if ( this.scaled ) {
					this._zoomEnd(e);
					return;
				}
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				if ( this.options.wheelAction == 'zoom' ) {
					this._wheelZoom(e);
					return;	
				}
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
		}
	}

};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

		/* ANNAM ADDED FROM ISCROLL-PROBE.JS */
		if ( this.scroller.options.probeType == 1 && timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.scroller._execEvent('scroll');
		} else if ( this.scroller.options.probeType > 1 ) {
			this.scroller._execEvent('scroll');
		}
		/* ANNAM ADDED FROM ISCROLL-PROBE.JS END */
		
// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));	
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);

/*
*   Json Diff Patch
*   ---------------
*   https://github.com/benjamine/JsonDiffPatch
*   by Benjamin Eidelman - beneidel@gmail.com
*/
(function(){
"use strict";

    var jdp = {};
    if (typeof jsondiffpatch != 'undefined'){
        jdp = jsondiffpatch;
    }
    var jsondiffpatch = jdp;
    jdp.version = '0.0.7';
    jdp.config = {
        textDiffMinLength: 60,
        detectArrayMove: true,
        includeValueOnArrayMove: false
    };

    var sequenceDiffer = {

        diff: function(array1, array2, objectHash, objectInnerDiff) {
            var commonHead = 0, commonTail = 0, index, index1;
            var len1 = array1.length;
            var len2 = array2.length;
            var diff;
            var hashCache1 = [];
            var hashCache2 = [];
            var areTheSame = typeof objectHash == 'function' ?
                function(value1, value2, index1, index2) {
                    if (value1 === value2)
                        return true;
                    if (typeof value1 != 'object' || typeof value2 != 'object')
                        return false;
                    var hash1, hash2;
                    if (typeof index1 == 'number') {
                        hash1 =  hashCache1[index1];
                        if (typeof hash1 == 'undefined') {
                            hashCache1[index1] = hash1 = objectHash(value1);
                        }
                    } else {
                        hash1 = objectHash(value1);
                    }
                    if (typeof index2 == 'number') {
                        hash2 =  hashCache2[index2];
                        if (typeof hash2 == 'undefined') {
                            hashCache2[index2] = hash2 = objectHash(value2);
                        }
                    } else {
                        hash2 = objectHash(value2);
                    }
                    return hash1 === hash2;
                } :
                function(value1, value2) {
                    return value1 === value2;
                };
            var areTheSameByIndex = function(index1, index2) {
                return areTheSame(array1[index1], array2[index2], index1, index2);
            };

            var tryObjectInnerDiff = function(index1, index2) {
                if (!objectInnerDiff) {
                    return;
                }
                if (typeof array1[index1] != 'object' || typeof array2[index2] != 'object') {
                    return;
                }
                var result = objectInnerDiff(array1[index1], array2[index2]);
                if (typeof result == 'undefined') {
                    return;
                }
                if (!diff) {
                    diff = { _t: 'a' };
                }
                diff[index2] = result;
            };

            // separate common head
            while (commonHead < len1 && commonHead < len2 &&
                areTheSameByIndex(commonHead, commonHead)) {
                tryObjectInnerDiff(commonHead, commonHead);
                commonHead++;
            }
            // separate common tail
            while (commonTail + commonHead < len1 && commonTail + commonHead < len2 &&
                areTheSameByIndex(len1 - 1 - commonTail, len2 - 1 - commonTail)) {
                tryObjectInnerDiff(len1 - 1 - commonTail, len2 - 1 - commonTail);
                commonTail++;
            }

            if (commonHead + commonTail === len1) {
                if (len1 === len2) {
                    // arrays are identical
                    return diff;
                }
                // trivial case, a block (1 or more) was added at array2
                diff = diff || { _t: 'a' };
                for (index = commonHead; index < len2 - commonTail; index++) {
                    diff[index] = [array2[index]];
                }
                return diff;
            } else if (commonHead + commonTail === len2) {
                // trivial case, a block (1 or more) was removed from array1
                diff = diff || { _t: 'a' };
                for (index = commonHead; index < len1 - commonTail; index++) {
                    diff['_'+index] = [array1[index], 0, 0];
                }
                return diff;
            }

            // diff is not trivial, find the LCS (Longest Common Subsequence)
            var lcs = this.lcs(
                array1.slice(commonHead, len1 - commonTail),
                array2.slice(commonHead, len2  - commonTail),
                {
                    areTheSameByIndex: function(index1, index2) {
                        return areTheSameByIndex(index1 + commonHead, index2 + commonHead);
                    }
                });

            diff = diff || { _t: 'a' };

            var removedItems = [];
            for (index = commonHead; index < len1 - commonTail; index++) {
                if (lcs.indices1.indexOf(index - commonHead) < 0) {
                    // removed
                    diff['_'+index] = [array1[index], 0, 0];
                    removedItems.push(index);
                }
            }
            var removedItemsLength = removedItems.length;
            for (index = commonHead; index < len2 - commonTail; index++) {
                var indexOnArray2 = lcs.indices2.indexOf(index - commonHead);
                if (indexOnArray2 < 0) {
                    // added, try to match with a removed item and register as position move
                    var isMove = false;
                    if (jdp.config.detectArrayMove) {                        
                        if (removedItemsLength > 0) {
                            for (index1 = 0; index1 < removedItemsLength; index1++) {
                                if (areTheSameByIndex(removedItems[index1], index)) {
                                    // store position move as: [originalValue, newPosition, 3]
                                    diff['_' + removedItems[index1]].splice(1, 2, index, 3);
                                    if (!jdp.config.includeValueOnArrayMove) {
                                        // don't include moved value on diff, to save bytes
                                        diff['_' + removedItems[index1]][0] = '';
                                    }
                                    tryObjectInnerDiff(removedItems[index1], index);
                                    removedItems.splice(index1, 1);
                                    isMove = true;
                                    break;
                                }
                            }
                        }
                    }
                    if (!isMove) {
                        // added
                        diff[index] = [array2[index]];
                    }
                } else {
                    // match, do inner diff
                    tryObjectInnerDiff(lcs.indices1[indexOnArray2] + commonHead, lcs.indices2[indexOnArray2] + commonHead);
                }
            }

            return diff;
        },

        getArrayIndexBefore: function(d, indexAfter) {
            var index, indexBefore = indexAfter;
            for (var prop in d) {
                if (d.hasOwnProperty(prop)) {
                    if (isArray(d[prop])) {
                        if (prop.slice(0, 1) === '_') {
                            index = parseInt(prop.slice(1), 10);
                        } else {
                            index = parseInt(prop, 10);
                        }
                        if (d[prop].length === 1) {
                            if (index < indexAfter) {
                                // this item was inserted before
                                indexBefore--;
                            } else {
                                if (index === indexAfter) {
                                    // the item is new
                                    return -1;
                                }
                            }
                        } else if (d[prop].length === 3) {
                            if (d[prop][2] === 0) {
                                if (index <= indexAfter) {
                                    // this item was removed before
                                    indexBefore++;
                                }
                            } else {
                                if (d[prop][2] === 3) {
                                    if (index <= indexAfter) {
                                        // this item was moved from a position before
                                        indexBefore++;
                                    }
                                    if (d[prop][1] > indexAfter) {
                                        // this item was moved to a position before
                                        indexBefore--;
                                    } else {
                                        if (d[prop][1] === indexAfter) {
                                            // the items was moved from other position
                                            return index;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return indexBefore;
        },

        patch: function(array, d, objectInnerPatch, path) {
            var index, index1;
            var numerically = function(a, b) {
                return a - b;
            };
            var numericallyBy = function(name) {
                return function(a, b) {
                    return a[name] - b[name];
                };
            };

            // first, separate removals, insertions and modifications
            var toRemove = [];
            var toInsert = [];
            var toModify = [];
            for (index in d) {
                if (index !== '_t') {
                    if (index[0] == '_') {
                        // removed item from original array
                        if (d[index][2] === 0 || d[index][2] === 3) {
                            toRemove.push(parseInt(index.slice(1), 10));
                        } else {
                            throw new Error('only removal or move can be applied at original array indices, invalid diff type: ' + d[index][2]);
                        }
                    } else {
                        if (d[index].length === 1) {
                            // added item at new array
                            toInsert.push({
                                index: parseInt(index, 10),
                                value: d[index][0]
                            });
                        } else {
                            // modified item at new array
                            toModify.push({
                                index: parseInt(index, 10),
                                diff: d[index]
                            });
                        }
                    }
                }
            }

            // remove items, in reverse order to avoid sawing our own floor
            toRemove = toRemove.sort(numerically);
            for (index = toRemove.length - 1; index >= 0; index--) {
                index1 = toRemove[index];
                var indexDiff = d['_' + index1];
                var removedValue = array.splice(index1, 1)[0];
                if (indexDiff[2] === 3) {
                    // reinsert later
                    toInsert.push({
                        index: indexDiff[1],
                        value: removedValue
                    });
                }
            }

            // insert items, in reverse order to avoid moving our own floor
            toInsert = toInsert.sort(numericallyBy('index'));
            var toInsertLength = toInsert.length;
            for (index = 0; index < toInsertLength; index++) {
                var insertion = toInsert[index];
                array.splice(insertion.index, 0, insertion.value);
            }

            // apply modifications
            var toModifyLength = toModify.length;
            if (toModifyLength > 0) {
                if (typeof objectInnerPatch != 'function') {
                    throw new Error('to patch items in the array an objectInnerPatch function must be provided');
                }
                for (index = 0; index < toModifyLength; index++) {
                    var modification = toModify[index];
                    objectInnerPatch(array, modification.index.toString(), modification.diff, path);
                }
            }

            return array;
        },

        lcs: function(array1, array2, options) {

            // http://en.wikipedia.org/wiki/Longest_common_subsequence_problem
            options.areTheSameByIndex = options.areTheSameByIndex || function(index1, index2) {
                return array1[index1] === array2[index2];
            };
            var matrix = this.lengthMatrix(array1, array2, options);
            var result = this.backtrack(matrix, array1, array2, array1.length, array2.length);
            if (typeof array1 == 'string' && typeof array2 == 'string') {
                result.sequence = result.sequence.join('');
            }
            return result;
        },

        lengthMatrix: function(array1, array2, options) {
            var len1 = array1.length;
            var len2 = array2.length;
            var x, y;
            
            // initialize empty matrix of len1+1 x len2+1
            var matrix = [len1 + 1];
            for (x = 0; x < len1 + 1; x++) {
                matrix[x] = [len2 + 1];
                for (y = 0; y < len2 + 1; y++) {
                    matrix[x][y] = 0;
                }
            }
            matrix.options = options;
            // save sequence lengths for each coordinate
            for (x = 1; x < len1 + 1; x++) {
                for (y = 1; y < len2 + 1; y++) {
                    if (options.areTheSameByIndex(x - 1, y - 1)) {
                        matrix[x][y] = matrix[x - 1][y - 1] + 1;
                    } else {
                        matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
                    }
                }
            }
            return matrix;
        },

        backtrack: function(lenghtMatrix, array1, array2, index1, index2) {
            if (index1 === 0 || index2 === 0) {
                return {
                    sequence: [],
                    indices1: [],
                    indices2: []
                };
            }

            if (lenghtMatrix.options.areTheSameByIndex(index1 - 1, index2 - 1)) {
                var subsequence = this.backtrack(lenghtMatrix, array1, array2, index1 - 1, index2 - 1);
                subsequence.sequence.push(array1[index1 - 1]);
                subsequence.indices1.push(index1 - 1);
                subsequence.indices2.push(index2 - 1);
                return subsequence;
            }

            if (lenghtMatrix[index1][index2 - 1] > lenghtMatrix[index1 - 1][index2]) {
                return this.backtrack(lenghtMatrix, array1, array2, index1, index2 - 1);
            } else {
                return this.backtrack(lenghtMatrix, array1, array2, index1 - 1, index2);
            }
        }
    };

    jdp.sequenceDiffer = sequenceDiffer;

    jdp.dateReviver = function(key, value){
        var a;
        if (typeof value === 'string') {
            a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)(Z|([+\-])(\d{2}):(\d{2}))$/.exec(value);
            if (a) {
                return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
            }
        }
        return value;
    };
    
    var diff_match_patch_autoconfig = function(){
        var dmp;
        
        if (jdp.config.diff_match_patch) {
            dmp = new jdp.config.diff_match_patch.diff_match_patch();
        }
        if (typeof diff_match_patch != 'undefined') {
            if (typeof diff_match_patch == 'function') {
                dmp = new diff_match_patch();
            }
            else if (typeof diff_match_patch == 'object' && typeof diff_match_patch.diff_match_patch == 'function') {
                dmp = new diff_match_patch.diff_match_patch();
            }
        }
        
        if (dmp) {
            jdp.config.textDiff = function(txt1, txt2){
                return dmp.patch_toText(dmp.patch_make(txt1, txt2));
            };
            jdp.config.textPatch = function(txt1, patch){
                var results = dmp.patch_apply(dmp.patch_fromText(patch), txt1);
                for (var i = 0; i < results[1].length; i++) {
                    if (!results[1][i]) {
                        throw new Error('text patch failed');
                    }
                }
                return results[0];
            };
            return true;
        }
    };

    var isArray = jdp.isArray = (typeof Array.isArray == 'function') ?
        // use native function
        Array.isArray :
        // use instanceof operator
        function(a) {
            return typeof a == 'object' && a instanceof Array;
        };

    var isDate = jdp.isDate = function(d){
        return d instanceof Date || Object.prototype.toString.call(d) === '[object Date]';
    };

    var arrayDiff = function(o, n){
        return sequenceDiffer.diff(o, n, jdp.config.objectHash, jdp.diff);
    };

    var objectDiff = function(o, n){
    
        var odiff, pdiff, prop, addPropDiff;
        
        addPropDiff = function(name){
            
            pdiff = diff(o[name], n[name]);
            if (typeof pdiff != 'undefined') {
                if (typeof odiff == 'undefined') {
                    odiff = {};
                }
                odiff[name] = pdiff;
            }
        };
        
        for (prop in n) {
            if (n.hasOwnProperty(prop)) {
                addPropDiff(prop);
            }
        }
        for (prop in o) {
            if (o.hasOwnProperty(prop)) {
                if (typeof n[prop] == 'undefined') {
                    addPropDiff(prop);
                }
            }
        }
        return odiff;
    };
    
    var diff = jdp.diff = function(o, n){
        var ntype, otype, nnull, onull, d;
        
        if (o === n) {
            return;
        }
        if ((o !== o) && (n !== n)) {
            return; // o and n are both NaN
        }
        ntype = typeof n;
        otype = typeof o;
        nnull = n === null;
        onull = o === null;

        // handle Date objects
        if (otype == 'object' && isDate(o)){
            otype = 'date';
        }
        if (ntype == 'object' && isDate(n)){
            ntype = 'date';
            if (otype == 'date'){
                // check if equal dates
                if (o.getTime() === n.getTime()){
                    return;
                }
            }
        }
        
        if (nnull || onull || ntype == 'undefined' || ntype != otype ||
        ntype == 'number' ||
        otype == 'number' ||
        ntype == 'boolean' ||
        otype == 'boolean' ||
        ntype == 'string' ||
        otype == 'string' ||
        ntype == 'date' ||
        otype == 'date' ||
        ((ntype === 'object') && (isArray(n) != isArray(o)))) {
            // value changed
            d = [];
            if (typeof o != 'undefined') {
                if (typeof n != 'undefined') {
                    var longText = (ntype == 'string' && otype == 'string' && Math.min(o.length, n.length) > jdp.config.textDiffMinLength);
                    if (longText && !jdp.config.textDiff) {
                        diff_match_patch_autoconfig();
                    }
                    if (longText && jdp.config.textDiff) {
                        // get changes form old value to new value as a text diff
                        d.push(jdp.config.textDiff(o, n), 0, 2);
                    }
                    else {
                        // old value changed to new value
                        d.push(o);
                        d.push(n);
                    }
                }
                else {
                    // old value has been removed
                    d.push(o);
                    d.push(0, 0);
                }
            }
            else {
                // new value is added
                d.push(n);
            }
            return d;
        }
        else {
            if (isArray(n)) {
                // diff 2 arrays
                return arrayDiff(o, n);
            }
            else {
                // diff 2 objects
                return objectDiff(o, n);
            }
        }
    };
    
    var objectGet = function(obj, key){
        if (isArray(obj)) {
            return obj[parseInt(key, 10)];
        }
        return obj[key];
    };
    
    jdp.getByKey = objectGet;
    
    var objectSet = function(obj, key, value){
        if (isArray(obj) && obj._key) {
            var getKey = obj._key;
            if (typeof obj._key != 'function') {
                getKey = function(item){
                    return item[obj._key];
                };
            }
            for (var i = 0; i < obj.length; i++) {
                if (getKey(obj[i]) === key) {
                    if (typeof value == 'undefined') {
                        obj.splice(i, 1);
                        i--;
                    }
                    else {
                        obj[i] = value;
                    }
                    return;
                }
            }
            if (typeof value != 'undefined') {
                obj.push(value);
            }
            return;
        }
        if (typeof value == 'undefined') {
            if (isArray(obj)) {
                obj.splice(key, 1);
            } else {
                delete obj[key];
            }
        }
        else {
            obj[key] = value;
        }
    };

    var textDiffReverse = function(td){

        if (!jdp.config.textDiffReverse){
            jdp.config.textDiffReverse = function(d){

                var i, l, lines, line, lineTmp, header = null, headerRegex = /^@@ +\-(\d+),(\d+) +\+(\d+),(\d+) +@@$/, lineHeader, lineAdd, lineRemove;

                var diffSwap = function() {
                    // swap
                    if (lineAdd !== null) {
                        lines[lineAdd] = '-' + lines[lineAdd].slice(1);
                    }
                    if (lineRemove !== null) {
                        lines[lineRemove] = '+' + lines[lineRemove].slice(1);
                        if (lineAdd !== null) {
                            lineTmp = lines[lineAdd];
                            lines[lineAdd] = lines[lineRemove];
                            lines[lineRemove] = lineTmp;
                        }
                    }

                    // fix header
                    lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';

                    header = null;
                    lineHeader = null;
                    lineAdd = null;
                    lineRemove = null;
                };

                lines = d.split('\n');
                for (i = 0, l = lines.length; i<l; i++) {
                    line = lines[i];
                    var lineStart = line.slice(0,1);
                    if (lineStart==='@'){
                        if (header !== null) {
                            //diffSwap();
                        }
                        header = headerRegex.exec(line);
                        lineHeader = i;
                        lineAdd = null;
                        lineRemove = null;

                        // fix header
                        lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
                    } else if (lineStart == '+'){
                        lineAdd = i;
                        lines[i] = '-' + lines[i].slice(1);
                    } else if (lineStart == '-'){
                        lineRemove = i;
                        lines[i] = '+' + lines[i].slice(1);
                    }
                }
                if (header !== null) {
                    //diffSwap();
                }
                return lines.join('\n');
            };
        }
        return jdp.config.textDiffReverse(td);
    };

    var reverse = jdp.reverse = function(d){

        var prop, rd;

        if (typeof d == 'undefined')
        {
            return;
        }
        else if (d === null)
        {
            return null;
        }
        else if (typeof d == 'object' && !isDate(d))
        {
            if (isArray(d))
            {
                if (d.length < 3)
                {
                    if (d.length === 1) {
                        // add => delete
                        return [d[0], 0, 0];
                    } else {
                        // modify => reverse modify
                        return [d[1], d[0]];
                    }
                }
                else
                {
                    if (d[2] === 0)
                    {
                        // undefined, delete value => add value
                        return [d[0]];
                    }
                    else
                    {
                        if (d[2] === 2) {
                            return [textDiffReverse(d[0]), 0, 2];
                        }
                        else
                        {
                            throw new Error("invalid diff type");
                        }
                    }
                }
            }
            else
            {
                rd = {};
                if (d._t === 'a') {
                    for (prop in d) {
                        if (d.hasOwnProperty(prop) && prop !== '_t') {
                            var index, reverseProp = prop;
                            if (prop.slice(0, 1) === '_') {
                                index = parseInt(prop.slice(1), 10);
                            } else {
                                index = parseInt(prop, 10);
                            }
                            if (isArray(d[prop])) {
                                if (d[prop].length === 1) {
                                    // add => delete
                                    reverseProp = '_' + index;
                                } else {
                                    if (d[prop].length === 2) {
                                        // modify => reverse modify
                                        reverseProp = sequenceDiffer.getArrayIndexBefore(d, index);
                                    } else {
                                        if (d[prop][2] === 0) {
                                            // delete => add
                                            reverseProp = index.toString();
                                        } else {
                                            if (d[prop][2] === 3) {
                                                // move => reverse move
                                                reverseProp = '_' + d[prop][1];
                                                rd[reverseProp] = [d[prop][0], index, 3];
                                                continue;
                                            } else {
                                                // other modify (eg. textDiff) => reverse modify
                                                reverseProp = sequenceDiffer.getArrayIndexBefore(d, index);
                                            }
                                        }
                                    }
                                }
                            } else {
                                // inner diff => reverse inner diff
                                reverseProp = sequenceDiffer.getArrayIndexBefore(d, index);
                            }
                            rd[reverseProp] = reverse(d[prop]);
                        }
                    }
                    rd._t = 'a';
                } else {
                    for (prop in d) {
                        if (d.hasOwnProperty(prop)) {
                            rd[prop] = reverse(d[prop]);
                        }
                    }
                }
                return rd;
            }
        } else if (typeof d === 'string' && d.slice(0,2) === '@@'){
            return textDiffReverse(d);
        }
        return d;
    };
    
    var patch = jdp.patch = function(o, pname, d, path) {
    
        var p, nvalue, subpath = '', target;
        
        if (typeof pname != 'string') {
            path = d;
            d = pname;
            pname = null;
        }
        else {
            if (typeof o != 'object') {
                pname = null;
            }
        }
        
        if (path) {
            subpath += path;
        }
        subpath += '/';
        if (pname !== null) {
            subpath += pname;
        }
        
        if (typeof d == 'object') {
            if (isArray(d)) {
                // changed value
                if (d.length < 3) {
                    nvalue = d[d.length - 1];
                    if (pname !== null) {
                        objectSet(o, pname, nvalue);
                    }
                    return nvalue;
                }
                else {
                    if (d[2] === 0) {
                        // undefined, delete value
                        if (pname !== null) {
                            objectSet(o, pname);
                        }
                        else {
                            return;
                        }
                    }
                    else
                    {
                        if (d[2] === 2) {
                            // text diff
                            if (!jdp.config.textPatch) {
                                diff_match_patch_autoconfig();
                            }
                            if (!jdp.config.textPatch) {
                                throw new Error("textPatch function not found");
                            }
                            try {
                                nvalue = jdp.config.textPatch(objectGet(o, pname), d[0]);
                            }
                            catch (text_patch_err) {
                                throw new Error('cannot apply patch at "' + subpath + '": ' + text_patch_err);
                            }
                            if (pname !== null) {
                                objectSet(o, pname, nvalue);
                            }
                            return nvalue;
                        }
                        else
                        {
                            if (d[2] === 3) {
                                // position move

                                // TODO: remove from current position, to insert later at new position
                                throw new Error("Not implemented diff type: " + d[2]);
                            } else {
                                throw new Error("invalid diff type: " + d[2]);
                            }
                        }
                    }
                }
            }
            else {
                if (d._t == 'a') {
                    // array diff
                    target = pname === null ? o : objectGet(o, pname);
                    if (typeof target != 'object' || !isArray(target)) {
                        throw new Error('cannot apply patch at "' + subpath + '": array expected');
                    }
                    else {
                        sequenceDiffer.patch(target, d, jsondiffpatch.patch, subpath);
                    }
                }
                else {
                    // object diff
                    target = pname === null ? o : objectGet(o, pname);
                    if (typeof target != 'object' || isArray(target)) {
                        throw new Error('cannot apply patch at "' + subpath + '": object expected');
                    }
                    else {
                        for (p in d) {
                            if (d.hasOwnProperty(p)) {
                                patch(target, p, d[p], subpath);
                            }
                        }
                    }
                }
            }
        }
        
        return o;
    };

    var unpatch = jdp.unpatch = function(o, pname, d, path){
        
        if (typeof pname != 'string') {
            return patch(o, reverse(pname), d);
        }

        return patch(o, pname, reverse(d), path);
    };
    
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // CommonJS, eg: node.js
        module.exports = jdp;
    } else if (typeof define === 'function' && define['amd']) {
        // AMD
        define(jdp);
    } else {
        // browser global
        window.jsondiffpatch = jdp;
    }

})();


/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-iepp-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function I(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function G(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return F(d,b)}function F(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function E(a,b){return!!~(""+a).indexOf(b)}function D(a,b){return typeof a===b}function C(a,b){return B(o.join(a+";")+(b||""))}function B(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(b){if(a.matchMedia)return matchMedia(b).matches;var c;v("@media "+b+" { #"+i+" { position: absolute; } }",function(b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"});return c},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=D(e[d],"function"),D(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y,z={}.hasOwnProperty,A;!D(z,c)&&!D(z.call,c)?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],c)};var H=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!D(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){B("background-color:rgba(150,255,150,.5)");return E(k.backgroundColor,"rgba")},r.hsla=function(){B("background-color:hsla(120,40%,100%,.5)");return E(k.backgroundColor,"rgba")||E(k.backgroundColor,"hsla")},r.multiplebgs=function(){B("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return G("backgroundSize")},r.borderimage=function(){return G("borderImage")},r.borderradius=function(){return G("borderRadius")},r.boxshadow=function(){return G("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){C("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return G("animationName")},r.csscolumns=function(){return G("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";B((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return E(k.backgroundImage,"gradient")},r.cssreflections=function(){return G("boxReflect")},r.csstransforms=function(){return!!F(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!F(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return G("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var J in r)A(r,J)&&(y=J.toLowerCase(),e[y]=r[J](),u.push((e[y]?"":"no-")+y));e.input||I(),B(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.mq=w,e.hasEvent=x,e.testProp=function(a){return F([a])},e.testAllProps=G,e.testStyles=v,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function merge(dest, src) {
    return extend(dest, src, true);
}

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        extend(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument;
    return (doc.defaultView || doc.parentWindow);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;
    
    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY)
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
    
    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    // ANNAM - i need this for my swipe recognizer so that i don't trigger swipe if we've pinched and just released one finger before the other
    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length > session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
    // ANNAM END
    
    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0,
        y = 0,
        i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.allow = true; // used by Input.TouchMouse to disable mouse events
    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
        if (!this.pressed || !this.allow) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            store.push(ev);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // get index of the event in the store
        // it not found, so the pointer hasn't been down (so it's probably a hover)
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    /**
     * handle touch events
     * @param {Object} ev
     */
    handler: function TEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches = toArray(ev.targetTouches),
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [];

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        // when we're in a touch event, so  block all upcoming mouse events
        // most mobile browser also emit mouseevents, right after touchstart
        if (isTouch) {
            this.mouse.allow = false;
        } else if (isMouse && !this.mouse.allow) {
            return;
        }

        // reset the allowMouse when we're done
        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
            this.mouse.allow = true;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        // not needed with native support for the touchAction property
        if (NATIVE_TOUCH_ACTION) {
            return;
        }

        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // pan-x and pan-y can be combined
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.id = uniqueId();

    this.manager = null;
    this.options = merge(options || {}, this.defaults);

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        extend(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(withState) {
            self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(true);
        }

        emit(); // simple 'eventName' events

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(true);
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = extend({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
    	/* ANNAM - enna spasei to plasma?  touch action none causes tons of problems with inputs not focussing, labels not toggling */
    	return ['pan-x', 'pan-y'];
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        this._super.emit.call(this, input);
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            this.manager.emit(this.options.event + inOut, input);
        }
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 500, // minimal time of the pointer to be pressed
        threshold: 5 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();

            // ANNAM - press not working for audio elements on iOS if this._input is used
            // and im not using timestamp anw for press
            // annam this didnt work after all, so reverting to original :( 

            // original
            this.manager.emit(this.options.event, this._input);

            // annam hack not working 
            //this.manager.emit(this.options.event, input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.65,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers && 
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 2, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED ) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create an manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.3';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, { enable: false }],
        [PinchRecognizer, { enable: false }, ['rotate']],
        [SwipeRecognizer,{ direction: DIRECTION_HORIZONTAL }],
        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    options = options || {};

    this.options = merge(options, Hammer.defaults);
    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        extend(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        var recognizers = this.recognizers;
        recognizer = this.get(recognizer);
        recognizers.splice(inArray(recognizers, recognizer), 1);

        this.touchAction.update();
        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    each(manager.options.cssProps, function(value, name) {
        element.style[prefixed(element.style, name)] = add ? value : '';
    });
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

extend(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

if (typeof define == TYPE_FUNCTION && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


(function($, Hammer, dataAttr) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data(dataAttr)) {
            $el.data(dataAttr, new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            jQuery(this.element).triggerHandler({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
})(jQuery, Hammer, "hammer");


﻿/*
 * MBP - Mobile boilerplate helper functions
 */
(function(document){

window.MBP = window.MBP || {}; 

// Fix for iPhone viewport scale bug 
// http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/

MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
MBP.ua = navigator.userAgent;

MBP.scaleFix = function () {
  if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
    MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    document.addEventListener("gesturestart", MBP.gestureStart, false);
  }
};
MBP.gestureStart = function () {
  MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
};


/*
  * Normalized hide address bar for iOS & Android
  * (c) Scott Jehl, scottjehl.com
  * MIT License
*/

// If we split this up into two functions we can reuse
// this function if we aren't doing full page reloads.

// If we cache this we don't need to re-calibrate everytime we call
// the hide url bar
MBP.BODY_SCROLL_TOP = false;

// So we don't redefine this function everytime we
// we call hideUrlBar
MBP.getScrollTop = function(){
  var win = window,
      doc = document;

  return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
};

// It should be up to the mobile
MBP.hideUrlBar = function(){
    var win = window;

    // if there is a hash, or MBP.BODY_SCROLL_TOP hasn't been set yet, wait till that happens
    if( !location.hash && MBP.BODY_SCROLL_TOP !== false){
        win.scrollTo( 0, MBP.BODY_SCROLL_TOP === 1 ? 0 : 1 );
    }
};

MBP.hideUrlBarOnLoad = function () {
  var win = window,
      doc = win.document;

  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash && win.addEventListener ) {

    //scroll to 1
    window.scrollTo( 0, 1 );
    MBP.BODY_SCROLL_TOP = 1;

    //reset to 0 on bodyready, if needed
    bodycheck = setInterval(function() {
      if( doc.body ) {
        clearInterval( bodycheck );
        MBP.BODY_SCROLL_TOP = MBP.getScrollTop();
        MBP.hideUrlBar();
      }
    }, 15 );

    win.addEventListener( "load", function() {
      setTimeout(function() {
        //at load, if user hasn't scrolled more than 20 or so...
        if( MBP.getScrollTop() < 20 ) {
          //reset to hide addr bar at onload
          MBP.hideUrlBar();
        }
      }, 0);
    } );
  }
};

// Fast Buttons - read wiki below before using
// https://github.com/h5bp/mobile-boilerplate/wiki/JavaScript-Helper
MBP.fastButton = function (element, handler) {
  this.element = element;
  this.handler = handler;
	
	addEvt(element, "touchstart", this, false);
	addEvt(element, "click", this, false);
};
 
MBP.fastButton.prototype.handleEvent = function(event) {
	event = event || window.event;
  switch (event.type) {
    case 'touchstart': this.onTouchStart(event); break;
    case 'touchmove': this.onTouchMove(event); break;
    case 'touchend': this.onClick(event); break;
    case 'click': this.onClick(event); break;
  }
};

MBP.fastButton.prototype.onTouchStart = function(event) {
  event.stopPropagation();
  this.element.addEventListener('touchend', this, false);
  document.body.addEventListener('touchmove', this, false);
  this.startX = event.touches[0].clientX;
  this.startY = event.touches[0].clientY;
  this.element.style.backgroundColor = "rgba(0,0,0,.7)";
};

MBP.fastButton.prototype.onTouchMove = function(event) {
  if(Math.abs(event.touches[0].clientX - this.startX) > 10 || 
    Math.abs(event.touches[0].clientY - this.startY) > 10    ) {
    this.reset();
  }
};

MBP.fastButton.prototype.onClick = function(event) {
	event = event || window.event;
  if (event.stopPropagation) { event.stopPropagation(); }
  this.reset();
  this.handler(event);
  if(event.type == 'touchend') {
    MBP.preventGhostClick(this.startX, this.startY);
  }
  this.element.style.backgroundColor = "";
};

MBP.fastButton.prototype.reset = function() {
	rmEvt(this.element, "touchend", this, false);
	rmEvt(document.body, "touchmove", this, false);
  this.element.style.backgroundColor = "";
};

MBP.preventGhostClick = function (x, y) {
  MBP.coords.push(x, y);
  window.setTimeout(function (){
    MBP.coords.splice(0, 2);
  }, 2500);
};

MBP.ghostClickHandler = function (event) {
  if (!MBP.hadTouchEvent && 'ontouchstart' in window) {
    // This is a bit of fun for Android 2.3...
    // If you change window.location via fastButton, a click event will fire
    // on the new page, as if the events are continuing from the previous page.
    // We pick that event up here, but MBP.coords is empty, because it's a new page,
    // so we don't prevent it. Here's we're assuming that click events on touch devices
    // that occur without a preceding touchStart are to be ignored. 
    event.stopPropagation();
    event.preventDefault();
    return;
  }
  for(var i = 0, len = MBP.coords.length; i < len; i += 2) {
    var x = MBP.coords[i];
    var y = MBP.coords[i + 1];
    if(Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
};

if (document.addEventListener) {
  document.addEventListener('click', MBP.ghostClickHandler, true);
}

addEvt( document.documentElement, 'touchstart', function() {
  MBP.hadTouchEvent = true;
}, false);
                            
MBP.coords = [];

// fn arg can be an object or a function, thanks to handleEvent
// read more about the explanation at: http://www.thecssninja.com/javascript/handleevent
function addEvt(el, evt, fn, bubble) {
  if("addEventListener" in el) {
    // BBOS6 doesn't support handleEvent, catch and polyfill
    try {
      el.addEventListener(evt, fn, bubble);
    } catch(e) {
      if(typeof fn == "object" && fn.handleEvent) {
        el.addEventListener(evt, function(e){
        // Bind fn as this and set first arg as event object
        fn.handleEvent.call(fn,e);
        }, bubble);
      } else {
        throw e;
      }
    }
  } else if("attachEvent" in el) {
    // check if the callback is an object and contains handleEvent
    if(typeof fn == "object" && fn.handleEvent) {
      el.attachEvent("on" + evt, function(){
        // Bind fn as this
        fn.handleEvent.call(fn);
      });
    } else {
      el.attachEvent("on" + evt, fn);
    }
  }
}

function rmEvt(el, evt, fn, bubble) {
  if("removeEventListener" in el) {
    // BBOS6 doesn't support handleEvent, catch and polyfill
    try {
      el.removeEventListener(evt, fn, bubble);
    } catch(e) {
      if(typeof fn == "object" && fn.handleEvent) {
        el.removeEventListener(evt, function(e){
          // Bind fn as this and set first arg as event object
          fn.handleEvent.call(fn,e);
        }, bubble);
      } else {
        throw e;
      }
    }
  } else if("detachEvent" in el) {
    // check if the callback is an object and contains handleEvent
    if(typeof fn == "object" && fn.handleEvent) {
      el.detachEvent("on" + evt, function(){
        // Bind fn as this
        fn.handleEvent.call(fn);
      });
    } else {
      el.detachEvent("on" + evt, fn);
    }
  }
}


// iOS Startup Image
// https://github.com/h5bp/mobile-boilerplate/issues#issue/2

MBP.splash = function () {
  var filename = navigator.platform === 'iPad' ? 'h/' : 'l/';
  document.write('<link rel="apple-touch-startup-image" href="/img/' + filename + 'splash.png" />' );
};


// Autogrow
// http://googlecode.blogspot.com/2009/07/gmail-for-mobile-html5-series.html

MBP.autogrow = function (element, lh) {
  function handler(e){
    var newHeight = this.scrollHeight,
        currentHeight = this.clientHeight;
    if (newHeight > currentHeight) {
      this.style.height = newHeight + 3 * textLineHeight + "px";
    }
  }

  var setLineHeight = (lh) ? lh : 12,
      textLineHeight = element.currentStyle ? element.currentStyle.lineHeight : 
                       getComputedStyle(element, null).lineHeight;

  textLineHeight = (textLineHeight.indexOf("px") == -1) ? setLineHeight :
                   parseInt(textLineHeight, 10);

  element.style.overflow = "hidden";
  element.addEventListener ? element.addEventListener('keyup', handler, false) :
                             element.attachEvent('onkeyup', handler);
};


// Enable active
// Enable CSS active pseudo styles in Mobile Safari
// http://miniapps.co.uk/blog/post/enable-css-active-pseudo-styles-in-mobile-safari/
MBP.enableActive = function () {
  document.addEventListener("touchstart", function() {}, false);
};


// Prevent iOS from zooming onfocus
// http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/

MBP.viewportMeta = $('meta[name="viewport"]');
MBP.preventZoom = function () {
  $('input, select, textarea').bind('focus blur', function(event) {
    MBP.viewportMeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
  });
};

})(document);

var prx = window.prx || {};

prx.utils = window.prx.utils ||  {};

prx.utils.setCookie = function(c_name,value,exdays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

prx.utils.getCookie = function(c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++) {
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name) {
            return unescape(y);
        }
    }
}

prx.utils.deleteCookie = function(c_name) {
    document.cookie = c_name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

prx.utils.getGuid = function() {
    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    return guid;
}

prx.utils.isGuid = function(str) {
    // to match the getGiud above AND the coldfusion alternative which is 8-4-4-16
    return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/.test(str);
}


prx.utils.getColor = function(color) {

    if(typeof(color) == "undefined") {
        return '';
    }

    if(color == "none") {
        return "rgba(0,0,0,0)";
    }

    if (color == 0) {
        //return '';
        return "rgba(0,0,0,1)";
    }

    if(color == color.replace(/[^A-F0-9]/ig, '')) {
        return '#' + color;
    }

    return color;
}


prx.componentsHelper = {};

prx.componentsHelper.removeObjMembers = function(obj, toRemove) {
    var _len = toRemove.length;
    for(var i=0;i<_len;i++) {
        delete obj[toRemove[i]];
    }
    return obj;
}

prx.componentsHelper.editProperty = function(props, prop, memberName, newValue) {

    if(typeof(props[0].properties) == "undefined") { // properties
        var _len = props.length;
        for(var i=0;i<_len;i++) {
            if(props[i].name == prop){
                props[i][memberName] = newValue;
                return props;
            }
        }
    } else { // propertyGroups
        var _plen = props.length; // property groups len
        for(var i=0;i<_plen;i++) { // loop property groups
            var _llen = props[i].properties.length; // property line len
            for(var j=0;j<_llen;j++) {
                var _len = props[i].properties[j].length; // property len
                for(var k=0;k<_len;k++) {
                    if(props[i].properties[j][k].name == prop){
                        props[i].properties[j][k][memberName] = newValue;
                        return props;
                    }
                }
            }
        }
    }
    return props;
}

prx.componentsHelper.removeProperties = function(props, toRemove) {

    if(typeof(props[0].properties) == "undefined") { // properties
        var _len = props.length;
        for(var i=0;i<_len;i++) {
            if(toRemove.indexOf(props[i].name) != -1){
                props.splice(i, 1);
                i--;
                _len--;
            }
        }
    } else { // propertyGroups
        var _plen = props.length; // property groups len
        for(var i=0;i<_plen;i++) { // loop property groups
            var _llen = props[i].properties.length; // property line len
            for(var j=0;j<_llen;j++) {
                var _len = props[i].properties[j].length; // property len
                for(var k=0;k<_len;k++) {
                    if(toRemove.indexOf(props[i].properties[j][k].name) != -1){
                        props[i].properties[j].splice(k, 1);
                        k--;
                        _len--;
                    }
                }
            }
        }
    }
    return props;
}

// ADAPTED FROM http://my.opera.com/GreyWyvern/blog/show.dml/1725165
prx.componentsHelper.cloneobject = function(obj) {
    var newObj = (obj instanceof Array) ? [] : {};
    for (i in obj) {
        if (i == 'clone') continue;
        if (obj[i] && typeof obj[i] == "object") {
            newObj[i] = prx.componentsHelper.cloneobject(obj[i]);
        } else newObj[i] = obj[i]
    } return newObj;
};

prx.componentsHelper.getRealDims = function(item, symbol) {
    var dims = {};
    dims.width = item.width;
    dims.height = item.height;

    if(typeof(symbol) == "undefined") {
        if(dims.width == 'full') { dims.width = $('#dragarea').width(); }
        if(item.wtype == 'variable') {
            dims.width = $('#dragarea').width() - dims.width;
        }

        if(dims.height == 'full') { dims.height = $('#dragarea').height(); }
        if(item.htype == 'variable') {
            dims.height = $('#dragarea').height() - dims.height;
        }
    } else {
        if(typeof(prx.symbols[prx.stc.containers.getIndexFromId(symbol.symbolid)].dimensions) != "undefined") {
            var _symbolDims = prx.symbols[prx.stc.containers.getIndexFromId(symbol.symbolid)].dimensions;
        } else {
            var _symbolDims = prx.symbols[prx.stc.containers.getIndexFromId(symbol.symbolid)].states[0].dimensions;
        }

        if(dims.width == 'full') { dims.width = symbol.width; }
        if(item.wtype == 'variable') {
            dims.width = _symbolDims[0] - dims.width;
        }

        if(dims.height == 'full') { dims.height = symbol.height; }
        if(item.htype == 'variable') {
            dims.height = _symbolDims[1] - dims.height;
        }
    }
    return dims;
}

prx.componentsHelper.getRealPos = function(item, symbol) {
    var pos = {};
    pos.left = item.left;
    pos.top = item.top;

    if(typeof(symbol) == "undefined") {
        if(item.hpos == 'right') {
            pos.left = $('#dragarea').width() - item.width - item.left;
        } else if(item.hpos == 'center') {
            pos.left = ($('#dragarea').width() - item.width)/2
        }

        if(item.vpos == 'bottom') {
            pos.top = $('#dragarea').height() - item.height - item.top;
        } else if(item.vpos == 'middle') {
            pos.top = ($('#dragarea').height() - item.height)/2
        }
    } else {
        // ?
    }

    return pos;
}

prx.componentsHelper.getAssetUrl = function(asset) {

    if(typeof(asset) == "undefined") { return ''; }

    var assetType = asset.assetType;
    var url = asset.url;

    if (asset.bucketsource == "static") {
        if(typeof(asset.targetSrc) != "undefined") {
            return prx.url.staticassets + '/' + asset.targetSrc;
        }
        return prx.url.staticassets + '/assets/' + url;
    }

    if(assetType == 'project') { url = '/assets/' + assetType + '/' + prx.projectid + '/' + url; }
    else { url = '/assets/' + assetType + '/' + url; }

    if (typeof(prx.s3Links) != "undefined") {
        if (typeof(prx.s3Links[url]) != "undefined") {
            return prx.s3Links[url] + '?v=' + prx._imgs_version;
        }
    }
    //		prx.url['static-assets']
    return url + '?v=' + prx._imgs_version;
}

prx.componentsHelper.getFontCssFromFontFamily = function(fontfamily){
    if(typeof(fontfamily) == "undefined") {
        return "";
    }

    // firefox needs font-weight and also "Helvetica Neue" which wasn't included in the original font definition
    switch(fontfamily) {
        case 'HelveticaNeue, Helvetica, Verdana, Arial, sans-serif':
            return 'font-family: HelveticaNeue, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif;';
            break;
        case 'HelveticaNeue-Medium, Helvetica, Verdana, Arial, sans-serif':
            return 'font-family: HelveticaNeue-Medium, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-weight: 500;';
            break;
        case 'HelveticaNeue-Bold, Helvetica, Verdana, Arial, sans-serif':
            return 'font-family: HelveticaNeue-Bold, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-weight: 700;'
            break;
        case 'HelveticaNeue-Light, Helvetica, Verdana, Arial, sans-serif':
            return 'font-family: HelveticaNeue-Light, Helvetica Neue, Helvetica, Verdana, Arial, sans-serif; font-family: 300;'
            break;
        default:
            break;
    }

    var fontOpts = fontfamily.split(':')

    var str = 'font-family: '+fontOpts[0]+';';

    if(fontOpts.length == 1) {
        return str;
    }

    if(fontOpts[1] == "regular") { return str; }

    if(fontOpts[1].indexOf('italic')!= -1) {
        str += 'font-style: italic; '
    }
    if(!isNaN(parseInt(fontOpts[1], 10))) {
        str += 'font-weight: ' + parseInt(fontOpts[1], 10) + ';'
    }
    return str;

}

// taken from http://thomas.bindzus.me/2007/12/24/adding-dynamic-contents-to-iframes/
prx.componentsHelper.IFrame = function(parentElement) {
    var iframe = document.createElement("iframe");
    if(parentElement == null)
        parentElement = document.body;
    parentElement.appendChild(iframe);
    iframe.doc = null;
    if(iframe.contentDocument) // Firefox, Opera
        iframe.doc = iframe.contentDocument;
    else if(iframe.contentWindow) // Internet Explorer
        iframe.doc = iframe.contentWindow.document;
    else if(iframe.document) // Others?
        iframe.doc = iframe.document;

    if(iframe.doc == null)
    //throw "Document not found, append the parent element to the DOM before creating the IFrame";
        throw "We apologize, an error occured.";
    iframe.doc.open();
    iframe.doc.close();
    return iframe;
}



prx.css = {};

prx.css.RGBA = function(color, offset, alpha){
    if(typeof(alpha) == "undefined") { alpha = 1 }

    var _r = parseInt(color.substr(0,2),16);
    var _g = parseInt(color.substr(2,2),16);
    var _b = parseInt(color.substr(4,2),16);

    return "rgba(" + Math.round(_r + offset) + "," + Math.round(_g + offset) + "," + Math.round(_b + offset) + ", "+alpha+")";
}

// -moz type direction needed.
prx.css.gradient = function(colorStops, direction){
    if(typeof(direction) == "undefined") { direction = 'to center bottom' }
    var cR = '';
    var _moz = '-moz-linear-gradient(';
    var _webkit = '-webkit-gradient(';
    var _standard = 'linear-gradient('

    switch (direction) {
        case 'to center bottom':
            _moz += 'center top';
            _webkit += 'linear, left top, left bottom';
            _standard += 'to center bottom'
            break;
        case 'to center top':
            _moz += 'center bottom';
            _webkit += 'linear, left bottom, left top';
            _standard += 'to center top'
            break;
        case 'to right center':
            _moz += 'left center';
            _webkit += 'linear, left top, right top';
            _standard += 'to right center'
            break;
        case 'to left center':
            _moz += 'right center';
            _webkit += 'linear, right top, left top';
            _standard += 'to left center'
            break;
        /*case '45deg':
         _webkit += 'linear, left bottom, right top';
         break;
         case '-45deg':
         _webkit += 'linear, left top, right bottom';
         break;
         case '135deg':
         _webkit += 'linear, right bottom, left top';
         break;
         case '-135deg':
         _webkit += 'linear, right top, left bottom';
         break;
         */
        case '45deg':
            _moz += '45deg'
            _webkit += 'linear, left bottom, right top';
            _standard += direction
            break;
        case '135deg':
            _moz += '-45deg';
            _webkit += 'linear, left top, right bottom';
            _standard += direction
            break;
        case '-45deg':
            _moz += '135deg'
            _webkit += 'linear, right bottom, left top';
            _standard += direction
            break;
        case '225deg':
            _moz += '-135deg'
            _webkit += 'linear, right top, left bottom';
            _standard += direction
            break;
    }

    for (var i=0;i<colorStops.length;i++) {
        _moz += ", " + colorStops[i].c + " " + colorStops[i].p + "%";
        _webkit += ", color-stop(" + colorStops[i].p/100 + ", " + colorStops[i].c + ")";
        _standard += ", " + colorStops[i].c + " " + colorStops[i].p + "%";
    }

    // for browsers not supporting gradients, background will be the first colorStop.
    cR += 'background: ' + colorStops[0].c + '; ';
    cR += 'background-image: ' + _moz + '); ';
    cR += 'background-image: ' + _webkit + '); ';
    cR += 'background-image: ' + _standard + '); ';

    return cR;
}

prx.css.borderRadius = function(value) {

    if($.isArray(value) && value.length == 4) {
        cR = "";
        if(value[0] != null) {
            cR += 'border-top-left-radius: ' + value[0] + 'px; ';
        }
        if(value[1] != null) {
            cR += 'border-top-right-radius: ' + value[1] + 'px; ';
        }
        if(value[2] != null) {
            cR += 'border-bottom-right-radius: ' + value[2] + 'px; ';
        }
        if(value[3] != null) {
            cR += 'border-bottom-left-radius: ' + value[3] + 'px; ';
        }
        return cR;
    }
    return 'border-radius: ' + value + ';';
}

prx.css.boxShadow = function(shadows) {
    if(!$.isArray(shadows)) { shadows = [shadows]; }

    var _moz = '-moz-box-shadow: ';
    var _webkit = '-webkit-box-shadow: ';
    var _normal = 'box-shadow: ';

    cR = '';
    for (var i=0;i<shadows.length;i++) {
        if(i>0) {
            _moz += ", ";
            _webkit += ", ";
            _normal += ", ";
        }
        _moz += shadows[i];
        _webkit += shadows[i];
        _normal += shadows[i];

        cR += _moz + "; " + _webkit + "; " + _normal + "; ";
    }
    return cR;
}

prx.css.flexJustifyContent = function(dir) {
    var olddir = '';
    switch(dir) {
        case "left":
            dir = "flex-start";
            olddir = 'start';
            break;
        case "right":
            dir = "flex-end";
            olddir = 'end';
            break;
        default:
            olddir = 'center';
    }

    var cR = '';
    cR += '-webkit-box-pack: '+olddir+';';
    cR += '-ms-justify-content: ' + dir + ';';
    cR += '-webkit-justify-content: ' + dir + ';';
    cR += 'justify-content: ' + dir + ';';

    return cR;
}

prx.css.flexJustifyGrow = function(grow) {
    var cR = '';
    cR += '-webkit-box-flex: '+grow+';';
    cR += '-ms-flex-grow: ' + grow + ';';
    cR += '-webkit-flex-grow: ' + grow + ';';
    cR += 'flex-grow: ' + grow + ';';

    return cR;
}


prx.utils = window.prx.utils || {};

prx.compatibility = {};

//@koala-append "_v5.js"

prx.compatibility.v5 = {};

prx.compatibility.v5.ini = function(){

    // stateful objects
    // templates first because i need to find template state id when converting pages.
    prx.compatibility.v5.convertToStatefulTemplates();
    prx.compatibility.v5.convertToStatefulPages();

    // TODO V5 remove if
    if(!(prx.symbols.length>0 && typeof(prx.symbols[0].states) != "undefined")) {
        prx.compatibility.v5.convertToStatefulSymbols();
    }

    prx.v5 = true;

}

prx.compatibility.v5.convertToStatefulPages = function(index){
    for (var index = 0; index < prx.pages.length; index++) {

        prx.pages[index].states = [];

        var data = $.evalJSON(prx.pages[index].data)
        if(prx.stc.templates.getIndexFromId(data.templateid) > -1) {
            var template = {
                id: data.templateid,
                stateid: prx.templates[prx.stc.templates.getIndexFromId(data.templateid)].states[0].id
            }
        } else {
            var template = { id: '' }
        }

        var defaultstate = {
            data: $.toJSON(data.items),
            template: template,
            title: 'Default State',
            history: prx.pages[index].history,
            background: prx.pages[index].background,
            id: prx.utils.getGuid()
        }

        defaultstate = $.toJSON(defaultstate);
        defaultstate = $.evalJSON(defaultstate);

        delete prx.pages[index].data;
        delete prx.pages[index].history;
        delete prx.pages[index].background;

        prx.pages[index].states.push(defaultstate);
    }
    return true;
}

prx.compatibility.v5.convertToStatefulTemplates = function(){

    for (var index = 0; index < prx.templates.length; index++) {
        prx.templates[index].states = [];

        var data = $.evalJSON(prx.templates[index].data)

        var defaultstate = {
            data: $.toJSON(data.items),
            template: {
                id: data.templateid,
                stateid: ''
            },
            title: 'Default State',
            history: prx.templates[index].history,
            background: prx.templates[index].background,
            id: prx.utils.getGuid()
        }

        defaultstate = $.toJSON(defaultstate);
        defaultstate = $.evalJSON(defaultstate);

        delete prx.templates[index].data;
        delete prx.templates[index].history;
        delete prx.templates[index].background;

        prx.templates[index].states.push(defaultstate);
    }

    // recheck now that they all have state ids and set state ids where templateid neq ''
    for (var index = 0; index < prx.templates.length; index++) {
        if(prx.templates[index].states[0].template.id != '' && prx.stc.templates.getIndexFromId(prx.templates[index].states[0].template.id) > -1) {
            prx.templates[index].states[0].template.stateid = prx.templates[prx.stc.templates.getIndexFromId(prx.templates[index].states[0].template.id)].states[0].id;
        }
    }

    return true;
}

prx.compatibility.v5.convertToStatefulSymbols = function(){

    for (var index = 0; index < prx.symbols.length; index++) {
        prx.symbols[index].states = [];

        var defaultstate = {
            data: prx.symbols[index].data,
            dimensions: prx.symbols[index].dimensions,
            title: 'Default State',
            history: prx.symbols[index].history,
            background: prx.symbols[index].background,
            id: prx.utils.getGuid()
        }

        defaultstate = $.toJSON(defaultstate);
        defaultstate = $.evalJSON(defaultstate);

        delete prx.symbols[index].data;
        delete prx.symbols[index].dimensions;
        delete prx.symbols[index].history;
        delete prx.symbols[index].background;

        prx.symbols[index].states.push(defaultstate);
    }
    return true;
}


prx.items = {};

//@koala-append "_items.js"
//@koala-append "_helper.js"

prx.items.updateRotation = function(item, containerid) {
    if(typeof(item.rotation) == "undefined") { item.rotation = 0; }

    if (typeof(containerid)!='undefined') {
        var targetId = '#'+containerid+'-'+item.id
    } else {
        var targetId = '#'+item.id
    }

    // dont force3d!
    new TimelineMax().to(targetId,0,{rotation: item.rotation});

    // rotate
    /*
     $rotation.css({
     '-moz-transform': 'rotate('+item.rotation+'deg)',
     '-webkit-transform': 'rotate('+item.rotation+'deg)',
     '-o-transform': 'rotate('+item.rotation+'deg)',
     'transform': 'rotate('+item.rotation+'deg)',
     }); */
}

prx.items.updateVisibility = function(item, containerid) {
    var _item='';

    if (typeof(containerid)!='undefined') {
        _item = $('#'+containerid+'-'+item.id);
    } else {
        _item = $('#'+item.id);
    }

    if (typeof(item.visible)!='undefined') {

        if (!item.visible) {
            _item.addClass('hidden');
        } else {
            _item.removeClass('hidden');
        }
    }

    if (typeof(item.opacity)!='undefined') {
        _item.css('opacity',item.opacity);
    }

    _item = null; // perf+
}

prx.items.updatePosition = function (item, containerid, pageid) {
    //log("item position container id="+containerid);
    var _item='';

    if (typeof(containerid)!='undefined') {
        _item = $('#'+containerid+'-'+item.id);
    } else {
        _item = $('#'+item.id);
    }
    //log(pageid);
    //log("PAGEID IN UPDATE ITEM POSITION="+pageid);

    var _page = prx.pages[prx.stc.screens.getIndexFromId(pageid)];
    var _orientation = prx.orientation.getPage(_page);

    var _OrientationWidth = 0;
    var _OrientationHeight = 0;

    _OrientationWidth = prx.devices[prx.device][_orientation][0];
    _OrientationHeight = prx.devices[prx.device][_orientation][1];


    if (typeof(_page.statusbar) == "undefined") {
        _page.statusbar = prx.statusbar;
    }

    if (typeof(_page.navigationbar) == "undefined") {
        _page.navigationbar = prx.navigationbar;
    }


    if (_page.statusbar == "1" && prx.statusbarapplies == "1") {
        //_OrientationWidth = prx.devices[prx.device]['statusbar'+_orientation][0];
        _OrientationHeight = _OrientationHeight - prx.devices[prx.device]["statusbarheight"+_orientation];
    }

    if (_page.navigationbar == "1" && prx.navigationbarapplies == "1") {
        _OrientationHeight = _OrientationHeight - prx.devices[prx.device]["navigationbarheight"+_orientation];
    }

    /* ANNAM v5.2.11 - in rerenderitem() this may be called for items in containers. need to change orientationdims to container dims*/
    if (typeof(containerid)!='undefined' && containerid.indexOf('-box') > -1) {
        var $symbol = $('#'+containerid+'-scroll');
        _OrientationWidth = $symbol.width();
        _OrientationHeight = $symbol.height();
    }

    var _leftPos = parseFloat(item.left);
    var _topPos = parseFloat(item.top);
    var _x = parseFloat(item.left);
    var _y = parseFloat(item.top);
    var _wi = parseFloat(item.width);
    var _hi = parseFloat(item.height);
    var _width = parseFloat(item.width);
    var _height = parseFloat(item.height);

    if (item.width != 'full') {
        switch (item.wtype) {
            case "fixed":
                _width = _wi;
                break;

            case "variable":
                _width = _OrientationWidth-_wi;
                break;
        }
        _item.css('width',_width+'px');
    }

    if (item.height != 'full') {
        switch (item.htype) {
            case "fixed":
                _height = _hi;
                break;

            case "variable":
                _height = _OrientationHeight -_hi;
                break;
        }
        _item.css('height',_height+'px');
    }

    switch (item.hpos) {
        case "left":
            _leftPos = _x;
            break;

        case "right":
            _leftPos = _OrientationWidth - _x - _width;
            break;

        case "center":
            _leftPos = (_OrientationWidth - _width)/2;
            break;
    }

    //log('item='+item.type+' left pos='+_leftPos);
    //log(_id);
    //log(_leftPos);
    _item.css('left',_leftPos+'px');

    switch (item.vpos) {
        case "top":
            _topPos = _y;
            break;

        case "bottom":
            _topPos = _OrientationHeight - _y - _height;
            break;

        case "middle":
            _topPos = (_OrientationHeight - _height)/2;
            break;
    }
    _item.css('top',_topPos+'px');

    _item = null; // perf+
}

prx.items.updateSymbolItemPosition = function (item, containerid, pageid,symbol) {
    //log("item position container id="+containerid);
    var _item='';

    if (typeof(containerid)!='undefined') {
        _item = $('#'+containerid+'-'+item.id);
    } else {
        _item = $('#'+item.id);
    }
    //log(pageid);
    //log("PAGEID IN UPDATE ITEM POSITION="+pageid);

    // STATES
    var _dims = prx.symbols[prx.stc.containers.getIndexFromId(symbol.symbolid)].states[0].dimensions;

    /* CHANGE TO MAKE SYMBOL ITEMS RESPOND TO VARIABLE WIDTH (v3) */
    //var _symbol_dims = getRealDims(symbol);
    //_dims = [_symbol_dims.width, _symbol_dims.height];
    /* /CHANGE TO MAKE SYMBOL ITEMS RESPOND TO VARIABLE WIDTH (v3) */


    var _page = prx.pages[prx.stc.screens.getIndexFromId(pageid)];
    var _orientation = '';
    var _OrientationWidth = _dims[0];
    var _OrientationHeight = _dims[1];

    var _leftPos = item.left;
    var _topPos = item.top;
    var _x = item.left;
    var _y = item.top;
    var _wi = item.width;
    var _hi = item.height;
    var _width = item.width;
    var _height = item.height;

    if (item.width != 'full') {
        switch (item.wtype) {
            case "fixed":
                _width = _wi;
                break;

            case "variable":
                _width = _OrientationWidth-_wi;
                break;
        }
        _item.css('width',_width+'px');
    }

    if (item.height != 'full') {
        switch (item.htype) {
            case "fixed":
                _height = _hi;
                break;

            case "variable":
                _height = _OrientationHeight -_hi;
                break;
        }
        _item.css('height',_height+'px');
    }

    switch (item.hpos) {
        case "left":
            _leftPos = _x;
            break;

        case "right":
            _leftPos = _OrientationWidth - _x - _width;
            break;

        case "center":
            _leftPos = (_OrientationWidth - _width)/2;
            break;
    }

    //log('item='+item.type+' left pos='+_leftPos);
    //log(_id);
    //log(_leftPos);
    _item.css('left',_leftPos+'px');

    switch (item.vpos) {
        case "top":
            _topPos = _y;
            break;

        case "bottom":
            _topPos = _OrientationHeight - _y - _height;
            break;

        case "middle":
            _topPos = (_OrientationHeight - _height)/2;
            break;
    }
    _item.css('top',_topPos+'px');
    _item = null; // perf+
}

prx.items.updateTemplateItemPosition = function(item, pageid) {
    var _id = '#'+item.id;
    var _page = prx.pages[prx.stc.screens.getIndexFromId(pageid)];
    var _orientation = prx.orientation.getPage(_page);
    var _OrientationWidth = 0;
    var _OrientationHeight = 0;

    _OrientationWidth = prx.devices[prx.device][_orientation][0];
    _OrientationHeight = prx.devices[prx.device][_orientation][1];

    if (typeof(_page.statusbar) == "undefined") {
        _page.statusbar = prx.statusbar;
    }

    if (typeof(_page.navigationbar) == "undefined") {
        _page.navigationbar = prx.navigationbar;
    }


    if (_page.statusbar == "1") {
        //_OrientationWidth = prx.devices[prx.device]['statusbar'+_orientation][0];
        _OrientationHeight = _OrientationHeight - prx.devices[prx.device]["statusbarheight"+_orientation];
    }

    if (_page.navigationbar == "1") {
        _OrientationHeight = _OrientationHeight - prx.devices[prx.device]["navigationbarheight"+_orientation];
    }


    var _leftPos = item.left;
    var _topPos = item.top;
    var _x = item.left;
    var _y = item.top;
    var _wi = item.width;
    var _hi = item.height;
    var _width = item.width;
    var _height = item.height;

    if (item.width != 'full') {
        switch (item.wtype) {
            case "fixed":
                _width = _wi;
                break;

            case "variable":
                _width = _OrientationWidth-_wi;
                break;
        }
        item.width = _width;
    }

    if (item.height != 'full') {
        switch (item.htype) {
            case "fixed":
                _height = _hi;
                break;

            case "variable":
                _height = _OrientationHeight -_hi;
                break;
        }
        item.height = _height;
    }

    switch (item.hpos) {
        case "left":
            _leftPos = _x;
            break;

        case "right":
            _leftPos = _OrientationWidth - _x - _width;
            break;

        case "center":
            _leftPos = (_OrientationWidth - _width)/2;
            break;
    }

    item.left = _leftPos;

    switch (item.vpos) {
        case "top":
            _topPos = _y;
            break;

        case "bottom":
            _topPos = _OrientationHeight - _y - _height;
            break;

        case "middle":
            _topPos = (_OrientationHeight - _height)/2;
            break;
    }
    item.top = _topPos;

    return item;
}

prx.items.add = function(pageid,item,index){
    var zIndex;

    if (!item.zindex) {
        item.zindex = zIndex+1;
    }

    if (!item.hpos) { item.hpos = 'left'; }
    if (!item.vpos) { item.vpos = 'top'; }
    if (!item.wtype) { item.wtype = 'fixed'; }
    if (!item.htype) { item.htype = 'fixed'; }
    if (!item.opacity) { item.opacity = '1'; }

    var tempitem = item;

    item = [item];

    var _containerid = 'p-'+pageid;


    if (typeof(prx.types[tempitem.type])!='undefined') {
        if (typeof(prx.types[tempitem.type].onDisplay)!='undefined') {
            $('#p-'+pageid).append(prx.types[tempitem.type].onDisplay(tempitem,_containerid));
        }
    }

    if(typeof(tempitem._fromstateid) != "undefined") {
        tempitem.opacity = 0;
        $('#'+_containerid + '-' + tempitem.id).addClass('ghost-component')
    }

    prx.items.updateVisibility(tempitem, _containerid);
    prx.items.updatePosition(tempitem, _containerid, pageid);
    prx.items.updateRotation(tempitem, _containerid);

    if (typeof(prx.types[tempitem.type])!='undefined') {
        if (typeof(prx.types[tempitem.type].afterDisplay)!='undefined') {
            prx.types[tempitem.type].afterDisplay(tempitem, _containerid, pageid);
        }
    }

    //draggable
    prx.draggable.ini(tempitem,pageid);


}

prx.items.rerender = function(item, containerid, pageid){

    if (typeof(prx.types[item.type])!='undefined') {
        if (typeof(prx.types[item.type].onDisplay)!='undefined') {

            // ANNAM v5.1.2 this selects many items if item is in the container (accesses in all instances of container
            // var $olditem = $('.box[id$='+item.id+']').attr('id', $('.box[id$='+item.id+']').attr('id') + '-to-be-removed')
            var $olditem = $('#'+containerid+'-'+item.id).attr('id', '#'+containerid+'-'+item.id + '-to-be-removed')
            $olditem.after(prx.types[item.type].onDisplay(item,containerid,pageid));
            $olditem.remove();
            //$('#'+containerid+'-'+item.id).replaceWith(prx.types[item.type].onDisplay(item,containerid,pageid)) // i guess this should work but i havent tried it

            if(typeof(item._fromstateid) != "undefined") {
                item.opacity = 0;
                $('#'+containerid+'-'+item.id).addClass('ghost-component')
            }

            prx.items.updateVisibility(item, containerid);
            prx.items.updateRotation(item, containerid);

            if(pageid == -1) {
                pageid = containerid.split('-')[1];
            }

            // in symbol
            if(containerid.indexOf('box') > -1) {
                var split = containerid.split('box-');
                var symbolid = 'box-' + split[split.length - 1];

                var stateid = $('#'+containerid+'-'+item.id).parents('[data-state-id]').eq(1).attr('data-state-id');

                if(typeof(prx.allItems[symbolid].states) != "undefined" && typeof(prx.allItems[symbolid].states[stateid]) != "undefined") {
                    var data = $.evalJSON(prx[prx.allItems[symbolid].containertype][prx.allItems[symbolid].containerindex].states[prx.allItems[symbolid].states[stateid].stateindex].data);
                    if(typeof(data.items) != "undefined") {
                        var symbol = data.items[prx.allItems[symbolid].itemindex];
                    } else {
                        var symbol = data[prx.allItems[symbolid].states[stateid].itemindex];
                    }
                }

                prx.items.updateSymbolItemPosition(item, containerid, pageid, symbol);
            } else {
                prx.items.updatePosition(item, containerid, pageid);
            }

            if (typeof(prx.types[item.type])!='undefined') {
                if (typeof(prx.types[item.type].afterDisplay)!='undefined') {
                    prx.types[item.type].afterDisplay(item, containerid, pageid);
                }
            }

            prx.actions.parseItemAction(item,containerid,pageid);

            prx.draggable.ini(item,pageid,containerid);


        }
    }
}

prx.items.getRealDimsAndPos = function(item, parenttype, parentindex, parentstateindex) {// real [width,height,left,top]
    var _OrientationDims = prx.stc.helper.getDims(parenttype, parentindex, parentstateindex);
    var _width = item.width;
    var _height = item.height;
    var _left = item.left;
    var _top = item.top;

    if (item.wtype == 'variable') {
        _width = _OrientationDims[0] - _width;
    }

    if (item.htype == 'variable') {
        _height = _OrientationDims[1] - _height;
    }

    if (item.hpos == 'right') {
        _left = _OrientationDims[0] - _left - _width;
    }

    if(item.hpos == 'center') {
        _left = (_OrientationDims[0] - _width) / 2;
    }

    if (item.vpos == 'bottom') {
        _top = _OrientationDims[1] - _top - _height;
    }

    if(item.vpos == 'middle') {
        _top = (_OrientationDims[1] - _height) / 2;
    }


    return [parseInt(_width), parseInt(_height), parseInt(_left), parseInt(_top)];

}

prx.items.buildAllItemsStruct = function(){

    for(var i=0;i<prx.pages.length;i++) {
        for(var j=0;j<prx.pages[i].states.length;j++) {
            var data = $.evalJSON(prx.pages[i].states[j].data);
            for(var k=0;k<data.length;k++) {
                if(typeof(prx.allItems[data[k].id]) == "undefined") {
                    prx.allItems[data[k].id] = {
                        containertype: 'pages',
                        containerindex: i,
                        states: {}
                    }
                }
                prx.allItems[data[k].id].states[prx.pages[i].states[j].id] = {
                    stateindex: j,
                    itemindex: k
                };
            }
        }
    }

    for(var i=0;i<prx.templates.length;i++) {
        for(var j=0;j<prx.templates[i].states.length;j++) {
            var data = $.evalJSON(prx.templates[i].states[j].data);
            for(var k=0;k<data.length;k++) {
                if(typeof(prx.allItems[data[k].id]) == "undefined") {
                    prx.allItems[data[k].id] = {
                        containertype: 'templates',
                        containerindex: i,
                        states: {}
                    }
                }
                prx.allItems[data[k].id].states[prx.templates[i].states[j].id] = {
                    stateindex: j,
                    itemindex: k
                };
            }
        }
    }

    for(var i=0;i<prx.symbols.length;i++) {
        for(var j=0;j<prx.symbols[i].states.length;j++) {
            var data = $.evalJSON(prx.symbols[i].states[j].data);
            for(var k=0;k<data.length;k++) {
                if(typeof(prx.allItems[data[k].id]) == "undefined") {
                    prx.allItems[data[k].id] = {
                        containertype: 'symbols',
                        containerindex: i,
                        states: {}
                    }
                }
                prx.allItems[data[k].id].states[prx.symbols[i].states[j].id] = {
                    stateindex: j,
                    itemindex: k
                };
            }
        }
    }
}

prx.items.recursivelyFindItemSymbolId = function(itemid, type, index) {
    //var split = ('-' + itemid).split('-box-');
    //split.splice(0,1);

    // v5.8.3 remove p-id from itemid. this is only needed if we use action.targetId instead of action.itemId
    // in the original prx.items.recursivelyFindItemSymbolId() in stopstatetransition()
    // which i decided against. however if you send action.targetId it should work.
    itemid = itemid.replace(/#p-[0-9]+-/, '');

    var singleitemid = itemid.split('-box-')[0]

    var items = prx.items.helper.getAllItems(type, index);
    for(var i=0;i<items.length;i++) {
        if(items[i].id == singleitemid) {
            if(itemid==singleitemid) {
                if(typeof(items[i].symbolid) == "undefined") { return false; }
                return items[i].symbolid;
            } else {
                itemid = itemid.substr((singleitemid+'-').length);
                if(prx.stc.containers.getIndexFromId(items[i].symbolid) == -1) { return false; }
                return prx.items.recursivelyFindItemSymbolId(itemid, 'symbols', prx.stc.containers.getIndexFromId(items[i].symbolid))
            }
        }
    }

    // v5.8.3 if we reach here it means that we didnt find the item.
    // but maybe we don't have the complete item id in variable itemid, eg if we are in current container
    // so start looking into containers of screen (or container for that matter) and go at it recursively.

    // this will work exactly the same as passing the action.targetId instead of passing the action.itemId
    // however using this method we will be looking into more containers other then the current container one.
    // it will actually find the first container in screen which has the container we are looking for attached.

    // of course i dont think this matters because all we are looking for is the symbolid which will be the same everywhere
    // so i think i will use this after all because i think its risky to use the action.targetId instead of the action.itemId

    for(var i=0;i<items.length;i++) {
        if(items[i].type =='symbol') {
            var found = prx.items.recursivelyFindItemSymbolId(itemid, 'symbols', prx.stc.containers.getIndexFromId(items[i].symbolid));
            if(typeof(found) != "undefined") {
                return found;
            }
            // if not continue looking through original containers.
        }
    }

}

prx.items.helper = {};

prx.items.helper.getAllItems = function(type, index, stateindex) {
    if(typeof(stateindex) == "undefined") { stateindex = 0; }

    var data = $.evalJSON(prx[type][index].states[stateindex].data);

    if(prx[type][index].states.length == 1) {
        return data;
    }

    var itemlist = [];
    var tempdata;

    for(var i=0;i<data.length;i++) {
        itemlist.push(data[i].id);
    }

    for(i=0; i<prx[type][index].states.length; i++) {
        if(i!=stateindex) {
            tempdata = $.evalJSON(prx[type][index].states[i].data);
            for(var j=0;j<tempdata.length;j++) {
                if(itemlist.indexOf(tempdata[j].id) == -1) {
                    itemlist.push(tempdata[j].id);
                    tempdata[j]._fromstateid = prx[type][index].states[i].id;
                    data.push(tempdata[j]);
                }
            }
        }
    }

    return data;
}

prx.items.helper.refreshHtmlComponent = function(itemid, containerid, stateid){
    if ($('#'+containerid + '-' + itemid).hasClass('type-html')) {
        if(typeof(prx.allItems[itemid].states) != "undefined" && typeof(prx.allItems[itemid].states[stateid]) != "undefined") {
            var data = $.evalJSON(prx[prx.allItems[itemid].containertype][prx.allItems[itemid].containerindex].states[prx.allItems[itemid].states[stateid].stateindex].data);
            var item = data[prx.allItems[itemid].states[stateid].itemindex];
            $('#' + containerid + '-' + item.id + ' iframe').remove()
            prx.types[item.type].afterDisplay(item, containerid);
        }
    } else {
        $('#'+containerid + '-' + itemid + ' .box').each(function(){
            if ($(this).hasClass('type-html')) {
                var split = $(this).attr('id').split('box-');
                var itemid = 'box-' + split[split.length-1];
                var containerid = $(this).attr('id').split('-' + itemid)[0];
                var stateid = $(this).parents('.type-symbol').attr('data-state-id');
                if(typeof(prx.allItems[itemid].states) != "undefined" && typeof(prx.allItems[itemid].states[stateid]) != "undefined") {
                    var data = $.evalJSON(prx[prx.allItems[itemid].containertype][prx.allItems[itemid].containerindex].states[prx.allItems[itemid].states[stateid].stateindex].data);
                    var item = data[prx.allItems[itemid].states[stateid].itemindex];
                    $('iframe', this).remove()
                    prx.types[item.type].afterDisplay(item, containerid);
                }
            }
        })

    }
}

prx.items.helper.getPageIdFromId = function(id){

    if (id.substring(0,1)=='#') {
        return id.substring(3);
    } else {
        return id.substring(2);
    }

}


prx.stc = {};

//@koala-append "_stc-helper.js"
//@koala-append "_screens.js"
//@koala-append "_templates.js"
//@koala-append "_containers.js"


prx.stc.helper = {};

prx.stc.helper.getStateIndexFromId = function(id, type, index) {

    if(typeof(type) == "undefined" || typeof(index) == "undefined" || index == -1) { return -1; }

    if(typeof(prx[type][index]) == "undefined") { return -1; }

    for(var i=0; i<prx[type][index].states.length; i++) {
        if(prx[type][index].states[i].id == id) {
            return i;
        }
    }
    return -1;
}

prx.stc.helper.getDims = function(type, index, stateindex) {

    if(stateindex == -1) {
        return false;
    }

    switch(type) {
        case "symbols":
            return [prx[type][index].states[stateindex].dimensions[0],prx[type][index].states[stateindex].dimensions[1]];
            break;
        default:
            var _orientation = prx[type][index].orientation;
            var _OrientationWidth = 0;
            var _statusbarHeight = 0;
            var _statusbar = 0;
            var _navigationbarHeight = 0;
            var _navigationbar = 0;

            if (prx.statusbarapplies && prx[type][index].statusbar == "1") {
                _statusbar = 1;
                _statusbarHeight = prx.devices[prx.device]['statusbarheight' + _orientation];
            }

            if (prx.navigationbarapplies && prx[type][index].navigationbar == "1") {
                _navigationbar = 1;
                _navigationbarHeight = prx.devices[prx.device]['navigationbarheight' + _orientation];
            }

            var _deadheight = parseInt(_statusbar) * prx.devices[prx.device]['statusbarheight' + _orientation] + parseInt(_navigationbar) * prx.devices[prx.device]['navigationbarheight' + _orientation];
            var _OrientationWidth = prx.devices[prx.device]['normal'+_orientation][0];
            var _OrientationHeight = prx.devices[prx.device]['normal'+_orientation][1] - _deadheight;

            return [_OrientationWidth, _OrientationHeight];
            break;
    }
}


prx.stc.screens = {};

prx.stc.screens.getIndexFromId = function(id){
    var rIndex = -1;

    for (var n = 0; n < prx.pages.length; n++) {
        if (prx.pages[n].id == id) {
            rIndex = n
        }
    }

    return rIndex;
}

prx.stc.screens.getStructFromId = function (pageid) {
    var _id = prx.items.helper.getPageIdFromId(pageid);
    return prx.pages[prx.stc.screens.getIndexFromId(_id)];
}

prx.stc.screens.getStateIndexFromId = function(id, index) {
    return prx.stc.helper.getStateIndexFromId(id, 'pages', index);
}

prx.stc.screens.getAllItems = function(index, stateindex){
    return prx.items.helper.getAllItems('pages', index, stateindex);
}

prx.stc.screens.reloadResponsive = function(_page) {
    _page.orientation = prx.orientation.get();
    prx.stc.screens.load(_page);
}

prx.stc.screens.load = function(_page) {
    //var _page = page;
    //var _data = $.evalJSON(_page.states[0].data);
    var _data = prx.stc.screens.getAllItems(prx.stc.screens.getIndexFromId(_page.id));

    var _orientation = prx.orientation.getPage(_page);
    var _OrientationWidth = 0;
    var _OrientationHeight = 0;
    //var _statusbar = 0;
    //var _navigationbar = 0;
    var _actualPageHeight = 0;

    _OrientationWidth = prx.devices[prx.device][_orientation][0];
    _OrientationHeight = prx.devices[prx.device][_orientation][1];
    _actualPageHeight = _OrientationHeight;

    $('#dragarea').width(_OrientationWidth);
    var _currentPage = $('#p-'+_page.id).attr('data-state-id', _page.states[0].id);

    _currentPage.width(_OrientationWidth);
    _currentPage.css('height',_OrientationHeight+'px');

    _currentPage.unbind('pageshow').bind('pageshow', function(event, ui){
        _currentPage.height(_OrientationHeight);
        //$(this).find('.type-list input, .type-list-retina input, .type-android-listbasic input').removeAttr('checked');
        $('.remove-on-pageshow').removeClass('remove-on-pageshow');
        prx.scrollable.refresh('#p-' + _page.id);
        prx.draggable.refresh(_page.id);

        if(!prx.embed && parent!=window) { try{parent.prx.highlightPage(_page.id)}catch(err){} }

        $('#overlay').empty().hide()
        return false;
    });


    if (_page.navigationbar == 'undefined') {_page.navigationbar = "0"}

    /* STATUSBAR */
    prx.canvas._statusbars[_page.id] = {};
    prx.canvas._statusbars[_page.id].statusbar = _page.statusbar;
    prx.canvas._statusbars[_page.id].orientation = _orientation;

    var _deviceOrientation = ($(window).width() < $(window).height()) ? "portrait" : "landscape";

    /* NAVIGATIONBAR */
    if (typeof(_page.navigationbar)=='undefined') {_page.navigationbar = '0';}
    prx.canvas._navigationbars[_page.id] = {};
    prx.canvas._navigationbars[_page.id].navigationbar = _page.navigationbar;
    prx.canvas._navigationbars[_page.id].orientation = _orientation;

    if (_page.orientation == _deviceOrientation)  {
        var _startscreen = (_deviceOrientation=="portrait") ? prx.project.startscreen : prx.project.startscreenlandscape;

        //if(prx.allowstatusbar && _page.statusbar == "1") {
        if(_page.statusbar=="1") {
            if(prx.allowstatusbar) {
                try {
                    if (_startscreen == _page.id) {
                        if (prx.export2html!='1') {
                            //$('#statusbar').css('background-image', 'url('+prx.url['static']+'/images/player/'+prx.device+'/'+_orientation+'/statusbar_'+prx.devices[prx.device][_orientation][0]+'.png)');
                            $('#statusbar').css({'background-image': prx.canvas.buildStatusbar(_orientation)});
                        } else {
                            if (prx.statusbarapplies=='1') {
                                $('#statusbar').css('background-image', 'url(./images/statusbar_'+_orientation+'.png)');
                            } else {
                                $('#statusbar').css('background-image', 'none');
                            }
                        }
                        $('#statusbar').css('height', prx.devices[prx.device]['statusbarheight'+_orientation]+'px');
                    }

                    _currentPage.css('top', prx.devices[prx.device]['statusbarheight'+_orientation]+'px');
                } catch(err){};
            }
            _actualPageHeight = _actualPageHeight - prx.devices[prx.device]['statusbarheight'+_orientation];
        }

        //if(prx.allownavigationbar && _page.navigationbar == "1") {
        if(_page.navigationbar == "1") {
            if(prx.allownavigationbar) {
                try {
                    if (_startscreen === _page.id) {
                        if (prx.export2html!='1') {
                            //$('#navigationbar').css('background-image', 'url('+prx.url['static']+'/images/player/'+prx.device+'/'+_orientation+'/navigationbar_'+prx.devices[prx.device][_orientation][0]+'.png)');
                            $("#navigationbar").css({'background-image': prx.canvas.buildNavbar(_orientation)});
                        } else {
                            if (prx.navigationbarapplies=='1') {
                                $('#navigationbar').css('background-image', 'url(./images/navigationbar_'+_orientation+'.png)');
                            } else {
                                $('#statusbar').css('background-image', 'none');
                            }
                        }
                    }

                    $('#navigationbar').css('height', prx.devices[prx.device]['navigationbarheight'+_orientation]+'px');
                    $('#navigationbar').css('top', prx.devices[prx.device][_orientation][1] - prx.devices[prx.device]['navigationbarheight'+_orientation]+'px');

                } catch(err){};
            }
            _actualPageHeight = _actualPageHeight - prx.devices[prx.device]['navigationbarheight'+_orientation];
        }
    }

    $('#dragarea').height(_actualPageHeight);

    /* PAGE BACKGROUND */
    if(typeof(_page.states[0].background) == "undefined") { _page.states[0].background = "none"; }
    if(_page.states[0].background != "none") {
        _currentPage.css('background-color', prx.utils.getColor(_page.states[0].background));
    }


    /* LOAD TEMPLATE */
    if (("" + _page.states[0].template.id).length > 0) {
        var index = prx.stc.templates.getIndexFromId(_page.states[0].template.id);
        var stateindex = prx.stc.templates.getStateIndexFromId(_page.states[0].template.stateid, index);

        if (index > -1 && stateindex > -1) {
            var containerid='';
            var _cTemplate = prx.stc.templates.render(_page.states[0].template.id,containerid,_page.id, _page.states[0].template.stateid);

            // ANNAM v4.2.4 , removed overflow:hidden for move screen
            //_currentPage.append('<div id="p-'+_page.id+'-template" style="position: absolute; left: 0px; top: 0px; background: none; width: '+_OrientationWidth+'px; height: '+_actualPageHeight+'px; overflow: hidden;">' + _cTemplate + '</div>');
            _currentPage.append('<div id="p-'+_page.id+'-template" style="position: absolute; left: 0px; top: 0px; background: none; width: '+_OrientationWidth+'px; height: '+_actualPageHeight+'px;">' + _cTemplate + '</div>');

            _cTemplate = null; // perf+

            // if no background on page and background on template, use template background
            if(typeof(prx.templates[index].states[stateindex].background) == "undefined") { prx.templates[index].states[stateindex].background = "none"; }
            if(_page.background == "none" && prx.templates[index].states[stateindex].background != "none") {
                _currentPage.css('background-color', prx.utils.getColor(prx.templates[index].states[stateindex].background));
            }

            /* ADDED THIS FOR AFTERDISPLAY FUNCTION CALLS */
            var _dataFromTemplate = $.evalJSON(prx.templates[index].states[stateindex].data);
            var _items = _dataFromTemplate;
            var _templateid = prx.templates[index].states[stateindex].template.id;

            prx.stc.templates.loadRecursiveAfterDisplay(_page.states[0].template,containerid,_page.id);

            _dataFromTemplate = null; // perf+
            _items = null; // perf+

        } else { // template was deleted
            _data.templateid = ''; // clear template settings
        }
    }

    /* LOOP AND RELOAD OLD DATA */
    $.each(_data, function(i,item){
        prx.items.add(_page.id,item,i);
    });

    prx.actions.loadScreenActions(_page.id);
    prx.stc.templates.loadRecursiveEvents(_page.states[0].template,_page.id);

    $('#p-' + _page.id).trigger('pagebeforecreate');
    $('#p-' + _page.id).trigger('pagecreate');

}



prx.stc.templates = {};

prx.stc.templates.render = function(templateid,containerid, pageid, stateid){


    var index = prx.stc.templates.getIndexFromId(templateid);
    var stateindex = 0;
    if(typeof(stateid) == "undefined") {
        stateid = prx.templates[index].states[0].id;
    }
    stateindex = prx.stc.templates.getStateIndexFromId(stateid, index);

    var _cR = '';

    var _containerid='';
    if (typeof(containerid)=='undefined') {
        containerid='p-'+pageid+'-';
    } else {
        if (containerid.length==0){
            containerid = 'p-'+pageid+'-';
        } else {
            containerid = containerid+'-';
        }
        _containerid = containerid + 't' + templateid;
    }

    _cR='<div id="'+_containerid+'" data-state-id='+stateid+'>';

    if (index > -1 && stateindex > -1) {

        //var _tempdata = $.evalJSON(prx.templates[index].states[stateindex].data);
        var _tempdata = prx.stc.templates.getAllItems(index, stateindex);
        var _items = _tempdata;
        var _templateid = prx.templates[index].states[stateindex].template.id;

        if (_templateid != undefined) {
            if (eval(_templateid) > -1) {
                _cR = _cR + prx.stc.templates.render(_templateid,_containerid,pageid, prx.templates[index].states[stateindex].template.stateid);
            }
        }

        for (var n = 0; n < _items.length; n++) {
            var tempitem = _items[n];


            if(typeof(tempitem._fromstateid) != "undefined") {
                tempitem.opacity = 0;
                $('#'+_containerid+'-'+tempitem.id).addClass('ghost-component')
            }

            if (typeof(prx.types[tempitem.type])!='undefined') {
                if (typeof(prx.types[tempitem.type].onDisplayTemplate)!='undefined') {
                    //tempitem = prx.items.updateTemplateItemPosition(tempitem,pageid);
                    _cR = _cR + prx.types[tempitem.type].onDisplayTemplate(tempitem,_containerid);
                } else {
                    _cR = _cR + prx.types[tempitem.type].onDisplay(tempitem,_containerid);
                }
            }


        }
    }

    _cR = _cR + '</div>';

    return _cR;
}

prx.stc.templates.loadRecursiveEvents = function(template,pageid,containerid) {
    //log('*** LOAD RECURSIVE TEMPLATE EVENTS, TEMPLATEID = '+ templateid);

    if(typeof(containerid) == "undefined") { containerid = '' }

    prx.actions.loadTemplateActions(template,pageid,containerid);

    var index = prx.stc.templates.getIndexFromId(template.id);
    var stateindex = prx.stc.templates.getStateIndexFromId(template.stateid, index);

    if (index > -1 && stateindex > -1) {
        var _tempdata = $.evalJSON(prx.templates[index].states[stateindex].data);
        var _templateid = prx.templates[index].states[stateindex].template.id;

        if (_templateid != undefined) {
            if (eval(_templateid) > -1) {
                if(containerid.length == 0) {
                    containerid = 't'+template.id;
                } else {
                    containerid += '-t'+template.id;
                }
                prx.stc.templates.loadRecursiveEvents(prx.templates[index].states[stateindex].template,pageid,containerid);
            }
        }

        _tempdata = null; // perf+
    }

    return true;
}

prx.stc.templates.loadRecursiveAfterDisplay = function(template,containerid,pageid) {
    //log('*** LOAD RECURSIVE TEMPLATE AFTER DISPLAY');

    var index = prx.stc.templates.getIndexFromId(template.id);
    var stateindex = prx.stc.templates.getStateIndexFromId(template.stateid, index);

    var templateid = template.id

    var _containerid='';
    if (typeof(containerid)=='undefined') {
        containerid='p-'+pageid+'-';
    } else {
        if (containerid.length==0){
            containerid = 'p-'+pageid+'-';
        } else {
            containerid = containerid+'-';
        }

        _containerid = containerid + 't' + templateid;
    }

    if (index > -1 && stateindex > -1) {
        // this doesnt loop ALL items, ie those who are not in the default state, but perhaps that's ok because they are being rerendered anw?
        // it was not ok after all :)
        var _tempdata = prx.stc.templates.getAllItems(index, stateindex); //$.evalJSON(prx.templates[index].states[stateindex].data);
        var _template = prx.templates[index].states[stateindex].template;
        var _items = _tempdata;

        for (var n = 0; n < _items.length; n++) {
            var tempitem = _items[n];

            if(typeof(tempitem._fromstateid) != "undefined") {
                tempitem.opacity = 0;
                $('#'+_containerid+'-'+tempitem.id).addClass('ghost-component')
            }

            prx.items.updateVisibility(tempitem, _containerid);
            prx.items.updatePosition(tempitem, _containerid, pageid);
            prx.items.updateRotation(tempitem, _containerid);

            if (typeof(prx.types[tempitem.type])!='undefined') {
                if (typeof(prx.types[tempitem.type].afterDisplay)!='undefined') {
                    prx.types[tempitem.type].afterDisplay(tempitem, _containerid, pageid);
                }
            }

            prx.draggable.ini(tempitem,pageid,_containerid);

            /* ANNAM v3.0.5 removing this as duplicate actions were binded on template items, one of which was binded on wrong item id so it didnt work anw */
            //prx.actions.parseItemAction(tempitem,_containerid,pageid,_templateid);

        }

        /* PAGE BACKGROUND */
        if(typeof(prx.templates[index].states[stateindex].background) == "undefined") { prx.templates[index].states[stateindex].background = "none"; }
        if(($('#p-'+pageid).css('background-color') == "transparent" || $('#p-'+pageid).css('background-color') == "rgba(0, 0, 0, 0)") && prx.templates[index].states[stateindex].background != "none") {
            $('#p-'+pageid).css('background-color', prx.utils.getColor(prx.templates[index].states[stateindex].background));
        }

        if (_template.id != undefined) {
            if (eval(_template.id) > -1) {
                prx.stc.templates.loadRecursiveAfterDisplay(_template,_containerid,pageid);
            }
        }

        _tempdata = null; // perf+
        _items = null; // perf+

    }

    return true;

}

prx.stc.templates.getIndexFromId = function(id){
    var rIndex = -1;

    for (var n = 0; n < prx.templates.length; n++) {
        if (prx.templates[n].id == id) {
            rIndex = n
        }
    }

    return rIndex;
}

prx.stc.templates.getStateIndexFromId = function(id, index) {
    return prx.stc.helper.getStateIndexFromId(id, 'templates', index);
}

prx.stc.templates.getAllItems = function(index, stateindex){
    return prx.items.helper.getAllItems('templates', index, stateindex);
}


prx.stc.containers = {};

prx.stc.containers.getIndexFromId = function(id){
    var rIndex = -1;

    for (var n = 0; n < prx.symbols.length; n++) {
        if (prx.symbols[n].id == id) {
            rIndex = n
        }
    }

    return rIndex;
}

prx.stc.containers.render = function(item, containerid, stateindex){
    var _cR = '';
    var pageid;

    if(typeof(stateindex) == "undefined") { stateindex = 0; }

    //if (prx.save != "true") {
    //log('*** RENDER SYMBOL');
    var index = prx.stc.containers.getIndexFromId(item.symbolid);
    var _containerid='';

    // ANNAM v5
    // I cant find a rendersymbol() with pageid.
    /*
     if (typeof(containerid)=='undefined') {
     _containerid = 'p-'+pageid+'-';
     } else {
     if (containerid.length==0){
     containerid = 'p-'+pageid+'-';
     } else {
     containerid = containerid+'-';
     }
     _containerid = containerid + item.id;
     }
     */
    _containerid = containerid + '-' + item.id;

    var _symbol_width="100%";
    var _symbol_height="100%";
    if (item.scroll != '' && item.scroll != 'none') {
        // STATES
        if (item.scroll=='horizontal' || item.scroll=='omni') {
            _symbol_width = prx.symbols[prx.stc.containers.getIndexFromId(item.symbolid)].states[stateindex].dimensions[0]+'px';
        }
        if (item.scroll=='vertical' || item.scroll=='omni') {
            _symbol_height = prx.symbols[prx.stc.containers.getIndexFromId(item.symbolid)].states[stateindex].dimensions[1]+'px';
        }
    }

    if (index > -1) {
        var _items = prx.stc.containers.getAllItems(index, stateindex);

        for (var n = 0; n < _items.length; n++) {
            var tempitem = _items[n];


            if(typeof(tempitem._fromstateid) != "undefined") {
                tempitem.opacity = 0;
            }

            //if (prx.save == "true") {
            if (typeof(prx.types[tempitem.type])!='undefined') {
                if (typeof(prx.types[tempitem.type].onDisplaySymbol)!='undefined') {
                    _cR = _cR + prx.types[tempitem.type].onDisplaySymbol(tempitem, _containerid, pageid, item);
                } else {
                    _cR = _cR + prx.types[tempitem.type].onDisplay(tempitem, _containerid, pageid, item);
                }
            }
            //}
        }

    }

    //_cR = _cR + '</div>';
    //}

    return _cR;

}

prx.stc.containers.getStateIndexFromId = function(id, index) {
    return prx.stc.helper.getStateIndexFromId(id, 'symbols', index);
}

prx.stc.containers.loadRecursiveAfterDisplay = function(item,containerid, pageid, stateindex) {
    if(typeof(stateindex) == "undefined") { stateindex = 0; }

    //log('*** LOAD RECURSIVE SYMBOL AFTER DISPLAY');
    //prx.types[tempitem.type].afterDisplay(templateid, pageid);

    var index = prx.stc.containers.getIndexFromId(item.symbolid);
    var _containerid='';

    //log('====================================='+item.scroll);

    if (typeof(item.scrollsnap)=='undefined') {
        item.scrollsnap = false;
    }

    if (typeof(containerid)=='undefined') {
        _containerid = 'p-'+pageid+'-';
    } else {
        if (containerid.length==0){
            containerid = 'p-'+pageid+'-';
        } else {
            containerid = containerid+'-';
        }
        _containerid = containerid + item.id;
    }


    if (index > -1) {
        // TODO STATES merge all states components into first
        //var _items = $.evalJSON(prx.symbols[index].states[0].data);
        var _items = prx.stc.containers.getAllItems(index, stateindex);
        //var _items = prx.stc.containers.getAllItems(prx.symbols[index]);

        for (var n = 0; n < _items.length; n++) {
            var tempitem = _items[n];

            if(typeof(tempitem._fromstateid) != "undefined") {
                tempitem.opacity = 0;
                $('#'+_containerid+'-'+tempitem.id).addClass('ghost-component')
            }

            prx.items.updateVisibility(tempitem, _containerid);
            prx.items.updateSymbolItemPosition(tempitem, _containerid, pageid, item);
            prx.items.updateRotation(tempitem, _containerid);

            if (typeof(prx.types[tempitem.type])!='undefined') {
                if (typeof(prx.types[tempitem.type].afterDisplay)!='undefined') {
                    prx.types[tempitem.type].afterDisplay(tempitem, _containerid, pageid);
                }
            }

            // draggable
            prx.draggable.ini(tempitem,pageid,_containerid);
            prx.actions.parseItemAction(tempitem,_containerid,pageid,'',true);
        }

        for(var j=0;j<prx.symbols[index].states.length;j++) {
            prx.actions.parseContainerStateAction(index, j, pageid, _containerid, item.id)
        }

        prx.scrollable.iniContainer(item, _containerid); // now used in rerender item, to needs to be outside of page show.
    }
    return true;

}

prx.stc.containers.getAllItems = function(index, stateindex){
    return prx.items.helper.getAllItems('symbols', index, stateindex);
}


prx.actions = {};
prx.actions._actionTypes = ['actions', 'actionbarUpCaretActions', 'actionbarActionOverflowActions', 'flipswitchActionsOnActive', 'flipswitchActionsOnDeactive', 'checkboxActionsOnActive', 'checkboxActionsOnDeactive', 'ios7NavbarActionsTitle', 'ios7NavbarActionsLeftBtn', 'ios7NavbarActionsRightBtn', 'actions1', 'actions2']
prx.actions._actions = {};
prx.actions._isRunning = {};
prx.actions._loopCounter = {};
prx.actions._hammerDirToString = [];
prx.actions._hammerDirToString[1] = "none";
prx.actions._hammerDirToString[2] = "left";
prx.actions._hammerDirToString[4] = "right";
prx.actions._hammerDirToString[8] = "up";
prx.actions._hammerDirToString[16] = "down";



prx.actions.build = function(action, clicktotap, bindevents) {
    if(typeof(action.enabled) != "undefined" && !action.enabled) {
        return false;
    }

    if (typeof(bindevents) == "undefined") {
        bindevents = true;
    }

    if (typeof(action.live) == "undefined") {
        action.live = false;
    }

    if (typeof(action.delay) == "undefined") {
        action.delay = 0;
    }

    if (action.type == 'inputkeyup' && typeof(action.charCode) == 'undefined') {
        action.charCode = '-1';
    }


    /* fix for namespace bug - existed for actions created between v3 launch (27/9/2012) and v3.2 (23/11/2012) */
    if(action.type == "containerpageenter" && typeof(action.namespace) == "undefined") {
        action.namespace = ".page" + action.eventItemIndex[0] + '-' + action.eventItemIndex[1];
    }
    if (typeof(action.namespace) == "undefined") { action.namespace = ""; }

    //v5, to be able to unbind
    // v5.2.8 not used anymore because im binding to specific actions eg protoio-actions , proto.io-actionbarUpCaretActions etc
    //action.namespace += '.protoio';

    if(typeof(action.guid) == "undefined") { action.guid = prx.utils.getGuid(); }
    if(typeof(action.callback) == "undefined") { action.callback = false; }

    //if (typeof(clicktotap)=='undefined') {
    // v5.0.13 always changing click to tap because we removed jquery mobile vclick event (further down, on('vclick') stop propagation
    // and click did not work on mobile devices
    clicktotap = true;
    //}

    if(typeof(action.targetId) == "undefined") {
        if(typeof(action.pageId) != "undefined") {
            action.targetId = '#p-'+action.pageId+'-'+action.itemId;
        } else {
            // v4.2.1 for targetting current container
            // action.targetId = '#'+action.containerid+'-'+action.itemId;
            action.targetId = (action.itemId == -1) ? '#'+action.containerid : '#'+action.containerid+'-'+action.itemId;
            if(action.itemId == -1) {
                var split = action.containerid.split('-');
                action.itemId = 'box-'+split[split.length-1];
            }
        }
    }


    if(typeof(action.pageId) != "undefined") {
        if(action.pageId == -1) {
            //action.guid = action.containerid + '-' + action.guid;
            // ANNAM v3.0.5 when in current template, "t1" exists in both the containerid and item id. i need to remove it from one of them.
            //if(typeof(action.itemId) != "undefined" && action.itemId.split('-').shift() == action.containerid.split('-').pop()) {
            //AP FIX ON 2013/10/04 POST v5
            if(typeof(action.itemId) != "undefined" && action.itemId != null && typeof(action.containerid) != "undefined" && action.containerid != null && action.itemId.split('-').shift() == action.containerid.split('-').pop()) {
                action.targetId = '#'+action.containerid+'-'+action.itemId.split('-').slice(1).join('-');
            } else {
                // v4.2.1 for targetting current container
                // action.targetId = '#'+action.containerid+'-'+action.itemId
                action.targetId = (action.itemId == -1) ? '#'+action.containerid : '#'+action.containerid+'-'+action.itemId;
                /*
                 annam v5.10.2. im removing this because if the action is then reparsed due to changeproperty:action and targetid recreated, the wrong targetid will be recreated due to itemid not being -1 anymore.
                 i'm doing this and praying to god that it won't affect anything else.
                 since the itemid is created only if both pageid and itemid is -1, i'm assuming that there's already functionality in place, where needed, to substitude -1 with the actual item id, in cases that pageid is defined but item id is not.?
                 im sure this will come back introducing other issues :(
                 v5.10.4 turns out this was caused by caching prx.states._changes in getChangesBetweenStates.
                 */
                if(action.itemId == -1) {
                    var split = action.containerid.split('-');
                    action.itemId = 'box-'+split[split.length-1];
                }

            }
            //action.pageId = action.containerid.split('-')[1]; ****** REMOVED BY AP AND ANNA ON 11Sep2013 to fix currentcontainer
        } else if(action.pageId == -2) {

            /**/
            //annam v5.10.2.1 same as above. if i change pageid here then the targetid will not be recalculated the next time buildaction is called, keeping the old target id (eg another page). moving this to movewholescreen.
            // v5.10.4 turns out this was caused by caching prx.states._changes in getChangesBetweenStates.
            // at the moment only for move screen
            // current page in targetid
            var split = action.targetId.split(/[-\[]/)
            action.targetId = '#p-' + split[1];
            action.pageId = split[1];
            //action.guid = action.containerid + '-' + action.guid;
            /**/
        } else {
            if(typeof(action.allowOverwriteTargetId) == "undefined" || action.allowOverwriteTargetId) {
                if(typeof(action.itemId) != "undefined") {
                    action.targetId = '#p-'+action.pageId+'-'+action.itemId;
                } else {
                    action.targetId = '#p-'+action.pageId;
                }
            }
        }
    } else {
        // actions that don't allow pageId are very specific:
        // go to snap carousel page, scroll scrollable container, stop event propagation, unload overlayed screen, and alert.
        // if called from inside a container, there is a chance that they are duplicates. changing action guid to ensure uniqueness
        // JIRA PROTOIO-9
        //action.guid = action.containerid + '-' + action.guid;
    }

    // v4.2.4.1 fix for guids - always append containerid if in container ?
    //if(action.containerid != '') {
    // v5 fix because if multiple containers in same page, same guid when using conatinerid
    //action.guid = action.containerid + '-' + action.guid;
    // v5.7.5 fix becausse if two same targets - ie action within container targetting a component outside the container, and container attached twice
    // caused problems in callbacks. so now im adding everything on the guid :P

    //v5.10.4 i dont think its really needed just making sure the string doesnt get appended every time
    //action.guid = action.bindTo + '-target-' + action.targetId + '-guid-' + action.guid;
    var guidsplit = action.guid.split('-guid-');
    action.guid = action.bindTo + '-target-' + action.targetId + '-guid-' + guidsplit[guidsplit.length-1];

    //}

    if(action.animation == "") { action.animation = 'none'; }

    /* FIX FOR SCROLLER CLICK ACTION */

    if (clicktotap) {
        if (action.type == 'click') {
            action.type = 'tap';
        }
    }

    // Mappings for Hammer
    if (action.type == 'taphold') {action.type = 'press'}

    if(bindevents) {
        if (action.live) {

            $('body').off(action.type + action.namespace + '.' + action.guid.replace(/-/g, '').replace('#', ''), action.bindTo);

            $('body')
                .hammer()
                .on(action.type + action.namespace + '.' + action.guid.replace(/-/g, '').replace('#', ''), action.bindTo, function(event, a) {

                    if(prx.actions._isRunning[action.guid] == false) {
                        _activePage = prx.navigation._activepage;

                        if(action.type == "click" || action.type == "tap") {
                            var target = event.target;
                            while (target != null && target.nodeType == 1) {
                                if(typeof(prx.scrollable._scrollables[target.id]) != "undefined") {
                                    if(prx.scrollable._scrollables[target.id].moved) {
                                        return false
                                    } else {
                                        break;
                                    }
                                }
                                target = target.parentNode;
                            }
                        }

                        if(action.type!='keydown' || action.type=='keydown' && event.which == action.charCode && _activePage == action.bindPageId && !(/textarea|select|input/i.test( event.target.nodeName ))) {
                            prx.actions._actions[action.guid].call(this, event, a)
                            if(action.type=='keydown') {
                                return false;
                            }
                        }
                    }
                });

            prx.actions.hammer('body', action.type);

        } else {
            $(action.bindTo)
                .hammer()
                .on(action.type + action.namespace, function(event, a) {
                    if(prx.actions._isRunning[action.guid] == true) { return false; }
                    _activePage = prx.navigation._activepage;

                    //if click/tap, check that we are not scrolling a container
                    if(action.type == "click" || action.type == "tap") {
                        var target = event.target;
                        while (target != null && target.nodeType == 1) {
                            if(typeof(prx.scrollable._scrollables[target.id]) != "undefined") {
                                if(prx.scrollable._scrollables[target.id].moved) {
                                    return false
                                } else {
                                    break;
                                }
                            }
                            target = target.parentNode;
                        }
                    }
                    // if keydown, check charcode, page and that we are not typing in an input/textarea
                    if ((action.type != 'keydown' && action.type != 'inputkeyup' ) ||
                        action.type == 'keydown' && event.which == action.charCode && _activePage == action.bindPageId && !(/textarea|select|input/i.test(event.target.nodeName)) ||
                        action.type == 'inputkeyup' && (event.which == action.charCode || action.charCode == '-1')) {

                        prx.actions._actions[action.guid].call(this, event, a);
                        if (action.type == 'keydown' || action.type == 'contextmenu') {
                            return false;
                        }
                    }
                });

            prx.actions.hammer(action.bindTo, action.type);
        }
    }

    prx.actions._isRunning[action.guid] = false;

    prx.actions.generate(action)

    if(action.callback) {
        if(action.loop) {
            action.callbackAction.loop = action.loop;
            if(typeof(action.loopGUID) != "undefined") {
                action.callbackAction.loopGUID = action.loopGUID
            } else {
                action.callbackAction.loopGUID = action.guid
            }
        }

        // when we end the action, i need to end all previous callbacked actions
        if(typeof(action.previousActions) == "undefined") {
            action.previousActions = []
        }
        if(typeof(action.containerid) != "undefined") {
            action.callbackAction.containerid = action.containerid;
        }
        // annam v5.7.3 we use this in build action and perhaps other places
        if(typeof(action.targetId) != "undefined") {
            // annam v5.7.8 added recursivelyAddActionInfo so we are now sending the CORRECT targetId for each action.
            // action.callbackAction.targetId = action.targetId;
        }
        if(typeof(action.bindTo) != "undefined") {
            action.callbackAction.bindTo = action.bindTo;
        }
        // needed for set variable - triggerdata in callbacks
        if(typeof(action.type) != "undefined") {
            action.callbackAction.type = action.type;
        }

        action.callbackAction.previousActions = action.previousActions;
        action.callbackAction.previousActions.push(action.guid)

        // needed for set variable from callback event
        //action.callbackAction.bindTo = action.bindTo;
        //action.callbackAction.type = action.type;

        prx.actions.build(action.callbackAction, undefined, false)
    }

    return true;
};

prx.actions.generate = function(action) {
    prx.actions._actions[action.guid] = function(event, a){

        if(typeof(event) != "undefined") {
            // live events :( stop propagation doesn't work
            // eg if stateenter on container, stateenter will also trigger on parent page
            // chrome only
            if(event.type == 'stateenter' || event.type == 'stateleave' || event.type == 'statetransitionstart' || event.type == 'statetransitionend') {
                if(event.target != event.currentTarget) {
                    return false;
                }
            }
        }

        // i am just starting the function now. if it has a loop, initialize iterations
        // action.loopIterations is only defined in the top-level action.
        // also if already running, i dont want to reset the loop iterations.

        if(!prx.actions._isRunning[action.guid] && action.loop && typeof(action.loopIterations) != "undefined") {
            prx.actions._loopCounter[action.guid] = action.loopIterations-1;
        }

        prx.actions._isRunning[action.guid] = true;

        if(typeof(event) != "undefined") {

            // for flashActions change to stopImmediatePropagation
            // if we remove this i will have an issue with components that have one interaction on outer .box and one inside eg crouton
            //event.preventDefault();
            //event.stopImmediatePropagation();
            event.stopPropagation();
            // fix for "tap" on ios propagation v3.2.10
            // it needs to call "preventDefault()", which also prevents labels for being clicked in tabbars, list items etc
            // i am assuming that when clicked, the action is always to make the element active.
            // it is very fortunate that in the case of checkbox and onoff components, the action is binded on "change" and so this is not called, as the action may be either on or off.
            // v5.0.18 for checkboxes its fortunate, but for checkboxlist this is an issue!
            // im leaving it as is for now because the actionIsRunning prevents the second run of the function for most functions so this
            // shouldnt occur in many instances, at the moment only known issue with alert;
            // http://stackoverflow.com/questions/24998194/hammer-js-click-triggered-on-dom-elements-behind-tapped-after-tap-action
            if(action.type == "tap") {
                if(typeof(event.gesture) != "undefined" && typeof(event.gesture.srcEvent) != "undefined" && typeof(event.gesture.srcEvent.preventDefault) != "undefined") {

                    if($(event.gesture.srcEvent.target).prop('tagName').toLowerCase() != "input" && $(event.gesture.srcEvent.target).prop('tagName').toLowerCase() != "textarea") {
                        // if we prevent default on an input the mobile keyboard doesnt open
                        event.gesture.srcEvent.preventDefault();
                        prx.helper.blurIOsInputs();
                    }

                    // needed for flashActions
                    //event.gesture.srcEvent.stopImmediatePropagation()

                    // for some reason this is only needed on mobiles now?
                    if(event.gesture.srcEvent.type == "touchend") {
                        $(this).find('input[type=radio]').not(':visible').not(':disabled').attr('checked', 'checked');

                        $(this).find('input[type=checkbox]').not(':visible').not(':disabled').each(function(){
                            if($(this).is(':checked')) {
                                $(this).removeAttr('checked')
                            } else {
                                $(this).attr('checked', 'checked');
                            }
                        })
                    }

                }

                // v5.6.3 https://protoio.atlassian.net/browse/EDITOR-128
                $(this)
                    .parents('.type-symbol')
                    .children()
                    .each(function(){
                        if(typeof(prx.scrollable._scrollables[this.id]) != "undefined") {
                            prx.scrollable._scrollables[this.id]._end({ type: 'touchend', target: this, preventDefault: function(){} });
                        }
                    });
            }

            if(["pan", "panleft", "panright", "panup", "pandown", "panend"].indexOf(event.type)> -1 && typeof(event.gesture) != "undefined") {
                if(typeof(prx.variables._triggerData[action.bindTo]) == "undefined") {
                    prx.variables._triggerData[action.bindTo] = {};
                }
                if(typeof(prx.variables._triggerData[action.bindTo][event.type]) == "undefined") {
                    prx.variables._triggerData[action.bindTo][event.type] = {};
                }

                prx.variables._triggerData[action.bindTo][event.type].distancex = event.gesture.deltaX;
                prx.variables._triggerData[action.bindTo][event.type].distancey = event.gesture.deltaY;
                prx.variables._triggerData[action.bindTo][event.type].direction = prx.actions._hammerDirToString[event.gesture.direction];

            }

            if(["pinch", "pinchin", "pinchout"].indexOf(event.type)> -1 && typeof(event.gesture) != "undefined") {
                if(typeof(prx.variables._triggerData[action.bindTo]) == "undefined") {
                    prx.variables._triggerData[action.bindTo] = {};
                }
                if(typeof(prx.variables._triggerData[action.bindTo][event.type]) == "undefined") {
                    prx.variables._triggerData[action.bindTo][event.type] = {};
                }
                prx.variables._triggerData[action.bindTo][event.type].scale = event.gesture.scale;

            }
        }

        switch (action.actionId) {
            case "alert":
                alert(action.bindTo);
                prx.actions.callback(action);
                break;
            case "alert-variable":
                alert(prx.variables.read(action.variable));
                prx.actions.callback(action);
                break;
            case "stoppropagation":
                prx.actions.callback(action);
                break;
            case "go-to-page":
                prx.actionsLibrary.goToPage(action);
                break;
            case "load-page":
                prx.actionsLibrary.loadPage(action);
                break;
            case "unload-page":
                prx.actionsLibrary.unloadPage(action);
                break;
            case "hide-item":
                prx.actionsLibrary.hideItem(action);
                // event.stopPropagation was commented out here - i dont know why :/
                break;
            case "show-item":
                prx.actionsLibrary.showItem(action);
                break;
            case "show-hide-item":
                prx.actionsLibrary.showHide(action);
                break;
            case "toggle-item":
                prx.actionsLibrary.toggleItem(action);
                break;
            case "bring-front":
            	setTimeout(function(){
            		$(action.targetId).appendTo($(action.targetId).parent());
            		prx.actions.callback(action);
            	}, action.delay);
                break;
            case "send-back":
            	setTimeout(function(){
            		$(action.targetId).prependTo($(action.targetId).parent());
            		prx.actions.callback(action);
            	}, action.delay);
                break;
            case "highlight-navbar-item":
                setTimeout(function(){
                    if(action.itemIndex == "-1") {
                        $(action.targetId + ' input[type=radio]').removeAttr('checked')
                    } else {
                        var _itemid = action.targetId+'-radio-'+action.itemIndex;
                        $('[id='+_itemid.substr(1)+']').attr('checked',true);
                    }
                    prx.actions.callback(action);
                }, action.delay);
                break;
            case "highlight-list-item":
                setTimeout(function(){
                    if(action.itemIndex == "-1") {
                        $(action.targetId + ' input[type=radio], ' + action.targetId + ' input[type=checkbox]').removeAttr('checked')
                    } else {
                        var _itemid = action.targetId+'-checkbox-'+action.itemIndex;
                        $(_itemid).attr('checked',true);
                    }
                    prx.actions.callback(action);
                }, action.delay);
                break;
            case "highlight-pagecontroller-item":
                setTimeout(function(){
                    if(action.itemIndex == "-1") {
                        $(action.targetId + ' input[type=radio]').removeAttr('checked')
                    } else {
                        $(action.targetId + ' input')
                            .eq(parseInt(action.itemIndex))
                            .attr("checked", "checked");
                    }
                    prx.actions.callback(action);
                }, action.delay);
                break;
            case "play-audio":
                setTimeout(function(){
                    $(action.targetId + ' audio').get(0).play();
                    prx.actions.callback(action);
                }, action.delay);
                break;
            case "pause-audio":
                setTimeout(function(){
                    $(action.targetId + ' audio').get(0).pause();
                    prx.actions.callback(action);
                }, action.delay)
                break;
            case "stop-audio":
                setTimeout(function(){
                    $(action.targetId + ' audio').get(0).pause();
                    if($(action.targetId + ' audio').get(0).readyState != 0) {
                        $(action.targetId + ' audio').get(0).currentTime = 0;
                    }
                    prx.actions.callback(action);
                }, action.delay)
                break;
            case "play-video":
                setTimeout(function(){
                    $(action.targetId + ' video').get(0).play();
                    prx.actions.callback(action);
                }, action.delay)
                break;
            case "pause-video":
                setTimeout(function(){
                    $(action.targetId + ' video').get(0).pause();
                    prx.actions.callback(action);
                }, action.delay);
                break;
            case "stop-video":
                setTimeout(function(){
                    $(action.targetId + ' video').get(0).pause();
                    $(action.targetId + ' video').get(0).currentTime = 0;
                    prx.actions.callback(action);
                }, action.delay);
                break;
            case "go-to-carousel-page":
                prx.actionsLibrary.goToCarouselPage(action)
                break;
            case "scroll-scrollable-container":
                prx.actionsLibrary.scrollScrollableContainer(action);
                break;
            case "sync-pagecontroller-item":
                var _page = 0;
                if($(action.targetId).hasClass('type-pagecontroller-vertical')) {
                    _page = a.currentPage.pageY
                } else {
                    _page = a.currentPage.pageX;
                }
                setTimeout(function(){
                    $(action.targetId + ' input:eq('+_page+')').attr("checked", "checked")
                    prx.actions.callback(action);
                }, action.delay);
                break;
            case "fire-item-event":
                prx.actionsLibrary.fireItemsEvent(action);
                break;
            case "animate-item":
                prx.actionsLibrary.animateItem(action);
                break;
            case "end-loop":
                setTimeout(function(){
                    /*
                     var actionGuid = action.actionGuid;
                     if(typeof(prx.actions._actions[actionGuid]) == "undefined") {
                     //not found, actionGuid has containerid
                     actionGuid = action.containerid + '-' + action.actionGuid;
                     action.bindTo + '-target-' + action.targetId + '-' + action.guid;
                     }*/
                    for (var guid in prx.actions._loopCounter) {
                        if (prx.actions._loopCounter.hasOwnProperty(guid)) {
                            if(guid.indexOf(action.actionGuid) > -1) {
                                var pageid = action.pageId;
                                if(pageid == -1) {
                                    pageid = action.containerid
                                } else {
                                    pageid = 'p-' + pageid;
                                }
                                if(guid.indexOf('#'+pageid+'-') == 0 || guid.indexOf('#'+pageid+'[') == 0) {
                                    prx.actions._loopCounter[guid] = 0;
                                }
                            }
                        }
                    }

                    //prx.actions._loopCounter[actionGuid] = 0;
                    prx.actions.callback(action);
                }, action.delay)
                break;
            case "change-property":
                prx.actionsLibrary.changeProperty(action);
                break;
            case "set-variable":
                prx.actionsLibrary.setVariable(action);
                break;
            case "move-screen":
                prx.actionsLibrary.moveScreen(action);
                break;
            case "change-screen-state":
                setTimeout(function(){
                    prx.actionsLibrary.changeState(action, 'pages');
                }, action.delay)
                break;
            case "change-template-state":
                setTimeout(function(){
                    prx.actionsLibrary.changeState(action, 'templates');
                }, action.delay)
                break;
            case "go-to-container-state": // remove after v5 launch
            case "change-container-state":
                setTimeout(function(){
                    prx.actionsLibrary.changeState(action, 'symbols');
                }, action.delay)
                break;
            case "stop-state-transition":
                setTimeout(function(){
                    prx.actionsLibrary.stopStateTransition(action);
                }, action.delay)
                break;
            case "open-external-url":
            case "send-email":
            case "make-phone-call":
            case "send-sms":
                setTimeout(function(){
                    prx.actionsLibrary.externalLink(action);
                }, action.delay)
                break;
            case "focus-input-field":
                /**/
                setTimeout(function(){
                    $(action.targetId + ' input, ' + action.targetId +  ' textarea').trigger('click.fakefocus');
                    prx.actions.callback(action);
                }, action.delay)
                /**/
                //
                // $(action.targetId + ' input, ' + action.targetId +  ' textarea').trigger('focus');
                break;
            default: break;
        }
    }
}

prx.actions.callback = function(action) {
    if(action.callback) {
        prx.actions._actions[action.callbackAction.guid].call(this)
    } else if(typeof(action.loop) != "undefined" && action.loop) {

        var loopGuid = (typeof(action.loopGUID) != "undefined") ? action.loopGUID : action.guid;

        if(prx.actions._loopCounter[loopGuid] > 0) {
            prx.actions._loopCounter[loopGuid]--;
            prx.actions._actions[loopGuid].call()
        } else {
            prx.actions._isRunning[loopGuid] = false
        }

    } else {
        prx.actions.isRunningFalse(action);
    }
}

prx.actions.isRunningFalse = function(action) {
    if(typeof(action.guid) != "undefined") {
        prx.actions._isRunning[action.guid] = false;
        if(typeof(action.previousActions) != "undefined") {
            for(var i=0; i<action.previousActions.length; i++) {
                prx.actions._isRunning[action.previousActions[i]] = false
            }
        }
    }
}

prx.actions.hammer = function(bindTo, trigger) {

    var hammer = $(bindTo).data("hammer")

    if(typeof(hammer) == "undefined") { return false; }

    // if we dont use this there are all sorts of problems with input fields not focusing, labels not toggling etc
    // but if we use it swipe doesn't work on older mobiles
    //hammer.options.touchAction = 'auto';

    // generic fixes
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL, velocity: -1, threshold: 20 }); // by default only up down

    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL }); // by default only up down
    hammer.get('tap').set({ time: 500, threshold: 10 }); // sometimes on "harder" tap (more time on mouse down) tap did not trigger. also some minimum movement should be allowed
    hammer.get('doubletap').set({ posThreshold: 60 }); // allow slight movement between taps

    // fix swipe to test for offsetdirection instead of direction
    // this solves the issue where if you pan but then keep your finger on screen at the same position for some time before releasing,
    // swipe is not triggered because direction (calculated every few ms) is NONE
    /*
     hammer.get('swipe').attrTest = function(input) {
     var direction = this.options.direction;
     var offsetdirection = input.offsetDirection;
     var velocity;


     //fix offsetdirection
     switch(offsetdirection) {
     case Hammer.DIRECTION_LEFT:
     offsetdirection = Hammer.DIRECTION_RIGHT;
     break;
     case Hammer.DIRECTION_RIGHT:
     offsetdirection = Hammer.DIRECTION_LEFT;
     break;
     case Hammer.DIRECTION_UP:
     offsetdirection = Hammer.DIRECTION_DOWN;
     break;
     case Hammer.DIRECTION_DOWN:
     offsetdirection = Hammer.DIRECTION_UP;
     break;

     }

     if (direction & (Hammer.DIRECTION_HORIZONTAL | Hammer.DIRECTION_VERTICAL)) {
     velocity = input.velocity;
     } else if (direction & Hammer.DIRECTION_HORIZONTAL) {
     velocity = input.velocityX;
     } else if (direction & Hammer.DIRECTION_VERTICAL) {
     velocity = input.velocityY;
     }

     return this._super.attrTest.call(this, input) &&
     direction & offsetdirection &&
     input.maxPointers == this.options.pointers && // annam patenta diki mou, also patentarismeno hammer.js to return this property :(
     input.distance > this.options.threshold && // to take threshold into account
     Math.abs(velocity) > this.options.velocity && input.eventType & Hammer.INPUT_END;
     };

     hammer.get('swipe').emit = function(input) {
     var offsetdirection = input.offsetDirection;

     //fix offsetdirection
     switch(offsetdirection) {
     case Hammer.DIRECTION_LEFT:
     offsetdirection = Hammer.DIRECTION_RIGHT;
     break;
     case Hammer.DIRECTION_RIGHT:
     offsetdirection = Hammer.DIRECTION_LEFT;
     break;
     case Hammer.DIRECTION_UP:
     offsetdirection = Hammer.DIRECTION_DOWN;
     break;
     case Hammer.DIRECTION_DOWN:
     offsetdirection = Hammer.DIRECTION_UP;
     break;

     }

     var direction = prx.actions._hammerDirToString[offsetdirection];

     if (direction != "none") {
     this.manager.emit(this.options.event + direction, input);
     }

     this.manager.emit(this.options.event, input);
     }
     /**/

    // much easier way to listen for touch
    if(trigger == 'touch') {
        $(bindTo).off("hammer.input").on("hammer.input", function(ev) {
            if(ev.gesture.pointers.length == 1 && ev.gesture.isFirst) {
                $(this).trigger('touch')
            }
        });
    }

    // touch recognizer
    /*
     var TouchRecognizer = function() {
     Hammer.AttrRecognizer.apply(this, arguments);
     }
     Hammer.inherit(TouchRecognizer, Hammer.AttrRecognizer, {
     defaults: {
     event: 'touch',
     pointers: 1
     },

     getTouchAction: function() {
     return [Hammer.TOUCH_ACTION_NONE];
     },

     attrTest: function(input) {
     return this._super.attrTest.call(this, input) && input.isFirst;
     }
     });

     hammer.add(new TouchRecognizer());
     hammer.get('tap').recognizeWith(hammer.get('touch'))
     */

    // release recognizer
    if(trigger == 'release' || trigger == 'delayedtap') { // delayed tap patenta because i need release to be defined in delayed tap to allow recogniseWith
        var ReleaseRecognizer = function() {
            Hammer.AttrRecognizer.apply(this, arguments);
        }
        Hammer.inherit(ReleaseRecognizer, Hammer.AttrRecognizer, {
            defaults: {
                event: 'release',
                pointers: 1
            },

            getTouchAction: function() {
                return [Hammer.TOUCH_ACTION_AUTO];
            },

            attrTest: function(input) {
                return this._super.attrTest.call(this, input) && input.isFinal;
            }
        });

        hammer
            .add(new ReleaseRecognizer())
            .recognizeWith([hammer.get('tap'), hammer.get('press'), hammer.get('swipe'), hammer.get('pan')])
        //.recognizeWith(hammer.get('touch'));
    }

    // delayed tap
    // only add if it exists because it delays doubletap
    if(trigger == 'delayedtap') {
        hammer.add(
            new Hammer.Tap({ event: 'delayedtap', time: 500 }) // sometimes on "harder" tap (more time on mouse down) tap did not trigger
                .recognizeWith(hammer.get('tap'))
                .requireFailure(hammer.get('doubletap'))
        )
        hammer.get('release').recognizeWith(hammer.get('delayedtap'))
    }

    // pinch
    // only enable if it exists because it is blocking (something to do with scroll?)
    // using pinch enables touch-action: none and makes input fields non focusable and labels not toggling
    if(["pinch", "pinchin", "pinchout"].indexOf(trigger) > -1) {
        hammer.get('pinch').set({ enable: true });
    }

}

prx.actions.recursivelyAddInfo = function(action, bindTo, containerid, _target, namespace) {
    if(typeof(namespace) == "undefined") { namespace = '.protoio-actions'; }
    action.namespace = ((typeof(action.namespace) == "undefined") ? '' : action.namespace) +  namespace;
    action.bindTo = bindTo;
    action.targetId = (action.itemId == -1) ? '#'+_target.slice(0,-1) : '#'+_target+action.itemId;
    action.containerid = containerid;
    if(typeof(action.delay) == "undefined" || action.delay==0) {
        action.delay = 10;
    }

    if(typeof(action.callbackAction) != "undefined") {
        action.callbackAction = prx.actions.recursivelyAddInfo(action.callbackAction, bindTo, containerid, _target, namespace);
    }

    return action;
}

prx.actions.loadScreenActions = function(pageid) {
    //log('*** LOAD PAGE EVENTS');
    var _pageid = '';

    $.each(prx.pages, function(i,page){

        if (page.id==pageid) {
            _pageid = page.id;

            $('#p-'+pageid).unbind('pagebeforeshow').bind('pagebeforeshow', function(event, ui){


                if(prx.allowstatusbar && prx.canvas._statusbars[page.id].statusbar == "1") {
                    try {
                        if (prx.export2html!='1') {
                            //$('#statusbar').css('background-image', 'url('+prx.url['static']+'/images/player/'+prx.device+'/'+prx.canvas._statusbars[page.id].orientation+'/statusbar_'+prx.devices[prx.device][prx.canvas._statusbars[page.id].orientation][0]+'.png)');
                            $('#statusbar').css({'background-image': prx.canvas.buildStatusbar(prx.canvas._statusbars[page.id].orientation)});
                        } else {
                            prx.canvas.buildStatusbarExported(prx.canvas._statusbars[page.id].orientation);
                            /*if (prx.statusbarapplies=='1') {
                             $('#statusbar').css('background-image', 'url(./images/statusbar_'+orientation+'.png)')
                             } else {
                             $('#statusbar').css('background-image', 'none');
                             }
                             */
                        }
                        $('#statusbar').css('height', prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[page.id].orientation]+'px');
                    } catch(err){};
                    $('#p-'+page.id).css('top', prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[page.id].orientation]+'px');
                } else {
                    // annam v5.0.22 why is this check necessary???
                    //if (page.background == "none") {$('#statusbar').css('height','0px')}
                    $('#statusbar').css('height','0px')
                    // annam v5.8 removing jquery - removing this because it caused flicker on screen transitions - also it should be ok by default.
                    //$('#p-'+page.id).css('top', '0px');
                }


                //if (prx.canvas._navigationbars[page.id].navigationbar == 'undefined') {prx.canvas._navigationbars[page.id].navigationbar="0"}
                if(prx.allownavigationbar && prx.canvas._navigationbars[page.id].navigationbar == "1") {
                    try {
                        if (prx.export2html!='1') {
                            //$('#navigationbar').css('background-image', 'url('+prx.url['static']+'/images/player/'+prx.device+'/'+prx.canvas._navigationbars[page.id].orientation+'/navigationbar_'+prx.devices[prx.device][prx.canvas._navigationbars[page.id].orientation][0]+'.png)');
                            $("#navigationbar").css({'background-image': prx.canvas.buildNavbar(prx.canvas._navigationbars[page.id].orientation)});
                        } else {
                            prx.canvas.buildNavbarExported(prx.canvas._navigationbars[page.id].orientation)
                        }
                        $('#navigationbar').css('height', prx.devices[prx.device]['navigationbarheight'+prx.canvas._navigationbars[page.id].orientation]+'px');

                        $('#navigationbar').css('top', prx.devices[prx.device][prx.canvas._navigationbars[page.id].orientation][1] - prx.devices[prx.device]['navigationbarheight'+prx.canvas._navigationbars[page.id].orientation]+'px');
                    } catch(err){};
                } else {
                    $('#navigationbar').css('height', '0px');
                }

                // annam v5.7.13 adding #page-id before .box.
                $('#p-'+page.id+' .box [data-linked-screen="'+page.id+'"]').find('input').attr('checked', 'checked')
            });


            $('#p-'+pageid).bind('pagebeforehide', function(event, ui){
                prx.overlay.render('#p-'+pageid);

                // fix move whole screen items with overlay (have been repositioned to appear that they have stayed in the same position
                var pageoffsetleft = $('#p-'+pageid).offset().left;
                var pageoffsettop = $('#p-'+pageid).offset().top;
                var statusbarspace = 0;

                if(prx.allowstatusbar && prx.canvas._statusbars[page.id].statusbar == "1") {
                    pageoffsettop -= prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[page.id].orientation];
                    statusbarspace = prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[page.id].orientation];
                }



                if(pageoffsetleft != 0 || pageoffsettop != 0) {
                    var moveditems = [];
                    $('#p-'+pageid)
                        .find('[data-mpoverlay="1"]')
                        .each(function(){
                            moveditems[this.id] = {
                                top: $(this).offset().top - ($(this).parent().offset().top - $(this).parents('.prx-page').offset().top) - statusbarspace + 'px',
                                left: $(this).offset().left - ($(this).parent().offset().left - $(this).parents('.prx-page').offset().left) + 'px',
                            };
                        });

                    $('#p-'+pageid).one('pagehide', function(event, ui){
                        $(this)
                            .find('[data-mpoverlay="1"]')
                            .each(function(){
                                $(this).css(moveditems[this.id]);
                            });
                    });

                }


            });

            $('#p-'+pageid).bind('pagehide', function(event, ui){
                $(this)
                    .find('.type-list input, .type-list-retina input, .type-android-listbasic input')
                    .not('.listitem-type-checkbox input')
                    .removeAttr('checked');
            });

            prx.actions.parseScreenAction(i);

            for(var j=0;j<page.states.length;j++) {
                prx.actions.parseScreenStateAction(i, j)
            }

            prx.actions.loadItemActions(page,'page',pageid,'');
        }

    });
}

prx.actions.loadTemplateActions = function(template,pageid,containerid) {

    var index = prx.stc.templates.getIndexFromId(template.id);
    var stateindex = prx.stc.templates.getStateIndexFromId(template.stateid, index)

    if(index == -1 || stateindex == -1) {
        return false;
    }

    for(var j=0;j<prx.templates[index].states.length;j++) {
        prx.actions.parseTemplateStateAction(index, j, pageid, containerid)
    }


    if(index > -1 && stateindex > -1) {
        prx.actions.loadItemActions(prx.templates[index].states[stateindex],'template',pageid,template.id, containerid);
    };
}

prx.actions.loadContainerActions = function(symbolid,pageid,templateid,containerid) {
    //log('*** LOAD SYMBOL EVENTS');
    var _symbolid = '';
    $.each(prx.symbols, function(i,symbol){
        if (symbol.id==symbolid) {
            //_symbol= symbol.id;
            prx.actions.loadItemActions(symbol,'symbol',pageid,templateid,containerid);
        }
    });

    return false;
}

prx.actions.loadItemActions = function(data,type,pageid,templateid,containerid) {
    //if (prx.save != "true") {
    //log('*** LOAD ITEM EVENTS');

    var _data ='';
    var _prefix = '';
    if (type=="page") {
        _data = $.evalJSON(data.states[0].data);
        _prefix = 'p-'+pageid;
    }

    if (type=="template") {
        _data = $.evalJSON(data.data);
        _prefix = 'p-'+pageid;
        if(typeof(containerid) != "undefined" && containerid != '') {
            _prefix += '-' + containerid
        }
    }

    if (type=="symbol") {
        // TODO STATES - merge all state components into first
        _data = $.evalJSON(data.states[0].data);
        //_data = prx.stc.containers.getAllItems(data);
        _prefix = 'p-'+pageid+'-'+containerid+'-';
    }

    $.each(_data, function(i,item){
        prx.actions.parseItemAction(item,_prefix,pageid,templateid);
    });
    //}

}

prx.actions.parseItemAction = function(item,containerid,pageid,templateid,clicktotap) {
    var _target = '';

    // no need to attach actions - on a "gotostate" interaction, we will need to rebind actions.
    if(typeof(item._fromstateid) != "undefined") {
        return true;
    }

    if (typeof(clicktotap)=='undefined') {
        clicktotap=false;
    }

    if (typeof(containerid)!='undefined') {
        if(typeof(templateid) != "undefined" && templateid != '') {
            containerid = containerid+'-' + 't' + templateid;
        }
        _id = containerid+'-'+item.id;
        _target = containerid+'-';
    } else {
        _id = item.id;
        _target = '';
    }

    /* FIX FOR SCROLLER TAP ACTION */

    if(typeof(item.actions)!="undefined") {
        if (item.actions.length>0) {
            item.actions.sort(function(a,b){
                return(a.sort - b.sort)
            });
        }
    }

    switch (item.type) {

        // all with dynamic property listitems
        case "listbasic":
        case "listnested":
        case "listwithicon":
        case "listwithvalue":
        case "listnestedwithvalue":
        case "listwithiconandvalue":
        case "listwithbadge":
        case "listnestedwithbadge":
        case "listwithiconandbadge":
        case "listcomplex":
        case "listbasic_retina":
        case "listnested_retina":
        case "listwithicon_retina":
        case "listwithvalue_retina":
        case "listnestedwithvalue_retina":
        case "listwithiconandvalue_retina":
        case "listwithbadge_retina":
        case "listnestedwithbadge_retina":
        case "listwithiconandbadge_retina":
        case "listcomplex_retina":
        case "ios7_listbasic":
        case "ios7_listnested":
        case "ios7_listwithicon":
        case "ios7_listwithvalue":
        case "ios7_listnestedwithvalue":
        case "ios7_listwithiconandvalue":
        case "ios7_listwithbadge":
        case "ios7_listnestedwithbadge":
        case "ios7_listwithiconandbadge":
        case "ios7_listradio":
        case "ios7_listcheckbox":
        case "ios7_listcomplex":
        case "android_listbasic":
        case "android_listwithsubtitle":
        case "android_listwithicon":
        case "android_listwithiconandsubtitle":
        case "android_listwiththumbnail":
        case "android_listwiththumbnailandsubtitle":
        case "android_listradio":
        case "android_listcheckbox":
        case "android_listcomplex":
            if (typeof(item.listitems) == "undefined") {
                item.listitems=[];
            }
            $.each(item.listitems, function(i,listitem){
                if(typeof(listitem) == "undefined") {
                    return true;
                }
                if (typeof(listitem.actions) != "undefined") {

                    $('#'+_id+'-listitems-'+i+' > .action-highlight').remove()

                    var bindTo = '#'+_id+'-listitems-'+i;
                    $(bindTo).unbind('.protoio-actions');

                    if(listitem.actions.length != 0) {

                        $('#'+_id+'-listitems-'+i).append("<div class='action-highlight'></div>")

                        listitem.actions.sort(function(a,b){ return(a.sort - b.sort) })

                        $.each(listitem.actions, function(j,action){
                            action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target);
                            prx.actions.build(action,clicktotap);
                            if(typeof(action.enabled) == "undefined" || action.enabled) {
                                $('#'+_id+'-listitems-'+i+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                            }
                        });
                    }
                }
            });

            break;

        case "buttongroup":
        case "pagecontroller":
        case "buttongroup_retina":
        case "pagecontroller_retina":
        case "actionsheet":
        case "actionsheet_retina":
        case "ios7_actionsheet":
        case "alert":
        case "alert_retina":
        case "ios7_alert":
        case "android_alert_dialog":
        case "metro_appbar":
        case "metro_appbar_mini":
        case "metro_charms":
        case "metro_filters":
        case "metro_contextmenu":
        case "metro_dropdown":
        case "metro_dropdown_withselection":
        case "metro_select":
        case "metro_dialog":
        case "metro_warningbar":
        case "ios7_toolbar":
        case "ios7_segmentedcontrol":
        case "ios7_pagecontroller":
        case "ios7_control_popover":
            if (typeof(item.buttons) == "undefined") {
                item.buttons=[];
            }
            $.each(item.buttons, function(i,button){
                if(typeof(button) == "undefined") {
                    return true;
                }

                if (typeof(button.actions) != "undefined") {

                    $('#'+_id+'-buttons-'+i+' > .action-highlight').remove()

                    var bindTo = '#'+_id+'-buttons-'+i;
                    $(bindTo).unbind('.protoio-actions');

                    if(button.actions.length != 0) {
                        $('#'+_id+'-buttons-'+i).append("<div class='action-highlight'></div>")

                        button.actions.sort(function(a,b){ return(a.sort - b.sort) })

                        $.each(button.actions, function(j,action){
                            action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target);
                            prx.actions.build(action,clicktotap);
                            if(typeof(action.enabled) == "undefined" || action.enabled) {
                                $('#'+_id+'-buttons-'+i+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                            }
                        });
                    }
                }
            });
            break;

        // all with dynamic property options
        case "segmentedcontrol":
        case "segmentedcontrol_retina":
        case "android_dropdown":
            if (typeof(item.options) == "undefined") {
                item.options=[];
            }
            $.each(item.options, function(i,option){
                if(typeof(option) == "undefined") {
                    return true;
                }

                if (typeof(option.actions) != "undefined") {

                    $('#'+_id+'-options-'+i+' > .action-highlight').remove()

                    var bindTo = '#'+_id+'-options-'+i;
                    $(bindTo).unbind('.protoio-actions');

                    if(option.actions.length != 0) {
                        $('#'+_id+'-options-'+i+' label').append("<div class='action-highlight'></div>")

                        option.actions.sort(function(a,b){ return(a.sort - b.sort) })

                        $.each(option.actions, function(j,action){
                            action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target);
                            prx.actions.build(action,clicktotap);
                            if(typeof(action.enabled) == "undefined" || action.enabled) {
                                $('#'+_id+'-options-'+i+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                            }
                        });
                    }
                }
            });

            break;

        // all with dynamic property tabs
        case "tabbar":
        case "tabbar_retina":
        case "basic_tabbar":
        case "android_fixedtabbar":
        case "ios7_tabbar":
            if (typeof(item.tabs) == "undefined") {
                item.tabs=[];
            }

            $.each(item.tabs, function(i,tab){
                if(typeof(tab) == "undefined") {
                    return true;
                }
                if (typeof(tab.actions) != "undefined") {

                    $('#'+_id+'-tabs-'+i+' > .action-highlight').remove()

                    var bindTo = '#'+_id+'-tabs-'+i;
                    $(bindTo).unbind('.protoio-actions');

                    if(tab.actions.length != 0) {
                        $('#'+_id+'-tabs-'+i).append("<div class='action-highlight'></div>")

                        tab.actions.sort(function(a,b){ return(a.sort - b.sort) })

                        $.each(tab.actions, function(j,action){
                            action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target);
                            prx.actions.build(action,clicktotap);
                            if(typeof(action.enabled) == "undefined" || action.enabled) {
                                $('#'+_id+'-tabs-'+i+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                            }
                        });
                    }
                }
            });
            break;

        // flipswitch double actions
        case "flipswitch":
        case "flipswitch_retina":
        case "flipswitch_ios5":
        case "flipswitch_ios5_retina":
        case "android_onoffswitch":
        case "android_onoffswitch_kitkat":
        case "metro_onoff":
        case "ios7_switch":

            if(typeof(item.flipswitchActionsOnActive) == "undefined" && typeof(item.actionsOnActive) != "undefined") {
                item.flipswitchActionsOnActive = item.actionsOnActive;
            }

            if(typeof(item.flipswitchActionsOnDeactive) == "undefined" && typeof(item.actionsOnDeactive) != "undefined") {
                item.flipswitchActionsOnDeactive = item.actionsOnDeactive;
            }

            $('#'+_id +' > .action-highlight').remove()

            if(typeof(item.flipswitchActionsOnActive)!="undefined" && item.flipswitchActionsOnActive.length != 0 || typeof(item.flipswitchActionsOnDeactive)!="undefined" && item.flipswitchActionsOnDeactive.length != 0) {
                $('#'+_id).append("<div class='action-highlight'></div>")
            }

            if(typeof(item.flipswitchActionsOnActive)!="undefined") {

                item.flipswitchActionsOnActive.sort(function(a,b){ return(a.sort - b.sort) })

                // live action, unbinded before bind in buildAction()
                //$(action.bindTo).unbind('.protoio');

                $.each(item.flipswitchActionsOnActive, function(j,action){
                    if (action.type=='click' || action.type == 'tap') {
                        action.type = 'change';
                    }

                    action.live = true;
                    action = prx.actions.recursivelyAddInfo(action, 'input:checked[id='+_id+'-flipswitch]', containerid, _target, '.protoio-flipswitchActionsOnActive');

                    prx.actions.build(action,clicktotap);

                    if(typeof(action.enabled) == "undefined" || action.enabled) {
                        $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                    }

                });
            }

            if(typeof(item.flipswitchActionsOnDeactive)!="undefined") {

                item.flipswitchActionsOnDeactive.sort(function(a,b){ return(a.sort - b.sort) })

                $.each(item.flipswitchActionsOnDeactive, function(j,action){
                    if (action.type=='click' || action.type == 'tap') {
                        action.type = 'change';

                    }

                    action.live = true;
                    action = prx.actions.recursivelyAddInfo(action, 'input[id='+_id+'-flipswitch]:not(:checked)', containerid, _target, '.protoio-flipswitchActionsOnDeactive');

                    prx.actions.build(action,clicktotap);
                    if(typeof(action.enabled) == "undefined" || action.enabled) {
                        $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                    }
                });
            }


            if (typeof(item.actions) != "undefined") {

                $('#'+_id +' .action-highlight').remove();

                var bindTo = '#'+_id;
                $(bindTo).unbind('.protoio-actions');

                if(item.actions.length != 0) {
                    $('#'+_id).append("<div class='action-highlight'></div>")

                    item.actions.sort(function(a,b){ return(a.sort - b.sort) });

                    $.each(item.actions, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target);
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }

            break;

        // checkbox double actions
        case "checkbox":
        case "checkbox_retina":
        case "radiobutton":
        case "radiobutton_retina":
        case "android_checkbox":
        case "android_radiobutton":
        case "metro_checkbox":
        case "metro_radiobutton":
        case "ios7_checkbox":
            $('#'+_id +' > .action-highlight').remove()

            if(typeof(item.checkboxActionsOnActive) != "undefined" && item.checkboxActionsOnActive.length != 0 || typeof(item.checkboxActionsOnDeactive) != "undefined" && item.checkboxActionsOnDeactive.length != 0) {
                $('#'+_id).append("<div class='action-highlight'></div>")
            }

            if(typeof(item.checkboxActionsOnActive) != "undefined") {

                // live action, unbinded before bind in buildAction()
                //$(action.bindTo).unbind('.protoio');

                item.checkboxActionsOnActive.sort(function(a,b){ return(a.sort - b.sort) });

                $.each(item.checkboxActionsOnActive, function(j,action){
                    if (action.type=='click' || action.type == 'tap') {
                        action.type = 'change';
                    }
                    action = prx.actions.recursivelyAddInfo(action, 'input:checked[id='+_id+'-checkbox]', containerid, _target, '.protoio-checkboxActionsOnActive');
                    action.live = true;
                    prx.actions.build(action,clicktotap);
                    if(typeof(action.enabled) == "undefined" || action.enabled) {
                        $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                    }

                });
            }

            if(typeof(item.checkboxActionsOnDeactive) != "undefined") {

                item.checkboxActionsOnDeactive.sort(function(a,b){ return(a.sort - b.sort) });

                $.each(item.checkboxActionsOnDeactive, function(j,action){
                    if (action.type=='click' || action.type == 'tap') {
                        action.type = 'change';
                    }
                    action = prx.actions.recursivelyAddInfo(action, 'input[id='+_id+'-checkbox]:not(:checked)', containerid, _target, '.protoio-checkboxActionsOnDeactive');
                    action.live = true;
                    prx.actions.build(action,clicktotap);
                    if(typeof(action.enabled) == "undefined" || action.enabled) {
                        $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                    }
                });
            }

            if (typeof(item.actions) != "undefined") {

                $('#'+_id +' .action-highlight').remove();

                var bindTo = '#'+_id;
                $(bindTo).unbind('.protoio-actions');

                if(item.actions.length != 0) {
                    $('#'+_id).append("<div class='action-highlight'></div>")

                    item.actions.sort(function(a,b){ return(a.sort - b.sort) });

                    $.each(item.actions, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target);
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }

            break;

        // android bar double action
        case "android_actionbar":
        case 'android_actionbar_contextual':
            if(typeof(item.actionbarActionOverflowActions) == "undefined" && typeof(item.actions) != "undefined") {
                item.actionbarActionOverflowActions = item.actions;
            }

            if(typeof(item.actionbarActionOverflowActions)!="undefined") {

                $('#'+_id +' .actionOverflow .action-highlight').remove()

                var bindTo = '#'+_id + ' .actionOverflow';
                $(bindTo).unbind('.protoio-actionbarActionOverflowActions');

                if(item.actionbarActionOverflowActions.length != 0) {
                    $('#'+_id + ' .actionOverflow').append("<div class='action-highlight'></div>")

                    item.actionbarActionOverflowActions.sort(function(a,b){ return(a.sort - b.sort) })

                    $.each(item.actionbarActionOverflowActions, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target, '.protoio-actionbarActionOverflowActions');
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }

            if (typeof(item.actionbarUpCaretActions) != "undefined") {

                $('#'+_id +' .left-icon .action-highlight').remove()

                var bindTo = '#'+_id + ' .left-icon';
                $(bindTo).unbind('.protoio-actionbarUpCaretActions');

                if(item.actionbarUpCaretActions.length != 0) {
                    $('#'+_id + ' .left-icon').append("<div class='action-highlight'></div>")

                    item.actionbarUpCaretActions.sort(function(a,b){ return(a.sort - b.sort) })

                    $.each(item.actionbarUpCaretActions, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target, '.protoio-actionbarUpCaretActions');
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }
            break;
        // ios7 navbar
        case "ios7_navbar_buttons":
            if(typeof(item.ios7NavbarActionsTitle) != "undefined") {

                $('#'+_id +' .ios7-navbar-title .action-highlight').remove()

                var bindTo = '#'+_id + ' .ios7-navbar-title';
                $(bindTo).unbind('.protoio-ios7NavbarActionsTitle');

                if(item.ios7NavbarActionsTitle.length != 0) {
                    $('#'+_id + ' .ios7-navbar-title').append("<div class='action-highlight'></div>")

                    item.ios7NavbarActionsTitle.sort(function(a,b){ return(a.sort - b.sort)	});

                    $.each(item.ios7NavbarActionsTitle, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target, '.protoio-ios7NavbarActionsTitle');
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' .ios7-navbar-title .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }

            if(typeof(item.ios7NavbarActionsLeftBtn) != "undefined") {

                $('#'+_id +' .ios7-navbar-button-left .action-highlight').remove()

                var bindTo = '#'+_id + ' .ios7-navbar-button-left';
                $(bindTo).unbind('.protoio-ios7NavbarActionsLeftBtn');

                if(item.ios7NavbarActionsLeftBtn.length != 0) {
                    $('#'+_id + ' .ios7-navbar-button-left').append("<div class='action-highlight'></div>")

                    item.ios7NavbarActionsLeftBtn.sort(function(a,b){ return(a.sort - b.sort)	});

                    $.each(item.ios7NavbarActionsLeftBtn, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target, '.protoio-ios7NavbarActionsLeftBtn');
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' .ios7-navbar-button-left .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }

            if(typeof(item.ios7NavbarActionsRightBtn) != "undefined") {

                $('#'+_id +' .ios7-navbar-button-right .action-highlight').remove()

                var bindTo = '#'+_id + ' .ios7-navbar-button-right';
                $(bindTo).unbind('.protoio-ios7NavbarActionsRightBtn');

                if(item.ios7NavbarActionsRightBtn.length != 0) {
                    $('#'+_id + ' .ios7-navbar-button-right').append("<div class='action-highlight'></div>")

                    item.ios7NavbarActionsRightBtn.sort(function(a,b){ return(a.sort - b.sort)	});

                    $.each(item.ios7NavbarActionsRightBtn, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target, '.protoio-ios7NavbarActionsRightBtn');
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' .ios7-navbar-button-right .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }
            break;
        // special because it only selects " > .action-highlight"
        case "symbol":
            if (typeof(item.actions) != "undefined") {

                $('#'+_id +' > .action-highlight').remove();

                var bindTo = '#'+_id;
                $(bindTo).unbind('.protoio-actions');

                if(item.actions.length != 0) {
                    $('#'+_id).append("<div class='action-highlight'></div>")

                    item.actions.sort(function(a,b){ return(a.sort - b.sort) });

                    $.each(item.actions, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target);
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' > .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }
            break;
        default:

            for(var i=1; i<999; i++) {
                if(typeof(item["actions" + i]) != "undefined") {

                    var bindTo = '#'+_id +' .actions-actions'+i;
                    var namespace = '.protoio-actions'+i;

                    $(bindTo + ' .action-highlight').remove();
                    $(bindTo).unbind(namespace);

                    if(item["actions"+i].length != 0) {
                        $(bindTo).append("<div class='action-highlight'></div>")

                        item["actions"+i].sort(function(a,b){ return(a.sort - b.sort) });

                        $.each(item["actions"+i], function(j,action){
                            action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target, namespace);
                            prx.actions.build(action,clicktotap);
                            if(typeof(action.enabled) == "undefined" || action.enabled) {
                                $(bindTo+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                            }
                        });
                    }
                } else {
                    break;
                }
            }

            if (typeof(item.actions) != "undefined") {

                $('#'+_id +' .action-highlight').remove();

                var bindTo = '#'+_id;
                $(bindTo).unbind('.protoio-actions');

                if(item.actions.length != 0) {
                    $('#'+_id).append("<div class='action-highlight'></div>")

                    item.actions.sort(function(a,b){ return(a.sort - b.sort) });

                    $.each(item.actions, function(j,action){
                        action = prx.actions.recursivelyAddInfo(action, bindTo, containerid, _target);
                        prx.actions.build(action,clicktotap);
                        if(typeof(action.enabled) == "undefined" || action.enabled) {
                            $('#'+_id+' .action-highlight').append('<span class="actionicon action-'+action.type+'" title="'+action.type+': '+action.title+'"></span>');
                        }
                    });
                }
            }


            break;
    }
}

prx.actions.parseScreenAction = function(index) {

    var _page = prx.pages[index];

    if (typeof(_page.actions)!='undefined') {
        $.each(_page.actions, function(i,action){
            action.bindTo = '#p-'+_page.id;
            action.containerid = 'p-'+_page.id;
            action.targetId = action.bindTo+'-'+action.itemId;
            //log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
            //log(action);
            if(action.type=="keydown") {
                // annam v5.9.5 was causing errors when trying to $.toJSON(prx.pages) to iniPlayerReady. also change in triggerkeydownaction()
                //action.bindTo = document;
                action.bindTo = 'body';
                action.bindPageId = 'p-'+_page.id
            }

            prx.actions.build(action);
        });
    }
}

prx.actions.parseScreenStateAction = function(index, stateindex) {

    if(stateindex == -1) {
        return false;
    }

    var _page = prx.pages[index];
    var _state = _page.states[stateindex];

    if (typeof(_state.actions)!='undefined') {
        _state.actions.sort(function(a,b){
            return(a.sort - b.sort)
        })

        $.each(_state.actions, function(i,action){
            action.bindTo = '#p-'+_page.id + '[data-state-id='+_state.id+']';
            action.containerid = 'p-'+_page.id;
            action.targetId = action.bindTo+'-'+action.itemId;
            action.live = true;
            prx.actions.build(action);
        });
    }
}

prx.actions.parseTemplateStateAction = function(index, stateindex, pageid, containerid) {

    if(stateindex == -1) {
        return false;
    }

    var _prefix = 'p-'+pageid;
    if(typeof(containerid) != "undefined" && containerid != '') {
        _prefix += '-' + containerid
    }

    var _template = prx.templates[index];
    var _state = _template.states[stateindex];

    if (typeof(_state.actions)!='undefined') {

        _state.actions.sort(function(a,b){
            return(a.sort - b.sort)
        })

        $.each(_state.actions, function(i,action){
            action.bindTo = '#'+_prefix + '-t'+prx.templates[index].id+'[data-state-id='+_state.id+']';
            action.containerid = _prefix
            action.targetId = action.bindTo+'-'+action.itemId;
            action.live = true;
            prx.actions.build(action);
        });
    }
}

prx.actions.parseContainerStateAction = function(index, stateindex, pageid, containerid, itemid) {

    if(stateindex == -1) {
        return false;
    }

    var _symbol = prx.symbols[index];
    var _state = _symbol.states[stateindex];

    if (typeof(_state.actions)!='undefined') {

        _state.actions.sort(function(a,b){
            return(a.sort - b.sort)
        })

        $.each(_state.actions, function(i,action){
            action = $.evalJSON($.toJSON(action)) // because im editing action, it overwrites for all symbol instances
            //action.bindTo = '#'+containerid + itemid+'[data-state-id='+_state.id+']';
            action.bindTo = '#'+containerid +'[data-state-id='+_state.id+']';

            /*

             if(action.pageId == -1) {
             action.pageId = pageid
             }

             if(action.itemId == -1) {
             action.itemId = itemid;
             }
             */

            action.containerid = containerid;

            // v5.5.16 we used to always target the current container :S if pageid != -1 then i just allow targetId to be built in buildAction
            if(action.pageId == -1) {
                action.pageId = pageid;
                action.targetId = '#'+containerid + ((action.itemId != -1) ? '-'+action.itemId : '');
                action.allowOverwriteTargetId = false;
            }

            action.live = true;
            prx.actions.build(action);
        });
    }
}


prx.actionsLibrary = {};

prx.actionsLibrary.loadPage = function (action) {

    if(action.animation == '') { action.animation = 'none'; }
    /* Overwrite default transitions with custom  for load*/
    /*
     var _loadTransitions = [];
     _loadTransitions['slide'] = 'slidenofadeload';
     _loadTransitions['slideback'] = 'slidebacknofadeload';
     _loadTransitions['slidedown'] = 'slidedownnofadeload';
     _loadTransitions['slideup'] = 'slideupnofadeload';
     _loadTransitions['pop'] = 'popnofadeload';
     _loadTransitions['fade'] = 'fadenofadeload';
     _loadTransitions['flip'] = 'flipnofadeload';
     _loadTransitions['turn'] = 'turnnofadeload';
     _loadTransitions['flow'] = 'flownofadeload';


     if (typeof _loadTransitions[action.animation] != "undefined") {
     action.animation = _loadTransitions[action.animation];
     }
     */
    var _activePage = prx.navigation._activepage;


    $('#p-'+action.pageId).attr('loadedFrom', prx.navigation._activepage);
    var _loadedFrom = $('#'+prx.navigation._activepage);

    $(_loadedFrom).addClass('loadedFrom');
    $('#p-'+action.pageId).addClass('loadedTo'); //.css('z-index','9999999');

    var _transition = action.animation;

    $('#p-'+action.pageId).one('pageshow', function(){
        prx.actions.callback(action);
    })

    setTimeout(function(){
        prx.navigation.changePage( $('#p-'+action.pageId), {
            transition: _transition,
            duration: action.duration,
            easing: action.animationEasing,
            allowSamePageTransition: false,
            overlay: 'in'
        });
    }, action.delay);


}

prx.actionsLibrary.unloadPage = function (action) {

    /* BACKWARD COMPATIBILITY WITH OLD JQUERY TRANSITIONS FOR OVERLAY UNLOAD*/
    /*
     var _unloadTransitions = [];
     _unloadTransitions['slide'] = 'slidenofadeunload';
     _unloadTransitions['slideback'] = 'slidebacknofadeunload';
     _unloadTransitions['slidedown'] = 'slidedownnofadeunload';
     _unloadTransitions['slideup'] = 'slideupnofadeunload';
     _unloadTransitions['pop'] = 'popnofadeunload';
     _unloadTransitions['fade'] = 'fadenofadeunload';
     _unloadTransitions['flip'] = 'flipnofadeunload';
     _unloadTransitions['turn'] = 'turnnofadeunload';
     _unloadTransitions['flow'] = 'flownofadeunload';


     if (typeof _unloadTransitions[action.animation] != "undefined") {
     action.animation = _unloadTransitions[action.animation];
     }
     */

    if(action.animation == '') { action.animation = 'none'; }
    var _loadedPage = prx.navigation._activepage;
    var _showPage = $('#'+_loadedPage).attr('loadedFrom');
    if(typeof(_showPage) != "undefined") {

        var _transition = action.animation;

        // very risky patenta for not calling pageshow - warning, $._data could break at any jQuery update
        var _events = $._data($('#'+_showPage).get(0), "events").pageshow
        delete $._data($('#'+_showPage).get(0), "events").pageshow;

        $('#'+_showPage).one('pageshow', function(){
            // very risky patenta for not calling pageshow part 2
            $._data($(this).get(0), "events").pageshow = _events;
            if(!prx.embed && parent!=window) { try{parent.prx.highlightPage(_showPage.substr(2))}catch(err){} }

            $('#'+ _loadedPage).removeClass('loadedTo');//.css('z-index','');
            $('#' + _showPage).removeClass('loadedFrom');

            var sel = $('#' + _showPage).get(0);
            var origDisp = sel.style.display;
            sel.style.display='none';
            sel.offsetHeight; // no need to store this anywhere, the reference is enough
            sel.style.display= origDisp;// 'block';


            _showPage = null; // perf+
            prx.actions.callback(action);
        })

        setTimeout(function(){
            prx.navigation.changePage($('#'+_showPage), {
                transition: _transition,
                duration: action.duration,
                easing: action.animationEasing,
                overlay: 'out'
            });


        }, action.delay);
    } else {
        prx.actions.callback(action);
    }
}

prx.actionsLibrary.hideItem = function(action) {
    // changes to v2.2: action can now access items in other pages - targetId could be wrong, regenerate
    var targetId = action.targetId;
    if(typeof(action.pageId) != "undefined" && action.pageId != -1) {
        targetId = '#p-'+action.pageId+'-'+action.itemId;
    }
    var _duration = action.duration;
    var _easing = action.animationEasing;
  
    if(typeof(_duration) == "undefined") { _duration = 0;}
    if(typeof(_easing) == "undefined") {_easing='linear';}
    
    _easing = prx.easing.get(_easing);
    

    new TimelineMax()
        .add(function(){
            $(targetId).addClass('animating-out')
        }, action.delay/1000)
        .to(targetId, _duration / 1000, {
            opacity: 0,
            ease: _easing,
            force3D: prx.greensockForce3D
        }).call(function(){
            $(targetId).addClass('hidden').removeClass('animating-out');
            prx.actions.callback(action);
        });

}
////EDITOR-184 Function added for Show and hide.
prx.actionsLibrary.showHide = function(action) {
	 // changes to v2.2: action can now access items in other pages - targetId could be wrong, regenerate
    var targetId = action.targetId;
    if(typeof(action.pageId) != "undefined" && action.pageId != -1) {
        targetId = '#p-'+action.pageId+'-'+action.itemId;
    }

    var _duration = action.duration;
    var _animationDuration = action.animationDuration;
    var _easing = action.animationEasing;

    if(typeof(_duration) == "undefined") { _duration = 200; }
    if(typeof(_animationDuration) == "undefined") { _animationDuration = 0; }
    if(typeof(_easing) == "undefined") { _easing = 'linear'; }

    _easing = prx.easing.get(_easing);

    new TimelineMax()
        .add(function(){
            if($(targetId).hasClass('hidden')) {
                $(targetId).css('opacity', 0).removeClass('hidden');
            }
        }, action.delay/1000)
        .to(targetId, _animationDuration / 1000, {
            opacity: 1,
            ease: _easing,
            force3D: prx.greensockForce3D
        }).to(targetId, _animationDuration / 1000, {
            opacity: 0,
            delay: _duration / 1000,
            ease: _easing,
            force3D: prx.greensockForce3D
        }).call(function(){
            $(targetId).addClass('hidden');
            prx.actions.callback(action);
        });

}

prx.actionsLibrary.showItem = function(action) {
    // changes to v2.2: action can now access items in other pages - targetId could be wrong, regenerate
    var targetId = action.targetId;
    if(typeof(action.pageId) != "undefined" && action.pageId != -1) {
        targetId = '#p-'+action.pageId+'-'+action.itemId;
    }

    var _duration = action.duration;
    var _easing = action.animationEasing;

    if(typeof(_duration) == "undefined") { _duration = 0; }
    if(typeof(_easing) == "undefined") { _easing = 'linear'; }

    _easing = prx.easing.get(_easing);

    new TimelineMax()
        .add(function(){
            if($(targetId).hasClass('hidden')) {
                $(targetId).css('opacity', 0).removeClass('hidden');
            }
            $(targetId).addClass('animating-in')
        }, action.delay/1000)
        .to(targetId, _duration / 1000, {
            opacity: 1,
            ease: _easing,
            force3D: prx.greensockForce3D
        }).call(function(){
            $(targetId).removeClass('animating-in')
            prx.scrollable.refresh(targetId);
            prx.actions.callback(action);
        });
}

prx.actionsLibrary.toggleItem = function(action) {
    var targetId = action.targetId;
	if($(targetId).hasClass('hidden') || $(targetId).hasClass('animating-out')) {
        prx.actionsLibrary.showItem(action);
	} else {
        prx.actionsLibrary.hideItem(action);

	}
}

prx.actionsLibrary.goToPage = function(action) {
    var _pageid = '#p-'+action.pageId;
    var _currentpage = _pageid;
    action.pageId = action.pageId;

    _currentpage = '#'+prx.navigation._activepage;

    // remember scroll position
    var _pgId = _currentpage.substr(1);
    $.each(prx.scrollable._scrollables,function(i,elm){
        if(i.substr(0, _pgId.length) == _pgId) { // only save scroll position if in currently displayed page, otherwise it messes scroll position
            prx.scrollable._scrollPositions[i] = [elm.x,elm.y];
        }
    });

    if (typeof(action.delay) == "undefined") { action.delay = 0; }
    if(action.animation == '') { action.animation = 'none';}


    if (_pageid != _currentpage) {


        if (action.pageId=="_back") {
            _pageid = prx.navigation._gobackstack[prx.navigation._gobackstack.length-1];
            prx.navigation._gobackstack.pop();
            if(typeof(_pageid) == "undefined") {
                setTimeout(function() {
                    prx.actions.callback(action);
                }, action.delay);
                return true;
            }
        }

        var _targetPage = prx.stc.screens.getStructFromId(_pageid);

        if(typeof(_targetPage) == "undefined") {
            prx.actions.callback(action);
            return;
        }

        var _pageOrientation = prx.orientation.getPage(_targetPage)


        /* HANDLE PAGE ORIENTATION WHEN TRY TO GO TO PAGE WITH DIFFERENT ORIENTATION SET, THEN AUTO ROTATE BEFORE */
        if (_pageOrientation != prx.orientation.get()) {

            /* change skin orientation if on web player */
            if(!prx.embed && parent != window) {
                try {
                    parent.prx.switchOrientation();
                }catch(err){};
            }


            /********** TODO: check if targetpage has orientationchange events and trigger them *********/
        }

        $('.loadedFrom').removeClass('loadedFrom').addClass('remove-on-pageshow');

        if (action.pageId!="_back") {

            prx.navigation._gobackstack.push(_currentpage);

            if (prx.navigation._gobackstack.length >= 50) {
                prx.navigation._gobackstack.shift();
            }
        }

        var _transition = action.animation;

        setTimeout(function() {
            prx.navigation.changePage( $(_pageid),{
                transition: _transition,
                duration: action.duration,
                easing: action.animationEasing,
                allowSamePageTransition: false
            });
            prx.eventTransitionPage = '#p-'+action.pageId;
        }, action.delay);


        $(_pageid).one('pageshow', function(){
            // Scroll to last scrolled position (for mouse event)
            var _pgId = _pageid.substr(1);
            if(typeof(prx.scrollable._scrollables) != "undefined") {
                $.each(prx.scrollable._scrollables,function(i,elm){
                    if(i.substr(0, _pgId.length) == _pgId) { // only fix scroll position if in currently displayed page, otherwise it messes scroll position
                        if(typeof(prx.scrollable._scrollPositions[i]) != "undefined") {
                            elm.scrollTo(prx.scrollable._scrollPositions[i][0],prx.scrollable._scrollPositions[i][1],0);
                        }
                    }
                });
            }
            prx.actions.callback(action);
        })



    } else {
        setTimeout(function() {
            prx.actions.callback(action);
        }, action.delay);
    }
}

prx.actionsLibrary.goToCarouselPage = function(action) {

    var _snap = false;
    if (typeof(prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner']) != "undefined") {
        _snap = prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner'].options.snap;
    } else {
        prx.actions.callback(action);
        return false;
    }

    if (_snap) {

        // wrong target id, regenerate
        // not being used???
        if(typeof(action.pageId) != "undefined" && action.pageId != -1) {
            var targetId = '#p-'+action.pageId+'-'+action.itemId;
        } else {
            var targetId = action.targetId.replace(/ *\[[^)]*\] */g, "");
        }

        var _pageX = action.itemIndex[0];
        var _pageY = action.itemIndex[1];
        if(_pageX=="") { _pageX = "nochange" }
        if(_pageY=="") { _pageY = "nochange" }

        if(typeof(action.animationDuration) == "undefined") { action.animationDuration = 400; }

        var _scroller = prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner'];
        var _targetPageX = _scroller.currentPage.pageX;
        var _targetPageY = _scroller.currentPage.pageY;

        setTimeout(function(){
            switch(_pageX){
                case "previous":
                    _targetPageX--;
                    if (_targetPageX<0) {_targetPageX = 0};
                    break;
                case "next":
                    _targetPageX++;
                    if (_targetPageX > _scroller.pages.length) {
                        _targetPageX = _scroller.pages.length;
                    }
                    break;
                case "nochange":
                    _targetPageX = _scroller.currentPage.pageX;
                    break;
                default:
                    _targetPageX = parseInt(_pageX);
                    break;
            }
            switch(_pageY){
                case "previous":
                    _targetPageY--;
                    if (_targetPageY<0) {_targetPageY = 0};
                    //_pageY = (prx.scrollable._scrollables[action.targetId.substr(1) + '-inner'].currentPage.pageY > 0 && prx.scrollable._scrollables[action.targetId.substr(1) + '-inner'].directionY) ? parseInt(prx.scrollable._scrollables[action.targetId.substr(1) + '-inner'].currentPage.pageY) - 1 : 0;
                    break;
                case "next":
                    _targetPageY++;
                    if (_targetPageY > _scroller.pages[0].length) {
                        _targetPageY = _scroller.pages[0].length;
                    }
                    //_pageY = (prx.scrollable._scrollables[action.targetId.substr(1) + '-inner'].directionY) ? parseInt(prx.scrollable._scrollables[action.targetId.substr(1) + '-inner'].currentPage.pageY) + 1 : 0;
                    break;
                case "nochange":
                    _targetPageY = _scroller.currentPage.pageY;
                    //_pageY = parseInt(prx.scrollable._scrollables[action.targetId.substr(1) + '-inner'].currentPage.pageY);
                    break;
                default:
                    _targetPageY = parseInt(_pageY);
                    //_pageY = parseInt(_pageY);
                    break;
            }

            _pageX = parseInt(_targetPageX);
            _pageY = parseInt(_targetPageY);


            var _scrollableTabbarContainer = false;
            for(var i=0;i<prx.scrollable._scrollableTabbars.length;i++) {
                if(action.targetId.replace(/ *\[[^)]*\] */g, "") == '#'+prx.scrollable._scrollableTabbars[i].container + '-' + prx.scrollable._scrollableTabbars[i].linked) {
                    _scrollableTabbarContainer = prx.scrollable._scrollableTabbars[i].container + '-' + prx.scrollable._scrollableTabbars[i].id;
                    break;
                }
            }

            prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner'].goToPage(_pageX, _pageY, parseInt(action.scrollDuration))
            if(_scrollableTabbarContainer != false) {
                prx.scrollable._scrollables[_scrollableTabbarContainer + '-inner'].goToPage(_pageX, 0, parseInt(action.scrollDuration))
            }
        }, action.delay);
    }

    setTimeout(function(){
        prx.actions.callback(action);
    }, parseInt(action.delay) + parseInt(action.scrollDuration));
}

prx.actionsLibrary.scrollScrollableContainer = function(action) {
    if(typeof(prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner']) == "undefined") {
        prx.actions.callback(action);
        return false;
    }

    if(typeof(action.horizontalPx) == "undefined") { action.horizontalPx = 0; }
    if(typeof(action.verticalPx) == "undefined") { action.verticalPx = 0; }

    switch(action.scrollType) {
        case "scroll-to":
            var _horizontalPx = -parseInt(action.horizontalPx);
            var _verticalPx = -parseInt(action.verticalPx);

            if(action.horizontalPx == "*") { _horizontalPx = prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner'].x }
            if(action.verticalPx == "*") { _verticalPx = prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner'].y }

            setTimeout(function(){
                prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner'].scrollTo(_horizontalPx, _verticalPx, parseInt(action.scrollDuration))
            }, action.delay);

            break;
        case "scroll-by":
            var _horizontalPx = parseInt(action.horizontalPx);
            var _verticalPx = parseInt(action.verticalPx);

            if(action.horizontalPx == "*") { _horizontalPx = 0 }
            if(action.verticalPx == "*") { _verticalPx = 0 }

            setTimeout(function(){
                prx.scrollable._scrollables[action.targetId.substr(1).replace(/ *\[[^)]*\] */g, "") + '-inner'].scrollBy(_horizontalPx, _verticalPx, parseInt(action.scrollDuration))
            }, action.delay);

            break;
    }

    setTimeout(function(){
        prx.actions.callback(action);
    }, parseInt(action.delay) + parseInt(action.scrollDuration));
}

prx.actionsLibrary.fireItemsEvent = function(action){

    // v5.0.13 always changing click to tap.
    if(action.itemEvent == 'click') { action.itemEvent = 'tap'; }
    // hammer
    if (action.itemEvent == 'taphold') {action.itemEvent = 'press'}

    // need to reset action.targetId if targeting container
    if(action.targetType == 'container') {
        var pageid = action.containerid.split('-')[1];
        // $= is correct because there may be more than one containers in the page so we want to select all of them (the user didnt select a specific one)
        // but later action.targetId = '#' + $item.attr('id') gets only the first anw
        action.targetId = '#p-' + pageid + ' .type-symbol[data-symbol-id='+action.symbolId+'] .box[id$=-' + action.itemId + ']';

        var $item = $(action.targetId)
        // to makesure callbackaction is called
        if($item.length == 0) {
            prx.actions.callback(action);
            return;
        } else {
            action.targetId = '#' + $item.attr('id')
        }
    } else {
        if(action.pageId == -1) {
            action.targetId = '#' + action.containerid + '-' + action.itemId;
        } else {
            action.targetId = '#p-' + action.pageId + '-' + action.itemId;
        }
    }

    setTimeout(function(){
        if(typeof(action.itemIndex)== "undefined") {
            $(action.targetId).trigger(action.itemEvent);
        } else if(parseInt(action.itemIndex)==action.itemIndex) { // if is numeric - refers to dynamic property
            $(action.targetId + "-" + action.itemDynProps + "-" + action.itemIndex).trigger(action.itemEvent);
        } else {
            switch(action.itemIndex) {
                case 'actionbarUpCaretActions':
                    $(action.targetId + ' .left-icon').trigger(action.itemEvent);
                    break;
                case 'actionbarActionOverflowActions': //currently for android actionbar - will propably need to change its name on the component
                    $(action.targetId + ' .actionOverflow').trigger(action.itemEvent);
                    break;
                case 'flipswitchActionsOnActive':
                    $(action.targetId + ' input:checked[id='+_id+'-flipswitch]').trigger(action.itemEvent);
                    break;
                case 'flipswitchActionsOnDeactive':
                    $(action.targetId + ' input[id='+_id+'-flipswitch]:not(:checked)').trigger(action.itemEvent);
                    break;
                case 'checkboxActionsOnActive':
                    $(action.targetId + ' input:checked[id='+_id+'-checkbox]').trigger(action.itemEvent);
                    break;
                case 'checkboxActionsOnDeactive':
                    $(action.targetId + ' input[id='+_id+'-checkbox]:not(:checked)').trigger(action.itemEvent);
                    break;
                case 'ios7NavbarActionsTitle':
                    $(action.targetId + ' .ios7-navbar-title').trigger(action.itemEvent);
                    break;
                case 'ios7NavbarActionsLeftBtn':
                    $(action.targetId + ' .ios7-navbar-button-left').trigger(action.itemEvent);
                    break;
                case 'ios7NavbarActionsRightBtn':
                    $(action.targetId + ' .ios7-navbar-button-right').trigger(action.itemEvent);
                    break;
                default:
                    if(action.itemIndex == "actions") {
                        $(action.targetId).trigger(action.itemEvent);
                    } else {
                        $(action.targetId + ' .actions-' + action.itemIndex).trigger(action.itemEvent);
                    }

                    break;
            }
        }
        prx.actions.callback(action);
    }, action.delay);
}

prx.actionsLibrary.animateItem = function(action) {

    var props = {};
    var options = {
        duration: parseInt(action.duration),
        easing: prx.easing.get(action.animationEasing),
        queue: false,
        complete: function(){ prx.actions.callback(action); }
    }

    props.easing = prx.easing.get(action.animationEasing);

    switch(action.animationType) {
        case "move-item":
            switch(action.moveType) {
                case "move-by":
                    props.top = true;
                    props.left  = true;

                    if(action.moveXBy != '*') {
                        var x = Number(action.moveXBy);
                        if(x >= 0) { x = '+=' + x; } else {	x = '-=' + -x; }
                        props.left = x;
                    }
                    if(action.moveYBy != '*') {
                        var y = Number(action.moveYBy);
                        if(y >= 0) { y = '+=' + y; } else { y = '-=' + -y; }
                        props.top = y;
                    }
                   
                    //TweenMax.to(action.targetId,options.duration/1000,{left:props.left,top:props.top, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
                    new TimelineMax().to(action.targetId,options.duration/1000,{left:props.left,top:props.top, ease: options.easing, delay: action.delay/1000, force3D: prx.greensockForce3D}).call(options.complete);


                    //$(action.targetId).transition(props, function(){ prx.actions.callback(action); })
                    //$(action.targetId).animate(props,options);
                    //TweenMax.to(action.targetId,options.duration/1000,{x:props.left,y:props.top, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

                    /* Other notations...
                     $(action.targetId).animate(props, function(){ prx.actions.callback(action); })
                     $(action.targetId).animate(props, parseInt(props.duration), props.easing,  function(){ prx.actions.callback(action); })
                     $(action.targetId).animate(_animate.properties,_animate.options);
                     */

                    /*
                     setTimeout(function(){
                     TweenMax.to(action.targetId,options.duration/1000,{x:props.left,y:props.top, ease: options.easing, onComplete: options.complete});
                     }, action.delay);
                     */
                    break;
                case "move-to":
                	var opt = {
                		ease: options.easing,
                		delay: action.delay/1000,
                		force3D: prx.greensockForce3D           		
                	}
                	
                    var _target = $(action.targetId);

                    if(action.moveXTo != '*') {
                        var x = Number(action.moveXTo);
                        props.left = x;
                        opt.x = props.left - parseInt($(action.targetId).css('left'));
                    }
                    
                    if(action.moveYTo != '*') {
                        var y = Number(action.moveYTo);
                        props.top = y;
                        opt.y = props.top - parseInt($(action.targetId).css('top'));
                    }

                    new TimelineMax().to(action.targetId,options.duration/1000,opt).call(options.complete);


                    /*
                    if(action.moveXTo != '*') {
                        props.left = props.left - parseInt($(action.targetId).css('left'));
                    }else{
                    	props.left = _target.offset().left - parseInt($(action.targetId).css('left'));
                    }
                    if(action.moveYTo != '*') {
                        props.top = props.top - parseInt($(action.targetId).css('top'));
                    }else{
                    	props.top = _target.offset().top - parseInt($(action.targetId).css('top'));
                    }*/
                    //TweenMax.to(action.targetId,options.duration/1000,{left:props.left,top:props.top, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
                   

                    //$(action.targetId).transition(props, function(){ prx.actions.callback(action); })
                    //$(action.targetId).animate(props,options);
                    //TweenMax.to(action.targetId,options.duration/1000,{left:props.left,top:props.top, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

                    /*
                     setTimeout(function(){
                     TweenMax.to(action.targetId,options.duration/1000,{left:props.left,top:props.top, ease: options.easing, onComplete: options.complete});
                     }, action.delay);
                     */
                    break;
                case "move-to-animation-target":
                    var x = true;
                    var y = true;



                    if(action.pageId != -1) {
                        var $ap = $('#p-'+action.pageId+'-'+action.animationPointId)
                    } else {
                        var $ap = $('#'+action.containerid+'-'+action.animationPointId)
                    }

                    /* ******* NEED TO FIX THE ABOVE ****** */

                    //var $ap = $('#'+action.containerid+'-'+action.animationPointId)


                    x = $ap.position().left;
                    y = $ap.position().top;


                    /*
                     var _target = $(action.targetId);

                     var itemSplit = action.targetId.split('-');
                     var itemId = 'box-' + itemSplit[itemSplit.length-1];

                     if(typeof(prx.allItems[itemId])) {
                     var _data = prx[prx.allItems[itemId].containertype][prx.allItems[itemId].containerindex].states[prx.allItems[itemId].states[_target.parents('[data-state-id]').first().attr('data-state-id')].stateindex].data;
                     _data = $.evalJSON(_data);
                     var item = _data[prx.allItems[itemId].states[_target.parents('[data-state-id]').first().attr('data-state-id')].itemindex];

                     }

                     // FIX: In order for this to behave right we need to get item's initial position prx.data
                     if (typeof(prx.variables._triggerData[action.targetId]) != 'undefined') {
                     x = x-prx.variables._triggerData[action.targetId].ondragstart.position.left-_target.position().left;
                     y = y-prx.variables._triggerData[action.targetId].ondragstart.position.top-_target.position().top;
                     } else {
                     x = x-item.left-_target.position().left;
                     y = y-item.top+_target.position().top;
                     }
                     */

                    //************** HERE


                    x=x-parseInt($(action.targetId).css('left'));
                    y=y-parseInt($(action.targetId).css('top'));
                    //left:0, top: 0,


                    //TweenMax.to(action.targetId,options.duration/1000,{left:x,top:y, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
                    new TimelineMax().to(action.targetId,options.duration/1000,{ x:x, y:y, ease: options.easing, delay: parseInt(action.delay)/1000, force3D: prx.greensockForce3D}).call(options.complete);
                    //$target.css('-webkit-transform',_tempTransform);

                    /*
                     $(action.targetId).transition({
                     left: x,
                     top: y,
                     duration: action.duration,
                     //delay: action.delay,
                     queue: false
                     }, function(){ prx.actions.callback(action); })
                     */
                    /*
                     $(action.targetId).animate({
                     left: x,
                     top: y
                     }, {
                     easing: action.animationEasing,
                     duration: action.duration,
                     //delay: action.delay,
                     queue: false,
                     complete: function(){prx.actions.callback(action);}
                     }
                     );
                     */

                    //TweenMax.to(action.targetId,options.duration/1000,{left:x,top:y, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

                    /*
                     setTimeout(function(){
                     TweenMax.to(action.targetId,options.duration/1000,{left:x,top:y, ease: options.easing, onComplete: options.complete});
                     }, action.delay);
                     */
                    break;
                default:
                    break;
            }
            break;
        case "resize-item":
            props.scale = 1;
            switch(action.resizeType) {
                case "resize-by":
                    if(action.resizeXBy != '*') {
                        var x = Number(action.resizeXBy);
                        if(x >= 0) { x = '+=' + x; } else {	x = '-=' + -x; }
                        props.width = x;
                    }
                    if(action.resizeYBy != '*') {
                        var y = Number(action.resizeYBy);
                        if(y >= 0) { y = '+=' + y; } else { y = '-=' + -y; }
                        props.height = y;
                    }


                    options.complete = function(){
                        if (typeof(prx.scrollable._scrollables[action.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") + '-inner'])!='undefined') {
                            prx.scrollable._scrollables[action.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") + '-inner'].refresh();
                        }
                        prx.actions.callback(action);
                    }
                    //TweenMax.to(action.targetId,options.duration/1000,{width:props.width, height:props.height, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
                    new TimelineMax().to(action.targetId,options.duration/1000,{width:props.width, height:props.height, ease: options.easing, delay: action.delay/1000, force3D: prx.greensockForce3D}).call(options.complete);


                    //$(action.targetId).transition(props, function(){ prx.actions.callback(action); })
                    //$(action.targetId).animate(props,options);
                    //TweenMax.to(action.targetId,options.duration/1000,{width:props.width, height:props.height, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

                    /*
                     setTimeout(function(){
                     TweenMax.to(action.targetId,options.duration/1000,{width:props.width, height:props.height, ease: options.easing, onComplete: options.complete});
                     }, action.delay);
                     */
                    break;
                case "resize-to":

                    // set this as default in case it doesn't get set. Tweenmax doesn't like it undefined
                    props.width = true;
                    props.height = true;

                    if(action.resizeXTo != '*') {
                        var x = Number(action.resizeXTo);
                        props.width = x;
                    }
                    if(action.resizeYTo != '*') {
                        var y = Number(action.resizeYTo);
                        props.height = y;
                    }


                    options.complete = function(){
                        if (typeof(prx.scrollable._scrollables[action.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") + '-inner'])!='undefined') {
                            prx.scrollable._scrollables[action.targetId.substring(1).replace(/ *\[[^)]*\] */g, "") + '-inner'].refresh();
                        }
                        prx.actions.callback(action);
                    }
                    //TweenMax.to(action.targetId,options.duration/1000,{width:props.width, height:props.height, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
                    new TimelineMax().to(action.targetId,options.duration/1000,{width:props.width, height:props.height, ease: options.easing, delay: action.delay/1000, force3D: prx.greensockForce3D}).call(options.complete);

                    //$(action.targetId).transition(props, function(){ prx.actions.callback(action); })
                    //$(action.targetId).animate(props,options);
                    //TweenMax.to(action.targetId,options.duration/1000,{width:props.width, height:props.height, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

                    /*
                     setTimeout(function(){
                     TweenMax.to(action.targetId,options.duration/1000,{width:props.width, height:props.height, ease: options.easing, onComplete: options.complete});
                     }, action.delay);
                     */
                    break;
                default:
                    break;
            }
            break;
        case "scale-item":
            var x = Number(action.scaleX);
            var y = Number(action.scaleY);



            //TweenMax.to(action.targetId,options.duration/1000,{scaleX:x, scaleY:y, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
            new TimelineMax().to(action.targetId,options.duration/1000,{scaleX:x, scaleY:y, ease: options.easing, delay: action.delay/1000, force3D: prx.greensockForce3D}).call(options.complete);

            /*
             $(action.targetId).transition({
             scale: [x,y],
             easing: action.animationEasing,
             duration: action.duration,
             //delay: action.delay,
             queue: false
             }, function(){ prx.actions.callback(action); })
             */

            /*
             $(action.targetId).animate({
             scale: [x,y]
             }, {
             easing: action.animationEasing,
             duration: action.duration,
             //delay: action.delay,
             queue: false,
             complete: function(){prx.actions.callback(action);}
             }
             );
             */

            //TweenMax.to(action.targetId,options.duration/1000,{scaleX:x, scaleY:y, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

            /*
             setTimeout(function(){
             TweenMax.to(action.targetId,options.duration/1000,{scaleX:x, scaleY:y, ease: options.easing, onComplete: options.complete});
             }, action.delay);
             */

            break;
        case "fade-item":


            // annam 5.1.3 autoalpha adds visibility: hidden to the element if it has been faded to 0. we dont want this!
            // what if i have an opacity 0 but actions that i still want to trigger? (real user case).
            // yes it may interfere with projects that are wrongly set-up but that's a setup issue while this is ours.
            //new TimelineMax().to(action.targetId,options.duration/1000,{autoAlpha: Number(action.fadeTo), ease: options.easing, delay: action.delay/1000}).call(options.complete);
            new TimelineMax().to(action.targetId,options.duration/1000,{opacity: Number(action.fadeTo), ease: options.easing, delay: action.delay/1000, force3D: prx.greensockForce3D }).call(options.complete);

            /*
             $(action.targetId).transition({
             opacity: Number(action.fadeTo),
             easing: action.animationEasing,
             duration: action.duration,
             //delay: action.delay,
             queue: false
             }, function(){ prx.actions.callback(action); })
             */

            /*
             $(action.targetId).animate({
             opacity: Number(action.fadeTo)
             }, {
             easing: action.animationEasing,
             duration: action.duration,
             //delay: action.delay,
             queue: false,
             complete: function(){prx.actions.callback(action);}
             }
             );
             */

            //TweenMax.to(action.targetId,options.duration/1000,{autoAlpha: Number(action.fadeTo), ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

            /*
             setTimeout(function(){
             TweenMax.to(action.targetId,options.duration/1000,{autoAlpha: Number(action.fadeTo), ease: options.easing, onComplete: options.complete});
             }, action.delay);
             */
            break;
        case "rotate-item":
            switch(action.rotateType) {
                case "rotate-by":
                    var deg =  Number(action.rotateBy);
                    if(deg >= 0) { deg = '+=' + deg; } else { deg = '-=' + -deg; }


                    //TweenMax.to(action.targetId,options.duration/1000,{rotation: deg, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
                    new TimelineMax().to(action.targetId,options.duration/1000,{rotation: deg, ease: options.easing, delay: action.delay/1000, force3D: prx.greensockForce3D }).call(options.complete);


                    /*
                     $(action.targetId).transition({
                     rotate: deg,
                     easing: action.animationEasing,
                     duration: action.duration,
                     //delay: action.delay,
                     queue: false
                     }, function(){ prx.actions.callback(action); })
                     */

                    /*
                     $(action.targetId).animate({
                     rotate: deg
                     }, {
                     easing: action.animationEasing,
                     duration: action.duration,
                     //delay: action.delay,
                     queue: false,
                     complete: function(){prx.actions.callback(action);}
                     }
                     );
                     */

                    //TweenMax.to(action.targetId,options.duration/1000,{rotation: deg, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

                    /*
                     setTimeout(function(){

                     TweenMax.to(action.targetId,options.duration/1000,{rotation: deg, ease: options.easing, onComplete: options.complete});

                     }, action.delay);
                     */
                    break;
                case "rotate-to":

                    var _rotateTo = Number(action.rotateTo)


                    if(typeof(action.rotationDirection) != "undefined") { _rotateTo += '_' + action.rotationDirection; }

                    //TweenMax.to(action.targetId,options.duration/1000,{rotation: Number(action.rotateTo), ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
                    new TimelineMax().to(action.targetId,options.duration/1000,{rotation: _rotateTo, ease: options.easing, delay: action.delay/1000, force3D: prx.greensockForce3D}).call(options.complete);


                    /*
                     $(action.targetId).transition({
                     rotate: Number(action.rotateTo),
                     easing: action.animationEasing,
                     duration: action.duration,
                     //delay: action.delay,
                     queue: false
                     }, function(){ prx.actions.callback(action); })
                     */

                    /*
                     $(action.targetId).animate({
                     rotate: deg
                     }, {
                     easing: action.animationEasing,
                     duration: action.duration,
                     //delay: action.delay,
                     queue: false,
                     complete: function(){prx.actions.callback(action);}
                     }
                     );
                     */
                    //TweenMax.to(action.targetId,options.duration/1000,{rotation: Number(action.rotateTo), ease: options.easing, delay: action.delay/1000, onComplete: options.complete});

                    /*
                     setTimeout(function(){

                     TweenMax.to(action.targetId,options.duration/1000,{rotation: Number(action.rotateTo), ease: options.easing, onComplete: options.complete});

                     }, action.delay);
                     */
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

prx.actionsLibrary.moveScreen = function(action) {

    var targetId = action.targetId;

    if(action.pageId == -2) {
        var split = targetId.split(/[-\[]/)
        targetId = '#p-' + split[1];
    }


    /* SETTINGS FOR JQUERY.ANIMATE AND TWEENMAX */
    var props = {};
    var options = {
        duration: parseInt(action.duration),
        easing: action.animationEasing,
        queue: false,
        complete: function(){ prx.actions.callback(action); }
    }

    props.easing = prx.easing.get(action.animationEasing);



    switch(action.moveType) {
        case "move-by":
            props.top = true;
            props.left  = true;

            props.overlaytop = true;
            props.overlayleft  = true;

            if(action.moveXBy != '*') {
                var x = Number(action.moveXBy);
                if(x >= 0) { props.overlayleft = '-=' + x; } else {	props.overlayleft = '+=' + -x; }
                if(x >= 0) { x = '+=' + x; } else {	x = '-=' + -x; }

                props.left = x;
            }
            if(action.moveYBy != '*') {
                var y = Number(action.moveYBy);

                var pageid = targetId.split(/[-\[]/)[1]
                if(prx.allowstatusbar && prx.canvas._statusbars[pageid].statusbar == 1) {
                    y += prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[pageid].orientation];
                }

                if(y <= 0) { props.overlaytop = '-=' + y; } else { props.overlaytop = '+=' + -y; }
                if(y >= 0) { y = '+=' + y; } else { y = '-=' + -y; }

                props.top = y;
            }


            //TweenMax.to(targetId,options.duration/1000,{left:props.left,top:props.top, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
            new TimelineMax().to(targetId,options.duration/1000,{left:props.left,top:props.top, ease: props.easing, delay: action.delay/1000, force3D: prx.greensockForce3D}).call(options.complete);
            new TimelineMax().to(targetId + ' > .box[data-mpoverlay="1"]',options.duration/1000,{left:props.overlayleft,top:props.overlaytop, ease: props.easing, delay: action.delay/1000, force3D: prx.greensockForce3D});

            break;
        case "move-to":
            props.top = true;
            props.left  = true;

            props.overlaytop = true;
            props.overlayleft  = true;

            if(action.moveXTo != '*') {
                var x = Number(action.moveXTo);
                props.left = x;
                props.overlayleft = (($(targetId).offset().left - x<0) ? '-=' : '+=') + Math.abs($(targetId).offset().left - x);
            }
            if(action.moveYTo != '*') {
                var y = Number(action.moveYTo);

                var pageid = targetId.split(/[-\[]/)[1]
                if(prx.allowstatusbar && prx.canvas._statusbars[pageid].statusbar == 1) {
                    y += prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[pageid].orientation];
                }

                props.top = y;
                props.overlaytop = (($(targetId).offset().top - y<0) ? '-=' : '+=') + Math.abs($(targetId).offset().top - y);;
            }


            //TweenMax.to(targetId,options.duration/1000,{left:props.left,top:props.top, ease: options.easing, delay: action.delay/1000, onComplete: options.complete});
            new TimelineMax().to(targetId,options.duration/1000,{left:props.left,top:props.top, ease: props.easing, delay: action.delay/1000, force3D: prx.greensockForce3D}).call(options.complete);
            new TimelineMax().to(targetId + ' .box[data-mpoverlay="1"]',options.duration/1000,{left:props.overlayleft,top:props.overlaytop, ease: props.easing, delay: action.delay/1000, force3D: prx.greensockForce3D});

            break;

        default:
            break;
    }
}

prx.actionsLibrary.changeProperty = function(action){
    var _duration = 1;
    var _delay = 0;
    if(typeof(action.duration) != "undefined") {
        _duration = action.duration/1000;
    }
    if(typeof(action.delay) != "undefined") {
        _delay = action.delay/1000;
    }

    var _property;

    if(typeof(action._timelineToUse) != "undefined") {
        var timeline = action._timelineToUse;
    } else {
        // without { paused: true }, it will start playing immediately
        var timeline = new TimelineMax({force3D: prx.greensockForce3D});
    }

    // annam v5.2.22 moving this above the property declaration because i use variables in "visible" case.
    // Accommodate variables
    switch(action.valueType) {
        case "customValue":
            //action.newvalue already exists and it's OK
            //action.newvalue = prx.variables.recursivelyEvaluate(action.newvalue,"");
            break;
        case "readFromVariable":
            if(typeof(action.variableName!="undefined")) {
                if (typeof(prx.variables._variables[action.variableName])!="undefined") {
                    if (typeof(prx.variables._variables[action.variableName].parsed)=="undefined") {
                        prx.variables.recursivelyEvaluate(prx.variables._variables[action.variableName].value,action.variableName);
                    }

                    action.newvalue = prx.variables._variables[action.variableName].parsed;
                }
            }
            break;
    }

    var _newvalue = action.newvalue;

    var propertyType = action.propertyType;
    if(typeof(propertyType) == "undefined") {
        propertyType = 'component-property'
    }

    switch(action.propertyId) {
        case "left":
            _property = { selector: '', property: 'x' }
            _newvalue = _newvalue - parseInt($(action.targetId).css('left')); // normalization for draggable items/components moved with css transform
            break;
        case "top":
            _property = { selector: '', property: 'y' }
            _newvalue = _newvalue - parseInt($(action.targetId).css('top'));
            break;
        case "opacity":
            _property = { selector: '', property: action.propertyId }
            break;
        case "width":
        case "height":
            _property = { selector: '', property: action.propertyId }
            if(typeof(action.componentType) != "undefined" && typeof(prx.types[action.componentType].onResize) != "undefined") {
                _property.onResize = prx.types[action.componentType].onResize;
            }
            break;
        case "templatestateid":
            _property = { property: 'template-state' }
            break;
        case "background":
            if(action.itemId == 'current-page' || action.itemId == 'current-page-template' || action.itemId == 'current-container') {
                _property = { type: 'colorpicker', selector: '', property: 'background-color' }
            }
            break;
        case "dynamicProperties":
            _property = { rerender: true }
            break;
        case "visible":
            if(_newvalue == 0 || _newvalue == false) { // fading out
                _newvalue = 0;
                (function(delay, duration){
                    timeline.add(function(){
                        $(action.targetId).addClass('hidden')
                    }, parseFloat(delay)+parseFloat(duration));
                })(_delay, _duration);
            } else { // fading in
                if(_newvalue === true) { _newvalue = 1 } // when called through a Change Property interaction. this is a bit wrong because i dont know the real (previous) item opacity.
                (function(delay){
                    timeline.add(function(){
                        $(action.targetId).removeClass('hidden')
                    }, delay);
                })(_delay);
                // do it now before timeline changes and tweens added
                // its hidden anw so we don't care
                $(action.targetId).css('opacity', 0)
                _delay = parseFloat(_delay) + 0.001;
            }
            _property = { selector: '', property: 'opacity' }
            break;
        case "rotation":
            _property = { selector: '', property: 'rotation' }
            _newvalue = parseInt(_newvalue);
            if(typeof(action.rotationDirection) != "undefined") {
                _newvalue += '_' + action.rotationDirection;
            } else {
                _newvalue += '_short';
            }
            break;
        case "draggable":
            _property = { rerender: true }
            break;
        default:
            break;
    }
    // annam v5.5.10 - moving this outside of switch so that in case "background" i can exit without defining a property
    if(typeof(_property) == "undefined") {
        switch(propertyType) {
            case "component-property":
                if(typeof(prx.types[action.componentType].editableProperties) != "undefined") {
                    for(var i=0; i < prx.types[action.componentType].editableProperties.length; i++) {
                        if(prx.types[action.componentType].editableProperties[i].name == action.propertyId) {
                            _property = prx.types[action.componentType].editableProperties[i].changeProperty;
                            _property.type = prx.types[action.componentType].editableProperties[i].type;
                            break;
                        }
                    }
                }

                if(typeof(_property) == "undefined") {
                    if(typeof(prx.types[action.componentType].interactions) != "undefined") {
                        for(var i=0; i < prx.types[action.componentType].interactions.length; i++) {
                            if(prx.types[action.componentType].interactions[i].name == action.propertyId) {
                                _property = { property: 'action' };
                                break;
                            }
                        }
                    }
                }

                if(typeof(_property) == "undefined") {
                    if(typeof(prx.types[action.componentType].propertyGroups) != "undefined") {
                        for(var i=0; i < prx.types[action.componentType].propertyGroups.length; i++) {
                            for(var j=0; j < prx.types[action.componentType].propertyGroups[i].properties.length; j++) {
                                for(var k=0; k < prx.types[action.componentType].propertyGroups[i].properties[j].length; k++) {
                                    if(prx.types[action.componentType].propertyGroups[i].properties[j][k].name == action.propertyId) {
                                        _property = prx.types[action.componentType].propertyGroups[i].properties[j][k].changeProperty;
                                        _property.type = prx.types[action.componentType].propertyGroups[i].properties[j][k].type;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case "dynamic-property":
                if(typeof(prx.types[action.componentType].dynamicProperties) != "undefined") {
                    if(typeof(prx.types[action.componentType].dynamicProperties.editableProperties) != "undefined") {
                        for(var i=0; i < prx.types[action.componentType].dynamicProperties.editableProperties.length; i++) {
                            if(prx.types[action.componentType].dynamicProperties.editableProperties[i].name == action.propertyId) {
                                _property = prx.types[action.componentType].dynamicProperties.editableProperties[i].changeProperty;
                                _property.type = prx.types[action.componentType].dynamicProperties.editableProperties[i].type;
                                break;
                            }
                        }
                    }

                    if(typeof(_property) == "undefined") {
                        if(typeof(prx.types[action.componentType].dynamicProperties.interactions) != "undefined") {
                            for(var i=0; i < prx.types[action.componentType].dynamicProperties.interactions.length; i++) {
                                if(prx.types[action.componentType].dynamicProperties.interactions[i].name == action.propertyId) {
                                    _property = { property: 'action' };
                                    break;
                                }
                            }
                        }
                    }

                    if(typeof(_property) == "undefined") {
                        if(typeof(prx.types[action.componentType].dynamicProperties.propertyGroups) != "undefined") {
                            for(var i=0; i < prx.types[action.componentType].dynamicProperties.propertyGroups.length; i++) {
                                for(var j=0; j < prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties.length; j++) {
                                    for(var k=0; k < prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties[j].length; k++) {
                                        if(prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties[j][k].name == action.propertyId) {
                                            _property = prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties[j][k].changeProperty;
                                            _property.type = prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties[j][k].type;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;

        }
    }

    if(typeof(_property) != "undefined") {
        if(typeof(_property.property) != "undefined") {
            switch(_property.property) {
                case "text":
                    switch(propertyType) {
                        case "component-property":
                            timeline.add(function(){
                                $(action.targetId + ' ' + _property.selector).html(_newvalue);
                                prx.actions.callback(action);
                            }, _delay);
                            break;
                        case "dynamic-property":
                            timeline.add(function(){
                                $(action.targetId + ' [data-dynamic-property-index="'+action.itemIndex+'"] ' + _property.selector).html(_newvalue);
                                prx.actions.callback(action);
                            }, _delay);
                            break;
                    }
                    break;
                case "input-value":
                    timeline.add(function(){
                        $(action.targetId + ' ' + _property.selector).val(_newvalue);
                        prx.actions.callback(action);
                    }, _delay);
                    break;
                case "textarea-value":
                    timeline.add(function(){
                        $(action.targetId + ' ' + _property.selector).val(_newvalue.replace(/<br \/>/g, "\n"));
                        prx.actions.callback(action);
                    }, _delay);
                    break;
                case "action":
                    var oldvalue = action.oldvalue;
                    var newvalue = _newvalue;

                    if(typeof(newvalue) == "undefined" || newvalue == null) {
                        newvalue = [];
                    }
                    if(typeof(oldvalue) == "undefined" || oldvalue == null) {
                        oldvalue = [];
                    }
                    (function(oldvalue, newvalue, timeline) {
                        timeline.add(function(){
                            var item = {
                                type: action.componentType,
                                id: action.itemId
                            };

                            if(action.propertyType == "dynamic-property") {
                                item[prx.types[action.componentType].dynamicProperties.data] = [];
                                item[prx.types[action.componentType].dynamicProperties.data][action.itemIndex] = {};

                                if(this.timeline.data.reversing) {
                                    item[prx.types[action.componentType].dynamicProperties.data][action.itemIndex][action.propertyId] = oldvalue;
                                } else {
                                    item[prx.types[action.componentType].dynamicProperties.data][action.itemIndex][action.propertyId] = newvalue;
                                }
                            } else {
                                if(this.timeline.data.reversing) {
                                    item[action.propertyId] = oldvalue;
                                } else {
                                    item[action.propertyId] = newvalue;
                                }
                            }
                            prx.actions.parseItemAction(item,action.containerid,action.pageId);
                            prx.actions.callback(action);
                        }, _delay);
                    })(oldvalue, newvalue, timeline);
                    if(typeof(action._timelineToUse) != "undefined") {
                        return timeline;
                    }
                    break;
                case "container-state":
                    //var timeline2 = new TimelineMax({ paused: true });
                    var action2 = {
                        //_timelineToUse: timeline2,
                        pageId: action.pageId,
                        targetId: action.targetId,
                        stateId: _newvalue,
                        itemId: action.itemId,
                        guid: action.guid,
                        containerid: action.containerid
                        //delay: action.delay
                    }

                    if(typeof(action.previousActions) != "undefined") {
                        action2.previousActions = $.evalJSON($.toJSON(action.previousActions));
                    }

                    if(typeof(action.callbackAction) != "undefined") {
                        action2.callbackAction = $.evalJSON($.toJSON(action.callbackAction));
                    }
                    if(typeof(action.callback) != "undefined") {
                        action2.callback = action.callback;
                    }
                    //timeline2 = prx.actionsLibrary.changeState(action2, 'symbols');
                    setTimeout(function(){
                        prx.actionsLibrary.changeState(action2, 'symbols');
                        //timeline2.play()
                    }, action.delay);
                    //}, action.delay - timeline2.totalDuration() * 1000);
                    // this was a very quick thought that i didnt really look into. it would probably work.
                    // it targets reverse change state transitions on containers that would start at the wrong time on reverse
                    break;
                case "template-state":
                    var action2 = {
                        //_timelineToUse: timeline,
                        pageId: action.pageId,
                        targetId: action.targetId,
                        stateId: _newvalue,
                        itemId: action.itemId,
                        //delay: action.delay
                    }

                    if(typeof(action.previousActions) != "undefined") {
                        action2.previousActions = $.evalJSON($.toJSON(action.previousActions));
                    }

                    if(typeof(action.callbackAction) != "undefined") {
                        action2.callbackAction = $.evalJSON($.toJSON(action.callbackAction));
                    }

                    if(typeof(action.callback) != "undefined") {
                        action2.callback = action.callback;
                    }

                    setTimeout(function(){
                        return prx.actionsLibrary.changeState(action2, 'templates');
                    }, action.delay);
                    break;
                case "width":
                case "height":
                case "border-width":
                case "border-radius":
                    if(parseInt(_newvalue) == _newvalue) {
                        _newvalue += 'px'
                    }
                // not breaking!
                case "opacity":
                    if(parseFloat(_newvalue) == _newvalue) {
                        _newvalue = parseFloat(_newvalue);
                    }
                // not breaking!
                default:


                    switch(_property.type) {
                        case "colorpicker":
                        case "combo-colorpicker":
                            _newvalue = prx.utils.getColor(_newvalue);
                            break;
                        default:
                            break;
                    }

                    var _onComplete = function(){
                        if(typeof(action._timelineToUse) == "undefined") {
                            //v5.10.3 oncontainerscroll snaps back to original position if refreshing
                            if(action.type!="containerscroll") {
                                prx.scrollable.refresh(action.targetId);
                            }
                        }
                        prx.actions.callback(action);
                    }

                    var properties = _property.property.split(',');
                    for (var i=0; i<properties.length;i++) {
                        var _transition = {}

                        _transition[properties[i].replace(/-([a-z])/g, function (m, w) { return w.toUpperCase(); })] = _newvalue;

                        _transition.ease = prx.easing.get(action.animationEasing);

                        if((properties[i] == "width" || properties[i] == "height") && typeof(_property.onResize)!= "undefined") {
                            // fix for itemid - action.itemId may be box-1-box-2 if targetting in a container
                            var fullid = action.containerid + '-' + action.itemId;
                            var split = fullid.split('box-');
                            action.itemId = 'box-' + split[split.length - 1];
                            action.containerid = fullid.replace('-'+action.itemId, "")

                            var stateid = $(action.targetId).parents('[data-state-id]').first().attr('data-state-id');
                            if(typeof(prx.allItems[action.itemId]) != "undefined" && typeof(prx.allItems[action.itemId].states) != "undefined" && typeof(prx.allItems[action.itemId].states[stateid]) != "undefined") {
                                var data = $.evalJSON(prx[prx.allItems[action.itemId].containertype][prx.allItems[action.itemId].containerindex].states[prx.allItems[action.itemId].states[stateid].stateindex].data);
                                if(typeof(data.items) != "undefined") {
                                    item = data.items[prx.allItems[action.itemId].itemindex];
                                } else {
                                    item = data[prx.allItems[action.itemId].states[stateid].itemindex];
                                }
                                item.htype = "fixed";
                                item.vtype = "fixed";

                                _transition.onUpdate = function(item, _property) {
                                    item.width = $(this._targets[0]).width();
                                    item.height = $(this._targets[0]).height();
                                    var id = $(this._targets[0]).attr('id')
                                    var containerid = id.substring(0,id.indexOf('-' + item.id))
                                    _property.onResize(item, containerid)
                                };
                                _transition.onUpdateParams = [item, _property]
                            }
                        }

                        var selector = action.targetId + ' ' + _property.selector + ((properties.length > 1) ? ', '+ action.targetId + ' ' + _property.selector +'-' + properties[i] : '') + ', ' + action.targetId + _property.selector + ((properties.length > 1) ? ', '+ action.targetId + ' ' + _property.selector +'-' + properties[i] : '');
                        if(propertyType == "dynamic-property") {
                            selector = action.targetId + ' [data-dynamic-property-index="'+action.itemIndex+'"] ' + _property.selector + ((properties.length > 1) ? '-' + properties[i] : '') + ', ' + action.targetId + ' [data-dynamic-property-index="'+action.itemIndex+'"]' + _property.selector + ((properties.length > 1) ? '-' + properties[i] : '');
                        }

                        _transition.immediateRender = false;
                        timeline.add(TweenLite.to(selector, _duration, _transition), _delay)
                    }

                    timeline.add(_onComplete, (_duration + _delay));

                    if(typeof(action._timelineToUse) != "undefined") {
                        return timeline;
                    }

                    return;
            }
        }

        if(_property.rerender) {

            var item;
            // fix for itemid - action.itemId may be box-1-box-2 if targetting in a container
            var fullid = action.containerid + '-' + action.itemId;
            var split = fullid.split('box-');
            action.itemId = 'box-' + split[split.length - 1];
            action.containerid = fullid.replace('-'+action.itemId, "")

            var stateid = $(action.targetId).parents('[data-state-id]').first().attr('data-state-id');
            if(typeof(prx.allItems[action.itemId].states) != "undefined" && typeof(prx.allItems[action.itemId].states[stateid]) != "undefined") {
                var data = $.evalJSON(prx[prx.allItems[action.itemId].containertype][prx.allItems[action.itemId].containerindex].states[prx.allItems[action.itemId].states[stateid].stateindex].data);
                if(typeof(data.items) != "undefined") {
                    item = data.items[prx.allItems[action.itemId].itemindex];
                } else {
                    item = data[prx.allItems[action.itemId].states[stateid].itemindex];
                }
            }

            if(typeof(item) == "undefined") {
                timeline.add(function(){
                    prx.actions.callback(action);
                });
                return false;
            }



            if(action.propertyType == "dynamic-property") {
                item[prx.types[action.componentType].dynamicProperties.data][action.itemIndex][action.propertyId] = _newvalue;
            } else {
                item[action.propertyId] = _newvalue;
            }

            timeline.add(function(){
                var _containerid = action.targetId.slice(1).replace('-'+item.id, '');
                prx.items.rerender(item, _containerid, action.pageId)
                prx.actions.callback(action);
            }, _delay);
        }
    }

    if(typeof(action._timelineToUse) != "undefined") {
        return timeline;
    }
}

prx.actionsLibrary.setVariable = function(action){

    var _duration = 1;
    var _delay = 0;
    if(typeof(action.duration) != "undefined") {
        _duration = action.duration/1000;
    }
    if(typeof(action.delay) != "undefined") {
        _delay = action.delay/1000;
    }

    var _property;

    var propertyType = action.propertyType;
    if(typeof(propertyType) == "undefined") {
        propertyType = 'component-property'
    }


    switch (action.valueSource) {
        case "customValue":
            //action.newvalue already exists and it's OK
            break;
        case "callbackvalue":
            _property = { selector: '', property: 'triggerdata' }
            break;
        case "setValueFromItemProperty":
            switch(action.propertyId) {
                case "left":
                case "top":
                case "opacity":
                    _property = { selector: '', property: action.propertyId }
                    break;
                case "width":
                case "height":
                    _property = { selector: '', property: action.propertyId }
                    if(typeof(prx.types[action.componentType].onResize) != "undefined") {
                        _property.onResize = prx.types[action.componentType].onResize;
                    }
                    break;
                default:
                    switch(propertyType) {
                        case "component-property":
                            if(typeof(prx.types[action.componentType].editableProperties) != "undefined") {
                                for(var i=0; i < prx.types[action.componentType].editableProperties.length; i++) {
                                    if(prx.types[action.componentType].editableProperties[i].name == action.propertyId) {
                                        _property = prx.types[action.componentType].editableProperties[i].changeProperty;
                                        _property.type = prx.types[action.componentType].editableProperties[i].type;
                                        break;
                                    }
                                }
                            }

                            if(typeof(_property) == "undefined") {
                                if(typeof(prx.types[action.componentType].interactions) != "undefined") {
                                    for(var i=0; i < prx.types[action.componentType].interactions.length; i++) {
                                        if(prx.types[action.componentType].interactions[i].name == action.propertyId) {
                                            _property = { property: 'action' };
                                            break;
                                        }
                                    }
                                }
                            }

                            if(typeof(_property) == "undefined") {
                                if(typeof(prx.types[action.componentType].propertyGroups) != "undefined") {
                                    for(var i=0; i < prx.types[action.componentType].propertyGroups.length; i++) {
                                        for(var j=0; j < prx.types[action.componentType].propertyGroups[i].properties.length; j++) {
                                            for(var k=0; k < prx.types[action.componentType].propertyGroups[i].properties[j].length; k++) {
                                                if(prx.types[action.componentType].propertyGroups[i].properties[j][k].name == action.propertyId) {
                                                    _property = prx.types[action.componentType].propertyGroups[i].properties[j][k].changeProperty;
                                                    _property.type = prx.types[action.componentType].propertyGroups[i].properties[j][k].type;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            break;
                        case "dynamic-property":
                            if(typeof(prx.types[action.componentType].dynamicProperties) != "undefined") {
                                if(typeof(prx.types[action.componentType].dynamicProperties.editableProperties) != "undefined") {
                                    for(var i=0; i < prx.types[action.componentType].dynamicProperties.editableProperties.length; i++) {
                                        if(prx.types[action.componentType].dynamicProperties.editableProperties[i].name == action.propertyId) {
                                            _property = prx.types[action.componentType].dynamicProperties.editableProperties[i].changeProperty;
                                            _property.type = prx.types[action.componentType].dynamicProperties.editableProperties[i].type;
                                            break;
                                        }
                                    }
                                }

                                if(typeof(_property) == "undefined") {
                                    if(typeof(prx.types[action.componentType].dynamicProperties.interactions) != "undefined") {
                                        for(var i=0; i < prx.types[action.componentType].dynamicProperties.interactions.length; i++) {
                                            if(prx.types[action.componentType].dynamicProperties.interactions[i].name == action.propertyId) {
                                                _property = { property: 'action' };
                                                break;
                                            }
                                        }
                                    }
                                }

                                if(typeof(_property) == "undefined") {
                                    if(typeof(prx.types[action.componentType].dynamicProperties.propertyGroups) != "undefined") {
                                        for(var i=0; i < prx.types[action.componentType].dynamicProperties.propertyGroups.length; i++) {
                                            for(var j=0; j < prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties.length; j++) {
                                                for(var k=0; k < prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties[j].length; k++) {
                                                    if(prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties[j][k].name == action.propertyId) {
                                                        _property = prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties[j][k].changeProperty;
                                                        _property.type = prx.types[action.componentType].dynamicProperties.propertyGroups[i].properties[j][k].type;
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            break;
                    }
                    break;
            }
            break;
    }



    var _tempSelector = "";
    if(typeof(_property) != "undefined") {
        if(typeof(_property.property) != "undefined") {
            switch(propertyType) {
                case "component-property":
                    _tempSelector = $(action.targetId + ' ' + _property.selector);
                    break;
                case "dynamic-property":
                    _tempSelector = $(action.targetId + ' [data-dynamic-property-index="'+action.itemIndex+'"] ' + _property.selector);
                    break;
            }

            switch(_property.property) {
                case "text":
                    action.newvalue = _tempSelector.text();
                    break;
                case "input-value":
                case "textarea-value":
                    action.newvalue = _tempSelector.val();
                    break;
                case "width":
                    action.newvalue = _tempSelector.width();
                    break;
                case "height":
                    action.newvalue = _tempSelector.height();
                    break;
                case "left":
                    action.newvalue = _tempSelector.position().left;
                    break;
                case "top":
                    action.newvalue = _tempSelector.position().top;
                    break;
                case "triggerdata":
                    if (typeof(prx.variables._triggerData[action.bindTo]) != "undefined") {
                        if (typeof(prx.variables._triggerData[action.bindTo][action.type]) != "undefined") {
                            if (typeof(prx.variables._triggerData[action.bindTo][action.type][action.callbackvariable]) != "undefined") {
                                action.newvalue = prx.variables._triggerData[action.bindTo][action.type][action.callbackvariable];
                            } else {
                                action.newvalue = null;
                            }
                        } else {
                            action.newvalue = null;
                        }
                    }
                    break;
                default:
                    break;
            }
        }

    }

    setTimeout(function(){
        if(typeof(action.variableName!="undefined")) {
            if (typeof(prx.variables._variables[action.variableName])!="undefined") {
                //prx.variables._variables[action.variableName].value = action.newvalue;

                prx.variables._variables[action.variableName].value = prx.variables.recursivelyEvaluate(action.newvalue,action.variableName, true);

                /*
                 if (typeof(prx.variables._variables[action.variableName].type)!="undefined") {
                 switch(prx.variables._variables[action.variableName].type) {
                 case "text":
                 prx.variables._variables[action.variableName].value = prx.variables.recursivelyEvaluate(action.newvalue,"").toString();
                 break;
                 case "numeric":

                 prx.variables._variables[action.variableName].value = prx.variables.recursivelyEvaluate(action.newvalue,action.variableName, true); // if parseFloat score=score+1 does not work :(!??!?!!

                 //prx.variables._variables[action.variableName].parsed = prx.variables._variables[action.variableName].value;
                 break;
                 case "boolean":
                 prx.variables._variables[action.variableName].value = parseFloat(prx.variables.recursivelyEvaluate(action.newvalue,"")) ? true : false;;
                 break;
                 default:
                 }
                 }
                 */
            }
        }
        prx.actions.callback(action);
    }, action.delay);
    //prx.actions.callback(action);

}

prx.actionsLibrary.changeState = function(action, type) {

    var pageId = action.pageId;
    if(pageId == -1) {
        pageId = action.containerid.split('-')[1];
    }

    var tostateid = action.stateId;
    var reverse = false;
    var targetId = action.targetId;
    var startfromtime = 0;

    prx.actions.isRunningFalse(action);
    switch(type) {
        case "pages":
            var index = prx.stc.screens.getIndexFromId(pageId);
            var objToChange = '#p-' + pageId;
            break;
        case "templates":
            var pageindex = prx.stc.screens.getIndexFromId(pageId);
            if(pageindex == -1) { prx.actions.callback(action); return false; }
            var index = prx.stc.templates.getIndexFromId(prx.pages[pageindex].states[0].template.id);
            targetId = '#p-' + pageId + '-t' +  + prx.pages[pageindex].states[0].template.id;
            var objToChange = targetId;
            break;
        case "symbols":
            var symbolid = -1;
            var itemId = action.itemId;
            if(itemId == -1 || (itemId.match(/box/g) || []).length > 1 || itemId.indexOf('t') > -1) { // t = template
                var split = action.targetId.split('box-');
                itemId = 'box-' + split[split.length - 1];
            }
            for(var stateid in prx.allItems[itemId].states) {
                if(prx.allItems[itemId].states.hasOwnProperty(stateid)) {
                    // im only using this to get the symbol id. so any state (the first the item is in) will do because the symbol id will be the same in all
                    var data = $.evalJSON(prx[prx.allItems[itemId].containertype][prx.allItems[itemId].containerindex].states[prx.allItems[itemId].states[stateid].stateindex].data);
                    symbolid = data[prx.allItems[itemId].states[stateid].itemindex].symbolid;
                    break;
                }
            }

            if(symbolid == -1) { prx.actions.callback(action); return false; }
            var index = prx.stc.containers.getIndexFromId(symbolid)

            // inner symbols don't work, anw seem to have this ready?
            // var objToChange = '#p-' + pageId + '-' + action.itemId

            var objToChange = action.targetId
            break;
    }

    if(index == -1 || $(objToChange).length == 0) {
        prx.actions.callback(action);
        return false;
    }

    var fromstateid = $(objToChange).attr('data-state-id');

    switch(tostateid) {
        case "previous-state":
            for(var i = 0; i<prx[type][index].states.length;i++) {
                if(prx[type][index].states[i].id == fromstateid) {
                    if(i==0) {
                        prx.actions.callback(action);
                        return false;
                    } else {
                        tostateid = prx[type][index].states[i-1].id
                    }
                    break;
                }
            }
            break;
        case "next-state":
            for(var i = 0; i<prx[type][index].states.length;i++) {
                if(prx[type][index].states[i].id == fromstateid) {
                    if(i==prx[type][index].states.length-1) {
                        prx.actions.callback(action);
                        return false;
                    } else {
                        tostateid = prx[type][index].states[i+1].id
                    }
                    break;
                }
            }
            break;
        case "first-state":
            tostateid = prx[type][index].states[0].id;
            break;
        case "last-state":
            tostateid = prx[type][index].states[prx[type][index].states.length -1].id;
            break;
        default:
            // make sure stateid exists

            if(prx.utils.isGuid(tostateid)) {
                if(prx.stc.helper.getStateIndexFromId(tostateid, type, index) == -1) {
                    prx.actions.callback(action);
                    return false;
                }
                break;
            } else {

                // check if tostateid matches the name of a state - for change container state with state names as variables
                for(var i = 0; i<prx[type][index].states.length;i++) {
                    if(prx[type][index].states[i].title.toLowerCase() == tostateid.toLowerCase()) {
                        tostateid = prx[type][index].states[i].id
                        break;
                    }
                }
                // if i didn't find it
                if(!prx.utils.isGuid(tostateid)) {
                    // check again - maybe my prx.utils.isGuid algorithm is wrong again
                    if(prx.stc.helper.getStateIndexFromId(tostateid, type, index) == -1) {
                        prx.actions.callback(action);
                        return false;
                    }
                }
            }
    }

    if(tostateid == fromstateid) {
        if(typeof($(objToChange).attr('data-previous-state-id')) != "undefined") {
            fromstateid = $(objToChange).attr('data-previous-state-id');
        }
    }

    $(objToChange).trigger('stateleave');
    $(objToChange).attr('data-state-id', tostateid).attr('data-previous-state-id', fromstateid);

    // reverse
    if(typeof(prx[type][index].state_transitions_reverse)!="undefined" && typeof(prx[type][index].state_transitions_reverse[fromstateid+':'+tostateid])!="undefined" && prx[type][index].state_transitions_reverse[fromstateid+':'+tostateid]) {
        reverse = true;

        if(typeof(prx.states._timelines[objToChange + '-' + tostateid + ':' + fromstateid]) != "undefined" && prx.states._timelines[objToChange + '-' + tostateid + ':' + fromstateid].length > 0) {
            // get time from last, perhaps still animating
            var time = prx.states._timelines[objToChange + '-' + tostateid + ':' + fromstateid][prx.states._timelines[objToChange + '-' + tostateid + ':' + fromstateid].length -1].time();
            var totaltime = prx.states._timelines[objToChange + '-' + tostateid + ':' + fromstateid][0].totalDuration()

            startfromtime = totaltime - time;
        }

        reverse = true;
    }

    var changes = prx.states.getChangesBetweenStates(fromstateid, tostateid, type, index);
    var fromstate = prx[type][index].states[prx.stc.helper.getStateIndexFromId(fromstateid, type, index)].data;

    if(typeof(action._timelineToUse) != "undefined") {
        var timeline = action._timelineToUse;
    } else {
        var timeline = new TimelineMax({
            force3D: prx.greensockForce3D,
            paused: true
        });
    }
    if(changes != false) {

        /*compatibility to maintain copy*/
        var _canvastype = type;
        var _index = index;

        /* start copy from editor */
        var duration, delay, easing, commonduration, commondelay, commoneasing;

        var common = {};
        var allchanges = {};
        var maxendtotal = 0;


        if(reverse) {
            if(typeof(prx[_canvastype][_index].state_transitions)!="undefined" && typeof(prx[_canvastype][_index].state_transitions[tostateid+':'+fromstateid])!="undefined") {
                var state_transitions = prx[_canvastype][_index].state_transitions[tostateid+':'+fromstateid];
            }
        } else {
            if(typeof(prx[_canvastype][_index].state_transitions)!="undefined" && typeof(prx[_canvastype][_index].state_transitions[fromstateid+':'+tostateid])!="undefined") {
                var state_transitions = prx[_canvastype][_index].state_transitions[fromstateid+':'+tostateid];
            }
        }

        for(var i=0;i<changes.length;i++) {
            commonduration = 0;
            commondelay = 0;
            commoneasing = 'linear'

            var minstart = 9999;
            var maxend = 0;

            if(typeof(state_transitions)!="undefined" && typeof(state_transitions[changes[i].id])!="undefined") {
                if(typeof(state_transitions[changes[i].id].common) != "undefined") {
                    if(typeof(state_transitions[changes[i].id].common.delay) != "undefined") {
                        commondelay = state_transitions[changes[i].id].common.delay;
                    }
                    if(typeof(state_transitions[changes[i].id].common.duration) != "undefined") {
                        commonduration = state_transitions[changes[i].id].common.duration;
                    }
                    if(typeof(state_transitions[changes[i].id].common.easing) != "undefined") {
                        commoneasing = state_transitions[changes[i].id].common.easing;
                    }
                    minstart = commondelay;
                    maxend = commondelay + commonduration;
                }
            }

            if(typeof(changes[i].changes) != "undefined") {
                for (var key in changes[i].changes) {
                    if (changes[i].changes.hasOwnProperty(key)) {
                        var elm = changes[i].changes[key];

                        var itemType = changes[i].componentType;
                        var transitionable = true; // for left, top, width, height, opacity etc?
                        var rerender = false;
                        var found = false;

                        var rotationDirection;

                        delay = commondelay;
                        duration = commonduration;
                        easing = commoneasing


                        if(typeof(state_transitions) != "undefined" && typeof(state_transitions[changes[i].id]) != "undefined") {
                            if(typeof(state_transitions[changes[i].id][key]) != "undefined") {
                                if(typeof(state_transitions[changes[i].id][key].delay) != "undefined") {
                                    delay = state_transitions[changes[i].id][key].delay;
                                }
                                if(typeof(state_transitions[changes[i].id][key].duration) != "undefined") {
                                    duration = state_transitions[changes[i].id][key].duration;
                                }
                                if(typeof(state_transitions[changes[i].id][key].easing) != "undefined") {
                                    easing = state_transitions[changes[i].id][key].easing;
                                }
                                if(typeof(state_transitions[changes[i].id][key].rotationDirection) != "undefined") {
                                    rotationDirection = state_transitions[changes[i].id][key].rotationDirection;
                                }
                            }
                        }

                        if(changes[i].type == "new-component" || changes[i].type == "removed-component") {
                            if(key == "opacity") {
                                allchanges[changes[i].id+'-'+key] = {
                                    duration: duration,
                                    delay: parseFloat(delay) + 0.001, // to allow rerender first
                                    //delay: delay,
                                    easing: easing,
                                    transitionable: true,
                                    rerender: false
                                }
                            }
                            continue;
                        }

                        if(changes[i].id == 'current-page' || changes[i].id == 'current-page-template' || changes[i].id == 'current-container') {

                            // at the moment dimensions, background color, all transitionable.
                            // will probably need to change for template change.
                            allchanges[changes[i].id+'-'+key] = {
                                duration: duration,
                                delay: delay,
                                easing: easing,
                                transitionable: true,
                                rerender: false
                            }
                            continue;
                        }

                        // changed-dynamic-properties
                        if(key == 'dynamicProperties') {
                            allchanges[changes[i].id+'-'+key] = {
                                duration: 0,
                                delay: false,
                                easing: easing,
                                transitionable: false,
                                rerender: true
                            }
                            continue;
                        }

                        if(key == 'visible') {
                            allchanges[changes[i].id+'-'+key] = {
                                duration: duration,
                                delay: delay,
                                easing: easing,
                                transitionable: true,
                                rerender: false
                            }
                            continue;
                        }

                        if(key.indexOf('dynamicProperties-') > -1) {
                            var tosearch = prx.types[itemType].dynamicProperties;
                            var split = key.split('-');
                            var keytosearch = split[split.length -1];
                        } else {
                            var tosearch = prx.types[itemType];
                            var keytosearch = key;
                        }

                        // find property
                        if(typeof(tosearch.editableProperties) != "undefined") {
                            for(var j=0; j<tosearch.editableProperties.length; j++) {
                                if(tosearch.editableProperties[j].name == keytosearch) {
                                    if(typeof(tosearch.editableProperties[j].changeProperty) != "undefined") {
                                        if(typeof(tosearch.editableProperties[j].changeProperty.transitionable) != "undefined") {
                                            transitionable = tosearch.editableProperties[j].changeProperty.transitionable
                                        }
                                        if(typeof(tosearch.editableProperties[j].changeProperty.rerender) != "undefined") {
                                            rerender = tosearch.editableProperties[j].changeProperty.rerender
                                        }
                                        found = true;
                                        break;
                                    }
                                }
                            }
                        }

                        if(!found) {
                            if(typeof(tosearch.interactions) != "undefined") {
                                for(var j=0; j<tosearch.interactions.length; j++) {
                                    if(tosearch.interactions[j].name == keytosearch) {
                                        if(typeof(tosearch.interactions[j].changeProperty) != "undefined") {
                                            caption = tosearch.interactions[j].changeProperty.caption;
                                            if(typeof(tosearch.interactions[j].changeProperty.transitionable) != "undefined") {
                                                transitionable = tosearch.interactions[j].changeProperty.transitionable;
                                            }
                                            if(typeof(tosearch.interactions[j].changeProperty.rerender) != "undefined") {
                                                rerender = tosearch.interactions[j].changeProperty.rerender
                                            }
                                            found = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }

                        if(!found) {
                            if(typeof(tosearch.propertyGroups) != "undefined") {
                                for(var j=0; j<tosearch.propertyGroups.length; j++) {
                                    for(var k=0; k<tosearch.propertyGroups[j].properties.length; k++) {
                                        for(var l=0; l<tosearch.propertyGroups[j].properties[k].length; l++) {
                                            if(tosearch.propertyGroups[j].properties[k][l].name == keytosearch) {
                                                if(typeof(tosearch.propertyGroups[j].properties[k][l].changeProperty) != "undefined") {
                                                    if(typeof(tosearch.propertyGroups[j].properties[k][l].changeProperty.transitionable) != "undefined") {
                                                        transitionable = tosearch.propertyGroups[j].properties[k][l].changeProperty.transitionable;
                                                    }
                                                    if(typeof(tosearch.propertyGroups[j].properties[k][l].changeProperty.rerender) != "undefined") {
                                                        rerender = tosearch.propertyGroups[j].properties[k][l].changeProperty.rerender;
                                                    }
                                                    found = true;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        if(!transitionable) {
                            duration = 0;
                        }
                        if(rerender) {
                            duration = 0;
                            // i don't know the common delay yet. the changes loop needs to end to know the final common delay
                            // so im setting this to false, and looping everything later to change :(
                            // delay = common['changed-' + changes[i].id].duration + common['changed-' + changes[i].id].delay;
                            delay = false;
                        }

                        allchanges[changes[i].id+'-'+key] = {
                            duration: duration,
                            delay: delay,
                            easing: easing,
                            transitionable: transitionable,
                            rerender: rerender
                        }

                        if(typeof(rotationDirection) != "undefined") {
                            if(reverse) {
                                if(rotationDirection == 'cw') { rotationDirection = 'ccw'}
                                else if(rotationDirection == 'ccw') { rotationDirection = 'cw'}
                            }
                            //rotationDirection = (reverse) ? ((rotationDirection == 'cw') ? 'ccw' : 'cw') : rotationDirection;
                            allchanges[changes[i].id+'-'+key].rotationDirection = rotationDirection;
                        }

                        minstart = (delay < minstart) ? delay : minstart;
                        maxend = ((delay + duration) > maxend) ? delay + duration : maxend;

                    }
                }
            }

            if(minstart == 9999) { minstart = 0; }

            // until now this was the .common { delay: .., duration: .. } definition
            // now it represents the minimum delay, maximum duration of all items
            commonduration = maxend - minstart;
            commondelay = minstart;

            common['changed-'+changes[i].id] = {
                duration: commonduration,
                delay: commondelay,
                easing: commoneasing
            }

            if(commonduration + commondelay > maxendtotal) {
                maxendtotal = commonduration + commondelay;
            }
        }

        // if reverse, reverse timeline!
        // basically change delay to be the end delay
        if(reverse) {
            for (var key in allchanges) {
                if (allchanges.hasOwnProperty(key)) {
                    if(allchanges[key].delay !== false) {
                        allchanges[key].delay = maxendtotal - (allchanges[key].delay + allchanges[key].duration);
                    }
                    allchanges[key].easing = prx.easing.getReverse(allchanges[key].easing);

                }
            }
            for (var key in common) {
                if (common.hasOwnProperty(key)) {
                    common[key].delay = maxendtotal - (common[key].delay + common[key].duration);
                    common[key].easing = prx.easing.getReverse(common[key].easing);

                }
            }

        }


        // loop all changes, find delay = false and correct delay value
        for (var key in allchanges) {
            if (allchanges.hasOwnProperty(key)) {
                if(allchanges[key].delay === false) {
                    var commonkey = 'changed-' + key.split('-')[0] + '-' + key.split('-')[1]
                    allchanges[key].delay = common[commonkey].duration + common[commonkey].delay;
                }
            }
        }

        for(var i=0;i<changes.length;i++) {
            switch(changes[i].type) {
                case "new-component":
                    (function(i){
                        prx.items.rerender(changes[i].item, targetId.slice(1), pageId)
                        timeline.add(function(){
                            if(!this.timeline.data.reversing) {
                                //prx.items.rerender(changes[i].item, targetId.slice(1), pageId)
                                $(targetId + '-' + changes[i].id).removeClass('ghost-component')
                            } else {
                                $(targetId + '-' + changes[i].id).addClass('ghost-component')
                            }
                        }, 0);
                    })(i);
                    break;
                case "removed-component":
                    var delay = common['changed-' + changes[i].id].delay;
                    var duration = common['changed-' + changes[i].id].duration;
                    (function(i, delay, duration){
                        timeline.add(function(){
                            if(!this.timeline.data.reversing) {
                                $(targetId + '-' + changes[i].id).addClass('ghost-component')
                            } else {
                                $(targetId + '-' + changes[i].id).removeClass('ghost-component')
                            }
                        }, delay+duration);
                    })(i, delay, duration);
                    break;
                case "changed-component":
                case "container-properties":
                case "page-properties":
                case "template-properties":
                    break;
                case "reordered-components":
                    (function(i){
                        timeline.add(function() {
                            var t = this;
                            //setTimeout(function(){
                            if(!t.timeline.data.reversing) {
                                components = changes[i].new_order.split(',');
                            } else {
                                components = changes[i].old_order.split(',');
                            }
                            for(var j=1; j < components.length; j++) {
                                $(targetId + '-' + components[j]).insertAfter(targetId + '-' + components[j-1]);
                                prx.items.helper.refreshHtmlComponent(components[j], targetId.slice(1), tostateid)
                            }
                            //}, maxendtotal*1000);
                            //}, 0)
                        }, maxendtotal);
                    })(i);
                    break;
                default:
                    break;
            }

            if(typeof(changes[i].changes) != "undefined") {
                $.each(changes[i].changes, function(key, elm){
                    if(typeof(allchanges[changes[i].id + '-' + key])!="undefined") {
                        var delay = allchanges[changes[i].id + '-' + key].delay;
                        var duration = allchanges[changes[i].id + '-' + key].duration;

                        switch(changes[i].id) {
                            case "current-page":
                                var targetId2 = targetId;
                                break;
                            case "current-container":
                                var targetId2 = targetId + '-scroll';
                                break;
                            default:
                                var targetId2 = targetId + '-' + changes[i].id;
                                break;
                        }

                        var action2 = {
                            _timelineToUse: timeline,
                            pageId: pageId,
                            itemId: changes[i].id,
                            targetId: targetId2,
                            containerid: targetId.slice(1),
                            componentType: changes[i].componentType,
                            propertyId: key,
                            newvalue: elm[1],
                            oldvalue: elm[0], // at the moment needed just for interactions
                            duration: duration*1000,
                            delay: delay*1000,
                            animationEasing: allchanges[changes[i].id + '-' + key].easing
                        }

                        if(typeof(allchanges[changes[i].id + '-' + key].rotationDirection) != "undefined") {
                            action2.rotationDirection = allchanges[changes[i].id + '-' + key].rotationDirection;
                        }

                        if(key.indexOf('dynamicProperties-') > -1) {
                            var split = key.split('-');

                            action2.propertyType = 'dynamic-property';
                            action2.itemIndex = split[1];
                            action2.propertyId = split[split.length -1]; // should always be 2
                        }

                        timeline = prx.actionsLibrary.changeProperty(action2)

                    }
                })
            }
        }
    } else { // annam v5.2.24 moving all below to run even if changes == false. so that state enter etc still trigger.
        var minstart = 0;
        var maxendtotal = 0.0013
    }

    timeline.add(function() {
        if(!this.timeline.data.reversing) {
            $(objToChange).trigger('stateenter')
        }
    }, 0.001);

    timeline.add(function() {
        if(typeof(this.timeline.data.suppressEvents) == "undefined" || !this.timeline.data.suppressEvents) {
            if(!this.timeline.data.reversing) {
                $(objToChange).trigger('statetransitionstart')
            } else {
                $(objToChange).trigger('statetransitionend')
            }
        }
    }, minstart);

    if(minstart == 0) {
        minstart = 0.0012; // so that it is after stateenter
    }

    timeline.add(function() {
        if(typeof(this.timeline.data.suppressEvents) == "undefined" || !this.timeline.data.suppressEvents) {
            // even though reversing is not used anymore

            if(!this.timeline.data.reversing) {
                $(objToChange).trigger('statetransitionend')
            } else {
                $(objToChange).trigger('statetransitionstart')
            }
        }
    }, maxendtotal);

    timeline.data = { reversing: false }

    if(typeof(prx.states._timelines[objToChange + '-' + fromstateid + ':' + tostateid]) == "undefined") {
        prx.states._timelines[objToChange + '-' + fromstateid + ':' + tostateid] = [];
    } else if (prx.states._timelines[objToChange + '-' + fromstateid + ':' + tostateid].length > 1) {
        for(var i=prx.states._timelines[objToChange + '-' + fromstateid + ':' + tostateid].length-1; i>0; i--) {
            prx.states._timelines[objToChange + '-' + fromstateid + ':' + tostateid][i].kill();
            prx.states._timelines[objToChange + '-' + fromstateid + ':' + tostateid].splice(i, 1)
        }
    }

    timeline.eventCallback("onComplete", function(){
        if(typeof(this.data.suppressEvents) == "undefined" || !this.data.suppressEvents) {
            if($(targetId).attr('data-state-id') == tostateid) {
                prx.actions.callback(action);
            }
        }
        prx.scrollable.refresh(targetId);
    });

    prx.states._timelines[objToChange + '-' + fromstateid + ':' + tostateid].push(timeline);

    // automatically stop previous state transitions
    // always do this not only on reverse
    //if(reverse && startfromtime != 0) {
    var action2 = {
        pageId: pageId,
        itemId: (type == "pages") ? 'page-transition' : itemId,
        targetId: objToChange,
        stateTransition: "all-transitions",
        endTransition: false
    }
    prx.actionsLibrary.stopStateTransition(action2);
    //}

    if(typeof(action._timelineToUse) == "undefined") {
        timeline.seek(timeline.totalDuration()).play(startfromtime);
    } else {
        return timeline;
    }

    //} else {
    //prx.actions.callback(action);
    //}
}

prx.actionsLibrary.stopStateTransition = function(action){

    if(action.pageId == -1) {
        action.pageId = action.containerid.split('-')[1];
    }

    var type = 'pages';
    var index = prx.stc.screens.getIndexFromId(action.pageId);

    switch(action.itemId) {
        case "page-transition":
            type = 'pages';
            index = prx.stc.screens.getIndexFromId(action.pageId);
            action.targetId = '#p-' + action.pageId
            break;
        /*
         case "-1":
         // i think we never get here.
         return false;
         break;
         */
        default:
            var itemid = action.itemId;
            if(itemid == -1) {
                var split = action.containerid.split('-');
                itemid = 'box-'+split[split.length-1];
            }

            var symbolid = prx.items.recursivelyFindItemSymbolId(itemid, type, index) // need to allow for current template, container
            //var symbolid = prx.items.recursivelyFindItemSymbolId(action.targetId, type, index) // need to allow for current template, container
            if(!symbolid) { prx.actions.callback(action); return false;}
            type = 'symbols';
            index = prx.stc.containers.getIndexFromId(symbolid)
            break;
    }

    var stateids = [];

    if(action.stateTransition == "all-transitions") {
        for(var i=0;i<prx[type][index].states.length;i++) {
            stateids.push(prx[type][index].states[i].id);
        }
    } else {
        stateids.push(action.stateTransition);
    }

    for (var transition in prx.states._timelines) {
        if (prx.states._timelines.hasOwnProperty(transition)) {
            for(var i=0;i<stateids.length;i++) {
                if(transition.indexOf(action.targetId) > -1 && transition.indexOf(stateids[i]) > -1) {
                    for(var j=0; j<prx.states._timelines[transition].length;j++) {
                        if(action.endTransition) {
                            if(typeof(prx.states._timelines[transition][j].data) == "undefined") {
                                prx.states._timelines[transition][j].data = {};
                            }
                            prx.states._timelines[transition][j].data.suppressEvents = true;
                            prx.states._timelines[transition][j].seek(prx.states._timelines[transition][j].totalDuration(), false);
                        }
                        prx.states._timelines[transition][j].pause();
                    }
                }
            }
        }
    }

    prx.actions.callback(action)
}

prx.actionsLibrary.externalLink = function(action) {

    var url = '';
    switch(action.actionId) {
        case "open-external-url":
            if(prx.inProtoApp) {
                url += 'targetblank://';
            }
            url += action.url;
            break;
        case "send-email":
            url += 'mailto:' + action.email + '?subject=' + encodeURIComponent(action.emailSubject) + '&body=' + encodeURIComponent(action.emailBody);
            break;
        case "make-phone-call":
            url += 'tel:' + action.phone;
            break
        case "send-sms":
            url += 'sms:' + action.phone;
            break
        default:
            break;
    }

    $('<a href="'+url+'" target="_blank" id="temp-for-external-link"></a>').appendTo('body')[0].click(); // needs [0] to trigger native click?
    $('#temp-for-external-link').remove();

    prx.actions.callback(action)
}


prx.canvas = {};

prx.canvas._statusbars = {};
prx.canvas._navigationbars = {};

prx.canvas.loadAll = function(){
    $.each(prx.pages, function(i,page){
        prx.stc.screens.load(page);
    });
}

prx.canvas.buildStatusbarExported = function(orientation) {
    if (prx.statusbarapplies=='1') {
        if (prx.devices[prx.device].statusbar_skin == 'default') {
            $('#statusbar').css({
                'background-image': 'none',
                'background-color': 'black'
            });
        } else { //custom skin
            $('#statusbar').css({
                'background-image': 'url(./images/statusbar_'+orientation+'.png)',
                'background-color': 'transparent'
            });
        }

    } else {
        $('#statusbar').css({
            'background-image': 'none',
            'background-color': 'transparent'
        });
    }
}

prx.canvas.buildStatusbar = function(orientation) {
    if (prx.statusbarapplies=='1') {
        if (prx.devices[prx.device].statusbar_skin == 'default') {
            return 'url('+prx.url['account']+'/assets/device/default/statusbar_'+orientation+'.png)'
        } else if (prx.devices[prx.device].statusbar_skin == 'shared') {
            return 'url('+prx.url['account']+'/assets/device/shared/'+prx.devices[prx.device].device_s3bucket+'/statusbar_'+orientation+'.png)'
        } else { //custom skin
            return 'url('+prx.url['account']+'/assets/device/'+prx.devices[prx.device].device_s3bucket+'/statusbar_'+orientation+'.png)'
        }
    } else {
        return 'none';
    }
}

prx.canvas.buildNavbar = function(orientation) {
    if (prx.navigationbarapplies=='1') {
        if (prx.devices[prx.device].navigationbar_skin == 'default') {
            return 'url('+prx.url['account']+'/assets/device/default/navigationbar_'+orientation+'.png)'
        } else if (prx.devices[prx.device].navigationbar_skin == 'shared') {
            return 'url('+prx.url['account']+'/assets/device/shared/'+prx.devices[prx.device].device_s3bucket+'/navigationbar_'+orientation+'.png)'
        } else { //custom skin
            return 'url('+prx.url['account']+'/assets/device/'+prx.devices[prx.device].device_s3bucket+'/navigationbar_'+orientation+'.png)'
        }
    } else {
        return 'none';
    }
}

prx.canvas.buildNavbarExported = function(orientation){
    if (prx.navigationbarapplies=='1') {
        $('#navigationbar').css('background-image', 'url(./images/navigationbar_'+orientation+'.png)');
    } else {
        $('#navigationbar').css('background-image', 'none');
    }
}

prx.canvas.clear = function(){
    // not used?
    $("#dragarea").html("");
}

prx.canvas.ini = function(){


    if(prx.inProtoApp) {
        var tempimageitem = {
            name: 'image'
            ,type: 'image'
            ,lib: 'common'
            ,caption: 'Image'
            ,imgSrc: { fileId: '', folderId: '', url: '', assetType: '', name: '' }
            ,repeat: false
            ,width:"1"
            ,height:"1"
            ,top: "-100"
            ,left: "-100"
            ,propagateEvents: false
            ,actions:[]
            ,overlay: true
            ,autoResize: true
            ,id: 'tempimageitem'
        }
        prx.items.add(prx.pages[0].id,tempimageitem);
    }

    var _$loader = $('#loader-wrapper').show();

    prx.canvas.loadAll();
    _$loader.find('span').text('0%');

    var _noOfImgs = $('[data-role=page] img:not([src=""])').not('#p-'+prx.pages[0].id+'-tempimageitem').length;
    var _loadedImgs = 0;
    if(_noOfImgs == 0) { _$loader.hide(); }
    $('[data-role=page] img:not([src=""])').bind("load error", function(){
        _loadedImgs++;
        _$loader.find('span').text(Math.round(_loadedImgs*100/_noOfImgs)+'%');
        if(_loadedImgs == _noOfImgs) { _$loader.hide(); }
    });

    setTimeout(function(){
        _$loader.hide();
        $('[data-role=page] img:not([src=""])').unbind("load error");
    }, 10000)



    // v5.7.4 checking again because of a bug in android app where when checking through index.cfm the webview is not yet initialised so the values are incorrect.
    prx.orientation._orientation = window.innerWidth>window.innerHeight?"landscape":"portrait";
    prx.orientation.changeBody(prx.orientation._orientation);

    if(typeof(prx.project.background) != "undefined") {
        $('body').css('background-color', prx.project.background);
    }

    $(window).bind('pagechange',function(event,obj){

        // annam removing jquery - why only from hashchange? anyway i dont have this anymore.
        //if (obj.options.fromHashChange) {

        // Scroll to last scrolled position (for back button)
        if(typeof(prx.scrollable._scrollables) != "undefined") {
            // annam removing jquery
            var _pgId = prx.navigation._activepage;
            $.each(prx.scrollable._scrollables,function(i,elm){
                if(i.substr(0, _pgId.length) == _pgId) {
                    if(typeof(prx.scrollable._scrollPositions[i]) != "undefined") {
                        elm.scrollTo(prx.scrollable._scrollPositions[i][0],prx.scrollable._scrollPositions[i][1],0);
                    }
                }
            });
        }
        //}
    });

    if(!prx.inProtoApp) {
        $(window).bind('orientationchange', function(event) {
            prx.orientation._orientation = prx.orientation.get();
            // don't trigger if in iframe (preview page), because i may not want to.
            // i am triggering prx.orientation.change() manually from the preview where needed.
            // 5.7.12 removing from proto apps, AO and Angelos trigger prx.orientation.change() themselves.
            if(parent == window) {
                prx.orientation.change();
            }
            return true;
        })
    }

    $(window).resize(function(){
        prx.orientation.check();

        $('#dragarea').width($(window).width());
        $('#dragarea').height($(window).height());

    })

    $(document).on('focusout',':input', function() {
        window.scrollTo(0,0);
    });

    $(window).bind('hashchange', function(){
        // this will always be triggered on changepage
        // but allowSamePageTransition: false should prevent this from looping
        // so it will only do something if triggered by back button
        // so no need to use the following
        // if(window.location.hash != '#' + prx.navigation._activepage.replace('p-', '')) {
        if(window.location.hash != '' && window.location.hash != '#' + prx.navigation._activepage.replace('p-', '')) {
            prx.navigation.changePage($('#p-' + window.location.hash.replace('#', '')), {
                changeHash: false,
                allowSamePageTransition: false,
            });
        } else if(window.location.hash == '') {
            prx.loading.iniStartScreen();
            $('#loader-wrapper').hide();
        }
    })

    // for "focus input component" interaction
    $('input').on('click.fakefocus', function(){
        if(!$(this).is(':focus')) {
            $(this).focus();
        }
    });

    // on ios only, clicking outside to hide keyboard does not work by default.
    if(prx.iosmobilebrowser) {
        $(document).click(function(){
            prx.helper.blurIOsInputs();
        })
        $(document).on('click', 'input', function(e){
            e.stopPropagation();
        });
    }
    if($.browser.chrome) {
        $('body').hammer().on('tap', function(e){
            prx.helper.rerenderActivePageWebkitIssue(e)
        })
    }

    prx.showActions.iniFlash();

}

prx.draggable = {};
prx.draggable._draggables = {};

prx.draggable.ini = function(item, pageid, containerid) {
    if (typeof(item.draggable)!='undefined') {
        if (item.draggable.isdraggable) {
            var gridWidth = 0,
                gridHeight = 0,
                gridRows = 0,
                gridColumns = 0,
                _snap = {};
            _bounds = '';

            if (item.draggable.isdraggable) {
                //item.draggable.targetitem = $('#p-'+pageid+'-'+item.id);

                var _targetid = "";
                if (typeof(containerid)=='undefined') {
                    _targetid = '#p-'+pageid+'-'+item.id
                } else {
                    if (containerid.length==0){
                        _targetid = '#p-'+pageid+'-'+item.id;
                    } else {
                        _targetid = '#'+containerid+'-'+item.id;
                    }
                }

                item.draggable.targetitem = $(_targetid).addClass('draggable');


                if (item.draggable.snap) {
                    gridRows = 	item.draggable.snapprops.rows;
                    gridColumns = 	item.draggable.snapprops.columns;
                }

                if (item.draggable.bounds == "auto") {
                    item.draggable.container = item.draggable.targetitem.parent();
                    if (item.draggable.snap) {
                        gridWidth = item.draggable.container.width()/gridColumns;
                        gridHeight = item.draggable.container.height()/gridRows;
                    }

                    if (item.width < gridWidth) {
                        gridWidth = (item.draggable.container.width()-item.width)/gridColumns;
                        gridHeight = (item.draggable.container.height()-item.height)/gridRows;
                    }
                } else {
                    // v5.5.22 after draggable update the container bounds are not respective of the screen top/left but of the positioned parent top/left
                    // i believe this is a bug. due to this change i also changed refreshDraggables() to do nothing, will need to revert if ever fixed.
                    //var _parentPosition =  item.draggable.targetitem.parent().offset();
                    //item.draggable.container = {left: parseInt(item.draggable.boundsprops.left)+_parentPosition.left, top: parseInt(item.draggable.boundsprops.top)+_parentPosition.top, width: item.draggable.boundsprops.width, height: item.draggable.boundsprops.height}
                    item.draggable.container = {left: parseInt(item.draggable.boundsprops.left), top: parseInt(item.draggable.boundsprops.top), width: item.draggable.boundsprops.width, height: item.draggable.boundsprops.height}
                    if (item.draggable.snap) {
                        gridWidth = item.draggable.boundsprops.width/gridColumns;
                        gridHeight = item.draggable.boundsprops.height/gridRows;
                    }
                }



                /*
                 if (item.draggable.snap) {
                 TweenMax.set(item.draggable.container, {height: gridRows * gridHeight + 1, width: gridColumns * gridWidth + 1});
                 }
                 */

                if (typeof(item.draggable.handle)!="undefined" && item.draggable.handle!= ""){
                    if($(_targetid + '-' + item.draggable.handle).length > 0) {
                        item.draggable.handleid = _targetid + '-' + item.draggable.handle;
                    }
                }

                if (typeof(item.draggable.front)=="undefined"){
                    item.draggable.front = false;
                }

                if (typeof(item.draggable.livesnap)=="undefined"){
                    item.draggable.livesnap = false;
                }

                if (typeof(item.draggable.lockaxis)=="undefined"){
                    item.draggable.lockaxis = false;
                }

                //if (item.draggable.kinetic || (!item.draggable.kinetic && !item.draggable.snap)) { // Greensock
                var _snap, _maxDuration;

                if (item.draggable.kinetic) {
                    _maxDuration = 2;
                } else {
                    _maxDuration = 0.0001
                }



                if (item.draggable.snap) {
                    if (item.draggable.axis != "rotation") {
                        _snap = {
                            x: function(endValue) {
                                if (item.draggable.snap) {
                                    return Math.max(this.minX, Math.min(this.maxX, Math.round(endValue / gridWidth) * gridWidth));
                                } else {
                                    return endValue;
                                }
                            },
                            y: function(endValue) {
                                if (item.draggable.snap) {
                                    return Math.max(this.minY, Math.min(this.maxY, Math.round(endValue / gridHeight) * gridHeight));
                                } else {
                                    return endValue;
                                }
                            }
                        };
                    } else {
                        _snap = function(endValue) {
                            var _rotationSnap = item.draggable.rotationsnap;// * Math.PI / 180;


                            return Math.round(endValue / _rotationSnap) * _rotationSnap;
                        }
                    }
                }
                var _tempRotated = 0;

                if (item.draggable.axis != "rotation") {
                    _bounds = item.draggable.container;
                } else {
                    if (item.draggable.rotationbounds == "none") {
                        _bounds = {minRotation:-99999, maxRotation:99999};
                    } else {
                        _bounds = {minRotation:parseInt(item.draggable.boundsprops.mindegrees), maxRotation:parseInt(item.draggable.boundsprops.maxdegrees)};
                    }
                }

                if(item.draggable.targetitem.length == 0) {
                    return false;
                }


                prx.draggable._draggables[_targetid.substr(1)] = Draggable.create(item.draggable.targetitem, {
                    type:item.draggable.axis,
                    edgeResistance: 0.95,
                    throwProps: true,
                    bounds: _bounds,
                    trigger: (typeof(item.draggable.handleid) != "undefined") ? item.draggable.handleid : '',
                    zIndexBoost: item.draggable.front,
                    snap: _snap
                    ,dragResistance: 0
                    ,maxDuration: _maxDuration
                    ,liveSnap: item.draggable.livesnap
                    ,lockAxis: item.draggable.lockaxis
                });

                // v5.10.33
                // if bounds is set to custom, because draggable is initialized while hidden, the component is considered to be out of bounds,
                // and greensock applies a transform: translate(xbounds, ybounds) on the component
                // this ofcourse messes with our left and top positions, moving the item, so I reset it
                // i know this is risky :(
                if(typeof(item.rotation) == "undefined") { item.rotation = 0; }
                TweenMax.set($(item.draggable.targetitem),{ x: 0, y: 0, rotation: item.rotation });

                // will be overwritten if ondragstart, ondragend interaction exists below so need to also keep this code in those functions
                prx.draggable._draggables[_targetid.substr(1)][0].vars.onDragStart = function() {
                    $(this.target).parents('.box').each(function(){ // all symbols
                        if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
                            prx.scrollable._scrollables[this.id + '-inner'].disable();
                        }
                    })
                };

                prx.draggable._draggables[_targetid.substr(1)][0].vars.onDragEnd = function() {
                    $(this.target).parents('.box').each(function(){ // all symbols
                        if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
                            prx.scrollable._scrollables[this.id + '-inner'].enable();
                        }
                    })
                };

                var _ondragstartinteraction = false;
                var _ondraginteraction = false;
                var _ondragendinteraction = false;
                var _onthrowupdateinteraction = false;
                var _onthrowcompleteinteraction = false;
                for(var i=0;i<prx.actions._actionTypes.length;i++) {
                    if(typeof(item[prx.actions._actionTypes[i]]) != "undefined") {
                        for(var j=0;j<item[prx.actions._actionTypes[i]].length;j++) {
                            switch(item[prx.actions._actionTypes[i]][j].type) {
                                case "ondragstart":
                                case "onrotatestart":
                                    _ondragstartinteraction = true;
                                    break;
                                case "ondrag":
                                case "onrotate":
                                    _ondraginteraction = true;
                                    break;
                                case "ondragend":
                                case "onrotateend":
                                    _ondragendinteraction = true;
                                    break;
                                case "onthrowupdate":
                                case "onrotatethrowupdate":
                                    _onthrowupdateinteraction = true;
                                    break;
                                case "onthrowcomplete":
                                case "onrotatethrowcomplete":
                                    _onthrowcompleteinteraction = true;
                                    break;
                                default: break;
                            }
                        }
                    }
                }
                if(_ondragstartinteraction) {
                    prx.draggable._draggables[_targetid.substr(1)][0].vars.onDragStart = function() {
                        var _r = {};

                        $(this.target).parents('.box').each(function(){ // all symbols
                            if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
                                prx.scrollable._scrollables[this.id + '-inner'].disable();
                            }
                        })

                        if(typeof(prx.variables._triggerData[_targetid]) == "undefined") {
                            prx.variables._triggerData[_targetid] = {};
                        }

                        if (item.draggable.axis != "rotation") {
                            _r.row = 0;
                            _r.column = 0;
                            _r.x = 0; // relative position to boundaries
                            _r.y = 0;
                            _r.movex = 0;
                            _r.movey = 0;
                            _r.left = 0; // absolute position to canvas
                            _r.top = 0;
                            _r.position = {'left':item.left,'top':item.top};

                            if (item.draggable.snap) {
                                switch (item.draggable.axis) {
                                    case "x":
                                        _r.row = 1;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    case "y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;
                                        _r.column = 1
                                        break;
                                    case "x,y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    default:
                                        break;
                                }
                            }


                            _r.x = Math.round(this.x-this.minX);
                            _r.y = Math.round(this.y-this.minY);
                            _r.movex = this.x;
                            _r.movey = this.y;
                            _r.left = Math.round($(this.target).offset().left);
                            _r.top = Math.round($(this.target).offset().top);

                            prx.variables._triggerData[_targetid]['ondragstart'] = _r;
                            $(_targetid).trigger('ondragstart',this);
                        } else {
                            var degs = Math.round((this.rotation % 360));
                            _r.degrees = (degs > 0) ? degs : 360 + degs;
                            _r.rotationposition = this.rotation;
                            if (isNaN(_r.degrees)) {
                                _r.degrees = 0;
                            }

                            _tempRotated = this.rotation;
                            _r.rotated = 0;

                            prx.variables._triggerData[_targetid]['onrotatestart'] = _r;
                            $(_targetid).trigger('onrotatestart',this);
                        }

                    };
                }

                if(_ondraginteraction) {
                    prx.draggable._draggables[_targetid.substr(1)][0].vars.onDrag = function() {
                        var _r = {};

                        // v5.9.5 strange bug where if rotation and tapping on component to change screen, on other screen but in same position, dragstart is not being triggered
                        // i think caused by a more generic bug where tap events are propagated to next page.
                        // v5.9.8 found really issue (was tap propagating) and fix it.
                        // v5.10 now adding it on all interactions because i don't call dragstart unless its needed.
                        if(typeof(prx.variables._triggerData[_targetid]) == "undefined") {
                            prx.variables._triggerData[_targetid] = {};
                        }

                        if (item.draggable.axis != "rotation") {
                            _r.row = 0;
                            _r.column = 0;
                            _r.x = 0; // relative position to boundaries
                            _r.y = 0;
                            _r.movex = 0;
                            _r.movey = 0;
                            _r.left = 0; // absolute position to canvas
                            _r.top = 0;

                            if (item.draggable.snap) {
                                switch (item.draggable.axis) {
                                    case "x":
                                        _r.row = 1;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    case "y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;
                                        _r.column = 1
                                        break;
                                    case "x,y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    default:
                                        break;
                                }

                            }
                            _r.x = Math.round(this.x-this.minX);
                            _r.y = Math.round(this.y-this.minY);
                            _r.movex = this.x;
                            _r.movey = this.y;
                            _r.left = Math.round($(this.target).offset().left);
                            _r.top = Math.round($(this.target).offset().top);
                            prx.variables._triggerData[_targetid]['ondrag'] = _r;
                            $(_targetid).trigger('ondrag',this);
                        } else {
                            var degs = Math.round((this.rotation % 360));
                            _r.degrees = (degs > 0) ? degs : 360 + degs;
                            _r.rotationposition = this.rotation;
                            _r.rotated = this.rotation - _tempRotated;
                            _r.rotated = Math.round(_r.rotated);
                            prx.variables._triggerData[_targetid]['onrotate'] = _r;

                            $(_targetid).trigger('onrotate',this);
                        }




                    };
                }

                if(_ondragendinteraction) {
                    prx.draggable._draggables[_targetid.substr(1)][0].vars.onDragEnd = function() {
                        var _r = {};

                        if(typeof(prx.variables._triggerData[_targetid]) == "undefined") {
                            prx.variables._triggerData[_targetid] = {};
                        }

                        $(this.target).parents('.box').each(function(){ // all symbols
                            if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
                                prx.scrollable._scrollables[this.id + '-inner'].enable();
                            }
                        })

                        //this.tween.seek(this.tween.duration());
                        if (item.draggable.axis != "rotation") {

                            _r.row = 0;
                            _r.column = 0;
                            _r.x = 0; // relative position to boundaries
                            _r.y = 0;
                            _r.movex = 0;
                            _r.movey = 0;
                            _r.left = 0; // absolute position to canvas
                            _r.top = 0;

                            if (item.draggable.snap) {
                                switch (item.draggable.axis) {
                                    case "x":
                                        _r.row = 1;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    case "y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;
                                        _r.column = 1
                                        break;
                                    case "x,y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    default:
                                        break;
                                }

                            }
                            _r.x = Math.round(this.x-this.minX);
                            _r.y = Math.round(this.y-this.minY);
                            _r.movex = this.x;
                            _r.movey = this.y;
                            _r.left = Math.round($(this.target).offset().left);
                            _r.top = Math.round($(this.target).offset().top);
                            //_r.tween = this.tween.duration();

                            prx.variables._triggerData[_targetid]['ondragend'] = _r;
                            $(_targetid).trigger('ondragend',this);
                        } else {
                            var degs = Math.round((this.rotation % 360));
                            _r.degrees = (degs > 0) ? degs : 360 + degs;
                            _r.rotationposition = this.rotation;
                            _r.rotated = this.rotation - _tempRotated;
                            _r.rotated = Math.round(_r.rotated);
                            prx.variables._triggerData[_targetid]['onrotateend'] = _r;
                            $(_targetid).trigger('onrotateend',this);
                        }

                    };
                }

                if(_onthrowupdateinteraction) {
                    prx.draggable._draggables[_targetid.substr(1)][0].vars.onThrowUpdate = function() {
                        var _r = {};

                        if(typeof(prx.variables._triggerData[_targetid]) == "undefined") {
                            prx.variables._triggerData[_targetid] = {};
                        }

                        if (item.draggable.axis != "rotation") {
                            _r.row = 0;
                            _r.column = 0;
                            _r.x = 0;
                            _r.y = 0;
                            _r.movex = 0;
                            _r.movey = 0;

                            if (item.draggable.snap) {
                                switch (item.draggable.axis) {
                                    case "x":
                                        _r.row = 1;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    case "y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;
                                        _r.column = 1
                                        break;
                                    case "x,y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    default:
                                        break;
                                }

                            }

                            //annam v5.10.1 - on throwupdate, this.endX gets the end position immediately instead of the current position
                            //_r.x = Math.round(this.endX-this.minX);
                            //_r.y = Math.round(this.endY-this.minY);
                            _r.x = Math.round(this.x-this.minX);
                            _r.y = Math.round(this.y-this.minY);
                            _r.movex = Math.round(this.x);
                            _r.movey = Math.round(this.y);
                            _r.left = Math.round($(this.target).offset().left);
                            _r.top = Math.round($(this.target).offset().top);

                            prx.variables._triggerData[_targetid]['onthrowupdate'] = _r;
                            $(_targetid).trigger('onthrowupdate',this);
                        } else {
                            //_r.degrees = Math.abs(Math.round((this.endX % 360)));
                            //_r.rotationposition = this.endX;

                            var degs = Math.round((this.rotation % 360));
                            _r.degrees = (degs > 0) ? degs : 360 + degs;
                            _r.rotationposition = this.rotation;
                            //_r.rotated = this.endX - _tempRotated;
                            _r.rotated = Math.round(_r.rotated);
                            prx.variables._triggerData[_targetid]['onrotatethrowupdate'] = _r;
                            $(_targetid).trigger('onrotatethrowupdate',this);
                        }


                    };
                }

                if(_onthrowcompleteinteraction) {
                    prx.draggable._draggables[_targetid.substr(1)][0].vars.onThrowComplete = function() {
                        var _r = {};

                        if(typeof(prx.variables._triggerData[_targetid]) == "undefined") {
                            prx.variables._triggerData[_targetid] = {};
                        }

                        if (item.draggable.axis != "rotation") {
                            _r.row = 0;
                            _r.column = 0;
                            _r.x = 0;
                            _r.y = 0;
                            _r.movex = 0;
                            _r.movey = 0;

                            if (item.draggable.snap) {
                                switch (item.draggable.axis) {
                                    case "x":
                                        _r.row = 1;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    case "y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;
                                        _r.column = 1
                                        break;
                                    case "x,y":
                                        _r.row = Math.round((this.y-this.minY)/gridHeight)+1;;
                                        _r.column = Math.round((this.x-this.minX)/gridWidth)+1;
                                        break;
                                    default:
                                        break;
                                }

                            }
                            _r.x = Math.round(this.x-this.minX);
                            _r.y = Math.round(this.y-this.minY);
                            _r.movex = Math.round(this.x);
                            _r.movey = Math.round(this.y);
                            _r.left = Math.round($(this.target).offset().left);
                            _r.top = Math.round($(this.target).offset().top);
                            prx.variables._triggerData[_targetid]['onthrowcomplete'] = _r;
                            $(_targetid).trigger('onthrowcomplete',this);
                        } else {
                            var degs = Math.round((this.rotation % 360));
                            _r.degrees = (degs > 0) ? degs : 360 + degs;
                            _r.rotationposition = this.rotation;
                            _r.rotated = this.rotation - _tempRotated;
                            _r.rotated = Math.round(_r.rotated);

                            [_targetid]['onrotatethrowcomplete'] = _r;
                            $(_targetid).trigger('onrotatethrowcomplete',this);
                        }
                    };
                }



                /*
                 } else { // jQuery
                 if (item.draggable.bounds == "auto") {
                 item.draggable.container = item.draggable.targetitem.parent();
                 } else {
                 item.draggable.container = [item.draggable.boundsprops.left, item.draggable.boundsprops.top, item.draggable.boundsprops.left+item.draggable.boundsprops.width, item.draggable.boundsprops.top+item.draggable.boundsprops.height];
                 }

                 item.draggable.targetitem.draggable({
                 containment: item.draggable.container
                 ,axis: item.draggable.axis
                 ,start: function(event, ui) {
                 var _r = {};
                 _r.row = 0;
                 _r.column = 0;
                 _r.x = 0; // relative position to boundaries
                 _r.y = 0;
                 _r.movex = 0;
                 _r.movey = 0;
                 _r.left = 0; // absolute position to canvas
                 _r.top = 0;

                 }
                 ,drag: function(event, ui) {

                 }
                 ,stop: function( event, ui ) {
                 }

                 });

                 if (item.draggable.snap) {
                 item.draggable.targetitem.draggable( "option", "grid",  [ gridWidth, gridHeight ] );
                 }
                 }
                 */
            }
        }
    }
}

prx.draggable.refresh = function(pageid) {
    return true;
    $('#p-' + pageid + ' .box.draggable').each(function(){
        if(typeof(prx.draggable._draggables[this.id]) == "undefined") { return false }

        var split = this.id.split('box-');
        var id = 'box-' + split[split.length - 1];
        var stateid = $(this).parents('[data-state-id]').first().attr('data-state-id');
        if(typeof(prx.allItems[id]) != "undefined" && typeof(prx.allItems[id].states) != "undefined" && typeof(prx.allItems[id].states[stateid]) != "undefined") {
            var data = $.evalJSON(prx[prx.allItems[id].containertype][prx.allItems[id].containerindex].states[prx.allItems[id].states[stateid].stateindex].data);
            var item = data[prx.allItems[id].states[stateid].itemindex];

            if (typeof(item.draggable)!='undefined') {
                if (item.draggable.isdraggable) {
                    if (item.draggable.axis != "rotation") {
                        if (item.draggable.bounds != "auto") {
                            var _parentPosition =  $(this).parent().offset();
                            var container = {left: parseInt(item.draggable.boundsprops.left)+_parentPosition.left, top: parseInt(item.draggable.boundsprops.top)+_parentPosition.top, width: item.draggable.boundsprops.width, height: item.draggable.boundsprops.height}
                            //prx.draggable._draggables[this.id][0].applyBounds(container);
                            prx.draggable._draggables[this.id][0].vars.bounds = container;
                        }
                    }
                }
            }

        }
    });
}


prx.easing = {};

prx.easing._easingMappings = {
    'linear':'Linear.easeNone','Linear.easeNone':'Linear.easeNone'
    ,'ease':'Quad.easeInOut','Linear.ease':'Quad.easeInOut','Quad.ease':'Quad.easeInOut'
    ,'in':'Quad.easeIn','Linear.easeIn':'Quad.easeIn','Quad.easeIn':'Quad.easeIn'
    ,'out':'Quad.easeOut','Linear.easeOut':'Quad.easeOut','Quad.easeOut':'Quad.easeOut'
    ,'in-out':'Quad.easeInOut','Linear.easeInOut':'Quad.easeInOut','Quad.easeInOut':'Quad.easeInOut'
    ,'swing':'Quad.easeInOut','Linear.easeInOut':'Quad.easeInOut','Quad.easeInOut':'Quad.easeInOut'
    ,'snap':'Strong.easeOut','Strong.easeOut':'Strong.easeOut'
    ,'Cubic.easeIn':'Cubic.easeIn','Cubic.easeOut':'Cubic.easeOut','Cubic.easeInOut':'Cubic.easeInOut'
    ,'Quart.easeIn':'Quart.easeIn','Quart.easeOut':'Quart.easeOut','Quart.easeInOut':'Quart.easeInOut'
    ,'Quint.easeIn':'Quint.easeIn','Quint.easeOut':'Quint.easeOut','Quint.easeInOut':'Quint.easeInOut'
    ,'Circ.easeIn':'Circ.easeIn','Circ.easeOut':'Circ.easeOut','Circ.easeInOut':'Circ.easeInOut'
    ,'Back.easeIn':'Back.easeIn','Back.easeOut':'Back.easeOut','Back.easeInOut':'Back.easeInOut'
    ,'Bounce.easeIn':'Bounce.easeIn','Bounce.easeOut':'Bounce.easeOut','Bounce.easeInOut':'Bounce.easeInOut'
    ,'Elastic.easeIn':'Elastic.easeIn','Elastic.easeOut':'Elastic.easeOut','Elastic.easeInOut':'Elastic.easeInOut'
    ,'Expo.easeIn':'Expo.easeIn','Expo.easeOut':'Expo.easeOut','Expo.easeInOut':'Expo.easeInOut'
    ,'Sine.easeIn':'Sine.easeIn','Sine.easeOut':'Sine.easeOut','Sine.easeInOut':'Sine.easeInOut'
}
prx.easing._easingMappingsReverse = {
    'linear':'Linear.easeNone','Linear.easeNone':'Linear.easeNone'
    ,'ease':'Linear.easeInOut','Linear.ease':'Linear.easeInOut'
    ,'in':'Linear.easeOut','Linear.easeIn':'Linear.easeOut'
    ,'out':'Linear.easeIn','Linear.easeOut':'Linear.easeIn'
    ,'in-out':'Linear.easeInOut','Linear.easeInOut':'Linear.easeInOut'
    ,'swing':'Linear.easeInOut','Linear.easeInOut':'Linear.easeInOut'
    ,'snap':'Strong.easeIn','Strong.easeOut':'Strong.easeIn'
    ,'Quad.easeIn':'Quad.easeOut','Quad.easeOut':'Quad.easeIn','Quad.easeInOut':'Quad.easeInOut','Quad.ease':'Quad.easeInOut'
    ,'Cubic.easeIn':'Cubic.easeOut','Cubic.easeOut':'Cubic.easeIn','Cubic.easeInOut':'Cubic.easeInOut'
    ,'Quart.easeIn':'Quart.easeOut','Quart.easeOut':'Quart.easeIn','Quart.easeInOut':'Quart.easeInOut'
    ,'Quint.easeIn':'Quint.easeOut','Quint.easeOut':'Quint.easeIn','Quint.easeInOut':'Quint.easeInOut'
    ,'Circ.easeIn':'Circ.easeOut','Circ.easeOut':'Circ.easeIn','Circ.easeInOut':'Circ.easeInOut'
    ,'Back.easeIn':'Back.easeOut','Back.easeOut':'Back.easeIn','Back.easeInOut':'Back.easeInOut'
    ,'Bounce.easeIn':'Bounce.easeOut','Bounce.easeOut':'Bounce.easeIn','Bounce.easeInOut':'Bounce.easeInOut'
    ,'Elastic.easeIn':'Elastic.easeOut','Elastic.easeOut':'Elastic.easeIn','Elastic.easeInOut':'Elastic.easeInOut'
    ,'Expo.easeIn':'Expo.easeOut','Expo.easeOut':'Expo.easeIn','Expo.easeInOut':'Expo.easeInOut'
    ,'Sine.easeIn':'Sine.easeOut','Sine.easeOut':'Sine.easeIn','Sine.easeInOut':'Sine.easeInOut'
}

prx.easing.get = function(easing) {
    if(typeof(easing) != "undefined") {
        if(typeof(easing) == "string") {
            if(easing.substring(0,12) == "cubic-bezier") {
                easing = prx.easing.getFromCubicBezier(easing);
            } else {
                easing = prx.easing._easingMappings[easing];
            }
        }
    } else {
        easing = prx.easing._easingMappings['linear'];
    }
    return easing;
}

prx.easing.getReverse = function(easing) {
    if(typeof(easing) != "undefined") {
        if(typeof(prx.easing._easingMappingsReverse[easing]) != "undefined") {
            easing = prx.easing._easingMappingsReverse[easing];
        } else if (easing.indexOf('cubic-bezier') > -1) {
            easing = prx.easing.getFromCubicBezierReverse(easing);
        }
    } else {
        easing = prx.easing._easingMappings['linear'];
    }
    return easing;
}

prx.easing.getFromCubicBezier = function(cb) {
    var split = cb.replace("cubic-bezier(", "").replace(")", "").split(",");
    if(split.length == 4) {
        return new Ease(BezierEasing(parseFloat(split[0]), parseFloat(split[1]), parseFloat(split[2]), parseFloat(split[3])));
    }
    return prx.easing._easingMappings["linear"];
}

prx.easing.getFromCubicBezierReverse = function(cb) {
    // https://gist.github.com/IanLunn/4666512
    var split = cb.replace("cubic-bezier(", "").replace(")", "").split(",");
    if(split.length == 4) {
        return new Ease(BezierEasing(1-parseFloat(split[2]), 1-parseFloat(split[3]), 1-parseFloat(split[0]), 1-parseFloat(split[1])));
    }
    return prx.easing._easingMappings["linear"];
}


prx.fonts = {};
prx.fonts._fonts = [];

prx.fonts.loadProjectFonts = function(){
    var _str = ''
    for(var i=0; i<prx.fonts._fonts.length; i++){
        _str += prx.fonts._fonts[i].value + ':'
        for(var j=0;j<prx.fonts._fonts[i].variants.length;j++) {
            _str += prx.fonts._fonts[i].variants[j] + ','
        }
        _str = _str.slice(0,-1) + '|'
    }
    _str = _str.slice(0,-1);
    if(_str != "") {
        $('head').append('<link href="https://fonts.googleapis.com/css?family='+_str+'" type="text/css" rel="stylesheet"/>');
    }
}



prx.helper = {};

prx.helper.blurIOsInputs = function(){
    if(prx.iosmobilebrowser) {
        $('input:focus').blur();
    }
}


prx.helper.rerenderActivePageWebkitIssue = function(e) {
    setTimeout(function () {
        if(!prx.scrollable.checkIfInTransition('.prx-page-active')) { // breaks animation on transition if we force rerender :(
            prx.helper.forceWebkitRerender($('.prx-page-active'));
        }
    }, 50)
}

prx.helper.forceWebkitRerender = function($el) {
    // stupid webkit
    var sel = $el.get(0);
    var originalstyle = sel.style.display;
    sel.style.display='none';
    sel.offsetHeight; // no need to store this anywhere, the reference is enough
    sel.style.display=originalstyle;
}


prx.loading = {};

prx.loading.load = function (filename) {

    var _filename = filename;
    var _xt = new Date().getTime();

    $('#loader-wrapper').show().find('span').text('0%');

    if (typeof(prx.xdata) == "undefined") {
        if(prx.spaces) {
            $.post("/project/livepreview/loaddata/?x="+_xt, { filename: prx.s3b},function(output) {
                prx.loading.iniData(output);
            });
        } else {
            $.post("/editor/data/loadpublished/?x="+_xt, { filename: _filename, vup: prx.vup, v: prx.v, rl: prx.rl, s3b: prx.s3b, ron: prx.ron},function(output) {
                prx.loading.iniData(output);
            } );
        }
    } else {
        prx.loading.iniData(prx.xdata);
    }

}

prx.loading.loadDone = function() {

    prx.loading.iniStartScreen();

    // calls function in player-ui.js (when previewing in web.cfm) to build screen browser
    if(!parent != window) {
        try {
            var data = {
                pages: $.evalJSON($.toJSON(prx.pages)),
                startscreen: prx.navigation._activepage.replace('p-', '') //(prx.deviceorientation=='portrait') ? prx.project.startscreen : prx.project.startscreenlandscape
            };
            if(typeof(prx.sort) != "undefined") {
                data.sort = prx.sort.pages;
            }

            parent.prx.iniPlayerReady(data)
        }catch(err){};
    }

    //THIS PREVENTS THE DOUBLE TRIGGER EVENT ON CLICK
    //v5.9.8.3 this doesnt seem to apply anymore?
    /*
     $(':input').on('click', function(e) {
     e.stopPropagation();
     });
     */

    // v5.9.8.3 due to hammer for some reason inputs do not get focused
    // v5.9.8.4 fixed with hammer.options.touchAction = 'auto';
    // v5.9.22 i've removed touchAction='auto', now this seems to happen when pinch interactions exist in project (causing touchAction='none') but only if input has interactions attached to it? Though a client had this issue on an input with no interactions, i wasn't able to replicate.
    // v5.9.23 now trying to force pinch to 'pan-x pan-y' touchAction so this should be ok without the focus() (which i think might be causing extra issues)
    /*
     $(document).on('touchstart', ':input', function(e) {
     $(this).focus();
     });
     */

    /* SCROLLABLE TABBARS */
    for(var i=0; i<prx.scrollable._scrollableTabbars.length; i++) {
        prx.scrollable.iniTabbar(i);
    }
    /* /SCROLLABLE TABBARS */
}

prx.loading.iniData = function (data) {
    var _project = $.evalJSON(data);


    prx.project = _project.project;
    prx.pages = _project.pages;
    prx.symbols = _project.symbols;
    prx.templates = _project.templates;
    prx.variables._variables = _project.variables;

    prx.variables.prepare(); // set defaults to undefined

    if (typeof(_project.fonts) != 'undefined') {
        prx.fonts._fonts = _project.fonts
    }

    prx.fonts.loadProjectFonts();

    if (typeof(_project.sort) != 'undefined') {
        prx.sort = _project.sort
    }

    for (var n = 0; n < prx.pages.length; n++) {
        if (typeof (prx.pages[n].id) == 'undefined') { // fix for Nan
            prx.pages.splice(n, 1); // remove problematic item
        } else {
            prx.pages[n].id = parseInt(prx.pages[n].id);
        }

    }

    for (var n = 0; n < prx.symbols.length; n++) {
        //prx.symbols[n].id = parseInt(prx.symbols[n].id);
        if (typeof (prx.symbols[n].id) == 'undefined') { // fix for Nan
            prx.symbols.splice(n, 1); // remove problematic item
        } else {
            prx.symbols[n].id = parseInt(prx.symbols[n].id);
        }
    }

    for (var n = 0; n < prx.templates.length; n++) {
        //prx.templates[n].id = parseInt(prx.templates[n].id);
        if (typeof (prx.templates[n].id) == 'undefined') { // fix for Nan
            prx.templates.splice(n, 1); // remove problematic item
        } else {
            prx.templates[n].id = parseInt(prx.templates[n].id);
        }
    }

    if(typeof(_project.v5) != "undefined" && _project.v5) {
        prx.v5 = _project.v5;
    } else {
        prx.compatibility.v5.ini();
    }

    var _temporientation = prx.orientation.get();

    if (_temporientation != 'portrait') {
        if (typeof(prx.project.startscreenlandscape) == "undefined") {
            prx.project.startscreenlandscape = 1;
        }
    }

    if(typeof(_project._imgs_version) != "undefined") {
        prx._imgs_version = _project._imgs_version;
    }

    _project = null; // perf+

    prx.canvas.ini();
    // prx.loading.iniRunningLoader()
    prx.items.buildAllItemsStruct();
    prx.loading.loadDone();
}

prx.loading.showReloadingLoader = function(){
    $('#loader-wrapper')
        .show()
        .find('span')
        .text('Reloading...')
}

prx.loading.iniStartScreen = function(){
    var _activePage;

    switch(prx.orientation._orientation) {
        case "portrait":
            _activePage = 'p-' + prx.project.startscreen;
            if($('#'+_activePage).length == 0) {
                _activePage = 'p-' + prx.project.startscreenlandscape;
            }
            break;
        case "landscape":
            _activePage = 'p-' + prx.project.startscreenlandscape;
            if($('#'+_activePage).length == 0) {
                _activePage = 'p-' + prx.project.startscreen;
            }
            break;
    }

    if(window.location.hash != '') {
        _activePage = 'p-' + window.location.hash.replace('#', '');
    }

    if($('#'+_activePage).length == 0) {
        _activePage = 'p-' + prx.pages[0].id;
    }

    var _page = prx.stc.screens.getStructFromId(_activePage);
    var _pageorientation = prx.orientation.getPage(_page);

    prx.navigation.changePage($('#'+_activePage), {
        transition: 'none',
        //changeHash: prx.navigation._pagehash // was adding a history state on load, causing angelos' app to need to "back" actions to leave the prototype.
        changeHash: false
    });

    if (prx.orientation._orientation!=_pageorientation) {

        prx.orientation.change();
        //prx.orientation.changeBody(_pageorientation);


        /* change skin orientation if on web player */
        if(!prx.embed && parent != window) {
            try {
                parent.prx.switchOrientation();
            }catch(err){};
        }
        var _$loader = $('#loader-wrapper').show().find('span').text('0%').end();

        var _noOfImgs = $('[data-role=page] img:not([src=""])').length;
        var _loadedImgs = 0;
        if(_noOfImgs == 0) { _$loader.hide(); }
        $('[data-role=page] img:not([src=""])').unbind("load error").bind("load error", function(){
            _loadedImgs++;
            _$loader.find('span').text(Math.round(_loadedImgs*100/_noOfImgs)+'%');
            if(_loadedImgs == _noOfImgs) { _$loader.hide(); }
        });

    }

    // it seems that for some reason there is a provision where you can pass the url param ap=pageid to load the project in a specific page.
    if(prx.initialpageid != false) {
        if ('p-'+prx.iinitialpageid != prx.navigation._activepage) {
            prx.navigation.changePage($('#p-'+prx.initialpageid), {
                transition: 'none',
                changeHash: prx.navigation._pagehash
            });
        }
        $('#'+prx.navigation._activepage).trigger('orientationchange');
    }
}



prx.navigation = {};
prx.navigation._pagehash = true; // history
prx.navigation._gobackstack = []; // Go back button history stack
prx.navigation._activepage = 'p-1';

prx.navigation.changePage = function($targetpage, opts){

    if(typeof(opts) == "undefined") { opts = []; }

    var options = {
        transition: 'none',
        changeHash: prx.navigation._pagehash,
        allowSamePageTransition: true,
        overlay: false,
        transitionid: prx.utils.getGuid()
    }

    $.extend(options, opts);

    var $sourcepage = $('.prx-page-active');

    if(!options.allowSamePageTransition && $sourcepage.get(0).id == $targetpage.get(0).id) {
        // for prx.actions.callback() to be called.
        $sourcepage.trigger('pagebeforehide');
        $targetpage.trigger('pagebeforeshow');
        $sourcepage.trigger('pagehide');
        $targetpage.trigger('pageshow');
        return true;
    }

    // to close keyboard on devices
    $sourcepage.find('input:focus').trigger('blur')

    // both in changepage() before transition and in pagechanged() after transition just to make sure -
    // in case a shorted "go to page" or "unload" or "load" is called and finished before this is finished.
    prx.navigation._activepage = $targetpage.get(0).id;

    $sourcepage.trigger('pagebeforehide');
    $targetpage.trigger('pagebeforeshow');

    $sourcepage.addClass('prx-page-transitioning-' + options.transitionid)
    $targetpage.addClass('prx-page-transitioning-' + options.transitionid)

    if(options.overlay != false) {
        $sourcepage.addClass(function(){ return 'prx-page-transitioning-overlay-' + options.overlay + '-source'; })
        $targetpage.addClass(function(){ return 'prx-page-transitioning-overlay-' + options.overlay + '-target'; })
    }

    switch(options.transition) {
        case "slide":
        case "slide-overlay":
            prx.screenTransitions.slide($sourcepage, $targetpage, options);
            break;
        case "slideback":
        case "slideback-overlay":
            prx.screenTransitions.slideBack($sourcepage, $targetpage, options);
            break;
        case "slideup":
        case "slideup-overlay":
            prx.screenTransitions.slideUp($sourcepage, $targetpage, options);
            break;
        case "slidedown":
        case "slidedown-overlay":
            prx.screenTransitions.slideDown($sourcepage, $targetpage, options);
            break;
        case "fade":
            prx.screenTransitions.fade($sourcepage, $targetpage, options);
            break;
        case "pop":
            prx.screenTransitions.popIn($sourcepage, $targetpage, options);
            break;
        case "popout":
            prx.screenTransitions.popOut($sourcepage, $targetpage, options);
            break;
        case "flip":
            prx.screenTransitions.flip($sourcepage, $targetpage, options);
            break;
        case "turn":
            prx.screenTransitions.turnOut($sourcepage, $targetpage, options);
            break;
        case "turnin":
            prx.screenTransitions.turnIn($sourcepage, $targetpage, options);
            break;
        case "flow":
            prx.screenTransitions.flow($sourcepage, $targetpage, options);
            break;
        default:
            prx.navigation.pageChanged($sourcepage, $targetpage, options);
            break;
    }


}

prx.navigation.pageChanged = function($sourcepage, $targetpage, options) {

    $sourcepage.removeClass('prx-page-active prx-page-transitioning-overlay-in-source prx-page-transitioning-overlay-out-source prx-page-transitioning-' + options.transitionid);
    $targetpage.addClass('prx-page-active').removeClass('prx-page-transitioning-overlay-in-target prx-page-transitioning-overlay-out-target prx-page-transitioning-' + options.transitionid);

    // need this to fix movewholescreen inconsistency where if the screen was moved, depending on the transition it is sometimes brought back to 0 but sometimes not.
    // it also messes with my movewholescreen - position fixed on overlay fixes in pagehide.
    if(typeof($sourcepage.get(0)) != "undefined" && options.overlay != "in") {
        var top = 0;
        // i think i also fix this later on pageshow but just to be sure
        if(prx.allowstatusbar && prx.canvas._statusbars[$sourcepage.get(0).id.replace('p-', '')].statusbar == "1") {
            top = prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[$sourcepage.get(0).id.replace('p-', '')].orientation];
        }
        $sourcepage.css({ top: top, left: 0 })
    }


    // both in changepage() before transition and in pagechanged() after transition just to make sure -
    // in case a shorted "go to page" or "unload" or "load" is called and finished before this is finished.
    prx.navigation._activepage = $targetpage.get(0).id;

    $sourcepage.trigger('pagehide');
    $targetpage.trigger('pageshow');

    if(options.changeHash) {
        window.location.hash = '#' + prx.navigation._activepage.replace('p-', '');
    }

    $(window).trigger('pagechange');
}


prx.orientation = {};
prx.orientation._orientation = 'portrait';

prx.orientation.get = function() {
    // if it is defined, depend on this. using the method below, some android devices returned the wrong orientation.
    if(typeof(window.orientation) != "undefined") {
        return (window.orientation == 0) ? 'portrait' : 'landscape';
    }

    var elem = document.documentElement;
    var or = elem && elem.clientWidth / elem.clientHeight < 1.1 ? "portrait" : "landscape";
    return or;
};

prx.orientation.changeBody = function(_deviceOrientation) {
    if(typeof(_deviceOrientation) == "undefined") {
        _deviceOrientation = prx.orientation.get();
    }

    prx.orientation._orientation = _deviceOrientation;

    $('body')
        .width(prx.devices[prx.device][_deviceOrientation][0])
        .height(prx.devices[prx.device][_deviceOrientation][1])
}

prx.orientation.change = function(orientation) {
    if(typeof(orientation) != "undefined" && orientation == prx.orientation._orientation) { return false; }

    prx.orientation.changeBody(orientation);

    //var _deviceOrientation = ($(window).width() < $(window).height()) ? "portrait" : "landscape";
    //var _deviceOrientation = prx.orientation.get();

    try {
        //var _activePage = $.mobile.activePage.get(0).id;
        var _activePage = prx.navigation._activepage;

        /* IF NOT ORIENTATION CHANGE EVENT HAS BEEN DEFINED THEN DO AUTO RESIZE ON ORIENTATION CHANGE */

        // jquery 1.8 has removed the "official" way of retrieving the binded events :( the method we use now is for internal jquery used and may be changed in future releases
        if (typeof ($._data($('#'+_activePage).get(0), "events")) == "undefined" || (typeof ($._data($('#'+_activePage).get(0), "events")) != "undefined" && typeof ($._data($('#'+_activePage).get(0), "events").changeorientation) == "undefined") ) {

            var _id = prx.items.helper.getPageIdFromId(_activePage);
            var _page = prx.pages[prx.stc.screens.getIndexFromId(_id)];

            $('#'+_activePage).html('');

            prx.stc.screens.reloadResponsive(_page);

            // to trigger all necessary events
            prx.navigation.changePage($('#'+_activePage), {
                changeHash: false,
                allowSamePageTransition: true
            });

        } else { /* CALL USER DEFINED ORIENTATION CHANGE ACTION */
            //jQuery.each($('#'+_activePage).data('events'), function(i, event){
            jQuery.each($._data($('#'+_activePage).get(0), "events"), function(i, event){
                jQuery.each(event, function(i, handler){
                    if (handler.type == 'changeorientation') {
                        $('#'+_activePage).trigger( "changeorientation" );
                    }
                });
            });
        }
    } catch(e){}
    return true;

}

prx.orientation.getPage = function(page, stateindex){
    if(typeof(stateindex) == "undefined") {
        stateindex = 0;
    }

    var _orientation = prx.devices[prx.device].defaultOrientation;

    if (typeof(page.orientation) == "undefined" || page.orientation == "") {
        page.orientation = prx.devices[prx.device].defaultOrientation;
    }

    _orientation = page.orientation;

    if(!prx.devices[prx.device][_orientation + '_applies']) {
        _orientation = (_orientation == "portrait") ? "landscape" : "portrait";
    }

    return _orientation;
}

prx.orientation.check = function() {
    // orientationchange is triggered natively on mobile devices.
    if(!("onorientationchange" in window)) {
        var tmpOr = prx.orientation.get();
        if(tmpOr != prx.orientation._orientation) {
            $(window).trigger('orientationchange');
        }
    }
}


prx.overlay = {};

prx.overlay.render = function(pageid) {
    //return;
    //$('#overlay').show();

    //var _pageid = '#p-'+pageid;
    var _pageid = pageid;
    var _statusbar = prx.canvas._statusbars[pageid.substr(3)]
    var _top = 0;
    var _height = prx.devices[prx.device][_statusbar.orientation][1];

    if(prx.allowstatusbar && _statusbar.statusbar == "1") {
        _top = prx.devices[prx.device]['statusbarheight'+_statusbar.orientation]
        _height -= _top;
    }

    // need to change the id of the checkboxes, or the checked state is lost.
    $overlay = $('#overlay')

    $(_pageid)
        .find('[data-mpoverlay="1"]')
        .each(function(){
            var _elmTop = $(this).offset().top - _top;
            var _elmLeft = $(this).offset().left;

            //var $overlay = $('<div class="overlay"></div>').insertAfter(this);
            $(this)
                //.clone(true, true) // apparently clone with events messes something up with jquery. v3.4.1.13
                .clone()
                .css({'top': _elmTop + 'px', 'left': _elmLeft + 'px'})
                .find('input')
                .attr('id', function(){return $(this).attr('id') + '-overlay' })
                .attr('name', function(){return $(this).attr('name') + '-overlay' })
                .end()
                .find('label')
                .attr('for', function(){return $(this).attr('for') + '-overlay' })
                .end()
                .appendTo($overlay);
        })

    $overlay
        .css('top', _top + 'px')
        .height(_height)
        .show();
    //$(_pageid).find('[data-mpoverlay="1"]').clone(true,true).appendTo('#trash');
    //$(_pageid).find('[data-mpoverlay="1"]').remove();

}


prx.screenTransitions = {};

prx.screenTransitions.slide = function($sourcepage, $targetpage, options) {
    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 600; }
    if(typeof(easing) == "undefined") { easing = "Expo.easeOut"; }

    easing = prx.easing.get(easing);

    // i cant have both load overlayed screen (or unload) and slide-overlay transition.
    if(options.transition.indexOf("-overlay") > -1 && options.overlay != false) {
        options.transition = options.transition.replace('-overlay', '');
    }

    $targetpage.addClass('prx-page-active');
    if(options.transition.indexOf("-overlay") > -1) {
        $targetpage.addClass('prx-page-above prx-page-transition-overlay-top');
        $sourcepage.addClass('prx-page-below');
    }

    if(options.overlay != 'in') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$sourcepage.get(0).id,
            duration/1000,
            {
                left: $sourcepage.width()*-1*((options.transition.indexOf("-overlay") > -1) ? 0.5 : 1),
                ease: easing,
            }
        ).call(function(){
                $targetpage.removeClass('prx-page-above prx-page-transition-overlay-top');
                $sourcepage.removeClass('prx-page-below');
                prx.navigation.pageChanged($sourcepage, $targetpage, options);
            }).to(
            '#'+$sourcepage.get(0).id,
            0,
            {
                left: 0,
                overwrite: 0
            }
        );
    }

    if(options.overlay != 'out') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$targetpage.get(0).id,
            0,
            {
                left: $sourcepage.width()
            }
        ).to(
            '#'+$targetpage.get(0).id,
            duration/1000,
            {
                left: 0,
                ease: easing
            }
        ).call(function(){
                if(options.overlay) {
                    $targetpage.removeClass('prx-page-above prx-page-transition-overlay-top');
                    $sourcepage.removeClass('prx-page-below');
                    prx.navigation.pageChanged($sourcepage, $targetpage, options);
                }
            });
    }
}

prx.screenTransitions.slideBack = function($sourcepage, $targetpage, options) {
    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 600; }
    if(typeof(easing) == "undefined") { easing = "Expo.easeOut"; }

    easing = prx.easing.get(easing);

    // i cant have both load overlayed screen (or unload) and slide-overlay transition.
    if(options.transition.indexOf("-overlay") > -1 && options.overlay != false) {
        options.transition = options.transition.replace('-overlay', '');
    }

    $targetpage.addClass('prx-page-active');
    if(options.transition.indexOf("-overlay") > -1) {
        $sourcepage.addClass('prx-page-above prx-page-transition-overlay-top');
        $targetpage.addClass('prx-page-below');
    }

    if(options.overlay != 'in') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$sourcepage.get(0).id,
            duration/1000,
            {
                left: $targetpage.width(),
                ease: easing
            }
        ).call(function(){
                $targetpage.removeClass('prx-page-below');
                $sourcepage.removeClass('prx-page-above prx-page-transition-overlay-top');
                prx.navigation.pageChanged($sourcepage, $targetpage, options);
            }).to(
            '#'+$sourcepage.get(0).id,
            0,
            {
                left: 0,
                overwrite: 0
            }
        );
    }

    if(options.overlay != 'out') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$targetpage.get(0).id,
            0,
            {
                left: $targetpage.width()*-1*((options.transition.indexOf("-overlay") > -1) ? 0.5 : 1)
            }
        ).to(
            '#'+$targetpage.get(0).id,
            duration/1000,
            {
                left: 0,
                ease: easing
            }
        ).call(function(){
                if(options.overlay) {
                    $targetpage.removeClass('prx-page-below');
                    $sourcepage.removeClass('prx-page-above prx-page-transition-overlay-top');
                    prx.navigation.pageChanged($sourcepage, $targetpage, options);
                }
            });
    }

}

prx.screenTransitions.slideUp = function($sourcepage, $targetpage, options) {
    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 600; }
    if(typeof(easing) == "undefined") { easing = "Expo.easeOut"; }

    easing = prx.easing.get(easing);

    // i cant have both load overlayed screen (or unload) and slide-overlay transition.
    if(options.transition.indexOf("-overlay") > -1 && options.overlay != false) {
        options.transition = options.transition.replace('-overlay', '');
    }

    var sourcetop = 0;
    var targettop = 0;

    if(prx.allowstatusbar && prx.canvas._statusbars[$sourcepage.attr('id').replace('p-', "")].statusbar == 1) {
        sourcetop = prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[$sourcepage.attr('id').replace('p-', "")].orientation];
    }
    if(prx.allowstatusbar && prx.canvas._statusbars[$targetpage.attr('id').replace('p-', "")].statusbar == 1) {
        targettop = prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[$targetpage.attr('id').replace('p-', "")].orientation];
    }

    $targetpage.addClass('prx-page-active');
    if(options.transition.indexOf("-overlay") > -1) {
        $targetpage.addClass('prx-page-above prx-page-transition-overlay-top');
        $sourcepage.addClass('prx-page-below');
    }

    if(options.overlay != 'in') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$sourcepage.get(0).id,
            duration/1000,
            {
                top: $sourcepage.height()*-1*((options.transition.indexOf("-overlay") > -1) ? 0.5 : 1),
                ease: easing
            }
        ).call(function(){
                $sourcepage.removeClass('prx-page-below');
                $targetpage.removeClass('prx-page-above prx-page-transition-overlay-top');
                prx.navigation.pageChanged($sourcepage, $targetpage, options);
            }).to(
            '#'+$sourcepage.get(0).id,
            0,
            {
                top: sourcetop,
                overwrite: 0
            }
        );
    }

    if(options.overlay != 'out') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$targetpage.get(0).id,
            0,
            {
                top: $sourcepage.height()
            }
        ).to(
            '#'+$targetpage.get(0).id,
            duration/1000,
            {
                top: targettop,
                ease: easing
            }
        ).call(function(){
                if(options.overlay) {
                    $sourcepage.removeClass('prx-page-below');
                    $targetpage.removeClass('prx-page-above prx-page-transition-overlay-top');
                    prx.navigation.pageChanged($sourcepage, $targetpage, options);
                }
            });
    }
}

prx.screenTransitions.slideDown = function($sourcepage, $targetpage, options) {
    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 600; }
    if(typeof(easing) == "undefined") { easing = "Expo.easeOut"; }

    easing = prx.easing.get(easing);

    // i cant have both load overlayed screen (or unload) and slide-overlay transition.
    if(options.transition.indexOf("-overlay") > -1 && options.overlay != false) {
        options.transition = options.transition.replace('-overlay', '');
    }

    var sourcetop = 0;
    var targettop = 0;

    if(prx.allowstatusbar && prx.canvas._statusbars[$sourcepage.attr('id').replace('p-', "")].statusbar == 1) {
        sourcetop = prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[$sourcepage.attr('id').replace('p-', "")].orientation];
    }
    if(prx.allowstatusbar && prx.canvas._statusbars[$targetpage.attr('id').replace('p-', "")].statusbar == 1) {
        targettop = prx.devices[prx.device]['statusbarheight'+prx.canvas._statusbars[$targetpage.attr('id').replace('p-', "")].orientation];
    }

    $targetpage.addClass('prx-page-active');
    if(options.transition.indexOf("-overlay") > -1) {
        $sourcepage.addClass('prx-page-above prx-page-transition-overlay-top');
        $targetpage.addClass('prx-page-below');
    }

    if(options.overlay != 'in') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$sourcepage.get(0).id,
            duration/1000,
            {
                top: $targetpage.height(),
                ease: easing
            }
        ).call(function(){
                $targetpage.removeClass('prx-page-below');
                $sourcepage.removeClass('prx-page-above prx-page-transition-overlay-top');
                prx.navigation.pageChanged($sourcepage, $targetpage, options);
            }).to(
            '#'+$sourcepage.get(0).id,
            0,
            {
                top: sourcetop,
                overwrite: 0
            }
        );
    }

    if(options.overlay != 'out') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$targetpage.get(0).id,
            0,
            {
                top: $targetpage.height()*-1*((options.transition.indexOf("-overlay") > -1) ? 0.5 : 1)
            }
        ).to(
            '#'+$targetpage.get(0).id,
            duration/1000,
            {
                top: targettop,
                ease: easing
            }
        ).call(function(){
                if(options.overlay) {
                    $targetpage.removeClass('prx-page-below');
                    $sourcepage.removeClass('prx-page-above prx-page-transition-overlay-top');
                    prx.navigation.pageChanged($sourcepage, $targetpage, options);
                }
            });
    }
}

prx.screenTransitions.popIn = function($sourcepage, $targetpage, options) {

    if(options.overlay == 'out') {
        prx.screenTransitions.popOut($sourcepage, $targetpage, options);
        return;
    }

    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 300; }
    if(typeof(easing) == "undefined") { easing = "in-out"; }

    easing = prx.easing.get(easing);

    $targetpage.addClass('prx-page-active prx-page-above');
    $sourcepage.addClass('prx-page-below');

    new TimelineMax({force3D: prx.greensockForce3D}).to(
        '#'+$targetpage.get(0).id,
        0,
        {
            scale: 0.8,
            opacity: 0.8
        }
    ).to(
        '#'+$targetpage.get(0).id,
        duration/1000,
        {
            scale: 1,
            opacity: 1,
            ease: easing
        }
    ).call(function(){
            prx.navigation.pageChanged($sourcepage, $targetpage, options);
            $sourcepage.removeClass('prx-page-below');
            $targetpage.removeClass('prx-page-above');
        });
}

prx.screenTransitions.popOut = function($sourcepage, $targetpage, options, size) {

    if(options.overlay == 'in') {
        prx.screenTransitions.popIn($sourcepage, $targetpage, options);
        return;
    }

    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 300; }
    if(typeof(easing) == "undefined") { easing = "in-out"; }

    // provision for popout-large and popout-small which i dont have at the moment. small would be 0.8.
    if(typeof(size) == "undefined") { size = 1.8; }

    easing = prx.easing.get(easing);

    $targetpage.addClass('prx-page-active prx-page-below');
    $sourcepage.addClass('prx-page-above');

    new TimelineMax({force3D: prx.greensockForce3D}).to(
        '#'+$sourcepage.get(0).id,
        duration/1000,
        {
            scale: size,
            opacity: 0.2,
            ease: easing
        }
    ).call(function(){
            prx.navigation.pageChanged($sourcepage, $targetpage, options);
            $sourcepage.removeClass('prx-page-above');
            $targetpage.removeClass('prx-page-below');
        }).to(
        '#'+$sourcepage.get(0).id,
        0,
        {
            scale: 1,
            opacity: 1,
            overwrite: 0
        }
    );
}

prx.screenTransitions.fade = function($sourcepage, $targetpage, options) {
    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 300; }
    if(typeof(easing) == "undefined") { easing = "in-out"; }

    easing = prx.easing.get(easing);

    if(options.overlay != 'out') {

        $targetpage.addClass('prx-page-active prx-page-above');
        $sourcepage.addClass('prx-page-below');

        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$targetpage.get(0).id,
            0,
            {
                opacity: 0
            }
        ).to(
            '#'+$targetpage.get(0).id,
            duration/1000,
            {
                opacity: 1,
                ease: easing
            }
        ).call(function(){
                prx.navigation.pageChanged($sourcepage, $targetpage, options);
                $sourcepage.removeClass('prx-page-below');
                $targetpage.removeClass('prx-page-above');
            });
    } else {

        $targetpage.addClass('prx-page-active prx-page-below');
        $sourcepage.addClass('prx-page-above');

        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$sourcepage.get(0).id,
            duration/1000,
            {
                opacity: 0,
                ease: easing
            }
        ).call(function(){
                prx.navigation.pageChanged($sourcepage, $targetpage, options);
                $sourcepage.removeClass('prx-page-above');
                $targetpage.removeClass('prx-page-below');
            }).to(
            '#'+$sourcepage.get(0).id,
            0,
            {
                opacity: 1,
                overwrite: 0
            }
        );
    }
}

prx.screenTransitions.flip = function($sourcepage, $targetpage, options) {

    // dont allow easing in flip because im splitting interaction in 2!

    var duration = options.duration;
    var easing = "linear";
    if(typeof(duration) == "undefined") { duration = 500; }

    easing = prx.easing.get(easing);

    if(options.overlay == 'out') {
        $targetpage.addClass('prx-page-active prx-page-below prx-page-transition-flip');
        $sourcepage.addClass('prx-page-above prx-page-transition-flip');
    } else {
        $targetpage.addClass('prx-page-active prx-page-above prx-page-transition-flip');
        $sourcepage.addClass('prx-page-below prx-page-transition-flip');
    }

    if(options.overlay != 'in') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$sourcepage.get(0).id,
            duration/1000,
            {
                rotationY: -180,
                ease: easing
            }
        ).call(function(){
                if(options.overlay) {
                    prx.navigation.pageChanged($sourcepage, $targetpage, options);
                    $sourcepage.removeClass('prx-page-below prx-page-above prx-page-transition-flip');
                    $targetpage.removeClass('prx-page-below prx-page-above prx-page-transition-flip');
                }
            }).to(
            '#'+$sourcepage.get(0).id,
            0,
            {
                rotationY: 0,
                overwrite: 0
            }
        );

        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$sourcepage.get(0).id,
            duration/1000/2,
            {
                scale: 0.9,
                ease: easing
            }
        ).to(
            '#'+$sourcepage.get(0).id,
            duration/1000/2,
            {
                scale: 1,
                ease: easing
            }
        )
    }

    if(options.overlay != 'out') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$targetpage.get(0).id,
            0,
            {
                rotationY: 180
            }
        ).to(
            '#'+$targetpage.get(0).id,
            duration/1000,
            {
                rotationY: 0,
                ease: easing
            }
        ).call(function(){
                prx.navigation.pageChanged($sourcepage, $targetpage, options);
                $sourcepage.removeClass('prx-page-below prx-page-above prx-page-transition-flip');
                $targetpage.removeClass('prx-page-below prx-page-above prx-page-transition-flip');
            });

        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$targetpage.get(0).id,
            duration/1000/2,
            {
                scale: 0.9,
                ease: easing
            }
        ).to(
            '#'+$targetpage.get(0).id,
            duration/1000/2,
            {
                scale: 1,
                ease: easing
            }
        )
    }

}

prx.screenTransitions.turnOut = function($sourcepage, $targetpage, options) {

    if(options.overlay == 'in') {
        prx.screenTransitions.turnIn($sourcepage, $targetpage, options);
        return;
    }

    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 400; }
    if(typeof(easing) == "undefined") { easing = "in-out"; }

    easing = prx.easing.get(easing);

    $targetpage.addClass('prx-page-active prx-page-below');
    $sourcepage.addClass('prx-page-above prx-page-transition-turn');

    new TimelineMax({force3D: prx.greensockForce3D}).to(
        '#'+$sourcepage.get(0).id,
        0,
        {
            transformPerspective: 1000 // need to call it first otherwise it doesn't have time to run before the animation starts, and it flickers.
        }
    )
        .to(
        '#'+$sourcepage.get(0).id,
        duration/1000,
        {

            rotationY: -90,
            ease: easing
        }
    ).call(function(){
            prx.navigation.pageChanged($sourcepage, $targetpage, options);
            $sourcepage.removeClass('prx-page-above prx-page-transition-turn');
            $targetpage.removeClass('prx-page-below');
        }).to(
        '#'+$sourcepage.get(0).id,
        0,
        {
            rotationY: 0,
            overwrite: 0
        }
    );
}

prx.screenTransitions.turnIn = function($sourcepage, $targetpage, options) {

    if(options.overlay == 'out') {
        prx.screenTransitions.turnOut($sourcepage, $targetpage, options);
        return;
    }

    var duration = options.duration;
    var easing = options.easing;
    if(typeof(duration) == "undefined") { duration = 400; }
    if(typeof(easing) == "undefined") { easing = "in-out"; }

    easing = prx.easing.get(easing);

    $targetpage.addClass('prx-page-active prx-page-above prx-page-transition-turn');
    $sourcepage.addClass('prx-page-below');

    new TimelineMax({force3D: prx.greensockForce3D}).to(
        '#'+$targetpage.get(0).id,
        0,
        {
            transformPerspective: 1000, // need to call it first otherwise it doesn't have time to run before the animation starts, and it flickers.
            rotationY: -90
        }
    )
        .to(
        '#'+$targetpage.get(0).id,
        duration/1000,
        {

            rotationY: 0,
            ease: easing
        }
    ).call(function(){
            prx.navigation.pageChanged($sourcepage, $targetpage, options);
            $sourcepage.removeClass('prx-page-below');
            $targetpage.removeClass('prx-page-above prx-page-transition-turn');
        });
}

prx.screenTransitions.flow = function($sourcepage, $targetpage, options) {
    var duration = options.duration;
    var easing = "linear";
    if(typeof(duration) == "undefined") { duration = 500; }

    easing = prx.easing.get(easing);

    if(options.overlay != 'in') {
        $targetpage.addClass('prx-page-active prx-page-below prx-page-transition-flow');
        $sourcepage.addClass('prx-page-above prx-page-transition-flow');
    } else {
        $targetpage.addClass('prx-page-active prx-page-above prx-page-transition-flow');
        $sourcepage.addClass('prx-page-below prx-page-transition-flow');
    }

    if(options.overlay) {
        $targetpage.addClass('prx-page-transition-flow-overlay');
        $sourcepage.addClass('prx-page-transition-flow-overlay');
    }

    if(options.overlay != 'in') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$sourcepage.get(0).id,
            duration/1000*0.25,
            {
                scale: 0.7,
                ease: easing
            }
        )
            .to(
            '#'+$sourcepage.get(0).id,
            duration/1000*0.2,
            {

                left: -$sourcepage.width(),
                ease: easing,
                delay: duration/1000*0.15

            }
        )
            .to(
            '#'+$sourcepage.get(0).id,
            0,
            {
                delay: duration/1000*0.4

            }
        ).call(function(){
                if(options.overlay) {
                    prx.navigation.pageChanged($sourcepage, $targetpage, options);
                    $sourcepage.removeClass('prx-page-below prx-page-above prx-page-transition-flow');
                    $targetpage.removeClass('prx-page-below prx-page-above prx-page-transition-flow');
                }
            })
            .to(
            '#'+$sourcepage.get(0).id,
            0,
            {
                left: 0,
                scale: 1,
                overwrite: 0
            }
        )
    }

    if(options.overlay != 'out') {
        new TimelineMax({force3D: prx.greensockForce3D}).to(
            '#'+$targetpage.get(0).id,
            0,
            {
                left: $sourcepage.width(),
                scale: 0.7
            }
        )
            .to(
            '#'+$targetpage.get(0).id,
            duration/1000*0.2,
            {

                left: 0, //$sourcepage.width()*0.15,
                ease: easing,
                delay: duration/1000*0.4

            }
        )
            .to(
            '#'+$targetpage.get(0).id,
            duration/1000*0.25,
            {
                left: 0,
                scale: 1,
                ease: easing,
                delay: duration/1000*0.15

            }
        ).call(function(){
                prx.navigation.pageChanged($sourcepage, $targetpage, options);
                $sourcepage.removeClass('prx-page-below prx-page-above prx-page-transition-flow');
                $targetpage.removeClass('prx-page-below prx-page-above prx-page-transition-flow');
            });
    }

}


prx.scrollable = {};
prx.scrollable._scrollables = {};
prx.scrollable._scrollableTabbars = [];
prx.scrollable._scrollPositions = {};

prx.scrollable.refresh = function(targetid) {
    $(targetid + ', ' +targetid+ ' .box').each(function(){
        if (typeof(prx.scrollable._scrollables[this.id + '-inner'])!='undefined') {
            if($('#' + this.id + '-inner').is(':visible')) { // because if not visible it looses its scroll position
                prx.scrollable._scrollables[this.id + '-inner'].refresh();
            }
        }
    });
    /*
     $.each($('#p-'+pageid+ ' .type-picker, #p-'+pageid+ ' .type-picker-retina, #p-'+pageid+ ' .type-android-scrollable-tabbar, #p-'+pageid+ ' .type-ios7-picker'), function(i, elm){
     if (typeof(prx.scrollable._scrollables[elm.id + '-inner'])!='undefined') {
     prx.scrollable._scrollables[elm.id + '-inner'].refresh();
     }
     });
     */
}

prx.scrollable.checkIfInTransition = function(targetid) {
	var foundintransition = false;
	$(targetid + ', ' +targetid+ ' .box').each(function(){
        if (typeof(prx.scrollable._scrollables[this.id + '-inner'])!='undefined') {
            if(prx.scrollable._scrollables[this.id + '-inner'].isInTransition) {
            	foundintransition = true;
            }
        }
    });
	return foundintransition;
}

prx.scrollable.iniContainer = function(item, _containerid) {

    if (typeof(prx.scrollable._scrollables[_containerid + '-inner'])!='undefined') {
        prx.scrollable._scrollables[_containerid + '-inner'].destroy();
        prx.scrollable._scrollables[_containerid + '-inner'] = null;
        delete prx.scrollable._scrollables[_containerid + '-inner'];
    }

    if (typeof(item.scroll)!='undefined') {
        if (item.scroll!=''&&item.scroll!='none') {

            var _scrollX = false;
            var _scrollY = false;
            var _scrollbars = false;
            var _snap = eval(item.scrollsnap);

            switch (item.scroll) {
                case "omni":
                    _scrollX = true;
                    _scrollY = true;
                    _scrollbars = typeof(item.scrollbars) == "undefined" ? (eval(item.hscrollbar) || eval(item.vscrollbar)) : eval(item.scrollbars);
                    break;
                case "horizontal":
                    _scrollX = true;
                    _scrollbars = typeof(item.scrollbars) == "undefined" ? eval(item.hscrollbar) : eval(item.scrollbars);
                    break;
                case "vertical":
                    _scrollY = true;
                    _scrollbars = typeof(item.scrollbars) == "undefined" ? eval(item.vscrollbar) : eval(item.scrollbars);
                    break;
                default:
                    break;
            }

            var _probeType = 0;
            if(typeof(item.actions) != "undefined") {
                for(var i=0;i<item.actions.length;i++) {
                    if(item.actions[i].type == "containerscroll") {
                        _probeType = 3;
                    }
                }
            }

            for(var i=0; i<prx.scrollable._scrollableTabbars.length; i++) {
                var _linked = prx.scrollable._scrollableTabbars[i].container+ '-' + prx.scrollable._scrollableTabbars[i].linked + '-inner';
                if(_linked == _containerid + '-inner') {
                    _probeType = 3;
                }
            }

            /* TO MAKE CONTAINERS REDEFINED WHEN CHANGE ORIENTATION */

            if($.isArray(_snap)) {
                _snap = true;
            }

            if (typeof(prx.scrollable._scrollables[_containerid + '-inner'])=='undefined') {

                // even though im not sure how direction lock would affect twowayscroll
                if(typeof(item.lockdirection) == "undefined" || item.scroll != "omni"){ item.lockdirection = true; }

                if(typeof(item.bounce) == "undefined") { item.bounce = true }

                //if(typeof(prx.scrollable._scrollables[_containerid + '-inner']) != "undefined") {delete prx.scrollable._scrollables[_containerid + '-inner']};

                prx.scrollable._scrollables[_containerid + '-inner'] = new IScroll('#'+ _containerid + '-inner', {
                    scrollX: _scrollX,
                    scrollY: _scrollY,
                    snap: _snap,
                    useTransition:true,
                    // ANNAM v5.0.18 - causing checkbox labels to click twice and so turn on and off again on desktop
                    // All issues caused by click: true (or the absence of it) are because of incompatible behaviour
                    // between browser and mobile. so triggering click accordingly
                    // annam v5.8 after removing jquery mobile this seems to make no difference on my checboxes, either on or off, but im leaving it as is anyway.
                    //click: true,
                    click: prx.mobilebrowser,
                    //preventDefault: false,
                    //tap: true,
                    zoom: eval(item.pinchzoom),
                    momentum:eval(item.momentum),
                    bounce: item.bounce,
                    bounceLock: true
                    //,lockDirection: eval(item.lockdirection) // not used in iscroll5, use freeScroll instead
                    ,freeScroll: !eval(item.lockdirection)
                    ,directionLockThreshold: 0 // for better lockdirection
                    ,scrollbars: _scrollbars
                    ,mouseWheel: true
                    ,probeType: _probeType
                    //,keyBindings: true
                    ,snapThreshold: 0.25 // for less tolerant change page. original 0.334.
                    ,deceleration: 0.008 // original 0.0006
                    ,twoWayScroll: (item.scroll=="omni") ? false : true
                    ,interactiveScrollbars: true
                });


                // I have no idea how this behaves on iScroll 5 (AP)
                /*
                 prx.scrollable._scrollables[_containerid + '-inner'].on('beforeScrollStart', function() {
                 var target = e.target;
                 while (target.nodeType != 1)
                 target = target.parentNode;
                 if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
                 e.preventDefault();
                 }
                 });
                 */

                /*
                 prx.scrollable._scrollables[_containerid + '-inner'].on('move', function() {

                 });
                 */


                if(_probeType == 3) {
                    prx.scrollable._scrollables[_containerid + '-inner'].on('scroll', function() {
                        var _targetid = _containerid + '-inner';
                        var _triggerId = '#'+_containerid;
                        var _r = {};

                        if(typeof(prx.variables._triggerData[_triggerId]) == "undefined") {
                            prx.variables._triggerData[_triggerId] = {};
                        }

                        if (eval(item.scrollsnap)) {
                            _r.x = this.x;
                            _r.y = this.y;
                            _r.currentpagex = this.currentPage.pageX + 1;
                            _r.currentpagey = this.currentPage.pageY + 1;
                            _r.currentpagexindex = this.currentPage.pageX;
                            _r.currentpageyindex = this.currentPage.pageY;

                            prx.variables._triggerData[_triggerId]['containerscroll'] = _r;

                            $('#' + _containerid).trigger('containerscroll' , this);


                        } else {
                            _r.x = this.x;
                            _r.y = this.y;
                            _r.currentpagex = 1;
                            _r.currentpagey = 1;
                            _r.currentpagexindex = 0;
                            _r.currentpageyindex = 0;

                            prx.variables._triggerData[_triggerId]['containerscroll'] = _r;
                            $('#' + _containerid).trigger('containerscroll' , this);

                        }

                    });
                }

                prx.scrollable._scrollables[_containerid + '-inner'].on('scrollStart', function() {

                    var _targetid = _containerid + '-inner';
                    var _triggerId = '#' + _containerid;
                    var _r = {};

                    if (typeof(prx.variables._triggerData[_triggerId]) == "undefined") {
                        prx.variables._triggerData[_triggerId] = {};
                    }

                    $(_triggerId).parents('.box').each(function () { // all symbols
                        if (typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
                            prx.scrollable._scrollables[this.id + '-inner'].disable();
                        }
                    })
                });

                prx.scrollable._scrollables[_containerid + '-inner'].on('scrollEnd', function() {

                    var _targetid = _containerid + '-inner';
                    var _triggerId = '#'+_containerid;
                    var _r = {};

                    if(typeof(prx.variables._triggerData[_triggerId]) == "undefined") {
                        prx.variables._triggerData[_triggerId] = {};
                    }

                    $(_triggerId).parents('.box').each(function(){ // all symbols
                        if(typeof(prx.scrollable._scrollables[this.id + '-inner']) != "undefined") {
                            prx.scrollable._scrollables[this.id + '-inner'].enable();
                        }
                    })

                    if (eval(item.scrollsnap)) {
                        _r.x = this.currentPage.x;
                        _r.y = this.currentPage.y;
                        _r.currentpagex = this.currentPage.pageX + 1;
                        _r.currentpagey = this.currentPage.pageY + 1;
                        _r.currentpagexindex = this.currentPage.pageX;
                        _r.currentpageyindex = this.currentPage.pageY;

                        prx.variables._triggerData[_triggerId]['containerpagechange'] = _r;
                        prx.variables._triggerData[_triggerId]['containerpageenter'] = _r;
                        prx.variables._triggerData[_triggerId]['containerscrollend'] = _r;

                        $('#' + _containerid).trigger('containerpagechange' , this);
                        $('#' + _containerid).trigger('containerpageenter.page' + this.currentPage.pageX + '-' + this.currentPage.pageY, this);
                        $('#' + _containerid).trigger('containerscrollend' , this);


                    } else {
                        _r.x = this.x;
                        _r.y = this.y;
                        _r.currentpagex = 1;
                        _r.currentpagey = 1;
                        _r.currentpagexindex = 0;
                        _r.currentpageyindex = 0;

                        prx.variables._triggerData[_triggerId]['containerscrollend'] = _r;
                        $('#' + _containerid).trigger('containerscrollend' , this);

                    }

                    // ANNAM v5.10.8
                    // prevents scrollend to be triggered again on next tap event. unfortunately only if snap = false
                    //this.moved = false;
                    //this.initiated = false;

                });


                // iScroll5 does not support this
                //var RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize';
                //prx.scrollable._scrollables[_containerid + '-inner']._unbind(RESIZE_EV, window);

                for(var i=0; i<prx.scrollable._scrollableTabbars.length; i++) {
                    var _linked = prx.scrollable._scrollableTabbars[i].container+ '-' + prx.scrollable._scrollableTabbars[i].linked + '-inner';
                    if(_linked == _containerid + '-inner') {

                        /* WARNING! THIS IS ALSO COPIED IN ANDROID COMPONENTS.JS! */

                        var _tabbar = prx.scrollable._scrollableTabbars[i].container+ '-' + prx.scrollable._scrollableTabbars[i].id + '-inner';
                        prx.scrollable._scrollables[_linked].options.linkedTabbar = _tabbar;
                        prx.scrollable._scrollables[_linked].goToPage(Number(prx.scrollable._scrollableTabbars[i].start), 0, 0);
                        if(typeof(prx.scrollable._scrollables[_tabbar]) != "undefined") {
                            // for some reason this needs to be here when the tabbar is not in the startscreen. XL :o
                            prx.scrollable._scrollables[_tabbar].goToPage(Number(prx.scrollable._scrollableTabbars[i].start), 0, 0);
                        }
                        prx.scrollable._scrollables[_linked].on('scroll', function() {
                            //prx.scrollable._scrollables[_linked].options.onScrollMove = function() {
                            prx.scrollable._scrollables[this.options.linkedTabbar].scrollTo(this.x/2, 0, 0, false);
                        });

                        //prx.scrollable._scrollables[_linked].on('scrollEnd', function() {
                        $(prx.scrollable._scrollables[_linked].wrapper).on('mouseup touchend', function() {
                            //prx.scrollable._scrollables[_linked].options.onTouchEnd = function() {
                            //prx.scrollable._scrollables[this.options.linkedTabbar].goToPage(this.currentPage.pageX, 0, 200);
                            //prx.scrollable._scrollables[prx.scrollable._scrollables[this.id].options.linkedTabbar].goToPage(prx.scrollable._scrollables[this.id].currentPage.pageX, 0, 200);
                            prx.scrollable._scrollables[prx.scrollable._scrollables[this.id].options.linkedTabbar].scrollTo(prx.scrollable._scrollables[prx.scrollable._scrollables[this.id].options.linkedTabbar].pages[prx.scrollable._scrollables[this.id].currentPage.pageX][0].x, 0, 200, false);
                        });
                        break;
                    }
                }

                //} catch(err){};
            }
        }
    }
}

prx.scrollable.iniTabbar = function(i){
    var _tabbar = prx.scrollable._scrollableTabbars[i].container+ '-' + prx.scrollable._scrollableTabbars[i].id + '-inner';
    var _linked = prx.scrollable._scrollableTabbars[i].container+ '-' + prx.scrollable._scrollableTabbars[i].linked + '-inner';
    var _bLinked = false;

    if(typeof(prx.scrollable._scrollables[_tabbar]) != "undefined") {
        prx.scrollable._scrollables[_tabbar].destroy();
        prx.scrollable._scrollables[_tabbar] = null;
    }

    prx.scrollable._scrollables[_tabbar] = new IScroll('#'+_tabbar,{
        scrollX: true,
        scrollY: false,
        probeType: 3,
        //hScrollbar: false,
        //vScrollbar: false,
        scrollbars: false,
        useTransition: true,
        momentum: false,
        snap: 'li',
        linkedContainer: _linked,
        twoWayScroll: true

        /*
         ,onScrollMove: function(a,b){
         if (typeof(prx.scrollable._scrollables[this.options.linkedContainer])!='undefined') {
         prx.scrollable._scrollables[this.options.linkedContainer].scrollTo(this.x*2, 0, 0, false);
         }
         },
         onTouchEnd: function(a){
         if (typeof(prx.scrollable._scrollables[this.options.linkedContainer])!='undefined') {
         prx.scrollable._scrollables[this.options.linkedContainer].goToPage(this.currentPage.pageX, 0, 200);
         }
         }
         */
    });


    //prx.scrollable._scrollables[_tabbar].on('scrollEnd', function() {
    $(prx.scrollable._scrollables[_tabbar].wrapper).on('mouseup touchend', function() {
        if (typeof(prx.scrollable._scrollables[prx.scrollable._scrollables[_tabbar].options.linkedContainer])!='undefined') {
            //prx.scrollable._scrollables[this.options.linkedContainer].goToPage(this.currentPage.pageX, 0, 200);
            prx.scrollable._scrollables[prx.scrollable._scrollables[this.id].options.linkedContainer].goToPage(prx.scrollable._scrollables[this.id].currentPage.pageX, 0, 200);
            //prx.scrollable._scrollables[prx.scrollable._scrollables[this.id].options.linkedContainer].scrollTo(prx.scrollable._scrollables[prx.scrollable._scrollables[this.id].options.linkedContainer].pages[prx.scrollable._scrollables[this.id].currentPage.pageX][0].x, 0, 200, false);
        }
    });

    prx.scrollable._scrollables[_tabbar].on('scroll', function() {
        if (typeof(prx.scrollable._scrollables[this.options.linkedContainer])!='undefined') {
            prx.scrollable._scrollables[this.options.linkedContainer].scrollTo(this.x*2, 0, 0, false);
        }
    });


    /*
     prx.scrollable._scrollables[_containerid + '-inner'] = new IScroll('#'+ _containerid + '-inner', {
     scrollX: _scrollX,
     scrollY: _scrollY,
     snap:eval(item.scrollsnap),
     useTransition:true,
     zoom: eval(item.pinchzoom),
     momentum:eval(item.momentum),
     bounce: true,
     bounceLock: true,
     lockDirection: eval(item.lockdirection)
     ,scrollbars: _scrollbars
     ,mouseWheel: true
     //,keyBindings: true

     });
     */


    prx.scrollable._scrollables[_tabbar].goToPage(Number(prx.scrollable._scrollableTabbars[i].start), 0, 0);
    /*
     if(_bLinked) {
     prx.scrollable._scrollables[_linked].options.linkedTabbar = _tabbar;
     prx.scrollable._scrollables[_linked].scrollToPage(Number(prx.scrollable._scrollableTabbars[i].start), 0, 0);
     prx.scrollable._scrollables[_linked].options.onScrollMove = function() {
     prx.scrollable._scrollables[this.options.linkedTabbar].scrollTo(this.x/2, 0, 0, false);
     }
     prx.scrollable._scrollables[_linked].options.onTouchEnd = function() {
     prx.scrollable._scrollables[this.options.linkedTabbar].scrollToPage(this.currentPage.pageX, 0, 200);
     }
     }
     */
}


prx.showActions = {};
prx.showActions._flashActions = false;
prx.showActions._shiftKeyDown = false;

prx.showActions.show = function(simple){
    if(typeof(simple) == "undefined") { simple = false; }
    var ahClass = (simple) ? 'action-highlight-simple-visible' : 'action-highlight-visible';
    $('.action-highlight').addClass(ahClass);
}

prx.showActions.hide = function(){
    $('.action-highlight').removeClass('action-highlight-visible action-highlight-simple-visible');
}

prx.showActions.iniShift = function() {
    // in two places, also in web.cfm
    if(!prx.embed && parent != window) {
        $(document).keydown(function(e){
            // shiftkey, show actions
            if (e.which == 16 && prx.showActions._shiftKeyDown == false) {
                prx.showActions._shiftKeyDown = true;

                if (!$("input,textarea").is(":focus"))
                    try {
                        parent.prx.showActionsActionsInPreview()
                        prx.showActions.show();
                    } catch (e) {}
            }
        }).keyup(function(e){
            // shiftkey, hide actions
            if (e.which == 16 && prx.showActions._shiftKeyDown == true) {
                prx.showActions._shiftKeyDown = false;

                if (!$("input,textarea").is(":focus"))
                    try {
                        parent.prx.hideActionsActionsInPreview()
                        prx.showActions.hide();
                    } catch (e) {}
            }
        })
    }
}

prx.showActions.iniFlash = function(){
    if(prx.showActions._flashActions) {
        $('body').hammer().on('tap', function(e){
            prx.showActions.flash();
        })
    }
}

prx.showActions.flash = function() {
    if(prx.showActions._flashActions) {
        prx.showActions.show(true);
        setTimeout(function(){
            prx.showActions.hide();
        }, 300)
    }
}


prx.states = {};
prx.states._timelines = {};
prx.states._changes = {};

prx.states.getChangesBetweenStates = function(fromstateid, tostateid, type, index) {
    if(typeof(type) == "undefined") { type = type = prx.getPageTemplateSymbolType() };
    if(typeof(index) == "undefined") { index = prx.getPageTemplateSymbolIndex(); };

    if(typeof(prx.states._changes[fromstateid + ":" + tostateid]) != "undefined") {
        return $.evalJSON($.toJSON(prx.states._changes[fromstateid + ":" + tostateid]));
    }

    // var changes = {};
    var changes = [];

    var fromstateindex = prx.stc.helper.getStateIndexFromId(fromstateid, type, index)
    var tostateindex = prx.stc.helper.getStateIndexFromId(tostateid, type, index)

    if(fromstateindex == -1 || tostateindex == -1) {
        return false;
    }

    switch(type) {
        case "pages":
        case "templates":
            if(prx.utils.getColor(prx[type][index].states[fromstateindex].background) != prx.utils.getColor(prx[type][index].states[tostateindex].background) || prx[type][index].states[fromstateindex].template.stateid != prx[type][index].states[tostateindex].template.stateid) {
                var containerChanges = (type == 'pages') ? { type: 'page-properties', id: 'current-page', changes: {} } : { type: 'template-properties', id: 'current-page-template', changes: {} };
                //if(typeof(changes.containerProperties) == "undefined") { changes.containerProperties = {}; }
                if(prx.utils.getColor(prx[type][index].states[fromstateindex].background) != prx.utils.getColor(prx[type][index].states[tostateindex].background)) {
                    containerChanges.changes.background = [prx[type][index].states[fromstateindex].background, prx[type][index].states[tostateindex].background]
                }
                if(prx[type][index].states[fromstateindex].template.stateid != prx[type][index].states[tostateindex].template.stateid) {
                    containerChanges.changes.templatestateid = [prx[type][index].states[fromstateindex].template.stateid, prx[type][index].states[tostateindex].template.stateid]
                }
                changes.push(containerChanges);
            }
            break;
        case "symbols":
            if(prx[type][index].states[fromstateindex].dimensions[0] != prx[type][index].states[tostateindex].dimensions[0] || prx[type][index].states[fromstateindex].dimensions[1] != prx[type][index].states[tostateindex].dimensions[1] || prx.utils.getColor(prx[type][index].states[fromstateindex].background) != prx.utils.getColor(prx[type][index].states[tostateindex].background)) {
                var containerChanges = { type: 'container-properties', id: 'current-container', changes: {} };
                if(prx[type][index].states[fromstateindex].dimensions[0] != prx[type][index].states[tostateindex].dimensions[0]) {
                    containerChanges.changes.width = [prx[type][index].states[fromstateindex].dimensions[0], prx[type][index].states[tostateindex].dimensions[0]]
                }
                if(prx[type][index].states[fromstateindex].dimensions[1] != prx[type][index].states[tostateindex].dimensions[1]) {
                    containerChanges.changes.height = [prx[type][index].states[fromstateindex].dimensions[1], prx[type][index].states[tostateindex].dimensions[1]]
                }
                if(prx.utils.getColor(prx[type][index].states[fromstateindex].background) != prx.utils.getColor(prx[type][index].states[tostateindex].background)) {
                    //if(typeof(changes.containerProperties) == "undefined") { changes.containerProperties = {}; }
                    containerChanges.changes.background = [prx[type][index].states[fromstateindex].background, prx[type][index].states[tostateindex].background]
                }
                changes.push(containerChanges);
            }
            break;
    }



    var fromstate = prx[type][index].states[fromstateindex].data;
    var tostate = prx[type][index].states[tostateindex].data;

    // first check if same
    if (fromstate == tostate) {
        prx.states._changes[fromstateid + ":" + tostateid] = changes;
        return $.evalJSON($.toJSON(changes));
    }

    fromstate = $.evalJSON(fromstate);
    tostate = $.evalJSON(tostate);

    // check if components the same
    var fromlist = [];
    var tolist = [];

    for(var i=0;i<fromstate.length;i++) {
        fromlist.push(fromstate[i].id);
    }

    for(i=0;i<tostate.length;i++) {
        tolist.push(tostate[i].id);
    }


    // different objects, or different order
    if(fromlist.toString() != tolist.toString()) {

        // different order
        // v5.2.9 always reordering to take care of new components that were originally added at the end of the array
        // v5.10 moving this in if statement - why should i reorder if the order is the same? expensive dom manipulation. for new components this should be ok.
        changes.push({
            type: 'reordered-components',
            new_order: tolist.toString(),
            old_order: fromlist.toString()
        })

        // different objects
        if(fromlist.slice(0).sort().toString() != tolist.slice(0).sort().toString()) { // slice(0) is a hack for cloning arrays

            // removed components
            for(i=0;i<fromlist.length;i++) {
                if(tolist.indexOf(fromlist[i]) == -1) {
                    //if(typeof(changes.removedComponents) == "undefined") { changes.removedComponents = [] }
                    //changes.removedComponents.push(fromlist[i]);

                    var comp_changes = {};
                    comp_changes.opacity = [fromlist[i].opacity, 0];

                    changes.push({
                        type: 'removed-component',
                        id: fromlist[i],
                        item: fromstate[i],
                        componentType: fromstate[i].type,
                        changes: comp_changes
                    })
                    fromlist.splice(i, 1);
                    i--;
                }
            }

            // new components
            for(i=0;i<tolist.length;i++) {
                if(fromlist.indexOf(tolist[i]) == -1) {
                    //if(typeof(changes.newComponents) == "undefined") { changes.newComponents = [] }
                    //changes.newComponents.push(tolist[i])
                    for(j=0;j<tostate.length;j++) {
                        if(tostate[j].id == tolist[i]) {

                            var comp_changes = {};

                            comp_changes.opacity = [0, tostate[j].opacity];

                            var item = tostate[j];
                            item.opacity = 0;

                            changes.push({
                                type: 'new-component',
                                id: tolist[i],
                                componentType: tostate[j].type,
                                item: item,
                                changes: comp_changes
                            })
                            tolist.splice(i, 1);
                            i--;
                            break;
                        }
                    }

                }
            }
        }

        // now two arrays contain the same items, possibly in different order. only contain the items that are common?

        // different order
        // v5.2.9 removing if statement and moving above detection of new/removed components
        /*
         if(fromlist.toString() != tolist.toString()) {
         changes.push({
         type: 'reordered-components',
         new_order: tolist.toString(),
         old_order: fromlist.toString()
         })

         }
         */

        // delete to avoid coming up on diff compare
        for(i=0;i<fromstate.length;i++) {
            if(typeof(fromstate[i].zindex) != "undefined") {
                delete fromstate[i].zindex
            }
        }
        for(i=0;i<tostate.length;i++) {
            if(typeof(tostate[i].zindex) != "undefined") {
                delete tostate[i].zindex
            }
        }
    }

    //changes.changedComponents = []

    // compare common components
    for(i=0;i<fromstate.length;i++) {
        for(var j=0;j<tostate.length;j++) {
            if(tostate[j].id == fromstate[i].id) {
                var diffs = jsondiffpatch.diff(fromstate[i], tostate[j]);
                if(typeof(diffs) != "undefined") {

                    // loop diffs. if array, simple before, after.
                    // if json (meaning array comparison, eg actions), convert to array
                    $.each(diffs, function(key, value) {
                        // v5.0.14 doing it for all diffs to make sure that they are all setup fine
                        // because in some cases where in fromstate value is undefined and in to state value is array
                        // the returned diff[key] was [tostate[j][key], and it was later on used as the from value instead of as the to value
                        // v5.0.19 moving this on top of the width height visible etc checks so that the overrides below are not overwritten
                        //if(!$.isArray(value)) {
                        diffs[key] = [fromstate[i][key], tostate[j][key]];
                        //}
                    });

                    for (var diff in diffs) {
                        if (diffs.hasOwnProperty(diff)) {
                            if($.isArray(diffs[diff])) {
                                // check if diff is just num == string
                                if((typeof(diffs[diff][0]) == "string" && typeof(diffs[diff][1]) == "number" && parseFloat(diffs[diff][0]) == diffs[diff][1]) || (typeof(diffs[diff][1]) == "string" && typeof(diffs[diff][0]) == "number" && parseFloat(diffs[diff][1]) == diffs[diff][0])) {
                                    delete diffs[diff];
                                }

                                // v5.0.19 will not be applicable anymore because the $.each above makes sure that diffs[diff].length == 2.
                                /*
                                 if(diff == "draggable" && diffs[diff].length == 1) {
                                 if(!diffs[diff][0].isdraggable) {
                                 // from undefined to draggable false
                                 delete diffs[diff];
                                 } else {
                                 // from undefined to draggable true
                                 if(typeof(tostate[j].draggable) != "undefined" && tostate[j].draggable.isdraggable) {
                                 diffs[diff] = [fromstate[i].draggable, tostate[j].draggable]
                                 }
                                 }
                                 }
                                 */
                            }
                        }
                    }

                    // variable position and size
                    if(typeof(diffs.width) != "undefined" || typeof(diffs.wtype) != "undefined" || typeof(diffs.height) != "undefined" || typeof(diffs.htype) != "undefined" || typeof(diffs.left) != "undefined" || typeof(diffs.hpos) != "undefined" || typeof(diffs.top) != "undefined" || typeof(diffs.vpos) != "undefined") {
                        var realDimsFrom = prx.items.getRealDimsAndPos(fromstate[i], type, index, fromstateindex)// real [width,height,left,top]
                        var realDimsTo = prx.items.getRealDimsAndPos(tostate[j], type, index, tostateindex)// real [width,height,left,top]

                        if(typeof(diffs.wtype) != "undefined") {
                            delete diffs.wtype;
                        }
                        if(realDimsFrom[0] != realDimsTo[0]) {
                            diffs.width = [realDimsFrom[0], realDimsTo[0]];
                        } else if(typeof(diffs.width) != "undefined") {
                            delete diffs.width;
                        }

                        if(typeof(diffs.htype) != "undefined") {
                            delete diffs.htype;
                        }
                        if(realDimsFrom[1] != realDimsTo[1]){
                            diffs.height = [realDimsFrom[1], realDimsTo[1]];
                        } else if(typeof(diffs.height) != "undefined") {
                            delete diffs.height;
                        }

                        if(typeof(diffs.hpos) != "undefined") {
                            delete diffs.hpos;
                        }
                        if(realDimsFrom[2] != realDimsTo[2]){
                            diffs.left = [realDimsFrom[2], realDimsTo[2]];
                        } else if(typeof(diffs.left) != "undefined") {
                            delete diffs.left;
                        }

                        if(typeof(diffs.vpos) != "undefined") {
                            delete diffs.vpos;
                        }
                        if(realDimsFrom[3] != realDimsTo[3]){
                            diffs.top = [realDimsFrom[3], realDimsTo[3]];
                        } else if(typeof(diffs.top) != "undefined") {
                            delete diffs.top;
                        }
                    }

                    if(typeof(diffs.visible) != "undefined") {
                        if(diffs.visible[1] == false) { // target visibility
                            diffs.visible = [fromstate[i].opacity, 0]
                        } else {
                            diffs.visible = [0, tostate[j].opacity]
                        }
                    }

                    // dynamic properties.
                    if(typeof(prx.types[fromstate[i].type]) != "undefined" && typeof(prx.types[fromstate[i].type].dynamicProperties) != "undefined") {
                        var dynprop = prx.types[fromstate[i].type].dynamicProperties.data;
                        if(typeof(diffs[dynprop]) != "undefined") {
                            // delete and rename for easier identification
                            delete diffs[dynprop];

                            // if something has been added/removed, then rerender all -
                            // because how will i know which one was added/removed
                            if(fromstate[i][dynprop].length != tostate[j][dynprop].length) {
                                diffs.dynamicProperties = { type: '' }
                            } else {
                                // if they are equal length, I assume that only changes have been made.
                                // i cant know if they've been reordered
                                /*
                                 diffs.dynamicProperties = [];
                                 for(var k=0;k<fromstate[i][dynprop].length;k++) {
                                 diffs.dynamicProperties.push(jsondiffpatch.diff(fromstate[i][dynprop][k], tostate[j][dynprop][k]))
                                 }
                                 */

                                // different than editor
                                for(var k=0;k<fromstate[i][dynprop].length;k++) {
                                    var dyndiffs = jsondiffpatch.diff(fromstate[i][dynprop][k], tostate[j][dynprop][k]);
                                    if(typeof(dyndiffs) != "undefined") {
                                        for (var dyndiff in dyndiffs) {
                                            if (dyndiffs.hasOwnProperty(dyndiff)) {
                                                if($.isArray(dyndiffs[dyndiff])) {
                                                    // property has been deleted, does not exist, should be undefined
                                                    if(dyndiffs[dyndiff].length == 3 && dyndiffs[dyndiff][1] == 0 && dyndiffs[dyndiff][2] == 0) {
                                                        dyndiffs[dyndiff][1] = undefined;
                                                        delete dyndiffs[dyndiff][2];
                                                    }
                                                    diffs['dynamicProperties-' + k + '-' + dyndiff] = dyndiffs[dyndiff];
                                                } else {
                                                    diffs['dynamicProperties-' + k + '-' + dyndiff] = [fromstate[i][dynprop][k][dyndiff], tostate[j][dynprop][k][dyndiff]];
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if(Object.keys(diffs).length > 0) {
                        var change = {
                            type: 'changed-component',
                            id: fromstate[i].id,
                            componentType: fromstate[i].type,
                            changes: diffs
                        };

                        if(typeof(diffs.width) != "undefined" || typeof(diffs.height) != "undefined") {
                            change.item = tostate[j];
                        }

                        changes.push(change)
                    }
                }
            }
        }
    }

    prx.states._changes[fromstateid + ":" + tostateid] = changes;

    return $.evalJSON($.toJSON(changes));
}


prx.variables = {};
prx.variables._regEx = new RegExp('{[a-z][-a-z0-9\._]*}', 'gi');
prx.variables._triggerData = {};

// VARIABLES FUNCTIONS
prx.variables.prepare = function() {
    for (var key in prx.variables._variables) {
        if (prx.variables._variables.hasOwnProperty(key)) {
            if (typeof(prx.variables._variables[key].type) == "undefined") {
                prx.variables._variables[key].type = "text";
            }
            if (typeof(prx.variables._variables[key].value) == "undefined") {
                prx.variables._variables[key].value = "";
            }
            if (typeof(prx.variables._variables[key].evaluate) == "undefined") {
                prx.variables._variables[key].evaluate = true;
            }
        }
    }
}

prx.variables.paramsExist = function (value) {
    try {
        if (value.search(prx.variables._regEx)>-1) {
            return true;
        } else {
            return false;
        }
    } catch(err) {
        return false;
    }

}

prx.variables.removeFirstLast = function(text) {
    return text.substring(1,text.length-1);
}

prx.variables.read = function(key) {
    if (typeof(prx.variables._variables[key]) != "undefined") {
        if (typeof(prx.variables._variables[key].parsed)=="undefined") {
            prx.variables.recursivelyEvaluate(prx.variables._variables[key].value,key);
        }
        return prx.variables._variables[key].parsed;
    } else {
        return false;
    }
}

prx.variables.recursivelyEvaluate = function(value, key, update) {

    if (update) {
        if (key.length > 0) {
            if (typeof(prx.variables._variables[key]) != "undefined") {
                if (typeof(prx.variables._variables[key].parsed) != "undefined") {
                    delete prx.variables._variables[key].parsed;
                }
            }
        }
    } else {
        update = false;

        if (key.length > 0) {
            if (typeof(prx.variables._variables[key]) != "undefined") {
                if (typeof(prx.variables._variables[key].parsed) != "undefined") {
                    return prx.variables._variables[key].parsed;
                }
            }
        }
    }



    if (prx.variables.paramsExist(value)) {
        var _matches = value.match(prx.variables._regEx);
        if (_matches != null) {
            for (var i = 0; i < _matches.length; i++) {

                var _toReplace = _matches[i];
                var _key = prx.variables.removeFirstLast(_matches[i]);
                if (!((key == _key) && (prx.variables._variables[key].value == key))) { // avoid endless loop of self call
                    try {
                        value = value.replace(_toReplace, prx.variables.recursivelyEvaluate(prx.variables._variables[_key].value, _key, update));
                    } catch(err) {
                        value = value.replace(_toReplace, ""); // just replace faulty param with empty string
                    }
                } else {
                    //value = prx.variables._variables[key].parsed;
                    value = value.replace(_toReplace, ""); // just replace faulty param with empty string
                }
                /*
                 if (key != _key) { // avoid endless loop of self call
                 try {
                 value = value.replace(_toReplace, prx.variables.recursivelyEvaluate(prx.variables._variables[_key].value, _key, update));
                 } catch(err) {
                 value = value.replace(_toReplace, ""); // just replace faulty param with empty string
                 }
                 } else {
                 //value = prx.variables._variables[key].parsed;
                 value = value.replace(_toReplace, ""); // just replace faulty param with empty string
                 }
                 */
            }
        }
    } else {
        if (typeof(key) != "undefined") {
            if (typeof(prx.variables._variables[key]) != "undefined") {
                /*
                 switch (prx.variables._variables[key].type) {
                 case "numeric":
                 try {
                 value = eval(value);
                 } catch(err){} // in case evaluate string then return string
                 break;
                 default:
                 }
                 */
                if (prx.variables._variables[key].evaluate) {
                    try {
                        value = eval(value);
                    } catch(e) {};
                }
            }
        }
    }

    if (typeof(_key) != "undefined") {
        if (typeof(prx.variables._variables[key]) != "undefined") {
            /*
             switch (prx.variables._variables[key].type) {
             case "numeric":
             try {
             value = eval(value);
             } catch(err){} // in case evaluate string then return string
             break;
             default:
             }
             */
            if (prx.variables._variables[key].evaluate) {
                value = eval(value);
            }
        }
    }



    if (key.length > 0) {
        if (typeof(prx.variables._variables[key]) != "undefined") {
            prx.variables._variables[key].parsed = value;
        }
    }

    if (key.length > 0) {
        if (typeof(prx.variables._variables[key]) != "undefined") {
            switch (prx.variables._variables[key].type) {
                case "text":
                    //value = value.toString();
                    break;
                case "numeric":
                    value = parseFloat(value);
                    break;
                case "boolean":
                    value = (value) ? true : false;
                    break;
            }
        }
    }

    return value;
}



/* HELPER FUNCTIONS FOR ACCESS FROM PREVIEW AND APPS */

prx.interface = {};

prx.interface.goToPage = function(pageid) {

    _currentpage = '#'+prx.navigation._activepage;

    prx.navigation._gobackstack.push(_currentpage);
    if (prx.navigation._gobackstack.length >= 50) {
        prx.navigation._gobackstack.shift();
    }

    prx.navigation.changePage($('#p-'+pageid), {
        allowSamePageTransition: true
    });
}

prx.interface.getActivePageId = function(){
    return prx.navigation._activepage.substring(2);
}

prx.interface.triggerKeydownAction = function(e) {
    //$(document).trigger(e);
    $('body').trigger(e);
}

prx.interface.triggerOrientationChange = function() {
    prx.orientation.change();
}

prx.interface.triggerBodyOrientationChange = function() {
    prx.orientation.changeBody();
}

prx.interface.changeInitialScale = function(newInitialScale) {
    var viewport = document.querySelector("meta[name=viewport]");
    if(viewport != null) {
        var settings = ['minimum-scale','maximum-scale','initial-scale'];
        var content = viewport.content.split(',');

        for(var i=0;i<settings.length;i++) {
            for(var j=0;j<content.length;j++) {
                if(content[j].trim().indexOf(settings[i] + '=') == 0) {
                    //content.splice(j,1);
                    content[j] = settings[i] + '=' + newInitialScale;
                    break;
                }
            }
        }

        viewport.content = content.join(',');
    }
}

prx.interface.changeTargetDensityDPI = function(newTD) {
    var viewport = document.querySelector("meta[name=viewport]");
    if(viewport != null) {
        var settings = ['target-densitydpi'];
        var content = viewport.content.split(',');

        for(var i=0;i<settings.length;i++) {
            for(var j=0;j<content.length;j++) {
                if(content[j].trim().indexOf(settings[i] + '=') == 0) {
                    content[j] = settings[i] + '=' + newTD;
                    break;
                }
            }
        }

        viewport.content = content.join(',');
    }
}

prx.interface.changeViewport = function(newViewport) {
    var viewport = document.querySelector("meta[name=viewport]");
    if(viewport != null) {
        viewport.content = newViewport;
    }
}

prx.interface.devices = {};
prx.interface.devices.getDeviceInfo = function(){
    return prx.devices[prx.device];
}

prx.interface.inProtoIOsApp = function(){
    prx.inProtoApp = true;
    prx.inProtoIOsApp = true;
}


prx.interface.inProtoAndroidApp = function(){
    prx.inProtoApp = true;
    prx.inProtoAndroidApp = true;
}

// duplicate other used functinos under interface for maintainability.

prx.interface.showReloadingLoader = prx.loading.showReloadingLoader;
prx.interface.showActions = {};
prx.interface.showActions.show = prx.showActions.show;
prx.interface.showActions.hide = prx.showActions.hide;
prx.interface.stc = {};
prx.interface.stc.screens = {};
prx.interface.stc.screens.getIndexFromId = prx.stc.screens.getIndexFromId;

// need to keep the original functions for backwards compatibility with apps

prx.goToPage = prx.interface.goToPage;
prx.triggerKeydownAction = prx.interface.triggerKeydownAction;
prx.changeInitialScale = prx.interface.changeInitialScale;
prx.changeTargetDensityDPI = prx.interface.changeTargetDensityDPI;
prx.changeViewport = prx.interface.changeViewport;

prx.changeOrientation = prx.orientation.change;

//@koala-prepend "../../common/js/prx/components/_utils.js"
//@koala-prepend "../../common/js/prx/components/_components-helper.js"
//@koala-prepend "../../common/js/prx/components/_css.js"

//@koala-prepend "components/_utils.js"

//@koala-prepend "components/compatibility/compatibility.js"
//@koala-prepend "components/items/items.js"
//@koala-prepend "components/stc/stc.js"
//@koala-prepend "components/_actions.js"
//@koala-prepend "components/_actions-library.js"
//@koala-prepend "components/_canvas.js"
//@koala-prepend "components/_draggable.js"
//@koala-prepend "components/_easing.js"
//@koala-prepend "components/_fonts.js"
//@koala-prepend "components/_helper.js"
//@koala-prepend "components/_loading.js"
//@koala-prepend "components/_navigation.js"
//@koala-prepend "components/_orientation.js"
//@koala-prepend "components/_overlay.js"
//@koala-prepend "components/_screen-transitions.js"
//@koala-prepend "components/_scrollable.js"
//@koala-prepend "components/_show-actions.js"
//@koala-prepend "components/_states.js"
//@koala-prepend "components/_utils.js"
//@koala-prepend "components/_variables.js"

// needs to be last, it accesses previously defined functions
//@koala-prepend "components/_interface.js"

var prx = window.prx || {};

prx.editor = false;

prx.project = {};

prx.pages = [];
prx.symbols = [];
prx.templates = [];

prx.allItems = {};

prx.types = {};
prx.devices = {};
prx.components = {};
prx.url = {};

prx.greensockForce3D = false;
prx._imgs_version = 0;


//@koala-prepend "../../../js/jquery-2.0.3.min.js"
//@koala-prepend "../../../js/jquery-migrate-1.2.1.min.js"

//@koala-prepend "../../../js/greensock/ThrowPropsPlugin.min.js"
//@koala-prepend "../../../js/greensock/Draggable.min.js"
//@koala-prepend "../../../js/greensock/TweenMax.min.js"

//@koala-prepend "../../../js/bezier-easing.js"
//@koala-prepend "../../../js/jquery.json-2.2.min.js"
//@koala-prepend "../../../js/iscroll-zoom.js"

//@koala-prepend "../../../js/jsondiffpatch.js"

//@koala-prepend "../../../js/libs/modernizr-2.0.6.min.js"

//@koala-prepend "../../../js/hammer.js"
//@koala-prepend "../../../js/jquery.hammer.js"
//@koala-prepend "../../../js/helper.js"


//@koala-prepend "player-engine-development-min.js"

