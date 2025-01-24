"use client";
import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas/auth/register";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";
import { FiMail } from 'react-icons/fi';
import { FiLock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Input as NextUIInput } from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
    });
  };

  return (
    <motion.div className="flex flex-col items-center space-y-6" initial="hidden" animate="visible">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-100 max-w-sm">
          <div className="space-y-4">


            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (

                <FormItem>
                  <motion.div>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          {...field}
                          disabled={isPending}
                          className="w-full h-10 rounded-[7px] border-[1.5px] bg-slate-50 border-gray-400 bg-transparent px-5.5 py-3 pl-11 text-dark outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                          placeholder="Juan Perez"
                          type="text"
                        />
                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                      </div>
                    </FormControl>
                  </motion.div>
                  <FormMessage />
                </FormItem>

                // <FormItem>
                //   <motion.div>
                //     <FormControl>
                //       <div className="relative w-100">
                //         <NextUIInput
                //           {...field}
                //           disabled={isPending}
                //           label="Nombre"
                //           className={`max-w-100 ${form.formState.errors.name ? 'border-red-500' : 'flex w-100s flex-wrap md:flex-nowrap gap-1.5'}`}
                //           isInvalid={!!form.formState.errors.email}
                //           type="text"
                //         />
                //       </div>
                //     </FormControl>
                //   </motion.div>
                //   <FormMessage />
                // </FormItem>

              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <motion.div>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          {...field}
                          disabled={isPending}
                          className="w-full h-10 rounded-[7px] border-[1.5px] bg-slate-50 border-gray-400 bg-transparent px-5.5 py-3 pl-11 text-dark outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                          placeholder="ejemplo@dominio.com"
                          type="email"
                        />
                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                      </div>
                    </FormControl>
                  </motion.div>
                  <FormMessage />
                </FormItem>

                // <FormItem>
                //   <motion.div>
                //     <FormControl>
                //       <div className="relative w-100">
                //         <NextUIInput
                //           {...field}
                //           disabled={isPending}
                //           label="Correo electrónico"
                //           className={`max-w-100 ${form.formState.errors.name ? 'border-red-500' : 'flex w-100s flex-wrap md:flex-nowrap gap-1.5'}`}
                //           isInvalid={!!form.formState.errors.email}
                //           type="email"
                //         />
                //       </div>
                //     </FormControl>
                //   </motion.div>
                //   <FormMessage />
                // </FormItem>


              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (

                <FormItem>
                  <motion.div>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          {...field}
                          disabled={isPending}
                          className="w-full h-10 rounded-[7px] border-[1.5px] bg-slate-50 border-gray-400 bg-transparent px-5.5 py-3 pl-11 text-dark outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
                          placeholder="**********"
                          type="password"
                        />
                        <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                      </div>
                    </FormControl>
                  </motion.div>
                  <FormMessage />
                </FormItem>


                // <FormItem>
                //   <motion.div>
                //     <FormControl>
                //       <div className="relative w-100">
                //         <NextUIInput
                //           {...field}
                //           disabled={isPending}
                //           className={`max-w-100 ${form.formState.errors.password ? 'border-red-500' : 'flex w-100 flex-wrap md:flex-nowrap gap-1.5'}`}
                //           label="Contraseña"
                //           type={isPasswordVisible ? "text" : "password"}
                //           isInvalid={!!form.formState.errors.password}
                //           endContent={
                //             <button
                //               className="focus:outline-none"
                //               type="button"
                //               onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                //               aria-label="toggle password visibility"
                //             >
                //               {isPasswordVisible ? (
                //                 <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                //               ) : (
                //                 <FaEye className="text-2xl text-default-400 pointer-events-none" />
                //               )}
                //             </button>
                //           }
                //         />
                //       </div>
                //     </FormControl>
                //   </motion.div>
                //   <FormMessage />
                // </FormItem>
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
            Crear cuenta
            </Button>
        </form>
        <br />
      </Form>
    </motion.div>
  );
};

export default RegisterForm;
