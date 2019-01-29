require 'rails_helper'

RSpec.describe 'item request actions', type: :request do
  it 'returns requested item json' do
    let!(:item) { FactoryBot.create(:item) }

    get "/api/v1/items/#{item.id}.json/"
    expect(JSON.parse(response.body).fetch('id')).to eql(item.id)
  end

  it 'updates item and returns updated json'
  it 'destroys an item and returns the item json'
end
