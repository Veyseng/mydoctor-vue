<template>

<div class="carousel-content">
  <flickity  class="flickity" ref="flickity" :options="flickityOptions">
    <div class="carousel-cell">
		<h1>Hello</h1>
	</div>
    <div class="carousel-cell"></div>
  </flickity>
  </div>
</template>
<script>
import Flickity from 'vue-flickity'

export default {
	components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        freeScroll: true
        // any options from Flickity can be used
      }
    }
  }

}
</script>

<style>
	.carousel-content{
		margin: 2rem;
	}
	.carousel {
		background: var(--white-color);
		margin: 2rem ;
	}

.carousel-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: var(--secondary-color);
  border-radius: 5px;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  line-height: 200px;
  font-size: 80px;
  color: white;
}
.carousel-cell.is-selected {
  background: var(--primary-color);
}
.flickity-page-dots .dot {
  width: 12px;
  height: 12px;
  opacity: 1;
  background: transparent;
  border: 2px solid var(--primary-color);
}
/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
  background: var(--primary-color);
}
.flickity-prev-next-button {
  width: 30px;
  height: 30px;
  border-radius: 5px;
}
/* icon color */
.flickity-button-icon {
  fill: var(--primary-color);
}
@media only screen and (max-width: 768px){
   .carousel-cell {
    width: 80%;
  }
}
</style>