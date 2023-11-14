import Image from 'next/image';
import styles from './UtilNav.module.scss';
import Link from 'next/link';

export default function UtilNav() {
  return (
    <div className={styles.topmenu}>
      <div className={styles.topmenu_wrap}>
        <h2 className="hidden">사용자메뉴</h2>
        <ul>
          <li>
            <Link href="">로그인</Link>
          </li>
          <li>
            <Link href="">회원가입</Link>
          </li>
          <li>
            <Link href="/admin">관리자</Link>
          </li>
          <li>
            <Link href="#">My Page</Link>
          </li>
          <li>
            <Link className={styles.cart} href="#">
              <div>
                <Image
                  src="/images/cart.png"
                  width={33}
                  height={33}
                  alt="장바구니"
                />
              </div>
              <span>0</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
