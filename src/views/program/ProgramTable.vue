<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> 
      </el-table-column>
      <template v-for="item in tableHeader">
        <el-table-column
          v-if="item.prop === 'tag'"
          header-align="center"
          align="center"
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          :width="item.width"
        >
          <template slot-scope="scope">
            <el-tag
              :key="tag"
              v-for="tag in scope.row.tag"
              closable
              :disable-transitions="false"
              @close="handleClose(scope.row, tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="scope.row.showInput"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm(scope.row)"
              @blur="handleInputConfirm(scope.row)"
            >
            </el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput(scope)"
              >+ New Tag</el-button
            >
          </template>
        </el-table-column>
        <el-table-column
          v-else
          header-align="center"
          align="center"
          :prop="item.prop"
          :label="item.label"
          :key="item.prop"
          :width="item.width"
        >
        </el-table-column>
      </template>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      tableHeader: [
        { prop: "date", label: "日期", width: "150" },
        { prop: "tag", label: "标签" },
        { prop: "address", label: "地址" },
      ],
      tableData: [
        {
          date: "2016-05-03",
          tag: ["标签一", "标签二", "标签三"],
          address: "上海市普陀区金沙江路 1518 弄",
          showInput: false,
        },
        {
          date: "2016-05-02",
          tag: ["标签一", "标签二"],
          address: "上海市普陀区金沙江路 1518 弄",
          showInput: false,
        },
        {
          date: "2016-05-04",
          tag: ["标签一", "二"],
          address: "上海市普陀区金沙江路 1518 弄",
          showInput: false,
        },
      ],
      multipleSelection: [],
      currentPage: 1,
      // inputVisible: false,
      inputValue: "",
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      console.log("多选按钮框：", val);
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log("1232:", this.currentPage);
      console.log(`当前页: ${val}`);
    },
    // 标签
    showInput(scope) {
      scope.row["showInput"] = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput[0].$refs.input.focus();
      });
    },
    handleClose(row, tag) {
      row["tag"].splice(row["tag"].indexOf(tag), 1);
    },
    handleInputConfirm(row) {
      let inputValue = this.inputValue;
      let reg = /^[\u4e00-\u9fa5]+$/;
      if (inputValue) {
        if (reg.test(inputValue)) {
          row["tag"].push(inputValue);  
        } else {
          console.log("输入仅限中文");
          row["showInput"] = true;
          return
        }
      }
      row["showInput"] = false;
      this.inputValue = "";
    },
  },
};
</script>
<style scoped>
.el-pagination {
  position: absolute;
  bottom: 30px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
