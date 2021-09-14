<template>
  <div>
    <span style="font-size: 16px; line-height: 30px">地址提取策略</span>
    <el-row>
      <span class="prompt-text" v-html="prompt"></span>
      <div class="auxiliary-text">
        <img src="../../assets/形状@2x.png" />
        <div v-html="showMessage"></div>
      </div>

      <!-- <el-alert type="warning" show-icon :closable="false">
        <template>
          <div v-html="showMessage"></div>
        </template>
      </el-alert> -->
    </el-row>
    <br />
    <el-row>
      <el-button type="success" size="small" @click="createNew"
        >新建策略</el-button
      >
    </el-row>
    <br />
    <el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        border
        size="mini"
      >
        <template v-for="item in tableHeader">
          <el-table-column
            v-if="item.prop === 'status'"
            header-align="center"
            align="center"
            :prop="item.prop"
            :label="item.label"
            :key="item.prop"
            :width="item.width"
          >
            <template slot-scope="{ row }">
              <el-button
                size="mini"
                :class="[row.status ? 'active' : 'inactive']"
                >{{ row.status ? "启用中" : "停用中" }}</el-button
              >
            </template>
          </el-table-column>
          <el-table-column
            v-else-if="item.prop === 'words'"
            :prop="item.prop"
            :label="item.label"
            :key="item.prop"
            :min-width="300"
          >
            <template slot-scope="{ row }">
              <el-tag
                size="mini"
                :key="index"
                effect="plain"
                v-for="(label, index) in row.words"
                >{{ label }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column
            v-else
            :prop="item.prop"
            :label="item.label"
            :key="item.prop"
            :width="item.width"
          >
          </el-table-column>
        </template>
        <el-table-column
          header-align="center"
          align="center"
          label="操作"
          width="150"
        >
          <template slot-scope="scope">
            <span size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</span
            >&nbsp;
            <span size="mini" @click="handleCheck(scope.row)">{{
              scope.row.status ? "停用" : "启用"
            }}</span
            >&nbsp;
            <span
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</span
            >
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <TheDialog
      :show.sync="showDialog"
      v-if="showDialog"
      :dataDetail="rowData"
      @func="changeDialog"
      :isEditOrCreate="isEditOrCreate"
    ></TheDialog>
  </div>
</template>
<script>
import TheDialog from "@/views/theComponent/TheDialog";
export default {
  components: {
    TheDialog,
  },
  data() {
    return {
      prompt:
        '“地址提取”用于冻结或标记详细地址中存在双重地址的订单，比如省市区为“甘肃省兰州市其他区”，具体地址为“新疆自治区乌鲁木齐市”的订单，开启“地址提取”后，可冻结或标记订单，避免此类邮资损失。如需修改物流，请前往“<span style="color:#23AF60">物流匹配</span>”设置。',
      showMessage: `<span>1.根据平台加密要求，目前地址提取策略，暂不支持拼多多、抖音、京东平台</span></br>
        2.<span>地址仅支持明文部分提取，星号加密部分不支持提取。比如收件人完整地址为“甘肃省兰州市其他区 新疆****”，详细地址部分可提取“新疆”，“***”由于加密无法提取</span><br/>
        3.目前最多提取30个关键词`,
      tableHeader: [
        { prop: "name", label: "策略名称", width: "150" },
        { prop: "words", label: "具体关键词" },
        { prop: "resolves", label: "处理方式", width: "200" },
        { prop: "setTime", label: "修改时间", width: "150" },
        { prop: "status", label: "状态", width: "100" },
      ],
      tableData: [
        {
          name: "策略1",
          words: ["标签一", "标签二"],
          resolves: "标记1",
          setTime: "2021-06-23 12:56:44",
          status: true,
        },
        {
          name: "策略2",
          words: ["标签一", "标签二", "标签三"],
          resolves: "冻结",
          status: false,
        },
        {
          name: "策略3",
          words: ["标签一", "标签三"],
          resolves: "标记",
          status: true,
        },
      ],
      showDialog: false,
      rowData: {
        name: "",
        words: [],
        region1: "",
        region2: "",
      }, // 传递给弹框的行数据，
      isEditOrCreate: 0,
      // isActive: false,
    };
  },
  methods: {
    createNew() {
      console.log("rowData", this.rowData);
      this.isEditOrCreate = 1;
      this.showDialog = true;
    },
    handleEdit(index, row) {
      for (const item in row) {
        this.rowData[item] = row[item];
      }
      //   this.rowData = JSON.parse(JinSON.strgify(row));  //容易丢失属性undefied
      this.isEditOrCreate = 2;
      this.showDialog = true;
    },
    handleCheck(row) {
      //是否启用状态
      row.status = !row.status;
    },
    handleDelete(index, row) {
      //删除
      console.log(index, row);
      this.$confirm(`确定删除 ${row.name} 策略吗？`)
        .then(() => {
          console.log("sure!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeDialog(val) {
      this.showDialog = val;
    },
  },
};
</script>
<style lang="scss" scoped>
.prompt-text::v-deep {
  display: block;
  font-size: 12px;
  color: #999999;
  margin-bottom: 10px;
}
.auxiliary-text {
  border: 1px solid #ffdca8;
  background: #fff8f0;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  line-height: 22px;
  padding: 7px 10px;
  overflow: hidden;
  img {
    width: 14px;
    height: 14px;
    display: inline-block;
    vertical-align: top;
    margin-right: 8px;
    margin-top: 5px;
  }
  div {
    display: inline-block;
  }
}
.el-alert::v-deep {
  border: 1px solid #ffdca8;
}
.el-tag--plain {
  display: inline-block;
  border-color: #dddddd;
  color: #333333;
  line-height: 21px;
  height: 21px;
  vertical-align: middle;
  font-size: 12px;
  margin-right: 9px;
  padding: 0px 10px;
}
.el-tag--plain:last-child {
  margin-right: 0px;
}
// .el-table_1_column_5 .el-button
.inactive {
  background-color: #fff1f0;
  border: 1px solid #ffd5d5;
  color: #ff4d4f;
}
.active {
  background-color: #edfbf3;
  border: 1px solid #b9e3cb;
  color: #23af60;
}
.el-table .el-button {
  padding: 4px 10px;
}
.el-table_1_column_6 span {
  cursor: pointer;
  color: #23af60;
}
</style>
