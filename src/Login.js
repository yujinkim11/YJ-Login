import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const userDB = {
  dbUsername: "testid",
  dbPw: "testpw",
};

const LoginAllWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftBox = styled.div`
  width: 25%;
  height: 60vh;
  background: linear-gradient(to bottom, #2f80ed, #56ccf2);
  border-radius: 20px 0 0 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 40px;
    font-weight: 700;
  }
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    margin: 50px 0;
  }
`;

const LoginBox = styled.div`
  width: 25%;
  height: 60vh;
  background-color: white;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #707070;
  border-radius: 0 20px 20px 0;
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

const SignupBox = styled.div`
  width: 250px;
  height: 50px;
  border: 2px solid white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: white;
  }
  :hover {
    transition: 1s;
    background-color: white;
    p {
      color: #2f80ed;
    }
  }
`;

const LoginTitle = styled.p`
  font-size: 30px;
  color: #267dff;
  font-weight: 700;
  margin-bottom: 50px;
  padding-left: 10px;
`;

const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  border: 2px solid #267dff;
  border-radius: 30px;
  color: ${(props) => props.fontcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  font-size: 20px;
  font-weight: 700;
  cursor: ${(props) => props.cur};
  background-color: ${(props) => props.bgcolor};
  transition: 0.7s;
`;

const Signin = styled.p`
  margin-top: 30px;
  text-align: center;
  color: #707070;
  font-size: 16px;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    color: #707070;
    :hover {
      font-weight: 700;
      color: #267dff;
    }
  }
  p {
    :nth-child(1) {
      margin-right: 20px;
    }
    :nth-child(2) {
      cursor: pointer;
    }
  }
`;

const ErrorMessage = styled.p`
  font-weight: 500;
  color: #267dff;
  margin-bottom: 15px;
  padding-left: 15px;
`;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { username, password } = getValues();
    const { dbUsername, dbPw } = userDB;
    // console.log(getValues());

    if (username !== dbUsername) {
      setError("usernameResult", { message: "아이디를 다시 확인해주세요." });
    }

    if (password !== dbPw) {
      setError("userpwResult", { message: "비밀번호를 다시 확인해주세요." });
    }

    if (username === dbUsername && password === dbPw) {
      navigate("/loginafter");
    }
  };
  console.log(errors);
  return (
    <LoginAllWrap>
      <LeftBox>
        <h3>Welcome Back !</h3>
        <p>
          To Keep Connected with us please
          <br />
          login with your personal info.
        </p>
        <Link to="/Sign">
          <SignupBox>
            <p>회원가입하기</p>
          </SignupBox>
        </Link>
      </LeftBox>
      <LoginBox>
        <LoginTitle>
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
              onChange() {
                clearErrors("usernameResult");
              },
            })}
            type="text"
            placeholder="아이디를 입력해주세요."
          />

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
              onChange() {
                clearErrors("userpwResult");
              },
            })}
            type="password"
            placeholder="패스워드를 입력해주세요."
          />

          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}

          {errors?.userpwResult?.message && (
            <ErrorMessage>{errors?.userpwResult?.message}</ErrorMessage>
          )}
          <Button
            cur={isValid ? "pointer" : "auto"}
            bgcolor={isValid ? "#2f80ed" : "white"}
            fontcolor={isValid ? "white" : "#267dff"}
          >
            로그인
          </Button>
        </form>
        <Signin>
          <Link to="/Sign">
            <p>회원가입하기</p>
          </Link>
          <p>ID/PASSWORD 찾기</p>
        </Signin>
      </LoginBox>
    </LoginAllWrap>
  );
};
