<template>
		<!--The hero -->
    <div class="hero-content">
      <div class="container">
        <The-Hero></The-Hero>
      </div>
    </div>
	<div class="container">
     <The-AboutUs ></The-AboutUs>
  </div>
  <div class="available">
  <div class="container">
    <The-Benifit></The-Benifit>
  </div>
  </div>
    <The-Service></The-Service>
  
    
  <div class="container">
    <The-How ></The-How>
  </div>
  <div class="available">
    <div class="container ">
    <The-Available ></The-Available>
    </div>
  </div>
  
  <div class="container">
    <The-Testimony></The-Testimony>
    <The-Stay-In-Touch></The-Stay-In-Touch>
  </div>
   
  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->

  <!-- Columns are always 50% wide, on mobile and desktop -->
 
</template>

<script>
import Hero from '../components/LandingPage/Hero.vue'
import TheTestimony from '../components/LandingPage/Testimony.vue'
import TheService from '../components/LandingPage/Service.vue'
import TheBenifit from '../components/LandingPage/Benifit.vue'
import TheAboutUs from '../components/LandingPage/AboutApp.vue'
import HowItWork from '../components/LandingPage/HowItWork.vue'
import AvailableSoon from '../components/LandingPage/AvailableSoon.vue'
import StayInTouch from '../components/LandingPage/StayInTouch.vue'
export default {
	components:{
		"The-Hero" : Hero,
    "The-Testimony" : TheTestimony,
    'The-Service' : TheService,
    'The-Benifit' : TheBenifit,
    'The-AboutUs' : TheAboutUs,
    'The-How' : HowItWork,
    'The-Available' : AvailableSoon,
    'The-Stay-In-Touch' : StayInTouch,
StayInTouch
	}
}
</script>
<style scoped>
  .hero-content{
    /*background:  linear-gradient(
		to top right, 
		var(--primary-color), var(--secondary-color)
	  );*/
     background: linear-gradient(-45deg, var(--primary-color), var(--secondary-color));
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
  .available{
    background: #fff;
  }
  
	.container-fluid{
		width: 100vw;
    padding: 0;
	}
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>