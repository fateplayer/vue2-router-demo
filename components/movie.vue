<template>
<div class="movie">
      <el-menu :default-active="$route.path" mode="horizontal" theme="dark" router>
        <el-menu-item index="/movie/wntj">为您推荐</el-menu-item>
        <el-menu-item index="/movie/cx">畅销</el-menu-item>
        <el-menu-item index="/movie/xpsx">新片上线</el-menu-item>
        <el-menu-item index="/movie/lx">类型</el-menu-item>
        <el-menu-item index="/movie/zpgs">制片公司</el-menu-item>
      </el-menu>
	  <router-view/>
</div>
</template>

<script>
export default {
	  created:function(){
		   this.$router.push({path: '/movie/wntj'});
	  }
  }
</script>


<style>

</style>
