"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import AWS from "aws-sdk";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Write a valid name to continue",
  }),
  lastName: z.string().min(2, {
    message: "Write a valid name to continue",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  address: z.string().min(6, {
    message: "Write a valid address to continue",
  }),
  dateOfBirth: z.string().min(6, {
    message: "Write a valid dob to continue",
  }),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      address: "",
    },
  });

  const { data: session } = useSession();
  const user: any = session?.user;
  const mail = user?.email;
  const userId = user?.id;
  const role =
    user && user["cognito:groups"] ? user["cognito:groups"][0] : "STUDENT";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    AWS.config.update({
      region: "eu-central-1",
      credentials: new AWS.Credentials({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
      }),
    });
    var cognitoidentityserviceprovider =
      new AWS.CognitoIdentityServiceProvider();
    console.log("role", role);
    const obj = {
      ...values,
      email: mail,
      cv: "a",
      role: role,
      id: userId,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/persons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    if (response.status !== 201) {
      throw new Error("Registration failed");
    }
    console.log("BEFORE");
    cognitoidentityserviceprovider.adminAddUserToGroup(
      {
        UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
        Username: userId || "",
        GroupName: "STUDENT",
      },
      function (err, data) {
        if (err) console.log(err, err.stack);
        else window.location.href = "/dashboard";
      }
    );
    console.log("AFTER");
  }

  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold mb-5"> Create your account</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormDescription className="text-accent">
                    This is your public display name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-secondary">
              Register
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
