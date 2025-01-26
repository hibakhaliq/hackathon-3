export interface Product {
  _id: string;
  name: string;
  image: string;
  slug: string;
  category: string;
  price: number;
}

export interface ProductSingle {
  _id: string;
  name: string;
  images: any;
  description: string;
  slug: string;
  category: string;
  price: number;
  price_id: string;
}


export interface ProductCart{
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;   
  price_id: string;
}
