class User < ApplicationRecord
 attr_reader :password

validates :first_name, :last_name, :password_digest, :email, :session_token, presence: true 
validates :email, :cellphone, :session_token, uniqueness: true
validates :password, length: { minimum: 6 }, allow_nil: true

after_initialize :ensure_session_token

def self.find_by_credentials (auth, password) 
    user = User.find_by(email: auth) || User.find_by(cellphone: auth)
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
    self.save!
    return self.session_token
end

def ensure_session_token
    self.session_token ||= SecureRandom.base64(16)
end

has_one_attached :photo


end
