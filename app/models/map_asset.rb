class MapAsset < ApplicationRecord
	belongs_to :user

	CATEGORY = ['Art', 'Business', 'Child Care', 'Education', 'Environment', 'Food', 'Health', 'Housing', 'Industry', 'Safety', 'Transportation']
end
