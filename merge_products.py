import json
import os

all_products_path = '/Users/suniltomar/Desktop/workspace/electricalMart/src/data/all_products.json'
products_path = '/src/data/products.json'

def merge_products():
    with open(all_products_path, 'r') as f:
        all_data = json.load(f)
    
    with open(products_path, 'r') as f:
        existing_products = json.load(f)
    
    catalogue_items = all_data.get('props', {}).get('pageProps', {}).get('catalogueItems', [])
    existing_names = {p['name'].strip().lower() for p in existing_products}
    
    next_id_num = 1
    if existing_products:
        ids = [int(p['id'][1:]) for p in existing_products if p['id'].startswith('p') and p['id'][1:].isdigit()]
        if ids:
            next_id_num = max(ids) + 1
    
    new_counts = 0
    print(f"Checking {len(catalogue_items)} items from all_products.json...")
    for item in catalogue_items:
        name = item.get('itemName', '').strip()
        if not name:
            continue
            
        is_missing = name.lower() not in existing_names
        # print(f"Checking: {name} - {'MISSING' if is_missing else 'EXISTS'}")
        
        if is_missing:
            price = item.get('discountedSalePrice')
            if price is None:
                price = item.get('itemSaleUnitPrice', 0)
                
            unit = item.get('primaryUnitShortName', 'Nos')
            
            category = "General"
            cat_list = item.get('itemCategoryName', [])
            if isinstance(cat_list, list) and len(cat_list) > 0:
                category = cat_list[0]
            elif isinstance(cat_list, str) and cat_list:
                category = cat_list
            
            new_product = {
                "id": f"p{next_id_num}",
                "name": name,
                "price": price,
                "unit": unit,
                "category": category,
                "images": []
            }
            existing_products.append(new_product)
            existing_names.add(name.lower())
            print(f"Adding: {name}")
            next_id_num += 1
            new_counts += 1
            
    if new_counts > 0:
        with open(products_path, 'w') as f:
            json.dump(existing_products, f, indent=2)
        print(f"Successfully added {new_counts} missing products.")
    else:
        print("No missing products found.")

if __name__ == "__main__":
    merge_products()
