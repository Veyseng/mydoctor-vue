<template>
  <header class="header" >
        <nav class="navbar">
            <router-link class="nav-link nav-logo" to="/">
              <img src="../../src/assets/logo.svg" alt="">
            </router-link>
            <ul class="nav-menu">
              <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#aboutapp" class="nav-link">About Us</a>
                </li>
                <li class="nav-item">
                    <a href="#service" class="nav-link">Services</a>
                </li>
                <li class="nav-item">
                    <a href="#work" class="nav-link">How it works?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link CTA" href="#contact">Contact Us</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>
</template>

<script>
export default {
  mounted(){
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }

  a {
      text-decoration: none;
  }

  ul{
    margin: 0;
    padding: 0;
  }

  .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .2rem 1.7rem;
      position: fixed;
      width: 100vw;
      background: white;
      z-index: 1;
      top: 0;
  }
  .hamburger {
    display: none;
  }
  img{
    width: 3.2rem;
  }
.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: var(--primary-color);
}
  .nav-menu {
      display: flex;
      justify-content: center;
      align-items: center;
  }

.nav-item {
    margin: 0 1rem ;
}

.nav-link{
    font-size: 1.2rem;
    font-weight: 400;
    color: #475569;
}

.nav-link:hover{
    color: var(--primary-color);
}
.CTA{
  color: var(--primary-color);
  border-radius: 10px;
  border: 1px solid var(--primary-color)
}
.CTA:hover{
  background: var(--primary-color);
  color: var(--white-color);

}
.nav-logo {
    font-size: 2rem;
    font-weight: 500;
    color: var(--primary-color);
}
@media only screen and (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 5rem;
        flex-direction: column;
        background-color: var(--white-color);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow:
            0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-item {
        margin: 1rem 0;
    }

    .hamburger {
        display: block;
        cursor: pointer;
    }
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }


}


</style>