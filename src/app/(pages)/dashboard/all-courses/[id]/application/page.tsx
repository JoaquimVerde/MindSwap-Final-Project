import { ApplicationForm } from "@/app/ui/application/applicationForm";

<<<<<<< HEAD


export default function Application({ params }: { params: { id: string } }) {



=======
export default function () {
>>>>>>> 1715ca7 (fetch api post application)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-10">Application page</h1>
      <ApplicationForm />
    </div>
  );
}
