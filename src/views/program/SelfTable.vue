<template>
  <div class="table-box">
    <div class="detail padding-box">
      <el-col><div class="checkBox"></div></el-col>
      <template v-for="i in tableHeader">
        <el-col :key="i.label">{{ i.label }}</el-col>
      </template>
    </div>
    <!-- 信息列表 -->

    <template v-for="(val, key, i) in tableData">
      <div class="grey-strip" :key="i"></div>
      <el-card shadow="never" :key="i">
        <div slot="header" class="messages-box">
          <span>sdfjkdfhdjkf </span>
        </div>

        <div class="detail" v-for="(item, index) in val.goods" :key="index">
          <el-col><div class="checkBox"></div></el-col>
          <template v-for="i in tableHeader">
            <el-col :key="item[i.label]">{{ item[i.prop] }}</el-col>
          </template>
        </div>
      </el-card>
    </template>

    <br/><br/>
     <el-divider></el-divider>
    <h2>拖拽事件</h2>
    <div>
      <span>将下列图案拖入颜色块中</span><br>
      <img draggable="true" id="image" src="../../assets/形状@2x.png" />
      <div id="zoom"></div>
    </div>
  </div>
</template>

<script>
import selfTable from "@/js/selfTable";
export default {
  data() {
    this.tableHeader = [
      { label: "货品编码", prop: "goods_no" },
      { label: "货品名称", prop: "goods_name" },
      { label: "供应商", prop: "provider_name" },
      { label: "档口款号", prop: "spec_name" },
      { label: "货品简称", prop: "short_name" },
      { label: "货品别称", prop: "remark" },
      { label: "商品类目", prop: "actual_num" },
    ];
    return {
      tableData: selfTable,
    };
  },
  mounted() {
    let image = document.getElementById("image");
    image.addEventListener("dragstart", function(e) {
      console.log("开始拖曳");
      e.dataTransfer.setData("text/html", e.target.innerHTML);
    });
    image.addEventListener("drag", function() {
      //    console.log("拖曳中");
    });
    image.addEventListener("dragend", function() {
      console.log("拖曳结束");
    });
    // 放
    let zoom = document.getElementById("zoom");
    zoom.addEventListener("dragenter", function() {
      console.log("进入动物园了");
    });
    zoom.addEventListener("dragover", function(e) {
      e.preventDefault();
      console.log("有只猪正在动物园中走动");
    });
    zoom.addEventListener("drop", function() {
      zoom.style.background = `cadetblue url('${image.src}') no-repeat`
      console.log("放手了！小猪进笼子里了");
    });
    zoom.addEventListener("dragleave", function() {
      console.log("离开动物园了");
    });
  },
  methods: {
    
  },
};
</script>
<style scoped lang="scss">
.table-box::v-deep {
  .padding-box {
    background-color: #f0f0f0;
    padding: 0 2px;
  }
  .detail {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ebeef5;
    border-bottom: none;
    .checkBox {
      width: 15px;
      height: 15px;
      border: 1px solid grey;
    }
    .el-col {
      padding: 5px;
      border-right: inherit;
    }
    .el-col:nth-child(1) {
      display: flex;
      align-items: center;
    }
    .el-col:nth-child(1) {
      width: 60px;
    }
  }
  .el-card {
    border: none;
    .el-card__header {
      border: inherit;
    }
    .el-card__body {
      padding: unset;
    }
    > div:nth-child(1) {
      border: 1px solid #ebeef5;
      border-bottom: none;
    }
  }
  .el-card:nth-last-child(1) {
    border-bottom: 1px solid #ebeef5;
  }
  .grey-strip {
    width: 100%;
    height: 7px;
    background-color: #d9d9d9;
  }
  .el-divider--horizontal {
    height: 3px;
  }
  #zoom {
    width: 200px;
    height: 200px;
    background: cadetblue;
  }
}
</style>
