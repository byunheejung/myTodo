<template>
    <section>
      <div>
        <label>그룹명</label>
        <input type="text" class="ipt-group" v-model="newGroupName">
        <button class="btn-test-add" @click="addGroup" value="submit">메뉴추가</button>
      </div> 

      <div>
        <label>그룹ID</label>
        <input type="text" class="ipt-group" v-model="delGroupId">
        <!-- <input type="text" class="ipt-group" v-model="delGroupName"> -->
        <button class="btn-test-delete" @click="delGroup" value="submit">메뉴삭제</button>
      </div>

      <div>  
        <label>그룹ID</label>
        <input type="text" class="ipt-group" v-model="modiGroupId">
        <label>그룹명</label>
        <input type="text" class="ipt-group" v-model="modiGroupName">
        <button class="btn-test-modify" @click="modiGroup" value="submit">메뉴수정</button>
      </div>

      <div>
        <button class="btn-test-search" @click="searchGroup">메뉴조회</button>
      </div>  
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
  data() {
    return {
      newGroupName: null,
      delGroupId: null,
      modiGroupId: null,
      modiGroupName: null
    }
  },
  computed: {
    groupList() {
      return this.$store.state.groups;
    }
  },
  methods: {
    searchGroup() {
      this.$store.dispatch('selectAllGroups');
    },
    addGroup() {
      if (this.newGroupName == null) {
        return;
      }

      this.$store.dispatch('insertGroup', this.newGroupName);
    },
    delGroup() {
      if (this.delGroupId == null) {
        return;
      }

      this.$store.dispatch('deleteGroup', this.delGroupId);
    },
    modiGroup() {
      const arr = {
        group_id: '',
        gorup_name: ''
      };

      if (this.modiGroupName == null || this.modiGroupId == null) {
        return;
      }

      arr.group_id = this.modiGroupId;
      arr.group_name = this.modiGroupName;

      this.$store.dispatch('updateGroup', arr);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ipt-group {
    border: 1px solid #444;
    margin-left: 10px;
  }
</style>