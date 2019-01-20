json.lists @lists do |list|
  json.list_id list.id
  json.title list.title
  json.description list.description
  json.items list.items.each do |item|
    json.item_id item.id
    json.name item.name
    json.description item.description
    json.url item.url
  end
end
