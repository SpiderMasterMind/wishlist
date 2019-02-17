json.created_at @list.created_at
json.updated_at @list.updated_at
json.id @list.id
json.title @list.title
json.description @list.description
json.items @items.each do |item|
  json.extract! item, :created_at, :updated_at, :id, :name, :description
end
