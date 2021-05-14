(function(t){function e(e){for(var n,r,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var s=o[i];0!==c[s]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},c={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"293f":function(t,e,o){"use strict";o("dcd0")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoHeader"),o("TodoInput"),o("TodoList"),o("TodoFooter")],1)},a=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("TODO it!")]),o("span",[t._v(t._s(t.title))])])},i=[],s={data:function(){return{title:"운영 모드"}}},u=s,d=(o("72c0"),o("2877")),l=Object(d["a"])(u,r,i,!1,null,"1d4b6e9c",null),f=l.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inputBox shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],ref:"newTodoItem",attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),o("span",{staticClass:"addContainer",on:{click:t.addTodo}},[o("i",{staticClass:"fas fa-plus addBtn"})])])},p=[],h={data:function(){return{newTodoItem:""}},mounted:function(){this.$refs.newTodoItem.focus()},methods:{addTodo:function(){if(""!==this.newTodoItem){var t={item:this.newTodoItem,completed:!1};this.$store.dispatch("addTodo",t),this.clearInput()}},clearInput:function(){this.newTodoItem=""}}},T=h,v=(o("e4a1"),Object(d["a"])(T,m,p,!1,null,"8b4cbb3c",null)),g=v.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",t._l(t.getTodoItems,(function(e,n){return o("li",{key:n,staticClass:"shadow"},[o("i",{staticClass:"fas fa-check checkBtn",class:{checkBtnCompleted:e.completed},on:{click:function(o){return t.toggleTodo(e)}}}),o("span",{class:{textCompleted:e.completed}},[t._v(t._s(e.item))]),o("span",{staticClass:"removeBtn",on:{click:function(o){return t.removeTodo(e)}}},[o("i",{staticClass:"fas fa-trash-alt"})])])})),0)])},I=[],O=o("5530"),y=o("2f62"),w={mounted:function(){this.$store.dispatch("loadTodoItems")},computed:Object(O["a"])({},Object(y["c"])(["getTodoItems"])),methods:Object(O["a"])(Object(O["a"])({},Object(y["b"])(["removeTodo"])),{},{toggleTodo:function(t){t.completed=!t.completed,this.$store.dispatch("toggleTodo",t)}})},_=w,j=(o("fffa"),Object(d["a"])(_,b,I,!1,null,"4fb2c55c",null)),x=j.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearAllContainer"},[o("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v("Clear All")])])},C=[],S={methods:Object(O["a"])({},Object(y["b"])(["clearTodo"]))},$=S,P=(o("293f"),Object(d["a"])($,k,C,!1,null,"adfa30f0",null)),B=P.exports,E={components:{TodoHeader:f,TodoInput:g,TodoList:x,TodoFooter:B}},J=E,M=(o("034f"),Object(d["a"])(J,c,a,!1,null,null,null)),A=M.exports,N=(o("a434"),o("99af"),o("bc3a")),F=o.n(N),H=o("2106"),L=o.n(H);n["a"].use(y["a"]),n["a"].use(L.a,F.a);var D="http://localhost:4500/api/todos",q=new y["a"].Store({state:{todoItems:[]},getters:{getTodoItems:function(t){return t.todoItems}},mutations:{setTodoItems:function(t,e){t.todoItems=e},addTodo:function(t,e){var o={completed:!1,item:e};localStorage.setItem(o.item,JSON.stringify(o)),t.todoItems.push(o)},removeTodo:function(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},toggleTodo:function(t,e){var o=e.todoItem,n=e.index;t.todoItems[n].completed=!o.completed,localStorage.removeItem(o.item),localStorage.setItem(o.item,JSON.stringify(o))},clearTodo:function(t){localStorage.clear(),t.todoItems=[]}},actions:{loadTodoItems:function(t){F.a.get("".concat(D)).then((function(t){return t.data})).then((function(e){t.commit("setTodoItems",e)})).catch((function(t){return console.log(t)}))},removeTodo:function(t,e){F.a.delete("".concat(D,"/").concat(e.id)).then((function(t){return t.data})).then((function(e){t.commit("setTodoItems",e)})).catch((function(t){return console.log(t)}))},addTodo:function(t,e){F.a.post("".concat(D),e).then((function(t){return t.data})).then((function(e){t.commit("setTodoItems",e)})).catch((function(t){return console.log(t)}))},toggleTodo:function(t,e){F.a.put("".concat(D,"/").concat(e.id),e).then((function(t){return t.data})).then((function(e){t.commit("setTodoItems",e)})).catch((function(t){return console.log(t)}))},clearTodo:function(t){F.a.delete("".concat(D)).then((function(t){return t.data})).then((function(e){t.commit("setTodoItems",e)})).catch((function(t){return console.log(t)}))}}});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(A)},store:q}).$mount("#app")},"624e":function(t,e,o){},"72c0":function(t,e,o){"use strict";o("624e")},"85ec":function(t,e,o){},9384:function(t,e,o){},ad3b:function(t,e,o){},dcd0:function(t,e,o){},e4a1:function(t,e,o){"use strict";o("ad3b")},fffa:function(t,e,o){"use strict";o("9384")}});
//# sourceMappingURL=app.dc45b0ee.js.map