import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeBox = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: white;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  color: #707070;
`;

const HomeTitle = styled.p`
  font-size: 30px;
  color: #ed2553;
  font-weight: 700;
  margin-bottom: 50px;
  padding-left: 10px;
`;
const Boxwrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginBox = styled.button`
  width: 200px;
  height: 40px;
  font-size: 20px;
  font-weight: 300;
  color: white;
  background-color: #ed2553;
  border: none;
  margin-right: 30px;
  cursor: pointer;
`;

const SignBox = styled.button`
  width: 200px;
  height: 40px;
  font-size: 20px;
  font-weight: 300;
  color: white;
  background-color: #ed2553;
  border: none;
  cursor: pointer;
`;

export const Home = () => {
  return (
    <HomeWrap>
      <HomeBox>
        <HomeTitle>
          <p>환영합니다!</p>
        </HomeTitle>
        <Boxwrap>
          <Link to={"/Login"}>
            <LoginBox>로그인</LoginBox>
          </Link>
          <Link to={"/Sign"}>
            <SignBox>회원가입</SignBox>
          </Link>
        </Boxwrap>
      </HomeBox>
    </HomeWrap>
  );
};
