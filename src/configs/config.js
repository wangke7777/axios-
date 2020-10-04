// axios baseurl 根据环境的判断baseURL 可以结合devServer下的proxy进行修改
const URL = {
  BASE_URL:
    process.env.NODE_ENV === "production" ? "/" : "https://m.baletu.com/"
};
export { URL };
