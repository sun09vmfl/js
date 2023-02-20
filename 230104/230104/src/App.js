import StyledAnimation from './Components/StyledAnimation';
import { reset, Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import EX1Styled from './Components/EX1Styled';
import StyleModule from './Components/StyleModule';
import Ex2State from './Components/Ex2State';
import Ex3props from './Components/Ex3props';
import UseRef from './Components/UseRef';
import Ex3Com from './Components/Ex3Com';
import UseRef2 from './Components/UseRef2';
import Ex4Ref from './Components/Ex4Ref';
import UseRef3 from './Components/UseRef3';
import UseRef4 from './Components/UseRef4';
import UseRef5 from './Components/UseRef5';
//모든 컴포넌트에 적용 createGlobalStyle
const GlobalStyle = createGlobalStyle`
 ${reset};
  
  body {
    font-family: '돋움', sans-serif;
  }

  body * {
      box-sizing: border-box;
  }

`;
function App() {
  return (
    <>
      {/* <h1>App.js</h1> */}
      {/* <Reset /> */}
      <GlobalStyle />
      {/* <StyledAnimation /> */}
      {/* <EX1Styled /> */}
      {/* <StyleModule /> */}
      {/* <Ex2State /> */}
      {/* <Ex3props /> */}
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      {/* <Ex4Ref /> */}
      {/* <UseRef3 /> */}
      {/* <UseRef4 /> */}
      <UseRef5 />
    </>
  );
}

export default App;
