"use client"
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import SessionWrapper from "../../../components/ui/session-wrapper";
import { NextRouter } from "next/router";


interface Loginprops {
	router: NextRouter;
}

function Login({router}: Loginprops) {
  const { data: session } = useSession();
  const [loginwith, setLoginwith] = useState(false);

  const loginWith = () => {
    setLoginwith(true);
  }

  if (session) {
    console.log(session.user);
	router.push("/register");
  }
  if (loginwith) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-2xl mb-2">Sign In As</p>
        <button className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" onClick={() => signIn('cognito')}>Sign in with cognito</button>
      </div>
    )
  }
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
              <Image className="h-8 w-autp" src="/assets/technicalrajnilogo.png" width={400} height={400} alt="Logo" />
            </a>
          </div>
          {session ?
            (<div className="hidden log:flex lg:gap-x-12">
              <div className="relative">
                <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 test-gray-900"
                  aria-expanded="false">
                  Product
                </button>
              </div>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
            </div>)
            :
            (<div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button className="text-sm font-semibold leading-6 text-gray-900" onClick={loginWith}>Log in <span aria-hidden="true">&rarr;</span></button>
            </div>)
          }
        </nav>
      </header>
      <div className=" flex-col justify-center text-wrap border-spacing-4 text-center">
        <h1 className="underline-offset-8 bg-slate-100 align-middle"> My App </h1>
      </div>
    </>
  )
}

const LoginWithSession = () => {
	const router = useRouter();
  return (
    <SessionWrapper>
      <Login router= {router} />
    </SessionWrapper>
  )
}

export default LoginWithSession;