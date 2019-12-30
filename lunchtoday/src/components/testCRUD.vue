<template>
    <section>
      <div>
        <label>그룹명</label>
        <input type="text" class="ipt-group" v-model="newGroupName">
        <button class="btn-test-add" @click="addGroup" value="submit">메뉴그룹추가</button>
      </div> 

      <div>
        <label>그룹ID</label>
        <input type="text" class="ipt-group" v-model="delGroupId">
        <!-- <input type="text" class="ipt-group" v-model="delGroupName"> -->
        <button class="btn-test-delete" @click="delGroup" value="submit">메뉴그룹삭제</button>
      </div>

      <div>  
        <label>그룹ID</label>
        <input type="text" class="ipt-group" v-model="modiGroupId">
        <label>그룹명</label>
        <input type="text" class="ipt-group" v-model="modiGroupName">
        <button class="btn-test-modify" @click="modiGroup" value="submit">메뉴그룹수정</button>
      </div>

      <div>
        <button class="btn-test-search" @click="searchGroup">메뉴그룹조회</button>
      </div>  
      <div class="container">
        <table class="table test-table">
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


      <div>
        <label>그룹ID</label>
        <input type="text" class="ipt-group" v-model="searchGroupId">
        <button class="btn-test-search" @click="searchMenu">메뉴조회</button>
      </div>  
      <div class="container">
        <table class="table test-table">
          <thead>
            <tr>
              <th>group_id</th>
              <th>menu_id</th>
              <th>menu_name</th>
              <th>hide_yn</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="menu in menuList" :key="menu.group_id">
              <td>{{ menu.group_id }}</td>
              <td>{{ menu.menu_id }}</td>
              <td>{{ menu.menu_name }}</td>
              <td>{{ menu.hide_yn }}</td>
            </tr>  
          </tbody>
        </table>
      </div>
           
    </section>    
</template>

<script>
export default {
  name: 'testCRUD',
  created() {
    // this.$store.dispatch('selectAllGroups');
    this.$store.dispatch('selectMenusOneGroup', 4);
  },
  data() {
    return {
      newGroupName: null,
      delGroupId: null,
      modiGroupId: null,
      modiGroupName: null,
      searchGroupId: null
    }
  },
  computed: {
    groupList() {
      return this.$store.state.menuGroup.groups;
    },
    menuList() {
      return this.$store.state.menu.menus;
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

      var groups = this.$store.state.menuGroup.groups;
      for (var i = 0; i < groups.length; i++) {
        if (groups[i] == this.newGroupName) {
          alert('동일한 group명이 있습니다. 다시 확인해 주세요.');
          return;
        }
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
    },
    searchMenu() {
      this.$store.dispatch('selectMenusOneGroup', this.searchGroupId);
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

  .test-table {
    margin: 50px auto;
  }
</style>