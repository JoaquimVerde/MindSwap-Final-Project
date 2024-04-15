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
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const url = `${process.env.NEXT_PUBLIC_URL}/proxy/api/v1/registration`;
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
  const { data: session, status } = useSession();
  const [personIdparam, setPersonIdparam] = React.useState("");
  const courseIdparam = id.replace("%23", "#");
  
  useEffect(() => {
    if (status === "loading") return;
    const user: any = session?.user;
    setPersonIdparam("PERSON#" + user.id);
  }, [session, status]);

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
      .catch(() => {
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
              <FormField
                control={form.control}
                name="aboutYou"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Something about you</FormLabel>
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
                    <FormLabel className="text-white">
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
                          className="bg-white opacity-100 hover:bg-gray-300 active:bg-accent focus:outline-none focus:ring focus:ring-primary mb-2"
                        
                        >
                          No
                        </RadioGroupItem>
                        <RadioGroupItem
                          value="true"
                          className="bg-white opacity-100 hover:bg-gray-300 active:bg-accent focus:outline-none focus:ring focus:ring-primary"
                
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
                    <FormLabel className="text-white">
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
                          className="bg-white opacity-100 hover:bg-gray-300 active:bg-accent focus:outline-none focus:ring focus:ring-primary mb-2"
    
                        >
                          No
                        </RadioGroupItem>
                        <RadioGroupItem
                          value="true"
                          className="bg-white opacity-100 hover:bg-gray-300 active:bg-accent focus:outline-none focus:ring focus:ring-primary "
                        
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

            <Button type="submit" className="w-full bg-primary">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
