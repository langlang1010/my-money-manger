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
    <div style="display:flex;justify-content:center;">
      <b-button variant="outline-primary">新增标签</b-button>
      <br>
    
    </div>
    
    <!-- <h1>tags:{{tags}}</h1>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1,2,3,4,5,6,7,8,9,7,9,8,9,8,9,8,9,9,8]
    };
  },
 
  methods: {
    bianji(index) {
      alert(index);
    }
  }
  //computed:{
  //  tags(){
  //    return this.$store.state.tags;
  //   }
  // }
};
</script>

<style >
.tagstyle{
  
  padding-bottom:60px;
  overflow-y:scroll ;

  
  
  
}

</style>