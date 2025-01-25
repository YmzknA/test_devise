class PostsController < ApplicationController
  before_action :set_post, only: %i[ show destroy ]
  before_action :authenticate_user!, only: %i[ create destroy show index ]

  def index
    @posts = Post.all.order(created_at: :desc)
  end

  def show; end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to posts_path, notice: "宣言しました！"
    else
      render :index, status: :unprocessable_entity
    end
  end

  def destroy
    check_user(@post)
    @post.destroy!
    redirect_to posts_path, status: :see_other, notice: "削除しました"
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:name, :option, :user_id)
  end

  def check_user(post)
    if post.user_id != current_user.id
      redirect_to posts_path, notice: "不正なアクセスです" 
    end
  end
end
