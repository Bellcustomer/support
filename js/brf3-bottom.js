/* Minification failed. Returning unminified contents.
(384,50-51): run-time error JS1014: Invalid character: `
(384,52-53): run-time error JS1003: Expected ':': {
(384,60-61): run-time error JS1003: Expected ':': }
(384,91-92): run-time error JS1014: Invalid character: `
(384,93-94): run-time error JS1004: Expected ';': :
(384,95-96): run-time error JS1014: Invalid character: `
(384,142-143): run-time error JS1014: Invalid character: `
(389,39-40): run-time error JS1014: Invalid character: `
(389,40-41): run-time error JS1195: Expected expression: <
(390,25-26): run-time error JS1195: Expected expression: <
(390,25-26): run-time error JS1195: Expected expression: <
(390,57-58): run-time error JS1002: Syntax error: }
(391,134-135): run-time error JS1197: Too many errors. The file might not be a JavaScript file: /
 */
/*! jQuery UI - v1.12.1 - 2016-10-28
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.1";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete});;
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
;
var StoreLocator = {
    $storeLocator: $(".federal-bar-store-locator"),
    $storeLocatorLink: $('.federal-bar-store-locator > a'),
    $storeLocatorOpen: $('.federal-bar-store-locator button'),
    $storeLocatorOpenButtonBottom: $(".js-open-store-locator"),

    init: function () {
        try {
            this.$storeLocatorOpen.on("click", this.openStoreLocator.bind(this));
            this.$storeLocatorOpenButtonBottom.on("click", this.openStoreLocator.bind(this));
            this.$storeLocator.on("keypress", this.keyPressStoreLocator.bind(this));
            $("body,header,footer").on("click", this.resetStoreState.bind(this));
        }

        catch (err) { }
    },

    keyPressStoreLocator: function (e) {
        return true;
    },

    omnitureTrackStoreLocatorFilters: function () {
        var selectedFilters = "";
        jQuery('.store-locator-filter-checkbox:checked').each(function (idx, value) {
            var omnitureTag = $(value).attr('data-omniture-tag');
            if (omnitureTag) {
                if (!selectedFilters) {
                    selectedFilters += omnitureTag;
                }
                else {
                    selectedFilters += "," + omnitureTag;
                }
            }
        });

        if (!selectedFilters) selectedFilters = "No filters";

        if (typeof s_oTrackPage === "function") {
            var omnitureData = {
                s_oPGS: "store_locator_filters",
                s_oSLF: "Header:" + selectedFilters + ":undefined"
            };
            s_oTrackPage(omnitureData);
        }
    },

    openStoreLocator: function () {
        var locatorLink = this.$storeLocator.data("url");
        if (locatorLink.length > 0) {
            var $input = this.$storeLocator.find("input[name='search']");
            /*Dealing with query string begin string*/
            var qStringBegin = "?";
            if (locatorLink.indexOf("?") >= 0) qStringBegin = "&";
            var url = locatorLink + qStringBegin + "place=" + escape($input.val());
            var options = "";
            jQuery('.store-locator-filter-checkbox:checked').each(function (idx, value) {
                options += $(value).attr('data-filter-name');
            });
            this.omnitureTrackStoreLocatorFilters();

            if (options) {
                url += "&option=" + escape(options);
            }

            var target = this.$storeLocator.data("target");
            if (target && target.length > 0) {
                window.open(url, target);
            } else {
                window.location = url;
            }
        }

        return false;
    },
    resetStoreState: function () {
        setTimeout(
            function () {
                if (!$(".federal-bar-store-locator-popup").is(":visible")) {
                    $(".federal-bar-store-locator-popup").addClass("federal-bar-links");
                }
            }, 500);

    }
}

