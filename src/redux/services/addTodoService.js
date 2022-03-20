import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

const addTodoServices = (data) => {
  const todosCollectionAddRef = collection(db, "todos");
  return addDoc(todosCollectionAddRef, {
    name: data.todoName,
    isCompleted: "In Completed",
    userName: data.userName,
  });
};
export default addTodoServices;
