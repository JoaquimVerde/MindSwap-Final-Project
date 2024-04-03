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
import React from "react";
import { PhoneInput } from "./phoneNumber";
import { Upload, Phone, Mail } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

const url = ""; // TODO add url to env.ts

const formSchema = z.object({
  phoneNumber: z.string(),
  uploadResume: z.string().optional(),
  aboutyou: z.string(),
  experience: z.enum(["no", "yes-less-year", "yes-more-year"], {
    required_error: "You need to select a notification type.",
  }),
});

// ==============================================================
//      I HAVE TO SWITCH COMPONENT CHECKBOX TO RADIO GROUP
// ============================================================

export function ApplicationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      aboutyou: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("submited", values);

    // TODO add api POSt
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center p-40">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-20 p-20 pt-0"
          >
            <div className="grid w-full max-w-sm items-center gap-3">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <p className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" />
                        Phone Number
                      </p>
                    </FormLabel>
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
                    <FormLabel>
                      <p className="flex items-center">
                        <Upload className="mr-2 h-4 w-4" />
                        Import Resume
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Input id="resume" type="file" className="file-input  " />
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
                      <Input
                        className="textarea w-full h-40"
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
                name="experience"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      Do you have any experience in this field?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onChange={field.onChange}
                        className="flex flex-col space-y-1"
                      >
                        <RadioGroupItem value="no">No</RadioGroupItem>
                        <RadioGroupItem value="yes-less-year">
                          Yes, less than a year.
                        </RadioGroupItem>
                        <RadioGroupItem value="yes-more-year">
                          Yes, more than a year.
                        </RadioGroupItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
