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
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React from "react";

const url = "http://localhost:3000/proxy/api/v1/registrations";
const formSchema = z.object({
  status: z.string(),
  personId: z.string(),
  courseId: z.string(),
  aboutYou: z.string(),
  prevKnowledge: z.enum(["false", "true"], {
    required_error: "You need to select a notification type.",
  }),
  prevExperience: z.enum(["false", "true"], {
    required_error: "You need to select a notification type.",
  }),
});

export function ApplicationForm({ id }: { id: string }) {
  const { toast } = useToast();
  const courseIdparam = id.replace("%23", "#");
  const personIdparam = "PERSON#cf4f5fa7-cd9c-424a-a00c-9308173a6951";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "Applied",
      courseId: "1",
      personId: "1",
      aboutYou: "",
      prevKnowledge: "false",
      prevExperience: "false",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    values = { ...values, courseId: courseIdparam };
    values = { ...values, personId: personIdparam };
    values = { ...values, status: "Applied" };

    const api_req_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    fetch(url, api_req_options)
      .then((response) => {
        if (response.ok) {
          toast({
            title: "Your application was submited successfully",
          });
        } else {
          response.json().then((json) => {
            toast({
              variant: "destructive",
              title: json.message,
            });
          });
        }
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "There was an error submitting your application",
        });
      });
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
                name="aboutYou"
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
                      Do you have some knowledge of programming?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1 opacity-100"
                      >
                        <RadioGroupItem
                          value="false"
                          className="bg-white opacity-100"
                          // className="w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          No
                        </RadioGroupItem>
                        <RadioGroupItem
                          value="true"
                          className="bg-white opacity-100"
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
                      Do you have more than one year experience in this field?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1 opacity-100"
                      >
                        <RadioGroupItem
                          value="false"
                          className="bg-white opacity-100"
                          // className="w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          No
                        </RadioGroupItem>
                        <RadioGroupItem
                          value="true"
                          className="bg-white opacity-100"
                          //style={{ opacity: 1 }}
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
