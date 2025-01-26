"use client";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import { ProductCart } from "@/lib/types";
import { urlFor } from "@/lib/sanity";

export const CheckoutButton = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    id: price_id,
  };

  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId)
  }

  return (
    <Button
    variant="secondary"
    className="border"
      onClick={() => {
        buyNow(price_id)
      }}
    >
      Checkout Now
    </Button>
  );
};
