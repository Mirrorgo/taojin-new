function App() {
  const handleClick = () => {
    // chrome.notifications.create(null, {
    //   iconUrl: "",
    //   type: "basic",
    //   title: "标题",
    //   message: "测试消息",
    // });
    console.log("owo");
  };
  return (
    <div>
      wpw
      <button onClick={handleClick}>试试按钮</button>
    </div>
  );
}

export default App;
