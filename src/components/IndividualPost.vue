<template>
  <h2>
   {{postData.title}}
  </h2>
<router-link :to="{ name: 'Edit', params: { postDataid }}">
  Edit Post
</router-link>
<br>
<router-link :to="{ name: 'delete', params: { postDataid }}">
  Delete Post
</router-link>
  <hr>

  

<p>#Tags</p>
<div class="row">
    <div class="col-md-auto p-2 m-2"    id="tagbubble"  v-for="tag in postData.tags" :key="tag">
         <div >
          <div  class="text-white ">
              
                 <router-link :to="{ name: 'Tag', params: { tag }}">
              {{tag}}
               
                 </router-link>
              
              </div>
      </div>
       
       
       
    </div>
</div>
      
     
  
  <hr>

  <p>
      {{postData.body}}
  </p>
</template>


<script>
import { ref } from "vue";


export default {
     props: ["postData"],
  setup() {
   

  },
};
</script>


<style scoped>
#tagbubble {
 
  box-shadow: 0px 1px 13px -3px rgba(0, 0, 0, 0.25);
  background-color: #4E5152;
  border-radius: 158px;

  border: 3px solid #222222;
}
</style>