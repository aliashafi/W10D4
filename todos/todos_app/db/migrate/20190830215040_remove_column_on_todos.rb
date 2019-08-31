class RemoveColumnOnTodos < ActiveRecord::Migration[5.2]
  def change
    remove_column :todos, :todos
    add_column :todos, :todo, :string
  end
end
