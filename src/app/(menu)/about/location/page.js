import { FaArrowRight } from 'react-icons/fa';

export default function LocationPage() {
  return (
    <>
      <article className="">
        <h3>찾아오시는 길</h3>
        <div className="">
          <div id="map"></div>
        </div>
      </article>
      <article className="">
        <h3>주소</h3>
        <ul className="flex flex-col gap-2 list-disc pl-4">
          <li>우편번호 : 30114, 세종특별자치시 도움5로 19 (어진동)</li>
          <li>고객 콜센터 우편서비스 : 1588-1300</li>
          <li>금융서비스 : (예금) 1599-1900 / 1588-1900, (보험) 1599-0100</li>
          <li>Fax : 0505-005-1024</li>
        </ul>
      </article>
      <article className="mt-10">
        <div className="">
          <h3>교통정보 안내</h3>
          <ul className="flex border border-solid rounded-md border-red-500 h-10 items-center">
            <li className="flex-1 flex justify-center">승용차</li>
            <li className="flex-1 flex justify-center border-x border-solid border-red-500">
              기차
            </li>
            <li className="flex-1 flex justify-center">고속・시외버스</li>
          </ul>
          <div className="mt-10">
            <ul className="flex flex-col gap-5">
              <li className="gap-3 flex flex-col">
                <h4 className="text-lg">경부고속도로</h4>
                <ul className="list-disc pl-4 flex flex-col gap-2">
                  <li>
                    <span className="inline-flex">
                      남청주IC(구. 청원IC) <FaArrowRight /> 부강
                      <FaArrowRight />
                      국지도 96호 <FaArrowRight /> 정부세종청사(8동,
                      우정사업본부)
                    </span>
                  </li>
                  <li className="list-disc">
                    <span className="inline-flex">
                      청주IC <FaArrowRight /> 36번 국도(조치원 방향)
                      <FaArrowRight />
                      정부세종청사(8동, 우정사업본부)
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="text-lg">호남고속도로</h4>
                <p>
                  유성IC <FaArrowRight /> 1번 국도(조치원방향) <FaArrowRight />
                  정부세종청사(8동, 우정사업본부)
                </p>
              </li>
              <li>
                <h4>논산천안 고속도로</h4>
                <p>
                  정안IC <FaArrowRight /> 정부세종청사 연결도로 <FaArrowRight />
                  은하수공원 <FaArrowRight /> 정부세종청사(8동, 우정사업본부)
                </p>
              </li>
              <li>
                <h4>당진영덕 고속도로</h4>
                <p>
                  서세종IC(동공주IC) <FaArrowRight /> 36번 국도 <FaArrowRight />
                  정부세종청사(8동, 우정사업본부)
                </p>
                <p>
                  남세종IC(북유성IC) <FaArrowRight /> 1번 국도(조치원 방향)
                  <FaArrowRight />
                  정부세종청사(8동, 우정사업본부)
                </p>
              </li>
            </ul>
            <ul>
              <li>
                조치원역(청사까지 30분 소요) 버스터미널 <FaArrowRight /> 550번,
                551번, 601번, 602번 버스이용 <FaArrowRight /> 정부세종청사(북측)
                하차
              </li>
              <li>
                오송역(청사까지 20분 소요) BRT 또는 751번 버스 이용
                <FaArrowRight /> 정부세종청사(북측) 하차
              </li>
              <li>
                대전역(청사까지 60분 소요) 지하철 승차(반석행) <FaArrowRight />
                반석역(6번출구)[환승]BRT이용 <FaArrowRight /> 정부세종청사(북측)
                하차
              </li>
              <li>
                세종시 BRT 대전 반석역 <FaArrowRight /> 세종터미널
                <FaArrowRight /> 첫마을 <FaArrowRight /> 세종청사{' '}
                <FaArrowRight />
                오송역
              </li>
            </ul>
            <div>
              <ul>
                <li>
                  세종시 고속시외버스터미널 (070-4904-3262) BRT 또는 601번,
                  602번, 751번 버스 이용,
                  <br /> 세종청사터미널(정부세종청사 종합안내실 앞,
                  044-200-2114)에서 도보이동
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
