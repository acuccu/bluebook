class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        render :show
    end

    def create 
        
        @user = User.new(user_params)
        
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


    def user_params 
        params.require(:user).permit(:first_name, :last_name, :email, :cellphone, :password, :dob, :gender)
    end
end

