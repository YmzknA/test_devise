class AddUseridToPosts < ActiveRecord::Migration[7.2]
  def change
    add_column :posts, :user_id, :integer, null: false
  end
end
