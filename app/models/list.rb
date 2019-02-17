class List < ApplicationRecord
  has_many :list_items
  has_many :items, through: :list_items

  # scope method, or self.scope_name
end
