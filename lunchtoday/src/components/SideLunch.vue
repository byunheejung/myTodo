<template>
    <aside class="sidebar">
        <div class="list-lunch">
            <div class="current-lunch">
                <strong class="name"></strong>
                <button class="btn-delete">삭제</button>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
  name: 'SideLunch',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
