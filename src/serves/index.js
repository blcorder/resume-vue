import {ajax} from './ajax'
const BASE_URL = 'http://localhost:3000';

// 1.0 添加人员信息
export const addMsg = (url)=> ajax(BASE_URL +url);
