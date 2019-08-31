class Todo < ApplicationRecord
  validates :done, inclusion: { in: [true, false] }
  validates :todo, presence: true
end
