"use client"

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from 'next/navigation'

const BackButton = () => {
  const router = useRouter()

  const goBack = () => {
    router.back();
  };

  return <Button onClick={goBack}>Back</Button>;
};

export default BackButton;
