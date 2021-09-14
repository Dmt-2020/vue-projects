<template>
  <div class="dialog-style">
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <el-form
        :model="formData"
        label-position="right"
        label-width="120px"
        size="mini"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item label="策略名称:" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="处理方式:">
          <el-row>
            <el-col :span="5">
              <el-select v-model="formData.region1" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="5" :offset="1">
              <el-select v-model="formData.region2" placeholder="请选择">
                <el-option
                  label="区区域一区域一区域一域一"
                  value="shanghai"
                ></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4" :offset="4">
              <el-button size="small" class="tag-button"
                ><i class="el-icon-price-tag"></i>标记管理</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="详细地址关键词:">
          <div class="address-keywords" ref="address">
            <el-tag
              :key="tag"
              v-for="tag in formData.words"
              closable
              size="small"
              :disable-transitions="false"
              @close="deleteTag(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="mini"
              @click="showInput"
              >+ 添加</el-button
            >
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveMessage('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "TheDialog",
  props: {
    showDialog: {
      type: Boolean,
    },
    dataDetail: {
      type: Object,
    },
    func: {
      type: Function,
    },
    isEditOrCreate: {
      type: Number,
    },
  },
  data() {
    return {
      dialogVisible: true,
      formData: this.dataDetail,
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
      },
      inputVisible: false,
      inputValue: "",
      saveFlag: false,
      title: "",
    };
  },
  beforeMount() {
    if (this.isEditOrCreate === 1) {
      this.title = "新增";
      //清空数据
      this.formData = {
        name: "",
        words: [],
        region1: "",
        region2: "",
      };
    } else {
      this.title = "编辑";
    }
  },
  methods: {
    deleteTag(tag) {
      this.formData.words.splice(this.formData.words.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleClose() {
      if (!this.saveFlag) {
        // 并且数据发生变化
        this.$confirm("修改尚未保存，are you sure？")
          .then(() => {
            console.log("sure!");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      let reg = /[^\w^\s^\u4e00-\u9fa5]/gi;
      if (inputValue) {
        if (reg.test(inputValue)) {
          console.log("输入仅限中文");
          this.inputVisible = true;
          return;
        } else {
          this.formData.words.push(inputValue);
        }
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    saveMessage(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          this.dialogVisible = false;
          this.$emit("func", false); // 改变主页面dialog的状态
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.dialog-style {
  width: 100%;
  height: 400px;
  .el-form {
    > .el-form-item:first-child .el-input {
      width: 200px;
    }
  }
  .el-select {
    .el-input__inner {
      width: 90%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  // 地址关键词块的样式
  .address-keywords {
    width: 80%;
    min-height: 80px;
    max-height: 100px;
    overflow: auto;
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #dddddd;
    .el-tag::v-deep {
      height: 24px;
      line-height: 24px;
      margin-right: 10px;
      margin-bottom: 8px;
      border-color: #dddddd;
      background-color: white;
      color: #333333;
      .el-tag__close {
        color: #999999;
      }
    }
    .button-new-tag {
      padding: unset;
      padding-left: 8px;
      padding-right: 8px;
      line-height: 24px;
      height: 24px;
      border: 1px solid #23af60;
      color: #23af60;
    }
    .input-new-tag {
      width: 90px;
      height: 24px;
    }
  }
  // 标记管理
  .tag-button {
    color: #23af60;
    padding: 6px 12px;
    font-size: 12px;
    border: 1px solid #23af60;
    vertical-align: middle;
    .el-icon-price-tag {
      margin-right: 2px;
      vertical-align: bottom;
      transform: rotate(45deg);
    }
  }
}
</style>
