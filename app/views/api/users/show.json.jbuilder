    json.user do
        json.partial! "api/users/user", user: @user
    end
    json.friends do 
        @friends.each do |friend|
            json.set! friend.id do
                json.extract! friend, :id, :first_name, :last_name, :email, :dob, :gender, :bio, :location, :work_place, :education, :avatar
            end
        end
    end
    json.friendships do 
        json.set! @user.id do 
            json.accepted do
            @accepted.each do |friendship|
                json.set! friendship.id do 
                    json.extract! friendship, :id, :user_id, :friend_id, :accepted
                end
            end
            end
            json.pending do 
            @pending.each do |pend|
                json.set! pend.id do 
                    json.extract! pend, :id, :user_id, :friend_id, :accepted
                end
            end
            end
        end
    end
        
