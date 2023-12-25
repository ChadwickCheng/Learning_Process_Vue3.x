<template>
  <button @click="isShow=true">show modal</button>
  <teleport to="body">
    <div class="modal" v-show="isShow">
      <h2>modal title</h2>
      <p>modal content</p>
      <button @click="isShow=false">close modal</button>
    </div>
  </teleport>
</template>

<script setup lang='ts' name='Modal'>
  import {ref} from 'vue'
  let isShow = ref(false)
  /*
  模态框，即弹窗，一般参考整个窗口，就是固定定位
  使用固定定位，加一个类似于滤镜的样式，参考就是父容器了
  teleport将模态框从父容器中脱离，放到body中，这样就不会受到父容器的影响了 to可以写选择器 tobody就是参考body
  */
</script>

<style scoped>
  .modal{
    width: 200px;
    height: 200px;
    background-color: aqua;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px;
    position: fixed;
    left: 50%;
    margin-left: -100px;
    top: 20px;
  }
</style>