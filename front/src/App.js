import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from './login/Login'

import { Register } from "./login/Register";
import { AuthProvider } from "./context/authContext";
import './index.css'
import Home from "./pages/Home";
import { ProtectedRoute } from "./login/ProtectedRoute";

function App() {
  return (

    <div className=" bg-slate-200">

      <Router>
        <AuthProvider>
          <Header />
          <Routes>

            <Route path="/login" element={< Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <ProtectedRoute>
                < Home />
              </ProtectedRoute>} />
            <Route path="/create" element={< CreateProduct />} />
            <Route path='/edit/:id' element={<EditProduct />} />
          </Routes>
        </AuthProvider>
      </Router>
      <Footer />

    </div>

  );
}

export default App;
