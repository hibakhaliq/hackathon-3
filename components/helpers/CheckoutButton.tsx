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
  const { cartDetails } = useShoppingCart(); // Get cart items

  const handleCheckout = async () => {
    const product = {
      name,
      description,
      price,
      currency,
      image: urlFor(image).url(),
      id: price_id,
      quantity: 1, // Default quantity
    };

    const response = await fetch("/app/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [product] }), // Send the selected product
    });

    const { url } = await response.json();
    if (url) window.location.href = url; // Redirect to Stripe Checkout
  };

  return (
    <Button
      variant="secondary"
      className="border"
      onClick={handleCheckout}
    >
      Checkout Now
    </Button>
  );
};
