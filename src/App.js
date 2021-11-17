import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import PetList from './components/PetList';

function App() {
  const [auth, setAuth] = useState(null);
  const [screen, setScreen] = useState('/login');

  function onNavigate(evt, href) {
    evt.preventDefault();
    setScreen(href);
  }

  function onLogin(auth) {
    setAuth(auth);
    setScreen('/pet/list');
    showSuccess('Logged in!');
  }

  function onLogout() {
    setAuth(null);
    setScreen('/login');
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
      <Navbar
        auth={auth}
        screen={screen}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />
      <div className="flex-grow-1">
        <ToastContainer />
        <main className="container my-5">
          {screen === '/login' && (
            <LoginForm onLogin={onLogin} showError={showError} />
          )}
          {screen === '/pet/list' && (
            <PetList auth={auth} showError={showError} />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
