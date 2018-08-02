const loginReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.login
        default:
            return state;
    }
}
export default loginReducer