"use client";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", path: "/" },
  { name: "Men", path: "/category/Men" },
  { name: "Women", path: "/category/Women" },
  { name: "Kids", path: "/category/Kids" },
];

export const Header = () => {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="border-b bg-bg">
      <div className="flex items-center justify-between mx-auto max-w-2xl pl-4 ;g:px-6 md:max-w-7xl">
        <Link href="/">
          <h2 className="md:text-4xl text-3xl font-extrabold">
            Quick<span className="text-primary">Buy</span>
          </h2>
        </Link>

        <nav className="max-lg:hidden flex items-center gap-12">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className={`${
                pathname == link.path && "text-primary font-medium"
              } text-lg transition duration-200 hover:text-primary`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          className="border-x lg:px-10 px-7 lg:py-8 py-6 h-full transition duration-100 rounded-none"
          onClick={() => handleCartClick()}
        >
          <ShoppingBag className="max-md:size-5" />
        </Button>
      </div>
    </header>
  );
};
