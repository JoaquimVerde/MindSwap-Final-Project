import Sidenav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div>
        <Sidenav />
      </div>
      <div className="z-20">{children}</div> 
    </div>
  );
}
