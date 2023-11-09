import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footer_top}>
        <h2 className="hidden">사이트 이용안내</h2>
        <div className={styles.law_site_wrap}>
          <div className={styles.footer_law}>
            <h3 className="hidden">약관 및 정책</h3>
            <ul>
              <li>
                <Link href="#">개인정보처리방침</Link>
              </li>
              <li>
                <Link href="#">제한적보안확인제 / I-PIN제도</Link>
              </li>
              <li>
                <Link href="#">이용약관</Link>
              </li>
            </ul>
          </div>
          <div className={styles.family_site}>
            <h3>Family Site</h3>
            <ul>
              <li>
                <Link href="#" target="_blank">
                  정부24
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  과학기술정보통신부
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  한국우표포털서비스
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  우정박물관
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  한국우편사업진흥원
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  우체국공익재단
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  우체국시설관리단
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  우체국물류지원단
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  별정우체국연금관리단
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank">
                  우체국금융개발원
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <h2>우정사업본부</h2>
        <div className={styles.footer_bottom_cont_wrap}>
          <div className={styles.footer_bottom_cont1}>
            <address>(30114)세종특별자치시 도움5로 19(어진동)</address>
            <p>사업자등록번호 101-83-02925</p>
            <p>E-mail webpost@koreapost.go.kr</p>
          </div>
          <div className="footer_bottom_cont2">
            <p>
              고객센터(우편 1588-1300, 예금 1599-1900, 보험 1599-0100), FAX :
              0505-005-1024, 당직실 : 044-200-8841 (평일 야간, 공휴일)
            </p>
          </div>
          <div className="footer_bottom_cont3">
            <p>
              Copyright⒞2016 KOREA POST(Office of postal service). All rights
              reserved.
            </p>
            <strong>
              해당 사이트는 포트폴리오 목적으로 제작된 사이트 입니다.
            </strong>
          </div>
        </div>
        <ul className={styles.footer_bottom_mark}>
          <li>
            <Link href="javascript:void(0);">
              <Image
                width={72}
                height={47}
                src="/images/mark_wa.png"
                alt="웹 접근성 품질인증 마크"
              />
            </Link>
          </li>
          <li>
            <Image
              width={72}
              height={47}
              src="/images/mark_ncsi.png"
              alt="국가고객만족도 수상마크"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
