(()=>{"use strict";class e{constructor(e,t,s,i,n,a,h,c,r,o){this.name=e,this.element=t,this.type=s,this.value=i,this.text=n,this.num=a,this.parent=h,this.boolean=c,this.event=r,this.func=o;for(let e=0;e<this.num;e++)this.promise_1=this.create(),this.promise_2=this.attrs(),this.promise_3=this.innerHTML(),this.promise_4=this.append(),this.promise_5=this.Event();this.promise_1.then(this.promise_2),this.promise_2.then(this.promise_3),this.promise_3.then(this.promise_4)}get num(){return this._num}set num(e){this._num=e<1?1:e}get type(){return this._type}set type(e){this._type="object"==typeof e?e:new Array(e),""==this._type?this._type.length=0:this._type}get value(){return this._value}set value(e){this._value="object"==typeof e?e:new Array(e)}get boolean(){return this._boolean}set boolean(e){this._boolean=e?this.promise_5:e}get event(){return this._event}set event(e){this._event=e||(this.boolean=!1)}get func(){return this._func}set func(e){this._func="function"==typeof e?e:e=void 0}async create(){return this.name=document.createElement(this.element)}async attrs(){for(let e=0;e<this.type.length;e++)""==this.value[e]?this.value[e]=void 0:this.value[e],this.name.setAttribute(this.type[e],this.value[e]);return this.name}async innerHTML(){return this.name.innerHTML=this.text}async append(){return this.parent.appendChild(this.name)}async Event(){return this.name.addEventListener(this.event,this.func,!1)}}class t{constructor(e,t){this.logo=new e("logo","div",["class"],["logo"],"My Web",1,t,!1,"","")}}class s{constructor(e,t){this.bar=new e("bar","div",["class"],["bar"],'<i class="bi bi-list"></i>',1,t,!0,"click",(e=>{this.aside=document.querySelector("aside"),this.aside.classList.toggle("show"),"show"==this.aside.classList[1]&&(this.close=document.querySelector(".close"),this.close.classList.add("open"))}))}}class i{constructor(e,t){this.menu=new e("menu","div",["class"],["menu"],"Menu",4,t,!0,"click",(t=>{this.nav=document.querySelectorAll("nav"),this.menus=document.querySelectorAll(".menu"),this.target=t.target;for(let e=0;e<this.menus.length;e++)this.menus[e].classList.remove("active"),this.menus[e].index=e;this.target.index>=this.nav[0].childNodes.length&&(this.target.index-=this.nav[0].childNodes.length),this.nav.forEach((e=>{e.childNodes[this.target.index].classList.add("active")})),this.effect=new e("effect","span",["class"],["effect"],"",1,this.target,!0,"animationend",(e=>{e.target.remove()}));const{clientX:s,clientY:i}=t,{top:n,left:a}=this.target.getBoundingClientRect();this.effect.name.style.setProperty("--top",i-n+"px"),this.effect.name.style.setProperty("--left",s-a+"px")}))}}class n{constructor(e,t){this.nav=new e("nav","nav",["class"],["bd-b"],"",1,t,!1,"",""),this.menu=new i(e,this.nav.name)}}class a{constructor(e,i){this.header=new e("header","header",["class"],["bd-b"],"",1,i,!1,"",""),this.logo=new t(e,this.header.name),this.bar=new s(e,this.header.name),this.nav=new n(e,this.header.name)}}class h{constructor(e,t){this.main=new e("main","main",["class"],["bd-l bd-r"],"",1,t,!1,"",""),this.header=new a(e,this.main.name)}}class c{constructor(e,s){this.aside=new e("aside","aside",["class"],["bd-r"],"",1,s,!1,"",""),this.logo=new t(e,this.aside.name),this.nav=new n(e,this.aside.name)}}class r{constructor(e,t){this.container=new e("container","section",["class"],["container"],"",1,t,!1,"",""),this.main=new h(e,this.container.name),this.aside=new c(e,this.container.name),this.nav=document.querySelectorAll("nav"),this.nav.forEach((e=>{e.firstChild.classList.add("active")}))}}class o{constructor(e,t){this.close=new e("close","div",["class"],["close"],"",1,t,!0,"click",(()=>{this.close.name.classList.remove("open"),this.aside=document.querySelector("aside"),this.aside.classList.remove("show")}))}}window.addEventListener("resize",(()=>{const e=document.querySelector("aside"),t=document.querySelector(".close");let s;const i=matchMedia("screen and (min-width: 1000px)").matches;clearTimeout(s),s=setTimeout((()=>{i&&(t.classList.remove("open"),e.classList.remove("show"))}),300)}),!1);class l{constructor(e,t){this.icons=['<i class="bi bi-moon-stars"></i>','<i class="bi bi-moon-stars-fill"></i>'],this.dark_mod=new e("dark_mod","div",["class"],["dark-mod"],`${this.icons[1]}`,1,t,!0,"click",(e=>{this.target=e.currentTarget,this.target.classList.toggle("mod-change")}))}}new class{constructor(){this.index=new e("index","div",["id"],["index"],"",1,document.body,!0,"click",(e=>{})),this.container=new r(e,this.index.name),this.close=new o(e,this.index.name),this.dark_mod=new l(e,this.index.name)}}})();