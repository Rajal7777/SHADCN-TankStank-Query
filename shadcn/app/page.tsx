import CustomBtn from "@/components/CustomBtn";
import { Button } from "@/components/ui/button";
import { ArrowBigDown } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="secondary" size='xl' className="rounded-full text-custom-color"><ArrowBigDown />Click me</Button>
      <CustomBtn isRounded />
    </div>
  );
}
