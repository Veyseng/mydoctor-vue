<template>
  <div class="available">
	  <h1>Available Soon</h1>
	  <div class="logo">
		  <div class="content">
			  <i class="fab fa-app-store-ios"></i>
			  <h3>App Store</h3>
		  </div>
		  <div class="content">
			  <i class="fab fa-google-play"></i>
			  <h3>Play Store</h3>
		  </div>
		  <div class="content">
			  <i class="fas fa-globe-asia"></i>
			  <h3>Website</h3>
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
		text-align: center;
		color: white;
		font-size: 2rem;
	}
	.available{
		background: var(--primary-color);
		padding: 1rem;
	}
	i{
		font-size: 3rem;
		color: var(--white-color);
	}
	.logo{
		display: flex;
		justify-content: space-around;
		align-items: flex-start;
	}
	.content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h3{
		font-size: 1rem;
		color: var(--lightgray-color);
	}
</style>