var StoreLocatorAutoComplete = {
    autocomplete: null,
    mapsURL: $("#gmapsURL").val(),
    init: function () {
        try {
            var self = this;
            $('.federal-bar-store-locator-popup a.find-a-store-filter-js').on('click', function () {
                $(".federal-bar-store-locator-popup").removeClass("federal-bar-links");
                if (self.autocomplete === null) {
                    $.ajax({
                        dataType: "script",
                        type: "GET",
                        url: self.mapsURL
                    }).done(self.initializeAutoComplete);
                } 
            })
        }

        catch (err) { }
    },

    initializeAutoComplete: function () {
        var self = this;
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        self.autocomplete = new google.maps.places.Autocomplete(
                /** @@type {!HTMLInputElement} */(document.getElementsByName('search')[0]),
            { types: ['geocode'] });
        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        self.autocomplete.addListener('place_changed', function () { });
    }
}

$(document).ready(function () {
    StoreLocator.init();
    StoreLocatorAutoComplete.init();
});
var GlobalNavLogin = {
    toggle: function (e) {
        try {
            if (typeof e.url == "undefined" || e.url.length == 0) {
                // url for the user information is not defined, do nothing..
            } else {
                if (e.$fullname.text().trim().length > 0) {
                    // logged out state, we assume server rendered customer name, do nothing..
                } else {
                    if (typeof e.cookie != "undefined" && e.cookie != null && e.cookie.length > 0) {
                        // user is authenticated, transition to logged in state
                        e.$login.addClass("hide");
                        e.$logout.removeClass("hide");
                        $.get(e.url, {
                            userSession: e.cookie
                        },
                            function (data) {
                                if (typeof (data) != "undefined" && data != null && data != "") {
                                    var json = data;
                                    if (typeof data[e.field] == "undefined") {
                                        try {
                                            json = JSON.parse(data);
                                        } catch (e) {
                                            console.warn(e);
                                        }
                                    }
                                    if (typeof json[e.field] != "undefined") {
                                        // user is authenticated, transition to logged in state
                                        e.$login.addClass("hidden");
                                        e.$login.prev().removeClass("hidden");
                                        e.$fullname.text(json[e.field]);
                                    } else {
                                        // user is not authenticated, do nothing..
                                        console.error(json);
                                    }
                                } else {
                                    console.error("No user information received");
                                }
                            })
                    };

                }
            }
        } catch (e) {
            console.error("Error getting " + e.field + " information: ", e);
        }
    },
    getCookieValue: function (name) {
        var aCookie = $.cookie(name);
        if (aCookie !== "") {
            return aCookie;
        } else {
            return null;
        }
    },
    loginButtonText: function () {
        var button = $("#login-register-button,#login-register-button-mobile");
        var bellCookie = this.getCookieValue("UserSession");
        var isAuthenticated = bellCookie != null && bellCookie.length > 0;
        var myAccountCookie = this.getCookieValue("MyAccountUserFullName");
        var isMyAccountAuthenticated = myAccountCookie != null && myAccountCookie.length > 0;
        if (isAuthenticated && isMyAccountAuthenticated) {
            button.text(button.data("text-logout"));
        } else if (!isAuthenticated && !isMyAccountAuthenticated) {
            button.text(button.data("text-login"));
        } else {
            button.text(button.data("text-login-logout"));
        }
    }
}

