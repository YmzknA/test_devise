class PostsController < ApplicationController
  before_action :set_post, only: %i[show destroy]
  before_action :authenticate_user!, only: %i[create destroy show]

  def index
    @posts = Post.order(created_at: :desc).limit(50)

    return unless @posts.present?

    first_post_date = @posts.first.created_at.in_time_zone('Tokyo').to_date
    today = Time.now.to_date
    @today_post = (first_post_date == today)
  end

  def show; end

  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        @post.broadcast_prepend_later_to('posts_channel')
        format.html { redirect_to posts_path, notice: '宣言しました！' }
        format.turbo_stream { redirect_to posts_path, notice: '宣言しました！' }
      else
        format.html { render :index, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    check_user(@post)
    @post.destroy!
    redirect_to posts_path, status: :see_other, notice: '削除しました'
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:name, :option, :user_id)
  end

  def check_user(post)
    return unless post.user_id != current_user.id

    redirect_to posts_path, notice: '不正なアクセスです'
  end
end
