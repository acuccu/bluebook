class Like < ApplicationRecord

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :liked,
    foreign_key: :post_id,
    class_name: :Post
end