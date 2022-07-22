import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginAfterWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 60px;
    color: #1d1d1d;
    font-weight: 700;
  }
`;

const AfterBox = styled.div`
  width: 25%;
  height: 20%;
  background-color: rgba(255, 255, 255, 0.5);

  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Go = styled.p`
  color: #1d1d1d;
  padding: 10px 10px;
  margin-top: 70px;
  font-size: 30px;
  font-weight: 700;
  :hover {
    color: #267dff;
  }
`;

export const LoginAfter = () => {
  return (
    <LoginAfterWrap>
      <AfterBox>
        <h3>로그인 완료!</h3>
        <Link to="/login">
          <Go>
            <p>홈으로</p>
          </Go>
        </Link>
      </AfterBox>
    </LoginAfterWrap>
  );
};
