<template>
  <div v-if="!IsLoaded" id="spinner">

       <Spinner />
   
  </div>

  <div v-if="IsLoaded">
    <br />
    <br />
    <div class="container p-3" id="postContent">
      <div class="p-1">
        <IndividualPost :postData="post" />
      </div>
    </div>

    <!-- {{post}} -->
  </div>
</template>


<script>
import { useRoute } from "vue-router";
import Spinner from "../components/Spinner";
import { ref } from "vue";
import getPost from "../Composables/getPost";
import IndividualPost from "../components/IndividualPost";

export default {
  name: "post",
  components: { IndividualPost, Spinner },

  setup() {
    const route = useRoute();

    const { post, error, load } = getPost(route.params.id);

    const IsLoaded = ref(false);
    console.log("From  ref:" + post.value);
    async function asyncCall() {
      await load();
      IsLoaded.value = true;
    }

    asyncCall();

    return { post, IsLoaded };
  },
};
</script>


<style scoped>
#postContent {
  overflow: visible;
  box-shadow: 0px 0px 14px -4px #000000;
  background-color: #ffffff;
  border-radius: 31px;
}

#spinner{
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>