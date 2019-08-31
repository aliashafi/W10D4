class CreateTableTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :todos, null: false
      t.boolean :done, null: false;
    end
  end
end
