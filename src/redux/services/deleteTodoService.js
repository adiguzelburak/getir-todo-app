import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const deleteTodoServices = (todoId) => {
  const deleteRed = doc(db, "todos", todoId);
  deleteDoc(deleteRed);
};
export default deleteTodoServices;
