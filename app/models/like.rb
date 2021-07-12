class Like < ApplicationRecord
    validates_presence_of :value, :user, :liked
    validates :user_id, uniqueness: { scope: [:liked_id, :liked_type] }
    validates :value, inclusion: 0..4

    belongs_to :user
    belongs_to :liked, polymorphic: true
end
