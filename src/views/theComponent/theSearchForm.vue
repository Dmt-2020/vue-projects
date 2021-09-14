<template>
  <el-form :model="formInlineItem" class="demo-form-inline" size="mini" ref="formRule" label-position="right">
    <el-row :gutter="10">
      <template v-for="item in formItem">
        <el-col :span="4" :key="item.label" v-if="item.type === 0">
          <el-form-item
            :label="item.label"
            :prop="item.prop"
            :label-width="item.labelwidth"
          >
            <el-input v-model="formInlineItem[item.prop]" placeholder="请输入">
              <i slot="suffix" :class="item.icon" @click="handleIcon(item)"></i>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4" :key="item.label" v-else>
          <el-form-item
            :label="item.label"
            :prop="item.prop"
            :label-width="item.labelwidth"
          >
            <el-select v-model="formInlineItem[item.prop]" placeholder="请选择">
              <template v-for="opt in item.option">
                <el-option
                  :label="Object.keys(opt)[0]"
                  :value="Object.values(opt)[0]"
                  :key="Object.keys(opt)[0]"
                ></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4" :key="item.label" v-if="item.type === 'button'">
         <slot></slot>
        </el-col>
      </template>
    </el-row>

    <!-- <el-form-item> -->
    <!-- <slot></slot> -->
    <!-- </el-form-item> -->
  </el-form>
</template>
<script>
export default {
  name: "SearchForm",
  props: {
    options: {
      type: Array,
      required: true,
    },
    formInline: {
      type: Object,
      //   default: () => {},
    },
  },
  data() {
    return {
      formInlineItem: this.formInline,
      formItem: this.options,
      //   rules: {
      //     name: [
      //       { required: true, message: "请输入活动名称", trigger: "blur" },
      //       { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
      //     ],
      //   },
    };
  },
  methods: {
    handleIcon(val) {
      val.handleIconClick();
    },
  },
};
</script>
<style scoped>
</style>