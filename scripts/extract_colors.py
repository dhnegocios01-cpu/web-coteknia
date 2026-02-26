from PIL import Image
import sys

# Resize and get most common colors
img_path = sys.argv[1] if len(sys.argv) > 1 else 'assets/logo.png'
img = Image.open(img_path).convert('RGBA')
# remove fully transparent pixels
pixels = [p for p in img.getdata() if p[3] > 0]
if not pixels:
    print('No visible pixels found')
    sys.exit(1)

# Resize to speed up
img_small = Image.new('RGBA', img.size)
img_small.putdata(pixels)
img_small = img_small.resize((100, 100))

# Quantize to 6 colors
result = img_small.convert('P', palette=Image.ADAPTIVE, colors=6)
palette = result.getpalette()
color_counts = sorted(result.getcolors(), reverse=True)
colors = []
for count, idx in color_counts:
    r = palette[idx*3]
    g = palette[idx*3+1]
    b = palette[idx*3+2]
    colors.append((count, (r, g, b)))

# Print colors as hex, most to least frequent
for count, (r, g, b) in colors:
    print('#{0:02x}{1:02x}{2:02x}'.format(r, g, b))
