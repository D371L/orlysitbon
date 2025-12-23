// Utility function to get image paths from assets folder
// In Vite, files in public folder are served from root

const getImagePath = (folder: string, filename: string): string => {
  return `/assets/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
};

// Helper to get all images from a folder
export const getImagesFromFolder = (folderName: string, fileNames: string[]): string[] => {
  return fileNames.map(filename => getImagePath(folderName, filename));
};

// Image lists for each category
export const SWEET_PRODUCTS_IMAGES = [
  '157A3325.jpg',
  '157A3370.jpg',
  '157A3372.jpg',
  '157A3548.jpg',
  '157A3551.jpg',
  '157A3560.jpg',
  '157A3854.jpg',
  '157A9415.jpg',
  '157A9428.jpg',
  '157A9442.jpg',
  '157A9455.jpg',
  '157A9471.jpg',
  '157A9532.jpg',
];

export const SALTY_PRODUCTS_IMAGES = [
  '157A2229.jpg',
  '157A2250.jpg',
  '157A2260.jpg',
  '157A2276.jpg',
  '157A2278.jpg',
  '157A2293.jpg',
  '157A3372.jpg',
  '157A3435.jpg',
  '157A3456.jpg',
  '157A3500.jpg',
  '157A3580.jpg',
  '157A3637.jpg',
  '157A3649.jpg',
  '157A3654.jpg',
  '157A3673.jpg',
  '157A3774.jpg',
  '157A9509.jpg',
  '157A9518.jpg',
  '157A9563.jpg',
  '157A9589.jpg',
];

export const MEAL_TRAYS_IMAGES = [
  '157A9192.jpg',
  '157A9199.jpg',
  '157A9207.jpg',
  '157A9226.jpg',
  '157A9245.jpg',
  '157A9252.jpg',
  '157A9268.jpg',
  '157A9288.jpg',
  '157A9300.jpg',
  '157A9315.jpg',
  '157A9331.jpg',
  '157A9339.jpg',
  '157A9348.jpg',
  '157A9373.jpg',
];

export const PERFECT_PACKAGES_IMAGES = [
  '157A2649.jpg',
  '157A2656.jpg',
  '157A2678.jpg',
  '157A2693.jpg',
  '157A2697.jpg',
  '157A2707.jpg',
  '157A2721.jpg',
  '157A2735.jpg',
  '157A2744.jpg',
  '157A2754.jpg',
  '157A2773.jpg',
  '157A2775.jpg',
  '157A2776.jpg',
  '157A2789.jpg',
  '157A2807.jpg',
];

