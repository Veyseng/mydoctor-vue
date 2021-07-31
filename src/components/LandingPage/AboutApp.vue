<template>
  <div class="row about-app "  id="aboutapp">
	  <div class="col-md-6  about-app-image">
			<img class="img" src="../../../src/assets/app-mockup.jpg" alt="">
		</div>
	   <div class="col-md-6 about-app-content" >
			<div>
				<h1 class="about-app-text ">About Our Platform</h1>
			</div>
			<div>
				<p>
					My doctor is a digital health application that strive to improve and facilitate the interaction between patients and doctors in the modern era. We provide 3 main features including real time online consultation, health check-ups packagings, and effective treatment, depending on the type of diseases that need to be cured. With My Doctor, everything is in your hand. My Doctor, my care.
				</p>
			</div>
		</div>
		
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	h1{
		display: inline-block;
		font-size: 2rem;
		color: var(--primary-color);
		font-weight: 500;
	}
	.about-app{
		padding: 8rem 0;
		height: auto;
	}
	.about-app-content{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		border-radius: 10px;
	}
	.about-app-image{
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: flex-start;
	}
	.img{
		border-radius: 20px;
		width: 100%;
	}
	p{
		color:var(--white-color);
		padding: 1rem;
		border-radius: 10px;
		background: var(--secondary-color);
	}
</style>