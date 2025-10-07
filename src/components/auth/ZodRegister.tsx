"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/schemas/registerSchema";

import RegisterButton from "./RegisterButton";

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function ZodRegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  function onSubmit(values: RegisterFormValues) {
    console.log("Form submitted:", values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-8"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#9BA3AF] text-sm font-heading">
                Full Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Tapan Boruah"
                  {...field}
                  className="border p-2 rounded text-[#FFFFFF] text-base border-[#2A2F36] bg-gray-800 font-body"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#9BA3AF] text-sm font-heading">
                Email ID
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="xyz@gmail.com"
                  {...field}
                  className="border p-2 rounded text-[#FFFFFF] text-base border-[#2A2F36] bg-gray-800 font-body"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#9BA3AF] text-sm font-heading">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder=".............."
                  {...field}
                  className="border p-2 rounded text-[#FFFFFF] text-base border-[#2A2F36] bg-gray-800 font-body"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#9BA3AF] text-sm font-heading">
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder=".............."
                  {...field}
                  className="border p-2 rounded text-[#FFFFFF] text-base border-[#2A2F36] bg-gray-800 font-body"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <RegisterButton />
      </form>
    </Form>
  );
}
