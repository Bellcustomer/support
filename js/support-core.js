/* Minification failed. Returning unminified contents.
(623,46-47): run-time error JS1195: Expected expression: >
(625,10-11): run-time error JS1195: Expected expression: )
(632,53-54): run-time error JS1195: Expected expression: )
(632,56-57): run-time error JS1195: Expected expression: >
(634,9-10): run-time error JS1002: Syntax error: }
(637,9-10): run-time error JS1002: Syntax error: }
(638,57-58): run-time error JS1004: Expected ';': {
(646,10-11): run-time error JS1195: Expected expression: )
(649,33-34): run-time error JS1004: Expected ';': {
(674,41-42): run-time error JS1195: Expected expression: >
(676,14-15): run-time error JS1195: Expected expression: )
(677,56-57): run-time error JS1195: Expected expression: )
(677,59-60): run-time error JS1195: Expected expression: >
(679,14-15): run-time error JS1195: Expected expression: )
(680,34-35): run-time error JS1197: Too many errors. The file might not be a JavaScript file: .
(669,5-38): run-time error JS1301: End of file encountered before function is properly closed: function initNavTabButtonEvents()
(680,55-56): run-time error JS1195: Expected expression: )
(680,58-59): run-time error JS1195: Expected expression: >
(680,60-61): run-time error JS1197: Too many errors. The file might not be a JavaScript file: {
 */
