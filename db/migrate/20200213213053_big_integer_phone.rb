class BigIntegerPhone < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :cellphone
    add_column :users, :cellphone, :bigint
  end
end
