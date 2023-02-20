import React, { useEffect } from 'react';
import { useRef } from 'react';
// 요소 직접적으로 돔으로 활용할 수 있게 하는 useRef
function KaKaoOffice(props) {
  const { kakao } = window;
  const mapContainer = useRef(null);
  const mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOption);
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
  }, []);
  return (
    <div className="kakaoBox">
      <div id="map" style={{ width: '100%', height: '350px' }} ref={mapContainer}></div>
    </div>
  );
}

export default KaKaoOffice;
