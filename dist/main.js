(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),a=n(645),l=n.n(a),c=n(667),d=n.n(c),i=new URL(n(159),n.b),s=l()(r());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Geologica&display=swap);"]);var p=d()(i);s.push([e.id,`*{\n    box-sizing: border-box;\n}\nbody{\n    background-color: #fffb10;\n    background-image: linear-gradient(90deg, #fffb10 0%, #b7ca5d 46%, #dece2b 100%);\n    font-family: 'Geologica', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    background: url(${p}) no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\n#content{\n    /* display: flex;\n    flex-direction: column;\n    align-items: center; */\n    \n}\n\n\n#content>button{\n    height: 100px;\n    font-size: 40px;\n    padding: 20px;\n    margin-bottom: 20px;\n}\n\nh1{\n    font-weight: bold;\n    font-size: 70px;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    font-family: sans; color: grey;\n    text-align: center;\n}\nh2{\n    font-size: 55px;\n    font-weight: normal;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    font-family: sans; color: grey;\n}\n\n.projects{\n    display: flex;\n    /* grid-template-columns: repeat(auto-fill, 100%); */\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10px;\n    width: 100%;\n    /* align-content: center; */\n    /* justify-items: center;\n    align-items: center; */\n}\n\n.project{\n    background-color: blanchedalmond;\n    border-radius: 12px;\n    padding: 10px;\n    border: 3px solid black;\n}\n\nul{\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.projectTitle{\n    font-size: 40px;\n    font-weight: bold;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    word-break: break-word;\n    /* height: 100px;\n    color: blue; */\n}\n\n.projectDes{\n    font-size: 25px;\n    overflow-wrap: break-word;\n    width: 100%;\n}\n\n.pinfo{\n    display: flex;\n    flex-direction: column;\n    /* overflow-wrap: break-word; */\n    flex-wrap: wrap;\n    width: 100%;\n    gap: 10px\n}\n\n.todo{\n    display: flex;\n    justify-content: space-between;\n    word-break: break-word;\n    flex-wrap: wrap;\n    width: 100%;\n    gap: 10px;\n    font-size: 18px;\n    border: 1px solid black;\n}\n\n.todo button{\n    justify-self: flex-end;\n    \n}\n.todo2{\n    display: flex;\n    border: 1px solid black;\n    flex-direction: column;\n    gap: 5px;\n    width: 100%;\n    align-items: flex-start;\n}\n\n.todo2 input{\n    width: 100%;\n}\n\n.todo2 label{\n    font-size: 20px;\n    font-weight: bold;\n}\n.todo2 p{\n    color:grey;\n    word-break: break-all;\n}\ntextarea{\n    max-width: 100%;\n    width: 100%;\n    height: 100px;\n}\n\nbutton{\n    border-radius: 100px;\n    background-color: antiquewhite;\n}\n`,""]);const u=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(l[d]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);o&&l[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},l=[],c=0;c<e.length;c++){var d=e[c],i=o.base?d[0]+o.base:d[0],s=a[i]||0,p="".concat(i," ").concat(s);a[i]=s+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}l.push(p)}return l}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<a.length;l++){var c=n(a[l]);t[c].references--}for(var d=o(e,r),i=0;i<a.length;i++){var s=n(a[i]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},159:(e,t,n)=>{e.exports=n.p+"9340b481adfab5642b19.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),l=n.n(a),c=n(565),d=n.n(c),i=n(216),s=n.n(i),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=()=>({title:"",description:"",dueDate:"",priority:"",notes:"",completed:!1}),x=()=>{let e;return{title:e,title:e,description:"",todos:[]}};function b(e,t,n,o){E(e),e.classList.remove("todo"),e.classList.add("todo2");let r=document.createElement("label");r.textContent="Title: ",e.appendChild(r);let a=document.createElement("input");a.type="text",a.value=t[n].todos[o].title,e.appendChild(a);let l=document.createElement("label");l.textContent="Description: ",e.appendChild(l);let c=document.createElement("textarea");c.value=t[n].todos[o].description,e.appendChild(c);let d=document.createElement("label");d.textContent="Due Date: ",e.appendChild(d);let i=document.createElement("input");i.type="text",i.value=t[n].todos[o].dueDate,e.appendChild(i);let s=document.createElement("label");s.textContent="Notes: ",e.appendChild(s);let p=document.createElement("textarea");p.value=t[n].todos[o].notes,e.appendChild(p);let u=document.createElement("label");u.textContent="Completed: ",e.appendChild(u);let m=document.createElement("input");m.type="checkbox",m.checked=t[n].todos[o].completed,e.appendChild(m);let f=document.createElement("button");f.textContent="Save",f.addEventListener("click",(()=>{t[n].todos[o].title=a.value,t[n].todos[o].description=c.value,t[n].todos[o].dueDate=i.value,t[n].todos[o].notes=p.value,t[n].todos[o].completed=m.checked,document.querySelector(".projects").remove(),localStorage.setItem("projects",JSON.stringify(t)),y(t)})),e.appendChild(f)}function v(e,t,n,o){E(e),e.classList.remove("todo"),e.classList.add("todo2");let r=document.createElement("label");r.textContent="Title: ",e.appendChild(r);let a=document.createElement("p");a.textContent=t[n].todos[o].title,e.appendChild(a);let l=document.createElement("label");l.textContent="Description: ",e.appendChild(l);let c=document.createElement("p");c.textContent=t[n].todos[o].description,e.appendChild(c);let d=document.createElement("label");d.textContent="Due Date: ",e.appendChild(d);let i=document.createElement("p");i.textContent=t[n].todos[o].dueDate,e.appendChild(i);let s=document.createElement("label");s.textContent="Notes: ",e.appendChild(s);let p=document.createElement("p");p.textContent=t[n].todos[o].notes,e.appendChild(p);let u=document.createElement("label");u.textContent="Completed: ",e.appendChild(u);let m=document.createElement("p");m.textContent=t[n].todos[o].completed,e.appendChild(m);let f=document.createElement("button");f.textContent="Close",f.addEventListener("click",(()=>{document.querySelector(".projects").remove(),y(t)})),e.appendChild(f)}function g(e,t,n){console.log("me"),E(n);let o=document.createElement("label");o.textContent="Title: ",n.appendChild(o);let r=document.createElement("input");r.type="text",r.value=e[t].title,n.appendChild(r);let a=document.createElement("label");a.textContent="Description: ",n.appendChild(a);let l=document.createElement("textarea");l.value=e[t].description,n.appendChild(l);let c=document.createElement("button");c.textContent="Save",c.addEventListener("click",(()=>{e[t].title=r.value,e[t].description=l.value,document.querySelector(".projects").remove(),localStorage.setItem("projects",JSON.stringify(e)),y(e)})),n.appendChild(c)}let C=document.querySelector("#content");function y(e){let t=document.createElement("div");t.classList.add("projects"),C.appendChild(t);for(let n=0;n<e.length;++n){let o=document.createElement("p");o.classList.add("pinfo");let r=document.createElement("div");r.classList.add("project");let a=document.createElement("div");a.classList.add("projectTitle"),a.textContent=e[n].title;let l=document.createElement("button");l.textContent="Edit Project",a.appendChild(l);let c=document.createElement("button");c.textContent="Remove Project",a.appendChild(c);let d=document.createElement("div");d.classList.add("projectDes"),d.textContent="-"+e[n].description,l.addEventListener("click",(()=>{g(e,n,o)})),c.addEventListener("click",(()=>j(e,n))),o.appendChild(a),o.appendChild(d),r.appendChild(o);let i=document.createElement("ul");for(let t=0;t<e[n].todos.length;++t){let o=document.createElement("div");o.classList.add("todo");let r=document.createElement("div");r.classList.add("todoTitle"),r.textContent=e[n].todos[t].title,o.appendChild(r);let a=document.createElement("div");a.classList.add("todoDueDate"),a.textContent="Due: "+e[n].todos[t].dueDate,o.appendChild(a);let l=document.createElement("button");l.textContent="Edit",o.appendChild(l),l.addEventListener("click",(()=>{b(o,e,n,t)}));let c=document.createElement("button");c.textContent="View",o.appendChild(c),c.addEventListener("click",(()=>{v(o,e,n,t)}));let d=document.createElement("button");d.textContent="Remove",o.appendChild(d),d.addEventListener("click",(()=>{k(0,e,n,t)})),i.appendChild(o)}r.appendChild(i);let s=document.createElement("button");s.textContent="Add Todo",r.append(s),s.addEventListener("click",(()=>{w(e,n)})),t.appendChild(r)}}function E(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function w(e,t){let n=h();n.title="New Todo",n.dueDate="NA",e[t].todos.push(n),document.querySelector(".projects").remove(),localStorage.setItem("projects",JSON.stringify(e)),y(e)}function k(e,t,n,o){t[n].todos.splice(o,1),document.querySelector(".projects").remove(),localStorage.setItem("projects",JSON.stringify(t)),y(t)}function j(e,t){e.splice(t,1),document.querySelector(".projects").remove(),localStorage.setItem("projects",JSON.stringify(e)),y(e)}let S=[];n(159),function(){let e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="ToDo List",e.appendChild(t);let n=document.createElement("h2");n.textContent="Projects",e.appendChild(n);let o=document.createElement("button");if(o.textContent="New Project",o.addEventListener("click",(()=>{!function(){let e=x();e.title="New Project",e.description="NA",S.push(e),document.querySelector(".projects").remove(),localStorage.setItem("projects",JSON.stringify(S)),y(S)}()})),e.appendChild(o),localStorage.getItem("projects"))S=JSON.parse(localStorage.projects);else{let e=x();e.description="I am a default Project!",e.title="Default";let t=h();t.title="Default Todo",t.dueDate="5/27";let n=h();n.title="Default Todo",n.dueDate="5/27",e.todos=[t,n],S=[e],localStorage.setItem("projects",JSON.stringify(S))}y(S)}()})()})();