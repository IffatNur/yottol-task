import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 8fr'}}>
          <div>
            <Sidebar></Sidebar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Main;