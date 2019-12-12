<template>
    <h2 class="today-lunch">
        오늘의 메뉴는 {{todayLunch}}입니다.
    </h2>
</template>

<script>
export default {
  name: 'ViewToday',
  props: {
    // msg: String
  },
  computed: {
    todayLunch() {
      return this.$store.state.todayLunch;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
