# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{first_name: 'Demo', last_name: 'Turtle', email:'demo@bluebook.com', password:'demodemo', gender:'other', cellphone:'0123456789', avatar:1, banner: 'sea.png', location: 'anywhere', work_place: 'tech',  education: 'college', bio: 'Welcome to my app!'}])
User.create([{first_name: 'Ecco', last_name: 'Dolphin', email:'dolphin@bluebook.com', password:'demodemo', gender:'male', cellphone:'1023456789', avatar:2, banner: 'eccob.jpg',location: '16 bit ocean', work_place: 'sega mega drive', education: 'sega master system', bio: 'Retro dolphin'}])
User.create([{first_name: 'Jelly', last_name: 'Fish', email:'jfish@bluebook.com', password:'demodemo', gender:'other', cellphone:'1203456789', avatar:3, banner: 'jfishb.jpg', location: 'San Francisco', work_place: 'floating inc.',  education: 'Stanford', bio: 'bioluminescence is my passion'}])
User.create([{first_name: 'Antonio', last_name: 'Cuccu', email:'cuccu.a@gmail.com', password:'demodemo', gender:'male', cellphone:'1230456789', avatar:4, banner: 'cuccub.png', location: 'Brooklyn', work_place: 'Would love to work for you',  education: 'University of Pisa', bio: 'This is my profile, feel free to reach out!'}])
User.create([{first_name: 'Willy', last_name: 'Free', email:'free@bluebook.com', password:'demodemo', gender:'female', cellphone:'1234506789', avatar:5, banner: 'freeb.jpg', location: 'Miami', work_place: 'the atlantic ocean',  education: 'University of Miami', bio: "yes, that's my name"}])
User.create([{first_name: 'Marlin', last_name: 'Clown', email:'clown@bluebook.com', password:'demodemo', gender:'male', cellphone:'1234567089', avatar:6, banner: 'clownb.jpg', location: 'My home', work_place: 'comedy store',  education: 'some college', bio: ""}])
User.create([{first_name: 'Stanley', last_name: 'Swordfish', email:'sfish@bluebook.com', password:'demodemo', gender:'male', cellphone:'2134567809', avatar:7, banner: 'sfishb.jpg', location: "*hacker voice* I'm in", work_place: 'movie theatre',  education: 'film school', bio:"What's your favorite movie?"}])
User.create([{first_name: 'Nicky', last_name: 'Butterfly', email:'bfish@bluebook.com', password:'demodemo', gender:'female', cellphone:'2134567089', avatar:8, banner: 'bfishb.jpeg', location: 'Los Angeles', work_place: 'the pacific ocean',  education: 'UCLA', bio:'thank you for visiting!'}])

Friendship.create([{accepted:false, user_id:2, friend_id:1}])
Friendship.create([{accepted:true, user_id:1, friend_id:3}])
Friendship.create([{accepted:true, user_id:1, friend_id:4}])
Friendship.create([{accepted:true, user_id:1, friend_id:5}])
Friendship.create([{accepted:true, user_id:6, friend_id:1}])
Friendship.create([{accepted:true, user_id:1, friend_id:7}])
Friendship.create([{accepted:true, user_id:1, friend_id:8}])
Friendship.create([{accepted:true, user_id:2, friend_id:8}])


Post.create([body:'This is the demo user', author_id: 1, wall_id: 1])
Post.create([body:'throw back to a classic videogame', author_id: 2, wall_id: 1])
Post.create([body:'floating on water, very friendly', author_id: 3, wall_id: 3])
Post.create([body:'This is me', author_id: 4, wall_id: 1])
Post.create([body:'free spirited orca, I guess', author_id: 5, wall_id: 1])
Post.create([body:'class clown, everyone knows one', author_id: 6, wall_id: 1])
Post.create([body:'loves hacker movies', author_id: 7, wall_id: 1])
Post.create([body:'beauty and grace', author_id: 8, wall_id: 1])










