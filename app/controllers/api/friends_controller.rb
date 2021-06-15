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
          index
        else
          render json: @friendship.errors.full_messages, status: 422
        end
    end

    def update

        @friendship = Friendship.where(user_id: params[:user_id], friend_id: params[:id]).or(Friendship.where(user_id: params[:id], friend_id: params[:user_id]))  
        
      if @friendship[0].accepted
          @friendship[0].update_attribute(:accepted, false)
          index

      elsif @friendship[0].accepted == false
          @friendship[0].update_attribute(:accepted, true)
          index

      else
          render json: @friendship.errors.full_messages, status: 422
      end 

    end

    def destroy

        @friendship = Friendship.where(user_id: params[:user_id], friend_id: params[:id]).or(Friendship.where(user_id: params[:id], friend_id: params[:user_id]))  
      
        if @friendship[0]
          @friendship[0].destroy
          @userId = params[:user_id].to_i
          @user = current_user
          @friendships = Friendship.where(user_id: params[:user_id]).or(Friendship.where(friend_id: params[:user_id]))
          if @friendships[0]
            @pending = @friendships.select {|fr| fr.accepted == false}
            @accepted = @friendships.select {|fr| fr.accepted == true}
            render :index
          else 
            #if user has no friendships a mock empty friendship is created and sent to the frontend
            @pending = [{}]
            render :nil
          end
        else
          render json: @friendship.errors.full_messages, status: 422
        end
    end

    private
    
    def friend_params
        params.require(:friendship).permit(:user_id, :id, :accepted, :friend_id)
    end

end