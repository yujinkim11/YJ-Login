import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeBg = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftBox = styled.div`
  width: 25%;
  height: 60%;
  background-color: #267dff;
  border-radius: 20px 0 0 20px;
`;

const HomeBox = styled.div`
  width: 25%;
  height: 60%;
  background-color: white;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  color: #707070;
  z-index: 1;
  border-radius: 0 20px 20px 0;
`;

const HomeTitle = styled.p`
  font-size: 30px;
  color: #1d1d1d;
  font-weight: 700;
  margin-bottom: 50px;
  padding-left: 10px;
`;
const Boxwrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.button`
  width: 300px;
  height: 40px;
  font-size: 20px;
  font-weight: 300;
  color: white;
  background-color: #267dff;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

const SignBox = styled.button`
  width: 300px;
  height: 40px;
  font-size: 20px;
  font-weight: 300;
  color: white;
  background-color: #267dff;
  border: none;
  cursor: pointer;
`;

export const Home = () => {
  return (
    <HomeWrap>
      <HomeBg
        style={{
          background: `url(https://static.vecteezy.com/system/resources/thumbnails/003/475/201/small/grey-abstract-background-free-vector.jpg) no-repeat center / cover`,
        }}
      >
        <LeftBox></LeftBox>
        <HomeBox>
          <HomeTitle>
            <p>계정이 있으신가요?</p>
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
      </HomeBg>
    </HomeWrap>
  );
};
