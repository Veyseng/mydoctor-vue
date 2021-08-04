<template>
  <div class="row benifits">
	  
	<h1>Our Values</h1>
    <div class="col-md-4 line-up line-straight">
		<!--Add icon-->
		<i class="far fa-calendar-check"></i>
		<h2>Time Saving</h2>
		<p>Say no more waiting for hours to have appointments. We allow users to select their preference time with specific format.</p>
	</div>
    <div class="col-md-4 line-up line-straight">
		<!--Add icon-->
		<i class="fas fa-lock"></i>
		<h2>Security Assurance</h2>
		<p>Data protection is our priority that we strive our best to bring the secured online access experience for all people featuring with the latest technology.</p>
	</div>
    <div class="col-md-4 line-straight">
		<!--Add icon-->
		<i class="fas fa-info"></i>
		<h2>Right Information</h2>
		<p>We strive our best to find the health relevant and verified contents to avoid the misunderstanding related to healthcare news and information in Cambodia</p>
		
	</div>
	<div class="col-md-4 line-up ">
		<!--Add icon-->
		<i class="fas fa-hand-holding-usd"></i>
		<h2>Price Transparency</h2>
		<p>Regarding to the expense in healthcare, My Doctor seeks to reduce the price for patients with special arrangement </p>
	</div>
    <div class="col-md-4 line-up">
		<!--Add icon-->
		<i class="fas fa-smile-beam"></i>
		<h2>Convenience</h2> 
		<p>Having hardtime getting healthcare service? Time to say good bye. With My Doctor, everything is in your hand</p>
	</div>
    <div class="col-md-4  " >
		<!--Add icon-->
		<i class="fas fa-handshake"></i>
		<h2>Trust For All</h2>
		<p>Want something more than convenience? My Doctor partners with the best healthcare providers in town and certified doctors for the quality of your well-being</p>
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
		color: var(--primary-color);
		padding: 1rem;
	}
	h2{
		font-size: 1.5rem;
		text-align: center;
	}
	p{
		font-size: .9rem;
		text-align: center;
	}
	i{
		font-size: 2rem;
		padding: 10px;
		color: var(--primary-color);
		border-radius: 10px;
	}
	.row{
		margin: 5vh;
		margin: 1rem 0;
		height: auto;
		padding: .5rem;

	}
	.col-md-4{
		padding: .5rem;
		text-align: center;
	}
	p{
		padding: .2rem;
		color: var(--gray-color)
	}
	.line-up{
		border-right: 1px solid var(--secondary-color);
	}
	.line-straight{
		border-bottom: 1px solid var(--secondary-color);
	}
	@media only screen and (max-width: 768px){
		.line-straight{
			border: none;
		}
		.line-up{
			border: none;
		}
	}
</style>