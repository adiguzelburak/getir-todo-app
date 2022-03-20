import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const updateTodoNameServices = (todoId, data) => {
  console.log(todoId, data);
  const updateRef = doc(db, "todos", todoId);
  updateDoc(updateRef, { name: data });
};
export default updateTodoNameServices;
