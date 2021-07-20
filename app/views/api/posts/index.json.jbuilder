json.posts do  
      @posts.each do |post|
            @likes = post.likes.map {|like| like.user_id}
            json.set! post.id do
                  json.partial! 'post', post: post
                  json.likes @likes
            end
      end
end



  


  