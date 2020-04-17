<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="支出" active>
        <div v-for="(item,index) of outtags" :key="index" style="background-color: rgb(232, 232, 232);margin-bottom:20px">
          <p>{{item.odate}}</p>
          <p style="display:inline-block">{{item.otags}}</p>
          <p style="display:inline-block">{{item.oremark}}</p>
          <span style="float:right;color:red">-{{item.omoney}}</span>
        </div>
      </b-tab>

      <b-tab title="收入">
        <div v-for="(item,index) of intags" :key="index" style="background-color: rgb(232, 232, 232);margin-bottom:20px">
          <p>{{item.indate}}</p>
          <p style="display:inline-block">{{item.inta}}</p>
          <p style="display:inline-block">{{item.inremark}}</p>
          <span style="float:right;color:green">+{{item.inmo}}</span>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      outtags: [],
      datenew: [],
      intags: []
    };
  },
  mounted() {
    var ot = {};
    var iny = {};
    var length = JSON.parse(window.localStorage.output).length;
    var length2 = JSON.parse(window.localStorage.inmoney).length;
    for (var i = 0; i < length; i++) {
      ot[i] = {
        otags: JSON.parse(window.localStorage.output)[i].tags,
        omoney: JSON.parse(window.localStorage.output)[i].money,
        oremark: JSON.parse(window.localStorage.output)[i].remark,
        odate: JSON.parse(window.localStorage.output)[i].date
      };
      this.outtags.push(ot[i]);
    }
    for (var j = 0; j < length2; j++) {
      iny[j] = {
        inta: JSON.parse(window.localStorage.inmoney)[j].tags,
        inmo: JSON.parse(window.localStorage.inmoney)[j].money,
        inremark: JSON.parse(window.localStorage.inmoney)[j].remark,
        indate: JSON.parse(window.localStorage.inmoney)[j].date
      };
      this.intags.push(iny[j]);
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>