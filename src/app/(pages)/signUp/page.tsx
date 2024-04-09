"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SessionWrapper from "../../../components/ui/session-wrapper";

function SignUp() {
  const { data: session } = useSession();
  const router = useRouter();

  /* if (session) {
    router.push("/dashboard");
  } */

  {
    return session ? null : (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <button
          className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2"
          onClick={() =>
            (window.location.href =
              "https://mindswaplogin.auth.eu-central-1.amazoncognito.com/signup?client_id=3qn4vfitu65korf49pnrp1pt24&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito")
          }
        >
          Cognito
        </button>
      </div>
    );
  }
}
const SignUpWithSession = () => {
  return (
    <SessionWrapper>
      <SignUp />
    </SessionWrapper>
  );
};

export default SignUpWithSession;
