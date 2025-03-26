import * as api from "../Api";

export const fetchallchannel = () => async(dispatch) => {
    try{
        const {data} = await api.fetchallchannel()
        dispatch({type:"FETCH_CHANNELS",payload:data})
    }
    catch(error) {
        console.log(error);
    }
}

export const updatechaneldata = (id, updatedata) => async(dispatch) => {
    try{
        // console.log(`this is id and updated data:${id, updatedata}`);
        const {data} = await api.updatechaneldata(id, updatedata)
        dispatch({type:"UPDATE_DATA",payload:data})
    }
    catch(error) {
        console.log(error);
    }
}