export interface CreateProductDto {
  name: string;
  description: string;
  slug: string;
  price: number;
  imageUrl: string[];
  quantity: number;
  seoTitle?: string;
  seoDescription?: string;
}
