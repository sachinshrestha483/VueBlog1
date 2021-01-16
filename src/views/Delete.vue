<template>
    <button class="btn btn-secondary"   id="deleteButton">Delete Post</button>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import Delete from "../Composables/deletePost"


export default {
    
setup(){
     const route = useRoute();

 
 const { deleteFun } = Delete(route.params.id);
    const router = useRouter();
  asyncCall();


     
      
      async function asyncCall() {
  await deleteFun(route.params.id);
        router.push({ name: "Home" });

  
  }


      
      
return{}

}


}
</script>


<style scoped>
#deleteButton{
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>