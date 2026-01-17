import json

all_products_path = '/Users/suniltomar/Desktop/workspace/electricalMart/src/data/all_products.json'
products_path = '/Users/suniltomar/Desktop/workspace/electricalMart/src/data/products.json'
catalogue_id = "61260ee2b0a3a"
base_url = "https://vyapar-catalog.vypcdn.in/"

def update_images():
    with open(all_products_path, 'r') as f:
        all_data = json.load(f)
    
    with open(products_path, 'r') as f:
        products = json.load(f)
    
    catalogue_items = all_data.get('props', {}).get('pageProps', {}).get('catalogueItems', [])
    items_map = {item.get('itemName', '').strip().lower(): item for item in catalogue_items}
    
    updated_count = 0
    missing_images = []
    
    for p in products:
        name_key = p['name'].strip().lower()
        item_data = items_map.get(name_key)
        
        if item_data:
            img_list = item_data.get('itemImageList', [])
            item_id = item_data.get('itemId')
            unique_folder_id = item_data.get('uniqueImageFolderId')
            updated_date = item_data.get('imageUpdatedDate', '')
            
            if img_list and item_id and unique_folder_id:
                # https://vyapar-catalog.vypcdn.in/{catalogueId}/{catalogueId}{itemId}{uniqueImageFolderId}/{imageName}.jpg?v={imageUpdatedDate}
                folder_path = f"{catalogue_id}{item_id}{unique_folder_id}"
                urls = []
                for img_name in img_list:
                    url = f"{base_url}{catalogue_id}/{folder_path}/{img_name}.jpg"
                    if updated_date:
                        url += f"?v={updated_date}"
                    urls.append(url)
                
                p['images'] = urls
                updated_count += 1
            else:
                missing_images.append(p['name'])
        else:
            missing_images.append(p['name'])
            
    with open(products_path, 'w') as f:
        json.dump(products, f, indent=2)
    
    print(f"Updated images for {updated_count} products.")
    print(f"Products still missing images: {len(missing_images)}")
    return missing_images

if __name__ == "__main__":
    missing = update_images()
    if missing:
        with open('missing_images.txt', 'w') as f:
            for m in missing:
                f.write(m + '\n')
