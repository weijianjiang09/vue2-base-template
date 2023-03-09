import Cookies from 'js-cookie'

export function setToken(key, token) {
    Cookies.set(key, token, { expires: 7 })
}

export function getToken(key) {
    return Cookies.get(key)
}

export function removeToken(key) {
    Cookies.remove(key)
}
