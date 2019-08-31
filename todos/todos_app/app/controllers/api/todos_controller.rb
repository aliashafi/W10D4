class Api::TodosController < ApplicationController
  def index
    todos = Todo.all()
    render json: todos
  end

  def show
    render json: Todo.find(params[:id])
  end

  def edit
    todo = Todo.find(params[:id])

    render json: todo
  end

  def update
    todo = Todo.find(params[:id])

    if todo.update(todo_params)
      render json: todo
    else
      render json: todo.errors.full_messages, status: 422
    end
  end

  def create
    todo = Todo.new(todo_params)

    if todo.save
      render json: todo
    else
      render json: todo.errors.full_messages, status: 422
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy()
  end

  private

  def todo_params
    params.require(:todo).permit(:todo)
  end

end
