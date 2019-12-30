import axios from 'axios'

export const ajax = (url, param = {}, type = 'get') => {
    let promise;
    return new Promise((resolve, reject) => {
        /*  get请求  */
        if (type.toUpperCase() === 'GET') {
            let jsonArr = Object.keys(param);
            let str = '';
            for (let item in jsonArr) {
                str += jsonArr[item] + '=' + param[jsonArr[item]] + '&'
            }
            url += '?' + str.substring(0, str.lastIndexOf('&'));
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
};
