class ChangeBio < ActiveRecord::Migration[5.2]
    def change
      remove_column :users, :bio
      add_column :users, :bio, :text
    end
end
