<template>
    <el-container style="height:100%">
      <el-aside><global-aside></global-aside></el-aside>
      <el-container>
        <el-header><global-header /></el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>
<script>
// 引入globalHeader和globalAside组件
import globalHeader from '../components/globalHeader'
import globalAside from '../components/globalAside'
export default {
  components: {
    globalHeader,
    globalAside
    },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
el-container{
  height: 100%;
}
</style>