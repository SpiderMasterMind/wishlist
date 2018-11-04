json.extract! list, :id, :title, :comments, :url, :created_at, :updated_at
json.url list_url(list, format: :json)
