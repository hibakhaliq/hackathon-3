"use client";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

export const ImageGallery = ({ images }: any) => {
  const [main, setMain] = useState(images[0]);

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:flex-col lg:order-none">
        {images.map((image: any, idx: number) => (
          <div
            className="overflow-hidden rounded-lg bg-gray-100 max-h-28 h-full"
            key={idx}
            onClick={() => setMain(image)}
          >
            <Image
              src={urlFor(image).url()}
              alt={`image ${idx + 1}`}
              width={150}
              height={150}
              className="object-cover object-center h-full w-full hover:opacity-65 hover:shadow-md"
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 md:h-full max-md:max-h-[500px] shadow-md">
        <Image
          src={urlFor(main).url()}
          alt="Product Image"
          width={600}
          height={500}
          priority
          className="w-full h-full object-cover object-center rounded-lg"
        />
        <span className="absolute top-0 left-0 rounded-br-lg bg-red-600 px-3 py-1.5 text-sm font-medium uppercase tracking-wider text-white pointer-events-none">
          Sale
        </span>
      </div>
    </div>
  );
};
