<template>
    <section class="wrap-lunch">
        빌어먹을 캔바스를 그려보자
        <!-- <div class="arrow" v-if="this.lunchMenu.length > 0"></div> -->
        <div class="lunchCircle">
            <canvas id="lunchMenuCircle" width="500" height="500"></canvas>
        </div>
    </section>
</template>

<script>
export default {
  name: 'LunchCanvas',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
