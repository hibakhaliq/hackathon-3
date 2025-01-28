import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

const getImages = async () => {
  const query = `*[_type == "heroImage"][0] {
    image1,
    image2
  }`;
  const data = await client.fetch(query);
  return data;
};

export const Hero = async () => {
  const data = await getImages();

  return (
    <section className="mb-8 flex flex-wrap justify-between md:mb-16">
      <div className="mb-6 flex w-full flex-col justify-center lg:pt-48 lg:pb-24 lg:w-1/3">
        <h1 className="md:text-6xl text-4xl font-bold text-pink-800 mb-4">
        QuickBuy
        </h1>
        <p className="xl:text-lg leading-relaxed text-gray-500 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minima
          ad nostrum?
        </p>
      </div>

      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 z-10 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 w-full">
          <Image
            src={urlFor(data.image1).url()}
            alt="Hero image 1"
            width={500}
            height={400}
            priority
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full">
          <Image
            src={urlFor(data.image2).url()}
            alt="Hero image 2"
            width={1000}
            height={400}
            priority
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row mt-4">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/category/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-200"
          >
          Men
          </Link>
          <Link
            href="/category/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/category/Kids"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-200"
          >
            Kids
          </Link>
        </div>
      </div>
    </section>
  );
};
