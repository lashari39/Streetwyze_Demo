class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :password, format: { with: /(?=.{8,})(?=.*[A-Z])(?=.*[[:^alnum:]])/, message: 'does not contain one Uppercase and one Special characher' }
  validates :username, length: { maximum: 30, message: 'Maximun limit is 30 characters' }, presence: true
end
