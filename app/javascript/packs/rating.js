window.bind_rating = function() {
	$('.bad').on("click", function() {
		tog = $(this);
		if (tog.hasClass("btn-outline-danger"))
		{
			tog.removeClass('btn-outline-danger').addClass('btn-danger');
			$('.review').val("bad");
			$('.good').removeClass().addClass('good btn btn-outline-success')
			$('.fix').removeClass().addClass('fix btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn-danger').addClass('btn-outline-danger');
			$('.review').val("");
		}
	});

	$('.fix').on("click", function() {
		tog = $(this);
		if (tog.hasClass("btn-outline-info"))
		{
			tog.removeClass('btn-outline-info').addClass('btn-info');
			$('.review').val("fix");
			$('.bad').removeClass().addClass('bad btn btn-outline-danger')
			$('.good').removeClass().addClass('good btn btn-outline-success')
		}
		else
		{
			tog.removeClass('btn-info').addClass('btn-outline-info');
			$('.review').val("");
		}
	});

		$('.good').on("click", function() {
		tog = $(this);
		if (tog.hasClass("btn-outline-success"))
		{
			tog.removeClass('btn-outline-success').addClass('btn-success');
			$('.review').val("good");
			$('.bad').removeClass().addClass('bad btn btn-outline-danger')
			$('.fix').removeClass().addClass('fix btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn-success').addClass('btn-outline-success');
			$('.review').val("");
		}
	});
}

$(document).on('turbolinks:load', function(){
	bind_rating();
});
