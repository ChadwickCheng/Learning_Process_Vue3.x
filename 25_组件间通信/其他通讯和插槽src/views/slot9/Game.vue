<template>
  <div class="game">
    <h2>game list</h2>
    <ul>
      <!-- <li v-for="game in games" :key="game.id">{{game.name}}</li> -->
      <!-- 传数据 -->
      <slot name="qwe" :games="games"></slot>
    </ul>
  </div>
</template>

<script setup lang='ts' name='Game'>
  import { nanoid } from 'nanoid';
import {reactive} from 'vue'
  let games = reactive([
    {
      id:nanoid(),name:'魔法使之夜'
    },
    {
      id:nanoid(),name:'月姬Remake'
    }
  ])
</script>

<style scoped>
  .game {
    width: 200px;
    height: 200px;
    background-color: aqua;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  h2{
    text-align: center;
    background-color: pink;
  }
</style>