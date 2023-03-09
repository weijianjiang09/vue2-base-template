import { request } from '../utils/request'

export function getCaptcha() {
    return request({
        url: '/captchaImage',
        method: 'get',
        headers: { isToken: false }
    })
}
