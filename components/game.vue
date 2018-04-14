<template>
<div class="game">
      <el-menu :default-active="$route.path" mode="horizontal" theme="dark" router>
        <el-menu-item index="/game/wntj">为您推荐</el-menu-item>
        <el-menu-item index="/game/rmphb">热门排行榜</el-menu-item>
        <el-menu-item index="/game/ffyx">付费游戏</el-menu-item>
        <el-menu-item index="/game/lb">类别</el-menu-item>
        <el-menu-item index="/game/jt">家庭</el-menu-item>
      </el-menu>
	  <router-view/>
</div>
</template>

<script>
export default {
	  created:function(){
		   this.$router.push({path: '/game/wntj'});
	  }
  }
</script>


<style>

</style>
