import React from 'react';
import { Routes, Route } from 'react-router-dom';


// omponents
import Login from './components/Login';
import Chats from './components/Chats';

// Context
import AuthContextProvider from './context/AuthContextProvider';

const App = () => {
  return (
    <div className='App'>
      <AuthContextProvider>
        <Routes>
          <Route path='/chats' element={<Chats/>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;