<template>
	<div id="contact">

	</div>
	<div class="row hero" >
	   <div class="col-md-6">
		   <div class="social-media">
		   </div>
		</div>
		<div class="col-md-6  hero-content ">
			<The-Contact></The-Contact>
		</div>
	</div>
	

</template>

<script>
import contact from '../Contact.vue'
export default {
	components:{
		'The-Contact' : contact
	}
}
</script>

<style scoped>
	#contact{
		padding-top: 8rem;
		border: none;
	}
	h1{
		color:var(--secondary-color)
	}
	.row{
		margin-bottom: 5rem;
		border-radius: 5px;
		background: url('../../../src/assets/kids.jpeg') right/cover no-repeat;
	}
</style>