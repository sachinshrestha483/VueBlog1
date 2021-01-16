<template>
  <br />
  <br />
  <div class="home container">
    <div class="row">
      <div class="col-md-8 col-sm-12">
        <!-- <div v-for="post in posts" :key="post">
          <div id="individualPost" class="row jumbotron jumbotron-fluid p-3">
            <h2>{{ post.title }}</h2>
            <p>
              {{ post.body.substring(1, 300) }}
            </p>
          </div>
          <br />
          <br />
        </div> -->
        <div v-show="IsNotLoaded"  align="center">
         
            <div id="spinner"><spinner /></div>
        </div>

        <PostsList :posts="posts" />
      </div>

      <div class="col-md-1 col-sm-0"></div>

      <div class="col-md-3 co-sm-0">
        <div v-show="IsNotLoaded" align="center">
          <div><spinner /></div>
        </div>
        <div v-if="!IsNotLoaded" id="alltags">
          <TagsList :posts="posts" />
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</template>



<script>
// @ is an alias to /src
import { ref } from "vue";
import PostsList from "../components/MainPagePostList";
import TagsList from "../components/TagsList";
import { projectFirestore } from "../Firebase/config";
import getPosts from "../Composables/getPosts";
import useTags from "../Composables/useTags";
import Spinner from "../components/Spinner";

export default {
  name: "Home",
  components: { PostsList, TagsList, Spinner },

  setup() {
    const { posts, load } = getPosts();
    const IsNotLoaded = ref(true);

    async function asyncCall() {
      await load();
      IsNotLoaded.value = false;
    }

    asyncCall();

    return { posts, IsNotLoaded };
  },
};
</script>

<style scoped >
#alltags {
  overflow: visible;
  box-shadow: 0px 0px 10px -5px #000000;
  background-color: #ffffff;
  border-radius: 30px;
}

#spinner{
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>