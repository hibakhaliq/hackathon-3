import { ModeToggle } from "@/components/ModeToggle";
import { Hero, Products } from "@/components/shared";
import FAQS from "@/components/FAQS"
import { Textarea } from "@/components/ui/Message";

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <>
    <ModeToggle/>
    <Hero/>
    <Products/>
    <FAQS/>
    <Textarea/>
    </>
  );
}
