import { boot } from "quasar/wrappers";
import axios from "axios";
import JSONbig from "json-bigint";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

// 转成非科学计数法的数字
function transferToNumber(inputNumber) {
  if (isNaN(inputNumber)) {
    return inputNumber;
  }
  inputNumber = "" + inputNumber;
  inputNumber = parseFloat(inputNumber);
  let eformat = inputNumber.toExponential(); // 转换为标准的科学计数法形式（字符串）
  let pos = eformat.indexOf("e");
  let baseValue = eformat.substr(0, pos);
  let power = eformat.substr(pos + 1);
  let bitNumber = 0;
  pos = baseValue.indexOf(".");
  if (pos === -1) {
    bitNumber = 0 - power;
  } else {
    let float = baseValue.substr(pos + 1);
    bitNumber = float.length - power;
  }
  let number = inputNumber.toFixed(Math.max(0, bitNumber));
  return number;
}

const api = axios.create({
  // baseURL: "http://localhost:9001",
  baseURL: "https://novel.pangyu.net",
  // cors
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  },
  // timeout: 50000,
  transformResponse: [
    function (data) {
      try {
        // 转换响应数据
        const parsedData = JSONbig.parse(data, (key, value) => {
          if (typeof value === "number") {
            return transferToNumber(value);
          }
          return value;
        });
        return parsedData;
      } catch (err) {
        console.log(err);
        //转换失败就直接按原数据返回
        return data;
      }
    },
  ],
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
