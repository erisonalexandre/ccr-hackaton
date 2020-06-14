export function userState (state, user) {
    state.user = Object.assign(state.user, user)
}

export function userSessionState (state, userSession) {
    state.userSession = userSession
}

export function isloggedState (state, isLogged) {
    state.islogged = isLogged
}
