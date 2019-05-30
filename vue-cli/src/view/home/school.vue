<!--<template>-->
<!--  <div class="el-main">-->
<!--    <header>-->
<!--      <h1 class="text-left left">选课系统</h1><el-button v-on:click="returnhome">首页</el-button><el-button v-on:click="tuichu" class="right">退出</el-button>-->
<!--    </header>-->
<!--    <el-dropdown>-->
<!--  <span class="el-dropdown-link choose_positon">-->
<!--    选课<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--  </span>-->
<!--      <el-dropdown-menu slot="dropdown" class="choose_positon">-->
<!--        <el-dropdown-item>校选修课</el-dropdown-item>-->
<!--        <el-dropdown-item>专业选修课</el-dropdown-item>-->
<!--        <el-dropdown-item>体育选修课</el-dropdown-item>-->
<!--      </el-dropdown-menu>-->
<!--    </el-dropdown>-->
<!--    &lt;!&ndash;    <select>&ndash;&gt;-->
<!--    &lt;!&ndash;      <option value="1">校选课</option>&ndash;&gt;-->
<!--    &lt;!&ndash;      <option value="2">院选课</option>&ndash;&gt;-->
<!--    &lt;!&ndash;      <option value="3">体育选课</option>&ndash;&gt;-->
<!--    &lt;!&ndash;    </select>&ndash;&gt;-->
<!--    <div>-->
<!--      <el-table :data="custList"  border="1"  style="width: 100%"-->
<!--                @select="addnew" ref="table">-->
<!--        <el-table-column type="selection"  label="选课" width="170"> </el-table-column>-->
<!--        <el-table-column prop="" label="课程名称" width="170"></el-table-column>-->
<!--        <el-table-column prop="cust_name" label="学分" width="170"></el-table-column>-->
<!--        <el-table-column prop="cust_phone" label="教师" width="170"></el-table-column>-->
<!--        <el-table-column prop="cust_address" label="容量" width="170"></el-table-column>-->
<!--        <el-table-column prop="cust_address" label="已选" width="170"></el-table-column>-->

<!--      </el-table>-->
<!--      <el-button v-on:click="righter">确定</el-button>-->
<!--      <div class="block">-->
<!--        <el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"-->
<!--                       layout="total,sizes,prev,pager,next,jumper" v-bind:page-sizes="pageSizes"-->
<!--                       v-on:size-change="sizeChange" v-on:current-change="pageIndexChange">-->

