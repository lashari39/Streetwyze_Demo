class MapAssetsController < ApplicationController
	before_action :set_map_asset, :authenticate_user!, only: %i[ show edit update destroy ]

	def index
		@map_assets = MapAsset.all
    @map_assets = @map_assets.search_by_place( params[:place]) if params[:place].present?
    @map_assets = @map_assets.search_by_address( params[:address]) if params[:address].present?
    @map_assets = @map_assets.search_by_category( params[:category]) if params[:category].present?
    @map_assets = @map_assets.search_by_word( params[:any_word]) if params[:any_word].present?
    @map_assets = @map_assets.search_by_author( params[:author]) if params[:author].present?
    @map_assets = @map_assets.search_by_date( params[:start_at], params[:end_at]) if params[:start_at].present? && params[:end_at].present?

	end
	def new
		@map_asset = current_user.map_assets.build
	end
	def create
		@map_asset = current_user.map_assets.build(map_asset_params)
		respond_to do |format|
      if @map_asset.save
        format.js
        format.html { redirect_to @map_asset, notice: "Map asset was successfully created." }
      else
        format.js
        format.html { render :new, status: :unprocessable_entity }
      end
    end
	end
	def edit; end

	def show
    @story = @map_asset.stories
  end

	def update
		respond_to do |format|
  		if @map_asset.update(map_asset_params)
      	format.js
      	format.html { redirect_to @map_asset, notice: "Map asset was successfully updated." }
    	else
      	format.js
      	format.html { render :edit, status: :unprocessable_entity }
    	end
  	end
	end

	def destroy
  	@map_asset.destroy
  	respond_to do |format|
    	format.html { redirect_to map_assets_url, notice: "Map asset was successfully destroyed." }
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
