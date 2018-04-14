<template>
<div class="home">
  <span>{{ msg }}</span><br />
  <span>{{ msgzh }}</span><br />
  <input v-model="msgzh"><br />
  <button v-on:click="reverseMessage">反转字符串</button> {{ msg | capitalize }} {{ Num }}
  <li v-for="site in sites">
    {{ site.name }}
  </li>
  <ul>
    <template v-for="site in sites">
			<li class="liclass">{{ site.name }}</li>
		</template>
  </ul>
  <p>单个复选框：</p>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
  <p>多个复选框：</p>
  <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
  <label for="runoob">Runoob</label>
  <input type="checkbox" id="google" value="Google" v-model="checkedNames">
  <label for="google">Google</label>
  <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
  <label for="taobao">taobao</label>
  <br>
  <span>选择的值为: {{ checkedNames }}</span><br />
  <select v-model="selected" name="fruit">
    <option value="">选择一个网站</option>
    <option value="www.runoob.com">Runoob</option>
    <option value="www.google.com">Google</option>
	</select>

  <div id="output">
    选择的网站是: {{selected}}
  </div>
  <div id="daohang">
    <ul>
      <input type="button" value="跳转1" @click="go1" />
      <input type="button" value="跳转2" @click="go2" />
      <li>
        <router-link to="/about">about</router-link>
      </li>
      <li>
        <router-link v-bind:to="{path:'/word/router2',query:{id:123}}">路由2</router-link>
      </li>
      <li>
        <router-link v-bind:to="{name:'router3',params:{id:123}}">路由3</router-link>
      </li>
      <li>
        <router-link to="/calc">计算器</router-link>
      </li>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <router-view v-bind:age="age"></router-view>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: '#hand',
  data() {
    return {
      msg: 'Fantasying...',
      msgzh: '哇哇哇哇',
      Num: Math.random(),
      sites: [{
          name: 'Runoob'
        },
        {
          name: 'Google'
        },
        {
          name: 'Taobao'
        }
      ],
      checked: false,
      checkedNames: [],
      selected: ''
    }
  },
  methods: {
    reverseMessage: function() {
      this.msg = this.msg.split('').reverse().join('')
    },
    go1() {
      this.$router.push({
        path: '/word/router1/123'
      });
    },
    go2() {
      this.$router.replace({
        path: '/word/router2',
        query: {
          id: 123
        }
      });
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(5).toUpperCase()
    }
  },
};
</script>
<style>
.liclass {
  width: 100px;
  height: 20px;
  background: green;
}
</style>
