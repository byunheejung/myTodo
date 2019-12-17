<template>
    <section>
        <!-- <button class="btn-test-add" @click="addGroup">메뉴추가</button> -->
        <button class="btn-test-delete">메뉴삭제</button>
        <button class="btn-test-modify">메뉴수정</button>
        <button class="btn-test-search">메뉴조회</button>
        <div class="container">
          <table class="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="group in getGroup" :key="group.group_id">
                <td>{{ group.group_id }}</td>
                <td>{{ group.group_name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </section>    
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'testCRUD',
  // mounted () {
  //   this.$store.dispatch('loadGroups')
  // },
  data() {
    return {
      getGroup: this.$store.state.groups
    }
  },
  computed: {
  
  }
  // props: {
      
  // },
  // methods: {
  //     addGroup: function() {
  //       //   axios({
  //       //       method: 'GET',
  //       //       url: '/api/contacts',
  //       //       params: {
  //       //           page: 1,
  //       //           pagesize: 5
  //       //       }
  //       //   }).then((respose) => {
  //       //       console.log(response);
  //       //       this.result = respose.dta;
  //       //   }).catch((ex) => {
  //       //       console.log('ERROR : ', ex);
  //       //   })
  //     }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>