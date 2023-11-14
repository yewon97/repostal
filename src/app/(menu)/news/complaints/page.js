'use client';
import React, { useState } from 'react';

export default function NewsPage() {
  const [form, setForm] = useState({
    type: '1',
    title: '',
    content: '',
  });
  const [file, setFile] = useState();

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <h3>민원신청</h3>
      <section className="complain_form">
        <form
          name="complain_form"
          action="complain_ok.php"
          method="post"
          id="complain"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend className="join_page_legend hidden">민원신청</legend>
            <ul className="all_input_wrap">
              <li>
                <label htmlFor="type">유형 *</label>
                <select name="type" id="type" onChange={onChange}>
                  <option value={1} selected>
                    칭찬 글
                  </option>
                  <option value={2}>불만 글</option>
                </select>
              </li>
              <li>
                <div className="flex flex-nowrap items-start">
                  <label htmlFor="title">민원 제목 *</label>
                  <input
                    type="text"
                    maxLength={200}
                    className="complain_title"
                    id="title"
                    name="title"
                    autoFocus
                    onChange={onChange}
                    required
                  />
                  <span className="add_desc">(200자 내외)</span>
                </div>
                <span className="error_txt err_complain_title" />
              </li>
              <li>
                <div className="flex flex-nowrap items-start">
                  <label htmlFor="content">민원 내용 *</label>
                  <textarea
                    name="content"
                    id="content"
                    maxLength={1800}
                    cols={20}
                    rows={10}
                    defaultValue={''}
                    onChange={onChange}
                    required
                  />
                  <span className="add_desc">(1800자 내외)</span>
                </div>
                <span className="error_txt err_complain_text" />
              </li>
              <li>
                <div className="flex flex-nowrap items-start">
                  <label htmlFor="file">첨부파일</label>
                  <input
                    type="file"
                    id="complain_file"
                    name="file"
                    onChange={onChange}
                  />
                  <span className="add_desc">(최대 16MB)</span>
                </div>
              </li>
            </ul>
          </fieldset>
          <div className="btn_wrap">
            <button type="submit" className="submit_complain">
              문의하기
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
