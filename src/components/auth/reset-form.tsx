"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { ResetSchema } from "@/schemas/auth/register";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { reset } from "@/actions/reset";
import { FiMail } from "react-icons/fi";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        });
    });
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="p-6 space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (

                <FormItem>
                  <motion.div variants={item}>
                    <FormLabel>Correo electronico</FormLabel>
                    <FormControl>
                      <div className="relative w-100">
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Correo electrónico"
                          type="email"
                          className="w-full rounded-[7px] border-[1.5px] bg-slate-50 border-gray-400 bg-transparent px-5.5 py-3 pl-11 text-dark outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                        />
                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                      </div>
                    </FormControl>
                  </motion.div>
                  <FormMessage />
                </FormItem>

              )}
            />
          </div>


          {error ? (
            <div className="w-100 text-red-500 bg-red-100 p-2 rounded-md">
              <FormError message={error} />
            </div>
          ) : null}

          {success ? (
            <div className="w-100 text-green-500 bg-green-100 p-2 rounded-md">
              <FormSuccess message={success} />
            </div>
          ) : null}


          <Button disabled={isPending} type="submit" className="-mt-6 w-full inline-flex justify-center rounded-md bg-primary px-10 py-4 text-center text-bold text-white hover:bg-black">
            Restablecer contaseña
          </Button>
        </form>
      </Form>
    </div>
  );
};
