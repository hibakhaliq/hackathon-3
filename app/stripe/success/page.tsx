import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const StripeSuccessPage = () => {
  return (
    <section className="grid place-items-center h-[50vh]">
      <div className="flex items-center flex-col bg-gray-200 p-10 rounded-lg">
        <div className="p-5 rounded-lg">
          <CheckCircle className="size-20 text-green-700" />
        </div>

        <div className="w-fit">
          <p className="text-lg font-medium text-green-700">Payment Recieved</p>
        </div>
      </div>

      <div className="flex items-center flex-col">
        <p className="text-gray-500 text-lg">Thank you for shopping with us</p>
        <Button asChild className="w-fit mt-4">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    </section>
  );
};

export default StripeSuccessPage;
