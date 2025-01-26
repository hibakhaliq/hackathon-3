import { AddToCart, CheckoutButton, ImageGallery } from "@/components/helpers";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import { ProductSingle } from "@/lib/types";
import { ChevronRight, Star, Truck } from "lucide-react";

export const dynamic = "force-dynamic"

const getProduct = async (slug: string) => {
  const query = `
    *[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          name,
          images,
          description,
          "slug": slug.current,
          price,
          "category": category->name,
          price_id
      }
    `;
  const data = await client.fetch(query);
  return data;
};

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: ProductSingle = await getProduct(params.slug);

  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="grid gap-8 md:grid-cols-2">
        <ImageGallery images={data.images} />

        <div className="md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="text-gray-500 flex items-center gap-x-1">
              Category <ChevronRight className="text-gray-500 size-4" />{" "}
              {data.category}
            </span>
            <h2 className="lg:text-3xl text-2xl font-medium text-gray-900 mt-2">
              {data.name}
            </h2>
          </div>

          <div className="mb-6 flex items-center gap-3 md:mb-8">
            <Button className="rounded-full gap-x-2">
              <span className="text-sm font-medium">4.6</span>
              <Star className="size-4" />
            </Button>
            <span className="text-gray-500 transition duration-100">
              78 Ratings
            </span>
          </div>

          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="md:text-3xl text-2xl font-bold text-gray-800">
                ${data.price}
              </span>
              <span className="mb-0.5 font-semibold text-primary line-through">
                ${data.price + 30}
              </span>
            </div>
            <span className="text-gray-500">Inc. all shipping</span>
          </div>

          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <Truck />
            <span className="text-sm">2-4 days shipping</span>
          </div>

          <div className="flex gap-2.5">
            <AddToCart
              currency="USD"
              description={data.description}
              image={data.images[0]}
              name={data.name}
              price={data.price}
              price_id={data.price_id}
            />
            <CheckoutButton
              currency="USD"
              description={data.description}
              image={data.images[0]}
              name={data.name}
              price={data.price}
              price_id={data.price_id}
            />
          </div>

          <p className="text-base mt-12 text-gray-500 tracking-wide">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
