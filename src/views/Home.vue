<template>
  <div>
    <div class="col-10 offset-1">
      <b-card>
        <div class="card-header">
          <b-button to="/temp"> + 新增问卷</b-button>
        </div>
        <b-card>
          <table class="table table-striped">
            <thead>
            <tr>
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
        </b-card>
      </b-card>
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
        { code: 4, name: 'test', states: 1, date: '2019-08-21', admin: 'tanzy' },
        { code: 5, name: 'test', states: 1, date: '2019-08-21', admin: 'tanzy' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
