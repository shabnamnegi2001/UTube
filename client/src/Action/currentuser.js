export const setCurrentUser = (data) => {
    console.log("this is the current user:", data)
    return {
        type: "FETCH_CURRENT_USER",
        payload: data
    }
}









