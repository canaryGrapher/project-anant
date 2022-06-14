import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import SuperTokens from "supertokens-auth-react";
import { useRouter } from "next/router";

const SuperTokensComponentNoSSR = dynamic(
  new Promise((res) => res(SuperTokens.getRoutingComponent)),
  { ssr: false }
);

export default function Auth() {
  const router = useRouter();

  const redirectRoute =
    router.query.redirectToPath === "/apps/mxene/upload" ? "/apps/mxene" : null;

  return (
    <div className="w-screen min-h-screen bg-[#1e1e1fe3] z-50">
      <div
        className="fixed top-20 h-10 right-20 min-w-10 px-3 bg-white rounded-full flex flex-col justify-center text-center cursor-pointer"
        onClick={
          redirectRoute ? () => router.push(redirectRoute) : () => router.back()
        }
      >
        <div className="flex flex-row">
          <i className="fa fa-close my-auto text-xl"></i>
          <span className="pl-2 font-normal text-[#163F65]">Close</span>
        </div>
      </div>
      <div className="flex flex-col justify-center h-screen">
        <SuperTokensComponentNoSSR />
      </div>
    </div>
  );
}
