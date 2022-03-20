import "./App.css";
import store from "../src/redux";
import TodoPage from "./pages/TodoPage";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoPage />
      </div>
    </Provider>
  );
}

export default App;
