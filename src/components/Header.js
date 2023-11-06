'use client';
import Link from 'next/link';
import UtilNav from './UtilNav';
import styles from './Header.module.scss';
import { useState } from 'react';

export default function Header({ menus }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header} id="header">
      <UtilNav />
      <h1 class={styles.logo}>
        <Link href="/">우정사업본부</Link>
      </h1>
      <nav class={styles.gnb}>
        <h2 class="hidden">주요메뉴</h2>
        <div class={styles.gnb_wrap}>
          <ul>
            {menus.map(({ gnb, url, lnb }) => {
              return (
                <li>
                  <Link href={url}>{gnb}</Link>
                  {showMenu && (
                    <ul class={styles.lnb}>
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
