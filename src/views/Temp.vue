<template>
    <div>
      <div class="text-left">
        <b-link to="/home">返回</b-link>
      </div>
      <!--展示添加的列表-->
      <div>
          <div v-for="(item,index) in questionList" :key="index">
            <b-input-group class="mb-2">
              <span>{{index+1}}</span>
              <b-form-input v-model="item.questionTitle"></b-form-input>
            </b-input-group>
            <div v-if="item.questionType === '1'">
              <div v-for="(questionItem,itemIndex) in item.questionItemList" :key="itemIndex">
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <input type="radio" aria-label="Checkbox for following text input">
                  </b-input-group-prepend>
                  <b-form-input aria-label="Text input with checkbox" v-model="item.questionItemList[itemIndex]"></b-form-input>
                </b-input-group>
              </div>
              <button @click="addItem(index)">新增一个选项</button>
            </div>
            <div v-else-if="item.questionType === '2'">
              <div v-for="(questionItem,itemIndex) in item.questionItemList" :key="itemIndex">
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <input type="checkbox" aria-label="Checkbox for following text input">
                  </b-input-group-prepend>
                  <b-form-input aria-label="Text input with checkbox" v-model="item.questionItemList[itemIndex]"></b-form-input>
                </b-input-group>
              </div>
              <button @click="addItem(index)">新增一个选项</button>
            </div>
            <div v-else-if="item.questionType === '3'">
              <b-form-textarea
                id="textarea"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>

          </div>
      </div>
      <div class="add-box">
        <p class="qu-type" v-if="isAdding">
          <button @click="addType('1')">单选题</button>
          <button @click="addType('2')">多选题</button>
          <button @click="addType('3')">文本题</button>
        </p>

        <b-button  variant="danger" @click="isAdding = !isAdding;">
          + 添加问题
        </b-button>
      </div>
      <footer>
        <div>
          <label>问卷截止日期</label>
        </div>
        <div>
          <button @click="saveQuestionnaire()">保存问卷</button>
          <button>发布问卷</button>
        </div>
      </footer>
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

</style>
