json.friendships @friends.each do |friendship|
    json.partial! 'friendship', friendship: friendship
end



json.friends do
json.set! @friends.first.author.id do
  json.partial! "api/users/user", user: @friends.first.author
end
end