<template>
  <div>
    <router-view/>
    <b-nav justified class="fixed-bottom">
      <b-nav-item @click="change_active(1)">
        <template v-if="active === 1">
          <b-icon icon="plus-circle-fill"></b-icon>
        </template>
        <template v-else> <b-icon icon="plus-circle"></b-icon></template>
        <br/><small>记账</small>
      </b-nav-item>
      <b-nav-item @click="change_active(2)">
        <template v-if="active === 2">
          <b-icon icon="tag-fill"></b-icon>
        </template>
        <template v-else> <b-icon icon="tag"></b-icon> </template>
        <br/><small>标签</small>
      </b-nav-item>
      <b-nav-item @click="change_active(3)">
        <template v-if="active === 3">
          <b-icon icon="bar-chart-fill"></b-icon>
        </template>
        <template v-else> <b-icon icon="bar-chart"></b-icon> </template>
        <br/><small>统计</small>
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
      active: 1
    }
  },
  methods: {
    change_active(which) {
      this.active = which
    }
  }
}
</script>

<style>
.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
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
