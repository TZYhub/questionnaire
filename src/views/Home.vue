<template>
  <div>
    <div class="col-10 offset-1 h">
      <div class="h1">
        <b-button to="/temp"> + 新增问卷</b-button>
      </div>
<!--      <div class="row mx-auto w-75 clear:both;">-->
<!--        <div class="col-6">-->
<!--          <div class="btn-group">-->
<!--            <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#myModal">新增</button>-->
<!--            <button type="button" class="btn btn-outline-primary btn-sm" @click="saveRows">保存</button>-->
<!--          </div>-->
<!--          <button type="button" class="btn btn-outline-warning btn-sm" @click="delRows">删除</button>-->
<!--        </div>-->
<!--        <div class="col-6">-->
<!--          <div class="input-group">-->
<!--            <input type="text" class="form-control input-group-sm" placeholder="输入设备编号进行搜索">-->
<!--            <span class="input-group-btn">-->
<!--                        <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>-->
<!--                    </span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="clear:both; ">
        <div class="col-12">
          <table class="table table-hover">
            <thead class="thead-default">
            <tr class="t2">
              <th><input type="checkbox"></th>
              <th>标题</th>
              <th>类型</th>
              <th>收集状态</th>
              <th>收到数据</th>
              <th>创建时间</th>
              <th>编辑时间</th>
              <th>编辑人员</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(facility,index) in facilities" :key="index" class="t3">
              <td><input type="checkbox" :value="index" v-model="checkedRows"></td>
              <td>{{index+1}}</td>
              <td>{{facility.code}}</td>
              <td>{{facility.name}}</td>
              <td>{{facility.states}}</td>
              <td>{{facility.date}}</td>
              <td>{{facility.admin}}</td>
              <td>{{facility.admin}}</td>
              <td>{{facility.admin}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      facilities: [
        { code: 1, name: 'test', states: 1, date: '2019-08-21', admin: 'tanzy' },
        { code: 2, name: 'test', states: 1, date: '2019-08-21', admin: 'tanzy' },
        { code: 3, name: 'test', states: 1, date: '2019-08-21', admin: 'tanzy' },
        { code: 4, name: 'test', states: 1, date: '2019-08-21', admin: 'tanzy' },
        { code: 4, name: 'test', states: 1, date: '2019-08-21', admin: 'tanzy' },
        { code: 5, name: 'test', states: 1, date: '2019-08-21', admin: 'tanzy' }
      ]
    }
  }
}
</script>

<style scoped>

.h{
  margin-top: 1px;
  min-height:500px;
  background-color: lightgray;
}
.h1{
  float:right;
  padding-right: 15px;
}
.t2{
  background-color: whitesmoke;
}
.t3{
  background-color: floralwhite;
}
</style>
