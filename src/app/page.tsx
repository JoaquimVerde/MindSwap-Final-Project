import About from './ui/landingPage/About'
import { Button } from "@/components/ui/button";
import CalendarComp from "./ui/components/ui/calendar";
import Courses from './ui/landingPage/Courses'
import Footer from './ui/landingPage/Footer'
import HeroSection from './ui/landingPage/HeroSection'
import Link from "next/link";
import Navbar from './ui/landingPage/Navbar'
import Parallax from './ui/landingPage/Paralax'
import Skills from './ui/landingPage/Skills'

export default function Home() {
	{/*return (
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

			
		</main> 
	)*/}
 return (
		<div>

		<main className="w-[100%] h-[100vh]">
		<Navbar/>
		<HeroSection />
		<About />
		<Parallax />
		<Courses />
		<Skills />
		<Footer/>
	  </main>
		</div>
	
)
	
}

