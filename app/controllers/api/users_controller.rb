class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        @user
        @friendships = Friendship.where(user_id: @user.id).or(Friendship.where(friend_id: @user.id))
        @pending = @friendships.select {|fr| fr.accepted == false}
        @accepted = @friendships.select {|fr| fr.accepted == true}
        @friends = @friendships.map {|fr| fr.user_id == @user.id ? fr.friend : fr.user }
        render :show
    end

    def create 
        
        @user = User.new(user_params)
        @friendships = []
        @pending = []
        accepted = []
        @friends = []
        if @user.save
            log_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
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

