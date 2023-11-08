import styles from './SideNav.module.scss';
import Link from 'next/link';

export default function SideNav() {
  return (
    <aside id="aside" className={styles.lnb_aside}>
      <div className="lnb_aside_wrap">
        <p className={styles.aside_top_img} />
        <ul className={styles.lnb_aside_list}>
          <li>
            <h2>기관소개</h2>
          </li>
          <li>
            <Link href="">소속 기관 소개</Link>
          </li>
          <li>
            <Link href="">찾아오시는 길</Link>
          </li>
          <li>
            <Link href="">이용시간</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
