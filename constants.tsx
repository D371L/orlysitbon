
import { Product, Category, NavItem } from './types';

export const EXTERNAL_LINKS = {
  ORDER: 'https://orlysitbon.mytabit.co.il/tabit-order?siteName=orlysitbon&step=enter',
  JOIN: 'https://customer-profile.tabit.cloud/548BE56D-7E5F-4BA7-BB2F-69772AD2961C/auth/login',
  GIFT_CARD: 'https://tabitisrael.co.il/gift-cards/create-card?accountGuid=548BE56D-7E5F-4BA7-BB2F-69772AD2961C&step=0',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'לרכישה בפטיסרי', url: EXTERNAL_LINKS.ORDER, isExternal: true },
  { label: 'הצטרפות למועדון', url: EXTERNAL_LINKS.JOIN, isExternal: true },
  { label: 'גיפט קארד', url: EXTERNAL_LINKS.GIFT_CARD, isExternal: true },
];

export const GALLERY_CATEGORIES: Category[] = [
  {
    id: 'cakes',
    title: 'עוגות מעוצבות',
    products: [
      { id: 'c1', name: 'עוגת שכבות פירות יער', description: 'שכבות של טורט אוורירי with קרם מסקרפונה ופירות יער טריים', image: 'https://picsum.photos/seed/cake1/600/600', category: 'cakes' },
      { id: 'c2', name: 'עוגת שוקולד מלכותית', description: 'שוקולד בלגי איכותי, גנאש עשיר ונגיעות אגוזי לוז', image: 'https://picsum.photos/seed/cake2/600/600', category: 'cakes' },
      { id: 'c3', name: 'טארט לימון ומרנג', description: 'בצק פריך חמאתי, קרם לימון חמצמץ ומרנג שוויצרי צרוב', image: 'https://picsum.photos/seed/cake3/600/600', category: 'cakes' },
    ],
  },
  {
    id: 'pastries',
    title: 'מאפים טריים',
    products: [
      { id: 'p1', name: 'קרואסון חמאה קלאסי', description: 'מאפה שכבות פריך with חמאה צרפתית משובחת', image: 'https://picsum.photos/seed/pastry1/600/600', category: 'pastries' },
      { id: 'p2', name: 'מאפה דניש פיסטוק', description: 'בצק שמרים עשיר עם קרם פיסטוק ודובדבני אמרנה', image: 'https://picsum.photos/seed/pastry2/600/600', category: 'pastries' },
    ],
  },
  {
    id: 'desserts',
    title: 'קינוחי כוסות',
    products: [
      { id: 'd1', name: 'טירמיסו איטלקי', description: 'בישקוטי ספוגים באספרסו עם קרם זביונה עדין', image: 'https://picsum.photos/seed/dessert1/600/600', category: 'desserts' },
      { id: 'd2', name: 'מוס שוקולד לבן ופטל', description: 'מוס אוורירי בתוך כוס מעוצבת עם שכבת קולי פטל', image: 'https://picsum.photos/seed/dessert2/600/600', category: 'desserts' },
    ],
  },
  {
    id: 'packages',
    title: 'מארזים מפנקים',
    products: [
      { id: 'm1', name: 'מארז "בוקר מתוק"', description: 'מבחר מאפים, ריבות עבודת יד ועוגיות חמאה', image: 'https://picsum.photos/seed/package1/600/600', category: 'packages' },
      { id: 'm2', name: 'קופסת מקרונים צבעונית', description: '12 יחידות של מקרונים בטעמים משתנים', image: 'https://picsum.photos/seed/package2/600/600', category: 'packages' },
    ],
  },
];
