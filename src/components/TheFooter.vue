<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<h1>My Doctor, My Health</h1>
					<div class="social-media">
						<a href="https://www.facebook.com/My-Doctor-106380528314320/">
							<i class="fab fa-facebook"></i>
						</a>
						<i class="fab fa-instagram"></i>
						<i class="fab fa-telegram"></i>
						<i class="fas fa-globe-americas"></i>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, repellat! Omnis praesentium necessitatibus similique. Voluptate voluptates repellat tenetur nihil recusandae omnis natus at perspiciatis aliquid explicabo vero, nisi iure vitae.</p>
					</div>
					<div>
						<p class="copy-right"> © Copyright MyDoctorKH 2021</p>
					</div>
				</div>
				<div class="col-md-6 site">
					<h3>Our site</h3>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#aboutapp">About Us</a>
						</li>
						<li>
							<a href="#service">Our Service</a>
						</li>
						<li>
							<a href="#work">How it works?</a>
						</li>
						<li>
							<a href="#contact">Contact Us</a>
						</li>
					</ul>
					
				</div>
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
		color: var(--primary-color);
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
	h3{
		padding: 2px;
		border-bottom: 1px white solid;
	}
	.site{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	/* Social media */
	.social-media i{
		padding: .5rem;
		font-size: 2rem;
	}
	.copy-right{
		font-size: .8rem;
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
