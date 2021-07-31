<template>
	<div class="header">
		<div class="row hero" id="element">
			<div class="col-md-6 hero-image">
			</div>
			<div class="col-md-6  hero-content ">
				<h1 class="hero-text ">Connect to the best Heathcare</h1>
				<p>Enhance your health checkup and treatment via our online platform where you can access anywhere in Cambodia.</p>
				<div>
					<a class="CTA" href="#contact"><span class="CTA-text">Connect with us</span> </a>
				</div>			
			</div>
				<to-top class="arrow"></to-top>
			
  		</div>
	</div>
</template>

<script>

import totop from './Arrow.vue'
export default {
	components:{
		'to-top' : totop
	}
}
</script>

<style scoped>
	p{
		color: var(--white-color)
	}
	.header{
		height: auto;
	}
	.hero{
		padding-top: 8rem;
		border-radius: 10px;
		height: auto;
		
	}
	.hero-image{
		height: 40vh;
		background: url('../../../src/assets/hero-updatedpic.jpeg') center/cover no-repeat;
		border-radius: 10px;
	}
	.hero-content{
		display: flex;
		flex-direction: column;
		height: auto;
		padding: 0 2rem;
		justify-content: center;

	}
	.CTA-text{	
	  background: -webkit-linear-gradient(45deg,var(--primary-color), var(--secondary-color));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.hero-text{
		font-size: 2.3rem;
		color: var(--white-color);
	}
	.CTA{
		background: var(--white-color);
		text-decoration: none;
		color: var(--primary-color);
		padding: 2px;
		font-size: 1.4rem;
		border-radius: 10px;
	}
	/*Subhero */
	.sub-hero{
		height: auto;
	}
	.arrow{
		height: auto;
	}
	#element{
animation:.5s ease .5s normal forwards 1 fadein;
-webkit-animation:.5s ease .5s normal forwards 1 fadein;
opacity:0
}
@keyframes fadein{from{opacity:0}
to{opacity:1}
}

@-webkit-keyframes fadein{from{opacity:0}
to{opacity:1}
}
	@media only screen and (max-width: 600px) {
		.hero{
			padding-top: 8rem;
			height: 100vh;
		}
		.hero-image{
			height: 30vh;
		}
		.hero-content{
			height: auto;
		}
		.arrow{
			height: 10vh;
		}

	}

</style>