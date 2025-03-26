const authReducer = (state={data:null}, actions) => {
    console.log("actions:", actions);
    
    switch(actions.type){
        case "AUTH":
        localStorage.setItem("profile", JSON.stringify({...actions?.data}))
        console.log("state is: ", state);
        return {...state, data:actions?.data}

        default:
            return state;
    } 
}

export default authReducer;