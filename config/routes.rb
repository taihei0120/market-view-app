Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :contents, only: :index
      resources :newsapis, only: :index
      resources :twitterapis, only: :index
    end
  end

end
