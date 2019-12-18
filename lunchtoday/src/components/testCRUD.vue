<template>
    <section>
        <!-- <button class="btn-test-add" @click="addGroup">메뉴추가</button> -->
        <button class="btn-test-delete">메뉴삭제</button>
        <button class="btn-test-modify">메뉴수정</button>
        <button class="btn-test-search" @click="searchGroup">메뉴조회</button>
        <div class="container">
          <table class="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="group in groupList" :key="group.group_id">
                <td>{{ group.group_id }}</td>
                <td>{{ group.group_name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </section>    
</template>

<script>
export default {
  name: 'testCRUD',
  computed: {
    groupList() {
      return this.$store.state.groups;
    }
  },
  methods: {
    searchGroup() {
      this.$store.dispatch('selectAllGroups');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>