<template>
  <div class="content">
    <article>
      <h1>h1h1h1</h1>
      <p>ppppp</p>
      <a href="#">jfklds</a>
      <h2>h2h2h2</h2>
      <h3>h3h3h3h3</h3>
    </article>

    <el-tooltip placement="top" popper-class="tooltip-style">
      <div slot="content" class="tooltip-text">
        {{ tooltipMessage }}
      </div>
      <el-button>Top center</el-button>
    </el-tooltip>
    <div class="afterText"></div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      tooltipMessage:
        "除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果",
    };
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.content {
  // 嵌套属性
  border: {
    style: solid;
    width: 2px;
    color: #ccc;
  }
  padding: 0 15px;
  article {
    h1 {
      color: darkcyan;
    }
    p {
      color: darkgoldenrod;
    }
    a {
      outline: none;
      text-decoration: none;
      color: black;
      &:hover {
        color: darkseagreen;
      }
    }
    h2,
    h3 {
      font-family: "仿宋";
      font-style: italic;
    }
  }
  .afterText {
    position: relative;
    width: 70px;
    height: 70px;
    background-color: darkgoldenrod;
  }
  .afterText::after {
    // position: absolute;
    // right: 0px;
    float: right;
    top: -5px;
    left: -5px;
    content: "x";
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 3px;
  }
  //   .el-tooltip__popper .popper__arrow,
  //   .el-tooltip__popper .popper__arrow::after {
  //     border-top-color: darkseagreen !important;
  //   }
  //   .tooltip-style {
  //     width: 80px;
  //     background-color: darkseagreen !important;
  //   }
  //   .tooltip-text {
  //     color: white;
  //   }
  //   .el-button:focus,
  //   .el-button:hover {
  //     color: cadetblue;
  //   }
}
</style>
