import { ref,computed } from 'vue'

export default function(){
  const sum = ref(0)
  let bigSum = computed(()=>{
    return sum.value * 10
  })
  const add = () => sum.value++
  return {sum,add,bigSum}
}