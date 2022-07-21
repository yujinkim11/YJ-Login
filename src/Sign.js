import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
    display: flex;
    all: unset;
    border: 1px solid #dbdbdb;
    padding: 10px 18px;
    margin: 20px 0 30px 0;
  }
`;
const FormWrap = styled.div`
  display: flex;
  p {
    font-size: 18px;
    font-weight: 700;
  }
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

const ErrorMessage = styled.div`
  color: #ed2553;
  margin: -20px 0 20px 15px;
  font-size: 16px;
  font-weight: 700;
`;

export const Sign = () => {
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

  const onSubmit = () => {};

  console.log(getValues());

  return (
    <SigninAllWrap>
      <SigninBox>
        <SigninTitle>
          <p>회원가입</p>
        </SigninTitle>
        <FormWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>아이디</p>
            <input
              type="text"
              placeholder="영어+숫자 조합, 첫글자 숫자 X "
              {...register("username", {
                required: true,
                minLength: {
                  value: 1,
                },
                pattern: {
                  value: /^[A-Za-z]{1}[A-Za-z0-9]{3,9}$/,
                  message: "올바르지 않은 아이디 형식입니다.",
                },
              })}
            />
            {errors?.username?.message && (
              <ErrorMessage>{errors?.username?.message}</ErrorMessage>
            )}
            <p>비밀번호</p>{" "}
            <input
              type="password"
              placeholder="최소 8자리, 

              숫자,문자,특수문자 최소 1개"
              {...register("userpw", {
                required: true,
                minLength: {
                  value: 8,
                },

                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                  message: "올바르지 않은 비밀번호 형식입니다.",
                },
              })}
            />
            {errors?.userpw?.message && (
              <ErrorMessage>{errors?.userpw?.message}</ErrorMessage>
            )}
            <p>비밀번호 확인</p>
            <input
              type="password"
              {...register("userpw2", {
                required: true,
                minLength: {
                  value: 8,
                  message: "비밀번호가 일치하지 않습니다.",
                },
              })}
            />
            <p>이름</p>{" "}
            <input
              type="text"
              {...register("usernick", {
                required: true,
                minLength: {
                  value: 1,
                },
                pattern: {
                  value: /^[가-힣]+$/,
                  message: "이름은 한글로만 입력 가능합니다.",
                },
              })}
            />
            {errors?.usernick?.message && (
              <ErrorMessage>{errors?.usernick?.message}</ErrorMessage>
            )}
            <p>이메일</p>{" "}
            <input
              type="email"
              placeholder="yjlogin@mail.com"
              {...register("useremail", {
                required: true,
                minLength: {
                  value: 2,
                },
                pattern: {
                  value: /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/,
                  message: "올바르지 않은 이메일 형식입니다.",
                },
              })}
            />
            {errors?.useremail?.message && (
              <ErrorMessage>{errors?.useremail?.message}</ErrorMessage>
            )}
            <p>연락처</p>
            <input
              type="tel"
              placeholder="010-1234-5678"
              {...register("usertell", {
                required: true,
                minLength: {
                  value: 1,
                },
                pattern: {
                  value: /^(010|011|016|017|018|019)-\d{3,4}-\d{4}$/u,
                  message: "올바르지 않은 연락처 형식입니다.",
                },
              })}
            />
            {errors?.usertell?.message && (
              <ErrorMessage>{errors?.usertell?.message}</ErrorMessage>
            )}
          </form>
        </FormWrap>
        <Button
          cur={isValid ? "pointer" : "auto"}
          bgcolor={isValid ? "#ed2553" : "white"}
          fontcolor={isValid ? "white" : "#ed2553"}
        >
          회원가입
        </Button>
      </SigninBox>
    </SigninAllWrap>
  );
};
