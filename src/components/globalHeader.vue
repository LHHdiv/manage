<template>
  <div class="gHeader">
    <div class="breadCrumb">
      <el-button type="primary" size="mini" icon="el-icon-menu"></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>视频管理页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>其他</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-dropdown trigger="click" class="userPic">
      <span class="el-dropdown-link">该处放个人头像</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          :icon="'el-icon-' + userItem.icon"
          v-for="(userItem, index) in userMenu"
          :key="index"
          >{{ userItem.label }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userMenu: [
        {
          path: "user",
          label: "个人中心",
          icon: "user-solid"
        },
        {
          path: "singOut",
          label: "退出",
          icon: "warning"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.gHeader {
  height: 100%;
  display: flex;
  align-items: center; //  设置水平居中
  justify-content: space-between;
}
.userPic:hover {
  cursor: pointer;
}
.el-button {
  height: 40px;
  width: 40px;
  margin-right: 10px;
}
.breadCrumb {
  display: flex;
  align-items: center;
}
</style>
