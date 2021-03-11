class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:auth], params[:user][:password])
        if @user 
            log_in!(@user)
            @friendships = Friendship.includes(:friend, :user).where(user_id: @user.id).or(Friendship.includes(:friend, :user).where(friend_id: @user.id))
            @pending = @friendships.select {|fr| fr.accepted == false}
            @accepted = @friendships.select {|fr| fr.accepted == true}
            @friends = @friendships.map {|fr| fr.user_id == @user.id ? fr.friend : fr.user }
            
            render 'api/users/show'
        else
            render json: ['Invalid credentials please try logging in again'], status: 401
        end
    end

    def destroy
        @user = current_user
       
        if @user
            log_out
            render json: ['You have successfully logged out'], status: 200
        else 
            render json: ['No current session'], status: 404
        end
    end
end
