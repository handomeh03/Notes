import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import Layout from "./Componnet/Layout";
import Home from "./page/Home";
import BeginPage from "./Componnet/BeginPage";
import { UseBegin } from "./hooks/UseLoadingBegin";
import { useSaveUser } from "./Context/userContext";
import Signup from "./page/Signup";

function App() {
  let { user } = useSaveUser();

  let { flag } = UseBegin();
  if (flag) {
    return <BeginPage />;
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          {" "}
          {/* to ignore header from the error page  */}
          <Route index element={user ? <Home /> : <Navigate to="/login" />} />
        </Route>

        <Route path="*" element={<h2>Error: Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
