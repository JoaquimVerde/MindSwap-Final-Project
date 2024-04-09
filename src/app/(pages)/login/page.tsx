/* "use client";
import { signIn, signOut, useSession } from "next-auth/react";

function Login() {
  const { data: session } = useSession();

  {
    return session ? null : (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <button
          className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2"
          onClick={() => signIn("cognito")}
        >
          Cognito
        </button>
      </div>
    );
  }
}

export default Login;
 */