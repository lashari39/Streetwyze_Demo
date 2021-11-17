window.bind_rating = function() {
	$('#bad').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-danger")
		{
			tog.removeClass('btn btn-outline-danger').addClass('btn btn-danger');
			$('#review').val("bad");
			$('#good').removeClass().addClass('btn btn-outline-success')
			$('#fix').removeClass().addClass('btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn btn-danger').addClass('btn btn-outline-danger');
			$('#review').val("");
		}
	});

	$('#fix').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-info")
		{
			tog.removeClass('btn btn-outline-info').addClass('btn btn-info');
			$('#review').val("fix");
			$('#bad').removeClass().addClass('btn btn-outline-danger')
			$('#good').removeClass().addClass('btn btn-outline-success')
		}
		else
		{
			tog.removeClass('btn btn-info').addClass('btn btn-outline-info');
			$('#review').val("");
		}
	});

	$('#edit-good').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-success")
		{
			tog.removeClass('btn btn-outline-success').addClass('btn btn-success');
			$('#edit-review').val("good");
			$('#edit-bad').removeClass().addClass('btn btn-outline-danger')
			$('#edit-fix').removeClass().addClass('btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn btn-success').addClass('btn btn-outline-success');
			$('#edit-review').val("");
		}
	});

	$('#edit-bad').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-danger")
		{
			tog.removeClass('btn btn-outline-danger').addClass('btn btn-danger');
			$('#edit-review').val("bad");
			$('#edit-good').removeClass().addClass('btn btn-outline-success')
			$('#edit-fix').removeClass().addClass('btn btn-outline-info')
		}
		else
		{
			tog.removeClass('btn btn-danger').addClass('btn btn-outline-danger');
			$('#edit-review').val("");
		}
	});

	$('#edit-fix').on("click", function() {
		tog = $(this);
		if (tog.attr("class") == "btn btn-outline-info")
		{
			tog.removeClass('btn btn-outline-info').addClass('btn btn-info');
			$('#edit-review').val("fix");
			$('#edit-bad').removeClass().addClass('btn btn-outline-danger')
			$('#edit-good').removeClass().addClass('btn btn-outline-success')
		}
		else
		{
			tog.removeClass('btn btn-info').addClass('btn btn-outline-info');
			$('#review').val("");
		}
	});
}

$(document).on('turbolinks:load', function(){
	bind_rating();
});
