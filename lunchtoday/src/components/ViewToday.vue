<template>
    <h2 class="today-lunch" v-if="todayLunch">
        오늘의 메뉴는 <span v-bind:style="{color: todayColor}">{{todayLunch.menu_name}}</span>입니다.
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
    },
    todayColor() {
      return this.$store.state.currentTxtColor
    }
  },
  watch: {
    todayLunch() {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
