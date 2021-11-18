class MapAsset < ApplicationRecord
  CATEGORY = [ 'Art', 'Business', 'Child Care', 'Education', 'Environment', 'Food', 'Health', 'Housing', 'Industry', 'Safety', 'Transportation' ]

  validates :address, presence: true
  validates :place, presence: true

	has_many :stories, dependent: :delete_all
  has_rich_text :description
  has_many_attached :images
	belongs_to :user

  def self.search_by_author(asset)
    where(user_id: User.find_by('lower(username) = ?', asset.downcase))
  end

  def self.search_by_date(start_date, finish_date )
    where(created_at: start_date .. finish_date)
  end

  def self.to_csv
    attributes = %w{ place address category rate review description }
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |map_asset|
        csv << attributes.map{ |attr| map_asset.send(attr) }
      end
    end
  end
end
