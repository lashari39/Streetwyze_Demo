class MapAsset < ApplicationRecord
	has_many :stories, dependent: :delete_all
	belongs_to :user

	validates :address, presence: true
	validates :place, presence: true

	has_rich_text :description
	has_many_attached :images

	CATEGORY = ['Art', 'Business', 'Child Care', 'Education', 'Environment', 'Food', 'Health', 'Housing', 'Industry', 'Safety', 'Transportation']
end
