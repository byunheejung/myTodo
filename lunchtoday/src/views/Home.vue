<template>
  <div id="lunchCanvas">
    <section class="container">
      <ViewToday />
      <InputLunch />
      <LunchCanvas />
      <LunchMap />
    </section>
    <SideLunch />
  </div>
</template>

<script>
// @ is an alias to /src
import LunchCanvas from '@/components/LunchCanvas.vue'
import InputLunch from '@/components/InputLunch.vue'
import SideLunch from '@/components/SideLunch.vue'
import ViewToday from '@/components/ViewToday.vue'
import LunchMap from '@/components/LunchMap.vue'

export default {
  name: 'home',
  components: {
    LunchCanvas,
    InputLunch,
    SideLunch,
    ViewToday,
    LunchMap
  },
  created() {
    this.$store.dispatch('selectAllMenus');
  }
}
</script>
