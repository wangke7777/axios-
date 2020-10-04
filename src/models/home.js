// 请求测试页数据模型
import Http from "../utils/http";
export default class HomeModel extends Http {
  //未传 params时 默认为空
  getHomeData(params = null) {
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: "indexapi/index",
        params: params,
        success(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        }
      });
    });
  }
  // post需要传入data
  postUserInfo(data) {
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: "mineapi/getUserInfo",
        data: data,
        success(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        }
      });
    });
  }
}
