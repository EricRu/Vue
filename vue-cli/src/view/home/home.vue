<template>
  <div>
    <el-button v-on:click="tuichu" class="right">退出</el-button>
    <button class="big" @click="school_choose">校选修课</button>
    <button class="big" @click="program_choose">院选修课</button>
    <button class="big" @click="sports_choose">体育选修课</button>
  </div>
</template>

<script>
    export default {
  name: "Home",
      methods:{
        tuichu: function () {
          this.$router.push('/');
        },
      school_choose:function () {
        this.$router.push('/school');
        },
      program_choose:function (){
        this.$router.push('/program');
      },
      sports_choose:function () {
        this.$router.push('/sports');
      }
      }
  }
  </script>

<style scoped>
.big{
  width: 100px;
  height: 100px;
}
</style>

