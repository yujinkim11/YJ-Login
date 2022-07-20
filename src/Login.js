import { useForm } from "react-hook-form";
import styled from "styled-components";

const exDB = {
  dbUsername: "test12",
  dbPw: "pass1234",
};

const LoginAllWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
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

const LoginTitle = styled.p`
  font-size: 30px;
  color: #ed2553;
  font-weight: 700;
  margin-bottom: 50px;
  display: flex;
`;

const LoginBar = styled.div`
  width: 5px;
  height: 30px;
  background-color: #ed2553;
  position: absolute;
  left: 0;
`;

const Button = styled.div`
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
  background-color: ${(props) => props.color};
`;

const Signin = styled.p`
  margin-top: 30px;
  text-align: center;
  color: #707070;
  font-size: 15px;
  display: flex;
  justify-content: center;
  p {
    :nth-child(1) {
      margin-right: 20px;
    }
    :nth-child(2) {
      cursor: pointer;
    }
  }
`;

const ErrorMessage = styled.p``;

export const Login = () => {
  const {
    register,
    handleSubmit,
    getlValues,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = () => {
    const { username, password } = getlValues();
    const { dbUsername, dbPw } = exDB;
  };

  return (
    <LoginAllWrap>
      <LoginBox>
        <LoginTitle>
          <LoginBar />
          <p>LOGIN</p>
        </LoginTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: true,
              minLength: {
                value: 4,
                message: "ID는 4자리 이상 필수입니다.",
              },
            })}
            type="text"
            placeholder="아이디를 입력해주세요."
          ></input>
          {errors?.username?.message && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}

          {errors?.usernameResult?.message && (
            <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
          )}

          <input
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "PW는 6자리 이상 필수입니다",
              },
            })}
            type="password"
            placeholder="패스워드를 입력해주세요."
          ></input>

          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}

          {errors?.passwordResult?.message && (
            <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
          )}
          <Button
            cur={isValid ? "pointer" : "auto"}
            bgcolor={isValid ? "white" : "#ed2553"}
            fontcolor={isValid ? "#ed2553" : "white"}
          >
            로그인
          </Button>
        </form>
        <Signin>
          <p>회원가입하기</p>
          <p>ID/PASSWORD 찾기</p>
        </Signin>
      </LoginBox>
    </LoginAllWrap>
  );
};
