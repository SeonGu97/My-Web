(()=>{"use strict";class e{constructor(e,s){const t=new e("motto","section","class","motto motto-bg-w","",1,s,!1,"","");new e("sentence","span","class","sentence","빨리 가는 유일한 방법은 제대로 가는 것이다.",1,t.name,!1,"",""),new e("saying","span","class","saying","- 로버트 C.마틴 -",1,t.name,!1,"","")}}class s{constructor(e,s){new e("line","hr","class","line bd-w","",1,s,!1,"","")}}class t{constructor(e,s){const t=new e("skill","section","class","skill location-3 skill-bg-w","",1,s,!1,"",""),c=['<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3-alt"></i>','<i class="fa-brands fa-square-js"></i>','<i class="fa-solid fa-image"></i>'],a=["HTML","CSS","Javascript","Photoshop"];for(let s=0;s<4;s++){const n=new e("skill_icon","div","class","skill-icon",c[s],1,t.name,!1,"","");new e("skill_name","div","class","skill-name",a[s],1,n.name,!1,"","")}}}class c{constructor(e,s){const t=new e("leaf","div","class","leaf","",1,s,!1,"",""),c=(new e("leaf_item","p","class","leaf-item","",4,t.name,!1,"",""),["안녕하세요. 프론트엔드 개발자가 되고싶은 강선구입니다.","혼자 독학으로 개발공부를 하다보니 성장도 느리고 부족한점도 너무 많지만, 그럼에도 포기하지 않고 공부를 하고있습니다.","제가 제일 좋아하는 언어는 JS입니다. <br>가장 기본이 되는 언어이고 많은 단점이 있는 언어임에도 불구하고 좋아하는 이유는 가장 근본이 되는 언어라고 생각하기 때문입니다.","이러한 기본기를 바탕으로 도움이 될 수있는 회사를 찾고있습니다."]);t.name.childNodes.forEach(((e,s)=>{e.innerHTML=c[s]}))}}class a{constructor(e,s){const t=new e("tree","div","class","tree ","",1,s,!1,"",""),c=(new e("stick","li","class","stick ","",4,t.name,!1,"",""),document.querySelectorAll(".stick")),a=["2016.02","2016.03 ~ 2018.02","2018.08 ~ 2020.04","2020.08~"],n=['<i class="fa-solid fa-school"></i>','<i class="fa-solid fa-graduation-cap"></i>','<i class="fa-solid fa-person-military-rifle"></i>','<i class="fa-solid fa-code"></i>'],l=["고등학교 졸업 - 문과","항공학교 졸업 - 학점은행제 점수 미달. 학위 미취득","군입대 - 육군병장 만기전역","프론트엔드 개발 공부중.."];c.forEach(((s,t)=>{new e("dot","span","class","dot ",'<i class="bi bi-dot"></i>',1,s,!1,"","");const c=new e("flower","div","class","flower ","",1,s,!1,"","");new e("day","div","class","day ",a[t],1,c.name,!1,"",""),new e("stick-icon","span","class","stick-icon stick-w",n[t],1,c.name,!1,"",""),new e("stick-text","span","class","stick-text",l[t],1,s,!1,"","")})),new e("vertical","div","class","vertical","",1,t.name,!1,"","")}}class n{constructor(e,s){const t=new e("back","div","class","back bd-w w-mod back-w","",1,s,!1,"","");new a(e,t.name),new c(e,t.name)}}class l{constructor(e,s){new e("picture","img",["class","src","alt"],["picture profile-bd-w","Img/취업사진1.jpg","취업사진1.jpg"],"",1,s,!1,"","")}}class i{constructor(e,s){const t=new e("profile","section","class","profile gradient-w","",1,s,!1,"","");new l(e,t.name)}}class o{constructor(e,s){const t=new e("infor","section","class","infor light-w-bg-main","",1,s,!1,"",""),c=new e("library","ul","class","library","",1,t.name,!1,"",""),a=["이름","생년월일","주소","학력","스킬"],n=["강선구","1997.12.06","충청북도 청주시","고등학교 졸업","HTML CSS JS PhotoShop"];for(let s=0;s<5;s++){const t=new e("book","li","class","book","",1,c.name,!1,"","");new e("name","span","class","name",a[s],1,t.name,!1,"",""),new e("value","span","class","value",n[s],1,t.name,!1,"","")}}}class d{constructor(e,s){const t=new e("front","div","class","front bd-w","",1,s,!0,"transitionend",(e=>{document.querySelector(".front"),document.querySelector(".mod")}));new i(e,t.name),new o(e,t.name)}}class r{constructor(e,s){new e("box_btn","button","class","box-btn active-w",'<i class="bi bi-three-dots-vertical"></i>',1,s,!0,"click",(e=>{const s=document.querySelector(".front"),t=document.querySelector(".back"),c=document.querySelector(".box"),a=document.querySelector(".mod"),n=document.querySelector(".shadow-box");s.classList.toggle("open"),t.classList.toggle("open"),n.classList.toggle("gone"),a.classList.contains("mod-change")?(c.classList.replace("inner-shadow","d-inner-shadow"),t.classList.replace("shadow","d-shadow")):(c.classList.replace("d-inner-shadow","inner-shadow"),t.classList.replace("d-shadow","shadow"))}))}}class m{constructor(e,s){new e("shadow_box","div","class","shadow-box","",1,s,!1,"","")}}class u{constructor(e,s){const t=new e("box","div","class","box location-2 inner-shadow","",1,s,!1,"","");new d(e,t.name),new n(e,t.name),new r(e,t.name),new m(e,t.name)}}class w{constructor(e,s){new e("description","pre","class","description","",1,s,!1,"","")}}class h{constructor(e,s){s.childNodes.forEach(((s,t)=>{const c=new e("cover","a","class","cover cover-w","",1,s,!1,"","");document.querySelector(".mod"),s.firstChild.setAttribute("href",["https://seongu97.github.io/study/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B82/","https://seongu97.github.io/study/%EA%B2%8C%EC%8B%9C%ED%8C%90-1/","https://seongu97.github.io/study/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94/","https://seongu97.github.io/study/%ED%92%80%ED%8E%98%EC%9D%B4%EC%A7%80/","https://seongu97.github.io/canvas/","https://seongu97.github.io/study/%EB%A1%9C%EA%B7%B8%EC%9D%B8/","https://sungu1206.github.io/web/","https://sungu1206.github.io/practice/Code/Test/Test1/"][t]),new w(e,c.name);const a=document.querySelectorAll(".description"),n=["• 제작기간 - 약 3개월.\n\n• 느낀점 - 사실 투두리스트를 만든게 처음이 아니다.\n\n그전에 투두리스트1 프로젝트가 있었고,\n\n이건 두투리스트2 프로젝트이다.\n\n투두리스트1을 거쳐가면서 부족한점과 노하우를 터특해서\n\n투두리스트2에 더 힘을 주었다. 투두리스트1을 만드는\n\n시간도 오래걸렸지만, 결과적으로 투두리스트2에 도움이\n\n많이 되었다. 오랜시간 스스로 완성해낸 뿌듯한 프로젝트\n\n중에 하나이다.\n","• 제작기간 - 약 3개월.\n\n• 느낀점 - 이 프로젝트 또한 게시판1이 있었고,\n\n게시판1을 거름 삼아 게시판2를 완성했다.\n\n이 프로젝트는 스토리지로만 만들기에는 버거웠다.\n\n사실 스토리지에 민감한 정보가 있어서는 안되지만,\n\n백엔드 언어를 하나 배워서 적용하기엔 시간이 너무\n\n오래걸리고, 자바스크립트 만으로도 배울게 너무 많아서\n\n역효과라고 생각했다. 그래서 원래는 안되지만 스토리지를\n\n사용해서 게시판을 만들어 보았다.\n\n미흡한 부분이 조금 있지만, 만들면서 많이 배우고,\n\n복습도 된 프로젝트이다.\n","• 제작기간 - 약 2개월.\n\n• 느낀점 - 코딩을 시작하면서 가장 처음 흥미를 가진\n\n프로젝트이다. 코딩을 시작하면서 제일 잘 만들고 싶었던\n\n이미지 슬라이더이다. 어느 웹페이지에나 쉽게 볼수있고,\n\n많이 사용하는 요소이기 때문에 잘 만들고 싶었다.\n\n가장 기본적이고 평범한 슬라이더도 멋지지만,\n\n다양한 종류의 슬라이더를 만들고 싶었다. \n\n만들고 싶은 슬라이더와 내가 가진 실력과는 괴리감이 \n\n있어서 모두 만들지는 못한다. 그래서 내가 만들 수 있는\n\n슬라이더를 만들어 보았다. 이 프로젝트를 만들면서\n\n상당히 재미있었던 기억이 있다.\n","• 제작기간 - 약 2주.\n\n• 느낀점 - 코딩을 하면서 만들어 보고싶었던 프로젝트 중\n\n하나이다. 많은 템플릿을 보면서 풀페이지로 만들어진\n\n웹들이 정말 많았다. 그래서 나도 한번 만들어 보았다.\n\n일단, 만들면서 가장 중요하게 느낀 부분은 마우스 이벤트\n\n이다. 이 부분에서 많은 어려움을 느꼈고, 당시 실력으로는\n\n만들수 없다고 판단했다. 그래서 fullpage.js 라는 \n\n라이브러리를 사용했다. 이 프로젝트를 내손으로 만들지\n\n못했지만, 그래도 나의 실력과 위치를 알아 볼 수 있는\n\n기회였고, 꼭! 나중에 정복 할 프로젝트이다.\n","• 제작기간 - 약 1주.\n\n• 느낀점 - 다른 프로젝트와는 다르게 canvas를 사용했다.\n\n유튜브 강의들을 찾아보던중, Interactive Developer라는\n\n채널을 알게 되었고, 영상을 보니까 정말 멋있는 분이였다.\n\n그래서 canvas라는 요소를 살짝 경험해 보았다.\n\n따라 만들어 보면서 느낀건 정말 화면에 그림을 그리는\n\n느낌이였다. 뭔가 대단한걸 만드는 기분이였고, 2D 말고도\n\n정말 엑티브한 3D 프로젝트도 만들수 있다는걸 알게\n\n되었다. 물론 그러한 실력은 안되지만 정말 재미있고\n\n신기한 경험이 되었고, 나중에 canvas도 정복해서 재밌게\n\n사용해보고싶다.\n","• 제작기간 - 2일.\n\n• 느낀점 - 홈페이지에 빠질 수 없는 로그인 페이지이다.\n\n기능은 만들지 않고, 레이아웃 밖에 없지만, 그래도 나중에\n\n추가하면 되니까 일단 만들어 보았다. 디자인은 모방을 해\n\n서만들었고, confirm으로 간단하게 로그인 기능을 만들어\n\n볼까했지만, 사실 귀찮아서 만들지 않았다. 매우 중요한\n\n부분이긴 하지만, 다른 프로젝트를 끝내고 바로 만들기에\n\n는 힘들어서 레이아웃을 만든것에 만족했다. \n","• 제작기간 - 약 1주일 미만(기억 안남).\n\n• 느낀점 - 이 프로젝트는 코딩을 처음 시작하면서\n\n생활코딩을 접하고 처음만든 정적 웹페이지다. 아직도\n\n그때의 기분이 기억이난다. 뭔가 처음으로 스스로 해낸거 \n\n같은 뿌듯함과 신남, 코딩이라는 단어도 잘 몰랐던 내가 \n\n코딩이란 거대한 세상에 첫 발을 디딘 설레임이 가득했던 \n\n기억이난다.\n","• 제작기간 - 약 2~3주(기억 안남).\n\n• 느낀점 - 내 기억으론 이게 두번째로 만든 프로젝트이다.\n\n생활코딩의 강의를 듣고 기본을 익히고, Javascript를 \n\n사용하지 않고, 아니 사실 이때는 HTML CSS를 막 익힌\n\n상태라 Javascript는 멀게 느껴졌었다. 그리고 당연\n\n두번째 프로젝트라 반응형이 뭔지도 몰랐었다.\n\n단지. 클론코딩이 실력 향상에 도움이 된다고 들어서\n\n무료 템플릿중 하나를 골라서 무작정 따라 만들었다.\n\n이 이후엔 클론코딩을 안했던 것 같다. 따라서 만드는건\n\n큰 도움이 안될 것 같아서 개성있게 만들고 싶다는 생각을\n\n했던 기억이난다.\n"];for(let e=0;e<a.length;e++)a[e].innerHTML=n[e]}))}}class b{constructor(e,s){const t=['<i class="fa-brands fa-square-js"></i>','<i class="fa-brands fa-html5"></i>'];s.childNodes.forEach(((s,c,a)=>{new e("mark","div","class","mark",t[0],1,s,!1,"","")})),document.querySelectorAll(".mark").forEach(((e,s,c)=>{c[6].innerHTML=t[1],c[7].innerHTML=t[1]}))}}class g{constructor(e,s){new e("item_img","img",["class","alt"],["item-img","프로젝트 이미지"],"",1,s,!1,"","")}}class p{constructor(e,s){new e("item_title","h1","class","item-title active-w","",1,s,!1,"","")}}class L{constructor(e,s){new e("item","div","class","item project-w","",8,s,!0,"mouseenter",(e=>{e.target.firstChild.classList.add("slide-down")}),!1),new h(e,s),new b(e,s);const t=document.querySelectorAll(".item");t.forEach((s=>{new g(e,s)}));const c=document.querySelectorAll(".item-img"),a=["Img/item1.png","Img/item2.png","Img/item3.png","Img/item4.png","Img/item5.png","Img/item6.png","Img/item7.png","Img/item8.png"];t.forEach((s=>{new p(e,s)}));const n=document.querySelectorAll(".item-title"),l=["투두리스트","게시판","이미지 슬라이더","풀페이지","공 튕기기","로그인 레이아웃","첫 HTML","첫 정적 클론코딩"];for(let e=0;e<t.length;e++)c[e].setAttribute("src",a[e]),n[e].innerHTML=l[e]}}class v{constructor(e,s){const t=new e("project","section","class","project location-4","",1,s,!1,"","");new L(e,t.name)}}class f{constructor(e,s){const t=new e("email","div","class","email","",1,s,!1,"",""),c=new e("contact_form","form","id","contact-form","",1,t.name,!1,"","");new e("contact_number","input",["type","name"],["hidden","contact_number"],"",1,c.name,!1,"",""),new e("label_1","label","","","보내는 이",1,c.name,!1,"",""),new e("user_name","input",["type","name","class","autocomplete"],["text","user_name","user-name bd-w","off"],"",1,c.name,!1,"",""),new e("label_3","label","","","메세지",1,c.name,!1,"",""),new e("message","textarea",["name","class"],["message","message bd-w"],"",1,c.name,!1,"",""),new e("submit","input",["type","value","class"],["submit","보내기","submit bd-w submit-w"],"",1,c.name,!1,"","")}}class y{constructor(e,s,t){new e("title","h1","class","title",t,1,s,!1,"","")}}class S{constructor(e,s){const t=new e("footer","footer","class","location-5 footer-w","",1,s,!1,"","");new y(e,t.name,'<i class="bi bi-dot"></i> About'),new f(e,t.name)}}class q{constructor(e,s){new e("u_side","div","class","u-side u-side-w bd-w","못쓰는 프로젝트들 😂 Click!",1,s,!0,"click",(e=>{const s=document.querySelector(".modal"),t=document.querySelector(".modal-bg");s.classList.replace("modal-h","modal-s"),t.classList.replace("modal-h","modal-s")}))}}class E{constructor(e,s){new e("f_side","div","class","f-side f-side-w bd-w",'<i class="bi bi-trash-fill"></i>',1,s,!1,"","")}}class x{constructor(e,s){const t=new e("wastebasket","section","class","wastebasket","",1,s,!1,"","");new q(e,t.name),new E(e,t.name)}}class k{constructor(e,s){new e("copyright","section","class","copyright copyright-w","©KSG Portfolio",1,s,!1,"","")}}class A{constructor(c,a){const n=new c("container","div","class","container location-1","",1,a,!1,"","");new e(c,n.name),new s(c,n.name),new u(c,n.name),new s(c,n.name),new t(c,n.name),new s(c,n.name),new y(c,n.name,'<i class="bi bi-dot"></i> Project'),new v(c,n.name),new x(c,n.name),new S(c,n.name),new s(c,n.name),new k(c,n.name)}}class _{constructor(e,s){new e("logo","div","class","logo","My Web",1,s,!1,"","")}}class N{constructor(e,s){new e("bar","div","class","bar",'<i class="bi bi-list"></i>',1,s,!0,"click",(e=>{document.querySelector("aside").classList.toggle("hide-on-bush"),document.querySelector(".exit").classList.add("show-exit")}))}}class C{constructor(e,s){new e("menu","div","class","menu","",5,s,!0,"click",(e=>{let s=e.target.index+1;document.querySelector(`.location-${s}`).scrollIntoView({behavior:"smooth"})}));const t=document.querySelectorAll(".menu"),c=["Home","Intro","Skills","Project","About"];for(let e=0;e<t.length-10;e++)t[e].innerHTML=c[e]}}class I{constructor(e,s){const t=new e("nav","nav","","","",1,s,!1,"","");new C(e,t.name)}}class H{constructor(e,s){const t=new e("sign","div","class","sign","",1,s,!1,"",""),c=(new C(e,t.name),["Home","Intro","Skills","Project","About"]);t.name.childNodes.forEach(((e,s)=>{const t=document.createElement("span");e.appendChild(t),e.firstChild.innerText=c[s]}));const a=document.querySelectorAll("nav")[0],n=document.querySelectorAll(".sign > .menu > span");a.childNodes.forEach((e=>{e.addEventListener("mouseover",(e=>{const s=e.target.index;n[s].style.transition=".2s",n[s].style.transitionDelay=".4s",n[s].style.opacity="1"}),!1),e.addEventListener("mouseleave",(e=>{const s=e.target.index;n[s].style.transitionDelay="0s",n[s].style.opacity="0"}),!1)}))}}class T{constructor(e,s){const t=new e("header","header","class","light-w-bg-header bd-w","",1,s,!1,"","");new _(e,t.name),new N(e,t.name),new I(e,t.name),new H(e,t.name)}}class j{constructor(e,s){const t=new e("main","main","class","bd-w light-w-bg-main","",1,s,!0,"mouseover",(e=>{e.target.classList.contains("cover")||document.querySelectorAll(".cover").forEach((e=>{e.classList.remove("slide-down")}))}),!1);new T(e,t.name),new A(e,t.name),document.querySelector("nav").childNodes.forEach((e=>{e.addEventListener("click",(e=>{let s;s=null===localStorage.getItem("mod")?[]:JSON.parse(localStorage.getItem("mod"));const t=document.createElement("div");s[0]?t.setAttribute("class","effect effect-d"):t.setAttribute("class","effect effect-w"),t.addEventListener("animationend",(e=>{e.target.remove()}));let c=e.target;const{offsetX:a,offsetY:n}=e;t.style.setProperty("--top",`${n}px`),t.style.setProperty("--left",`${a}px`),c.appendChild(t)}))}))}}class M{constructor(e,t){const c=new e("aside","aside","class","bd-w light-w-bg-aside","",1,t,!1,"",""),a=(new _(e,c.name),new s(e,c.name),new I(e,c.name),document.querySelectorAll("nav")),n=["Home","Intro","Skills","Project","About"];for(let e=0;e<a[1].childNodes.length;e++)a[1].childNodes[e].innerHTML=n[e]}}class B{constructor(e,s){const t="mod";let c;null===localStorage.getItem(t)?(c=[],c.push(!1)):c=JSON.parse(localStorage.getItem(t)),document.querySelector("#index");const a=document.querySelector("header"),n=document.querySelector("main"),l=document.querySelectorAll(".line"),i=document.querySelector("aside"),o=document.querySelector(".exit"),d=document.querySelectorAll("nav"),r=document.querySelector(".motto"),m=document.querySelector(".profile"),u=document.querySelector(".picture"),w=document.querySelector(".skill"),h=document.querySelectorAll(".skill-icon > .skill-name"),b=document.querySelector(".infor"),g=document.body,p=document.querySelector(".back"),L=document.querySelector(".box"),v=document.querySelector(".front"),f=document.querySelector(".box-btn"),y=document.querySelectorAll(".item"),S=document.querySelectorAll(".cover"),q=document.querySelector("footer"),E=document.querySelectorAll("label"),x=document.querySelector(".user-name"),k=document.querySelector("textarea"),A=document.querySelector(".submit"),_=document.querySelectorAll(".item-title"),N=document.querySelector(".up"),C=document.querySelector(".modal"),I=document.querySelector(".modal-exit-btn > i"),H=document.querySelectorAll(".modal-project"),T=document.querySelector(".f-side"),j=document.querySelector(".u-side"),M=document.querySelector(".copyright"),B=document.querySelector(".vertical"),D=document.querySelectorAll(".stick-icon"),J=['<i class="fa-solid fa-moon"></i> 다크모드로 보기','<i class="bi bi-sun-fill"></i> 라이트모드로 보기'],O=new e("mod","div","class","mod mod-bg-w-w bd-w",`${J[0]}`,1,s,!0,"click",(e=>{let s=e.target;s.classList.toggle("mod-change"),this.active(s,n,a,l,J,t,c,i,o,m,u,h,b,g,p,L,v,f,y,S,q,E,x,k,A,_,N,C,I,H,T,j,w,r,M,B,D),this.activeChange(d,c)}));O.name.addEventListener("mouseenter",(e=>{let s=e.target;s.classList.contains("mod-change")?s.classList.replace("mod-bg-d-d","mod-bg-d-w"):s.classList.replace("mod-bg-w-w","mod-bg-w-d")})),O.name.addEventListener("mouseleave",(e=>{let s=e.target;s.classList.contains("mod-change")?s.classList.replace("mod-bg-d-w","mod-bg-d-d"):s.classList.replace("mod-bg-w-d","mod-bg-w-w")})),this.maintain(O.name,n,a,l,J,t,c,i,o,m,u,h,b,g,p,L,v,f,y,S,q,E,x,k,A,_,N,C,I,H,T,j,w,r,M,B,D)}maintain(e,s,t,c,a,n,l,i,o,d,r,m,u,w,h,b,g,p,L,v,f,y,S,q,E,x,k,A,_,N,C,I,H,T,j,M,B){l[0]?(e.classList.add("mod-change"),e.classList.replace("mod-bg-w-w","mod-bg-d-d")):e.classList.remove("mod-change"),this.active(e,s,t,c,a,n,l,i,o,d,r,m,u,w,h,b,g,p,L,v,f,y,S,q,E,x,k,A,_,N,C,I,H,T,j,M,B)}active(e,s,t,c,a,n,l,i,o,d,r,m,u,w,h,b,g,p,L,v,f,y,S,q,E,x,k,A,_,N,C,I,H,T,j,M,B){let D=!!e.classList.contains("mod-change");if(l.push(D),l.splice(l.indexOf(l[0]),1),l[0]){w.classList.add("d-mod"),index.classList.add("d-mod"),e.classList.replace("mod-bg-w-d","mod-bg-d-w"),e.classList.replace("bd-w","bd-d"),s.classList.replace("bd-w","bd-d"),s.classList.replace("light-w-bg-main","light-d-bg-main"),t.classList.replace("light-w-bg-header","light-d-bg-header"),t.classList.replace("bd-w","bd-d");for(let e=0;e<c.length;e++)c[e].classList.replace("bd-w","bd-d");i.classList.replace("light-w-bg-aside","light-d-bg-aside"),i.classList.replace("bd-w","bd-d"),o.classList.replace("light-w-bg-exit","light-d-bg-exit"),d.classList.replace("gradient-w","gradient-d"),r.classList.replace("profile-bd-w","profile-bd-d");for(let e=0;e<m.length;e++)m[e].classList.add("skill-d");u.classList.replace("light-w-bg-main","light-d-bg-main"),h.classList.replace("w-mod","d-mod"),h.classList.replace("back-w","back-d"),b.classList.replace("inner-shadow","d-inner-shadow"),h.classList.replace("shadow","d-shadow"),h.classList.replace("bd-w","bd-d"),p.classList.replace("active-w","active-d"),L.forEach((e=>{e.classList.replace("project-w","project-d")})),v.forEach((e=>{e.classList.replace("cover-w","cover-d")})),f.classList.replace("footer-w","footer-d"),f.classList.replace("bd-w","bd-d"),y.forEach((e=>{e.classList.add("label-d")})),S.classList.add("user-name-d"),S.classList.replace("bd-w","bd-d"),q.classList.add("message-d"),q.classList.replace("bd-w","bd-d"),E.classList.replace("bd-w","bd-d"),E.classList.replace("submit-w","submit-d"),x.forEach((e=>{e.classList.replace("active-w","active-d")})),k.classList.replace("mod-bg-w-w","mod-bg-d-d"),k.classList.replace("bd-w","bd-d"),A.classList.replace("modal-w","modal-d"),A.classList.replace("bd-w","bd-d"),_.classList.add("modal-exit-btn-d"),N.forEach((e=>{e.classList.replace("bd-w","bd-d")})),C.classList.replace("f-side-w","f-side-d"),I.classList.replace("u-side-w","u-side-d"),C.classList.replace("bd-w","bd-d"),I.classList.replace("bd-w","bd-d"),H.classList.replace("skill-bg-w","skill-bg-d"),T.classList.replace("motto-bg-w","motto-bg-d"),j.classList.replace("copyright-w","copyright-d"),M.classList.add("vertical-d"),B.forEach((e=>{e.classList.replace("stick-w","stick-d")})),e.innerHTML=e.innerHTML.replace(a[0],a[1])}else{w.classList.remove("d-mod"),index.classList.remove("d-mod"),e.classList.replace("mod-bg-d-w","mod-bg-w-d"),e.classList.replace("bd-d","bd-w"),s.classList.replace("bd-d","bd-w"),s.classList.replace("light-d-bg-main","light-w-bg-main"),t.classList.replace("light-d-bg-header","light-w-bg-header"),t.classList.replace("bd-d","bd-w");for(let e=0;e<c.length;e++)c[e].classList.replace("bd-d","bd-w");i.classList.replace("light-d-bg-aside","light-w-bg-aside"),i.classList.replace("bd-d","bd-w"),o.classList.replace("light-d-bg-exit","light-w-bg-exit"),d.classList.replace("gradient-d","gradient-w"),r.classList.replace("profile-bd-d","profile-bd-w");for(let e=0;e<m.length;e++)m[e].classList.remove("skill-d");u.classList.replace("light-d-bg-main","light-w-bg-main"),h.classList.replace("d-mod","w-mod"),h.classList.replace("back-d","back-w"),b.classList.replace("d-inner-shadow","inner-shadow"),h.classList.replace("d-shadow","shadow"),h.classList.replace("bd-d","bd-w"),p.classList.replace("active-d","active-w"),L.forEach((e=>{e.classList.replace("project-d","project-w")})),v.forEach((e=>{e.classList.replace("cover-d","cover-w")})),f.classList.replace("footer-d","footer-w"),f.classList.replace("bd-d","bd-w"),y.forEach((e=>{e.classList.remove("label-d")})),S.classList.remove("user-name-d"),S.classList.replace("bd-d","bd-w"),q.classList.remove("message-d"),q.classList.replace("bd-d","bd-w"),E.classList.replace("bd-d","bd-w"),E.classList.replace("submit-d","submit-w"),x.forEach((e=>{e.classList.replace("active-d","active-w")})),k.classList.replace("mod-bg-d-d","mod-bg-w-w"),k.classList.replace("bd-d","bd-w"),A.classList.replace("modal-d","modal-w"),A.classList.replace("bd-d","bd-w"),_.classList.remove("modal-exit-btn-d"),N.forEach((e=>{e.classList.replace("bd-d","bd-w")})),C.classList.replace("f-side-d","f-side-w"),I.classList.replace("u-side-d","u-side-w"),C.classList.replace("bd-d","bd-w"),I.classList.replace("bd-d","bd-w"),H.classList.replace("skill-bg-d","skill-bg-w"),T.classList.replace("motto-bg-d","motto-bg-w"),j.classList.replace("copyright-d","copyright-w"),M.classList.remove("vertical-d"),B.forEach((e=>{e.classList.replace("stick-d","stick-w")})),e.innerHTML=e.innerHTML.replace(a[1],a[0])}this.setStorage(n,l)}setStorage(e,s){localStorage.setItem(e,JSON.stringify(s))}activeChange(e,s){const t="index";let c;c=null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t)),e.forEach(((e,t,a)=>{s[0]?(a[0].childNodes[c].classList.replace("active-w","active-d"),a[0].childNodes[c].classList.replace("active-w-bd","active-d-bd"),a[1].childNodes[c].classList.replace("active-bg","active-bg-d"),a[1].childNodes[c].classList.remove("active-w")):(a[0].childNodes[c].classList.replace("active-d","active-w"),a[0].childNodes[c].classList.replace("active-d-bd","active-w-bd"),a[1].childNodes[c].classList.replace("active-bg-d","active-bg"),a[1].childNodes[c].classList.add("active-w"),a[1].childNodes[c].classList.remove("active-d"))}))}}class D{constructor(e,s){new e("exit","div","class","exit light-w-bg-exit","",1,s,!0,"click",(e=>{document.querySelector("aside").classList.remove("hide-on-bush"),e.target.classList.remove("show-exit")}))}}let J;window.addEventListener("resize",(e=>{const s=matchMedia("screen and (max-width: 1000px)").matches,t=document.querySelector("aside"),c=document.querySelector(".exit");clearTimeout(J),J=setTimeout((()=>{s||(t.classList.remove("hide-on-bush"),c.classList.remove("show-exit"))}),200)}));class O{constructor(e,s){new e("up","button","class","up mod-bg-w-w bd-w",'<i class="bi bi-arrow-bar-up"></i>',1,s,!0,"click",(e=>{window.scrollTo("0px","0px")}),!1)}}class P{constructor(e,s){new e("modal_project","a","class","modal-project bd-w","",8,s,!1,"","");const t=document.querySelectorAll(".modal-project"),c=['<i class="fa-brands fa-vuejs"></i>','<i class="fa-brands fa-square-js"></i>','<i class="fa-brands fa-square-js"></i>','<i class="fa-brands fa-square-js"></i>','<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-css3-alt"></i>','<i class="fa-brands fa-square-js"></i>','<i class="fa-brands fa-html5"></i>'],a=["Vue3 포트폴리오","투두리트스1","이미지 슬라이더1","이미지 슬라이더2","드롭다운","반응형 헤더","메뉴바","레이아웃"],n=["#00c853","#ffd600","#ffd600","#ffd600","#dd2c00","#0091ea","#ffd600","#dd2c00"],l=["https://seongu97.github.io/","https://seongu97.github.io/study/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B81/","https://sungu1206.github.io/practice/Code/Img%20Slider/Img%20Sleder(x-axis)/","https://sungu1206.github.io/practice/Code/Img%20Slider/Img%20Sleder/","https://sungu1206.github.io/practice/Code/Nav/Drop%20Down/","https://sungu1206.github.io/practice/Code/Nav/Nav%20Bar(Responsive)/","https://sungu1206.github.io/practice/Code/Nav/TransformMenuBar/","https://sungu1206.github.io/practice/Code/Test/Test2/"];t.forEach(((s,t)=>{new e("modal_mark","span","class","modal-mark",c[t],1,s,!1,"",""),new e("modal_title","h1","class","modal-title",a[t],1,s,!1,"",""),s.firstChild.style.color=n[t],s.setAttribute("href",l[t])}))}}class Y{constructor(e,s){const t=new e("modal_container","div","class","modal-container","",1,s,!1,"","");new P(e,t.name)}}class ${constructor(e,s){new e("modal_exit_btn","button","class","modal-exit-btn",'<i class="bi bi-x-lg"></i>',1,s,!0,"click",(e=>{const s=document.querySelector(".modal-bg"),t=document.querySelector(".modal");s.classList.replace("modal-s","modal-h"),t.classList.replace("modal-s","modal-h")}))}}class V{constructor(e,s){const t=new e("modal","div","class","modal modal-h modal-w bd-w","",1,s,!1,"","");new $(e,t.name),new Y(e,t.name)}}class z{constructor(e,s){new e("modal_bg","div","class","modal-bg modal-h","",1,s,!0,"click",(e=>{const s=e.target,t=document.querySelector(".modal");s.classList.replace("modal-s","modal-h"),t.classList.replace("modal-s","modal-h")}))}}window.addEventListener("scroll",(e=>{document.querySelector("header").clientHeight;const s=document.querySelector(".motto").clientHeight,t=s+document.querySelector(".box").clientHeight,c=t+document.querySelector(".skill").clientHeight;document.querySelector(".project").clientHeight,document.querySelector("footer").clientHeight;let a=0;window.scrollY>=s&&a++,window.scrollY>=t&&a++,window.scrollY>=c&&a++,window.scrollY==document.body.scrollHeight-window.innerHeight&&a++;const n="index";let l;l=null===localStorage.getItem(n)?[]:JSON.parse(localStorage.getItem(n)),l.push(a),l.splice(l.indexOf(l[0]),1),document.querySelectorAll("nav").forEach(((e,s,t)=>{t[0],t[1],document.querySelector(".mod").classList.contains("mod-change")?(t[0].childNodes.forEach(((e,s,t)=>{e.classList.remove("active-d"),e.classList.remove("active-d-bd"),t[a].classList.add("active-d"),t[a].classList.add("active-d-bd")})),t[1].childNodes.forEach(((e,s,t)=>{e.classList.remove("active-d"),e.classList.remove("active-bg-d"),t[a].classList.add("active-d"),t[a].classList.add("active-bg-d")}))):(t[0].childNodes.forEach(((e,s,t)=>{e.classList.remove("active-w"),e.classList.remove("active-w-bd"),t[a].classList.add("active-w"),t[a].classList.add("active-w-bd")})),t[1].childNodes.forEach(((e,s,t)=>{e.classList.remove("active-w"),e.classList.remove("active-bg"),t[a].classList.add("active-w"),t[a].classList.add("active-bg")}))),localStorage.setItem(n,JSON.stringify(l))}))}),!1);new class{constructor(e){const s=new e("index","div","id","index","",1,document.body,!1,"",""),t=(new j(e,s.name),new M(e,s.name),new D(e,s.name),new O(e,s.name),new z(e,s.name),new V(e,s.name),new B(e,s.name),document.querySelectorAll("nav")),c="index";let a;null===localStorage.getItem(c)?(a=[],a.push(0)):(a=JSON.parse(localStorage.getItem(c)),a.splice(a.indexOf(a[0]),1),a.push(0)),window.scrollTo("0px","0px"),t.forEach(((e,s,t,n)=>{const l=document.querySelector(".mod"),i=t[0].firstChild,o=t[1].firstChild;e.childNodes.forEach(((e,s)=>{e.index=s})),l.classList.contains("mod-change")?(i.classList.add("active-d"),i.classList.add("active-d-bd"),o.classList.add("active-bg-d")):(i.classList.add("active-w"),i.classList.add("active-w-bd"),o.classList.add("active-w"),o.classList.add("active-bg")),e.addEventListener("click",(e=>{setTimeout((()=>{let s=e.target;s.classList.contains("menu")&&(a.push(s.index),a.splice(a.indexOf(a[0]),1),this.setStorage(c,a),l.classList.contains("mod-change")?(t[0].childNodes.forEach((e=>{e.classList.remove("active-d"),e.classList.remove("active-d-bd")})),t[1].childNodes.forEach((e=>{e.classList.remove("active-d"),e.classList.remove("active-bg-d")})),t[0].childNodes[s.index].classList.add("active-d"),t[0].childNodes[s.index].classList.add("active-d-bd"),t[1].childNodes[s.index].classList.add("active-d"),t[1].childNodes[s.index].classList.add("active-bg-d")):(t[0].childNodes.forEach((e=>{e.classList.remove("active-w"),e.classList.remove("active-w-bd")})),t[1].childNodes.forEach((e=>{e.classList.remove("active-w"),e.classList.remove("active-bg")})),t[0].childNodes[s.index].classList.add("active-w"),t[0].childNodes[s.index].classList.add("active-w-bd"),t[1].childNodes[s.index].classList.add("active-w"),t[1].childNodes[s.index].classList.add("active-bg")))}),100)}),!1),this.setStorage(c,a)}))}setStorage(e,s){localStorage.setItem(e,JSON.stringify(s))}}(class{constructor(e,s,t,c,a,n,l,i,o,d){this.name=e,this.element=s,this.type=t,this.value=c,this.text=a,this.num=n,this.parent=l,this.boolean=i,this.event=o,this.func=d;for(let e=0;e<this.num;e++)this.promise_1=this.create(),this.promise_2=this.attrs(),this.promise_3=this.innerHTML(),this.promise_4=this.append(),this.promise_5=this.Event();this.promise_1.then(this.promise_2),this.promise_2.then(this.promise_3),this.promise_3.then(this.promise_4)}get num(){return this._num}set num(e){this._num=e<1?1:e}get type(){return this._type}set type(e){this._type="object"==typeof e?e:new Array(e),""==this._type?this._type.length=0:this._type}get value(){return this._value}set value(e){this._value="object"==typeof e?e:new Array(e)}get boolean(){return this._boolean}set boolean(e){this._boolean=e?this.promise_5:e}get event(){return this._event}set event(e){this._event=e||(this.boolean=!1)}get func(){return this._func}set func(e){this._func="function"==typeof e?e:e=void 0}async create(){return this.name=document.createElement(this.element)}async attrs(){for(let e=0;e<this.type.length;e++)""==this.value[e]?this.value[e]=void 0:this.value[e],this.name.setAttribute(this.type[e],this.value[e]);return this.name}async innerHTML(){return this.name.innerHTML=this.text}async append(){return this.parent.appendChild(this.name)}async Event(){return this.name.addEventListener(this.event,this.func,!1)}})})();