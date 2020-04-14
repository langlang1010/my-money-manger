<template>
  <div>
    <b-list-group>
      <b-list-group-item button v-for="(item,index) in list" :key="index">{{item}}</b-list-group-item>
    </b-list-group> 
    <!-- <h1>tags:{{tags}}</h1>
    -->
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
   mounted(){
      this.list= window.localStorage['tags']
    
  },
  //computed:{
  //  tags(){
  //    return this.$store.state.tags;
 //   }
 // }
};
</script>

<style>
</style>