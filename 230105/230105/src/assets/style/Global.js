import { createGlobalStyle } from 'styled-components';

// npm i styled-reset, yarn add styled-reset 설치 필요 ${reset}
// import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
/* 외부 서체 링크 */
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@800&display=swap');


body {
font-family: 'Nanum Myeongjo', '바탕체', serif;
font-size: 18px;
line-height: 1.6;
}
`;

export default GlobalStyle;
