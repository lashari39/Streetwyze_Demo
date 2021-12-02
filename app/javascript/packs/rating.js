window.bind_rating = function() {
	$('.review-button').on('click', function() {
		reviewButton = $(this)
		bad = $('.bad');
		good = $('.good');
		fix = $('.fix');
		if(reviewButton.hasClass("bad"))
		{
			pressedButton(reviewButton, "bad", "btn-outline-danger", "btn-danger", good, "good", "btn btn-outline-success", fix, "fix", "btn btn-outline-info");
		}
		else if(reviewButton.hasClass("fix"))
		{
			pressedButton(reviewButton, "fix", "btn-outline-info", "btn-info", bad, "bad", "btn btn-outline-danger", good, "good", "btn btn-outline-success");
		}
		else
		{
			pressedButton(reviewButton, "good", "btn-outline-success", "btn-success", bad, "bad", "btn btn-outline-danger", fix, "fix", "btn btn-outline-info");
		}
	});
}
function pressedButton(pressedButton, buttonClass1, buttonClass2, buttonClass3, button1, button1Class1, button1Class2, button2, button2Class1, button2Class2) {
	if (pressedButton.hasClass(buttonClass2))
		{
			pressedButton.removeClass(buttonClass2).addClass(buttonClass3);
			$('.review').val(buttonClass1);
			button1.removeClass().addClass(`review-button ${button1Class1} ${button1Class2}`);
			button2.removeClass().addClass(`review-button ${button2Class1} ${button2Class2}`);
		}
		else
		{
			pressedButton.removeClass(buttonClass3).addClass(buttonClass2);
			$('.review').val("");
		}
};
$(document).on('turbolinks:load', function(){
	bind_rating();
});
