<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<h1>Health Comes First</h1>
					<div class="social-media">
						<a href="https://www.facebook.com/My-Doctor-106380528314320/">
							<i class="fab fa-facebook"></i>
						</a>
						<i class="fab fa-instagram"></i>
						<i class="fab fa-telegram"></i>
						<i class="fas fa-globe-americas"></i>
					</div>
				</div>
				<div class="col-md-4 site">
					<h3>Our site</h3>
					<ul>
						<li>
							<a href="#aboutapp">About Us</a>
						</li>
						<li>
							<a href="#">Our Service</a>
						</li>
						<li>
							<a href="#about">Our Features</a>
						</li>
						<li>
							<a href="#about">Our Testimonies</a>
						</li>
						
						<li>
							<router-link to="/contact">Contact Us</router-link>
						</li>
					</ul>
				</div>
				<div class="col-md-4 site">
					<h3>Our site</h3>
					<ul>
						<li>
							<a href="#aboutapp">About Us</a>
						</li>
						<li>
							<a href="#service">Our Service</a>
						</li>
						<li>
							<a href="#aboutapp">Our Features</a>
						</li>
						<li>
							<a href="#about">Our Testimonies</a>
						</li>
						
						<li>
							<router-link to="/contact">Contact Us</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-12 copyright">
				© Copyright MyDoctorKH 2021
			</div>
		</div>
		<div>
		
		</div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
	footer{
		background: var(--primary-color);
		margin: none;
		color:var(--white-color);
	}
	h1{
		padding: 1px;
		font-size: 2rem;
	}
	.container{
		margin: none;
	}
	.col-md-4{
		padding: 1rem 0;
	}
	ul{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: var(--white-color);
	}
	.site{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	/* Social media */
	.social-media i{
		padding: .5rem;
		font-size: 2rem;
	}
	.copyright{
		padding-bottom: 1rem;
	}
	@media screen and (max-device-width: 767px){
		div.col-md-3.site{
			padding: none;
		}
		.site{
			flex-direction: row;
			align-items:flex-start ;
		}
	}
</style>