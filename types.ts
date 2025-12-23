
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  title: string;
  products: Product[];
}

export interface NavItem {
  label: string;
  url: string;
  isExternal: boolean;
}
