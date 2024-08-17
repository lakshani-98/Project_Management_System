import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Auth/Action";

const Signup = () => {
  const dispatch =  useDispatch();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(register(data));
    console.log("sign up", data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-xl font-bold mb-6 text-purple-700">Register</h1>
      <Form {...form}>
        <form className="w-full space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-purple-700 py-5 px-5 text-black"
                    placeholder="full name..."
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
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-purple-700 py-5 px-5 text-black"
                    placeholder="email..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-purple-700 py-5 px-5 text-black"
                    placeholder="password..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-5">
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
