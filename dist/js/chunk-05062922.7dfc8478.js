(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05062922"],{"082e":function(t,e,r){},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),c=r("17c2"),i=r("9112");for(var o in a){var s=n[o],u=s&&s.prototype;if(u&&u.forEach!==c)try{i(u,"forEach",c)}catch(l){u.forEach=c}}},"16fe":function(t,e,r){},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),c=a("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1cc2":function(t,e,r){},4649:function(t,e,r){"use strict";r("76d8")},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var n=r("ade3");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"580d":function(t,e,r){"use strict";r("082e")},"76d8":function(t,e,r){},"8ac6":function(t,e,r){"use strict";r("c896")},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),c=r("e8b5"),i=r("861d"),o=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),b=r("2d00"),g=d("isConcatSpreadable"),p=9007199254740991,y="Maximum allowed index exceeded",h=b>=51||!a((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),m=f("concat"),v=function(t){if(!i(t))return!1;var e=t[g];return void 0!==e?!!e:c(t)},C=!h||!m;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,r,n,a,c,i=o(this),f=l(i,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?i:arguments[e],v(c)){if(a=s(c.length),d+a>p)throw TypeError(y);for(r=0;r<a;r++,d++)r in c&&u(f,d,c[r])}else{if(d>=p)throw TypeError(y);u(f,d++,c)}return f.length=d,f}})},ab0f:function(t,e,r){"use strict";r("1cc2")},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),c=r("df75"),i=r("d039"),o=i((function(){c(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return c(a(t))}})},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"category"}},[r("nav-bar",{staticClass:"category-nav",scopedSlots:t._u([{key:"center",fn:function(){return[t._v("商品分类")]},proxy:!0}])}),r("div",{staticClass:"content"},[r("tab-menu",{staticClass:"tab-menu",attrs:{categories:t.categories},on:{selectItem:t.selectItem}}),r("scroll",{attrs:{id:"tab-content",data:[t.categoryData]}},[r("div",[r("tab-content-category",{attrs:{subcategories:t.showSubcategory}}),r("tab-control",{attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),r("tab-content-detail",{attrs:{"category-detail":t.showCategoryDetail}})],1)])],1)],1)},a=[],c=r("5530"),i=r("1bab");function o(){return Object(i["a"])({url:"/category"})}function s(t){return Object(i["a"])({url:"/subcategory",params:{maitKey:t}})}function u(t,e){return Object(i["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var l=r("a7ac"),f=r("5d17"),d=r("c020"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll",{attrs:{id:"tab-menu"}},[r("div",{staticClass:"menu-list"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"menu-list-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])},g=[],p={name:"TabMenu",components:{Scroll:f["a"]},props:{categories:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("selectItem",t)}}},y=p,h=(r("c378"),r("2877")),m=Object(h["a"])(y,b,g,!1,null,"76651dcc",null),v=m.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.subcategories.list?r("grid-view",{attrs:{cols:3,lineSpace:15,"v-margin":20}},t._l(t.subcategories.list,(function(e,n){return r("div",{key:n,staticClass:"item"},[r("a",{attrs:{href:e.link}},[r("img",{staticClass:"item-img",attrs:{src:e.image,alt:""}}),r("div",{staticClass:"item-text"},[t._v(t._s(e.title))])])])})),0):t._e()],1)},w=[],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"gridView",staticClass:"grid-view"},[t._t("default")],2)},x=[],D=(r("a9e3"),r("99af"),{name:"GridView",props:{cols:{type:Number,default:2},hMargin:{type:Number,default:8},vMargin:{type:Number,default:8},itemSpace:{type:Number,default:8},lineSpace:{type:Number,default:4}},mounted:function(){setTimeout(this._autoLayout,20)},updated:function(){this._autoLayout()},methods:{_autoLayout:function(){var t=this.$refs.gridView,e=t.children;t.style.padding="".concat(this.vMargin,"px ").concat(this.hMargin,"px");for(var r=(t.clientWidth-2*this.hMargin-this.cols*this.itemSpace)/this.cols,n=0;n<e.length;n++){var a=e[n];a.style.width=r+"px",(n+1)%this.cols!==0&&(a.style.marginRight=this.itemSpace+"px"),n>=this.cols&&(a.style.marginTop=this.lineSpace+"px")}}}}),_=D,j=(r("4649"),Object(h["a"])(_,O,x,!1,null,"039b352c",null)),k=j.exports,I={name:"TabContentCategory",components:{GridView:k},props:{subcategories:{type:Object,default:function(){return{}}}}},S=I,E=(r("8ac6"),Object(h["a"])(S,C,w,!1,null,"3d57b12d",null)),T=E.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("grid-view",t._l(t.categoryDetail,(function(t){return r("goods-list-item",{key:t.id,attrs:{goodsItem:t}})})),1)},$=[],M=r("cf65"),N={name:"TabContentDetail",components:{GridView:k,GoodsListItem:M["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}},V=N,A=Object(h["a"])(V,P,$,!1,null,"010a01a4",null),G=A.exports,L={name:"Category",components:{NavBar:l["a"],TabMenu:v,Scroll:f["a"],TabContentCategory:T,TabControl:d["a"],TabContentDetail:G},data:function(){return{categories:[],categoryData:[],currentIndex:-1,currentType:"pop"}},created:function(){this.getCategory()},computed:{showSubcategory:function(){return-1===this.currentIndex?{}:this.categoryData[this.currentIndex].subcategories},showCategoryDetail:function(){return-1===this.currentIndex?[]:this.categoryData[this.currentIndex].categoryDetail[this.currentType]}},methods:{getCategory:function(){var t=this;o().then((function(e){t.categories=e.data.category.list;for(var r=0;r<t.categories.length;r++)t.categoryData[r]={subcategories:{},categoryDetail:{pop:[],new:[],sell:[]}};t.getSubcategories(0)}))},getSubcategories:function(t){var e=this;this.currentIndex=t;var r=this.categories[t].maitKey;s(r).then((function(t){e.categoryData[e.currentIndex].subcategories=t.data,e.categoryData=Object(c["a"])({},e.categoryData),e.getCategoryDetail("pop"),e.getCategoryDetail("new"),e.getCategoryDetail("sell")}))},getCategoryDetail:function(t){var e=this,r=this.categories[this.currentIndex].miniWallkey;u(r,t).then((function(r){e.categoryData[e.currentIndex].categoryDetail[t]=r,e.categoryData=Object(c["a"])({},e.categoryData)}))},tabClick:function(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}},selectItem:function(t){this.getSubcategories(t)}}},W=L,J=(r("ab0f"),Object(h["a"])(W,n,a,!1,null,"2c642bc0",null));e["default"]=J.exports},c020:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{key:n,staticClass:"tab-control-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},a=[],c={name:"tabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},i=c,o=(r("580d"),r("2877")),s=Object(o["a"])(i,n,a,!1,null,"7ae03f42",null);e["a"]=s.exports},c378:function(t,e,r){"use strict";r("16fe")},c896:function(t,e,r){},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),c=r("56ef"),i=r("fc6a"),o=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),a=o.f,u=c(n),l={},f=0;while(u.length>f)r=a(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),c=r("fc6a"),i=r("06cf").f,o=r("83ab"),s=a((function(){i(1)})),u=!o||s;n({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})}}]);
//# sourceMappingURL=chunk-05062922.7dfc8478.js.map