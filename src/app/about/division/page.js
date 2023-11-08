import { BiSearchAlt2 } from 'react-icons/bi';
import {
  AiOutlineDoubleRight,
  AiOutlineRight,
  AiOutlineLeft,
} from 'react-icons/ai';

const data = [
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
  {
    name: '서울중앙우체국',
    name2: '서울을지로4가우체국',
    address: '서울특별시 중구 을지로 154-2 (을지로4가)',
    phone: '02)2273-6505',
  },
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
  {
    name: '서울중앙우체국',
    name2: '서울중앙우체국',
    address: '서울특별시 중구 소공로 70 (층무로1가)',
    phone: '02)6450-1114',
  },
];

export default function DivisionPage() {
  return (
    <>
      <h3>소속 기관 소개</h3>
      <div className="postal_search_wrap">
        <div className="introduce">
          찾으시는 지역을 선택하시면 해당 지역의 우체국 리스트가 보여집니다.
        </div>
        <h4 className="hidden">지역별 우체국 안내</h4>
        <ul>
          <li>
            <a href="">서울</a>
          </li>
          <li>
            <a href="">경인</a>
          </li>
          <li>
            <a href="">부산</a>
          </li>
          <li>
            <a href="">충청</a>
          </li>
          <li>
            <a href="">전남</a>
          </li>
          <li>
            <a href="">경북</a>
          </li>
          <li>
            <a href="">전북</a>
          </li>
          <li>
            <a href="">강원</a>
          </li>
          <li>
            <a href="">제주</a>
          </li>
        </ul>
      </div>
      <div className="search_wrap">
        <form
          action="search_postal.php"
          name="search_postal"
          method="get"
          onsubmit="return searchkeyword()"
        >
          <fieldset>
            <legend className="hidden">우체국 검색</legend>
            <div className="search_input_wrap">
              <label htmlFor="inputKeyword">우체국명</label>
              <input
                type="text"
                placeholder="검색어 입력"
                id="inputkeyword"
                name="inputkeyword"
              />
              <button type="submit" className="notice_search_icon">
                <BiSearchAlt2 />
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div>
        <table summary="등록된 공지사항" className="table">
          <caption className="hidden">우체국 리스트</caption>
          <thead>
            <tr>
              <th className="list_number">번호</th>
              <th className="list_region">총괄국명</th>
              <th className="list_title">우체국명</th>
              <th className="list_address">주소</th>
              <th className="list_phone">전화번호</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.name2}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="page_list">
          <p className="page_prev">
            <a href="sub_01.php?page=1" title="이전 페이지">
              <AiOutlineLeft />
            </a>
          </p>
          <div className="page_num">
            <ul className="page_num__list">
              <li>
                <a
                  id="page1"
                  href="sub_01.php?page=1"
                  style={{
                    color: 'rgb(212, 82, 70)',
                    fontWeight: 'bold',
                    borderBottom: '1px solid rgb(69, 72, 81)',
                  }}
                >
                  1
                </a>
              </li>
              <li>
                <a id="page2" href="sub_01.php?page=2">
                  2
                </a>
              </li>
              <li>
                <a id="page3" href="sub_01.php?page=3">
                  3
                </a>
              </li>
              <li>
                <a id="page4" href="sub_01.php?page=4">
                  4
                </a>
              </li>
              <li>
                <a id="page5" href="sub_01.php?page=5">
                  5
                </a>
              </li>
            </ul>
          </div>
          <p className="page_next">
            <a href="sub_01.php?page=2">
              <AiOutlineRight />
            </a>
            <a href="sub_01.php?page=6" title="다음 목록">
              <AiOutlineDoubleRight />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
