<template>
  <div class="gHeader">
    <el-button type="primary" size="mini" icon="el-icon-menu"></el-button>
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
}
</style>
