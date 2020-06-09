jQuery(document).ready(function ($) {
	// on load get posts
	getPosts(4);

	// on click get more posts

	$("#load-more").click(function () {
		var getAmount = $(this).data("loaded");
		var newAmount = getAmount + 4;
		getPosts(newAmount);
		$(this).data("loaded", newAmount);
	});

	/**
	 * get Posts function
	 */
	function getPosts(getAmount) {
		$(".article-row").empty();

		const RSS_URL = "rss-feed.php";
		var getAmount = getAmount;

		$.ajax(RSS_URL, {
			accepts: {
				xml: "application/rss+xml",
			},

			dataType: "xml",

			success: function (data) {
				var initialCount = 0;
				var count;

				$(data)
					.find("item")
					.each(function () {
						if (initialCount == getAmount) {
							return;
						} else {
							const el = $(this);
							console.log(el);

							const template = `
					<div class="article">
						<div class="image">
							<img src="http://placehold.it/200x200">
						</div>
						<div class="text">
						<h4>
							${el.find("title").text()}
						</h4>
						<p>
							${trimLength(el.find("description").text(), 100)}
						</p>
						</div>
					</div>
					`;
							$(".article-row").append(template);
							initialCount++;
						}
					});
			},
		});
	}

	/**
	 * SMOOTH SCROLL
	 */
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.not("no-scroll")
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

	/**
	 * HELPERS
	 */

	var ellipsis = "...";

	function trimLength(text, maxLength) {
		text = $.trim(text);

		if (text.length > maxLength) {
			text = text.substring(0, maxLength - ellipsis.length);
			return text.substring(0, text.lastIndexOf(" ")) + ellipsis;
		} else return text;
	}
});
