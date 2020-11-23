<demo>
支持显示加载中
</demo>
<template>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../lib/index'; //这里使用的是相对路径
export default {
  components: {
    Button
  }
}
</script>