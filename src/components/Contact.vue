<template>

  <div class="contact" >
     <form class="form" name="contact" method="POST" v-on:submit.prevent="handleSubmit" data-netlify="true" action="/success" 
  data-netlify-honeypot="bot-field">
   
    <h1 >Thank you for your interest!</h1>
    <p>Contact us for more information</p>

    <div class="form-floating">
      <input type="text" name="name" class="form-control" id="floatingText" placeholder="text" required>
      <label for="floatingPassword">Name</label>
    </div>
    <div class="form-floating">
      <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">Email Address</label>
    </div>
    <div class="form-floating">
      <input type="text" name="position"  class="form-control" id="floatingText" placeholder="text" required>
      <label for="floatingPassword">Position</label>
    </div>
    <div class="form-floating">
      <input type="text" name="objective" class="form-control" id="floatingText" placeholder="text" required>
      <label for="floatingPassword">Objective</label>
    </div>
    <button class="w-40 btn btn-lg btn-primary" type="submit">Submit</button>
    
  </form>
  </div>
</template>

<script>
export default {
  data(){
      return {
      formData: {},
    }
  },
  methods: {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  },
  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => this.$router.push('/success'))
    .catch(error => alert(error))
  }
}
}
</script>

<style scoped>
  .contact{
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 
  form{
    width: 40vw;
	background-color: rgb(255, 255, 255);
	padding: 2rem;
	border-radius: 10px;
	 box-shadow:
            0 10px 27px rgba(73, 73, 73, 0.2);
  }
  input:focus{
    box-shadow: none;
    border-color: var(--primary-color);
  }
  h1{
	  display: inline-block;
	  padding: 2px;
	  background: -webkit-linear-gradient(45deg,var(--primary-color), var(--secondary-color));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
  }
  .btn{
	  display: flex;
	  justify-content: center;
	  color: var(--white-color);
	  background: var(--primary-color);
	  border: none;
	  margin: 1rem;
  }
  .btn:hover{
	  color: var(--primary-color);
	  background: var(--white-color);
	  border: none;
  }
  @media only screen and (max-width: 768px){
	  form{
    	width: 80vw;
  		}
  }
</style>