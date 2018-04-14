<template>
	<div>
		<div>
			<el-input v-model="input" placeholder="古鸽事场"></el-input>
		</div>
		<el-header>
		  <el-menu :default-active="$route.path" mode="horizontal" theme="dark" router>
			<el-menu-item index="/home">首页</el-menu-item>
			<el-menu-item index="/game">游戏</el-menu-item>
			<el-menu-item index="/movie">电影</el-menu-item>
			<el-menu-item index="/book">图书</el-menu-item>
		  </el-menu>
		</el-header>
	</div>
</template>

<script>

</script>


<style scoped>
.el-header {
  color: #333;
  line-height: 60px;
  width: 100%;
  margin: 0;
  padding: 5px 0;
  font-size: 12px;
}

.el-menu {
  background-color: #eee;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
</style>
