class AddAssetRefToStory < ActiveRecord::Migration[6.1]
  def change
    add_reference :stories, :map_asset, null: false, foreign_key: true
  end
end
