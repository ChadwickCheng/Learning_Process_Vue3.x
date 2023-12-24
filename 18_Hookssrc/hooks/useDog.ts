import { reactive,onMounted } from 'vue'
import axios from 'axios'

export default function(){
  const url = 'https://dog.ceo/api/breed/pembroke/images/random'
  let dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_1023.jpg'
  ])
  const getDog = async () => {
    try{
      const { data } = await axios.get(url)
      dogList.push(data.message)
    }catch(err){
      console.log(err);
    }
  }
  // onMounted(()=>{
  //   getDog()
  // })
  // 向外提供任何东西
  return {dogList,getDog}
}