Rails.application.routes.draw do
	devise_for :user
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :user
  resources :map_assets
  get 'home/index', to:'home#index'
	end
