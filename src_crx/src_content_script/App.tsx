import { Fragment } from "react";
import styled from "styled-components";

const ContentScript = styled.article`
  all: initial; //所有样式重置为初始的,防止被页面本身的css篡改
  position: fixed;
  box-sizing: border-box;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: #f7f7f7;
  border: solid #d2d2d2;
  border-width: 0 0 0 0.1px;
  z-index: 2147483647;
  padding: 15px;
`;
function App() {
  return (
    <ContentScript>
      试试效果
      <Fragment>
        <div>wow</div>
        <div>wow</div>
        <div>wow</div>
        <div>wow</div>
        <div>wow</div>
        <div>wow</div>
      </Fragment>
    </ContentScript>
  );
}

export default App;
