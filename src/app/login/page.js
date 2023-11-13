export default function LoginPage() {
  return (
    <section className="login_page">
      <form
        name=""
        action="login_ok.php"
        method="post"
        className="user_login_part on"
        onsubmit="return login_check()"
      >
        <fieldset>
          <legend className="login_page_legend">로그인</legend>
          <p className="login_desc">
            본 사이트는 포트폴리오로 제작된 사이트임을 다시 한번 알립니다.
          </p>
          <p className="u_id_wrap">
            <label htmlFor="u_id" className="u_id_label">
              아이디
            </label>
            <i className="fas fa-user" />
            <input
              type="text"
              placeholder="아이디를 입력하세요."
              id="u_id"
              name="u_id"
            />
            <span className="err_id" />
          </p>
          <p className="pwd_wrap">
            <label htmlFor="pwd" className="pwd_label">
              비밀번호
            </label>
            <i className="fas fa-key" />
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              id="pwd"
              name="pwd"
            />
            <span className="err_pwd" />
          </p>
          <div className="login_option">
            {/* check_id */}
            <input type="checkbox" id="id_save" />
            <label htmlFor="id_save" className="user_id_save">
              <span>아이디 저장</span>
            </label>
            <div className="find_account">
              <a href="">아이디 찾기</a>
              <a href="">비밀번호 찾기</a>
            </div>
          </div>
          <button type="submit" className="user_login_button">
            로그인
          </button>
          <button type="button" className="user_login_button kakao_btn">
            카카오로 시작하기
          </button>
        </fieldset>
        <div className="creat_account">
          <p>회원가입을 하시면, 더욱 편리한 서비스 이용이 가능합니다.</p>
          <a href="../members/join_step01.html" className="creat_account_btn">
            회원가입
          </a>
        </div>
      </form>
    </section>
  );
}
