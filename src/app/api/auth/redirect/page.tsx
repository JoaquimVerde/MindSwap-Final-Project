"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Redirect() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const URL = "https://fe-deployment-testing.d63irou4ibhxm.amplifyapp.com/proxy/api/v1/persons/email/";

  useEffect(() => {
    if (status === "loading") return;
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const verifyUser = async () => {
      const response = await fetch(URL + session?.user?.email);
      const data = await response.json();
      console.log("response", response);
      if (response.status === 200) {
        sessionStorage.setItem("userId", data.id);
        sessionStorage.setItem("userRole", data.role);
        router.push("/dashboard");
      } else {
        router.push("/register");
      }
    };
    verifyUser();
  }, [session, status]);
}

export default Redirect;
