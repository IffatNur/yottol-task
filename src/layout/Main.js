import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Main;