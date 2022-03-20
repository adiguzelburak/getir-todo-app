import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const updateTodoStatusServices = (todoId, data) => {
  console.log("reducer: ", todoId, data);
  const updateRefStatus = doc(db, "todos", todoId);
  updateDoc(updateRefStatus, {
    isCompleted: data === "Completed" ? "In Completed" : "Completed",
  });
};
export default updateTodoStatusServices;
