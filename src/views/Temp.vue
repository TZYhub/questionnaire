<template>
    <div>
      <div class="col-6 offset-3 t1">
        <div class="col-2 t2">
          <ul>
            <li>
              <b-button class="t3" v-b-popover.hover="''" title="单选题" variant="outline-secondary">单选题</b-button>
            </li>
            <li>
              <b-button class="t3" v-b-popover.hover="''" title="多选题" variant="outline-secondary">多选题</b-button>
            </li>
            <li>
              <b-button class="t3" v-b-popover.hover="''" title="填空题" variant="outline-secondary">填空题</b-button>
            </li>
          </ul>
        </div>
        <div class="col-10 t2">
          <div class="t4">
            <p class="left">问卷标题</p>
            <p class="left">描述</p>
          </div>
          <ul>
            <li>
              <div class="col-1 t5">
                <p class="center">1</p>
              </div>
              <div class="col-11 t5">
                <p class="left">题目描述</p>
                <p class="left">选项1</p>
                <p class="left">选项2</p>
              </div>
            </li>
            <li>
              <div class="col-1 t5">
                <p class="center">2</p>
              </div>
              <div class="col-11 t5">
                <p class="left">题目描述</p>
                <p class="left">选项1</p>
                <p class="left">选项2</p>
              </div>
            </li>
          </ul>
          <div class="t4">
            <b-button>保存并发布</b-button>
          </div>
        </div>
      </div>










      <!--<div class="text-left">-->
        <!--<b-link to="/home">返回</b-link>-->
      <!--</div>-->
      <!--&lt;!&ndash;展示添加的列表&ndash;&gt;-->
      <!--<div>-->
          <!--<div v-for="(item,index) in questionList" :key="index">-->
            <!--<b-input-group class="mb-2">-->
              <!--<span>{{index+1}}</span>-->
              <!--<b-form-input v-model="item.questionTitle"></b-form-input>-->
            <!--</b-input-group>-->
            <!--<div v-if="item.questionType === '1'">-->
              <!--<div v-for="(questionItem,itemIndex) in item.questionItemList" :key="itemIndex">-->
                <!--<b-input-group class="mb-2">-->
                  <!--<b-input-group-prepend is-text>-->
                    <!--<input type="radio" aria-label="Checkbox for following text input">-->
                  <!--</b-input-group-prepend>-->
                  <!--<b-form-input aria-label="Text input with checkbox" v-model="item.questionItemList[itemIndex]"></b-form-input>-->
                <!--</b-input-group>-->
              <!--</div>-->
              <!--<button @click="addItem(index)">新增一个选项</button>-->
            <!--</div>-->
            <!--<div v-else-if="item.questionType === '2'">-->
              <!--<div v-for="(questionItem,itemIndex) in item.questionItemList" :key="itemIndex">-->
                <!--<b-input-group class="mb-2">-->
                  <!--<b-input-group-prepend is-text>-->
                    <!--<input type="checkbox" aria-label="Checkbox for following text input">-->
                  <!--</b-input-group-prepend>-->
                  <!--<b-form-input aria-label="Text input with checkbox" v-model="item.questionItemList[itemIndex]"></b-form-input>-->
                <!--</b-input-group>-->
              <!--</div>-->
              <!--<button @click="addItem(index)">新增一个选项</button>-->
            <!--</div>-->
            <!--<div v-else-if="item.questionType === '3'">-->
              <!--<b-form-textarea-->
                <!--id="textarea"-->
                <!--rows="3"-->
                <!--max-rows="6"-->
              <!--&gt;</b-form-textarea>-->
            <!--</div>-->

          <!--</div>-->
      <!--</div>-->
      <!--<div class="add-box">-->
        <!--<p class="qu-type" v-if="isAdding">-->
          <!--<button @click="addType('1')">单选题</button>-->
          <!--<button @click="addType('2')">多选题</button>-->
          <!--<button @click="addType('3')">文本题</button>-->
        <!--</p>-->

        <!--<b-button  variant="danger" @click="isAdding = !isAdding;">-->
          <!--+ 添加问题-->
        <!--</b-button>-->
      <!--</div>-->
      <!--<footer>-->
        <!--<div>-->
          <!--<label>问卷截止日期</label>-->
        <!--</div>-->
        <!--<div>-->
          <!--<button @click="saveQuestionnaire()">保存问卷</button>-->
          <!--<button>发布问卷</button>-->
        <!--</div>-->
      <!--</footer>-->
    </div>
</template>

<script>
export default {
  name: 'Temp',
  data () {
    return {
      isAdding: false,
      questionList: []
    }
  },
  methods: {
    addType (type) {
      var question = {
        questionType: '',
        questionTitle: '',
        questionItemList: []
      }
      question.questionType = type
      if (type === '1') {
        question.questionTitle = '请选择一个选项'
        question.questionItemList = ['选项1', '选项2']
      } else if (type === '2') {
        question.questionTitle = '请选择一个或多个选项'
        question.questionItemList = ['选项1', '选项2']
      } else {
        question.questionTitle = '请填写信息'
      }
      this.questionList.push(question)
    },
    addItem (index) {
      var list = this.questionList[index].questionItemList
      var itemName = '选项' + (list.length + 1)
      list.push(itemName)
    },
    itemEdit (index, itemIndex) {
      alert(index + ',' + itemIndex)
    },
    saveQuestionnaire () {
      if (this.questionList.length <= 0) {
        alert('请至少新增一个题目')
        return
      }
      localStorage.setItem('questionList', JSON.stringify(this.questionList))
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.t1{
  border:1px solid red;
  height: 500px;
  padding: 0px;
}
.t2{
  border:1px solid red;
  padding: 0px;
  float:left;
  min-height: 400px;
}
.t3{
  width: 100%;
  margin-top: 3px;
}
.t4{
  clear: both;
  border:1px solid red;
  width: 100%;
  min-height: 100px;
}
.t5{
  float:left;
  border:1px solid red;
}
.center{
  text-align:center;
}
.left{
  text-align:left;
}
ul{
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

</style>
