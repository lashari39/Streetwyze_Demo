window.bind_rating = function() {
	$('.review-button').on('click', function() {
		reviewButton = $(this)
		if(reviewButton.hasClass("bad"))
		{
			badButton(reviewButton);
		}
		else if(reviewButton.hasClass("fix"))
		{
			fixButton(reviewButton);
		}
		else
		{
			goodButton(reviewButton);
		}
	});
}
function badButton(badButton) {
	if (badButton.hasClass("btn-outline-danger"))
		{
			badButton.removeClass('btn-outline-danger').addClass('btn-danger');
			$('.review').val("bad");
			$('.good').removeClass().addClass('review-button good btn btn-outline-success');
			$('.fix').removeClass().addClass('review-button fix btn btn-outline-info');
		}
		else
		{
			badButton.removeClass('btn-danger').addClass('btn-outline-danger');
			$('.review').val("");
		}
};

function goodButton(goodButton) {
	if (goodButton.hasClass("btn-outline-success"))
		{
			goodButton.removeClass('btn-outline-success').addClass('btn-success');
			$('.review').val("good");
			$('.bad').removeClass().addClass('review-button bad btn btn-outline-danger');
			$('.fix').removeClass().addClass('review-button fix btn btn-outline-info');
		}
		else
		{
			goodButton.removeClass('btn-success').addClass('btn-outline-success');
			$('.review').val("");
		}
};
function fixButton(fixButton) {
	if (fixButton.hasClass("btn-outline-info"))
		{
			fixButton.removeClass('btn-outline-info').addClass('btn-info');
			$('.review').val("fix");
			$('.bad').removeClass().addClass('review-button bad btn btn-outline-danger');
			$('.good').removeClass().addClass('review-button good btn btn-outline-success');
		}
		else
		{
			fixButton.removeClass('btn-info').addClass('btn-outline-info');
			$('.review').val("");
		}
};

$(document).on('turbolinks:load', function(){
	bind_rating();
});
