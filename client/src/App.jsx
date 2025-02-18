import İndex from "./Pages/İndex";
import Modal from "./Pages/Modal";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import UserModal from "./Pages/UserModal";
import PrivateRoute from "./PrivateRoute";
import About from "./Pages/About";
import Youtube from "./Pages/Youtube";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetail from "./Pages/PortfolioDetail";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import Communication from "./Pages/Communication";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<İndex />} />
          <Route path="/Modal" element={<Modal />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Communication" element={<Communication />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/BlogDetail/:id"
            element={
              <PrivateRoute>
                <BlogDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/PortfolioDetail/:id"
            element={
              <PrivateRoute>
                <PortfolioDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/UserModal"
            element={
              <PrivateRoute>
                <UserModal />
              </PrivateRoute>
            }
          />
          <Route
            path="/Youtube"
            element={
              <PrivateRoute>
                <Youtube />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
