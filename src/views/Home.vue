<template>
  <div class="container mt-2">

    <splide :options="options" @splide:moved="moved">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt">
      </splide-slide>
    </splide>
  </div>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
export default {
  name: 'home',
  components: {Splide,SplideSlide},
  data() {
    return {
      options: {
        rewind: true,
        gap   : '1rem',
      },
      slides: [
        {src:'/assets/slider-good4u.jpg'},
        {src:'/assets/slider-mylife.jpg'},
        {src:'/assets/slider-bts.jpg'},
      ]
    };
  },
  methods: {
      moved( splide, newIndex ) {
        console.log( 'moved', newIndex );
      },
    },
}
</script>

<style scope>
  #main {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>