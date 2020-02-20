json.posts @posts.each do |post|
      json.partial! 'post', post: post
end



json.author do
  json.set! @posts.first.author.id do
    json.partial! "api/users/user", user: @posts.first.author
  end
end

  


  