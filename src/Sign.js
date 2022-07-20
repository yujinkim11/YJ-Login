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
    margin: 10px 0;
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
  margin: 0 0 20px 15px;
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

  const onSubmit = () => {
    const { username, userpw, userpw2, usernick, useremail, usertell } =
      getValues();

    if (userpw !== userpw2) {
      setError("userpwResult", { message: "비밀번호가 일치하지 않습니다." });
    }
  };
  console.log(getValues());

  return (
    <SigninAllWrap>
      <SigninBox>
        <SigninTitle>
          <p>회원가입</p>
        </SigninTitle>
        <FormWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>이름</p>
            <input
              type="text"
              {...register("username", {
                required: true,
                minLength: {
                  value: 6,
                  message: "아이디는 6자리 이상 필수입니다.",
                },
              })}
            />
            {errors?.username?.message && (
              <ErrorMessage>{errors?.username?.message}</ErrorMessage>
            )}
            <p>비밀번호</p>{" "}
            <input
              type="password"
              {...register("userpw", {
                required: true,
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상 필수입니다.",
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
            <p>닉네임</p>{" "}
            <input
              type="text"
              {...register("usernick", {
                required: true,
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
                },
              })}
            />
            {errors?.usernick?.message && (
              <ErrorMessage>{errors?.usernick?.message}</ErrorMessage>
            )}
            <p>이메일</p>{" "}
            <input
              type="email"
              {...register("useremail", {
                required: true,
                minLength: {
                  value: 10,
                  message: "Email은 필수 입력사항입니다.",
                },
              })}
            />
            {errors?.useremail?.message && (
              <ErrorMessage>{errors?.useremail?.message}</ErrorMessage>
            )}
            <p>연락처</p>
            <input
              type="tel"
              {...register("usertell", {
                required: true,
                minLength: {
                  value: 9,
                  message: "연락처는 필수 입력사항입니다.",
                },
              })}
            />
            {errors?.usertell?.message && (
              <ErrorMessage>{errors?.useretell?.message}</ErrorMessage>
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
