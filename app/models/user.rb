class User < ApplicationRecord
 attr_reader :password

validates :first_name, :last_name, :dob, :password_digest, :email, :session_token, presence: true
validates :email, :cellphone, :session_token, uniqueness: true
validates :password, length: { minimum: 6 }, allow_nil: true

after_initialize :ensure_session_token

def self.define_by_credentials (email, cellphone, password) 
    user = User.find_by(username: username) || User.find_by(cellphone: cellphone)
    return nil unless user 
    user.is_password?(password) ? user : nil 
end

def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
end

def reset_session_token!
    self.session_token = SecureRandom.base64(16)
    return self.session_token
end

def ensure_session_token
    self.session_toke ||= SecureRandom.base64(16)
end


end
