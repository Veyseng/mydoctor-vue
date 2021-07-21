<template>
	<div class="container">
		<!--The hero -->
		<The-Hero></The-Hero>
    <The-Checkup></The-Checkup>
    <The-Treatment></The-Treatment>
    <The-Benifit></The-Benifit>
    <The-Testimony></The-Testimony>
  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  

  <!-- Columns are always 50% wide, on mobile and desktop -->
 
</div>
</template>

<script>
import Hero from '../components/LandingPage/Hero.vue'
import TheTestimony from '../components/LandingPage/Testimony.vue'
import TheTreatment from '../components/LandingPage/Treatment.vue'
import TheCheckup from '../components/LandingPage/Checkup.vue'
import TheBenifit from '../components/LandingPage/Benifit.vue'

export default {
	components:{
		"The-Hero" : Hero,
    "The-Testimony" : TheTestimony,
    'The-Treatment' : TheTreatment,
    'The-Checkup' : TheCheckup,
    'The-Benifit' : TheBenifit
	}
}
</script>
