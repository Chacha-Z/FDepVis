import { createStore} from "redux";
import reducers from "./reducers";

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers, 
    composeWithDevTools());
export default store;