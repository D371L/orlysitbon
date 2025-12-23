#!/usr/bin/env python3
import os
import shutil

src = '/home/d371l/Desktop/assets'
dst = 'public/assets'

# Remove old directory if exists
if os.path.exists(dst):
    shutil.rmtree(dst)

# Create directory
os.makedirs(dst, exist_ok=True)

# Copy all folders
folders_copied = []
for item in os.listdir(src):
    src_path = os.path.join(src, item)
    dst_path = os.path.join(dst, item)
    if os.path.isdir(src_path):
        shutil.copytree(src_path, dst_path)
        folders_copied.append(item)
        print(f"Copied: {item}")

print(f"\nTotal folders copied: {len(folders_copied)}")
print(f"Folders: {', '.join(folders_copied)}")

# Count images
total_images = 0
for root, dirs, files in os.walk(dst):
    total_images += len([f for f in files if f.endswith('.jpg')])
print(f"Total images: {total_images}")