var ShoppingCart = {
    init: function () {
        var province = "ON";
        var language = "EN";
        var gemini = GlobalNav.getCookie('gemini');
        if (typeof gemini !== 'undefined') {
            var pair = gemini.split("|").filter(function (x) {
                return x.indexOf("province=") == 0;
            });
            province = typeof pair != "undefined" && pair != null ? pair.toString().split("=")[1].toUpperCase() : "ON";
            pair = gemini.split("|").filter(function (x) {
                return x.indexOf("language=") == 0;
            });
            language = typeof pair != "undefined" && pair != null ? pair.toString().split("=")[1].toUpperCase() : "EN";
        }
        this.bellCart();
        if ("NB" == province || ("EN" == language && ("NL" == province || "NS" == province || "PE" == province))) {
            this.aliantCart();
        }
        this.centralCart();
    },
    bellCart: function () {
        try {
            var cartCount = $(".connector-cart-count");
            var cartTotal = $(".js-connector-cart-total");
            var cart = GlobalNav.getCookie("BSCC");
            if (typeof cart != "undefined" && cart.length > 0) {
                var regex = new RegExp("(?:totalcartitems=)(.|\d+)(?:&|$)");
                var match = regex.exec(cart);
                var count = "0";
                if (typeof match != "undefined" && match != null && match.length > 1) {
                    count = match[1];
                    if (count != "0") {
                        cartCount.text(count);
                        cartCount.removeClass("hidden");
                        cartTotal.text("(" + count + ")");
                        cartTotal.removeClass("hidden");
                    }
                }
                $(".js-connector-bell-cart-message")
                    .each(function () {
                        try {
                            var $this = $(this);
                            $this.text(count == "0" ? $this.data("empty-text") : $this.data("full-text"));
                        } catch (e) {
                            console.error("Error updating Bell shopping cart message: ", e);
                        }
                    });
            } else {
                // Shop client cookie BSCC is missing, do nothing..
            }
        } catch (e) {
            console.error("Error loading Bell shopping cart info: ", e);
        }
    },
    aliantCart: function () {
        try {
            var cart = GlobalNav.getCookie("WC_PendingCart");
            var isEmpty = typeof cart == "undefined" || cart.length == 0 || cart == "E";
            var isLoggedIn = $.cookie("MyAccountUserFullName");
            var cartText = $("html").attr("lang") == "en" ? "Cart" : "Panier";

            const baseUrl = new URL(window.location.href).origin;

            if (!isEmpty) {
                var aliantCartUrl = isLoggedIn ? `${baseUrl}/myaccount/order/retrieve-cart` : `${baseUrl}/myaccount/order-retrieve-guest-cart`;
            }

            if (typeof cart != "undefined" && cart.length > 0 && baseUrl.includes("service.aliant.bell.ca")) {
                if (cart == "P" || cart == "S") {
                    var cartElement = `<a href="${aliantCartUrl}" class="g-icon-btn g-desktop-bar-cart-btn">
                        <span class="sr-only">${cartText}</span>
                        <svg tabindex="-1" focusable="false"><use tabindex="-1" focusable="false" xlink:href="#icon-cart-alt"></use></svg>
                        <span class="g-connector-cart-count">1</span>
                    </a>`;

                    //Sanitize element
                    cartElement = encodeURIComponent(cartElement)
                    cartElement = cartElement.replaceAll("%3C", "<").replaceAll("%20", " ").replaceAll("%3D", "=").replaceAll("%22", '"').replaceAll("%3A", ":").replaceAll("%2F", "/").replaceAll("%3E", ">").replaceAll("%0A", "").replaceAll("%23", "#");

                    $(".g-desktop-cart-wrap").after(cartElement);
                    $(".g-desktop-cart-wrap").remove();
                }
            }
        } catch (e) {
            console.error("Error loading Aliant shopping cart info: ", e);
        }
    },
    centralCart: function () {
        var self = this;
        $(".js-central-shopping-cart").click(function (e) {
            var cookieContent = $.cookie('BSCC');
            if (cookieContent != null) {
                var splitItems = cookieContent.split('&');
                for (var i = 0; i < splitItems.length; i++) {
                    var item = splitItems[i];
                    if (item.startsWith('total')) {
                        var nbItem = item.split('=')[1];
                        break;
                    }
                }
            }
            if (nbItem != null) {
                if (nbItem > 0) {
                    //omniture
                    try {
                        var ajaxUrl = location.protocol + '//' + window.mainSiteUrl + '/ShoppingCart/ShoppingCart/LoadOmnitureData';
                        var xhr = $.ajax({
                            timeout: BELL.rsx.defaultXhrTimeout,
                            url: ajaxUrl,
                            type: 'get',
                            dataType: 'jsonp',
                            error: function (e) {
                               // self.logAjaxErrorOmnitureCart(e);
                            },
                            success: function (response) {
                                if (response != null && response.success) {
                                    //working call
                                    try {
                                        s_oTrackPage({
                                            s_oAPT: "200-0-0",
                                            s_oPRD: jQuery.parseJSON(response.products.Data),
                                            s_oSS1: "Shop",
                                            s_oSS2: "Cart accessories",
                                            s_oSS3: "",
                                            s_oPGN: "Summary"
                                        });
                                    } catch (ex) { }
                                } else {
                                   // self.logAjaxErrorOmnitureCart(response.responseText);
                                }
                            }
                        });
                    } catch (e) {
                      //  self.logAjaxErrorOmnitureCart(e);
                    }
                    //omniture end
                    return true;
                }
            }
            //var $parent = $(this).parent();
            //$parent.toggleClass('rsx-active');
            //bell.rsx.globalConnector.outside($parent, function (e) {
            //    if (e.target.tagName != "BODY") {
            //        $parent.removeClass('rsx-active');
            //    }
            //});
            //e.preventDefault();
        });
    },
    logAjaxErrorOmnitureCart: function (e) {
        console.error("Error getting shopping cart product info: ", e);
        try {
            s_oTrackPage({
                s_oAPT: "200-2-2",
                s_oARS: 'OPEN_CART',
                s_oERR_CLASS: 'OPEN_CART:[T|FE]',
                s_oERR_DESC: 'OPEN_CART:Error opening cart: '.concat(e),
                s_oSS1: "Shop",
                s_oSS2: "Cart accessories",
                s_oSS3: "",
                s_oPGN: "Summary"
            });
        } catch (ex) { }
    }
}

