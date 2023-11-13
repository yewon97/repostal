'use client';
import styles from './SideNav.module.scss';
import Link from 'next/link';

export default function SideNav({ menu: { gnb, lnb, url } }) {
  return (
    <aside id="aside" className={styles.lnb_aside}>
      <div className="lnb_aside_wrap">
        <p className={styles.aside_top_img} />
        <ul className={styles.lnb_aside_list}>
          <li>
            <h2>{gnb}</h2>
          </li>
          {lnb.map(({ name, url }, idx) => {
            return (
              <li key={url}>
                <Link href={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
