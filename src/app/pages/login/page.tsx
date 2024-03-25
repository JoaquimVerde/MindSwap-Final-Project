import Link from "next/link";

export default function Login() {
	return (
		<>
			<p>Login page here w/ a form</p>
			<Link href={"/dashboard"}>
				<button>Login</button>
			</Link>
		</>
	);
}

// teacher + staff = @mindera.com
// should candidates that get accepted (becoming students) have a newly created student email?

// if normal login, direct to /dashboard
// if teacher login, direct to /dashboard/teacher
// if staff login, direct to /dashboard/staff
