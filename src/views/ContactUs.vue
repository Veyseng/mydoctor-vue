<template>
<div class="contactus">
  <The-Contact></The-Contact>
</div>
  
</template>

<script>
import Contact from "../components/Contact.vue"
export default {
  components:{
    "The-Contact" : Contact
  }
}
</script>

<style>
  .contactus{
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background: url('../../src/assets/contactus.jpg') center/cover no-repeat;
  }
</style>