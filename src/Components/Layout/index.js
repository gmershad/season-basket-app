import React, { Component } from "react";
import { Outlet, Routes, Route } from 'react-router-dom';
// import Sidebar from './Components/Sidebar';
import Header from "../Header";
import Footer from "../Footer";


const MainLayout = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <Header />
                    <Outlet />
                </div>
            </header>
            <Footer />
        </>
    );
};

export default MainLayout;

