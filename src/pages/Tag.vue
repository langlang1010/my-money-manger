<template>
  <div style="overflow-y:scroll" class="tagstyle">
    <b-list-group>
      <b-list-group-item
        button
        v-for="(item,index) in list"
        :key="index"
        @click="bianji(index)"
      >{{item}}</b-list-group-item>
    </b-list-group>
    <div style="display:flex;justify-content:center">
      <b-button variant="outline-primary" @click="click">新增标签</b-button>
    </div>

    <!-- <h1>tags:{{tags}}</h1>
    -->
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
    this.list = window.localStorage.tags;
  },
  methods: {
    bianji(index) {
      alert(index);
    },
    click() {
      var message = prompt("请输入标签");
      if (message) {
        this.list.push(message);
        window.localStorage.tags = this.list;
        //console.log(window.localStorage.tags)
      }
    }
  }
  //computed:{
  //  tags(){
  //    return this.$store.state.tags;
  //   }
  // }
};
</script>

<style scoped >
.tagstyle {
  padding-bottom: 60px;
  overflow-y: scroll;
}
#inputstyle {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>