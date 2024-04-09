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
import { Checkbox } from "@radix-ui/react-checkbox";
import { stringify } from "querystring";
import { Courgette } from "next/font/google";

const url = "http://localhost:8080/api/v1/registration"; // TODO add url to env.ts

const itemsCheckBox = [
  {
    id: "java",
    label: "javascript",
  },
  {
    id: "python",
    label: "python",
  },
  {
    id: "php",
    label: "php",
  },
  {
    id: "c++",
    label: "c++",
  },
  {
    id: "c#",
    label: "c#",
  },
  {
    id: "ruby",
    label: "ruby",
  },
  {
    id: "go",
    label: "go",
  },
  {
    id: "typescript",
    label: "typescript",
  },
  {
    id: "none",
    label: "none",
  },
] as const;

const formSchema = z.object({
  // personId: z.string(),
  courseId: z.string(),
  // phoneNumber: z.string(),
  //uploadResume: z.string().optional(),
  aboutyou: z.string(),
  prevKnowledge: z.enum(["false", "true"], {
    required_error: "You need to select a notification type.",
  }),
  prevExperience: z.enum(["false", "true"], {
    required_error: "You need to select a notification type.",
  }),
  // itemsCheckBox: z
  //   .array(z.string())
  //   .refine((value) => value.some((item) => item), {
  //     message: "You have to select at least one item.",
  //   }),
});

export function ApplicationForm({
  id
}: {
  id: string;
}) {
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseId: "1",
      aboutyou: "",
      prevKnowledge: "false",
      prevExperience: "false",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("submited", values);

    values = { ...values, courseId: id };

    const api_req_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    const res = fetch(url, api_req_options);
    console.log(res);

    //const status = "applied";

    // postApplication({ values });
    // TODO add api POSt
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-20 p-20 pt-0"
          >
            <div className="grid w-full max-w-sm items-center gap-3">
              {/* <FormField
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
              /> */}
              {/* <FormField
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
              /> */}

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
                name="prevKnowledge"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      Do you have more than one year experience in this field?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <RadioGroupItem
                          value="false"
                          // className="w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          No
                        </RadioGroupItem>
                        <RadioGroupItem
                          value="true"
                          // className="w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Yes
                        </RadioGroupItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="prevExperience"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>
                      Do you have more than one year experience in this field 2?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <RadioGroupItem
                          value="false"
                          // className="w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          No
                        </RadioGroupItem>
                        <RadioGroupItem
                          value="true"
                          // className="w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          Yes
                        </RadioGroupItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="itemsCheckBox"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Langueages:</FormLabel>
                      <FormDescription>
                        Select the languages that you already had experience.
                      </FormDescription>
                    </div>
                    {itemsCheckBox.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="itemsCheckBox"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-col-start items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
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
