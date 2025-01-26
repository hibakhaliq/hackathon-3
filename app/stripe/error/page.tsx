import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const StripErrorPage = () => {
  return (
    <section className="grid place-items-center h-[50vh]">
      <div className="flex items-center gap-4 flex-col bg-gray-200 p-10 rounded-lg">
        <div className="p-2 rounded-full border-2 border-red-700">
          <X className="size-16 text-red-700" />
        </div>

        <div className="w-fit">
          <p className="text-lg font-medium text-red-700">
            Something went wrong
          </p>
        </div>
      </div>

      <Button asChild>
        <Link href="/">Go back</Link>
      </Button>
    </section>
  );
};

export default StripErrorPage;
