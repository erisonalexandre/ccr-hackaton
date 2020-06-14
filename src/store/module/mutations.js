export function userState (state, user) {
    state.user = Object.assign(state.user, user)
}

export function userSessionState (state, userSession) {
    state.userSession = userSession
}

export function isLoggedState (state, isLogged) {
    state.isLogged = isLogged
}

export function tripsUserState (state, trips) {
    state.user.trips = trips
}
