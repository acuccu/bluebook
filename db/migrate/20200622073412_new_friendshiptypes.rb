class NewFriendshiptypes < ActiveRecord::Migration[5.2]
  def change
    remove_column :friendships, :user_id
    remove_column :friendships, :friend_id
    add_column :friendships, :user_id, :integer
    add_column :friendships, :friend_id, :integer
  end
end
