require 'rails_helper'

RSpec.describe 'list request actions', type: :request do

  let(:list) { FactoryBot.create(:list, :with_item) }
  it 'returns requested list json' do
    get "/api/v1/lists/#{list.id}.json"

    expect(JSON.parse(response.body).fetch('id')).to eql(list.id)
  end

  it 'returns associated items json' do
    get "/api/v1/lists/#{list.id}.json"

    items = JSON.parse(response.body).fetch('items')
    expect(items.first.fetch("id")).to eql(list.items.first.id)
  end
end

