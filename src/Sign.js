import styled from "styled-components";

const SigninAllWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SigninBox = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: white;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #707070;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input {
    all: unset;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px 18px;
    margin-bottom: 30px;
  }
`;

const SigninTitle = styled.p`
  font-size: 30px;
  color: #ed2553;
  font-weight: 700;
  margin-bottom: 50px;
  padding-left: 10px;
`;

const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  border: 2px solid #ed2553;
  color: ${(props) => props.fontcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  font-size: 20px;
  font-weight: 700;
  cursor: ${(props) => props.cur};
  background-color: ${(props) => props.bgcolor};
  transition: 0.7;
`;

export const Sign = () => {
  return (
    <SigninAllWrap>
      <SigninBox>
        <SigninTitle>
          <p>회원가입</p>
        </SigninTitle>
        <form>
          <input type="text" placeholder="아이디를 입력해주세요." />
          <input type="text" placeholder="아이디를 입력해주세요." />
          <input type="text" placeholder="아이디를 입력해주세요." />
          <input type="text" placeholder="아이디를 입력해주세요." />
          <input type="password" placeholder="패스워드를 입력해주세요." />
          <Button>회원가입</Button>
        </form>
      </SigninBox>
    </SigninAllWrap>
  );
};
