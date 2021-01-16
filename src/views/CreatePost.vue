<template>
  <br />
  <br />
  <div>
    <div class="row container">
      <div id="fArea" class="col-md-12 sm-12 p-4 container">
        <h3 v-show="error" class="text-red">Error In Adding Form</h3>

        <form @submit.prevent="handleSubmit">
          <h3>Post</h3>
          <p>{{ message }}</p>
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              v-model="title"
              class="form-control"
              placeholder="Enter Title"
              required
            />
          </div>
          <br />
          <div class="form-group">
            <label>Body</label>

            <textarea
              v-model="body"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              required
            ></textarea>
          </div>
          <br />

          <div class="form-group">
            <label>Tags(Press Alt and key after One Tag)</label>
            <input
              v-model="tag"
              @keyup.alt="AddTags"
              type="text"
              class="form-control"
              placeholder="Enter Tags "
            />
          </div>
          <br />
          <div class="row">
            <div
              v-for="(tag, index) in tags"
              :key="tag"
              v-on:click="removetag(index)"
              align="center"
              id="tagCloud"
              class="col-md-1 col-sm-12 p-2 align-middle text-center m-2"
            >
              <p class="text-white">{{ tag }}</p>
            </div>
          </div>
          <br />
          <button id="postSubmit" type="submit" class="btn btn-primary btn-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { projectFirestore } from "../Firebase/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tags = ref([]);
    const tag = ref("");
    const message = ref(null);
    const error = ref(null);
    const router = useRouter();

    const AddTags = () => {
      console.log("With Space:" + tag.value);
      tag.value = tag.value.trim();
      tag.value = tag.value.replace(/\s/g, "");
      if (tag.value == "" || tag.value == " ") {
        console.log("in if loop");
        tag.value = "";

        return 1;
      }
      console.log("tag sapce Removed:" + tag.value);

      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
      }
      tag.value = "";

      // need to use .value to acess the value ...
    };

    const handleSubmit = async () => {
      console.log("tags:" + tags.value);

      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      try {
        const res = await projectFirestore.collection("posts").add(post);

        console.log("form Created");
        console.log(res.id);
        console.log(res);

        router.push({ name: "Home" });
      } catch (err) {
        // error.value = err.message;
        error.value = err;
        console.log("Error Occured");
      }

      title.value = "";
      body.value = "";
      tags.value = [];
    };

    // need to use .value to acess the value ...

    const removetag = (index) => {
      tags.value.splice(index, 1);

      // need to use .value to acess the value ...
    };

    return { title, body, tags, AddTags, handleSubmit, tag, removetag };
  },
};
</script>


<style scoped>
#postSubmit {
  border-radius: 50px;
}

#tagCloud {
  background-color: #33aaff;
  border-radius: 50px;
}

#fArea {
  /* width: 1501px; */
  /* height: 900px; */
  overflow: visible;
  box-shadow: 0px 1px 2px 0px #000000, 9px 2px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 31px;
}
</style>