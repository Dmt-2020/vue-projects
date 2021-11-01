// 参考：https://blog.csdn.net/XH_jing/article/details/117415496
<template>
  <div class="publish">
    <video ref="video"></video>
    <canvas style="display:none" id="canvasCamera"></canvas>
    <div v-if="imgSrc" class="img_bg_camera"> 
      <img :src="imgSrc" class="tx_img"/>
    </div>
    <button @click="OpenCamera"> 打开摄像头</button>
    <button @click="CloseCamera">关闭摄像头</button>
    <button @click="setImage">拍照</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
     mediaStreamTrack:{},
     video_stream:"", //视频stream
     imgSrc:"", //拍照图片
     canvas:null,
     context:null
    };
  },
  // mounted() {
  //   this.getCamera()
  // },
  methods: {
    getCamera(){
      this.canvas = document.getElementById("canvasCamera")
      this.context = this.canvas.getContext('2d');
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      navigator.mediaDevices.getUserMedia({video:true}) //唤起摄像头   还可以配置audio:true,
      .then(stream =>{
        console.log(stream.getTracks());  //获取轨道，比如如果上一步配置了摄像头和录音机，则该数组会有两个值
        this.mediaStreamTrack = typeof stream.stop === "function"?stream :stream.getTracks()[0]
        this.video_stream = stream
        this.$refs.video.srcObject = stream
        this.$refs.video.play()  //调用video原生的方法
      })
      .catch(err=>{
        console.log(err);
      })
    },
    // 拍照
    setImage(){
      this.context.drawImage(this.$refs.video,0,0,200,100)
      // 获取图片base64链接
      const image = this.canvas.toDataURL('image/png')
      this.imgSrc = image
      // this.$emit('refreshDataList',this.imgSrc)
    },
    // 打开摄像头
    OpenCamera(){
      this.getCamera()
    },
    CloseCamera(){
      this.$refs.video.srcObject.getTracks()[0].stop()
      // this.$refs.video.style.visibility = "hidden"
    }
  },
};
</script>
<style lang="scss" scoped>
video {
  border: 1px solid darkgoldenrod;
  width: 100%;
  height: 300px;
}
canvas {
  width: 100%;
  height: 300px;
}
button {
  width: 100px;
  height: 40px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: darkgoldenrod;
}
.img_bg_camera {
  img {
    width: 300px;
    height: 200px;
  }
}
</style>
