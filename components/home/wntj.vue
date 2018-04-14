<template>
	<div>
		  <div class="danyi" v-for="item in items">
			<div class="danyi_img">
				<img class="danyi_img" :src="item.src" />
			</div>
			<div>{{ item.message }}</div>
			<div>
				<div class="danyi_star">{{ item.star }}★</div>
				<div class="danyi_money">{{ item.money }}</div>
			</div>
		  </div>
	</div>
</template>

<script>
import img1 from '@/assets/img/1.png'
export default {
	data() {
		return {
			items: [
				{ src:img1,message: 'Foo',star:'4',money:'free' },
				{ message: 'Bar',star:'5',money:'free' }
			],
			img1:img1
		}
	}
}
</script>

<style scoped>
.danyi{
	background-color: red;
	width:70px;
	height:110px;
	float:left;
	margin:2px;
}
.danyi_img{
	background-color: green;
	width:70px;
	height:70px;
}
.danyi_star{
	width:20px;
	float:left;
	padding-bottom:0px;
}
.danyi_money{
	float:right;
	padding-bottom:0px;
}
</style>