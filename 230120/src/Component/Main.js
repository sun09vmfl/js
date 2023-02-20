import { useRef, useState, useEffect } from 'react';
import Section1 from './Section';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import SideNav from './SideNav';

function Main() {
  const mainRef = useRef(null);
  const pos = useRef([]);
  let secs = null;
  const [idx, setIdx] = useState(0);
  const [scrolled, setScrolled] = useState(0);

  const getPos = () => {
    pos.current = [];
    secs = mainRef.current.querySelectorAll('.secBox');
    secs.forEach(sec => {
      pos.current.push(sec.offsetTop);
    });
    // console.log(pos.current);
  };

  const motion = () => {
    const base = -window.innerHeight / 3;
    const scrollY = window.scrollY;
    const btns = mainRef.current.querySelectorAll('.sideNav li');

    setScrolled(scrollY);

    pos.current.forEach((pos, idx) => {
      if (scrollY >= pos + base) {
        btns.forEach(btn => btn.classList.remove('on'));
        btns[idx].classList.add('on');

        secs.forEach(sec => sec.classList.remove('on'));
        secs[idx].classList.add('on');
      }
    });
  };

  useEffect(() => {
    getPos();
    window.addEventListener('resize', getPos);
    window.addEventListener('scroll', motion);

    return () => {
      window.removeEventListener('resize', getPos);
      window.removeEventListener('scroll', motion);
    };
  }, []);

  return (
    <main ref={mainRef}>
      <Section1 />
      <Section2 />
      <Section3 start={pos.current[1]} scrolled={scrolled} />
      <Section4 />
      <SideNav setIdx={setIdx} />
    </main>
  );
}

export default Main;