$(document).ready(function () {
    GlobalNavLogin.loginButtonText();
    ShoppingCart.init();
    GlobalNavLogin.toggle({
        $login: $(".mybell-login-js"),
        $logout: $(".mybell-logout-js"),
        $fullname: $(".js-connector-customer-name"),
        url: $(".connector-login-modal").data("user-src"),
        cookie: GlobalNavLogin.getCookieValue("UserSession"),
        field: "MyBellUserFullName"
    });
    GlobalNavLogin.toggle({
        $login: $(".aliant-login-js"),
        $logout: $(".aliant-logout-js"),
        $fullname: $(".js-connector-aliant-customer-name"),
        url: $(".connector-login-modal").data("myaccount-user-src"),
        cookie: GlobalNavLogin.getCookieValue("MyAccountUserFullName"),
        field: "MyAccountUserFullName"
    });
});
var GlobalNavigation = {
    $GNactiveLob: $('.connector-active-lob'),

    $inputs: $('.js-connector-search-form input[name="query"]'),
    $defaultXhrTimeout: 7500,
    ACTIVE_CLASS: 'active',
    SEARCH_ACTIVE_CLASS: 'connector-search-active',
    OPEN_TRANSITION_TIME: 0,
    CLOSE_TRANSITION_TIME: 0,
    AUTOCOMPLETE_URL: 'http://www.bell.ca/Search/Search/GetAutoComplete',
    CARET_CLASSES: 'caret caret_top-sm caret_top-md caret_top-lg',

    // Selectors
    $body: $('body'),
    $connector: $('.connector'),
    $screen: $('#search-screen'),

    init: function () {
        try {
            var self = this;
            // Initializes autocomplete suggestion widget
            var $inputs = $('.search-bar-header #topNavSearch, .search-bar-footer #bottomNavSearch');

            this.province = $('meta[name=province]').attr("content");
            this.language = $('meta[name=language]').attr("content");
            this.defaultXhrTimeout = 7500;

            $inputs.each((function (i, query) {
                this.initQuery(query);
            }).bind(this));
        }

        catch (err) { }
    },

    initQuery: function (query) {
        var self = this;
        var $query = $(query);
        var $form = $query.closest("form");
        var $reset = $form.find("[type='reset']");
        var $formWrap = $form.closest(".connector-search-wrap");
        var $suggestions = $($form.data("suggestions"));
        self.AUTOCOMPLETE_URL = $form.data("autocompletehost");

        var autocomplete;

        $query.autocomplete({
            source: function (request, response) {
                self.autocompleteSource(request, response, $form, self.AUTOCOMPLETE_URL);
            },
            select: function (event, ui) {
                var itemVal = ui.item.label;
                if (itemVal.indexOf(":") > -1) {
                    location.href = itemVal.substring(itemVal.indexOf(":") + 1);
                } else {
                    $query.val(itemVal);
                    $form.trigger('submit');
                }

            },
            open: function (event, ui) {
                self.openAutoComplete(event, ui, self, autocomplete, $suggestions);
            },
            appendTo: $form.data("suggestions"),
            minLength: 2
        }).autocomplete('widget');

        autocomplete = $query.data('ui-autocomplete');
        if ($suggestions.attr("id") != "footer-autocomplete-search-results") {
            $suggestions.children('.ui-autocomplete').addClass(self.CARET_CLASSES);
        }


        $query.on('keyup', (function (event) {
            this.handleQueryInput(event, $form, $reset, $formWrap, $query);
        }).bind(self));

        $query.on('keypress', (function (event) {
            if (event.which == 13) {
                $form.trigger('submit');
            }
        }).bind(self));

        $('.CoveoSearchButton').on('click', (function (event) {
              event.stopPropagation();
              event.stopImmediatePropagation();
            $form.trigger('submit');
        }).bind(self));

        $('.CoveoSearchButton').on('keypress', (function (event) {
            event.stopPropagation();
            event.stopImmediatePropagation();
            $form.trigger('submit');
        }).bind(self));
     
        // Submits search query
        $form.on('submit', self.submit);

        // Clears autocomplete list when form is reset
        $form.on('reset', (function () {
            self.$body.removeClass(self.SEARCH_ACTIVE_CLASS);
            $reset.add(self.$screen).removeClass(self.ACTIVE_CLASS);
            $form.removeClass(self.ACTIVE_CLASS);
            autocomplete.term = null;
            $suggestions.children().empty();
            self.$inputs.val('');

        }));

        // Closes search if backdrop screen is clicked on
        self.$screen.on('click', (function () {
            $form.trigger('reset');
        }));

        if ($formWrap.length > 0 && !this.$body.hasClass("coveo-ur-enabled")) {
            // Opens search menu for mobile and tablet

            var $searchButton = $('#connector-search-button');

            $searchButton.on('click', (function (event) {
                if ($formWrap.hasClass(this.ACTIVE_CLASS)) {
                    this.closeQueryInput(event, $formWrap, $form, $query);
                } else {
                    this.openQueryInput($formWrap, $query);
                }
            }).bind(self));

        }
    },

    /**
    * Closes the search menu for mobile and tablet.
    * @param {object} event - Event handler
    */
    closeQueryInput: function (event, $formWrap, $form, $query) {

        var self = this;

        event.preventDefault();

        // some other code is doing this already, dont know where
        //$formWrap.removeClass(this.ACTIVE_CLASS);

        $query.trigger('blur');
        setTimeout((function () {
            $form.trigger('reset');
            self.$connector.removeClass(self.SEARCH_ACTIVE_CLASS);
        }), self.OPEN_TRANSITION_TIME);
    },

    /**
    * Opens and closes autocomplete and query menu depending on query contents.
    * @param {object} event - Event handler
    */
    handleQueryInput: function (event, $form, $reset, $formWrap, $query) {
        var queryLength = $(event.currentTarget).val().length;
        if (queryLength > 0 && !$reset.hasClass(this.ACTIVE_CLASS)) {
            $reset.addClass(this.ACTIVE_CLASS);
            $form.addClass(this.ACTIVE_CLASS);
            if (!this.$connector.hasClass(this.SEARCH_ACTIVE_CLASS)) {
                this.openQueryInput($formWrap, $query);
            }
        } else if (queryLength <= 0 && $reset.hasClass(this.ACTIVE_CLASS)) {
            $form.trigger('reset');
        }
    },

    /**
    * Opens the search menu for mobile and tablet.
    */
    openQueryInput: function ($formWrap, $query) {

        var self = this;

        // some other code is doing this already, dont know where
        //this.$connector.addClass(this.SEARCH_ACTIVE_CLASS);

        setTimeout((function () {
            $formWrap.addClass(self.ACTIVE_CLASS);
        }), self.OPEN_TRANSITION_TIME);

        setTimeout((function () {
            $query.trigger('focus');
        }), 300);
    },

    openAutoComplete: function (event, ui, self, autocomplete, suggestions) {
        var template = '<span class="ui-autocomplete-term">' + autocomplete.term + '</span>';
        autocomplete.menu.element.find('div.ui-menu-item-wrapper').each((function (i, $result) {

            var $result = $($result);
            var phrase = $result.text();

            if (phrase.indexOf(":") > -1)
                phrase = phrase.substring(0, phrase.indexOf(":"));

            $result.html(phrase.replace(autocomplete.term, template));

            $(this).mouseenter(function () {
                $(this).css('cursor', 'pointer');
            }).mouseleave(function () {
                $(this).css('cursor', 'default');
            });

        }));
        self.$body.addClass(self.SEARCH_ACTIVE_CLASS);
        if (suggestions.attr("id") != "footer-autocomplete-search-results") {
            self.$screen.addClass(self.ACTIVE_CLASS);
        }
    },

    /**
    * Configures the source for jQuery-UI's autocomplete.
    * @param {object} request - Request to server containing search query
    * @param {object} response - Response from server queried
    */
    autocompleteSource: function (request, response, $form, url) {
        var mktseg = $form.data('mktseg');

        var xhr = $.ajax({
            type: 'GET',
            url: url,
            dataType: 'jsonp',
            timeout: this.defaultXhrTimeout,
            data: {
                q: request.term.trim(),
                prov: this.province,
                lang: this.language,
                mktseg: mktseg,
                ver: 'w'
            }
        });

        xhr.done(function (searchResults) {
            if (searchResults.length > 5) {
                searchResults = searchResults.splice(0, 5);
            }

            response($.map(searchResults, function (result) {
                var lbl = result;
                var vl = result;
                if (/<[^>]*>/g.test(vl))
                    vl = vl.replace(/<[^>]*>/g, '');
                if (lbl.indexOf(":") > -1)
                    vl = vl.substring(0, vl.indexOf(":"));
                return { label: lbl, value: vl };
            }));
        });

        //xhr.error(function (e) {
        //    console.error('Search Autocomplete: Unable to query server: ', e);
        //});
    },

    submit: function () {
        var $form = $(this).closest("form");
        var $query = $form.find("input[name='query']");
        var raw = $query.val();
        var text = $(raw).text();
        $query.val(text.length > 0 ? text : raw);
        var action = $form.data('url').replace('#qbox#', $query.val());
        $form.prop('action', action);
        return true;
    },
    /*
        Try to find(or create) an element from the search query
    */
    resolveSearchTermFromSelector: function (selector) {
        if (typeof (selector) !== 'string') {
            return '';
        }
        try {
            var $element = $(selector);
        } catch (error) {
            console.log(error);
            return '';
        }
        return $element.text();
    },
    /**
     * Prevents form from submitting if query is empty.
     * @param {object} event - Event handler
     */
}

