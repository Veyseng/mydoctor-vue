<template>
  
  <The-Progress></The-Progress>
  <The-Header></The-Header>
  <router-view></router-view>
  <The-Footer></The-Footer>
  
</template>
<script>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"
import TheProgress from './components/LandingPage/Progress.vue'
export default {
  components:{
    'The-Header' : TheHeader,
    'The-Footer' : TheFooter,
    'The-Progress' : TheProgress
  },
  setup() {
    
  },
  onMounted(){
  }
  ,
  mounted(){
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
body{
  font-family:  'Poppins', sans-serif;
  margin: 0;
}

/*Main Menu*/
:root{
	--primary-color: #8B61DE;
	--secondary-color: #03B1A7;
  --white-color: #ffffff;
  --gray-color: #444343;
  --lightgray-color : #eceaea;
}

#app{
	height: auto;
	background-color: var(--white-color);
}
.router-link-active{
  color: #8B61DE;
}

</style>
