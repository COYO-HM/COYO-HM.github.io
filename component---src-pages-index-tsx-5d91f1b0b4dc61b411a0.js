(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function a(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],a(r),a(n))}function o(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=a(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(t);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(t)}r["%C2"]="�";for(var u=Object.keys(r),s=0;s<u.length;s++){var c=u[s];t=t.replace(new RegExp(c,"g"),r[c])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],u=t[i];(a?-1!==e.indexOf(i):e(i,u,t))&&(r[i]=u)}return r}},2203:function(t,e,r){"use strict";var n=r(8416),a=r(7424),o=r(861);function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=r(8936),c=r(7091),l=r(4734),p=r(8616),f=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function m(t,e){return e.decode?c(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function x(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function v(t){var e=(t=x(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,e){d((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"colon-list-separator":return function(t,r,n){e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var a="string"==typeof r&&r.includes(t.arrayFormatSeparator),o="string"==typeof r&&!a&&m(r,t).includes(t.arrayFormatSeparator);r=o?m(r,t):r;var i=a||o?r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)})):null===r?r:m(r,t);n[e]=i};case"bracket-separator":return function(e,r,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return m(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o}else n[e]=r?m(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var o,u=i(t.split("&"));try{for(u.s();!(o=u.n()).done;){var s=o.value;if(""!==s){var c=l(e.decode?s.replace(/\+/g," "):s,"="),p=a(c,2),f=p[0],g=p[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?g:m(g,e),r(m(f,e),g,n)}}}catch(I){u.e(I)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],k=n[h];if("object"==typeof k&&null!==k)for(var w=0,j=Object.keys(k);w<j.length;w++){var Z=j[w];k[Z]=b(k[Z],e)}else n[h]=b(k,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=v,e.parse=h,e.stringify=function(t,e){if(!t)return"";d((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var a=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(e,t),"[",a,"]"].join("")]:[[g(e,t),"[",g(a,t),"]=",g(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(e,t),"[]"].join("")]:[[g(e,t),"[]=",g(n,t)].join("")])}};case"colon-list-separator":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(e,t),":list="].join("")]:[[g(e,t),":list=",g(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||t.skipNull&&null===a||t.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[g(r,t),e,g(a,t)].join("")]:[[n,g(a,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[g(e,t)]:[[g(e,t),"=",g(n,t)].join("")])}}}}(e),a={},i=0,u=Object.keys(t);i<u.length;i++){var s=u[i];r(s)||(a[s]=t[s])}var c=Object.keys(a);return!1!==e.sort&&c.sort(e.sort),c.map((function(r){var a=t[r];return void 0===a?"":null===a?g(r,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?g(r,e)+"[]":a.reduce(n(r),[]).join("&"):g(r,e)+"="+g(a,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=l(t,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(t),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},f,!0),r);var a=x(t.url).split("?")[0]||"",o=e.extract(t.url),i=e.parse(o,{sort:!1}),u=Object.assign(i,t.query),s=e.stringify(u,r);s&&(s="?".concat(s));var c=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(c="#".concat(r[f]?g(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(a).concat(s).concat(c)},e.pick=function(t,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var o=e.parseUrl(t,a),i=o.url,u=o.query,s=o.fragmentIdentifier;return e.stringifyUrl({url:i,query:p(u,r),fragmentIdentifier:s},a)},e.exclude=function(t,r,n){var a=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,a,n)}},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},4169:function(t,e,r){"use strict";var n=r(1008),a=r(3723),o=r(3431),i=(0,n.Z)(a.G,{target:"e1n1u3tj0"})("height:",(function(t){return t.size||"120px"}),";border-radius:50%;background-color:white;aspect-ratio:1;@media (max-width: 768px){height:",(function(t){return t.size||"80px"}),";}");e.Z=function(t){var e=t.profileImage,r=t.size;return(0,o.tZ)(i,{image:e,size:r,alt:"Profile Image"})}},2401:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return M}});var n=r(7294),a=r(2203),o=r(1008),i=r(4169),u=r(3431);var s=(0,o.Z)("div",{target:"e160b014"})({name:"w65xpz",styles:"width:100%;background-image:#fef6ff;color:black"}),c=(0,o.Z)("div",{target:"e160b013"})({name:"1srkuyu",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:300px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),l=(0,o.Z)("div",{target:"e160b012"})({name:"1bkpu5b",styles:"margin-top:30px"}),p=(0,o.Z)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),f=(0,o.Z)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),d=function(t){var e=t.profileImage;return(0,u.tZ)(s,null,(0,u.tZ)(c,null,(0,u.tZ)(i.Z,{profileImage:e}),(0,u.tZ)(l,null,(0,u.tZ)(p,null,"Nice to Meet You,"),(0,u.tZ)(f,null,"I'm Junior Frontend Developer COYO."))))};var g=r(1082),m=["active"];var y=(0,o.Z)("div",{target:"e1kn8q5k1"})({name:"1vkcbhv",styles:"background-color:#95afc0;display:flex;flex-wrap:wrap;width:768px;margin:0 auto;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),x=(0,o.Z)((function(t){t.active;var e=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,m);return(0,u.tZ)(g.rU,e)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(t){return t.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),v=function(t){var e=t.selectedCategory,r=t.categoryList;return(0,u.tZ)(y,null,Object.entries(r).map((function(t){var r=t[0],n=t[1];return(0,u.tZ)(x,{to:"/?category="+r,active:r===e,key:r},"#",r,"(",n,")")})))},b=r(7462),h=r(3723);var k=(0,o.Z)(g.rU,{target:"e1eg5kak7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),w=(0,o.Z)(h.G,{target:"e1eg5kak6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),j=(0,o.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),Z=(0,o.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),I=(0,o.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),O=(0,o.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),S=(0,o.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),A=(0,o.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),F=function(t){var e=t.title,r=t.date,n=t.categories,a=t.summary,o=t.thumbnail.childImageSharp.gatsbyImageData,i=t.link;return(0,u.tZ)(k,{to:i},(0,u.tZ)(w,{image:o,alt:"Post Item Image"}),(0,u.tZ)(j,null,(0,u.tZ)(Z,null,e),(0,u.tZ)(I,null,r),(0,u.tZ)(O,null,n.map((function(t){return(0,u.tZ)(S,{key:t},t)}))),(0,u.tZ)(A,null,a)))};var _=(0,o.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),C=function(t){var e=t.posts,r=t.selectedCategory,a=(0,n.useMemo)((function(){return e.filter((function(t){var e=t.node,n=(e.fields.slug,e.frontmatter.categories);return"All"===r||n.includes(r)}))}),[r]);return(0,u.tZ)(_,null,a.map((function(t){var e=t.node,r=e.id,n=e.frontmatter,a=e.fields.slug;return(0,u.tZ)(F,(0,b.Z)({},n,{key:r,link:a}))})))},E=r(173),M=function(t){var e=t.location.search,r=t.data,o=r.site.siteMetadata,i=o.title,s=o.description,c=o.siteUrl,l=r.allMarkdownRemark.edges,p=r.file,f=p.childImageSharp.gatsbyImageData,g=p.publicURL,m=a.parse(e),y="string"==typeof m.category&&m.category?m.category:"All",x=(0,n.useMemo)((function(){return l.reduce((function(t,e){var r=e.node;r.fields.slug;return r.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,u.tZ)(E.Z,{title:i,description:s,url:c,image:g},(0,u.tZ)(d,{profileImage:f}),(0,u.tZ)(v,{selectedCategory:y,categoryList:x}),(0,u.tZ)(C,{selectedCategory:y,posts:l}))}},3897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},5372:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3405:function(t,e,r){var n=r(3897);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8416:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8872:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,o=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);i=!0);}catch(s){u=!0,a=s}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}},t.exports.__esModule=!0,t.exports.default=t.exports},2218:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7424:function(t,e,r){var n=r(5372),a=r(8872),o=r(6116),i=r(2218);t.exports=function(t,e){return n(t)||a(t,e)||o(t,e)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var n=r(3405),a=r(9498),o=r(6116),i=r(2281);t.exports=function(t){return n(t)||a(t)||o(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},6116:function(t,e,r){var n=r(3897);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5d91f1b0b4dc61b411a0.js.map