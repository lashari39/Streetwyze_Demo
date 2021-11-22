module MapAssetsHelper
  def compute_average(map_asset)
    @stories = map_asset.stories
    @rate = 0
    @counter = 0
    if @stories.present?
      @stories.each do |story|
        @rate = @rate + story.rate.to_i
        @counter = @counter + 1
      end
      @rate = @rate / @counter
      @rate.ceil()
    end
  end
end
