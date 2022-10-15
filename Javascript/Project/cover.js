'use strict';

import Description from "./description.js";

export default class Cover {
    constructor(creator, project) {
        project.childNodes.forEach((element, index) => {
            const cover = new creator('cover', 'a', 'class', 'cover cover-w', '', 1, element, false, '', '');
            
            const mod = document.querySelector('.mod');

            const href = [
                'https://seongu97.github.io/study/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B82/',
                'https://seongu97.github.io/study/%EA%B2%8C%EC%8B%9C%ED%8C%90-1/',
                'https://seongu97.github.io/study/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94/',
                'https://seongu97.github.io/study/%ED%92%80%ED%8E%98%EC%9D%B4%EC%A7%80/',
                'https://seongu97.github.io/canvas/',
                'https://seongu97.github.io/study/%EB%A1%9C%EA%B7%B8%EC%9D%B8/'
            ];

            element.firstChild.setAttribute('href', href[index]);

            const description = new Description(creator, cover.name);

            const _description = document.querySelectorAll('.description');
            const array = [
`• 제작기간 - 약 3개월.

• 느낀점 - 사실 투두리스트를 만든게 처음이 아니다.

그전에 투두리스트1 프로젝트가 있었고,

이건 두투리스트2 프로젝트이다.

투두리스트1을 거쳐가면서 부족한점과 노하우를 터특해서

투두리스트2에 더 힘을 주었다. 투두리스트1을 만드는

시간도 오래걸렸지만, 결과적으로 투두리스트2에 도움이

많이 되었다. 오랜시간 스스로 완성해낸 뿌듯한 프로젝트

중에 하나이다.
`,

`• 제작기간 - 약 3개월.

• 느낀점 - 이 프로젝트 또한 게시판1이 있었고,

게시판1을 거름 삼아 게시판2를 완성했다.

이 프로젝트는 스토리지로만 만들기에는 버거웠다.

사실 스토리지에 민감한 정보가 있어서는 안되지만,

백엔드 언어를 하나 배워서 적용하기엔 시간이 너무

오래걸리고, 자바스크립트 만으로도 배울게 너무 많아서

역효과라고 생각했다. 그래서 원래는 안되지만 스토리지를

사용해서 게시판을 만들어 보았다.

미흡한 부분이 조금 있지만, 만들면서 많이 배우고,

복습도 된 프로젝트이다.
`,

`• 제작기간 - 약 2개월.

• 느낀점 - 코딩을 시작하면서 가장 처음 흥미를 가진

프로젝트이다. 코딩을 시작하면서 제일 잘 만들고 싶었던

이미지 슬라이더이다. 어느 웹페이지에나 쉽게 볼수있고,

많이 사용하는 요소이기 때문에 잘 만들고 싶었다.

가장 기본적이고 평범한 슬라이더도 멋지지만,

다양한 종류의 슬라이더를 만들고 싶었다. 

만들고 싶은 슬라이더와 내가 가진 실려과는 괴리감이 

있어서 모두 만들지는 못한다. 그래서 내가 만들 수 있는

슬라이더를 만들어 보았다. 이 프로젝트를 만들면서

상당히 재미있었던 기억이 있다.
`,

`• 제작기간 - 약 2주.

• 느낀점 - 코딩을 하면서 만들어 보고싶었던 프로젝트 중

하나이다. 많은 템플릿을 보면서 풀페이지로 만들어진

웹들이 정말 많았다. 그래서 나도 한번 만들어 보았다.

일단, 만들면서 가장 중요하게 느낀 부분은 마우스 이벤트

이다. 이 부분에서 많은 어려움을 느꼈고, 당시 실력으로는

만들수 없다고 판단했다. 그래서 fullpage.js 라는 

라이브러리를 사용했다. 이 프로젝트를 내손으로 만들지

못했지만, 그래도 나의 실력과 위치를 알아 볼 수 있는

기회였고, 꼭! 나중에 정복 할 프로젝트이다.
`,

`• 제작기간 - 약 1주.

• 느낀점 - 다른 프로젝트와는 다르게 canvas를 사용했다.

유튜브 강의들을 찾아보던중, Interactive Developer라는

채널을 알게 되었고, 영상을 보니까 정말 멋있는 분이였다.

그래서 canvas라는 요소를 살짝 경험해 보았다.

따라 만들어 보면서 느낀건 정말 화면에 그림을 그리는

느낌이였다. 뭔가 대단한걸 만드는 기분이였고, 2D 말고도

정말 엑티브한 3D 프로젝트도 만들수 있다는걸 알게

되었다. 물론 그러한 실력은 안되지만 정말 재미있고

신기한 경험이 되었고, 나중에 canvas도 정복해서 재밌게

사용해보고싶다.
`,

`• 제작기간 - 2일.

• 느낀점 - 홈페이지에 빠질 수 없는 로그인 페이지이다.

기능은 만들지 않고, 레이아웃 밖에 없지만, 그래도 나중에

추가하면 되니까 일단 만들어 보았다. 디자인은 모방을 해

서만들었고, confirm으로 간단하게 로그인 기능을 만들어

볼까했지만, 사실 귀찮아서 만들지 않았다. 매우 중요한

부분이긴 하지만, 다른 프로젝트를 끝내고 바로 만들기에

는 힘들어서 레이아웃을 만든것에 만족했다. 
`
            ];
            for(let i = 0; i < _description.length; i++) {
                _description[i].innerHTML = array[i];
            }
        })
    }
}