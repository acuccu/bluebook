class Api::FriendsController < ApplicationController

    def index
        @friendships = Friendship.where(user_id: params[:user_id]).or(Friendship.where(friend_id: params[:user_id]))
        @user = current_user
        @userId = params[:user_id].to_i
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

    def update

        @friendship = Friendship.where(user_id: params[:user_id], friend_id: params[:id]).or(Friendship.where(user_id: params[:id], friend_id: params[:user_id]))  
        @user = current_user

      if @friendship[0].accepted
          @friendship[0].update_attribute(:accepted, false)

          @friendships = Friendship.where(user_id: @user.id).or(Friendship.where(friend_id: @user.id))
          @pending = @friendships.select {|fr| fr.accepted == false}
          @accepted = @friendships.select {|fr| fr.accepted == true}
    
          render :index
      elsif @friendship[0].accepted == false
        @friendship[0].update_attribute(:accepted, true)

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