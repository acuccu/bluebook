# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{first_name: 'Demo', last_name: 'Turtle', email:'demo@bluebook.com', password:'demodemo', gender:'other', cellphone:'0123456789', avatar:1, banner: 'sea.png'}])
User.create([{first_name: 'Ecco', last_name: 'Dolphin', email:'dolphin@bluebook.com', password:'demodemo', gender:'male', cellphone:'1023456789', avatar:2, banner: 'eccob.jpg'}])
User.create([{first_name: 'Jelly', last_name: 'Fish', email:'jfish@bluebook.com', password:'demodemo', gender:'other', cellphone:'1203456789', avatar:3, banner: 'jfishb.jpg'}])
User.create([{first_name: 'Antonio', last_name: 'Cuccu', email:'cuccu.a@gmail.com', password:'demodemo', gender:'male', cellphone:'1230456789', avatar:4, banner: 'cuccub.png'}])
User.create([{first_name: 'Willy', last_name: 'Free', email:'free@bluebook.com', password:'demodemo', gender:'female', cellphone:'1234506789', avatar:5, banner: 'freeb.jpg'}])
User.create([{first_name: 'Marlin', last_name: 'Clown', email:'clown@bluebook.com', password:'demodemo', gender:'male', cellphone:'1234567089', avatar:6, banner: 'clownb.jpg'}])
User.create([{first_name: 'Stanley', last_name: 'Swordfish', email:'sfish@bluebook.com', password:'demodemo', gender:'male', cellphone:'2134567809', avatar:7, banner: 'sfishb.jpg'}])
User.create([{first_name: 'Nicky', last_name: 'Butterfly', email:'bfish@bluebook.com', password:'demodemo', gender:'female', cellphone:'2134567089', avatar:8, banner: 'bfishb.jpeg'}])

Friendship.create([{accepted:false, user_id:2, friend_id:1}])
Friendship.create([{accepted:true, user_id:1, friend_id:3}])


