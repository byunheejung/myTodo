<template>
    <section class="wrap-ipt">
        <select v-model="defaultLunchGroup">
            <option v-for="option in setLunchGroup" v-bind:key="option.value">{{option.text}}</option>
        </select>
        <input type="text" class="ipt-lunch">
        <button class="btn-add">메뉴추가</button>
        <button class="btn-spin">오늘 뭐먹을지 돌려보자</button>
    </section>
</template>

<script>
export default {
  name: 'InputLunch',
  created() {
    
  },
  computed: {
    setLunchGroup() {
      // 바로 created 에서 props에 복사 하면 안되고 computed 를 이용해서 받아와서 조작해야함
      return this.$store.state.options;
    },
    defaultLunchGroup: {      
      get: function() {
          return this.$store.state.options[0].text;
      },
      set: function(value) {
        this.$store.commit('updateCurrentSelect', value)
      }
    }
  },
  methods: {
    selectChange(value) {
      this.selected = value;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
