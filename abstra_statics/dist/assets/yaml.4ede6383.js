import{m as i}from"./editor.main.9cb379c4.js";import"./registerWidgets.29ceb1a3.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[e]="77b72d8c-0abe-41ed-9c79-60312241a330",n._sentryDebugIdIdentifier="sentry-dbid-77b72d8c-0abe-41ed-9c79-60312241a330")}catch{}})();/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,a=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of d(e))!s.call(n,r)&&r!==t&&c(n,r,{get:()=>e[r],enumerable:!(o=u(e,r))||o.enumerable});return n},m=(n,e,t)=>(a(n,e,"default"),t&&a(t,e,"default")),l={};m(l,i);var f={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{offSide:!0},onEnterRules:[{beforeText:/:\s*$/,action:{indentAction:l.languages.IndentAction.Indent}}]},g={tokenPostfix:".yaml",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["true","True","TRUE","false","False","FALSE","null","Null","Null","~"],numberInteger:/(?:0|[+-]?[0-9]+)/,numberFloat:/(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,numberOctal:/0o[0-7]+/,numberHex:/0x[0-9a-fA-F]+/,numberInfinity:/[+-]?\.(?:inf|Inf|INF)/,numberNaN:/\.(?:nan|Nan|NAN)/,numberDate:/\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,escapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,tokenizer:{root:[{include:"@whitespace"},{include:"@comment"},[/%[^ ]+.*$/,"meta.directive"],[/---/,"operators.directivesEnd"],[/\.{3}/,"operators.documentEnd"],[/[-?:](?= )/,"operators"],{include:"@anchor"},{include:"@tagHandle"},{include:"@flowCollections"},{include:"@blockStyle"},[/@numberInteger(?![ \t]*\S+)/,"number"],[/@numberFloat(?![ \t]*\S+)/,"number.float"],[/@numberOctal(?![ \t]*\S+)/,"number.octal"],[/@numberHex(?![ \t]*\S+)/,"number.hex"],[/@numberInfinity(?![ \t]*\S+)/,"number.infinity"],[/@numberNaN(?![ \t]*\S+)/,"number.nan"],[/@numberDate(?![ \t]*\S+)/,"number.date"],[/(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/,["type","white","operators","white"]],{include:"@flowScalars"},[/[^#]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],object:[{include:"@whitespace"},{include:"@comment"},[/\}/,"@brackets","@pop"],[/,/,"delimiter.comma"],[/:(?= )/,"operators"],[/(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/,"type"],{include:"@flowCollections"},{include:"@flowScalars"},{include:"@tagHandle"},{include:"@anchor"},{include:"@flowNumber"},[/[^\},]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],array:[{include:"@whitespace"},{include:"@comment"},[/\]/,"@brackets","@pop"],[/,/,"delimiter.comma"],{include:"@flowCollections"},{include:"@flowScalars"},{include:"@tagHandle"},{include:"@anchor"},{include:"@flowNumber"},[/[^\],]+/,{cases:{"@keywords":"keyword","@default":"string"}}]],multiString:[[/^( +).+$/,"string","@multiStringContinued.$1"]],multiStringContinued:[[/^( *).+$/,{cases:{"$1==$S2":"string","@default":{token:"@rematch",next:"@popall"}}}]],whitespace:[[/[ \t\r\n]+/,"white"]],comment:[[/#.*$/,"comment"]],flowCollections:[[/\[/,"@brackets","@array"],[/\{/,"@brackets","@object"]],flowScalars:[[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'[^']*'/,"string"],[/"/,"string","@doubleQuotedString"]],doubleQuotedString:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],blockStyle:[[/[>|][0-9]*[+-]?$/,"operators","@multiString"]],flowNumber:[[/@numberInteger(?=[ \t]*[,\]\}])/,"number"],[/@numberFloat(?=[ \t]*[,\]\}])/,"number.float"],[/@numberOctal(?=[ \t]*[,\]\}])/,"number.octal"],[/@numberHex(?=[ \t]*[,\]\}])/,"number.hex"],[/@numberInfinity(?=[ \t]*[,\]\}])/,"number.infinity"],[/@numberNaN(?=[ \t]*[,\]\}])/,"number.nan"],[/@numberDate(?=[ \t]*[,\]\}])/,"number.date"]],tagHandle:[[/\![^ ]*/,"tag"]],anchor:[[/[&*][^ ]+/,"namespace"]]}};export{f as conf,g as language};
//# sourceMappingURL=yaml.4ede6383.js.map
