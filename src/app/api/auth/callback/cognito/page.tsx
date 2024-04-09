"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Redirect() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const verifyUser = async () => {
      const response = await fetch("http://localhost:8080/api/v1/persons/email/" + session?.user?.email);
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        sessionStorage.setItem("userId", data.id);
        sessionStorage.setItem("userRole", data.role);
        router.push("/dashboard");
      } else {
        router.push("/register");
      }
    };
    verifyUser();
  }, [session]);
}

export default Redirect;
