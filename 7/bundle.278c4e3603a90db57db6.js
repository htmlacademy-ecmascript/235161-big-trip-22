(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(537),i=n.n(s),r=n(645),o=n.n(r)()(i());o.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);s&&o[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",o="day",a="week",l="month",c="quarter",d="year",u="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,l),r=n-i<0,o=t.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:a,d:o,D:u,h:r,m:i,s,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",$={};$[y]=v;var g=function(e){return e instanceof M},b=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var a=t.name;$[a]=t,i=a}return!s&&i&&(y=i),i||!s&&y},C=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},w=_;w.l=b,w.i=g,w.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function v(e){this.$L=b(e.locale,null,!0),this.parse(e)}var m=v.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(e,t){var n=C(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return C(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<C(e)},m.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!w.u(t)||t,h=w.p(e),f=function(e,t){var s=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?s:s.endOf(o)},p=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case a:var $=this.$locale().weekStart||0,g=(v<$?v+7:v)-$;return f(c?_-g:_+(6-g),m);case o:case u:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case s:return p(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var a,c=w.p(e),h="set"+(this.$u?"UTC":""),f=(a={},a[o]=h+"Date",a[u]=h+"Date",a[l]=h+"Month",a[d]=h+"FullYear",a[r]=h+"Hours",a[i]=h+"Minutes",a[s]=h+"Seconds",a[n]=h+"Milliseconds",a)[c],p=c===o?this.$D+(t-this.$W):t;if(c===l||c===d){var v=this.clone().set(u,1);v.$d[f](p),v.init(),this.$d=v.set(u,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[w.p(e)]()},m.add=function(n,c){var u,h=this;n=Number(n);var f=w.p(c),p=function(e){var t=C(h);return w.w(t.date(t.date()+Math.round(e*n)),h)};if(f===l)return this.set(l,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===o)return p(1);if(f===a)return p(7);var v=(u={},u[i]=e,u[r]=t,u[s]=1e3,u)[f]||1,m=this.$d.getTime()+n*v;return w.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,d=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},u=function(e){return w.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:d(n.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:u(1),hh:u(2),a:f(r,o,!0),A:f(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return s.replace(p,(function(e,t){return t||v[e]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,u,h){var f,p=w.p(u),v=C(n),m=(v.utcOffset()-this.utcOffset())*e,_=this-v,y=w.m(this,v);return y=(f={},f[d]=y/12,f[l]=y,f[c]=y/3,f[a]=(_-m)/6048e5,f[o]=(_-m)/864e5,f[r]=_/t,f[i]=_/e,f[s]=_/1e3,f)[p]||_,h?y:w.a(y)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return $[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=b(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),D=M.prototype;return C.prototype=D,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",o],["$M",l],["$y",d],["$D",u]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||(e(t,M,C),e.$i=!0),C},C.locale=b,C.isDayjs=g,C.unix=function(e){return C(1e3*e)},C.en=$[y],C.Ls=$,C.p={},C}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:a,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},u=function(e){return e instanceof y},h=function(e,t,n){return new y(e,n,t.$l)},f=function(e){return t.p(e)+"s"},p=function(e){return e<0},v=function(e){return p(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},_=function(e,t){return e?p(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function p(e,t,n){var s=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return h(e*d[f(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[f(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(c);if(i){var r=i.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=p.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*d[n]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=v(e/a),e%=a,this.$d.months=v(e/l),e%=l,this.$d.days=v(e/r),e%=r,this.$d.hours=v(e/i),e%=i,this.$d.minutes=v(e/s),e%=s,this.$d.seconds=v(e/n),e%=n,this.$d.milliseconds=e},m.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=e.negative||t.negative||s.negative||i.negative||r.negative||a.negative,c=i.format||r.format||a.format?"T":"",d=(l?"-":"")+"P"+e.format+t.format+s.format+c+i.format+r.format+a.format;return"P"===d||"-P"===d?"P0D":d},m.toJSON=function(){return this.toISOString()},m.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(e,t){return t||String(s[e])}))},m.as=function(e){return this.$ms/d[f(e)]},m.get=function(e){var t=this.$ms,n=f(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?v(t/d[n]):this.$d[n],0===t?0:t},m.add=function(e,t,n){var s;return s=t?e*d[f(t)]:u(e)?e.$ms:h(e,this).$ms,h(this.$ms+s*(n?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return h(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},p}();return function(n,s,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return h(e,{$l:n},t)},i.isDuration=u;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(e,t){return u(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)},s.prototype.subtract=function(e,t){return u(e)&&(e=e.asMilliseconds()),o.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},o=[],a=0;a<e.length;a++){var l=e[a],c=s.base?l[0]+s.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var h=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var p=i(f,s);s.byIndex=a,t.splice(a,0,{identifier:u,updater:p,references:1})}o.push(u)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=s(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var a=n(r[o]);t[a].references--}for(var l=s(e,i),c=0;c<r.length;c++){var d=n(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e=1,t=999){return Math.floor(e+Math.random()*(t+1-e))}const t=[{id:"1",basePrice:500,dateFrom:new Date("2019-07-10T22:55:56"),dateTo:new Date("2019-07-12T11:22:13"),destination:1,isFavorite:!1,offers:[1],type:"flight"},{id:"2",basePrice:15,dateFrom:new Date("2019-07-10T13:25:56"),dateTo:new Date("2019-07-10T13:50:13"),destination:2,isFavorite:!0,offers:[2],type:"taxi"},{id:"3",basePrice:50,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:4,isFavorite:!0,offers:[1],type:"bus"},{id:"4",basePrice:50,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:4,isFavorite:!0,offers:[1,2],type:"train"},{id:"5",basePrice:510,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:5,isFavorite:!0,offers:[1,2],type:"check-in"},{id:"6",basePrice:10,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:1,isFavorite:!0,offers:[1,2],type:"check-in"},{id:"7",basePrice:10,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:2,isFavorite:!0,offers:[2],type:"sightseeing"},{id:"8",basePrice:10,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:4,isFavorite:!0,offers:[1,2],type:"ship"},{id:"8",basePrice:35,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:5,isFavorite:!0,offers:[1,2],type:"taxi"},{id:"9",basePrice:25,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:4,isFavorite:!0,offers:[1,2],type:"drive"},{id:"10",basePrice:1e3,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:5,isFavorite:!0,offers:[1,2],type:"ship"},{id:"11",basePrice:300,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:1,isFavorite:!0,offers:[1],type:"sightseeing"},{id:"12",basePrice:320,dateFrom:new Date("2020-07-10T13:25:56"),dateTo:new Date("2020-07-10T13:50:13"),destination:3,isFavorite:!0,offers:[2],type:"sightseeing"}];function s(){return(e=t)[Math.floor(Math.random()*e.length)];var e}const i=[{type:"taxi",offers:[{id:1,title:"Upgrade to a comfort",price:120},{id:2,title:"Choose music",price:10}]},{type:"flight",offers:[{id:1,title:"Upgrade to a business class",price:500},{id:2,title:"Choose food",price:10}]},{type:"train",offers:[{id:1,title:"Upgrade to a business class",price:500},{id:2,title:"Choose food",price:10}]},{type:"ship",offers:[{id:1,title:"Upgrade to a business class",price:500},{id:2,title:"Choose food",price:10}]},{type:"drive",offers:[{id:1,title:"Upgrade to a business class",price:500},{id:2,title:"Choose food",price:10}]},{type:"bus",offers:[{id:1,title:"Upgrade to a business class",price:500},{id:2,title:"Choose food",price:10}]},{type:"restaurant",offers:[{id:1,title:"Upgrade to a business class",price:500},{id:2,title:"Choose food",price:10}]},{type:"check-in",offers:[{id:1,title:"Upgrade to a business class",price:500},{id:2,title:"Choose food",price:10}]},{type:"sightseeing",offers:[{id:1,title:"Upgrade to a business class",price:500},{id:2,title:"Choose food",price:10}]}],r=[{id:1,description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Chamonix"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Chamonix"}]},{id:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.",name:"Amsterdam",pictures:[{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Amsterdam"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Amsterdam"}]},{id:3,description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.",name:"Geneva",pictures:[{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Geneva"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Geneva"}]},{id:4,description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.",name:"Tokyo",pictures:[{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Tokyo"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Tokyo"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Tokyo"}]},{id:5,description:"Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.",name:"Seoul",pictures:[{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Seoul"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Seoul"},{src:`https://loremflickr.com/248/152?random=${e()}`,description:"Seoul"}]}];var o=n(379),a=n.n(o),l=n(795),c=n.n(l),d=n(569),u=n.n(d),h=n(565),f=n.n(h),p=n(216),v=n.n(p),m=n(589),_=n.n(m),y=n(10),$={};$.styleTagTransform=_(),$.setAttributes=f(),$.insert=u().bind(null,"head"),$.domAPI=c(),$.insertStyleElement=v(),a()(y.Z,$),y.Z&&y.Z.locals&&y.Z.locals;const g="shake";class b{#e=null;constructor(){if(new.target===b)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(g),setTimeout((()=>{this.element.classList.remove(g),e?.()}),600)}}const C="afterbegin",w="beforeend";function M(e,t,n=w){if(!(e instanceof b))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function D(e,t){if(!(e instanceof b&&t instanceof b))throw new Error("Can replace only components");const n=e.element,s=t.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}function S(e){if(null!==e){if(!(e instanceof b))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}class k extends b{#t=null;#n=null;#s=null;constructor({events:e,offers:t,destinations:n}){super(),this.#t=e,this.#n=t,this.#s=n}get template(){return function({destinationNames:e}){return`<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">${e}</h1>\n\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>`}({destinationNames:this.#i()})}#i(){const e=this.#s.find((e=>e.id===this.#t[0].destination)),t=this.#s.find((e=>e.id===this.#t[1]?.destination)),n=this.#s.find((e=>e.id===this.#t[this.#t.length-1].destination));return 1===this.#t.length?`${e.name}`:2===this.#t.length?`${e.name} — ${n.name}`:3===this.#t.length?`${e.name} — ${t.name} — ${n.name}`:`${e.name} — ... — ${n.name}`}}class T extends b{#r=null;constructor({filters:e}){super(),this.#r=e}get template(){return function(e){const t=e.map(((e,t)=>function(e,t){const{type:n,count:s}=e;return`<div class="trip-filters__filter">\n      <input id="filter-${n}"\n        class="trip-filters__filter-input  visually-hidden"\n        type="radio"\n        name="trip-filter"\n        value="${n}"\n        ${t?"checked":""}\n        ${0===s?"disabled":""}>\n      <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n    </div>`}(e,0===t))).join("");return`<form class="trip-filters" action="#" method="get">\n      ${t}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>`}(this.#r)}}const E=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];var F=n(484),A=n.n(F),x=n(646),H=n.n(x);A().extend(H());const O="YYYY-MM-DTHH:mm",Y="HH:mm",L="MM/DD/YY HH:mm";function P(e,t){return e?A()(e).format(t):""}const j={everything:e=>e.filter((e=>e)),future:e=>e.filter((e=>{return(t=e.dateFrom)&&A()(t).isAfter(A()(),"D");var t})),present:e=>e.filter((e=>{return(t=e.dateFrom)&&A()(t).isSame(A()(),"D");var t})),past:e=>e.filter((e=>{return(t=e.dateFrom)&&A()(t).isBefore(A()(),"D");var t}))};class I extends b{get template(){return'<ul class="trip-events__list"></ul>'}}class N extends b{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}class B extends b{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}class U extends b{#o=null;#n=null;#s=null;#a=null;#l=null;constructor({event:e,offers:t,destinations:n,onRoullupClick:s,onFavoriteClick:i}){super(),this.#o=e,this.#n=t,this.#s=n,this.#a=s,this.#l=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#d)}get template(){return function(e,t,n){const{basePrice:s,dateFrom:i,dateTo:r,destination:o,isFavorite:a,offers:l,type:c}=e,d=P(i,"YYYY-MM-D"),u=P(i,"MMM D"),h=P(i,O),f=P(r,O),p=P(i,Y),v=P(r,Y),m=n.find((e=>e.id===o)),_=a?"event__favorite-btn--active":"",y=function(e,t){const n=A()(t).diff(e);let s="DD[D] HH[H] mm[M]";return n<864e5&&(s="HH[H] mm[M]"),n<36e5&&(s="mm[M]"),A().duration(n).format(s)}(i,r),$=t.find((e=>e.type===c));return`<li class="trip-events__item">\n\n    <div class="event">\n\n      <time class="event__date" datetime="${d}">${u}</time>\n\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${c}.png" alt="Event type icon">\n      </div>\n\n      <h3 class="event__title">${c} ${m.name}</h3>\n\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${h}">${p}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${f}">${v}</time>\n        </p>\n        <p class="event__duration">${y}</p>\n      </div>\n\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${s}</span>\n      </p>\n\n      <h4 class="visually-hidden">Offers:</h4>\n\n      <ul class="event__selected-offers">\n      ${$.offers.map((e=>{if(l.includes(e.id))return`<li class="event__offer">\n            <span class="event__offer-title">${e.title}</span>\n              &plus;&euro;&nbsp;\n            <span class="event__offer-price">${e.price}</span>\n          </li>`})).join("")}\n      </ul>\n\n      <button class="event__favorite-btn ${_}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n\n    </div>\n  </li>`}(this.#o,this.#n,this.#s)}#c=e=>{e.preventDefault(),this.#a()};#d=e=>{e.preventDefault(),this.#l()}}class q extends b{#o=null;#n=null;#s=null;#u=null;constructor({event:e,offers:t,destinations:n,onFormSubmit:s}){super(),this.#o=e,this.#n=t,this.#s=n,this.#u=s,this.element.querySelector("form").addEventListener("submit",this.#h)}get template(){return function(e,t,n){const{basePrice:s,dateFrom:i,dateTo:r,destination:o,offers:a,type:l}=e,c=n.find((e=>e.id===o)),d=t.find((e=>e.type===l)),u=P(i,L),h=P(r,L);return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${l}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n\n    ${E.map((e=>`<div class="event__type-item">\n        <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${e===l?"checked":""}>\n        <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${e}</label>\n      </div>`)).join("")}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${l}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${c.name}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${n.map((e=>`<option value="${e.name}"></option>`)).join("")}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${u}">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${h}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${s}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n    ${d.offers.map((e=>`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${e.id}" type="checkbox" name="event-offer-luggage" ${a.includes(e.id)?"checked":""}>\n        <label class="event__offer-label" for="event-offer-luggage-${e.id}">\n          <span class="event__offer-title">${e.title}</span>\n            &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n        </label>\n      </div>`)).join("")}\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">${c.description}</p>\n\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n    ${c.pictures.map((e=>`<img class="event__photo" src="${e.src}" alt="${e.description}">`)).join("")}\n            </div>\n          </div>\n        </section>\n      </section>\n    </form>\n  </li>`}(this.#o,this.#n,this.#s)}#h=e=>{e.preventDefault(),this.#u(this.#o)}}const W="DEFAULT",R="EDITING";class Z{#f=null;#p=null;#v=null;#m=W;#o=null;#n=[];#s=[];#_=null;#y=null;constructor({eventsListContainer:e,offers:t,destinations:n,onDataChange:s,onModeChange:i}){this.#v=e,this.#n=t,this.#s=n,this.#_=s,this.#y=i}init(e){this.#o=e;const t=this.#f,n=this.#p;this.#f=new U({event:this.#o,offers:this.#n,destinations:this.#s,onRoullupClick:this.#a,onFavoriteClick:this.#l}),this.#p=new q({event:this.#o,offers:this.#n,destinations:this.#s,onFormSubmit:this.#u}),null!==t&&null!==n?(this.#m===W&&D(this.#f,t),this.#m===R&&D(this.#p,n),S(t),S(n)):M(this.#f,this.#v)}destroy(){S(this.#f),S(this.#p)}resetView(){this.#m!==W&&this.#$()}#g(){D(this.#p,this.#f),document.addEventListener("keydown",this.#b),this.#y(),this.#m=R}#$(){D(this.#f,this.#p),document.removeEventListener("keydown",this.#b),this.#m=W}#b=e=>{"Escape"===e.key&&(e.preventDefault(),this.#$())};#a=()=>{this.#g()};#l=()=>{this.#_({...this.#o,isFavorite:!this.#o.isFavorite})};#u=e=>{this.#_(e),this.#$()}}const z=document.querySelector(".page-header"),J=z.querySelector(".trip-main"),V=z.querySelector(".trip-controls__filters"),X=document.querySelector(".page-main").querySelector(".trip-events"),G=new class{#t=Array.from({length:5},s);#n=i;#s=r;get events(){return this.#t}get offers(){return this.#n}get destinations(){return this.#s}},K=new class{#C=null;#w=null;#M=null;#r=null;constructor({headerContainer:e,filtersContainer:t,eventsModel:n}){this.#C=e,this.#w=t,this.#M=n}#t=[];#n=[];#s=[];init(){var e;this.#t=[...this.#M.events],this.#n=[...this.#M.offers],this.#s=[...this.#M.destinations],this.#r=(e=this.#t,Object.entries(j).map((([t,n])=>({type:t,count:n(e).length})))),M(new k({events:this.#t,offers:this.#n,destinations:this.#s}),this.#C,C),M(new T({filters:this.#r}),this.#w)}}({headerContainer:J,filtersContainer:V,eventsModel:G}),Q=new class{#D=null;#M=null;#S=new I;#k=new N;#T=new B;#t=[];#n=[];#s=[];#E=new Map;constructor({eventsContainer:e,eventsModel:t}){this.#D=e,this.#M=t}init(){this.#t=[...this.#M.events],this.#n=[...this.#M.offers],this.#s=[...this.#M.destinations],this.#F()}#y=()=>{this.#E.forEach((e=>e.resetView()))};#A=e=>{var t,n;this.#t=(t=this.#t,n=e,t.map((e=>e.id===n.id?n:e))),this.#E.get(e.id).init(e)};#x(){M(this.#S,this.#D,w),this.#t.forEach((e=>this.#H(e)))}#O(){M(this.#k,this.#D,C)}#Y(){M(this.#T,this.#D)}#H(e){const t=new Z({eventsListContainer:this.#S.element,offers:this.#n,destinations:this.#s,onDataChange:this.#A,onModeChange:this.#y});t.init(e),this.#E.set(e.id,t)}#L(){this.#E.forEach((e=>e.destroy())),this.#E.clear()}#F(){0!==this.#t.length?(this.#O(),this.#x()):this.#Y()}}({eventsContainer:X,eventsModel:G});K.init(),Q.init()})()})();
//# sourceMappingURL=bundle.278c4e3603a90db57db6.js.map