from PIL import Image
from collections import Counter

img_path = r'c:\Users\hebei\Desktop\Web Coteknia\assets\logo.png'
img = Image.open(img_path).convert('RGB')

# Get all pixels and count unique colors
pixels = list(img.getdata())
color_counts = Counter(pixels)

# Sort by frequency
sorted_colors = sorted(color_counts.items(), key=lambda x: x[1], reverse=True)

print("Top 15 colores encontrados en logo.png:\n")
for i, ((r, g, b), count) in enumerate(sorted_colors[:15], 1):
    hex_color = '#{0:02x}{1:02x}{2:02x}'.format(r, g, b)
    percentage = (count / len(pixels)) * 100
    print(f"{i:2d}. {hex_color}  ({r:3d}, {g:3d}, {b:3d})  - {percentage:5.2f}%  [{count:6d} pixeles]")
