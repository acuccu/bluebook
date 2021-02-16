class Api::UsersController < ApplicationController

    def index 
        @users = User.all
        render :index
    end
    
    def show
        @user = User.find(params[:id])
        @friendships = Friendship.where(user_id: @user.id).or(Friendship.where(friend_id: @user.id))
        @pending = @friendships.select {|fr| fr.accepted == false}
        @accepted = @friendships.select {|fr| fr.accepted == true}
        @friends = @friendships.map {|fr| fr.user_id == @user.id ? fr.friend : fr.user }
        render :show
    end

    def create    
        @user = User.new(user_params)
        byebug
        if @user.save
            log_in!(@user)
            # this code creates first friend 
            first_friendship = Friendship.create({user_id: @user.id, friend_id: 1, accepted: true})
            @friendships = [first_friendship]
            @pending = []
            @accepted = [first_friendship]
            @friends = [first_friendship.friend]
            # <--->

            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update 
        @user = current_user
        
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy 
        render json: ['You account has been successfully deleted'], status: 200
    end

    private

    def user_params 
        params.require(:user).permit(:first_name, :last_name, :email, :cellphone, :password, :dob, :gender)
    end
    

end

