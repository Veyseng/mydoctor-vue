<template>
  <div id="progress-bar"></div>
</template>

<script>
export default {
	mounted(){
		var bar = document.getElementById('progress-bar');

    window.onscroll = function (e) {
        var vheight = document.body.offsetHeight - window.innerHeight;
        var barWidth = (window.pageYOffset * 100 / vheight)
        bar.style.width = barWidth + '%'
    }
	}
}
</script>

<style>
	#progress-bar {
    background: linear-gradient(45deg, var(--primary-color),var(--secondary-color));
    height: 3px;
    width: 0px;
    position: fixed;
    top: 0;
    left: 0;
	  z-index: 10;
  }
</style>