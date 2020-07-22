json.currentUserId do 
    @user.id
end

json.set! @user.id do 
    json.pending do 
        json.set! ( @user.id == @friendship.user_id ? @friendship.friend_id : @friendship.user_id) do 
            json.extract! @friendship, :user_id, :friend_id, :accepted
        end
    end
end