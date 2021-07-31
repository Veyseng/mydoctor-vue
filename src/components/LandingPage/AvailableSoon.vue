<template>
  <div class="available">
	  <h1>Available Soon</h1>
	  <div class="logo">
		  <div class="content">
			  <img class="img" src="../../../src/assets/playstore.png">
		  </div>
		  <div class="content">
			 <img class="img" src="../../../src/assets/appstore.png">
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
		font-size: 2rem;
	}
	.available{
		padding: 1rem;
	}
	i{
		font-size: 3rem;
	}
	.logo{
		display: flex;
		justify-content: center;
		align-items: center;
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
	.img{
		width: 15vw;
	}
	@media only screen and (max-width: 600px){
		.logo{
			flex-direction: column-reverse;
		}
		.img{
			width: 75vw;
		}
	}
</style>