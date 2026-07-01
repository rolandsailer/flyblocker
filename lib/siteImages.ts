export const SITE_IMAGES = {
  entrance: '/images/entrance.jpg',
  gastronomie: '/images/gastronomie.jpg',
  lodge: '/images/lodge.jpg',
  shop: '/images/shop.jpg',
  baeckerei: '/images/baeckerei.jpg',
  unit: '/images/unit.jpg',
  industrie: '/images/industrie.jpg',
} as const;

export const HERO_CAROUSEL_SLIDES = [
  SITE_IMAGES.entrance,
  SITE_IMAGES.gastronomie,
  SITE_IMAGES.shop,
  SITE_IMAGES.unit,
] as const;

export function tabImageSrc(key: keyof typeof SITE_IMAGES): string {
  return SITE_IMAGES[key];
}
