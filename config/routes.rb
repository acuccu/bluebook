Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update, :destroy]  do
      resources :posts, only: [:index, :show, :create, :update, :destroy]
      resources :friends, only: [:index, :create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
