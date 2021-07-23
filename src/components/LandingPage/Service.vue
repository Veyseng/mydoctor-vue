<template>
<div id="service">

</div>
  <div class="row">
	  <h1>Our Services</h1>
	  <div class="col-md-6 service-content" >
		  	<div class='checkup-image'>

			</div>
			<div class="text-content text-checkup">
				<div>
					<h1 class="hero-text ">Checkup</h1>
				</div>
				<!--
				<div>
					<router-link class="CTA CTA-checkup" to="/contact">Explore more</router-link>
				</div>
				-->
			</div>
		</div>
	   <div class="col-md-6 service-content">
			<div class='treatment-image'>

			</div>
			<div  class="text-content text-treatment">
				<div>
					<h1 class="hero-text ">Treatment</h1>
				</div>
				<!--
				<div>
					<router-link class="CTA CTA-treatment" to="/contact">Explore more</router-link>
				</div>
				-->
			</div>
		</div>
			
  </div>
  <div class="row">
	  
	   <div class="col-md-6 service-content">
			<div class='content-image'>
			</div>
			<div  class="text-content text-treatment">
				<div>
					<h1 class="hero-text">Health Contents</h1>
				</div>
				<!--
				<div>
					<router-link class="CTA CTA-treatment" to="/contact">Explore more</router-link>
				</div>
				-->
			</div>
		</div>
		<div class="col-md-6 service-content" >
		  	<div class='consult-image'>

			</div>
			<div class="text-content text-checkup">
				<div>
					<h1 class="hero-text ">Online Consultation</h1>
				</div>
				<!--
				<div>
					<router-link class="CTA CTA-checkup" to="/contact">Explore more</router-link>
				</div>
				-->
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
	p{
		padding: .5rem;
	}
	#service{
		padding-top: 8rem;
	}
	.row{
		height: auto;
		
	}
	.service-content{
		display: flex;
		flex-direction: column;
		justify-content:flex-start;
		align-items: center;
		margin: 1rem 0;
	}
	.hideme{
		opacity: 0;
	}
	.text-checkup{
		width:33vw;
		background: var(--secondary-color);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 0 0 10px 10px;
		padding: 1rem 0;
	}
	.text-treatment{
		width:33vw;
		background: var(--secondary-color);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 0 0 10px 10px;
		padding: 1rem 0;
	}
	.checkup-image{
		border-radius: 10px 10px 0 0;
		width:33vw;
		height: 20vh;
		background: url('../../../src/assets/checkup-image.jpg') center/cover no-repeat;
	}
	.treatment-image{
		border-radius: 10px 10px 0 0;
		width:33vw;
		height: 20vh;
		background: url('../../../src/assets/treatment-pic.jpg') center/cover no-repeat;
	}
	.consult-image{
		border-radius: 10px 10px 0 0;
		height: 20vh;
		width:33vw;
		background: url('../../../src/assets/online_consultation.jpg') center/cover no-repeat;
	}
	.content-image{
		border-radius: 10px 10px 0 0;
		height: 20vh;
		width: 33vw;
		background: url('../../../src/assets/content_health.jpg') center/cover no-repeat;
	}
	@media screen and (max-device-width: 767px){
		.row{
			height: auto;
		}
		.checkup-image{
			width: 80vw;
		}
		.treatment-image{
			width: 80vw;
		}
		.content-image{
			width: 80vw;
		}
		.consult-image{
			width: 80vw;
		}
		.online-image{
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
		font-size: 1.2rem;
		background: var(--white-color);
	}
	.CTA-checkup{
		color: var(--secondary-color);
	}
	.CTA-treatment{
		color: var(--secondary-color);
	}
</style>