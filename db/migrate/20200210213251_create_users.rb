class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :cellphone
      t.datetime :dob
      t.string :gender
      t.string :password_digest
      t.string :session_token
      t.string :bio
      t.string :location
      t.string :work_place
      t.string :education

      t.timestamps
    end
    add_index :users, :first_name, null: false
    add_index :users, :last_name, null: false
    add_index :users, :email, unique: true, null: false
    add_index :users, :cellphone, unique: true
    add_index :users, :session_token, unique: true, null: false
  end
end
