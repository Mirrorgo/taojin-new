import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      wpw
      <Link to="/about">go about</Link>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}
function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

export default App;
