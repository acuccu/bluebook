class Api::PostsController < ApplicationController
    def index
        @authors_id = friends_id.push(current_user.id)
        @posts = Post.includes(:author, :likes).where(author_id: @authors_id).or(Post.includes(:author, :likes).where(wall_id:  params[:user_id]))
        render :index
      end
    
      def show
        @post = Post.find(params[:id])
      end
    
      def create
        @post = Post.new(post_params)
        
        if @post.save
          render :show
        else
          render json: @post.errors.full_messages, status: 422
        end
      end
    
      def update
        @post = Post.find(params[:id])
        @likes = @post.likes
    
        if @post.update(post_params)
          render :show
        else
          render json: @post.errors.full_messages, status: 422
        end
      end
    
      def destroy
        @post = Post.find(params[:id])
    
        if @post.destroy
          render :show
        else
          render json: @post.errors.full_messages, status: 422
        end
      end
    
      private
    
      def post_params
        params.require(:post).permit(:id, :body, :author_id, :wall_id)
      end

      def friends_id
        friendships = Friendship.where(user_id: params[:user_id]).or(Friendship.where(friend_id: params[:user_id]))
        friends_id = friendships.map {|fr| fr.user_id == current_user.id ? fr.friend_id : fr.user_id}
      end
    
end
