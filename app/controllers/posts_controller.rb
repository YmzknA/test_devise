class PostsController < ApplicationController
  before_action :set_post, only: %i[ show destroy ]
  before_action :authenticate_user!, only: %i[ create destroy show index ]

  # GET /posts or /posts.json
  def index
    @posts = Post.all.order(created_at: :desc)
  end

  # GET /posts/1 or /posts/1.json
  def show; end

  # POST /posts or /posts.json
  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        redirect_to posts_path, notice: "宣言しました！"
      else
        render :index, status: :unprocessable_entity
      end
    end
  end

  # DELETE /posts/1 or /posts/1.json
  def destroy
    @post.destroy!

    redirect_to posts_path, status: :see_other, notice: "削除しました"
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(:name, :option, :user_id)
  end
end
