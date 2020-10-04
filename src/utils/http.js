// 封装axios请求
import axios from "axios";
import qs from "qs";
// 引入baseurl
import { URL } from "@/configs/config";
// 默认导出Http类
export default class Http {
  // get方法 必须传入url 和 可选的params对象
  axiosGet(options) {
    axios({
      url: options.url,
      method: "get",
      baseURL: URL.BASE_URL,
      //不带参数使用get请求 params为空
      params: options.params
    })
      .then(res => {
        // resolve 调用success传入响应
        options.success(res);
      })
      .catch(err => {
        // reject 调用error 传入err
        options.error(err);
      });
  }
  //post方法 options对象 需要url,data,success()和error()
  axiosPost(options) {
    axios({
      url: options.url,
      baseURL: URL.BASE_URL,
      method: "post",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: qs.stringify({
        ...options.data
        //可以在此处加入一些固定不变的参数
      })
    })
      //resolve的回调
      .then(res => {
        options.success(res);
      })
      .catch(err => {
        options.error(err);
      });
  }
}
