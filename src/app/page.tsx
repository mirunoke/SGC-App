"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { ResetForm } from "@/components/auth/reset-form";
import { motion } from "framer-motion";
import { useState } from "react";
import SparklesText from "@/components/ui/sparkles-text";
import Image from "next/image";

export default function Home() {
  const [formType, setFormType] = useState<'login' | 'register' | 'reset'>('login');
//jsx
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      {/* Columna izquierda */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6">
      <Image
        src="/logos/logo_negro.png"
        alt="SGC Logo"
        width={250} // Puedes ajustar el tamaño según lo necesario
        height={100} // Ajusta según la proporción de tu logo
        className="w-full max-w-[250px] h-auto md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] mx-auto"
      />
        <div className="text-center">
          <div className="flex justify-center items-center w-full">
            <DotLottiePlayer
              src="/lotties/login.lottie"
              autoplay
              loop
              style={{ height: '100%', maxWidth: '400px' }}
              className="hidden md:block mt-5 w-full h-auto max-w-xs md:max-w-md lg:max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:bg-primary p-6">
        <div className="w-full max-w-md flex flex-col items-center">
          <SparklesText 
            text={
              formType === 'login' 
                ? "¡Bienvenido de nuevo!" 
                : formType === 'register' 
                ? "Únete a la comunidad de SGC" 
                : "Recupera tu contraseña"
            } 
            className="text-3xl font-semibold text-black text-center md:py-4 md:text-white" 
          />

          {formType === 'login' && <LoginForm />}
          {formType === 'register' && <RegisterForm />}
          {formType === 'reset' && <ResetForm />}

          <motion.div className="mt-4">
            {formType === 'login' && (
              <div className="flex flex-col items-center">
                <Button variant="link" onClick={() => setFormType('register')} className="text-sm text-gray-500 hover:underline md:text-[#D2DBE1]">
                  ¿No tienes cuenta? Regístrate.
                </Button>
                <Button variant="link" onClick={() => setFormType('reset')} className="text-sm text-gray-500 hover:underline md:text-[#D2DBE1]">
                  ¿Olvidaste tu contraseña? Restablecer.
                </Button>
              </div>
            )}
            {formType === 'register' && (
              <div className="flex flex-col items-center">
                <Button variant="link" onClick={() => setFormType('login')} className="text-sm text-gray-500 hover:underline md:text-[#D2DBE1]">
                  ¿Ya tienes cuenta? Inicia sesión aquí.
                </Button>
              </div>
            )}
            {formType === 'reset' && (
              <div className="flex flex-col items-center">
                <Button variant="link" onClick={() => setFormType('login')} className="text-sm text-gray-500 hover:underline md:text-[#D2DBE1]">
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
