class Post < ApplicationRecord
  validates :title, presence: true, length: {maximum:255}
  validates_inclusion_of :is_bloggable, in:[true, false]
end