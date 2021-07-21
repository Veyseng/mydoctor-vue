<template>
  <div class="py-4">
    <The-Header />
  </div>
  <router-view></router-view>
  
</template>
<script>
import TheHeader from "./components/TheHeader.vue"
export default {
  components:{
    'The-Header' : TheHeader
  },
  setup() {
    
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=raleway:wght@300&display=swap');

body{
  font-family:  'Poppins', sans-serif;
  margin: 0;
}

/*Main Menu*/
:root{
	--primary-color: #8B61DE;
	--secondary-color: #03B1A7;
  --white-color: #ffffff;
  --gray-color: #2c2b2b;
}

#app{
	height: auto;
	background-color: var(--primary-color);
	background-image:
	  linear-gradient(
		to top right, 
		var(--primary-color), var(--secondary-color)
	  );
}
</style>
