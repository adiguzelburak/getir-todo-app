import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const fetchTodosServices = () => {
  const todosRef = collection(db, "todos");
  return getDocs(todosRef);
};
export default fetchTodosServices;
