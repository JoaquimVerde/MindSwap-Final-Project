import { ApplicationForm } from "@/app/ui/application/applicationForm";

export default function Application({ params }: { params: { id: string, role: string | undefined } }) {
  const id = params.id;
  const role = params.role;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-10">Application page</h1>
      <ApplicationForm id={id} role={role} />
    </div>
  );
}
