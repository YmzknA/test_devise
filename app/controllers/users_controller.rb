class UsersController < ApplicationController
  before_action :authenticate_user!, only: %i[show]

  def show
    @user = User.find(params[:id])
    @user_posts = @user.posts.order(created_at: :desc)
  end
end
