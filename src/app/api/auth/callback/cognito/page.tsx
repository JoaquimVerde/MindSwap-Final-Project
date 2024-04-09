import { useRouter } from "next/navigation";
import { CognitoJwtVerifier } from "aws-jwt-verify";

function Redirect() {
    const router = useRouter();
    const verifyUser = async () => {
        const response = await fetch('http://localhost:8080/api/v1/persons/email/' + email);
        response.status === 200 ? router.push("/dashboard") : router.push("/register");
    }
}

// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
  userPoolId: "<user_pool_id>",
  tokenUse: "access",
  clientId: "<client_id>",
});

try {
  const payload = await verifier.verify(
    "eyJraWQeyJhdF9oYXNoIjoidk..." // the JWT as string
  );
  console.log("Token is valid. Payload:", payload);
} catch {
  console.log("Token not valid!");
}

export default Redirect;