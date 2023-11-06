import Image from 'next/image';
import styles from './UtilNav.module.scss';

export default function UtilNav() {
  return (
    <div class={styles.topmenu}>
      <div class={styles.topmenu_wrap}>
        <h2 class="hidden">사용자메뉴</h2>
        <ul>
          <li>
            <a class="login" href="">
              로그인
            </a>
          </li>
          <li>
            <a class="joinup" href="">
              회원가입
            </a>
          </li>
          <li>
            <a class="mypage" href="#">
              My Page
            </a>
          </li>
          <li>
            <a class={styles.cart} href="#">
              <div>
                <Image
                  src="/images/cart.png"
                  width={33}
                  height={33}
                  alt="장바구니"
                />
              </div>
              <span>0</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
