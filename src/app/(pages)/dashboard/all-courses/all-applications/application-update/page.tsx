import { fetchApplicationById } from "@/app/lib/data";

export default function APllicationUpdate({
  params,
}: {
  params: { id: string };
}) {
  const appId = params.id;

  const application = fetchApplicationById(appId);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-10">Update Application</h1>
    </div>
  );
}
