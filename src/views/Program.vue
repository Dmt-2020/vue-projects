<template>
  <div class="program">
    <div class="program-header">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/program/table' }"
          >表格管理</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/program/form' }"
          >表单管理</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/program/sass' }"
          >测试sass</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/program/preproject' }"
          >正式页面</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/program/virtualtable' }"
          >虚拟列表</el-breadcrumb-item
        >
        <el-breadcrumb-item>待定。。</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="program-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.program-main {
  margin-top: 30px;
  width: 100%;
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  font-weight: 400 !important;
}
</style>