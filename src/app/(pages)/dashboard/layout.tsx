import Sidenav from "@/app/ui/dashboard/sidenav";
import Navbar from "@/app/ui/dashboard/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">

        <div className="w-full flex-none md:w-64">

          <Sidenav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 z-20 ml-10">{children}</div>
      </div>
    </div>
  );
}
