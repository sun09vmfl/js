import React, { useState } from 'react';
import Ex2Modal from './Ex2Modal';

function Ex2() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={onOpen}>모달창 열기</button>
      {isOpen && <Ex2Modal onClose={onClose} />}
    </div>
  );
}

export default Ex2;
