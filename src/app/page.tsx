"use client";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { ResetForm } from "@/components/auth/reset-form";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const [formType, setFormType] = useState<'login' | 'register' | 'reset'>('login');
  //jsx
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md flex flex-col items-center">
        <Link href="/">
      <Image
        width={400}
        height={100}
        src="/logos/EUROIMMUN.svg"
        alt="Logo"
        priority
        className="dark:hidden mb-10"
        style={{ width: "500px", height: "auto", cursor: "pointer" }}
      />
    </Link>
          {formType === 'login' && <LoginForm />}
          {formType === 'register' && <RegisterForm />}
          {formType === 'reset' && <ResetForm />}

          <motion.div className="mt-4">
            {formType === 'login' && (
              <div className="flex flex-col items-center">
                <Button variant="link" onClick={() => setFormType('register')} className="text-sm text-gray-500 hover:underline">
                  ¿No tienes cuenta? Regístrate.
                </Button>
                <Button variant="link" onClick={() => setFormType('reset')} className="text-sm text-gray-500 hover:underline">
                  ¿Olvidaste tu contraseña? Restablecer.
                </Button>
              </div>
            )}
            {formType === 'register' && (
              <div className="flex flex-col items-center">
                <Button variant="link" onClick={() => setFormType('login')} className="text-sm text-gray-500 hover:underline">
                  ¿Ya tienes cuenta? Inicia sesión aquí.
                </Button>
              </div>
            )}
            {formType === 'reset' && (
              <div className="flex flex-col items-center">
                <Button variant="link" onClick={() => setFormType('login')} className="text-sm text-gray-500 hover:underline ">
                  Regresar al inicio de sesión.
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
