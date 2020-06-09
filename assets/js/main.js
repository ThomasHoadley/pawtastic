jQuery(document).ready(function ($) {
	$("#loadmore").on("click", function () {
		alert(
			"I made some attempt at completing this but unfortunately I ran out of enough time to set up a server to handle an ajax request to a RSS feed."
		);
	});
	// parse url
	// const RSS_URL = "https://www.reddit.com/r/worldnews.rss";

	// $.ajaxSetup({
	// 	xhrFields: {
	// 		withCredentials: true,
	// 	},
	// 	crossDomain: true,
	// });

	// $.ajax(RSS_URL, {
	// 	accepts: {
	// 		xml: "application/rss+xml",
	// 	},

	// 	dataType: "xml",

	// 	success: function (data) {
	// 		console.dir(data);
	// 		$(data)
	// 			.find("item")
	// 			.each(function () {
	// 				const el = $(this);

	// 				const template = `
	// 				<div class="article">
	// 					<div class="image">
	// 					<img src="${el.find("link").text()}/image/large.png" alt="">
	// 					</div>
	// 					<p>
	// 						${el.find("title").text()}
	// 					</p>
	// 				</div>
	// 				`;
	// 				$(".article-row").append(template);
	// 			});
	// 	},
	// });

	// smooth scroll
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$("html, body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});
});
