window.bind_rating = function() {
	flatpickr(".datepickr", {});

	$('.no-rating').on("click", function() {
		$('.new_story_star').remove();
		$('.no-rating').before("<div class='new_story_star'></div>");
		$('.new_story_star_field').val(0);
		$('.new_story_star').raty('click', 0);
	})

	$('.new_story_star').raty({
  target: '.new_story_star_field', 
  targetType: 'score', 
  targetKeep: true
	});

	if ($('.story_record_star').html() == "")
	$('.story_record_star').raty({
		readOnly: true
	});
	if ($(".show_asset_rating").html() == "")
	{
		$(".show_asset_rating").raty({
			readOnly: true
		})
	}

	$(".edit_story_star").raty({
		target: '.edit_story_star_field',
		targetType: 'score',
		targetKeep: true
	})

	$(".show_story_rating").raty({
		readOnly: true
	});

	$('#asset-bad').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-danger")
		{
			tog.removeClass('btn btn-outline-danger').addClass('btn btn-danger');
			$('#asset-review').val("bad");
			$('#asset-good').removeClass().addClass('btn btn-outline-success')
			$('#asset-fix').removeClass().addClass('btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn btn-danger').addClass('btn btn-outline-danger');
			$('#asset-review').val("");
		}
	});

	$('#asset-good').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-success")
		{
			tog.removeClass('btn btn-outline-success').addClass('btn btn-success');
			$('#asset-review').val("good");
			$('#asset-bad').removeClass().addClass('btn btn-outline-danger')
			$('#asset-fix').removeClass().addClass('btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn btn-success').addClass('btn btn-outline-success');
			$('#asset-review').val("");
		}
	});

	$('#asset-fix').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-info")
		{
			tog.removeClass('btn btn-outline-info').addClass('btn btn-info');
			$('#asset-review').val("fix");
			$('#asset-good').removeClass().addClass('btn btn-outline-success')
			$('#asset-bad').removeClass().addClass('btn btn-outline-danger')
		}
		else
		{
			tog.removeClass('btn btn-info').addClass('btn btn-outline-info');
			$('#asset-review').val("");
		}
	});

	$('#story-bad').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-danger")
		{
			tog.removeClass('btn btn-outline-danger').addClass('btn btn-danger');
			$('#story-review').val("bad");
			$('#story-good').removeClass().addClass('btn btn-outline-success')
			$('#story-fix').removeClass().addClass('btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn btn-danger').addClass('btn btn-outline-danger');
			$('#story-review').val("");
		}
	});

	$('#story-good').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-success")
		{
			tog.removeClass('btn btn-outline-success').addClass('btn btn-success');
			$('#story-review').val("good");
			$('#story-bad').removeClass().addClass('btn btn-outline-danger')
			$('#story-fix').removeClass().addClass('btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn btn-danger').addClass('btn btn-outline-danger');
			$('#story-review').val("");
		}
	});

	$('#story-fix').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-info")
		{
			tog.removeClass('btn btn-outline-info').addClass('btn btn-info');
			$('#story-review').val("fix");
			$('#story-bad').removeClass().addClass('btn btn-outline-danger')
			$('#story-good').removeClass().addClass('btn btn-outline-success')
		}
		else
		{
			tog.removeClass('btn btn-info').addClass('btn btn-outline-info');
			$('#story-review').val("");
		}
	});
}


$(document).on('turbolinks:load', function(){
	bind_rating();
});
