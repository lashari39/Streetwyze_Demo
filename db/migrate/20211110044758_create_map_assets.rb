class CreateMapAssets < ActiveRecord::Migration[6.1]
  def change
    create_table :map_assets do |t|
      t.string :place
      t.string :address
      t.string :category
      t.string :rate
      t.string :review

      t.timestamps
    end
  end
end
