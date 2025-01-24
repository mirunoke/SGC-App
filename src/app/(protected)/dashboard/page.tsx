"use client";
import React, { useEffect } from 'react';
import '@dotlottie/react-player/dist/index.css';
import { DotLottiePlayer } from '@dotlottie/react-player';

export default function Home() {
  useEffect(() => {
    document.title = "Sistema de gestión de calidad";
  }, []);

  return (
    <div className="h-auto flex items-center justify-center bg-transparent dark:bg-transparent py-0">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <DotLottiePlayer
          src="/lotties/home.lottie"
          autoplay
          loop
          style={{
            width: 'auto', // Ajusta dinámicamente al ancho del contenedor
            maxWidth: '500px', // Máximo de 400px para pantallas grandes
            height: 'auto', // Ajusta la altura automáticamente
            maxHeight: "500px", // Máximo de 400px de altura
          }}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-slate-200">
          Bienvenido al Sistema de Gestión Documental
        </h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
          Plataforma diseñada para garantizar la organización, protección y trazabilidad integral de la documentación corporativa.
        </p>
      </div>
    </div>
  );
}
