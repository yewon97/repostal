export default function AdminAnnouncementWrite() {
  return (
    <>
      <h3>공지사항 작성</h3>
      <form>
        <legend className="hidden">공지사항 작성</legend>
        <ul>
          <li>
            <label htmlFor="title">제목</label>
            <input type="text" id="title" name="title" />
          </li>
          <li>
            <label htmlFor="content">내용</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
            ></textarea>
          </li>
          <li>
            <label htmlFor="region">담당지역</label>
            <select name="region" id="region">
              <option value="1">서울</option>
              <option value="2">경기</option>
            </select>
          </li>
          <li>
            <label htmlFor="fixed">상단노출</label>
            <input type="checkbox" name="fiexed" id="fiexed" value="Y" />
          </li>
        </ul>
        <button type="submit">등록하기</button>
      </form>
    </>
  );
}
