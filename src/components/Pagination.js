import Link from 'next/link';
import styles from './Pagination.module.scss';
import {
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
  AiOutlineRight,
  AiOutlineLeft,
} from 'react-icons/ai';

export default function Pagination() {
  return (
    <div className={styles.pagination__wrapper}>
      <p className={styles.pagination__navi}>
        <Link href="" title="이전 블럭 페이지로 이동">
          <AiOutlineDoubleLeft />
        </Link>
      </p>
      <p className={styles.pagination__navi}>
        <Link href="" title="이전 페이지로 이동">
          <AiOutlineLeft />
        </Link>
      </p>
      <ul className={styles.pagination__list}>
        {[1, 2, 3, 4, 5].map((item, i) => {
          return (
            <li
              className={`${styles.pagination__num} ${
                item === 1 ? styles.active : ''
              }`}
            >
              <Link id={`page${item}`} href="" title={`${item}페이지로 이동`}>
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className={styles.pagination__navi}>
        <Link href="" title="다음 페이지로 이동">
          <AiOutlineRight />
        </Link>
      </p>
      <p className={styles.pagination__navi}>
        <Link href="" title="다음 블럭 페이지로 이동">
          <AiOutlineDoubleRight />
        </Link>
      </p>
    </div>
  );
}
