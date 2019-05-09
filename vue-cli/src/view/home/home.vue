<template>
  <div class="el-main">
  <header>
    <h1 class="text-left left">选课系统</h1><button v-on:click="tuichu" class="right">退出</button>
  </header>
    <el-dropdown>
  <span class="el-dropdown-link choose_positon">
    选课<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown" class="choose_positon">
        <el-dropdown-item>校选修课</el-dropdown-item>
        <el-dropdown-item>专业选修课</el-dropdown-item>
        <el-dropdown-item>体育选修课</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
<!--    <select>-->
<!--      <option value="1">校选课</option>-->
<!--      <option value="2">院选课</option>-->
<!--      <option value="3">体育选课</option>-->
<!--    </select>-->
  <div>
    <el-table :data="custList"  border="1"  style="width: 100%"
              @select="addnew" ref="table">
      <el-table-column type="selection"  label="选课" width="170"> </el-table-column>
      <el-table-column prop="" label="课程名称" width="170"></el-table-column>
      <el-table-column prop="cust_name" label="学分" width="170"></el-table-column>
      <el-table-column prop="cust_phone" label="教师" width="170"></el-table-column>
      <el-table-column prop="cust_address" label="容量" width="170"></el-table-column>
      <el-table-column prop="cust_address" label="已选" width="170"></el-table-column>

    </el-table>
    <div class="block">
      <el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"
                     layout="total,sizes,prev,pager,next,jumper" v-bind:page-sizes="pageSizes"
                     v-on:size-change="sizeChange" v-on:current-change="pageIndexChange">

      </el-pagination>
    </div>
    <span >
      <h4 class="text-left">已选课程</h4>
    </span>
  </div>
    <el-table :data="custList2"  border="1"  style="width: 100%" ref="table">
      <el-table-column type="selection"  label="选课" width="170"> </el-table-column>
      <el-table-column prop="" label="课程名称" width="170"></el-table-column>
      <el-table-column prop="cust_name" label="学分" width="170"></el-table-column>
      <el-table-column prop="cust_phone" label="教师" width="170"></el-table-column>
      <el-table-column prop="cust_address" label="容量" width="170"></el-table-column>
      <el-table-column prop="cust_address" label="已选" width="170"></el-table-column>

    </el-table>

  </div>

</template>

<script>
    export default {
  name: "Home",
      data() {
        return {
          custList:[
            {
              cust_id:'1',
              cust_name:'ad',
              cust_phone:'123343',
              cust_address:'addere',
            },
            {
              cust_id:'2',
              cust_name:'ad',
              cust_phone:'123343',
              cust_address:'addere',
            },
            {
              cust_id:'3',
              cust_name:'ad',
              cust_phone:'123343',
              cust_address:'addere',
            }
          ],
          custList2:[{
            cust_id:'3',
            cust_name:'ad',
            cust_phone:'123343',
            cust_address:'addere',
          }
          ],
          pageIndex: 0,
          pageSize: 10,
          total: 5,
          pageSizes: [1, 2, 5, 10]
        }
      },




  methods:{
    tuichu:function () {
      this.$router.push('/');
    },
    addnew:function (val,row) {
      console.log(val);
      alert(row.cust_name);
      this.custList2 = row;
      // console.log(this.custList2);
      alert(row.cust_id);
    }
  }
  }
  </script>

<style scoped>
  .paper {
    position: absolute;
    bottom: 0;
  }
  .text-left{
    text-align: left;
  }
  .right{
    position: relative;
    right: -600px;
    top: -50px;
  }
  .left{
    position: relative;
    left: 0;
    top: 0;
  }
  .choose_positon{
    position: relative;
    right: 600px;
    top: -10px;
  }
</style>

