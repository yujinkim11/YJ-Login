# # 📌프로젝트명: YJ-Login

로그인, 회원가입 창에서 유효성 검사를 구현한 사이트입니다.

### 구현 모습

<img src="https://user-images.githubusercontent.com/106130311/183231908-a94f95f7-c1f9-48d6-9df0-d4444e091d28.png" width="900px" height="500px">

## 💡 주요 기능

회원가입, 로그인 시 유효성 검사 (정규식 문법 사용)
설정된 DB (ID: testid, pw: testpw)로 로그인 시 로그인 화면으로 이동

추가하고 싶은 기능 : 유저가 로그인을 하면 DB이 되고 저장된 ID로 로그인 구현


## 📅 제작 기간

7/21 ~ 7/28 (약 1주 소요)


## ✅ 기술요점

- react를 사용하여 useForm 이용하여 구현
- styled-components를 이용하여 스타일 지정
- Nodejs 언어를 사용하여 npm 설치
- setError, clearErrors, useNavigate() 작업
- 반응형


## 📝 사용언어

-언어<br/>
<img src="https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-orange?style=for-the-badge&logo=Node.js&logoColor=white">
<br/> -프레임워크<br/>
<img src="https://img.shields.io/badge/React-informational?style=for-the-badge&logo=React&logoColor=white">



## 📝 작업할 내용

### 로그인 창

- [x] 로그인 폼 디자인
- [x] 디자인 레이아웃 구성
- [x] useForm 설치
- [x] useForm 기능 사용
- [x] 유효성 검사
- [x] getValues
- [x] setError
- [x] 특정 글자수 이상 입력시 로그인 버튼 활성화
- [x] useNavigate()

### 회원가입 창

- [x] 회원가입 폼 디자인
- [x] 디자인 레이아웃 구성
- [x] 아이디는 영어만, 이름은 한글만 가능하도록 설정
- [x] 유효성 검사
- [x] 필수사항 입력 시 가입 버튼
- [x] 비밀번호, 비밀번호 확인 유효성 체크
- [x] setError, clearErrors
- [x] useNavigate()
