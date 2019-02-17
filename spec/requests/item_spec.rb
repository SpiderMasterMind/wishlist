require 'rails_helper'

RSpec.describe 'item request actions', type: :request do
  let(:item) { FactoryBot.create(:item) }

  it 'returns requested item json' do
    get "/api/v1/items/#{item.id}.json/"

    expect(JSON.parse(response.body).fetch('id')).to eql(item.id)
  end

  it 'updates item and returns updated json', type: :request do
    headers = {
      "ACCEPT" => "application/json"
    }
    put "/api/v1/items/#{item.id}.json/", 
      params: { item: { id: item.id } }, 
      headers: headers

    expect(JSON.parse(response.body).fetch('id')).to eql(item.id)
  end

  it 'destroys an item and returns the item json', type: :request do
    headers = {
      "ACCEPT" => "application/json"
    }
    delete "/api/v1/items/#{item.id}.json/",
      params: { item: { id: item.id } }, 
      headers: headers

    expect(JSON.parse(response.body).fetch('id')).to eql(item.id)
  end
end
