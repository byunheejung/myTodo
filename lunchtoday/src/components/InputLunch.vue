<template>
    <section class="wrap-ipt">
        <select v-model="selected" @change="selectChange(selected)">
            <option v-for="option in lunchGroup" v-bind:key="option.value">{{option.text}}</option>
        </select>
        <input type="text" class="ipt-lunch">
        <button class="btn-add">메뉴추가</button>
        <button class="btn-spin">오늘 뭐먹을지 돌려보자</button>
    </section>
</template>

<script>
export default {
  name: 'InputLunch',
  data() {
    return {
      selected: 'default'
    }
  },
  props: {
    lunchGroup: null
  },
  created() {
    this.lunchGroup = this.$store.state.options;
  },
  methods: {
    selectChange(selected) {
        if(selected == 'new'){
            this.showPopup = true;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
