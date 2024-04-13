"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Redirect() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return; // Still loading, don't do anything yet
    console.log(session);
    const verifyUser = async () => {
      const response = await fetch(
        "http://localhost:3000/proxy/api/v1/persons/email/" +
        session?.user?.email
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        router.push("/dashboard");
      } else {
        router.push("/register");
      }
    };
    verifyUser();
  }, [session, status]);
}

export default Redirect;
