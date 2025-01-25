class AddOptionToPosts < ActiveRecord::Migration[7.2]
  def change
    add_column :posts, :option, :integer, null:false, default: 0
  end
end
