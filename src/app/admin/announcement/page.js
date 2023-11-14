import Pagination from '@/components/Pagination';
import Link from 'next/link';
export default function AdminAnnouncementPage() {
  return (
    <>
      <h3>공지사항 관리</h3>
      <article className="flex items-center justify-between">
        <div className="total_page">
          total : <span className="total_page_num">1</span>
        </div>
        <div className="search_wrap">
          <form action="search_keyword" name="search_notice" method="get">
            <fieldset>
              <legend className="hidden">공지사항 검색</legend>
              <select>
                <option value={1}>제목</option>
                <option value={2}>내용</option>
                <option value={3}>제목+내용</option>
              </select>
              <div className="search_input_wrap">
                <label className="hidden" htmlFor="inputkeyword">
                  검색어 입력
                </label>
                <input
                  placeholder="검색어 입력"
                  id="inputkeyword"
                  type="text"
                  name="inputkeyword"
                />
                <button type="submit" className="notice_search_icon">
                  <i className="fas fa-search" />
                </button>
              </div>
            </fieldset>
          </form>
          <Link href="announcement/write">글쓰기</Link>
        </div>
      </article>
      <section>
        <table summary="등록된 공지사항" className="notice_table">
          <caption className="hidden">공지사항 리스트</caption>
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '12%' }} />
            <col />
            <col style={{ width: '15%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">지역</th>
              <th scope="col">제목</th>
              <th scope="col">작성일</th>
              <th scope="col">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>서울</td>
              <td>안녕하세요</td>
              <td>2022-01-25</td>
              <td>21</td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </section>
    </>
  );
}
