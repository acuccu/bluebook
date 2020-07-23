class Api::FriendsController < ApplicationController

    def index
        @friendships = Friendship.where(user_id: params[:user_id]).or(Friendship.where(friend_id: params[:user_id]))
        @user = current_user
        @pending = @friendships.select {|fr| fr.accepted == false}
        @accepted = @friendships.select {|fr| fr.accepted == true}
        render :index
    end

    def create
        @friendship = Friendship.new(friend_params)
        
        if @friendship.save
          @user = current_user
          @friendships = Friendship.where(user_id: @user.id).or(Friendship.where(friend_id: @user.id))
          @pending = @friendships.select {|fr| fr.accepted == false}
          @accepted = @friendships.select {|fr| fr.accepted == true}

          render :index
        else
          render json: @friendship.errors.full_messages, status: 422
        end
    end

    def destroy
        @friendship = Friendship.where(user_id: params[:user_id], friend_id: params[:id]).or(Friendship.where(user_id: params[:id], friend_id: params[:user_id]))  
        if @friendship[0]
          @friendship[0].destroy

          @user = current_user
          @friendships = Friendship.where(user_id: @user.id).or(Friendship.where(friend_id: @user.id))
          @pending = @friendships.select {|fr| fr.accepted == false}
          @accepted = @friendships.select {|fr| fr.accepted == true}

          render :index
        else
          render json: @friendship.errors.full_messages, status: 422
        end
    end

    private
    
    def friend_params
        params.require(:friendship).permit(:user_id, :friend_id, :accepted)
    end

end