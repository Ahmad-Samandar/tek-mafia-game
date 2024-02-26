
import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import App from './layout/App';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Error400 from './components/Error Pages/400';
import ErrorPages from './layout/ErrorPages';
import Firebaselayout from './layout/Firebase/Firebaseauthentication/firebaselayout';
import Login from './layout/Firebase/Firebaseauthentication/login'
import Signup from './layout/Firebase/Firebaseauthentication/signup'


const container : HTMLElement | null = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Fragment>
    <BrowserRouter>
      <Routes> 

          {/* Authentication  */}
          <Route path={`${import.meta.env.BASE_URL}/`} element={<Firebaselayout />}>
          <Route index element={<Login />} />
            <Route  path={`${import.meta.env.BASE_URL}Firebase/Firebaseauthentication/login`} element={<Login />} />
            <Route path={`${import.meta.env.BASE_URL}Firebase/Firebaseauthentication/signup`} element={<Signup />} />
          </Route>

        {/* Main Route */}

        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path={`${import.meta.env.BASE_URL}dashboard`} element={<Dashboard />} />
        
          
        </Route>
  {/* ErrorPages */}
  <Route path={`${import.meta.env.BASE_URL}`} element={<ErrorPages />}>
            <Route path={`${import.meta.env.BASE_URL}errorpages/error400`} element={<Error400 />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </Fragment>

);
