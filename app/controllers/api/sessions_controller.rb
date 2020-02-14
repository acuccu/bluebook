class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:auth], params[:user][:password])
        debugger
        if @user 
            log_in!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid credentials please try logging in again'], status: 401
        end
    end

    def destroy
        @user = current_user
       
        if @user
            log_out
            render json: show
        else 
            render json: ['No current session'], status: 404
        end
    end
end