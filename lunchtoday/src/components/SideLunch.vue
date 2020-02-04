<template>
    <aside class="sidebar">
        <div class="list-lunch">
            <div class="current-lunch" v-for="menu in getLunchMenu" :key="menu.menu_id">
                <strong class="name">{{menu.menu_name}}</strong>
                <button class="btn-delete" @click="removeLunch(menu)">삭제</button>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
  name: 'SideLunch',
  created(){
    this.$store.dispatch('selectAllMenus');
  },
  computed: {
    getLunchMenu: {
      get: function() {
        return this.$store.state.moduleMenu.allMenus;
      }
    }
  },
  methods: {
      removeLunch(menu) {
          this.$store.dispatch('deleteMenu', menu.menu_id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
