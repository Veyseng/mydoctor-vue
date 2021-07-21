<template>
  <div class="row">
	  <h1>Our Services</h1>
	  <div class="col-md-6 service-content ">
		  	<div class='checkup-image'>

			</div>
			<div class="text-content text-checkup">
				<div>
					<h1 class="hero-text ">Checkup</h1>
				</div>
				<div>
					<router-link class="CTA CTA-checkup" to="/contact">Explore more</router-link>
				</div>
			</div>
		</div>
	   <div class="col-md-6 service-content">
			<div class='treatment-image'>

			</div>
			<div  class="text-content text-treatment">
				<div>
					<h1 class="hero-text ">Treatment</h1>
				</div>
				<div>
					<router-link class="CTA CTA-treatment" to="/contact">Explore more</router-link>
				</div>
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
	.row{
		height: auto;
		margin: 3rem 0;
	}
	.service-content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1rem 0;
		height: auto;
		
	}
	.text-checkup{
		width:35vw;
		background: var(--secondary-color);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.text-treatment{
		width:35vw;
		background: var(--primary-color);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.checkup-image{
		border-radius: 10px 10px 0 0;
		width: 35vw;
		height: 40vh;
		background: url('../../../src/assets/checkup-image.jpg') center/cover no-repeat;
	}
	.treatment-image{
		border-radius: 10px 10px 0 0;
		height: 40vh;
		width: 35vw;
		background: url('../../../src/assets/treatment-pic.jpg') center/cover no-repeat;
	}
	@media (max-width: 768px) {
		.checkup-image{
			width: 80vw;
		}
		.treatment-image{
			width: 80vw;
		}
		.text-treatment{
			width: 80vw;
		}
		.text-checkup{
			width: 80vw;
		}

	}
	.CTA{
		padding: 2px;
		border-radius: 5px;
		text-decoration: none;
		font-size: 1rem;
		background: var(--white-color);
	}
	.CTA-checkup{
		color: var(--secondary-color);
	}
	.CTA-treatment{
		color: var(--primary-color);
	}
</style>