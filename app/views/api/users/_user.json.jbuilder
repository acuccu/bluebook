json.extract! user, :id, :first_name, :last_name, :email, :dob, :gender, :bio, :location, :work_place, :education
json.avatar user.avatar.attached? ? user.avatar : ""

