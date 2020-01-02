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
  computed: {
    getLunchMenu() {
      return this.$store.state.moduleMenu.menus;
    }
  },
  methods: {
      removeLunch(menu) {
          // 삭제해 삭제해
          const delArr = {
            group_id: '',
            menu_name: ''
          };

          delArr.group_id = menu.group_id;
          delArr.menu_id = menu.menu_id

          this.$store.dispatch('deleteMenu', delArr);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
