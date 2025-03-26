import * as api from '../Api';
import { setCurreentUser } from './currentuser';

export const login = (authdata) => async(dispatch) => {
    console.log("this is the authdata", authdata)
    try{ 
        const {data} = await api.login(authdata)
        console.log("the data is :", data);
        dispatch({type: "AUTH", data})
    } catch(error){
        alert(error)
    }
}



