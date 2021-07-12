class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :liked_id
      t.string :type
      t.integer :value

      t.timestamps
    end
  end
end
