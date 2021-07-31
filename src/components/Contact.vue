<template>

  <div class="contact" >
    <form class="form" 
       @submit.prevent="handleSubmit" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <h1 >Thank You For Your Interest!</h1>
      <p>Contact Us For More Information</p>
      <h3 class="success-text" v-if="success"><i class="fas fa-check-circle"></i> Our system has recieved your submission!</h3>
      <div class="form-floating">
        <input type="text" name="name" v-model="form.name" class="form-control" id="floatingText" placeholder="text" required>
        <label for="floatingPassword">Name</label>
      </div>
      <div class="form-floating">
        <input type="email" name="email" v-model="form.email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
        <label for="floatingInput">Email Address</label>
      </div>
      <div class="form-floating">
        <input type="text" name="position" v-model="form.position" class="form-control" id="floatingText" placeholder="text" required>
        <label for="floatingPassword">Position</label>
      </div>
      <div class="form-floating">
        <input type="text" name="objective" v-model="form.objective" class="form-control" id="floatingText" placeholder="text" required>
        <label for="floatingPassword">Objective</label>
      </div>
      <div class="CTA-btn">
        <button class="w-40 btn btn-lg btn-primary" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
      form: {
        name: '',
        email: '',
        objective: '',
        position: ''
      },
      success : false
    }),
    methods: {
      encode(data) {
        return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
      },
      handleSubmit() {
        fetch('/', {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: this.encode({
            'form-name': 'contact',
            ...this.form
          })
        })
        .then(() => {
            console.log('successfully sent');
            this.success = true
            this.form.name = ''
            this.form.position = ''
            this.form.email = ''
            this.form.objective = ''
        })
        .catch(e => console.error(e))
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
  .success-text{
    font-size: 1rem;
    padding: 5px;
    border-radius: 10px;
    display: inline-block;
    background: #4BB543;
    color: var(--white-color)
  }
  input{
    margin: 1rem 0;
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
    color: var(--primary-color);
  }
  p{
    padding: 2px;
    color: var(--secondary-color);
  }
  .CTA-btn{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  button{
	  color: var(--white-color);
	  background: var(--primary-color);
	  border: 1px var(--primary-color) solid;
	  margin: 1rem; 
  }
  .btn:hover{
	  color: var(--primary-color);
	  border: 1px var(--primary-color) solid;
    background: var(--white-color);
  }
  @media only screen and (max-width: 768px){
	  form{
    	width: 100vw;
      border: none;
  	}
  }
</style>