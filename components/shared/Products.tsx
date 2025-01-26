import { client } from "@/lib/sanity";
import { Product } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getProducts = async () => {
  const query = `
  *[_type == "product"][0...4] | order(_createdAt desc){
    _id,
      name,
      "image": images[0].asset->url,
      "slug": slug.current,
      price,
      "category": category->name
  }  
  `;
  const data = await client.fetch(query);
  return data;
};

export const Products = async () => {
  const data: Product[] = await getProducts();
  return (
    <section className="mx-auto lg:max-w-7xl max-w-2xl mt-20">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-3xl font-semibold tracking-tight">
          Latest Products
        </h2>
        <Link
          href="/category/all"
          className="flex items-center gap-x-1 text-primary"
        >
          See All{" "}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>

      <div className="mt-6 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-6 xl:gap-x-8 gap-y-10">
        {data.map((prod: Product) => (
          <div key={prod._id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-85 lg:h-80">
              <Image
                src={prod.image}
                alt={prod.name}
                width={300}
                height={300}
                className="w-full h-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex gap-2 justify-between">
              <div>
                <h3 className="text-gray-700">
                  <Link href={`/product/${prod.slug}`}>{prod.name}</Link>
                </h3>
                <p className="text-gray-500 mt-1">{prod.category}</p>
              </div>
              <p className="font-semibold text-lg text-primary">
                ${prod.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
