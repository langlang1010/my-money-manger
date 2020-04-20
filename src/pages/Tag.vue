<template>
<div>
  <div  class="tagstyle">
    <b-list-group>
      <b-list-group-item
        button
        v-for="(item,index) in list"
        :key="index"
        @click="bianji(index)"
      >{{item}}</b-list-group-item>
    </b-list-group>
    <div style="display:flex;justify-content:center;">
      <b-button variant="outline-primary" @click="click">新增标签</b-button>
    </div>
  </div>
  <b-nav justified class="fixed-bottom bg-light" >
      <b-nav-item  @click="$router.push({ path: '/' })"> 
          <b-icon icon="plus-circle"></b-icon>
        <br />
        <small>记账</small>
      </b-nav-item>
      <b-nav-item >
          <b-icon icon="tag-fill"></b-icon>
        <br />
        <small>标签</small>
      </b-nav-item>
      <b-nav-item @click="$router.push({ path: '/stastic' })">
          <b-icon icon="bar-chart"></b-icon>
        <br />
        <small>统计</small>
      </b-nav-item>
    </b-nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: ["衣", "食", "住", "行"]
    };
  },
  mounted() {
    this.list = JSON.parse(localStorage.getItem("tags"));
  },
  methods: {
    bianji(index) {
      this.$router.push({ path: "/edit", query: { id: index } });
    },
    click() {
      var message = prompt("请输入标签");
      var length=this.list.length;
      var flag=true
      for(var i=0;i<length;i++){
        if(message===this.list[i])
        {alert('您输入的标签已经存在')
          flag=false
          break
        }
      }
      if (message&&flag===true) {
        this.list.push(message);
        window.localStorage.setItem("tags", JSON.stringify(this.list));
        // 滑轮滑到底部
        window.scrollTo(9999999, 9999999)
      }
    }
  }
};
</script>

<style scoped >
.tagstyle {
  padding-bottom: 120px;
}
#inputstyle {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>