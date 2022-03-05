import Login from "@/src_crx/src_options/pages/Login";
import { Button } from "antd";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>一个导航页,开发专用</h1>
      <ul>
        <li>
          <a href="/src_crx/popup.html">popup</a>
        </li>
        <li>
          <a href="/src_crx/options.html">options</a>
        </li>
        <hr />
        <li>
          <a href="/src_crx/src_content_script/dev_index.html">
            content-script
          </a>
        </li>
      </ul>
      <br />
      <h1>组件测试区</h1>
      <Button>按钮</Button>
      <br />
      <h1>路由测试区</h1>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
