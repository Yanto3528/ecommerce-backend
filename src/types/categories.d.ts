import { Seo } from "./seo";

export interface ICategory {
  name: string;
  description?: string;
  backgroundImage?: {
    url: string;
    alt?: string;
  };
  slug: string;
  seo?: Seo;
}
