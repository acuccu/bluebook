json.posts @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
    end 
end

json.author do
  json.set! @posts.first.author.id do
    json.partial! "api/users/user", user: @posts.first.author
  end
end

  


  