import './style.css';
import myStyle from './myStyle.module.css';

function StyleModule() {
  return (
    <div className={myStyle.wrapper}>
      <div className="box"></div>
      <div className="box"></div>
      <div className={myStyle.box}></div>
      <div className={myStyle.box}></div>

      {/* 다중 클래스 */}
      <div className="box size"></div>
      <div className={`${myStyle.bg} ${myStyle.size}`}></div>
      {/* 혼용 */}
      <div className={`size ${myStyle.bg}`}></div>

      <div className={[myStyle.size, myStyle.bg].join(' ')}></div>
      <div className={['size', myStyle.bg].join(' ')}></div>
      <div className={[myStyle.size, 'bg'].join(' ')}></div>

      {/* :global 을 붙이면 모듈에서 일반 클래스처럼 사용 가능 */}
      <div className="container"></div>
    </div>
  );
}

export default StyleModule;
/* 
  파일명.module.css
   ㄴ 유지보수, 클래스, 우선 순위.. 

  <요소 className={참조변수.클래스명}>
  <h1 className={myStyle.title}>

  리액트 스타일
   ㄴ css(scss) 컴포넌트별 분리해서 사용 추천
   ㄴ 중복 이름 문제로 module.css
*/
