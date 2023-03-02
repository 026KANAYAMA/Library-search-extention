(function(){"use strict";var t={6586:function(t,n,e){var r=e(3396);function i(t,n,e,i,o,a){const s=(0,r.up)("InputForm");return(0,r.wg)(),(0,r.j4)(s)}var o=e(9242);const a=(0,r._)("h1",{class:"text-2xl text-gray-600"},"SIST 図書館検索拡張機能",-1),s={class:"bg-blue-200 p-4 pb-10 pt-23"},u=(0,r._)("p",{class:"p-2 mt-12 mb-14 font-sans text-2xl text-gray-500 text-center font-bold"},[(0,r.Uk)("Amazonで本を購入する前に"),(0,r._)("br"),(0,r.Uk)("大学の図書館にその本があるかどうかを確認できます")],-1),c={class:"text-center"},l={key:0},d=(0,r._)("br",null,null,-1),p={key:0},f={key:1,class:"text-gray-600 text-center"},b=(0,r.uE)('<hr class="border-t-2 border-red-500"><h2 class="text-3xl text-red-400 font-bold mt-4">エラー</h2><div class="pt-2"><p class="pb-2">※入力されたURLはKindle版の可能性があります</p><p class="mb-3">※紙版のURLを入力してください</p></div><img src="https://i.gyazo.com/c13353fcbacce087b7dd3a42985d19c0.png" alt="補足画像" class="mx-auto">',4),g=[b];function x(t,n,e,i,b,x){return(0,r.wg)(),(0,r.iD)("div",null,[a,(0,r._)("div",s,[u,(0,r._)("div",c,[(0,r.wy)((0,r._)("input",{placeholder:"確認したい本のAmazon URLをここに貼り付けてください",type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>b.urlFieldText=t),ref:"input",class:"w-full font-medium placeholder-gray-400 bg-gray-100 text-gray-600 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-4 py-1",style:{"max-width":"1000px"}},null,512),[[o.nr,b.urlFieldText]]),b.kindle?((0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("button",{onClick:n[1]||(n[1]=(...t)=>x.clearText&&x.clearText(...t)),class:"mt-2 bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"},"入力をクリア")])):(0,r.kq)("",!0)]),d,""!=b.isbn?((0,r.wg)(),(0,r.iD)("div",p,[(0,r._)("button",{onClick:n[2]||(n[2]=(...t)=>x.searchUrl&&x.searchUrl(...t)),class:"bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"},"検索")])):(0,r.kq)("",!0),b.kindle?((0,r.wg)(),(0,r.iD)("div",f,g)):(0,r.kq)("",!0)])])}var v=e(6541),h={name:"InputForm",data(){return{urlFieldText:"",isbn:"",kindle:!1}},methods:{searchUrl(){window.open("https://sistlb.sist.ac.jp/opac/search?isbn="+this.isbn)},clearText(){this.urlFieldText="",this.$refs.input.focus()}},watch:{urlFieldText:function(t){let n=t,e=(0,v.convertUrl2Isbn13)(n);this.isbn=""!=e.error?"":e.isbn,this.kindle="KINDLE"==e.error}},created:function(){document.addEventListener("visibilitychange",this.clearText)},mounted(){this.$refs.input.focus()}},m=e(89);const y=(0,m.Z)(h,[["render",x]]);var k=y,w={name:"App",components:{InputForm:k}};const _=(0,m.Z)(w,[["render",i]]);var T=_;(0,o.ri)(T).mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,o){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[u])}))?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,o,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(u)var l=u(e)}for(n&&n(r);c<a.length;c++)o=a[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(l)},r=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(6586)}));r=e.O(r)})();
//# sourceMappingURL=app.1a8ad673.js.map