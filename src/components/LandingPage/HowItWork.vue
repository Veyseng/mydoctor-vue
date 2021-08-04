<template>
<div id="work">

</div>
  <div class="row how-it-work">
	  	<h1 >How our booking work?</h1>
		<div class="col-md-6 step">
			<div>
				<!--Add icon-->
			</div>
			<div class="content-step">
				<h3><span class="number">1</span> Signup</h3>
			</div>
		</div>
		
		<div class="col-md-6 step">
			<div class="content-step">
				<h3><span class="number">2</span> Find Treatment or Checkup</h3>
				<p></p>
			</div>	
		</div>
		<div  class="col-md-6 step">
			<div class="content-step">
				<h3><span class="number">3</span> Checkout</h3>
				<p></p>
			</div>
		</div>
		<div  class="col-md-6 step">
			<div class="content-step">
				<h3><span class="number">4</span> Ready to go</h3>
				<p></p>
			</div>
		</div>
		
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#work{
	padding-top: 8rem;
}
	h1{
		text-align: center;
		font-size: 2rem;
		color: var(--primary-color);
	}
	li{
		list-style: none;
	}
	.step{
		padding: 1rem;
		display: flex;
	}
	.list-steps{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.how-it-work{
		height: auto;
		display: flex;
		justify-content: center;
	}
	.about-app-image{
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}
	.img{
		border-radius: 20px;
		width: 100%;
	}
	.how-text{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

	}
	.how-content{
		margin: 0;
		padding: 0;
	}
	.number{
		color: var(--primary-color);
		width: 1rem;
		border-radius: 4px;
	}
	.content-step{
		display: flex;
	}
	@media only screen and (max-width: 768px){

	}
</style>