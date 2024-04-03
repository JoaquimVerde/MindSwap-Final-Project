import NavLinks from "@/app/ui/dashboard/nav-links";
// import { filteredLinks } from "@/app/ui/dashboard/nav-links";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { linksContentPages } from "@/app/lib/utils";

export default function Sidenav():JSX.Element {

  console.log('linksContentPages:', linksContentPages);
  
  if (!linksContentPages || !linksContentPages.content) {
    console.log('No content available');
    return <div>No content available</div>;
  }

  console.log('Content:', linksContentPages.content);
  
  return (
    // added z-index due tothe bullet points of the page all courses
    <div className="drawer lg:drawer-open z-10"> 
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-row items-start justify-start ml-5 mt-5 ">
        {/* Page content here */}
        {linksContentPages.content && linksContentPages.content.map((Component: React.FC, index: number) => (
          <Component key={index} />
        ))}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <Menu size="24" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-sm font-medium">
          {/* Sidebar content here */}
          <li>
            <NavLinks />
          </li>
            <li className="mt-auto">
              <form
                action={async () => {
                  "use server";
                  //await signOut(); => later
                }}
              >
                <Link
                  className="flex h-[48px] w-full grow items-center justify-center gap-2 text-base-content p-4 text-sm font-medium hover:bg-base-700 md:flex-none md:justify-start md:p-2 md:px-0"
                  href={"/" /* later => "/api/auth/signout" (?) */}
                >
                  <LogOut className="w-6" />
                  <div className="md:block">Sign Out</div>
                </Link>
              </form>
              {/* <NavLinks links={filteredLinks}/> */}
            </li>
        </ul>
      </div>
    </div>
  );
}
