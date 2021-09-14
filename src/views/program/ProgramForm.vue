<template>
  <div class="search-box">
    <div class="header" @click="logOne()">
      <div
        @click="logTwo()"
        style="width: 500px; height: 80px; border: 2px solid white"
      >
        <div
          @click="logThree()"
          style="width: 400px; height: 50px; border: 2px solid white"
        >
          <br />
          <span>冒泡：</span>
          <input type="text" placeholder="请输入" />
        </div>
      </div>
    </div>
    <div class="contanier">
      <search-form :options="options" :formInline="formInline" ref="searchForm">
        <el-button type="success" size="mini" @click="resetForm('searchForm')"
          >重置</el-button
        >
        <el-button type="primary" size="mini" @click="submitForm('searchForm')"
          >查询</el-button
        >
      </search-form>
    </div>
    <div class="footer">
      <span>测试select框中放不同组件：</span>
      <el-select v-model="value" placeholder="请选择" size="mini">
        <el-option
         :value="valueSelect"
         style="height: auto"
        >
          <el-tree
            :data="data"
            :props="defaultProps"
            node-key="id"
            accordion
            @node-click="checkChange"
          >
          </el-tree>
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import SearchForm from "../theComponent/theSearchForm.vue";
export default {
  components: {
    SearchForm,
  },
  data() {
    return {
      options: [
        {
          type: 0,
          prop: "1",
          label: "暗杀计划：",
          labelwidth: "60px",
        },
        {
          type: 0,
          prop: "2",
          label: "如业务额：",
          labelwidth: "60px",
          icon: "el-input__icon el-icon-date",
          handleIconClick: this.IconClick,
        },
        {
          type: 1,
          prop: "region1",
          label: "看了觉得：",
          labelwidth: "60px",
          option: [{ 区域一: "shanghai" }, { 区域二: "beijing" }],
        },
        {
          type:'button',
        },
        {
          type: 0,
          prop: "3",
          label: "啊撒旦艰苦：",
          labelwidth: "72px",
        },
        {
          type: 1,
          prop: "region2",
          label: "爱谁谁：",
          labelwidth: "48px",
          option: [{ 韩憨子: "shanghai" }, { 二傻子: "beijing" }],
        },
      ],
      formInline: {
        1: "",
        2: "",
        3: "",
        region1: "",
        region2: "",
      },
      valueSelect:'',
      value:'',
      data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
             id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },
  methods: {
    submitForm(formName) {
      console.log("提交的表单数据", this.formInline);
      this.$refs[formName].$refs["formRule"].validate((valid) => {
        if (valid) {
          console.log("submit");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].$refs["formRule"].resetFields();
    },
    IconClick() {
      alert("图标点击事件hhhhh");
    },
    checkChange(a){
      console.log(a);
      this.valueSelect = a
      this.value = a.label
    }
  },
};
</script>
<style lang="scss" scoped>
.search-box::v-deep {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-right: 10px;
  .el-form-item__label {
    font-size: 12px !important;
    padding-right: 0;
  }
  .header {
    flex: 1;
    background-color: darkcyan;
  }
  .contanier {
    flex: 1;
    background-color: darkgoldenrod;
  }
  .footer {
    flex: 1;
    background-color: darkseagreen;
  }
}
</style>