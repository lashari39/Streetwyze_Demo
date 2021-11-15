class Story < ApplicationRecord
	belongs_to :map_asset
  belongs_to :user

	has_rich_text :description
	has_many_attached :images

	CATEGORY = ['Art', 'Business', 'Child Care', 'Education', 'Environment', 'Food', 'Health', 'Housing', 'Industry', 'Safety', 'Transportation']
end
