import React from 'react';

const Ex2Modal = ({ onClose }) => {
  return (
    <>
      <div style={{ border: `2px solid #000`, marginTop: '10px', width: '300px' }}>
        <h2>모달창 띄우기</h2>
        <p className="closeBtn" onClick={onClose}>
          닫기
        </p>
      </div>
    </>
  );
};

export default Ex2Modal;
