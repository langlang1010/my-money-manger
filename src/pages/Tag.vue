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
      if (message) {
        this.list.push(message);
        window.localStorage.setItem("tags", JSON.stringify(this.list));
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