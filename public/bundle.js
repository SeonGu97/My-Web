(()=>{"use strict";class e{constructor(e,s){const t=new e("motto","section","class","motto","",1,s,!1,"","");new e("sentence","span","class","sentence","빨리 가는 유일한 방법은 제대로 가는 것이다.",1,t.name,!1,"",""),new e("saying","span","class","saying","- 로버트 C.마틴 -",1,t.name,!1,"","")}}class s{constructor(e,s){new e("line","hr","class","line bd-w","",1,s,!1,"","")}}class t{constructor(e,s){const t=new e("skill","section","class","skill","",1,s,!1,"",""),a=['<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3-alt"></i>','<i class="fa-brands fa-square-js"></i>','<i class="fa-solid fa-image"></i>'],c=["HTML","CSS","Javascript","Photoshop"];for(let s=0;s<4;s++){const i=new e("skill_icon","div","class","skill-icon",a[s],1,t.name,!1,"","");new e("skill_name","div","class","skill-name",c[s],1,i.name,!1,"","")}}}class a{constructor(e,s){new e("back","div","class","back bd-w w-mod","",1,s,!1,"","")}}class c{constructor(e,s){new e("picture","img",["class","src"],["picture profile-bd-w","/Img/취업사진1.jpg"],"",1,s,!1,"","")}}class i{constructor(e,s){const t=new e("profile","section","class","profile gradient-w","",1,s,!1,"","");new c(e,t.name)}}class n{constructor(e,s){const t=new e("infor","section","class","infor light-w-bg-main","",1,s,!1,"",""),a=new e("library","ul","class","library","",1,t.name,!1,"",""),c=["이름","생년월일","주소","학력","스킬"],i=["강선구","1997.12.06","충청북도 청주시","고등학교 졸업","HTML CSS JS PhotoShop"];for(let s=0;s<5;s++){const t=new e("book","li","class","book","",1,a.name,!1,"","");new e("name","span","class","name",c[s],1,t.name,!1,"",""),new e("value","span","class","value",i[s],1,t.name,!1,"","")}}}class l{constructor(e,s){const t=new e("front","div","class","front bd-w","",1,s,!0,"transitionend",(e=>{document.querySelector(".front"),document.querySelector(".mod")}));new i(e,t.name),new n(e,t.name)}}class o{constructor(e,s){const t=new e("box_btn","button","class","box-btn active-w",'<i class="bi bi-chevron-double-left"></i>',1,s,!0,"click",(e=>{const s=document.querySelector(".front"),t=document.querySelector(".back"),a=document.querySelector(".box"),c=document.querySelector(".mod"),i=document.querySelector(".shadow-box");s.classList.toggle("open"),t.classList.toggle("open"),i.classList.toggle("gone"),e.target.classList.toggle("turn"),c.classList.contains("mod-change")?(a.classList.replace("inner-shadow","d-inner-shadow"),t.classList.replace("shadow","d-shadow")):(a.classList.replace("d-inner-shadow","inner-shadow"),t.classList.replace("d-shadow","shadow"))}));setInterval((()=>{t.name.classList.contains("turn")?(t.name.classList.add("arrow-active-2"),t.name.classList.replace("arrow-active-1","arrow-active-2")):(t.name.classList.add("arrow-active-1"),t.name.classList.replace("arrow-active-2","arrow-active-1"))}),2500),t.name.addEventListener("transitionend",(e=>{t.name.classList.contains("turn")?(t.name.classList.remove("arrow-active-2"),t.name.classList.replace("arrow-active-1","arrow-active-2")):(t.name.classList.remove("arrow-active-1"),t.name.classList.replace("arrow-active-2","arrow-active-1"))}),!1)}}class d{constructor(e,s){new e("shadow_box","div","class","shadow-box","",1,s,!1,"","")}}class r{constructor(e,s){const t=new e("box","div","class","box inner-shadow","",1,s,!1,"","");new l(e,t.name),new a(e,t.name),new o(e,t.name),new d(e,t.name)}}class m{constructor(a,c){const i=new a("container","div","class","container","",1,c,!1,"","");new e(a,i.name),new s(a,i.name),new r(a,i.name),new s(a,i.name),new t(a,i.name),new s(a,i.name)}}class h{constructor(e,s){new e("logo","div","class","logo","My Web",1,s,!1,"","")}}class w{constructor(e,s){new e("bar","div","class","bar",'<i class="bi bi-list"></i>',1,s,!0,"click",(e=>{document.querySelector("aside").classList.toggle("hide-on-bush"),document.querySelector(".exit").classList.add("show-exit")}))}}class g{constructor(e,s){new e("menu","div","class","menu","Menu",4,s,!1,"","")}}class u{constructor(e,s){const t=new e("nav","nav","","","",1,s,!1,"","");new g(e,t.name)}}class b{constructor(e,s){const t=new e("header","header","class","light-w-bg-header bd-w","",1,s,!1,"","");new h(e,t.name),new w(e,t.name),new u(e,t.name)}}class v{constructor(e,s){const t=new e("main","main","class","bd-w light-w-bg-main","",1,s,!1,"","");new b(e,t.name),new m(e,t.name),document.querySelector("nav").childNodes.forEach((e=>{e.addEventListener("click",(e=>{let s;s=null===localStorage.getItem("mod")?[]:JSON.parse(localStorage.getItem("mod"));const t=document.createElement("div");console.log(s[0]),s[0]?t.setAttribute("class","effect effect-d"):t.setAttribute("class","effect effect-w"),t.addEventListener("animationend",(e=>{e.target.remove()}));let a=e.target;const{offsetX:c,offsetY:i}=e;console.log(c,i),t.style.setProperty("--top",`${i}px`),t.style.setProperty("--left",`${c}px`),a.appendChild(t)}))}))}}class p{constructor(e,t){const a=new e("aside","aside","class","bd-w light-w-bg-aside","",1,t,!1,"","");new h(e,a.name),new s(e,a.name),new u(e,a.name)}}class L{constructor(e,s){const t="mod";let a;null===localStorage.getItem(t)?(a=[],a.push(!1)):a=JSON.parse(localStorage.getItem(t)),document.querySelector("#index");const c=document.querySelector("header"),i=document.querySelector("main"),n=document.querySelectorAll(".line"),l=document.querySelector("aside"),o=document.querySelector(".exit"),d=document.querySelectorAll("nav"),r=document.querySelector(".profile"),m=document.querySelector(".picture"),h=document.querySelectorAll(".skill-icon > .skill-name"),w=document.querySelector(".infor"),g=document.body,u=document.querySelector(".back"),b=document.querySelector(".box"),v=document.querySelector(".front"),p=document.querySelector(".box-btn"),L=['<i class="fa-solid fa-moon"></i> 다크모드로 보기','<i class="bi bi-sun-fill"></i> 라이트모드로 보기'],f=new e("mod","div","class","mod mod-bg-w-w",`${L[0]}`,1,s,!0,"click",(e=>{let s=e.target;s.classList.toggle("mod-change"),this.active(s,i,c,n,L,t,a,l,o,r,m,h,w,g,u,b,v,p),this.activeChange(d,a)}));f.name.addEventListener("mouseenter",(e=>{let s=e.target;s.classList.contains("mod-change")?s.classList.replace("mod-bg-d-d","mod-bg-d-w"):s.classList.replace("mod-bg-w-w","mod-bg-w-d")})),f.name.addEventListener("mouseleave",(e=>{let s=e.target;s.classList.contains("mod-change")?s.classList.replace("mod-bg-d-w","mod-bg-d-d"):s.classList.replace("mod-bg-w-d","mod-bg-w-w")})),this.maintain(f.name,i,c,n,L,t,a,l,o,r,m,h,w,g,u,b,v,p)}maintain(e,s,t,a,c,i,n,l,o,d,r,m,h,w,g,u,b,v){n[0]?(e.classList.add("mod-change"),e.classList.replace("mod-bg-w-w","mod-bg-d-d")):e.classList.remove("mod-change"),this.active(e,s,t,a,c,i,n,l,o,d,r,m,h,w,g,u,b,v)}active(e,s,t,a,c,i,n,l,o,d,r,m,h,w,g,u,b,v){let p=!!e.classList.contains("mod-change");if(n.push(p),n.splice(n.indexOf(n[0]),1),n[0]){w.classList.add("d-mod"),index.classList.add("d-mod"),e.classList.replace("mod-bg-w-d","mod-bg-d-w"),s.classList.replace("bd-w","bd-d"),s.classList.replace("light-w-bg-main","light-d-bg-main"),t.classList.replace("light-w-bg-header","light-d-bg-header"),t.classList.replace("bd-w","bd-d");for(let e=0;e<a.length;e++)a[e].classList.replace("bd-w","bd-d");l.classList.replace("light-w-bg-aside","light-d-bg-aside"),l.classList.replace("bd-w","bd-d"),o.classList.replace("light-w-bg-exit","light-d-bg-exit"),d.classList.replace("gradient-w","gradient-d"),r.classList.replace("profile-bd-w","profile-bd-d");for(let e=0;e<m.length;e++)m[e].classList.add("skill-d");h.classList.replace("light-w-bg-main","light-d-bg-main"),g.classList.replace("w-mod","d-mod"),u.classList.replace("inner-shadow","d-inner-shadow"),g.classList.replace("shadow","d-shadow"),g.classList.replace("bd-w","bd-d"),v.classList.replace("active-w","active-d"),e.innerHTML=e.innerHTML.replace(c[0],c[1])}else{w.classList.remove("d-mod"),index.classList.remove("d-mod"),e.classList.replace("mod-bg-d-w","mod-bg-w-d"),s.classList.replace("bd-d","bd-w"),s.classList.replace("light-d-bg-main","light-w-bg-main"),t.classList.replace("light-d-bg-header","light-w-bg-header"),t.classList.replace("bd-d","bd-w");for(let e=0;e<a.length;e++)a[e].classList.replace("bd-d","bd-w");l.classList.replace("light-d-bg-aside","light-w-bg-aside"),l.classList.replace("bd-d","bd-w"),o.classList.replace("light-d-bg-exit","light-w-bg-exit"),d.classList.replace("gradient-d","gradient-w"),r.classList.replace("profile-bd-d","profile-bd-w");for(let e=0;e<m.length;e++)m[e].classList.remove("skill-d");h.classList.replace("light-d-bg-main","light-w-bg-main"),g.classList.replace("d-mod","w-mod"),u.classList.replace("d-inner-shadow","inner-shadow"),g.classList.replace("d-shadow","shadow"),g.classList.replace("bd-d","bd-w"),v.classList.replace("active-d","active-w"),e.innerHTML=e.innerHTML.replace(c[1],c[0])}this.setStorage(i,n)}setStorage(e,s){localStorage.setItem(e,JSON.stringify(s))}activeChange(e,s){const t="index";let a;a=null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t)),e.forEach(((e,t,c)=>{s[0]?(c[0].childNodes[a].classList.replace("active-w","active-d"),c[0].childNodes[a].classList.replace("active-w-bd","active-d-bd"),c[1].childNodes[a].classList.replace("active-bg","active-bg-d"),c[1].childNodes[a].classList.remove("active-w")):(c[0].childNodes[a].classList.replace("active-d","active-w"),c[0].childNodes[a].classList.replace("active-d-bd","active-w-bd"),c[1].childNodes[a].classList.replace("active-bg-d","active-bg"),c[1].childNodes[a].classList.add("active-w"))}))}}class f{constructor(e,s){new e("exit","div","class","exit light-w-bg-exit","",1,s,!0,"click",(e=>{document.querySelector("aside").classList.remove("hide-on-bush"),e.target.classList.remove("show-exit")}))}}let y;window.addEventListener("resize",(e=>{const s=matchMedia("screen and (max-width: 1000px)").matches,t=document.querySelector("aside"),a=document.querySelector(".exit");clearTimeout(y),y=setTimeout((()=>{s||(t.classList.remove("hide-on-bush"),a.classList.remove("show-exit"))}),200)}));new class{constructor(e){const s=new e("index","div","id","index","",1,document.body,!1,"",""),t=(new v(e,s.name),new p(e,s.name),new f(e,s.name),new L(e,s.name),document.querySelectorAll("nav")),a="index";let c;null===localStorage.getItem(a)?(c=[],c.push(0)):c=JSON.parse(localStorage.getItem(a)),t.forEach(((e,s,t,i)=>{const n=document.querySelector(".mod"),l=t[0].childNodes[c[0]],o=t[1].childNodes[c[0]];e.childNodes.forEach(((e,s)=>{e.index=s})),n.classList.contains("mod-change")?(l.classList.add("active-d"),l.classList.add("active-d-bd"),o.classList.add("active-bg-d")):(l.classList.add("active-w"),l.classList.add("active-w-bd"),o.classList.add("active-w"),o.classList.add("active-bg")),e.addEventListener("click",(e=>{let s=e.target;s.classList.contains("menu")&&(c.push(s.index),c.splice(c.indexOf(c[0]),1),this.setStorage(a,c),n.classList.contains("mod-change")?(t[0].childNodes.forEach((e=>{e.classList.remove("active-d"),e.classList.remove("active-d-bd")})),t[1].childNodes.forEach((e=>{e.classList.remove("active-bg-d")})),t[0].childNodes[s.index].classList.add("active-d"),t[0].childNodes[s.index].classList.add("active-d-bd"),t[1].childNodes[s.index].classList.add("active-bg-d")):(t[0].childNodes.forEach((e=>{e.classList.remove("active-w"),e.classList.remove("active-w-bd")})),t[1].childNodes.forEach((e=>{e.classList.remove("active-w"),e.classList.remove("active-bg")})),t[0].childNodes[s.index].classList.add("active-w"),t[0].childNodes[s.index].classList.add("active-w-bd"),t[1].childNodes[s.index].classList.add("active-w"),t[1].childNodes[s.index].classList.add("active-bg")))}),!1)}))}setStorage(e,s){localStorage.setItem(e,JSON.stringify(s))}}(class{constructor(e,s,t,a,c,i,n,l,o,d){this.name=e,this.element=s,this.type=t,this.value=a,this.text=c,this.num=i,this.parent=n,this.boolean=l,this.event=o,this.func=d;for(let e=0;e<this.num;e++)this.promise_1=this.create(),this.promise_2=this.attrs(),this.promise_3=this.innerHTML(),this.promise_4=this.append(),this.promise_5=this.Event();this.promise_1.then(this.promise_2),this.promise_2.then(this.promise_3),this.promise_3.then(this.promise_4)}get num(){return this._num}set num(e){this._num=e<1?1:e}get type(){return this._type}set type(e){this._type="object"==typeof e?e:new Array(e),""==this._type?this._type.length=0:this._type}get value(){return this._value}set value(e){this._value="object"==typeof e?e:new Array(e)}get boolean(){return this._boolean}set boolean(e){this._boolean=e?this.promise_5:e}get event(){return this._event}set event(e){this._event=e||(this.boolean=!1)}get func(){return this._func}set func(e){this._func="function"==typeof e?e:e=void 0}async create(){return this.name=document.createElement(this.element)}async attrs(){for(let e=0;e<this.type.length;e++)""==this.value[e]?this.value[e]=void 0:this.value[e],this.name.setAttribute(this.type[e],this.value[e]);return this.name}async innerHTML(){return this.name.innerHTML=this.text}async append(){return this.parent.appendChild(this.name)}async Event(){return this.name.addEventListener(this.event,this.func,!1)}})})();