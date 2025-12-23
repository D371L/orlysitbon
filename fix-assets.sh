#!/bin/bash

cd /home/d371l/Desktop/assets

# Rename folders
if [ -d "מוצרים מתוק" ] && [ ! -d "sweet-products" ]; then
    mv "מוצרים מתוק" "sweet-products"
    echo "Renamed: מוצרים מתוק -> sweet-products"
fi

if [ -d "מוצרים מלוח" ] && [ ! -d "salty-products" ]; then
    mv "מוצרים מלוח" "salty-products"
    echo "Renamed: מוצרים מלוח -> salty-products"
fi

if [ -d "מגשי ארוח" ] && [ ! -d "meal-trays" ]; then
    mv "מגשי ארוח" "meal-trays"
    echo "Renamed: מגשי ארוח -> meal-trays"
fi

if [ -d "מארזים מושלמים" ] && [ ! -d "perfect-packages" ]; then
    mv "מארזים מושלמים" "perfect-packages"
    echo "Renamed: מארזים מושלמים -> perfect-packages"
fi

echo ""
echo "Current folders:"
ls -d */

cd /home/d371l/Projects/orlysitbon

# Copy to public
rm -rf public/assets
mkdir -p public/assets

cp -r /home/d371l/Desktop/assets/* public/assets/

echo ""
echo "Copied to public/assets/"
ls -d public/assets/*/

