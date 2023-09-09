"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8bfab61f-89f4-4283-af87-0ca508b3facf");
  }, []);

  return null;
};