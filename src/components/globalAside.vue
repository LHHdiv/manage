<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="skyblue"
  >
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label}}</span>
    </el-menu-item>
    <el-submenu :index="item.path" v-for="(item,index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subIndex">
        <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  components: {},
  computed: {
    // 使用计算属性过滤下菜单数据menuList(判断是否有子级菜单)
    noChildren() {
      return this.menuList.filter(item => !item.children)
    },
    hasChildren() {
      return this.menuList.filter(item => item.children)
    }
  },
  data() {
    return {
      // 设置菜单数据
      menuList: [
        {
          path: '/', //  路径
          label: '首页', //  菜单的名字
          icon: 's-home' //  字体图标
        },
        {
          path: '/video',
          label: '视频管理页',
          icon: 'video-play'
        },
        {
          path: '/user',
          label: '用户管理',
          icon: 'user'
        },
        {
          path: '/setting',
          label: '其他',
          icon: 'setting',
          children: [
            // 设置二级路由
            {
              path: '/page1',
              label: '页面1'
            },
            {
              path: '/page2',
              label: '页面2'
            }
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.el-menu {
  height: 100%;
}
</style>