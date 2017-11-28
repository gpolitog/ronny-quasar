let isLoggedIn = false
let roles = []

export default {
  isLoggedIn () {
    // Convert to boolean
    return !!isLoggedIn
  },

  login (newRoles = []) {
    isLoggedIn = true
    roles = newRoles
  },

  logout () {
    isLoggedIn = false
    roles = []
  },

  hasRole (role) {
    return roles.indexOf(role) >= 0
  }
}
