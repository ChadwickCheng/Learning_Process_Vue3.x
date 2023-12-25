<template>
  <div class="right">
      <div class="outer">
        <h2>father {{ info }}</h2>
        <div class="slot">
          <!-- <Category title="游戏" v-slot:s2> 
            <p>魔法使之夜</p>
            <p>月姬Remake</p>
          </Category>
          <Category title="音乐">
            <p>VoodooKingdom</p>
          </Category>
          <Category title="电影">
            <p>通往夏天的隧道，离别的出口</p>
          </Category> -->
          <Game>
            <template v-slot:qwe="a">
              <!-- 使用a拿到所有数据 -->
              <li v-for="game in a.games" :key="game.id">{{game.name}}</li>
            </template>
          </Game>
          <Game>
            <template #qwe="a">
              <ol v-for="game in a.games" :key="game.id">{{game.name}}</ol>
            </template>
          </Game>
          <Game>
            <template v-slot:qwe="{games}">
              <h3 v-for="game in games" :key="game.id">{{game.name}}</h3>
            </template>
          </Game>
        </div>
      </div>
    </div>
</template>

<script setup lang='ts' name='Slott'>
  import Category from './Category.vue'
  import Game from './Game.vue';
  defineProps(['info'])
</script>

<style scoped>
  
  .outer {
    width: 700px;
    height: 700px;
    background-color: #ccc;
  }
  .slot{
    display: flex;
    justify-content: space-around;
  }
</style>

<!-- 
  使用插槽的好处：复用一个组件传递所需数据。该组件并不需要设定接受数据的逻辑
  
  单标签vs双标签
    双标签：可以写标签体，vue选择将标签体内容塞入该组件的插槽中
  
  默认插槽：占个位，内容都放进来。一般写一个。名儿是default

  具名插槽：有名字的插槽。我有很多数据要放在不同的坑，我就要给坑起名字。一般写多个。
    slot要写name属性。传数据要写v-slot:name简写为#name
    技巧：父组件无论写的顺序怎么样，使用template标签包裹每个部分，加上v-slot，对应子组件的插槽设置好，这样不管父组件的template顺序怎样，最后对应到子组件插槽会按照名称对应上。而且编译时会丢弃template，不会影响页面结构。

  作用域插槽 参考game组件 
  三个组件渲染游戏我希望每个组件有不同的结构去展示游戏，从父亲入手调结构
  数据在儿子那，slot标签内props传递数据，这样game的标签体就可以用数据
  孩子有数据，但根据数据生成结构由父亲决定
  可以有名字
  ui组件库使用频繁
 -->