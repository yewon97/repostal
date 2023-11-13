'use client';
import Link from 'next/link';
import UtilNav from './UtilNav';
import styles from './Header.module.scss';
import { useState } from 'react';

export default function Header({ menus }) {
  const [toggleMenu, setTogglMenu] = useState(false);

  const handleShowMenu = () => {
    setTogglMenu(true);
  };
  const handleHideMenu = () => {
    setTogglMenu(false);
  };

  return (
    <header className={styles.header} id="header">
      <UtilNav />
      <h1 className={styles.logo}>
        <Link href="/">우정사업본부</Link>
      </h1>
      <nav className={styles.gnb}>
        <h2 className="hidden">주요메뉴</h2>
        <div className={styles.gnb_wrap}>
          <ul onMouseOver={handleShowMenu} onMouseOut={handleHideMenu}>
            {menus.map(({ gnb, url, lnb }, idx) => {
              return (
                <li key={idx}>
                  <Link href={url}>{gnb}</Link>
                  {toggleMenu && (
                    <ul className={styles.lnb}>
                      {lnb.map((l) => (
                        <li>
                          <Link href={l.url}>{l.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
