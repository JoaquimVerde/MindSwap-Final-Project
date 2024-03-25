import Link from "next/link";

export default function Register() {
	return (
		<>
			<p>Register page here</p>
			<Link href={"/pages/login"}>
				<button>Register</button>
			</Link>
		</>
	);
	// from here (successful register), direct to Login page
	//
}