/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);;
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||y(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=C(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function H(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[H('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function V(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=-1!==['left','right'].indexOf(e.placement),p=-1!==e.placement.indexOf('-'),s=i.width%2==n.width%2,d=1==i.width%2&&1==n.width%2,a=function(e){return e},l=t?r||p||s?$:Z:a,f=t?$:a;return{left:l(d&&!p&&t?n.left-1:n.left),top:f(n.top),bottom:f(n.bottom),right:l(n.right)}}function K(e,t,o){var n=C(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(C(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=H('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),y&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=C(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=C(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=H('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),V(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map
;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0 
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
"top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});;
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,h){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,h=h&&h.hasOwnProperty("default")?h.default:h;var r,n,o,a,c,u,f,d,g,_,m,p,v,y,E,C,T,b,S,I,A,D,w,N,O,k,P,j,H,L,R,x,W,U,q,F,K,M,Q,B,V,Y,z,J,Z,G,$,X,tt,et,nt,it,rt,ot,st,at,lt,ct,ht,ut,ft,dt,gt,_t,mt,pt,vt,yt,Et,Ct,Tt,bt,St,It,At,Dt,wt,Nt,Ot,kt,Pt,jt,Ht,Lt,Rt,xt,Wt,Ut,qt,Ft,Kt,Mt,Qt,Bt,Vt,Yt,zt,Jt,Zt,Gt,$t,Xt,te,ee,ne,ie,re,oe,se,ae,le,ce,he,ue,fe,de,ge,_e,me,pe,ve,ye,Ee,Ce,Te,be,Se,Ie,Ae,De,we,Ne,Oe,ke,Pe,je,He,Le,Re,xe,We,Ue,qe,Fe,Ke,Me,Qe,Be,Ve,Ye,ze,Je,Ze,Ge,$e,Xe,tn,en,nn,rn,on,sn,an,ln,cn,hn,un,fn,dn,gn,_n,mn,pn,vn,yn,En,Cn,Tn,bn,Sn,In,An,Dn,wn,Nn,On,kn,Pn,jn,Hn,Ln,Rn,xn,Wn,Un,qn,Fn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),Kn=(n="alert",a="."+(o="bs.alert"),c=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",g="show",_=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=Fn.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(g),r(e).hasClass(d)){var t=Fn.getTransitionDurationFromElement(e);r(e).one(Fn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),r.fn[n]=_._jQueryInterface,r.fn[n].Constructor=_,r.fn[n].noConflict=function(){return r.fn[n]=c,_._jQueryInterface},_),Mn=(p="button",y="."+(v="bs.button"),E=".data-api",C=(m=e).fn[p],T="active",b="btn",I='[data-toggle^="button"]',A='[data-toggle="buttons"]',D="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:(S="focus")+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(A)[0];if(n){var i=this._element.querySelector(D);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))t=!1;else{var r=n.querySelector(w);r&&m(r).removeClass(T)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(T),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),t&&m(this._element).toggleClass(T)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),n}(),m(document).on(O.CLICK_DATA_API,I,function(t){t.preventDefault();var e=t.target;m(e).hasClass(b)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,I,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(S,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=C,k._jQueryInterface},k),Qn=(j="carousel",L="."+(H="bs.carousel"),R=".data-api",x=(P=e).fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},q="next",F="prev",K="left",M="right",Q={SLIDE:"slide"+L,SLID:"slid"+L,KEYDOWN:"keydown"+L,MOUSEENTER:"mouseenter"+L,MOUSELEAVE:"mouseleave"+L,TOUCHEND:"touchend"+L,LOAD_DATA_API:"load"+L+R,CLICK_DATA_API:"click"+L+R},B="carousel",V="active",Y="slide",z="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",G="carousel-item-prev",$=".active",X=".active.carousel-item",tt=".carousel-item",et=".carousel-item-next, .carousel-item-prev",nt=".carousel-indicators",it="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',ot=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=this._element.querySelector(nt),this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(q)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(et)&&(Fn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(X);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?q:F;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(L),P.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),Fn.typeCheckConfig(j,t,U),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===q,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(X)),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));P(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&P(n).addClass(V)}},t._slide=function(t,e){var n,i,r,o=this,s=this._element.querySelector(X),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(t===q?(n=J,i=Z,r=K):(n=z,i=G,r=M),l&&P(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(P(this._element).hasClass(Y)){P(l).addClass(i),Fn.reflow(l),P(s).addClass(n),P(l).addClass(n);var f=Fn.getTransitionDurationFromElement(s);P(s).one(Fn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(V),P(s).removeClass(V+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return P(o._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(s).removeClass(V),P(l).addClass(V),this._isSliding=!1,P(this._element).trigger(u);h&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(H),e=l({},W,P(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),P(this).data(H,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=Fn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=l({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(P(n),i),r&&P(n).data(H).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return W}}]),o}(),P(document).on(Q.CLICK_DATA_API,it,ot._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=P(t[e]);ot._jQueryInterface.call(i,i.data())}}),P.fn[j]=ot._jQueryInterface,P.fn[j].Constructor=ot,P.fn[j].noConflict=function(){return P.fn[j]=x,ot._jQueryInterface},ot),Bn=(at="collapse",ct="."+(lt="bs.collapse"),ht=(st=e).fn[at],ut={toggle:!0,parent:""},ft={toggle:"boolean",parent:"(string|element)"},dt={SHOW:"show"+ct,SHOWN:"shown"+ct,HIDE:"hide"+ct,HIDDEN:"hidden"+ct,CLICK_DATA_API:"click"+ct+".data-api"},gt="show",_t="collapse",mt="collapsing",pt="collapsed",vt="width",yt="height",Et=".show, .collapsing",Ct='[data-toggle="collapse"]',Tt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Ct)),i=0,r=n.length;i<r;i++){var o=n[i],s=Fn.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){st(this._element).hasClass(gt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!st(this._element).hasClass(gt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Et)).filter(function(t){return t.getAttribute("data-parent")===n._config.parent})).length&&(t=null),!(t&&(e=st(t).not(this._selector).data(lt))&&e._isTransitioning))){var i=st.Event(dt.SHOW);if(st(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(st(t).not(this._selector),"hide"),e||st(t).data(lt,null));var r=this._getDimension();st(this._element).removeClass(_t).addClass(mt),this._element.style[r]=0,this._triggerArray.length&&st(this._triggerArray).removeClass(pt).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){st(n._element).removeClass(mt).addClass(_t).addClass(gt),n._element.style[r]="",n.setTransitioning(!1),st(n._element).trigger(dt.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&st(this._element).hasClass(gt)){var e=st.Event(dt.HIDE);if(st(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Fn.reflow(this._element),st(this._element).addClass(mt).removeClass(_t).removeClass(gt);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=Fn.getSelectorFromElement(o);if(null!==s)st([].slice.call(document.querySelectorAll(s))).hasClass(gt)||st(o).addClass(pt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=Fn.getTransitionDurationFromElement(this._element);st(this._element).one(Fn.TRANSITION_END,function(){t.setTransitioning(!1),st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){st.removeData(this._element,lt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ut,t)).toggle=Boolean(t.toggle),Fn.typeCheckConfig(at,t,ft),t},t._getDimension=function(){return st(this._element).hasClass(vt)?vt:yt},t._getParent=function(){var n=this,t=null;Fn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return st(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=st(t).hasClass(gt);e.length&&st(e).toggleClass(pt,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Fn.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=st(this),e=t.data(lt),n=l({},ut,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(lt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ut}}]),a}(),st(document).on(dt.CLICK_DATA_API,Ct,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=st(this),e=Fn.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));st(i).each(function(){var t=st(this),e=t.data(lt)?"toggle":n.data();Tt._jQueryInterface.call(t,e)})}),st.fn[at]=Tt._jQueryInterface,st.fn[at].Constructor=Tt,st.fn[at].noConflict=function(){return st.fn[at]=ht,Tt._jQueryInterface},Tt),Vn=(St="dropdown",At="."+(It="bs.dropdown"),Dt=".data-api",wt=(bt=e).fn[St],Nt=new RegExp("38|40|27"),Ot={HIDE:"hide"+At,HIDDEN:"hidden"+At,SHOW:"show"+At,SHOWN:"shown"+At,CLICK:"click"+At,CLICK_DATA_API:"click"+At+Dt,KEYDOWN_DATA_API:"keydown"+At+Dt,KEYUP_DATA_API:"keyup"+At+Dt},kt="disabled",Pt="show",jt="dropup",Ht="dropright",Lt="dropleft",Rt="dropdown-menu-right",xt="position-static",Wt='[data-toggle="dropdown"]',Ut=".dropdown form",qt=".dropdown-menu",Ft=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Mt="top-start",Qt="top-end",Bt="bottom-start",Vt="bottom-end",Yt="right-start",zt="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Gt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!bt(this._element).hasClass(kt)){var t=c._getParentFromElement(this._element),e=bt(this._menu).hasClass(Pt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=bt.Event(Ot.SHOW,n);if(bt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof h)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Fn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&bt(t).addClass(xt),this._popper=new h(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===bt(t).closest(Ft).length&&bt(document.body).children().on("mouseover",null,bt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),bt(this._menu).toggleClass(Pt),bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN,n))}}}},t.dispose=function(){bt.removeData(this._element,It),bt(this._element).off(At),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;bt(this._element).on(Ot.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,bt(this._element).data(),t),Fn.typeCheckConfig(St,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=bt(this._element.parentNode),e=Bt;return t.hasClass(jt)?(e=Mt,bt(this._menu).hasClass(Rt)&&(e=Qt)):t.hasClass(Ht)?e=Yt:t.hasClass(Lt)?e=zt:bt(this._menu).hasClass(Rt)&&(e=Vt),e},t._detectNavbar=function(){return 0<bt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=bt(this).data(It);if(t||(t=new c(this,"object"==typeof e?e:null),bt(this).data(It,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Wt)),n=0,i=e.length;n<i;n++){var r=c._getParentFromElement(e[n]),o=bt(e[n]).data(It),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),o){var a=o._menu;if(bt(r).hasClass(Pt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&bt.contains(r,t.target))){var l=bt.Event(Ot.HIDE,s);bt(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&bt(document.body).children().off("mouseover",null,bt.noop),e[n].setAttribute("aria-expanded","false"),bt(a).removeClass(Pt),bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=Fn.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||bt(t.target).closest(qt).length)):Nt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!bt(this).hasClass(kt))){var e=c._getParentFromElement(this),n=bt(e).hasClass(Pt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=e.querySelector(Wt);bt(o).trigger("focus")}bt(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}(),bt(document).on(Ot.KEYDOWN_DATA_API,Wt,Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API,qt,Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API+" "+Ot.KEYUP_DATA_API,Gt._clearMenus).on(Ot.CLICK_DATA_API,Wt,function(t){t.preventDefault(),t.stopPropagation(),Gt._jQueryInterface.call(bt(this),"toggle")}).on(Ot.CLICK_DATA_API,Ut,function(t){t.stopPropagation()}),bt.fn[St]=Gt._jQueryInterface,bt.fn[St].Constructor=Gt,bt.fn[St].noConflict=function(){return bt.fn[St]=wt,Gt._jQueryInterface},Gt),Yn=(Xt="modal",ee="."+(te="bs.modal"),ne=($t=e).fn[Xt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},re={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},oe={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){$t(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=$t.Event(oe.SHOW,{relatedTarget:t});$t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),$t(document.body).addClass(le),this._setEscapeEvent(),this._setResizeEvent(),$t(this._element).on(oe.CLICK_DISMISS,de,function(t){return e.hide(t)}),$t(this._dialog).on(oe.MOUSEDOWN_DISMISS,function(){$t(e._element).one(oe.MOUSEUP_DISMISS,function(t){$t(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=$t.Event(oe.HIDE);if($t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=$t(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),$t(document).off(oe.FOCUSIN),$t(this._element).removeClass(he),$t(this._element).off(oe.CLICK_DISMISS),$t(this._dialog).off(oe.MOUSEDOWN_DISMISS),i){var r=Fn.getTransitionDurationFromElement(this._element);$t(this._element).one(Fn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){$t.removeData(this._element,te),$t(window,document,this._element,this._backdrop).off(ee),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),Fn.typeCheckConfig(Xt,t,re),t},t._showElement=function(t){var e=this,n=$t(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Fn.reflow(this._element),$t(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=$t.Event(oe.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,$t(e._element).trigger(i)};if(n){var o=Fn.getTransitionDurationFromElement(this._element);$t(this._dialog).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===$t(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?$t(this._element).on(oe.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||$t(this._element).off(oe.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?$t(window).on(oe.RESIZE,function(t){return e.handleUpdate(t)}):$t(window).off(oe.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){$t(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),$t(t._element).trigger(oe.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&($t(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=$t(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),$t(this._backdrop).appendTo(document.body),$t(this._element).on(oe.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Fn.reflow(this._backdrop),$t(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){$t(this._backdrop).removeClass(he);var r=function(){e._removeBackdrop(),t&&t()};if($t(this._element).hasClass(ce)){var o=Fn.getTransitionDurationFromElement(this._backdrop);$t(this._backdrop).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));$t(t).each(function(t,e){var n=e.style.paddingRight,i=$t(e).css("padding-right");$t(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),$t(e).each(function(t,e){var n=e.style.marginRight,i=$t(e).css("margin-right");$t(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=$t(document.body).css("padding-right");$t(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));$t(t).each(function(t,e){var n=$t(e).data("padding-right");$t(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));$t(e).each(function(t,e){var n=$t(e).data("margin-right");"undefined"!=typeof n&&$t(e).css("margin-right",n).removeData("margin-right")});var n=$t(document.body).data("padding-right");$t(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=$t(this).data(te),e=l({},ie,$t(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),$t(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return ie}}]),r}(),$t(document).on(oe.CLICK_DATA_API,fe,function(t){var e,n=this,i=Fn.getSelectorFromElement(this);i&&(e=document.querySelector(i));var r=$t(e).data(te)?"toggle":l({},$t(e).data(),$t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=$t(e).one(oe.SHOW,function(t){t.isDefaultPrevented()||o.one(oe.HIDDEN,function(){$t(n).is(":visible")&&n.focus()})});me._jQueryInterface.call($t(e),r,this)}),$t.fn[Xt]=me._jQueryInterface,$t.fn[Xt].Constructor=me,$t.fn[Xt].noConflict=function(){return $t.fn[Xt]=ne,me._jQueryInterface},me),zn=(ve="tooltip",Ee="."+(ye="bs.tooltip"),Ce=(pe=e).fn[ve],Te="bs-tooltip",be=new RegExp("(^|\\s)"+Te+"\\S+","g"),Ae={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(Ie={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},we="out",Ne={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:(De="show")+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Oe="fade",ke="show",Pe=".tooltip-inner",je=".arrow",He="hover",Le="focus",Re="click",xe="manual",We=function(){function i(t,e){if("undefined"==typeof h)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=pe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(pe(this.getTipElement()).hasClass(ke))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),pe.removeData(this.element,this.constructor.DATA_KEY),pe(this.element).off(this.constructor.EVENT_KEY),pe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&pe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===pe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=pe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){pe(this.element).trigger(t);var n=pe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Fn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&pe(i).addClass(Oe);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:pe(document).find(this.config.container);pe(i).data(this.constructor.DATA_KEY,this),pe.contains(this.element.ownerDocument.documentElement,this.tip)||pe(i).appendTo(a),pe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new h(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:je},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),pe(i).addClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().on("mouseover",null,pe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,pe(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(pe(this.tip).hasClass(Oe)){var c=Fn.getTransitionDurationFromElement(this.tip);pe(this.tip).one(Fn.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=pe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),pe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(pe(this.element).trigger(i),!i.isDefaultPrevented()){if(pe(n).removeClass(ke),"ontouchstart"in document.documentElement&&pe(document.body).children().off("mouseover",null,pe.noop),this._activeTrigger[Re]=!1,this._activeTrigger[Le]=!1,this._activeTrigger[He]=!1,pe(this.tip).hasClass(Oe)){var o=Fn.getTransitionDurationFromElement(n);pe(n).one(Fn.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){pe(this.getTipElement()).addClass(Te+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||pe(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(pe(t.querySelectorAll(Pe)),this.getTitle()),pe(t).removeClass(Oe+" "+ke)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?pe(e).parent().is(t)||t.empty().append(e):t.text(pe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return Ie[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)pe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==xe){var e=t===He?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===He?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;pe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}pe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Le:He]=!0),pe(e.getTipElement()).hasClass(ke)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||pe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),pe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Le:He]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,pe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Fn.typeCheckConfig(ve,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=pe(this.getTipElement()),e=t.attr("class").match(be);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(pe(t).removeClass(Oe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=pe(this).data(ye),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),pe(this).data(ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ae}},{key:"NAME",get:function(){return ve}},{key:"DATA_KEY",get:function(){return ye}},{key:"Event",get:function(){return Ne}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}(),pe.fn[ve]=We._jQueryInterface,pe.fn[ve].Constructor=We,pe.fn[ve].noConflict=function(){return pe.fn[ve]=Ce,We._jQueryInterface},We),Jn=(qe="popover",Ke="."+(Fe="bs.popover"),Me=(Ue=e).fn[qe],Qe="bs-popover",Be=new RegExp("(^|\\s)"+Qe+"\\S+","g"),Ve=l({},zn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ye=l({},zn.DefaultType,{content:"(string|element|function)"}),ze="fade",Ze=".popover-header",Ge=".popover-body",$e={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:(Je="show")+Ke,SHOWN:"shown"+Ke,INSERTED:"inserted"+Ke,CLICK:"click"+Ke,FOCUSIN:"focusin"+Ke,FOCUSOUT:"focusout"+Ke,MOUSEENTER:"mouseenter"+Ke,MOUSELEAVE:"mouseleave"+Ke},Xe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){Ue(this.getTipElement()).addClass(Qe+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||Ue(this.config.template)[0],this.tip},r.setContent=function(){var t=Ue(this.getTipElement());this.setElementContent(t.find(Ze),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ge),e),t.removeClass(ze+" "+Je)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=Ue(this.getTipElement()),e=t.attr("class").match(Be);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Ue(this).data(Fe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Ue(this).data(Fe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return Ve}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Fe}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Ke}},{key:"DefaultType",get:function(){return Ye}}]),i}(zn),Ue.fn[qe]=Xe._jQueryInterface,Ue.fn[qe].Constructor=Xe,Ue.fn[qe].noConflict=function(){return Ue.fn[qe]=Me,Xe._jQueryInterface},Xe),Zn=(en="scrollspy",rn="."+(nn="bs.scrollspy"),on=(tn=e).fn[en],sn={offset:10,method:"auto",target:""},an={offset:"number",method:"string",target:"(string|element)"},ln={ACTIVATE:"activate"+rn,SCROLL:"scroll"+rn,LOAD_DATA_API:"load"+rn+".data-api"},cn="dropdown-item",hn="active",un='[data-spy="scroll"]',fn=".active",dn=".nav, .list-group",gn=".nav-link",_n=".nav-item",mn=".list-group-item",pn=".dropdown",vn=".dropdown-item",yn=".dropdown-toggle",En="offset",Cn="position",Tn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+gn+","+this._config.target+" "+mn+","+this._config.target+" "+vn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn(this._scrollElement).on(ln.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?En:Cn,r="auto"===this._config.method?t:this._config.method,o=r===Cn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=Fn.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[tn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){tn.removeData(this._element,nn),tn(this._scrollElement).off(rn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},sn,"object"==typeof t&&t?t:{})).target){var e=tn(t.target).attr("id");e||(e=Fn.getUID(en),tn(t.target).attr("id",e)),t.target="#"+e}return Fn.typeCheckConfig(en,t,an),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=tn([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(cn)?(n.closest(pn).find(yn).addClass(hn),n.addClass(hn)):(n.addClass(hn),n.parents(dn).prev(gn+", "+mn).addClass(hn),n.parents(dn).prev(_n).children(gn).addClass(hn)),tn(this._scrollElement).trigger(ln.ACTIVATE,{relatedTarget:e})},t._clear=function(){var t=[].slice.call(document.querySelectorAll(this._selector));tn(t).filter(fn).removeClass(hn)},n._jQueryInterface=function(e){return this.each(function(){var t=tn(this).data(nn);if(t||(t=new n(this,"object"==typeof e&&e),tn(this).data(nn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.3"}},{key:"Default",get:function(){return sn}}]),n}(),tn(window).on(ln.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(un)),e=t.length;e--;){var n=tn(t[e]);Tn._jQueryInterface.call(n,n.data())}}),tn.fn[en]=Tn._jQueryInterface,tn.fn[en].Constructor=Tn,tn.fn[en].noConflict=function(){return tn.fn[en]=on,Tn._jQueryInterface},Tn),Gn=(In="."+(Sn="bs.tab"),An=(bn=e).fn.tab,Dn={HIDE:"hide"+In,HIDDEN:"hidden"+In,SHOW:"show"+In,SHOWN:"shown"+In,CLICK_DATA_API:"click"+In+".data-api"},wn="dropdown-menu",Nn="active",On="disabled",kn="fade",Pn="show",jn=".dropdown",Hn=".nav, .list-group",Ln=".active",Rn="> li > .active",xn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wn=".dropdown-toggle",Un="> .dropdown-menu .active",qn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&bn(this._element).hasClass(Nn)||bn(this._element).hasClass(On))){var t,i,e=bn(this._element).closest(Hn)[0],r=Fn.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?Rn:Ln;i=(i=bn.makeArray(bn(e).find(o)))[i.length-1]}var s=bn.Event(Dn.HIDE,{relatedTarget:this._element}),a=bn.Event(Dn.SHOW,{relatedTarget:i});if(i&&bn(i).trigger(s),bn(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=document.querySelector(r)),this._activate(this._element,e);var l=function(){var t=bn.Event(Dn.HIDDEN,{relatedTarget:n._element}),e=bn.Event(Dn.SHOWN,{relatedTarget:i});bn(i).trigger(t),bn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){bn.removeData(this._element,Sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?bn(e).find(Rn):bn(e).children(Ln))[0],o=n&&r&&bn(r).hasClass(kn),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=Fn.getTransitionDurationFromElement(r);bn(r).one(Fn.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){bn(e).removeClass(Pn+" "+Nn);var i=bn(e.parentNode).find(Un)[0];i&&bn(i).removeClass(Nn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(bn(t).addClass(Nn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Fn.reflow(t),bn(t).addClass(Pn),t.parentNode&&bn(t.parentNode).hasClass(wn)){var r=bn(t).closest(jn)[0];if(r){var o=[].slice.call(r.querySelectorAll(Wn));bn(o).addClass(Nn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=bn(this),e=t.data(Sn);if(e||(e=new i(this),t.data(Sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.3"}}]),i}(),bn(document).on(Dn.CLICK_DATA_API,xn,function(t){t.preventDefault(),qn._jQueryInterface.call(bn(this),"show")}),bn.fn.tab=qn._jQueryInterface,bn.fn.tab.Constructor=qn,bn.fn.tab.noConflict=function(){return bn.fn.tab=An,qn._jQueryInterface},qn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Fn,t.Alert=Kn,t.Button=Mn,t.Carousel=Qn,t.Collapse=Bn,t.Dropdown=Vn,t.Modal=Yn,t.Popover=Jn,t.Scrollspy=Zn,t.Tab=Gn,t.Tooltip=zn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map;
//v1.1
//Updated 2019 Aug 1
var GlobalNav = {
    $GNactiveLob: $('.connector-active-lob'),

    init: function () {
        try {
            this.$GNactiveLob.animate({
                scrollLeft: Math.ceil($('div.connector-active-lob li.active').offset().left)
            }, 'slow');
        }

        catch (err) { }

    },

    setUndefinedLang: function () {
        try {
            var geminiCookieName = "gemini";
            var lang, region, larSegment = "";
            var cval = this.getCookie(geminiCookieName);
            if (cval != null) {
                var strSpl = cval.split('|');
                for (let i = 0; i < strSpl.length; i++) {
                    if (strSpl[i].includes("region")) {
                        region = strSpl[i].replace("region=", "");
                    }
                    else if (strSpl[i].includes("LarSegmentType")) {
                        larSegment = strSpl[i].replace("LarSegmentType=", "");
                    }
                    else if (strSpl[i].includes("language")) {
                        lang = strSpl[i];
                    }
                }
                if (!lang || lang === "language=") {
                    lang = $('meta[name=language]').attr("content");
                    this.setLanguageRegionCookieValue(lang, region, larSegment);
                }
            }
        } catch (err) {
            console.log(err);
        }
    },

    saveLanguage: function ($language) {
        var language = $language.data("alternative");
        var vanityurl = $language.data("vanityurl");
        this.setLanguageRegionCookieValue(language, null);
        var langRegex = /(language=\w+)|(lang=\w+)/i;

        if (vanityurl && vanityurl.length > 0) {
            if (langRegex.test(vanityurl)) {
                window.location = vanityurl.replace(langRegex, "lang=" + language);
            } else {
                window.location = vanityurl;
            }
        } else if (langRegex.test(location.href)) {
            location.href = location.href.replace(langRegex, "lang=" + language);
        } else {
            window.location.reload();
        }
    },
    saveProvince: function (province) {
        var language = $(".js-current-language").data("language");
        this.setLanguageRegionCookieValue(language, province);
        this.paramURLCheck("prov=", province);
        window.location.reload();
    },
    paramURLCheck: function (text, value) {
        var urlParam = window.location.search.split('&');
        var index = -1;
        var paramIndex = $(urlParam).each(function (listIndex) {
            if (this.indexOf(text) !== -1) {
                index = listIndex;
            }
        });
        if (index !== -1) {
            var pramString = text;
            if (index == 0) {
                pramString = "?" + text;
            }
            urlParam[index] = pramString + value;
            window.history.pushState("{\"location\":\"" + urlParam.join('&') + "\"}", urlParam.join('&'), urlParam.join('&'));
        }
    },
    setLanguageRegionCookieValue: function (lang, region, larsegmenttype, bIgnorePreviousCookie) {
        var geminiCookieName = "gemini";
        var cookieVal = bIgnorePreviousCookie == true ? null : this.getCookie(geminiCookieName);
        var geminiCookieVal = this.getGeminiString(lang, region, cookieVal, larsegmenttype);
        var hostname = window.location.hostname;
        var domain = ".bell.ca";
        this.setCookie(geminiCookieName, geminiCookieVal, 90, domain);
    },
    getGeminiString: function (lang, region, cval, larsegmenttype) {
        var retVal = "region=" + region + "|language=" + lang + "|province=" + region + "|LarSegmentType=" + larsegmenttype;
        if (cval != null) {
            var strSpl = cval.split('|');
            if (region != null && region.length != 0) {
                strSpl[0] = "region=" + region;
                strSpl[2] = "province=" + region;
            }
            if (lang != null && lang.length != 0) {
                strSpl[1] = "language=" + lang;
            }
            if (larsegmenttype != null && larsegmenttype != undefined && larsegmenttype.length != 0) {
                strSpl[3] = "LarSegmentType=" + larsegmenttype;
            } else {
                strSpl[3] = "";
            }
            retVal = strSpl[0] + "|" + strSpl[1] + "|" + strSpl[2] + "|" + strSpl[3];
        }

        return retVal;
    },

    setCookie: function (name, value, days, domain) {
        var expires = "", date = new Date();
        if (!days || isNaN(days)) {
            days = 365;
        }

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
        var setCookieVal = name + "=" + value + expires + "; path=/";

        if (domain) {
            setCookieVal += "; domain=" + domain;
        }

        document.cookie = setCookieVal;
    },

    getCookie: function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    },

    ConstraintMenuFocus: function (event) {
        var lastFocusableEl = $('.connector').find(':focusable').last();

        if (lastFocusableEl.is(":focus") && (event.shiftKey == false) && (event.keyCode) == 9) {
            event.preventDefault();
            $('.connector-nav-open-button').focus();
        } else if ($('.connector-nav-open-button').is(":focus") && (event.shiftKey == true) && (event.keyCode) == 9) {
            event.preventDefault();
            lastFocusableEl.focus();
        }
    },

    hidingBusinessMenu: function () {
        $('.business-selector').removeClass('bhp-active');
        $('#small-business-top-link').attr("aria-expanded", "false");
        document.querySelectorAll('.business-selector').forEach(function (el) {
            el.style.display = 'none';
        });
    },

    toggleBusinessMenu: function () {
        if ($('.business-selector').hasClass('bhp-active')) {
            this.hidingBusinessMenu();
        } else {
            $('.business-selector').addClass('bhp-active');
            $('#small-business-top-link').attr("aria-expanded", "true");
            document.querySelectorAll('.business-selector').forEach(function (el) {
                el.style.display = 'block';
            });
        }
    }
}

$(document).ready(function () {
    GlobalNav.init();
    GlobalNav.setUndefinedLang();

    $('body').append('<div class="screen" aria-hidden="true"></div>');

    //Start Federal Bar Events
    $(document).on('click', '.federal-bar-store-locator a', function (e) {
        $('li.connector-area').removeClass('active').find('.menu-flyout').removeClass('menu-flyout-visible').removeClass('menu-flyout-has-been-expanded');
        $('.federal-bar-link-provinces').removeClass('active');
        $('.federal-bar-store-locator-popup').addClass('federal-bar-links');
        $(this).parent().toggleClass('active');
        //e.stopPropagation();
    });

    $(document).on('click', '.show-store-locator', function (event) {
        $this = $(this);
        $this.closest('.federal-bar-store-locator-popup').toggleClass('federal-bar-links');
        $this.closest('.federal-bar-store-locator-popup').find('#searchField').focus();
        //event.stopPropagation();
    });

    $(document).on('click', '.federal-bar-store-locator-popup', function (e) {
        return false;
    });

    $(document).on('click', '.js-current-language', function () {
        GlobalNav.saveLanguage($(this));
    });

    $(document).on("change", ".js-province-mobile", function () {
        GlobalNav.saveProvince(this.value);
    });

    $(document).on('click', '.checkboxes a.province-item', function (e, data) {
        GlobalNav.saveProvince($(this).find("input").val());
    });

    $(document).on('click', 'label.label', function (event) {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.find('.store-locator-filter-checkbox').prop('checked', false);
        } else {
            $this.find('.store-locator-filter-checkbox').prop('checked', true);
        }
        $this.toggleClass('active').toggleClass('focused');
        event.stopPropagation();
        return false;
    });

    $(document).on('focusin', '.store-locator-filter-checkbox', function () {
        $(this).closest('.label').addClass('focused');
    });

    $(document).on('focusout', '.store-locator-filter-checkbox', function () {
        $(this).closest('.label').removeClass('focused');
    });

    $(document).on('click', '.connector-cart-button', function () {
        $(this).closest('.shopping-cart-button').toggleClass('active');
    });


    $(document).on('focus', '#BELL_FOR_BETTER', function () {
        GlobalNav.hidingBusinessMenu();
    });

    $(document).on('focus', '#SHOP_FEDERAL', function () {
        GlobalNav.hidingBusinessMenu();
    });

    $(document).on('click', '#small-business-top-link', function () {
        GlobalNav.toggleBusinessMenu();
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            GlobalNav.hidingBusinessMenu();
        }
    });

    $(document).on('click touchstart', function (event) {
        var container = document.getElementById('small-business-top-link');
        if (container != null && !container.contains(event.target)) {
            GlobalNav.hidingBusinessMenu();
        }
    });

    $(document).on('click', '#Mobile_BUSINESS_FEDERAL', function (e) {
        $('#mobile-business-selector-BUSINESS_FEDERAL').addClass('bhp-active');
        $('#Mobile_BUSINESS_FEDERAL').removeClass('down-arrow-mobile');
        $('#Mobile_BUSINESS_FEDERAL').addClass('up-arrow-mobile');
    });

    $(document).on('click', '.footer-header-current-province', function (e) {
        $('li.connector-area').removeClass('active').find('.menu-flyout').removeClass('menu-flyout-visible').removeClass('menu-flyout-has-been-expanded');
        $('.federal-bar-store-locator').removeClass('active');
        $('.federal-bar-store-locator-popup').addClass('federal-bar-links');
        $('.federal-bar-link-provinces').toggleClass('active');
        //e.stopPropagation();
    });

    $(document).on('keyup', '.ui-autocomplete-input', function () {
        var $this = $(this);
        if ($this.val().length > 0) {
            $('button[type="reset"]').addClass('active');
        } else {
            $('button[type="reset"]').removeClass('active');
        }
    });

    $(document).on('click', 'button[type="reset"]', function () {
        $('button[type="reset"]').removeClass('active');
    });

    $(document).on('click', '#connector-search-button', function (e) {
        $this = $(this);
        $this.toggleClass('active');
        $this.closest('.connector').toggleClass('connector-search-active');
        $('.connector-search-wrap').toggleClass('active');
        $('.connector-search-wrap input').focus();
    });

    $(document).on('blur', '#connector-search', function () {
        $this = $(this);

        setTimeout(function () {
            if ($this.closest('#connector-search').parent().hasClass('active')) {
                if ($(document.activeElement).closest('#connector-search').length == 0) {
                    $('#connector-search-button').toggleClass('active');
                    $('#connector-search-button').closest('.connector').toggleClass('connector-search-active');
                    $('.connector-search-wrap').toggleClass('active');
                }
            }
        }, 100);
    });

    // navigation search return when tab + shift is pressed in input search
    $(document).on('keydown blur', '.connector-search-wrap input', function (e) {
        if (e.shiftKey && e.keyCode === 9) {//shift+tab pressed
            $('.connector-nav-open-button').focus();
        }
    });

    // navigation search when on end of tab moves to the burger menu
    $(document).on('keyup', '#connector-search', function (e) {
        $(document).on('focusout', '.coveo-accessible-button', function () {
            $this = $(this);
            $('.connector-nav-open-button').focus();
        });
    });

    // navigation submenu closes on escape pressed
    $(document).on('keyup', '#connector-search', function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('#connector-search-button').toggleClass('active');
            $('#connector-search-button').closest('.connector').toggleClass('connector-search-active');
            $('.connector-search-wrap').toggleClass('active');
            $('#connector-search-button').focus();
        }
    });

    //close popup upon tabbing out
    $(".connector.aliant .popup-update").on("focusout", function () {
        const $this = $(this);
        setTimeout(function () {
            const $focused = $(":focus");
            if ((!$focused.closest(".popup-update").length) || ($focused.attr("aria-expanded") === "false")) {
                $this.find(".trigger-popup").attr("aria-expanded", false);
                $this.find(".popup").hide();
            }
        }, 0)
    });
    //close popup when clicking trigger again
    $(".connector.aliant .popup-update .trigger-popup").on("click", function () {
        const $this = $(this);
        if ($this.attr("aria-expanded") === "true") {
            $this.siblings(".popup").hide();
        }
    });

    //End of Federal Bar Events


    $(document).on('click', 'li.connector-area', function (event) {
        //if (window.matchMedia("(max-width: 991.98px)").matches) {
        $('.federal-bar-store-locator').removeClass('active');
        $('.federal-bar-link-provinces').removeClass('active');
        $('.federal-bar-store-locator-popup').addClass('federal-bar-links');
        var $this = $(this);


        if ($this.hasClass('active') && $this.find('.menu-flyout').hasClass('menu-flyout-visible')) {
            $this.removeClass('bce-no-flyout-open').removeClass('active').find('.menu-flyout').removeClass('menu-flyout-visible').removeClass('menu-flyout-has-been-expanded');
            $this.children('div').children('a[aria-expanded=true]').attr('aria-expanded', 'false');
            $('.menu-flyout-item-active').removeClass('menu-flyout-item-active');
            $('.sub-nav-root > li > a[aria-expanded=true]').attr('aria-expanded', 'false')
        } else {
            $('li.connector-area').removeClass('bce-no-flyout-open').removeClass('active').find('.menu-flyout').removeClass('menu-flyout-visible').removeClass('menu-flyout-has-been-expanded');
            $this.children('div').children('a[aria-expanded=true]').attr('aria-expanded', 'false');
            $('.menu-flyout-item-active').removeClass('menu-flyout-item-active');
            $('.sub-nav-root > li > a[aria-expanded=true]').attr('aria-expanded', 'false');
            $this.addClass("active");
            $this.find('.menu-flyout').addClass('menu-flyout-visible');
            $this.children('div').children('a[aria-expanded=false]').attr('aria-expanded', 'true');
        }
        event.stopPropagation();
    });

    $(document).on('click', '.sub-nav-header', function (event) {
        if (isMobile()) {
            event.stopPropagation();
        }
    });

    $(document).on('click', '.sub-nav-root > li', function (event) {
        var $this = $(this), subNavGroupEl;

        if ($this.hasClass('menu-flyout-item-active')) {
            //$('.sub-nav-root > li').removeClass('menu-flyout-item-active');
            $('.sub-nav-root > li > a[aria-expanded=true]').attr('aria-expanded', 'false');
        }

        else {
            $('.sub-nav-root > li').removeClass('menu-flyout-item-active');
            $('.sub-nav-root > li > a[aria-expanded=true]').attr('aria-expanded', 'false');
            $this.addClass("menu-flyout-item-active");
            $this.children('[aria-expanded=false]').attr('aria-expanded', 'true');
            if (!$this.hasClass('no-sub-nav')) {

                if (!$this.closest('.menu-flyout-visible').hasClass('menu-flyout-has-been-expanded')) {
                    $this.closest('.menu-flyout-visible').addClass('menu-flyout-has-been-expanded');
                    if (window.matchMedia("(min-width: 992px)").matches) {
                        subNavGroupEl = $this.find('.sub-nav-group');
                        subNavGroupEl.first().width(0).animate({ "width": subNavGroupEl.hasClass('has-two-columns') ? '180%' : (subNavGroupEl.hasClass('sub-nav-large') ? '320%' : '100%') }, 225, function () { });
                    }
                }
            }
        }
        event.stopPropagation();
    });

    // navigation submenu closes on escape pressed and focus on the parent
    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            if ($('ul.sub-nav-root > li').hasClass('menu-flyout-item-active')) {
                $('ul.sub-nav-root > li.menu-flyout-item-active').children().focus()
                $('ul.sub-nav-root > li.menu-flyout-item-active').children('[aria-expanded=true]').attr('aria-expanded', 'false');
                $('.sub-nav-root > li.menu-flyout-item-active').removeClass('menu-flyout-item-active');
            } else if ($('div.menu-flyout').hasClass('menu-flyout-visible')) {
                $('div.menu-flyout.menu-flyout-visible').prev().children().focus();
                $('div.menu-flyout.menu-flyout-visible').prev().children('[aria-expanded=true]').attr('aria-expanded', 'false');
                $('li.connector-area').removeClass('active');
                $('div.menu-flyout').removeClass('menu-flyout-visible');
            }
        }
        e.stopPropagation();
    });

    // navigation on tab close all tabs
    $("li.connector-area > div > a").focusin(function () {
        $('li.connector-area').removeClass('active');
        $('div.menu-flyout').removeClass('menu-flyout-visible');
        $('div.menu-flyout-root > ul.sub-nav-root > li > a[aria-expanded=true]').attr('aria-expanded', 'false')
        $('li.connector-area > div > a[aria-expanded=true]').attr('aria-expanded', 'false');

    })

    $("#voice_search").focusin(function () {
        $('li.connector-area').removeClass('active');
        $('div.menu-flyout').removeClass('menu-flyout-visible');
        $('div.menu-flyout-root > ul.sub-nav-root > li > a[aria-expanded=true]').attr('aria-expanded', 'false')
        $('li.connector-area > div > a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $(document).on('mouseover', '.sub-nav-root > li > a', function (event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $(this).trigger('click');
        }
        event.stopPropagation();
    });

    $(document).on('click', '.sub-nav-level4 > li', function (event) {
        var $this = $(this);
        if ($this.hasClass('menu-flyout-item-active')) {
            if (window.matchMedia("(max-width: 991.98px)").matches) {
                $('.sub-nav-level4 > li').removeClass('menu-flyout-item-active');
            }
        } else {
            $('.sub-nav-level4 > li').removeClass('menu-flyout-item-active');
            $this.addClass("menu-flyout-item-active");
            if (!$this.hasClass('no-sub-nav')) {

                if (!$this.closest('.menu-flyout-visible').hasClass('menu-flyout-has-been-expanded')) {
                    $this.closest('.menu-flyout-visible').addClass('menu-flyout-has-been-expanded');
                    if (window.matchMedia("(min-width: 992px)").matches) {
                        $this.find('.sub-nav-group').width(0).animate({ "width": "100%" }, 225, function () { });
                    }
                }
            }
        }
        event.stopPropagation();
    });

    $(document).on('mouseover', '.sub-nav-level4 > li', function (event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $(this).trigger('click');
        }
        event.stopPropagation();
    });

    $(document).on('click', '.connector-nav-open-button, .screen', function () {
        $this = $('.connector-nav-open-button');
        $('body').toggleClass('connector-active');
        $this.toggleClass('active');
        if ($this.hasClass('active')) {
            $this.attr('title', 'Collapse Mobile Navigation');
            $('header .connector').on('keydown', GlobalNav.ConstraintMenuFocus);
        } else {
            $this.attr('title', 'Expand Mobile Navigation');
            $('header .connector').off('keydown', GlobalNav.ConstraintMenuFocus);
        }
    });

    $(document).on('click', function (e) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $('li.connector-area').removeClass('active').find('.menu-flyout').removeClass('menu-flyout-visible').removeClass('menu-flyout-has-been-expanded');
            $('.federal-bar-store-locator').removeClass('active');
            $('.federal-bar-link-provinces').removeClass('active');
            $('.federal-bar-store-locator-popup').addClass('federal-bar-links');
            $('.shopping-cart-button').removeClass('active');

            // aria-expanded change to false for navigation

            $('li.connector-area > div > a[aria-expanded=true]').attr('aria-expanded', 'false');
            $('div.menu-flyout-root > ul.sub-nav-root > li > a[aria-expanded=true]').attr('aria-expanded', 'false')

        }
    });


    //Secondary Navigation

    $(document).on('focusin', '.global-navigation .secondary-nav-lob', function () {
        $(this).closest('li').find('.secondary-nav-dropdown').show();
    });

    $(document).on('focusout', '.global-navigation .secondary-nav-dropdown a:last-child', function () {
        $(this).closest('li').find('.secondary-nav-dropdown').hide();
    });

    $(document).on('mousemove', function () {
        $('body').find('.secondary-nav-dropdown').hide();
    });

    // Start of navigation accessibility buttons

    let $fixedHeader = $('.connector-active-lob');
    let $linkContainer = $('.connector-active-lob .link-container');
    let $linkContent = $('.connector-active-lob .container .clearfix');
    let $navBtnNext = $(".nav-next");
    let $navBtnPrev = $(".nav-prev");
    let $navTabContainer = $('.nav-tab-container');
    let $navTabBtnNext = $(".nav-tab-btn-next");
    let $navTabBtnPrev = $(".nav-tab-btn-prev");
    const $justifyContents = [];

    if (isMobile()) {
        navButtonHide();
    } else {
        initGlobalNavButton();
        initNavTabButton();
    }

    initGlobalNavButtonEvents();
    initNavTabButtonEvents();

    $('.nav-tab-container').each(function () {
        $justifyContents.push($(this).hasClass('justify-content-center'));
    });

    $(window).resize(function () {
        initGlobalNavButton();
        initNavTabButton();
        setTimeout(function () {
            if (isMobile()) {
                navButtonHide();
                $linkContainer.removeClass('overflow-navigation');
                $navTabContainer.removeClass('overflow-navigation justify-content-center');
                $navTabContainer.parent().removeClass('nav-tab-flex margin-h-auto overflow-x-visible');
            }
        }, 300);
    });

    function navButtonHide() {
        $navBtnNext.css("display", "none");
        $navBtnPrev.css("display", "none");
        let $navTabContainer = $('.nav-tab-container');
        $navTabContainer.each(function () {
            let $this = $(this);
            let $tabBtnNext = $this.siblings('.nav-tab-btn-next');
            let $tabBtnPrev = $this.siblings('.nav-tab-btn-prev');
            $tabBtnNext.css("display", "none");
            $tabBtnPrev.css("display", "none");
        });
    }

    function initGlobalNavButton() {
        if (isOverflown($linkContainer, $linkContent, $navBtnNext, $navBtnPrev)) {
            $fixedHeader.addClass('overflow-padding');
        } else {
            $fixedHeader.removeClass('overflow-padding');
        }
    }

    function initGlobalNavButtonEvents() {
        $linkContainer.on("scroll", (event) => {
            toggleNavBtnDisplay(event, $navBtnNext, $navBtnPrev);
        });
        $navBtnPrev.click(function () {
            scrollLeft($linkContainer, 250, 500);
        });
        $navBtnNext.click(function () {
            scrollRight($linkContainer, 250, 500);
        });
        $linkContent.find('a').first().on('focus', () => {
            scrollLeft($linkContainer, 250, 500);
        });
        $linkContent.find('a').last().on('focus', () => {
            scrollRight($linkContainer, 250, 500);
        });
        $linkContent.find('a').on("focus", function (e) {
            let $this = $(this);
            let elemPos = $this.position().left;
            let elemWidth = $this.width();
            let containerWidth = $linkContainer.width();
            if ((elemPos + elemWidth) > containerWidth || elemPos < 1) {
                $linkContainer.animate({ scrollLeft: (elemPos + $linkContainer.scrollLeft() + (elemWidth / 2)) - (containerWidth / 2) }, 500);
            }
        });
    }

    function initNavTabButton() {
        $navTabContainer.each(function (i) {
            let $this = $(this);
            let $tabContent = $this.find('.nav-tab-content');
            let $tabBtnNext = $this.siblings('.nav-tab-btn-next');
            let $tabBtnPrev = $this.siblings('.nav-tab-btn-prev');
            if (isOverflown($this, $tabContent, $tabBtnNext, $tabBtnPrev)) {
                $this.parent().addClass('nav-tab-flex margin-h-auto overflow-x-visible');
                if ($justifyContents[i]) {
                    $this.removeClass('justify-content-center');
                }
            } else {
                $this.parent().removeClass('nav-tab-flex margin-h-auto overflow-x-visible');
                if ($justifyContents[i]) {
                    $this.addClass('justify-content-center');
                }
            }
        });
    }

    function initNavTabButtonEvents() {
        $navTabContainer.each(function () {
            let $this = $(this);
            let $tabBtnNext = $this.siblings('.nav-tab-btn-next');
            let $tabBtnPrev = $this.siblings('.nav-tab-btn-prev');
            $this.on("scroll", (event) => {
                toggleNavBtnDisplay(event, $tabBtnNext, $tabBtnPrev);
            });
            $this.find('a,input').first().on('focus', () => {
                scrollLeft($this, 250, 500);
            });
            $this.find('a,input').last().on('focus', () => {
                scrollRight($this, 250, 500);
            });
            $this.find('a,input').on("focus", function (e) {
                let $anchorTag = $(this);
                let elemPos = $anchorTag.offset().left;
                let elemWidth = $anchorTag.width();
                let containerWidth = $this.width();
                if ((elemPos + elemWidth) > containerWidth || elemPos < 65) {
                    $this.animate({ scrollLeft: (elemPos + $this.scrollLeft() + (elemWidth / 2)) - (containerWidth / 2) }, 500);
                }
            });
        });
        $navTabBtnPrev.each(function () {
            let $this = $(this);
            let $tabContainer = $this.siblings('.nav-tab-container');
            $this.click(function () {
                scrollLeft($tabContainer, 250, 500);
            });
        });
        $navTabBtnNext.each(function () {
            let $this = $(this);
            let $tabContainer = $this.siblings('.nav-tab-container');
            $this.click(function () {
                scrollRight($tabContainer, 250, 500);
            });
        });
    }

    function isOverflown($container, $content, $navNextBtn, $navPrevBtn) {

        if (isMobile()) {
            navButtonHide();
        } else {
            if ($content.width() > $container.width() || $content.width() == $container.width()) {
                $navNextBtn.css("display", "block");
                $container.addClass('overflow-navigation');
                return true;
            } else {
                $navPrevBtn.css("display", "none");
                $navNextBtn.css("display", "none");
                $container.removeClass('overflow-navigation');
                return false;
            }

        }
    }

    function toggleNavBtnDisplay(scrollEvent, $navBtnNext, $navBtnPrev) {
        if (isMobile()) {
            navButtonHide();
        } else {
            setTimeout(function () {
                if (Math.ceil(scrollEvent.target.scrollLeft + scrollEvent.target.offsetWidth) >= scrollEvent.target.scrollWidth)
                    $navBtnNext.css("display", "none");
                else
                    $navBtnNext.css("display", "block");

                if (scrollEvent.target.scrollLeft == 0)
                    $navBtnPrev.css("display", "none");
                else
                    $navBtnPrev.css("display", "block");
            }, 150)
        }
    }

    function scrollLeft(container, offset, scrollSpeed) {
        let leftPos = container.scrollLeft();
        container.animate({ scrollLeft: leftPos - offset }, scrollSpeed);
    }

    function scrollRight(container, offset, scrollSpeed) {
        let leftPos = container.scrollLeft();
        container.animate({ scrollLeft: leftPos + offset }, scrollSpeed);
    }

    function isMobile() {
        if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))
            return true;
        else
            return false;
    }

    // End of navigation accessibility buttons
});
//v1.1 
//BRF Framework - Updated 2022 June 7
//when using eslint/jslint, do not enable the automatic conversion of regular equality operators (== and !=) to type-safe equality operators (=== and !==). if you do so, make sure you review each change

(function () {
    // do not move this inside document ready. this should run as soon as it is parsed
    // check all visible images with the lazyloading class and if it is readily visible in the viewport, load it immediately and remove from lazyloading queue
    $('.lazy:visible').each(function () {
        var element, src;

        // if we are not passing 0 as threshold value to the jQuery.lazy config, we need to pass the correct threshold as third parameter to isInViewport
        if (isInViewport(this)) {
            element = $(this);
            src = element.data('src');

            if (src) {
                element.removeClass(element.data('loading-class'));
                if (this.tagName.toLowerCase() === 'img') {
                    element.attr('src', src);
                } else {
                    element[0].style.backgroundImage = "url('" + src + "')";
                }
                element.removeData('src').removeAttr('data-src');
                // support same height elements
                resetSameHeightElements(element.parents('.same-height'));
                processSameHeightElements(element.parents('.same-height'));
                // trigger custom lazy-loaded event. the timeout is necessary to allow the listeners to be attached first
                setTimeout(function () {
                    element.trigger('lazy-loaded');
                }, 0);
            }
        }
    });
})();

function initBRF() {
    cssScrollCustom();
    reviewScroll();
    equalColumns();
    attachGenericHandlers();
    if (typeof jQuery.fn.Lazy === 'function') {
        $('.lazy').each(function () {
            var el = $(this);

            el.Lazy({
               effect: "fadeIn",
                effectTime: 10,
                threshold: 10,
                visibleOnly: false,
                chainable: false,
                afterLoad: function (element) {
                    element.removeClass(element.data('loading-class'));
                    // support same height elements
                    element.parents('.same-height').trigger('resize');
                    // trigger custom lazy-loaded event. the timeout is necessary to allow the listeners to be attached first
                    setTimeout(function () {
                        element.trigger('lazy-loaded');
                    }, 0);
                },
                onError: function (element) {
                    // loading failed but technically it's no longer loading so let's remove the loading class as well
                    element.removeClass(element.data('loading-class'));
                }
            });
        });
    }

    //For Asset Tabs 2 with Accessibility 
    AssetsTabsTwoInitialize.init();
    AssetsTabsTwoInitialize.resized();
    //Intialized Floating side menu
    Sidemenu.Init();
    window.addEventListener('keydown', focusTabControlOnce);
}

// helper function to check if an element is visible in viewport (note that this doesn't check for visibility like visibility:hidden or display:none)
function isInViewport(pElement, pIsEntireElem, pThreshold) {
    var elementBound = pElement.getBoundingClientRect(),
        threshold = pThreshold || 0,
        windowEl = $(window),
        windowHeight = windowEl.height(),
        windowWidth = windowEl.width();

    // if pIsEntireElem === true, perform additional tests to verify that the element is entirely visible
    if (true === pIsEntireElem) {
        if (elementBound.top < 0 || elementBound.left < 0 || elementBound.bottom > windowHeight || elementBound.right > windowWidth) {
            return false;
        }
    }

    // check if element is in viewport area from top or bottom
    if (windowHeight + threshold > elementBound.top && -threshold < elementBound.bottom) {
        // check if element is in viewport area from left or right
        return windowWidth + threshold > elementBound.left && -threshold < elementBound.right;
    }

    return false;
}

function focusTabControlOnce(e) {
    if (e.keyCode === 9) { // Listen to tab events to enable outlines (accessibility improvement)
        document.body.classList.add('is_tabbing');
        window.removeEventListener('keydown', focusTabControlOnce);
        window.addEventListener('mousedown', focusMouseDownControlOnce);
    }
}
function focusMouseDownControlOnce() {
    document.body.classList.remove('is_tabbing');
    window.removeEventListener('mousedown', focusMouseDownControlOnce);
    window.addEventListener('keydown', focusTabControlOnce);
}

function attachGenericHandlers() {
    $('.click-on-space').on('keypress', function (event) {
        var key = event.which || event.keyCode || 0;
        if (key === 32) {
            event.preventDefault();
            event.stopPropagation();
            $(this).trigger("click");
        }
    });

    $('.click-on-enter').on('keypress', function (event) {
        var key = event.which || event.keyCode || 0;
        if (key === 13) {
            event.preventDefault();
            event.stopPropagation();
            $(this).trigger("click");
        }
    });
}


//Add event handler for when page/section loaders are shown
$('body').on('keydown keyup keypress click', fnClickAndKeyNavBlocker);
$('body').on('keydown keyup keypress click', '*', fnClickAndKeyNavBlocker);
function fnClickAndKeyNavBlocker(e) {
    // block click and key events while masked
    if ('click' === e.type || 9 === e.keyCode || 13 === e.keyCode || 32 === e.keyCode) {
        if ($('body').hasClass('masked')) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
        }
    }
}

function showLoaderWithMask(loaderSelector) {
    $('body').addClass('masked');
    $('<div class="loaderOverlayBackground transparent"></div>').appendTo('body').fadeIn();
    $(loaderSelector).show();
}

function hideLoaderWithMask(loaderSelector) {
    $('body').removeClass('masked');
    $('.loaderOverlayBackground').remove();
    $(loaderSelector).hide();
}

/* 
 * This function sets the other sections' tabindex to -1 and aria-hidden to true when the passed element is shown to trap keyboard and screenreader focus.
 */
function overwriteTabIndexAndAriaHiddenDifferentHierarchy(currEl, tempMoveToProperPos) {
    var parent, index, originClass;

    // if tempMoveToProperPos === true, the element will temporarily be moved and become an immediate child of the document body
    if (tempMoveToProperPos === true) {
        index = currEl.index();
        if (index > 0) { // has previous sibling, mark it
            originClass = 'origin-' + (new Date()).getTime();
            currEl.prev().addClass(originClass);
            currEl.data('originprev', originClass).appendTo('body');
        } else { // remember parent
            originClass = 'origin-' + (new Date()).getTime();
            currEl.parent().addClass(originClass);
            currEl.data('originparent', originClass).appendTo('body');
        }
    }

    // process the current element's siblings
    currEl.siblings().each(function () {
        var el = $(this), tabindex = el.attr('tabindex'), ariaHidden = el.attr('aria-hidden');

        if (undefined !== tabindex) {
            el.data('oldtabindex', tabindex);
        }
        el.attr('tabindex', -1);

        if (undefined !== ariaHidden && "" !== ariaHidden) {
            el.data('oldariahidden', ariaHidden);
        }
        el.attr('aria-hidden', true);

        el.find('a,area,input,select,textarea,button,iframe,[tabindex],[contentEditable=true]').each(function () {
            el = $(this), tabindex = el.attr('tabindex');

            if (undefined !== tabindex && "" !== tabindex) {
                el.data('oldtabindex', tabindex);
            }
            el.attr('tabindex', -1);
        });
    });

    // use recursion to process each ancestor until the body root is reached
    parent = currEl.parent();
    if (parent.length > 0 && !parent.is('body')) {
        overwriteTabIndexAndAriaHiddenDifferentHierarchy(currEl.parent());
    }
}

/* 
 * This function reverts the other sections' tabindex and aria-hidden to their original values when the passed element is hidden to remove keyboard and screenreader focus trapping.
 */
function revertTabIndexAndAriaHiddenDifferentHierarchy(currEl) {
    var parent, origParentClass, origParent, origPrevSibClass, origPrevSib;

    // process the current element's siblings
    currEl.siblings().each(function () {
        var el = $(this), tabindex = el.data('oldtabindex'), ariaHidden = el.attr('oldariahidden');

        if (undefined !== tabindex) {
            el.attr('tabindex', tabindex);
            el.removeData('oldtabindex');
        } else {
            el.removeAttr('tabindex');
        }

        if (undefined !== ariaHidden) {
            el.attr('aria-hidden', ariaHidden);
            el.removeData('oldariahidden');
        } else {
            el.removeAttr('aria-hidden');
        }

        el.find('a,area,input,select,textarea,button,iframe,[tabindex],[contentEditable=true]').each(function () {
            el = $(this), tabindex = el.data('oldtabindex');

            if (undefined !== tabindex) {
                el.attr('tabindex', tabindex);
                el.removeData('oldtabindex');
            } else {
                el.removeAttr('tabindex');
            }
        });
    });

    // use recursion to process each ancestor until the body root is reached
    parent = currEl.parent();
    if (parent.length > 0 && !parent.is('body')) {
        revertTabIndexAndAriaHiddenDifferentHierarchy(currEl.parent());
    }

    // this returns the element to its original position if it was temporarily moved by overwriteTabIndexAndAriaHiddenDifferentHierarchy
    origParentClass = currEl.data('originparent');
    if (origParentClass) {
        origParent = $('.' + origParentClass);
        currEl.prependTo(origParent);
        origParent.removeClass(origParentClass);
        currEl.removeData('originparent');
    } else {
        origPrevSibClass = currEl.data('originprev');
        if (origPrevSibClass) {
            origPrevSib = $('.' + origPrevSibClass);
            currEl.insertAfter(origPrevSib);
            origPrevSib.removeClass(origPrevSibClass);
            currEl.removeData('originprev');
        }
    }
}


// old code handles modals only if initial window width is > 976px. this doesn't make much sense so we'll look for a class (scrollable-body) and if it is present, we'll process the modal anyway
function setModalMaxHeightInit() {
    var scrollableBodyModal,
        innerFn = function (modalEl) {
            modalEl.on('show.bs.modal', function () {
                $(this).show();
                setModalMaxHeight(this);
            });
            $(window).resize(function () {
                // bootstrap 4 uses 'show' class instead of 'in'
                if ($('.modal.show, .modal.in').length !== 0) {
                    new setModalMaxHeight($('.modal.show, .modal.in'));
                }
            });
        };

    //Vertically center modal window and make content scrollable if modal is too long
    if ($(window).width() > 976) { //for desktop only 
        innerFn($('.modal'));
    } else {
        scrollableBodyModal = $('.modal.scrollable-body');
        if (scrollableBodyModal.length > 0) {
            innerFn(scrollableBodyModal);
        }
    }
}
setModalMaxHeightInit();

function setModalMaxHeight(element) {
    this.$element = $(element);
    this.$content = this.$element.find('.modal-content');
    var borderWidth = this.$content.outerHeight() - this.$content.innerHeight();
    // if the new 'scrollable-body' class is set, we'll use the margins defined in the digital styleguide (60px each for top and bottom for desktop and tablet. nothing is defined for mobile, but based on one mockup, we'll use 45px)
    var dialogMargin = this.$element.hasClass('scrollable-body') ? ($(window).width() < 768 ? 45 : 120) : ($(window).width() < 768 ? 20 : 60);
    var contentHeight = $(window).height() - (dialogMargin + borderWidth);
    var headerHeight = this.$element.find('.modal-header').outerHeight() || 0;
    var subHeight = this.$element.find('.modal-sub-header').outerHeight() + 1 || 0;
    var footerHeight = this.$element.find('.modal-footer').outerHeight() || 0;
    var maxHeight = contentHeight - (headerHeight + subHeight + footerHeight),
        modalBody = this.$element.find('.modal-body'),
        modalBodyVerticalMargin = parseInt(modalBody.css('margin-top'), 10) + parseInt(modalBody.css('margin-bottom'), 10);

    // if the modal-body has any top or bottom margin, we need to deduct it
    this.$element
        .find('.modal-body').css({
            'max-height': maxHeight - modalBodyVerticalMargin,
            'overflow-y': 'auto'
        });
}


//added to give focus to the modal close button when the modal is launched from a link. Tabbing will then start from this button onward so the first tab will always bring you to the NEXT FOCUSABLE ELEMENT INSIDE THE MODAL
function setFocusTimeout(item) {
    var focusTimeout = window.setTimeout(focusOnCloseBtn, 500);
    function focusOnCloseBtn() {
        $($(item).attr('data-target')).find('.modal-header').find('button').focus();
        clearTimeout(focusTimeout);
    }
}

//View more details - expand/collapse
var iconOpen = 'icon icon-collapse-outline-circled',
    iconClose = 'icon icon-exapnd-outline-circled';
$(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {
    var $target = $(e.target);
    $target.siblings('.accordion-heading').find('span.icon, span.icon2, span.icon3, i').toggleClass(iconOpen + ' ' + iconClose);
    if (e.type === 'show')
        $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    if (e.type === 'hide')
        $(this).find('.accordion-toggle').not($target).removeClass('active');
});
//For search filters background colour change when opened
$(".search-filter .accordion-toggle").click(function () {
    $(this).toggleClass("bgBlueDark");
});

//Focuses modal close button when shown
$('.modal').on('shown.bs.modal', function () {
    $(this).find('.close').focus();
    $('.modal-header-gray a').focus();
});

//Mobile hamburger selectbox tab container selection
$(".custom-selection").change(function () {
    var option_activeTab = $('option:selected', this).attr('data-rel');
    $(".tab-content").hide();
    $("#" + option_activeTab).show();
    $(".tab_heading").removeClass("option_active");
    $(this).addClass("option_active");
});
//Popup tooltips/menus
$('.trigger-popup').on('click touch', function () {
    const $this = $(this);
    const expanded = ($this.attr('aria-expanded') === 'true') ? true : false;
    if (expanded) {
        $this.next().hide();
        setTimeout(function () { // Added timeout to fix nvda issue not announcing collapse status
            $this.attr('aria-expanded', false);
        });
    }
    else {
        $this.next().show();
        setTimeout(function () {
            $this.attr('aria-expanded', true);
        })
    }

});
$(document).on('click touch', function (event) {
    if (!$(event.target).parents().addBack().is('.trigger-popup')) {
        $('.popup').not(this).hide();
        $('.trigger-popup').attr('aria-expanded', false);
    }
});
$('.federal-bar-link-provinces, .federal-bar-select-provinces-popup').on('focusout', function () {
    const $this = $(this);
    if (!$this.is(':focus-within')) {
        $this.prev().attr('aria-expanded', 'false');
        $this.hide();
    }
});
$('.federal-bar-store-locator-popup').on('focusout', function () {
    const $this = $(this);
    const el = document.querySelector('.federal-bar-store-locator-popup');
    setTimeout(function () {
        if (!el.contains(document.activeElement) && $('body').hasClass('is_tabbing')) {
            $this.prev().attr('aria-expanded', 'false');
            $this.hide();
        }
    }, 1);
});
$('#store-locator-popup-btn').on('click', function () {
    setTimeout(function () {
        $('.find-a-store-filter input').first().focus();
    });
    const $this = $(this);
    const expanded = ($this.attr('aria-expanded') === 'true') ? true : false;
    if (expanded) {
        setTimeout(function () {
            $this.attr('aria-expanded', false);
        });
    }
    else {
        setTimeout(function () {
            $this.attr('aria-expanded', true);
        })
    }
});
$('.federal-bar-store-locator-popup.popup').on('click touch', function (event) {
    event.stopPropagation();
});
//Dropdown menus
$('.trigger-dropdown').on('mouseover focus click touch', function () {
    $('.trigger-dropdown').next().hide();
    $(this).next().show();
});

$(document).on('mouseover focus click touch', function (event) {
    if (!$(event.target).parents().addBack().is('.trigger-dropdown')) {
        $('.connector-drop-down').not(this).hide();
    }
});

$('a[data-enter="true"]').on('keyup', function (e) {
    if (e.which === 13) {
        var enterTarget = $(this).find('.tool-tip');
        var enterTargetHeight = 66 + 18;/* 18 arrow half size */
        if (enterTarget.length > 0) {
            enterTarget.addClass('entered');
            enterTarget.css({
                'top': '-' + enterTargetHeight + 'px'
            });
        }
    }
});

$('.connector-drop-down').on('mouseover focus click touch', function (event) {
    event.stopPropagation();
});

//Prevents url redirect on first tap on mobile devices
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(".trigger-dropdown").bind('click touch', stopEventOnce);
    $(".trigger-dropdown").on('focusout', function () {
        $(".trigger-dropdown").bind('click touch', stopEventOnce);
    });
}
function stopEventOnce(event) {
    event.preventDefault();
    $(this).unbind('click touch', stopEventOnce);
    return false;
}

//Detects mobile browser and uses pure css scrollbar instead of js
function cssScrollCustom() {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    if (isChrome || isSafari) {
        if ($('div').hasClass('scroll-wrap')) {
            $('.scroll-wrap').removeClass('scrollbar-inner').addClass('scrollAdjust');
            $('.scrollbar-content').removeClass('scrollbar-content vPadding20-left-xs').addClass('vPadding20');

            if ($(window).width() > 999) {
                $('.modal .scrollbar-area').css("padding", "15px 15px 0 0");
                $('.modal-scroll-area').css("padding", "0");
            }
        }
    }
    else if ($(window).width() > 999) {
        if (typeof $('.scrollbar-inner').scrollbar !== 'undefined') {
            $(".scrollbar-inner").scrollbar();

        }
    }
}
//for custom scrollbar visibility for mobile and tablet
function reviewScroll() {
    if ($(window).width() < 999) {
        if (typeof $('.scrollAdjust').scrollbar !== 'undefined') {
            $(".scrollbar-inner").scrollbar();
            $(".modal-body").removeClass("scrollAdjust");
            $(".modal-body").css("padding", "30px");
        }
    }
    //Enables the continue button when user scrolls to the bottom or expands the T&C box
    $('.terms-scroll').scroll(function () {
        if ($(this).scrollTop() === $(this)[0].scrollHeight - $(this).height()) {
            $('.btn.btn-default.disabled').removeClass('disabled');
        }
    });
    $('.accordion-toggle').click(function () {
        $('.btn.btn-default.disabled').removeClass('disabled');
    });
    $(window).on('beforeunload', function () {
        $('.terms-scroll').scrollTop(0);
    });
}

/* START functions for same height elements (supports multiple groups and supports breakpoint-specific processing) */
// this function removes inline styles for height to all .same-height elements
function resetSameHeightElements(pSameHeightElement) {
    if (pSameHeightElement !== undefined) {
        pSameHeightElement.closest('.same-height-wrap').find('.same-height[data-same-height-index=' + pSameHeightElement.data('same-height-index') + ']').css('min-height', '');
    } else {
        $('.same-height-wrap .same-height').css('min-height', '');
    }
}

// this function equalizes the heights of all .same-height elements per .same-height-wrap container. grouping/matching is done based on their same-height-index attribute value
function processSameHeightElements(pSameHeightElement) {
    var mobileMax = 767.98,
        tabletMax = 991.98,
        initializing = true,
        wrapEl,
        specificIndex;

    if (pSameHeightElement !== undefined) {
        initializing = false;
        wrapEl = pSameHeightElement.closest('.same-height-wrap');
        specificIndex = pSameHeightElement.data('same-height-index');
    } else {
        wrapEl = $('.same-height-wrap');
    }

    wrapEl.each(function () {
        var sameHeightWrap = $(this),
            skipBreakpoints = sameHeightWrap.data('same-height-skip'),
            sameHeightElements,
            indexArr;

        // if there are skip breakpoint flags, check if resizing should be skipped (note that resetSameHeightElements still gets fired)
        if (undefined !== skipBreakpoints) {
            skipBreakpoints = $.trim(skipBreakpoints).toLowerCase().split(',');

            if (window.matchMedia('(max-width: ' + mobileMax + 'px)').matches) {
                if (skipBreakpoints.indexOf('m') > -1) {
                    return;
                }
            } else if (window.matchMedia('(max-width: ' + tabletMax + 'px)').matches) {
                if (skipBreakpoints.indexOf('t') > -1) {
                    return;
                }
            } else if (skipBreakpoints.indexOf('d') > -1) {
                return;
            }
        }

        indexArr = [];
        sameHeightElements = sameHeightWrap.find('.same-height' + (undefined === specificIndex ? '' : '[data-same-height-index=' + specificIndex + ']'));

        sameHeightElements.each(function () {
            var sameHeightEl = $(this),
                index = sameHeightEl.data('same-height-index');

            // check same-height-index groups only once per group
            if (indexArr.indexOf(index) === -1) {
                var maxHeight = 0,
                    equalElements = sameHeightElements.filter(function () {
                        var tempEl = $(this),
                            height = tempEl.outerHeight(),
                            ret = tempEl.data('same-height-index') === index;

                        if (ret && height > maxHeight) {
                            maxHeight = height;
                        }

                        return ret;
                    });

                equalElements.css('min-height', maxHeight);
                indexArr.push(index);
            }
        });

        if (initializing) {
            // listen for an event that can be fired which forces the resizing of all elements in the same group as the scope element. 
            // fire this when element height changes(see image lazyload afterLoad event listener above for example).
            sameHeightElements.on('resize', function () {
                var triggerEl = $(this);

                resetSameHeightElements(triggerEl);
                processSameHeightElements(triggerEl);
            });
        }
    });
}
/* END functions for same height elements (supports multiple groups and supports breakpoint-specific processing) */

//All document ready
$(document).ready(function () {
    /* process same height elements on document ready and attach listener to window resize event */
    var resizeTimeoutFn;

    processSameHeightElements();

    // when an accordion is toggled and animation has completed, trigger resize on all of its parents with same-height class
    $('.same-height .collapse').on('shown.bs.collapse hidden.bs.collapse', function () {
        $(this).parents('.same-height').trigger('resize');
    });

    $(window).on('resize', function () {
        clearTimeout(resizeTimeoutFn);
        resizeTimeoutFn = setTimeout(function () {
            // for 'same height elements', we first need to remove any inline height setting before we recompute and set the new heights
            resetSameHeightElements();
            processSameHeightElements();
        }, 200);
    });

    // this intialization adds the tooltip to the body and should be used for static-text tooltips that doesn't need to receive focus (read through aria-describedby)
    $('.tooltip-static').tooltip();

    // START focusable tooltips for screen reader compatibility
    $('[data-toggle="tooltip"][data-tooltipnofocus!=true]:not(.tooltip-static)').on('shown.bs.tooltip', function () {
        $(this).find('.tooltip').attr('tabindex', 0);
    });
    // END focusable tooltips for screen reader compatibility


    // START Tooltip Auto Placement
    function fnTooltipPreAdjustment() {
        $(this).find('.tooltip.top, .tooltip.bottom').css('opacity', 0);
    }

    /* modified code to handle deeper nested elements. note that this supports absolute positioned tooltips only which is the default */
    function fnTooltipAdjustment() {
        var tooltip, parent, height, scrollTop, elementOffset, distance, tailHeight, marginTopDiff;

        tooltip = $(this).find('.tooltip.top');
        if (tooltip.length > 0) {
            // check top overflow
            parent = tooltip.parent();
            // tooltip height doesn't include the arrow and the arrow sometimes overlap the parent, so let's compute the height manually
            height = tooltip.height() + tooltip.find('.tooltip-arrow')[0].getBoundingClientRect().bottom - tooltip[0].getBoundingClientRect().bottom;
            scrollTop = $(window).scrollTop();
            elementOffset = parent.offset().top;
            distance = elementOffset - scrollTop;

            if (height > distance) {
                setTimeout(function () {
                    if (tooltip.hasClass('top')) {
                        marginTopDiff = parseFloat(tooltip.css('margin-top'));
                        tooltip.removeClass('top').addClass('bottom');
                        marginTopDiff -= parseFloat(tooltip.css('margin-top'));
                        tailHeight = tooltip[0].getBoundingClientRect().top - tooltip.find('.tooltip-arrow')[0].getBoundingClientRect().top;
                        tooltip.css('top', tooltip.position().top + height + parent.height() + tailHeight + marginTopDiff + "px");
                    }
                    tooltip.css('opacity', 1);
                }, 0);
            } else {
                tooltip.css('opacity', 1);
            }
            return;
        }

        tooltip = $(this).find('.tooltip.bottom');
        if (tooltip.length > 0) {
            // check bottom overflow
            parent = tooltip.parent();
            // tooltip height doesn't include the arrow and the arrow sometimes overlap the parent, so let's compute the height manually
            height = tooltip.height() + tooltip[0].getBoundingClientRect().top - tooltip.find('.tooltip-arrow')[0].getBoundingClientRect().top;
            distance = $(window).height() - parent[0].getBoundingClientRect().bottom;

            if (height > distance) {
                setTimeout(function () {
                    if (tooltip.hasClass('bottom')) {
                        marginTopDiff = parseFloat(tooltip.css('margin-top'));
                        tooltip.removeClass('bottom').addClass('top');
                        marginTopDiff -= parseFloat(tooltip.css('margin-top'));
                        tailHeight = tooltip.find('.tooltip-arrow')[0].getBoundingClientRect().bottom - tooltip[0].getBoundingClientRect().bottom;
                        tooltip.css('top', tooltip.position().top - height - parent.height() - tailHeight + marginTopDiff + "px");
                    }
                    tooltip.css('opacity', 1);
                }, 0);
            } else {
                tooltip.css('opacity', 1);
            }
            return;
        }

        tooltip.css('opacity', 1);
    }

    $('[data-toggle="tooltip"]').on('inserted.bs.tooltip', function () {
        fnTooltipPreAdjustment.apply(this);
    });

    $('[data-toggle="tooltip"]').on('shown.bs.tooltip', function () {
        fnTooltipAdjustment.apply(this);
    });

    // handle onscroll adjustment
    $(window).scroll(function () {
        var timeout;

        this.clearTimeout(timeout);
        timeout = setTimeout(function () {
            $('.tooltip.in').each(function () {
                var triggerEl = $(this).parent().first();
                fnTooltipPreAdjustment.apply(triggerEl);
                fnTooltipAdjustment.apply(triggerEl);
            });
        }, 100);
    });
    // END Tooltip Auto Placement

    //LazyLoad
    //if (typeof $('img.lazy').lazyload !== 'undefined') {
    //    $("img.lazy").lazyload({ effect: "fadeIn" });
    //}
    // $('.modal').on('shown.bs.modal', function () {
    //   setTimeout(function () {
    //       if ($("img.lazy").length > 0) {
    //           $("img.lazy").lazyload({ effect: "fadeIn" });
    //       }
    //
    //   }, 100);
    // });

    $('.modal').on('shown.bs.modal', function () {
        var modalEl = $(this);
        setTimeout(function () {
            var lazyImages;
            if (typeof jQuery.fn.Lazy === 'function') {
                lazyImages = modalEl.find("img.lazy");
                //if (lazyImages.length > 0) {
                lazyImages.Lazy({ effect: "fadeIn" });
                //}
            }
        }, 100);
    });

    $('.collapse').on('shown.bs.collapse', function () {
        var modalEl = $(this);
        setTimeout(function () {
            var lazyImages;
            if (typeof jQuery.fn.Lazy === 'function') {
                lazyImages = modalEl.find("img.lazy");
                //if (lazyImages.length > 0) {
                lazyImages.Lazy({ effect: "fadeIn" });
                //}
                modalEl.trigger('resize');
            }
        }, 100);
    });

    //Load more search result lists, by default 5 at a time 
    $(".list-wrapper").each(function (index) {
        $(this).find('.search-result-list li:lt(' + $(this).attr('view-child') + ')').show();
    });
    $('.load-more').click(function () {
        var $myWrapper = $(this).closest('.list-wrapper');
        var x = parseInt($myWrapper.attr('view-child'), 10);
        var liSize = $myWrapper.find('.search-result-list li').size();
        x = x + 5 <= liSize ? x + 5 : liSize;
        $myWrapper.attr('view-child', x);
        $myWrapper.find('.search-result-list li:lt(' + x + ')').fadeIn();
        if (x === liSize) {
            $myWrapper.find('.load-more').addClass('disabled');
        }
        if ($('img').hasClass('lazy')) {
            $("img.lazy").lazyload();
        }
    });

    //Start Check to see if the window is top if not then display backtotop button
    function showBacktoTopBtn() {
        var sP = $(window).outerHeight() + $(this).scrollTop();
        if (sP > $(window).outerHeight() + 100 && $(window).outerWidth() < 992) {
            $('.scrollToTop.mobile').fadeIn();
        } else {
            $('.scrollToTop.mobile').fadeOut();
        }
    }

    showBacktoTopBtn();

    $(window).resize(function () {
        showBacktoTopBtn();
    });

    $(window).scroll(function () {
        showBacktoTopBtn();
    });
    //End Check to see if the window is top if not then display backtotop button

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    //BRF tabs
    $("ul.tabs li").click(function () {
        $(".tab-content").hide();
        var activeTab = $(this).attr("data-rel");
        $("#" + activeTab).fadeIn();
        $("ul.tabs li").removeClass("active_tabs");
        $(this).addClass("active_tabs");
        $(".tab_heading").removeClass("d_active");
        $(".tab_heading[data-rel^='" + activeTab + "']").addClass("d_active");
    });

    //simple accordion
    $('.accordionButton').click(function () {
        var $group = $(this).parent().closest('.accordion-group');

        // if a group is container is set, let's limit the changes to its contents instead of affecting other accordions
        if ($group.length > 0) {
            $group.find('.accordionButton').removeClass('open');
            $group.find('.accordionContent').slideUp('normal');
        } else {
            $('.accordionButton').removeClass('open');
            $('.accordionContent').slideUp('normal');
        }

        if ($(this).next().is(':hidden') === true) {
            $(this).addClass('open');
            $(this).next().slideDown('normal');
        }
    });
    $('.accordionContent').hide();

    //generic expand/collapse icon toggling based on aria-expanded of the trigger. if using Bootstrap 4 collapse with proper attributes, just use this because toggling of display and aria-expanded is already handled by Bootstrap
    $('.collapse-trigger').click(function (e) {
        var trigger = $(this),
            removeIconClass = trigger.data('icon-expand') || "icon-exapnd-outline-circled",
            addIconClass = trigger.data('icon-collapse') || "icon-collapse-outline-circled",
            temp;

        if (trigger.attr('aria-expanded') === "true") {
            temp = addIconClass;
            addIconClass = removeIconClass;
            removeIconClass = temp;
        }

        trigger.find('span.icon, span.icon2, span.icon3, i').first().removeClass(removeIconClass).addClass(addIconClass);
    });


    // Click functions for Message Boxes
    $('#message-box-warning-toggle').click(function () {
        $('.message-box-warning-script').fadeIn(1000);
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //if close button is clicked
        $('.close-button').click(function (e) {
            //Cancel the link behavior
            e.preventDefault();
            $('.message-box-warning-script').fadeOut(500);
        });
        setTimeout(function () {
            $('.message-box-warning-script').fadeOut(1000);
        }, 7000);
    });
    $('#message-box-success-toggle').click(function () {
        $('.message-box-success-script').fadeIn(1000);
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();

        //if close button is clicked
        $('.close-button').click(function (e) {
            //Cancel the link behavior
            e.preventDefault();
            $('.message-box-success-script').fadeOut(500);
        });
        setTimeout(function () {
            $('.message-box-success-script').fadeOut(1000);
        }, 7000);
    });


    //Update information for collapse/expand element
    $('.expand-info-toggle').click(function (e) {
        var $this = $(this);
        var $accrd = $('#accordion-scrollSample');
        setTimeout(function () {
            var accrdHeight = $this.attr('aria-expanded') === "true" ? "auto" : "";
            $accrd.css({
                height: accrdHeight
            });
        }, 510);

    });

    //this for modal focus trapping
    addAriaHiddenToModalSiblings = function ($this) {
        $this.siblings().not('.modal').not('script').each(function (i, v) {
            var $thisSibling = $(v);
            if (!$thisSibling.hasClass('modal')) {
                if (!($thisSibling.attr('aria-hidden') !== undefined)) {
                    $thisSibling.removeAttr('aria-hidden');
                    $thisSibling.attr('aria-hidden', true);
                } else {
                    if ($thisSibling.attr('aria-hidden') === "false") {
                        $thisSibling.attr('aria-hidden', true);
                        $thisSibling.addClass('hasExistingAriaFalse');
                    } else {
                        $thisSibling.addClass('hasExistingAria');
                    }
                }
            }
        });
    };

    addAriaHiddenToModalParentsSiblings = function ($this) {
        var modalPArents = $this.parents().not('body').not('html').length;
        var currentParent = $this.parent();

        for (var i = 0; i <= modalPArents - 1; i++) {
            currentParent.siblings().not('.modal').not('script').each(function (i, v) {
                var $thisSibling = $(v);
                if (!$thisSibling.hasClass('modal')) {
                    if (!($thisSibling.attr('aria-hidden') !== undefined)) {
                        $thisSibling.removeAttr('aria-hidden');
                        $thisSibling.attr('aria-hidden', true);
                    } else {
                        if ($thisSibling.attr('aria-hidden') === "false") {
                            $thisSibling.attr('aria-hidden', true);
                            $thisSibling.addClass('hasExistingAriaFalse');
                        } else {
                            $thisSibling.addClass('hasExistingAria');
                        }
                    }
                }
            });
            currentParent = currentParent.parent();
        }
    };

    removeAriaHiddenToModalSiblings = function ($this) {
        $this.siblings().not('.modal').each(function (i, v) {
            var $thisSibling = $(v);
            if (!$thisSibling.hasClass('modal')) {
                if ($thisSibling.hasClass('hasExistingAria')) {
                    $thisSibling.removeClass('hasExistingAria');
                } else {
                    if ($thisSibling.hasClass('hasExistingAriaFalse')) {
                        $thisSibling.attr('aria-hidden', false);
                        $thisSibling.removeClass('hasExistingAriaFalse');
                    } else {
                        $thisSibling.removeAttr('aria-hidden');
                    }
                }
            }
        });
    };

    removeAriaHiddenToModalParentsSiblings = function ($this) {
        var modalPArents = $this.parents().not('body').not('html').length;
        var currentParent = $this.parent();

        for (var i = 0; i <= modalPArents - 1; i++) {
            currentParent.siblings().not('.modal').each(function (i, v) {
                var $thisSibling = $(v);
                if (!$thisSibling.hasClass('modal')) {
                    if ($thisSibling.hasClass('hasExistingAria')) {
                        $thisSibling.removeClass('hasExistingAria');
                    } else {
                        if ($thisSibling.hasClass('hasExistingAriaFalse')) {
                            $thisSibling.attr('aria-hidden', false);
                            $thisSibling.removeClass('hasExistingAriaFalse');
                        } else {
                            $thisSibling.removeAttr('aria-hidden');
                        }
                    }
                }
            });
            currentParent = currentParent.parent();
        }
    };

    $("[data-toggle='modal']").on('click', function () {
        $this = $($(this)[0].dataset.target);
        $this.removeAttr('aria-hidden');

        //add aria hidden upon open in adroid device to handle the accessibiliy issue
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;

        var modalDisplayed = $.grep($('.modal').not($this), function (v, i) {
            return $(v).css('display') === "block";
        });

        // added modalDisplayed.length < 1 to avoid multiple trapping that can cause reading issue for nested modal
        if (modalDisplayed.length < 1 && isAndroid) {
            addAriaHiddenToModalSiblings($this);
            addAriaHiddenToModalParentsSiblings($this);
        }
    });


    //remove the aria hidden upon close in adroid device to handle the accessibiliy issue
    //removed dismiss.bs.modal to make it work on multiple click
    $(".modal").on("click", '[data-dismiss="modal"]', function (c) {
        var $this = $(this).parents('.modal');
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;

        //$this.attr('aria-hidden', true); commented this out since its not needed, if the modal has display none it will be hidden from SR
        var modalDisplayed = $.grep($('.modal').not($this), function (v, i) {
            return $(v).css('display') === "block";
        });

        if (modalDisplayed.length < 1 && isAndroid) {
            removeAriaHiddenToModalSiblings($this);
            removeAriaHiddenToModalParentsSiblings($this);
        }
    });

    //This script is for the new copy of existing accordion that is accessible. The bell.js is using a specific class that's why the script is not reusable to the duplicate of existing accordion.
    //Accordion expand/collapse
    $('.accordion-accessible-toggle').click(function (e) {
        var $this = $(this),
            $toggleIcon = $this.find('span.icon, span.icon2, span.icon3, i').first(),
            $expandedAttr = $this.attr('aria-expanded') === "true" ? "false" : "true",
            iconExpand = $this.data('icon-expand') || "icon-exapnd-outline-circled",
            iconCollapse = $this.data('icon-collapse') || "icon-collapse-outline-circled",
            newIconClass = $this.attr('aria-expanded') === "true" ? iconExpand : iconCollapse;

        $this.parent().closest(".accordion-wrap").find('.collapse-accordion-accessible-toggle').slideToggle();
        $toggleIcon.removeClass(iconExpand + ' ' + iconCollapse);

        $toggleIcon.addClass(newIconClass);
        $this.attr('aria-expanded', $expandedAttr);
    });
    //---END
    //EPP-FAQ accordion
    $(".faq-accordion-header").click(function () {
        if ($(this).parents(".accordion-main-wrap").hasClass('active')) {
            $(this).parents(".accordion-main-wrap").removeClass("active");
            $(this).parents(".accordion-main-wrap").siblings(".faq-accordion-body").removeClass("show");
            $(this).children(".icon").addClass("icon-small_icon_expand");
            $(this).children(".icon").removeClass("icon-small_icon_collapse");
        } else {
            $(".accordion-main-wrap").removeClass("active");
            $(".accordion-main-wrap").siblings(".faq-accordion-body").removeClass("show");
            $(".faq-accordion-header").children(".icon").addClass("icon-small_icon_expand");
            $(".faq-accordion-header").children(".icon").removeClass("icon-small_icon_collapse");
            $(this).parents(".accordion-main-wrap").addClass("active");
            $(this).parents(".accordion-main-wrap").siblings(".faq-accordion-body").addClass("show");
            $(this).children(".icon").addClass("icon-small_icon_collapse");
            $(this).children(".icon").removeClass("icon-small_icon_expand");
        }
    });
    //Applying Aria properties to the accordion with 'accordionbutton and accordion content' design markup
    $('.accordionButton').click(function (e) {
        var $this = $(this),
            $group = $this.parent().closest('.accordion-group'),
            $labelCont = $this.find('a');

        $expandedAttr = $labelCont.attr('aria-expanded') === "true" ? "false" : "true";

        //Reset the accessibility label of the other accordion
        $group.find('.accordionButton a').not($labelCont).attr('aria-expanded', 'false');

        //Update the accessibility label of the accordion
        $labelCont.attr('aria-expanded', $expandedAttr);
    });

    //$('#accordionReadMore').click(function (e) {
    //    //debugger;
    //    var $this = $(this);
    //    var txt = $this.attr('aria-expanded') === "false" ? "Read less" : "Read more";
    //    $this.attr('aria-label', txt);
    //    $this.html(txt);
    //})

    $('.read-more-toggle').click(function (e) {
        var $this = $(this);

        if ($this.attr('aria-expanded') === 'true') {
            $this.attr('aria-expanded', false).attr('aria-label', $this.find('.read-more-show-text').text());
        } else {
            $this.attr('aria-expanded', true).attr('aria-label', $this.find('.read-more-hide-text').text());
        }
    });

    $('.read-more-toggle').keypress(function (e) {
        if (13 === (e.which || e.keyCode || 0)) {
            e.preventDefault();
            e.stopPropagation();
            $(this).trigger('click');
        }
    });

    //Important to make tootltip inner links accesible with keyboard

    $('.tooltip-interactive').each(function () {
        var $this = jQuery(this);
        $this.tooltip({
            container: $this
        });
    });

});
document.addEventListener("DOMContentLoaded", () => {
    var cntr = 0;
    const runInt = setInterval(myInterval, 500);
    function myInterval() {
        if (cntr < 120) {
            if ($('.slick-slide .card-container a img').length > 0) {
                $('.slick-slide .card-container a img.lazy').on('load', function () {
                    processSameHeightElements();
                });
                clearInterval(runInt);
            }
        } else {
            clearInterval(runInt);
        }
        cntr++;
    }
});


//Accordion expand/collapse 
// add support for exclusive accordion groups. this looks for the ancestor with accordion-wrap class and limits toggling of accordions to those within it only. if the class isn't found, the accordion affects all other accordions in the page
$('.accordion-tog').click(function () {
    var trigger = $(this),
        exclusiveContainer = trigger.parent().closest('.accordion-wrap');

    if (exclusiveContainer.length === 0) {
        exclusiveContainer = $(document);
    }

    exclusiveContainer.find('.collapse-accordion').slideToggle();
    if (exclusiveContainer.find('.accordPanel').attr('aria-expanded') === 'false') {
        trigger.attr('aria-expanded', 'true');
        trigger.find('span.icon, span.icon2, span.icon3, i').first().attr('aria-expanded', 'true');
        exclusiveContainer.find('.accordion-heading>a>i.icon').addClass('icon-collapse-outline-circled').removeClass('icon-exapnd-outline-circled');
    }
    else {
        trigger.attr('aria-expanded', 'false');
        trigger.find('span.icon, span.icon2, span.icon3, i').first().attr('aria-expanded', 'false');
        exclusiveContainer.find('.accordion-heading>a>i.icon').addClass('icon-exapnd-outline-circled').removeClass('icon-collapse-outline-circled');
    }
});
$('.accordion-tog-1').click(function () {
    $('.collapse-accordion-1').slideToggle();
    if ($('.accordPanel-1').attr('aria-expanded') === 'false') {
        $(this).attr('aria-expanded', 'true');
        $('div>i').attr('aria-expanded', 'true');
        $('.accordion-heading>a>div>i.icon').addClass('icon-collapse-outline-circled');
        $('.accordion-heading>a>div>i.icon').removeClass('icon-exapnd-outline-circled');
    }
    else {
        $(this).attr('aria-expanded', 'false');
        $('div>i').attr('aria-expanded', 'false');
        $('.accordion-heading>a>div>i.icon').addClass('icon-exapnd-outline-circled');
        $('.accordion-heading>a>div>i.icon').removeClass('icon-collapse-outline-circled');
    }
});
//Adds space below the footer when the dock is open to allow the full page to scroll in view 
$(".dock-handle").click(function () {
    var height = $(".summaryTable").height();
    $(".add-height-to-div").height(height + 100);
});

//Enables the dock button when a rate plan has been selected
$('.usageDiv.usageActive').on('click touch', function () {
    $('.btn-default-blue').removeClass("disabled");
});

//Creates equal height columns inside of the modal window
$('.modal').on('show.bs.modal', function () {
    setTimeout(function () {
        var arr = $.makeArray();
        if ($(window).width() > 768) {
            $('.eq-height .eq-height-div').each(function () {
                arr.push($(this).outerHeight());
            });
            $('.eq-height .eq-height-div').css('height', Math.max.apply(Math, arr) + 'px');
        }
    }, 300);
});

//Hides the flyout menus when user presses esc button
$('.connector-area').on('mouseover focus click touch', function (e) {
    $('.connector-lob-flyout').css({ "opacity": "1", "display": "block" });
});
$(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
        $('.connector-lob-flyout').css({ "opacity": "0", "display": "none" });
        $('.secondary-nav-dropdown').css({ "display": "none" });
        $('.popup').css({ "display": "none" });
        $('.trigger-popup').attr('aria-expanded', 'false');
    }
});
$('.federal-bar-links.federal-bar-links_right .popup').on('focusin keydown', function (e) {
    if (e.keyCode === 27) {
        $(this).prev('.trigger-popup').focus();
        $('body').addClass('is_tabbing');
        setTimeout(function () {
            $('.trigger-popup').attr('aria-expanded', 'false');
        });
    }
});


//For Asset Tabs 2 with Accessibility 
var AssetsTabsTwoInitialize = {
    init: function () {
        this.resizeId;
        this.breakpoint;

        AssetsTabsTwo.init();
        this.checkBreakpoint();
    },

    resized: function () {
        clearTimeout(this.resizeId);
        this.resizeId = setTimeout(this.doneResizing, 300);

    },

    doneResizing: function () {
        AssetsTabsTwoInitialize.checkBreakpoint();
    },

    getWindowWidth: function () {
        return $(window).width();
    },

    checkBreakpoint: function () {

        if (this.getWindowWidth() <= 767 && this.breakpoint !== 'device') {
            this.breakpoint = 'device';
            AssetsTabsTwo.resetTabsToInitState();
        } else if (this.getWindowWidth() >= 768 && this.breakpoint !== 'desktop') {
            this.breakpoint = 'desktop';
            AssetsTabsTwo.resetTabsToInitState();
        }
    }
};

var AssetsTabsTwo = {
    init: function () {
        this.tablist = $('.tabs[role="tablist"]').each(function () { });

        // Add or substract depending on key pressed
        this.direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1
        };

        // For easy reference
        this.keys = {
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            delete: 46
        };

        // Apply Tab lists function only if it's an existing element 
        if (this.getTabListLength() !== 0) {
            var targetElement = null;
            if (this.getTabListLength() > 1) {


                // Bind Per Multiple Tab Lists
                for (ctr = 0; ctr < this.getTabListLength(); ctr++) {
                    targetElement = this.tablist[ctr];

                    this.activateTabList(targetElement);
                }

            } else {
                targetElement = this.tablist[0];

                // Bind Per Single Tab Lists
                this.activateTabList(targetElement);

            }
        }

        this.selectOnMobile();
    },

    activateTabList: function (targetElement) {
        // Bind listeners
        for (i = 0; i < this.generateTabs(targetElement).length; ++i) {
            this.addListeners(targetElement, i);
        }
    },

    // Get How Many Tablist in the page
    getTabListLength: function () {
        return this.tablist.length;
    },

    // Get How Many Tabs on Every Tab list in the page
    getTabsLength: function (tabs) {
        return tabs.length;
    },

    // Get all tabs
    generateTabs: function (targetElement) {

        var tabs = $(targetElement).find('[role="tab"]');

        return tabs;
    },

    // Get all tab panels
    generatePanels: function (targetElement) {
        var targetElementPanel = $(targetElement).attr('id');

        var panels = $('[data-tablist="' + targetElementPanel + '"]').find('[role="tabpanel"]');

        return panels;
    },

    addListeners: function (targetElement, index) {
        var that = this;
        this.generateTabs(targetElement)[index].addEventListener('click', function () {

            that.clickEventListener(targetElement);
        });
        this.generateTabs(targetElement)[index].addEventListener('keydown', function () {
            that.keydownEventListener(targetElement);
        });
        this.generateTabs(targetElement)[index].addEventListener('keyup', function () {
            that.keyupEventListener(targetElement);
        });

        // Build an array with all tabs (<button>s) in it
        this.generateTabs(targetElement)[index].index = index;
    },

    // When a tab is clicked, activateTab is fired to activate it
    clickEventListener: function (targetElement) {

        var tab = event.target;

        this.activateTab(tab, false, targetElement);
    },

    // Handle keydown on tabs
    keydownEventListener: function (targetElement) {
        var key = event.keyCode;
        var that = this;


        switch (key) {
            case that.keys.end:
                event.preventDefault();
                // Activate last tab
                that.activateTab(that.generateTabs(targetElement)[that.generateTabs(targetElement).length - 1]);
                break;
            case that.keys.home:
                event.preventDefault();
                // Activate first tab
                that.activateTab(that.generateTabs(targetElement)[0]);
                break;

            // Up and down are in keydown
            // because we need to prevent page scroll >:)
            case that.keys.up:
            case that.keys.down:
                that.determineOrientation(event, targetElement);
                break;
        }
    },

    // Handle keyup on tabs
    keyupEventListener: function (targetElement) {
        var key = event.keyCode;
        var that = this;

        switch (key) {
            case that.keys.left:
            case that.keys.right:
                that.determineOrientation(event, targetElement);
                break;
            case that.keys.delete:
                that.determineDeletable(event);
                break;
        }
    },

    // When a tablists aria-orientation is set to vertical,
    // only up and down arrow should function.
    // In all other cases only left and right arrow function.
    determineOrientation: function (event, targetElement) {

        var key = event.keyCode;
        var vertical = $(targetElement).attr('aria-orientation') === 'vertical';
        var proceed = false;

        if (vertical) {
            if (key === this.keys.up || key === this.keys.down) {
                event.preventDefault();
                proceed = true;
            }
        }
        else {
            if (key === this.keys.left || key === this.keys.right) {
                proceed = true;
            }
        }

        if (proceed) {
            this.switchTabOnArrowPress(event, targetElement);
        }
    },

    switchTabOnArrowPress: function (event, targetElement) {
        var pressed = event.keyCode;
        var that = this;

        for (x = 0; x < this.generateTabs(targetElement).length; x++) {
            this.generateTabs(targetElement)[x].addEventListener('focus', function () {

                that.focusEventHandler(targetElement);
            });
        }

        if (this.direction[pressed]) {

            var target = event.target;


            if (target.index !== undefined) {

                if (this.generateTabs(targetElement)[target.index + this.direction[pressed]]) {

                    this.generateTabs(targetElement)[target.index + this.direction[pressed]].focus();
                }
                else if (pressed === this.keys.left || pressed === this.keys.up) {

                    this.focusLastTab(targetElement);
                }
                else if (pressed === this.keys.right || pressed === this.keys.down) {

                    this.focusFirstTab(targetElement);
                }
            }
        }
    },

    // Activates any given tab panel
    activateTab: function (tab, setFocus, targetElement) {

        setFocus = setFocus || true;
        // Deactivate all other 
        this.deactivateTabs(targetElement);

        // Remove tabindex attribute
        tab.removeAttribute('tabindex');

        // Set the tab as selected
        tab.setAttribute('aria-selected', 'true');

        // Get the value of aria-controls (which is an ID)
        var controls = tab.getAttribute('aria-controls');

        // Remove hidden attribute from tab panel to make it visible
        $('#' + controls).removeAttr('hidden');
        $('#' + controls).show();

        tab.classList.add('active_tabs');

        // Set focus when required
        if (setFocus) {
            tab.focus();
        }
    },

    // Deactivate all tabs and tab panels
    deactivateTabs: function (targetElement) {
        var that = this;

        for (t = 0; t < this.generateTabs(targetElement).length; t++) {
            this.generateTabs(targetElement)[t].setAttribute('tabindex', '-1');
            this.generateTabs(targetElement)[t].setAttribute('aria-selected', 'false');
            this.generateTabs(targetElement)[t].classList.remove('active_tabs');
            this.generateTabs(targetElement)[t].removeEventListener('focus', function () {

                that.focusEventHandler(targetElement);
            });
        }

        for (p = 0; p < this.generatePanels(targetElement).length; p++) {
            this.generatePanels(targetElement)[p].setAttribute('hidden', 'hidden');
            this.generatePanels(targetElement)[p].style.display = 'none';
        }
    },

    // Focus First Tab
    focusFirstTab: function (targetElement) {
        this.generateTabs(targetElement)[0].focus();
    },

    // Focus Last Tab
    focusLastTab: function (targetElement) {
        this.generateTabs(targetElement)[this.generateTabs(targetElement).length - 1].focus();
    },

    focusEventHandler: function (targetElement) {
        var target = event.target;

        setTimeout(AssetsTabsTwo.checkTabFocus(targetElement, target), 300);
    },

    // Only activate tab on focus if it still has focus after the delay
    checkTabFocus: function (targetElement, target) {
        focused = document.activeElement;

        if (target === focused) {
            this.activateTab(target, false, targetElement);
        }
    },

    // Change tabpanel display when using select list 
    selectOnMobile: function () {
        $('.custom-selection[role="listbox"]').on('change', function () {
            var target = $(this).find("option:selected").attr('data-rel');
            $('#' + target).removeAttr('hidden');
            $('#' + target).show();
        });
    },

    // Reset all tabs and panels to initial state
    resetTabsToInitState: function () {

        // Check if tab list is more than one
        $('.tabs[role="tablist"]').each(function () {

            // Check if tabs is more than one
            $(this).find('[role="tab"]').each(function () {

                $(this).attr('tabindex', '-1');
                $(this).attr('aria-selected', 'false');
                $(this).removeClass('active_tabs');
            });

            $(this).find('[role="tab"]:first-child').addClass('active_tabs');
            $(this).find('[role="tab"]:first-child').attr('tabindex', '0');
            $(this).find('[role="tab"]:first-child').attr('aria-selected', 'true');
        });

        $('.tab_container').each(function () {

            $(this).find('[role="tabpanel"]').each(function () {
                $(this).attr('hidden', 'hidden');
            });

            $(this).find('[role="tabpanel"]:first-child').removeAttr('hidden');
            $(this).find('[role="tabpanel"]:first-child').show();
        });

        $('.custom-selection').each(function () {
            $(this).find('option').each(function () {
                $(this).prop('selected', function () {
                    return this.defaultSelected;
                });
            });
        });

    }
};


$(window).on('resize', function () {
    AssetsTabsTwoInitialize.resized();
});



//for equal height columns
(function (factory) {
    //'use strict';
    //if (typeof define === 'function' && define.amd) {
    //    define(['jquery'], factory);
    //} else if (typeof exports !== 'undefined') {
    //    module.exports = factory(require('jquery'));
    //} else {
    factory(jQuery);
    //}

}(function ($) {
    'use strict';
    var ColEqualizer = window.ColEqualizer || {};
    ColEqualizer = (function () {
        function ColEqualizer(element) {
            var _ = this;
            _.el = element;
            _.colHeight(_.el);
            _.winLoad();
        }
        return ColEqualizer;
    }());

    ColEqualizer.prototype.colHeight = function (element) {
        var _ = this;
        $(element).each(function (index, el) {
            _.colReset(el);
            var tallest = 0;
            $('[class*=col-]', el).each(function (i, e) {
                var testHeight = $(e).height();
                if (testHeight > tallest) {
                    tallest = testHeight;
                }
            });
            if (tallest > 0) {
                $('[class*=col-]', el).height(tallest);
            }
        });

    };
    ColEqualizer.prototype.colReset = function (el) {
        $('[class*=col-]', el).height('auto');
    };

    ColEqualizer.prototype.resizeWindow = function () {
        var _ = this;
        var viewWidth = window.outerWidth;
        if (viewWidth <= 0) {
            viewWidth = $(window).width();
        }
        // If set, minWidth shows/hides the nav based on the size of the browser
        // If minWidth not set, nav will always show
        if (100 <= viewWidth) {
            _.colHeight(_.el);
        } else {
            _.colReset(_.el);
        }
    };

    ColEqualizer.prototype.winLoad = function () {
        var _ = this;
        var $win = $(window);
        $win.load(function () {
            $win.on('resize', function () {
                _.resizeWindow();
            });
            _.resizeWindow();
        });
    };

    $.fn.colequalizer = function () {
        var _ = this;
        return _.each(function (index, element) {
            element.navinator = new ColEqualizer(element);
        });
    };
}));
function equalColumns() {
    try {
        $('.col-eq').colequalizer();
    } catch (err) {
        // ignore error
    }
}

//function to adjust child element width to parent for mobile and above
//a is parentClass name, b is child class name, c is to set px width for mobile view port
//e.g.("div.float_socialIcon_parent", ".social_icons_wrapper","200px");
function parent_width_matcher(_parentClass, _childClass, _mobileWidth) {
    if (window.innerWidth >= 768) {
        try {
            if ($(_parentClass).length) {
                var par_width = $(_parentClass).width();
                $(_childClass).width(par_width);
            }
        } catch (e) {
            // ignore error
        }
    } else {
        $(_childClass).width(_mobileWidth);
    }
}

//function to toggle opacity of element
//a is element class name and b is bool (true/false)
//eg. ('div.container',true') 
function showHideElementToggle(_el, _showIcons) {
    _showIcons ? $(_el).css('opacity', '0') :
        $(_el).css('opacity', '1');
}

// Element position switcher for Tablet and Desktop and hide element when near footer
//for mobile the positon switch to relative
// eg. ('div.float_socialIcon_parent .social_icons_wrapper' ,150) where social icons will be sticky on tablet and above and relative on mobile
// and 150 is the value of the pixels from bottom to hide it
function StickyFloatSwitcher(a, _b) {
    if ($(a).length) {
        var $el = $(a);
        var isPositionFixed = $el.css('position') === 'fixed';
        if (window.innerWidth >= 768) {
            if ($(this).scrollTop() > 250 && !isPositionFixed) {
                $el.css({ 'position': 'fixed', 'top': '10px' });
            }
            if ($(this).scrollTop() < 250 && isPositionFixed) {
                $el.css({ 'position': 'static', 'top': '10px' });
            }
            if ($(window).scrollTop() + $(window).height() >= $(document).height() - _b) {
                showHideElementToggle($el, true);
            }
            else {
                showHideElementToggle($el, false);
            }
        }
    }
}
//Right side Floating side menu container 
var Sidemenu = {
    IsStickyMenu: false,
    Stickied: true,
    Mobile: false,
    //mainCont can be <main> height if the component need to be touching top
    mainCont: ".mainNonFloatcontent",
    //parent container class for getting width and set to stickyItemWrapper
    parentCont: "div.WideItemContainer",
    //sticky element
    stickyElem: ".stickySide_awesome",
    stickyItemWrapper: ".stickyItemWrapper",
    sideItemContainer: ".mainNonFloatcontent",
    floatposClassName: 'pos-fixed-top-imp',
    Init: function () {
        //check if the page contains the stickySide only then load the sticky behaviour
        if ($(Sidemenu.stickyElem).length > 0) {
            Sidemenu.IsStickyMenu = true;
            if (window.innerWidth < 768) {
                Sidemenu.Mobile = true;
                if ($(Sidemenu.stickyItemWrapper).hasClass(Sidemenu.floatposClassName)) {
                    $(Sidemenu.stickyItemWrapper).removeClass(Sidemenu.floatposClassName);
                }
            } else {
                Sidemenu.Mobile = false;
                Sidemenu.widthmatch(Sidemenu.parentCont, Sidemenu.stickyItemWrapper, "auto");
            }
        }
    },
    widthmatch: function (_parentClass, _childClass, _mobileWidth) {
        if (window.innerWidth >= 768) {
            try {
                if ($(_parentClass).length) {
                    var par_width = $(_parentClass).width();
                    $(_childClass).width(par_width);
                }
            } catch (e) {
                // ignore error
            }
        } else {
            $(_childClass).width(_mobileWidth);
        }
    },
    StickyScroll: function (e) {
        if (Sidemenu.Mobile || !Sidemenu.IsStickyMenu) {
            return;
        }
        var whereAmI = $(window).scrollTop();
        var buffer = 55;

        var $mainElem = $(Sidemenu.mainCont);
        //whole main container position
        var topCorner = $mainElem.position();
        //whole main container height
        var ccheight = $mainElem.height();

        var absoluteBottom = ccheight + topCorner.top; //this gives the absolute bottom corner

        //content panel height
        var mainHeight = $(Sidemenu.sideItemContainer).height();

        var lcheight = $(Sidemenu.stickyElem).height();
        var lcBottom = whereAmI + lcheight;
        var tooFar = absoluteBottom - (lcBottom + buffer);

        if (mainHeight > lcheight) {
            if (whereAmI > topCorner.top && tooFar > 0) {// && (limit < ccheight)) {
                if (!Sidemenu.Stickied) {
                    $(Sidemenu.stickyItemWrapper).addClass(Sidemenu.floatposClassName);
                    $(Sidemenu.stickyElem).css("top", 0);
                    Sidemenu.Stickied = true;
                }
            } else if (tooFar < 0) {
                $(Sidemenu.stickyElem).css("top", tooFar);
                Sidemenu.Stickied = false;
            } else {//if (whereAmI < topCorner.top){//snap back to where we should be
                if (Sidemenu.Stickied) {
                    $(Sidemenu.stickyItemWrapper).removeClass(Sidemenu.floatposClassName);
                    $(Sidemenu.stickyElem).css("top", 0);
                    Sidemenu.Stickied = false;
                }
            }
        }
    }
};

$(window).scroll(function (e) {
    if (Sidemenu.IsStickyMenu) {
        Sidemenu.StickyScroll(e);
    }
});

$(window).resize(function () {
    Sidemenu.Init();
});


//Features Boxes Checkbox active state
$(document).on('click', '.checkbox-selection', function () {
    if ($(this).prop("checked")) {
        $(this).parent().parent().parent().parent().removeClass("borderGrayLight6").addClass("borderBlue border-2px");
    } else {
        $(this).parent().parent().parent().parent().removeClass("borderBlue border-2px").addClass("borderGrayLight6 ");
    }
});

//Sticky header on scroll function
if (document.getElementById("fixedHeader")) {
    window.onscroll = function () { fixedHeader(); };
    var header = document.getElementById("fixedHeader");
    var fixed = header.offsetTop;
}
function fixedHeader() {
    if (window.pageYOffset > fixed) {
        header.classList.add("fixed-active-lob");
        $('body').addClass("fixed-nav");
    } else {
        header.classList.remove("fixed-active-lob");
        $('body').removeClass("fixed-nav");
    }
}

//Bell find a store filter options flyout
$('.find-a-store-filter-js').on('click touch', function () {
    $('.find-a-store-filter').removeClass('hide');
    $('.bell-stores-options').addClass('hide');
    $('.federal-bar-store-locator-popup').addClass('filter-options');
});
$(document).on('click touch', function () {
    $('.find-a-store-filter').addClass('hide');
    $('.bell-stores-options').removeClass('hide');
    $('.federal-bar-store-locator-popup').removeClass('filter-options');
});

//Trap focus on mobile global nav 
$(document).on('click', '.connector-nav-open-button, .screen', function () {
    $("main").find('*').not('[tabindex="-1"]').attr("tabindex", "-1").addClass('tabneg');
    $("footer").find('*').not('[tabindex="-1"]').attr("tabindex", "-1").addClass('tabneg');
    $(".connector-active-lob").find('*').not('[tabindex="-1"]').attr("tabindex", "-1").addClass('tabneg');
    //Adding aria-hidden=true and ariahiddentrue class to the elements that should not be read by the screenreader when the navigation menu is open
    $('body .tabneg').not('[aria-hidden="true"]').attr("aria-hidden", "true").addClass('ariahiddentrue');
});
$(document).on('click', 'body.connector-active .connector-nav-open-button, .screen', function () {
    //Remove aria-hidden=true and ariahiddentrue class to the elements that should not be read by the screenreader when the navigation menu is open
    $('body .ariahiddentrue').removeAttr('aria-hidden').removeClass('ariahiddentrue');
    $('body .tabneg').removeAttr('tabindex').removeClass('tabneg');
});


$(document).ready(function () {
    initBRF();
    $(document).on('hidden.bs.modal', function (event) {
        if ($('.modal:visible').length) {
            $('body').addClass('modal-open');
        }
    });
});

/*
Start Accessibility fix for modal (focus trapper)
Reference: https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal 
If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.
If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.
*/
$(document).on('keydown', '.modal', function (e) {
    let tabPressed = e.key === 'Tab' || e.keyCode === 9;

    // proceed only to the remaining script if tab key is pressed
    if (!tabPressed) {
        return;
    }

    // treat radio group as one tabbable element to get the correct first focusable element and last focusable element inside the modal
    if ($(':focus').is(':radio')) {
        let name = $(':focus').attr('name');
        $(':focus').removeClass('not-tabbable');
        $(this).find(':radio[name="' + name + '"]:not(:focus)').addClass('not-tabbable');
    }

    // get all focusable elements inside the modal then get first and last focusable element.
    let focusableElements = $(this).find('a[href], button, input, textarea, select, details, [tabindex]').filter(':not([tabindex="-1"])').filter(':not([disabled])').filter(':visible').filter(':not(.not-tabbable)');
    let firstFocusable = focusableElements.first();
    let lastFocusable = focusableElements.last();

    // disable tab if no focusable element on modal
    if (focusableElements.length == 0) {
        e.preventDefault();
    }

    // if tab + shift key is pressed, check if focus is in the first focusable element then reroute the next focus to the last focusable element
    if (e.shiftKey) {
        if (firstFocusable.is(':focus')) {
            lastFocusable.focus();
            e.preventDefault();
        }
    }
    // if tab key is pressed, check if focus is in the last focusable element then reroute the next focus to the first focusable element
    else {
        if (lastFocusable.is(':focus')) {
            firstFocusable.focus();
            e.preventDefault();
        }
    }
});
// End accessibility fix for modal (focus trapper)

$('#connector-search').on('reset', function () {
    $('#topNavSearch').focus();
});

//closes Tooltip on esc button
$(document).keyup(function (event) {
    if (event.which === 27) {
        $('.tooltip').tooltip('hide');
    }
});

//Retain focus outline when clicking on dropdown triggers or any element that has an aria-expanded while user is tabbing
//This is because nvda forces click event on space and enter key events
//And by default, click event removes focus outline so this serves as an exception
function retainFocusOutline(element) {

    let focusedElement = null;

    element.on('mousedown', function () {
        if (!focusedElement) {
            if ($('body').hasClass('is_tabbing')) {
                focusedElement = $(this);
            }
        }
        else {
            if (!focusedElement.is($(this))) {
                focusedElement = null;
                $('body').removeClass('is_tabbing');
            }
        }
    })

        .on('mouseup', function () {
            if (focusedElement) {
                if (focusedElement.is($(this))) {
                    $('body').addClass('is_tabbing');
                }
            }
        })

        .on('focus', function () {
            if ($('body').hasClass('is_tabbing')) {
                focusedElement = $(this);
            }
        });
}

$(function () {
    // add selectors here to retain focus outline
    const selectors = [
        '#federal-bar-store-locator-popup-btn',
        '#province-selector-trigger',
        '.connector-lob-no-href',
        '.sub-nav-level-1',
        '.connector-nav-open-button',
        '#connector-search-button',
        '.container.additional-details .collapse-trigger',
        '#appointmentsCallBack .close[data-dismiss="modal"]',
        '#btn-Book_appointment',
        '#button.btn-activate-simcard-eSim',
        '#input.js-btnSolutionBuild'
    ]

    retainFocusOutline($(selectors.join(', ')));

    // it can also be called like this:
    // retainFocusOutline($('.your-selector'));
});;
// START global variables and constants

var KEYS = {
    space: 32,
    enter: 13,
    left: 37,
    right: 39,
    up: 38,
    down: 40,
    home: 36,
    end: 35,
    esc: 27
};
// END global and constants

//Window resize
function handleWindowResizeSupport(callbackFunction) {
    let resizeTimeoutFnSupport = 0;
    $(window).on('resize', function () {
        clearTimeout(resizeTimeoutFnSupport);
        resizeTimeoutFnSupport = setTimeout(callbackFunction(), 200);
    });
}

// START Tab Control (tabs DO NOT cause page redirect)
ActualTabs = {
    options: {
        tabSelector: '.actual-tabs-controller-js[role=tablist] [role=tab]'
    },
    init: function (config) {
        var extendedOptions = $.extend(this.options, config),
            $tabs = $(extendedOptions.tabSelector),
            $tabList = $tabs.first().parent().closest('[role=tablist]');

        $tabList.data('actualtabs-options', JSON.stringify(extendedOptions));

        this.initTabEvents($tabs);
    }, initTabEvents: function (tabs) {
        var $tabs = tabs ? $(tabs) : $(tabs.tabSelector);

        // toggle attributes and class when a tab is clicked
        $tabs.on('click', this._tabClickListener);

        // automatic tabs automatically change tab when arrow keys are pressed. consider supporting manual tabs in the future if necessary
        $tabs.on('keydown', this._tabKeydownListener);
    }, cleanTabEvents: function (tabs) {
        var $tabs = tabs ? $(tabs) : $(tabs.tabSelector);

        $tabs.off('click', this._tabClickListener);
        $tabs.off('keydown', this._tabKeydownListener);
    }, reinit: function (tabs) {
        var $tabs = $(tabs);

        this.cleanTabEvents($tabs);
        this.initTabEvents($tabs);
    }, _tabClickListener: function () {
        var clickedTab = $(this),
            tabList = clickedTab.parent().closest('.actual-tabs-controller-js'),
            tabs,
            scrollTop,
            tabPanelContainer,
            tabPanels,
            i,
            len;

        if (tabList.hasClass('manual-tabs-js')) {
            // support manual activation in the future if necessary
        } else {
            // toggle attribute and class
            tabs = tabList.find('[role=tab]')
            tabs.attr({
                'aria-selected': 'false',
                'tabindex': '-1'
            }).removeClass('active');
            clickedTab.attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).addClass('active').filter('a').removeAttr('tabindex');

            // scroll into view horizontally
            scrollTop = $(window).scrollTop();
            // Remove the line of code below as it causes flickering issue on IE
            //clickedTab[0].scrollIntoView();
            $(window).scrollTop(scrollTop);

            // set focus if necessary. this is the case if active tab is changed using left/right/home/end keys
            if (document.activeElement === this || $(document.activeElement).closest('.actual-tabs-controller-js')[0] === tabList[0]) {
                clickedTab.focus();
            }

            // control tab panel switching if necessary. don't do this for carousels by setting data-carousel-tablist=true
            if (tabList.data('carousel-tablist') !== true) {
                tabPanelContainer = $(tabList.data('tab-panels-container'));
                if (tabPanelContainer.length > 0) {
                    tabPanels = tabPanelContainer.find('[role=tabpanel]').filter(function () { return $(this).parent().closest('[role=tabpanel]', tabPanelContainer[0]).length === 0; });

                    for (i = 0, len = tabs.length; i < len; i++) {
                        if (tabs[i] === this) {
                            tabPanels.eq(i).attr({
                                'tabpanel-selected': 'true',
                                'tabindex': 0
                            });
                        } else {
                            tabPanels.eq(i).attr({
                                'tabpanel-selected': 'false',
                                'tabindex': -1
                            });
                        }
                    }
                }
            }
        }
    }, _tabKeydownListener: function (e) {
        var key = e.which || e.keyCode || 0,
            tabList = $(this).parent().closest('.actual-tabs-controller-js'),
            isVertical = tabList.attr('aria-orientation') === 'vertical', // if tabs are in vertical arrangement, aria-orientation=vertical must be set
            tabs = tabList.find('[role=tab]'),
            index = 0,
            len = tabs.length;

        for (; index < len; index++) {
            if (this === tabs[index]) {
                break;
            }
        }

        if (key === KEYS.home) {
            index = 0;
        } else if (key === KEYS.end) {
            index = len - 1;
        } else {
            // left & right is for horizontal tabs. up & down is for vertical tabs
            if (!isVertical && key === KEYS.left || isVertical && key === KEYS.up) {
                if (index === 0) {
                    index = len - 1;
                } else {
                    index--;
                }
            } else if (!isVertical && key === KEYS.right || isVertical && key === KEYS.down) {
                if (index === len - 1) {
                    index = 0;
                } else {
                    index++;
                }
            } else {
                return;
            }
        }

        e.preventDefault();
        e.stopPropagation();
        tabs.eq(index).trigger('click');
    }
};
// END Tab Control (tabs DO NOT cause page redirect)

// START document-ready
(function ($) {
    //Code here
    // initialize actual tabs
    ActualTabs.init();

    // users should be able to activate "buttons" using the space key. this is for anchor tags so enter key is already supported
    $('a[role=button]:not(.click-on-space)').on('keypress', function (e) {
        if (KEYS.space === (e.which || e.keyCode || 0)) {
            e.preventDefault();
            e.stopPropagation();
            $(this).trigger("click");
        }
    });

    //Fix tooltip container
    fixTooltipAccessibility($('.tooltip-static'));

    //province dropdown
    provincePopup();

    //show active on scrollable menu
    scrollToActiveMenu();
 
    // [BBRFS-2441] Fix for the incorrect icon appearing when repeatedly clicking the accordion.
    (function () {

        //Remove existing click event from bell.js
        setTimeout(function () {
            $('.collapse-trigger').off('click');
        }, 100);

        function setIcon(id) {
            const language = $('html').attr('lang');
            const collapsedText = (language === 'fr') ? "s'est effondr&#xE9;" : "collapsed";
            const expandedText = (language === 'fr') ? "&#xE9;largi" : "expanded";
            const trigger = $('[data-target="#' + id + '"]');
            const removeIconClass = trigger.data('icon-expand') || "icon-exapnd-outline-circled";
            const addIconClass = trigger.data('icon-collapse') || "icon-collapse-outline-circled";
            const icon = trigger.find('span.icon, span.icon2, span.icon3, i, span.icon-support').first();
            const expandCollapseText = trigger.find('.expand-collapse-state');

            if (trigger.attr('aria-expanded') === "true") {
                icon.removeClass(removeIconClass).addClass(addIconClass);
                icon.attr({ 'aria-label': expandedText, 'role': 'img' });
                expandCollapseText.html('&nbsp;- ' + expandedText);
            } else {
                icon.removeClass(addIconClass).addClass(removeIconClass);
                icon.attr({ 'aria-label': collapsedText, 'role': 'img' });
                expandCollapseText.html('&nbsp;- ' + collapsedText);
            }

        }
        $(document).on('hidden.bs.collapse', '.collapse-accordion-accessible-toggle', function (e) {
            setIcon($(this).attr('id'));
        });

        $(document).on('shown.bs.collapse', '.collapse-accordion-accessible-toggle', function (e) {
            setIcon($(this).attr('id'));
        });

    })();

    initializeModalNavs();

    (function () {
        const videoModal = $('#video-modal');
        const dialog = videoModal.find('.modal-dialog-video');
        const setDialogWidth = function () {
            const iframe = videoModal.find('iframe'),
                currentHeight = iframe.height(),
                currentWidth = iframe.width(),
                newHeight = $(window).height() - 90,
                newWidth = (newHeight * currentWidth) / currentHeight;
            if (currentHeight + 90 > $(window).height()) {
                dialog.css({ 'width': newWidth + 'px' });
            }
        }
        videoModal.on('shown.bs.modal', function () {
            setDialogWidth();
        });

        videoModal.on('hidden.bs.modal', function () {
            dialog.removeAttr('style');
        });

        handleWindowResizeSupport(function () {
            if (!videoModal.hasClass('show')) return;
            dialog.removeAttr('style');
            setDialogWidth();
        });
    })();

    //Start support overview nav
    (function () {

        const iconNav = $('.overview-nav'); // support overview nav component
        if (!iconNav.length) return; // continue only if the component exists
        const iconNavDropdown = iconNav.find('.dropdown'); //dropdown menu items
        const iconNavDropdownMenu = iconNav.find('.dropdown-menu');
        const iconNavItems = iconNav.find('.overview-nav-item');
        const iconNavModal = $('#modal-overview-nav');

        // Math.round((window.outerWidth / window.innerWidth) * 100)
        // Math.round(window.devicePixelRatio * 100)
        const setIconNavItems = function () {
            if ($(window).width() < 768) {
                iconNavItems.attr({ 'data-toggle': 'modal', 'data-target': '#modal-overview-nav' });
                iconNavItems.removeAttr('aria-expanded');
                iconNavItems.dropdown('dispose');
                iconNavDropdownMenu.removeClass('show');
            }
            else {
                iconNavItems.attr({ 'data-toggle': 'dropdown', 'aria-expanded': false });
                iconNavItems.removeAttr('data-target');
                iconNavModal.modal('hide');
            }
        }

        //function to set the dropdown position
        const setDropdownPosition = function (dropdown) {
            const parentWidth = dropdown.outerWidth();
            const dropdownMenu = dropdown.find('.dropdown-menu');
            const dropdownArrow = dropdownMenu.find('.arrow');
            dropdownMenu.css({ 'transform': 'translateX(-50%) translateX(' + (parentWidth / 2) + 'px)' });
            dropdownArrow.css({ 'transform': 'translate(calc(50% - 8px), -40px)' });
        }

        //function to reposition the dropdown
        const repositionDropdown = function (dropdown) {
            const dropdownMenu = dropdown.find('.dropdown-menu');
            const parentWidth = dropdown.outerWidth();
            const dropdownMenuPosition = dropdownMenu.offset().left;
            const dropdownArrow = dropdownMenu.find('.arrow');
            const dropdownMenuPadding = parseInt(dropdownMenu.css('padding'));

            // reposition to the leftmost edge if it's being cut off at the left side of the screen
            if (dropdownMenuPosition < 0) {
                dropdownMenu.css('transform', 'translateX(0px)');
                dropdownArrow.css({ 'transform': 'translate(' + (parentWidth / 2 - dropdownMenuPadding - 16) + 'px, -40px)' });
            }
            // reposition to the rightmost edge if it's being cut off at the right side of the screen
            else if ((dropdownMenuPosition + dropdownMenu.outerWidth()) > $(window).width()) {
                dropdownMenu.css('transform', 'translateX(-100%) translateX(' + parentWidth + 'px)');
                dropdownArrow.css({ 'transform': 'translate(calc(100% - ' + (parentWidth / 2 - dropdownMenuPadding) + 'px), -40px)' });
            }
        }

        // make sure nav item is fully visible in the screen when it gets focused
        iconNavItems.on('focus', function () {
            const navItemWidth = $(this).width();
            const leftDistance = $(this).offset().left;
            const windowWidth = $(window).innerWidth();
            const rightDistance = windowWidth - leftDistance - navItemWidth;
            const leftScollPosition = iconNav.scrollLeft();

            if (leftDistance < 1) {
                iconNav.animate({ scrollLeft: leftScollPosition + parseInt(leftDistance) - 15 }, 100);
            }
            else if (rightDistance < 1) {
                iconNav.animate({ scrollLeft: leftScollPosition - parseInt(rightDistance) + 15 }, 100);
            }

        });

        setIconNavItems();

        handleWindowResizeSupport(setIconNavItems);

        iconNavModal.on('show.bs.modal', function (e) {
            const trigger = $(e.relatedTarget);
            const triggerText = trigger.find('.overview-nav-item-text');
            const dropdownInner = trigger.closest('.dropdown').find('.dropdown-menu-inner');
            const modalBody = $(this).find('.modal-body');
            modalBody.html(dropdownInner.html());
            const heading = $(this).find('.overview-nav-dropdown-heading');
            heading.attr('id', 'overview-nav-modal-heading');
            $(this).attr('aria-labelledby', triggerText.attr('id') + ' overview-nav-modal-heading');
        });

        iconNavModal.on('hidden.bs.modal', function (e) {
            $(this).find('.modal-body').html('');
        });

        //set dropdown position before it's completely shown
        iconNavDropdown.on('show.bs.dropdown', function () {
            setDropdownPosition($(this));
        });

        //reposition the dropdown immediately after being shown to make sure it's fully visible inside the window and not being cut off
        iconNavDropdown.on('shown.bs.dropdown', function (event) {
            repositionDropdown($(this));
        });

        //prevent dropdown from closing when user clicks anything inside the dropdown
        iconNav.find('.dropdown-menu-inner').on('click', function (e) {
            e.stopPropagation();
        });

        // retain is_tabbing class in body
        retainFocusOutline(iconNav.find('.dropdown-toggle'));

        //reposition the dropdown on window resize
        handleWindowResizeSupport(function () {
            const activeDropdown = iconNav.find('.dropdown-menu.show');
            if (!activeDropdown.length) return;
            setDropdownPosition(activeDropdown.closest('.dropdown'));
            repositionDropdown(activeDropdown.closest('.dropdown'));
        });

    })();
    //End support overview nav
    //Start icon slide nav
    (function () {
        // make sure icon link is fully visible in the screen when it gets focused
        const iconSlideNav = $('.icon-slide-nav');
        const iconSlideLinks = iconSlideNav.find('ul li a');

        iconSlideLinks.on('focus', function () {
            const navItemWidth = $(this).width();
            const leftDistance = $(this).offset().left;
            const windowWidth = $(window).innerWidth();
            const rightDistance = windowWidth - leftDistance - navItemWidth;
            const leftScollPosition = iconSlideNav.scrollLeft();

            if (leftDistance < 1) {
                iconSlideNav.animate({ scrollLeft: leftScollPosition + parseInt(leftDistance) - 15 }, 100);
            }
            else if (rightDistance < 1) {
                iconSlideNav.animate({ scrollLeft: leftScollPosition - parseInt(rightDistance) + 15 }, 100);
            }

        });
    })();
    //End icon slide nav

    //Fix icon issue for links that opens in new tab BBRFS-3703
    (function () {
        const language = $('html').attr('lang');
        const text = (language === 'fr') ? "s'ouvre dans un nouvel onglet" : "opens in new tab";
        const newTabLinks = $('.brf-support a.mte-icon-custom__new-tab');
        const newTabIndicator = '<span role="img" aria-label="' + text + '" aria-hidden="true" class="icon-support icon-external-link margin-l-10 font-weight-bold"></span>' +
            '<span class="sr-only">&nbsp;- ' + text + '</span>';
        newTabLinks.append(newTabIndicator);
    })();

    // Start textAreaWithCounter on Feedback Component
    (function () {

        let textAreaWithCounter = {
            textAreaContainer: $(".textarea-count-container"),
            initialize: function () {
                let textAreaContainer = this.textAreaContainer;
                $.each(textAreaContainer, function () {

                    let textareaElement = $(this).find("textarea");
                    let textCounter = $(this).find(".textarea-character-count");                 
                    const maxAriaLive = $(this).find(".max-count-aria-live");
                    textCounter.html(textAreaWithCounter.characterCount(textareaElement));

                    let inputTimeoutFn = 0;
                    textareaElement.on("keyup", function () {

                        clearTimeout(inputTimeoutFn);
                        inputTimeoutFn = setTimeout(function () {

                            //Updating number of characters left
                            textCounter.html(textAreaWithCounter.characterCount(textareaElement))

                           //Adding and remove the information when the character limit was reached or unreached
                            if (textAreaWithCounter.characterCount(textareaElement) == 0) {
                                maxAriaLive.find("span").addClass('d-none');
                                setTimeout(function () {
                                    maxAriaLive.find("span").removeClass('d-none');
                                }, 50)
                            }
                            if (textAreaWithCounter.characterCount(textareaElement) > 0) {
                                maxAriaLive.find("span").addClass('d-none');
                            }

                        }, 500);

                    });
                });
            },
            characterCount: function (element) {
                return element.attr("maxlength") - element.val().length;
            }
        }

        //Initialize textAreaWithCounter
        textAreaWithCounter.initialize();
    })();
    // End textAreaWithCounter on Feedback Component

    // Fix for BBRFS-3846 - Fix focus issue on dynamic content
    (function () {
        const articleFeedBackButtons = $('#uf-options').find('a');
        retainFocusOutline(articleFeedBackButtons);
        articleFeedBackButtons.on('click', function () {
            setTimeout(function () {
                const focusableElements = $('.feedback-acknowledgement').find('a[href], button, input, textarea, select, details,[tabindex]').filter(':not([tabindex="-1"])').filter(':not([disabled])').filter(':visible').filter(':not(.not-tabbable)');
                focusableElements.first().focus();
            });
        });
    })();
    
})(jQuery);
// END document-ready


//Start header override

$(function () {

    //Set font size for long active LOB title for mobile	
    function setLobTitleSize() {
        var lobTitle = $('.global-navigation .connector:not(.aliant) .connector-mobile-bar  .connector-active-lob-title .bellSlimSemibold-Nav');
        if (lobTitle.height() > 23 && window.matchMedia("(max-width: 767.98px)")) {
            lobTitle.css('font-size', '15px')
        }
        else {
            lobTitle.css('font-size', '');
            if (lobTitle.height() > 23 && window.matchMedia("(max-width: 767.98px)")) {
                lobTitle.css('font-size', '15px')
            }
        }
    }
    setLobTitleSize();
    var resizeTimeoutFn = 0;
    $(window).on('resize', function () {
        clearTimeout(resizeTimeoutFn);
        resizeTimeoutFn = setTimeout(function () {
            setLobTitleSize();
        }, 200);
    });

    (function () {
        let windowResizeTimeout = null;
        const repositionSearch = function () {
            const search = $('.connector-search-wrap');
            if ($(window).width() < 992) {
                search.css({ 'position': 'absolute', 'top': '55px' });
                search.insertAfter($('#connector-search-button'));
            }
            else if ($(window).width() >= 992) {
                search.removeAttr('style')
                search.prependTo($('.connector-settings.connector-settings-xs'));
            }
        }

        repositionSearch();

        let previousScreenWidth = $(window).width();

        $(window).on('resize', function () {
            clearTimeout(windowResizeTimeout);
            windowResizeTimeout = setTimeout(function () {
                if (previousScreenWidth !== $(window).width()) {
                    repositionSearch();
                    previousScreenWidth = $(window).width();
                }
            }, 200);
        });
    })();
})

//End header override

//Fix tooltip accessibility issue: tooltip content disappears when trying to hover into it.
function fixTooltipAccessibility(tooltips) {
    tooltips.each(function () {
        //dispose all tooltip instance first then set it again using the trigger as its container and also set show and hide delay into 100 to avoid flickering
        $(this).tooltip('dispose');
        $(this).tooltip({ container: $(this), delay: { "show": 100, "hide": 100 } });
        //remove aria-live approach
        $(this).removeAttr('aria-live');
    });
}


// province popup
function provincePopup() {

    const provincePopup = $('.region-strip'); // province popup component

    if (!provincePopup.length) return; // continue only if the component exists

    const changeProvinceTriger = $('.change-province-trigger'); //change province button
    const changeProvinceDropdown = $('.change-province-dropdown'); //change province dropdown
    const arrow = changeProvinceDropdown.find('.arrow'); //dropdown arrow
    const closeProvince = provincePopup.find('.close-province'); //close province popup button

    //function to set dropdown position
    const setDropdownPosition = function () {
        const triggerPosition = changeProvinceTriger.offset().left;
        const triggerWidth = changeProvinceTriger.outerWidth();
        const dropdownWidth = changeProvinceDropdown.outerWidth();
        const dropdownTransformX = (triggerPosition + (triggerWidth / 2) - (dropdownWidth / 2))

        if (window.matchMedia("(max-width: 767.98px)").matches) {
            const arrowTransformX = triggerPosition + (triggerWidth / 2);
            changeProvinceDropdown.css('transform', 'translateX(0px)');
            arrow.css('transform', 'translateX(' + arrowTransformX + 'px)');
        }
        else {
            const arrowTransformX = changeProvinceDropdown.outerWidth() / 2 - (arrow.outerWidth() / 2);
            changeProvinceDropdown.css('transform', 'translateX(' + dropdownTransformX + 'px)');
            arrow.css('transform', 'translateX(' + arrowTransformX + 'px)');
        }
    }

    //function to close the province popup
    const closeProvincePopup = function () {
        provincePopup.removeClass('open').addClass('closing');
        setTimeout(function () {
            provincePopup.removeClass('closing').addClass('closed');
        }, 226);
    }

    //function to toggle expand and collapse icon for the dropdown trigger
    const toggleExpandCollapseIcon = function () {
        const expandedIcon = changeProvinceTriger.data('expanded-icon');
        const collapsedIcon = changeProvinceTriger.data('collapsed-icon');
        const expandedLabel = changeProvinceTriger.data('expanded-label');
        const collapsedLabel = changeProvinceTriger.data('collapsed-label');
        const icon = changeProvinceTriger.find('.icon');

        icon.removeClass(collapsedIcon + ' ' + expandedIcon);

        if (changeProvinceDropdown.hasClass('show')) {
            icon.addClass(expandedIcon);
            icon.attr('aria-label', expandedLabel);
        }
        else {
            icon.addClass(collapsedIcon);
            icon.attr('aria-label', collapsedLabel);
        }
    }

    //set dropdown position as soon as the dropdown opens
    provincePopup.on('show.bs.dropdown', function () {
        setDropdownPosition();
    });

    //set collapse icon upon opening dropdown
    provincePopup.on('shown.bs.dropdown', function () {
        toggleExpandCollapseIcon();
    });

    //set expand icon upon closing dropdown
    provincePopup.on('hidden.bs.dropdown', function () {
        toggleExpandCollapseIcon();
    });

    //prevent dropdown from closing when user clicks anything inside the dropdown
    $('.dropdown-menu-inner').on('click', function (e) {
        e.stopPropagation();
    });

    //close province popup
    closeProvince.on('click', function () {
        closeProvincePopup();
        const isTabbing = $('body').hasClass('is_tabbing');
        setTimeout(function () {
            if (!isTabbing) return;
            location.href = "#maincontent";
        }, 226);
    });

    //reposition on window resize
    let resizeTimeoutFn = 0;
    $(window).on('resize', function () {
        clearTimeout(resizeTimeoutFn);
        resizeTimeoutFn = setTimeout(function () {
            setDropdownPosition();
        }, 200);
    });

    // retain is_tabbing class in body
    retainFocusOutline(changeProvinceTriger);
    retainFocusOutline(closeProvince);
}

function scrollToActiveMenu() {

    let previousWidth;

    //Window resize
    var resizeTimeoutFnSupport = 0;
    previousWidth = $(window).width();
    $(window).on('resize', function () {
        clearTimeout(resizeTimeoutFnSupport);
        resizeTimeoutFnSupport = setTimeout(function () {
            //Code here
            if (previousWidth !== $(window).width()) {
                initialize();
            }

            previousWidth = $(window).width();

        }, 200);
    });


    function initialize() {
        const menu = $("#fixedHeader");
        const active_item = menu.find("ul li.active");

        if (active_item.length) {
            //reset left offset
            menu.scrollLeft(0);

            //get active item left offset
            let active_item_left_offset = active_item.offset().left;

            if (active_item.index() === 0) {
                active_item_left_offset = 0;
            }

            //scroll to left offset
            menu.scrollLeft(active_item_left_offset);
        }
    }
    initialize();

}

/*Start Data Transfer Functionality*/

/*Spacebar/Enter keypress*/
$(document).on('keypress', ".data-transfer-option, .data-transfer-redirect-js, .data-transfer-clickable-card-js", function (e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
        e.preventDefault();
        e.stopPropagation();
        $(this).trigger('click');
    }
});

/*Card links accessibility*/
$(document).on("click", ".data-transfer-option", function () {
    $this = $(this);

    if (!$this.closest("[role='listitem']").hasClass("active")) {

        //remove active class
        $this.closest(".data-transfer-options").children().removeClass("active");

        //add aria-current
        $this.closest("[role='listitem']").addClass("active");

        //remove aria-current
        $this.closest(".data-transfer-options").find(".data-transfer-option").removeAttr("aria-current");

        //add active class
        $this.attr("aria-current", true);

        /*reset accessibility on hidden contents*/
        dataTransferResetHiddenContents($this)
        dataTransferRedirect($this)

        //customized for feedback content
        setTimeout(function () {
            if ($this.hasClass("hide-container-on-select-js")) {
                $this.closest(".data-transfer-content-js").addClass("d-none").removeClass("d-block");
            }
        }, 150);

        setTimeout(function () {
            if ($this.hasClass("hide-finished-question-on-select-js")) {
                $this.closest(".finished-question-container-js").addClass("d-none").removeClass("d-block");
            }
        });
    }
});

/*Redirection of data-href & showing/hiding content*/
$(document).on("click", ".data-transfer-redirect-js", function () {

    dataTransferResetHiddenContents($(this))
    dataTransferRedirect($(this));

});

/*Redirection to link that opens in new tab using clickable card*/
$(document).on("click", ".data-transfer-clickable-card-js", function () {

    window.open($(this).data("href"));

});

function dataTransferRedirect(element) {
    let href = element.data("href");

    /*Hiding all next sibling contents when triggered*/
    element.closest(".data-transfer-content-js").nextAll().addClass("d-none").removeClass("d-block");

    //Shows Finished question when triggering previous data transfer option
    element.closest(".data-transfer-content-js").nextAll().find(".finished-question-container-js").addClass("d-block").removeClass("d-none");

    /*Showing specific content*/
    $(href).removeClass("d-none").addClass("d-block");
    processSameHeightElements();

    /*go to href*/
    setTimeout(function () {
        window.location.href = href;
    }, 100);
}

function dataTransferResetHiddenContents(element) {

    /*Resetting contents after current content*/
    element.closest(".data-transfer-content-js").nextAll().find(".data-transfer-options").children().removeClass("active");
    element.closest(".data-transfer-content-js").nextAll().find(".data-transfer-options .data-transfer-option").removeAttr("aria-current");

}

/*End Data Transfer Functionality*/

/*Start device selector selector / modal nav*/

function modalNav(selector) {
    this.wrapper = selector;
    this.menuItems = this.wrapper.find('.menu-item.level-1');
    this.submenus = this.wrapper.find('.sub-menu');
    this.modal = this.wrapper.closest('.modal');
    this.backButtons = this.wrapper.find('.back-button');
    this.init = function () {
        const parent = this;
        this.menuItems.on('click', function () {
            parent.submenus.removeClass('expanded');
            parent.menuItems.not($(this)).attr('aria-expanded', 'false');
            const submenu = $(this).siblings('.sub-menu');

            if ($(this).attr('aria-expanded') === 'false') {
                submenu.addClass('expanded');
                $(this).attr('aria-expanded', 'true');
                parent.wrapper.addClass('has-expanded-menu');

                if (window.matchMedia("(max-width: 767.98px)").matches) {
                    parent.menuItems.attr('tabindex', '-1');
                    setTimeout(function () {
                        submenu.find('.back-button').focus();
                    }, 200);
                }
            }
            else {
                $(this).attr('aria-expanded', 'false');
                parent.wrapper.removeClass('has-expanded-menu');
                parent.menuItems.removeAttr('tabindex');
            }
        });
        this.modal.on('hidden.bs.modal', function () {
            parent.menuItems.attr('aria-expanded', 'false');
            parent.submenus.removeClass('expanded');
            parent.wrapper.removeClass('has-expanded-menu');
            parent.menuItems.removeAttr('tabindex');
        })
        this.backButtons.on('click', function () {
            const submenu = $(this).closest('.sub-menu')
            submenu.siblings('.menu-item').attr('aria-expanded', 'false').focus();
            submenu.removeClass('expanded');
            parent.wrapper.removeClass('has-expanded-menu');
            parent.menuItems.removeAttr('tabindex');
        });
        this.menuItems.off('keypress');
        this.menuItems.on('keypress', function (e) {
            e.preventDefault();
            if (e.keyCode == 32) {
                $(this).trigger('click');
            }
        });

        retainFocusOutline(parent.menuItems);
        retainFocusOutline(parent.backButtons);
    };
}



function initializeModalNavs() {
    const deviceSelector = new modalNav($('.device-selector'));
    deviceSelector.init();

    modalNav.prototype.initNetworkLookup = function () {
        const parent = this;
        const networkDetails = parent.wrapper.find('.network-details-body');
        const nav = parent.wrapper.find('.modal-body:not(.network-details-body)');
        const networkDetailsBack = networkDetails.find('.back-to-nav');

        $(document).on('keypress', '.network-lookup .device-link a', function (e) {
            if (e.keyCode == 32) {
                $(this).trigger('click');
            }
        });

        $(document).on('click', '.network-lookup .device-link a', function (e) {
            e.preventDefault();
            const deviceLinks = parent.submenus.find('.device-link a');
            networkDetails.show();
            networkDetailsBack.focus();
            nav.hide();
            deviceLinks.removeAttr('data-active');
            $(this).attr('data-active', true);
        });

        networkDetailsBack.on('click', function (e) {
            e.preventDefault();
            const activeDevice = parent.submenus.find('.device-link a[data-active=true]');
            nav.show();
            activeDevice.focus();
            networkDetails.hide();
        });

        parent.modal.on('hidden.bs.modal', function () {
            const deviceLinks = parent.submenus.find('.device-link a');
            deviceLinks.removeAttr('data-active');
            nav.show();
            networkDetails.hide();
        });

        retainFocusOutline(networkDetailsBack);

        const subMenus = $('.sub-menu.level-2');

        subMenus.each(function (index, targetNode) {
            const config = { attributes: false, childList: true, subtree: true };
            const callback = (mutationList, observer) => {
                for (const mutation of mutationList) {
                    if (mutation.type === "childList") {
                        const deviceList = $(targetNode);
                        devices = deviceList.find('.device-link a');
                        devices.each(function () {
                            if ($(this).attr('role') !== 'button') {
                                retainFocusOutline($(this));
                                $(this).attr('role', 'button');
                            }
                        });
                    }
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(targetNode, config);
        });
    }

    const networkLookup = new modalNav($('.network-lookup'));
    networkLookup.init()
    networkLookup.initNetworkLookup();
}

// Fix the selected Network lookup tool modal height when zoomed by 400% (BBRFS-2649)
function fixSelectedDeviceModalHeight() {
    $(document).on('click', '.brf-device-modal-network-lookup .device-link a', function () {
        $(this).closest('.modal').addClass('has-selected-device');
    });
    $(document).on('click', '.brf-device-modal-network-lookup #networkLookupBackBtn', function () {
        $(this).closest('.modal').removeClass('has-selected-device');
    });
}

/*End device selector selector / modal nav*/

//decode html special character
function decodeSpecialCharacter(string) {
    const document = new DOMParser().parseFromString(string, "text/html");
    return document.documentElement.textContent;
};
/*
 * initiate slick carousel plugins and widgets
 *
 */ 
var BellSlick = {
    slidersToInit: '.slider-with-data-options',
    slidersToResize: '.slider-resize-refresh',
    resizeTimeoutFn: null,
    init: function () {
        if (undefined === $.fn.slick) return;
        $(BellSlick.slidersToInit).on('init', function () {
            var slider = $(this);

            setTimeout(function () {
                var customSliderTabControl, i, len, tabList, tabs, innerBoundFunction = function (pIndex) {
                    if (this.slick('slickCurrentSlide') !== pIndex) {
                        this.slick('slickGoTo', pIndex);
                    }
                };

                // call as soon as the slider gets initialized to override the wrong attributes being set by slick.js
                BellSlick.fixSliderAccessibilityAttributes(slider);
                BellSlick.fixSliderEvents(slider);

                // code for custom tab control. if slider has data-custom-tab-control is set, we'll attach events to it to allow it to control the slider
                customSliderTabControl = $(slider.data('custom-tab-control'));
                for (i = 0, len = customSliderTabControl.length; i < len; i++) {
                    tabList = customSliderTabControl.eq(i);
                    tabs = tabList.find('[role=tab]');

                    tabs.each(function (index) {
                        $(this).on('click', innerBoundFunction.bind(slider, index));
                    });
                }

                // remove inline-style set by slick.js to hide prev arrow when displaying the first slide
                if (slider.hasClass('slider-remove-prev')) {
                    slider.each(function (key, item) {
                        $(this).find('.slick-arrow.slick-disabled').removeAttr('style');
                    });
                }

                // for slider with same-height class 
                if (slider.find('.same-height').length > 0) {
                    slider.find('.same-height').each(function () {
                        resetSameHeightElements($(this));
                        processSameHeightElements($(this));
                    });
                }

            }, 0);
        }).on('afterChange', function () {
            var slider = $(this);

            setTimeout(function () {
                var focusedEl = $(document.activeElement), customSliderTabControl, i, len, tabList, currentIndex;

                BellSlick.fixSliderAccessibilityAttributes(slider);

                // if the previously-focused element was a slick slide or slick dot, transfer the focus to the new active slide or slick dot respectively
                if (focusedEl.hasClass('slick-slide')) {
                    slider.find('.slick-current').focus();
                } else if (focusedEl.is('button') && focusedEl.closest('.slick-dots').length > 0) {
                    slider.find('.slick-dots .slick-active button').focus();
                }

                // code for custom tab control. if slider has data-custom-tab-control is set, sync the slide/tabpanel and custom tab
                currentIndex = slider.slick('slickCurrentSlide');
                customSliderTabControl = $(slider.data('custom-tab-control'));
                for (i = 0, len = customSliderTabControl.length; i < len; i++) {
                    customSliderTabControl.eq(i).find('[role=tab]').eq(currentIndex).click();
                }
            }, 0);
        });
        $(BellSlick.slidersToInit).slick();

        $(window).on('resize', function () {
            clearTimeout(BellSlick.resizeTimeoutFn);
            BellSlick.resizeTimeoutFn = setTimeout(function () {
                // for carousels with the 'sliders-with-data-options' class, check if they have been unslicked on the previous breakpoint

                // for carousels with the 'slider-resize-refresh' class, call slick setPosition to refresh positioning/sizing            
                $(BellSlick.slidersToResize).slick('setPosition');
            }, 200);
        });
    },
    fixSliderAccessibilityAttributes: function (slider) {
        var isDotted = slider.hasClass('slick-dotted');

        if (isDotted) {
            // if slider has slick-dots, we'll define the attributes as if it is a tab control     
            if (!slider.hasClass("slider-slide-not-focusable")) {
                slider.find('.slick-slide:not(.slick-active)').attr('tabindex', -1);
                slider.find('.slick-slide.slick-active').attr('tabindex', 0);
            }
            slider.find('.slick-slide[aria-describedby]').each(function () {
                var slide = $(this);

                slide.attr('aria-labelledby', slide.attr('aria-describedby')).removeAttr('aria-describedby');
            });
        } else {
            // if slider has no dots, we'll simply define it as a list (we can't use toolbar + option because we'be observed issues with it on some mobile devices)
            slider.removeAttr('role');
            slider.find('.slick-track').attr('role', 'list');
            slider.find('.slick-slide').attr({
                'role': 'listitem',
                'tabindex': '-1'
            });
        }
    },
    fixSliderEvents: function (slider) {
        var isDotted = slider.hasClass('slick-dotted');

        if (isDotted) {
            // if slider has slick-dots, we'll support home and end keydown events (arrow keys are already supported by slickjs)
            slider.find('.slick-dots').on('keydown', function (e) {
                var key = e.which || e.keyCode || 0;
                if (36 === key) { // home
                    e.preventDefault();
                    e.stopPropagation();
                    slider.slick('slickGoTo', 0);
                } else if (35 === key) { // end
                    e.preventDefault();
                    e.stopPropagation();
                    slider.slick('slickGoTo', slider.find('.slick-slide:not(.slick-clone)').length - 1);
                }
            });
        }
    }
}

//BRF customized carousels
var BELL = (function (bell, $) {
    bell.brf = bell.brf || {};
    bell.shop = bell.shop || {};
    bell.brf.slickCarousels = {
        init: function () {
            for (let plugin_name in this.plugins) {
                let plugin = this.plugins[plugin_name];
                try {
                    plugin.init();
                } catch (ex) {
                    console.log(ex);
                    console.log('error render plugin: ' + plugin_name);
                }
            }
        },
        plugins: {           
            internetSpeedPlugin: {
                options: {
                    mainClass: '.internet-speed-carousel',
                    slidesContainer: '.internet-speed-sliders',
                    invisible: "invisible",
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeedMobile: 10000,
                    autoplaySpeed: 6000, //default speed for all carousel slides
                    dots: false,
                    arrows: false,
                    dotsClass: 'image-carousel-buttons',
                    dotClass: 'image-carousel-button',
                    staticHeightClass: 'image-carousel-height',
                    initialSlide: 0,
                    slidesToShow: 4,
                    responsive: [
                        {
                            breakpoint: 766.98,
                            settings: {
                                dots: true,
                                slidesToShow: 1,
                            }
                        }
                    ]
                },
                init: function () {
                    if (undefined === $.fn.slick) return;

                    let self, that;

                    self = that = this;

                    /*plugin setup*/
                    $(self.options.mainClass).each(function () {
                        let $mainWrap = $(this);
                        let $slidesContainer = $mainWrap.find(self.options.slidesContainer);
                        $slidesContainer
                            .on("init", function (event, self) {
                                self.$slider.removeClass(that.options.staticHeightClass);
                                self.$slider.removeClass(that.options.invisible);//remove invisible class while initialize the carousel
                                setTimeout(function () {
                                    self.$slides.removeAttr('aria-describedby').attr('aria-live', 'polite');
                                });
                                
                            }).slick({
                                slidesToShow: self.options.slidesToShow,
                                slidesToScroll: self.options.slidesToScroll,
                                initialSlide: self.options.initialSlide,
                                infinite: self.options.infinite,
                                arrows: self.options.arrows,
                                dots: self.options.dots,
                                autoplay: self.options.autoplay, //relies on custom implementation 
                                responsive: self.options.responsive
                            }).on("afterChange", function (event, slick, currentSlide, nextSlide) {
                                setTimeout(function () {
                                    slick.$slides.removeAttr('aria-describedby').attr('aria-live', 'polite');
                                    slick.$dots.find('.slick-active button').focus();
                                });
                            }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {

                            });
                    });
                }
            },
            imageCarouselPlugin: {
                options: {
                    mainClass: '.imageCarousel',
                    slidesContainer: '.image-carousel',
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeedMobile: 10000,
                    autoplaySpeed: 6000, //default speed for all carousel slides
                    dots: true,
                    arrows: false,
                    customPaging: function (slider, i) {
                        return '<button class="image-carousel-button" type="button">' + (i + 1) + '</button>';
                    },
                    dotsClass: 'image-carousel-buttons',
                    dotClass: 'image-carousel-button',
                    pauseButton: '.image-carousel-pause',
                    progressIndicator: '.image-carousel-progress > circle',
                    staticHeightClass: 'image-carousel-height',
                    progressInitialClass: 'image-carousel-progress_initial',
                    initialSlide: 0
                },
                init: function () {

                    if (undefined === $.fn.slick) return;

                    let self, that;

                    self = that = this;

                    /*plugin setup*/
                    $(self.options.mainClass).each(function () {
                        let progressInterval,
                            percentComplete = 0,
                            progressStep = 50,
                            progressIndicatorLength = 0,
                            progressIndicatorUnit,
                            progressIndicatorTotal = 0,
                            progressIndicatorTotalRounded,
                            overrideMouseOverOut = false;

                        let autoplaySpeed = that.options.autoplaySpeed;

                        if (navigator.userAgent.match(/Android/i)
                            || navigator.userAgent.match(/webOS/i)
                            || navigator.userAgent.match(/iPhone/i)
                            || navigator.userAgent.match(/iPad/i)
                            || navigator.userAgent.match(/iPod/i)
                            || navigator.userAgent.match(/BlackBerry/i)
                            || navigator.userAgent.match(/Windows Phone/i)) {
                            autoplaySpeed = that.options.autoplaySpeedMobile;
                        }

                        let playButtonLabel = "Pause rotation of banners";
                        let pauseButtonLabel = "Resume rotation of banners";

                        let $mainWrap = $(this);
                        let $slidesContainer = $mainWrap.find(self.options.slidesContainer);

                        let $pauseButton = $mainWrap.find(self.options.pauseButton);
                        let $accessibilityLabel = $pauseButton.find(".sr-only");
                        let $progressIndicator = $pauseButton.find(self.options.progressIndicator);

                        progressIndicatorLength = (typeof SVGElement.prototype.getTotalLength !== "undefined") ? Math.round($progressIndicator.get(0).getTotalLength()) : 125;
                        progressIndicatorUnit = progressIndicatorLength / 100;

                        $progressIndicator.css({ "stroke-dasharray": progressIndicatorLength });
                        let pauseRotation = function () {
                            if (Math.abs(progressIndicatorTotalRounded) < 1) {
                                $progressIndicator.addClass(self.options.progressInitialClass);
                            }
                            $pauseButton.attr("data-pressed", true);
                            $pauseButton.attr("aria-label", pauseButtonLabel);
                        }

                        let resumeRotation = function () {
                            $progressIndicator.removeClass(self.options.progressInitialClass);
                            $pauseButton.attr("data-pressed", false);
                            $pauseButton.attr("aria-label", playButtonLabel);
                        }
                        let startAutoplay = function () {
                            percentComplete = 0;
                            progressIndicatorTotal = 0;
                            updateProgressIndicator();
                            progressInterval = setInterval(progressIntervalHandler, progressStep);
                        }

                        let updateProgressIndicator = function () {
                            percentComplete += progressStep / autoplaySpeed * 100;
                            progressIndicatorTotal = percentComplete * progressIndicatorUnit * -1 + 1;
                            progressIndicatorTotalRounded = Math.round(progressIndicatorTotal * 10) / 10;
                            $progressIndicator.css({ "stroke-dashoffset": progressIndicatorTotalRounded });
                        }

                        let progressIntervalHandler = function () {
                            if ($pauseButton.attr("data-pressed") === "false") {
                                updateProgressIndicator();
                                if (percentComplete >= 100) {
                                    $slidesContainer.slick('slickNext');
                                    resetAutoplayProgress();
                                }
                            }
                        }

                        let resetAutoplayProgress = function () {
                            clearInterval(progressInterval);
                            startAutoplay();
                        }

                        $mainWrap.focusin(function () {
                            if (!!('ontouchstart' in window) === false) {
                                if (!overrideMouseOverOut) {
                                    pauseRotation();
                                }
                            }
                        }).focusout(function () {
                            if (!overrideMouseOverOut) {
                                resumeRotation();
                            }
                        });
                        resumeRotation();

                        $pauseButton.attr("aria-label", playButtonLabel);

                        $pauseButton.on("click tap", function () {
                            let isPaused = $(this).attr("data-pressed") === "true";
                            if (isPaused) {
                                resumeRotation();
                            } else {
                                pauseRotation();
                            }
                            overrideMouseOverOut = true;
                        });

                        $slidesContainer.parent().on("mouseenter", function () {
                            if (!!('ontouchstart' in window) === false) {
                                if (!overrideMouseOverOut) {
                                    pauseRotation();
                                }
                            }
                        }).on("mouseleave", function () {
                            if (!overrideMouseOverOut) {
                                resumeRotation();
                            }
                        }).on("click tap swipe", function (e) {

                            if (e.target === $pauseButton[0]) {
                                return;
                            }
                            overrideMouseOverOut = true;
                            pauseRotation();
                        });

                        $(document).on("visibilitychange", function () {
                            if (document.visibilityState === "hidden") {
                                pauseRotation();
                            } else {
                                resumeRotation();
                            }
                        });

                        $slidesContainer
                            .on("init", function (event, self) {
                                var $dotClass = $mainWrap.find("." + self.options.dotsClass);

                                self.$slider.removeClass(that.options.staticHeightClass);
                                self.options.initialSlide = self.currentSlide;

                                $dotClass.on("keyup", function (e) {
                                    if (e.which === 37 || e.which === 39) {
                                        overrideMouseOverOut = true;
                                        setTimeout(() => $dotClass.find(".slick-active").children("button").focus(), 0);
                                        pauseRotation();
                                    }
                                });

                                if (that.options.autoplay) {
                                    startAutoplay();
                                }
                                $mainWrap.find(that.options.dotClass)
                                    .focusin(function () {
                                        if (!overrideMouseOverOut) {
                                            pauseRotation();

                                        }
                                    }).focusout(function () {
                                        if (!overrideMouseOverOut) {
                                            resumeRotation();
                                        }
                                    }).on("keyup", function (e) {
                                        if (e.type === "keyup" && (e.which === 37 || e.which === 39)) {
                                            overrideMouseOverOut = true;
                                            $mainWrap.find(that.options.dotClass).focus();
                                            progressIndicatorTotalRounded = 0;
                                            pauseRotation();
                                        }
                                    });
                            }).slick({
                                pauseOnFocus: self.options.pauseOnFocus,
                                pauseOnHover: self.options.pauseOnHover,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: self.options.infinite,
                                adaptiveHeight: self.options.adaptiveHeight,
                                arrows: false,
                                autoplay: false, //relies on custom implementation
                                waitForAnimate: false,
                                dots: self.options.dots,
                                customPaging: self.options.customPaging,
                                dotsClass: self.options.dotsClass,
                                responsive: [
                                    {
                                        breakpoint: 1238.98,
                                        settings: {
                                            slidesToShow: 1
                                        }
                                    },
                                    {
                                        breakpoint: 990.98,
                                        settings: {
                                            slidesToShow: 1
                                        }
                                    },
                                    {
                                        breakpoint: 766.98,
                                        settings: {
                                            slidesToShow: 1
                                        }
                                    }
                                ]
                            }).on("afterChange", function (event, slick, currentSlide, nextSlide) {
                                
                            }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
                                resetAutoplayProgress();
                            });

                    })

                }
            },
            imagesSliderPlugin: {
                options: {
                    mainClass: '.imageSliders',
                    slidesContainer: '.image-sliders-wrap',
                    staticHeightClass: 'image-carousel-height',
                    infinite: true,
                    autoplay: false,
                    dots: true,
                    arrows: false,
                    initialSlide: 0,
                    slidesToShow: 3,
                    slidesToScroll: 1,                   
                    responsive: [
                        {
                            breakpoint: 766.98,
                            settings: {
                                centerMode: true,
                                centerPadding: '25px',                              
                                slidesToShow: 1,
                            }
                        }
                    ]
                },
                init: function () {
                    if (undefined === $.fn.slick) return;

                    let self, that;

                    self = that = this;
                    $(self.options.mainClass).each(function () {
                        let $mainWrap = $(this);
                        let $slidesContainer = $mainWrap.find(self.options.slidesContainer);
                        $slidesContainer
                            .on("init", function (event, self) {
                                self.$slider.removeClass(that.options.staticHeightClass);
                                self.$slider.find(".slick-list").attr("role", "presentation");
                            }).slick({
                                slidesToShow: self.options.slidesToShow,
                                slidesToScroll: self.options.slidesToScroll,
                                initialSlide: self.options.initialSlide,
                                infinite: self.options.infinite,
                                arrows: self.options.arrows,
                                dots: self.options.dots,
                                autoplay: self.options.autoplay, //relies on custom implementation  ,
                                centerMode: self.options.centerMode,
                                centerPadding: self.options.centerPadding,
                                responsive: self.options.responsive
                            }).on("afterChange", function (event, slick, currentSlide, nextSlide) {
                                var $slider = $(this);
                                $slider.find(".slick-list").attr("role", "presentation");
                            }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {

                            });

                    });
                }
            },
            internetGamingEventCardsPlugin: {
                options: {
                    mainClass: '.event-cards-carousel',
                    slidesContainer: '.event-cards-sliders',
                    slider: '.event-card-inner',
                    invisible: "invisible",
                    heightAuto: "height-auto-important",
                    infinite: true,
                    autoplay: false,
                    dots: false,
                    arrows: false,
                    adaptiveHeight: true,
                    staticHeightClass: 'image-carousel-height',
                    initialSlide: 0,
                    slidesToShow: 2,                    
                    variableWidth: true,
                    debounceTime: 250, //250 ms for resizing sliders, improve performance
                    responsive: [
                        //{
                        //    breakpoint: 1238.98,
                        //    settings: {
                        //        dots: true,
                        //        arrows: true,
                        //        slidesToShow: 3,
                        //        slidesToScroll: 2,
                        //    }
                        //},
                        {
                            breakpoint: 990.98,
                            settings: {
                                dots: true,
                                centerMode: false,
                                arrows: false,
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 541,
                            settings: {
                                dots: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: '20px'
                            }
                        }
                    ]
                },
                init: function () {
                    if (undefined === $.fn.slick) return;

                    let self, that;

                    self = that = this;

                    /*plugin setup*/
                    $(self.options.mainClass).each(function () {
                        let $mainWrap = $(this);
                        let $slidesContainer = $mainWrap.find(self.options.slidesContainer);
                        let numberOfSlides = $(this).data("slides-total") ? $(this).data("slides-total") : self.options.slidesToShow;
                        $slidesContainer
                            .on("init", function (event, self) {
                                self.$slider.removeClass(that.options.staticHeightClass);
                                self.$slider.removeClass(that.options.invisible);//remove invisible class while initialize the carousel
                                that.sameHeightSlidersAdjust($mainWrap);
                            }).slick({
                                slidesToShow: numberOfSlides,
                                slidesToScroll: self.options.slidesToScroll,
                                initialSlide: self.options.initialSlide,
                                infinite: self.options.infinite,
                                arrows: self.options.arrows,
                                dots: self.options.dots,
                                autoplay: self.options.autoplay, //relies on custom implementation 
                                responsive: self.options.responsive
                            }).on("afterChange", function (event, slick, currentSlide, nextSlide) {

                            }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {

                            });

                        let debounceResize = that.debounce(function () {
                            //$mainWrap.find(self.options.slider).removeAttr("style");
                            that.sameHeightSlidersAdjust($mainWrap);
                        }, that.options.debounceTime);
                        window.addEventListener('resize', debounceResize);
                    });
                },
                sameHeightSlidersAdjust: function ($mainWrap) {
                    let self, that;
                    self = that = this;
                    let maxHeight = 0;
                    $mainWrap.find(self.options.slider).removeClass(self.options.heightAuto);
                    $mainWrap.find(self.options.slider).removeAttr("style");
                    $mainWrap.find(self.options.slider).each(function () {
                        if ($(this).height() > maxHeight)
                            maxHeight = $(this).height();
                    })
                    $mainWrap.find(self.options.slider).height(maxHeight);
                },
                debounce: function (func, wait, immediate) {
                    var timeout;
                    return function () {
                        var context = this, args = arguments;
                        var later = function () {
                            timeout = null;
                            if (!immediate) func.apply(context, args);
                        };
                        var callNow = immediate && !timeout;
                        clearTimeout(timeout);
                        timeout = setTimeout(later, wait);
                        if (callNow) func.apply(context, args);
                    };
                }
            }
        }
    }
    bell.shop.productCarouselWidget = {
        defaultDeviceListTemplatePath: "BRF/Component_Styles/ProductList_Cat/Wireless/productList_list_all_items_by_category_popular_api",
        errorMessage: {
            missingConfigurationError: "Missing configuration parameter",
            formatError: "The configuration parameter is not an object.",
            missingIDError: "Missing either category ID or list of product IDs."
        },
        apiUrl: {
            categoryAPI: "/ajax/RSXHome/GetProductListItemsByCategory",
            productDetailAPI: "/ajax/RSXHome/GetProductListItemsByIds"
        },
        init: function () {
        },
        runWidget: function (configuration, callback) {
            var self = this;           
            try {
                const defaultDeviceListTemplatePath = self.defaultDeviceListTemplatePath;

                if (typeof configuration === `undefined`) {
                    throw `productCarouselWidget error: ${self.errorMessage.missingConfigurationError}`;
                }

                if (typeof configuration !== 'object') {
                    throw `productCarouselWidget error: ${self.errorMessage.formatError}`;
                }

                /*const feedingData = { ...configuration };*/
                const feedingData = [ ...configuration ];

                const ajaxUrl = feedingData.categoryID ? self.apiUrl.categoryAPI : feedingData.ids ? self.apiUrl.productDetailAPI : null;

                if (ajaxUrl == null) {
                    throw `productCarouselWidget error: ${self.errorMessage.missingIDError}`;
                }

                feedingData.template = configuration.viewPath ? configuration.viewPath : defaultDeviceListTemplatePath;


                const runingProductListCarousel = function (viewHTML, feedingData, callback) {
                    const $container = feedingData.container;
                    if (viewHTML) {
                        if (document.querySelector($container) === null) {
                            return;
                        }
                        document.querySelector($container).innerHTML = viewHTML;                       
                        try {
                            if (feedingData.hasOwnProperty("topCallback") && typeof feedingData.topCallback === 'function') {
                                feedingData.topCallback();
                            }
                        } catch (ex) {
                        }
                        
                        self.defaultProductCarousel($container);
                        try {
                            if (feedingData.hasOwnProperty("bottomCallback") && typeof feedingData.bottomCallback === 'function') {
                                feedingData.bottomCallback();
                            }
                        } catch (ex) {
                        }
                        if (typeof (callback) === 'function') {
                            callback();
                        }
                    }
                }

                /*async */function getPDMData(url = '', data = {}, type = "html") {
                    const response = /*await */fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    if (type !== "html") {
                        return response.json();
                    }
                    return response;
                }

                getPDMData(ajaxUrl, feedingData)
                    .then((response) => {
                        if (response.status == 200) {
                            return response.text();
                        }
                        return;
                    }).then(viewHTML => runingProductListCarousel(viewHTML, feedingData, callback))
                    .catch(err => console.log(err))
            } catch (err) {
                console.log(err)
            }
        },
        defaultProductCarousel: function ($container) {
            try {
                var sliders = $($container).find(".infoblock-slider");
                lazyLoad(sliders);
                var config = sliders.data("slick");
                sliders.on('init', function () {
                    $(this).find('.slick-slide[aria-hidden="true"]').addClass('offscreen');
                });
                sliders.slick(config);
                hideInactiveSlides();
                sliders.on('click', 'span[role="button"]', function (e) {
                });
                sliders.on('mouseenter mouseleave', '.tooltip-interactive, .tooltip-static', function (e) {
                    $(this).tooltip('show');
                });
                sliders.on('focus', '.tooltip-interactive, .tooltip-static', function (e) {
                    $(this).tooltip('show');
                    setTimeout(function () {
                        $(this).find('.tooltip').attr('tabindex', 0);
                    }, 100);
                });
            } catch (ex) {

            }
            
        }
    }
    return bell;
})(BELL || {}, $);

//merge changes
$(document).ready(function () {
    BellSlick.init();
    BELL.brf.slickCarousels.init();
    
	if ($('#whybell-network-carousel.streaming-banner').length > 0) {
        // If streaming banner exists, delay the homepage carousel
        setTimeout(function () {
            HomepageCarousel();
        }, 200);
    } else {
        // If it doesn't exist, run immediately
        HomepageCarousel();
    }
});

let HomepageCarousel = function () {
    let offsetSlickTrack = {
        initialize: function (slickInstance) {
            let thisObject = this;
            slickInstance.on('init', function (event, slick) {
                const $this = $(this);
                if (slick.slideCount != slick.options.slidesToShow) {
                    let slickTrackOffset = JSON.parse($this.attr('data-slick-track-offset'));

                    if (slickTrackOffset.xs && window.matchMedia("(max-width: 767.98px)").matches) {
                        thisObject.processOffset($this, slickTrackOffset.xs);
                    }
                    else if (slickTrackOffset.sm && window.matchMedia("(max-width: 991.98px)").matches && window.matchMedia("(min-width: 768px)").matches) {
                        thisObject.processOffset($this, slickTrackOffset.sm);
                    }
                }
                else {
                    if (window.matchMedia("(min-width: 992px)").matches) {
                        slick.$list.css('padding', '0 0');
                    }
                }
            });
            slickInstance.on('breakpoint', function (event, slick) {
                const $this = $(this);
                if (slick.slideCount != slick.options.slidesToShow) {
                    let slickTrackOffset = JSON.parse($this.attr('data-slick-track-offset'));
                    if (slickTrackOffset.xs && window.matchMedia("(max-width: 767.98px)").matches) {
                        thisObject.processOffset($this, slickTrackOffset.xs, slick);
                        thisObject.reInitialize($this, slickTrackOffset.xs, slick);
                    }
                    else if (slickTrackOffset.sm && window.matchMedia("(max-width: 991.98px)").matches && window.matchMedia("(min-width: 768px)").matches) {
                        thisObject.processOffset($this, slickTrackOffset.sm, slick);
                        thisObject.reInitialize($this, slickTrackOffset.sm, slick);
                    }
                }
                else {
                    if (window.matchMedia("(min-width: 992px)").matches) {
                        slick.$list.css('padding', '0 0');
                    }

                    setTimeout(function () {
                        $this.slick('setPosition');
                    }, 200)
                }
            });
            slickInstance.on('setPosition', function (event, slick) {
                const sameHeight = $(this).find('.same-height');
                sameHeight.each(function () {
                    resetSameHeightElements($(this));
                })
                processSameHeightElements($(this));
            });

        },
        processOffset: function (slickInstance, offsetValue) {
            let slickTrack = slickInstance.find('.slick-track');
            slickTrack.css('margin-left', '-' + offsetValue);
            slickInstance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                if (nextSlide > 0 && nextSlide < (slick.slideCount - slick.options.slidesToShow)) { // if next slide is in the middle
                    slickTrack.css("margin-left", "0");
                } else if (nextSlide >= (slick.slideCount - slick.options.slidesToShow)) { // if next slide is the last slide
                    slickTrack.css("margin-left", offsetValue);
                } else if (nextSlide == 0) { // if next slide is the first slide
                    slickTrack.css("margin-left", "-" + offsetValue);
                }
            });
        },
        reInitialize: function (slickInstance, offsetValue, slick) {
            let slickTrack = slickInstance.find('.slick-track');
            const currentSlide = slick.currentSlide;
            slickTrack.css('margin-left', '-' + offsetValue);
            if (currentSlide > 0 && currentSlide < (slick.slideCount - slick.options.slidesToShow)) { // if next slide is in the middle
                slickTrack.css("margin-left", "0");
            } else if (currentSlide >= (slick.slideCount - slick.options.slidesToShow)) { // if next slide is the last slide
                slickTrack.css("margin-left", offsetValue);
            } else if (currentSlide == 0) { // if next slide is the first slide
                slickTrack.css("margin-left", "-" + offsetValue);
            }
        }
    }
    offsetSlickTrack.initialize($('[data-slick-track-offset]'));

    //InfoBlock slider
    $('.infoblock-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (window.matchMedia('(max-width: 767px)').matches) {
            var $slider = $(this);
            var slickSlideCount = $slider.find('.slick-slide').length;

            if (nextSlide > 0 && nextSlide < (slickSlideCount - 1)) {
                $slider.find('.slick-track').css("margin-left", "0");
            } else if (nextSlide == (slickSlideCount - 1)) {
                $slider.find('.slick-track').css("margin-left", "15px");
            } else {
                $slider.find('.slick-track').css("margin-left", "");
            }
        }
    });

    $('.infoblock-slider, .responsive-slick-slider').on('lazyLoaded', function () {
        processSameHeightElements();
    });
    let ele = document.querySelectorAll('.slider-rotating-carousel-component');

    if (ele.length != 0) {

        (function (bell, $) {
            let eleForStreaming = document.querySelectorAll('.streaming-banner');
            let autoplaySpeed = eleForStreaming.length > 0 ? 3000 : 6000;
 
            $.widget("rsx.BannerSliderCarousel", {
                version: "0.5",
                widgetEventPrefix: "BannerSliderCarousel",
                links: [],
                options: {
                    slidesContainer: '',
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeedMobile: 10000,
                    autoplaySpeed: autoplaySpeed, //default speed for all carousel slides
                    dots: true,
                    arrows: false,
                    customPaging: function (slider, i) {
                        return '<button class="slider-rotating-carousel-button" type="button">' + (i + 1) + '</button>';
                    },
                    dotsClass: 'slider-rotating-carousel-buttons',
                    initialSlide: 0,
                    omnitureShow_s_oAPT: '347-0-0',
                    omnitureClick_s_oAPT: '348-0-0',
                    track_omniture: false,
                    adobeTargetCssClass: "at-element-marker"
                },

                _create: function () {
                    var self, that;
                    self = that = this;
                    var canonical = $('link[rel=\'canonical\']').attr("href").split('/').pop(); // added element
                    var alternate = $('link[rel=\'alternate\']').attr("href").split('/').pop(); // added element

                    var pathArray = ['/', '/Accueil', '/Mobility', '/Mobilite', '/Mobility/', '/Mobilite/'];
                    for (i = 0; i < pathArray.length; i++) {
                        if (window.location.pathname === pathArray[i]) {
                            self.options.track_omniture = true;
                            break;
                        }
                    }
                    //in order to save the tab state on browser back button, it saves tab index in this hidden input

                    var progressInterval,
                        percentComplete,
                        progressStep = 50,
                        progressIndicatorLength,
                        progressIndicatorUnit,
                        progressIndicatorTotal,
                        progressIndicatorTotalRounded,
                        overrideMouseOverOut = false;

                    this.autoplaySpeed = that.options.autoplaySpeed;

                    if (navigator.userAgent.match(/Android/i)
                        || navigator.userAgent.match(/webOS/i)
                        || navigator.userAgent.match(/iPhone/i)
                        || navigator.userAgent.match(/iPad/i)
                        || navigator.userAgent.match(/iPod/i)
                        || navigator.userAgent.match(/BlackBerry/i)
                        || navigator.userAgent.match(/Windows Phone/i)) {
                        this.autoplaySpeed = that.options.autoplaySpeedMobile;
                    }

                    var playButtonLabel = "Pause rotation of banners";
                    var pauseButtonLabel = "Resume rotation of banners";

                    if (!alternate && !canonical)
                        canonical = "Accueil";
                    this.$window = $(window);
                    this.$slidesContainer = this.element.find(self.options.slidesContainer);
                    this.$slides = this.$slidesContainer.children();
                    this.$pauseButton = this.element.find(".slider-rotating-carousel-pause");

                    var playButtonLabel = this.$pauseButton.data("play-label");
                    var pauseButtonLabel = this.$pauseButton.data("pause-label");
                    // this.$accessibilityLabel = this.$pauseButton.find(".sr-only");
                    this.$progressIndicator = this.$pauseButton.find(".slider-rotating-carousel-progress > circle");

                    progressIndicatorLength = typeof SVGElement.prototype.getTotalLength !== "undefined" ? Math.round(this.$progressIndicator.get(0).getTotalLength()) : 125;
                    progressIndicatorUnit = progressIndicatorLength / 100;

                    this.$progressIndicator.css({ "stroke-dasharray": progressIndicatorLength });

                    this.pausedThroughButton = false;
                    this.rotate = false;
                    this.hasFocus = false;
                    this.hasHover = false;

                    resumeRotation();
                    
                    // this.$accessibilityLabel.text(playButtonLabel);

                    function pauseRotation() {
                        if (self.rotate) {
                            if (Math.abs(progressIndicatorTotalRounded) < 1) {
                                self.$progressIndicator.addClass("slider-rotating-carousel-progress_initial");
                            }
                            self.$pauseButton.attr('aria-label', playButtonLabel);
                            self.rotate = false;
                        }
                    }

                    function resumeRotation() {
                        if (!self.rotate) {
                            // if user manually paused the slideshow through the button, do not restart it automatically
                            if (!self.pausedThroughButton && !self.hasFocus && !self.hasHover) {
                                self.$progressIndicator.removeClass("slider-rotating-carousel-progress_initial");
                                self.$pauseButton.attr('aria-label', pauseButtonLabel);
                                self.rotate = true;
                            }
                        }
                    }

                    this.$pauseButton.on("click tap", function () {

                        var isPaused = self.$pauseButton.attr("data-pressed") === "true";

                        if (typeof s_oTrackPage === "function") { // && isHomePage === "True"
                            s_oTrackPage({ s_oAPT: "647-0-0", s_oBTN: self.$pauseButton.attr('aria-label') });
                        }

                        if (isPaused) {
                            self.pausedThroughButton = false;
                            resumeRotation();
                            self.$pauseButton.attr("data-pressed", false);
                        } else {
                            self.pausedThroughButton = true;
                            pauseRotation();
                            self.$pauseButton.attr("data-pressed", true);
                        }
                    });

                    this.$slidesContainer.on("mouseenter", function () {

                        if (!!('ontouchstart' in window) === false) {

                            if (!overrideMouseOverOut) {
                                self.hasHover = true;
                                pauseRotation();
                            }
                        }
                    }).on("mouseleave", function () {

                        if (!overrideMouseOverOut) {
                            self.hasHover = false;
                            resumeRotation();
                        }
                    });

                    $(document).on("visibilitychange", function () {
                        if (document.visibilityState === "hidden") {
                            pauseRotation();
                        } else {
                            resumeRotation();
                        }
                    });

                    var startAutoplay = function () {

                        percentComplete = 0;
                        progressIndicatorTotal = 0;
                        updateProgressIndicator();
                        progressInterval = setInterval(progressIntervalHandler, progressStep);
                    };

                    var updateProgressIndicator = function () {
                        percentComplete += progressStep / that.autoplaySpeed * 100;
                        progressIndicatorTotal = percentComplete * progressIndicatorUnit * -1 + 1;
                        progressIndicatorTotalRounded = Math.round(progressIndicatorTotal * 10) / 10;
                        self.$progressIndicator.css({ "stroke-dashoffset": progressIndicatorTotalRounded });
                        
                        //start: for streaming landing page banner - new progress bar on dots
                        if (self.$slidesContainer.closest('#whybell-network-carousel').length > 0) {
                            var dots_progress_bar = self.element.find('.slider-rotating-carousel-buttons li.slick-active .streaming-loader-bg');
                            dots_progress_bar.css("width", percentComplete + "%");
                        }
                        //start: for streaming landing page banner - new progress bar on dots
                    };

                    var progressIntervalHandler = function () {

                        if (self.rotate && !self.pausedThroughButton && self.$pauseButton.attr("data-pressed") === "false") {

                            updateProgressIndicator();

                            if (percentComplete >= 100) {
                                self.$slidesContainer.slick('slickNext');
                                resetAutoplayProgress();
                            }
                        }
                    };

                    var resetAutoplayProgress = function () {
                        clearInterval(progressInterval);
                        startAutoplay();
                    };
                    this.$slidesContainer.focusin(function () {
                        if (!!('ontouchstart' in window) === false) {
                            if (!overrideMouseOverOut) {
                                that.hasFocus = true;
                                pauseRotation();

                            }
                        }
                    }).focusout(function () {
                        if (!overrideMouseOverOut) {
                            that.hasFocus = false;
                            resumeRotation();
                        }
                    });

                    this.$slider = this.$slidesContainer
                        .on("init", function (event, self) {
                            
                            //start: for streaming landing page banner - new progress bar on dots
                            if ($(this).closest('#whybell-network-carousel').length > 0 ) {
                                $('.streaming-prev').on('click', function(){
                                    self.slickPrev();
                                })
                                $('.streaming-next').on('click', function(){
                                    self.slickNext();
                                })
                                self.$dots.find('li').each(function() {
                                    $(this).append('<div class="streaming-banner-loader" aria-hidden="true"><div class="streaming-loader-initial-bg"></div><div class="streaming-loader-bg"></div></div>');
                                });
                                self.options.fade = true;
                                self.options.speed = 1000;
                                $(this).off('mouseenter');
                            }
                            //end: for streaming landing page banner - new progress bar on dots

                            self.$slider.removeClass("slider-rotating-carousel-height");
                            self.options.initialSlide = self.currentSlide;
                            if (that.options.autoplay) {
                                startAutoplay();
                            }
                            $(this).find('.slider-rotating-carousel-button')
                                .focusin(function () {
                                    if (!overrideMouseOverOut) {
                                        pauseRotation();

                                    }
                                }).focusout(function () {
                                    if (!overrideMouseOverOut) {
                                        resumeRotation();
                                    }
                                }).on("keyup", function (e) {

                                    if (e.type === "keyup" && (e.which === 37 || e.which === 39)) {
                                        overrideMouseOverOut = true;
                                        $(this).closest('.slider-rotating-carousel-buttons').find('.slick-active .slider-rotating-carousel-button').focus();
                                        progressIndicatorTotalRounded = 0;
                                        pauseRotation();
                                    }
                                });

                            $("#slider-rotating-carousel-component .slider-rotating-carousel-button")
                                .on("click tap", function () {
                                    if (typeof s_oTrackPage === "function") { // && isHomePage === "True"
                                        s_oTrackPage({ s_oAPT: "647-0-0", s_oBTN: $(this).attr("aria-label") });
                                    }
                                });
                            that._syncAdobeTarget(self);
                            $(this).find('.slick-slide.slick-cloned').removeAttr('id');
                            that._setAccessibleDotsLabel(that.$slidesContainer);
                        }).slick({
                            pauseOnFocus: self.options.pauseOnFocus,
                            pauseOnHover: self.options.pauseOnHover,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: self.options.infinite,
                            adaptiveHeight: self.options.adaptiveHeight,
                            arrows: false,
                            useTransform: false,
                            autoplay: false, //relies on custom implementation
                            waitForAnimate: false,
                            dots: self.options.dots,
                            customPaging: self.options.customPaging,
                            dotsClass: self.options.dotsClass
                        }).on("afterChange", function (event, slick, currentSlide, nextSlide) {
                            that._resetCTARedirectOnTestEnvironment();
                            that._track(currentSlide);
                            slick.$slider.find('.slick-slide.slick-cloned').removeAttr('id');
                            that._setAccessibleDotsLabel(that.$slidesContainer);
                        }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
                            that._resetCTARedirectOnTestEnvironment();
                            resetAutoplayProgress();
                        });
                    that._syncAdobeTarget(self);
                    var CarouselImpressions = setInterval(function () {
                        if (typeof s_oTrackPage === "function" || typeof s_track === "function") {
                            that._track(self.options.initialSlide);
                            clearInterval(CarouselImpressions);
                        }
                    }, 100);
                },

                _trackOmniture: function (code, id) {
                    if (typeof s_oTrackPage === "function") {
                        s_oTrackPage({ s_oAPT: code, s_oBID: id });
                    } else if (typeof s_track === "function") {
                        s_track({ s_oAPT: code, s_oBID: id });
                    }
                },

                _track: function (currentSlide) {
                    if (this.options.track_omniture && this.links[currentSlide] === undefined) {
                        var banner = $(this.$slides[currentSlide]).find(".js-omni-banner");
                        var omnitureVal = $(banner).data("omni-s_obid");
                        this._trackOmniture(this.options.omnitureShow_s_oAPT, omnitureVal);
                        this.links[currentSlide] = true;
                    }
                },
                /**
                 * synchronize banner with Adobe to prevent flickering issue or banner copy not complete
                 *
                 * @param {any} self the item to pass
                 */
                _syncAdobeTarget: function (self) {
                    if (this.options.infinite) {
                        let leftClonedSlide = self.$slider.find(".slick-slide.slick-cloned").first();
                        let rightClonedSlide = self.$slider.find(".slick-slide.slick-cloned").last();
                        let allSlides = self.$slider.find(".slick-slide");
                        var firstSlide, lastSlide = "";
                        /*mapping first slide and last slide with their cloned slides accordingly*/
                        $.each(allSlides, function (index, $slide) {
                            if ($(this).data("slickIndex") === leftClonedSlide.data("slickIndex") + 1) {
                                firstSlide = $(this);
                            }
                            if ($(this).data("slickIndex") === rightClonedSlide.data("slickIndex") - 1) {
                                lastSlide = $(this);
                            }
                        });
                        /*find adobe target slider and replace by order*/
                        if (lastSlide && lastSlide.find("div").hasClass(this.options.adobeTargetCssClass)) {
                            leftClonedSlide.html(lastSlide.html());
                        }
                        if (firstSlide && firstSlide.find("div").hasClass(this.options.adobeTargetCssClass)) {
                            rightClonedSlide.html(firstSlide.html());
                        }
                        if (leftClonedSlide && leftClonedSlide.find("div").hasClass(this.options.adobeTargetCssClass)) {
                            lastSlide.html(leftClonedSlide.html());
                        }
                        if (rightClonedSlide && rightClonedSlide.find("div").hasClass(this.options.adobeTargetCssClass)) {
                            firstSlide.html(rightClonedSlide.html());
                        }
                    }
                },
                _resetCTARedirectOnTestEnvironment: function () {
                    let isProdUrl = function () {
                        let currentUrl = window.location.hostname;
                        return currentUrl.indexOf("www.bell.ca") > -1 ? true : false;
                    };
                    if (!isProdUrl()) {
                        $("div[id*='carousel-banner-id-']").each(function () {
                            $(this).find(".js-omni-button").click(function () {
                                let targetUrl = $(this).attr("href");
                                window.location.href = targetUrl;
                            });
                        });
                    }
                },
                _setAccessibleDotsLabel: function (slidesContainer) {
                    setTimeout(function () {
                        let tabButtons = slidesContainer.find('.slider-rotating-carousel-button');
                        tabButtons.each(function () {
                            let $this = $(this);
                            //let currentLabel = $this.attr('aria-label');
                            //let slideHeading = $('#' + $this.attr('aria-controls')).find('h2').text().trim();
                            //if (slideHeading) {
                            //   $this.attr('aria-label', currentLabel + ' property page ' + slideHeading);
                            //}
                        });
                    });
                }
            });
        })({}, jQuery);

        //$('#slider-rotating-carousel-component').BannerSliderCarousel({
        //    'slidesContainer': ".slider-rotating-carousel",
        //    'autoplay-speed': "6000",
        //    'autoplay-speed-mobile': "6000",
        //    'class': "init"
        //});
        $('.slider-rotating-carousel-component').each(function () {

            const $this = $(this);
            const slidesContainer = $this.find(".slider-rotating-carousel");
            const slides = slidesContainer.children();

            if (slides.length === 1) {
                $this.find(".slider-rotating-carousel-pause").hide();
                slidesContainer.css({
                    "opacity": "1",
                    "visibility": "visible",
                    "max-height": "initial",
                    "text-align": "center",
                    "overflow": "hidden"
                });
            } else {
                $this.BannerSliderCarousel({
                    'slidesContainer': ".slider-rotating-carousel",
                    'autoplay-speed': "6000",
                    'autoplay-speed-mobile': "6000",
                    'class': "init"
                });
            }
        });
        $('.slider-rotating-carousel-component').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            const next = $(this).find('.slick-slide')[nextSlide + 1];
            const height = next.querySelector('div').clientHeight;
            $(this).find('.slick-list').css('height', height);
        });

        $('.slider-rotating-carousel-component').each(function () {

            const $this = $(this);
            const slidesContainer = $this.find(".slider-rotating-carousel");

            slidesContainer.on('afterChange', function () {
                setTimeout(function () {
                    slidesContainer.find('.slick-slide[role="tabpanel"]').each(function () {
                        $(this).attr('aria-describedby','');
                    });

                    slidesContainer.find('.slider-rotating-carousel-buttons > li > button').each(function () {
                        $(this).removeAttr('aria-label');
                    });

                    slidesContainer.find('.js-omni-button').each(function (index) {
                        $(this).attr('aria-labelledby', $(this).find('#link-label').parent().attr('id') + ' slick-slide-heading0' + (index - 1));
                    });
                }, 100);
            });
        });
    }
    // Accessibility fix for banner slider. Add aria-labeledby on each slide

    $('.slider-rotating-carousel').each(function (instance) {
        $(this).find('.slick-slide[role="tabpanel"]').each(function (index) {
            $(this).attr('aria-labelledby', 'slick-slide-control' + instance + index);
            $(this).removeProp('aria-describedby');
        });

        $(this).find('.big-title').each(function (index) {
            $(this).attr('id', 'slick-slide-heading' + instance + (index - 1));
        });

        $(this).find('#link-label').parent().each(function (index) {       
            $(this).attr('aria-labelledby', (i, value) => `${value || ""}` + ' slick-slide-heading' + instance + index);
        });

        $(this).find('.slider-rotating-carousel-buttons > li > button').each(function (index) {
            var span = $('<span />').attr({ 'class': 'sr-only' }).html($("html").attr("lang") == "en" ? 'Slide' : 'Diapositive');
            $(this).attr('aria-describedby', 'slick-slide-heading' + instance + index);
            $(this).prepend(span);
        });
    });

    $(function () {
        let isUnslick = function (screen, breakpoints) {
            let unslicked = false;
            breakpoints.every(function (breakpoint) {
                if (breakpoint.breakpoint == screen && breakpoint.settings == 'unslick') {
                    unslicked = true
                    return false;
                }
                else {
                    return true;
                }
            });
            return unslicked;
        };
        $(window).resize(function () {
            let responsiveSlickSlider = $('.responsive-slick-slider').not('.slick-initialized');
            let screen = $(window).width() - 1;

            responsiveSlickSlider.each(function () {
                let slick = $(this);
                let breakpoints = $(this).data('slick').responsive;
                if (screen >= 991) {
                    if (!isUnslick(991, breakpoints)) {
                        slick.slick();
                    }
                }
                if (screen >= 767 && screen < 991) {
                    if (!isUnslick(767, breakpoints)) {
                        slick.slick();
                    }
                }
                if (screen >= 300 && screen < 767) {
                    if (!isUnslick(300, breakpoints)) {
                        slick.slick();
                    }
                }
            })
        });
    });
    // Start fix for slick focus sequence
    function updateSlickDots(activeDot, $this) {
        setTimeout(function () {
            activeDot.attr('tabindex', 0);
            $this.find('.slick-dots li:not(".slick-active") button').attr('tabindex', -1);
            $this.find('.slick-dots button').removeAttr('aria-selected');
            activeDot.attr('aria-selected', true);
        });
    }
    let slickTrigger;
    let beforeChangeCurrentSlide;
    $(".link-slide").on('afterChange', function (event, slick, currentSlide, nextSlide) {
        lazyLoad($(this));
        if (beforeChangeCurrentSlide != currentSlide) {
            var $this = $(this);
            if (slickTrigger.hasClass('slick-arrow')) {
                let firstActiveCard = $this.find('.slick-active').first();
                firstActiveCard.find('a').focus();
                let activeDot = $this.find('.slick-dots .slick-active button');
                updateSlickDots(activeDot, $this);
            }
            else {
                let activeDot = $this.find('.slick-dots .slick-active button');
                if ($('body').hasClass('is_tabbing')) {
                    activeDot.focus();
                }
                updateSlickDots(activeDot, $this);
            }
        }
    });
    $(".link-slide").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        beforeChangeCurrentSlide = currentSlide;
        slickTrigger = $(document.activeElement);
    });
    // End fix for slick focus sequence

    function setSlickLabel(slick) {
        setTimeout(function () {
            let tabpanels = slick.find('.slick-slide[role="tabpanel"]');
            tabpanels.each(function () {
                let ariaDescribedBy = $(this).attr('aria-describedby');
                $(this).attr('aria-labelledby', ariaDescribedBy);
                $(this).removeAttr('aria-describedby');
            });
        });
    }
    $('.infoblock-slider, .responsive-slick-slider').on('init afterChange', function () {
        setSlickLabel($(this));
    });

    function lazyLoad(container) {
        var modalEl = container;
        setTimeout(function () {
            var lazyImages;
            if (typeof jQuery.fn.Lazy === 'function') {
                lazyImages = modalEl.find("img.lazy");
                //if (lazyImages.length > 0) {
                lazyImages.Lazy({ effect: "fadeIn" });
                //}
            }
        }, 100);
    }
    //Set tab sequense for small-slick
    $('.slick-small').on('init reInit', function () {
        let $this = $(this);
        let slickDots = $this.parent().find('.slick-dots');
        slickDots.appendTo($this.parent()).css('margin-top', '-8px');
        $(".slick-small").each(function (instance) {
            $this = $(this);
            let slickSlide = $this.find('.slick-slide:not(.slick-cloned)');
            slickSlide.each(function () {
                let $this = $(this);
                let index = $this.data('slick-index');
                $this.attr('aria-labelledby', 'slick-slide-control' + (instance + 1) + index);
            })
        });
        $('.slick-cloned').removeAttr('id');
    });
    $(".slick-small").on('afterChange', function (event, slick, currentSlide, nextSlide) {
        lazyLoad($(this));
        if (beforeChangeCurrentSlide != currentSlide) {
            let $this = $(this);
            if (!slickTrigger.hasClass('slick-arrow')) {
                let activeDot = $this.parent().find('.slick-dots .slick-active button');
                if ($('body').hasClass('is_tabbing')) {
                    activeDot.focus();
                }
            }
        }
    });
    $(".slick-small").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        beforeChangeCurrentSlide = currentSlide;
        slickTrigger = $(document.activeElement);
    });

    // start fix slick accessibility
    const fixSlickAccessibility = {
        beforeChangeCurrentSlide: null,
        slickTrigger: null,
        initialize: function (slickInstance) {
            const parentObject = this;
            slickInstance.on('init reInit', function () {
                parentObject.setTabpanelLabel($(this));
            });
            slickInstance.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                parentObject.setTabpanelLabel($(this));
                //set slick dots focus
                if (parentObject.beforeChangeCurrentSlide != currentSlide) {
                    if (!parentObject.slickTrigger.hasClass('slick-arrow')) {
                        if ($('body').hasClass('is_tabbing')) {
                            $(this).find('.slick-dots .slick-active button').focus();
                        }
                    }
                }
            });
            slickInstance.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                parentObject.beforeChangeCurrentSlide = currentSlide;
                parentObject.slickTrigger = $(document.activeElement);
                const activeDot = $(this).find('.slick-dots .slick-active');
                const slickNext = $(this).find('.slick-next');
                const slickPrev = $(this).find('.slick-prev');
                if (nextSlide > currentSlide) {
                    slickPrev.removeAttr('tabindex');
                    if (activeDot.next().is(':last-child')) {
                        slickNext.attr('tabindex', -1);
                    }
                }
                else {
                    slickNext.removeAttr('tabindex');
                    if (activeDot.prev().is(':first-child')) {
                        slickPrev.attr('tabindex', -1);
                    }
                }
            });
            setTimeout(function () {
                slickInstance.find('.slick-arrow').on('click', function () {
                    $(this).removeAttr('aria-disabled');
                });
            }, 100);
        },
        setTabpanelLabel: function (slick) {
            const slickCurrent = slick.find('.slick-current');
            const activeDot = slick.find('.slick-dots .slick-active button');
            slickCurrent.attr('aria-labelledby', activeDot.attr('id'));
            setTimeout(function () {
                slickCurrent.removeAttr('aria-describedby');
                activeDot.attr('tabindex', 0);
            }, 0);
            $('.slick-cloned').removeAttr('id');
            lazyLoad(slick);
        }
    }

    fixSlickAccessibility.initialize($('.infoblock-slider-no-shadow'));
    // Start slick tabpanel component
    $('.tab-panels-container.slider-with-data-options').on('init', function () {
        let slick = $(this);
        let arrowTriggered = false;
        let tabContainer = $(slick.data('custom-tab-control'));
        slick.find('.slick-next').attr('aria-label', 'Next tab');
        slick.find('.slick-prev').attr('aria-label', 'Previous tab');
        function initializeTabs() {
            setTimeout(function () {
                let tabpanels = slick.find('.slick-slide');
                tabpanels.each(function () {
                    let tabpanel = $(this);
                    let tab = $('#' + tabpanel.find('[data-tab]').data('tab'));
                    tab.attr('aria-controls', tabpanel.attr('id'));
                    tabpanel.attr('aria-labelledby', tab.attr('id'));
                });
            });
        }
        function verticallyCenterControls() {
            let slickHeight = parseInt(slick.height());
            let dotsHeight = parseInt(slick.find('.slick-dots').height());
            let slideHeight = slickHeight - dotsHeight - 4;
            let slickControls = slick.find('.slick-arrow');
            slickControls.css({
                'transform': 'translateY(-50%)',
                'top': slideHeight / 2 + 'px',
                'margin-top': '0px',
                'transition': 'all .1s'
            });
        }
        function disableDots() {
            setTimeout(function () {
                let dotsContainer = slick.find('.slick-dots');
                let dots = dotsContainer.find('button')
                dotsContainer.attr('aria-hidden', true);
                dotsContainer.removeAttr('role');
                dots.removeAttr('role aria-controls aria-label aria-selected').attr('tabindex', '-1');
            });
            slick.find('.slick-dots button').css('cursor', 'default').on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
            })
        }

        verticallyCenterControls();
        initializeTabs();
        disableDots();

        slick.find('img.lazy').on('load', function () {
            slick.slick('setPosition');
        });

        slick.on('afterChange', function (e) {
            setTimeout(function () {
                slick.slick('setPosition');
            }, 300);
            initializeTabs();
            disableDots();

            if (arrowTriggered) {
                let currentSlide = slick.find('.slick-current');
                let tab = $('#' + currentSlide.find('[data-tab]').data('tab'));
                tabContainer.find('.slick-announcer').html(tab.text());
                arrowTriggered = false;
            }
        });

        slick.on('setPosition', function () {
            verticallyCenterControls();
        });

        slick.find('.slick-slide').on('focus', function () {
            $(this).closest('.slick-list').css('box-shadow', '0 0 0 3px #fff, 0 0 2px 3px #fff, 0 0 4px 5px #5fb0fc, 0 0 2px 5px #8ec6fc')
        });

        slick.find('.slick-slide').on('focusout', function () {
            $(this).closest('.slick-list').css('box-shadow', 'none')
        });

        slick.find('.slick-arrow').on('click', function () {
            arrowTriggered = true;
        });

        tabContainer.on('keydown', function () {
            tabContainer.find('.slick-announcer').html('');
        });
    });
}

//Homepage banner migration to all pages


;
