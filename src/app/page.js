import MainBanner from '@/components/MainBanner';
import NewBox from '@/components/NewBox';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <MainBanner />
      <NewBox />
      <section className="main_cont2">
        <div className="main_cont2_wrap">
          <article className="complain_wrap">
            <h3 className="hidden">민원신청</h3>
            <ul className="tabs">
              <li className="compliment tab-link current" data-tab="tab-1">
                칭찬하기
              </li>
              <li className="complaint tab-link" data-tab="tab-2">
                불만신고
              </li>
            </ul>
            <div id="tab-1" className="tab-content current">
              <img src="images/compliment.png" alt="good" />
              <p>
                칭찬을 해주시면
                <br />
                저희는 더욱 힘이나요!
              </p>
              <span>
                <a href="/postal/notice_board/complain.php">칭찬 글쓰러 가기</a>
              </span>
            </div>
            <div id="tab-2" className="tab-content">
              <img src="images/complaint.png" alt="bad" />
              <p>
                불만족한 경험이
                <br />
                있으셨으면
                <br />
                신고해주세요!
              </p>
              <span>
                <a href="/postal/notice_board/complain.php">
                  불만 신고하러 가기
                </a>
              </span>
            </div>
          </article>
          <article className="contact_wrap">
            <h3 className="contact">우편고객센터</h3>
            <a href="#" className="post-talk">
              <img src="images/post_talk.png" alt="우편톡" />
            </a>
            <p className="contact__number">1588 - 1300</p>
            <p className="contact__work">
              <span>평 일</span>
              09:00~18:00
              <br />
              <span>토요일</span>
              09:00~13:00
            </p>
          </article>
          <article className="findpost_wrap">
            <h3 className="findpost">우체국 찾기</h3>
            <button
              type="button"
              className="findpost_btn"
              onclick="window.open('https:/\/map.kakao.com/?itemId=19488833')"
            >
              지도에서 보기
            </button>
          </article>
        </div>
      </section>
    </>
  );
}
