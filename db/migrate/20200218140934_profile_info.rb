class ProfileInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avatar, :integer
  end
end
