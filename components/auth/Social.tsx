"use client";

import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export interface SocialProps {}

const Social: FC<SocialProps> = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" variant="outline" className="w-full">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button size="lg" variant="outline" className="w-full">
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
