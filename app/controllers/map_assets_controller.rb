class MapAssetsController < ApplicationController
	before_action :set_map_asset, only: %i[ show edit update destroy ]

	def index
		@map_assets = MapAsset.all
	end

	def new
		@map_asset = current_user.map_assets.build
	end

	def create
		@map_asset = current_user.map_assets.build(map_asset_params)
    @map_asset.save
		respond_to do |format|
      format.js
    end
  end

	def edit; end

	def show; end

	def update
  	@map_asset.update(map_asset_params)
    respond_to do |format|
      format.js
    end
	end

	def destroy
  	@map_asset.destroy
    respond_to do |format|
      format.js
    end
  end

	private

	def map_asset_params
    params.require(:map_asset).permit(:place, :address, :category, :rate, :review, :story, :description)
  end

  def set_map_asset
  	@map_asset = MapAsset.find(params[:id])
  end
end
