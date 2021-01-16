<template>
  <div class="col-md-3 col-sm-0 p-3">
    <div id="alltags" class="p-3">
      <h2 class="text-center">Tags</h2>

      <div class="row">
        <div v-for="tag in tags" :key="tag" class="col-4 p-2">

            <router-link :to="{ name: 'Tag', params: { tag }}">
          <span class="text-center p-2 text-white" id="tagEle">#{{ tag }}</span>

            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { projectFirestore } from "../Firebase/config";
import useTags from "../Composables/useTags";
export default {
  name: "Home",
  components: {},
  setup(props) {
    const { tags } = useTags(props.posts);
    console.log("tags Are Here");
    console.log(tags);
    // const { tags } = useTags(props.posts)
    return { tags };
  },
  props: ["posts"],
};
</script>




<style>
#tagEle {
  border-radius: 20px;
  background-color: #4e5152;
}
</style>