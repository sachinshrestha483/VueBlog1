import { ref } from 'vue'
import { projectFirestore } from '../Firebase/config'

const isExistFun = (name,id) => {

  const isExist = ref(false)
  const error=ref(null)
  const obj=ref(null);

  const check = async () => {
    try {
      let res = await projectFirestore.collection(name).doc(id).get();
      obj.value={...res.data(),id:res.id};
      console.log(obj.value)
       console.log("from Does Exist:"+res.data)
       console.log(res.data);

      if (!res.exists) {
         isExist.value=false;
         throw Error('That post does not exist')
      }
      else{
          isExist.value=true;

      }
     
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { error, check,isExistFun ,obj,isExist} 
}

export default isExistFun