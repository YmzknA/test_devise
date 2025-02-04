class UsersController < ApplicationController
  before_action :authenticate_user!, only: %i[show]

  def show
    @user = User.find(params[:id])
    @user_posts = @user.posts.order(created_at: :desc)
    # @user_postsの一件目の日付が今日の日付かどうかを判定

    return unless @user_posts.present?

    first_post_date = @user_posts.first.created_at.in_time_zone('Tokyo').to_date
    today = Time.now.to_date
    @today_post = (first_post_date == today)
  end
end
