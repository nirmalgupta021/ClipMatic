import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  

  return (
    <div>
      <h2>Hiii</h2>
      <Button>Hello</Button>
      <UserButton/>
    </div>
  );
}
