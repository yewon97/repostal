import React from 'react';

export default function NewsPage() {
  return (
    <>
      <h3>민원신청</h3>
      <form
        name="complain_form"
        action="complain_ok.php"
        method="post"
        onsubmit="return form_check();"
        className="complain_form"
        id="complain"
      >
        <div className="character_img" />
        <fieldset>
          <legend className="join_page_legend hidden">민원신청</legend>
          <ul className="all_input_wrap">
            <li>
              <label htmlFor="complain_type">유형 *</label>
              <select name="complain_type" id="complain_type">
                <option value={1}>칭찬 글</option>
                <option value={2}>불만 글</option>
              </select>
            </li>
            <li>
              <label htmlFor="complain_title">민원 제목 *</label>
              <input
                type="text"
                maxLength={200}
                className="complain_title"
                id="complain_title"
                name="complain_title"
              />
              <span className="add_desc">(200자 내외)</span>
              <span className="error_txt err_complain_title" />
            </li>
            <li>
              <label htmlFor="complain_text">민원 내용 *</label>
              <textarea
                name="complain_text"
                id="complain_text"
                maxLength={1800}
                cols={20}
                rows={10}
                defaultValue={''}
              />
              <span className="add_desc">(1800자 내외)</span>
              <span className="error_txt err_complain_text" />
            </li>
            <li>
              <label htmlFor="complain_file">첨부파일</label>
              <input type="file" id="complain_file" name="complain_file" />
              <span className="add_desc">(최대 16MB)</span>
            </li>
          </ul>
        </fieldset>
      </form>
      <div className="btn_wrap">
        <button type="submit" form="complain_form" className="submit_complain">
          문의하기
        </button>
      </div>
    </>
  );
}
