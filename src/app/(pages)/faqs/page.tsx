import BackButton from "@/app/ui/components/ui/back-button";
import Questions from "@/app/ui/faqs/faqs";

export default function FaqPage() {
  return (
    <main className="flex items-center justify-center">
      <div className="flex-min-h-screen flex-col items-center justify-between p-10">
        <div className="flex flex-row items-center mb-4">
          <BackButton />
          <h1 className="text-3xl flex-grow text-center font-bold mb-5">
            {" "}
            Frequently Asked Questions (FAQ){" "}
          </h1>
        </div>
        <h2 className="text-xl text-center font-bold mb-10">
          {" "}
          Need Help? We've got you covered!{" "}
        </h2>
        <Questions />
      </div>
    </main>
  );
}
