<template>
<div class="book">
      <el-menu :default-active="$route.path" mode="horizontal" theme="dark" router>
        <el-menu-item index="/book/ysdw">有声读物</el-menu-item>
        <el-menu-item index="/book/dzs">电子书</el-menu-item>
        <el-menu-item index="/book/lx">类型</el-menu-item>
        <el-menu-item index="/book/cx">畅销</el-menu-item>
        <el-menu-item index="/book/xsj">新上架</el-menu-item>
        <el-menu-item index="/book/rmmfnr">热门免费内容</el-menu-item>
      </el-menu>
	  <router-view/>
</div>
</template>

<script>
export default {
	  created:function(){
		   this.$router.push({path: '/book/ysdw'});
	  }
  }
</script>


<style>

</style>
