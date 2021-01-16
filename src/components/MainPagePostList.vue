<template>
   <div v-for="post in posts" :key="post">
          <div id="individualPost"  class="row jumbotron jumbotron-fluid p-3">
            <router-link :to="{ name: 'post', params: { id: post.id }}">
            <h2>{{ post.title }}</h2>

            </router-link>
            <p>
              {{ post.body.substring(1, 300) }}
            </p>
          </div>
          <br />
          <br />
    </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import { projectFirestore } from "../Firebase/config";

export default {
  name: "Home",
  components: {},
   props: ["posts"],


 
};
</script>

<style>
#individualPost {
  /* height: 250px; */
  background-color: #ffffff;

  box-shadow: 0px 1px 2px 0px #000000, 9px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 31px;
}
</style>