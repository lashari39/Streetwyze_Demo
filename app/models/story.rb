class Story < ApplicationRecord
    include PgSearch::Model

  pg_search_scope :search_by_place, against: :place, using: { tsearch: { prefix: true, any_word: true } }
  pg_search_scope :search_by_address, against: :address, using: { tsearch: { prefix: true, any_word: true } }
  pg_search_scope :search_by_category, against: :category, using: { tsearch: { prefix: true, any_word: true } }
  pg_search_scope :search_by_word, against: [:place, :address, :category], using: { tsearch: { any_word: true } }


	belongs_to :map_asset
  belongs_to :user

	has_rich_text :description
	has_many_attached :images

  def self.search_by_author(story)
    where(user_id: User.find_by('lower(username) = ?', story.downcase))
  end
  def self.search_by_date(start_date, finish_date )
    where(created_at: start_date .. finish_date)
  end

	CATEGORY = ['Art', 'Business', 'Child Care', 'Education', 'Environment', 'Food', 'Health', 'Housing', 'Industry', 'Safety', 'Transportation']
end
