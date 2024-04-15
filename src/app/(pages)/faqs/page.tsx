import BackButton from "@/app/ui/components/ui/back-button";
import Questions from "@/app/ui/faqs/faqs";

export default function FaqPage() {
  return (
    <main className="bg-primary w-[100%] h-[100vh]">
      <div>
        <div className="home-faqs">
          <BackButton />
        </div>
        <div className="flex items-center justify-center flex-col p-10">
          <div className="flex flex-row items-center mb-4">
          <h1 className="text-3xl flex-grow text-center font-bold mb-5">
            {" "}
            Frequently Asked Questions (FAQ){" "}
          </h1>
          </div>
        <h2 className="text-xl text-center text-accent font-bold mb-10">
          {" "}
          Need Help? We've got you covered!{" "}
        </h2>
        <Questions />
        </div>
      </div>
    </main>
  );
}