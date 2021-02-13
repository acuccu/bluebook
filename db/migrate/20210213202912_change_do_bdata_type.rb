class ChangeDoBdataType < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :dob
    add_column :users, :dob, :string
  end
end
