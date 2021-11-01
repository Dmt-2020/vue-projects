<template>
  <div class="home" style="overflow: hidden">
    <div class="main-left">
      <el-radio-group v-model="isCollapse" size="small" class="radio-group">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
      default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span slot="title">项目总结</span>
          </template>
          <el-menu-item-group>
            <router-link to="/program"
              ><el-menu-item index="1-1"
                ><i class="el-icon-data-line"></i>项目展示</el-menu-item
              ></router-link
            >
            <router-link to="/echarts"
              ><el-menu-item index="1-2"
                ><i class="el-icon-s-data"></i>echarts</el-menu-item
              ></router-link
            >
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">bug总结</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-s-opportunity"></i>
          <span slot="title">blog心得</span>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 主体部分 -->
    <div class="main-float-right">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components:{
    // Program:()=>import('./program/SelfTable.vue')
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.radio-group {
  margin: 20px 0px 20px 5px;
}
.main-left {
  display: inline-block;
  width: 20%;
}
.main-float-right {
  float: right;
  margin: 20px 20px 0 20px;
  width: 76%;
}
a {
  text-decoration: none;
  outline: none;
  color: inherit;
}
</style>
