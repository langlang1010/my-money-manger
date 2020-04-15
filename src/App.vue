<template>
  <div>
    <router-view />
    <b-nav justified class="fixed-bottom">
      <b-nav-item @click="change_active(0)">
        <template v-if="active === 0">
          <b-icon icon="plus-circle-fill"></b-icon>
        </template>
        <template v-else> <b-icon icon="plus-circle"></b-icon></template>
        <br /><small>记账</small>
      </b-nav-item>
      <b-nav-item  @click="change_active(1)">
        <template v-if="active === 1">
          <b-icon icon="tag-fill"></b-icon>
        </template>
        <template v-else> <b-icon icon="tag"></b-icon> </template>
        <br /><small>标签</small>
      </b-nav-item>
      <b-nav-item @click="change_active(2)">
        <template v-if="active === 2">
          <b-icon icon="bar-chart-fill"></b-icon>
        </template>
        <template v-else> <b-icon icon="bar-chart"></b-icon> </template>
        <br /><small>统计</small>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      active: 0,
      all_routers: ['/', '/tag', '/stastic']
    }
  },
  methods: {
    // 切换active
    change_active(which) {
      this.active = which
      // 跳转到相应的page
      this.$router.push({ path: this.all_routers[which] })
    }
  },
  mounted() {
    // 根据当前的路由来确定active
    const name = this.$router.currentRoute.name.toLowerCase()
    var routerName =  ['record', 'tag', 'stastic']
    this.active = routerName.indexOf(name)
    document.querySelector(".fixed-bottom").scrollIntoView()
  }
}
</script>

<style>
.fixed-bottom {
  position: fixed;
bottom:0; 


 
}
.text-center {
  text-align: center;
}
.demo-icon {
  color: #606266;
  margin: 0 20px;
  font-size: 2em;
  vertical-align: middle;
}

</style>
