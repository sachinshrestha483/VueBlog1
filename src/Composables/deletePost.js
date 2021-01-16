import { ref } from "vue";
import { projectFirestore } from "../Firebase/config";

const Delete = (id) => {
  const deleteFun = async () => {
    try {
      const res = await projectFirestore
        .collection("posts")
        .doc(id)
        .delete()
        .finally(console.log("Delete done"));

      console.log(res);

      if (!res.exists) {
        isExist.value = false;
        throw Error("That post does not exist");
      } else {
        isExist.value = true;
      }
    } catch (err) {
      
      console.log("Error Occured");
    }
  };

  return { deleteFun };
};

export default Delete;
