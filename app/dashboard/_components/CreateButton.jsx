import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const CreateButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-black hover:bg-purple-500">
            + Create New Video
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              Let's Create A New Video
            </DialogTitle>
            <DialogDescription>
              <div className="flex gap-5 items-center justify-center mt-5 ">
                <Link href={"/create-ai-video"}>
                  <div className="border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100">
                    <Image
                      src={"/magic-wand.png"}
                      alt="magic-wand"
                      width={40}
                      height={40}
                    />
                    <h2 className="text-lg">Generate with AI</h2>
                  </div>
                </Link>

                <Link href={"/editor"}>
                  <div className="border rounded-lg p-4 w-full cursor-pointer hover:bg-gray-100">
                    <Image
                      src={"/video-editing.png"}
                      alt="video-editing"
                      width={40}
                      height={40}
                    />
                    <h2 className="text-lg">Create from scratch</h2>
                  </div>
                </Link>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
