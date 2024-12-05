import { useEffect } from "react";

import { useForm, useWatch } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { isDirty, isValid, isSubmitting },
  // } = useForm();

  // const handleSubmission = async (data: any) => {
  //   const { mail, password } = data;
  //   // Add your submission logic here
  // };

  // useEffect(() => {
  //   if (window.history.state?.isAutoLogout || location.state?.isAutoLogout) {
  //     // autoLogoutModal.onOpen();
  //   }
  // }, []);

  return (
    <div className="flex min-h-screen min-w-231 items-center justify-center bg-gray-25 py-15.5">
      <div className="flex flex-col items-center">
        <div className="w-125 rounded-2.5 border border-gray-50 bg-white px-23 py-24.75">
          <img
            alt="Image Title"
            className="mb-15 h-11 w-78.5"
            height={44}
            // src={SampleImage}
            width={314}
          />
          <form
            className="mx-auto flex size-full w-75 flex-col"
            // onSubmit={handleSubmit(handleSubmission)}
          >
            <div className="mb-2 w-75 space-y-2.5">
              <input
                name="mail"
                // register={register}
                // iconType="email"
                placeholder="이메일 주소를 입력하세요."
              />
              <input
                name="password"
                // register={register}
                type="password"
                // iconType="password"
                placeholder="비밀번호를 입력하세요."
              />
            </div>
            <button
              // isDisabled={!isDirty || !isValid || isSubmitting}
              // size="large"
              type="submit"
              // variant="contained"
              color="secondary"
            >
              로그인
            </button>
            <button
              // size="large"
              // variant="outlined"
              color="light-gray"
              // onClick={() => navigate("/register")}
            >
              회원가입
            </button>
            <button type="button" 
            // onClick={() => navigate("/password-find")}
              >
              비밀번호 찾기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
