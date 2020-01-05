<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader />
      </el-header>
      <el-container>
        <el-aside width="240px" >
          <navmenu ></navmenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    'navmenu': NavMenu,
    'vheader': Header
  }
}
</script>

<style>
.header {
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
}
body > .el-container {
  margin-bottom: 0px;
}
.el-aside {
  background-color: "#545c64";
}
html{  
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */}
</style>