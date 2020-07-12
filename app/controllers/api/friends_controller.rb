class Api::FriendsController < ApplicationController

    def index
        @friendships = Friendship.includes(:friend).where(user_id: params[:user_id], friend_id: params[:user_id])
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
        @friendship = Friendship.where(user_id: params[:user_id], friend_id: params[:id]).or(Friendship.where(user_id: params[:id], friend_id: params[:user_id]))
        @data = {user_id: params[:user_id], friend_id: params[:id], status: @friendship[0].accepted ? "accepted" : "pending"}
        if @friendship[0]
          @friendship[0].destroy
          @data
          render :delete
        else
          render json: @friendship.errors.full_messages, status: 422
        end
    end

    private
    
    def friend_params
        params.require(:post).permit(:user_id, :friend_id)
    end

end