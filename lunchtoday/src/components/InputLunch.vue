<template>
    <section class="wrap-ipt">
        <select v-model="defaultLunchGroup">
            <option v-for="option in setLunchGroup" v-bind:key="option.value">{{option.text}}</option>
        </select>
        <input type="text" class="ipt-lunch" v-model="newMenu" v-on:keyup.13="addLunch">
        <button class="btn-add" @click="addLunch">메뉴추가</button>
        <button class="btn-spin" @click="spinlunch">오늘 뭐먹을지 돌려보자</button>
    </section>
</template>

<script>
export default {
  name: 'InputLunch',
  created() {
    
  },
  props: {
    
  },
  data() {
    return {
      newMenu: null,
      lunchMenu: this.$store.state.lunchMenu,
    }
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
    },
    setSaveWheel: {
      get: function() {
          return this.$store.state.saveWheel;
      }
    }
  },
  methods: {
    addLunch() {
      if(this.newMenu == null){
        return;
      } else {
        // vuex store addLunch 커밋하고
        this.$store.commit('addLunchList', this.newMenu);
        // 인풋 초기화
        this.newMenu = null;
      }
    },
    spinlunch() {
      let rand2 = Math.floor(Math.abs(Math.random() * 10000)) + (360/this.lunchMenu.length) + 1;
      if(this.lunchMenu.length > 0) {
          const canvas = document.querySelector('.lunchCircle');
          canvas.style.transform = "rotate("  + rand2 + "deg)"
          // canvas의 트랜지션 이벤트가 끝나고 나서 saveCurrentWheel 메서드 실행
          // this bind 문제 때문에 arrow function을 사용, arrow function을 사용 하면
          // arrow function 안에서의 this는 obj를 가리키기 때문에 scope 변화 없음.
          canvas.addEventListener('webkitTransitionEnd',() => {
              this.saveCurrentWheel(rand2);
          }, false);
      } else {
          alert('메뉴를 입력해 주세요.');
      }
    },
    saveCurrentWheel(current) {
        this.todayLunch = '';
        var randomDeg = 360 - (current % 360);
        var len = this.lunchMenu.length;
        var sliceDeg = 360/len;
        var saveWheel = this.setSaveWheel;
        
        for(var i = 0; i < len; i++) {
            if(randomDeg > saveWheel[i].deg && saveWheel[i].deg + sliceDeg > randomDeg){
                // 정말 이딴식으로 하는것이 맞는가?
                this.$store.commit('updateResult', {'menu': saveWheel[i].menu, 'color': saveWheel[i].color});
            }
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
