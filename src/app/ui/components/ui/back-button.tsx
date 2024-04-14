"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <>
      <Link href={"/#home"}>
        <Home className="text-white" />
      </Link>
    </>
  );
};

export default BackButton;
