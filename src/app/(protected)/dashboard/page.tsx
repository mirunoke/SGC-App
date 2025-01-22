"use client";
import React, { useEffect } from 'react';
import '@dotlottie/react-player/dist/index.css';


export default function Home() {
  useEffect(() => {
    document.title = "SGC";
  }, []);

  return (
      <h1>Pantalla principal</h1>
  );
}
