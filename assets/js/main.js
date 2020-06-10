window.postsLoaded = 4;

jQuery(document).ready(function ($) {
	menuToggle();
	displayPosts();

	AOS.init({
		duration: 1200, // values from 0 to 3000, with step 50ms
		easing: "ease-in-out-sine",
		once: true,
		offset: 120,
	});

	// GET POSTS

	async function getPosts() {
		const RSS_URL = `https://cors-anywhere.herokuapp.com/https://www.nasa.gov/rss/dyn/breaking_news.rss`;
		let data = await fetch(RSS_URL)
			.then((response) => response.text())
			.then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
			.then((data) => {
				let articles = data.querySelectorAll("item");
				return articles;
			})
			.catch((error) => console.log("error is", error));
		return data;
	}

	function displayPosts(getAll) {
		if (getAll == true) {
			let html = "";

			getPosts().then((data) => {
				var nodes = [...data];
				nodes.splice(0, 4);

				nodes.forEach((el) => {
					html += `
					<div class="article" data-aos="fade-in">
						<div class="image">
							<img src="http://placehold.it/200x200">
						</div>
						<div class="text">
						<h4>
							${el.querySelector("title").innerHTML}
						</h4>
						</div>
					</div>
					`;
				});
				$(".article-row").append(html);
				$("#load-more").addClass("disabled");
			});
			return;
		}

		getPosts().then((data) => {
			let html = "";
			let loadPosts = window.postsLoaded;
			let count = 0;

			data.forEach((el) => {
				if (count == loadPosts) {
					return html;
				}

				html += `
					<div class="article" data-aos="fade-in">
						<div class="image">
							<img src="http://placehold.it/200x200">
						</div>
						<div class="text">
						<h4>
							${el.querySelector("title").innerHTML}
						</h4>
						</div>
					</div>
				`;
				count++;
			});

			$(".article-row").html(html);

			window.postsLoaded = window.postsLoaded + 4;

			$("#load-more").removeClass("disabled");

			$("#load-more").on("click", function () {
				displayPosts(true);
			});
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

	function menuToggle() {
		$("#menuToggle input[type='checkbox'").change(function () {
			if (this.checked) {
				$("body").addClass("menu-open");
			} else {
				$("body").removeClass("menu-open");
			}
		});
	}
});
