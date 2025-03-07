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
import VideoCreateOption from "./VideoCreateOption";

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
            {/* <DialogTitle className="text-center text-2xl">
              Let's Create A New Video
            </DialogTitle> */}
            <DialogDescription>
              <VideoCreateOption/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
