import { useEffect, useState } from "react";
import axios from "axios";
import { argv } from "config/env";
function App() {
  //https://qcnxpt.api.cloudendpoint.cn/helloworld
  const [testApi, setTestApi] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://qcnxpt.api.cloudendpoint.cn/helloworld")
  //     .then((re) => setTestApi(re.data.test));

  //   axios
  //     .post("https://qcnxpt.api.cloudendpoint.cn/helloworld", {
  //       hello: "post测试啊",
  //     })
  //     .then((re) => console.log(re, "post本地"));
  // }, []);
  useEffect(() => {
    console.log(argv);
  }, []);
  return (
    <div>
      popup
      <h1>popup</h1>
      <div>{testApi}</div>
      {/* <h2>{argv}</h2> */}
    </div>
  );
}

export default App;
