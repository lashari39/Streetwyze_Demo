class MapAssetsController < ApplicationController
	def index
		@map_asset = current_user.map_assets.all
	end
	def new
		@map_asset = current_user.map_assets.build
	end

















	private

	def map_asset_params
    params.require(:map_asset).permit(:place, :address, :category, :rate, :review, :story, :description)
  end
end
