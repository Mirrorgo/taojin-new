import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  //https://qcnxpt.api.cloudendpoint.cn/helloworld
  const [testApi, setTestApi] = useState("");
  useEffect(() => {
    axios
      .get("https://qcnxpt.api.cloudendpoint.cn/helloworld")
      .then((re) => setTestApi(re.data.test));

    axios
      .post("https://qcnxpt.api.cloudendpoint.cn/helloworld", {
        hello: "post测试啊",
      })
      .then((re) => console.log(re, "post本地"));
  }, []);

  return (
    <div>
      popup
      <h1>popup</h1>
      <div>{testApi}</div>
    </div>
  );
}

export default App;
