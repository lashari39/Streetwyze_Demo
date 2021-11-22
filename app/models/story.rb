class Story < ApplicationRecord
  CATEGORY = ['Art', 'Business', 'Child Care', 'Education', 'Environment', 'Food', 'Health', 'Housing', 'Industry', 'Safety', 'Transportation']
  
	has_rich_text :description
	has_many_attached :images
  belongs_to :map_asset
  belongs_to :user
end
