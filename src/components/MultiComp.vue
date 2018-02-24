<template>
  <div>
  <el-button type="primary" plain @click="dialogVisible = true">点击打开 Dialog</el-button>
  <el-dialog title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleButton(0)">取 消</el-button>
      <el-button type="primary" @click="handleButton(1)">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'MultComp',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose (done) {
      console.log('dialog closed - OK')
      done()
    },
    handleButton (flag) {
      console.log('dialogVisible: ' + this.dialogVisible + ', flag: ' + flag)
      this.dialogVisible = false
    }
  }
}
</script>
