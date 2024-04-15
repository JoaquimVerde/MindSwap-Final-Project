"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
import AWS from "aws-sdk";
import { useSession } from "next-auth/react";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AddStaff() {
  const { toast } = useToast();
  const { data: session, status } = useSession();


  const formSchema = z.object({
    email: z.string().email(),
    firstName: z.string().min(1, "Please update your first name"),
    lastName: z.string().min(1, "Please update your last name"),
    role: z.string().min(1, "Role Required"),
    username: z.string().min(1, "Please update your username"),
    dateOfBirth: z.string().min(1, "Please update your date of birth"),
    address: z.string().min(1, "Please update your address"),
    cv: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "Please update your first name",
      lastName: "Please update your last name",
      username: "Please_update_your_username",
      dateOfBirth: "1990-01-01",
      address: "Please update your address",
      cv: "No need for CV",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    AWS.config.update({
      region: "eu-central-1",
      credentials: new AWS.Credentials({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || "",
      }),
    });
    try {

      let validatedValues = { ...formSchema.parse(values) };

      addUserToCognito(validatedValues.email, validatedValues.role);


    } catch (err) {
      toast({
        variant: "destructive",
        title: "There was an error creating this staff",
      });
    }
  }

  const addUserToCognito = (email: string, role: string) => {
    const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    cognitoidentityserviceprovider.adminCreateUser(
      {
        UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
        Username: email,
        DesiredDeliveryMediums: ["EMAIL"],
        ForceAliasCreation: true,
        MessageAction: "SUPPRESS",
        UserAttributes: [
          {
            Name: "email",
            Value: email,
          },
          {
            Name: "email_verified",
            Value: "true",
          },
        ],
        TemporaryPassword: "TempPassword123!",
      }, function (err, data) {
        if (err) {
          toast({
            variant: "destructive",
            title: "There was an error creating this staff",
          });
          return "";
        }
        else {
          addRoleToCognito(data?.User?.Username, role)
        }
      }
    );
  }

  const addRoleToCognito = (id: string | undefined, role: string) => {
    const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
    cognitoidentityserviceprovider.adminAddUserToGroup({
      UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      Username: id || "",
      GroupName: role,
    }, function (err, data) {
      if (err) {
        toast({
          variant: "destructive",
          title: "There was an error creating this staff",
        });
      } else {
        toast({
          title: "Staff was created successfully",
        });
      }
    });
  }




  return (
    <div>
      <h1>Create new staff</h1>
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="text-input"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Role: </FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="text-slate-300">
                            {field.value ? `${field.value} ` : "Choose Role "}
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Role:</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                              value={field.value}
                              onValueChange={(value) => field.onChange(value)}
                            >
                              <DropdownMenuRadioItem value="TEACHER">
                                Teacher
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="ADMIN">
                                Admin
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-primary w-full my">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
}
