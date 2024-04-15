import RegisterForm from "@/app/ui/register/register-form";

export default function RegisterPage() {
	return (
		<main className="flex min-h-screen items-center justify-center">
			<div className="flex-min-h-screen flex-col items-center justify-between p-10">
				<RegisterForm />
			</div>
		</main>
	);
}