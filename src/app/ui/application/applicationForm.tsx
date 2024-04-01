"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import React, { useState } from "react";
import { PhoneInput } from "./phoneNumber";

const url = ""; // TODO add url

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Firstname must be at least 2 characters." }),
  lastname: z
    .string()
    .min(2, { message: "Lastname must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string(),
  uploadResume: z.string().optional(),
  aboutyou: z.string(),
});

export function ApplicationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("submited", values);
  }

  return (
    <main>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>

                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="last name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aboutyou"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Something about you</FormLabel>
                  <FormControl>
                    <textarea
                      className="textarea w-full rows-20"
                      placeholder="... what's your interest, what do you like to do, ..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@email.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="PT"
                      defaultProps={{
                        country: "PT",
                        enableSearch: true,
                        enableAreaCodes: true,
                        enableDropdown: true,
                        preferredCountries: ["PT"],
                        onlyCountries: ["PT"],
                        enableCountryCode: true,
                        enableFlag: true,
                      }}
                      placeholder="enter your phone number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="uploadResume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Import Resume</FormLabel>
                  <FormControl>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Input id="resume" type="file" className="" />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
