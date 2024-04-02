'use client';

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from '@/app/lib/actions';
import { Button } from "@/components/ui/button"

export default function RegisterForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

   return(
<div>
   <form action={dispatch} className="space-y-3">
      <div className="flex-1">
        <h1 className= "mb-3 text-2xl">
          Create your account
        </h1>
        <div className="w-full">
        <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="firstName"
            >
              First Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="firstName"
                type="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>
        <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="lastName"
                type="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="username"
                name="lusername"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="address"
            >
              Address
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="address"
                type="address"
                name="address"
                placeholder="Enter your address"
                required
              />
            </div>
          </div>
        </div>
        <ResgisterButton />
        <div
          className="flex h-8 items-end space-x-1 center"
          aria-live="polite"
          aria-atomic="true"
        >
        </div>
        <div className="flex h-8 items-end space-x-1">
        
        </div>
      </div>
    </form>
    <div className="space-y-3">
        <AlreadyHaveAnAccountLink />
    </div>
</div>
  );
       
}



function ResgisterButton(){
    const {pending} = useFormStatus();

    return (
        <Button className="mt-4 w-full" variant="outline">
            Register</Button>
    )
}

export function AlreadyHaveAnAccountLink(){
    return (
        <a href="/pages/login">
    <Button className="mt-4 w-full" variant="link"> 
    Already have an account? Click here </Button>
    </a>
    )
}