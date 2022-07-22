import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginAfterWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 60px;
    color: #267dff;
    font-weight: 700;
  }
`;

const Go = styled.p`
  background-color: #267dff;
  color: white;
  padding: 10px 10px;
  margin-top: 70px;
  font-size: 30px;
  font-weight: 700;
`;

export const LoginAfter = () => {
  return (
    <LoginAfterWrap>
      <h3>로그인 되었습니다!</h3>
      <Link to="/login">
        <Go>
          <p>홈으로</p>
        </Go>
      </Link>
    </LoginAfterWrap>
  );
};
