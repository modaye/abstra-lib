import{a0 as se,d as R,o as oe,v as q,r as $,b as T,c as X,x as _,F as x,L as A,N as C,z as k,V as j,aa as L,S as N,O as K,Q,q as H,R as ee,K as U,e as D,G as te,t as P,D as ue,w as F,J as ce}from"./registerWidgets.6f0bbac2.js";import{T as le,B as he,a as de}from"./BackButton.6b463227.js";import{L as pe}from"./CircularLoading.64e0c9cf.js";import{a as fe}from"./asyncComputed.e83909df.js";import{J as ve}from"./jobs.e6269439.js";import{S as me}from"./SaveButton.0bc0fad8.js";import{_ as ye,R as _e,S as ge}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.ec286816.js";import{l as ne}from"./log.e20e536c.js";import{D as be}from"./DocsButton.ee9b2c87.js";import"./lottie.68b1efe0.js";import"./activeRecord.9b68dfe2.js";import"./icons.33d01da0.js";import"./forms.5f0cd9e2.js";import"./dashes.bdb53fcf.js";import"./runnerData.48e4b7b9.js";import"./hooks.f7d648d4.js";import"./workspaces.64e25f3a.js";import"./login.572617c7.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g=new Error().stack;g&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[g]="031e7888-b661-4825-9010-6c9100e39906",d._sentryDebugIdIdentifier="sentry-dbid-031e7888-b661-4825-9010-6c9100e39906")}catch{}})();var re={exports:{}};(function(d,g){(function(v,p){d.exports=p()})(globalThis,function(){return(()=>{var l={794:(m,u,S)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.CronParser=void 0;var n=S(586),y=function(){function c(t,e,i){e===void 0&&(e=!0),i===void 0&&(i=!1),this.expression=t,this.dayOfWeekStartIndexZero=e,this.monthStartIndexZero=i}return c.prototype.parse=function(){var t=this.extractParts(this.expression);return this.normalize(t),this.validate(t),t},c.prototype.extractParts=function(t){if(!this.expression)throw new Error("Expression is empty");var e=t.trim().split(/[ ]+/);if(e.length<5)throw new Error("Expression has only ".concat(e.length," part").concat(e.length==1?"":"s",". At least 5 parts are required."));if(e.length==5)e.unshift(""),e.push("");else if(e.length==6){var i=/\d{4}$/.test(e[5])||e[4]=="?"||e[2]=="?";i?e.unshift(""):e.push("")}else if(e.length>7)throw new Error("Expression has ".concat(e.length," parts; too many!"));return e},c.prototype.normalize=function(t){var e=this;if(t[3]=t[3].replace("?","*"),t[5]=t[5].replace("?","*"),t[2]=t[2].replace("?","*"),t[0].indexOf("0/")==0&&(t[0]=t[0].replace("0/","*/")),t[1].indexOf("0/")==0&&(t[1]=t[1].replace("0/","*/")),t[2].indexOf("0/")==0&&(t[2]=t[2].replace("0/","*/")),t[3].indexOf("1/")==0&&(t[3]=t[3].replace("1/","*/")),t[4].indexOf("1/")==0&&(t[4]=t[4].replace("1/","*/")),t[6].indexOf("1/")==0&&(t[6]=t[6].replace("1/","*/")),t[5]=t[5].replace(/(^\d)|([^#/\s]\d)/g,function(O){var M=O.replace(/\D/,""),w=M;return e.dayOfWeekStartIndexZero?M=="7"&&(w="0"):w=(parseInt(M)-1).toString(),O.replace(M,w)}),t[5]=="L"&&(t[5]="6"),t[3]=="?"&&(t[3]="*"),t[3].indexOf("W")>-1&&(t[3].indexOf(",")>-1||t[3].indexOf("-")>-1))throw new Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");var i={SUN:0,MON:1,TUE:2,WED:3,THU:4,FRI:5,SAT:6};for(var o in i)t[5]=t[5].replace(new RegExp(o,"gi"),i[o].toString());t[4]=t[4].replace(/(^\d{1,2})|([^#/\s]\d{1,2})/g,function(O){var M=O.replace(/\D/,""),w=M;return e.monthStartIndexZero&&(w=(parseInt(M)+1).toString()),O.replace(M,w)});var r={JAN:1,FEB:2,MAR:3,APR:4,MAY:5,JUN:6,JUL:7,AUG:8,SEP:9,OCT:10,NOV:11,DEC:12};for(var a in r)t[4]=t[4].replace(new RegExp(a,"gi"),r[a].toString());t[0]=="0"&&(t[0]=""),!/\*|\-|\,|\//.test(t[2])&&(/\*|\//.test(t[1])||/\*|\//.test(t[0]))&&(t[2]+="-".concat(t[2]));for(var s=0;s<t.length;s++)if(t[s].indexOf(",")!=-1&&(t[s]=t[s].split(",").filter(function(O){return O!==""}).join(",")||"*"),t[s]=="*/1"&&(t[s]="*"),t[s].indexOf("/")>-1&&!/^\*|\-|\,/.test(t[s])){var h=null;switch(s){case 4:h="12";break;case 5:h="6";break;case 6:h="9999";break;default:h=null;break}if(h!==null){var b=t[s].split("/");t[s]="".concat(b[0],"-").concat(h,"/").concat(b[1])}}},c.prototype.validate=function(t){this.assertNoInvalidCharacters("DOW",t[5]),this.assertNoInvalidCharacters("DOM",t[3]),this.validateRange(t)},c.prototype.validateRange=function(t){n.default.secondRange(t[0]),n.default.minuteRange(t[1]),n.default.hourRange(t[2]),n.default.dayOfMonthRange(t[3]),n.default.monthRange(t[4],this.monthStartIndexZero),n.default.dayOfWeekRange(t[5],this.dayOfWeekStartIndexZero)},c.prototype.assertNoInvalidCharacters=function(t,e){var i=e.match(/[A-KM-VX-Z]+/gi);if(i&&i.length)throw new Error("".concat(t," part contains invalid values: '").concat(i.toString(),"'"))},c}();u.CronParser=y},728:(m,u,S)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.ExpressionDescriptor=void 0;var n=S(910),y=S(794),c=function(){function t(e,i){if(this.expression=e,this.options=i,this.expressionParts=new Array(5),!this.options.locale&&t.defaultLocale&&(this.options.locale=t.defaultLocale),!t.locales[this.options.locale]){var o=Object.keys(t.locales)[0];console.warn("Locale '".concat(this.options.locale,"' could not be found; falling back to '").concat(o,"'.")),this.options.locale=o}this.i18n=t.locales[this.options.locale],i.use24HourTimeFormat===void 0&&(i.use24HourTimeFormat=this.i18n.use24HourTimeFormatByDefault())}return t.toString=function(e,i){var o=i===void 0?{}:i,r=o.throwExceptionOnParseError,a=r===void 0?!0:r,s=o.verbose,h=s===void 0?!1:s,b=o.dayOfWeekStartIndexZero,O=b===void 0?!0:b,M=o.monthStartIndexZero,w=M===void 0?!1:M,I=o.use24HourTimeFormat,E=o.locale,V=E===void 0?null:E,W={throwExceptionOnParseError:a,verbose:h,dayOfWeekStartIndexZero:O,monthStartIndexZero:w,use24HourTimeFormat:I,locale:V},J=new t(e,W);return J.getFullDescription()},t.initialize=function(e,i){i===void 0&&(i="en"),t.specialCharacters=["/","-",",","*"],t.defaultLocale=i,e.load(t.locales)},t.prototype.getFullDescription=function(){var e="";try{var i=new y.CronParser(this.expression,this.options.dayOfWeekStartIndexZero,this.options.monthStartIndexZero);this.expressionParts=i.parse();var o=this.getTimeOfDayDescription(),r=this.getDayOfMonthDescription(),a=this.getMonthDescription(),s=this.getDayOfWeekDescription(),h=this.getYearDescription();e+=o+r+s+a+h,e=this.transformVerbosity(e,!!this.options.verbose),e=e.charAt(0).toLocaleUpperCase()+e.substr(1)}catch(b){if(!this.options.throwExceptionOnParseError)e=this.i18n.anErrorOccuredWhenGeneratingTheExpressionD();else throw"".concat(b)}return e},t.prototype.getTimeOfDayDescription=function(){var e=this.expressionParts[0],i=this.expressionParts[1],o=this.expressionParts[2],r="";if(!n.StringUtilities.containsAny(i,t.specialCharacters)&&!n.StringUtilities.containsAny(o,t.specialCharacters)&&!n.StringUtilities.containsAny(e,t.specialCharacters))r+=this.i18n.atSpace()+this.formatTime(o,i,e);else if(!e&&i.indexOf("-")>-1&&!(i.indexOf(",")>-1)&&!(i.indexOf("/")>-1)&&!n.StringUtilities.containsAny(o,t.specialCharacters)){var a=i.split("-");r+=n.StringUtilities.format(this.i18n.everyMinuteBetweenX0AndX1(),this.formatTime(o,a[0],""),this.formatTime(o,a[1],""))}else if(!e&&o.indexOf(",")>-1&&o.indexOf("-")==-1&&o.indexOf("/")==-1&&!n.StringUtilities.containsAny(i,t.specialCharacters)){var s=o.split(",");r+=this.i18n.at();for(var h=0;h<s.length;h++)r+=" ",r+=this.formatTime(s[h],i,""),h<s.length-2&&(r+=","),h==s.length-2&&(r+=this.i18n.spaceAnd())}else{var b=this.getSecondsDescription(),O=this.getMinutesDescription(),M=this.getHoursDescription();if(r+=b,r&&O&&(r+=", "),r+=O,O===M)return r;r&&M&&(r+=", "),r+=M}return r},t.prototype.getSecondsDescription=function(){var e=this,i=this.getSegmentDescription(this.expressionParts[0],this.i18n.everySecond(),function(o){return o},function(o){return n.StringUtilities.format(e.i18n.everyX0Seconds(o),o)},function(o){return e.i18n.secondsX0ThroughX1PastTheMinute()},function(o){return o=="0"?"":parseInt(o)<20?e.i18n.atX0SecondsPastTheMinute(o):e.i18n.atX0SecondsPastTheMinuteGt20()||e.i18n.atX0SecondsPastTheMinute(o)});return i},t.prototype.getMinutesDescription=function(){var e=this,i=this.expressionParts[0],o=this.expressionParts[2],r=this.getSegmentDescription(this.expressionParts[1],this.i18n.everyMinute(),function(a){return a},function(a){return n.StringUtilities.format(e.i18n.everyX0Minutes(a),a)},function(a){return e.i18n.minutesX0ThroughX1PastTheHour()},function(a){try{return a=="0"&&o.indexOf("/")==-1&&i==""?e.i18n.everyHour():parseInt(a)<20?e.i18n.atX0MinutesPastTheHour(a):e.i18n.atX0MinutesPastTheHourGt20()||e.i18n.atX0MinutesPastTheHour(a)}catch{return e.i18n.atX0MinutesPastTheHour(a)}});return r},t.prototype.getHoursDescription=function(){var e=this,i=this.expressionParts[2],o=this.getSegmentDescription(i,this.i18n.everyHour(),function(s){return e.formatTime(s,"0","")},function(s){return n.StringUtilities.format(e.i18n.everyX0Hours(s),s)},function(s){return e.i18n.betweenX0AndX1()},function(s){return e.i18n.atX0()});if(o&&i.includes("-")&&this.expressionParts[1]!="0"){var r=Array.from(o.matchAll(/:00/g));if(r.length>1){var a=r[r.length-1].index;o=o.substring(0,a)+":59"+o.substring(a+3)}}return o},t.prototype.getDayOfWeekDescription=function(){var e=this,i=this.i18n.daysOfTheWeek(),o=null;return this.expressionParts[5]=="*"?o="":o=this.getSegmentDescription(this.expressionParts[5],this.i18n.commaEveryDay(),function(r,a){var s=r;return r.indexOf("#")>-1?s=r.substr(0,r.indexOf("#")):r.indexOf("L")>-1&&(s=s.replace("L","")),e.i18n.daysOfTheWeekInCase?e.i18n.daysOfTheWeekInCase(a)[parseInt(s)]:i[parseInt(s)]},function(r){return parseInt(r)==1?"":n.StringUtilities.format(e.i18n.commaEveryX0DaysOfTheWeek(r),r)},function(r){var a=r.substring(0,r.indexOf("-")),s=e.expressionParts[3]!="*";return s?e.i18n.commaAndX0ThroughX1(a):e.i18n.commaX0ThroughX1(a)},function(r){var a=null;if(r.indexOf("#")>-1){var s=r.substring(r.indexOf("#")+1),h=r.substring(0,r.indexOf("#")),b=null;switch(s){case"1":b=e.i18n.first(h);break;case"2":b=e.i18n.second(h);break;case"3":b=e.i18n.third(h);break;case"4":b=e.i18n.fourth(h);break;case"5":b=e.i18n.fifth(h);break}a=e.i18n.commaOnThe(s)+b+e.i18n.spaceX0OfTheMonth()}else if(r.indexOf("L")>-1)a=e.i18n.commaOnTheLastX0OfTheMonth(r.replace("L",""));else{var O=e.expressionParts[3]!="*";a=O?e.i18n.commaAndOnX0():e.i18n.commaOnlyOnX0(r)}return a}),o},t.prototype.getMonthDescription=function(){var e=this,i=this.i18n.monthsOfTheYear(),o=this.getSegmentDescription(this.expressionParts[4],"",function(r,a){return a&&e.i18n.monthsOfTheYearInCase?e.i18n.monthsOfTheYearInCase(a)[parseInt(r)-1]:i[parseInt(r)-1]},function(r){return parseInt(r)==1?"":n.StringUtilities.format(e.i18n.commaEveryX0Months(r),r)},function(r){return e.i18n.commaMonthX0ThroughMonthX1()||e.i18n.commaX0ThroughX1()},function(r){return e.i18n.commaOnlyInMonthX0?e.i18n.commaOnlyInMonthX0():e.i18n.commaOnlyInX0()});return o},t.prototype.getDayOfMonthDescription=function(){var e=this,i=null,o=this.expressionParts[3];switch(o){case"L":i=this.i18n.commaOnTheLastDayOfTheMonth();break;case"WL":case"LW":i=this.i18n.commaOnTheLastWeekdayOfTheMonth();break;default:var r=o.match(/(\d{1,2}W)|(W\d{1,2})/);if(r){var a=parseInt(r[0].replace("W","")),s=a==1?this.i18n.firstWeekday():n.StringUtilities.format(this.i18n.weekdayNearestDayX0(),a.toString());i=n.StringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(),s);break}else{var h=o.match(/L-(\d{1,2})/);if(h){var b=h[1];i=n.StringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(b),b);break}else{if(o=="*"&&this.expressionParts[5]!="*")return"";i=this.getSegmentDescription(o,this.i18n.commaEveryDay(),function(O){return O=="L"?e.i18n.lastDay():e.i18n.dayX0?n.StringUtilities.format(e.i18n.dayX0(),O):O},function(O){return O=="1"?e.i18n.commaEveryDay():e.i18n.commaEveryX0Days(O)},function(O){return e.i18n.commaBetweenDayX0AndX1OfTheMonth(O)},function(O){return e.i18n.commaOnDayX0OfTheMonth(O)})}break}}return i},t.prototype.getYearDescription=function(){var e=this,i=this.getSegmentDescription(this.expressionParts[6],"",function(o){return/^\d+$/.test(o)?new Date(parseInt(o),1).getFullYear().toString():o},function(o){return n.StringUtilities.format(e.i18n.commaEveryX0Years(o),o)},function(o){return e.i18n.commaYearX0ThroughYearX1()||e.i18n.commaX0ThroughX1()},function(o){return e.i18n.commaOnlyInYearX0?e.i18n.commaOnlyInYearX0():e.i18n.commaOnlyInX0()});return i},t.prototype.getSegmentDescription=function(e,i,o,r,a,s){var h=null,b=e.indexOf("/")>-1,O=e.indexOf("-")>-1,M=e.indexOf(",")>-1;if(!e)h="";else if(e==="*")h=i;else if(!b&&!O&&!M)h=n.StringUtilities.format(s(e),o(e));else if(M){for(var w=e.split(","),I="",E=0;E<w.length;E++)if(E>0&&w.length>2&&(I+=",",E<w.length-1&&(I+=" ")),E>0&&w.length>1&&(E==w.length-1||w.length==2)&&(I+="".concat(this.i18n.spaceAnd()," ")),w[E].indexOf("/")>-1||w[E].indexOf("-")>-1){var V=w[E].indexOf("-")>-1&&w[E].indexOf("/")==-1,W=this.getSegmentDescription(w[E],i,o,r,V?this.i18n.commaX0ThroughX1:a,s);V&&(W=W.replace(", ","")),I+=W}else b?I+=this.getSegmentDescription(w[E],i,o,r,a,s):I+=o(w[E]);b?h=I:h=n.StringUtilities.format(s(e),I)}else if(b){var w=e.split("/");if(h=n.StringUtilities.format(r(w[1]),w[1]),w[0].indexOf("-")>-1){var J=this.generateRangeSegmentDescription(w[0],a,o);J.indexOf(", ")!=0&&(h+=", "),h+=J}else if(w[0].indexOf("*")==-1){var Z=n.StringUtilities.format(s(w[0]),o(w[0]));Z=Z.replace(", ",""),h+=n.StringUtilities.format(this.i18n.commaStartingX0(),Z)}}else O&&(h=this.generateRangeSegmentDescription(e,a,o));return h},t.prototype.generateRangeSegmentDescription=function(e,i,o){var r="",a=e.split("-"),s=o(a[0],1),h=o(a[1],2),b=i(e);return r+=n.StringUtilities.format(b,s,h),r},t.prototype.formatTime=function(e,i,o){var r=parseInt(e),a="",s=!1;this.options.use24HourTimeFormat||(s=!!(this.i18n.setPeriodBeforeTime&&this.i18n.setPeriodBeforeTime()),a=s?"".concat(this.getPeriod(r)," "):" ".concat(this.getPeriod(r)),r>12&&(r-=12),r===0&&(r=12));var h=i,b="";return o&&(b=":".concat(("00"+o).substring(o.length))),"".concat(s?a:"").concat(("00"+r.toString()).substring(r.toString().length),":").concat(("00"+h.toString()).substring(h.toString().length)).concat(b).concat(s?"":a)},t.prototype.transformVerbosity=function(e,i){return i||(e=e.replace(new RegExp(", ".concat(this.i18n.everyMinute()),"g"),""),e=e.replace(new RegExp(", ".concat(this.i18n.everyHour()),"g"),""),e=e.replace(new RegExp(this.i18n.commaEveryDay(),"g"),""),e=e.replace(/\, ?$/,"")),e},t.prototype.getPeriod=function(e){return e>=12?this.i18n.pm&&this.i18n.pm()||"PM":this.i18n.am&&this.i18n.am()||"AM"},t.locales={},t}();u.ExpressionDescriptor=c},336:(m,u,S)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.enLocaleLoader=void 0;var n=S(751),y=function(){function c(){}return c.prototype.load=function(t){t.en=new n.en},c}();u.enLocaleLoader=y},751:(m,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.en=void 0;var S=function(){function n(){}return n.prototype.atX0SecondsPastTheMinuteGt20=function(){return null},n.prototype.atX0MinutesPastTheHourGt20=function(){return null},n.prototype.commaMonthX0ThroughMonthX1=function(){return null},n.prototype.commaYearX0ThroughYearX1=function(){return null},n.prototype.use24HourTimeFormatByDefault=function(){return!1},n.prototype.anErrorOccuredWhenGeneratingTheExpressionD=function(){return"An error occured when generating the expression description.  Check the cron expression syntax."},n.prototype.everyMinute=function(){return"every minute"},n.prototype.everyHour=function(){return"every hour"},n.prototype.atSpace=function(){return"At "},n.prototype.everyMinuteBetweenX0AndX1=function(){return"Every minute between %s and %s"},n.prototype.at=function(){return"At"},n.prototype.spaceAnd=function(){return" and"},n.prototype.everySecond=function(){return"every second"},n.prototype.everyX0Seconds=function(){return"every %s seconds"},n.prototype.secondsX0ThroughX1PastTheMinute=function(){return"seconds %s through %s past the minute"},n.prototype.atX0SecondsPastTheMinute=function(){return"at %s seconds past the minute"},n.prototype.everyX0Minutes=function(){return"every %s minutes"},n.prototype.minutesX0ThroughX1PastTheHour=function(){return"minutes %s through %s past the hour"},n.prototype.atX0MinutesPastTheHour=function(){return"at %s minutes past the hour"},n.prototype.everyX0Hours=function(){return"every %s hours"},n.prototype.betweenX0AndX1=function(){return"between %s and %s"},n.prototype.atX0=function(){return"at %s"},n.prototype.commaEveryDay=function(){return", every day"},n.prototype.commaEveryX0DaysOfTheWeek=function(){return", every %s days of the week"},n.prototype.commaX0ThroughX1=function(){return", %s through %s"},n.prototype.commaAndX0ThroughX1=function(){return", %s through %s"},n.prototype.first=function(){return"first"},n.prototype.second=function(){return"second"},n.prototype.third=function(){return"third"},n.prototype.fourth=function(){return"fourth"},n.prototype.fifth=function(){return"fifth"},n.prototype.commaOnThe=function(){return", on the "},n.prototype.spaceX0OfTheMonth=function(){return" %s of the month"},n.prototype.lastDay=function(){return"the last day"},n.prototype.commaOnTheLastX0OfTheMonth=function(){return", on the last %s of the month"},n.prototype.commaOnlyOnX0=function(){return", only on %s"},n.prototype.commaAndOnX0=function(){return", and on %s"},n.prototype.commaEveryX0Months=function(){return", every %s months"},n.prototype.commaOnlyInX0=function(){return", only in %s"},n.prototype.commaOnTheLastDayOfTheMonth=function(){return", on the last day of the month"},n.prototype.commaOnTheLastWeekdayOfTheMonth=function(){return", on the last weekday of the month"},n.prototype.commaDaysBeforeTheLastDayOfTheMonth=function(){return", %s days before the last day of the month"},n.prototype.firstWeekday=function(){return"first weekday"},n.prototype.weekdayNearestDayX0=function(){return"weekday nearest day %s"},n.prototype.commaOnTheX0OfTheMonth=function(){return", on the %s of the month"},n.prototype.commaEveryX0Days=function(){return", every %s days"},n.prototype.commaBetweenDayX0AndX1OfTheMonth=function(){return", between day %s and %s of the month"},n.prototype.commaOnDayX0OfTheMonth=function(){return", on day %s of the month"},n.prototype.commaEveryHour=function(){return", every hour"},n.prototype.commaEveryX0Years=function(){return", every %s years"},n.prototype.commaStartingX0=function(){return", starting %s"},n.prototype.daysOfTheWeek=function(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},n.prototype.monthsOfTheYear=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]},n}();u.en=S},586:(m,u)=>{Object.defineProperty(u,"__esModule",{value:!0});function S(y,c){if(!y)throw new Error(c)}var n=function(){function y(){}return y.secondRange=function(c){for(var t=c.split(","),e=0;e<t.length;e++)if(!isNaN(parseInt(t[e],10))){var i=parseInt(t[e],10);S(i>=0&&i<=59,"seconds part must be >= 0 and <= 59")}},y.minuteRange=function(c){for(var t=c.split(","),e=0;e<t.length;e++)if(!isNaN(parseInt(t[e],10))){var i=parseInt(t[e],10);S(i>=0&&i<=59,"minutes part must be >= 0 and <= 59")}},y.hourRange=function(c){for(var t=c.split(","),e=0;e<t.length;e++)if(!isNaN(parseInt(t[e],10))){var i=parseInt(t[e],10);S(i>=0&&i<=23,"hours part must be >= 0 and <= 23")}},y.dayOfMonthRange=function(c){for(var t=c.split(","),e=0;e<t.length;e++)if(!isNaN(parseInt(t[e],10))){var i=parseInt(t[e],10);S(i>=1&&i<=31,"DOM part must be >= 1 and <= 31")}},y.monthRange=function(c,t){for(var e=c.split(","),i=0;i<e.length;i++)if(!isNaN(parseInt(e[i],10))){var o=parseInt(e[i],10);S(o>=1&&o<=12,t?"month part must be >= 0 and <= 11":"month part must be >= 1 and <= 12")}},y.dayOfWeekRange=function(c,t){for(var e=c.split(","),i=0;i<e.length;i++)if(!isNaN(parseInt(e[i],10))){var o=parseInt(e[i],10);S(o>=0&&o<=6,t?"DOW part must be >= 0 and <= 6":"DOW part must be >= 1 and <= 7")}},y}();u.default=n},910:(m,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.StringUtilities=void 0;var S=function(){function n(){}return n.format=function(y){for(var c=[],t=1;t<arguments.length;t++)c[t-1]=arguments[t];return y.replace(/%s/g,function(e){return c.shift()})},n.containsAny=function(y,c){return c.some(function(t){return y.indexOf(t)>-1})},n}();u.StringUtilities=S}},v={};function p(m){var u=v[m];if(u!==void 0)return u.exports;var S=v[m]={exports:{}};return l[m](S,S.exports,p),S.exports}var f={};return(()=>{var m=f;Object.defineProperty(m,"__esModule",{value:!0}),m.toString=void 0;var u=p(728),S=p(336);u.ExpressionDescriptor.initialize(new S.enLocaleLoader),m.default=u.ExpressionDescriptor;var n=u.ExpressionDescriptor.toString;m.toString=n})(),f})()})})(re);const ae=se(re.exports),Se=d=>{const[g,l,v,p,f]=d.split(" ");return{minute:g,hour:l,day:v,month:p,weekday:f}};function B(d){if(d==="*")return{values:[-1]};{const l=d.split(","),v=[];for(let p=0;p<l.length;p++){const f=l[p];if(f.includes("-")){const m=f.split("-");for(let u=Number(m[0]);u<Number(m[1])+1;u++)v.push(u)}else v.push(Number(f))}return{values:v}}}const Oe=()=>[...Array(60).keys()].reduce((d,g)=>(g%15||d.push(g),d),[]),we=()=>[...Array(31).keys()].map(d=>d+1),G=()=>{const d=[];for(let g=0;g<24;g++)for(let l=0;l<60;l+=30)g<12?l<10?d.push(`${g}:0${l} AM`):d.push(`${g}:${l} AM`):g===12?l<10?d.push(`${g}:0${l} PM`):d.push(`${g}:${l} PM`):l<10?d.push(`${g-12}:0${l} PM`):d.push(`${g-12}:${l} PM`);return d},Te={0:"0",1:"01",2:"02",3:"03",4:"04",5:"05",6:"06",7:"07",8:"08",9:"09",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16",17:"17",18:"18",19:"19",20:"20",21:"21",22:"22",23:"23",24:"24",25:"25",26:"26",27:"27",28:"28",29:"29",30:"30",31:"31",32:"32",33:"33",34:"34",35:"35",36:"36",37:"37",38:"38",39:"39",40:"40",41:"41",42:"42",43:"43",44:"44",45:"45",46:"46",47:"47",48:"48",49:"49",50:"50",51:"51",52:"52",53:"53",54:"54",55:"55",56:"56",57:"57",58:"58",59:"59"},ke={0:"0",1:"01",2:"02",3:"03",4:"04",5:"05",6:"06",7:"07",8:"08",9:"09",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16",17:"17",18:"18",19:"19",20:"20",21:"21",22:"22",23:"23"},Xe={1:"01",2:"02",3:"03",4:"04",5:"05",6:"06",7:"07",8:"08",9:"09",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16",17:"17",18:"18",19:"19",20:"20",21:"21",22:"22",23:"23",24:"24",25:"25",26:"26",27:"27",28:"28",29:"29",30:"30",31:"31"},Me={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},z={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},Ee=["hourly","daily","weekly","monthly"],De={hourly:{minute:"0",hour:"*",day:"*",month:"*",weekday:"*"},daily:{minute:"0",hour:"6",day:"*",month:"*",weekday:"*"},weekly:{minute:"0",hour:"6",day:"*",month:"*",weekday:"1"},monthly:{minute:"0",hour:"6",day:"1",month:"*",weekday:"*"}},Ce=d=>(K("data-v-4a09321b"),d=d(),Q(),d),Ie={class:"cron-settings-wrapper"},$e={class:"cron-selector"},xe={class:"periodicity"},Ae=Ce(()=>_("div",{class:"label"},"Recurrence",-1)),je=["selected"],Le=["selected"],Ue=["value","selected"],Ne={class:"periodicity"},Re={class:"schedule"},He=["value","selected"],We={class:"schedule"},Be=["value","selected"],Ye={class:"schedule"},Ve=["value","selected"],Je=["value","selected"],Fe={class:"schedule"},Ze=["value","selected"],Ge=["value","selected"],Pe=R({__name:"CronEditor",props:{crontab:null},emits:["changeCrontab","saveCrontab","showAdvancedSettings"],setup(d,{emit:g}){const l=d;function v(o,r){const a=parseInt(o),s=parseInt(r),h=a>=12?"PM":"AM",b=a%12,O=s<10?`0${s}`:s;return`${b}:${O} ${h}`}oe(()=>{const{hour:o,day:r,weekday:a,month:s,minute:h}=l.crontab;s=="*"&&a==="*"&&r!=="*"&&!u([r,o,h])?f.value="monthly":s==="*"&&r==="*"&&a!=="*"&&!u([a,o,h])?f.value="weekly":r==="*"&&a==="*"&&s==="*"&&o!=="*"&&!u([o,h])?f.value="daily":o=="*"&&r==="*"&&a==="*"&&s==="*"&&!u([h])?f.value="hourly":f.value="custom"});const p=q({minute:l.crontab.minute,hour:l.crontab.hour,day:l.crontab.day,month:l.crontab.month,weekday:l.crontab.weekday}),f=$(""),m=$(1),u=o=>o.some(r=>r.includes("-")||r.includes(",")),S=o=>{p.minute=o.minute,p.hour=o.hour,p.day=o.day,p.month=o.month,p.weekday=o.weekday},n=o=>{m.value=0,f.value=o.target.value,S(De[f.value]),g("changeCrontab",p)},y=o=>{m.value=0;const r=o.target.value;p.minute=r,g("changeCrontab",p)},c=o=>{m.value=0;const r=o.target.value;let a=r.split(":")[0],s=r.split(":")[1];a=r.split(" ")[1]==="AM"||a==="12"?a:(Number(a)+12).toString(),s=s.split(" ")[0],p.minute=s,p.hour=a,g("changeCrontab",p)},t=o=>{m.value=0;const r=o.target.value;p.weekday=r,g("changeCrontab",p)},e=o=>{m.value=0;const r=o.target.value;p.day=r,g("changeCrontab",p)},i=()=>{f.value="custom",g("showAdvancedSettings")};return(o,r)=>(T(),X("div",Ie,[_("div",$e,[_("div",xe,[Ae,_("select",{class:"select",onChange:n},[_("option",{value:"",selected:!f.value,disabled:"",hidden:""}," Choose a periodicity ",8,je),_("option",{value:"",selected:f.value=="custom",disabled:"",hidden:""}," Custom ",8,Le),(T(!0),X(x,null,A(k(Ee),(a,s)=>(T(),X("option",{key:s,value:a,selected:a==f.value},C(a),9,Ue))),128))],32)]),_("div",Ne,[j(_("div",Re,[N(" at "),_("select",{class:"select",onChange:y},[(T(!0),X(x,null,A(k(Oe)(),(a,s)=>(T(),X("option",{key:s,value:a,selected:a==parseInt(p.minute)},C(a),9,He))),128))],32),N(" minutes ")],512),[[L,f.value==="hourly"]]),j(_("div",We,[N(" at "),_("select",{class:"select",onChange:c},[(T(!0),X(x,null,A(k(G)(),(a,s)=>(T(),X("option",{key:s,value:a,selected:a===v(p.hour,p.minute)},C(a),9,Be))),128))],32)],512),[[L,f.value==="daily"]]),j(_("div",Ye,[N(" on "),_("select",{class:"select",onChange:t},[(T(!0),X(x,null,A(k(z),(a,s)=>(T(),X("option",{key:s,value:s,selected:a===Object.values(k(z))[parseInt(p.weekday)]},C(a),9,Ve))),128))],32),N(" at "),_("select",{class:"select",onChange:c},[(T(!0),X(x,null,A(k(G)(),(a,s)=>(T(),X("option",{key:s,value:a,selected:a===v(p.hour,p.minute)},C(a),9,Je))),128))],32)],512),[[L,f.value==="weekly"]]),j(_("div",Fe,[N(" on "),_("select",{class:"select",onChange:e},[(T(!0),X(x,null,A(k(we)(),(a,s)=>(T(),X("option",{key:s,value:a,selected:a===parseInt(p.day)},C(a),9,Ze))),128))],32),N(" at "),_("select",{class:"select",onChange:c},[(T(!0),X(x,null,A(k(G)(),(a,s)=>(T(),X("option",{key:s,value:a,selected:a===v(p.hour,p.minute)},C(a),9,Ge))),128))],32)],512),[[L,f.value==="monthly"]])]),_("span",{class:"advanced-settings",onClick:i},"Advanced settings")])]))}});const ze=H(Pe,[["__scopeId","data-v-4a09321b"]]),qe=d=>(K("data-v-a5e38138"),d=d(),Q(),d),Ke={class:"container"},Qe=qe(()=>_("div",{class:"header"},[_("span",null,"Choice")],-1)),et={class:"body"},tt={class:"checkbox"},nt=["id","checked"],ot=["for"],rt={class:"name"},at=R({__name:"Choice",props:{choiceOptions:null,values:null},emits:["changeValues"],setup(d,{emit:g}){const l=d,v=$([]),p=$(l.choiceOptions);oe(()=>{l.values&&(v.value=l.values,l.values[0]===-1?v.value=[...Object.keys(l.choiceOptions).map(Number)]:v.value=l.values)}),ee(()=>l.values,()=>{l.values&&(l.values[0]!==-1?v.value=l.values:v.value=[...Object.keys(l.choiceOptions).map(Number)])});const f=U(()=>u.value.join(",")),m=U(()=>[...v.value].sort((y,c)=>y-c)),u=U(()=>{var y=[],c,t;for(let e=0;e<m.value.length;e++){for(c=[m.value[e]],t=c;m.value[e+1]-m.value[e]==1;)t=m.value[e+1],e++;y.push(c==t?c+"":c+"-"+t)}return y}),S=y=>v.value.includes(Number(y)),n=y=>{if(y.preventDefault(),v.value.length===1&&y&&y.target&&!y.target.checked){alert("You must select at least one item"),y.target.checked=!0;return}const c=y.target.id;S(c)?v.value=v.value.filter(t=>t!==Number(c)):v.value.push(Number(c)),g("changeValues",f.value?f.value:"*")};return(y,c)=>(T(),X("div",Ke,[Qe,_("div",et,[(T(!0),X(x,null,A(p.value,(t,e)=>(T(),X("div",{key:e,class:"item"},[_("div",tt,[_("input",{id:e,type:"checkbox",checked:S(e),onInput:n},null,40,nt),_("label",{for:`${e}`},null,8,ot)]),_("div",rt,C(t),1)]))),128))])]))}});const it=H(at,[["__scopeId","data-v-a5e38138"]]),st={class:"wrapper"},ut=R({__name:"TimeSelector",props:{initialValue:null,options:null,type:null},emits:["change"],setup(d,{emit:g}){const l=d,v=$(l.initialValue),p=f=>{g("change",l.type,f)};return ee(()=>l.initialValue,f=>{v.value=f}),(f,m)=>(T(),X("div",st,[D(it,{"choice-options":d.options,values:v.value.values,onChangeValues:p},null,8,["choice-options","values"])]))}});const Y=H(ut,[["__scopeId","data-v-a1b10267"]]),ct={class:"cron-settings-wrapper"},lt={class:"cron-settings"},ht={class:"human-readable"},dt={class:"cron-editor"},pt={class:"cron-tabs"},ft=["onClick"],vt={class:"actions"},mt=R({__name:"AdvancedCronEditor",props:{job:null},emits:["updateSchedule"],setup(d,{emit:g}){const v=$(d.job),{minute:p,hour:f,day:m,month:u,weekday:S}=Se(v.value.schedule),n=q({weekday:S,month:u,day:m,hour:f,minute:p}),y=["Month","Day of Month","Hours","Minutes","Days of week"],c=$(0),t=h=>{c.value=h},e=U(()=>o.value===v.value.schedule),i=U(()=>ae.toString(o.value)),o=U(()=>`${n.minute} ${n.hour} ${n.day} ${n.month} ${n.weekday}`),r=(h,b)=>{n[h]=b},a=()=>{g("updateSchedule",o.value)},s=()=>{n.minute=p,n.hour=f,n.day=m,n.month=u,n.weekday=S};return(h,b)=>(T(),X("div",ct,[_("div",lt,[_("p",ht,'"'+C(k(i))+'" - GMT+0',1),_("div",dt,[_("div",pt,[(T(),X(x,null,A(y,(O,M)=>_("span",{key:M,class:te(["cron-tab",{active:c.value===M}]),onClick:w=>t(M)},C(O),11,ft)),64))]),j(D(Y,{"initial-value":k(B)(n.month),options:k(Me),type:"month",onChange:r},null,8,["initial-value","options"]),[[L,c.value===0]]),j(D(Y,{"initial-value":k(B)(n.day),options:k(Xe),type:"day",onChange:r},null,8,["initial-value","options"]),[[L,c.value===1]]),j(D(Y,{"initial-value":k(B)(n.hour),options:k(ke),type:"hour",onChange:r},null,8,["initial-value","options"]),[[L,c.value===2]]),j(D(Y,{"initial-value":k(B)(n.minute),options:k(Te),type:"minute",onChange:r},null,8,["initial-value","options"]),[[L,c.value===3]]),j(D(Y,{"initial-value":k(B)(n.weekday),options:k(z),type:"weekday",onChange:r},null,8,["initial-value","options"]),[[L,c.value===4]]),_("div",vt,[_("button",{class:"save-button button",onClick:s}," Reset changes "),_("button",{class:te(["save-button","button",k(e)?"disabled":""]),onClick:a}," Set changes ",2)])])])]))}});const yt=H(mt,[["__scopeId","data-v-07f4693a"]]),_t={class:"modal-wrapper"},gt={class:"modal"},bt={class:"modal-content-wrapper"},St=R({__name:"AdvancedSettingsModal",props:{job:null},emits:["close","saveCrontab"],setup(d,{emit:g}){const v=$(d.job),p=m=>{g("saveCrontab",m)},f=()=>{g("close")};return(m,u)=>(T(),X("div",_t,[_("div",gt,[_("span",{class:"close",onClick:f},"\xD7"),_("div",bt,[D(yt,{job:v.value,onUpdateSchedule:p},null,8,["job"])])])]))}});const Ot=H(St,[["__scopeId","data-v-184784f2"]]),ie=d=>(K("data-v-53b723be"),d=d(),Q(),d),wt={class:"schedule-editor"},Tt={class:"schedule-settings"},kt=ie(()=>_("div",{class:"title"},"Schedule settings",-1)),Xt=ie(()=>_("div",{class:"subtitle"},"Time Zone: GMT+0000",-1)),Mt={class:"readable-cron"},Et=R({__name:"ScheduleEditor",props:{job:null},setup(d){const g=d,l=$(!1),v=$(g.job),p=()=>{l.value=!l.value},f=()=>{l.value=!1},m=t=>({weekday:t.split(" ")[4],month:t.split(" ")[3],day:t.split(" ")[2],hour:t.split(" ")[1],minute:t.split(" ")[0]}),u=q(m(v.value.schedule)),S=U(()=>ae.toString(n.value)),n=U(()=>`${u.minute} ${u.hour} ${u.day} ${u.month} ${u.weekday}`),y=t=>{u.minute==t.minute&&u.hour==t.hour&&u.day==t.day&&u.month==t.month&&u.weekday==t.weekday||(u.minute=t.minute,u.hour=t.hour,u.day=t.day,u.month=t.month,u.weekday=t.weekday,v.value.schedule=n.value)},c=t=>{t?(v.value.schedule=t,Object.assign(u,m(t))):v.value.schedule=n.value,f()};return ee(()=>v.value.schedule,t=>{y({minute:t.split(" ")[0],hour:t.split(" ")[1],day:t.split(" ")[2],month:t.split(" ")[3],weekday:t.split(" ")[4]})}),(t,e)=>(T(),X("div",wt,[_("div",Tt,[kt,Xt,D(ze,{class:"recurrence-settings",crontab:u,onChangeCrontab:y,onSaveCrontab:c,onShowAdvancedSettings:p},null,8,["crontab"])]),_("div",Mt,C(k(S)),1),l.value?(T(),P(Ot,{key:0,job:v.value,onClose:f,onSaveCrontab:c},null,8,["job"])):ue("",!0)]))}});const Dt=H(Et,[["__scopeId","data-v-53b723be"]]),Ct={class:"job-editor"},It={class:"settings"},$t=R({__name:"JobEditor",setup(d){const g=ce(),{result:l,loading:v}=fe(()=>ve.get(g.params.jobId));async function p(){if(!l.value)return;const{stdout:f,stderr:m}=await l.value.test();ne.log({type:"stdout",log:f}),ne.log({type:"stderr",log:m})}return(f,m)=>{var u;return T(),X("div",Ct,[k(v)||!k(l)?(T(),P(pe,{key:0})):(T(),P(le,{key:1},{left:F(()=>[D(he,{link:"/_editor/jobs"})]),right:F(()=>[D(be,{path:"jobs"}),D(me,{model:k(l)},null,8,["model"])]),default:F(()=>[D(de,{title:"Settings"},{default:F(()=>[_("div",It,[D(_e,{runtime:k(l)},null,8,["runtime"]),D(Dt,{style:{width:"100%",height:"100%"},job:k(l)},null,8,["job"])])]),_:1})]),_:1})),D(ge,{runtime:"jobs",onRestart:p}),D(ye,{"has-changes":(u=k(l))==null?void 0:u.hasChanges()},null,8,["has-changes"])])}}});const qt=H($t,[["__scopeId","data-v-6a6e4133"]]);export{qt as default};
//# sourceMappingURL=JobEditor.a6fe452e.js.map
