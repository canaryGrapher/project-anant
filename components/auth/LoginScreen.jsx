import { SignInAndUp } from "supertokens-auth-react/recipe/thirdparty";

const LoginScreen = () => {
  return (
    <div
      className="w-screen min-h-screen bg-[#1e1e1fe3]"
      style={{ zIndex: "900" }}
    >
      <div
        className="fixed top-20 h-10 right-20 min-w-10 px-3 bg-white rounded-full flex flex-col justify-center text-center cursor-pointer"
        // onClick={
        //   redirectRoute ? () => router.push(redirectRoute) : () => router.back()
        // }
      >
        <div className="flex flex-row">
          <i className="fa fa-close my-auto text-xl"></i>
          <span className="pl-2 font-normal text-[#163F65]">Close</span>
        </div>
      </div>
      <div className="flex flex-col justify-center h-screen">
        <SignInAndUp />
      </div>
    </div>
  );
};

export default LoginScreen;
