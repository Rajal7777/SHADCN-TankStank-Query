"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
// import { toast } from "sonner";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";



// 1. Zod schema
// This schema defines:
// - what fields exist
// - what type they should be
// - validation rules

const formSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "Username must be at least 5 characters",
    })
    .max(20, {
      message: "Username cannot exceed 20 characters",
    }),

  email: z.string().email({
    message: "Please enter a valid email",
  }),

  phone: z
    .string()
    .min(9, {
      message: "Phone number is too short",
    })
    .max(15, {
      message: "Phone number is too long",
    }),

  location: z.string().min(5, {
    message: "Location is required",
  }),

  role: z.enum(["admin", "user"]),
});

// 2. Infer TypeScript type from schema

// This automatically creates a type based on
// your zod schema.
// No need to manually create interfaces.
type FormValues = z.infer<typeof formSchema>;

const EditUser = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),

    // Default form values
    defaultValues: {
      username: "Rajal Suwal",
      email: "suwalrajal57@gmail.com",
      phone: "08085581204",
      location: "Tochigi Ohtawara Yamanote",
      role: "admin",
    },
  });

  // 4. Form submit function
  // data contains all validated form values

  // const onSubmit = (data: FormValues) => {
  //   toast("You submitted the following values:", {
  //     description: (
  //       <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
  //         <code>{JSON.stringify(data, null, 2)}</code>
  //       </pre>)
  //   });
  // };

  return (
   <Sheet>
      <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public username.
                    </FormDescription>
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
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Only admin can see your email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Only admin can see your phone number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the public location.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Only verified users can be admin.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
   </Sheet>
  );
};

export default EditUser;
