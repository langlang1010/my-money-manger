<template>
  <div id="record">
    <div>
      <b-form-tags input-id="tags-basic" v-model="tags" class="mb-2" size="lg"></b-form-tags>
      <!-- <p>Value: {{ value }}</p> -->
    </div>
    <div>
      <b-card no-body>
        <b-tabs pills card end justified>
          <b-tab title="收入" active></b-tab>
          <b-tab title="支出"></b-tab>
        </b-tabs>
      </b-card>
      <div>
        <b-card id="input_num">
          <b-card-text>{{ input_num }}</b-card-text>
        </b-card>
      </div>
      <div>
        <b-button @click="input(1)" squared class="num-button" variant="secondary">1</b-button>
        <b-button @click="input(2)" squared class="num-button" variant="secondary">2</b-button>
        <b-button @click="input(3)" squared class="num-button" variant="secondary">3</b-button>
        <b-button @click="del()" squared class="num-button" variant="secondary">删除</b-button>
        <b-button @click="input(4)" squared class="num-button" variant="secondary">4</b-button>
        <b-button @click="input(5)" squared class="num-button" variant="secondary">5</b-button>
        <b-button @click="input(6)" squared class="num-button" variant="secondary">6</b-button>
        <b-button @click="clear()" squared class="num-button" variant="secondary">清空</b-button>
        <b-button @click="input(7)" squared class="num-button" variant="secondary">7</b-button>
        <b-button @click="input(8)" squared class="num-button" variant="secondary">8</b-button>
        <b-button @click="input(9)" squared class="num-button" variant="secondary">9</b-button>
        <b-button @click="pushmoney()" squared class="num-button-ok" variant="secondary">OK</b-button>
        <b-button @click="input(0)" squared class="num-button-zero" variant="secondary">0</b-button>
        <b-button @click="add_point()" squared class="num-button" variant="secondary">.</b-button>

      </div>
    </div>
    <!-- 显示输入的数字 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_num: "0",
      point:false,
      tags: ["衣", "食", "住", "行"],
      income: "",
      outcome: "",
      
    };
  },
  methods: {
    input(num) {
      // 如果是刚开始输入
      if (this.input_num === "0") {
        this.input_num = num + "";
      } else {
        this.input_num += num;
      }
    },
    // 点击小数点时
    add_point() {
      // 如果没有点过小数点
       
       if (!this.point) {
          this.point=true;
          this.input_num += ".";
         
       }
      
    
    
    },
    
    // 清空
    clear() {
      this.input_num = "0";
      this.point=false;
    },
    // 回删
    del() {
       var length=this.input_num.length;
         if(this.input_num.charAt(length-1)==="."){
        this.point=false;
          this.input_num = this.input_num.substr(0, this.input_num.length - 1);
      }else{
        this.input_num = this.input_num.substr(0, this.input_num.length - 1);
      }
    
     
    
   
    },
    pushmoney() {
      var pointlast = this.input_num.indexOf(".");
      var length = this.input_num.length;
      var result = this.input_num.substr(pointlast + 1, length);
      var plength = result.length;
      if (plength > 2 && pointlast !== -1) {
        alert("输入金额不对");
        this.input_num = "0";
      } else {
        this.income = parseFloat(this.input_num);
        alert(this.income);
      }
    }
  }
};
</script>

<style>
#record {
  position: fixed;
  right: 0;
  bottom: 80px;
  left: 0;
  z-index: 1030;
}
.num-button {
  width: 25%;
  height: 64px;
  padding-top: 0px;
}
.num-button-zero {
  width: 50%;
  height: 64px;
  padding-top: 0px;
}
.num-button-ok {
  width: 25%;
  height: 128px;
  float: right;
}
#input_num {
  text-align: right;
}
</style>
