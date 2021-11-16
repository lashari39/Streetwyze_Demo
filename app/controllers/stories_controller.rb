class StoriesController < ApplicationController

  def index
    @stories = Story.all
    @stories = @stories.search_by_place( params[:place]) if params[:place].present?
    @stories = @stories.search_by_address( params[:address]) if params[:address].present?
    @stories = @stories.search_by_category( params[:category]) if params[:category].present?
    @stories = @stories.search_by_word( params[:any_word]) if params[:any_word].present?
    @stories = @stories.search_by_author( params[:author]) if params[:author].present?
    @stories = @stories.search_by_date( params[:start_at], params[:end_at]) if params[:start_at].present? && params[:end_at].present?
  end
	def new
		@map_asset = MapAsset.find(params[:map_asset_id])
		@story = @map_asset.stories.build
	end
  def show
    @story = Story.find(params[:id])
  end
  def edit
    @map_asset = MapAsset.find(params[:map_asset_id])
    @story = Story.find(params[:id])
  end
  def create
    @map_asset = MapAsset.find(params[:map_asset_id])
    @story = @map_asset.stories.build(params.require(:story).permit(:category, :place, :address, :rate, :review, :description ))
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
      @map_asset = MapAsset.find(params[:map_asset_id])
      @story = Story.find(params[:id])
      if @story.update(params.require(:story).permit(:category, :place, :address, :rate, :review, :description))
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
