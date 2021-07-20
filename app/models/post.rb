class Post < ApplicationRecord

    validates :body, :author_id, presence: true 
  
    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    has_many :likes, 
    foreign_key: :post_id,
    class_name: :Like,
    dependent: :destroy 

end
