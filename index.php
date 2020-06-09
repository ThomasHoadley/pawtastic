<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8" />
	<title>Pawtastic</title>
	<meta name="description" content="We care for your furry little loved ones while you’re away" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta property="og:title" content="Pawtastic" />
	<meta property="og:type" content="" />
	<meta property="og:url" content="" />
	<meta property="og:image" content="" />
	<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />

	<link rel="stylesheet" href="main.css" />
	<meta name="theme-color" content="#fff" />
</head>

<body>
	<div class="outer-container">
		<header>
			<div class="inner-container">
				<div class="navigation">
					<img src="images/logo2.png" alt="Pawtastic" class="logo" />
					<div class="links">
						<ul>
							<li><a href="#">About us</a></li>
							<li><a href="#">Reviews</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Sign up</a></li>
						</ul>
					</div>
				</div>
				<div class="content">
					<h1>
						We care for<br />your furry little loved ones while you’re away
					</h1>
					<a href="#contact" class="button button--light">Schedule a visit</a>
				</div>
				<div class="smallprint">
					<p>Ozzie in Brooklyn</p>
				</div>
			</div>
		</header>

		<section class="care">
			<div class="inner-container">
				<div class="row col-two">
					<div class="col">
						<div class="content">
							<h2>Expert care for your furry, feathery, or scaley friend</h2>
							<p>
								We know how stressful it is to leave your pets at home alone.
								We’re a team of experienced animal caregivers, well connected
								to local veterinarians. Trust to us to love them like our own,
								and to keep them safe and happy till you’re home.
							</p>
							<a href="#contact" class="button button--dark">
								Schedule a visit
							</a>
						</div>
					</div>
					<div class="col">
						<div class="image-grid">
							<div class="image">
								<img src="http://placehold.it/240x240" alt="Muffin" />
								<p class="text">Muffin</p>
							</div>
							<div class="image">
								<img src="http://placehold.it/240x240" alt="Peep" />
								<p class="text">Peep</p>
							</div>
							<div class="image">
								<img src="http://placehold.it/240x240" alt="Natasha" />
								<p class="text">Natasha</p>
							</div>
							<div class="image">
								<img src="http://placehold.it/240x240" alt="Marlon" />
								<p class="text">Marlon</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="tailored">
			<div class="row col-two">
				<div class="col image-container" style="background-image: url('images/bg-tailored.png');"></div>
				<div class="col text">
					<div class="content">
						<h2>Services tailored to your needs</h2>
						<p>
							Schedule one-off or recurring home visits. An experienced member
							of our team will spend time with your pet, feed them, change cat
							litter trays, take the dog for a walk, and anything else you
							need.
						</p>
						<a href="#contact" class="button button--dark">Schedule a visit</a>
					</div>
				</div>
			</div>
		</section>

		<section class="articles">
			<div class="inner-container">
				<div class="header-text">
					<h2 class="title">Pets (and their humans) love us</h2>
				</div>
				<div class="article-row">

				</div>
				<div class="row cta">
					<button class="button button--pink" id="load-more" data-loaded="4">
						Read all reviews
					</button>
				</div>
			</div>
		</section>

		<section class="affordable">
			<div class="inner-container">
				<div class="header-text">
					<h2 class="title">Affordable options, tailored to your needs</h2>
					<p class="subtitle">
						All services include live updates including photos and chat, as
						well as notifications of sitter arrival and departure times.
					</p>
				</div>
				<div class="row columns info-boxes">
					<div class="column">
						<div class="icon">
							<img src="images/icon-flower.svg" alt="Dog walk" />
						</div>
						<h3 class="title">Dog walk</h3>
						<p>
							We’ll take your pup for a 30 minute walk and make sure he or she
							has fresh food and water.
						</p>
						<div class="footer">
							<h2>£15</h2>
							<p class="smallprint">PER 30 MIN WALK</p>
						</div>
					</div>
					<div class="column">
						<div class="icon">
							<img src="images/icon-wave.svg" alt="Drop-in visit" />
						</div>
						<h3 class="title">Drop-in visit</h3>
						<p>
							We’ll stop by to snuggle, feed, and play with your pets in the
							comfort of their own home.
						</p>
						<div class="footer">
							<h2>£15</h2>
							<p class="smallprint">PER 30 MIN VISIT</p>
						</div>
					</div>
					<div class="column">
						<div class="icon">
							<img src="images/icon-flower.svg" alt="Dog walk" />
						</div>
						<h3 class="title">House sitting</h3>
						<p>
							We’ll stay overnight with your pets to make sure they have
							round-the-clock love.
						</p>
						<div class="footer">
							<h2>£45</h2>
							<p class="smallprint">PER NIGHT</p>
						</div>
					</div>
				</div>
				<div class="row cta">
					<a href="#contact" class="button button--dark">Schedule a visit</a>
				</div>
			</div>
		</section>

		<section class="contact" id="contact">
			<div class="content">
				<h2 class="title">Contact</h2>
				<h2 class="phone">07123 456 789</h2>
				<h2><a href="mailto:email@email.com">Email us</a></h2>
			</div>
		</section>
	</div>
	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
	<script src="main.js"></script>
</body>

</html>