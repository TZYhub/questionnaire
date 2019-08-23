<template>
    <div>
      <div class="col-10 offset-1">
        <b-card class="col-2 left">
          <b-list-group>
            <b-list-group-item class="add-item-margin">单选题</b-list-group-item>
            <b-list-group-item class="add-item-margin">多选题</b-list-group-item>
            <b-list-group-item class="add-item-margin">填空题</b-list-group-item>
          </b-list-group>
        </b-card>
        <b-card class="col-9 left">
          <b-card>
            <p>问卷标题</p>
            <p class="text-left">提示话。。。。。。。。。。。。。</p>
          </b-card>
          <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center add-item-margin">
              <div>
                <p class="text-left">1    题目</p>
                <p class="text-left">选项1</p>
                <p class="text-left">选项2</p>
              </div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center add-item-margin">
              <div>
              <p class="text-left">1    题目</p>
              <p class="text-left">选项1</p>
              <p class="text-left">选项2</p>
              </div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center add-item-margin">
              <div>
              <p class="text-left">1    题目</p>
              <p class="text-left">选项1</p>
              <p class="text-left">选项2</p>
              </div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center add-item-margin">
              <div>
              <p class="text-left">1    题目</p>
              <p class="text-left">选项1</p>
              <p class="text-left">选项2</p>
              </div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center add-item-margin">
              <div>
              <p class="text-left">1    题目</p>
              <p class="text-left">选项1</p>
              <p class="text-left">选项2</p>
              </div>
            </b-list-group-item>

          </b-list-group>
        </b-card>
        <div class="clear"></div>
      </div>

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
.left{
  float: left;
  height: 100%;
}
.clear{
  clear: both;
}
.add-item-margin{
  margin-top: 20px;
}

</style>
