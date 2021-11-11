class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
      t.string :place
      t.string :address
      t.string :rate
      t.string :review
      t.string :category

      t.timestamps
    end
  end
end
