<template>
<div class="footer">
  <ul id="footer-menu">
    <li>
      <router-link to="home">首页</router-link>
    </li>
    <li>
      <router-link to="redian">热点</router-link>
    </li>
    <li>
      <router-link :to="vip">VIP</router-link>
    </li>
    <li>
      <router-link :to="doki">doki</router-link>
    </li>
    <li>
      <router-link :to="my">我的</router-link>
    </li>
  </ul>
  <br/>
</div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      home: '/home',
      redian: '/redian',
      vip: '/vip',
      doki: '/doki',
      my: '/my',
    }
  },
  methods: {}
}
</script>


<style>
.footer {
  position: absolute;
  bottom: 0px;
}

#footer-menu,
#footer-menu li {
  list-style: none;
  /* 将默认的列表符号去掉 */
  padding: 0;
  /* 将默认的内边距去掉 */
  margin: 0;
  /* 将默认的外边距去掉 */
}

#footer-menu li {
  float: left;
  /* 往左浮动 */
  padding-left: 5px;
}
</style>
