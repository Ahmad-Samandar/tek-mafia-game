import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import BacktoTop from './BackToTop/BackToTop';


const ErrorPages = () => {
document.querySelector("body")?.classList.remove("layout-boxed");
  return (
    <Fragment>
      <div className='page'>
        <div className='page-main'>
          <div className='main-content mt-0' onClick={()=>ErrorPages()}>
            <Outlet />
          </div>
        </div>
        <BacktoTop />
      </div>
    </Fragment>
  )
}
export default ErrorPages;