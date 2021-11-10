class AddUserRefToMapAsset < ActiveRecord::Migration[6.1]
  def change
    add_reference :map_assets, :user, null: false, foreign_key: true
  end
end
