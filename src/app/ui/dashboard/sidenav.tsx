import NavLinks from "@/app/ui/dashboard/nav-links";
// import { filteredLinks } from "@/app/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function Sidenav() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
          {/* Sidebar content here */}
          <li>
            <NavLinks />
            <div className="mt-auto p-4"></div>
            <form
              action={async () => {
                "use server";
                //await signOut();
              }}
            >
              <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-base-200 text-base-content p-4 text-sm font-medium hover:bg-base-700 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </button>
            </form>
            {/* <NavLinks links={filteredLinks}/> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
