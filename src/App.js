import { useState } from 'react';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import PetList from './components/PetList';
// import Home from './components/Home';
import NotFound from './components/NotFound';
import PetEditor from './components/PetEditor';

function App() {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  // const [screen, setScreen] = useState('/login');

  // function onNavigate(evt, href) {
  //   evt.preventDefault();
  //   setScreen(href);
  // }

  function onLogin(auth) {
    setAuth(auth);
    navigate('/pet/list');
    showSuccess('Logged in!');
  }

  function onLogout() {
    setAuth(null);
    navigate('/login');
    showSuccess('Logged out!');
  }

  function showError(message) {
    toast(message, { type: 'error', position: 'top-right' });
  }

  function showSuccess(message) {
    toast(message, { type: 'success', position: 'top-right' });
  }

  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Navbar auth={auth} onLogout={onLogout} />
      <div className="flex-grow-1">
        <ToastContainer />
        <main className="container my-5">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="/login"
              element={<LoginForm onLogin={onLogin} showError={showError} />}
            />
            <Route
              path="/pet/list"
              element={<PetList auth={auth} showError={showError} />}
            />
            <Route
              path="/pet/:petId"
              element={<PetEditor auth={auth} showError={showError} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
