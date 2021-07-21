class Api::LikesController < ApplicationController

    def create
        @like = Like.new({user_id: params["user_id"], post_id: params["post_id"]})
        if @like.save
            @post = @like.liked
            @likes = @post.likes.map {|like| like.user_id}
            render :show
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.where(user_id: params["user_id"]).and(Like.where(post_id: params["post_id"])).first
        @post = @like.liked
        if @like.destroy
            @likes = @post.likes.map {|like| like.user_id}
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end



end