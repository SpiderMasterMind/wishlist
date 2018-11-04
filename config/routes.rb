Rails.application.routes.draw do
  root to: "pages#root"

  namespace :api do
    namespace :v1 do
      resources :lists
      resources :items
    end
  end
end
