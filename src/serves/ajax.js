import axios from 'axios'

export const ajax = (url, param = {}, type = 'get') => {
    let promise;
    return new Promise((resolve, reject) => {
        /*  get请求  */
        if (type.toUpperCase() === 'GET') {
            let str = '';
            for (let item in Object.keys(param)) {
                str += item + '=' + param[item] + '&';
            }
            url += str.substring(0, str.lastIndexOf('&'));
            promise = axios.get(url);
        } else if (type.toUpperCase() === 'POST') {
            promise = axios.post(url, param);
        }
        promise.then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        })
    })
}
