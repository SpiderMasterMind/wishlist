require 'rails_helper'

RSpec.describe 'item request actions', type: :request do
  it 'returns requested item json' do
    item = FactoryBot.create(:item)

    get "/api/v1/items/#{item.id}.json/"
    expect(response).to render_template(partial: '_item')
  end
end
