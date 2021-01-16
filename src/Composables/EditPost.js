import { ref } from "vue";
import { projectFirestore } from "../Firebase/config";

const EditPost = (id, updatedPostData) => {
  const error = ref(null);
  const isUpdated = ref(false);

  const Edit = async () => {
    try {
      let res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();

      if (!res.exists) {
        throw Error("That post does not exist");
      }

      console.log("Updated Post Data");
      console.log(updatedPostData);

      const post = {
        body: updatedPostData.body,
        title: updatedPostData.title,
        id: id,
        tags: updatedPostData.tags,
      };

      console.log("from theEdit Post");

      const res1 = await projectFirestore
        .collection("posts")
        .doc(id)
        .update(post)
        .catch(() => {
          throw Error("Error in Updating The Post");
        });

      console.log("this is From The Edit .............");
    } catch (err) {
      error.value = err.message;
      console.log("problem is here" + err);
    }

    if (error.value == null) {
      isUpdated.value = true;
    }
  };

  return { isUpdated, error, Edit };
};

export default EditPost;
