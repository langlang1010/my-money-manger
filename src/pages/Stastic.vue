<template>
  <div>
     <b-tabs content-class="mt-3" justified>
    <b-tab title="收入" active><p style="text-align:right"></p></b-tab>
    <b-tab title="支出"><p style="text-align:right"></p></b-tab>
   
  </b-tabs>
  <p></p>
  </div>
</template>

<script>
export default {
  data(){
   return{
     income:'',
     outcome:''
   }
    
  },
  methods:{

  }
}
</script>

<style scoped>

</style>