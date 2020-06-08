class Api::FriendshipsController < ApplicationController

    def index
        @friendships = Friendship.includes(:friend).where(user_id: params[:user_id])
        render :index
    end

    def create
        @friendship = Friendship.new(friend_params)
    
        if @friendship.save
          render :show
        else
          render json: @friendship.errors.full_messages, status: 422
        end
    end

    def destroy
        @friendship = Friendship.find(params[:id])
    
        if @friendship.destroy
          render :show
        else
          render json: @friendship.errors.full_messages, status: 422
        end
    end

    private
    
    def friend_params
        params.require(:post).permit(:user_id, :friend_id)
    end

end