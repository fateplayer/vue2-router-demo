<template>
<div class="home">
      <el-menu :default-active="$route.path" mode="horizontal" theme="dark" router>
        <el-menu-item index="/home/wntj">为您推荐</el-menu-item>
        <el-menu-item index="/home/rmphb">热门排行榜</el-menu-item>
        <el-menu-item index="/home/lb">类别</el-menu-item>
        <el-menu-item index="/home/bjjx">编辑精选</el-menu-item>
        <el-menu-item index="/home/qxty">抢先体验</el-menu-item>
        <el-menu-item index="/home/jt">家庭</el-menu-item>
      </el-menu>
	  <router-view/>
</div>
</template>

<script>
export default {
	  created:function(){
		   this.$router.push({path: '/home/wntj'});
	  }
  }
</script>


<style>

</style>
