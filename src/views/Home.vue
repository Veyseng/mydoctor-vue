<template>
	<div class="container">
		<!--The hero -->
		<The-Hero></The-Hero>
    <The-AboutUs ></The-AboutUs>
    <The-Benifit></The-Benifit>
    <The-Service></The-Service>
    <The-How ></The-How>
    <The-Available></The-Available>
    <The-Testimony></The-Testimony>
    <The-Stay-In-Touch></The-Stay-In-Touch>
  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->

  <!-- Columns are always 50% wide, on mobile and desktop -->
 
</div>
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
