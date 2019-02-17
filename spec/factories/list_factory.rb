FactoryBot.define do
  factory :list do
    title { 'List title'}
    description { 'List description' }
    trait :with_item do
      after(:create) do |asset, v|
        FactoryBot.create(:item, lists: [asset])
      end
    end
  end
end
 
