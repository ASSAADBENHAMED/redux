import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reduce";

const middleware =[];
if (Process.env.NODE_ENV==="development"){

    middleware.push(logger);
}

const store =createStore(rootReducer,applyMiddleware(...middleware));
export default store;