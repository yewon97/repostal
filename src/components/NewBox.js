import Link from 'next/link';

export default function NewBox() {
  return (
    <section className="main_cont1 mt-[60px]">
      <div className="flex justify-between flex-nowrap min-w-[1200px]">
        <article className="notice_wrap">
          <h3 className="notice">공지사항</h3>

          <ul className="notice_list">
            <li>
              <Link href="#" className="notice_cont">
                택배노조에 설 특별소통기간 정상 배달 촉구
              </Link>
              <span>2022-01-19</span>
            </li>
            <li>
              <Link href="#" className="notice_cont">
                우체국 체크카드 출시 10주년 감사 이벤트
              </Link>
              <span>2022-01-18</span>
            </li>
            <li>
              <Link href="#" className="notice_cont">
                우체국, 설 명절 우편물 특별소통(1.17.~2.4.) 돌입
              </Link>
              <span>2022-01-18</span>
            </li>
            <li>
              <Link href="#" className="notice_cont">
                우정사업본부장, 서안양우체국 시설물 긴급 안전점검
              </Link>
              <span>2022-01-18</span>
            </li>
            <li>
              <Link href="#" className="notice_cont">
                소포위탁배달원 개인별 분류 본격 실시
              </Link>
              <span>2022-01-18</span>
            </li>
          </ul>
          <Link href="" className="notice_more">
            더보기
          </Link>
        </article>

        <article className="quickbtn_wrap">
          <h3 className="hidden">바로가기 모음</h3>
          <ul>
            <li>
              <Link href="a" className="quickbtn1">
                우편번호검색
              </Link>
            </li>
            <li>
              <Link href="b" className="quickbtn2">
                우체국찾기
              </Link>
            </li>
            <li>
              <Link href="c" className="quickbtn3">
                배달사전안내
              </Link>
            </li>
            <li>
              <Link href="d" className="quickbtn4">
                배송조회
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
