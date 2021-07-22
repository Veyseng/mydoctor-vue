<template>
  <div class="row how-it-work">
	  		
	   <div class="col-md-12 how-content">
			<div>
				<h1 >How it work?</h1>
			</div>
		</div>
		<div class="col-md-6 step">
			<div>
				<h3>Step <span>1</span></h3>
				<h6>Signup</h6>
			</div>
		</div>
		
		<div class="col-md-6 step">
			<div>
				<h3>Step <span>2</span></h3>
				<h6>Find a Treatment or Checkup</h6>
			</div>	
		</div>
		<div  class="col-md-6 step">
			<div>
				<h3>Step <span>3</span></h3>
					<h6>Checkup</h6>
			</div>
		</div>
		<div  class="col-md-6 step">
			<div>
				<h3>Step <span>4</span></h3>
					<h6>Ready to go</h6>
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
		font-size: 2rem;
		border-bottom:  2px solid var(--primary-color);
	}
	li{
		list-style: none;
	}
	.step{
		padding: 1rem;
	}
	.list-steps{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.how-it-work{
		margin-top: 4rem;
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
	@media only screen and (max-width: 768px){

	}
</style>