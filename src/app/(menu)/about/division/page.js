import { BiSearchAlt2 } from 'react-icons/bi';
import Link from 'next/link';
import Pagination from '@/components/Pagination';

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
            <Link href="">서울</Link>
          </li>
          <li>
            <Link href="">경인</Link>
          </li>
          <li>
            <Link href="">부산</Link>
          </li>
          <li>
            <Link href="">충청</Link>
          </li>
          <li>
            <Link href="">전남</Link>
          </li>
          <li>
            <Link href="">경북</Link>
          </li>
          <li>
            <Link href="">전북</Link>
          </li>
          <li>
            <Link href="">강원</Link>
          </li>
          <li>
            <Link href="">제주</Link>
          </li>
        </ul>
      </div>
      <section className="search_wrap">
        <form action="" name="search_postal" method="get" onSubmit="">
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
      </section>
      <section>
        <table summary="등록된 공지사항" className="table">
          <caption className="hidden">우체국 리스트</caption>
          <colgroup>
            <col style={{ width: '6%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '11%' }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">총괄국명</th>
              <th scope="col">우체국명</th>
              <th scope="col">주소</th>
              <th scope="col">전화번호</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr>
                  <td scope="row">{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.name2}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination />
      </section>
    </>
  );
}
