(()=>{"use strict";class e{constructor(e,s){const t=new e("motto","section","class","motto","",1,s,!1,"","");new e("sentence","span","class","sentence","빨리 가는 유일한 방법은 제대로 가는 것이다.",1,t.name,!1,"",""),new e("saying","span","class","saying","- 로버트 C.마틴 -",1,t.name,!1,"","")}}class s{constructor(e,s){new e("line","hr","class","line bd-w","",1,s,!1,"","")}}class t{constructor(e,s){const t=new e("skill","section","class","skill location-3","",1,s,!1,"",""),a=['<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3-alt"></i>','<i class="fa-brands fa-square-js"></i>','<i class="fa-solid fa-image"></i>'],c=["HTML","CSS","Javascript","Photoshop"];for(let s=0;s<4;s++){const i=new e("skill_icon","div","class","skill-icon",a[s],1,t.name,!1,"","");new e("skill_name","div","class","skill-name",c[s],1,i.name,!1,"","")}}}class a{constructor(e,s){new e("back","div","class","back bd-w w-mod back-w","",1,s,!1,"","")}}class c{constructor(e,s){new e("picture","img",["class","src","alt"],["picture profile-bd-w","Img/취업사진1.jpg","취업사진1.jpg"],"",1,s,!1,"","")}}class i{constructor(e,s){const t=new e("profile","section","class","profile gradient-w","",1,s,!1,"","");new c(e,t.name)}}class l{constructor(e,s){const t=new e("infor","section","class","infor light-w-bg-main","",1,s,!1,"",""),a=new e("library","ul","class","library","",1,t.name,!1,"",""),c=["이름","생년월일","주소","학력","스킬"],i=["강선구","1997.12.06","충청북도 청주시","고등학교 졸업","HTML CSS JS PhotoShop"];for(let s=0;s<5;s++){const t=new e("book","li","class","book","",1,a.name,!1,"","");new e("name","span","class","name",c[s],1,t.name,!1,"",""),new e("value","span","class","value",i[s],1,t.name,!1,"","")}}}class n{constructor(e,s){const t=new e("front","div","class","front bd-w","",1,s,!0,"transitionend",(e=>{document.querySelector(".front"),document.querySelector(".mod")}));new i(e,t.name),new l(e,t.name)}}class o{constructor(e,s){new e("box_btn","button","class","box-btn active-w",'<i class="bi bi-three-dots-vertical"></i>',1,s,!0,"click",(e=>{const s=document.querySelector(".front"),t=document.querySelector(".back"),a=document.querySelector(".box"),c=document.querySelector(".mod"),i=document.querySelector(".shadow-box");s.classList.toggle("open"),t.classList.toggle("open"),i.classList.toggle("gone"),c.classList.contains("mod-change")?(a.classList.replace("inner-shadow","d-inner-shadow"),t.classList.replace("shadow","d-shadow")):(a.classList.replace("d-inner-shadow","inner-shadow"),t.classList.replace("d-shadow","shadow"))}))}}class d{constructor(e,s){new e("shadow_box","div","class","shadow-box","",1,s,!1,"","")}}class r{constructor(e,s){const t=new e("box","div","class","box location-2 inner-shadow","",1,s,!1,"","");new n(e,t.name),new a(e,t.name),new o(e,t.name),new d(e,t.name)}}class m{constructor(e,s){s.childNodes.forEach((s=>{new e("cover","div","class","cover slide-up cover-w","",1,s,!1,"",""),document.querySelector(".mod"),s.addEventListener("mouseenter",(e=>{e.target.children[0].classList.replace("slide-up","slide-down")}),!1),s.addEventListener("mouseleave",(e=>{e.target.children[0].classList.replace("slide-down","slide-up")}),!1)}))}}class h{constructor(e,s){const t=['<i class="fa-brands fa-square-js"></i>'];s.childNodes.forEach((s=>{new e("mark","div","class","mark",t[0],1,s,!1,"","")}))}}class u{constructor(e,s){new e("item_img","img","class","item-img","",1,s,!1,"","")}}class w{constructor(e,s){new e("item","a","class","item project-w","",6,s,!1,"",""),new m(e,s),new h(e,s);const t=document.querySelectorAll(".item");t.forEach((s=>{new u(e,s)}));const a=["https://seongu97.github.io/study/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B82/index.html","https://seongu97.github.io/study/%EA%B2%8C%EC%8B%9C%ED%8C%90-1/index.html","https://seongu97.github.io/study/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94/index.html"],c=document.querySelectorAll(".item-img"),i=["/Img/item1.png","/Img/item2.png","/Img/item3.png","","",""];for(let e=0;e<t.length;e++)t[e].setAttribute("href",a[e]),c[e].setAttribute("src",i[e])}}class b{constructor(e,s){const t=new e("project","section","class","project location-4","",1,s,!1,"","");new w(e,t.name)}}class g{constructor(e,s){const t=new e("email","div","class","email","",1,s,!1,"",""),a=new e("contact_form","form","id","contact-form","",1,t.name,!1,"","");new e("contact_number","input",["type","name"],["hidden","contact_number"],"",1,a.name,!1,"",""),new e("label_1","label","","","보내는 이",1,a.name,!1,"",""),new e("user_name","input",["type","name","class","autocomplete"],["text","user_name","user-name bd-w","off"],"",1,a.name,!1,"",""),new e("label_3","label","","","메세지",1,a.name,!1,"",""),new e("message","textarea",["name","class"],["message","message bd-w"],"",1,a.name,!1,"",""),new e("submit","input",["type","value","class"],["submit","보내기","submit bd-w submit-w"],"",1,a.name,!1,"","")}}class p{constructor(e,s,t){new e("title","h1","class","title",t,1,s,!1,"","")}}class L{constructor(e,s){const t=new e("footer","footer","class","location-5 footer-w bd-w","",1,s,!1,"","");new p(e,t.name,'<i class="bi bi-dot"></i> About'),new g(e,t.name)}}class v{constructor(a,c){const i=new a("container","div","class","container location-1","",1,c,!1,"","");new e(a,i.name),new s(a,i.name),new r(a,i.name),new s(a,i.name),new t(a,i.name),new s(a,i.name),new p(a,i.name,'<i class="bi bi-dot"></i> Project'),new b(a,i.name),new L(a,i.name)}}class f{constructor(e,s){new e("logo","div","class","logo","My Web",1,s,!1,"","")}}class y{constructor(e,s){new e("bar","div","class","bar",'<i class="bi bi-list"></i>',1,s,!0,"click",(e=>{document.querySelector("aside").classList.toggle("hide-on-bush"),document.querySelector(".exit").classList.add("show-exit")}))}}class S{constructor(e,s){new e("menu","div","class","menu","",5,s,!0,"click",(e=>{let s=e.target.index+1;document.querySelector(`.location-${s}`).scrollIntoView({behavior:"smooth"})}));const t=document.querySelectorAll(".menu"),a=["Home","Intro","Skills","Project","About"];for(let e=0;e<t.length;e++)t[e].innerHTML=a[e]}}class x{constructor(e,s){const t=new e("nav","nav","","","",1,s,!1,"","");new S(e,t.name)}}class q{constructor(e,s){const t=new e("header","header","class","light-w-bg-header bd-w","",1,s,!1,"","");new f(e,t.name),new y(e,t.name),new x(e,t.name)}}class E{constructor(e,s){const t=new e("main","main","class","bd-w light-w-bg-main","",1,s,!1,"","");new q(e,t.name),new v(e,t.name),document.querySelector("nav").childNodes.forEach((e=>{e.addEventListener("click",(e=>{let s;s=null===localStorage.getItem("mod")?[]:JSON.parse(localStorage.getItem("mod"));const t=document.createElement("div");s[0]?t.setAttribute("class","effect effect-d"):t.setAttribute("class","effect effect-w"),t.addEventListener("animationend",(e=>{e.target.remove()}));let a=e.target;const{offsetX:c,offsetY:i}=e;t.style.setProperty("--top",`${i}px`),t.style.setProperty("--left",`${c}px`),a.appendChild(t)}))}))}}class _{constructor(e,t){const a=new e("aside","aside","class","bd-w light-w-bg-aside","",1,t,!1,"",""),c=(new f(e,a.name),new s(e,a.name),new x(e,a.name),document.querySelectorAll("nav")),i=["Home","Intro","Skills","Project","About"];for(let e=0;e<c[1].childNodes.length;e++)c[1].childNodes[e].innerHTML=i[e]}}class N{constructor(e,s){const t="mod";let a;null===localStorage.getItem(t)?(a=[],a.push(!1)):a=JSON.parse(localStorage.getItem(t)),document.querySelector("#index");const c=document.querySelector("header"),i=document.querySelector("main"),l=document.querySelectorAll(".line"),n=document.querySelector("aside"),o=document.querySelector(".exit"),d=document.querySelectorAll("nav"),r=document.querySelector(".profile"),m=document.querySelector(".picture"),h=document.querySelectorAll(".skill-icon > .skill-name"),u=document.querySelector(".infor"),w=document.body,b=document.querySelector(".back"),g=document.querySelector(".box"),p=document.querySelector(".front"),L=document.querySelector(".box-btn"),v=document.querySelectorAll(".item"),f=document.querySelectorAll(".cover"),y=document.querySelector("footer"),S=document.querySelectorAll("label"),x=document.querySelector(".user-name"),q=document.querySelector("textarea"),E=document.querySelector(".submit"),_=['<i class="fa-solid fa-moon"></i> 다크모드로 보기','<i class="bi bi-sun-fill"></i> 라이트모드로 보기'],N=new e("mod","div","class","mod mod-bg-w-w",`${_[0]}`,1,s,!0,"click",(e=>{let s=e.target;s.classList.toggle("mod-change"),this.active(s,i,c,l,_,t,a,n,o,r,m,h,u,w,b,g,p,L,v,f,y,S,x,q,E),this.activeChange(d,a)}));N.name.addEventListener("mouseenter",(e=>{let s=e.target;s.classList.contains("mod-change")?s.classList.replace("mod-bg-d-d","mod-bg-d-w"):s.classList.replace("mod-bg-w-w","mod-bg-w-d")})),N.name.addEventListener("mouseleave",(e=>{let s=e.target;s.classList.contains("mod-change")?s.classList.replace("mod-bg-d-w","mod-bg-d-d"):s.classList.replace("mod-bg-w-d","mod-bg-w-w")})),this.maintain(N.name,i,c,l,_,t,a,n,o,r,m,h,u,w,b,g,p,L,v,f,y,S,x,q,E)}maintain(e,s,t,a,c,i,l,n,o,d,r,m,h,u,w,b,g,p,L,v,f,y,S,x,q){l[0]?(e.classList.add("mod-change"),e.classList.replace("mod-bg-w-w","mod-bg-d-d")):e.classList.remove("mod-change"),this.active(e,s,t,a,c,i,l,n,o,d,r,m,h,u,w,b,g,p,L,v,f,y,S,x,q)}active(e,s,t,a,c,i,l,n,o,d,r,m,h,u,w,b,g,p,L,v,f,y,S,x,q){let E=!!e.classList.contains("mod-change");if(l.push(E),l.splice(l.indexOf(l[0]),1),l[0]){u.classList.add("d-mod"),index.classList.add("d-mod"),e.classList.replace("mod-bg-w-d","mod-bg-d-w"),s.classList.replace("bd-w","bd-d"),s.classList.replace("light-w-bg-main","light-d-bg-main"),t.classList.replace("light-w-bg-header","light-d-bg-header"),t.classList.replace("bd-w","bd-d");for(let e=0;e<a.length;e++)a[e].classList.replace("bd-w","bd-d");n.classList.replace("light-w-bg-aside","light-d-bg-aside"),n.classList.replace("bd-w","bd-d"),o.classList.replace("light-w-bg-exit","light-d-bg-exit"),d.classList.replace("gradient-w","gradient-d"),r.classList.replace("profile-bd-w","profile-bd-d");for(let e=0;e<m.length;e++)m[e].classList.add("skill-d");h.classList.replace("light-w-bg-main","light-d-bg-main"),w.classList.replace("w-mod","d-mod"),w.classList.replace("back-w","back-d"),b.classList.replace("inner-shadow","d-inner-shadow"),w.classList.replace("shadow","d-shadow"),w.classList.replace("bd-w","bd-d"),p.classList.replace("active-w","active-d"),L.forEach((e=>{e.classList.replace("project-w","project-d")})),v.forEach((e=>{e.classList.replace("cover-w","cover-d")})),f.classList.replace("footer-w","footer-d"),f.classList.replace("bd-w","bd-d"),y.forEach((e=>{e.classList.add("label-d")})),S.classList.add("user-name-d"),S.classList.replace("bd-w","bd-d"),x.classList.add("message-d"),x.classList.replace("bd-w","bd-d"),q.classList.replace("bd-w","bd-d"),q.classList.replace("submit-w","submit-d"),e.innerHTML=e.innerHTML.replace(c[0],c[1])}else{u.classList.remove("d-mod"),index.classList.remove("d-mod"),e.classList.replace("mod-bg-d-w","mod-bg-w-d"),s.classList.replace("bd-d","bd-w"),s.classList.replace("light-d-bg-main","light-w-bg-main"),t.classList.replace("light-d-bg-header","light-w-bg-header"),t.classList.replace("bd-d","bd-w");for(let e=0;e<a.length;e++)a[e].classList.replace("bd-d","bd-w");n.classList.replace("light-d-bg-aside","light-w-bg-aside"),n.classList.replace("bd-d","bd-w"),o.classList.replace("light-d-bg-exit","light-w-bg-exit"),d.classList.replace("gradient-d","gradient-w"),r.classList.replace("profile-bd-d","profile-bd-w");for(let e=0;e<m.length;e++)m[e].classList.remove("skill-d");h.classList.replace("light-d-bg-main","light-w-bg-main"),w.classList.replace("d-mod","w-mod"),w.classList.replace("back-d","back-w"),b.classList.replace("d-inner-shadow","inner-shadow"),w.classList.replace("d-shadow","shadow"),w.classList.replace("bd-d","bd-w"),p.classList.replace("active-d","active-w"),L.forEach((e=>{e.classList.replace("project-d","project-w")})),v.forEach((e=>{e.classList.replace("cover-d","cover-w")})),f.classList.replace("footer-d","footer-w"),f.classList.replace("bd-d","bd-w"),y.forEach((e=>{e.classList.remove("label-d")})),S.classList.remove("user-name-d"),S.classList.replace("bd-d","bd-w"),x.classList.remove("message-d"),x.classList.replace("bd-d","bd-w"),q.classList.replace("bd-d","bd-w"),q.classList.replace("submit-d","submit-w"),e.innerHTML=e.innerHTML.replace(c[1],c[0])}this.setStorage(i,l)}setStorage(e,s){localStorage.setItem(e,JSON.stringify(s))}activeChange(e,s){const t="index";let a;a=null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t)),e.forEach(((e,t,c)=>{s[0]?(c[0].childNodes[a].classList.replace("active-w","active-d"),c[0].childNodes[a].classList.replace("active-w-bd","active-d-bd"),c[1].childNodes[a].classList.replace("active-bg","active-bg-d"),c[1].childNodes[a].classList.remove("active-w")):(c[0].childNodes[a].classList.replace("active-d","active-w"),c[0].childNodes[a].classList.replace("active-d-bd","active-w-bd"),c[1].childNodes[a].classList.replace("active-bg-d","active-bg"),c[1].childNodes[a].classList.add("active-w"))}))}}class k{constructor(e,s){new e("exit","div","class","exit light-w-bg-exit","",1,s,!0,"click",(e=>{document.querySelector("aside").classList.remove("hide-on-bush"),e.target.classList.remove("show-exit")}))}}let A;window.addEventListener("resize",(e=>{const s=matchMedia("screen and (max-width: 1000px)").matches,t=document.querySelector("aside"),a=document.querySelector(".exit");clearTimeout(A),A=setTimeout((()=>{s||(t.classList.remove("hide-on-bush"),a.classList.remove("show-exit"))}),200)}));new class{constructor(e){const s=new e("index","div","id","index","",1,document.body,!1,"",""),t=(new E(e,s.name),new _(e,s.name),new k(e,s.name),new N(e,s.name),document.querySelectorAll("nav")),a="index";let c;null===localStorage.getItem(a)?(c=[],c.push(0)):c=JSON.parse(localStorage.getItem(a)),t.forEach(((e,s,t,i)=>{const l=document.querySelector(".mod"),n=t[0].childNodes[c[0]],o=t[1].childNodes[c[0]];e.childNodes.forEach(((e,s)=>{e.index=s})),l.classList.contains("mod-change")?(n.classList.add("active-d"),n.classList.add("active-d-bd"),o.classList.add("active-bg-d")):(n.classList.add("active-w"),n.classList.add("active-w-bd"),o.classList.add("active-w"),o.classList.add("active-bg")),e.addEventListener("click",(e=>{let s=e.target;s.classList.contains("menu")&&(c.push(s.index),c.splice(c.indexOf(c[0]),1),this.setStorage(a,c),l.classList.contains("mod-change")?(t[0].childNodes.forEach((e=>{e.classList.remove("active-d"),e.classList.remove("active-d-bd")})),t[1].childNodes.forEach((e=>{e.classList.remove("active-bg-d")})),t[0].childNodes[s.index].classList.add("active-d"),t[0].childNodes[s.index].classList.add("active-d-bd"),t[1].childNodes[s.index].classList.add("active-bg-d")):(t[0].childNodes.forEach((e=>{e.classList.remove("active-w"),e.classList.remove("active-w-bd")})),t[1].childNodes.forEach((e=>{e.classList.remove("active-w"),e.classList.remove("active-bg")})),t[0].childNodes[s.index].classList.add("active-w"),t[0].childNodes[s.index].classList.add("active-w-bd"),t[1].childNodes[s.index].classList.add("active-w"),t[1].childNodes[s.index].classList.add("active-bg")))}),!1)}))}setStorage(e,s){localStorage.setItem(e,JSON.stringify(s))}}(class{constructor(e,s,t,a,c,i,l,n,o,d){this.name=e,this.element=s,this.type=t,this.value=a,this.text=c,this.num=i,this.parent=l,this.boolean=n,this.event=o,this.func=d;for(let e=0;e<this.num;e++)this.promise_1=this.create(),this.promise_2=this.attrs(),this.promise_3=this.innerHTML(),this.promise_4=this.append(),this.promise_5=this.Event();this.promise_1.then(this.promise_2),this.promise_2.then(this.promise_3),this.promise_3.then(this.promise_4)}get num(){return this._num}set num(e){this._num=e<1?1:e}get type(){return this._type}set type(e){this._type="object"==typeof e?e:new Array(e),""==this._type?this._type.length=0:this._type}get value(){return this._value}set value(e){this._value="object"==typeof e?e:new Array(e)}get boolean(){return this._boolean}set boolean(e){this._boolean=e?this.promise_5:e}get event(){return this._event}set event(e){this._event=e||(this.boolean=!1)}get func(){return this._func}set func(e){this._func="function"==typeof e?e:e=void 0}async create(){return this.name=document.createElement(this.element)}async attrs(){for(let e=0;e<this.type.length;e++)""==this.value[e]?this.value[e]=void 0:this.value[e],this.name.setAttribute(this.type[e],this.value[e]);return this.name}async innerHTML(){return this.name.innerHTML=this.text}async append(){return this.parent.appendChild(this.name)}async Event(){return this.name.addEventListener(this.event,this.func,!1)}})})();