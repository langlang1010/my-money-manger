<template>
  <div>
    <p style="width:100%;text-align:center;height:50px; background-color: rgb(141, 141, 141);">编辑标签</p>
     <b-form-input  v-model="editmessage"></b-form-input>
    <div style="display:flex;justify-content:space-around">
      <b-button variant="danger" @click="demessage">删除</b-button>
      <b-button variant="success" @click="postmessage">确认</b-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editmessage: ""
    };
  },
  mounted() {
    var key = this.$route.query.id;
    var message = JSON.parse(localStorage.getItem("tags"));
    this.editmessage = message[key];
    // var message=JSON.stringify(this.editmessage);
  },
  methods: {
    demessage() {
      var key = this.$route.query.id;
      var message = JSON.parse(localStorage.getItem("tags"));
      message.splice(key, 1);
      window.localStorage.setItem('tags',JSON.stringify(message));
      alert("删除"+this.editmessage+"成功");
      this.$router.push({path:'/tag'});

    },
    postmessage(){
     // alert(this.editmessage)
      var key = this.$route.query.id;
      var message = JSON.parse(localStorage.getItem("tags"));
      var length=message.length
      var flag=true
      for(var i=0;i<length;i++){
         if(this.editmessage===message[i])
         {
           alert('您输入的标签已存在')
           flag=false
           break
         }
      }
      if(flag===true){
       message.splice(key, 1,this.editmessage);
       window.localStorage.setItem('tags',JSON.stringify(message));
       alert("添加"+this.editmessage+"成功");
      }
        this.$router.push({path:'/tag'});

    }
    
  }
};
</script>