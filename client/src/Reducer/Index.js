import authReducer from "./auth";
import {combineReducers} from "redux";
import currentuserreducer from "./currentuser";
import chanelreducer from "./chanel";

 const Reducers = combineReducers({
    authReducer, 
    currentuserreducer,
    chanelreducer
});

export default Reducers;