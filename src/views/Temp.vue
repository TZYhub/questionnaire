<template>
    <div>
      <a>返回</a>
      <!--展示添加的列表-->
      <div>
        <ul>
          <li v-for="(item,index) in questionList" :key="index">
            {{(index+1)+"  "}}<input type="text" v-model="item.questionTitle"/>
            <div v-if="item.questionType === '1'">
              <div v-for="(questionItem,itemIndex) in item.questionItemList" :key="itemIndex">
                <b-input-group class="mb-2">
                  <b-input-group-prepend is-text>
                    <input type="checkbox" aria-label="Checkbox for following text input">
                  </b-input-group-prepend>
                  <b-form-input aria-label="Text input with checkbox" v-model="item.questionItemList[itemIndex]"></b-form-input>
                </b-input-group>
              </div>
             <!-- <p  v-for="(questionItem,itemIndex) in item.questionItemList" :key="itemIndex">
                <span>○</span><input type="text" v-model="item.questionItemList[itemIndex]"/>
              </p>-->
              <button @click="addItem(index)">新增一个选项</button>
            </div>
            <div v-else-if="item.questionType === '2'">
              <p  v-for="(questionItem,itemIndex) in item.questionItemList" :key="itemIndex">
                <span>□</span><input type="text" v-model="item.questionItemList[itemIndex]"/>
              </p>
              <button @click="addItem(index)">新增一个选项</button>
            </div>
            <div v-else-if="item.questionType === '3'">
              <textarea rows="5"  style=" width: 100%;"/>
            </div>

          </li>
        </ul>
      </div>
      <div class="add-box">
        <p class="qu-type" v-if="isAdding">
          <button @click="addType('1')">单选题</button>
          <button @click="addType('2')">多选题</button>
          <button @click="addType('3')">文本题</button>
        </p>

        <b-button variant="danger" @click="isAdding = !isAdding;">
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
      this.questionList.push({
        questionType: type,
        questionTitle: '请选择一个选项',
        questionItemList: ['选项1', '选项2']
      })
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
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
