"use strict";
let str = document.querySelector('#title');
// // DOM 속성 --> 값 체크 선 작업 
//   if(str instanceof HTMLElement){
//     str.innerHTML = 'welcome2'
//   }
// let str = document.querySelector('#title') as HTMLElement;
// str.innerHTML = 'welcome2';
// if(str?.innerHTML != undefined){
//   str.innerHTML = 'welcome2'
// }
// option changing 연산자
// 1. Narrowing 필요 -> null, instanceof HTMLElement
// 2. as option change
// 3. "strict":false,(tsconfig.json)
// a -> href 속성
let link = document.querySelector('a');
// if(link instanceof HTMLElement){link.href = 'http://www.daum.net'}
if (link instanceof HTMLAnchorElement) {
    link.href = 'http://www.daum.net';
}
// typescript -> 낮은버전 X 요즘버젼은 그냥 Element 써도 가능. 근데 싫어함
// a   -> HTMLAnchorElement
// img -> HTMLImageElement
// hn  -> HTMLHeadingElement 
// react -> game(가위바위보,주사위..), 검색사이트(SPA), 쇼핑몰(SPA), NEXT: react앞당겨서..해야 가능
