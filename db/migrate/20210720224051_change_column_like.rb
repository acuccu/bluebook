class ChangeColumnLike < ActiveRecord::Migration[6.1]
  def change
    rename_column :likes, :liked_id, :post_id
  end
end
