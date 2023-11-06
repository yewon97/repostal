export default function NewBox() {
  return (
    <section className="main_cont1">
      <div className="main_cont1_wrap">
        <article className="notice_wrap">
          <h3 className="notice">공지사항</h3>

          <ul className="notice_list">
            <li>
              <a href="#" className="notice_cont">
                택배노조에 설 특별소통기간 정상 배달 촉구
              </a>
              <span>2022-01-19</span>
            </li>
            <li>
              <a href="#" className="notice_cont">
                우체국 체크카드 출시 10주년 감사 이벤트
              </a>
              <span>2022-01-18</span>
            </li>
            <li>
              <a href="#" className="notice_cont">
                우체국, 설 명절 우편물 특별소통(1.17.~2.4.) 돌입
              </a>
              <span>2022-01-18</span>
            </li>
            <li>
              <a href="#" className="notice_cont">
                우정사업본부장, 서안양우체국 시설물 긴급 안전점검
              </a>
              <span>2022-01-18</span>
            </li>
            <li>
              <a href="#" className="notice_cont">
                소포위탁배달원 개인별 분류 본격 실시
              </a>
              <span>2022-01-18</span>
            </li>
          </ul>
          <a href="" className="notice_more">
            더보기
          </a>
        </article>

        <article className="quickbtn_wrap">
          <h3 className="hidden">바로가기 모음</h3>
          <ul>
            <li>
              <a href="a" className="quickbtn1">
                우편번호검색
              </a>
            </li>
            <li>
              <a href="b" className="quickbtn2">
                우체국찾기
              </a>
            </li>
            <li>
              <a href="c" className="quickbtn3">
                배달사전안내
              </a>
            </li>
            <li>
              <a href="d" className="quickbtn4">
                배송조회
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
