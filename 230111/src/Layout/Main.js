import React from 'react';
import Footer from '../Component/Footer';
import Nav from '../Component/Nav';
import '../asset/font.css';
import styles from '../asset/style/main.module.css';

function Main({ children }) {
  return (
    <div className={styles.wrapper}>
      {console.log(children)}
      <Nav />
      {/* {`${styles.border}} ${styles.color}`} */}
      <div className={`${styles.border} bg`}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Main;
