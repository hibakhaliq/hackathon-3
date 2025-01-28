import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Cart, Footer, Header } from "@/components/shared";
import { CartProvider } from "@/store/CartProvider";
import { ThemeProvider } from "@/components/ThemeProvider";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pyzon Ecommerce | One Stop Shop",
  description:
    "QuickBuy Ecommerce | One Stop Shopoffers a comprehensive array of products and services, catering to all your online shopping requirements. From electronics to fashion, home essentials to entertainment, we provide a diverse selection to fulfill every customer's needs. Experience convenience, quality, and reliability all in one place with Pyzon Ecommerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" > 
      <body className={`${raleway.className}`}>
        
        <CartProvider>
      
          <Header />
          
          <Cart />
          
          <main className="max-w-7xl mx-auto w-full px-4 py-10 min-h-[80vh]">
            
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

          </main>
          

          {/* <Footer/> */}
        </CartProvider>
        
      </body>
    </html>
  );
}
