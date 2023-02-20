import './MainYoutube.scss';

function MainYoutube(props) {
  return (
    <article className="mainYoutube">
      <div className="mainYoutubeInner">
        <h2>our youtube</h2>
        <p>
          지나고 별 어머님, 한 별 까닭이요, 버리었습니다. 잔디가 하나에 피어나듯이 무성할 있습니다. 어머니, 위에 이름과, 어머님, 무덤 별 겨울이 새겨지는 계집애들의 있습니다. 시와
          벌써 어머니, 그리고 별 시인의 오는 봅니다. 자랑처럼 아직 무엇인지 피어나듯이 북간도에 하나의 노루, 라이너 있습니다.
        </p>
        <div className="YoutubeBox">
          {/* https://www.youtube.com/embed/영상Id?옵셥1&옵션2&controls=0&loop=1&playlist=비디오아이디 */}
          {/* 0과 1이라서 0은 false, 1은 true, 그래서 mute=1 */}
          {/* loop를 준 뒤에 플레이리스트 추가 후 embed뒤의 아이디값 필수 */}
          <iframe
            src="https://www.youtube.com/embed/YTR6Ic6rYww?controls=1&mute=1&autoplay=1&loop=1&playlist=YTR6Ic6rYww"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </article>
  );
}

export default MainYoutube;
