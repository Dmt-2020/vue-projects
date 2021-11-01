<template>
  <div class="virtual-box">
    <DynamicScroller
      class="scroller"
      :items="items"
      :min-item-size="54"
      v-slot="{ item, index, active }"
    >
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[JSON.parse(item.goods_info)]"
        :data-index="index"
      >
        <div class="user">
          <div class="user-title">
            <el-row>
              <el-col :span="1"><div class="use-checkbox"></div></el-col>
              <el-col :span="3"
                ><span>店铺：{{ item.shop_name }}</span></el-col
              >
              <el-col :span="4"
                ><span>系统单号：{{ item.src_order_no }}</span></el-col
              >
              <el-col :span="4"
                ><span>原始单号：{{ item.src_tids }}</span></el-col
              >
              <el-col :offset="4" :span="4"
                ><span>拦截原因：{{ item.bad_block_reason }}</span></el-col
              >
              <el-col :span="3"
                ><span>付款时间：{{ item.pay_time }}</span></el-col
              >
            </el-row>
          </div>
          <div class="use-content" :class="{ showHeight: item.isOpen }">
            <el-row type="flex">
              <el-col :span="1"><div class="grid-content">1</div></el-col>
              <el-col :span="2"
                ><div class="grid-content">
                  <template v-for="flag in item.flag">
                    <span :key="flag.flag_id">
                      {{ flag.flag_name }}
                    </span>
                  </template>
                </div></el-col
              >
              <el-col :span="5"
                ><div class="grid-content">
                  <template v-for="good in JSON.parse(item.goods_info)">
                    <div :key="good.id" class="goods-info">
                      <img :src="good.img_url" :key="good.img_url" />
                      <div class="img-text">
                        <span>{{ good.goods_name }}</span
                        ><br />
                        <span>{{ good.spec_name }}</span>
                      </div>
                    </div>
                  </template>
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content">
                  {{ JSON.parse(item.logistics_info).logistics_name }}
                </div></el-col
              >
              <el-col :span="4"
                ><div class="grid-content">
                  <span>
                    {{ JSON.parse(item.receiver_info).receiver_name }} </span
                  ><br />
                  <span>
                    {{ JSON.parse(item.receiver_info).receiver_area }} </span
                  ><br />
                  <span>
                    {{ JSON.parse(item.receiver_info).receiver_address }}
                  </span>
                </div></el-col
              >
              <el-col :span="5"
                ><div class="grid-content">
                  <span
                    >网名：<span
                      v-html="JSON.parse(item.shopname_nickname).nickname"
                    ></span></span
                  ><br />
                  <span>留言：{{ item.buyer_nick }}</span
                  ><br />
                  <span>备注：{{ item.cs_remark_info }} </span>
                </div></el-col
              >
              <el-col :span="2"
                ><div class="grid-content">
                  <span>{{ item.paid }}</span
                  ><br />
                  <span>优惠：{{ item.discount }}</span>
                </div></el-col
              >
              <el-col :span="1"
                ><div class="grid-content">
                  <span @click="openDetail(item, index)">展开</span>
                </div></el-col
              >
            </el-row>
          </div>
        </div>
      </DynamicScrollerItem>
    </DynamicScroller>
  </div>
</template>
<script>
import resultData from "../../js/rowData.json";
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    //追加展开功能的字段
    for (let i = 0; i < resultData.rows.length; i++) {
      this.items.push({ ...resultData.rows[i], isOpen: false });
    }
    console.log(this.items);
  },
  methods: {
    openDetail(item, index) {
      console.log(item, index);
      item.isOpen = !item.isOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
.virtual-box {
  height: 400px;
  font-size: 12px;
  border: 1px solid rgb(204, 203, 203);
  .scroller {
    height: 100%;
  }
  .user {
    .user-title {
      // display: inline-flex;
      // flex-direction: row;
      // justify-content: space-between;
      // float: left;
      width: 100%;
      line-height: 40px;
      height: 40px;
      padding: 0 10px 0 10px;
      background-image: linear-gradient(#e8eaec, #e8eaec),
        linear-gradient(#e8eaec, #e8eaec);
      .use-checkbox {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: white;
        border-radius: 2px;
        cursor: pointer;
      }
      .el-col {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .use-content {
      height: 60px;
      overflow: hidden;
      .el-col {
        border-right: 1px solid rgb(204, 203, 203);
        padding: 10px 10px 0 10px;
        .grid-content {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .el-col:nth-child(1),
      .el-col:last-child {
        text-align: center;
      }
      .goods-info {
        margin-bottom: 8px;
        overflow: hidden;
        img {
          float: left;
          width: 44px;
          height: 44px;
          vertical-align: top;
          margin-right: 10px;
        }
        .img-text {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      //点击跳转聊天的图标
      a img{
        vertical-align: top;
      }
    }
    .showHeight {
      height: auto;
    }
  }
}
</style>