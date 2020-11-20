<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>TinyUI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/cajohan">Github</a>
        <a href="http://localhost:3000/#/xxx">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
  components:{Topnav}
}
</script>

<style lang="scss" scoped></style>
