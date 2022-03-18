import { combineReduce } from "redux";

import taskReduce from "./reduce";

const rootReduce =combineReduce({
    tasks:taskReduce,
});
export default rootReduce;