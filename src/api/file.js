import { request } from '../utils/request'

/**
 * 文件上传
 * @param data
 * @returns {AxiosPromise}
 */
export function uploadFile(data) {
    return request({
        url: '/common/upload',
        method: 'post',
        data
    })
}
