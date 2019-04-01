/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

import {postRequest, getRequest, loginRequest} from "../utils/request";

// const BASE_URL = 'http://localhost:4000'
const BASE_URL = 'http://192.168.1.4:8001'

// 1、用户名密码登陆
export const reqPwdLogin = ({phone, password}) => ajax(BASE_URL+'/login', {phone, password}, 'POST')
// 2、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})
// 3、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
// 4、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// 5、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')

//用户密码登录
export function login(phone, password){
  return loginRequest("/login",{phone, password})
}

//查询报告列表
export function getReportList(phone){
  return postRequest("/report/list", phone);
}

//查询报告详情(studyAccnumber)
export const getReportDetail = (studyAccnumber) =>{
  return getRequest("/report/detail/" + studyAccnumber)
}



// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})




