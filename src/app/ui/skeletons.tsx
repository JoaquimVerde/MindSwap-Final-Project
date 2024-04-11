import { cn } from "@/lib/utils"


export function CardSkeleton() {
     return (
          <div className={cn(`rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 w-[380px] h-[424px] mx-4 my-4 animate-pulse`)} >
               <div className={cn("flex flex-col space-y-1.5 p-6")}>
                    <div className={cn("text-2xl font-semibold leading-none tracking-tight")} />
                    <div className={cn("text-sm text-slate-500 dark:text-slate-400")} />
               </div>
               <div className={cn("grid gap-4")}>
                    <div className=" flex items-center space-x-4 rounded-md border p-8 w-auto mx-4 mt-11 bg-gray-300 animate-pulse" />
                    <div className="mt-11">
                         <div className="flex flex-wrap">
                              <div className=" rounded-full border p-2 w-2 ml-8 mt-4 bg-gray-400 animate-pulse" />
                              <div className=" rounded-md border w-[250px] h-4 ml-4 mt-4 bg-gray-300 animate-pulse" />
                         </div>
                         <div className="flex flex-wrap">
                              <div className=" rounded-full border p-2 w-2 ml-8 mt-4 bg-gray-400 animate-pulse" />
                              <div className=" rounded-md border w-[250px] h-4 ml-4 mt-4 bg-gray-300 animate-pulse" />
                         </div>
                    </div>
               </div>
               <div className="flex items-center w-auto mx-6 mt-11 p-4 rounded-md border p-4 bg-gray-400 animate-pulse" />
          </div >
     );
}

export function CardsSkeleton() {
     return (
          <div>
               <div className="flex flex-wrap">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
               </div>
          </div >
     );
}

export function PaginationSkeleton() {
     return (
          <div>
               <div className="mt-5 ml-4 rounded border p-5 w-[250px] bg-slate-900 animate-pulse" />
          </div >
     );
}


