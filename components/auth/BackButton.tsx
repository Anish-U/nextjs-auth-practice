"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton: FC<BackButtonProps> = ({ href, label }) => {
  return (
    <Button variant="link" size="sm" className="font-normal w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
