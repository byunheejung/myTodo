<template>
  <div id="lunchCanvas">
    <section class="container">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <InputLunch />
      <LunchCanvas />
    </section>
    <SideLunch />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LunchCanvas from '@/components/LunchCanvas.vue'
import InputLunch from '@/components/InputLunch.vue'
import SideLunch from '@/components/SideLunch.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LunchCanvas,
    InputLunch,
    SideLunch
  }
}
</script>
