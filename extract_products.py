import json
import re

def extract_products(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The items are divs with class "catalogue-items_item-card__yxu80"
    # We'll find all occurrences of this class and then extract details for each.
    
    # Split content by the item card class to isolate each product
    blocks = content.split('class="catalogue-items_item-card__yxu80"')
    # The first block is header stuff, skip it
    blocks = blocks[1:]
    
    products = []
    for i, block in enumerate(blocks):
        # We only want to look at the block until the next item card would start
        # or until a reasonable end of a card.
        
        # Extract name: <div class="catalogue-items_card-title__2yXbR ...">Name</div>
        name_match = re.search(r'class="catalogue-items_card-title__2yXbR[^>]*>([^<]+)</div>', block)
        name = name_match.group(1).strip() if name_match else "Unknown Item"
        
        # Extract price: find <span>₹</span> then digits
        # <div class="catalogue-items_card-text__vH2Uy ..."><span>₹</span> 1560</div>
        price_match = re.search(r'<span>₹</span>\s*([\d,.]+)', block)
        price_str = price_match.group(1).replace(',', '').strip() if price_match else "0"
        try:
            price = float(price_str)
        except ValueError:
            price = 0.0
            
        # Extract unit: <span class="catalogue-items_item-unit__tIIdR ...">per Nos</span>
        unit_match = re.search(r'class="catalogue-items_item-unit__tIIdR[^>]*>per\s+([^<]+)</span>', block)
        unit = unit_match.group(1).strip() if unit_match else "Nos"
        
        # Extract image: <img src="URL" ...>
        img_match = re.search(r'<img[^>]+src="([^"]+)"', block)
        img = img_match.group(1) if img_match else ""
        if not img or "product-placeholder" in img:
            img = "https://vyapar-catalog.vypcdn.in/product-placeholder.webp"

        products.append({
            "id": f"p{i+1}",
            "name": name,
            "price": price,
            "quantity": unit,
            "category": "General",
            "images": [img]
        })
    
    return products

if __name__ == "__main__":
    products = extract_products('/Users/suniltomar/Desktop/workspace/electricalMart/temp_products.html')
    with open('/src/data/products_old.json', 'w') as f:
        json.dump(products, f, indent=2)
    print(f"Successfully extracted {len(products)} products.")
