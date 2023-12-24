<template>
  <div class="person">
    ???
  </div>
</template>

<script setup lang="ts" name="Person">
  import { reactive } from 'vue'
  import { type PersonInter,type Persons } from '@/types'
  const person:PersonInter = reactive({
    id:'16851c681acds',
    name:'Kuonji Alice',
    age:18,
  })
  const personList:Persons = reactive([
    {id:'16851c681acds',name:'Kuonji Alice',age:18},
    {id:'16851c681acaa',name:'Kuonji Alice12',age:18},
  ])
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>