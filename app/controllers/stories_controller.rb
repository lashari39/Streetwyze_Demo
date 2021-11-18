class StoriesController < ApplicationController

	def new
		@map_asset = MapAsset.find(params[:map_asset_id])
		@story = @map_asset.stories.build
	end

  def show
    @story = Story.find(params[:id])
    @map_asset = @story.map_asset
  end

  def edit
    @story = Story.find(params[:id])
    @map_asset = MapAsset.find(params[:map_asset_id])
  end

  def create
    @map_asset = MapAsset.find(params[:map_asset_id])
    @story = @map_asset.stories.build(params.require(:story).permit(:category, :place, :address, :rate, :review, :description, images: [] ))
    @story.user_id = current_user.id
    respond_to do |format|
      if @story.save
        format.js
        format.html { redirect_to @story, notice: "Map asset was successfully created." }
      else
        format.js
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      @story = Story.find(params[:id])
      @map_asset = @story.map_asset
      if @story.update(params.require(:story).permit(:category, :place, :address, :rate, :review, :description, images: []))
        format.js
        format.html { redirect_to @story, notice: "Map asset was successfully updated." }
      else
        format.js
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @story = Story.find(params[:id])
    @story.destroy
    respond_to do |format|
      format.html { redirect_to map_assets_url, notice: "Story was successfully destroyed." }
      format.js
    end
  end
end
