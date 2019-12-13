<template>
    <aside class="sidebar">
        <div class="list-lunch">
            <div class="current-lunch" v-for="(lunch, n) in getLunchMenu" v-bind:key="n">
                <strong class="name">{{lunch}}</strong>
                <button class="btn-delete" @click="removeLunch(n)">삭제</button>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
  name: 'SideLunch',
  computed: {
    getLunchMenu() {
      return this.$store.state.lunchMenu
    }
  },
  methods: {
      removeLunch(n) {
          this.$store.commit('deleteLunch', n);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
