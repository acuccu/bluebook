class Api::LikesController < ApplicationController

    def index 
        @likes = Post.likes
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            index
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = current_user.likes.find(params[:id])
        @like.destroy
    end

protected
    def like_params
        params.require(:like).permit(:value, :user_id, :reference_id, :reference_type)
    end

end