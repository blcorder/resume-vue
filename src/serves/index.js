import {ajax} from './ajax'
// const BASE_URL = 'http://47.95.216.237';
const BASE_URL = 'http://127.0.1:3000';

// 1.0 获取所有日程
export const getAllMsg = ()=> ajax(BASE_URL +'/getAllMsg');

// 2.0 添加日程
export const addItem = (json)=> ajax(BASE_URL+'/addMsg',json);

// 3.0 删除已经完成的任务
export const removeAllDone = ()=> ajax(BASE_URL+'/remove');

// 4.0 更新状态操作
export const updateState = (json)=>ajax(BASE_URL+'/update',json);

