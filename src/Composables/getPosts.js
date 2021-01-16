
import { ref } from "vue";
import { projectFirestore } from "../Firebase/config";

const getPosts = () => {
 
  const posts = ref([]);
  const error = ref(null);
 
  const load = async () => {
    try {
      const res = await projectFirestore.collection("posts").get();
      console.log("From get Posts")
     console.log(res.docs);
      // .get() grabs all the data  from the posts refrence
  
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
  
      
      });
    
    } catch (err) {
      console.log("error Occured")
      
    }
  };


  return { posts,load };
};
 

export default getPosts;
