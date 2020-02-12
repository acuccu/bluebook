class RemovinDob < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :dob
    add_column :users, :dob, :date
  end
end
