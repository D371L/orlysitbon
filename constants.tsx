
import { Product, Category, NavItem } from './types';
import { 
  SWEET_PRODUCTS_IMAGES, 
  SALTY_PRODUCTS_IMAGES, 
  MEAL_TRAYS_IMAGES, 
  PERFECT_PACKAGES_IMAGES 
} from './utils/images';

const getImagePath = (folder: string, filename: string): string => {
  // Use English folder names (no encoding needed for ASCII)
  // For GitHub Pages, use /assets/ instead of public/assets/
  return `/assets/${folder}/${filename}`;
};

// Helper function to create products from image arrays
const createProductsFromImages = (
  images: string[],
  folderName: string,
  categoryId: string,
  baseName: string
): Product[] => {
  return images.map((image, index) => ({
    id: `${categoryId}-${index + 1}`,
    name: `${baseName} ${index + 1}`,
    description: '',
    image: getImagePath(folderName, image),
    category: categoryId,
  }));
};

export const EXTERNAL_LINKS = {
  ORDER: 'https://orlysitbon.mytabit.co.il/tabit-order?siteName=orlysitbon&step=enter',
  JOIN: 'https://customer-profile.tabit.cloud/548BE56D-7E5F-4BA7-BB2F-69772AD2961C/auth/login',
  GIFT_CARD: 'https://tabitisrael.co.il/gift-cards/create-card?accountGuid=548BE56D-7E5F-4BA7-BB2F-69772AD2961C&step=0',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'גיפט קארד', url: EXTERNAL_LINKS.GIFT_CARD, isExternal: true },
  { label: 'הצטרפות למועדון', url: EXTERNAL_LINKS.JOIN, isExternal: true },
  { label: 'לרכישה בפטיסרי', url: EXTERNAL_LINKS.ORDER, isExternal: true },
];

export const GALLERY_CATEGORIES: Category[] = [
  {
    id: 'sweet',
    title: 'מוצרים מתוקים',
    products: createProductsFromImages(
      SWEET_PRODUCTS_IMAGES,
      'sweet-products',
      'sweet',
      'מוצר מתוק'
    ),
  },
  {
    id: 'salty',
    title: 'מוצרים מלוחים',
    products: createProductsFromImages(
      SALTY_PRODUCTS_IMAGES,
      'salty-products',
      'salty',
      'מוצר מלוח'
    ),
  },
  {
    id: 'trays',
    title: 'מגשי ארוחה',
    products: createProductsFromImages(
      MEAL_TRAYS_IMAGES,
      'meal-trays',
      'trays',
      'מגש ארוחה'
    ),
  },
  {
    id: 'packages',
    title: 'מארזים מושלמים',
    products: createProductsFromImages(
      PERFECT_PACKAGES_IMAGES,
      'perfect-packages',
      'packages',
      'מארז מושלם'
    ),
  },
];
