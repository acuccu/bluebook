class Addingwalltopost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :wall_id, :integer
  end
end
