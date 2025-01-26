"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";

export const Cart = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout
  } = useShoppingCart();

  const handleCheckout = async () => {
    try{
      const result = await redirectToCheckout()
      console.log("result", result)
      if(result?.error){
        console.log(result)
      }
    }catch(error){

    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="max-sm:w-screen max-sm:pl-2 sm:min-w-[450px]">
        <SheetHeader className="pb-6">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="size-6" />
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between border-t border-gray-300 pb-6">
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-gray-300">
              {cartCount === 0 ? (
                <h2 className="text-lg text-gray-500">No items in cart</h2>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="size-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt={entry.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="mb-1 flex items-center justify-between gap-2">
                            <h3 className="text-gray-900 font-medium line-clamp-1">
                              {entry.name}
                            </h3>
                            <p className="ml-4 text-lg font-bold">
                              ${entry.price}
                            </p>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between mt-1">
                          <p className="text-gray-500 font-medium">
                            qty:{" "}
                            <span className="font-bold">{entry.quantity}</span>
                          </p>
                          <div>
                            <button
                              type="button"
                              className="text-sm text-primary hover:text-primary/80"
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal:</p>
              <p className="font-bold text-lg">${totalPrice}</p>
            </div>
            <p className="text-gray-500 text-sm -mt-1">
              Prices are inclusive of all taxes
            </p>

            <div className="mt-4">
              <Button className="w-full" onClick={handleCheckout}>Checkout</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
