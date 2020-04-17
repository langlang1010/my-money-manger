<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="支出" active>
        <!-- <div v-for="(item,index) of outtags" :key="index" style="background-color: rgb(232, 232, 232);margin-bottom:20px">
          <p>{{item.odate}}</p>
          <p style="display:inline-block">{{item.otags}}</p>
          <p style="display:inline-block">{{item.oremark}}</p>
          <span style="float:right;color:red">-{{item.omoney}}</span>
        </div>-->
        <b-list-group>
          <template v-for="(item,index) of output">
            <b-list-group-item
              :key="index"
              variant="secondary"
              class="d-flex justify-content-between align-items-center"
            >
              {{item.date}}
              <b-badge variant="light">{{item.sum}}</b-badge>
            </b-list-group-item>
            <b-list-group-item
              v-for="(item2,index2) of item.infoAry"
              :key="index2"
              class="d-flex justify-content-between align-items-center"
            >
              {{item2.tags}}
              <b-badge variant="primary" pill>{{item2.money}}</b-badge>
            </b-list-group-item>
          </template>
        </b-list-group>
      </b-tab>

      <b-tab title="收入">
        <b-list-group>
          <template v-for="(item,index) of income">
            <b-list-group-item
              :key="index"
              variant="secondary"
              class="d-flex justify-content-between align-items-center"
            >
              {{item.date}}
              <b-badge variant="light">{{item.sum}}</b-badge>
            </b-list-group-item>
            <b-list-group-item
              v-for="(item2,index2) of item.infoAry"
              :key="index2"
              class="d-flex justify-content-between align-items-center"
            >
              {{item2.tags}}
              <b-badge variant="primary" pill>{{item2.money}}</b-badge>
            </b-list-group-item>
          </template>
        </b-list-group>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // outtags: [],
      // datenew: [],
      // intags: []
      income: [],
      output: []
    };
  },
  mounted() {
    // var ot = {};
    // var iny = {};
    // var length = JSON.parse(window.localStorage.output).length;
    // var length2 = JSON.parse(window.localStorage.inmoney).length;
    // for (var i = 0; i < length; i++) {
    //   ot[i] = {
    //     otags: JSON.parse(window.localStorage.output)[i].tags,
    //     omoney: JSON.parse(window.localStorage.output)[i].money,
    //     oremark: JSON.parse(window.localStorage.output)[i].remark,
    //     odate: JSON.parse(window.localStorage.output)[i].date
    //   };
    //   this.outtags.push(ot[i]);
    // }
    // for (var j = 0; j < length2; j++) {
    //   iny[j] = {
    //     inta: JSON.parse(window.localStorage.inmoney)[j].tags,
    //     inmo: JSON.parse(window.localStorage.inmoney)[j].money,
    //     inremark: JSON.parse(window.localStorage.inmoney)[j].remark,
    //     indate: JSON.parse(window.localStorage.inmoney)[j].date
    //   };
    //   this.intags.push(iny[j]);
    // }
    var income = window.localStorage.inmoney;
    var output = window.localStorage.output;
    // 检查是否为空
    if (income === undefined || income === null) {
      this.income = null;
    } else {
      var tempIncome = JSON.parse(income);
      // alert(output)
      // this.output = JSON.stringify(this.merge(tempOutput))
      this.income = this.merge(tempIncome);
      alert(this.income.length);
    }
    if (output === undefined || output === null) {
      this.output = null;
    } else {
      var tempOutput = JSON.parse(output);
      // alert(output)
      // this.output = JSON.stringify(this.merge(tempOutput))
      this.output = this.merge(tempOutput);

      // alert(this.output.length);
    }
  },
  methods: {
    /**
     * 根据天合并数据
     * 这里假设 data 是已经按照日期排好顺序的数组
     */

    merge(data) {
      var result = [];
      // 1. 获得第一天的日期，把第一条数据写入
      var oneDay = data[0].date;
      var oneDayJSON = {};
      // 分别存储日期与消费记录
      oneDayJSON.date = oneDay;
      oneDayJSON.sum = 0;
      oneDayJSON.infoAry = [];
      // 2. 数组处理，包含消费tags和money
      var info = {};
      info.tags = data[0].tags;
      info.money = data[0].money;
      oneDayJSON.sum += parseFloat(info.money);
      oneDayJSON.infoAry.push(info);

      for (var i = 1; i < data.length; i++) {
        var thisDay = data[i].date;
        // 如果和上一条数据是同一天
        if (thisDay === oneDay) {
          var another = {};
          another.tags = data[i].tags;
          another.money = data[i].money;
          oneDayJSON.sum += parseFloat(another.money);
          oneDayJSON.infoAry.push(another);
        } else {
          // 如果不是同一天
          // 1. 把已经合并的写入oneDayJSON
          result.push(oneDayJSON);
          // 2. 清空oneDayJSON
          oneDayJSON = {};
          // 3. 修改当前日期
          oneDay = data[i].date;
          oneDayJSON.date = oneDay;
          oneDayJSON.sum = 0;
          oneDayJSON.infoAry = [];
          var infoTemp = {};
          infoTemp.tags = data[i].tags;
          infoTemp.money = data[i].money;
          oneDayJSON.sum += parseFloat(infoTemp.money);
          oneDayJSON.infoAry.push(infoTemp);
        }
      }
      result.push(oneDayJSON);
      return result;
    }
  }
};
</script>

<style scoped>
</style>