class MapAsset < ApplicationRecord
  CATEGORY = ['Art', 'Business', 'Child Care', 'Education', 'Environment', 'Food', 'Health', 'Housing', 'Industry', 'Safety', 'Transportation']

	validates :address, presence: true
	validates :place, presence: true

	has_rich_text :description
	has_many_attached :images
  belongs_to :user

	
end
