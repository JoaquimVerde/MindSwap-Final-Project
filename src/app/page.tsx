import Link from "next/link";
import { Button } from "@/components/ui/button";
import CalendarComp from "./ui/components/ui/calendar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Landing page</h1>
			<Link href={"/login"}>
				<button>Login</button>
			</Link>

			<Button asChild>
				<Link href={"/register"}>
					<button>Register</button>
				</Link>
			</Button>

			{/* <CalendarComp /> */}

			{/* grid w/ cards of courses goes here */}
		</main>
	);
}
