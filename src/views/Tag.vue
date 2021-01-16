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
        <div v-show="IsNotLoaded" align="center">
          <div class="d-flex justify-content-center">
            <div><spinner /></div>
          </div>
        </div>

        <PostsList :posts="postsWithTag" />
      </div>

      <div class="col-md-1 col-sm-0"></div>

      <div class="col-md-3 co-sm-0">
        <div v-show="IsNotLoaded" align="center">
          <div><spinner /></div>
        </div>
        <div v-if="!IsNotLoaded">
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
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: "Home",
  components: { PostsList, TagsList, Spinner },

  setup() {
    const route = useRoute()

    const { posts, load } = getPosts();
    const IsNotLoaded = ref(true);

    async function asyncCall() {
      await load();
      IsNotLoaded.value = false;
    }

    asyncCall();
 const postsWithTag = computed(() => {
      return posts.value.filter(p => p.tags.includes(route.params.tag))
    })

    return { posts, IsNotLoaded,postsWithTag };
  },
};
</script>

<style scoped>
#alltags {
  overflow: visible;
  box-shadow: 0px 0px 10px -5px #000000;
  background-color: #ffffff;
  border-radius: 30px;
}
</style>