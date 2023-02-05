export interface CreateCategoryDto {
  name: string;
  description?: string;
  backgroundImageUrl?: string;
  backgroundImageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  slug: string;
}