$(document).ready(function () {
    GlobalNavigation.init();
});
var VoiceSearch = {
    init: function () {
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1 || ua.indexOf("mobile") > -1;

        if (isAndroid) {
            return;
        }

        var self = this;
        this.voiceSearchLocation = {
            HEADER_FLYOUT: "header_flyout",
            HEADER_SIMPLE: "header_simple",
            FOOTER: "footer",
            HOME: "home"
        }
        this.$body = $("body");
        this.isCoveoSearchEnabled = this.$body.hasClass("coveo-search-enabled");
        this.isCapturing = false;
        this.$searchForm = $("#connector-search");
        this.$microphoneBtn = (this.isCoveoSearchEnabled) ? $('#voice_search_trigger') : $('#voice_search');
        this.$microphoneBtnFooter = $('#voice_search_trigger_footer');
        this.$microphoneBtnHome = $("#voice_search_trigger_home");
        this.$topNavSearch = $('#connector-search [type="search"]');
        this.$footerSearch = $('.search-bar-footer [type="search"]');
        this.$homeSearch = $('.home-search [type="search"]');
        this.$footerReset = $(".search-bar-footer").find("[type='reset']");
        this.$resetButton = $('#connector-search [type="reset"]').eq(0);
        this.$voiceSearchOverlay = $("#voice-search-overlay");
        this.$voiceSearchOverlayQuery = this.$voiceSearchOverlay.find("p");
        this.$voiceSearchOverlayClose = this.$voiceSearchOverlay.find("#voiceSearchCloseBtn");   

        this.language = (document.documentElement.lang !== "fr" && typeof document.documentElement.lang !== "undefined") ? "en-CA" : "fr-CA";
        this.speechRecognitionCheck = window.SpeechRecognition || window.webkitSpeechRecognition || null;

        this.isMicrophoneAvailable = false;
        this.isVoiceSearchEnabled = false;

        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                    for (var i = 0; i < devices.length; i++) {
                        var device = devices[i];

                        if (device.kind === "audioinput" && !self.isMicrophoneAvailable) {
                            self.isMicrophoneAvailable = true;
                            if (self.speechRecognitionCheck
                                && navigator.mediaDevices.getUserMedia
                                && self.isMicrophoneAvailable
                                /*&& location.protocol.toLowerCase().indexOf("https") > -1*/) {
                                self.setupRecognition();
                            }

                            $(document).keyup(function (e) {
                                if (e.which == 27) {
                                    self.stopCapture();
                                }
                            });
                        }
                    }
                });
        }
    },

    setupRecognition: function () {
        var self = this;
        this.searchLocation = "";

        self.recognition = new this.speechRecognitionCheck();

        navigator.permissions.query({ name: 'microphone' }).then(function (permissionStatus) {
            console.log('Microphone permission state:', permissionStatus.state);

            if (permissionStatus.state !== "denied") {
                self.$body.addClass("voice-search-enabled");
            }
        });

        $(this.$microphoneBtn).click(function () {
            if (self.isCoveoSearchEnabled)
                self.searchLocation = self.voiceSearchLocation.HEADER_FLYOUT;
            else
                self.searchLocation = self.voiceSearchLocation.HEADER_SIMPLE;

            self.microphoneClickHandler();
        });

        $(this.$microphoneBtnFooter).click(function () {
            self.searchLocation = self.voiceSearchLocation.FOOTER;
            self.microphoneClickHandler();
        });

        $(this.$microphoneBtnHome).click(function () {
            self.searchLocation = self.voiceSearchLocation.HOME;
            self.microphoneClickHandler();
        });

        $(this.$voiceSearchOverlayClose).focusout(function () {
            self.voiceSearchReturnFocus();
        });

        this.recognition.onresult = (function (event) {

            if (typeof self.$voiceSearchOverlay !== "undefined"
                && !self.$voiceSearchOverlay.hasClass("interim-recognition-on")) {
                self.$voiceSearchOverlay.addClass("interim-recognition-on");
            }

            switch (self.searchLocation) {
                case self.voiceSearchLocation.HEADER_FLYOUT: {
                    self.populateSpeechQueryCoveo(event);
                    break;
                }
                case self.voiceSearchLocation.FOOTER: {
                    self.populateFooterSpeechQuery(event);
                    break;
                }
                case self.voiceSearchLocation.HOME: {
                    self.populateHomeSpeechQuery(event);
                    break;
                }
                case self.voiceSearchLocation.HEADER_SIMPLE:
                    {
                        self.populateSpeechQuerySimpleHeader(event);
                        break;
                    }
            }
        });

        this.recognition.onspeechend = (function (event) {
            self.stopCapture();
        });

        self.$voiceSearchOverlayClose.on("click", function () {
            self.stopCapture();
        });

        this.recognition.onerror = (function (event) {
            console.log("web speech error: " + event.error);
            self.stopCapture();
        });
    },

    startCapture: function () {

        this.$body.addClass("voice-recording-on voice-active");
        this.recognition.lang = this.language;
        this.recognition.interimResults = true;

        this.recognition.start();
        this.isCapturing = true;
    },

    stopCapture: function () {

        this.$body.removeClass("voice-recording-on voice-active");

        if (typeof this.recognition !== "undefined") {
            this.recognition.stop();
        }
        this.isCapturing = false;
    },

    toggleCapture: function () {
        if (!this.isCapturing) {
            this.startCapture();
        } else {
            this.stopCapture();
        }
    },

    microphoneClickHandler: function () {

        var self = this;

        if (self.isVoiceSearchEnabled === false) {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {

                self.isVoiceSearchEnabled === true;
                self.toggleCapture();
                self.voiceSearchFocusModal();

            }).catch(function (err) {
                self.$body.removeClass("voice-search-enabled");
            });

        } else {
            self.toggleCapture();
        }

        typeof s_oTrackPage == "function" && s_oTrackPage({
            s_oAPT: "095-0-0"
        })

        self.voiceSearchFocusModal();

    },

    voiceSearchFocusModal: function () {
        setTimeout(function () {
            var self = this;
            voiceSearchModal = document.getElementById("voice-search-overlay");
            voiceSearchClose = document.getElementById("voiceSearchCloseBtn");
            if (window.getComputedStyle(voiceSearchModal).visibility !== "hidden") {
                self.voiceSearchClose.focus();
            }
        }, 100);
    },

    voiceSearchReturnFocus: function () {
        voiceSearchBtn = document.getElementById("voice_search");

        if (window.getComputedStyle(voiceSearchBtn).visibility !== "hidden") {
            voiceSearchBtn.focus();
        }
    },

    coveoFlyoutMicClickHandler: function (event) {
        this.searchLocation = this.voiceSearchLocation.HEADER_FLYOUT;
        this.microphoneClickHandler();
    },

    populateHomeSpeechQuery: function (event) {

        var speechQuery = this.updateOverlay(event);
        this.$homeSearch.val(speechQuery.toLowerCase()).focus();
        this.$homeSearch.keydown();
    },

    populateFooterSpeechQuery: function (event) {

        var speechQuery = this.updateOverlay(event);

        this.$footerSearch.val(speechQuery.toLowerCase()).focus();

        this.$resetButton.addClass("active");
        this.$searchForm.addClass("active");
        $(".search-bar-footer").submit();
    },

    populateSpeechQuerySimpleHeader: function (event) {
        var speechQuery = this.updateOverlay(event);
        this.$topNavSearch.val(speechQuery.toLowerCase());
        $("#topNavSearch").val(speechQuery.toLowerCase());
        this.$searchForm.submit();
    },

    populateSpeechQueryCoveo: function (event) {

        var speechQuery = this.updateOverlay(event);

        this.$body.addClass("search-bar-active");
        Coveo.get(Coveo.$$(document).find('.CoveoFlyoutController'), 'FlyoutController').setKeywords(speechQuery.toLowerCase());
        bell.coveoFlyout.$coveoSearchInput.focus();
    },

    updateOverlay: function (event) {

        var query = '';

        for (var i = 0; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                query = event.results[i][0].transcript;
                this.$voiceSearchOverlayQuery.text("");

                if (typeof this.$voiceSearchOverlay !== "undefined") {
                    this.$voiceSearchOverlay.removeClass("interim-recognition-on");
                }
            } else {
                query += event.results[i][0].transcript;
                this.$voiceSearchOverlayQuery.text(query);
            }
        }

        return query;
    },
    /**
     * Prevents form from submitting if query is empty.
     * @param {object} event - Event handler
     */
}

$(document).ready(function () {
    VoiceSearch.init();
});
