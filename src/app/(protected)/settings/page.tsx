import React from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import Settings from "@/components/user/settings";

export const metadata: Metadata = {
  title: "SGC"
};

const SettingsPage = () => {
  return (
    <>
    <Breadcrumb pageName="Configuración" />
     <Settings />
     </>
  );
};

export default SettingsPage;
