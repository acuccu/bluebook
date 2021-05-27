json.friendships do 
    json.set! @userId do  
        json.pending @pending[0]
    end
  end