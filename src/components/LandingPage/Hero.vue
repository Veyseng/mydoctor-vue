<template>
   <div class="row hero">
	   <div class="col-md-6 hero-image">
			
		</div>
		<div class="col-md-6  hero-content ">
			<div>
				<h1 class="hero-text ">Connect to the best Heathcare in Cambodia</h1>
			</div>
			<div>
				<router-link class="CTA" to="/contact">Connect with us</router-link>
			</div>
			
		</div>
		
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.hero{
		margin-top: 10rem;
		border-radius: 10px;
		height: 50vh;
		background:  linear-gradient(
		to top right, 
		var(--primary-color), var(--secondary-color)
	  );
	  box-shadow:
            0 10px 27px rgba(73, 73, 73, 0.2);
	}
	.hero-image{
		background: url('../../../src/assets/hero.png') center/cover no-repeat;
	}
	.hero-content{
		display: flex;
		flex-direction: column;
		height: auto;
		justify-content: center;

	}
	.hero-text{
		font-size: 2.3rem;
		color: var(--white-color);
	}
	.hero-image{
		border-radius: 10px;
		
		
	}
	.CTA{
		background: var(--white-color);
		text-decoration: none;
		color: var(--primary-color);
		padding: 3px;
		font-size: 1.4rem;
		border-radius: 10px;
	}

</style>