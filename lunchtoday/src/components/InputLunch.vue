<template>
    <section class="wrap-ipt">
        <select>
            <!-- <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option> -->
        </select>
        <input type="text" class="ipt-lunch">
        <button class="btn-add">메뉴추가</button>
        <button class="btn-spin">오늘 뭐먹을지 돌려보자</button>
    </section>
</template>

<script>
export default {
  name: 'InputLunch',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
