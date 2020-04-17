<template>
  <div class="record">
    <div style=" overflow-y:scroll">
      <!--<b-form-tags input-id="tags-basic" v-model="tag"  class="mb-2" size="lg"></b-form-tags>-->
      <!-- <p>Value: {{ value }}</p> -->
      <ul v-for="(item, index) of list" :key="index" class="ulstyle">
        <li
          @click="everytag(item)"
          :class="{ biaostyle: item.isactive, biaotwostyle: item.isactive2 }"
        >{{ item.content }}</li>
      </ul>
    </div>
    <div>
      <b-form-input v-model="text" placeholder="备注"></b-form-input>
    </div>
    <div>
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab title="支出" @click="tab_in = false" active>
            <p style="text-align:right">{{ input_num }}</p>
          </b-tab>
          <b-tab title="收入" @click="tab_in = true">
            <p style="text-align:right">{{ input_num }}</p>
          </b-tab>
        </b-tabs>
      </div>
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
    <!-- 显示输入的数字 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_num: "0",
      point: false,
      tag: ["衣", "食", "住", "行"],
      income: "",
      outcome: "",
      text: "",
      list: "",
      tab_in: false,
      choosetag: []
    };
  },
  mounted() {
    var tags = localStorage.getItem("tags");
    var list = null;
    // 如果 localStorage 不存在tags
    if (tags === undefined || tags === null) {
      list = this.tag;
      window.localStorage.tags = JSON.stringify(list);
    } else {
      list = JSON.parse(tags);
    }

    var length = list.length;
    for (var i = 0; i < length; ++i) {
      var temp = list[i];
      list[i] = {
        isactive: true, // 代表初始样式
        isactive2: false,
        // content: JSON.parse(localStorage.getItem('tags'))[i],
        content: temp
      };
    }
    this.list = list;
  },
  methods: {
    // change() {
    //  const v = this.text;
    //  this.$store.commit("setTagNew", v);
    // },
    // tab1() {
    //   this.tab_in = true
    // },
    // tab2() {
    //   this.tab_out = true
    // },
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
        this.point = true;
        this.input_num += ".";
      }
    },

    // 清空
    clear() {
      this.input_num = "0";
      this.point = false;
    },
    // 回删
    del() {
      var length = this.input_num.length;
      if (this.input_num.charAt(length - 1) === ".") {
        this.point = false;
      }
      this.input_num = this.input_num.substr(0, this.input_num.length - 1);
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
        this.point = false;
      }

      //将每个tag标签转换为未点击状态，并更新界面
      var listlength = this.list.length;
      for (var j = 0; j < listlength; j++) {
        this.list[j].isactive = true;
        location.reload();
      }

      // 读取数据并转换成json格式
      var json = {};
      json.tags = this.choosetag;
      json.remark = this.text;
      json.money = this.input_num;
      let date = new Date();
      json.date = this.dateFormat("YYYY-mm-dd", date);
      // window.localStorage.income.clear()

      if (this.tab_in === true&&this.input_num !== "0") {
        // 如果第一次记账

        var incomeArray = [];
        if (window.localStorage.inmoney === undefined) {
          incomeArray = [json];
          window.localStorage.inmoney = JSON.stringify(incomeArray);
        } else {
          // 添加到后面
          incomeArray = JSON.parse(window.localStorage.inmoney);
          incomeArray.push(json);
          window.localStorage.inmoney = JSON.stringify(incomeArray);
        }

        alert(window.localStorage.inmoney);

        this.choosetag = [];
      } else if (this.tab_in === false&&this.input_num !== "0") {
        // 如果第一次记账
        var outputArray = [];
        if (window.localStorage.output === undefined) {
          outputArray = [json];
          window.localStorage.output = JSON.stringify(outputArray);
        } else {
          // 添加到后面
          outputArray = JSON.parse(window.localStorage.output);
          outputArray.push(json);
          window.localStorage.output = JSON.stringify(outputArray);
        }
        alert(window.localStorage.output);
      }
      this.input_num = "0";
      this.choosetag = [];
    },

    everytag(item) {
      item.isactive = !item.isactive;
      item.isactive2 = !item.isactive2;
      if (item.isactive2 === true) {
        //如果便签选中那么总标签加起来，否则未选中删除
        this.choosetag.push(item.content);
      } else if (item.isactive2 === false) {
        this.choosetag.pop(item.content);
      }
      console.log(this.choosetag);
    },
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    }
  }
};
</script>

<style>
.record {
  position: fixed;
  right: 0;
  bottom: 60px;
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
.input-num {
  text-align: right;
}
.biaostyle {
  background-color: rgb(232, 232, 232);
  border: 2rem;
  border-radius: 5rem;

  align-items: flex-start;
}
.ulstyle {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  display: inline-block;
  list-style: none;
}
.biaotwostyle {
  background-color: rgb(191, 191, 191);
  border: 2rem;
  border-radius: 5rem;
  align-items: flex-start;
}
</style>
