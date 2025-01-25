class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  private

  #dviseのログイン後、ログアウト後のリダイレクト先を設定する
  def after_sign_in_path_for(resource_or_scope)
    posts_path
  end

  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end
