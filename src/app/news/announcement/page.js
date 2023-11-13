import React from 'react';

export default function NewsPage() {
  return (
    <>
      <h3>공지사항</h3>
      <article className="flex items-center justify-between">
        <div className="total_page">
          total : <span className="total_page_num">1</span>
        </div>
        <div className="search_wrap">
          <form
            action="search_keyword"
            name="search_notice"
            method="get"
            onsubmit="return searchkeyword()"
          >
            <fieldset>
              <legend className="hidden">공지사항 검색</legend>
              <select>
                <option selected="" value={1}>
                  제목
                </option>
                <option value={2}>내용</option>
                <option value={3}>제목+내용</option>
              </select>
              <div className="search_input_wrap">
                <label className="hidden" htmlFor="inputkeyword">
                  검색어 입력
                </label>
                <input
                  type="text"
                  placeholder="검색어 입력"
                  id="inputkeyword"
                  name="inputkeyword"
                />
                <button type="submit" className="notice_search_icon">
                  <i className="fas fa-search" />
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </article>
      <table summary="등록된 공지사항" className="notice_table">
        <caption className="hidden">공지사항 리스트</caption>
        <thead>
          <tr>
            <th className="list_number">번호</th>
            <th className="list_region">지역</th>
            <th className="list_title">제목</th>
            <th className="list_date">작성일</th>
            <th className="list_view">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>서울</td>
            <td>
              <a href="notice_cont.php?idx=1&no=1">안녕하세요</a>
            </td>
            <td>2022-01-25</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
      <div className="page_list">
        <p className="page_prev">
          <a href="notice.php?page=1" title="이전 페이지">
            <i className="fas fa-angle-left" />
          </a>
        </p>
        <div className="page_num">
          <ul>
            <li>
              <a
                id="page1"
                href="notice.php?page=1"
                style={{
                  color: 'rgb(212, 82, 70)',
                  fontWeight: 'bold',
                  borderBottom: '1px solid rgb(69, 72, 81)',
                }}
              >
                1{' '}
              </a>
            </li>
          </ul>
        </div>
        <p className="page_next">
          <a href="notice.php?page=1">
            <i className="fas fa-angle-right" />
          </a>
        </p>
      </div>
    </>
  );
}
