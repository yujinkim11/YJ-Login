import styled from "styled-components";

const SigninAllWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SigninTitle = styled.p`
  font-size: 30px;
  color: #ed2553;
  font-weight: 700;
  margin-bottom: 50px;
  padding-left: 10px;
`;

const SigninBox = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: white;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  color: #707070;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input {
    all: unset;
    border: 1px solid #dbdbdb;
    padding: 10px 18px;
    margin-bottom: 30px;
  }
`;
const FormWrap = styled.div`
  display: flex;
`;

const Category = styled.div`
  padding-left: 10px;
  width: 200px;
  padding-top: 10px;
  font-size: 18px;
  p {
    padding-bottom: 55px;
  }
`;

const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  border: 2px solid #ed2553;
  color: #ed2553;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  background-color: white;
  transition: 0.7;
`;

export const Sign = () => {
  return (
    <SigninAllWrap>
      <SigninBox>
        <SigninTitle>
          <p>회원가입</p>
        </SigninTitle>
        <FormWrap>
          <Category>
            <p>이름</p>
            <p>비밀번호</p>
            <p>비밀번호 확인</p>
            <p>닉네임</p>
            <p>이메일</p>
            <p>연락처</p>
          </Category>
          <form>
            <input type="text" />
            <input type="password" />
            <input type="password" />
            <input type="text" />
            <input type="email" />
            <input type="tel" />
          </form>
        </FormWrap>
        <Button>회원가입</Button>
      </SigninBox>
    </SigninAllWrap>
  );
};
