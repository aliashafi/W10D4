require 'test_helper'

class TodosControllerTest < ActionDispatch::IntegrationTest
  test "should get title" do
    get todos_title_url
    assert_response :success
  end

  test "should get body" do
    get todos_body_url
    assert_response :success
  end

  test "should get done:boolean" do
    get todos_done:boolean_url
    assert_response :success
  end

end
