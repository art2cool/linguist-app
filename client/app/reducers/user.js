function userState (state = {}, action) {
    switch (action.type) {
        case "LOGIN_REQUEST":
            // TODO
            return {}

        default:
            return state
    }
}
export default userState;
