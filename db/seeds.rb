# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

List.create!(title: 'Groceries', description: 'Food')
List.create!(title: 'ASL', description: 'best to ask first!!')
List.create!(title: 'Music wants', description: 'just CDs for car :)')

asl_modules = %w[Partisan! Beyond_Valor For_King_And_Country Red_Barricades Rising_Sun]
asl_modules.each do |set|
  List.where(title: 'ASL').first.items << Item.create!(name: set.tr('_', ' '), description: '', url: '')
end

5.times do
  List.where(title: 'Groceries').first.items << Item.create!(name: Faker::Food.ingredient, description: Faker::Lorem.words, url: '')
end

3.times do
  List.where(title: 'Music wants').first.items << Item.create!(
    name: "#{Faker::Music.band} - #{Faker::Music.album}", 
    description: Faker::Lorem.words, 
    url: Faker::Internet.domain_name
  )
end








