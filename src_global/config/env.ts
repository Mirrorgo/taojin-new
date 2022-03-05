// export const argv = {
//   development: {
//     cdn: "./",
//     apiBaseUrl: "/api", // 开发环境接口请求，后用于 proxy 代理配置
//   },
//   beta: {
//     cdn: "//s.xxx.com/vite-react-app/beta", // 测试环境 cdn 路径
//     apiBaseUrl: "//www.beta.xxx.com/v1", // 测试环境接口地址
//   },
//   release: {
//     cdn: "//s.xxx.com/vite-react-app/release", // 正式环境 cdn 路径
//     apiBaseUrl: "//www.xxx.com/v1", // 正式环境接口地址
//   },
// };
export { argv };
type ObjOrFalse = object | false;
const argv: ObjOrFalse = iniArgvByMode(import.meta.env.MODE);
function iniArgvByMode(mode: string): ObjOrFalse {
  switch (mode) {
    case "development":
      return {
        cdn: "./",
        apiBaseUrl: "/api", // 开发环境接口请求，后用于 proxy 代理配置
      };
    case "beta":
      return {
        cdn: "//s.xxx.com/vite-react-app/beta", // 测试环境 cdn 路径
        apiBaseUrl: "//www.beta.xxx.com/v1", // 测试环境接口地址
      };
    case "release":
      return {
        cdn: "//s.xxx.com/vite-react-app/release", // 正式环境 cdn 路径
        apiBaseUrl: "//www.xxx.com/v1", // 正式环境接口地址
      };
    default:
      return false;
  }
}
//https://qcnxpt.api.cloudendpoint.cn/helloworld
