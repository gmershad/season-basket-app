import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';

import logo from "../../assets/images/logo2.jpg"
import { Link } from 'react-router-dom';
import Notification from "../Notificaiton";

const Header = (props) => {
    const [showNotification, setShowNotification] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const prevCartSize = usePrevious(cartItems.length);
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    useEffect(() => {
        if (cartItems.length > prevCartSize) {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        }
    }, [cartItems, prevCartSize]);

    useEffect(() => {
        const resetNotification = setTimeout(() => {
            setShowNotification(false);
        }, 2000);

        return () => clearTimeout(resetNotification);
    }, [showNotification]);

    return (
        <>
            {showNotification && <Notification message="Item added to cart!" />}

            <div class="row py-3">
                <div class="col-sm-4 col-lg-3 text-center text-sm-start">
                    <div class="main-logo">
                        <Link to={`/`} >
                            <a href="">
                                <img src={logo} alt="logo" className="img-fluid" />
                            </a>
                        </Link>
                    </div>
                </div>
                {/* <div className="col-md-3 py-0">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Wellness
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                                            <li>
                                                <Link to={`/nutrition`} style={{ textDecoration: 'none' }}>
                                                    <a class="dropdown-item" href="#">Nutrition Calculator</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={`/diseasenutrition`} style={{ textDecoration: 'none' }}>
                                                    <a class="dropdown-item" href="#">Disease Nutrition</a>
                                                </Link>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Mental Health </a></li>
                                            <li>
                                                <Link to={`/ayurfood`} style={{ textDecoration: 'none' }}>
                                                    <a class="dropdown-item" href="#">Ayurvedic Food</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={`/toxin`} style={{ textDecoration: 'none' }}>
                                                    <a class="dropdown-item" href="#">Toxins & Antinutrients Foods</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Disease
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                                            <li><a class="dropdown-item" href="#">Diabetes</a></li>
                                            <li>
                                                <Link to={`/uricacid`} style={{ textDecoration: 'none' }}>
                                                    <a class="dropdown-item" href="#">Uric Acid</a>
                                                </Link>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Cholestrol </a></li>
                                            <li><a class="dropdown-item" href="#">Osteoporosis </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div> */}
                <div className="col-md-2 py-2">
                    <select class="form-select">
                        <option>All Categories</option>
                        {/* <option>Groceries</option>
                        <option>Drinks</option>
                        <option>Chocolates</option> */}
                    </select>
                </div>
                <div className="col-md-2 py-2">
                    <form id="search-form" className="text-center" action="" method="">
                        <input type="text" className="form-control border-0 bg-transparent"
                            placeholder="Search for products" />
                    </form>
                </div>
                <div className="col-auto py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24"><path fill="currentColor"
                            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
                </div>
                <div className="col py-2">
                    <ul className="d-flex justify-content-end list-unstyled m-0">
                        <li>
                            <a href="#" className="rounded-circle bg-light p-2 mx-1">
                                <i className="fa fa-user" data-feather="log-in"></i>
                            </a>
                        </li>
                        <li>
                            <Link to={`/wish`} style={{ textDecoration: 'none' }}>
                                <a href="#" className="rounded-circle bg-light p-2 mx-1">
                                    <i className="fa fa-heart" data-feather="log-in"></i>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="rounded-circle bg-light p-2 mx-1"
                                style={{ position: 'relative' }}>
                                <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                                    <i className="fa fa-shopping-bag" aria-hidden="true">
                                        {
                                            cartItems && cartItems.length > 0 && (
                                                <span className="cart-item-count">{cartItems.length}</span>
                                            )
                                        }
                                    </i>
                                </Link>
                            </a>
                        </li>
                        <li className="d-lg-none">
                            <a href="#" className="rounded-circle bg-light p-2 mx-1"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart"
                                aria-controls="offcanvasCart">
                                <i className="fa fa-shopping-bag" data-feather="log-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Header;