<!--        </el-pagination>-->
<!--      </div>-->
<!--      <span >-->
<!--      <h4 class="text-left">已选课程</h4>-->
<!--    </span>-->
<!--    </div>-->
<!--    <el-table :data="custList2"  border="1"  style="width: 100%" ref="table">-->
<!--      <el-table-column type="selection"  label="选课" width="170"> </el-table-column>-->
<!--      <el-table-column prop="" label="课程名称" width="170"></el-table-column>-->
<!--      <el-table-column prop="cust_name" label="学分" width="170"></el-table-column>-->
<!--      <el-table-column prop="cust_phone" label="教师" width="170"></el-table-column>-->
<!--      <el-table-column prop="cust_address" label="容量" width="170"></el-table-column>-->
<!--      <el-table-column prop="cust_address" label="已选" width="170"></el-table-column>-->
<!--      <el-table-column-->
<!--        fixed="right"-->
<!--        label="操作"-->
<!--        width="120">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button-->
<!--            @click.native.prevent="deleteRow(scope.$index, custList2)"-->
<!--            type="text"-->
<!--            size="small">-->
<!--            移除-->
<!--          </el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--    </el-table>-->
<!--    <el-button v-on:click="send" type="primary" align="right">提交</el-button>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--      name: "school",-->
<!--      data() {-->
<!--        return {-->
<!--          custList: [-->
<!--            {-->
<!--              cust_id: '1',-->
<!--              cust_name: 'ad',-->
<!--              cust_phone: '123343',-->
<!--              cust_address: 'addere',-->
<!--            },-->
<!--            {-->
<!--              cust_id: '2',-->
<!--              cust_name: 'ad',-->
<!--              cust_phone: '123343',-->
<!--              cust_address: 'addere',-->
<!--            },-->
<!--            {-->
<!--              cust_id: '3',-->
<!--              cust_name: 'ad',-->
<!--              cust_phone: '123343',-->
<!--              cust_address: 'addere',-->
<!--            }-->
<!--          ],-->
<!--          custList2: [{-->
<!--            cust_id: '3',-->
<!--            cust_name: 'ad',-->
<!--            cust_phone: '123343',-->
<!--            cust_address: 'addere',-->
<!--          },-->
<!--            {-->
<!--              cust_id: '3',-->
<!--              cust_name: 'ad',-->
<!--              cust_phone: '123343',-->
<!--              cust_address: 'addere',-->
<!--            },-->
<!--            {-->
<!--              cust_id: '3',-->
<!--              cust_name: 'ad',-->
<!--              cust_phone: '123343',-->
<!--              cust_address: 'addere',-->
<!--            }-->
<!--          ],-->
<!--          pageIndex: 0,-->
<!--          pageSize: 10,-->
<!--          total: 5,-->
<!--          pageSizes: [1, 2, 5, 10]-->
<!--        }-->
<!--      },-->
<!--      methods: {-->
<!--        returnhome:function(){-->
<!--          this.$router.push('/home');-->
<!--        },-->
<!--        tuichu: function () {-->
<!--          this.$router.push('/');-->
<!--        },-->
<!--        deleteRow: function (index, rows) {-->
<!--          rows.splice(index, 1);-->
<!--        },-->
<!--        addnew: function (val, row) {-->
<!--          console.log(val);-->
<!--          alert(row.cust_name);-->
<!--          this.custList2 = row;-->
<!--          // console.log(this.custList2);-->
<!--          alert(row.cust_id);-->
<!--        },-->
<!--        send: function () {-->
<!--          alert("send");-->
<!--        },-->
<!--        righter: function () {-->
<!--          alert("right");-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--  .paper {-->
<!--    position: absolute;-->
<!--    bottom: 0;-->
<!--  }-->
<!--  .text-left{-->
<!--    text-align: left;-->
<!--  }-->
<!--  .right{-->
<!--    position: relative;-->
<!--    right: -600px;-->
<!--    top: -50px;-->
<!--  }-->
<!--  .left{-->
<!--    position: relative;-->
<!--    left: 0;-->
<!--    top: 0;-->
<!--  }-->
<!--  .choose_positon{-->
<!--    position: relative;-->
<!--    right: 600px;-->
<!--    top: -10px;-->
<!--  }-->
<!--</style>-->
<template>
  <div class="el-main">
    <header>
      <h1 class="text-left left">选课系统</h1><el-button v-on:click="returnhome" >首页</el-button><el-button v-on:click="tuichu" class="right">退出</el-button>
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
      <!--      .slice((pageIndex-1)*pageSize,pageIndex*pageSize)-->
      <el-table :data="custList1"  style="width: 100%"
                @selection-change ="handleSelectionChange" ref="multipleTable">
        <el-table-column type="selection"  label="选课" width="170"> </el-table-column>
        <el-table-column prop="" label="课程名称" width="170"></el-table-column>
        <el-table-column prop="cust_name" label="学分" width="170"></el-table-column>
        <el-table-column prop="cust_phone" label="教师" width="170"></el-table-column>
        <el-table-column prop="cust_address" label="容量" width="170"></el-table-column>
        <el-table-column prop="cust_address" label="已选" width="170"></el-table-column>

      </el-table>
      <el-button v-on:click="righter">确定</el-button>
      <div class="block">
        <el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"
                       layout="total,prev,pager,next,jumper"
                       v-on:size-change="sizeChange" v-on:current-change="pageIndexChange">

        </el-pagination>
      </div>
      <span >
      <h4 class="text-left">已选课程</h4>
    </span>
    </div>
    <el-table :data="custListLater"  style="width: 100%" ref="table">
      <el-table-column type="selection"  label="选课" width="170"> </el-table-column>
      <el-table-column prop="" label="课程名称" width="170"></el-table-column>
      <el-table-column prop="cust_name" label="学分" width="170"></el-table-column>
      <el-table-column prop="cust_phone" label="教师" width="170"></el-table-column>
      <el-table-column prop="cust_address" label="容量" width="170"></el-table-column>
      <el-table-column prop="cust_address" label="已选" width="170"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, custListLater)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button v-on:click="send" type="primary" align="right">提交</el-button>

  </div>
</template>

<script>
  export default {
    name: "school",
    data() {
      return {
        custList: [
          {
            cust_id: '1',
            cust_name: 'ad1',
            cust_phone: '123343',
            cust_address: 'addere',
          },
          {
            cust_id: '2',
            cust_name: 'ad2',
            cust_phone: '123343',
            cust_address: 'addere',
          },
          {
            cust_id: '3',
            cust_name: 'ad3',
            cust_phone: '123343',
            cust_address: 'addere',
          }
        ],
        custList1:[],//分页后当前页数据
        custListLater: [],//最终选择数据
        multipleSelection: [],//当前页所选的数据
        multipleSelectionAll: [],//所有选中的数据（包括跨页）
        idKey:'cust_id',

        //以下分页设置数据
        tableflag:0,
        pageIndex: 1,
        pageSize: 2,
        total: 0,
        pageSizes: [1, 2, 5, 10]
      }
    },
    watch:{
      // pageIndex:"getList",
      // pageIndex:"getAllSelectionData",
      // pageIndex:"setSelectRow"
    },
    methods: {
      returnhome:function(){
        this.$router.push('/home');
      },

      tuichu: function () {
        this.$router.push('/');
      },

      //设置选中
      setSelectRow:function() {
        console.log("setSelectRow");
        if(!this.multipleSelectionAll || this.multipleSelectionAll.length <= 0){
          console.log("setSelectRow4");
          return;
        }
        // 标识当前行唯一键的名称
        let idKey = this.idKey;
        let selectAllIds = [];
        let that = this;
        this.multipleSelectionAll.forEach(row=>{
          selectAllIds.push(row[idKey]);
        })
        this.$refs.multipleTable.clearSelection();
        console.log(selectAllIds);
        for(var i = 0; i < this.custList1.length; i++) {
          console.log("setSelectRow5");
          if (selectAllIds.indexOf(this.custList1[i][idKey]) >= 0) {
            // 设置选中，记住table组件需要使用ref="multipleTable"
            console.log("setSelectRow2" + this.custList1[i]);
            this.$refs.multipleTable.toggleRowSelection(this.custList1[i], true);
            console.log("setSelectRow3");
          }
        }
      },

      // 记忆选择核心方法
      changePageCoreRecordData () {
        // 标识当前行的唯一键的名称
        let idKey = this.idKey;
        let that = this;
        // 如果总记忆中还没有选择的数据，那么就直接取当前页选中的数据，不需要后面一系列计算
        if (this.multipleSelectionAll.length <= 0) {
          this.multipleSelectionAll = this.multipleSelection;
          return;
        }
        // 总选择里面的key集合
        let selectAllIds = [];
        this.multipleSelectionAll.forEach(row=>{
          selectAllIds.push(row[idKey]);
        })
        let selectIds = []
        // 获取当前页选中的id
        this.multipleSelection.forEach(row=>{
          selectIds.push(row[idKey]);
          // 如果总选择里面不包含当前页选中的数据，那么就加入到总选择集合里
          if (selectAllIds.indexOf(row[idKey]) < 0) {
            that.multipleSelectionAll.push(row);
          }
        })
        let noSelectIds = [];
        // 得到当前页没有选中的id
        this.custList1.forEach(row=>{
          if (selectIds.indexOf(row[idKey]) < 0) {
            noSelectIds.push(row[idKey]);
          }
        })
        noSelectIds.forEach(id=>{
          if (selectAllIds.indexOf(id) >= 0) {
            for(let i = 0; i< that.multipleSelectionAll.length; i ++) {
              if (that.multipleSelectionAll[i][idKey] == id) {
                // 如果总选择中有未被选中的，那么就删除这条
                that.multipleSelectionAll.splice(i, 1);
                break;
              }
            }
          }
        })
      },

      //选中操作函数
      handleSelectionChange:function(val){
        this.multipleSelection = val;
        console.log(val);
        console.log(this.multipleSelection);
      },
      // 得到选中的所有数据
      getAllSelectionData () {
        // 再执行一次记忆勾选数据匹配，目的是为了在当前页操作勾选后直接获取选中数据
        this.changePageCoreRecordData();
        console.log(this.multipleSelectionAll);
      },

      //移除待传列表中数据
      deleteRow: function (index, rows) {
        rows.splice(index, 1);
        console.log(rows);
      },

      //包含选择的当前页列表
      queryData:function(){
        this.getList();
        setTimeout(() => {
          this.setSelectRow();
        }, 20);
      },

      send: function () {
        alert("send");
      },

      //确认键函数，确认后将选择数据导入待传数组，做最后一次确定
      righter: function () {
        this.getAllSelectionData();
        if(!this.custListLater || this.custListLater.length <= 0) {
          this.custListLater = this.multipleSelectionAll;
          return;
        }
        let idKey = this.idKey;
        let selectAllIds = [];
        this.custListLater.forEach(row=>{
          selectAllIds.push(row[idKey]);
        });
        let selectIds = []
        this.multipleSelectionAll.forEach(row=>{
          selectIds.push(row[idKey]);
          if (selectAllIds.indexOf(row[idKey]) < 0) {
            this.custListLater.push(row);
          }
          else{
            alert("你选的课有重复");
            return;
          }
        })

        this.$refs.multipleTable.clearSelection();
        this.multipleSelection = [];
        this.multipleSelectionAll = [];
      },

      //得到分页后当前页数据列表（不包含选择）
      getList:function(){
        this.custList1 = this.custList.slice((this.pageIndex-1)*this.pageSize,this.pageIndex*this.pageSize);
      },

      //页面初次渲染时调用的到表格的长度
      getlength:function () {
        this.total = this.custList.length;
      },

      sizeChange:function (pageSize) {
        this.changePageCoreRecordData();
        this.pageSize = pageSize;
        this.queryData();
      },
      //跳转页面时调用
      pageIndexChange:function (pageIndex) {
        this.changePageCoreRecordData();
        this.pageIndex = pageIndex;
        this.queryData();
      }
    },
    computed:{
      // 暂时无用
      totallength:function () {
        return this.custList.length;
      },
    },
    created() {
      this.getlength()
      this.getList()
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
