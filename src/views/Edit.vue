<template>
  <br />
  <br />
  <div>
    <div class="row container">
      <div v-if="loading">
        <div id="spinner">
          <spinner />
        </div>
      </div>
      <div v-if="!loading">
        <div v-show="!isExist">
          <h1 class="test-danger" id="ErrorText">OOPS! Post Dont Exist.....</h1>
        </div>

        <div v-show="isExist">
          <form @submit.prevent="handleSubmit">
            <h3>Post</h3>

            <h1>{{ obj }}</h1>

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
            <button
              id="postSubmit"
              type="submit"
              class="btn btn-primary btn-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { projectFirestore } from "../Firebase/config";
import { useRoute } from "vue-router";
import getPost from "../Composables/getPost";
import isExistFun from "../Composables/doesExist";
import EditPost from "../Composables/EditPost";
import Spinner from "../components/Spinner";
import { useRouter } from "vue-router";

export default {
  components: { Spinner },
  setup() {
    const title = ref("");
    const body = ref("");
    const tags = ref([]);
    const tag = ref("");
    const message = ref(null);
    const loading = ref(null);
    const post = ref(null);
    const router = useRouter();

    const route = useRoute();

    const { check, isExist, obj } = isExistFun("posts", route.params.id);

    async function asyncCall() {
      loading.value = true;
      await check();
      loading.value = false;
      body.value = obj.value.body;
      title.value = obj.value.title;

      tags.value = obj.value.tags;
    }

    asyncCall();

    if (obj == null) {
      return {
        isExist,
        loading,
      };
    }

    if (obj != null) {
      const handleSubmit = async () => {
        const post = {
          body: body.value,
          title: title.value,
          tags: tags.value,
        };

        console.log("Submit :");
        console.log(post.title);

        console.log(post);

        const { isUpdated, error, Edit } = EditPost(route.params.id, post);

        async function asyncCall1() {
          await Edit();
        }
        asyncCall1();

        if (isUpdated) {
          console.log("Done!!!!");
        router.push({ name: "Home" });

        }
      };

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

        // .value in variable to use
      };

      const removetag = (index) => {
        tags.value.splice(index, 1);

        // need to use .value to acess the value ...
      };
      return {
        title,
        body,
        tags,
        AddTags,
        handleSubmit,
        tag,
        removetag,
        isExist,
        loading,
        obj,
      };
    }
  },
};
</script>


<style scoped>
#postSubmit {
  border-radius: 50px;
}

#spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
#ErrorText {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>